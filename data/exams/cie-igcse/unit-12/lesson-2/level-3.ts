import { Question } from '../../../types';

// Purification & Separation - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u12_l2_lv3_1-2026",
    question: "Why is two-dimensional (2D) paper chromatography used when a one-dimensional chromatogram fails to separate all components of a complex mixture of amino acids?",
    options: [
      { text: "Spots that have identical $R_f$ values in the first solvent can be resolved by turning the paper 90° and running with a different second solvent of different polarity", isCorrect: true },
      { text: "The second solvent oxidises all amino acids into gases" },
      { text: "It doubles the speed at which the solvent front advances" },
      { text: "It converts colourless spots directly into radioactive tracers" }
    ],
    correctAnswer: 0,
    explanation: "* Different solvents interact with different partition coefficients / affinities.\n* Components that co-elute (overlap) in solvent 1 will separate cleanly when developed perpendicularly in solvent 2.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q461",
    createdAt: "2026-08-22T05:40:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv3_2-2026",
    question: "What is the correct sequence of steps to separate pure, dry crystals of sand (SiO₂), sodium chloride (NaCl), and iron filings from a solid mixture of all three?",
    options: [
      { text: "1. Use a magnet to remove iron filings → 2. Add water and stir to dissolve NaCl → 3. Filter to separate sand residue → 4. Heat filtrate to crystallisation point and cool", isCorrect: true },
      { text: "1. Add water → 2. Distil mixture → 3. Use a magnet → 4. Filter" },
      { text: "1. Filter dry mixture → 2. Add acid to dissolve iron → 3. Evaporate" },
      { text: "1. Heat mixture to 1000°C to melt NaCl → 2. Pour off liquid" }
    ],
    correctAnswer: 0,
    explanation: "* Magnetic separation removes iron filings first.\n* Adding water dissolves soluble NaCl leaving insoluble sand.\n* Filtration separates sand as the residue.\n* Controlled crystallisation of the filtrate yields pure NaCl crystals.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q462",
    createdAt: "2026-08-22T05:45:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv3_3-2026",
    question: "In setting up a paper chromatography tank, what happens if the level of the solvent in the beaker is HIGHER than the pencil baseline on the paper?",
    options: [
      { text: "The sample spots will dissolve directly into the solvent in the beaker and wash away instead of traveling up the paper", isCorrect: true },
      { text: "The solvent front will stop moving immediately" },
      { text: "The $R_f$ values of all substances will double" },
      { text: "The pencil line will react with the solvent" }
    ],
    correctAnswer: 0,
    explanation: "* The solvent level must always be below the baseline so capillary action draws the solvent up through the spots, separating them upwards along the paper.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q463",
    createdAt: "2026-08-22T05:50:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv3_4-2026",
    question: "A solid sample is suspected to be impure benzoic acid. What experimental heating profile confirms that the sample is IMPURE?",
    options: [
      { text: "It begins melting below the pure literature melting point (122°C) and melts gradually over a wide temperature range (e.g. 114–119°C)", isCorrect: true },
      { text: "It melts sharply at exactly 122.0°C" },
      { text: "It boils sharply at 249°C without decomposing" },
      { text: "It dissolves in water at 20°C" }
    ],
    correctAnswer: 0,
    explanation: "* Pure substances melt sharply at one precise temperature.\n* Impurities disrupt the crystal lattice, causing the substance to melt at a lower temperature and over a broad temperature range.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q464",
    createdAt: "2026-08-22T05:55:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv3_5-2023",
    question: "A student performs paper chromatography to identify the amino acids in a protein hydrolysate.\nAfter developing the chromatogram, no spots are visible under normal light.\nWhich two steps should the student carry out to locate and measure the spots?",
    options: [
      { text: "Spray the paper with ninhydrin (a locating agent) and dry gently with a warm hairdryer", isCorrect: true },
      { text: "Place the paper back in water and shake vigorously" },
      { text: "Dip the chromatogram in concentrated hydrochloric acid" },
      { text: "Expose the paper to sulfur dioxide gas in a fume hood" }
    ],
    correctAnswer: 0,
    explanation: "* Amino acids are colourless compounds and are invisible on standard chromatography paper.\n* Spraying with a locating agent such as ninhydrin and warming causes chemical reactions that turn the amino acid spots purple or pink.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 2,
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q4",
    createdAt: "2023-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv3_6-2024",
    question: "Liquid X (b.p. 65 °C) and liquid Y (b.p. 110 °C) are miscible and form a homogeneous solution.\nDuring fractional distillation of this mixture, which temperature will the thermometer at the top of the fractionating column register while the first pure distillate is being collected?",
    options: [
      { text: "Steadily at 65 °C", isCorrect: true },
      { text: "Steadily at 110 °C" },
      { text: "Steadily at 87.5 °C (the average b.p.)" },
      { text: "Constantly fluctuating between 65 °C and 110 °C" }
    ],
    correctAnswer: 0,
    explanation: "* The lower-boiling component (liquid X, b.p. 65 °C) reaches the top of the fractionating column first.\n* While pure X distils over, the thermometer at the stillhead remains steady at its boiling point (65 °C) until all X has evaporated.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 2,
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q5",
    createdAt: "2024-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv3_7-2025",
    question: "A sample of salt contaminated with an insoluble metal oxide and a soluble coloring agent is given to a student.\nWhich sequence of procedures produces pure dry crystals of the salt?",
    options: [
      { text: "Dissolve in minimum hot water → filter off insoluble oxide → add activated charcoal to decolorize & filter → crystallise filtrate", isCorrect: true },
      { text: "Filter dry solid → add water → simple distillation → condense vapor" },
      { text: "Fractional distillation of the solid mixture → chromatography" },
      { text: "Evaporate dry solid to dryness → centrifuge → scrape residue" }
    ],
    correctAnswer: 0,
    explanation: "* Dissolving in water allows the insoluble metal oxide to be removed by filtration as residue.\n* Activated charcoal absorbs soluble dye/coloring agents, which are then filtered out.\n* Crystallising the remaining pure salt solution and cooling yields pure dry salt crystals.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 2,
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q4",
    createdAt: "2025-06-01T09:00:00Z"
  }
];
