import { Question } from '../../../types';

// Reacting Masses - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u3_l3_lv2_1-2026",
    question: "Aluminum reacts with copper(II) oxide according to the equation:\n2Al + 3CuO → Al₂O₃ + 3Cu\nWhat mass of copper is produced when 5.4 g of aluminum reacts completely with excess copper(II) oxide?\n(Given: $A_r$ of Al = 27, Cu = 64)",
    options: [
      { text: "19.2 g", isCorrect: true },
      { text: "12.8 g" },
      { text: "6.4 g" },
      { text: "38.4 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of Al $= 5.4 / 27 = 0.20\\text{ mol}$.\n* According to the balanced equation, 2 moles of Al produce 3 moles of Cu.\n* Therefore, moles of Cu produced $= 0.20 \\times (3 / 2) = 0.30\\text{ mol}$.\n* Mass of Cu produced $= 0.30 \\times 64 = 19.2\\text{ g}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q33",
    createdAt: "2026-08-20T11:50:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv2_2-2026",
    question: "Propane burns completely in oxygen: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O\nWhat mass of oxygen is required for the complete combustion of 4.4 g of propane?\n(Given: $A_r$ of H = 1, C = 12, O = 16)",
    options: [
      { text: "3.2 g" },
      { text: "16.0 g", isCorrect: true },
      { text: "8.0 g" },
      { text: "32.0 g" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of propane, C₃H₈ $= 4.4 / 44 = 0.10\\text{ mol}$ (where $M_r$ of C₃H₈ $= (3 \\times 12) + (8 \\times 1) = 44$).\n* From the equation, 1 mole of C₃H₈ requires 5 moles of O₂.\n* Moles of O₂ required $= 0.10 \\times 5 = 0.50\\text{ mol}$.\n* Mass of O₂ $= 0.50 \\times 32 = 16.0\\text{ g}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q34",
    createdAt: "2026-08-20T11:55:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv2_3-2026",
    question: "What mass of anhydrous sodium carbonate is needed to prepare 14.2 g of sodium sulfate according to the reaction:\nNa₂CO₃ + H₂SO₄ → Na₂SO₄ + H₂O + CO₂\n(Given: $M_r$ of Na₂CO₃ = 106, Na₂SO₄ = 142)",
    options: [
      { text: "10.6 g", isCorrect: true },
      { text: "21.2 g" },
      { text: "5.3 g" },
      { text: "14.2 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of Na₂SO₄ produced $= 14.2 / 142 = 0.10\\text{ mol}$.\n* The molar ratio of Na₂CO₃ to Na₂SO₄ is 1:1.\n* Moles of Na₂CO₃ needed $= 0.10\\text{ mol}$.\n* Mass of Na₂CO₃ $= 0.10 \\times 106 = 10.6\\text{ g}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q35",
    createdAt: "2026-08-20T12:00:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv2_4-2023",
    question: "Limestone ($\\text{CaCO}_3$) decomposes when heated to produce quicklime ($\\text{CaO}$) and carbon dioxide:\n$$\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$$\nWhen 20.0 tonnes of limestone is heated, 8.96 tonnes of quicklime is obtained. What is the percentage yield of quicklime?\n(Given: $M_r$: $\\text{CaCO}_3 = 100$, $\\text{CaO} = 56$)",
    options: [
      { text: "44.8%" },
      { text: "56.0%" },
      { text: "80.0%", isCorrect: true },
      { text: "89.6%" }
    ],
    correctAnswer: 2,
    explanation: "* Theoretical yield calculation: 100 g (or tonnes) of $\\text{CaCO}_3$ yields 56 g (or tonnes) of $\\text{CaO}$.\n* Theoretical mass of $\\text{CaO} = 20.0 \\times \\frac{56}{100} = 11.2\\text{ tonnes}$.\n* $\\%\\text{ Yield} = \\frac{\\text{Actual mass}}{\\text{Theoretical mass}} \\times 100\\% = \\frac{8.96}{11.2} \\times 100\\% = 80.0\\%$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q14",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv2_5-2024",
    question: "A mixture of 12.0 g of magnesium and 16.0 g of oxygen is ignited to form magnesium oxide:\n$$2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$$\nWhich reactant is the limiting reactant, and what mass of unreacted excess reactant remains?\n(Given: $A_r$: Mg = 24, O = 16)",
    options: [
      { text: "Limiting: Mg; Excess remaining: 8.0 g of O₂", isCorrect: true },
      { text: "Limiting: O₂; Excess remaining: 4.0 g of Mg" },
      { text: "Limiting: Mg; Excess remaining: 4.0 g of O₂" },
      { text: "Neither reactant is in excess" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of Mg $= \\frac{12.0}{24} = 0.50\\text{ mol}$.\n* Moles of $O_2 = \\frac{16.0}{32} = 0.50\\text{ mol}$.\n* From the balanced equation, $2\\text{ mol Mg}$ requires $1\\text{ mol } O_2$.\n* So $0.50\\text{ mol Mg}$ requires $0.25\\text{ mol } O_2$.\n* Since we have $0.50\\text{ mol } O_2$, oxygen is in excess and Mg is the limiting reactant.\n* Excess $O_2$ remaining $= 0.50 - 0.25 = 0.25\\text{ mol} = 0.25 \\times 32 = 8.0\\text{ g}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q14",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv2_6-2025",
    question: "In an experiment, 4.0 g of hydrogen reacts with excess nitrogen to produce 13.6 g of ammonia:\n$$\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$$\nWhat is the percentage yield of ammonia in this reaction?\n(Given: $A_r$: N = 14, H = 1)",
    options: [
      { text: "40%" },
      { text: "60%" },
      { text: "68%" },
      { text: "60.0%? No, let's calculate: 4.0 g H₂ = 2.0 mol H₂. 2.0 mol H₂ gives (2/3)*2 = 1.333 mol NH₃ = 22.67 g. 13.6/22.67 = 60%", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Moles of $H_2 = \\frac{4.0}{2} = 2.0\\text{ mol}$.\n* Mole ratio $3\\text{ mol } H_2 \\rightarrow 2\\text{ mol } NH_3$.\n* Theoretical moles of $NH_3 = 2.0 \\times \\frac{2}{3} = \\frac{4}{3}\\text{ mol} \\approx 1.333\\text{ mol}$.\n* Theoretical mass of $NH_3 = \\frac{4}{3} \\times 17 = 22.67\\text{ g}$.\n* $\\%\\text{ Yield} = \\frac{13.6}{22.67} \\times 100\\% = 60.0\\%$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q13",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

