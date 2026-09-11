import { Question } from '../../../types';

// Alcohols - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l3_lv3_1-2026",
    question: "What is the structural formula difference between the two alcohol isomers propan-1-ol and propan-2-ol?",
    options: [
      { text: "In propan-1-ol the –OH group is bonded to an end carbon (CH₃CH₂CH₂OH), while in propan-2-ol it is bonded to the middle carbon (CH₃CH(OH)CH₃)", isCorrect: true },
      { text: "Propan-1-ol has a C=C double bond whereas propan-2-ol does not" },
      { text: "Propan-2-ol has two separate –OH groups" },
      { text: "Propan-1-ol is a carboxylic acid" }
    ],
    correctAnswer: 0,
    explanation: "* Both have molecular formula C₃H₈O.\n* Propan-1-ol: $CH_3-CH_2-CH_2-OH$ (primary alcohol).\n* Propan-2-ol: $CH_3-CH(OH)-CH_3$ (secondary alcohol).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q415",
    createdAt: "2026-08-22T00:30:00Z"
  },
  {
    id: "ex_ci_u11_l3_lv3_2-2026",
    question: "In a brewing experiment, 90.0 g of glucose ($M_r = 180$) is fermented completely by yeast: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.\nWhat is the maximum theoretical mass of ethanol ($M_r = 46$) that can be produced?",
    options: [
      { text: "46.0 g", isCorrect: true },
      { text: "92.0 g" },
      { text: "23.0 g" },
      { text: "18.0 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of glucose $= 90.0 / 180 = 0.50\\text{ mol}$.\n* From equation, 1 mole glucose yields 2 moles ethanol.\n* Moles of ethanol $= 0.50 \\times 2 = 1.0\\text{ mol}$.\n* Mass of ethanol $= 1.0 \\times 46 = 46.0\\text{ g}$.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q416",
    createdAt: "2026-08-22T00:35:00Z"
  },
  {
    id: "ex_ci_u11_l3_lv3_3-2023",
    question: "What is the structural relationship between propan-1-ol and propan-2-ol?",
    options: [
      { text: "They are positional isomers with the formula C₃H₈O, differing in the position of the –OH group along the carbon chain", isCorrect: true },
      { text: "Propan-1-ol has a higher carbon count than propan-2-ol" },
      { text: "Propan-2-ol is an alkene while propan-1-ol is an alkane" },
      { text: "They have different molecular formulas" }
    ],
    correctAnswer: 0,
    explanation: "* Propan-1-ol (CH₃CH₂CH₂OH) and propan-2-ol (CH₃CH(OH)CH₃) have the same molecular formula C₃H₈O.\n* They differ only in whether the hydroxyl (–OH) group is attached to carbon-1 or carbon-2 (positional isomers).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q173",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l3_lv3_4-2024",
    question: "A sample of 45.0 g of glucose (C₆H₁₂O₆) was completely fermented into ethanol and carbon dioxide:\nC₆H₁₂O₆ → 2C₂H₅OH + 2CO₂\nWhat mass of ethanol was produced?\n($A_r: \\text{C} = 12, \\text{H} = 1, \\text{O} = 16$)",
    options: [
      { text: "23.0 g", isCorrect: true },
      { text: "46.0 g" },
      { text: "11.5 g" },
      { text: "90.0 g" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r(\\text{glucose}) = (6 \\times 12) + 12 + (6 \\times 16) = 180$ g/mol.\n* Moles of glucose = 45.0 / 180 = 0.250 mol.\n* Moles of ethanol = 0.250 × 2 = 0.500 mol.\n* $M_r(\\text{ethanol}) = (2 \\times 12) + 6 + 16 = 46$ g/mol.\n* Mass of ethanol = 0.500 mol × 46 g/mol = 23.0 g.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q174",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l3_lv3_5-2025",
    question: "An organic compound W has molecular formula C₄H₁₀O and turns acidified potassium dichromate(VI) from orange to green upon heating. Which compound could W be?",
    options: [
      { text: "Butan-1-ol", isCorrect: true },
      { text: "But-1-ene" },
      { text: "Butanoic acid" },
      { text: "Ethyl ethanoate" }
    ],
    correctAnswer: 0,
    explanation: "* C₄H₁₀O fits the general formula of an alcohol (CₙH₂ₙ₊₁OH with n=4, butanol).\n* Alcohols like butan-1-ol are oxidised by acidified dichromate(VI) to carboxylic acids, reducing Cr(VI) (orange) to Cr(III) (green).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q175",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
