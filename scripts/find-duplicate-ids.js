const fs = require('fs');
const path = require('path');

const DIRS_TO_SCAN = ['data/curriculum', 'data/exams'];
const idMap = new Map();
let duplicateCount = 0;

function scanFile(filePath) {
    const ext = path.extname(filePath);
    if (!['.ts', '.js'].includes(ext)) return;

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
        const lineNum = index + 1;
        const match = line.match(/\bid\s*:\s*['"`]([^'"`]+)['"`]/);
        if (match) {
            const idValue = match[1];
            if (idMap.has(idValue)) {
                console.log(`\x1b[31m✖ Duplicate ID found: "${idValue}"\x1b[0m`);
                console.log(`   First seen: ${idMap.get(idValue)}`);
                console.log(`   Duplicate:  ${filePath}:${lineNum}\n`);
                duplicateCount++;
            } else {
                idMap.set(idValue, `${filePath}:${lineNum}`);
            }
        }
    });
}

function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDir(fullPath);
        } else {
            scanFile(fullPath);
        }
    });
}

console.log('\x1b[34mScanning for duplicate Question and Lesson IDs...\x1b[0m');
DIRS_TO_SCAN.forEach(scanDir);

if (duplicateCount === 0) {
    console.log(`\x1b[32m✓ All ${idMap.size} unique IDs scanned successfully. No duplicates found!\x1b[0m`);
} else {
    console.log(`\x1b[31m✖ Found ${duplicateCount} duplicate ID(s).\x1b[0m`);
    process.exit(1);
}
