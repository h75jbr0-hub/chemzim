import { Question } from '../../../types';

// Reacting Masses - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u3_l3_lv3_1-2026",
    question: "A mixture of 8.0 g of hydrogen gas and 32.0 g of oxygen gas is ignited to form water:\n2H₂ + O₂ → 2H₂O\nWhat is the maximum mass of water that can be produced?\n(Given: $A_r$ of H = 1, O = 16)",
    options: [
      { text: "36.0 g", isCorrect: true },
      { text: "72.0 g" },
      { text: "40.0 g" },
      { text: "18.0 g" }
    ],
    correctAnswer: 0,
    explanation: "* Calculate moles of each reactant:\n  * Moles of H₂ $= 8.0 / 2 = 4.0\\text{ mol}$.\n  * Moles of O₂ $= 32.0 / 32 = 1.0\\text{ mol}$.\n* According to the ratio, 2 moles of H₂ react with 1 mole of O₂. So 1.0 mole of O₂ reacts with 2.0 moles of H₂.\n* Oxygen is the limiting reactant, and hydrogen is in excess (2.0 moles remain unreacted).\n* Moles of H₂O formed = 2 × moles of limiting O₂ $= 2 \\times 1.0 = 2.0\\text{ mol}$.\n* Mass of H₂O $= 2.0 \\times 18 = 36.0\\text{ g}$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q36",
    createdAt: "2026-08-20T12:05:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv3_2-2026",
    question: "Copper reacts with dilute nitric acid according to the equation:\n3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O\nIf 19.2 g of copper is added to a solution containing 0.60 moles of HNO₃, which reactant is the limiting reactant and how many moles of NO gas are produced?\n(Given: $A_r$ of Cu = 64)",
    options: [
      { text: "Cu is limiting; 0.20 mol of NO" },
      { text: "HNO₃ is limiting; 0.15 mol of NO", isCorrect: true },
      { text: "Cu is limiting; 0.10 mol of NO" },
      { text: "HNO₃ is limiting; 0.20 mol of NO" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of Cu $= 19.2 / 64 = 0.30\\text{ mol}$. Moles of HNO₃ $= 0.60\\text{ mol}$.\n* Find the ratio of moles to coefficients:\n  * For Cu: $0.30 / 3 = 0.10$.\n  * For HNO₃: $0.60 / 8 = 0.075$.\n* Since $0.075 < 0.10$, HNO₃ is the limiting reactant.\n* Moles of NO gas formed $= 0.60 \\times (2 / 8) = 0.15\\text{ mol}$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q37",
    createdAt: "2026-08-20T12:10:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv3_3-2026",
    question: "When 10.0 g of zinc reacts with 10.0 g of sulfur to form zinc sulfide (ZnS):\nZn + S → ZnS\nWhat mass of excess reactant remains unreacted at the end of the reaction?\n(Given: $A_r$ of Zn = 65, S = 32)",
    options: [
      { text: "5.1 g of sulfur", isCorrect: true },
      { text: "4.9 g of zinc" },
      { text: "6.8 g of sulfur" },
      { text: "3.2 g of zinc" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of Zn $= 10.0 / 65 = 0.154\\text{ mol}$. Moles of S $= 10.0 / 32 = 0.3125\\text{ mol}$.\n* The reaction ratio is 1:1, so Zn is the limiting reactant (0.154 mol reacts with 0.154 mol of S).\n* Moles of excess sulfur remaining $= 0.3125 - 0.154 = 0.1585\\text{ mol}$.\n* Mass of excess sulfur remaining $= 0.1585 \\times 32 = 5.07\\text{ g} \\approx 5.1\\text{ g}$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q38",
    createdAt: "2026-08-20T12:15:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv3_4-2023",
    question: "A sample of impure iron weighing 7.00 g reacts completely with excess dilute hydrochloric acid to produce 0.115 mol of iron(II) chloride:\n$$\\text{Fe} + 2\\text{HCl} \\rightarrow \\text{FeCl}_2 + \\text{H}_2$$\nAssuming impurities do not react with the acid, what is the percentage purity of the iron sample?\n(Given: $A_r$: Fe = 56)",
    options: [
      { text: "75.0%" },
      { text: "82.0%" },
      { text: "92.0%", isCorrect: true },
      { text: "96.5%" }
    ],
    correctAnswer: 2,
    explanation: "* From the equation, $1\\text{ mol Fe} \\rightarrow 1\\text{ mol FeCl}_2$.\n* Moles of pure Fe in sample $= 0.115\\text{ mol}$.\n* Mass of pure Fe $= 0.115 \\times 56 = 6.44\\text{ g}$.\n* $\\%\\text{ Purity} = \\frac{\\text{mass of pure Fe}}{\\text{total mass of sample}} \\times 100\\% = \\frac{6.44}{7.00} \\times 100\\% = 92.0\\%$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q16",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv3_5-2024",
    question: "Titanium metal is extracted by reacting titanium(IV) chloride with magnesium at high temperature in an inert argon atmosphere:\n$$\\text{TiCl}_4 + 2\\text{Mg} \\rightarrow \\text{Ti} + 2\\text{MgCl}_2$$\nIn an industrial batch, 95.0 kg of $\\text{TiCl}_4$ reacts with 30.0 kg of $\\text{Mg}$. Which reactant is in excess, and what is the maximum theoretical mass of titanium that can be extracted?\n(Given: $A_r$: Ti = 48, Cl = 35.5, Mg = 24; $M_r(\\text{TiCl}_4) = 190$)",
    options: [
      { text: "Excess: Mg; Theoretical Ti: 24.0 kg", isCorrect: true },
      { text: "Excess: TiCl₄; Theoretical Ti: 24.0 kg" },
      { text: "Excess: Mg; Theoretical Ti: 48.0 kg" },
      { text: "Excess: TiCl₄; Theoretical Ti: 29.5 kg" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of $\\text{TiCl}_4 = \\frac{95000\\text{ g}}{190\\text{ g/mol}} = 500\\text{ mol}$.\n* Moles of $\\text{Mg} = \\frac{30000\\text{ g}}{24\\text{ g/mol}} = 1250\\text{ mol}$.\n* Stoichiometry requires $2\\text{ mol Mg}$ per $1\\text{ mol TiCl}_4$, so $500\\text{ mol TiCl}_4$ requires $1000\\text{ mol Mg}$.\n* Magnesium is in excess ($1250 - 1000 = 250\\text{ mol excess}$). $\\text{TiCl}_4$ is limiting.\n* Moles of Ti produced $= 500\\text{ mol} \\implies \\text{mass of Ti} = 500 \\times 48 = 24000\\text{ g} = 24.0\\text{ kg}$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q16",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv3_6-2025",
    question: "Silicon carbide (SiC, carborundum) is manufactured by heating sand (silica) with excess carbon in an electric arc furnace:\n$$\\text{SiO}_2 + 3\\text{C} \\rightarrow \\text{SiC} + 2\\text{CO}$$\nWhen 30.0 g of $\\text{SiO}_2$ is reacted with 24.0 g of carbon, 16.0 g of SiC is obtained. What is the percentage yield of SiC?\n(Given: $A_r$: Si = 28, C = 12, O = 16; $M_r(\\text{SiO}_2) = 60$, $M_r(\\text{SiC}) = 40$)",
    options: [
      { text: "50.0%" },
      { text: "66.7%" },
      { text: "80.0%", isCorrect: true },
      { text: "92.5%" }
    ],
    correctAnswer: 2,
    explanation: "* Moles of $\\text{SiO}_2 = \\frac{30.0}{60} = 0.50\\text{ mol}$. Moles of $\\text{C} = \\frac{24.0}{12} = 2.0\\text{ mol}$.\n* Ratio is $1\\text{ SiO}_2 : 3\\text{ C}$, so $0.50\\text{ mol SiO}_2$ requires $1.50\\text{ mol C}$. $\\text{SiO}_2$ is limiting.\n* Theoretical moles of $\\text{SiC} = 0.50\\text{ mol}$.\n* Theoretical mass of $\\text{SiC} = 0.50 \\times 40 = 20.0\\text{ g}$.\n* $\\%\\text{ Yield} = \\frac{16.0}{20.0} \\times 100\\% = 80.0\\%$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q16",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

