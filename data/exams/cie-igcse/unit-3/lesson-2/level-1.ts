import { Question } from '../../../types';

// The Mole Concept - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u3_l2_lv1_1-2026",
    question: "What is the mass of 0.50 moles of calcium carbonate, CaCO₃?\n(Given: $M_r$ of CaCO₃ = 100)",
    options: [
      { text: "50 g", isCorrect: true },
      { text: "100 g" },
      { text: "200 g" },
      { text: "25 g" }
    ],
    correctAnswer: 0,
    explanation: "* Formula: $\\text{Mass} = \\text{Moles} \\times M_r$.\n* Mass $= 0.50 \\times 100 = 50\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q21",
    createdAt: "2026-08-20T10:50:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv1_2-2026",
    question: "How many moles of hydrogen atoms are there in 2.0 moles of methane, CH₄?",
    options: [
      { text: "2.0 moles" },
      { text: "4.0 moles" },
      { text: "8.0 moles", isCorrect: true },
      { text: "6.0 moles" }
    ],
    correctAnswer: 2,
    explanation: "* One mole of methane, CH₄, contains 4 moles of hydrogen atoms.\n* Therefore, 2.0 moles of CH₄ contains $2.0 \\times 4 = 8.0\\text{ moles}$ of hydrogen atoms.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q22",
    createdAt: "2026-08-20T10:55:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv1_3-2026",
    question: "Which quantity contains the largest number of moles of atoms?\n(Given: $A_r$ of H = 1, He = 4, C = 12, O = 16)",
    options: [
      { text: "4 g of helium gas, He" },
      { text: "12 g of carbon, C" },
      { text: "16 g of oxygen gas, O₂" },
      { text: "4 g of hydrogen gas, H₂", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Helium (He): 4 g / 4 = 1.0 mol of atoms.\n* Carbon (C): 12 g / 12 = 1.0 mol of atoms.\n* Oxygen gas (O₂): 16 g / 32 = 0.5 mol of molecules = 1.0 mol of atoms.\n* Hydrogen gas (H₂): 4 g / 2 = 2.0 mol of molecules = 4.0 mol of atoms.\n* 4 g of hydrogen gas has the largest number of moles of atoms.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q23",
    createdAt: "2026-08-20T11:00:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv1_4-2023",
    question: "What is the number of moles in 88 g of carbon dioxide ($CO_2$)?\n(Given: $A_r$: C = 12, O = 16)",
    options: [
      { text: "0.5 mol" },
      { text: "1.0 mol" },
      { text: "2.0 mol", isCorrect: true },
      { text: "4.0 mol" }
    ],
    correctAnswer: 2,
    explanation: "* $M_r$ of $\\text{CO}_2 = 12 + (2 \\times 16) = 44\\text{ g/mol}$.\n* $\\text{Number of moles} = \\frac{\\text{mass}}{M_r} = \\frac{88}{44} = 2.0\\text{ mol}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q13",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv1_5-2024",
    question: "One mole of any substance contains the Avogadro constant ($6.02 \\times 10^{23}$) number of specified particles. How many molecules are there in 9.0 g of water ($H_2O$)?\n(Given: $A_r$: H = 1, O = 16)",
    options: [
      { text: "$3.01 \\times 10^{23}$", isCorrect: true },
      { text: "$6.02 \\times 10^{23}$" },
      { text: "$1.20 \\times 10^{24}$" },
      { text: "$1.50 \\times 10^{23}$" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r$ of $H_2O = (2 \\times 1) + 16 = 18\\text{ g/mol}$.\n* $\\text{Moles of } H_2O = \\frac{9.0}{18} = 0.50\\text{ mol}$.\n* $\\text{Number of molecules} = 0.50 \\times 6.02 \\times 10^{23} = 3.01 \\times 10^{23}\\text{ molecules}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q13",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv1_6-2025",
    question: "What is the mass in grams of 0.25 mol of sulfuric acid, $H_2SO_4$?\n(Given: $A_r$: H = 1, S = 32, O = 16)",
    options: [
      { text: "24.5 g", isCorrect: true },
      { text: "49.0 g" },
      { text: "98.0 g" },
      { text: "196 g" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r$ of $H_2SO_4 = (2 \\times 1) + 32 + (4 \\times 16) = 2 + 32 + 64 = 98\\text{ g/mol}$.\n* $\\text{Mass} = \\text{moles} \\times M_r = 0.25 \\times 98 = 24.5\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q14",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

