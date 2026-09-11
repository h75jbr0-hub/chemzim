import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'data', 'exams', 'question-bank.ts');
let file = fs.readFileSync(filePath, 'utf8');

const newQuestions = `
// Cambridge IGCSE Unit 4: Electrochemistry Questions
questionBank.push(
  {
    id: "q_elc_hcl_nacl_hydrogen_prod-2026",
    question: "The diagram shows the electrolysis of concentrated hydrochloric acid and concentrated aqueous sodium chloride using carbon electrodes.\\nCell 1: Concentrated hydrochloric acid with electrode 1 (+) and electrode 2 (-).\\nCell 2: Concentrated aqueous sodium chloride with electrode 3 (+) and electrode 4 (-).\\nAt which electrode(s) is hydrogen produced?",
    options: [
      { text: "Electrode 1 only" },
      { text: "Electrodes 1 and 3" },
      { text: "Electrodes 2 and 4" },
      { text: "Electrode 2 only" }
    ],
    correctAnswer: 2,
    explanation: "* Hydrogen ions ($\\\\text{H}^+$) are positively charged cations attracted to the negative cathode.\\n* In Cell 1 (conc. $\\\\text{HCl}$), the negative electrode is electrode 2; $\\\\text{H}^+$ is reduced to produce $\\\\text{H}_2\\\\text{(g)}.\\n* In Cell 2 (conc. $\\\\text{NaCl}$), the negative electrode is electrode 4; $\\\\text{Na}^+$ is more reactive than $\\\\text{H}^+$, so $\\\\text{H}^+$ is discharged to produce $\\\\text{H}_2\\\\text{(g)}.\\n* Therefore, hydrogen gas is produced at both electrodes 2 and 4.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_not_electroplated_aqueous-2026",
    question: "Which metal could not be used for electroplating by using an aqueous solution?",
    options: [
      { text: "Chromium" },
      { text: "Copper" },
      { text: "Sodium" },
      { text: "Silver" }
    ],
    correctAnswer: 2,
    explanation: "* In aqueous solutions, $\\\\text{H}^+$ ions from water are present at the cathode.\\n* Sodium is a highly reactive metal situated far above hydrogen in the reactivity series.\\n* Therefore, $\\\\text{H}^+$ is discharged preferentially over $\\\\text{Na}^+$, forming hydrogen gas rather than depositing sodium metal.\\n* Additionally, any sodium formed would immediately react violently with water.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_gas_ratio_substance_x-2026",
    question: "When substance X is electrolyzed, the amount of gases P and Q formed is shown, where the volume of gas P is twice the volume of gas Q. What is substance X?",
    options: [
      { text: "Molten lead(II) bromide" },
      { text: "Concentrated hydrochloric acid" },
      { text: "Concentrated aqueous sodium chloride" },
      { text: "Dilute sulfuric acid" }
    ],
    correctAnswer: 3,
    explanation: "* Dilute sulfuric acid is essentially the electrolysis of acidified water: $2\\\\text{H}_2\\\\text{O(l)} \\\\rightarrow 2\\\\text{H}_2\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)}.\\n* At the cathode, hydrogen gas (P) is evolved: $4\\\\text{H}^+ + 4e^- \\\\rightarrow 2\\\\text{H}_2$.\\n* At the anode, oxygen gas (Q) is evolved: $4\\\\text{OH}^- \\\\rightarrow \\\\text{O}_2 + 2\\\\text{H}_2\\\\text{O} + 4e^-$.\\n* The volume ratio of $\\\\text{H}_2 : \\\\text{O}_2$ produced is exactly $2 : 1$.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_dilute_h2so4_products-2026",
    question: "What are the products at the electrodes when dilute sulfuric acid is electrolyzed using inert electrodes?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Anode (+)</th><th class="p-2 border">Cathode (-)</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Hydrogen</td><td class="p-2 border">Oxygen</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Sulfur</td><td class="p-2 border">Oxygen</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Oxygen</td><td class="p-2 border">Hydrogen</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Sulfur oxide</td><td class="p-2 border">Hydrogen</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: Anode = Hydrogen, Cathode = Oxygen" },
      { text: "Row B: Anode = Sulfur, Cathode = Oxygen" },
      { text: "Row C: Anode = Oxygen, Cathode = Hydrogen" },
      { text: "Row D: Anode = Sulfur oxide, Cathode = Hydrogen" }
    ],
    correctAnswer: 2,
    explanation: "* At the positive anode (+), hydroxide ions ($\\\\text{OH}^-$) are oxidised in preference to sulfate ions ($\\\\text{SO}_4^{2-}$), producing oxygen gas ($\\\\text{O}_2$).\\n* At the negative cathode (-), hydrogen ions ($\\\\text{H}^+$) are reduced to form hydrogen gas ($\\\\text{H}_2$).\\n* Row C correctly identifies Oxygen at the anode and Hydrogen at the cathode.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_failed_pan_electroplating-2026",
    question: "A student sets up an apparatus for plating a steel pan with copper, but mistakenly connects the copper to the cathode (-) and the pan to the anode (+). Which action will correctly plate the pan with copper?",
    options: [
      { text: "Making the pan the cathode and the copper the anode" },
      { text: "Heating the copper sulfate solution to boiling point" },
      { text: "Increasing the voltage from 3 V to 6 V" },
      { text: "Cooling the copper sulfate solution in an ice bath" }
    ],
    correctAnswer: 0,
    explanation: "* In electroplating, the object to be coated MUST always be connected to the negative terminal as the cathode (-).\\n* Positive metal cations ($\\\\text{Cu}^{2+}$) in the electrolyte are attracted to the cathode where they gain electrons and deposit as metallic copper.\\n* The pure metal coating source (copper) must be the anode (+).",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_molten_silver_iodide-2026",
    question: "What are the electrode products when molten silver iodide is electrolyzed between inert electrodes?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Anode (+)</th><th class="p-2 border">Cathode (-)</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Hydrogen</td><td class="p-2 border">Iodine</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Iodine</td><td class="p-2 border">Silver</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Silver</td><td class="p-2 border">Iodine</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Silver</td><td class="p-2 border">Oxygen</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: Anode = Hydrogen, Cathode = Iodine" },
      { text: "Row B: Anode = Iodine, Cathode = Silver" },
      { text: "Row C: Anode = Silver, Cathode = Iodine" },
      { text: "Row D: Anode = Silver, Cathode = Oxygen" }
    ],
    correctAnswer: 1,
    explanation: "* Molten silver iodide contains only $\\\\text{Ag}^+$ and $\\\\text{I}^-$ ions (no water present).\\n* At the positive anode (+), negative iodide ions are oxidised to form iodine: $2\\\\text{I}^- \\\\rightarrow \\\\text{I}_2 + 2e^-$.\\n* At the negative cathode (-), positive silver ions are reduced to form silver metal: $\\\\text{Ag}^+ + e^- \\\\rightarrow \\\\text{Ag}$.\\n* Row B correctly gives Iodine at the anode and Silver at the cathode.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_molten_kbr_row-2026",
    question: "Which row describes the electrolysis of molten potassium bromide?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Anode (+)</th><th class="p-2 border">Cathode (-)</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Bromine</td><td class="p-2 border">Hydrogen</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Bromine</td><td class="p-2 border">Potassium</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Hydrogen</td><td class="p-2 border">Bromine</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Potassium</td><td class="p-2 border">Bromine</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: Anode = Bromine, Cathode = Hydrogen" },
      { text: "Row B: Anode = Bromine, Cathode = Potassium" },
      { text: "Row C: Anode = Hydrogen, Cathode = Bromine" },
      { text: "Row D: Anode = Potassium, Cathode = Bromine" }
    ],
    correctAnswer: 1,
    explanation: "* In molten potassium bromide ($\\\\text{KBr}$), no water is present.\\n* Bromide ions ($\\\\text{Br}^-$) lose electrons at the positive anode to form bromine ($\\\\text{Br}_2$).\\n* Potassium ions ($\\\\text{K}^+$) gain electrons at the negative cathode to form potassium metal ($\\\\text{K}$).\\n* Row B is the correct answer.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_silver_plating_spoon_incorrect-2026",
    question: "The diagram shows apparatus for plating a spoon with silver. Which statement is NOT correct?",
    options: [
      { text: "The metal electrode would be made from silver" },
      { text: "The electrolyte would be a silver salt dissolved in water" },
      { text: "The spoon would be connected to the negative terminal of the power supply" },
      { text: "Silver would stick to the spoon because it is a very reactive metal" }
    ],
    correctAnswer: 3,
    explanation: "* Silver is an unreactive precious metal near the bottom of the reactivity series, NOT a very reactive metal.\\n* Silver deposits on the spoon because silver cations ($\\\\text{Ag}^+$) gain electrons (are reduced) at the cathode surface to form solid silver coating.\\n* Statements A, B, and C are correct principles of electroplating.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_nacl_litmus_five_minutes-2026",
    question: "The diagram shows the electrolysis of concentrated aqueous sodium chloride in a U-tube containing litmus indicator. What is the color of the litmus at each electrode after five minutes?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Color at anode (+)</th><th class="p-2 border">Color at cathode (-)</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Blue</td><td class="p-2 border">Red</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Red</td><td class="p-2 border">Blue</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Yellow</td><td class="p-2 border">Colorless</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Colorless</td><td class="p-2 border">Blue</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: Anode = Blue, Cathode = Red" },
      { text: "Row B: Anode = Red, Cathode = Blue" },
      { text: "Row C: Anode = Yellow, Cathode = Colorless" },
      { text: "Row D: Anode = Colorless, Cathode = Blue" }
    ],
    correctAnswer: 3,
    explanation: "* At the anode (+), chlorine gas ($\\\\text{Cl}_2$) is liberated. Chlorine is a powerful bleaching agent that rapidly bleaches litmus to completely colorless.\\n* At the cathode (-), hydrogen gas ($\\\\text{H}_2$) is evolved, leaving an excess of hydroxide ions ($\\\\text{OH}^-$) in solution. This strongly alkaline sodium hydroxide solution turns litmus blue.\\n* Row D correctly matches both electrode observations.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
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
console.log('Appended successfully!');
