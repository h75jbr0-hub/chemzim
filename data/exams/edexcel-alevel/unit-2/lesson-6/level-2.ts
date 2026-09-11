import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u2_l6_lv2_1-2026",
    question: "A reaction between 5.00 g of calcium carbonate and excess hydrochloric acid produced 0.950 dm³ of carbon dioxide at r.t.p. What is the percentage yield? (Mᵣ: CaCO₃ = 100.1; molar gas volume = 24.0 dm³ mol⁻¹)\nCaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂",
    options: [
      { text: "79.2%", isCorrect: true },
      { text: "85.4%" },
      { text: "19.0%" },
      { text: "95.0%" }
    ],
    correctAnswer: 0,
    explanation: "* Theoretical moles of $\\\\text{CaCO}_3 = \\\\frac{5.00}{100.1} = 0.04995\\\\text{ mol}$.\n* Theoretical volume of $\\\\text{CO}_2 = 0.04995 \\\\times 24.0 = 1.199\\\\text{ dm}^3$.\n* $\\\\text{\\% Yield} = \\\\frac{\\\\text{Actual volume}}{\\\\text{Theoretical volume}} \\\\times 100 = \\\\frac{0.950}{1.199} \\\\times 100 = 79.2\\%$",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q35",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv2_2-2026",
    question: "What is the atom economy for the production of ethanol via fermentation compared to direct hydration of ethene?\nReaction 1 (Fermentation): C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂\nReaction 2 (Hydration): C₂H₄ + H₂O → C₂H₅OH\n(Mᵣ: C₆H₁₂O₆ = 180, C₂H₅OH = 46, CO₂ = 44)",
    options: [
      { text: "Reaction 1 is 51.1%; Reaction 2 is 100%", isCorrect: true },
      { text: "Reaction 1 is 25.6%; Reaction 2 is 100%" },
      { text: "Reaction 1 is 100%; Reaction 2 is 51.1%" },
      { text: "Both reactions have 100% atom economy" }
    ],
    correctAnswer: 0,
    explanation: "* For fermentation: $\\\\text{Atom economy} = \\\\frac{2 \\\\times 46}{180} \\\\times 100 = \\\\frac{92}{180} \\\\times 100 = 51.1\\%$.\n* For hydration: all reactant atoms end up in the single desired product (addition reaction), giving $100\\%$ atom economy.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q35",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv2_3-2026",
    question: "A sample of 0.840 g of an unknown gas occupies 450 cm³ at 100 kPa and 300 K. What is the relative molecular mass (Mᵣ) of the gas? (R = 8.314 J mol⁻¹ K⁻¹)",
    options: [
      { text: "46.6", isCorrect: true },
      { text: "23.3" },
      { text: "93.1" },
      { text: "55.8" }
    ],
    correctAnswer: 0,
    explanation: "* Convert units: $p = 100\\\\text{ kPa} = 100,000\\\\text{ Pa}$; $V = 450\\\\text{ cm}^3 = 450 \\\\times 10^{-6}\\\\text{ m}^3 = 4.50 \\\\times 10^{-4}\\\\text{ m}^3$.\n* $n = \\\\frac{pV}{RT} = \\\\frac{100,000 \\\\times 4.50 \\\\times 10^{-4}}{8.314 \\\\times 300} = \\\\frac{45}{2494.2} = 0.01804\\\\text{ mol}$.\n* $M_r = \\\\frac{m}{n} = \\\\frac{0.840}{0.01804} = 46.6$",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q27",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv2_4-2026",
    question: "50.0 cm³ of 0.100 mol dm⁻³ AgNO₃ is mixed with 30.0 cm³ of 0.200 mol dm⁻³ CaCl₂. What mass of AgCl precipitate is formed? (Aᵣ: Ag = 107.9, Cl = 35.5)\n2AgNO₃(aq) + CaCl₂(aq) → 2AgCl(s) + Ca(NO₃)₂(aq)",
    options: [
      { text: "0.717 g", isCorrect: true },
      { text: "1.72 g" },
      { text: "0.359 g" },
      { text: "1.43 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of $\\\\text{Ag}^+ = 0.0500 \\\\times 0.100 = 0.00500\\\\text{ mol}$.\n* Moles of $\\\\text{Cl}^- = 2 \\\\times (0.0300 \\\\times 0.200) = 0.0120\\\\text{ mol}$.\n* $\\\\text{Ag}^+$ is the limiting reagent ($0.00500\\\\text{ mol}$).\n* Mass of $\\\\text{AgCl} = 0.00500 \\\\times (107.9 + 35.5) = 0.00500 \\\\times 143.4 = 0.717\\\\text{ g}$",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q36",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv2_5-2026",
    question: "20.0 cm³ of a gaseous hydrocarbon CₓHᵧ requires 100 cm³ of oxygen gas for complete combustion. After the reaction and cooling to room temperature, 60.0 cm³ of carbon dioxide gas remains. What is the formula of the hydrocarbon?\nCₓHᵧ + (x + y/4) O₂ → x CO₂ + y/2 H₂O",
    options: [
      { text: "C₃H₈ (propane)", isCorrect: true },
      { text: "C₂H₄ (ethene)" },
      { text: "C₃H₆ (propene)" },
      { text: "C₄H₁₀ (butane)" }
    ],
    correctAnswer: 0,
    explanation: "* By Gay-Lussac's Law of combining gas volumes at constant $T$ and $P$, volumes are proportional to stoichiometric coefficients.\n* Ratio $\\\\text{hydrocarbon} : \\\\text{CO}_2 = 20.0 : 60.0 = 1 : 3 \\\\implies x = 3$.\n* Ratio $\\\\text{hydrocarbon} : \\\\text{O}_2 = 20.0 : 100 = 1 : 5 \\\\implies x + \\\\frac{y}{4} = 5$.\n* $3 + \\\\frac{y}{4} = 5 \\\\implies \\\\frac{y}{4} = 2 \\\\implies y = 8 \\\\implies \\\\text{C}_3\\\\text{H}_8$",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q36",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv2_6-2026",
    question: "A student dissolves 1.50 g of impure sodium hydroxide in water and dilutes to 250 cm³. A 25.0 cm³ portion neutralises exactly 22.5 cm³ of 0.120 mol dm⁻³ hydrochloric acid. What is the percentage purity of the original sample? (Mᵣ: NaOH = 40.0)\nNaOH + HCl → NaCl + H₂O",
    options: [
      { text: "72.0%", isCorrect: true },
      { text: "80.0%" },
      { text: "64.8%" },
      { text: "90.0%" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of $\\\\text{HCl} = 0.0225 \\\\times 0.120 = 0.00270\\\\text{ mol}$.\n* Moles of $\\\\text{NaOH}$ in $25.0\\\\text{ cm}^3 = 0.00270\\\\text{ mol}$.\n* Moles of $\\\\text{NaOH}$ in total $250\\\\text{ cm}^3 = 0.00270 \\\\times 10 = 0.0270\\\\text{ mol}$.\n* Pure mass of $\\\\text{NaOH} = 0.0270 \\\\times 40.0 = 1.08\\\\text{ g}$.\n* $\\\\text{\\% Purity} = \\\\frac{1.08}{1.50} \\\\times 100 = 72.0\\%$",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q28",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv2_7-2026",
    question: "A balance has an uncertainty of ±0.005 g. A student weighs a crucible by difference:\nMass of empty crucible = 14.320 g\nMass of crucible + residue = 15.180 g\nWhat is the percentage uncertainty in the mass of the residue?",
    options: [
      { text: "1.16%", isCorrect: true },
      { text: "0.58%" },
      { text: "0.06%" },
      { text: "2.32%" }
    ],
    correctAnswer: 0,
    explanation: "* Mass of residue $= 15.180 - 14.320 = 0.860\\\\text{ g}$.\n* Weighing by difference involves two independent readings, so total absolute uncertainty $= 2 \\\\times 0.005 = \\\\pm 0.010\\\\text{ g}$.\n* $\\\\text{\\% Uncertainty} = \\\\frac{0.010}{0.860} \\\\times 100 = 1.16\\%$",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q37",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv2_8-2026",
    question: "What volume of concentrated hydrochloric acid (11.8 mol dm⁻³) must be diluted with water to prepare 500 cm³ of a 0.250 mol dm⁻³ standard solution?",
    options: [
      { text: "10.6 cm³", isCorrect: true },
      { text: "21.2 cm³" },
      { text: "5.30 cm³" },
      { text: "23.6 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Using the dilution formula $c_1 V_1 = c_2 V_2$:\n* $11.8 \\\\times V_1 = 0.250 \\\\times 500$.\n* $V_1 = \\\\frac{125}{11.8} = 10.6\\\\text{ cm}^3$",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q37",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv2_9-2026",
    question: "How many water molecules are present in a 50.0 cm³ beaker filled with pure water (density = 1.00 g cm⁻³)? (Mᵣ: H₂O = 18.0; L = 6.02 × 10²³ mol⁻¹)",
    options: [
      { text: "1.67 × 10²⁴ molecules", isCorrect: true },
      { text: "3.01 × 10²⁵ molecules" },
      { text: "1.67 × 10²³ molecules" },
      { text: "6.02 × 10²⁴ molecules" }
    ],
    correctAnswer: 0,
    explanation: "* Mass of water $= 50.0\\\\text{ cm}^3 \\\\times 1.00\\\\text{ g cm}^{-3} = 50.0\\\\text{ g}$.\n* Moles of water $= \\\\frac{50.0}{18.0} = 2.778\\\\text{ mol}$.\n* Number of molecules $= 2.778 \\\\times (6.02 \\\\times 10^{23}) = 1.67 \\\\times 10^{24}$ molecules",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q29",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv2_10-2026",
    question: "A compound contains 52.2% carbon, 13.0% hydrogen, and 34.8% oxygen by mass. What is its empirical formula? (Aᵣ: C = 12.0, H = 1.0, O = 16.0)",
    options: [
      { text: "C₂H₆O", isCorrect: true },
      { text: "CH₃O" },
      { text: "C₂H₄O" },
      { text: "C₃H₈O₂" }
    ],
    correctAnswer: 0,
    explanation: "* Moles in $100\\\\text{ g}$: $\\\\text{C} = \\\\frac{52.2}{12.0} = 4.35$; $\\\\text{H} = \\\\frac{13.0}{1.0} = 13.0$; $\\\\text{O} = \\\\frac{34.8}{16.0} = 2.175$.\n* Divide each by the smallest ($2.175$):\n  * $\\\\text{C} = \\\\frac{4.35}{2.175} = 2$\n  * $\\\\text{H} = \\\\frac{13.0}{2.175} = 6$\n  * $\\\\text{O} = \\\\frac{2.175}{2.175} = 1$\n* Empirical formula is $\\\\text{C}_2\\\\text{H}_6\\\\text{O}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q38",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv2_11-2026",
    question: "In an experiment, 2.40 g of magnesium (Aᵣ = 24.3) reacts with 100 cm³ of 1.50 mol dm⁻³ sulfuric acid. What is the limiting reagent and the volume of H₂ gas produced at r.t.p.? (Molar gas volume = 24.0 dm³ mol⁻¹)\nMg + H₂SO₄ → MgSO₄ + H₂",
    options: [
      { text: "Mg is limiting; 2.37 dm³ of H₂ is produced", isCorrect: true },
      { text: "H₂SO₄ is limiting; 3.60 dm³ of H₂ is produced" },
      { text: "Mg is limiting; 3.60 dm³ of H₂ is produced" },
      { text: "Neither is limiting; 2.40 dm³ of H₂ is produced" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of $\\\\text{Mg} = \\\\frac{2.40}{24.3} = 0.09877\\\\text{ mol}$.\n* Moles of $\\\\text{H}_2\\\\text{SO}_4 = 0.100 \\\\times 1.50 = 0.150\\\\text{ mol}$.\n* $\\\\text{Mg}$ is present in smaller stoichiometric quantity and is limiting.\n* Volume of $\\\\text{H}_2 = 0.09877 \\\\times 24.0 = 2.37\\\\text{ dm}^3$",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q38",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv2_12-2026",
    question: "When 4.90 g of potassium chlorate(V) is heated, it decomposes completely according to:\n2KClO₃(s) → 2KCl(s) + 3O₂(g)\nWhat volume of oxygen gas is collected at 293 K and 102 kPa? (Mᵣ: KClO₃ = 122.6; R = 8.314 J mol⁻¹ K⁻¹)",
    options: [
      { text: "1.43 dm³", isCorrect: true },
      { text: "0.95 dm³" },
      { text: "2.86 dm³" },
      { text: "14.3 dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of $\\\\text{KClO}_3 = \\\\frac{4.90}{122.6} = 0.03997\\\\text{ mol}$.\n* Moles of $\\\\text{O}_2 = 0.03997 \\\\times \\\\frac{3}{2} = 0.05995\\\\text{ mol}$.\n* $V = \\\\frac{nRT}{p} = \\\\frac{0.05995 \\\\times 8.314 \\\\times 293}{102,000} = 1.43 \\\\times 10^{-3}\\\\text{ m}^3 = 1.43\\\\text{ dm}^3$",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q30",
    createdAt: "2026-09-01T10:00:00Z"
  }
];
