import { Question } from '../../../types';

// Fuel and Hydrogen - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u5_l4_lv2_1-2026",
    question: "Why is carbon monoxide (CO) produced during the incomplete combustion of hydrocarbon fuels dangerous to human health?",
    options: [
      { text: "It causes acid rain that corrodes lung tissue" },
      { text: "It binds irreversibly to hemoglobin in red blood cells, preventing oxygen transport", isCorrect: true },
      { text: "It is an explosive green gas that destroys respiratory enzymes" },
      { text: "It depletes the stratospheric ozone layer" }
    ],
    correctAnswer: 1,
    explanation: "* Carbon monoxide is a colourless, odourless, toxic gas.\n* It binds strongly with hemoglobin to form carboxyhemoglobin, drastically reducing the blood's capacity to carry oxygen around the body.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q145",
    createdAt: "2026-08-20T21:20:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv2_2-2026",
    question: "Which of the following is a major disadvantage of using hydrogen as a fuel for passenger cars compared to petrol?",
    options: [
      { text: "Hydrogen releases toxic nitrogen dioxide gas when it burns" },
      { text: "Hydrogen requires bulky high-pressure storage tanks or cryogenic cooling", isCorrect: true },
      { text: "Hydrogen produces less energy per gram than petrol" },
      { text: "Hydrogen cannot react with oxygen in an electrochemical cell" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrogen has a very low density as a gas, meaning large volumes must be compressed under high pressure (350–700 bar) or liquefied at cryogenic temperatures (-253°C) for transport and storage.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q146",
    createdAt: "2026-08-20T21:25:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv2_3-2026",
    question: "The energy values released per gram of four fuels are:\n* Fuel P: 30 kJ/g\n* Fuel Q: 48 kJ/g\n* Fuel R: 142 kJ/g\n* Fuel S: 20 kJ/g\nWhich fuel is most likely to be hydrogen gas?",
    options: [
      { text: "Fuel P" },
      { text: "Fuel Q" },
      { text: "Fuel R", isCorrect: true },
      { text: "Fuel S" }
    ],
    correctAnswer: 2,
    explanation: "* Hydrogen has the highest energy content per unit mass of any common chemical fuel (approx. 142 kJ/g), compared to petrol/methane (approx. 45–55 kJ/g) and coal/wood (20–30 kJ/g).",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q147",
    createdAt: "2026-08-20T21:30:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv2_4-2026",
    question: "Most industrial hydrogen is currently produced by steam reforming of natural gas: CH₄ + H₂O → CO + 3H₂.\nWhy does this method mean hydrogen fuel is not yet completely carbon-neutral?",
    options: [
      { text: "Methane is an unreactive noble gas" },
      { text: "The production process uses fossil fuel and produces carbon oxides as byproducts", isCorrect: true },
      { text: "The hydrogen gas produced is radioactive" },
      { text: "Steam reforming is an exothermic process that wastes heat" }
    ],
    correctAnswer: 1,
    explanation: "* Although burning hydrogen produces only water at the point of use, manufacturing it from fossil fuels (methane) releases carbon monoxide and carbon dioxide into the atmosphere.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q148",
    createdAt: "2026-08-20T21:35:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv2_5-2023",
    question: "Which equation represents the complete combustion of ethanol (C₂H₅OH) as a biofuel?",
    options: [
      { text: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O", isCorrect: true },
      { text: "C₂H₅OH + 2O₂ → 2CO + 3H₂O" },
      { text: "2C₂H₅OH + 5O₂ → 4CO₂ + 6H₂O" },
      { text: "C₂H₅OH + O₂ → 2C + 3H₂O" }
    ],
    correctAnswer: 0,
    explanation: "* Complete combustion of ethanol produces only carbon dioxide and water.\n* Balancing: $C_2H_5OH + 3O_2 \\rightarrow 2CO_2 + 3H_2O$ (2 carbons, 6 hydrogens, and 7 oxygens on both sides).",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q27",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv2_6-2024",
    question: "Why is bioethanol sometimes described as being 'carbon neutral'?",
    options: [
      { text: "The CO₂ released during its combustion equals the CO₂ absorbed by the plants during photosynthesis", isCorrect: true },
      { text: "No carbon dioxide is released during the combustion of bioethanol" },
      { text: "It is synthesised without using any energy" },
      { text: "It reacts with carbon dioxide in the air to eliminate greenhouse gases" }
    ],
    correctAnswer: 0,
    explanation: "* Sugar cane or crops absorb atmospheric $CO_2$ via photosynthesis during growth.\n* When the bioethanol produced from them is burned, the same amount of $CO_2$ is returned to the atmosphere, theoretically resulting in no net increase in atmospheric $CO_2$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q27",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv2_7-2025",
    question: "What is a significant disadvantage of converting vast agricultural land from food crops to biofuel crop production?",
    options: [
      { text: "It reduces food supply, leading to higher food prices and potential shortages", isCorrect: true },
      { text: "Biofuels cannot combust in air without pure oxygen" },
      { text: "Biofuel crops deplete all oxygen in the surrounding atmosphere" },
      { text: "Biofuel production increases sulfur dioxide emissions" }
    ],
    correctAnswer: 0,
    explanation: "* Dedicating large tracts of fertile farmland to biofuel production rather than food agriculture leads to the 'food vs. fuel' conflict, driving up food prices and contributing to food insecurity.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q26",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

