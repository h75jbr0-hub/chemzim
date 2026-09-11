import { Question } from '../../../types';

// Fertilisers & Ammonia - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u10_l2_lv2_1-2026",
    question: "The synthesis of ammonia is exothermic: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = -92 kJ/mol.\nWhy is an intermediate temperature of 450°C chosen rather than a low temperature of 50°C?",
    options: [
      { text: "At 50°C the rate of reaction is far too slow to be commercially viable, so 450°C is a compromise between acceptable yield and practical rate", isCorrect: true },
      { text: "At 50°C ammonia gas would decompose back into elements" },
      { text: "At 50°C the iron catalyst would melt" },
      { text: "At 450°C the percentage yield of ammonia is 100%" }
    ],
    correctAnswer: 0,
    explanation: "* Lower temperatures favour the exothermic forward reaction giving higher equilibrium yield, but collision rates are extremely slow.\n* 450°C represents an optimum compromise between a reasonable rate of reaching equilibrium and acceptable yield (~15% per pass).",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q361",
    createdAt: "2026-08-21T19:20:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv2_2-2026",
    question: "How is pure liquid ammonia separated from unreacted nitrogen and hydrogen gases in the Haber process?",
    options: [
      { text: "The gas mixture is cooled under pressure; ammonia condenses easily into a liquid due to its higher boiling point, and unreacted N₂/H₂ are recycled", isCorrect: true },
      { text: "The mixture is filtered through paper" },
      { text: "The mixture is passed over hot copper oxide" },
      { text: "Nitrogen and hydrogen dissolve in water while ammonia does not" }
    ],
    correctAnswer: 0,
    explanation: "* Ammonia (-33°C bp) condenses to a liquid under high pressure far more easily than N₂ (-196°C) and H₂ (-253°C).\n* Liquid ammonia is tapped off and the unreacted gases are recycled back into the reactor.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q362",
    createdAt: "2026-08-21T19:25:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv2_3-2026",
    question: "Why should farmers NEVER add slaked lime (calcium hydroxide, Ca(OH)₂) and ammonium fertilisers (e.g. ammonium nitrate) to agricultural soil at the same time?",
    options: [
      { text: "The alkaline lime reacts with ammonium ions to release ammonia gas into the atmosphere, causing loss of vital nitrogen from the soil", isCorrect: true },
      { text: "The mixture explodes when exposed to sunlight" },
      { text: "Calcium hydroxide converts nitrate ions into poisonous cyanide" },
      { text: "The mixture turns the soil into insoluble rock" }
    ],
    correctAnswer: 0,
    explanation: "* Base + ammonium salt reaction: Ca(OH)₂ + 2NH₄NO₃ → Ca(NO₃)₂ + 2NH₃(g) + 2H₂O.\n* The valuable nitrogen is lost as escaping ammonia gas rather than being absorbed by plant roots.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q363",
    createdAt: "2026-08-21T19:30:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv2_4-2026",
    question: "What is the correct sequence of events during eutrophication caused by excess fertiliser runoff into lakes?",
    options: [
      { text: "Algal bloom forms → blocks sunlight → aquatic plants die → aerobic bacteria decompose plants and consume dissolved O₂ → fish suffocate", isCorrect: true },
      { text: "Fertilisers poison fish directly → bacteria bloom → water evaporates" },
      { text: "Algae produce toxic acid → water turns acidic → plants dissolve" },
      { text: "Water boiling point rises → fish overheat → algae decompose" }
    ],
    correctAnswer: 0,
    explanation: "* Leached nitrates and phosphates trigger rapid surface algae growth (algal bloom).\n* Sunlight is blocked, killing submerged plants.\n* Decomposing aerobic bacteria multiply rapidly and deplete dissolved oxygen, suffocating fish and aquatic life.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q364",
    createdAt: "2026-08-21T19:35:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv2_5-2023",
    question: "Why is a temperature of around 450 °C used in the Haber process instead of a much lower temperature?",
    options: [
      { text: "At lower temperatures the reaction rate is too slow, so 450 °C is an optimum compromise between rate and yield", isCorrect: true },
      { text: "Lower temperatures decrease the percentage yield of ammonia at equilibrium" },
      { text: "The iron catalyst becomes poisoned and inactive at lower temperatures" },
      { text: "Ammonia decomposes completely at temperatures below 200 °C" }
    ],
    correctAnswer: 0,
    explanation: "* The formation of ammonia is exothermic (ΔH = -92 kJ/mol).\n* Lower temperatures favour higher equilibrium yield, but at low temperatures the rate of reaching equilibrium is impractically slow.\n* 450 °C provides an acceptable reaction rate while still giving a reasonable yield.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q125",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv2_6-2024",
    question: "Why should slaked lime (calcium hydroxide) not be added to soil at the same time as ammonium fertilisers?",
    options: [
      { text: "They react together to produce ammonia gas, resulting in the loss of nitrogen from the soil", isCorrect: true },
      { text: "They form an insoluble precipitate that blocks plant roots from absorbing water" },
      { text: "The mixture becomes dangerously explosive when exposed to moisture" },
      { text: "They react to produce toxic chlorine gas" }
    ],
    correctAnswer: 0,
    explanation: "* Slaked lime is an alkaline base.\n* When mixed with ammonium fertiliser, an acid-base displacement occurs: Ca(OH)₂ + 2NH₄⁺ → Ca²⁺ + 2NH₃(g) + 2H₂O.\n* The released ammonia gas escapes into the air, wasting the valuable nitrogen nutrient.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q126",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv2_7-2025",
    question: "How is ammonia separated from unreacted nitrogen and hydrogen in the Haber process output gas mixture?",
    options: [
      { text: "By cooling the mixture so that ammonia condenses into a liquid while nitrogen and hydrogen remain gases", isCorrect: true },
      { text: "By passing the gases through water to dissolve nitrogen" },
      { text: "By filtering the mixture through porous carbon" },
      { text: "By reacting the mixture with iron catalyst at room temperature" }
    ],
    correctAnswer: 0,
    explanation: "* Ammonia has a much higher boiling point (-33 °C) than nitrogen (-196 °C) or hydrogen (-253 °C).\n* Cooling the pressurised reaction mixture causes ammonia to condense into a liquid which is drawn off, while unreacted N₂ and H₂ are recycled.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q127",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
