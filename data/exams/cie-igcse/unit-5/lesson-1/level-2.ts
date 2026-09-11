import { Question } from '../../../types';

// Exothermic and Endothermic Reactions - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u5_l1_lv2_1-2026",
    question: "In a calorimetry experiment, 50 cm³ of 1.0 mol/dm³ HCl is mixed with 50 cm³ of 1.0 mol/dm³ NaOH. The temperature rises by 6.5°C.\nWhat is the expected temperature rise if 25 cm³ of the same HCl solution is mixed with 25 cm³ of the same NaOH solution in an identical insulated cup?",
    options: [
      { text: "3.25°C" },
      { text: "6.5°C", isCorrect: true },
      { text: "13.0°C" },
      { text: "1.625°C" }
    ],
    correctAnswer: 1,
    explanation: "* Halving the volumes halves the moles of reactants reacting, so half the amount of heat energy ($q$) is released.\n* However, the total volume (and mass) of water being heated is also halved.\n* Since $\\Delta T = q / (m \\times c)$, halving both $q$ and $m$ keeps the temperature rise $\\Delta T$ unchanged at 6.5°C.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q109",
    createdAt: "2026-08-20T18:20:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv2_2-2026",
    question: "Which of the following describes the energy changes that occur during an exothermic reaction?",
    options: [
      { text: "Energy absorbed to break bonds is greater than energy released when new bonds form" },
      { text: "Energy released when new bonds form is greater than energy absorbed to break bonds", isCorrect: true },
      { text: "Bonds are broken in the products and formed in the reactants" },
      { text: "No bonds are broken, only new bonds are formed" }
    ],
    correctAnswer: 1,
    explanation: "* Bond breaking is an endothermic process (requires energy input).\n* Bond making is an exothermic process (releases energy).\n* In an exothermic reaction, the energy released when making new bonds in products exceeds the energy absorbed to break bonds in reactants.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q110",
    createdAt: "2026-08-20T18:25:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv2_3-2026",
    question: "A student investigated the temperature change for four reactions by mixing equal volumes of solutions in a polystyrene cup:\n* Reaction 1: Initial temp = 20°C, Final temp = 34°C\n* Reaction 2: Initial temp = 21°C, Final temp = 16°C\n* Reaction 3: Initial temp = 19°C, Final temp = 28°C\n* Reaction 4: Initial temp = 22°C, Final temp = 14°C\nWhich reaction absorbed the greatest amount of thermal energy per unit volume?",
    options: [
      { text: "Reaction 1" },
      { text: "Reaction 2" },
      { text: "Reaction 3" },
      { text: "Reaction 4", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Endothermic reactions absorb thermal energy and show a decrease in temperature ($\Delta T$ is negative).\n* For Reaction 2: Temperature drop $= 21 - 16 = 5^\\circ\\text{C}$.\n* For Reaction 4: Temperature drop $= 22 - 14 = 8^\\circ\\text{C}$.\n* Reaction 4 produced the largest temperature drop, meaning it absorbed the most thermal energy.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q111",
    createdAt: "2026-08-20T18:30:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv2_4-2026",
    question: "Why are polystyrene cups used instead of glass beakers in school calorimetry experiments?",
    options: [
      { text: "Polystyrene is a better thermal insulator and reduces heat loss to the surroundings", isCorrect: true },
      { text: "Polystyrene reacts with the acid to release extra heat" },
      { text: "Polystyrene has a higher density than glass" },
      { text: "Polystyrene speeds up the rate of reaction" }
    ],
    correctAnswer: 0,
    explanation: "* Polystyrene contains trapped air pockets, making it an excellent thermal insulator.\n* It minimises heat exchange with the surroundings, providing more accurate temperature readings.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q112",
    createdAt: "2026-08-20T18:35:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv2_5-2023",
    question: "When solid sodium hydroxide dissolves in water, the temperature rises from 20 °C to 28 °C. Which statement about this process is correct?",
    options: [
      { text: "It is an exothermic process because thermal energy is transferred to the water", isCorrect: true },
      { text: "It is an endothermic process because thermal energy is absorbed by the solution" },
      { text: "The chemical energy of the system increases" },
      { text: "The enthalpy change of solution is positive (+ΔH)" }
    ],
    correctAnswer: 0,
    explanation: "* The rise in temperature indicates that thermal energy is released to the water (surroundings).\n* A process that transfers heat to the surroundings is exothermic, and its enthalpy change ($\\Delta H$) is negative.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q23",
    lessonNum: 1,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv2_6-2024",
    question: "Which of the following equations represents an endothermic process?",
    options: [
      { text: "CaCO₃(s) → CaO(s) + CO₂(g)    ΔH = +178 kJ/mol", isCorrect: true },
      { text: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)    ΔH = -890 kJ/mol" },
      { text: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)    ΔH = -57 kJ/mol" },
      { text: "C(s) + O₂(g) → CO₂(g)    ΔH = -394 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* An endothermic reaction has a positive enthalpy change ($+\\Delta H$).\n* The thermal decomposition of calcium carbonate requires heating and has $\\Delta H = +178\\text{ kJ/mol}$, making it endothermic.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q22",
    lessonNum: 1,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv2_7-2025",
    question: "A student measured the temperature change when excess zinc powder was added to aqueous copper(II) sulfate in an insulated cup. The temperature increased by 15 °C. Which statement is correct?",
    options: [
      { text: "The reaction is exothermic and the products have less energy than the reactants", isCorrect: true },
      { text: "The reaction is endothermic and the products have more energy than the reactants" },
      { text: "The reaction is exothermic and the products have more energy than the reactants" },
      { text: "The reaction is endothermic and the products have less energy than the reactants" }
    ],
    correctAnswer: 0,
    explanation: "* The temperature increase indicates an exothermic displacement reaction.\n* In any exothermic reaction, energy is released to the surroundings, meaning the products have less chemical potential energy than the reactants (negative $\\Delta H$).",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q25",
    lessonNum: 1,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

