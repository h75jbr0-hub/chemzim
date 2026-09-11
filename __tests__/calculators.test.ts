import { describe, test, expect } from 'vitest';

describe('Scientific Calculator Shift, Alpha & Replay Features', () => {
    const fact = (n: number): number => {
        if (n < 0 || !Number.isInteger(n)) return NaN;
        if (n === 0 || n === 1) return 1;
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        return res;
    };

    const nPr = (n: number, r: number): number => fact(n) / fact(n - r);
    const nCr = (n: number, r: number): number => fact(n) / (fact(r) * fact(n - r));

    const parseFactorials = (expr: string): string => {
        let parsed = expr;
        while (parsed.includes('!')) {
            const index = parsed.indexOf('!');
            if (parsed[index - 1] === ')') {
                let depth = 1;
                let i = index - 2;
                while (i >= 0 && depth > 0) {
                    if (parsed[i] === ')') depth++;
                    if (parsed[i] === '(') depth--;
                    i--;
                }
                const start = i + 1;
                const subExpr = parsed.substring(start, index);
                parsed = parsed.substring(0, start) + `fact${subExpr}` + parsed.substring(index + 1);
            } else {
                let i = index - 1;
                while (i >= 0 && /[0-9\.]/.test(parsed[i])) {
                    i--;
                }
                if (i >= 2 && parsed.substring(i - 2, i + 1) === 'Ans') {
                    i -= 3;
                } else if (i >= 0 && (parsed[i] === 'e' || parsed[i] === 'π' || parsed[i] === 'p')) {
                    i--;
                }
                const start = i + 1;
                const subExpr = parsed.substring(start, index);
                parsed = parsed.substring(0, start) + `fact(${subExpr})` + parsed.substring(index + 1);
            }
        }
        return parsed;
    };

    const evaluateExpression = (expr: string, isDeg = true, result: string | null = null): string => {
        try {
            if (!expr) return '0';

            let target = parseFactorials(expr);

            target = target.replace(/(\d+(\.\d+)?)\s*nPr\s*(\d+(\.\d+)?)/gi, 'nPr($1,$3)');
            target = target.replace(/(\d+(\.\d+)?)\s*nCr\s*(\d+(\.\d+)?)/gi, 'nCr($1,$3)');

            target = target.replace(/(\d+)\(/g, '$1*(');
            target = target.replace(/\)(\d+|\()/g, ')*$1');
            target = target.replace(/(\d+)(pi|π|e|sin|cos|tan|log|ln|sqrt|cbrt|asin|acos|atan|abs|Ans)/gi, '$1*$2');
            target = target.replace(/\)(pi|π|e|sin|cos|tan|log|ln|sqrt|cbrt|asin|acos|atan|abs|Ans)/gi, ')*$1');

            target = target
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/−/g, '-')
                .replace(/Ans/g, result || '0')
                .replace(/\^/g, '**');

            target = target.replace(/(^|[\+\-\*\/\(])\-(\d+(\.\d+)?)\*\*(\d+(\.\d+)?)/g, '$1(-$2)**$4');

            const scope = {
                ...Math,
                fact,
                nPr,
                nCr,
                log: Math.log10,
                ln: Math.log,
                sqrt: Math.sqrt,
                cbrt: Math.cbrt,
                abs: Math.abs,
                sin: (x: number) => isDeg ? Math.sin(x * Math.PI / 180) : Math.sin(x),
                cos: (x: number) => isDeg ? Math.cos(x * Math.PI / 180) : Math.cos(x),
                tan: (x: number) => isDeg ? Math.tan(x * Math.PI / 180) : Math.tan(x),
                asin: (x: number) => isDeg ? Math.asin(x) * 180 / Math.PI : Math.asin(x),
                acos: (x: number) => isDeg ? Math.acos(x) * 180 / Math.PI : Math.acos(x),
                atan: (x: number) => isDeg ? Math.atan(x) * 180 / Math.PI : Math.atan(x),
                pi: Math.PI,
                π: Math.PI,
                e: Math.E,
            };

            const func = new Function('math', 'with(math) { return ' + target + ' }');
            const res = func(scope);
            if (isNaN(res) || !isFinite(res)) return 'Error';
            return String(parseFloat(res.toPrecision(10)));
        } catch (e) {
            return 'Error';
        }
    };

    test('SHIFT + sin, cos, tan (asin, acos, atan)', () => {
        expect(evaluateExpression('asin(1)', true)).toBe('90');
        expect(evaluateExpression('acos(1)', true)).toBe('0');
        expect(evaluateExpression('atan(1)', true)).toBe('45');
    });

    test('SHIFT + x⁻¹ (x!) and SHIFT + sqrt (cbrt)', () => {
        expect(evaluateExpression('6!')).toBe('720');
        expect(evaluateExpression('cbrt(125)')).toBe('5');
    });

    test('SHIFT + log (10^) and SHIFT + ln (e^)', () => {
        expect(evaluateExpression('10^3')).toBe('1000');
        expect(evaluateExpression('e^1')).toBe(String(parseFloat(Math.E.toPrecision(10))));
    });

    test('SHIFT + × (nPr) and SHIFT + ÷ (nCr)', () => {
        expect(evaluateExpression('6nPr3')).toBe('120');
        expect(evaluateExpression('6nCr3')).toBe('20');
    });

    test('SHIFT + ×10ˣ (π) and ALPHA + ×10ˣ (e)', () => {
        expect(parseFloat(evaluateExpression('π'))).toBeCloseTo(Math.PI, 5);
        expect(parseFloat(evaluateExpression('e'))).toBeCloseTo(Math.E, 5);
    });

    test('Ans Recall & Basic Operators', () => {
        expect(evaluateExpression('Ans*2', true, '15')).toBe('30');
    });
});
