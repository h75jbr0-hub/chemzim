import { Question } from '../../../types';

// Fuel and Hydrogen - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u5_l4_lv1_1-2026",
    question: "Which gas is released when fossil fuels containing sulfur impurities are burned?",
    options: [
      { text: "Carbon monoxide" },
      { text: "Sulfur dioxide", isCorrect: true },
      { text: "Methane" },
      { text: "Nitrogen" }
    ],
    correctAnswer: 1,
    explanation: "* Sulfur impurities in fossil fuels react with atmospheric oxygen during combustion to form sulfur dioxide (SO₂), a major cause of acid rain.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q141",
    createdAt: "2026-08-20T21:00:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv1_2-2026",
    question: "What are the only two products formed during the complete combustion of a pure hydrocarbon fuel in excess oxygen?",
    options: [
      { text: "Carbon monoxide and water" },
      { text: "Carbon dioxide and water", isCorrect: true },
      { text: "Carbon and hydrogen" },
      { text: "Carbon dioxide and hydrogen" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrocarbons contain only carbon and hydrogen atoms.\n* Complete combustion in excess oxygen produces carbon dioxide (CO₂) and water (H₂O).",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q142",
    createdAt: "2026-08-20T21:05:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv1_3-2026",
    question: "Why is hydrogen considered a cleaner fuel than petrol for motor vehicles?",
    options: [
      { text: "Its combustion releases only water vapour", isCorrect: true },
      { text: "It is a liquid at room temperature and easy to pump" },
      { text: "It is cheaper to extract from air than petrol from crude oil" },
      { text: "It releases less energy per gram than petrol" }
    ],
    correctAnswer: 0,
    explanation: "* Combustion of hydrogen produces only water ($2H_2 + O_2 \\rightarrow 2H_2O$) with zero emissions of carbon dioxide, carbon monoxide, particulates, or sulfur dioxide.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q143",
    createdAt: "2026-08-20T21:10:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv1_4-2026",
    question: "Which of the following is a non-renewable fossil fuel?",
    options: [
      { text: "Wood" },
      { text: "Coal", isCorrect: true },
      { text: "Ethanol from sugar cane" },
      { text: "Biogas from manure" }
    ],
    correctAnswer: 1,
    explanation: "* Coal is a fossil fuel formed over millions of years from decaying plant material under high pressure and temperature; it is non-renewable.\n* Wood, bio-ethanol, and biogas are renewable biofuels.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q144",
    createdAt: "2026-08-20T21:15:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv1_5-2023",
    question: "Which of the following is a major environmental benefit of using hydrogen as a fuel instead of gasoline or diesel?",
    options: [
      { text: "It produces water as the only product of combustion and does not emit CO₂", isCorrect: true },
      { text: "It is denser and easier to transport than gasoline" },
      { text: "It is naturally available in large underground reservoirs like crude oil" },
      { text: "It does not catch fire easily" }
    ],
    correctAnswer: 0,
    explanation: "* The combustion of hydrogen: $2H_2 + O_2 \\rightarrow 2H_2O$.\n* Water is the sole exhaust product, meaning hydrogen fuel does not emit carbon dioxide, which is a major contributor to global climate change.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q26",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv1_6-2024",
    question: "What is the main chemical component of natural gas?",
    options: [
      { text: "Methane", isCorrect: true },
      { text: "Hydrogen" },
      { text: "Carbon monoxide" },
      { text: "Ethanol" }
    ],
    correctAnswer: 0,
    explanation: "* Natural gas is a fossil fuel composed primarily of methane ($CH_4$), typically accounting for 70% to 90% of its volume.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q25",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv1_7-2025",
    question: "Which fuel is considered a renewable source of energy?",
    options: [
      { text: "Bioethanol produced by fermentation of sugar crops", isCorrect: true },
      { text: "Petroleum" },
      { text: "Natural gas" },
      { text: "Coal" }
    ],
    correctAnswer: 0,
    explanation: "* Bioethanol is produced from plant biomass (such as sugar cane or maize) that can be grown and replenished continuously, making it a renewable biofuel.\n* Petroleum, natural gas, and coal are non-renewable fossil fuels.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q28",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

