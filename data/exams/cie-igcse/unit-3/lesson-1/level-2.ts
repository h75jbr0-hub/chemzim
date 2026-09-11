import { Question } from '../../../types';

// Formulae - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u3_l1_lv2_1-2026",
    question: "A compound has the empirical formula CH₂ and a relative molecular mass ($M_r$) of 84.\nWhat is the molecular formula of this compound?\n(Given: $A_r$ of C = 12, H = 1)",
    options: [
      { text: "CH₂" },
      { text: "C₃H₆" },
      { text: "C₅H₁₀" },
      { text: "C₆H₁₂", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* The empirical formula mass of CH₂ is $12 + (2 \\times 1) = 14$.\n* Divide the relative molecular mass by the empirical mass: $84 / 14 = 6$.\n* Multiply the subscripts in the empirical formula by 6: $\\text{C}_{(1 \\times 6)}\\text{H}_{(2 \\times 6)} = \\text{C}_6\\text{H}_{12}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q14",
    createdAt: "2026-08-20T10:15:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv2_2-2026",
    question: "An oxide of phosphorus contains 43.6% phosphorus by mass.\nWhat is the empirical formula of this phosphorus oxide?\n(Given: $A_r$ of P = 31, O = 16)",
    options: [
      { text: "PO" },
      { text: "PO₂" },
      { text: "P₂O₃" },
      { text: "P₂O₅", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Percentage of oxygen by mass $= 100 - 43.6 = 56.4\\%$.\n* Calculate moles of each: Moles of P $= 43.6 / 31 = 1.41$; Moles of O $= 56.4 / 16 = 3.525$.\n* Divide by the smallest mole value (1.41): P $= 1.41 / 1.41 = 1$; O $= 3.525 / 1.41 = 2.5$.\n* Multiply by 2 to get whole numbers: P = 2, O = 5. Therefore, the empirical formula is P₂O₅.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q15",
    createdAt: "2026-08-20T10:20:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv2_3-2026",
    question: "Which formula represents a compound containing the highest percentage of nitrogen by mass?\n(Given: $A_r$ of H = 1, C = 12, N = 14, O = 16)",
    options: [
      { text: "NH₃", isCorrect: true },
      { text: "NO" },
      { text: "NO₂" },
      { text: "NH₄NO₃" }
    ],
    correctAnswer: 0,
    explanation: "* NH₃: Percentage of N $= (14 / 17) \\times 100\\% = 82.4\\%$.\n* NO: Percentage of N $= (14 / 30) \\times 100\\% = 46.7\\%$.\n* NO₂: Percentage of N $= (14 / 46) \\times 100\\% = 30.4\\%$.\n* NH₄NO₃: Percentage of N $= (28 / 80) \\times 100\\% = 35.0\\%$.\n* Ammonia (NH₃) has the highest percentage of nitrogen by mass.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q16",
    createdAt: "2026-08-20T10:25:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv2_4-2026",
    question: "What is the empirical formula of a compound that consists of 27.3% carbon and 72.7% oxygen by mass?\n(Given: $A_r$ of C = 12, O = 16)",
    options: [
      { text: "CO" },
      { text: "CO₂", isCorrect: true },
      { text: "C₂O" },
      { text: "CO₃" }
    ],
    correctAnswer: 1,
    explanation: "* Calculate moles of each element: Moles of C $= 27.3 / 12 = 2.275$; Moles of O $= 72.7 / 16 = 4.544$.\n* Find the simplest ratio by dividing by the smallest value (2.275): C $= 2.275 / 2.275 = 1$; O $= 4.544 / 2.275 = 2$.\n* The simplest whole number ratio is 1 C : 2 O. Therefore, the empirical formula is CO₂.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q17",
    createdAt: "2026-08-20T10:30:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv2_5-2023",
    question: "A hydrocarbon contains 85.7% carbon and 14.3% hydrogen by mass. Its relative molecular mass ($M_r$) is 56. What are its empirical formula and molecular formula?\n(Given: $A_r$: C = 12, H = 1)",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Empirical formula</th><th class="p-2 border">Molecular formula</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">CH₂</td><td class="p-2 border">C₄H₈</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">CH</td><td class="p-2 border">C₄H₄</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">CH₂</td><td class="p-2 border">C₂H₄</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">CH₃</td><td class="p-2 border">C₄H₁₂</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Empirical CH₂ | Molecular C₄H₈", isCorrect: true },
      { text: "Row B: Empirical CH | Molecular C₄H₄" },
      { text: "Row C: Empirical CH₂ | Molecular C₂H₄" },
      { text: "Row D: Empirical CH₃ | Molecular C₄H₁₂" }
    ],
    correctAnswer: 0,
    explanation: "* Moles: $\\text{C} = 85.7 / 12 = 7.14$; $\\text{H} = 14.3 / 1 = 14.3$.\n* Ratio: $\\text{C} : \\text{H} = 1 : 2$, so empirical formula is $\\text{CH}_2$ ($M_{\\text{emp}} = 14$).\n* Scaling factor $n = 56 / 14 = 4$, so molecular formula is $(\\text{CH}_2)_4 = \\text{C}_4\\text{H}_8$ (butene/cyclobutane).",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q12",
    lessonNum: 1,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv2_6-2024",
    question: "When 4.8 g of magnesium metal is heated in a crucible with excess oxygen, 8.0 g of magnesium oxide is produced. What is the empirical formula of magnesium oxide?\n(Given: $A_r$: Mg = 24, O = 16)",
    options: [
      { text: "MgO", isCorrect: true },
      { text: "Mg₂O" },
      { text: "MgO₂" },
      { text: "Mg₂O₃" }
    ],
    correctAnswer: 0,
    explanation: "* Mass of oxygen reacted $= 8.0 - 4.8 = 3.2\\text{ g}$.\n* Moles of $\\text{Mg} = 4.8 / 24 = 0.20\\text{ mol}$.\n* Moles of $\\text{O} = 3.2 / 16 = 0.20\\text{ mol}$.\n* Mole ratio $\\text{Mg} : \\text{O} = 0.20 : 0.20 = 1 : 1$, so the empirical formula is MgO.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q12",
    lessonNum: 1,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv2_7-2025",
    question: "Consider the unbalanced equation:\n$$x\\text{Fe}_2\\text{O}_3 + y\\text{CO} \\rightarrow z\\text{Fe} + w\\text{CO}_2$$\nWhat are the values of $x, y, z,$ and $w$ when the equation is balanced using the lowest whole-number coefficients?",
    options: [
      { text: "x = 1, y = 3, z = 2, w = 3", isCorrect: true },
      { text: "x = 1, y = 2, z = 2, w = 2" },
      { text: "x = 2, y = 3, z = 4, w = 3" },
      { text: "x = 1, y = 1, z = 2, w = 1" }
    ],
    correctAnswer: 0,
    explanation: "* The balanced blast furnace reduction equation is: $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$.\n* Iron: Left = $1 \\times 2 = 2$, Right = 2.\n* Carbon: Left = 3, Right = 3.\n* Oxygen: Left = $3 + 3 = 6$, Right = $3 \\times 2 = 6$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q12",
    lessonNum: 1,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

