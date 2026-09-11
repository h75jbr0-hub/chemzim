import { Question } from '../../../types';

// Water Treatment & Testing - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u10_l1_lv1_1-2026",
    question: "What colour change is observed when liquid water is added to anhydrous copper(II) sulfate?",
    options: [
      { text: "White to blue", isCorrect: true },
      { text: "Blue to pink" },
      { text: "Pink to blue" },
      { text: "Blue to white" }
    ],
    correctAnswer: 0,
    explanation: "* Anhydrous copper(II) sulfate is a white solid that reacts with water to form blue hydrated copper(II) sulfate: CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s).",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q345",
    createdAt: "2026-08-21T18:00:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv1_2-2026",
    question: "Which chemical reagent turns from blue to pink in the presence of water?",
    options: [
      { text: "Anhydrous cobalt(II) chloride paper", isCorrect: true },
      { text: "Anhydrous copper(II) sulfate" },
      { text: "Universal indicator paper" },
      { text: "Damp red litmus paper" }
    ],
    correctAnswer: 0,
    explanation: "* Anhydrous cobalt(II) chloride (CoCl₂) is blue and turns pink when hydrated (CoCl₂·6H₂O) by water.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q346",
    createdAt: "2026-08-21T18:05:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv1_3-2026",
    question: "How can a student prove experimentally that a colourless liquid is chemically PURE water rather than just containing water?",
    options: [
      { text: "Measure its boiling point; pure water boils sharply at exactly 100°C at 1 atm pressure", isCorrect: true },
      { text: "Add anhydrous copper(II) sulfate and observe a blue colour" },
      { text: "Dip blue cobalt(II) chloride paper and observe a pink colour" },
      { text: "Test with universal indicator to check if pH is exactly 7" }
    ],
    correctAnswer: 0,
    explanation: "* Chemical tests (CuSO₄ or CoCl₂) only confirm the PRESENCE of water (even in impure mixtures).\n* To confirm PURITY, physical constants must be tested: pure water melts at exactly 0°C and boils at exactly 100°C at 1 atm.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q347",
    createdAt: "2026-08-21T18:10:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv1_4-2026",
    question: "Why is chlorine gas added to water during the final stage of domestic water treatment?",
    options: [
      { text: "To kill harmful bacteria, pathogens, and microbes (sterilisation)", isCorrect: true },
      { text: "To filter out insoluble sand and gravel particles" },
      { text: "To remove dissolved odours and unpleasant tastes" },
      { text: "To adjust the pH of the water to neutral 7" }
    ],
    correctAnswer: 0,
    explanation: "* Chlorination sterilises water by killing disease-causing microorganisms and bacteria before the water is piped to homes.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q348",
    createdAt: "2026-08-21T18:15:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv1_5-2023",
    question: "What colour change is observed when water is added to anhydrous cobalt(II) chloride paper?",
    options: [
      { text: "Blue to pink", isCorrect: true },
      { text: "Pink to blue" },
      { text: "White to blue" },
      { text: "Blue to white" }
    ],
    correctAnswer: 0,
    explanation: "* Anhydrous cobalt(II) chloride paper is blue.\n* In the presence of water, it becomes hydrated and turns pink: CoCl₂ + 6H₂O → CoCl₂·6H₂O.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q113",
    lessonNum: 1,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv1_6-2024",
    question: "Which test confirms that a liquid is PURE water rather than just containing water?",
    options: [
      { text: "It boils at exactly 100 °C at standard atmospheric pressure", isCorrect: true },
      { text: "It turns anhydrous copper(II) sulfate from white to blue" },
      { text: "It turns blue cobalt(II) chloride paper pink" },
      { text: "It has a neutral pH of 7" }
    ],
    correctAnswer: 0,
    explanation: "* Chemical tests (like turning anhydrous CuSO₄ blue or CoCl₂ pink) only prove the presence of water.\n* A sharp boiling point at exactly 100 °C (or melting point at 0 °C) confirms that the water is pure.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q114",
    lessonNum: 1,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv1_7-2025",
    question: "Why is chlorine added to water during domestic water treatment?",
    options: [
      { text: "To kill bacteria and microbes", isCorrect: true },
      { text: "To remove insoluble solid particles" },
      { text: "To improve the taste and odour of water" },
      { text: "To neutralise acidic dissolved gases" }
    ],
    correctAnswer: 0,
    explanation: "* Chlorine is a disinfectant that kills pathogenic bacteria and microorganisms, ensuring the water is microbiologically safe for drinking.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q115",
    lessonNum: 1,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
