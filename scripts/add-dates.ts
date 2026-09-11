import * as fs from 'fs';
import * as path from 'path';

function walkDir(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(fullPath));
        } else {
            if (fullPath.endsWith('.ts')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const dataDir = path.join(__dirname, '../data');
const files = walkDir(dataDir);

let modifiedFiles = 0;
let modifiedQuestions = 0;

files.forEach(file => {
    // Only process files in exams and curriculum directories
    if (!file.includes('data\\exams') && !file.includes('data\\curriculum') && !file.includes('data/exams') && !file.includes('data/curriculum')) {
        return;
    }

    const content = fs.readFileSync(file, 'utf-8');
    let hasChanges = false;
    
    // This regex looks for `id: "some-string"` or `id: 'some-string'`
    const newContent = content.replace(/id:\s*(['"])([^'"]+)\1/g, (match, quote, idStr) => {
        // Check if the id contains an 8 digit sequence
        if (!/\d{8}/.test(idStr)) {
            hasChanges = true;
            modifiedQuestions++;
            return `id: ${quote}${idStr}-20260106${quote}`;
        }
        return match;
    });

    if (hasChanges) {
        fs.writeFileSync(file, newContent, 'utf-8');
        modifiedFiles++;
    }
});

console.log(`Successfully added dates to ${modifiedQuestions} questions across ${modifiedFiles} files.`);
