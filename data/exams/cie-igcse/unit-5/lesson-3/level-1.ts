import { Question } from '../../../types';

// Bond Energies - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u5_l3_lv1_1-2026",
    question: "Which statement correctly describes bond breaking and bond making in a chemical reaction?",
    options: [
      { text: "Bond breaking is exothermic and bond making is endothermic" },
      { text: "Bond breaking is endothermic and bond making is exothermic", isCorrect: true },
      { text: "Both bond breaking and bond making are exothermic" },
      { text: "Both bond breaking and bond making are endothermic" }
    ],
    correctAnswer: 1,
    explanation: "* Energy must be supplied/absorbed to overcome the electrostatic attraction between atoms and break chemical bonds (endothermic).\n* Energy is released when new chemical bonds form between atoms (exothermic).",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q129",
    createdAt: "2026-08-20T20:00:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv1_2-2026",
    question: "The bond energy of an H–H single covalent bond is 436 kJ/mol.\nWhat amount of energy is absorbed when 2.0 moles of H–H bonds are completely broken into separate hydrogen atoms?",
    options: [
      { text: "218 kJ" },
      { text: "436 kJ" },
      { text: "872 kJ", isCorrect: true },
      { text: "1744 kJ" }
    ],
    correctAnswer: 2,
    explanation: "* Energy absorbed $= \\text{Moles of bonds} \\times \\text{Bond energy}$.\n* Energy absorbed $= 2.0 \\times 436 = 872\\text{ kJ}$.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q130",
    createdAt: "2026-08-20T20:05:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv1_3-2026",
    question: "What formula is used to calculate the overall enthalpy change (ΔH) of a reaction from bond energies?",
    options: [
      { text: "ΔH = (energy released in bond making) - (energy absorbed in bond breaking)" },
      { text: "ΔH = (energy absorbed in bond breaking) - (energy released in bond making)", isCorrect: true },
      { text: "ΔH = (energy of products) + (energy of reactants)" },
      { text: "ΔH = (activation energy) / (molar mass of reactants)" }
    ],
    correctAnswer: 1,
    explanation: "* The overall enthalpy change is calculated as:\n  $\\Delta H = \\Sigma(\\text{bond energies of bonds broken}) - \\Sigma(\\text{bond energies of bonds formed})$.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q131",
    createdAt: "2026-08-20T20:10:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv1_4-2026",
    question: "In the synthesis of hydrogen chloride: H₂ + Cl₂ → 2HCl\nWhich bonds are broken and which bonds are formed?",
    options: [
      { text: "Bonds broken: 1 H–H and 1 Cl–Cl; Bonds formed: 2 H–Cl", isCorrect: true },
      { text: "Bonds broken: 2 H–Cl; Bonds formed: 1 H–H and 1 Cl–Cl" },
      { text: "Bonds broken: 1 H–H; Bonds formed: 1 H–Cl and 1 Cl–Cl" },
      { text: "Bonds broken: 2 H–H and 2 Cl–Cl; Bonds formed: 1 H–Cl" }
    ],
    correctAnswer: 0,
    explanation: "* Reactants are H–H and Cl–Cl, so one mole of H–H bonds and one mole of Cl–Cl bonds are broken.\n* Products are 2 HCl molecules, meaning two moles of H–Cl single bonds are formed.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q132",
    createdAt: "2026-08-20T20:15:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv1_5-2023",
    question: "Which statement about bond breaking and bond making in a chemical reaction is correct?",
    options: [
      { text: "Bond breaking is endothermic and bond making is exothermic", isCorrect: true },
      { text: "Bond breaking is exothermic and bond making is endothermic" },
      { text: "Both bond breaking and bond making are endothermic" },
      { text: "Both bond breaking and bond making are exothermic" }
    ],
    correctAnswer: 0,
    explanation: "* Energy is required to break chemical bonds, so bond breaking is always an endothermic process.\n* Energy is released when new chemical bonds form, so bond making is always an exothermic process (MEXO BENDO).",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q26",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv1_6-2024",
    question: "In an exothermic reaction, how does the energy absorbed in bond breaking compare to the energy released in bond making?",
    options: [
      { text: "The energy released in bond making is greater than the energy absorbed in bond breaking", isCorrect: true },
      { text: "The energy absorbed in bond breaking is greater than the energy released in bond making" },
      { text: "The energy absorbed in bond breaking is exactly equal to the energy released in bond making" },
      { text: "No energy is absorbed during bond breaking" }
    ],
    correctAnswer: 0,
    explanation: "* In an exothermic reaction, the overall energy change is negative (energy is released to the surroundings).\n* This occurs because the energy released when new bonds are formed in the products exceeds the energy required to break the bonds in the reactants.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q25",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv1_7-2025",
    question: "Which of the following processes requires bond breaking and is therefore endothermic?",
    options: [
      { text: "Splitting a chlorine molecule into two chlorine atoms: Cl₂(g) → 2Cl(g)", isCorrect: true },
      { text: "Combining two hydrogen atoms into a hydrogen molecule: 2H(g) → H₂(g)" },
      { text: "Combining hydrogen and oxygen to form water" },
      { text: "Freezing liquid water to solid ice" }
    ],
    correctAnswer: 0,
    explanation: "* Separating a diatomic molecule ($Cl_2$) into individual atoms requires overcoming the covalent bond between the chlorine atoms, which absorbs energy (bond breaking = endothermic).",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q27",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

