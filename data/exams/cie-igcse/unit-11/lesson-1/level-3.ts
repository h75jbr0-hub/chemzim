import { Question } from '../../../types';

// Alkanes - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l1_lv3_1-2026",
    question: "A 20 cm³ sample of gaseous propane (C₃H₈) is completely burned in 150 cm³ of oxygen gas. After cooling to room temperature, the remaining gas mixture is shaken with excess aqueous sodium hydroxide.\nWhat is the final volume of gas remaining?\n(All gas volumes measured at r.t.p.; C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l))",
    options: [
      { text: "50 cm³", isCorrect: true },
      { text: "60 cm³" },
      { text: "110 cm³" },
      { text: "20 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles/volume ratio: 1 volume C₃H₈ reacts with 5 volumes O₂ to produce 3 volumes CO₂.\n* 20 cm³ C₃H₈ reacts with $20 \\times 5 = 100\\text{ cm}^3$ of O₂, leaving $150 - 100 = 50\\text{ cm}^3$ of unreacted O₂.\n* Volume of CO₂ produced $= 20 \\times 3 = 60\\text{ cm}^3$.\n* Aqueous NaOH absorbs all acidic CO₂ (60 cm³), leaving only 50 cm³ of excess O₂.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q399",
    createdAt: "2026-08-21T22:30:00Z"
  },
  {
    id: "ex_ci_u11_l1_lv3_2-2026",
    question: "When methane reacts with an excess of chlorine gas in the presence of intense ultraviolet light over a prolonged period, what is the ultimate fully substituted organic product formed?",
    options: [
      { text: "Tetrachloromethane (CCl₄)", isCorrect: true },
      { text: "Chloromethane (CH₃Cl)" },
      { text: "Trichloromethane / Chloroform (CHCl₃)" },
      { text: "Hexachloroethane (C₂Cl₆)" }
    ],
    correctAnswer: 0,
    explanation: "* Excess chlorine drives successive substitution reactions:\n  1. CH₄ + Cl₂ → CH₃Cl + HCl\n  2. CH₃Cl + Cl₂ → CH₂Cl₂ + HCl\n  3. CH₂Cl₂ + Cl₂ → CHCl₃ + HCl\n  4. CHCl₃ + Cl₂ → CCl₄ + HCl (fully substituted tetrachloromethane).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q400",
    createdAt: "2026-08-21T22:35:00Z"
  },
  {
    id: "ex_ci_u11_l1_lv3_3-2023",
    question: "A 10 cm³ sample of a gaseous hydrocarbon CₓHᵧ was completely burned in 70 cm³ of oxygen (an excess). After cooling to room temperature, the total volume of gas remaining was 50 cm³. When this gas was shaken with aqueous sodium hydroxide, the volume decreased to 20 cm³.\nWhat is the formula of the hydrocarbon?\n(All volumes measured at r.t.p.)",
    options: [
      { text: "C₃H₈", isCorrect: true },
      { text: "C₂H₆" },
      { text: "C₄H₁₀" },
      { text: "CH₄" }
    ],
    correctAnswer: 0,
    explanation: "* The volume absorbed by NaOH is CO₂: 50 cm³ - 20 cm³ = 30 cm³ CO₂.\n* Since 10 cm³ of CₓHᵧ produced 30 cm³ CO₂, x = 30 / 10 = 3.\n* Unreacted oxygen = 20 cm³ $\\implies$ Oxygen reacted = 70 - 20 = 50 cm³.\n* Equation: C₃Hᵧ + (3 + y/4)O₂ → 3CO₂ + (y/2)H₂O.\n* Ratio: (3 + y/4) / 1 = 50 / 10 = 5 $\\implies$ y/4 = 2 $\\implies$ y = 8.\n* Formula is C₃H₈ (propane).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q155",
    lessonNum: 1,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l1_lv3_4-2024",
    question: "Methane undergoes photochemical substitution with excess chlorine gas. What is the molecular formula of the final organic product when all hydrogen atoms are replaced?",
    options: [
      { text: "CCl₄", isCorrect: true },
      { text: "CH₃Cl" },
      { text: "CH₂Cl₂" },
      { text: "CHCl₃" }
    ],
    correctAnswer: 0,
    explanation: "* In excess chlorine and under prolonged UV irradiation, each hydrogen atom in methane (CH₄) is progressively substituted:\n  CH₄ → CH₃Cl → CH₂Cl₂ → CHCl₃ → CCl₄ (tetrachloromethane).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q156",
    lessonNum: 1,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l1_lv3_5-2025",
    question: "How many structural isomers exist for the alkane with molecular formula C₅H₁₂?",
    options: [
      { text: "3", isCorrect: true },
      { text: "2" },
      { text: "4" },
      { text: "5" }
    ],
    correctAnswer: 0,
    explanation: "* Pentane (C₅H₁₂) has exactly 3 structural isomers:\n  1. Pentane (straight chain: CH₃CH₂CH₂CH₂CH₃)\n  2. 2-methylbutane (branched: CH₃CH(CH₃)CH₂CH₃)\n  3. 2,2-dimethylpropane (cross-branched: C(CH₃)₄).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q157",
    lessonNum: 1,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
