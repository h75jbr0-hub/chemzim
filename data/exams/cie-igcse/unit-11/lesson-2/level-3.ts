import { Question } from '../../../types';

// Alkenes - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l2_lv3_1-2026",
    question: "When one mole of dodecane (C₁₂H₂₆) is cracked catalytically, one mole of an alkane X and two moles of ethene (C₂H₄) are produced.\nWhat is the formula of alkane X?",
    options: [
      { text: "C₈H₁₈", isCorrect: true },
      { text: "C₆H₁₄" },
      { text: "C₁₀H₂₂" },
      { text: "C₇H₁₆" }
    ],
    correctAnswer: 0,
    explanation: "* Cracking equation: C₁₂H₂₆ → X + 2C₂H₄.\n* Total carbons in 2 ethenes $= 2 \\times 2 = 4$; remaining carbons $= 12 - 4 = 8$.\n* Total hydrogens in 2 ethenes $= 2 \\times 4 = 8$; remaining hydrogens $= 26 - 8 = 18$.\n* Thus, X is octane (C₈H₁₈).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q407",
    createdAt: "2026-08-21T23:30:00Z"
  },
  {
    id: "ex_ci_u11_l2_lv3_2-2026",
    question: "How many straight-chain alkene isomers with the molecular formula C₄H₈ exist (excluding branched isomers and cyclic structures)?",
    options: [
      { text: "2 (but-1-ene and but-2-ene)", isCorrect: true },
      { text: "1" },
      { text: "3" },
      { text: "4" }
    ],
    correctAnswer: 0,
    explanation: "* The two straight-chain positional isomers are:\n  1. But-1-ene: CH₂=CH–CH₂–CH₃\n  2. But-2-ene: CH₃–CH=CH–CH₃\n* (2-methylpropene is branched, and cyclobutane/methylcyclopropane are cyclic).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q408",
    createdAt: "2026-08-21T23:35:00Z"
  },
  {
    id: "ex_ci_u11_l2_lv3_3-2023",
    question: "When one mole of tetradecane (C₁₄H₃₀) is cracked catalytically, one mole of octane (C₈H₁₈) and three moles of an alkene Y are formed.\nWhat is the formula of alkene Y?",
    options: [
      { text: "C₂H₄", isCorrect: true },
      { text: "C₃H₆" },
      { text: "C₄H₈" },
      { text: "CH₄" }
    ],
    correctAnswer: 0,
    explanation: "* Cracking equation: C₁₄H₃₀ → C₈H₁₈ + 3Y.\n* Carbon balance: 14 - 8 = 6 carbons for 3 molecules of Y $\\implies$ 6 / 3 = 2 carbons per molecule.\n* Hydrogen balance: 30 - 18 = 12 hydrogens for 3 molecules of Y $\\implies$ 12 / 3 = 4 hydrogens per molecule.\n* Therefore, alkene Y is ethene (C₂H₄).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q164",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l2_lv3_4-2024",
    question: "How many straight-chain alkene isomers with molecular formula C₄H₈ exist (excluding branched and cyclic structures)?",
    options: [
      { text: "2 (but-1-ene and but-2-ene)", isCorrect: true },
      { text: "1" },
      { text: "3" },
      { text: "4" }
    ],
    correctAnswer: 0,
    explanation: "* For straight 4-carbon chains with one double bond:\n  - but-1-ene (CH₂=CHCH₂CH₃)\n  - but-2-ene (CH₃CH=CHCH₃).\n* Thus there are 2 straight-chain alkene isomers.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q165",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l2_lv3_5-2025",
    question: "A gaseous hydrocarbon Z has empirical formula CH₂ and relative molecular mass ($M_r$) of 56. What is the molecular formula of Z, and does it decolourise bromine water?\n($A_r: \\text{C} = 12, \\text{H} = 1$)",
    options: [
      { text: "C₄H₈; yes, it decolourises bromine water", isCorrect: true },
      { text: "C₄H₁₀; no, it does not decolourise bromine water" },
      { text: "C₃H₆; yes, it decolourises bromine water" },
      { text: "C₄H₈; no, it does not decolourise bromine water" }
    ],
    correctAnswer: 0,
    explanation: "* Empirical formula mass of CH₂ = 12 + 2 = 14.\n* Factor = 56 / 14 = 4 $\\implies$ Molecular formula = C₄H₈ (butene).\n* As an unsaturated alkene, it undergoes addition with bromine water, decolourising it from orange to colourless.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q166",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
