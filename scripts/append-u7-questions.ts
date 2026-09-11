import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'data', 'exams', 'question-bank.ts');
let file = fs.readFileSync(filePath, 'utf8');

const newQuestions = `
// Cambridge IGCSE Unit 7: Acids, Bases and Salts Questions
questionBank.push(
  {
    id: "q_abs_not_characteristic_base-2026",
    question: "Which property is NOT a characteristic of a base?",
    options: [
      { text: "It reacts with a carbonate to form carbon dioxide" },
      { text: "It reacts with an acid to form a salt" },
      { text: "It reacts with an ammonium salt to form ammonia" },
      { text: "It turns universal indicator paper blue" }
    ],
    correctAnswer: 0,
    explanation: "* Acids react with metal carbonates to liberate carbon dioxide gas ($\\\\text{CO}_2$).\\\\n* Bases do not react with metal carbonates to form carbon dioxide.\\\\n* Bases react with acids to form salt and water, react with ammonium salts to release ammonia, and turn universal indicator blue or purple.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_not_characteristic_acid-2026",
    question: "Which property is NOT a characteristic of an acid?",
    options: [
      { text: "It dissolves magnesium oxide" },
      { text: "It produces ammonia from ammonium compounds" },
      { text: "It produces carbon dioxide from a carbonate" },
      { text: "It produces hydrogen from zinc metal" }
    ],
    correctAnswer: 1,
    explanation: "* Bases and alkalis produce ammonia gas when warmed with ammonium compounds.\\\\n* Acids do NOT react with ammonium salts to release ammonia.\\\\n* Acids dissolve basic metal oxides (like $\\\\text{MgO}$), liberate $\\\\text{CO}_2$ from carbonates, and produce $\\\\text{H}_2$ gas from reactive metals like zinc.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_acidity_increases_ph_incorrect-2026",
    question: "Which statement is NOT correct?",
    options: [
      { text: "When a base reacts with an ammonium salt, ammonia is given off" },
      { text: "When an acid reacts with a base, neutralization takes place" },
      { text: "When an acid reacts with a carbonate, carbon dioxide is given off" },
      { text: "When the acidity of a solution increases, the pH increases" }
    ],
    correctAnswer: 3,
    explanation: "* The pH scale has an inverse relationship with acidity (hydrogen ion concentration $[\text{H}^+]$).\\\\n* As the acidity of a solution increases, the pH decreases (a lower pH value signifies greater acidity).\\\\n* Therefore, statement D is false and chemically incorrect.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_metal_oxide_cleaning-2026",
    question: "Hydrochloric acid is used to clean metals. The acid reacts with the oxide layer on the surface of the metal, forming a salt and water. Which word describes the metal oxide?",
    options: [
      { text: "A base" },
      { text: "An alloy" },
      { text: "An element" },
      { text: "An indicator" }
    ],
    correctAnswer: 0,
    explanation: "* Metal oxides react with acids to undergo neutralisation, producing a salt and water.\\\\n* By definition, a substance that neutralises an acid to form a salt and water is a base.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_two_statements_acid_prop-2026",
    question: "Which statements are properties of an acid?\\nStatement 1: Reacts with ammonium sulfate to form ammonia.\\nStatement 2: Turns red litmus blue.",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">1</th><th class="p-2 border">2</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">✗</td><td class="p-2 border">✗</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: 1 (✓), 2 (✓)" },
      { text: "Row B: 1 (✓), 2 (✗)" },
      { text: "Row C: 1 (✗), 2 (✓)" },
      { text: "Row D: 1 (✗), 2 (✗)" }
    ],
    correctAnswer: 3,
    explanation: "* Statement 1 is a property of a base/alkali, not an acid (bases liberate $\\\\text{NH}_3$ from ammonium salts).\\\\n* Statement 2 is also a property of a base/alkali (alkalis turn red litmus blue, while acids turn blue litmus red).\\\\n* Therefore, neither statement is a property of an acid, making Row D correct.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_sodium_carbonate_hcl_balanced-2026",
    question: "Which equation for the reaction between solid sodium carbonate and dilute hydrochloric acid is correct?",
    options: [
      { text: "$\\\\text{Na}_2\\\\text{CO}_3\\\\text{(s)} + \\\\text{HCl}\\\\text{(aq)} \\\\rightarrow \\\\text{NaCl}\\\\text{(aq)} + \\\\text{CO}_2\\\\text{(g)} + \\\\text{H}_2\\\\text{O(l)}$" },
      { text: "$\\\\text{Na}_2\\\\text{CO}_3\\\\text{(s)} + \\\\text{HCl}\\\\text{(aq)} \\\\rightarrow \\\\text{Na}_2\\\\text{Cl}\\\\text{(aq)} + \\\\text{CO}_2\\\\text{(g)} + \\\\text{H}_2\\\\text{O(l)}$" },
      { text: "$\\\\text{Na}_2\\\\text{CO}_3\\\\text{(s)} + 2\\\\text{HCl}\\\\text{(aq)} \\\\rightarrow \\\\text{NaCl}\\\\text{(aq)} + \\\\text{CO}_2\\\\text{(g)} + \\\\text{H}_2\\\\text{O(l)}$" },
      { text: "$\\\\text{Na}_2\\\\text{CO}_3\\\\text{(s)} + 2\\\\text{HCl}\\\\text{(aq)} \\\\rightarrow 2\\\\text{NaCl}\\\\text{(aq)} + \\\\text{CO}_2\\\\text{(g)} + \\\\text{H}_2\\\\text{O(l)}$" }
    ],
    correctAnswer: 3,
    explanation: "* Sodium carbonate is $\\\\text{Na}_2\\\\text{CO}_3$, containing 2 sodium atoms.\\\\n* Each sodium forms $\\\\text{NaCl}$, requiring 2 moles of $\\\\text{HCl}$ to balance the chlorine atoms and supply hydrogen for water.\\\\n* The stoichiometric balanced equation is $\\\\text{Na}_2\\\\text{CO}_3 + 2\\\\text{HCl} \\\\rightarrow 2\\\\text{NaCl} + \\\\text{H}_2\\\\text{O} + \\\\text{CO}_2$.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_most_acidic_substance-2026",
    question: "The table shows the pH of four substances: Calcium hydroxide (pH 12), Lemon juice (pH 4), Milk (pH 6), and Washing up liquid (pH 8). Which substance is the most acidic?",
    options: [
      { text: "Calcium hydroxide" },
      { text: "Lemon juice" },
      { text: "Milk" },
      { text: "Washing up liquid" }
    ],
    correctAnswer: 1,
    explanation: "* On the pH scale, lower numbers indicate greater acidity.\\\\n* Lemon juice has the lowest pH value ($\\\\text{pH} = 4$), which means it has the highest concentration of hydrogen ions ($[\\\\text{H}^+]$) among the four options.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_universal_indicator_wxyz-2026",
    question: "The table shows the pH of four aqueous solutions: W (pH 7), X (pH 9), Y (pH 2), and Z (pH 5). Universal Indicator is added to each solution. Which row shows the color of each solution after the indicator is added?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">W (pH 7)</th><th class="p-2 border">X (pH 9)</th><th class="p-2 border">Y (pH 2)</th><th class="p-2 border">Z (pH 5)</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Green</td><td class="p-2 border">Blue</td><td class="p-2 border">Red</td><td class="p-2 border">Orange</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Blue</td><td class="p-2 border">Green</td><td class="p-2 border">Orange</td><td class="p-2 border">Red</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Orange</td><td class="p-2 border">Red</td><td class="p-2 border">Blue</td><td class="p-2 border">Green</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Red</td><td class="p-2 border">Orange</td><td class="p-2 border">Green</td><td class="p-2 border">Blue</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: Green | Blue | Red | Orange" },
      { text: "Row B: Blue | Green | Orange | Red" },
      { text: "Row C: Orange | Red | Blue | Green" },
      { text: "Row D: Red | Orange | Green | Blue" }
    ],
    correctAnswer: 0,
    explanation: "* At $\\\\text{pH} = 7$ (neutral), Universal Indicator is green.\\\\n* At $\\\\text{pH} = 9$ (weakly alkaline), it is blue.\\\\n* At $\\\\text{pH} = 2$ (strongly acidic), it is red.\\\\n* At $\\\\text{pH} = 5$ (weakly acidic), it is orange or yellow.\\\\n* Therefore, Row A is completely correct.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_periodic_acidic_oxide_element-2026",
    question: "A section of the Periodic Table is shown with elements labeled A (Group I metal), B (Group III metal), C (Group VI non-metal), and D (Group VII non-metal / noble gas period 4). Which element forms an acidic oxide?",
    options: [
      { text: "Element A" },
      { text: "Element B" },
      { text: "Element C" },
      { text: "Element D" }
    ],
    correctAnswer: 2,
    explanation: "* Non-metallic elements (such as sulfur or carbon in Group IV-VI) form covalent acidic oxides.\\\\n* Metallic elements in Group I and II form basic oxides.\\\\n* Element C is located in the non-metal region (Group VI), so its oxide is acidic.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_oxides_xy_metal_nonmetal-2026",
    question: "The oxide of element X forms an aqueous solution with pH 4. The oxide of element Y forms a solution that turns Universal Indicator blue. Which row correctly classifies elements X and Y?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Element X</th><th class="p-2 border">Element Y</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Metal</td><td class="p-2 border">Metal</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Non-metal</td><td class="p-2 border">Metal</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Metal</td><td class="p-2 border">Non-metal</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Non-metal</td><td class="p-2 border">Non-metal</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: Metal | Metal" },
      { text: "Row B: Non-metal | Metal" },
      { text: "Row C: Metal | Non-metal" },
      { text: "Row D: Non-metal | Non-metal" }
    ],
    correctAnswer: 1,
    explanation: "* Oxide of X has $\\\\text{pH} = 4$ (acidic), so X must be a non-metal.\\\\n* Oxide of Y turns Universal Indicator blue (alkaline), so Y must be a metal (basic oxide forming an alkali).\\\\n* Row B correctly classifies X as a non-metal and Y as a metal.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_two_oxides_reactions_xy-2026",
    question: "Two oxides, X and Y, are added separately to dilute sulfuric acid and dilute sodium hydroxide:\\n* X reacts with dilute sulfuric acid, but does NOT react with sodium hydroxide.\\n* Y reacts with aqueous sodium hydroxide, but does NOT react with sulfuric acid.\\nWhich type of oxide are X and Y?",
    tableHtml: \`<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Acidic oxide</th><th class="p-2 border">Basic oxide</th><th class="p-2 border">Metallic oxide</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">X</td><td class="p-2 border">Y</td><td class="p-2 border">X</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">X</td><td class="p-2 border">Y</td><td class="p-2 border">Y</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Y</td><td class="p-2 border">X</td><td class="p-2 border">X</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Y</td><td class="p-2 border">X</td><td class="p-2 border">Y</td></tr></tbody></table>\`,
    options: [
      { text: "Row A: Acidic = X, Basic = Y, Metallic = X" },
      { text: "Row B: Acidic = X, Basic = Y, Metallic = Y" },
      { text: "Row C: Acidic = Y, Basic = X, Metallic = X" },
      { text: "Row D: Acidic = Y, Basic = X, Metallic = Y" }
    ],
    correctAnswer: 2,
    explanation: "* Oxide X reacts with acid but not alkali $\\\\rightarrow$ X is a basic oxide (metal oxide).\\\\n* Oxide Y reacts with alkali but not acid $\\\\rightarrow$ Y is an acidic oxide (non-metal oxide).\\\\n* Row C correctly identifies Y as acidic oxide, X as basic oxide, and X as metallic oxide.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_statement_about_oxides_correct-2026",
    question: "Which statement about oxides is correct?",
    options: [
      { text: "Magnesium oxide will react with nitric acid to make a salt" },
      { text: "A solution of magnesium oxide will have a pH less than 7" },
      { text: "A solution of sulfur dioxide will have a pH greater than 7" },
      { text: "Sulfur dioxide will react with hydrochloric acid to make a salt" }
    ],
    correctAnswer: 0,
    explanation: "* Magnesium oxide ($\\\\text{MgO}$) is a basic metal oxide.\\\\n* Basic oxides react with acids (such as nitric acid, $\\\\text{HNO}_3$) to form salt (magnesium nitrate) and water.\\\\n* Basic solutions have $\\\\text{pH} > 7$, while sulfur dioxide is an acidic oxide that forms sulfurous acid ($\\\\text{pH} < 7$).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_co2_aqueous_caoh2_reaction_type-2026",
    question: "Carbon dioxide is an acidic oxide that reacts with aqueous calcium hydroxide (limewater). Which type of reaction takes place?",
    options: [
      { text: "Decomposition" },
      { text: "Neutralization" },
      { text: "Fermentation" },
      { text: "Oxidation" }
    ],
    correctAnswer: 1,
    explanation: "* Carbon dioxide is an acidic oxide, and calcium hydroxide is an alkaline base.\\\\n* The reaction between an acidic oxide and an alkali forms a salt ($\\\\text{CaCO}_3$) and water ($\\\\text{H}_2\\\\text{O}$), which is a neutralisation reaction.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
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
console.log('Appended Unit 7 questions successfully!');
