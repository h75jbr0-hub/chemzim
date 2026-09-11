import { Question } from '../../../types';

// Carboxylic Acids - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l4_lv3_1-2026",
    question: "A 25.0 cm³ sample of vinegar containing ethanoic acid is titrated with 0.100 mol/dm³ aqueous sodium hydroxide.\nIf 37.5 cm³ of NaOH is required for complete neutralisation: CH₃COOH + NaOH → CH₃COONa + H₂O,\nwhat is the concentration of ethanoic acid in the vinegar sample?",
    options: [
      { text: "0.150 mol/dm³", isCorrect: true },
      { text: "0.067 mol/dm³" },
      { text: "0.300 mol/dm³" },
      { text: "0.075 mol/dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of NaOH $= 0.0375\\text{ dm}^3 \\times 0.100\\text{ mol/dm}^3 = 0.00375\\text{ mol}$.\n* Stoichiometric ratio of CH₃COOH : NaOH is 1 : 1.\n* Moles of CH₃COOH $= 0.00375\\text{ mol}$.\n* Concentration of CH₃COOH $= 0.00375 / 0.0250 = 0.150\\text{ mol/dm}^3$.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q423",
    createdAt: "2026-08-22T01:30:00Z"
  },
  {
    id: "ex_ci_u11_l4_lv3_2-2026",
    question: "Which two structural formulas represent carboxylic acid isomers sharing the molecular formula C₄H₈O₂?",
    options: [
      { text: "Butanoic acid (CH₃CH₂CH₂COOH) and 2-methylpropanoic acid (CH₃CH(CH₃)COOH)", isCorrect: true },
      { text: "Propanoic acid (CH₃CH₂COOH) and ethanoic acid (CH₃COOH)" },
      { text: "Ethyl ethanoate and methyl propanoate" },
      { text: "Butan-1-ol and butan-2-ol" }
    ],
    correctAnswer: 0,
    explanation: "* Both butanoic acid (straight-chain) and 2-methylpropanoic acid (branched) are carboxylic acids containing the –COOH group with identical formula C₄H₈O₂.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q424",
    createdAt: "2026-08-22T01:35:00Z"
  },
  {
    id: "ex_ci_u11_l4_lv3_3-2023",
    question: "A 20.0 cm³ sample of ethanoic acid was neutralised by exactly 25.0 cm³ of 0.200 mol/dm³ sodium hydroxide solution:\nCH₃COOH + NaOH → CH₃COONa + H₂O\nWhat is the concentration of the ethanoic acid in mol/dm³?",
    options: [
      { text: "0.250 mol/dm³", isCorrect: true },
      { text: "0.160 mol/dm³" },
      { text: "0.500 mol/dm³" },
      { text: "0.100 mol/dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of NaOH = Concentration × Volume = 0.200 mol/dm³ × (25.0 / 1000) dm³ = 0.00500 mol.\n* The molar ratio of CH₃COOH : NaOH is 1 : 1, so moles of ethanoic acid = 0.00500 mol.\n* Concentration of CH₃COOH = Moles / Volume = 0.00500 / 0.0200 dm³ = 0.250 mol/dm³.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q182",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l4_lv3_4-2024",
    question: "Which of the following compounds is a structural isomer of butanoic acid (CH₃CH₂CH₂COOH)?",
    options: [
      { text: "2-methylpropanoic acid", isCorrect: true },
      { text: "Propanoic acid" },
      { text: "Butan-1-ol" },
      { text: "But-1-ene" }
    ],
    correctAnswer: 0,
    explanation: "* Butanoic acid has the molecular formula C₄H₈O₂.\n* 2-methylpropanoic acid (CH₃CH(CH₃)COOH) also has the molecular formula C₄H₈O₂ and is a branched-chain carboxylic acid isomer.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q183",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l4_lv3_5-2025",
    question: "What is the pH of a 0.10 mol/dm³ solution of ethanoic acid compared to a 0.10 mol/dm³ solution of hydrochloric acid at 25 °C?",
    options: [
      { text: "Ethanoic acid has a pH around 3, whereas hydrochloric acid has a pH around 1", isCorrect: true },
      { text: "Both acids have a pH of 1 because their concentrations are equal" },
      { text: "Ethanoic acid has a pH around 8, whereas hydrochloric acid has a pH of 1" },
      { text: "Hydrochloric acid has a higher pH than ethanoic acid" }
    ],
    correctAnswer: 0,
    explanation: "* In 0.10 mol/dm³ HCl, 100% ionisation yields [H⁺] = 0.10 mol/dm³, so pH = -log(0.10) = 1.0.\n* In 0.10 mol/dm³ CH₃COOH, only ~1% of molecules ionise, so [H⁺] ≈ 0.001 mol/dm³, giving a higher pH around 3 (less acidic).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q184",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
