const { sanitizeKatex } = require('./lib/katex-sanitizer');

const inputStr = "KE = \\\\frac{1}{2}m\\\\left(\\\\frac{d}{t}\\\\right)^2 \\\\implies t = d\\\\sqrt{\\\\frac{m}{2KE}}";
const sanitized = sanitizeKatex(inputStr);

console.log("Input: ", inputStr);
console.log("Sanitized: ", sanitized);
