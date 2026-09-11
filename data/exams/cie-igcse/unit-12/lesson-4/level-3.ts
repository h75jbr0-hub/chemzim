import { Question } from '../../../types';

// Instrumental Analysis - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u12_l4_lv3_1-2026",
    question: "A student performs a titration to find the concentration of a sulfuric acid solution. The student uses a pipette to measure 25.0 cm³ of sodium hydroxide into a flask, but the pipette has a chip at the tip that retains a small drop of liquid.\nWhat is the effect of this error on the calculated concentration of the sulfuric acid?",
    options: [
      { text: "The calculated concentration of sulfuric acid will be lower than the true value, because less acid is needed to neutralise the smaller volume of sodium hydroxide that was delivered", isCorrect: true },
      { text: "The calculated concentration of sulfuric acid will be higher than the true value, because more acid is needed to neutralise the sodium hydroxide" },
      { text: "The calculated concentration will be unaffected because the indicator only detects pH changes" },
      { text: "The titration volume will double because the sodium hydroxide concentration increases" }
    ],
    correctAnswer: 0,
    explanation: "* The chip retains sodium hydroxide, so the actual volume delivered to the flask is less than 25.0 cm³.\n* Less acid is required to reach the endpoint.\n* Since the calculation assumes exactly 25.0 cm³ of NaOH was neutralised by this smaller volume of acid, the calculated concentration of the acid is underestimated (lower).",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q485",
    createdAt: "2026-08-22T08:20:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv3_2-2026",
    question: "A sample of water is suspected to contain tiny traces of copper(II) ions (Cu²⁺) and sodium ions (Na⁺). Why is flame emission spectroscopy preferred over adding aqueous sodium hydroxide to identify the copper(II) ions in this sample?",
    options: [
      { text: "The concentration of copper(II) ions may be below the detection limit of the precipitation reaction, whereas spectroscopy is sensitive enough to detect trace concentrations", isCorrect: true },
      { text: "Sodium hydroxide would react violently with the sodium ions, masking the copper precipitate" },
      { text: "Flame emission spectroscopy completely destroys the sodium ions, allowing only copper to be observed" },
      { text: "Precipitation reactions only work for transition metals in their elemental state" }
    ],
    correctAnswer: 0,
    explanation: "* Trace amounts of metal ions (very low concentrations) will not produce a visible precipitate with sodium hydroxide.\n* Flame emission spectroscopy has a very low detection limit (high sensitivity), allowing it to identify trace concentrations of multiple ions simultaneously by their emission spectra.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q486",
    createdAt: "2026-08-22T08:25:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv3_3-2026",
    question: "In an experiment to determine the formula of a metal oxide, a student records the following mass measurements (each with uncertainty ±0.01 g):\n- Mass of crucible = 20.00 g\n- Mass of crucible + metal = 22.50 g\n- Mass of crucible + metal oxide = 22.90 g\nWhat is the absolute uncertainty in the calculated mass of oxygen that reacted with the metal?",
    options: [
      { text: "±0.02 g", isCorrect: true },
      { text: "±0.01 g" },
      { text: "±0.03 g" },
      { text: "±0.00 g" }
    ],
    correctAnswer: 0,
    explanation: "* The mass of oxygen = (crucible + metal oxide) − (crucible + metal) = 22.90 − 22.50 = 0.40 g.\n* When subtracting two measurements, their absolute uncertainties add: 0.01 + 0.01 = ±0.02 g.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q487",
    createdAt: "2026-08-22T08:30:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv3_4-2026",
    question: "A student is measuring the volume of oxygen gas collected over water in an inverted measuring cylinder. If the water level inside the cylinder is HIGHER than the water level in the trough when the student reads the volume, how does this error affect the recorded gas volume?",
    options: [
      { text: "The recorded volume is an overestimate, because the gas inside the cylinder is at below-atmospheric pressure and has expanded to fill a larger volume than it would at atmospheric pressure", isCorrect: true },
      { text: "The water levels do not affect the gas volume because water is incompressible" },
      { text: "A higher water level inside the cylinder increases gravity acting on the gas, compressing it" },
      { text: "The gas will dissolve in the water at a faster rate, reducing the measured volume to zero" }
    ],
    correctAnswer: 0,
    explanation: "* When the water level inside the cylinder is higher than outside, the pressure inside is less than atmospheric pressure.\n* Since pressure is lower, the gas expands (Boyle's Law: P₁V₁ = P₂V₂), causing the student to record a volume that is larger than the true value at atmospheric pressure.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q488",
    createdAt: "2026-08-22T08:35:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv3_5-2023",
    question: "A student performs a titration experiment to find the concentration of an unknown sodium hydroxide solution using standard 0.100 mol/dm³ hydrochloric acid.\nThe burette reading was recorded at the top of the liquid meniscus instead of the bottom for both the initial and final readings.\nWhat effect will this error have on the calculated concentration of the sodium hydroxide?",
    options: [
      { text: "No effect on the calculated concentration, because the systematic error cancels out when calculating the titre volume", isCorrect: true },
      { text: "The calculated concentration will be significantly too high" },
      { text: "The calculated concentration will be significantly too low" },
      { text: "The titre volume will be double the true value" }
    ],
    correctAnswer: 0,
    explanation: "* Because the student consistently reads the top of the meniscus for BOTH the initial and final burette readings, the constant offset $\\Delta V$ cancels out when taking the difference:\n  $$\\text{Titre} = (V_{\\text{final}} + c) - (V_{\\text{initial}} + c) = V_{\\text{final}} - V_{\\text{initial}}$$\n* Therefore, the titre volume and the calculated concentration are completely unaffected.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 4,
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q38",
    createdAt: "2023-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv3_6-2024",
    question: "A chromatogram is obtained for a mixture of amino acids using a paper chromatography setup. Spot P has an $R_f$ value of 0.45, and Spot Q has an $R_f$ value of 0.72 in solvent 1.\nWhich statement correctly explains why Spot Q has a higher $R_f$ value than Spot P in solvent 1?",
    options: [
      { text: "Spot Q has a greater solubility in mobile solvent 1 and a weaker attraction to the stationary paper phase than Spot P", isCorrect: true },
      { text: "Spot Q has a higher relative molecular mass than Spot P" },
      { text: "Spot Q reacted chemically with the cellulose paper fibers" },
      { text: "Spot P evaporates more quickly than Spot Q during the run" }
    ],
    correctAnswer: 0,
    explanation: "* In chromatography, a substance travels further (higher $R_f$) if it is more soluble in the mobile phase (the solvent) and has less affinity/adsorption to the stationary phase (the paper).",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 4,
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q37",
    createdAt: "2024-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv3_7-2025",
    question: "A student determines the percentage purity of a sample of limestone ($CaCO_3$) by adding excess dilute hydrochloric acid and measuring the loss in mass as $CO_2$ escapes.\nWhich precaution ensures that the measured loss in mass is due ONLY to carbon dioxide escaping?",
    options: [
      { text: "Placing a cotton wool plug in the neck of the conical flask to prevent acid spray from escaping while letting gas pass through", isCorrect: true },
      { text: "Heating the flask strongly with a Bunsen burner during the reaction" },
      { text: "Leaving the flask open to allow ambient air to enter and replace the gas" },
      { text: "Using concentrated nitric acid instead of dilute hydrochloric acid" }
    ],
    correctAnswer: 0,
    explanation: "* Rapid effervescence generates tiny droplets of acid spray.\n* A loose cotton wool plug allows gaseous $CO_2$ to freely escape while trapping liquid acid droplets, ensuring the mass lost is solely due to carbon dioxide.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 4,
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q38",
    createdAt: "2025-06-01T09:00:00Z"
  }
];
