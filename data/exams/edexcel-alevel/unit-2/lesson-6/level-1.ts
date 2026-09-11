import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u2_l6_lv1_1-2026",
    question: "What is 0.000458 mol dm⁻³ expressed in standard form to three significant figures?",
    options: [
      { text: "4.58 × 10⁻⁴ mol dm⁻³", isCorrect: true },
      { text: "4.58 × 10⁻³ mol dm⁻³" },
      { text: "45.8 × 10⁻⁵ mol dm⁻³" },
      { text: "4.58 × 10⁴ mol dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "* In standard form $A \\\\times 10^n$, the coefficient $A$ satisfies $1 \\\\le A < 10$.\n* Shifting the decimal point four places to the right gives $4.58 \\\\times 10^{-4}$ with 3 significant figures.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q31",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv1_2-2026",
    question: "How many significant figures are in the measurement 0.05020 g?",
    options: [
      { text: "4", isCorrect: true },
      { text: "5" },
      { text: "3" },
      { text: "2" }
    ],
    correctAnswer: 0,
    explanation: "* Leading zeros (0.0...) serve only as decimal place holders and are not significant.\n* The digits '5', '0', '2', and the trailing zero '0' (after the decimal point) are all significant, giving 4 significant figures.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q31",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv1_3-2026",
    question: "What is the molar mass of hydrated copper(II) sulfate, CuSO₄·5H₂O? (Aᵣ: Cu = 63.5, S = 32.1, O = 16.0, H = 1.0)",
    options: [
      { text: "249.6 g mol⁻¹", isCorrect: true },
      { text: "159.6 g mol⁻¹" },
      { text: "177.6 g mol⁻¹" },
      { text: "267.6 g mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r(\\\\text{CuSO}_4) = 63.5 + 32.1 + (4 \\\\times 16.0) = 159.6\\\\text{ g mol}^{-1}$.\n* $M_r(5\\\\text{H}_2\\\\text{O}) = 5 \\\\times (2.0 + 16.0) = 90.0\\\\text{ g mol}^{-1}$.\n* Total molar mass $= 159.6 + 90.0 = 249.6\\\\text{ g mol}^{-1}$",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q23",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv1_4-2026",
    question: "What is the percentage by mass of nitrogen in ammonium nitrate, NH₄NO₃? (Aᵣ: N = 14.0, H = 1.0, O = 16.0)",
    options: [
      { text: "35.0%", isCorrect: true },
      { text: "17.5%" },
      { text: "28.0%" },
      { text: "42.5%" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r(\\\\text{NH}_4\\\\text{NO}_3) = (2 \\\\times 14.0) + (4 \\\\times 1.0) + (3 \\\\times 16.0) = 28.0 + 4.0 + 48.0 = 80.0\\\\text{ g mol}^{-1}$.\n* Total mass of nitrogen $= 28.0\\\\text{ g mol}^{-1}$.\n* $\\\\text{\\% N} = \\\\frac{28.0}{80.0} \\\\times 100 = 35.0\\%$",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q32",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv1_5-2026",
    question: "How many moles of solute are present in 250 cm³ of 0.200 mol dm⁻³ hydrochloric acid?",
    options: [
      { text: "0.0500 mol", isCorrect: true },
      { text: "0.500 mol" },
      { text: "50.0 mol" },
      { text: "0.0250 mol" }
    ],
    correctAnswer: 0,
    explanation: "* First convert volume from $\\\\text{cm}^3$ to $\\\\text{dm}^3$: $V = \\\\frac{250}{1000} = 0.250\\\\text{ dm}^3$.\n* $n = c \\\\times V = 0.200\\\\text{ mol dm}^{-3} \\\\times 0.250\\\\text{ dm}^3 = 0.0500\\\\text{ mol}$",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q32",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv1_6-2026",
    question: "What volume does 0.125 mol of oxygen gas occupy at room temperature and pressure (r.t.p., molar gas volume = 24.0 dm³ mol⁻¹)?",
    options: [
      { text: "3.00 dm³", isCorrect: true },
      { text: "0.300 dm³" },
      { text: "192 dm³" },
      { text: "1.50 dm³" }
    ],
    correctAnswer: 0,
    explanation: "* $V = n \\\\times V_m = 0.125\\\\text{ mol} \\\\times 24.0\\\\text{ dm}^3\\\\text{ mol}^{-1} = 3.00\\\\text{ dm}^3$.\n* In $\\\\text{cm}^3$, this would be $3000\\\\text{ cm}^3$",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q24",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv1_7-2026",
    question: "What is the concentration in g dm⁻³ of a 0.050 mol dm⁻³ solution of sodium hydroxide (NaOH)? (Mᵣ: NaOH = 40.0)",
    options: [
      { text: "2.00 g dm⁻³", isCorrect: true },
      { text: "8.00 g dm⁻³" },
      { text: "0.20 g dm⁻³" },
      { text: "800 g dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "* $\\\\text{Concentration (g dm}^{-3}\\\\text{)} = \\\\text{concentration (mol dm}^{-3}\\\\text{)} \\\\times M_r$.\n* $\\\\text{Concentration} = 0.050\\\\text{ mol dm}^{-3} \\\\times 40.0\\\\text{ g mol}^{-1} = 2.00\\\\text{ g dm}^{-3}$",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q33",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv1_8-2026",
    question: "A compound has an empirical formula of CH₂ and a relative molecular mass (Mᵣ) of 84.0. What is its molecular formula? (Aᵣ: C = 12.0, H = 1.0)",
    options: [
      { text: "C₆H₁₂", isCorrect: true },
      { text: "C₄H₈" },
      { text: "C₅H₁₀" },
      { text: "C₇H₁₄" }
    ],
    correctAnswer: 0,
    explanation: "* Empirical formula mass of $\\\\text{CH}_2 = 12.0 + 2.0 = 14.0\\\\text{ g mol}^{-1}$.\n* Multiple factor $= \\\\frac{M_r}{\\\\text{Empirical mass}} = \\\\frac{84.0}{14.0} = 6$.\n* Molecular formula $= (\\\\text{CH}_2)_6 = \\\\text{C}_6\\\\text{H}_{12}$",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q33",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv1_9-2026",
    question: "When performing the calculation (12.45 g − 12.21 g) / 15.0 cm³, how many significant figures should be quoted in the final density value?",
    options: [
      { text: "2 significant figures", isCorrect: true },
      { text: "4 significant figures" },
      { text: "3 significant figures" },
      { text: "1 significant figure" }
    ],
    correctAnswer: 0,
    explanation: "* Subtraction rule: $12.45 - 12.21 = 0.24\\\\text{ g}$ (accurate to 2 decimal places, giving 2 significant figures).\n* Division rule: $\\\\frac{0.24\\\\text{ (2 s.f.)}}{15.0\\\\text{ (3 s.f.)}} = 0.016\\\\text{ g cm}^{-3}$, which is limited by the least precise factor (2 significant figures).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q25",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv1_10-2026",
    question: "What is the total number of ions present in 0.100 mol of magnesium chloride, MgCl₂? (Avogadro constant L = 6.02 × 10²³ mol⁻¹)",
    options: [
      { text: "1.81 × 10²³ ions", isCorrect: true },
      { text: "6.02 × 10²² ions" },
      { text: "1.20 × 10²³ ions" },
      { text: "3.01 × 10²³ ions" }
    ],
    correctAnswer: 0,
    explanation: "* Each formula unit of $\\\\text{MgCl}_2$ dissociates into 3 ions ($1 \\\\text{ Mg}^{2+} + 2 \\\\text{ Cl}^-$).\n* Moles of ions $= 0.100 \\\\times 3 = 0.300\\\\text{ mol}$.\n* Total number of ions $= 0.300 \\\\times (6.02 \\\\times 10^{23}) = 1.81 \\\\times 10^{23}$ ions",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q34",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv1_11-2026",
    question: "What temperature in Kelvin corresponds to 25.0 °C?",
    options: [
      { text: "298.15 K", isCorrect: true },
      { text: "248.15 K" },
      { text: "300.00 K" },
      { text: "273.15 K" }
    ],
    correctAnswer: 0,
    explanation: "* Temperature in Kelvin is given by $T(\\\\text{K}) = \\\\theta(^\\\\circ\\\\text{C}) + 273.15$.\n* $T = 25.0 + 273.15 = 298.15\\\\text{ K}$ (commonly rounded to 298 K)",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q34",
    createdAt: "2026-09-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l6_lv1_12-2026",
    question: "In the ideal gas equation pV = nRT, what are the SI units required for pressure (p) and volume (V)?",
    options: [
      { text: "Pressure in Pa (N m⁻²) and volume in m³", isCorrect: true },
      { text: "Pressure in kPa and volume in dm³" },
      { text: "Pressure in atm and volume in cm³" },
      { text: "Pressure in bar and volume in dm³" }
    ],
    correctAnswer: 0,
    explanation: "* In the SI system, using the gas constant $R = 8.314\\\\text{ J mol}^{-1}\\\\text{ K}^{-1}$, pressure $p$ must be in Pascals ($\\\\text{Pa}$ or $\\\\text{N m}^{-2}$) and volume $V$ must be in cubic metres ($\\\\text{m}^3$).\n* Recall: $1\\\\text{ m}^3 = 1000\\\\text{ dm}^3 = 1,000,000\\\\text{ cm}^3$",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 6,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q26",
    createdAt: "2026-09-01T10:00:00Z"
  }
];
