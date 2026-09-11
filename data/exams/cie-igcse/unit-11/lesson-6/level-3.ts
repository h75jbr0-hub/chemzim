import { Question } from '../../../types';

// Esters - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l6_lv3_1-2026",
    question: "When ethyl ethanoate (CH₃COOC₂H₅) is heated under reflux with aqueous sodium hydroxide (alkaline hydrolysis / saponification), what are the two organic products formed?",
    options: [
      { text: "Sodium ethanoate (CH₃COONa) and ethanol (C₂H₅OH)", isCorrect: true },
      { text: "Ethanoic acid (CH₃COOH) and sodium ethoxide (C₂H₅ONa)" },
      { text: "Sodium methanoate (HCOONa) and propan-1-ol" },
      { text: "Ethene (C₂H₄) and sodium carbonate (Na₂CO₃)" }
    ],
    correctAnswer: 0,
    explanation: "* Base hydrolysis of an ester: Ester + NaOH → Carboxylate salt + Alcohol.\n* CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH (irreversible saponification).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q439",
    createdAt: "2026-08-22T03:30:00Z"
  },
  {
    id: "ex_ci_u11_l6_lv3_2-2026",
    question: "How many ester isomers exist with the molecular formula C₃H₆O₂?",
    options: [
      { text: "2 (Methyl ethanoate and Ethyl methanoate)", isCorrect: true },
      { text: "1" },
      { text: "3" },
      { text: "4" }
    ],
    correctAnswer: 0,
    explanation: "* For C₃H₆O₂, the two possible esters are:\n  1. Methyl ethanoate: CH₃COOCH₃\n  2. Ethyl methanoate: HCOOCH₂CH₃\n* (Note: Propanoic acid C₂H₅COOH is a carboxylic acid isomer, not an ester).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q440",
    createdAt: "2026-08-22T03:35:00Z"
  },
  {
    id: "ex_ci_u11_l6_lv3_3-2023",
    question: "When ethyl ethanoate (CH₃COOC₂H₅) is heated under reflux with aqueous sodium hydroxide (saponification), what products are formed?",
    options: [
      { text: "Sodium ethanoate and ethanol", isCorrect: true },
      { text: "Ethanoic acid and sodium ethoxide" },
      { text: "Sodium methanoate and propan-1-ol" },
      { text: "Ethene and sodium carbonate" }
    ],
    correctAnswer: 0,
    explanation: "* Alkaline hydrolysis (saponification) of an ester splits the ester into a carboxylate salt and an alcohol:\n  CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q200",
    lessonNum: 6,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l6_lv3_4-2024",
    question: "How many ester isomers exist with the molecular formula C₃H₆O₂?",
    options: [
      { text: "2 (methyl ethanoate and ethyl methanoate)", isCorrect: true },
      { text: "1" },
      { text: "3" },
      { text: "4" }
    ],
    correctAnswer: 0,
    explanation: "* The two possible ester isomers with formula C₃H₆O₂ are:\n  1. Methyl ethanoate: CH₃COOCH₃\n  2. Ethyl methanoate: HCOOCH₂CH₃.\n* (Propanoic acid C₂H₅COOH is a carboxylic acid isomer, not an ester).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q201",
    lessonNum: 6,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l6_lv3_5-2025",
    question: "What mass of ethyl ethanoate ($M_r = 88$) is formed from the complete reaction of 30.0 g of ethanoic acid ($M_r = 60$) with excess ethanol?\nCH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
    options: [
      { text: "44.0 g", isCorrect: true },
      { text: "88.0 g" },
      { text: "22.0 g" },
      { text: "60.0 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of ethanoic acid = 30.0 / 60 = 0.500 mol.\n* The molar ratio of CH₃COOH : CH₃COOC₂H₅ is 1 : 1.\n* Moles of ethyl ethanoate formed = 0.500 mol.\n* Mass of ethyl ethanoate = 0.500 mol × 88 g/mol = 44.0 g.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q202",
    lessonNum: 6,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
