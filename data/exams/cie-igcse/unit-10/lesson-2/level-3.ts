import { Question } from '../../../types';

// Fertilisers & Ammonia - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u10_l2_lv3_1-2026",
    question: "Which of the following nitrogenous fertilisers has the HIGHEST percentage of nitrogen by mass?\n(Given $A_r$: N = 14, H = 1, C = 12, O = 16, S = 32)",
    options: [
      { text: "Urea, (NH₂)₂CO ($M_r = 60$)", isCorrect: true },
      { text: "Ammonium nitrate, NH₄NO₃ ($M_r = 80$)" },
      { text: "Ammonium sulfate, (NH₄)₂SO₄ ($M_r = 132$)" },
      { text: "Potassium nitrate, KNO₃ ($M_r = 101$)" }
    ],
    correctAnswer: 0,
    explanation: "* Urea (NH₂)₂CO: $(28 / 60) \\times 100\\% = 46.7\\%\\text{ N}$.\n* Ammonium nitrate NH₄NO₃: $(28 / 80) \\times 100\\% = 35.0\\%\\text{ N}$.\n* Ammonium sulfate (NH₄)₂SO₄: $(28 / 132) \\times 100\\% = 21.2\\%\\text{ N}$.\n* Potassium nitrate KNO₃: $(14 / 101) \\times 100\\% = 13.9\\%\\text{ N}$.\n* Urea has the highest nitrogen content per unit mass.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q365",
    createdAt: "2026-08-21T19:40:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv3_2-2026",
    question: "According to Le Chatelier's Principle, why does increasing the pressure from 1 atm to 200 atm shift the Haber equilibrium: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) towards the product side?",
    options: [
      { text: "There are 4 moles of gas on the reactant side and only 2 moles of gas on the product side, so high pressure shifts equilibrium to the side with fewer gas molecules", isCorrect: true },
      { text: "High pressure increases the rate of backward reaction" },
      { text: "High pressure changes the value of the catalyst's activation energy" },
      { text: "Ammonia is a liquid at high pressure" }
    ],
    correctAnswer: 0,
    explanation: "* 1 mole N₂ + 3 moles H₂ = 4 volumes of gas on the left.\n* 2 moles NH₃ = 2 volumes of gas on the right.\n* Increasing pressure shifts the equilibrium in the direction of lower pressure (fewer gas moles, right side), increasing the equilibrium yield of NH₃.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q366",
    createdAt: "2026-08-21T19:45:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv3_3-2026",
    question: "In a laboratory preparation of ammonium sulfate fertiliser: 2NH₃(aq) + H₂SO₄(aq) → (NH₄)₂SO₄(aq)\nWhat volume of 2.0 mol/dm³ ammonia solution is required to completely neutralise 25.0 cm³ of 1.0 mol/dm³ sulfuric acid?",
    options: [
      { text: "25.0 cm³", isCorrect: true },
      { text: "50.0 cm³" },
      { text: "12.5 cm³" },
      { text: "100.0 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of H₂SO₄ $= 0.025\\text{ dm}^3 \\times 1.0\\text{ mol/dm}^3 = 0.025\\text{ mol}$.\n* Stoichiometric ratio of NH₃ : H₂SO₄ is 2 : 1.\n* Moles of NH₃ needed $= 0.025 \\times 2 = 0.050\\text{ mol}$.\n* Volume of 2.0 mol/dm³ NH₃ $= 0.050 / 2.0 = 0.025\\text{ dm}^3 = 25.0\\text{ cm}^3$.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q367",
    createdAt: "2026-08-21T19:50:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv3_4-2026",
    question: "Why are pressures higher than 200 atm (such as 1000 atm) NOT used in commercial Haber process chemical plants?",
    options: [
      { text: "Building and maintaining equipment, thick-walled steel pipes, and powerful compressors to withstand extreme pressures is dangerously expensive and economically non-viable", isCorrect: true },
      { text: "Ammonia decomposes violently at pressures above 200 atm" },
      { text: "The iron catalyst is poisoned and deactivated by high pressure" },
      { text: "High pressure causes nitrogen gas to turn into nitric acid" }
    ],
    correctAnswer: 0,
    explanation: "* While ultra-high pressures would give even higher yields, building specialized thick-walled pressure vessels, reinforced pipes, and running high-energy compressors increases capital and running costs beyond commercial profitability.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q368",
    createdAt: "2026-08-21T19:55:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv3_5-2023",
    question: "Which of the following compounds has the highest percentage by mass of nitrogen?\n($A_r: \\text{H} = 1, \\text{C} = 12, \\text{N} = 14, \\text{O} = 16, \\text{S} = 32$)",
    options: [
      { text: "Urea, (NH₂)₂CO ($M_r = 60$)", isCorrect: true },
      { text: "Ammonium nitrate, NH₄NO₃ ($M_r = 80$)" },
      { text: "Ammonium sulfate, (NH₄)₂SO₄ ($M_r = 132$)" },
      { text: "Potassium nitrate, KNO₃ ($M_r = 101$)" }
    ],
    correctAnswer: 0,
    explanation: "* Urea: $(28 / 60) \\times 100\\% = 46.7\\%\\text{ N}$.\n* Ammonium nitrate: $(28 / 80) \\times 100\\% = 35.0\\%\\text{ N}$.\n* Ammonium sulfate: $(28 / 132) \\times 100\\% = 21.2\\%\\text{ N}$.\n* Potassium nitrate: $(14 / 101) \\times 100\\% = 13.9\\%\\text{ N}$.\n* Therefore, urea contains the highest proportion of nitrogen by mass.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q128",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv3_6-2024",
    question: "Why does increasing pressure in the Haber process (N₂(g) + 3H₂(g) ⇌ 2NH₃(g)) increase the yield of ammonia at equilibrium?",
    options: [
      { text: "The forward reaction produces fewer moles of gas than the backward reaction", isCorrect: true },
      { text: "The forward reaction is exothermic" },
      { text: "High pressure increases the collision energy of molecules" },
      { text: "High pressure changes the activation energy of the reaction" }
    ],
    correctAnswer: 0,
    explanation: "* In the balanced equation, 4 moles of gaseous reactants produce 2 moles of gaseous product.\n* By Le Chatelier's principle, increasing pressure favours the direction that produces fewer moles of gas (forward direction), shifting the equilibrium to the right.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q129",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv3_7-2025",
    question: "What mass of ammonia is produced from the complete reaction of 28.0 g of nitrogen gas with excess hydrogen in the Haber process?\nN₂(g) + 3H₂(g) → 2NH₃(g)\n($A_r: \\text{N} = 14, \\text{H} = 1$)",
    options: [
      { text: "34.0 g", isCorrect: true },
      { text: "17.0 g" },
      { text: "68.0 g" },
      { text: "56.0 g" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r(\\text{N}_2) = 28$ g/mol $\\implies$ Moles of $\\text{N}_2 = 28.0 / 28 = 1.00$ mol.\n* Moles of $\\text{NH}_3$ produced = $1.00 \\times 2 = 2.00$ mol.\n* $M_r(\\text{NH}_3) = 14 + 3 = 17$ g/mol.\n* Mass of $\\text{NH}_3 = 2.00 \\times 17 = 34.0$ g.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q130",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
