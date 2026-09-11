import { Question } from '../../../types';

// Reversible Reactions and Equilibrium - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u6_l4_lv2_1-2026",
    question: "The reaction between sulfur dioxide and oxygen is reversible:\n2SO₂(g) + O₂(g) ⇌ 2SO₃(g)   ΔH = -196 kJ/mol\nWhich combination of temperature and pressure shifts the equilibrium position to produce the maximum equilibrium yield of sulfur trioxide (SO₃)?",
    options: [
      { text: "Low temperature and high pressure", isCorrect: true },
      { text: "High temperature and low pressure" },
      { text: "High temperature and high pressure" },
      { text: "Low temperature and low pressure" }
    ],
    correctAnswer: 0,
    explanation: "* The forward reaction is exothermic, so lowering temperature shifts equilibrium to the right to release heat.\n* There are 3 moles of gas on the left and 2 moles of gas on the right, so increasing pressure shifts equilibrium to the right (side with fewer gas moles).\n* Thus, low temperature and high pressure maximize yield.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q185",
    createdAt: "2026-08-21T01:15:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv2_2-2026",
    question: "Nitrogen dioxide is in equilibrium with dinitrogen tetroxide:\n2NO₂(g) (brown) ⇌ N₂O₄(g) (colourless)   ΔH = -57 kJ/mol\nWhat happens to the colour of the gas mixture when the sealed syringe is placed in an ice bath?",
    options: [
      { text: "It becomes lighter/paler in colour", isCorrect: true },
      { text: "It becomes darker brown" },
      { text: "It turns bright yellow" },
      { text: "The colour remains completely unchanged" }
    ],
    correctAnswer: 0,
    explanation: "* Cooling the system (ice bath) favours the exothermic forward reaction according to Le Chatelier's principle.\n* More brown NO₂ is converted into colourless N₂O₄, making the mixture paler.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q186",
    createdAt: "2026-08-21T01:20:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv2_3-2026",
    question: "What is the effect of adding an iron catalyst on the position of equilibrium and the rate of reaching equilibrium in the Haber process (N₂ + 3H₂ ⇌ 2NH₃)?",
    options: [
      { text: "Equilibrium position: No shift; Rate: Increases", isCorrect: true },
      { text: "Equilibrium position: Shifts to right; Rate: Increases" },
      { text: "Equilibrium position: Shifts to right; Rate: Stays constant" },
      { text: "Equilibrium position: Shifts to left; Rate: Decreases" }
    ],
    correctAnswer: 0,
    explanation: "* A catalyst speeds up both forward and backward reactions by the exact same factor.\n* It does not change the position of equilibrium or yield of ammonia, but allows equilibrium to be reached much faster.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q187",
    createdAt: "2026-08-21T01:25:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv2_4-2026",
    question: "For the reaction: H₂(g) + I₂(g) ⇌ 2HI(g)\nWhat is the effect of increasing the pressure on the equilibrium position?",
    options: [
      { text: "No shift, because the number of gas moles is equal on both sides", isCorrect: true },
      { text: "Shifts to the right to produce more HI" },
      { text: "Shifts to the left to produce more H₂ and I₂" },
      { text: "The reaction ceases to be reversible" }
    ],
    correctAnswer: 0,
    explanation: "* There are 2 moles of gas on the reactant side (1 H₂ + 1 I₂) and 2 moles of gas on the product side (2 HI).\n* Since $\\Delta n_\\text{gas} = 0$, changing pressure has no effect on the position of equilibrium.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q188",
    createdAt: "2026-08-21T01:30:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv2_5-2023",
    question: "The reaction between sulfur dioxide and oxygen is reversible:\n2SO₂(g) + O₂(g) ⇌ 2SO₃(g)    ΔH = -197 kJ/mol\nWhich set of conditions shifts the equilibrium to the right to increase the yield of SO₃?",
    options: [
      { text: "High pressure and low temperature", isCorrect: true },
      { text: "Low pressure and high temperature" },
      { text: "High pressure and high temperature" },
      { text: "Low pressure and low temperature" }
    ],
    correctAnswer: 0,
    explanation: "* Forward reaction produces fewer gas moles (3 moles on left $\\rightarrow$ 2 moles on right), so increasing pressure shifts equilibrium to the right.\n* Forward reaction is exothermic (negative $\\Delta H$), so decreasing temperature shifts equilibrium to the right to release heat.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q31",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv2_6-2024",
    question: "In the Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)    ΔH = -92 kJ/mol\nWhy is an operating temperature of 450 °C used industrially instead of a much lower temperature?",
    options: [
      { text: "450 °C provides a compromised compromise between an acceptable rate of reaction and an economic yield", isCorrect: true },
      { text: "450 °C gives 100% yield of ammonia at equilibrium" },
      { text: "The iron catalyst only melts and becomes active above 450 °C" },
      { text: "The reaction becomes endothermic above 450 °C" }
    ],
    correctAnswer: 0,
    explanation: "* Although lower temperatures favor a higher equilibrium yield of ammonia (exothermic forward reaction), the rate of reaction would be too slow to be commercially viable.\n* 450 °C is an optimum compromise temperature giving a fast enough rate with an acceptable yield.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q29",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv2_7-2025",
    question: "When brown nitrogen dioxide gas is cooled in a sealed syringe, the colour fades to pale yellow/colourless:\n2NO₂(g) (brown) ⇌ N₂O₄(g) (colourless)\nWhat deduction can be made about the forward reaction?",
    options: [
      { text: "The forward reaction is exothermic", isCorrect: true },
      { text: "The forward reaction is endothermic" },
      { text: "The forward reaction produces more gas molecules" },
      { text: "The forward reaction is neutral" }
    ],
    correctAnswer: 0,
    explanation: "* Lowering temperature shifts the equilibrium in the direction of the exothermic reaction (to release heat).\n* Because the mixture turns colourless ($N_2O_4$), the forward reaction is favored upon cooling, meaning the forward reaction must be exothermic.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q32",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

