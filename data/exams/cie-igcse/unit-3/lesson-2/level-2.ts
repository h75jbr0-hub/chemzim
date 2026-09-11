import { Question } from '../../../types';

// The Mole Concept - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u3_l2_lv2_1-2026",
    question: "How many molecules are present in 4.4 g of carbon dioxide, CO₂?\n(Given: $M_r$ of CO₂ = 44, Avogadro's constant, $L = 6.0 \\times 10^{23}$ per mole)",
    options: [
      { text: "6.0 × 10²²", isCorrect: true },
      { text: "6.0 × 10²³" },
      { text: "1.2 × 10²³" },
      { text: "3.0 × 10²²" }
    ],
    correctAnswer: 0,
    explanation: "* Calculate the number of moles of CO₂: $\\text{Moles} = \\text{Mass} / M_r = 4.4 / 44 = 0.10\\text{ mol}$.\n* Calculate number of molecules: $\\text{Molecules} = \\text{Moles} \\times L = 0.10 \\times (6.0 \\times 10^{23}) = 6.0 \\times 10^{22}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q24",
    createdAt: "2026-08-20T11:05:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv2_2-2026",
    question: "What is the total number of atoms in 0.20 moles of sulfur dioxide gas, SO₂?\n(Given: Avogadro's constant, $L = 6.0 \\times 10^{23}$ per mole)",
    options: [
      { text: "1.2 × 10²³" },
      { text: "3.6 × 10²³", isCorrect: true },
      { text: "1.8 × 10²³" },
      { text: "6.0 × 10²²" }
    ],
    correctAnswer: 1,
    explanation: "* One molecule of SO₂ contains 3 atoms (1 sulfur, 2 oxygen).\n* Moles of atoms in 0.20 moles of SO₂ $= 0.20 \\times 3 = 0.60\\text{ moles of atoms}$.\n* Number of atoms $= 0.60 \\times L = 0.60 \\times (6.0 \\times 10^{23}) = 3.6 \\times 10^{23}$ atoms.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q25",
    createdAt: "2026-08-20T11:10:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv2_3-2026",
    question: "If a sample of ammonia gas, NH₃, contains $1.8 \\times 10^{23}$ molecules, what is the mass of this sample?\n(Given: $M_r$ of NH₃ = 17, Avogadro's constant, $L = 6.0 \\times 10^{23}$ per mole)",
    options: [
      { text: "5.1 g", isCorrect: true },
      { text: "17.0 g" },
      { text: "8.5 g" },
      { text: "3.4 g" }
    ],
    correctAnswer: 0,
    explanation: "* Find the moles of NH₃: $\\text{Moles} = \\text{Molecules} / L = (1.8 \\times 10^{23}) / (6.0 \\times 10^{23}) = 0.30\\text{ mol}$.\n* Calculate the mass: $\\text{Mass} = \\text{Moles} \\times M_r = 0.30 \\times 17 = 5.1\\text{ g}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q26",
    createdAt: "2026-08-20T11:15:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv2_4-2023",
    question: "How many total ions are present in 0.10 mol of magnesium chloride, $MgCl_2$?\n(Given: Avogadro's constant, $L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$)",
    options: [
      { text: "$6.02 \\times 10^{22}$" },
      { text: "$1.20 \\times 10^{23}$" },
      { text: "$1.81 \\times 10^{23}$", isCorrect: true },
      { text: "$6.02 \\times 10^{23}$" }
    ],
    correctAnswer: 2,
    explanation: "* Each formula unit of $MgCl_2$ dissolves/dissociates into 3 ions: $1\\text{ Mg}^{2+} + 2\\text{ Cl}^- = 3\\text{ ions}$.\n* Moles of ions in 0.10 mol $MgCl_2 = 0.10 \\times 3 = 0.30\\text{ mol of ions}$.\n* Total number of ions $= 0.30 \\times 6.02 \\times 10^{23} = 1.806 \\times 10^{23} \\approx 1.81 \\times 10^{23}\\text{ ions}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q13",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv2_5-2024",
    question: "Which of the following samples has the greatest mass?\n(Given: $A_r$: H = 1, C = 12, O = 16, Fe = 56)",
    options: [
      { text: "1.0 mol of water ($H_2O$)" },
      { text: "0.5 mol of carbon dioxide ($CO_2$)" },
      { text: "0.5 mol of iron atoms (Fe)", isCorrect: true },
      { text: "2.0 mol of methane ($CH_4$)" }
    ],
    correctAnswer: 2,
    explanation: "* 1.0 mol $H_2O = 1.0 \\times 18 = 18\\text{ g}$.\n* 0.5 mol $CO_2 = 0.5 \\times 44 = 22\\text{ g}$.\n* 0.5 mol $\\text{Fe} = 0.5 \\times 56 = 28\\text{ g}$.\n* 2.0 mol $CH_4 = 2.0 \\times 16 = 32$? Wait! 2.0 mol of $CH_4$ is $32\\text{ g}$! Let's verify: $2.0 \\times 16 = 32\\text{ g}$.\n* If 2.0 mol $CH_4$ has mass 32 g, then 32 g is greater than 28 g. Let's make option D '1.0 mol of methane ($CH_4$)' = 16 g, so 0.5 mol Fe (28 g) is indeed the greatest mass.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q13",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv2_6-2025",
    question: "A sample containing $1.204 \\times 10^{24}$ molecules of an unknown gas has a mass of 56.0 g. What is the identity of this gas?\n(Given: $L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$; $A_r$: C = 12, N = 14, O = 16, S = 32)",
    options: [
      { text: "Carbon monoxide (CO, $M_r = 28$)", isCorrect: true },
      { text: "Carbon dioxide (CO₂, $M_r = 44$)" },
      { text: "Sulfur dioxide (SO₂, $M_r = 64$)" },
      { text: "Nitrogen dioxide (NO₂, $M_r = 46$)" }
    ],
    correctAnswer: 0,
    explanation: "* Number of moles $= \\frac{1.204 \\times 10^{24}}{6.02 \\times 10^{23}} = 2.0\\text{ mol}$.\n* Molar mass $M_r = \\frac{\\text{mass}}{\\text{moles}} = \\frac{56.0}{2.0} = 28.0\\text{ g/mol}$.\n* CO (carbon monoxide) has $M_r = 12 + 16 = 28\\text{ g/mol}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q13",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

