import { Question } from '../../../types';

// Bond Energies - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u5_l3_lv2_1-2026",
    question: "Using the bond energies below, calculate the enthalpy change (ΔH) for the reaction:\nH₂(g) + Cl₂(g) → 2HCl(g)\n(Bond energies: H–H = 436 kJ/mol, Cl–Cl = 242 kJ/mol, H–Cl = 431 kJ/mol)",
    options: [
      { text: "-184 kJ/mol", isCorrect: true },
      { text: "+184 kJ/mol" },
      { text: "-247 kJ/mol" },
      { text: "+247 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Energy absorbed in bond breaking: $(1 \\times 436) + (1 \\times 242) = 678\\text{ kJ/mol}$.\n* Energy released in bond forming: $2 \\times 431 = 862\\text{ kJ/mol}$.\n* $\\Delta H = \\text{Bonds broken} - \\text{Bonds formed} = 678 - 862 = -184\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q133",
    createdAt: "2026-08-20T20:20:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv2_2-2026",
    question: "The equation for the combustion of methane is:\nCH₄ + 2O₂ → CO₂ + 2H₂O\nGiven the bond energies:\n* C–H = 413 kJ/mol\n* O=O = 498 kJ/mol\n* C=O = 805 kJ/mol\n* O–H = 464 kJ/mol\nWhat is the enthalpy change of combustion (ΔH) for methane?",
    options: [
      { text: "-818 kJ/mol", isCorrect: true },
      { text: "+818 kJ/mol" },
      { text: "-652 kJ/mol" },
      { text: "-1024 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Energy for bond breaking $= (4 \\times 413) + (2 \\times 498) = 1652 + 996 = 2648\\text{ kJ/mol}$.\n* Energy from bond forming $= (2 \\times 805) + (4 \\times 464) = 1610 + 1856 = 3466\\text{ kJ/mol}$.\n* $\\Delta H = 2648 - 3466 = -818\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q134",
    createdAt: "2026-08-20T20:25:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv2_3-2026",
    question: "In the synthesis of ammonia: N₂ + 3H₂ → 2NH₃\nBond energies: N≡N = 945 kJ/mol, H–H = 436 kJ/mol, N–H = 391 kJ/mol.\nWhat is the enthalpy change (ΔH) for this reaction?",
    options: [
      { text: "-93 kJ/mol", isCorrect: true },
      { text: "+93 kJ/mol" },
      { text: "-1093 kJ/mol" },
      { text: "-45 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Energy to break bonds $= 945 + (3 \\times 436) = 945 + 1308 = 2253\\text{ kJ/mol}$.\n* Energy released forming bonds $= 6 \\times 391 = 2346\\text{ kJ/mol}$.\n* $\\Delta H = 2253 - 2346 = -93\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q135",
    createdAt: "2026-08-20T20:30:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv2_4-2026",
    question: "Hydrogenation of ethene occurs according to: C₂H₄ + H₂ → C₂H₆\nGiven the bond energies:\n* C=C = 612 kJ/mol\n* C–C = 348 kJ/mol\n* H–H = 436 kJ/mol\n* C–H = 413 kJ/mol\nWhat is the value of ΔH for this reaction?",
    options: [
      { text: "-126 kJ/mol", isCorrect: true },
      { text: "+126 kJ/mol" },
      { text: "-252 kJ/mol" },
      { text: "-58 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Bonds broken: 1 C=C (612) + 1 H–H (436) = 1048 kJ/mol (C–H bonds present in both reactants and products can be cancelled or counted).\n* Bonds formed: 1 C–C (348) + 2 C–H (2 × 413 = 826) = 1174 kJ/mol.\n* $\\Delta H = 1048 - 1174 = -126\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q136",
    createdAt: "2026-08-20T20:35:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv2_5-2023",
    question: "Using the bond energies given:\n* H–H = 436 kJ/mol\n* I–I = 151 kJ/mol\n* H–I = 299 kJ/mol\nWhat is the enthalpy change for the reaction: H₂(g) + I₂(g) → 2HI(g)?",
    options: [
      { text: "-11 kJ/mol", isCorrect: true },
      { text: "+11 kJ/mol" },
      { text: "-288 kJ/mol" },
      { text: "+288 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Energy absorbed in bond breaking = $436\\text{ (H–H)} + 151\\text{ (I–I)} = 587\\text{ kJ/mol}$.\n* Energy released in bond making = $2 \\times 299\\text{ (H–I)} = 598\\text{ kJ/mol}$.\n* $\\Delta H = \\text{bonds broken} - \\text{bonds made} = 587 - 598 = -11\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q25",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv2_6-2024",
    question: "The equation for the combustion of methane is: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)\nGiven the bond energies:\n* C–H = 410 kJ/mol\n* O=O = 496 kJ/mol\n* C=O = 805 kJ/mol\n* O–H = 460 kJ/mol\nWhat is the value of ΔH for this reaction?",
    options: [
      { text: "-818 kJ/mol", isCorrect: true },
      { text: "+818 kJ/mol" },
      { text: "-1024 kJ/mol" },
      { text: "-409 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Bonds broken = $4(\\text{C–H}) + 2(\\text{O=O}) = 4(410) + 2(496) = 1640 + 992 = 2632\\text{ kJ/mol}$.\n* Bonds formed = $2(\\text{C=O}) + 4(\\text{O–H}) = 2(805) + 4(460) = 1610 + 1840 = 3450\\text{ kJ/mol}$.\n* $\\Delta H = 2632 - 3450 = -818\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q24",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv2_7-2025",
    question: "The bond energy of N≡N is 945 kJ/mol and H–H is 436 kJ/mol. In the Haber process reaction: N₂(g) + 3H₂(g) → 2NH₃(g), ΔH = -92 kJ/mol. What is the average bond energy of the N–H bond?",
    options: [
      { text: "391 kJ/mol", isCorrect: true },
      { text: "1173 kJ/mol" },
      { text: "360 kJ/mol" },
      { text: "432 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Bonds broken = $1(\\text{N≡N}) + 3(\\text{H–H}) = 945 + 3(436) = 945 + 1308 = 2253\\text{ kJ}$.\n* Bonds formed = $6(\\text{N–H})$ bonds (since 2 molecules of $NH_3$ contain $2 \\times 3 = 6$ N–H bonds).\n* $\\Delta H = \\text{bonds broken} - \\text{bonds formed} \\implies -92 = 2253 - 6(\\text{N–H})$.\n* $6(\\text{N–H}) = 2253 + 92 = 2345\\text{ kJ} \\implies \\text{N–H} = \\frac{2345}{6} = 390.8 \\approx 391\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q27",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

