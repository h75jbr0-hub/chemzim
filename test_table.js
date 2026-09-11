const content = `> [!BOX]
> ### 📋 Chemical Hazard Pictograms
> Standard hazard pictograms are used globally on chemical containers to warn users of specific hazards:
>
> | Name | Symbol | Hazard Effect | Example |
> | :--- | :---: | :--- | :--- |
> | Health Hazard | 👤 | Carcinogenic, mutagenic, causes respiratory sensitization, or long-term systemic harm. | Chromates, Dichromates |
>
> * **Volatile:** A substance that evaporates easily at room temperature.`;

const lines = content.split('\n');
const processedLines = [];
let currentTableLines = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const isTableLine = trimmed.startsWith('|') || trimmed.startsWith('> |');

    if (isTableLine) {
        currentTableLines.push(line);
    } else {
        if (currentTableLines.length > 0) {
            const isBlockquoteTable = currentTableLines[0].trim().startsWith('>');
            const prefix = isBlockquoteTable ? '> ' : '';
            const encoded = encodeURIComponent(currentTableLines.join('\n'))
                .replace(/\(/g, '%28')
                .replace(/\)/g, '%29')
                .replace(/\[/g, '%5B')
                .replace(/\]/g, '%5D')
                .replace(/\*/g, '%2A');
            processedLines.push(`${prefix}[CUSTOM_TABLE:${encoded}]`);
            currentTableLines = [];
        }
        processedLines.push(line);
    }
}
if (currentTableLines.length > 0) {
    const isBlockquoteTable = currentTableLines[0].trim().startsWith('>');
    const prefix = isBlockquoteTable ? '> ' : '';
    const encoded = encodeURIComponent(currentTableLines.join('\n'));
    processedLines.push(`${prefix}[CUSTOM_TABLE:${encoded}]`);
}
console.log(processedLines.join('\n'));
