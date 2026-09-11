import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'data', 'exams', 'question-bank.ts');
let file = fs.readFileSync(filePath, 'utf8');

const newQuestions = `
// Cambridge IGCSE Unit 10: Chemistry of the Environment Exam Questions
questionBank.push(
  {
    id: "q_env_heating_copper_sulfate_row-2026",
    question: "Separate samples of anhydrous copper(II) sulfate and hydrated copper(II) sulfate are heated in evaporating dishes. Which row shows the correct color change?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">anhydrous copper(II) sulfate</th><th class="p-2 border">hydrated copper(II) sulfate</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">No change</td><td class="p-2 border">White to blue</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">White to blue</td><td class="p-2 border">No change</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">No change</td><td class="p-2 border">Blue to white</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Blue to white</td><td class="p-2 border">Blue to white</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: anhydrous = No change | hydrated = White to blue" },
      { text: "Row B: anhydrous = White to blue | hydrated = No change" },
      { text: "Row C: anhydrous = No change | hydrated = Blue to white" },
      { text: "Row D: anhydrous = Blue to white | hydrated = Blue to white" }
    ],
    correctAnswer: 2,
    explanation: "* Anhydrous copper(II) sulfate ($\\\\text{CuSO}_4$) is already a dry white powder; heating it causes no chemical reaction or color change (No change).\\\\n* Hydrated copper(II) sulfate ($\\\\text{CuSO}_4\\\\cdot 5\\\\text{H}_2\\\\text{O}$) contains blue crystals; heating drives off water of crystallisation to leave white anhydrous powder (Blue to white).\\\\n* Therefore, Row C is the correct Cambridge answer.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_env_water_purification_processes-2026",
    question: "Water must be purified before it is suitable for use in the home. Which processes are used to remove solid impurities and kill bacteria?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">to remove solid impurities</th><th class="p-2 border">to kill bacteria</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Chlorination</td><td class="p-2 border">Chlorination</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Filtration</td><td class="p-2 border">Chlorination</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Chlorination</td><td class="p-2 border">Filtration</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Filtration</td><td class="p-2 border">Filtration</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: remove solid = Chlorination | kill bacteria = Chlorination" },
      { text: "Row B: remove solid = Filtration | kill bacteria = Chlorination" },
      { text: "Row C: remove solid = Chlorination | kill bacteria = Filtration" },
      { text: "Row D: remove solid = Filtration | kill bacteria = Filtration" }
    ],
    correctAnswer: 1,
    explanation: "* Filtration through sand beds traps and removes insoluble solid dirt and suspended particles.\\\\n* Chlorination involves adding chlorine to water to disinfect it and kill harmful bacteria and microorganisms.\\\\n* Row B is the exact mark scheme answer.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_env_pollutant_source_incorrect-2026",
    question: "Which row showing an air pollutant and its major source is NOT correct?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Pollutant</th><th class="p-2 border">Major source of pollutant</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Oxides of nitrogen</td><td class="p-2 border">Car engines</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Lead compounds</td><td class="p-2 border">Leaded petrol</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Carbon monoxide</td><td class="p-2 border">Complete combustion of carbon fuels</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Sulfur dioxide</td><td class="p-2 border">Fossil fuels containing sulfur</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: Oxides of nitrogen | Car engines" },
      { text: "Row B: Lead compounds | Leaded petrol" },
      { text: "Row C: Carbon monoxide | Complete combustion of carbon fuels" },
      { text: "Row D: Sulfur dioxide | Fossil fuels containing sulfur" }
    ],
    correctAnswer: 2,
    explanation: "* Carbon monoxide ($\\\\text{CO}$) is formed by the INCOMPLETE combustion of carbon-containing fuels (when oxygen supply is limited).\\\\n* Complete combustion produces non-toxic carbon dioxide ($\\\\text{CO}_2$).\\\\n* Therefore, Row C is incorrect.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_env_percentage_oxygen_polluted_air-2026",
    question: "What is the percentage of oxygen to the nearest whole number in polluted air?",
    options: [
      { text: "28%" },
      { text: "21%" },
      { text: "81%" },
      { text: "19%" }
    ],
    correctAnswer: 1,
    explanation: "* Even in polluted city air, pollutants are measured in parts per million (ppm) or very tiny fractions of a percent.\\\\n* The bulk volume of air remains approximately 78% nitrogen and 21% oxygen (rounded to the nearest whole number, it is 21%).",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_env_limestone_crumble_gas-2026",
    question: "The limestone buildings in a city begin to crumble. Which gas is most likely to cause this damage?",
    options: [
      { text: "Carbon dioxide" },
      { text: "Sulfur dioxide" },
      { text: "Carbon monoxide" },
      { text: "Oxygen" }
    ],
    correctAnswer: 1,
    explanation: "* Sulfur dioxide ($\\\\text{SO}_2$) dissolves in rainwater to produce sulfurous and sulfuric acids (acid rain).\\\\n* Sulfuric acid chemically attacks calcium carbonate ($\\\\text{CaCO}_3$) in limestone: $\\\\text{CaCO}_3 + \\\\text{H}_2\\\\text{SO}_4 \\\\rightarrow \\\\text{CaSO}_4 + \\\\text{H}_2\\\\text{O} + \\\\text{CO}_2$, causing the stone surface to soften and crumble.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_env_co2_ch4_comparison_row-2026",
    question: "Which row is correct for both carbon dioxide and methane?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Causes climate change</th><th class="p-2 border">Produced by burning fuels</th><th class="p-2 border">Produced by living organisms</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: Causes climate change (✓), Produced by burning fuels (✗), Produced by living organisms (✓)" },
      { text: "Row B: Causes climate change (✓), Produced by burning fuels (✓), Produced by living organisms (✗)" },
      { text: "Row C: Causes climate change (✓), Produced by burning fuels (✓), Produced by living organisms (✓)" },
      { text: "Row D: Causes climate change (✗), Produced by burning fuels (✓), Produced by living organisms (✓)" }
    ],
    correctAnswer: 2,
    explanation: "* Both $\\\\text{CO}_2$ and $\\\\text{CH}_4$ are greenhouse gases that absorb infrared radiation and cause climate change (✓).\\\\n* Both can be produced in fuel combustion (e.g. incomplete/complete combustion of coal/gas) (✓).\\\\n* Both are produced by living organisms (respiration produces $\\\\text{CO}_2$, and anaerobic bacteria in ruminants produce $\\\\text{CH}_4$) (✓).\\\\n* Therefore, Row C is completely correct.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  }
);
`;

file = file.trimEnd();
if (file.endsWith(')')) {
  file = file + ';\n' + newQuestions;
} else if (file.endsWith(');')) {
  file = file + '\n' + newQuestions;
}
fs.writeFileSync(filePath, file, 'utf8');
console.log('Appended Unit 10 exam questions successfully!');
