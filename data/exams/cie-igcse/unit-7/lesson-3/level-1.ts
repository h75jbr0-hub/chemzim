import { Question } from '../../../types';

// Preparation of Salts - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u7_l3_lv1_1-2026",
    question: "Which of the following salts is completely insoluble in water at room temperature?",
    options: [
      { text: "Barium sulfate, BaSO₄", isCorrect: true },
      { text: "Sodium sulfate, Na₂SO₄" },
      { text: "Magnesium nitrate, Mg(NO₃)₂" },
      { text: "Ammonium chloride, NH₄Cl" }
    ],
    correctAnswer: 0,
    explanation: "* All nitrates, sodium, potassium, and ammonium salts are soluble.\n* Most sulfates are soluble, EXCEPT barium sulfate (BaSO₄), lead(II) sulfate (PbSO₄), and calcium sulfate (CaSO₄, sparingly).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q220",
    createdAt: "2026-08-21T05:00:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv1_2-2026",
    question: "Which experimental method is used to prepare pure, dry crystals of an insoluble salt like lead(II) iodide (PbI₂)?",
    options: [
      { text: "Precipitation by mixing two aqueous soluble salt solutions, filtering, washing the residue, and drying", isCorrect: true },
      { text: "Titration using an acid and an alkali with an indicator" },
      { text: "Adding excess insoluble metal oxide to acid and evaporating to dryness" },
      { text: "Fractional distillation of the acid mixture" }
    ],
    correctAnswer: 0,
    explanation: "* Insoluble salts are prepared by precipitation (mixing two soluble solutions, e.g. Pb(NO₃)₂ + 2KI → PbI₂(s) + 2KNO₃), followed by filtration, washing the residue with distilled water, and drying.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q221",
    createdAt: "2026-08-21T05:05:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv1_3-2026",
    question: "Which of the following salts is prepared by acid-alkali titration rather than by adding excess insoluble base to acid?",
    options: [
      { text: "Potassium chloride, KCl", isCorrect: true },
      { text: "Copper(II) sulfate, CuSO₄" },
      { text: "Magnesium chloride, MgCl₂" },
      { text: "Zinc nitrate, Zn(NO₃)₂" }
    ],
    correctAnswer: 0,
    explanation: "* Salts of Sodium, Potassium, and Ammonium (SPA salts) are prepared by titration because all reactants and products are soluble in water, so excess reactant cannot simply be filtered off.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q222",
    createdAt: "2026-08-21T05:10:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv1_4-2023",
    question: "Which method should be used to prepare a pure, dry sample of barium sulfate, which is an insoluble salt?",
    options: [
      { text: "Precipitation by mixing two aqueous solutions, followed by filtration, washing, and drying", isCorrect: true },
      { text: "Titration using an indicator" },
      { text: "Reacting excess barium metal with dilute sulfuric acid and crystallising" },
      { text: "Thermal decomposition of barium carbonate" }
    ],
    correctAnswer: 0,
    explanation: "* Insoluble salts (like $BaSO_4$) are prepared by precipitation: mixing two soluble solutions (e.g. aqueous barium chloride and aqueous sodium sulfate).\n* The solid precipitate is filtered off, washed with distilled water to remove spectator ions, and dried.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q35",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv1_5-2024",
    question: "Which of the following salts is completely soluble in cold water?",
    options: [
      { text: "Sodium nitrate, NaNO₃", isCorrect: true },
      { text: "Silver chloride, AgCl" },
      { text: "Lead(II) sulfate, PbSO₄" },
      { text: "Calcium carbonate, CaCO₃" }
    ],
    correctAnswer: 0,
    explanation: "* All nitrates and all sodium salts are soluble in water without exception.\n* Silver chloride ($AgCl$), lead(II) sulfate ($PbSO_4$), and calcium carbonate ($CaCO_3$) are insoluble salts.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q36",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv1_6-2025",
    question: "When preparing hydrated zinc sulfate crystals from zinc carbonate and dilute sulfuric acid, why is excess zinc carbonate added?",
    options: [
      { text: "To ensure that all the sulfuric acid has reacted completely", isCorrect: true },
      { text: "To speed up the filtration process" },
      { text: "To make the solution alkaline" },
      { text: "To increase the temperature of the mixture" }
    ],
    correctAnswer: 0,
    explanation: "* Adding excess insoluble reactant guarantees that 100% of the acid is consumed, preventing acid contamination of the final crystals.\n* The unreacted excess solid is easily removed by filtration.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q38",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

