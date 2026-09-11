import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u1_l4_lv2_1-2026",
    question: "Why does unbranched hexane (bp 69 °C) have a significantly higher boiling point than its branched structural isomer 2,2-dimethylbutane (bp 50 °C)?",
    options: [
      { text: "Hexane forms hydrogen bonds between molecules" },
      { text: "Unbranched hexane has a larger surface area of contact between molecules, enabling more extensive London dispersion forces than the spherical branched isomer", isCorrect: true },
      { text: "Hexane has a greater molecular mass than 2,2-dimethylbutane" },
      { text: "2,2-dimethylbutane is an ionic compound" }
    ],
    correctAnswer: 1,
    explanation: "* Both have the identical formula $\\text{C}_6\\text{H}_{14}$ and molecular mass ($M_r = 86.0$).\n* Straight-chain hexane packs more closely and has a larger surface contact area, generating stronger instantaneous dipole-induced dipole (London dispersion) forces.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q31",
    createdAt: "2026-06-17T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv2_2-2026",
    question: "Which of the following reaction steps represents a propagation step in the free-radical monochlorination of methane?",
    options: [
      { text: "Cl₂ → 2Cl•" },
      { text: "CH₄ + Cl• → •CH₃ + HCl", isCorrect: true },
      { text: "•CH₃ + •CH₃ → C₂H₆" },
      { text: "•CH₃ + Cl• → CH₃Cl" }
    ],
    correctAnswer: 1,
    explanation: "* In a propagation step, a free radical reacts with a non-radical molecule to produce a new molecule and a new free radical, continuing the chain reaction ($\\text{CH}_4 + \\text{Cl}^\\bullet \\rightarrow ^\\bullet\\text{CH}_3 + \\text{HCl}$).",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q32",
    createdAt: "2026-06-17T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv2_3-2026",
    question: "In the free-radical chlorination of methane, trace amounts of ethane ($\\text{C}_2\\text{H}_6$) are detected in the product mixture. Which step accounts for the formation of ethane?",
    options: [
      { text: "Initiation step" },
      { text: "Propagation step" },
      { text: "Termination step between two methyl radicals", isCorrect: true },
      { text: "Thermal cracking of methane" }
    ],
    correctAnswer: 2,
    explanation: "* When two methyl radicals collide and combine during a termination step ($^\\bullet\\text{CH}_3 + ^\\bullet\\text{CH}_3 \\rightarrow \\text{C}_2\\text{H}_6$), ethane is produced, providing strong evidence for the free-radical mechanism.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q30",
    createdAt: "2026-06-18T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv2_4-2026",
    question: "What is the systematic IUPAC name for the branched alkane with the skeletal formula $\\text{(CH}_3)_3\\text{CCH}_2\\text{CH(CH}_3)_2$?",
    options: [
      { text: "2,2,4-trimethylpentane", isCorrect: true },
      { text: "2,4,4-trimethylpentane" },
      { text: "Iso-octane" },
      { text: "1,1,3,3-tetramethylbutane" }
    ],
    correctAnswer: 0,
    explanation: "* Longest carbon chain has 5 carbons (pentane).\n* Numbering from left to right gives substituents at positions 2, 2, and 4 (sum = 8), compared to 2, 4, 4 (sum = 10) from right to left.\n* IUPAC name is **2,2,4-trimethylpentane**.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q32",
    createdAt: "2026-06-18T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv2_5-2026",
    question: "Why are alkanes generally unreactive towards electrophiles and nucleophiles at room temperature?",
    options: [
      { text: "They contain delocalized pi electrons" },
      { text: "The C-C and C-H sigma bonds are strong and non-polar (negligible electronegativity difference)", isCorrect: true },
      { text: "They are completely surrounded by positive ions" },
      { text: "Their molecular mass is too large" }
    ],
    correctAnswer: 1,
    explanation: "* Alkanes contain only strong covalent $\\text{C}-\\text{C}$ and $\\text{C}-\\text{H}$ $\\sigma$ bonds.\n* Because carbon and hydrogen have very similar electronegativities ($2.5$ vs $2.1$), the bonds are virtually non-polar with no electron-deficient or electron-rich sites for attack.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q33",
    createdAt: "2026-06-19T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l4_lv2_6-2026",
    question: "What is the primary industrial objective of catalytic cracking of long-chain alkane fractions from crude oil?",
    options: [
      { text: "To produce water and carbon dioxide" },
      { text: "To convert less useful, surplus long-chain alkanes into more valuable, higher-demand short-chain alkanes (for petrol) and alkenes (for polymer manufacture)", isCorrect: true },
      { text: "To synthesize non-flammable polymers directly" },
      { text: "To convert hydrocarbons into coal" }
    ],
    correctAnswer: 1,
    explanation: "* Crude oil fractional distillation produces an excess of heavy, long-chain fractions.\n* Catalytic cracking breaks them over a zeolite catalyst into high-octane fuels (shorter alkanes) and reactive alkenes used as chemical feedstocks.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q31",
    createdAt: "2026-06-19T10:00:00Z"
  }
];

