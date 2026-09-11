import { Question } from '../../../types';

// Formulae - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u3_l1_lv1_1-2026",
    question: "What is the relative formula mass ($M_r$) of carbon dioxide, CO₂?\n(Given: $A_r$ of C = 12, O = 16)",
    options: [
      { text: "28" },
      { text: "44", isCorrect: true },
      { text: "32" },
      { text: "56" }
    ],
    correctAnswer: 1,
    explanation: "* The formula of carbon dioxide is CO₂.\n* One molecule contains 1 carbon atom and 2 oxygen atoms.\n* $M_r = 12 + (2 \\times 16) = 44$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q11",
    createdAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv1_2-2026",
    question: "Which of the following compounds has the highest relative formula mass ($M_r$)?\n(Given: $A_r$ of H = 1, C = 12, N = 14, O = 16, Na = 23, S = 32)",
    options: [
      { text: "Water, H₂O" },
      { text: "Ammonia, NH₃" },
      { text: "Sodium hydroxide, NaOH" },
      { text: "Sulfur dioxide, SO₂", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* $M_r$ of H₂O $= (2 \\times 1) + 16 = 18$.\n* $M_r$ of NH₃ $= 14 + (3 \\times 1) = 17$.\n* $M_r$ of NaOH $= 23 + 16 + 1 = 40$.\n* $M_r$ of SO₂ $= 32 + (2 \\times 16) = 64$.\n* Therefore, SO₂ has the highest relative formula mass.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q12",
    createdAt: "2026-08-20T10:05:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv1_3-2026",
    question: "What is the relative formula mass ($M_r$) of ammonium sulfate, (NH₄)₂SO₄?\n(Given: $A_r$ of H = 1, C = 12, N = 14, O = 16, S = 32)",
    options: [
      { text: "114" },
      { text: "132", isCorrect: true },
      { text: "96" },
      { text: "128" }
    ],
    correctAnswer: 1,
    explanation: "* The formula (NH₄)₂SO₄ contains 2 nitrogen atoms, 8 hydrogen atoms, 1 sulfur atom, and 4 oxygen atoms.\n* $M_r = (2 \\times 14) + (8 \\times 1) + 32 + (4 \\times 16)$.\n* $M_r = 28 + 8 + 32 + 64 = 132$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q13",
    createdAt: "2026-08-20T10:10:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv1_4-2023",
    question: "What is the relative formula mass ($M_r$) of hydrated copper(II) sulfate, $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$?\n(Given: $A_r$: Cu = 64, S = 32, O = 16, H = 1)",
    options: [
      { text: "160" },
      { text: "186" },
      { text: "250", isCorrect: true },
      { text: "216" }
    ],
    correctAnswer: 2,
    explanation: "* $M_r$ of anhydrous $\\text{CuSO}_4 = 64 + 32 + (4 \\times 16) = 160$.\n* $M_r$ of $5\\text{H}_2\\text{O} = 5 \\times [(2 \\times 1) + 16] = 5 \\times 18 = 90$.\n* Total $M_r = 160 + 90 = 250$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q12",
    lessonNum: 1,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv1_5-2024",
    question: "Which chemical equation is correctly balanced?",
    options: [
      { text: "$\\text{Mg} + \\text{O}_2 \\rightarrow \\text{MgO}$" },
      { text: "$2\\text{Al} + 3\\text{Cl}_2 \\rightarrow 2\\text{AlCl}_3$", isCorrect: true },
      { text: "$\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$" },
      { text: "$\\text{Na} + \\text{H}_2\\text{O} \\rightarrow \\text{NaOH} + \\text{H}_2$" }
    ],
    correctAnswer: 1,
    explanation: "* For $2\\text{Al} + 3\\text{Cl}_2 \\rightarrow 2\\text{AlCl}_3$:\n* Left: 2 Al, 6 Cl; Right: 2 Al, 6 Cl. The equation is completely balanced.\n* The others are unbalanced: $\\text{Mg} + \\text{O}_2$ needs $2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$; $\\text{H}_2 + \\text{O}_2$ needs $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$; and Na needs $2\\text{Na} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + \\text{H}_2$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q12",
    lessonNum: 1,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv1_6-2025",
    question: "What is the percentage by mass of nitrogen in urea, $(\\text{NH}_2)_2\\text{CO}$?\n(Given: $A_r$: N = 14, H = 1, C = 12, O = 16)",
    options: [
      { text: "23.3%" },
      { text: "46.7%", isCorrect: true },
      { text: "35.0%" },
      { text: "60.0%" }
    ],
    correctAnswer: 1,
    explanation: "* $M_r$ of $(\\text{NH}_2)_2\\text{CO} = (2 \\times 14) + (4 \\times 1) + 12 + 16 = 28 + 4 + 12 + 16 = 60$.\n* Mass of nitrogen = $2 \\times 14 = 28$.\n* $\\%\\text{ N} = \\frac{28}{60} \\times 100\\% \\approx 46.7\\%$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q13",
    lessonNum: 1,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

