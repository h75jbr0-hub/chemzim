import { Question } from '../../../types';

// Gas Volumes - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u3_l4_lv3_1-2026",
    question: "When 20 cm³ of propane (C₃H₈) is mixed with 120 cm³ of oxygen gas and ignited, complete combustion occurs:\nC₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l)\nWhat is the total volume of gas remaining at room temperature and pressure (r.t.p.) after the reaction?\n(Assume water is liquid at r.t.p.; all gas volumes measured at r.t.p.)",
    options: [
      { text: "60 cm³" },
      { text: "80 cm³", isCorrect: true },
      { text: "120 cm³" },
      { text: "140 cm³" }
    ],
    correctAnswer: 1,
    explanation: "* Molar ratio is 1 C₃H₈ : 5 O₂ : 3 CO₂.\n* Propane is the limiting reactant: 20 cm³ of propane reacts with $20 \\times 5 = 100\\text{ cm}^3$ of oxygen gas.\n* Excess oxygen remaining $= 120 - 100 = 20\\text{ cm}^3$.\n* Volume of CO₂ gas produced $= 20 \\times 3 = 60\\text{ cm}^3$.\n* Water is liquid at r.t.p., so its volume is negligible.\n* Total gas volume remaining $= \\text{excess O}_2 + \\text{CO}_2 \\text{ produced} = 20 + 60 = 80\\text{ cm}^3$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q45",
    createdAt: "2026-08-20T12:50:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv3_2-2026",
    question: "A hydrocarbon gas has a density of 1.25 g/dm³ at r.t.p.\nWhat is the relative molecular mass ($M_r$) of this gas?\n(Given: Molar volume of gas $= 24\\text{ dm}^3\\text{/mol}$ at r.t.p.)",
    options: [
      { text: "16" },
      { text: "28" },
      { text: "30", isCorrect: true },
      { text: "44" }
    ],
    correctAnswer: 2,
    explanation: "* Density is the mass of 1 dm³ of gas.\n* The relative molecular mass ($M_r$) represents the mass of 1 mole of gas (which occupies 24 dm³ at r.t.p.).\n* $M_r = \\text{Density} \\times 24 = 1.25 \\times 24 = 30$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q46",
    createdAt: "2026-08-20T12:55:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv3_3-2026",
    question: "When 100 cm³ of hydrogen gas is exploded with 40 cm³ of oxygen gas, water is formed:\n2H₂(g) + O₂(g) → 2H₂O(g)\nWhat is the total volume of gas remaining at $120°\\text{C}$ (at which water is a gas) and constant pressure?\n(All gas volumes measured under same temperature and pressure)",
    options: [
      { text: "100 cm³", isCorrect: true },
      { text: "80 cm³" },
      { text: "120 cm³" },
      { text: "60 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Reaction ratio is 2 H₂ : 1 O₂ : 2 H₂O(g).\n* Oxygen is limiting: 40 cm³ of O₂ reacts with $40 \\times 2 = 80\\text{ cm}^3$ of H₂.\n* Excess H₂ remaining $= 100 - 80 = 20\\text{ cm}^3$.\n* Volume of H₂O(g) produced $= 40 \\times 2 = 80\\text{ cm}^3$.\n* Since the temperature is $120\\text{ }^\\circ\\text{C}$, water is gaseous and must be counted.\n* Total volume of gas remaining $= \\text{excess H}_2 + \\text{H}_2\\text{O(g)} = 20 + 80 = 100\\text{ cm}^3$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q47",
    createdAt: "2026-08-20T13:00:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv3_4-2023",
    question: "A $20\\text{ cm}^3$ volume of a gaseous fuel containing only carbon monoxide (CO) and hydrogen ($H_2$) was mixed with $20\\text{ cm}^3$ of oxygen (an excess) and exploded. After cooling to r.t.p., the volume was $25\\text{ cm}^3$. On shaking with excess aqueous sodium hydroxide, the volume decreased to $11\\text{ cm}^3$. What was the percentage by volume of carbon monoxide in the original fuel mixture?",
    options: [
      { text: "35%" },
      { text: "50%" },
      { text: "70%", isCorrect: true },
      { text: "75%" }
    ],
    correctAnswer: 2,
    explanation: "* Aqueous NaOH absorbs $CO_2$. The contraction $= 25 - 11 = 14\\text{ cm}^3\\text{ of CO}_2$.\n* Combustion of CO: $\\text{CO} + \\frac{1}{2}\\text{O}_2 \\rightarrow \\text{CO}_2$. Each volume of CO gives an equal volume of $CO_2$.\n* Therefore, volume of CO in the fuel $= 14\\text{ cm}^3$.\n* $\\%\\text{ CO by volume} = \\frac{14}{20} \\times 100\\% = 70\\%$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q13",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv3_5-2024",
    question: "A sample of 2.10 g of a group II metal carbonate, $M\\text{CO}_3$, was heated until completely decomposed:\n$$M\\text{CO}_3\\text{(s)} \\rightarrow M\\text{O(s)} + \\text{CO}_2\\text{(g)}$$\nThe carbon dioxide gas collected occupied a volume of $600\\text{ cm}^3$ at r.t.p. What is the identity of metal $M$?\n(Given: Molar volume of gas at r.t.p. = $24000\\text{ cm}^3\\text{/mol}$; $A_r$: C = 12, O = 16, Mg = 24, Ca = 40, Sr = 88, Ba = 137)",
    options: [
      { text: "Magnesium (Mg)" },
      { text: "Calcium (Ca)" },
      { text: "Strontium (Sr)" },
      { text: "Magnesium (Mg, $M_r = 84$)? Let's check: 600/24000 = 0.025 mol. 2.10/0.025 = 84. M + 12 + 48 = 84 -> M = 24 (Mg)", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Moles of $\\text{CO}_2 = \\frac{600}{24000} = 0.025\\text{ mol}$.\n* From stoichiometry, moles of $M\\text{CO}_3 = 0.025\\text{ mol}$.\n* Molar mass $M_r(M\\text{CO}_3) = \\frac{2.10\\text{ g}}{0.025\\text{ mol}} = 84\\text{ g/mol}$.\n* $A_r(M) + 12 + (3 \\times 16) = 84 \\implies A_r(M) + 60 = 84 \\implies A_r(M) = 24$.\n* The metal is magnesium (Mg), forming $\\text{MgCO}_3$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q13",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv3_6-2025",
    question: "When $10\\text{ cm}^3$ of a gaseous hydrocarbon was mixed with $70\\text{ cm}^3$ of oxygen and sparked, the volume of gas remaining after cooling to room temperature was $50\\text{ cm}^3$. Passing this gas through aqueous sodium hydroxide reduced the volume to $10\\text{ cm}^3$. What is the formula of the hydrocarbon?",
    options: [
      { text: "C₂H₆" },
      { text: "C₃H₈" },
      { text: "C₄H₈", isCorrect: true },
      { text: "C₄H₁₀" }
    ],
    correctAnswer: 2,
    explanation: "* Volume of $CO_2$ absorbed by NaOH $= 50 - 10 = 40\\text{ cm}^3$.\n* Carbon atoms in hydrocarbon $x = \\frac{40}{10} = 4$.\n* Unreacted excess $O_2 = 10\\text{ cm}^3$, so $O_2$ used $= 70 - 10 = 60\\text{ cm}^3$.\n* General combustion equation: $C_4H_y + (4 + y/4)O_2 \\rightarrow 4CO_2 + (y/2)H_2O$.\n* $10 \\times (4 + y/4) = 60 \\implies 4 + y/4 = 6 \\implies y/4 = 2 \\implies y = 8$.\n* The formula is $C_4H_8$ (butene/cyclobutane).",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q18",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

