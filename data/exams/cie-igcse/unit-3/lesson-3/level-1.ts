import { Question } from '../../../types';

// Reacting Masses - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u3_l3_lv1_1-2026",
    question: "Iron reacts with sulfur to form iron(II) sulfide: Fe + S → FeS\nWhat mass of iron(II) sulfide is produced when 5.6 g of iron reacts completely with excess sulfur?\n(Given: $A_r$ of Fe = 56, S = 32)",
    options: [
      { text: "5.6 g" },
      { text: "8.8 g", isCorrect: true },
      { text: "3.2 g" },
      { text: "11.2 g" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of Fe $= 5.6 / 56 = 0.10\\text{ mol}$.\n* According to the equation, 1 mole of Fe produces 1 mole of FeS.\n* Moles of FeS $= 0.10\\text{ mol}$.\n* Mass of FeS $= 0.10 \\times (56 + 32) = 0.10 \\times 88 = 8.8\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q30",
    createdAt: "2026-08-20T11:35:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv1_2-2026",
    question: "Carbon burns in oxygen to form carbon dioxide: C + O₂ → CO₂\nWhat mass of carbon is needed to produce 22 g of carbon dioxide?\n(Given: $A_r$ of C = 12, O = 16)",
    options: [
      { text: "6 g", isCorrect: true },
      { text: "12 g" },
      { text: "3 g" },
      { text: "24 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of CO₂ produced $= 22 / 44 = 0.50\\text{ mol}$.\n* According to the balanced equation, 1 mole of C produces 1 mole of CO₂.\n* Moles of carbon needed $= 0.50\\text{ mol}$.\n* Mass of carbon $= 0.50 \\times 12 = 6\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q31",
    createdAt: "2026-08-20T11:40:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv1_3-2026",
    question: "Calcium carbonate decomposes on heating: CaCO₃ → CaO + CO₂\nWhat mass of calcium oxide is formed when 50 g of calcium carbonate is completely decomposed?\n(Given: $M_r$ of CaCO₃ = 100, CaO = 56)",
    options: [
      { text: "56 g" },
      { text: "28 g", isCorrect: true },
      { text: "100 g" },
      { text: "14 g" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of CaCO₃ $= 50 / 100 = 0.50\\text{ mol}$.\n* The molar ratio of CaCO₃ to CaO is 1:1.\n* Moles of CaO produced $= 0.50\\text{ mol}$.\n* Mass of CaO $= 0.50 \\times 56 = 28\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q32",
    createdAt: "2026-08-20T11:45:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv1_4-2023",
    question: "Magnesium reacts with hydrochloric acid according to the equation:\n$$\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$$\nWhat mass of magnesium chloride ($\\text{MgCl}_2$) is formed when 2.4 g of magnesium reacts completely with excess hydrochloric acid?\n(Given: $A_r$: Mg = 24, Cl = 35.5)",
    options: [
      { text: "4.75 g" },
      { text: "9.5 g", isCorrect: true },
      { text: "19.0 g" },
      { text: "24.0 g" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $\\text{Mg} = \\frac{2.4}{24} = 0.10\\text{ mol}$.\n* From the equation, $1\\text{ mol Mg} \\rightarrow 1\\text{ mol MgCl}_2$.\n* Moles of $\\text{MgCl}_2 = 0.10\\text{ mol}$.\n* $M_r$ of $\\text{MgCl}_2 = 24 + (2 \\times 35.5) = 95\\text{ g/mol}$.\n* Mass of $\\text{MgCl}_2 = 0.10 \\times 95 = 9.5\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q15",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv1_5-2024",
    question: "Hydrogen and oxygen react to form water:\n$$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$$\nWhat mass of water is formed when 4.0 g of hydrogen reacts completely with excess oxygen?\n(Given: $A_r$: H = 1, O = 16)",
    options: [
      { text: "18 g" },
      { text: "36 g", isCorrect: true },
      { text: "72 g" },
      { text: "9 g" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $H_2 = \\frac{4.0}{2} = 2.0\\text{ mol}$.\n* Mole ratio $H_2 : H_2O = 2 : 2 = 1 : 1$, so $2.0\\text{ mol of } H_2O$ is produced.\n* Mass of $H_2O = 2.0 \\times 18 = 36\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q15",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv1_6-2025",
    question: "Copper(II) oxide reacts with hydrogen gas on heating:\n$$\\text{CuO} + \\text{H}_2 \\rightarrow \\text{Cu} + \\text{H}_2\\text{O}$$\nWhat mass of copper metal is produced from 16.0 g of copper(II) oxide?\n(Given: $A_r$: Cu = 64, O = 16)",
    options: [
      { text: "6.4 g" },
      { text: "12.8 g", isCorrect: true },
      { text: "16.0 g" },
      { text: "32.0 g" }
    ],
    correctAnswer: 1,
    explanation: "* $M_r$ of $\\text{CuO} = 64 + 16 = 80\\text{ g/mol}$.\n* Moles of $\\text{CuO} = \\frac{16.0}{80} = 0.20\\text{ mol}$.\n* The molar ratio $\\text{CuO} : \\text{Cu} = 1 : 1$, so $0.20\\text{ mol of Cu}$ is formed.\n* Mass of copper produced $= 0.20 \\times 64 = 12.8\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q15",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

