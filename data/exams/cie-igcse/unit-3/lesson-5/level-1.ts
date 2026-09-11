import { Question } from '../../../types';

// Concentrations, Yield & Purity - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u3_l5_lv1_1-2026",
    question: "What is the concentration of a solution containing 0.20 moles of sodium hydroxide dissolved in 250 cm³ of water?",
    options: [
      { text: "0.80 mol/dm³", isCorrect: true },
      { text: "0.50 mol/dm³" },
      { text: "0.05 mol/dm³" },
      { text: "0.08 mol/dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Convert volume to dm³: $250\\text{ cm}^3 = 250 / 1000 = 0.25\\text{ dm}^3$.\n* Formula: $\\text{Concentration} = \\text{Moles} / \\text{Volume in dm}^3$.\n* Concentration $= 0.20 / 0.25 = 0.80\\text{ mol/dm}^3$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q48",
    createdAt: "2026-08-20T13:05:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv1_2-2026",
    question: "In an experiment to produce copper(II) sulfate crystals, the theoretical yield of crystals was calculated to be 10.0 g.\nThe actual mass of crystals obtained was 8.0 g.\nWhat is the percentage yield of copper(II) sulfate crystals?",
    options: [
      { text: "80%", isCorrect: true },
      { text: "20%" },
      { text: "125%" },
      { text: "50%" }
    ],
    correctAnswer: 0,
    explanation: "* Formula: $\\text{Percentage Yield} = (\\text{Actual Yield} / \\text{Theoretical Yield}) \\times 100\\%$.\n* Percentage Yield $= (8.0 / 10.0) \\times 100\\% = 80\\%$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q49",
    createdAt: "2026-08-20T13:10:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv1_3-2026",
    question: "A 5.0 g sample of impure limestone contains 4.0 g of calcium carbonate, CaCO₃.\nWhat is the percentage purity of the limestone sample?",
    options: [
      { text: "20%" },
      { text: "80%", isCorrect: true },
      { text: "90%" },
      { text: "60%" }
    ],
    correctAnswer: 1,
    explanation: "* Formula: $\\text{Percentage Purity} = (\\text{Mass of pure substance} / \\text{Mass of impure sample}) \\times 100\\%$.\n* Percentage Purity $= (4.0 / 5.0) \\times 100\\% = 80\\%$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q50",
    createdAt: "2026-08-20T13:15:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv1_4-2023",
    question: "What mass of sodium hydroxide, NaOH, is dissolved in $500\\text{ cm}^3$ of a $0.10\\text{ mol/dm}^3$ aqueous solution?\n(Given: $A_r$: Na = 23, O = 16, H = 1)",
    options: [
      { text: "2.0 g", isCorrect: true },
      { text: "4.0 g" },
      { text: "8.0 g" },
      { text: "20.0 g" }
    ],
    correctAnswer: 0,
    explanation: "* Volume in $\\text{dm}^3 = \\frac{500}{1000} = 0.50\\text{ dm}^3$.\n* $\\text{Moles of NaOH} = \\text{concentration} \\times \\text{volume} = 0.10 \\times 0.50 = 0.050\\text{ mol}$.\n* $M_r$ of NaOH $= 23 + 16 + 1 = 40\\text{ g/mol}$.\n* $\\text{Mass} = 0.050 \\times 40 = 2.0\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q18",
    lessonNum: 5,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv1_5-2024",
    question: "In a manufacturing process, 200 g of reactant was expected to produce 150 g of product theoretically. The actual yield collected was 120 g. What is the percentage yield?",
    options: [
      { text: "60%" },
      { text: "75%" },
      { text: "80%", isCorrect: true },
      { text: "85%" }
    ],
    correctAnswer: 2,
    explanation: "* $\\%\\text{ Yield} = \\frac{\\text{Actual mass}}{\\text{Theoretical mass}} \\times 100\\%$.\n* $\\%\\text{ Yield} = \\frac{120}{150} \\times 100\\% = 80.0\\%$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q18",
    lessonNum: 5,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv1_6-2025",
    question: "A sample of 25.0 g of rock salt contains 22.5 g of pure sodium chloride ($NaCl$). What is the percentage purity of the rock salt?",
    options: [
      { text: "80%" },
      { text: "90%", isCorrect: true },
      { text: "92%" },
      { text: "95%" }
    ],
    correctAnswer: 1,
    explanation: "* $\\%\\text{ Purity} = \\frac{\\text{Mass of pure NaCl}}{\\text{Total mass of sample}} \\times 100\\%$.\n* $\\%\\text{ Purity} = \\frac{22.5}{25.0} \\times 100\\% = 90.0\\%$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q19",
    lessonNum: 5,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

