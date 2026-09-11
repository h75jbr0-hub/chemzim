import { Question } from '../../../types';

// Exothermic and Endothermic Reactions - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u5_l1_lv3_1-2026",
    question: "When 0.050 moles of ethanol is burned in a spirit burner, it heats 100 g of water, causing its temperature to rise by 32.0°C.\nWhat is the molar enthalpy of combustion of ethanol?\n(Given: Specific heat capacity of water, $c = 4.2\\text{ J/(g}\\cdot^\\circ\\text{C)}$)",
    options: [
      { text: "-13.44 kJ/mol" },
      { text: "-268.8 kJ/mol", isCorrect: true },
      { text: "-537.6 kJ/mol" },
      { text: "+268.8 kJ/mol" }
    ],
    correctAnswer: 1,
    explanation: "* Calculate heat energy released: $q = m \\times c \\times \\Delta T = 100 \\times 4.2 \\times 32.0 = 13,440\\text{ J} = 13.44\\text{ kJ}$.\n* Calculate molar enthalpy of combustion: $\\Delta H = -q / n = -13.44 / 0.050 = -268.8\\text{ kJ/mol}$.\n* The negative sign indicates an exothermic combustion reaction.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q113",
    createdAt: "2026-08-20T18:40:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv3_2-2026",
    question: "A student dissolves 4.0 g of sodium hydroxide pellets (NaOH) in 100 cm³ of water. The temperature rises by 10.0°C.\nAssuming the density of the solution is 1.0 g/cm³ and $c = 4.2\\text{ J/(g}\\cdot^\\circ\\text{C)}$, what is the molar enthalpy of solution of NaOH?\n(Given: $M_r$ of NaOH = 40)",
    options: [
      { text: "-42.0 kJ/mol", isCorrect: true },
      { text: "-4.20 kJ/mol" },
      { text: "+42.0 kJ/mol" },
      { text: "-84.0 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Mass of solution $\\approx 100\\text{ g}$.\n* Heat released: $q = m \\times c \\times \\Delta T = 100 \\times 4.2 \\times 10.0 = 4200\\text{ J} = 4.20\\text{ kJ}$.\n* Moles of NaOH $= 4.0 / 40 = 0.10\\text{ mol}$.\n* Molar enthalpy of solution: $\\Delta H = -q / n = -4.20 / 0.10 = -42.0\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q114",
    createdAt: "2026-08-20T18:45:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv3_3-2026",
    question: "In a combustion experiment, the experimental value for the molar enthalpy of combustion of methanol is found to be significantly less exothermic than the theoretical value.\nWhich experimental error does NOT account for this discrepancy?",
    options: [
      { text: "Heat loss from the flame to the surrounding air" },
      { text: "Incomplete combustion forming carbon monoxide and soot" },
      { text: "Evaporation of methanol from the wick before the final mass was taken", isCorrect: true },
      { text: "Heat absorbed by the copper calorimeter that was not included in the calculation" }
    ],
    correctAnswer: 2,
    explanation: "* Evaporation of fuel before weighing causes the recorded mass of fuel burned to appear larger than it actually was, which makes the calculated heat per mole appear smaller, but it is an error in fuel measurement rather than missing heat.\n* Heat loss to air, incomplete combustion, and heat absorbed by the metal container directly explain why less heat is transferred to the water than theoretically predicted.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q115",
    createdAt: "2026-08-20T18:50:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv3_4-2026",
    question: "When 50.0 cm³ of 2.0 mol/dm³ sulfuric acid (H₂SO₄) is neutralised completely by 100.0 cm³ of 2.0 mol/dm³ sodium hydroxide (NaOH), 11.4 kJ of thermal energy is released.\nWhat is the molar enthalpy of neutralisation per mole of water formed?",
    options: [
      { text: "-114 kJ/mol" },
      { text: "-57 kJ/mol", isCorrect: true },
      { text: "-28.5 kJ/mol" },
      { text: "+57 kJ/mol" }
    ],
    correctAnswer: 1,
    explanation: "* Equation: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.\n* Moles of H₂SO₄ $= 0.050 \\times 2.0 = 0.10\\text{ mol}$.\n* Moles of NaOH $= 0.100 \\times 2.0 = 0.20\\text{ mol}$.\n* Moles of H₂O formed $= 0.20\\text{ mol}$.\n* Enthalpy of neutralisation per mole of water formed $= -11.4\\text{ kJ} / 0.20\\text{ mol} = -57\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q116",
    createdAt: "2026-08-20T18:55:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv3_5-2023",
    question: "When 25.0 cm³ of 1.0 mol/dm³ HCl is neutralised by 25.0 cm³ of 1.0 mol/dm³ NaOH, the temperature rise is 6.5 °C. What would be the expected temperature rise if 50.0 cm³ of 1.0 mol/dm³ HCl is mixed with 50.0 cm³ of 1.0 mol/dm³ NaOH in the same calorimeter?",
    options: [
      { text: "6.5 °C", isCorrect: true },
      { text: "13.0 °C" },
      { text: "3.25 °C" },
      { text: "26.0 °C" }
    ],
    correctAnswer: 0,
    explanation: "* Doubling the volumes doubles the number of moles reacting, thereby releasing twice as much total thermal energy ($2 \\times Q$).\n* However, the total mass/volume of the solution being heated is also doubled ($50 + 50 = 100\\text{ cm}^3$ instead of $50\\text{ cm}^3$).\n* Since $\\Delta T = \\frac{Q}{m \\times c}$, doubling both $Q$ and $m$ cancels out, resulting in the same temperature rise of 6.5 °C.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q23",
    lessonNum: 1,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv3_6-2024",
    question: "A student dissolves 4.0 g of anhydrous copper(II) sulfate (CuSO₄, Mr = 160) into 50.0 g of water, and the temperature increases by 7.0 °C. Assuming specific heat capacity c = 4.2 J/(g·°C), what is the calculated enthalpy of solution in kJ/mol?",
    options: [
      { text: "-58.8 kJ/mol", isCorrect: true },
      { text: "+58.8 kJ/mol" },
      { text: "-14.7 kJ/mol" },
      { text: "-1.47 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Heat released $Q = m \\times c \\times \\Delta T = 50.0 \\times 4.2 \\times 7.0 = 1470\\text{ J} = 1.47\\text{ kJ}$.\n* Moles of CuSO₄ $= \\frac{4.0}{160} = 0.025\\text{ mol}$.\n* $\\Delta H = -\\frac{Q}{n} = -\\frac{1.47}{0.025} = -58.8\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q23",
    lessonNum: 1,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv3_7-2025",
    question: "In an experiment to determine the enthalpy of combustion of liquid ethanol, which experimental error would cause the experimentally determined value of ΔH to be less negative than the true theoretical value?",
    options: [
      { text: "Thermal energy is lost from the flame and beaker to the surrounding air", isCorrect: true },
      { text: "The water was stirred continuously during heating" },
      { text: "Complete combustion occurred with excess oxygen" },
      { text: "A copper calorimeter was used instead of a glass beaker" }
    ],
    correctAnswer: 0,
    explanation: "* Heat losses to the surrounding air and apparatus cause the measured temperature rise of the water to be lower than expected.\n* This makes the calculated heat output ($Q$) smaller, leading to a calculated enthalpy of combustion ($\\Delta H$) that is less exothermic (less negative) than the accepted book value.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q24",
    lessonNum: 1,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

