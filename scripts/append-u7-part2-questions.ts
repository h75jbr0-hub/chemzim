import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'data', 'exams', 'question-bank.ts');
let file = fs.readFileSync(filePath, 'utf8');

const newQuestions = `
// Cambridge IGCSE Unit 7: Salt Preparation & Practical Exam Questions
questionBank.push(
  {
    id: "q_abs_purpose_step3_step4_cuso4-2026",
    question: "A method used to make copper(II) sulfate crystals is shown:\\n1 Place dilute sulfuric acid in a beaker\\n2 Warm the acid\\n3 Add copper(II) oxide until it is in excess\\n4 Filter the mixture\\n5 Evaporate the filtrate until crystals start to form\\n6 Leave the filtrate to cool\\nWhat are the purposes of step 3 and step 4?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Step 3</th><th class="p-2 border">Step 4</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">to ensure all of the acid has reacted</td><td class="p-2 border">to obtain solid copper(II) sulfate</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">to ensure all of the acid has reacted</td><td class="p-2 border">to remove excess copper(II) oxide</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">to speed up the reaction</td><td class="p-2 border">to obtain solid copper(II) sulfate</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">to speed up the reaction</td><td class="p-2 border">to remove excess copper(II) oxide</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: Step 3 = to ensure all of the acid has reacted | Step 4 = to obtain solid copper(II) sulfate" },
      { text: "Row B: Step 3 = to ensure all of the acid has reacted | Step 4 = to remove excess copper(II) oxide" },
      { text: "Row C: Step 3 = to speed up the reaction | Step 4 = to obtain solid copper(II) sulfate" },
      { text: "Row D: Step 3 = to speed up the reaction | Step 4 = to remove excess copper(II) oxide" }
    ],
    correctAnswer: 1,
    explanation: "* Step 3 adds copper(II) oxide in excess to guarantee that ALL the sulfuric acid has reacted completely, leaving no acid to contaminate the product.\\\\n* Step 4 filters the mixture to remove the unreacted solid copper(II) oxide residue from the soluble copper(II) sulfate solution.\\\\n* Row B is the exact Cambridge mark scheme answer.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_correct_sequence_pure_cuso4-2026",
    question: "What is the correct sequence of steps for the preparation of a pure dry sample of copper(II) sulfate crystals from copper(II) oxide and sulfuric acid?",
    options: [
      { text: "dissolving → crystallization → evaporation → filtration" },
      { text: "dissolving → evaporation → filtration → crystallization" },
      { text: "dissolving → filtration → crystallization → evaporation" },
      { text: "dissolving → filtration → evaporation → crystallization" }
    ],
    correctAnswer: 3,
    explanation: "* Step 1: Dissolving (reacting $\\\\text{CuO}$ with warm $\\\\text{H}_2\\\\text{SO}_4$).\\\\n* Step 2: Filtration (removing unreacted solid $\\\\text{CuO}$).\\\\n* Step 3: Evaporation (heating filtrate to the point of crystallisation).\\\\n* Step 4: Crystallisation (leaving to cool slowly to grow crystals).\\\\n* Sequence D correctly reflects this laboratory procedure.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_excess_not_removed_by_filtration-2026",
    question: "Salts can be made by adding different substances to dilute hydrochloric acid. For which substance could any excess NOT be removed by filtration?",
    options: [
      { text: "Magnesium" },
      { text: "Copper(II) oxide" },
      { text: "Zinc hydroxide" },
      { text: "Sodium hydroxide" }
    ],
    correctAnswer: 3,
    explanation: "* Magnesium metal, copper(II) oxide, and zinc hydroxide are all insoluble in neutral water, so any excess solid can easily be separated by filtration.\\\\n* Sodium hydroxide ($\\\\text{NaOH}$) is an alkali that is completely soluble in water; any excess $\\\\text{NaOH}$ dissolves and passes straight through the filter paper, contaminating the salt solution.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_order_of_stages_metal_oxide_salt-2026",
    question: "Four stages in the preparation of a salt from an acid and a solid metal oxide are listed:\\n1 Add excess solid\\n2 Evaporate half the solution and leave to cool\\n3 Filter to remove unwanted solid\\n4 Heat the acid\\nIn which order should the stages be carried out?",
    options: [
      { text: "1 → 3 → 4 → 2" },
      { text: "4 → 1 → 3 → 2" },
      { text: "2 → 1 → 3 → 4" },
      { text: "4 → 2 → 1 → 3" }
    ],
    correctAnswer: 1,
    explanation: "* First, heat the acid in a beaker to speed up the reaction (Stage 4).\\\\n* Second, add the solid metal oxide until it is in excess (Stage 1).\\\\n* Third, filter the mixture to remove the unreacted solid (Stage 3).\\\\n* Fourth, evaporate half the solution and leave to cool for crystallization (Stage 2).\\\\n* The correct order is 4 → 1 → 3 → 2 (Option B).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_salt_reactions_pqrs_statements-2026",
    question: "A salt is produced in each of the following reactions:\\nP: magnesium + dilute hydrochloric acid\\nQ: zinc oxide + dilute sulfuric acid\\nR: sodium hydroxide + dilute hydrochloric acid\\nS: copper carbonate + dilute sulfuric acid\\nWhich statements about the products of the reactions are correct?\\n1 A flammable gas is produced in reaction P\\n2 Water is formed in all reactions\\n3 All the salts formed are soluble in water",
    options: [
      { text: "1, 2 and 3" },
      { text: "1 and 2" },
      { text: "1 and 3" },
      { text: "2 and 3" }
    ],
    correctAnswer: 2,
    explanation: "* Statement 1 is correct: Reaction P produces hydrogen gas ($\\\\text{H}_2$), which is highly flammable.\\\\n* Statement 2 is incorrect: Reaction P produces $\\\\text{MgCl}_2 + \\\\text{H}_2$ (NO water is formed). Water is formed only in Q, R, and S.\\\\n* Statement 3 is correct: $\\\\text{MgCl}_2$, $\\\\text{ZnSO}_4$, $\\\\text{NaCl}$, and $\\\\text{CuSO}_4$ are all completely soluble in water.\\\\n* Therefore, statements 1 and 3 are correct (Option C).",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_zinc_sulfate_unnecessary_equipment-2026",
    question: "Zinc sulfate is a soluble salt and can be prepared by reacting excess zinc carbonate with dilute sulfuric acid. Which piece of equipment would NOT be required in the preparation of zinc sulfate crystals?",
    options: [
      { text: "A condenser" },
      { text: "A filter funnel" },
      { text: "An evaporating dish" },
      { text: "A beaker" }
    ],
    correctAnswer: 0,
    explanation: "* A condenser is used in distillation to condense vapours back to liquid.\\\\n* Preparing crystals requires a beaker (to mix acid and carbonate), a filter funnel (to remove excess carbonate), and an evaporating dish (to heat the filtrate to crystallization point). A condenser is not needed.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_burette_pipette_salt_prep-2026",
    question: "Which salt preparation uses a burette and a pipette?",
    options: [
      { text: "calcium nitrate from calcium carbonate and nitric acid" },
      { text: "potassium chloride from potassium hydroxide and hydrochloric acid" },
      { text: "copper(II) sulfate from copper(II) hydroxide and sulfuric acid" },
      { text: "zinc chloride from zinc and hydrochloric acid" }
    ],
    correctAnswer: 1,
    explanation: "* A burette and pipette are the standard apparatus used in titration (Method B).\\\\n* Titration is required when reacting an acid with a soluble base/alkali (such as $\\\\text{KOH}$) to prepare a Group I soluble salt like $\\\\text{KCl}$.\\\\n* The other salts are made by adding an excess of insoluble solid (Method A).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_acid_reacts_ammonia_ammonium_sulfate-2026",
    question: "Which acid reacts with ammonia to produce the salt ammonium sulfate?",
    options: [
      { text: "hydrochloric" },
      { text: "nitric" },
      { text: "phosphoric" },
      { text: "sulfuric" }
    ],
    correctAnswer: 3,
    explanation: "* Ammonia ($\\\\text{NH}_3$) reacts with sulfuric acid ($\\\\text{H}_2\\\\text{SO}_4$) to form ammonium sulfate ((\\\\text{NH}_4)_2\\\\text{SO}_4): $2\\\\text{NH}_3 + \\\\text{H}_2\\\\text{SO}_4 \\\\rightarrow (\\\\text{NH}_4)_2\\\\text{SO}_4$.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_excess_metal_oxide_removed_how-2026",
    question: "A salt is made by adding an excess of an insoluble metal oxide to an acid. How can the excess metal oxide be removed?",
    options: [
      { text: "chromatography" },
      { text: "crystallization" },
      { text: "filtration" },
      { text: "distillation" }
    ],
    correctAnswer: 2,
    explanation: "* Insoluble solid particles suspended in a liquid are separated using filtration.\\\\n* The unreacted metal oxide remains on the filter paper as the residue, while the clear salt solution passes through as the filtrate.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_methods_prepare_copper_chloride-2026",
    question: "Salts can be prepared by reacting a dilute acid:\\n1 with a metal\\n2 with a base\\n3 with a carbonate\\nWhich methods could be used to prepare copper(II) chloride?",
    options: [
      { text: "1, 2 and 3" },
      { text: "2 and 3" },
      { text: "1 and 3" },
      { text: "1 and 2" }
    ],
    correctAnswer: 1,
    explanation: "* Copper is below hydrogen in the reactivity series, so copper metal does NOT react with dilute hydrochloric acid (Method 1 cannot be used).\\\\n* Copper(II) chloride can be prepared by reacting dilute $\\\\text{HCl}$ with a base ($\\\\text{CuO}$ or $\\\\text{Cu(OH)}_2$, Method 2) or with a carbonate ($\\\\text{CuCO}_3$, Method 3).\\\\n* Therefore, methods 2 and 3 can be used (Option B).",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
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
console.log('Appended Unit 7 exam questions successfully!');
