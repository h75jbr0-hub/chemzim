import { Question } from '../../../types';

// Extraction of Metals - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u9_l3_lv2_1-2026",
    question: "What is the main reducing agent that reduces iron(III) oxide (Fe₂O₃) to molten iron in the upper zones of the Blast Furnace?",
    options: [
      { text: "Carbon monoxide gas (CO)", isCorrect: true },
      { text: "Solid calcium carbonate (CaCO₃)" },
      { text: "Carbon dioxide gas (CO₂)" },
      { text: "Molten slag (CaSiO₃)" }
    ],
    correctAnswer: 0,
    explanation: "* Although coke (C) is the initial source, it reacts with CO₂ to form carbon monoxide: C + CO₂ → 2CO.\n* Gaseous CO is the primary reducing agent that reduces iron ore: Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q320",
    createdAt: "2026-08-21T15:15:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv2_2-2026",
    question: "How does limestone remove sandy impurities (silicon dioxide, SiO₂) in the blast furnace to form molten slag?",
    options: [
      { text: "Limestone thermally decomposes to basic calcium oxide (CaO), which reacts with acidic SiO₂ to form molten calcium silicate (CaSiO₃)", isCorrect: true },
      { text: "Limestone dissolves silica into water vapour" },
      { text: "Limestone oxidises silicon dioxide into pure silicon" },
      { text: "Limestone acts as an electrode that attracts sand particles" }
    ],
    correctAnswer: 0,
    explanation: "* Limestone decomposes: CaCO₃(s) → CaO(s) + CO₂(g).\n* Basic CaO neutralises acidic silica: CaO(s) + SiO₂(s) → CaSiO₃(l) (molten slag, which floats on dense molten iron).",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q321",
    createdAt: "2026-08-21T15:20:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv2_3-2026",
    question: "Why is molten cryolite (Na₃AlF₆) added to purified aluminium oxide (Al₂O₃) during the Hall–Héroult electrolytic extraction?",
    options: [
      { text: "To dissolve alumina, dramatically lowering the melting point from ~2045°C to ~950°C and improving electrical conductivity", isCorrect: true },
      { text: "To prevent the carbon anodes from burning away" },
      { text: "To increase the boiling point of aluminium metal" },
      { text: "To neutralise acidic fumes of fluorine gas" }
    ],
    correctAnswer: 0,
    explanation: "* Pure alumina melts at over 2045°C, requiring enormous energy.\n* Dissolving it in molten cryolite lowers the working temperature to ~950°C, drastically saving energy costs and providing good electrical conductivity.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q322",
    createdAt: "2026-08-21T15:25:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv2_4-2026",
    question: "Which of the following is an economic and environmental advantage of recycling aluminium cans compared to extracting new aluminium from bauxite ore?",
    options: [
      { text: "Recycling uses only about 5% of the energy required for primary extraction from bauxite, conserving fossil fuels and bauxite reserves", isCorrect: true },
      { text: "Recycled aluminium is stronger than newly extracted aluminium" },
      { text: "Recycling eliminates the need for any melting process" },
      { text: "Recycled aluminium does not form an oxide coating" }
    ],
    correctAnswer: 0,
    explanation: "* Recycling aluminium consumes ~95% less energy than extracting it from bauxite via electrolysis, greatly cutting electricity costs, mining impact, and greenhouse emissions.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q323",
    createdAt: "2026-08-21T15:30:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv2_5-2023",
    question: "What is the role of carbon monoxide (CO) in the blast furnace extraction of iron?",
    options: [
      { text: "It reduces iron(III) oxide to iron: Fe₂O₃ + 3CO → 2Fe + 3CO₂", isCorrect: true },
      { text: "It oxidises calcium carbonate to calcium oxide" },
      { text: "It reacts with acidic impurities to produce slag" },
      { text: "It provides the fuel that ignites the coke" }
    ],
    correctAnswer: 0,
    explanation: "* In the upper parts of the blast furnace, carbon monoxide gas is the principal reducing agent that reduces solid hematite (Fe₂O₃) to molten iron.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q89",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv2_6-2024",
    question: "Why is cryolite added to aluminium oxide in the extraction of aluminium by electrolysis?",
    options: [
      { text: "To lower the melting point of the electrolyte and improve electrical conductivity", isCorrect: true },
      { text: "To prevent the carbon anodes from burning away" },
      { text: "To react with acidic silica impurities" },
      { text: "To convert aluminium into bauxite ore" }
    ],
    correctAnswer: 0,
    explanation: "* Pure aluminium oxide has an extremely high melting point (~2045 °C).\n* Dissolving it in molten cryolite lowers the melting point to approximately 950 °C, which substantially reduces the energy required and makes the electrolytic process viable.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q90",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv2_7-2025",
    question: "Which equation shows the formation of slag in the blast furnace?",
    options: [
      { text: "CaO + SiO₂ → CaSiO₃", isCorrect: true },
      { text: "CaCO₃ → CaO + CO₂" },
      { text: "C + O₂ → CO₂" },
      { text: "Fe₂O₃ + 3CO → 2Fe + 3CO₂" }
    ],
    correctAnswer: 0,
    explanation: "* Slag is calcium silicate (CaSiO₃).\n* It forms when basic calcium oxide (from thermal decomposition of limestone) reacts with acidic silicon dioxide (sand/silica): CaO(s) + SiO₂(s) → CaSiO₃(l).",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q91",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
