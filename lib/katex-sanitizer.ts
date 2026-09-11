/**
 * KaTeX & Chemistry Math Sanitizer
 * Automatically repairs corrupted LaTeX escape sequences (e.g., \t -> \text, \r -> \rightarrow, textZn -> \text{Zn})
 * caused by JavaScript template literal evaluation, double escaping, or missing braces,
 * ensuring that all chemical formulas, arrows, and math symbols render cleanly and properly.
 */

export function sanitizeKatex(math: string): string {
    if (!math) return '';

    let res = math;

    // 0. Normalize quadruple and double backslashes to single backslashes in math strings
    res = res.replace(/\\\\+/g, '\\');

    // 1. Repair JS control characters created when single backslash was parsed by JS
    res = res.replace(/\t(ext|imes|au|heta|riangle|woheadrightarrow)/g, (_, p1) => '\\t' + p1);
    res = res.replace(/\r(ightarrow|ightleftharpoons|ho|angle|ight|ound)/g, (_, p1) => '\\r' + p1);
    res = res.replace(/\n(abla|eq|u|eg)/g, (_, p1) => '\\n' + p1);
    res = res.replace(/\f(rac|orall)/g, (_, p1) => '\\f' + p1);
    res = res.replace(/\x08(eta|ullet|ar|egin)/g, (_, p1) => '\\b' + p1);
    res = res.replace(/\v(ec|ert)/g, (_, p1) => '\\v' + p1);


    // 2. Repair raw "text" prefixes without braces or slashes (e.g. \textZn, textZn, \textFeSO_4, textFeSO_4, textNa(l))
    // Replace \textXYZ or textXYZ with \text{XYZ}
    res = res.replace(/(?:\\text|text)\s*\{([^}]+)\}/g, '\\text{$1}');
    res = res.replace(/(?:\\text|text)([A-Za-z0-9_()+\-]+)/g, (match, p1) => {
        // Avoid matching actual latex commands that start with text like textbf
        if (p1.startsWith('bf') || p1.startsWith('it') || p1.startsWith('rm') || p1.startsWith('sc') || p1.startsWith('sf') || p1.startsWith('tt')) {
            return '\\text' + p1;
        }
        return `\\text{${p1}}`;
    });

    // 3. Repair stripped or unslashed LaTeX commands
    res = res.replace(/(^|[^\w\\])(?:\\)?rightarrow\b/g, '$1\\rightarrow ');
    res = res.replace(/(^|[^\w\\])(?:\\)?rightleftharpoons\b/g, '$1\\rightleftharpoons ');
    res = res.replace(/(^|[^\w\\])(?:\\)?leftarrow\b/g, '$1\\leftarrow ');
    res = res.replace(/(^|[^\w\\])(?:\\)?leftrightarrow\b/g, '$1\\leftrightarrow ');
    res = res.replace(/(^|[^\w\\])(?:\\)?delta([+\-0-9]|\b)/g, '$1\\delta$2');
    res = res.replace(/(^|[^\w\\])(?:\\)?Delta([+\-0-9]|\b)/g, '$1\\Delta$2');
    res = res.replace(/(^|[^\w\\])(?:\\)?quad\b/g, '$1\\quad ');
    res = res.replace(/(^|[^\w\\])(?:\\)?qquad\b/g, '$1\\qquad ');
    res = res.replace(/(^|[^\w\\])(?:\\)?alpha\b/g, '$1\\alpha ');
    res = res.replace(/(^|[^\w\\])(?:\\)?beta\b/g, '$1\\beta ');
    res = res.replace(/(^|[^\w\\])(?:\\)?gamma\b/g, '$1\\gamma ');
    res = res.replace(/(^|[^\w\\])(?:\\)?lambda\b/g, '$1\\lambda ');
    res = res.replace(/(^|[^\w\\])(?:\\)?sigma\b/g, '$1\\sigma ');
    res = res.replace(/(^|[^\w\\])(?:\\)?pi\b/g, '$1\\pi ');
    res = res.replace(/(^|[^\w\\])(?:\\)?theta\b/g, '$1\\theta ');
    res = res.replace(/(^|[^\w\\])(?:\\)?approx\b/g, '$1\\approx ');
    res = res.replace(/(^|[^\w\\])(?:\\)?times\b/g, '$1\\times ');
    res = res.replace(/(^|[^\w\\])(?:\\)?pm\b/g, '$1\\pm ');
    res = res.replace(/(?<!\\)left(?=[\(\[\{\|\.])/g, '\\left');
    res = res.replace(/(?<!\\)right(?=[\)\]\}\|\.])/g, '\\right');
    res = res.replace(/(?<!\\)sqrt(?=[\{\(|])/g, '\\sqrt');
    res = res.replace(/(^|[^\w\\])(?:\\)?implies\b/g, '$1\\implies');
    res = res.replace(/(^|[^\w\\])(?:\\)?mol\b/g, '$1\\text{ mol}');
    res = res.replace(/(^|[^\w\\])(?:\\)?dm\b/g, '$1\\text{ dm}');
    res = res.replace(/(^|[^\w\\])(?:\\)?cm\b/g, '$1\\text{ cm}');

    // 4. Fix unescaped percentage signs which KaTeX interprets as LaTeX comments
    res = res.replace(/(?<!\\)%/g, '\\%');

    // 5. Fix escaped underscores from Markdown parser
    res = res.replace(/\\_/g, '_');

    // 6. Convert common Unicode chemical symbols into robust LaTeX equivalents
    res = res.replace(/→/g, '\\rightarrow ');
    res = res.replace(/⇌/g, '\\rightleftharpoons ');
    res = res.replace(/⇄/g, '\\rightleftarrows ');
    res = res.replace(/↔/g, '\\leftrightarrow ');
    res = res.replace(/×/g, '\\times ');
    res = res.replace(/±/g, '\\pm ');

    return res;
}
