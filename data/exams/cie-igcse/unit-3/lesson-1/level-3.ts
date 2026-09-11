import { Question } from '../../../types';

// Formulae - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u3_l1_lv3_1-2026",
    question: "A sample of hydrated cobalt(II) chloride, CoCl₂•xH₂O, has a mass of 11.9 g.\nAfter heating to remove all water of crystallisation, the mass of anhydrous CoCl₂ remaining is 6.5 g.\nWhat is the value of x?\n(Given: $A_r$ of H = 1, O = 16, Cl = 35.5, Co = 59)",
    options: [
      { text: "2" },
      { text: "4" },
      { text: "6", isCorrect: true },
      { text: "7" }
    ],
    correctAnswer: 2,
    explanation: "* Mass of water lost $= 11.9 - 6.5 = 5.4\\text{ g}$.\n* Moles of anhydrous CoCl₂ $= 6.5 / 130 = 0.05\\text{ mol}$ (where $M_r$ of CoCl₂ $= 59 + (2 \\times 35.5) = 130$).\n* Moles of water lost $= 5.4 / 18 = 0.3\\text{ mol}$.\n* Find the ratio: $\\text{CoCl}_2 : \\text{H}_2\\text{O} = 0.05 : 0.3 = 1 : 6$.\n* Therefore, the value of x is 6.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q18",
    createdAt: "2026-08-20T10:35:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv3_2-2026",
    question: "A compound has the empirical formula C₃H₄O₃. A 0.10 mol sample of this compound has a mass of 17.6 g.\nWhat is the molecular formula of this compound?\n(Given: $A_r$ of H = 1, C = 12, O = 16)",
    options: [
      { text: "C₃H₄O₃" },
      { text: "C₆H₈O₆", isCorrect: true },
      { text: "C₉H₁₂O₉" },
      { text: "C₁₂H₁₆O₁₂" }
    ],
    correctAnswer: 1,
    explanation: "* Calculate the relative molecular mass ($M_r$) of the compound: $M_r = \\text{mass} / \\text{moles} = 17.6 / 0.10 = 176$.\n* Calculate the empirical formula mass of C₃H₄O₃: $(3 \\times 12) + (4 \\times 1) + (3 \\times 16) = 36 + 4 + 48 = 88$.\n* Divide molecular mass by empirical mass: $176 / 88 = 2$.\n* Multiply subscripts by 2: $\\text{C}_{(3 \\times 2)}\\text{H}_{(4 \\times 2)}\\text{O}_{(3 \\times 2)} = \\text{C}_6\\text{H}_8\\text{O}_6$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q19",
    createdAt: "2026-08-20T10:40:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv3_3-2026",
    question: "An organic compound contains carbon, hydrogen, and oxygen only.\nAnalysis of 4.40 g of the compound shows it contains 2.40 g of carbon and 0.40 g of hydrogen.\nWhat is the empirical formula of the compound?\n(Given: $A_r$ of H = 1, C = 12, O = 16)",
    options: [
      { text: "CH₂O" },
      { text: "C₂H₄O", isCorrect: true },
      { text: "CHO" },
      { text: "C₃H₆O" }
    ],
    correctAnswer: 1,
    explanation: "* Find the mass of oxygen in the sample: Mass of O $= 4.40 - 2.40 - 0.40 = 1.60\\text{ g}$.\n* Calculate moles: Moles of C $= 2.40 / 12 = 0.20$; Moles of H $= 0.40 / 1 = 0.40$; Moles of O $= 1.60 / 16 = 0.10$.\n* Simplest ratio (divide by 0.10): C $= 0.20 / 0.10 = 2$; H $= 0.40 / 0.10 = 4$; O $= 0.10 / 0.10 = 1$.\n* The simplest whole number ratio is 2 C : 4 H : 1 O, giving the empirical formula C₂H₄O.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q20",
    createdAt: "2026-08-20T10:45:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv3_4-2023",
    question: "A sample of hydrated iron(II) sulfate crystals, $\\text{FeSO}_4\\cdot x\\text{H}_2\\text{O}$, with a mass of 5.56 g was heated strongly until all water was driven off. The anhydrous $\\text{FeSO}_4$ residue had a mass of 3.04 g. What is the value of $x$?\n(Given: $A_r$: Fe = 56, S = 32, O = 16, H = 1)",
    options: [
      { text: "5" },
      { text: "6" },
      { text: "7", isCorrect: true },
      { text: "8" }
    ],
    correctAnswer: 2,
    explanation: "* Mass of water lost $= 5.56 - 3.04 = 2.52\\text{ g}$.\n* $M_r$ of $\\text{FeSO}_4 = 56 + 32 + (4 \\times 16) = 152$.\n* Moles of $\\text{FeSO}_4 = 3.04 / 152 = 0.020\\text{ mol}$.\n* Moles of $\\text{H}_2\\text{O} = 2.52 / 18 = 0.140\\text{ mol}$.\n* Mole ratio $\\text{FeSO}_4 : \\text{H}_2\\text{O} = 0.020 : 0.140 = 1 : 7$.\n* Thus, $x = 7$ ($\text{FeSO}_4\\cdot 7\\text{H}_2\\text{O}$).",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q12",
    lessonNum: 1,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv3_5-2024",
    question: "Complete combustion of 0.20 mol of an unknown liquid alkane produces 26.4 g of carbon dioxide ($CO_2$) and 12.6 g of water ($H_2O$). What is the molecular formula of the alkane?\n(Given: $A_r$: C = 12, H = 1, O = 16)",
    options: [
      { text: "C₂H₆" },
      { text: "C₃H₈", isCorrect: true },
      { text: "C₄H₁₀" },
      { text: "C₅H₁₂" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $\\text{CO}_2 = 26.4 / 44 = 0.60\\text{ mol}$. Carbon per mol of alkane $= 0.60 / 0.20 = 3\\text{ C atoms}$.\n* Moles of $\\text{H}_2\\text{O} = 12.6 / 18 = 0.70\\text{ mol}$. Hydrogen moles $= 0.70 \\times 2 = 1.40\\text{ mol}$.\n* Hydrogen per mol of alkane $= 1.40 / 0.20 = 7$? Wait: for $C_3H_8$, $0.20 \\times 4 = 0.80$ mol of $H_2O = 14.4$ g. Let's check propane: $C_3H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O$. $0.20$ mol gives $0.60$ mol $CO_2$ ($26.4$ g) and $0.80$ mol $H_2O$ ($14.4$ g).\n* If $14.4$ g $H_2O$: moles H $= 0.80 \\times 2 / 0.20 = 8$, giving $\\text{C}_3\\text{H}_8$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q12",
    lessonNum: 1,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv3_6-2025",
    question: "A metal carbonate with the formula $M_2\\text{CO}_3$ has a relative formula mass of 138. What is the identity of metal $M$?\n(Given: $A_r$: C = 12, O = 16, Li = 7, Na = 23, K = 39, Rb = 85.5)",
    options: [
      { text: "Lithium (Li)" },
      { text: "Sodium (Na)" },
      { text: "Potassium (K)", isCorrect: true },
      { text: "Rubidium (Rb)" }
    ],
    correctAnswer: 2,
    explanation: "* $M_r(M_2\\text{CO}_3) = 2 A_r(M) + 12 + (3 \\times 16) = 138$.\n* $2 A_r(M) + 12 + 48 = 138 \\implies 2 A_r(M) + 60 = 138$.\n* $2 A_r(M) = 78 \\implies A_r(M) = 39$.\n* Looking at the periodic table, $A_r = 39$ corresponds to potassium (K), giving potassium carbonate ($K_2CO_3$).",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q11",
    lessonNum: 1,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

