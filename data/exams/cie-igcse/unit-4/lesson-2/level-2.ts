import { Question } from '../../../types';

// Electrolytic Cells - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u4_l2_lv2_1-2026",
    question: "What is the ionic half-equation for the reaction occurring at the cathode during the electrolysis of dilute aqueous copper(II) sulfate using inert electrodes?",
    options: [
      { text: "Cu²⁺ + 2e⁻ → Cu", isCorrect: true },
      { text: "2H⁺ + 2e⁻ → H₂" },
      { text: "Cu → Cu²⁺ + 2e⁻" },
      { text: "4OH⁻ → O₂ + 2H₂O + 4e⁻" }
    ],
    correctAnswer: 0,
    explanation: "* Aqueous copper(II) sulfate contains Cu²⁺ and H⁺ ions attracted to the cathode.\n* Copper is lower than hydrogen in the reactivity series, meaning Cu²⁺ ions are discharged preferentially.\n* Reduction occurs as Cu²⁺ gains two electrons to deposit copper metal: Cu²⁺ + 2e⁻ → Cu.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q73",
    createdAt: "2026-08-20T15:20:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv2_2-2026",
    question: "Which of the following represents the correct anode half-equation for the electrolysis of dilute sodium chloride solution?",
    options: [
      { text: "2Cl⁻ → Cl₂ + 2e⁻" },
      { text: "4OH⁻ → O₂ + 2H₂O + 4e⁻", isCorrect: true },
      { text: "Na⁺ + e⁻ → Na" },
      { text: "2H⁺ + 2e⁻ → H₂" }
    ],
    correctAnswer: 1,
    explanation: "* In a dilute solution of sodium chloride, the concentration of chloride ions (Cl⁻) is very low.\n* Therefore, hydroxide ions (OH⁻) from water dissociation are discharged preferentially at the anode.\n* The oxidation half-equation is: 4OH⁻ → O₂ + 2H₂O + 4e⁻.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q74",
    createdAt: "2026-08-20T15:25:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv2_3-2026",
    question: "During the electrolysis of concentrated aqueous sodium chloride (the chlor-alkali process), what are the three useful products formed?",
    options: [
      { text: "Sodium, chlorine, and oxygen" },
      { text: "Hydrogen, chlorine, and sodium hydroxide", isCorrect: true },
      { text: "Sodium, chlorine, and hydrogen" },
      { text: "Hydrogen, oxygen, and sodium hydroxide" }
    ],
    correctAnswer: 1,
    explanation: "* Chlorine gas (Cl₂) is produced at the anode.\n* Hydrogen gas (H₂) is produced at the cathode.\n* Sodium ions (Na⁺) and hydroxide ions (OH⁻) remain behind in the solution, forming sodium hydroxide (NaOH).",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q75",
    createdAt: "2026-08-20T15:30:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv2_4-2026",
    question: "Which of the following describes the change in pH of the electrolyte during the electrolysis of concentrated aqueous sodium chloride?",
    options: [
      { text: "The pH remains neutral at 7" },
      { text: "The pH decreases and the solution becomes acidic" },
      { text: "The pH increases and the solution becomes alkaline", isCorrect: true },
      { text: "The pH decreases to 0" }
    ],
    correctAnswer: 2,
    explanation: "* As H⁺ ions are discharged at the cathode to form H₂ gas and Cl⁻ ions are discharged at the anode to form Cl₂ gas, Na⁺ and OH⁻ ions remain in the solution.\n* The accumulation of hydroxide ions (OH⁻) makes the solution alkaline, raising the pH.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q76",
    createdAt: "2026-08-20T15:35:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv2_5-2023",
    question: "During the electrolysis of concentrated aqueous sodium chloride, the solution around the cathode turns universal indicator blue/purple. Which ion causes this colour change?",
    options: [
      { text: "Chloride ion, Cl⁻" },
      { text: "Hydroxide ion, OH⁻", isCorrect: true },
      { text: "Sodium ion, Na⁺" },
      { text: "Hydrogen ion, H⁺" }
    ],
    correctAnswer: 1,
    explanation: "* As hydrogen ions ($H^+$) are discharged at the cathode to form hydrogen gas, hydroxide ions ($OH^-$) from water remain in solution.\n* The accumulation of $OH^-$ ions along with $Na^+$ ions creates an alkaline solution of sodium hydroxide ($NaOH$), turning universal indicator purple/blue.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q20",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv2_6-2024",
    question: "Which half-equation correctly represents the reaction taking place at the anode during the electrolysis of concentrated hydrochloric acid?",
    options: [
      { text: "2Cl⁻ → Cl₂ + 2e⁻", isCorrect: true },
      { text: "2Cl⁻ + 2e⁻ → Cl₂" },
      { text: "4OH⁻ → O₂ + 2H₂O + 4e⁻" },
      { text: "2H⁺ + 2e⁻ → H₂" }
    ],
    correctAnswer: 0,
    explanation: "* Concentrated hydrochloric acid has a high concentration of chloride ions ($Cl^-$).\n* At the positive anode, chloride ions lose electrons (oxidation) to form chlorine molecules: $2Cl^- \\rightarrow Cl_2 + 2e^-$.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q19",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv2_7-2025",
    question: "A student electrolysed aqueous copper(II) sulfate using copper electrodes instead of carbon electrodes. What change is observed at the anode?",
    options: [
      { text: "Oxygen gas bubbles are evolved" },
      { text: "The copper anode loses mass and dissolves", isCorrect: true },
      { text: "The anode is coated with a pink copper layer" },
      { text: "Chlorine gas is evolved" }
    ],
    correctAnswer: 1,
    explanation: "* When non-inert copper electrodes are used, the copper anode itself is oxidised because it is easier to oxidise copper than hydroxide ions.\n* Half-equation at anode: $Cu(s) \\rightarrow Cu^{2+}(aq) + 2e^-$.\n* Hence, the copper anode dissolves and loses mass.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q22",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

