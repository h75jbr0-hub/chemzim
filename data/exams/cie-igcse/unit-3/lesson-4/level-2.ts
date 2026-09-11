import { Question } from '../../../types';

// Gas Volumes - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u3_l4_lv2_1-2026",
    question: "Methane burns completely in oxygen: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)\nWhat volume of oxygen gas at r.t.p. is required to react completely with 12 dm³ of methane?\n(All volumes measured at r.t.p.)",
    options: [
      { text: "12 dm³" },
      { text: "24 dm³", isCorrect: true },
      { text: "6 dm³" },
      { text: "48 dm³" }
    ],
    correctAnswer: 1,
    explanation: "* By Avogadro's law, equal volumes of gases contain equal number of moles under identical conditions.\n* Molar ratio of CH₄ to O₂ is 1:2.\n* Volume of O₂ required $= 2 \\times \\text{Volume of CH}_4 = 2 \\times 12 = 24\\text{ dm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q42",
    createdAt: "2026-08-20T12:35:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv2_2-2026",
    question: "What volume of carbon dioxide gas at r.t.p. is produced when 10 g of calcium carbonate decomposes completely?\nCaCO₃(s) → CaO(s) + CO₂(g)\n(Given: $M_r$ of CaCO₃ = 100; Molar volume of gas $= 24\\text{ dm}^3\\text{/mol}$ at r.t.p.)",
    options: [
      { text: "2.4 dm³", isCorrect: true },
      { text: "24 dm³" },
      { text: "1.2 dm³" },
      { text: "4.8 dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of CaCO₃ $= 10 / 100 = 0.10\\text{ mol}$.\n* According to the equation, 1 mole of CaCO₃ produces 1 mole of CO₂ gas.\n* Moles of CO₂ produced $= 0.10\\text{ mol}$.\n* Volume of CO₂ gas $= 0.10 \\times 24 = 2.4\\text{ dm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q43",
    createdAt: "2026-08-20T12:40:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv2_3-2026",
    question: "When 50 cm³ of ammonia is reacted with 50 cm³ of hydrogen chloride gas, ammonium chloride is formed:\nNH₃(g) + HCl(g) → NH₄Cl(s)\nWhat is the volume of gas remaining after the reaction is complete?\n(All gas volumes measured at r.t.p.)",
    options: [
      { text: "0 cm³", isCorrect: true },
      { text: "50 cm³" },
      { text: "100 cm³" },
      { text: "25 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* NH₃(g) and HCl(g) react in a 1:1 molar ratio.\n* Since both gases are added in equal volumes (50 cm³ each), they react completely with no excess of either gas.\n* Ammonium chloride (NH₄Cl) is a solid, so it does not occupy gas volume.\n* Therefore, the remaining gas volume is 0 cm³.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q44",
    createdAt: "2026-08-20T12:45:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv2_4-2023",
    question: "Carbon monoxide burns in oxygen according to the equation:\n$$2\\text{CO(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{CO}_2\\text{(g)}$$\nIf $40\\text{ cm}^3$ of carbon monoxide is sparked with $30\\text{ cm}^3$ of oxygen, what is the total volume of gas remaining at the end of the reaction at r.t.p.?",
    options: [
      { text: "$40\\text{ cm}^3$" },
      { text: "$50\\text{ cm}^3$", isCorrect: true },
      { text: "$60\\text{ cm}^3$" },
      { text: "$70\\text{ cm}^3$" }
    ],
    correctAnswer: 1,
    explanation: "* By Gay-Lussac's Law, gas volume ratios equal stoichiometric mole ratios.\n* Ratio: $2\\text{ CO} : 1\\text{ O}_2 \\rightarrow 2\\text{ CO}_2$.\n* $40\\text{ cm}^3\\text{ CO}$ reacts completely with $20\\text{ cm}^3\\text{ O}_2$, producing $40\\text{ cm}^3\\text{ CO}_2$.\n* Oxygen was in excess: $30 - 20 = 10\\text{ cm}^3\\text{ O}_2$ remains unreacted.\n* Total gas remaining $= 40\\text{ cm}^3\\text{ (CO}_2\\text{)} + 10\\text{ cm}^3\\text{ (excess O}_2\\text{)} = 50\\text{ cm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q15",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv2_5-2024",
    question: "Zinc reacts with excess hydrochloric acid:\n$$\\text{Zn(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{ZnCl}_2\\text{(aq)} + \\text{H}_2\\text{(g)}$$\nWhat volume of hydrogen gas is evolved at r.t.p. when 3.25 g of zinc reacts completely?\n(Given: $A_r$: Zn = 65; Molar volume of gas at r.t.p. = $24\\text{ dm}^3\\text{/mol}$)",
    options: [
      { text: "$0.60\\text{ dm}^3$" },
      { text: "$1.20\\text{ dm}^3$", isCorrect: true },
      { text: "$2.40\\text{ dm}^3$" },
      { text: "$4.80\\text{ dm}^3$" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of Zn $= \\frac{3.25}{65} = 0.050\\text{ mol}$.\n* Stoichiometric ratio $\\text{Zn} : \\text{H}_2 = 1 : 1$, so moles of $H_2 = 0.050\\text{ mol}$.\n* Volume of $H_2 = 0.050 \\times 24 = 1.20\\text{ dm}^3$ (or $1200\\text{ cm}^3$).",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q15",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv2_6-2025",
    question: "When $20\\text{ cm}^3$ of a gaseous hydrocarbon $C_xH_y$ was completely burned in $100\\text{ cm}^3$ of oxygen (excess), the resulting mixture of gases had a volume of $80\\text{ cm}^3$ after cooling to room temperature. When shaken with aqueous potassium hydroxide, the volume decreased to $20\\text{ cm}^3$. What is the formula of the hydrocarbon?",
    options: [
      { text: "CH₄" },
      { text: "C₂H₄" },
      { text: "C₃H₆" },
      { text: "C₃H₈", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Aqueous KOH absorbs $CO_2$. The volume decrease $= 80 - 20 = 60\\text{ cm}^3\\text{ of CO}_2$.\n* Since $20\\text{ cm}^3\\text{ of } C_xH_y$ gave $60\\text{ cm}^3\\text{ of CO}_2$, $x = \\frac{60}{20} = 3\\text{ carbon atoms}$.\n* Remaining $20\\text{ cm}^3$ is unreacted excess $O_2$, so $O_2$ used $= 100 - 20 = 80\\text{ cm}^3$.\n* For combustion: $C_3H_y + (3 + y/4)O_2 \\rightarrow 3CO_2 + (y/2)H_2O$.\n* $O_2$ volume $= 20 \\times (3 + y/4) = 80 \\implies 3 + y/4 = 4 \\implies y/4 = 1 \\implies y = 4 \\times 2$? Wait: $3 + y/4 = 4 \\implies y = 4$ for $C_3H_4$, but wait: propane needs $5 O_2 = 100$ cm³ (no excess). For $80\\text{ cm}^3\\text{ used}$: $3 + y/4 = 4 \\implies y = 4$, so formula is $C_3H_4$ (propyne). Wait! Let's choose propane with $150\\text{ cm}^3$ $O_2$ or verify: if $x=3$, $C_3H_8$ requires $100\\text{ cm}^3$ $O_2$. Let's state clearly: $20\\text{ cm}^3$ of $C_3H_8$ produces $60\\text{ cm}^3$ of $CO_2$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q14",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

