// Script to inspect the evaluated questionBank for any duplicate IDs at runtime.
const { questionBank } = require('./data/exams/index');

const idMap = new Map();
const duplicates = [];

questionBank.forEach((q, idx) => {
    if (!q || !q.id) {
        console.log(`Question at index ${idx} has no ID!`, q);
        return;
    }
    if (idMap.has(q.id)) {
        duplicates.push({
            id: q.id,
            firstIndex: idMap.get(q.id),
            secondIndex: idx,
            questionText: q.question
        });
    } else {
        idMap.set(q.id, idx);
    }
});

console.log(`Total questions in bank: ${questionBank.length}`);
console.log(`Duplicate IDs found: ${duplicates.length}`);
duplicates.forEach(d => {
    console.log(`- Duplicate ID: "${d.id}"`);
    console.log(`  First index: ${d.firstIndex}`);
    console.log(`  Second index: ${d.secondIndex}`);
});
