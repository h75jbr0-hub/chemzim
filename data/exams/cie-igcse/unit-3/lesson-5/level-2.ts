import { Question } from '../../../types';

// Concentrations, Yield & Purity - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u3_l5_lv2_1-2026",
    question: "What is the concentration of a solution containing 14.8 g of calcium hydroxide, Ca(OH)₂, dissolved in 500 cm³ of water?\n(Given: $M_r$ of Ca(OH)₂ = 74)",
    options: [
      { text: "0.20 mol/dm³" },
      { text: "0.40 mol/dm³", isCorrect: true },
      { text: "0.10 mol/dm³" },
      { text: "0.80 mol/dm³" }
    ],
    correctAnswer: 1,
    explanation: "* Convert volume to dm³: $500\\text{ cm}^3 = 0.50\\text{ dm}^3$.\n* Moles of Ca(OH)₂ $= 14.8 / 74 = 0.20\\text{ mol}$.\n* Concentration $= 0.20 / 0.50 = 0.40\\text{ mol/dm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q51",
    createdAt: "2026-08-20T13:20:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv2_2-2026",
    question: "What volume of 2.0 mol/dm³ hydrochloric acid, HCl, contains 0.10 moles of the acid?",
    options: [
      { text: "50 cm³", isCorrect: true },
      { text: "100 cm³" },
      { text: "20 cm³" },
      { text: "200 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Formula: $\\text{Volume in dm}^3 = \\text{Moles} / \\text{Concentration}$.\n* Volume $= 0.10 / 2.0 = 0.05\\text{ dm}^3$.\n* Convert to cm³: $0.05 \\times 1000 = 50\\text{ cm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q52",
    createdAt: "2026-08-20T13:25:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv2_3-2026",
    question: "What is the concentration in g/dm³ of a sulfuric acid solution (H₂SO₄) with a concentration of 0.050 mol/dm³?\n(Given: $M_r$ of H₂SO₄ = 98)",
    options: [
      { text: "4.9 g/dm³", isCorrect: true },
      { text: "9.8 g/dm³" },
      { text: "2.45 g/dm³" },
      { text: "49.0 g/dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Formula: $\\text{Concentration in g/dm}^3 = \\text{Concentration in mol/dm}^3 \\times M_r$.\n* Concentration $= 0.050 \\times 98 = 4.9\\text{ g/dm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q53",
    createdAt: "2026-08-20T13:30:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv2_4-2023",
    question: "In a titration, $25.0\\text{ cm}^3$ of $0.200\\text{ mol/dm}^3$ sodium hydroxide neutralises $20.0\\text{ cm}^3$ of hydrochloric acid:\n$$\\text{NaOH} + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$$\nWhat is the concentration of the hydrochloric acid?",
    options: [
      { text: "$0.160\\text{ mol/dm}^3$" },
      { text: "$0.200\\text{ mol/dm}^3$" },
      { text: "$0.250\\text{ mol/dm}^3$", isCorrect: true },
      { text: "$0.400\\text{ mol/dm}^3$" }
    ],
    correctAnswer: 2,
    explanation: "* Moles of NaOH $= c \\times V = 0.200 \\times \\frac{25.0}{1000} = 0.0050\\text{ mol}$.\n* Stoichiometry is $1 : 1$, so moles of HCl $= 0.0050\\text{ mol}$.\n* Concentration of HCl $= \\frac{\\text{moles}}{\\text{volume in dm}^3} = \\frac{0.0050}{0.0200} = 0.250\\text{ mol/dm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q16",
    lessonNum: 5,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv2_5-2024",
    question: "What volume of water must be added to $100\\text{ cm}^3$ of $1.0\\text{ mol/dm}^3$ hydrochloric acid to dilute it to $0.25\\text{ mol/dm}^3$?",
    options: [
      { text: "$250\\text{ cm}^3$" },
      { text: "$300\\text{ cm}^3$", isCorrect: true },
      { text: "$400\\text{ cm}^3$" },
      { text: "$500\\text{ cm}^3$" }
    ],
    correctAnswer: 1,
    explanation: "* Using dilution formula: $C_1 V_1 = C_2 V_2$.\n* $1.0 \\times 100 = 0.25 \\times V_2 \\implies V_2 = \\frac{100}{0.25} = 400\\text{ cm}^3$ (total final volume).\n* Volume of water that must be added $= V_2 - V_1 = 400 - 100 = 300\\text{ cm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q16",
    lessonNum: 5,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv2_6-2025",
    question: "A solution of copper(II) sulfate contains $16.0\\text{ g/dm}^3$ of $\\text{CuSO}_4$. What is its concentration in $\\text{mol/dm}^3$?\n(Given: $A_r$: Cu = 64, S = 32, O = 16)",
    options: [
      { text: "$0.05\\text{ mol/dm}^3$" },
      { text: "$0.10\\text{ mol/dm}^3$", isCorrect: true },
      { text: "$0.20\\text{ mol/dm}^3$" },
      { text: "$1.00\\text{ mol/dm}^3$" }
    ],
    correctAnswer: 1,
    explanation: "* $M_r$ of $\\text{CuSO}_4 = 64 + 32 + (4 \\times 16) = 160\\text{ g/mol}$.\n* $\\text{Concentration in mol/dm}^3 = \\frac{\\text{Concentration in g/dm}^3}{M_r} = \\frac{16.0}{160} = 0.10\\text{ mol/dm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q15",
    lessonNum: 5,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

