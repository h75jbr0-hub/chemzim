import { Question } from '../../../types';

// Energy Diagrams - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u5_l2_lv2_1-2026",
    question: "How does the addition of a catalyst affect the reaction pathway diagram for an exothermic reaction?",
    options: [
      { text: "It lowers the activation energy without changing the overall enthalpy change (ΔH)", isCorrect: true },
      { text: "It increases the activation energy and makes ΔH more negative" },
      { text: "It lowers the energy level of the products" },
      { text: "It increases the energy level of the reactants" }
    ],
    correctAnswer: 0,
    explanation: "* A catalyst provides an alternative reaction pathway with a lower activation energy ($E_a$).\n* It does not change the energy levels of the initial reactants or final products, so the overall enthalpy change ($\\Delta H$) remains unchanged.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q121",
    createdAt: "2026-08-20T19:20:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv2_2-2026",
    question: "In an endothermic reaction pathway diagram, which of the following statements is true?",
    options: [
      { text: "The activation energy is smaller than the overall enthalpy change" },
      { text: "The activation energy is always greater than the overall enthalpy change (ΔH)", isCorrect: true },
      { text: "The products are at a lower energy level than the reactants" },
      { text: "Energy is released when the reaction proceeds from reactants to the transition state" }
    ],
    correctAnswer: 1,
    explanation: "* In an endothermic reaction, the peak of the curve must rise above the product level.\n* Since the activation energy is the full height from the reactant level to the peak, and $\\Delta H$ is the height from reactants to products, $E_a$ is always greater than $\\Delta H$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q122",
    createdAt: "2026-08-20T19:25:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv2_3-2026",
    question: "For a reversible reaction A + B ⇌ C + D, the forward reaction is exothermic with an activation energy of 50 kJ/mol and ΔH = -20 kJ/mol.\nWhat is the activation energy for the reverse reaction (C + D → A + B)?",
    options: [
      { text: "30 kJ/mol" },
      { text: "50 kJ/mol" },
      { text: "70 kJ/mol", isCorrect: true },
      { text: "20 kJ/mol" }
    ],
    correctAnswer: 2,
    explanation: "* In an exothermic forward reaction, the products lie 20 kJ/mol lower than the reactants.\n* The reverse reaction must climb the same energy barrier (peak) starting from the product level.\n* Therefore, $E_{a,\\text{reverse}} = E_{a,\\text{forward}} + |\\Delta H| = 50 + 20 = 70\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q123",
    createdAt: "2026-08-20T19:30:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv2_4-2026",
    question: "Which arrow on a reaction pathway diagram is directed downwards for an exothermic reaction?",
    options: [
      { text: "The arrow for activation energy ($E_a$)" },
      { text: "The arrow for overall enthalpy change ($\\Delta H$)", isCorrect: true },
      { text: "Both the $E_a$ and $\\Delta H$ arrows" },
      { text: "Neither arrow" }
    ],
    correctAnswer: 1,
    explanation: "* Activation energy represents an energy barrier to be overcome, so its arrow points upwards from reactants to the peak.\n* For an exothermic reaction, the overall enthalpy change arrow points downwards from reactants to products, showing that energy is lost to surroundings.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q124",
    createdAt: "2026-08-20T19:35:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv2_5-2023",
    question: "How does the addition of a catalyst affect the reaction pathway diagram for an exothermic reaction?",
    options: [
      { text: "It lowers the activation energy peak, while ΔH remains completely unchanged", isCorrect: true },
      { text: "It lowers the activation energy peak and makes ΔH more negative" },
      { text: "It raises the energy level of the reactants" },
      { text: "It lowers the energy level of the products" }
    ],
    correctAnswer: 0,
    explanation: "* A catalyst provides an alternative reaction pathway with a lower activation energy ($E_a$).\n* It does not alter the energy levels of the initial reactants or the final products, so the overall enthalpy change ($\\Delta H$) remains unchanged.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q24",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv2_6-2024",
    question: "For a reversible reaction, the forward reaction has an activation energy of +80 kJ/mol and an enthalpy change of -30 kJ/mol. What is the activation energy of the reverse reaction?",
    options: [
      { text: "+110 kJ/mol", isCorrect: true },
      { text: "+50 kJ/mol" },
      { text: "-50 kJ/mol" },
      { text: "+80 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* In a reaction pathway diagram, the products are 30 kJ/mol lower than the reactants ($\\Delta H = -30\\text{ kJ/mol}$).\n* The peak of the curve is 80 kJ/mol above the reactants.\n* Therefore, to go from products back to the transition state peak, energy required $= 30 + 80 = 110\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q23",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv2_7-2025",
    question: "Which statement correctly compares an uncatalysed reaction with a catalysed reaction?",
    options: [
      { text: "The catalysed reaction has a lower activation energy and a faster rate of reaction", isCorrect: true },
      { text: "The catalysed reaction has a higher activation energy and a faster rate of reaction" },
      { text: "The catalysed reaction produces more total heat energy (larger ΔH)" },
      { text: "The catalysed reaction increases the yield of products at equilibrium" }
    ],
    correctAnswer: 0,
    explanation: "* By lowering the activation energy barrier, a greater proportion of colliding particles possess energy $E \\ge E_a$, resulting in more frequent effective collisions and a faster rate.\n* The catalyst does not affect $\\Delta H$ or the position of equilibrium.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q26",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

