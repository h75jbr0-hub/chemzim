'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

interface ScientificCalculatorProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ScientificCalculator({ isOpen, onClose }: ScientificCalculatorProps) {
    const [input, setInput] = useState('');
    const [displayLatex, setDisplayLatex] = useState('0');
    const [result, setResult] = useState<string | null>(null);
    const [isShift, setIsShift] = useState(false);
    const [isAlpha, setIsAlpha] = useState(false);
    const [isDeg, setIsDeg] = useState(true);
    const [isFractionMode, setIsFractionMode] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        const checkOrientation = () => {
            setIsLandscape(window.innerHeight < 550 && window.innerWidth > window.innerHeight);
        };
        checkOrientation();
        window.addEventListener('resize', checkOrientation);
        return () => window.removeEventListener('resize', checkOrientation);
    }, []);

    // --- Advanced Math Engine ---
    const fact = (n: number): number => {
        if (n < 0 || !Number.isInteger(n)) return NaN;
        if (n === 0 || n === 1) return 1;
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        return res;
    };

    const nPr = (n: number, r: number): number => fact(n) / fact(n - r);
    const nCr = (n: number, r: number): number => fact(n) / (fact(r) * fact(n - r));

    // Decimal to fraction approximation (continued fractions)
    const decimalToFraction = (val: number): string | null => {
        if (isNaN(val) || !isFinite(val)) return null;
        if (Number.isInteger(val)) return String(val);
        const tolerance = 1.0e-9;
        let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
        let b = val;
        do {
            const a = Math.floor(b);
            const aux = h1; h1 = a * h1 + h2; h2 = aux;
            const aux2 = k1; k1 = a * k1 + k2; k2 = aux2;
            b = 1 / (b - a);
        } while (Math.abs(val - h1 / k1) > val * tolerance);

        if (k1 === 1) return String(h1);
        if (k1 > 10000) return null; // Keep denominator reasonable
        return `${h1}/${k1}`;
    };

    // Robust factorial parser handling bracketed groups (e.g. (3+2)! -> fact(3+2))
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

    const evaluateExpression = (expr: string): string => {
        try {
            if (!expr) return '0';

            // 1. Process Factorials first
            let target = parseFactorials(expr);

            // 2. Transform nPr / nCr (e.g. 5nPr2 -> nPr(5,2), 5nCr2 -> nCr(5,2))
            target = target.replace(/(\d+(\.\d+)?)\s*nPr\s*(\d+(\.\d+)?)/gi, 'nPr($1,$3)');
            target = target.replace(/(\d+(\.\d+)?)\s*nCr\s*(\d+(\.\d+)?)/gi, 'nCr($1,$3)');

            // 3. Implicit multiplication conversion
            target = target.replace(/(\d+)\(/g, '$1*(');
            target = target.replace(/\)(\d+|\()/g, ')*$1');
            target = target.replace(/(\d+)(pi|π|e|sin|cos|tan|log|ln|sqrt|cbrt|asin|acos|atan|abs|Ans)/gi, '$1*$2');
            target = target.replace(/\)(pi|π|e|sin|cos|tan|log|ln|sqrt|cbrt|asin|acos|atan|abs|Ans)/gi, ')*$1');

            // 4. Replace display operators with JS operators
            target = target
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/−/g, '-')
                .replace(/Ans/g, result || '0')
                .replace(/\^/g, '**');

            // 5. Unary minus before exponentiation e.g. -2**2 -> (-2)**2
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

    useEffect(() => {
        if (!input) { setDisplayLatex('0'); return; }

        let latex = input
            .replace(/\*/g, ' \\times ')
            .replace(/\-/g, ' - ')
            .replace(/\+/g, ' + ')
            .replace(/pi/g, '\\pi ')
            .replace(/Ans/g, '\\text{Ans}')
            .replace(/asin\(/g, '\\sin^{-1}(')
            .replace(/acos\(/g, '\\cos^{-1}(')
            .replace(/atan\(/g, '\\tan^{-1}(')
            .replace(/sin\(/g, '\\sin(')
            .replace(/cos\(/g, '\\cos(')
            .replace(/tan\(/g, '\\tan(')
            .replace(/log\(/g, '\\log(')
            .replace(/ln\(/g, '\\ln(')
            .replace(/sqrt\(/g, '\\sqrt{')
            .replace(/cbrt\(/g, '\\sqrt[3]{')
            .replace(/abs\(/g, '\\text{abs}(')
            .replace(/\^2/g, '^2')
            .replace(/\^3/g, '^3')
            .replace(/\^/g, '^');

        // Render fractions correctly in KaTeX recursively
        let prevLatex = '';
        while (latex !== prevLatex) {
            prevLatex = latex;
            latex = latex.replace(/([0-9\.]+|\\pi|e|\\text\{Ans\}|\([^\(\)]*\)|\\sqrt\{[^\}]*\})\/([0-9\.]+|\\pi|e|\\text\{Ans\}|\([^\(\)]*\)|\\sqrt\{[^\}]*\})/g, '\\frac{$1}{$2}');
        }

        latex += '}'.repeat(Math.max(0, (latex.match(/{/g) || []).length - (latex.match(/}/g) || []).length));
        latex += ')'.repeat(Math.max(0, (latex.match(/\(/g) || []).length - (latex.match(/\)/g) || []).length));
        setDisplayLatex(latex);
    }, [input]);

    const handleKey = (key: string, shiftKey?: string, alphaKey?: string) => {
        let activeKey = key;
        if (isShift && shiftKey) activeKey = shiftKey;
        if (isAlpha && alphaKey) activeKey = alphaKey;

        // Reset fractional mode on key entries
        if (activeKey !== 'S<=>D') {
            setIsFractionMode(false);
        }

        if (activeKey === 'AC') {
            if (isShift) {
                onClose();
            } else {
                setInput('');
                setResult(null);
            }
        }
        else if (activeKey === 'DEL') {
            const funcsToClear = ['asin(', 'acos(', 'atan(', 'sin(', 'cos(', 'tan(', 'log(', 'ln(', 'sqrt(', 'cbrt(', 'abs(', 'Ans', '10^', 'e^'];
            let cleared = false;
            for (const f of funcsToClear) {
                if (input.endsWith(f)) {
                    setInput(prev => prev.slice(0, -f.length));
                    cleared = true;
                    break;
                }
            }
            if (!cleared) {
                setInput(prev => prev.length > 0 ? prev.slice(0, -1) : '');
            }
        }
        else if (activeKey === 'S<=>D') {
            if (result && result !== 'Error') {
                setIsFractionMode(prev => !prev);
            }
        }
        else if (activeKey === '=' || activeKey === 'CALC' || activeKey === 'SOLVE') {
            setResult(evaluateExpression(input));
        }
        else if (activeKey === 'CLR') {
            setInput('');
            setResult(null);
        }
        else if (activeKey === 'DRG' || activeKey === 'MODE') {
            setIsDeg(prev => !prev);
        }
        else {
            let toAdd = activeKey;
            if (toAdd === 'sin⁻¹') toAdd = 'asin(';
            else if (toAdd === 'cos⁻¹') toAdd = 'acos(';
            else if (toAdd === 'tan⁻¹') toAdd = 'atan(';
            else if (toAdd === 'Abs' || toAdd === 'hyp') toAdd = 'abs(';
            else if (toAdd === 'x!') toAdd = '!';
            else if (toAdd === '10^') toAdd = '10^';
            else if (toAdd === 'e^') toAdd = 'e^';
            else if (toAdd === 'pi') toAdd = 'π';
            
            // Ignore non-expression structural keys that have no function
            const ignoredKeys = ['∫dx', 'd/dx', ':', '←', 'RCL', 'STO', 'ENG', 'M+', 'M-', 'STAT', 'CMPLX', 'BASE', 'MATRIX', 'VECTOR', 'CONST', 'CONV'];
            if (ignoredKeys.includes(toAdd)) {
                setIsShift(false);
                setIsAlpha(false);
                return;
            }

            setInput(prev => (prev === '0' ? toAdd : prev + toAdd));
        }
        setIsShift(false);
        setIsAlpha(false);
    };

    const renderResult = () => {
        if (!result) return null;
        if (result === 'Error') return result;

        const numVal = parseFloat(result);
        if (isFractionMode && !isNaN(numVal)) {
            const frac = decimalToFraction(numVal);
            if (frac && frac.includes('/')) {
                const [num, den] = frac.split('/');
                return <InlineMath math={`\\frac{${num}}{${den}}`} />;
            }
        }
        return result;
    };

    // --- Components with Micro-Adjusted UI ---
    const SilverControl = ({ label, subLabel, subColor = "text-amber-500", active = false, onClick }: { label: string, subLabel: string, subColor?: string, active?: boolean, onClick: () => void }) => (
        <div className="flex flex-col items-center">
            <span className={`text-[6.5px] font-black uppercase mb-0.5 pointer-events-none ${subColor}`}>{subLabel}</span>
            <button onClick={onClick} className={`w-8 h-5.5 rounded-full ${active ? 'bg-amber-400 ring-2 ring-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.6)]' : 'bg-gradient-to-b from-[#f8fafc] via-[#cbd5e1] to-[#64748b]'} border border-[#475569] shadow-[0_2px_3px_rgba(0,0,0,0.5)] active:translate-y-px transition-all flex items-center justify-center`}>
                <span className={`text-[5.5px] ${active ? 'text-black' : 'text-slate-900'} font-black uppercase`}>{label}</span>
            </button>
        </div>
    );

    const SciButton = ({ label, shiftLabel, alphaLabel, onClick }: { label: React.ReactNode, shiftLabel?: string, alphaLabel?: string, onClick: () => void }) => (
        <div className={`flex flex-col items-center relative ${isLandscape ? 'h-7' : 'h-9'}`}>
            <div className="flex gap-1.5 absolute -top-2.5">
                {shiftLabel && <span className={`text-[5.5px] font-black uppercase tracking-tighter transition-all ${isShift ? 'text-amber-300 font-extrabold animate-pulse' : 'text-amber-500'}`}>{shiftLabel}</span>}
                {alphaLabel && <span className={`text-[5.5px] font-black uppercase tracking-tighter transition-all ${isAlpha ? 'text-rose-300 font-extrabold animate-pulse' : 'text-rose-500'}`}>{alphaLabel}</span>}
            </div>
            <button onClick={onClick} className={`${isLandscape ? 'w-[38px] h-[20px] text-[8px]' : 'w-[43px] h-[25px] text-[9px]'} bg-[#1a1c20] hover:bg-[#26282e] text-white rounded-md font-bold border-t border-slate-700 shadow-[0_2px_3px_rgba(0,0,0,0.6)] active:translate-y-[1px] active:shadow-none transition-all ${isShift && shiftLabel ? 'border-amber-500/60 shadow-[0_0_5px_rgba(245,158,11,0.3)]' : ''} ${isAlpha && alphaLabel ? 'border-rose-500/60 shadow-[0_0_5px_rgba(244,63,94,0.3)]' : ''}`}>
                <span className="opacity-95">{label}</span>
            </button>
        </div>
    );

    const MainButton = ({ label, shiftLabel, alphaLabel, onClick, color = "bg-[#e2e8f0] hover:bg-[#cbd5e1]", textColor = "text-slate-800", fontSize = "text-base" }: { label: string, shiftLabel?: string, alphaLabel?: string, onClick: () => void, color?: string, textColor?: string, fontSize?: string }) => (
        <div className={`flex flex-col items-center relative ${isLandscape ? 'h-8' : 'h-11'}`}>
            <div className="flex gap-2 absolute -top-2.5">
                {shiftLabel && <span className={`text-[5.5px] font-black uppercase tracking-tighter transition-all ${isShift ? 'text-amber-600 font-extrabold animate-pulse' : 'text-amber-600'}`}>{shiftLabel}</span>}
                {alphaLabel && <span className={`text-[5.5px] font-black uppercase tracking-tighter transition-all ${isAlpha ? 'text-rose-600 font-extrabold animate-pulse' : 'text-rose-600'}`}>{alphaLabel}</span>}
            </div>
            <button onClick={onClick} className={`${color} ${textColor} ${isLandscape ? 'w-[42px] h-[24px] text-[11px]' : 'w-[48px] h-[32px] text-base'} rounded-lg font-black shadow-[0_3px_0_rgba(0,0,0,0.35)] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center ${isShift && shiftLabel ? 'ring-1 ring-amber-500' : ''} ${isAlpha && alphaLabel ? 'ring-1 ring-rose-500' : ''}`}>
                <span className="drop-shadow-sm">{label}</span>
            </button>
        </div>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                    exit={{ scale: 0.95, opacity: 0, x: "-50%", y: "-50%" }}
                    drag
                    dragMomentum={false}
                    className={`fixed left-1/2 top-1/2 z-[80] bg-[#0c0d10] p-4 rounded-[2.2rem] border-[6px] border-[#1e2026] shadow-[0_0_120px_rgba(0,0,0,0.95)] cursor-default select-none flex ${
                        isLandscape 
                            ? "w-[590px] h-[330px] flex-row gap-5 items-center justify-between" 
                            : "w-[310px] flex-col items-center"
                    } overflow-hidden`}
                >
                    {/* Universal Close Button (Absolute positioned on top right) */}
                    <button onClick={onClose} className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center bg-white/5 hover:bg-rose-500/20 rounded-full text-slate-500 hover:text-rose-400 transition-all border border-white/5 group z-[90]">
                        <X size={12} className="group-hover:scale-110 transition-transform" />
                    </button>

                    {isLandscape ? (
                        <>
                            {/* LEFT COLUMN: Screen + Solar + Replay/Control */}
                            <div className="w-[240px] flex flex-col justify-between h-full pr-1">
                                {/* Brand & Solar Panel Row */}
                                <div className="w-full flex justify-between items-center pr-8 h-8 shrink-0">
                                    <div className="flex flex-col">
                                        <h1 className="text-slate-100 font-extrabold text-[12px] tracking-tighter leading-none italic">CASIO</h1>
                                        <div className="flex gap-1 items-center">
                                            <span className="text-slate-400 text-[6.5px] font-bold">fx-991ES PLUS</span>
                                        </div>
                                    </div>
                                    <div className="w-14 h-5 bg-[#2d1a1a] rounded-[2px] p-0.5 flex gap-0.5 border border-white/5 opacity-70 shadow-inner">
                                        {[...Array(4)].map((_, i) => <div key={i} className="flex-1 bg-[#1a0f0f] border-x border-white/5" />)}
                                    </div>
                                </div>

                                {/* LCD Screen - Digital Style */}
                                <div className="w-full bg-[#cadbb7] h-[68px] rounded-md p-1.5 flex flex-col justify-between border-[2px] border-[#292d35] shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] relative font-mono text-slate-900 shrink-0">
                                    <div className="flex justify-between items-start text-[6.5px] font-black tracking-widest leading-none">
                                        <div className="flex gap-2">
                                            <span className={isShift ? "text-slate-950 font-black opacity-100" : "opacity-10"}>S</span>
                                            <span className={isAlpha ? "text-slate-950 font-black opacity-100" : "opacity-10"}>A</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="border border-slate-950/30 px-0.5 leading-none">{isDeg ? 'D' : 'R'}</span>
                                            <span>Math ▲</span>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-end overflow-hidden pb-0.5">
                                        <div className="text-[13px] font-medium w-full overflow-x-auto whitespace-nowrap scrollbar-none flex items-center h-5">
                                            <InlineMath math={displayLatex} />
                                        </div>
                                        {result && (
                                            <div className="w-full text-right text-[15px] font-black pr-1 flex justify-end items-center h-5 overflow-hidden">
                                                {renderResult()}
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                                </div>

                                {/* Replay and Primary Function Row */}
                                <div className="w-full px-1 flex justify-between items-center h-16 shrink-0">
                                    <div className="flex flex-col gap-1.5">
                                        <SilverControl label="Shift" subLabel="Shift" subColor="text-amber-500" active={isShift} onClick={() => setIsShift(!isShift)} />
                                        <SilverControl label="Alpha" subLabel="Alpha" subColor="text-rose-500" active={isAlpha} onClick={() => setIsAlpha(!isAlpha)} />
                                    </div>
                                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-b from-slate-400 via-slate-200 to-slate-400 border-[2px] border-[#4e5663] shadow-[0_3px_6px_rgba(0,0,0,0.65)] flex items-center justify-center scale-85">
                                        <div className="absolute inset-[4px] rounded-full bg-[#0c0d10] border border-[#31363e] flex items-center justify-center overflow-hidden">
                                            <button onClick={() => { if (result && result !== 'Error') setInput(result); }} title="Recall Result" className="absolute top-0 w-full h-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400 hover:text-white"><ChevronUp size={8} /></button>
                                            <button onClick={() => { setInput(''); setResult(null); }} title="Clear Input" className="absolute bottom-0 w-full h-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400 hover:text-white"><ChevronDown size={8} /></button>
                                            <button onClick={() => handleKey('DEL')} title="Delete Character" className="absolute left-0 h-full w-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400 hover:text-white"><ChevronLeft size={8} /></button>
                                            <button onClick={() => handleKey(')')} title="Add Parenthesis" className="absolute right-0 h-full w-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400 hover:text-white"><ChevronRight size={8} /></button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <SilverControl label="Mode" subLabel="Setup" subColor="text-slate-400" onClick={() => setIsDeg(!isDeg)} />
                                        <SilverControl label="On" subLabel="On" subColor="text-slate-400" onClick={() => { setInput(''); setResult(null); }} />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Numeric & Sci Buttons */}
                            <div className="w-[300px] flex flex-col justify-between h-full pl-1">
                                {/* Scientific Control Pad */}
                                <div className="w-full flex flex-col gap-1 px-0.5">
                                    <div className="flex justify-between px-2">
                                        <div className="flex gap-2">
                                            <SciButton label="CALC" shiftLabel="SOLVE" alphaLabel="=" onClick={() => handleKey('CALC', 'SOLVE', '=')} />
                                            <SciButton label="∫dx" shiftLabel="d/dx" alphaLabel=":" onClick={() => handleKey('∫dx', 'd/dx', ':')} />
                                        </div>
                                        <div className="flex gap-2">
                                            <SciButton label="x⁻¹" shiftLabel="x!" onClick={() => handleKey('^-1', '!')} />
                                            <SciButton label="log□□" shiftLabel="Σ" onClick={() => handleKey('log(')} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-6 gap-x-1 gap-y-2">
                                        <SciButton label="■/□" shiftLabel="▊/□" onClick={() => handleKey('/')} />
                                        <SciButton label="√■" shiftLabel="∛■" onClick={() => handleKey('sqrt(', 'cbrt(')} />
                                        <SciButton label="x²" shiftLabel="x³" onClick={() => handleKey('^2', '^3')} />
                                        <SciButton label="x□" shiftLabel="▊√■" onClick={() => handleKey('^')} />
                                        <SciButton label="log" shiftLabel="10□" onClick={() => handleKey('log(', '10^')} />
                                        <SciButton label="ln" shiftLabel="e□" onClick={() => handleKey('ln(', 'e^')} />

                                        <SciButton label="(-)" alphaLabel="A" onClick={() => handleKey('-', '', 'A')} />
                                        <SciButton label={"°' \""} shiftLabel="←" alphaLabel="B" onClick={() => handleKey('°', '←', 'B')} />
                                        <SciButton label="hyp" shiftLabel="Abs" alphaLabel="C" onClick={() => handleKey('hyp', 'Abs', 'C')} />
                                        <SciButton label="sin" shiftLabel="sin⁻¹" alphaLabel="D" onClick={() => handleKey('sin(', 'sin⁻¹', 'D')} />
                                        <SciButton label="cos" shiftLabel="cos⁻¹" alphaLabel="E" onClick={() => handleKey('cos(', 'cos⁻¹', 'E')} />
                                        <SciButton label="tan" shiftLabel="tan⁻¹" alphaLabel="F" onClick={() => handleKey('tan(', 'tan⁻¹', 'F')} />

                                        <SciButton label="RCL" shiftLabel="STO" onClick={() => { }} />
                                        <SciButton label="ENG" shiftLabel="←" onClick={() => { }} />
                                        <SciButton label="(" shiftLabel="%" onClick={() => handleKey('(')} />
                                        <SciButton label=")" shiftLabel="," alphaLabel="X" onClick={() => handleKey(')')} />
                                        <SciButton label="S⇔D" shiftLabel="a b/c" alphaLabel="Y" onClick={() => handleKey('S<=>D')} />
                                        <SciButton label="M+" shiftLabel="M-" alphaLabel="M" onClick={() => { }} />
                                    </div>
                                </div>

                                {/* Concrete Numeric Pad */}
                                <div className="w-full flex flex-col gap-1 px-0.5">
                                    <div className="grid grid-cols-5 gap-1">
                                        <MainButton label="7" shiftLabel="CONST" onClick={() => handleKey('7', 'CONST')} />
                                        <MainButton label="8" shiftLabel="CONV" onClick={() => handleKey('8', 'CONV')} />
                                        <MainButton label="9" shiftLabel="CLR" onClick={() => handleKey('9', 'CLR')} />
                                        <MainButton label="DEL" shiftLabel="INS" color="bg-[#ea580c] hover:bg-[#c2410c] border-b-[2px] border-[#9a3412]" textColor="text-white" fontSize="text-[10px]" onClick={() => handleKey('DEL', 'INS')} />
                                        <MainButton label="AC" shiftLabel="OFF" color="bg-[#ea580c] hover:bg-[#c2410c] border-b-[2px] border-[#9a3412]" textColor="text-white" fontSize="text-[10px]" onClick={() => handleKey('AC', 'AC')} />
                                    </div>
                                    <div className="grid grid-cols-5 gap-1">
                                        <MainButton label="4" alphaLabel="MATRIX" onClick={() => handleKey('4', '', 'MATRIX')} />
                                        <MainButton label="5" alphaLabel="VECTOR" onClick={() => handleKey('5', '', 'VECTOR')} />
                                        <MainButton label="6" onClick={() => handleKey('6')} />
                                        <MainButton label="×" shiftLabel="nPr" color="bg-[#334155] hover:bg-[#475569] border-b-[2px] border-[#1e293b]" textColor="text-white" onClick={() => handleKey('*', 'nPr')} />
                                        <MainButton label="÷" shiftLabel="nCr" color="bg-[#334155] hover:bg-[#475569] border-b-[2px] border-[#1e293b]" textColor="text-white" onClick={() => handleKey('/', 'nCr')} />
                                    </div>
                                    <div className="grid grid-cols-5 gap-1">
                                        <MainButton label="1" alphaLabel="STAT" onClick={() => handleKey('1', '', 'STAT')} />
                                        <MainButton label="2" alphaLabel="CMPLX" onClick={() => handleKey('2', '', 'CMPLX')} />
                                        <MainButton label="3" alphaLabel="BASE" onClick={() => handleKey('3', '', 'BASE')} />
                                        <MainButton label="+" shiftLabel="Pol" color="bg-[#334155] hover:bg-[#475569] border-b-[2px] border-[#1e293b]" textColor="text-white" onClick={() => handleKey('+', 'Pol')} />
                                        <MainButton label="−" shiftLabel="Rec" color="bg-[#334155] hover:bg-[#475569] border-b-[2px] border-[#1e293b]" textColor="text-white" onClick={() => handleKey('-', 'Rec')} />
                                    </div>
                                    <div className="grid grid-cols-5 gap-1">
                                        <MainButton label="0" shiftLabel="Rnd" onClick={() => handleKey('0', 'Rnd')} />
                                        <MainButton label="." shiftLabel="Ran#" onClick={() => handleKey('.', 'Ran#')} />
                                        <MainButton label="×10ˣ" shiftLabel="π" alphaLabel="e" fontSize="text-[8px]" onClick={() => handleKey('*10^', 'pi', 'e')} />
                                        <MainButton label="Ans" shiftLabel="DRG▶" fontSize="text-[10px]" onClick={() => handleKey('Ans', 'DRG')} />
                                        <MainButton label="=" color="bg-[#e2e8f0] hover:bg-[#cbd5e1] border-b-[2px] border-[#cbd5e1]" onClick={() => handleKey('=')} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Brand & Solar Panel Row */}
                            <div className="w-full flex justify-between items-center mb-1.5 px-1 shrink-0 h-8">
                                <div className="flex flex-col">
                                    <h1 className="text-slate-100 font-extrabold text-[12px] tracking-tighter leading-none italic">CASIO</h1>
                                    <div className="flex gap-1 items-center">
                                        <span className="text-slate-400 text-[6.5px] font-bold">fx-991ES PLUS</span>
                                        <span className="text-slate-500 text-[5.5px] font-black uppercase tracking-tighter">2nd ed.</span>
                                    </div>
                                </div>
                                <div className="w-16 h-6 bg-[#2d1a1a] rounded-[2px] p-0.5 flex gap-0.5 border border-white/5 opacity-70 shadow-inner">
                                    {[...Array(4)].map((_, i) => <div key={i} className="flex-1 bg-[#1a0f0f] border-x border-white/5" />)}
                                </div>
                            </div>

                            {/* LCD Screen - Digital Style */}
                            <div className="w-full bg-[#cadbb7] h-[80px] rounded-md mb-4 p-2 shrink-0 flex flex-col justify-between border-[3px] border-[#292d35] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)] relative font-mono text-slate-900">
                                <div className="flex justify-between items-start text-[6.5px] font-black tracking-widest leading-none">
                                    <div className="flex gap-2">
                                        <span className={isShift ? "text-slate-950 font-black opacity-100" : "opacity-10"}>S</span>
                                        <span className={isAlpha ? "text-slate-950 font-black opacity-100" : "opacity-10"}>A</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="border border-slate-950/30 px-0.5 leading-none">{isDeg ? 'D' : 'R'}</span>
                                        <span>Math ▲</span>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col justify-end overflow-hidden pb-0.5">
                                    <div className="text-[15px] font-medium w-full overflow-x-auto whitespace-nowrap scrollbar-none flex items-center h-6">
                                        <InlineMath math={displayLatex} />
                                    </div>
                                    {result && (
                                        <div className="w-full text-right text-[18px] font-black pr-1 flex justify-end items-center h-6 overflow-hidden">
                                            {renderResult()}
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                            </div>

                            {/* Replay and Primary Function Row */}
                            <div className="w-full px-1 mb-5 flex justify-between items-center h-16 shrink-0">
                                <div className="flex flex-col gap-2">
                                    <SilverControl label="Shift" subLabel="Shift" subColor="text-amber-500" active={isShift} onClick={() => setIsShift(!isShift)} />
                                    <SilverControl label="Alpha" subLabel="Alpha" subColor="text-rose-500" active={isAlpha} onClick={() => setIsAlpha(!isAlpha)} />
                                </div>
                                <div className="relative w-18 h-18 rounded-full bg-gradient-to-b from-slate-400 via-slate-200 to-slate-400 border-[3px] border-[#4e5663] shadow-[0_4px_10px_rgba(0,0,0,0.65)] flex items-center justify-center scale-90">
                                    <div className="absolute inset-[6px] rounded-full bg-[#0c0d10] border-2 border-[#31363e] flex items-center justify-center overflow-hidden">
                                        <span className="text-[4px] text-slate-700 font-black uppercase tracking-[0.3em] mt-1.5 opacity-30">REPLAY</span>
                                        <button onClick={() => { if (result && result !== 'Error') setInput(result); }} title="Recall Result" className="absolute top-0 w-full h-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400 hover:text-white"><ChevronUp size={10} /></button>
                                        <button onClick={() => { setInput(''); setResult(null); }} title="Clear Input" className="absolute bottom-0 w-full h-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400 hover:text-white"><ChevronDown size={10} /></button>
                                        <button onClick={() => handleKey('DEL')} title="Delete Character" className="absolute left-0 h-full w-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400 hover:text-white"><ChevronLeft size={10} /></button>
                                        <button onClick={() => handleKey(')')} title="Add Parenthesis" className="absolute right-0 h-full w-[30%] hover:bg-white/5 active:bg-white/10 flex justify-center items-center text-slate-400 hover:text-white"><ChevronRight size={10} /></button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <SilverControl label="Mode" subLabel="Mode Setup" subColor="text-slate-400" onClick={() => setIsDeg(!isDeg)} />
                                    <SilverControl label="On" subLabel="On" subColor="text-slate-400" onClick={() => { setInput(''); setResult(null); }} />
                                </div>
                            </div>

                            {/* Scientific Control Pad */}
                            <div className="w-full flex flex-col gap-3.5 px-0.5 mb-5 shrink-0">
                                <div className="flex justify-between px-3">
                                    <div className="flex gap-4">
                                        <SciButton label="CALC" shiftLabel="SOLVE" alphaLabel="=" onClick={() => handleKey('CALC', 'SOLVE', '=')} />
                                        <SciButton label="∫dx" shiftLabel="d/dx" alphaLabel=":" onClick={() => handleKey('∫dx', 'd/dx', ':')} />
                                    </div>
                                    <div className="flex gap-4">
                                        <SciButton label="x⁻¹" shiftLabel="x!" onClick={() => handleKey('^-1', '!')} />
                                        <SciButton label="log□□" shiftLabel="Σ" onClick={() => handleKey('log(')} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-6 gap-x-1 gap-y-4 px-0.5">
                                    <SciButton label="■/□" shiftLabel="▊/□" onClick={() => handleKey('/')} />
                                    <SciButton label="√■" shiftLabel="∛■" onClick={() => handleKey('sqrt(', 'cbrt(')} />
                                    <SciButton label="x²" shiftLabel="x³" onClick={() => handleKey('^2', '^3')} />
                                    <SciButton label="x□" shiftLabel="▊√■" onClick={() => handleKey('^')} />
                                    <SciButton label="log" shiftLabel="10□" onClick={() => handleKey('log(', '10^')} />
                                    <SciButton label="ln" shiftLabel="e□" onClick={() => handleKey('ln(', 'e^')} />

                                    <SciButton label="(-)" alphaLabel="A" onClick={() => handleKey('-', '', 'A')} />
                                    <SciButton label={"°' \""} shiftLabel="←" alphaLabel="B" onClick={() => handleKey('°', '←', 'B')} />
                                    <SciButton label="hyp" shiftLabel="Abs" alphaLabel="C" onClick={() => handleKey('hyp', 'Abs', 'C')} />
                                    <SciButton label="sin" shiftLabel="sin⁻¹" alphaLabel="D" onClick={() => handleKey('sin(', 'sin⁻¹', 'D')} />
                                    <SciButton label="cos" shiftLabel="cos⁻¹" alphaLabel="E" onClick={() => handleKey('cos(', 'cos⁻¹', 'E')} />
                                    <SciButton label="tan" shiftLabel="tan⁻¹" alphaLabel="F" onClick={() => handleKey('tan(', 'tan⁻¹', 'F')} />

                                    <SciButton label="RCL" shiftLabel="STO" onClick={() => { }} />
                                    <SciButton label="ENG" shiftLabel="←" onClick={() => { }} />
                                    <SciButton label="(" shiftLabel="%" onClick={() => handleKey('(')} />
                                    <SciButton label=")" shiftLabel="," alphaLabel="X" onClick={() => handleKey(')')} />
                                    <SciButton label="S⇔D" shiftLabel="a b/c" alphaLabel="Y" onClick={() => handleKey('S<=>D')} />
                                    <SciButton label="M+" shiftLabel="M-" alphaLabel="M" onClick={() => { }} />
                                </div>
                            </div>

                            {/* Concrete Numeric Pad */}
                            <div className="w-full flex flex-col gap-3.5 px-0.5 shrink-0">
                                <div className="grid grid-cols-5 gap-2">
                                    <MainButton label="7" shiftLabel="CONST" onClick={() => handleKey('7', 'CONST')} />
                                    <MainButton label="8" shiftLabel="CONV" onClick={() => handleKey('8', 'CONV')} />
                                    <MainButton label="9" shiftLabel="CLR" onClick={() => handleKey('9', 'CLR')} />
                                    <MainButton label="DEL" shiftLabel="INS" color="bg-[#ea580c] hover:bg-[#c2410c] border-b-[3px] border-[#9a3412]" textColor="text-white" fontSize="text-sm" onClick={() => handleKey('DEL', 'INS')} />
                                    <MainButton label="AC" shiftLabel="OFF" color="bg-[#ea580c] hover:bg-[#c2410c] border-b-[3px] border-[#9a3412]" textColor="text-white" fontSize="text-sm" onClick={() => handleKey('AC', 'AC')} />
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    <MainButton label="4" alphaLabel="MATRIX" onClick={() => handleKey('4', '', 'MATRIX')} />
                                    <MainButton label="5" alphaLabel="VECTOR" onClick={() => handleKey('5', '', 'VECTOR')} />
                                    <MainButton label="6" onClick={() => handleKey('6')} />
                                    <MainButton label="×" shiftLabel="nPr" color="bg-[#334155] hover:bg-[#475569] border-b-[3px] border-[#1e293b]" textColor="text-white" onClick={() => handleKey('*', 'nPr')} />
                                    <MainButton label="÷" shiftLabel="nCr" color="bg-[#334155] hover:bg-[#475569] border-b-[3px] border-[#1e293b]" textColor="text-white" onClick={() => handleKey('/', 'nCr')} />
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    <MainButton label="1" alphaLabel="STAT" onClick={() => handleKey('1', '', 'STAT')} />
                                    <MainButton label="2" alphaLabel="CMPLX" onClick={() => handleKey('2', '', 'CMPLX')} />
                                    <MainButton label="3" alphaLabel="BASE" onClick={() => handleKey('3', '', 'BASE')} />
                                    <MainButton label="+" shiftLabel="Pol" color="bg-[#334155] hover:bg-[#475569] border-b-[3px] border-[#1e293b]" textColor="text-white" onClick={() => handleKey('+', 'Pol')} />
                                    <MainButton label="−" shiftLabel="Rec" color="bg-[#334155] hover:bg-[#475569] border-b-[3px] border-[#1e293b]" textColor="text-white" onClick={() => handleKey('-', 'Rec')} />
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    <MainButton label="0" shiftLabel="Rnd" onClick={() => handleKey('0', 'Rnd')} />
                                    <MainButton label="." shiftLabel="Ran#" onClick={() => handleKey('.', 'Ran#')} />
                                    <MainButton label="×10ˣ" shiftLabel="π" alphaLabel="e" fontSize="text-[10px]" onClick={() => handleKey('*10^', 'pi', 'e')} />
                                    <MainButton label="Ans" shiftLabel="DRG▶" fontSize="text-sm" onClick={() => handleKey('Ans', 'DRG')} />
                                    <MainButton label="=" color="bg-[#e2e8f0] hover:bg-[#cbd5e1] border-b-[3px] border-[#cbd5e1]" onClick={() => handleKey('=')} />
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
