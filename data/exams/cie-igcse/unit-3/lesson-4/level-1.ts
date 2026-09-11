import { Question } from '../../../types';

// Gas Volumes - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u3_l4_lv1_1-2026",
    question: "What volume is occupied by 2.0 moles of carbon dioxide gas at room temperature and pressure (r.t.p.)?\n(Given: Molar volume of gas $= 24\\text{ dm}^3\\text{/mol}$ at r.t.p.)",
    options: [
      { text: "12 dm³" },
      { text: "24 dm³" },
      { text: "48 dm³", isCorrect: true },
      { text: "96 dm³" }
    ],
    correctAnswer: 2,
    explanation: "* Formula: $\\text{Volume of gas} = \\text{Moles} \\times 24\\text{ dm}^3$.\n* Volume $= 2.0 \\times 24 = 48\\text{ dm}^3$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q39",
    createdAt: "2026-08-20T12:20:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv1_2-2026",
    question: "How many moles of oxygen molecules are present in $6\\text{ dm}^3$ of oxygen gas at r.t.p.?\n(Given: Molar volume of gas $= 24\\text{ dm}^3\\text{/mol}$ at r.t.p.)",
    options: [
      { text: "0.25 mol", isCorrect: true },
      { text: "4.0 mol" },
      { text: "0.50 mol" },
      { text: "1.0 mol" }
    ],
    correctAnswer: 0,
    explanation: "* Formula: $\\text{Moles} = \\text{Volume of gas} / 24\\text{ dm}^3$.\n* Moles $= 6 / 24 = 0.25\\text{ mol}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q40",
    createdAt: "2026-08-20T12:25:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv1_3-2026",
    question: "What volume is occupied by 14 g of nitrogen gas, N₂, at r.t.p.?\n(Given: $A_r$ of N = 14; Molar volume of gas $= 24\\text{ dm}^3\\text{/mol}$ at r.t.p.)",
    options: [
      { text: "24 dm³" },
      { text: "12 dm³", isCorrect: true },
      { text: "6 dm³" },
      { text: "48 dm³" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of N₂ gas $= 14 / 28 = 0.50\\text{ mol}$ (since $M_r$ of N₂ $= 28$).\n* Volume $= 0.50 \\times 24 = 12\\text{ dm}^3$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q41",
    createdAt: "2026-08-20T12:30:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv1_4-2023",
    question: "What volume in $\\text{cm}^3$ is occupied by 0.050 mol of hydrogen gas at room temperature and pressure (r.t.p.)?\n(Given: Molar gas volume at r.t.p. = $24\\text{ dm}^3\\text{/mol} = 24000\\text{ cm}^3\\text{/mol}$)",
    options: [
      { text: "$120\\text{ cm}^3$" },
      { text: "$600\\text{ cm}^3$" },
      { text: "$1200\\text{ cm}^3$", isCorrect: true },
      { text: "$2400\\text{ cm}^3$" }
    ],
    correctAnswer: 2,
    explanation: "* $\\text{Volume in cm}^3 = \\text{moles} \\times 24000\\text{ cm}^3\\text{/mol}$.\n* $\\text{Volume} = 0.050 \\times 24000 = 1200\\text{ cm}^3$ (or $1.2\\text{ dm}^3$).",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q17",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv1_5-2024",
    question: "Which of the following gas samples occupies a volume of $24\\text{ dm}^3$ at r.t.p.?\n(Given: $A_r$: H = 1, He = 4, C = 12, O = 16)",
    options: [
      { text: "2 g of hydrogen gas ($H_2$)", isCorrect: true },
      { text: "2 g of helium gas (He)" },
      { text: "16 g of oxygen gas ($O_2$)" },
      { text: "22 g of carbon dioxide ($CO_2$)" }
    ],
    correctAnswer: 0,
    explanation: "* At r.t.p., $24\\text{ dm}^3$ corresponds to exactly $1.0\\text{ mol}$ of any gas.\n* $1.0\\text{ mol of } H_2 = 1.0 \\times 2 = 2\\text{ g}$.\n* (Helium requires 4 g for 1 mol; $O_2$ requires 32 g; $CO_2$ requires 44 g).",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q17",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv1_6-2025",
    question: "What mass of methane gas ($CH_4$) occupies $12\\text{ dm}^3$ at r.t.p.?\n(Given: $A_r$: C = 12, H = 1; Molar gas volume = $24\\text{ dm}^3\\text{/mol}$)",
    options: [
      { text: "4 g" },
      { text: "8 g", isCorrect: true },
      { text: "16 g" },
      { text: "32 g" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Moles of } CH_4 = \\frac{12}{24} = 0.50\\text{ mol}$.\n* $M_r$ of $CH_4 = 12 + 4 = 16\\text{ g/mol}$.\n* $\\text{Mass} = 0.50 \\times 16 = 8\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q17",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

