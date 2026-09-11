import { Question } from '../../../types';

// Extraction of Metals - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u9_l3_lv3_1-2026",
    question: "During the electrolytic extraction of aluminium from molten Al₂O₃/cryolite, why do the graphite (carbon) anodes need to be replaced periodically?",
    options: [
      { text: "Oxygen gas released at the hot positive anodes reacts with the carbon, forming carbon dioxide gas and burning the anodes away", isCorrect: true },
      { text: "Aluminium metal coats the anodes and prevents current flow" },
      { text: "Cryolite dissolves the graphite anodes over time" },
      { text: "The anodes melt at the operating temperature of 950°C" }
    ],
    correctAnswer: 0,
    explanation: "* At the positive anode: 2O²⁻ → O₂ + 4e⁻.\n* At ~950°C, the liberated oxygen gas reacts with the carbon anode: C(s) + O₂(g) → CO₂(g), steadily consuming the graphite blocks.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q324",
    createdAt: "2026-08-21T15:35:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv3_2-2026",
    question: "What mass of pure iron (Fe, $A_r = 56$) can theoretically be extracted from 320 tonnes of pure hematite (Fe₂O₃, $M_r = 160$)?",
    options: [
      { text: "224 tonnes", isCorrect: true },
      { text: "112 tonnes" },
      { text: "160 tonnes" },
      { text: "280 tonnes" }
    ],
    correctAnswer: 0,
    explanation: "* Percentage of Fe in Fe₂O₃ $= (2 \\times 56 / 160) \\times 100\\% = (112 / 160) \\times 100\\% = 70\\%$.\n* Theoretical mass of Fe $= 0.70 \\times 320\\text{ tonnes} = 224\\text{ tonnes}$.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q325",
    createdAt: "2026-08-21T15:40:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv3_3-2026",
    question: "Which equation represents the cathodic half-reaction in the industrial extraction of aluminium?",
    options: [
      { text: "Al³⁺ + 3e⁻ → Al(l)", isCorrect: true },
      { text: "Al → Al³⁺ + 3e⁻" },
      { text: "2O²⁻ → O₂ + 4e⁻" },
      { text: "Al³⁺ + 3OH⁻ → Al(OH)₃" }
    ],
    correctAnswer: 0,
    explanation: "* At the negative graphite cathode (lining of the cell), aluminium ions gain electrons (reduction) to form molten aluminium: Al³⁺ + 3e⁻ → Al(l).",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q326",
    createdAt: "2026-08-21T15:45:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv3_4-2023",
    question: "During the electrolysis of molten aluminium oxide dissolved in cryolite, why do the carbon anodes need to be replaced periodically?",
    options: [
      { text: "Oxygen produced at the anode reacts with the hot carbon electrodes to form carbon dioxide gas", isCorrect: true },
      { text: "Aluminium metal coats the anode and prevents electrical conduction" },
      { text: "The carbon anodes melt at the operating temperature" },
      { text: "Cryolite dissolves the carbon anodes into a soluble complex" }
    ],
    correctAnswer: 0,
    explanation: "* At the positive anode: 2O²⁻ → O₂ + 4e⁻.\n* The liberated oxygen reacts with the red-hot carbon (graphite) anodes at ~950 °C: C(s) + O₂(g) → CO₂(g).\n* This continuously burns away the anodes, which must therefore be replaced regularly.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q92",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv3_5-2024",
    question: "What is the half-equation for the reaction taking place at the negative cathode during the extraction of aluminium by electrolysis?",
    options: [
      { text: "Al³⁺ + 3e⁻ → Al(l)", isCorrect: true },
      { text: "Al → Al³⁺ + 3e⁻" },
      { text: "2O²⁻ → O₂ + 4e⁻" },
      { text: "Al³⁺ + 3O²⁻ → Al₂O₃" }
    ],
    correctAnswer: 0,
    explanation: "* Positive aluminium ions (Al³⁺) migrate to the negative cathode.\n* At the cathode, they gain electrons (reduction): Al³⁺ + 3e⁻ → Al(l), collecting as liquid metal at the bottom of the cell.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q93",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv3_6-2025",
    question: "What mass of iron can be extracted from 80 tonnes of pure iron(III) oxide (hematite, Fe₂O₃)?\n($A_r: \\text{Fe} = 56, \\text{O} = 16$)",
    options: [
      { text: "56 tonnes", isCorrect: true },
      { text: "28 tonnes" },
      { text: "40 tonnes" },
      { text: "70 tonnes" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r(\\text{Fe}_2\\text{O}_3) = (2 \\times 56) + (3 \\times 16) = 112 + 48 = 160$.\n* Mass fraction of iron = $(2 \\times 56) / 160 = 112 / 160 = 0.70$ (or 70%).\n* Mass of iron = 0.70 × 80 tonnes = 56 tonnes.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q94",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
