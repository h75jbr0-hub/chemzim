import { Question } from '../../../types';

// Hydrogen-Oxygen Fuel Cells - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u4_l4_lv3_1-2026",
    question: "In an alkaline hydrogen-oxygen fuel cell, potassium hydroxide (KOH) solution is used as the electrolyte. Which ionic equation represents the reaction taking place at the positive electrode (cathode)?",
    options: [
      { text: "O₂ + 2H₂O + 4e⁻ → 4OH⁻", isCorrect: true },
      { text: "O₂ + 4H⁺ + 4e⁻ → 2H₂O" },
      { text: "2H₂O + 2e⁻ → H₂ + 2OH⁻" },
      { text: "4OH⁻ → O₂ + 2H₂O + 4e⁻" }
    ],
    correctAnswer: 0,
    explanation: "* In alkaline conditions, oxygen gas is reduced at the positive cathode by reacting with water and gaining electrons to form hydroxide ions:\n  O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq).",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q101",
    createdAt: "2026-08-20T17:40:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv3_2-2026",
    question: "A simple cell is made by connecting a magnesium electrode and a copper electrode in dilute sulfuric acid.\nWhich of the following changes would result in a DECREASE in the cell voltage?",
    options: [
      { text: "Replacing the copper electrode with zinc", isCorrect: true },
      { text: "Replacing the magnesium electrode with calcium" },
      { text: "Replacing the copper electrode with silver" },
      { text: "Increasing the concentration of the sulfuric acid electrolyte" }
    ],
    correctAnswer: 0,
    explanation: "* The voltage of a simple cell depends on the gap in reactivity between the two metals.\n* Magnesium is highly reactive, and copper is unreactive. The gap is large.\n* Zinc is more reactive than copper (closer to magnesium), so replacing copper with zinc reduces the gap in reactivity between the two electrodes, thus decreasing the voltage.\n* Replacing magnesium with calcium (more reactive) or copper with silver (less reactive) increases the reactivity gap, which would increase the voltage.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q102",
    createdAt: "2026-08-20T17:45:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv3_3-2026",
    question: "In an acidic hydrogen-oxygen fuel cell (using phosphoric acid electrolyte), which half-equation represents the reduction reaction occurring at the positive electrode (cathode)?",
    options: [
      { text: "O₂ + 4H⁺ + 4e⁻ → 2H₂O", isCorrect: true },
      { text: "2H₂O → O₂ + 4H⁺ + 4e⁻" },
      { text: "O₂ + 2H₂O + 4e⁻ → 4OH⁻" },
      { text: "2H⁺ + 2e⁻ → H₂" }
    ],
    correctAnswer: 0,
    explanation: "* In acidic conditions, hydrogen ions (H⁺) are present in high concentration in the electrolyte.\n* Oxygen gas reacts with H⁺ ions and gains electrons (reduction) at the cathode to form water:\n  O₂ + 4H⁺ + 4e⁻ → 2H₂O.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q103",
    createdAt: "2026-08-20T17:50:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv3_4-2026",
    question: "Which statement about hydrogen-oxygen fuel cells is NOT correct?",
    options: [
      { text: "They run continuously as long as fuel and oxygen are supplied" },
      { text: "They release energy directly as electrical energy" },
      { text: "They are electrochemical cells that convert chemical energy to electrical energy" },
      { text: "They store a large amount of chemical energy within the cell like a primary battery", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Unlike primary or secondary batteries, fuel cells do not store chemical reactants within the cell.\n* Reactants (hydrogen and oxygen/air) are fed into the cell continuously from an external source, allowing them to run indefinitely without recharging as long as the fuel is supplied.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q104",
    createdAt: "2026-08-20T17:55:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv3_5-2023",
    question: "In an alkaline hydrogen-oxygen fuel cell, hydroxide ions (OH⁻) are present in the electrolyte. What is the reaction occurring at the negative electrode (anode)?",
    options: [
      { text: "2H₂ + 4OH⁻ → 4H₂O + 4e⁻", isCorrect: true },
      { text: "O₂ + 2H₂O + 4e⁻ → 4OH⁻" },
      { text: "2H⁺ + 2e⁻ → H₂" },
      { text: "4OH⁻ → O₂ + 2H₂O + 4e⁻" }
    ],
    correctAnswer: 0,
    explanation: "* In an alkaline fuel cell, $H_2$ fuel reacts with $OH^-$ ions from the electrolyte at the anode (negative electrode).\n* Hydrogen is oxidised, transferring electrons: $2H_2 + 4OH^- \\rightarrow 4H_2O + 4e^-$.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q23",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv3_6-2024",
    question: "Three electrochemical cells are set up with copper as one electrode and metals P, Q, and R as the other electrode. The voltages and polarities are:\nCell 1: Metal P is negative, Voltage = +1.10 V\nCell 2: Metal Q is negative, Voltage = +0.78 V\nCell 3: Metal R is positive, Voltage = +0.46 V\nWhat is the order of reactivity of the metals, from most reactive to least reactive?",
    options: [
      { text: "P > Q > Cu > R", isCorrect: true },
      { text: "R > Cu > Q > P" },
      { text: "P > Q > R > Cu" },
      { text: "Q > P > Cu > R" }
    ],
    correctAnswer: 0,
    explanation: "* When another metal is negative relative to copper, it is more reactive than copper. The larger the positive cell voltage, the greater the reactivity difference.\n* P gives +1.10 V and Q gives +0.78 V, so P is more reactive than Q, and both are more reactive than copper ($P > Q > Cu$).\n* Metal R is positive relative to copper, meaning R is less reactive than copper ($Cu > R$).\n* Combining these gives: $P > Q > Cu > R$.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q22",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv3_7-2025",
    question: "Which feature is an operational disadvantage of hydrogen-oxygen fuel cells compared to conventional rechargeable lithium-ion batteries?",
    options: [
      { text: "Hydrogen gas is highly flammable and requires bulky high-pressure storage tanks or cryogenic cooling", isCorrect: true },
      { text: "Fuel cells generate toxic pollutant emissions such as nitrogen dioxide" },
      { text: "Fuel cells have a significantly lower energy efficiency than internal combustion engines" },
      { text: "Fuel cells must be discarded after a single discharge" }
    ],
    correctAnswer: 0,
    explanation: "* Hydrogen has a very low density at ambient conditions, meaning it must be stored either at extremely high pressures (up to 700 bar) or as a cryogenic liquid at -253 °C.\n* This requires complex, heavy, and expensive storage infrastructure, posing safety risks due to hydrogen's high flammability.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q24",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

