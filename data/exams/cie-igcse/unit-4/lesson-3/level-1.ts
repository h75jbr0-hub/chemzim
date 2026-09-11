import { Question } from '../../../types';

// Electroplating - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u4_l3_lv1_1-2026",
    question: "When electroplating a steel spoon with copper, where should the spoon be placed?",
    options: [
      { text: "At the anode" },
      { text: "At the cathode", isCorrect: true },
      { text: "Dissolved in the electrolyte" },
      { text: "Suspended between the two electrodes" }
    ],
    correctAnswer: 1,
    explanation: "* In electroplating, the object to be coated (the steel spoon) is always made the negative electrode, which is the cathode.\n* Positive metal ions (Cu²⁺) are attracted to the cathode and gain electrons to deposit as metal on the object's surface.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q81",
    createdAt: "2026-08-20T16:00:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv1_2-2026",
    question: "In an experiment to electroplate a key with nickel, what material should be used for the anode?",
    options: [
      { text: "Steel" },
      { text: "Carbon (graphite)" },
      { text: "Pure nickel", isCorrect: true },
      { text: "Platinum" }
    ],
    correctAnswer: 2,
    explanation: "* In electroplating, the anode (positive electrode) must be made of the metal that is to be deposited.\n* To plate with nickel, a pure nickel anode is used, which dissolves during the process to replenish nickel ions in solution.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q82",
    createdAt: "2026-08-20T16:05:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv1_3-2026",
    question: "Which of the following is a common reason for electroplating metal objects?",
    options: [
      { text: "To make them dissolve faster" },
      { text: "To improve their electrical resistance" },
      { text: "To prevent corrosion and improve appearance", isCorrect: true },
      { text: "To increase their melting points" }
    ],
    correctAnswer: 2,
    explanation: "* Electroplating is widely used to coat cheaper, reactive metals with a thin layer of an unreactive/decorative metal (like chromium, silver, or gold).\n* This prevents rusting/corrosion and provides an attractive, shiny finish.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q83",
    createdAt: "2026-08-20T16:10:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv1_4-2026",
    question: "What type of electrolyte solution must be used when plating an iron ring with silver?",
    options: [
      { text: "Iron(II) sulfate solution" },
      { text: "Silver nitrate solution", isCorrect: true },
      { text: "Dilute sulfuric acid" },
      { text: "Sodium hydroxide solution" }
    ],
    correctAnswer: 1,
    explanation: "* The electrolyte solution used in electroplating must contain ions of the metal being plated.\n* To plate with silver, the solution must contain silver ions, such as aqueous silver nitrate (AgNO₃).",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q84",
    createdAt: "2026-08-20T16:15:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv1_5-2023",
    question: "A steel cutlery knife is to be electroplated with nickel. What should be used as the cathode and what should be used as the anode?",
    options: [
      { text: "Cathode: steel knife; Anode: pure nickel", isCorrect: true },
      { text: "Cathode: pure nickel; Anode: steel knife" },
      { text: "Cathode: graphite; Anode: steel knife" },
      { text: "Cathode: steel knife; Anode: platinum" }
    ],
    correctAnswer: 0,
    explanation: "* In electroplating, the object to be plated is always connected as the cathode (negative electrode).\n* The anode (positive electrode) is made of the pure plating metal (nickel), which dissolves into the solution to supply metal ions.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q21",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv1_6-2024",
    question: "Which of the following is a primary reason for electroplating metals?",
    options: [
      { text: "To improve corrosion resistance and enhance appearance", isCorrect: true },
      { text: "To make the metal conduct electricity less efficiently" },
      { text: "To increase the density and weight of the metal" },
      { text: "To lower the melting point of the metal" }
    ],
    correctAnswer: 0,
    explanation: "* Electroplating is primarily carried out to protect reactive metals from corrosion (such as rusting) and to improve the aesthetic appearance with a shiny decorative finish.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q21",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv1_7-2025",
    question: "A copper medallion is to be electroplated with silver. Which electrolyte solution should be used?",
    options: [
      { text: "Aqueous silver nitrate", isCorrect: true },
      { text: "Aqueous copper(II) sulfate" },
      { text: "Dilute nitric acid" },
      { text: "Aqueous sodium chloride" }
    ],
    correctAnswer: 0,
    explanation: "* The electrolyte solution must contain the cations of the metal being deposited.\n* For silver plating, aqueous silver nitrate ($AgNO_3$) contains silver ions ($Ag^+$), which are reduced at the cathode to form a coating of silver.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q23",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

