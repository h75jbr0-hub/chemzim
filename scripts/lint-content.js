const fs = require('fs');
const path = require('path');

const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m',
    bold: '\x1b[1m'
};

let totalErrors = 0;
let totalWarnings = 0;
let filesChecked = 0;

const DIRS_TO_CHECK = [
    'data/curriculum',
    'data/exams',
    'app',
    'components'
];

const IGNORE_PATTERNS = [
    'node_modules',
    '.next',
    'scripts/lint-content.js',
    '.git'
];

function checkFile(filePath) {
    const ext = path.extname(filePath);

    if (!['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const errors = [];
    const warnings = [];

    lines.forEach((line, index) => {
        const lineNum = index + 1;
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith('//') || trimmedLine.startsWith('*') || trimmedLine.startsWith('import ') || trimmedLine.startsWith('export *')) {
            return;
        }

        // Rule 1: KaTeX Subscripts Collision with Markdown emphasis (e.g. _{3(s)} or _{(aq)})
        const katexSubscriptPattern = /_\{[0-9]*\([a-z]+\)\}/g;
        if (katexSubscriptPattern.test(line)) {
            errors.push({
                line: lineNum,
                rule: 'katex-subscript-collision',
                message: 'KaTeX state subscript collision: avoid _{3(s)} inside math blocks.',
                suggestion: 'Use unicode subscript or separate state symbol: e.g. _3\\text{(s)}'
            });
        }

        // Rule 2: End-of-line periods after chemical formula or units
        const endOfLineSymbolPeriodPattern = /\b(mol\/dm3|g\/cm3|kJ\/mol|mol|dm3|cm3|K|Pa|kPa|atm|[A-Z][a-z]?)\.\s*$/g;
        if (endOfLineSymbolPeriodPattern.test(trimmedLine) && !trimmedLine.includes('http')) {
            warnings.push({
                line: lineNum,
                rule: 'no-confusing-period',
                message: 'Avoid placing period (.) directly after chemical formula or unit at line end.',
                suggestion: 'Remove trailing period to prevent confusion with chemical numbers/units.'
            });
        }

        // Rule 3: DangerouslySetInnerHTML without safety wrapper
        if (line.includes('dangerouslySetInnerHTML') &&
            !filePath.includes('SafeHTML') &&
            !filePath.includes('SmartText')) {
            errors.push({
                line: lineNum,
                rule: 'use-safehtml',
                message: 'Forbidden: Using dangerouslySetInnerHTML directly without safety component.',
                suggestion: 'Use <SafeHTML content={...} /> instead.'
            });
        }

        // Rule 4: Question createdAt timestamp check
        if (filePath.includes('data/exams') && trimmedLine.startsWith('id:')) {
            let foundCreatedAt = false;
            for (let i = index + 1; i < Math.min(index + 35, lines.length); i++) {
                if (lines[i].includes('createdAt:')) {
                    foundCreatedAt = true;
                    break;
                }
                if (lines[i].trim() === '},' || lines[i].trim() === '};') break;
            }
            if (!foundCreatedAt) {
                warnings.push({
                    line: lineNum,
                    rule: 'missing-createdAt',
                    message: `Question (${trimmedLine.split("'")[1] || trimmedLine}) is missing createdAt timestamp.`,
                    suggestion: "Add createdAt: 'YYYY-MM-DD' field."
                });
            }
        }
    });

    if (errors.length > 0 || warnings.length > 0) {
        console.log(`\n${colors.blue}${filePath}${colors.reset}`);

        errors.forEach(err => {
            console.log(`  ${colors.red}✖ Line ${err.line}:${colors.reset} ${err.message}`);
            console.log(`    ${colors.yellow}→ ${err.suggestion}${colors.reset}`);
            totalErrors++;
        });

        warnings.forEach(warn => {
            console.log(`  ${colors.yellow}⚠ Line ${warn.line}:${colors.reset} ${warn.message}`);
            console.log(`    ${colors.yellow}→ ${warn.suggestion || ''}${colors.reset}`);
            totalWarnings++;
        });
    }

    filesChecked++;
}

function checkDirectory(dir) {
    if (!fs.existsSync(dir)) {
        return;
    }

    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);

        if (IGNORE_PATTERNS.some(pattern => fullPath.includes(pattern))) {
            return;
        }

        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            checkDirectory(fullPath);
        } else {
            checkFile(fullPath);
        }
    });
}

function main() {
    console.log(`${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);
    console.log(`${colors.bold}   ChemZim Content Linter & Quality Auditor${colors.reset}`);
    console.log(`${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);

    DIRS_TO_CHECK.forEach(dir => {
        checkDirectory(dir);
    });

    console.log(`\n${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);
    console.log(`${colors.bold}   Audit Summary${colors.reset}`);
    console.log(`${colors.bold}${colors.blue}═══════════════════════════════════════════════════════${colors.reset}`);
    console.log(`  📁 Files Checked: ${filesChecked}`);

    if (totalErrors > 0) {
        console.log(`  ${colors.red}✖ Total Errors: ${totalErrors}${colors.reset}`);
    }
    if (totalWarnings > 0) {
        console.log(`  ${colors.yellow}⚠ Total Warnings: ${totalWarnings}${colors.reset}`);
    }

    if (totalErrors === 0 && totalWarnings === 0) {
        console.log(`  ${colors.green}✓ Excellent! All content meets project quality rules.${colors.reset}`);
    }

    console.log('');

    if (totalErrors > 0) {
        process.exit(1);
    }
}

main();
