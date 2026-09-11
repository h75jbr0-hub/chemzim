import { Question } from '../../../types';

// Energy Diagrams - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u5_l2_lv1_1-2026",
    question: "In an energy level diagram for an exothermic reaction, how do the energy levels of the reactants and products compare?",
    options: [
      { text: "Products have higher energy than reactants" },
      { text: "Products have lower energy than reactants", isCorrect: true },
      { text: "Products and reactants have equal energy" },
      { text: "The energy levels cannot be determined without a catalyst" }
    ],
    correctAnswer: 1,
    explanation: "* In an exothermic reaction, energy is released to the surroundings.\n* Therefore, the products have less chemical energy than the starting reactants, placing the product level below the reactant level.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q117",
    createdAt: "2026-08-20T19:00:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv1_2-2026",
    question: "What does the term 'activation energy' ($E_a$) represent in a chemical reaction?",
    options: [
      { text: "The total energy released when products form" },
      { text: "The minimum amount of energy required by colliding particles to react", isCorrect: true },
      { text: "The energy difference between reactants and products" },
      { text: "The thermal energy absorbed by a catalyst" }
    ],
    correctAnswer: 1,
    explanation: "* Activation energy ($E_a$) is defined as the minimum kinetic energy that colliding particles must possess in order to react successfully.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q118",
    createdAt: "2026-08-20T19:05:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv1_3-2026",
    question: "On a reaction pathway diagram, how is the activation energy ($E_a$) measured?",
    options: [
      { text: "From the reactant level to the peak of the energy curve", isCorrect: true },
      { text: "From the product level to the peak of the energy curve" },
      { text: "From the reactant level to the product level" },
      { text: "From zero energy to the product level" }
    ],
    correctAnswer: 0,
    explanation: "* Activation energy is always measured vertically upwards from the reactant energy level to the highest point (peak) of the curve.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q119",
    createdAt: "2026-08-20T19:10:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv1_4-2026",
    question: "Which feature of a reaction pathway diagram represents the overall enthalpy change (ΔH) of the reaction?",
    options: [
      { text: "The height of the peak above the reactants" },
      { text: "The vertical difference in energy between reactants and products", isCorrect: true },
      { text: "The horizontal length of the reaction pathway" },
      { text: "The height of the peak above zero energy" }
    ],
    correctAnswer: 1,
    explanation: "* The overall enthalpy change ($\\Delta H$) is the difference between the energy level of the products and the energy level of the reactants ($H_\\text{products} - H_\\text{reactants}$).",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q120",
    createdAt: "2026-08-20T19:15:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv1_5-2023",
    question: "On a reaction pathway diagram for an exothermic reaction, where are the products positioned relative to the reactants?",
    options: [
      { text: "At a lower energy level than the reactants", isCorrect: true },
      { text: "At a higher energy level than the reactants" },
      { text: "At the exact same energy level as the reactants" },
      { text: "At the highest peak of the energy profile" }
    ],
    correctAnswer: 0,
    explanation: "* In an exothermic reaction, chemical energy is released to the surroundings as heat.\n* As a result, the products have lower chemical energy than the initial reactants, placing them lower on the diagram.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q25",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv1_6-2024",
    question: "What does the activation energy (Ea) of a reaction represent on a reaction pathway diagram?",
    options: [
      { text: "The minimum amount of energy colliding particles must possess to react", isCorrect: true },
      { text: "The total energy released when products are formed" },
      { text: "The energy difference between reactants and products" },
      { text: "The energy absorbed when product bonds are formed" }
    ],
    correctAnswer: 0,
    explanation: "* Activation energy ($E_a$) is defined as the minimum energy that colliding particles must possess in order to react successfully.\n* On a reaction pathway diagram, it is represented by the energy difference from the reactants to the top of the curve.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q24",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv1_7-2025",
    question: "In an endothermic reaction pathway diagram, how is the overall enthalpy change (ΔH) represented?",
    options: [
      { text: "An upward vertical arrow from the reactants to the products", isCorrect: true },
      { text: "A downward vertical arrow from the reactants to the products" },
      { text: "An upward arrow from the products to the peak" },
      { text: "A downward arrow from the peak to the products" }
    ],
    correctAnswer: 0,
    explanation: "* In an endothermic reaction, products have higher energy than reactants ($\\Delta H$ is positive).\n* The overall enthalpy change arrow starts at the energy level of the reactants and points upwards towards the energy level of the products.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q26",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

