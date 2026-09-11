import { Question } from '../../../types';

// The Mole Concept - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u3_l2_lv3_1-2026",
    question: "Which of the following contains the same number of molecules as 4 g of hydrogen gas, H₂?\n(Given: $A_r$ of H = 1, C = 12, N = 14, O = 16)",
    options: [
      { text: "16 g of methane, CH₄" },
      { text: "88 g of carbon dioxide, CO₂", isCorrect: true },
      { text: "28 g of nitrogen gas, N₂" },
      { text: "32 g of oxygen gas, O₂" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of molecules in 4 g of H₂ gas $= 4 / 2 = 2.0\\text{ mol}$.\n* Let's calculate the moles of molecules for each option:\n  * 16 g of CH₄ $= 16 / 16 = 1.0\\text{ mol}$.\n  * 88 g of CO₂ $= 88 / 44 = 2.0\\text{ mol}$.\n  * 28 g of N₂ $= 28 / 28 = 1.0\\text{ mol}$.\n  * 32 g of O₂ $= 32 / 32 = 1.0\\text{ mol}$.\n* Therefore, 88 g of carbon dioxide contains the same number of moles of molecules (and thus the same number of molecules) as 4 g of hydrogen gas.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q27",
    createdAt: "2026-08-20T11:20:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv3_2-2026",
    question: "A sample of gas with a mass of 1.4 g contains $3.0 \\times 10^{22}$ molecules.\nWhat is the relative molecular mass ($M_r$) of the gas?\n(Given: Avogadro's constant, $L = 6.0 \\times 10^{23}$ per mole)",
    options: [
      { text: "14" },
      { text: "28", isCorrect: true },
      { text: "44" },
      { text: "70" }
    ],
    correctAnswer: 1,
    explanation: "* Calculate the number of moles of gas: $\\text{Moles} = \\text{number of molecules} / L = (3.0 \\times 10^{22}) / (6.0 \\times 10^{23}) = 0.05\\text{ mol}$.\n* Calculate the relative molecular mass ($M_r$): $M_r = \\text{mass} / \\text{moles} = 1.4 / 0.05 = 28$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q28",
    createdAt: "2026-08-20T11:25:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv3_3-2026",
    question: "Which sample contains the greatest number of atoms?\n(Given: $A_r$ of H = 1, C = 12, O = 16, Na = 23, S = 32, Fe = 56; Avogadro's constant, $L = 6.0 \\times 10^{23}$ per mole)",
    options: [
      { text: "2.0 g of hydrogen gas, H₂", isCorrect: true },
      { text: "5.6 g of iron, Fe" },
      { text: "9.8 g of sulfuric acid, H₂SO₄" },
      { text: "10.0 g of calcium carbonate, CaCO₃" }
    ],
    correctAnswer: 0,
    explanation: "* Calculate the number of moles of atoms for each sample:\n  * 2.0 g of H₂ $= 2.0 / 2 = 1.0\\text{ mol of H}_2\\text{ molecules} = 2.0\\text{ moles of atoms}$.\n  * 5.6 g of Fe $= 5.6 / 56 = 0.1\\text{ moles of Fe atoms}$.\n  * 9.8 g of H₂SO₄ $= 9.8 / 98 = 0.1\\text{ mol of H}_2\\text{SO}_4\\text{ molecules} \\times 7 = 0.7\\text{ moles of atoms}$.\n  * 10.0 g of CaCO₃ $= 10.0 / 100 = 0.1\\text{ mol of CaCO}_3\\text{ formula units} \\times 5 = 0.5\\text{ moles of atoms}$.\n* Therefore, 2.0 g of hydrogen gas contains the greatest number of atoms ($2.0 \\times L$ atoms).",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q29",
    createdAt: "2026-08-20T11:30:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv3_4-2023",
    question: "A $0.050\\text{ mol}$ sample of a chloride of silicon, $\\text{SiCl}_n$, has a mass of $8.50\\text{ g}$. What is the value of $n$?\n(Given: $A_r$: Si = 28, Cl = 35.5)",
    options: [
      { text: "2" },
      { text: "3" },
      { text: "4", isCorrect: true },
      { text: "6" }
    ],
    correctAnswer: 2,
    explanation: "* Molar mass $M_r = \\frac{\\text{mass}}{\\text{moles}} = \\frac{8.50}{0.050} = 170\\text{ g/mol}$.\n* $M_r(\\text{SiCl}_n) = 28 + (n \\times 35.5) = 170$.\n* $35.5 n = 170 - 28 = 142 \\implies n = \\frac{142}{35.5} = 4$.\n* The compound is silicon tetrachloride ($\\text{SiCl}_4$).",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q14",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv3_5-2024",
    question: "Which of the following contains the same number of electrons as 1.0 mol of neon atoms (Ne)?\n(Given: $A_r$: H = 1, C = 12, N = 14, O = 16; $Z$: H = 1, C = 6, N = 7, O = 8, Ne = 10)",
    options: [
      { text: "1.0 mol of methane molecules ($CH_4$)", isCorrect: true },
      { text: "1.0 mol of carbon dioxide molecules ($CO_2$)" },
      { text: "0.5 mol of water molecules ($H_2O$)" },
      { text: "2.0 mol of ammonia molecules ($NH_3$)" }
    ],
    correctAnswer: 0,
    explanation: "* 1.0 mol of Ne atoms contains $1.0 \\times 10 = 10\\text{ moles of electrons}$.\n* In $CH_4$, one molecule has $6 (C) + 4 \\times 1 (H) = 10\\text{ electrons}$. Therefore, 1.0 mol of $CH_4$ contains exactly $10\\text{ moles of electrons}$.\n* $CO_2$ has $6 + 16 = 22$; $H_2O$ has 10 (so 0.5 mol has 5); $NH_3$ has 10 (so 2.0 mol has 20).",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q14",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv3_6-2025",
    question: "How many total atoms are present in 0.25 mol of hydrated magnesium sulfate crystals, $\\text{MgSO}_4\\cdot 7\\text{H}_2\\text{O}$?\n(Given: Avogadro's constant, $L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$)",
    options: [
      { text: "$6.8 \\times 10^{23}$" },
      { text: "$1.63 \\times 10^{24}$" },
      { text: "$4.06 \\times 10^{24}$", isCorrect: true },
      { text: "$1.62 \\times 10^{25}$" }
    ],
    correctAnswer: 2,
    explanation: "* In one formula unit of $\\text{MgSO}_4\\cdot 7\\text{H}_2\\text{O}$:\n  * 1 Mg + 1 S + 4 O = 6 atoms in $\\text{MgSO}_4$\n  * $7\\text{H}_2\\text{O} = 7 \\times 3 = 21\\text{ atoms}$\n  * Total atoms per formula unit = $6 + 21 = 27\\text{ atoms}$.\n* Total moles of atoms in 0.25 mol = $0.25 \\times 27 = 6.75\\text{ mol of atoms}$.\n* Total number of atoms = $6.75 \\times 6.02 \\times 10^{23} \\approx 4.06 \\times 10^{24}\\text{ atoms}$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q12",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

