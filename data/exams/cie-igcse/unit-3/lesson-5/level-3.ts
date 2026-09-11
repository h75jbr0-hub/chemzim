import { Question } from '../../../types';

// Concentrations, Yield & Purity - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u3_l5_lv3_1-2026",
    question: "In a titration, 25.0 cm³ of 0.10 mol/dm³ sodium hydroxide (NaOH) is neutralised by 20.0 cm³ of dilute sulfuric acid (H₂SO₄):\n2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O\nWhat is the concentration of the sulfuric acid in mol/dm³?",
    options: [
      { text: "0.0625 mol/dm³", isCorrect: true },
      { text: "0.125 mol/dm³" },
      { text: "0.050 mol/dm³" },
      { text: "0.250 mol/dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Calculate moles of NaOH used: $\\text{Moles} = \\text{Volume in dm}^3 \\times \\text{Concentration} = 0.0250 \\times 0.10 = 0.0025\\text{ mol}$.\n* From the balanced equation, the molar ratio of NaOH to H₂SO₄ is 2:1.\n* Moles of H₂SO₄ required $= 0.0025 / 2 = 0.00125\\text{ mol}$.\n* Calculate concentration of H₂SO₄: $\\text{Concentration} = \\text{Moles} / \\text{Volume in dm}^3 = 0.00125 / 0.0200 = 0.0625\\text{ mol/dm}^3$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q54",
    createdAt: "2026-08-20T13:35:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv3_2-2026",
    question: "What volume of 0.50 mol/dm³ sodium carbonate solution, Na₂CO₃, reacts completely with 25 cm³ of 2.0 mol/dm³ nitric acid, HNO₃?\nNa₂CO₃ + 2HNO₃ → 2NaNO₃ + H₂O + CO₂",
    options: [
      { text: "50 cm³", isCorrect: true },
      { text: "25 cm³" },
      { text: "12.5 cm³" },
      { text: "100 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of HNO₃ $= 0.025 \\times 2.0 = 0.050\\text{ mol}$.\n* From the balanced equation, 1 mole of Na₂CO₃ reacts with 2 moles of HNO₃.\n* Moles of Na₂CO₃ required $= 0.050 / 2 = 0.025\\text{ mol}$.\n* Volume of Na₂CO₃ solution $= \\text{Moles} / \\text{Concentration} = 0.025 / 0.50 = 0.050\\text{ dm}^3 = 50\\text{ cm}^3$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q55",
    createdAt: "2026-08-20T13:40:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv3_3-2026",
    question: "When excess zinc is added to 50 cm³ of 1.0 mol/dm³ hydrochloric acid, hydrogen gas is produced:\nZn + 2HCl → ZnCl₂ + H₂\nWhat is the volume of hydrogen gas produced at r.t.p. if the percentage yield of the reaction is 80%?\n(Given: Molar volume of gas $= 24\\text{ dm}^3\\text{/mol}$ at r.t.p.)",
    options: [
      { text: "0.48 dm³", isCorrect: true },
      { text: "0.60 dm³" },
      { text: "0.96 dm³" },
      { text: "1.20 dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of HCl used $= 0.050 \\times 1.0 = 0.050\\text{ mol}$.\n* Molar ratio of HCl to H₂ is 2:1.\n* Theoretical moles of H₂ gas produced $= 0.050 / 2 = 0.025\\text{ mol}$.\n* Theoretical volume of H₂ gas produced $= 0.025 \\times 24 = 0.60\\text{ dm}^3$.\n* Actual volume of H₂ gas produced (80% yield) $= 0.60 \\times 0.80 = 0.48\\text{ dm}^3$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q56",
    createdAt: "2026-08-20T13:45:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv3_4-2023",
    question: "A $25.0\\text{ cm}^3$ portion of vinegar containing ethanoic acid ($\\text{CH}_3\\text{COOH}$) requires $30.0\\text{ cm}^3$ of $0.150\\text{ mol/dm}^3$ sodium hydroxide for complete neutralisation:\n$$\\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}$$\nWhat is the concentration of ethanoic acid in the vinegar in $\\text{g/dm}^3$?\n(Given: $A_r$: C = 12, H = 1, O = 16)",
    options: [
      { text: "5.40 g/dm³" },
      { text: "10.8 g/dm³", isCorrect: true },
      { text: "18.0 g/dm³" },
      { text: "21.6 g/dm³" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of NaOH $= 0.150 \\times \\frac{30.0}{1000} = 0.0045\\text{ mol}$.\n* Stoichiometric ratio $1 : 1$, so moles of $\\text{CH}_3\\text{COOH} = 0.0045\\text{ mol}$.\n* Concentration in $\\text{mol/dm}^3 = \\frac{0.0045}{0.0250} = 0.180\\text{ mol/dm}^3$.\n* $M_r$ of $\\text{CH}_3\\text{COOH} = (2 \\times 12) + (4 \\times 1) + (2 \\times 16) = 24 + 4 + 32 = 60\\text{ g/mol}$.\n* Concentration in $\\text{g/dm}^3 = 0.180 \\times 60 = 10.8\\text{ g/dm}^3$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q14",
    lessonNum: 5,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv3_5-2024",
    question: "A tablet of antacid containing magnesium hydroxide, $\\text{Mg(OH)}_2$, has a mass of 1.20 g. It was dissolved in excess hydrochloric acid, and the unreacted acid required titration. The experimental result showed that exactly 0.035 mol of HCl was neutralised by the $\\text{Mg(OH)}_2$ in the tablet:\n$$\\text{Mg(OH)}_2 + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + 2\\text{H}_2\\text{O}$$\nWhat is the percentage by mass of $\\text{Mg(OH)}_2$ in the antacid tablet?\n(Given: $M_r$ of $\\text{Mg(OH)}_2 = 58$)",
    options: [
      { text: "42.3%" },
      { text: "70.0%" },
      { text: "84.6%", isCorrect: true },
      { text: "95.2%" }
    ],
    correctAnswer: 2,
    explanation: "* From the equation, $1\\text{ mol Mg(OH)}_2$ neutralises $2\\text{ mol HCl}$.\n* Moles of $\\text{Mg(OH)}_2 = \\frac{0.035}{2} = 0.0175\\text{ mol}$.\n* Mass of pure $\\text{Mg(OH)}_2 = 0.0175 \\times 58 = 1.015\\text{ g}$.\n* $\\%\\text{ Purity} = \\frac{1.015}{1.20} \\times 100\\% \\approx 84.6\\%$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q14",
    lessonNum: 5,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv3_6-2025",
    question: "An experiment is carried out to determine the concentration of limewater (aqueous calcium hydroxide, $\\text{Ca(OH)}_2$). $250\\text{ cm}^3$ of limewater is neutralised by $20.0\\text{ cm}^3$ of $0.050\\text{ mol/dm}^3$ hydrochloric acid:\n$$\\text{Ca(OH)}_2 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + 2\\text{H}_2\\text{O}$$\nWhat is the concentration of the limewater in $\\text{mol/dm}^3$?",
    options: [
      { text: "$0.0010\\text{ mol/dm}^3$" },
      { text: "$0.0020\\text{ mol/dm}^3$", isCorrect: true },
      { text: "$0.0040\\text{ mol/dm}^3$" },
      { text: "$0.0080\\text{ mol/dm}^3$" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of HCl used $= 0.050 \\times \\frac{20.0}{1000} = 0.0010\\text{ mol}$.\n* Stoichiometry: $2\\text{ mol HCl} : 1\\text{ mol Ca(OH)}_2$.\n* Moles of $\\text{Ca(OH)}_2 = \\frac{0.0010}{2} = 0.00050\\text{ mol}$.\n* Volume of limewater $= 250\\text{ cm}^3 = 0.250\\text{ dm}^3$.\n* $\\text{Concentration} = \\frac{0.00050}{0.250} = 0.0020\\text{ mol/dm}^3$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q20",
    lessonNum: 5,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

