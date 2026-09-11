import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u1_l2_lv1_1-2026",
    question: "Which of the following defines the term 'isotopes'?",
    options: [
      { text: "Atoms of different elements with the same number of neutrons" },
      { text: "Atoms of the same element having the same number of protons but different numbers of neutrons", isCorrect: true },
      { text: "Molecules with the same molecular formula but different structural arrangements" },
      { text: "Atoms that have gained or lost electrons to form charged species" }
    ],
    correctAnswer: 1,
    explanation: "* Isotopes are defined as atoms of the same chemical element (same atomic number $Z$) that have different numbers of neutrons (different mass numbers $A$).",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q14",
    createdAt: "2026-05-20T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv1_2-2026",
    question: "What is the maximum number of electrons that can be accommodated in a single atomic orbital?",
    options: [
      { text: "1" },
      { text: "2", isCorrect: true },
      { text: "6" },
      { text: "8" }
    ],
    correctAnswer: 1,
    explanation: "* According to the Pauli Exclusion Principle, an individual orbital can hold a maximum of 2 electrons with opposite spins.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q15",
    createdAt: "2026-05-20T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv1_3-2026",
    question: "How many orbitals are present in the $3d$ subshell?",
    options: [
      { text: "1" },
      { text: "3" },
      { text: "5", isCorrect: true },
      { text: "7" }
    ],
    correctAnswer: 2,
    explanation: "* An s subshell has 1 orbital, a p subshell has 3 orbitals, and a d subshell contains 5 distinct orbitals (holding up to 10 electrons).",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2025 Paper 1 Q16",
    createdAt: "2026-05-21T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv1_4-2026",
    question: "What is the shape of an atomic $s$ orbital?",
    options: [
      { text: "Dumbbell-shaped" },
      { text: "Spherical", isCorrect: true },
      { text: "Double dumbbell" },
      { text: "Planar ring" }
    ],
    correctAnswer: 1,
    explanation: "* All $s$ orbitals are spherically symmetrical around the nucleus, whereas $p$ orbitals have a dumbbell shape.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q15",
    createdAt: "2026-05-21T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv1_5-2026",
    question: "Which of the following represents the correct full electronic configuration of a neutral silicon atom ($Z = 14$)?",
    options: [
      { text: "1s² 2s² 2p⁶ 3s² 3p²", isCorrect: true },
      { text: "1s² 2s² 2p⁶ 3s⁴" },
      { text: "1s² 2s² 2p⁶ 3p⁴" },
      { text: "1s² 2s² 2p⁴ 3s² 3p⁴" }
    ],
    correctAnswer: 0,
    explanation: "* Silicon has 14 electrons.\n* Following the Aufbau principle: $1s^2 2s^2 2p^6 3s^2 3p^2$.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q16",
    createdAt: "2026-05-22T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv1_6-2026",
    question: "Which equation represents the definition of the first ionization energy of sodium?",
    options: [
      { text: "Na(s) → Na⁺(g) + e⁻" },
      { text: "Na(g) → Na⁺(g) + e⁻", isCorrect: true },
      { text: "Na(g) + e⁻ → Na⁻(g)" },
      { text: "Na(s) → Na⁺(s) + e⁻" }
    ],
    correctAnswer: 1,
    explanation: "* First ionization energy is the energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous $1+$ ions: $\\text{Na(g)} \\rightarrow \\text{Na}^+\\text{(g)} + \\text{e}^-$.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q17",
    createdAt: "2026-05-22T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv1_7-2026",
    question: "In a time-of-flight (TOF) mass spectrometer, which stage ensures that all ions have the identical kinetic energy?",
    options: [
      { text: "Ionisation stage" },
      { text: "Acceleration stage", isCorrect: true },
      { text: "Ion drift flight tube" },
      { text: "Detection plate" }
    ],
    correctAnswer: 1,
    explanation: "* In the acceleration region, positive ions are accelerated by an electric field through a constant potential difference so that all ions acquire the same kinetic energy ($\\text{KE} = \\frac{1}{2}mv^2$).",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q16",
    createdAt: "2026-05-23T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv1_8-2026",
    question: "Which block of the Periodic Table does calcium ($Z = 20$, $[\\text{Ar}]4s^2$) belong to?",
    options: [
      { text: "s-block", isCorrect: true },
      { text: "p-block" },
      { text: "d-block" },
      { text: "f-block" }
    ],
    correctAnswer: 0,
    explanation: "* Elements are categorized into blocks according to their highest-energy subshell being filled.\n* For calcium, the outermost electrons occupy the $4s$ subshell, placing it in the s-block.",
    level: 1,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q17",
    createdAt: "2026-05-23T10:00:00Z"
  }
];

