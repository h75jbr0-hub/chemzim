import { Question } from '../../../types';

// Energy Diagrams - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u5_l2_lv3_1-2026",
    question: "The energy level of reactants for a reaction is +80 kJ/mol. The highest point on the energy curve is +210 kJ/mol, and the energy level of the products is +130 kJ/mol.\nWhat are the activation energy ($E_a$) and enthalpy change ($\\Delta H$) for this reaction?",
    options: [
      { text: "E_a = +130 kJ/mol, ΔH = +50 kJ/mol", isCorrect: true },
      { text: "E_a = +210 kJ/mol, ΔH = +50 kJ/mol" },
      { text: "E_a = +130 kJ/mol, ΔH = -50 kJ/mol" },
      { text: "E_a = +80 kJ/mol, ΔH = +130 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Activation energy: $E_a = \\text{Peak} - \\text{Reactants} = 210 - 80 = +130\\text{ kJ/mol}$.\n* Enthalpy change: $\\Delta H = \\text{Products} - \\text{Reactants} = 130 - 80 = +50\\text{ kJ/mol}$ (endothermic).",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q125",
    createdAt: "2026-08-20T19:40:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv3_2-2026",
    question: "A two-step catalyzed reaction has the following energy values:\n* Reactants = 0 kJ/mol\n* First transition state (Peak 1) = +45 kJ/mol\n* Intermediate = +15 kJ/mol\n* Second transition state (Peak 2) = +35 kJ/mol\n* Products = -60 kJ/mol\nWhich step is the rate-determining (slowest) step and what is the overall $\\Delta H$?",
    options: [
      { text: "Step 1 (activation energy = 45 kJ/mol); overall ΔH = -60 kJ/mol", isCorrect: true },
      { text: "Step 2 (activation energy = 35 kJ/mol); overall ΔH = -60 kJ/mol" },
      { text: "Step 1 (activation energy = 45 kJ/mol); overall ΔH = +60 kJ/mol" },
      { text: "Step 2 (activation energy = 20 kJ/mol); overall ΔH = -45 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* $E_a$ for Step 1 $= 45 - 0 = 45\\text{ kJ/mol}$.\n* $E_a$ for Step 2 $= 35 - 15 = 20\\text{ kJ/mol}$.\n* Step 1 has the higher activation energy barrier, making it the rate-determining (slowest) step.\n* The overall enthalpy change is $\\Delta H = \\text{Products} - \\text{Reactants} = -60 - 0 = -60\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q126",
    createdAt: "2026-08-20T19:45:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv3_3-2026",
    question: "In the presence of a catalyst, the activation energy of a reaction decreases by 25 kJ/mol.\nIf the uncatalyzed activation energy was 90 kJ/mol and the uncatalyzed ΔH was -40 kJ/mol, what are the catalyzed activation energy and catalyzed ΔH?",
    options: [
      { text: "Catalyzed E_a = 65 kJ/mol, Catalyzed ΔH = -40 kJ/mol", isCorrect: true },
      { text: "Catalyzed E_a = 65 kJ/mol, Catalyzed ΔH = -65 kJ/mol" },
      { text: "Catalyzed E_a = 115 kJ/mol, Catalyzed ΔH = -40 kJ/mol" },
      { text: "Catalyzed E_a = 65 kJ/mol, Catalyzed ΔH = -15 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Catalyzed $E_a = 90 - 25 = 65\\text{ kJ/mol}$.\n* A catalyst lowers the activation energy but has NO effect on the overall enthalpy change ($\\Delta H$).\n* Therefore, $\\Delta H$ remains $-40\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q127",
    createdAt: "2026-08-20T19:50:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv3_4-2026",
    question: "Which statement correctly describes the transition state (activated complex) at the peak of a reaction pathway diagram?",
    options: [
      { text: "It is a stable compound that can be isolated and stored" },
      { text: "It is an unstable, high-energy arrangement of atoms where old bonds are breaking and new bonds are forming", isCorrect: true },
      { text: "It has less potential energy than both reactants and products" },
      { text: "It is only formed when an enzyme or catalyst is present" }
    ],
    correctAnswer: 1,
    explanation: "* The species at the maximum of the energy profile is the transition state / activated complex.\n* It is highly unstable, has maximum potential energy, and corresponds to the simultaneous breaking and making of chemical bonds.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q128",
    createdAt: "2026-08-20T19:55:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv3_5-2023",
    question: "The reaction profile for the reaction W + X → Y + Z shows: reactants at 100 kJ, peak of curve at 260 kJ, and products at 40 kJ. What are the activation energy (Ea) and enthalpy change (ΔH) for this reaction?",
    options: [
      { text: "Ea = +160 kJ, ΔH = -60 kJ", isCorrect: true },
      { text: "Ea = +260 kJ, ΔH = -60 kJ" },
      { text: "Ea = +160 kJ, ΔH = +60 kJ" },
      { text: "Ea = +220 kJ, ΔH = -60 kJ" }
    ],
    correctAnswer: 0,
    explanation: "* $E_a = \\text{peak energy} - \\text{reactant energy} = 260 - 100 = +160\\text{ kJ}$.\n* $\\Delta H = \\text{product energy} - \\text{reactant energy} = 40 - 100 = -60\\text{ kJ}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q24",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv3_6-2024",
    question: "In a multistep biological or chemical reaction pathway, the reaction mechanism has two peaks with activation energies Ea1 = 45 kJ/mol and Ea2 = 90 kJ/mol. Which step is the rate-determining step, and how does a catalyst affect it?",
    options: [
      { text: "The second step is rate-determining, and a catalyst lowers its activation energy barrier", isCorrect: true },
      { text: "The first step is rate-determining, and a catalyst lowers its activation energy barrier" },
      { text: "Both steps occur at equal rates regardless of Ea" },
      { text: "The second step is rate-determining, but catalysts only affect the first step" }
    ],
    correctAnswer: 0,
    explanation: "* The rate-determining step is the slowest step in a reaction mechanism, which corresponds to the step with the highest activation energy ($E_{a2} = 90\\text{ kJ/mol}$).\n* A catalyst lowers the activation energy of the rate-determining step, dramatically accelerating the overall reaction rate.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q24",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv3_7-2025",
    question: "A reaction has an activation energy of +50 kJ/mol and ΔH = +20 kJ/mol. What is the activation energy for the reverse reaction?",
    options: [
      { text: "+30 kJ/mol", isCorrect: true },
      { text: "+70 kJ/mol" },
      { text: "-30 kJ/mol" },
      { text: "+50 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* For an endothermic reaction, products are higher in energy than reactants by 20 kJ/mol ($\\Delta H = +20\\text{ kJ/mol}$).\n* The peak is 50 kJ/mol above the reactants.\n* Therefore, the energy difference between the products and the peak is $50 - 20 = 30\\text{ kJ/mol}$, which is the activation energy of the reverse reaction.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q25",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

