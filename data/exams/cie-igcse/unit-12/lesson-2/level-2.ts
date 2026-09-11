import { Question } from '../../../types';

// Purification & Separation - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u12_l2_lv2_1-2026",
    question: "Why must cold cooling water enter at the BOTTOM of a Liebig condenser jacket and exit at the TOP during distillation?",
    options: [
      { text: "To ensure the entire cooling jacket remains completely filled with cold water, preventing air pockets and maximizing condensation efficiency", isCorrect: true },
      { text: "To increase the boiling point of the liquid in the flask" },
      { text: "To prevent the distillate from reacting with atmospheric oxygen" },
      { text: "To push the vapour faster through the inner tube" }
    ],
    correctAnswer: 0,
    explanation: "* Entering from the bottom forces water to fill the entire condenser jacket against gravity, eliminating air bubbles and providing continuous maximum heat exchange.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q457",
    createdAt: "2026-08-22T05:20:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv2_2-2026",
    question: "In a paper chromatography experiment, the solvent front moves 10.0 cm from the baseline. A dye spot moves 6.5 cm from the baseline.\nWhat is the $R_f$ value of this dye?",
    options: [
      { text: "0.65", isCorrect: true },
      { text: "1.54" },
      { text: "0.35" },
      { text: "6.50" }
    ],
    correctAnswer: 0,
    explanation: "* $R_f = \\frac{\\text{distance moved by spot}}{\\text{distance moved by solvent front}} = \\frac{6.5\\text{ cm}}{10.0\\text{ cm}} = 0.65$.\n* (Note: $R_f$ values are dimensionless and must always be $\\le 1.0$).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q458",
    createdAt: "2026-08-22T05:25:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv2_3-2026",
    question: "Why is a 'locating agent' (such as ninhydrin spray) applied to a paper chromatogram after separating a mixture of colourless amino acids?",
    options: [
      { text: "To react chemically with the colourless amino acid spots, turning them into visible coloured spots for measurement", isCorrect: true },
      { text: "To dissolve the paper fibers" },
      { text: "To speed up the evaporation of the solvent front" },
      { text: "To measure the pH of each spot" }
    ],
    correctAnswer: 0,
    explanation: "* Many biochemical substances (like amino acids and sugars) are colourless and invisible on dry paper.\n* Spraying with a locating agent (ninhydrin) produces purple/pink coloured spots that can be seen and measured.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q459",
    createdAt: "2026-08-22T05:30:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv2_4-2026",
    question: "In a fractional distillation apparatus, what is the role of the glass beads inside the fractionating column?",
    options: [
      { text: "To provide a large surface area for continuous repeated cycles of evaporation and condensation, separating liquids with close boiling points", isCorrect: true },
      { text: "To absorb all water vapour from the mixture" },
      { text: "To act as a chemical catalyst that cracks the vapours" },
      { text: "To prevent the thermometer from getting too hot" }
    ],
    correctAnswer: 0,
    explanation: "* Glass beads create a temperature gradient up the column with high surface area.\n* Higher-boiling vapours condense and drip back down, while the lower-boiling component reaches the top and distils over first.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q460",
    createdAt: "2026-08-22T05:35:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv2_5-2023",
    question: "A student runs a chromatogram with four dyes: W, X, Y, and Z. The solvent front moves 8.0 cm.\nSpot W moves 2.0 cm\nSpot X moves 4.8 cm\nSpot Y moves 6.0 cm\nSpot Z moves 7.2 cm\nWhich dye has an $R_f$ value of 0.60?",
    options: [
      { text: "Dye X", isCorrect: true },
      { text: "Dye W" },
      { text: "Dye Y" },
      { text: "Dye Z" }
    ],
    correctAnswer: 0,
    explanation: "* $R_f = \\text{distance moved by spot} / \\text{distance moved by solvent front}$.\n* For dye X: $R_f = 4.8 / 8.0 = 0.60$.\n* (For W: $2.0 / 8.0 = 0.25$; for Y: $6.0 / 8.0 = 0.75$; for Z: $7.2 / 8.0 = 0.90$).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 2,
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q4",
    createdAt: "2023-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv2_6-2024",
    question: "Which method is most suitable to separate ethanol (boiling point 78 °C) and water (boiling point 100 °C) from a miscible mixture?",
    options: [
      { text: "Fractional distillation", isCorrect: true },
      { text: "Simple distillation" },
      { text: "Separating funnel" },
      { text: "Filtration" }
    ],
    correctAnswer: 0,
    explanation: "* Ethanol and water are miscible liquids with relatively close boiling points (78 °C and 100 °C).\n* Fractional distillation uses a fractionating column to achieve repeated condensation and evaporation cycles, efficiently separating the mixture.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 2,
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q4",
    createdAt: "2024-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv2_7-2025",
    question: "A solid sample of an organic compound is suspected to be impure.\nWhich observation confirms that the sample is NOT pure?",
    options: [
      { text: "It melts over a range of temperatures below its literature melting point", isCorrect: true },
      { text: "It melts sharply at an exact, well-defined single temperature" },
      { text: "It produces a single sharp spot on a thin-layer chromatogram" },
      { text: "Its boiling point equals that of the pure compound" }
    ],
    correctAnswer: 0,
    explanation: "* Impurities lower the melting point and cause the substance to melt over a broad range of temperatures.\n* Pure substances melt sharply at a specific, fixed temperature.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 2,
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q3",
    createdAt: "2025-06-01T09:00:00Z"
  }
];
