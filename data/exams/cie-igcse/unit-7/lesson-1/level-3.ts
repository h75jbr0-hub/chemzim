import { Question } from '../../../types';

// Acids and Bases - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u7_l1_lv3_1-2026",
    question: "What is the simplest ionic equation representing the neutralisation of any strong aqueous acid by a strong aqueous alkali?",
    options: [
      { text: "H⁺(aq) + OH⁻(aq) → H₂O(l)", isCorrect: true },
      { text: "Na⁺(aq) + Cl⁻(aq) → NaCl(s)" },
      { text: "2H⁺(aq) + O²⁻(s) → H₂O(l)" },
      { text: "H⁺(aq) + H₂O(l) → H₃O⁺(aq)" }
    ],
    correctAnswer: 0,
    explanation: "* In any aqueous neutralization between strong acids and alkalis, the spectator ions (e.g. Na⁺ and Cl⁻) remain dissolved.\n* The only actual chemical change is: H⁺(aq) + OH⁻(aq) → H₂O(l).",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q208",
    createdAt: "2026-08-21T03:35:00Z"
  },
  {
    id: "ex_ci_u7_l1_lv3_2-2026",
    question: "A 25.0 cm³ sample of 0.100 mol/dm³ sulfuric acid (H₂SO₄) is titrated with 0.100 mol/dm³ potassium hydroxide (KOH).\nWhat volume of potassium hydroxide is required to reach the complete neutralisation endpoint?",
    options: [
      { text: "50.0 cm³", isCorrect: true },
      { text: "25.0 cm³" },
      { text: "12.5 cm³" },
      { text: "100.0 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* H₂SO₄ is a diprotic (dibasic) acid: H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O.\n* Moles of H₂SO₄ $= 0.025 \\times 0.100 = 0.0025\\text{ mol}$.\n* Moles of KOH needed $= 2 \\times 0.0025 = 0.0050\\text{ mol}$.\n* Volume of KOH $= 0.0050 / 0.100 = 0.050\\text{ dm}^3 = 50.0\\text{ cm}^3$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q209",
    createdAt: "2026-08-21T03:40:00Z"
  },
  {
    id: "ex_ci_u7_l1_lv3_3-2026",
    question: "During a pH titration of 25 cm³ of 0.1 mol/dm³ HCl with 0.1 mol/dm³ NaOH:\nWhich statement correctly describes the change in pH around the equivalence point (25 cm³ of NaOH added)?",
    options: [
      { text: "There is a sharp, vertical rise in pH from approximately pH 3 to pH 11 with the addition of a single drop of NaOH", isCorrect: true },
      { text: "The pH increases uniformly in a straight line from pH 1 to pH 14" },
      { text: "The pH stays constant at pH 7 throughout the entire addition" },
      { text: "The pH suddenly drops from pH 12 to pH 2" }
    ],
    correctAnswer: 0,
    explanation: "* For strong acid - strong alkali titrations, the pH curve shows a steep vertical inflection near the equivalence point (roughly pH 3 to pH 11).\n* Because the pH is logarithmic, a tiny addition of alkali causes a massive change in hydrogen ion concentration.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q210",
    createdAt: "2026-08-21T03:45:00Z"
  },
  {
    id: "ex_ci_u7_l1_lv3_4-2023",
    question: "A student added excess solid basic copper(II) oxide to warm dilute sulfuric acid until no more would dissolve. After filtering the excess oxide, what is the next correct step to obtain pure, dry crystals of hydrated copper(II) sulfate?",
    options: [
      { text: "Heat the filtrate until crystallization point, cool to crystallize, filter crystals, and dry between filter papers", isCorrect: true },
      { text: "Evaporate the solution completely to dryness in an evaporating basin over strong heat" },
      { text: "Distil the solution to collect dry anhydrous copper sulfate powder" },
      { text: "Add excess ethanol to precipitate copper oxide" }
    ],
    correctAnswer: 0,
    explanation: "* Evaporating to complete dryness would decompose the hydrated crystals into anhydrous white powder.\n* The solution is gently heated to the crystallization point (tested on a cold glass rod), cooled slowly to form large blue crystals, which are filtered and patted dry between filter papers.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q32",
    lessonNum: 1,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l1_lv3_5-2024",
    question: "Which of the following explains why universal indicator is NOT suitable as an indicator for finding the precise end-point in an acid-base titration?",
    options: [
      { text: "Universal indicator undergoes a continuous gradual spectrum of colour changes rather than a sharp, distinct single-drop colour change", isCorrect: true },
      { text: "Universal indicator reacts chemically with acids to form toxic gases" },
      { text: "Universal indicator only changes colour at exactly 100 °C" },
      { text: "Universal indicator bleaches and becomes permanently colourless in neutral water" }
    ],
    correctAnswer: 0,
    explanation: "* Acid-base titrations require single indicators (like phenolphthalein or methyl orange) that provide an abrupt, sharp colour change with a single drop of titrant.\n* Universal indicator is a mixture of indicators showing a smooth, continuous spectrum of colours across a wide pH range, making exact end-point identification difficult.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q32",
    lessonNum: 1,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l1_lv3_6-2025",
    question: "Equal volumes of 0.1 mol/dm³ hydrochloric acid (HCl) and 0.1 mol/dm³ ethanoic acid (CH₃COOH) are compared. Which statement correctly contrasts the two solutions?",
    options: [
      { text: "HCl has a lower pH, higher electrical conductivity, and reacts faster with magnesium, but neutralises the exact same volume of 0.1 mol/dm³ NaOH", isCorrect: true },
      { text: "HCl has a higher pH and requires twice the volume of NaOH to neutralise" },
      { text: "Ethanoic acid has a higher electrical conductivity because it contains more hydrogen ions" },
      { text: "Ethanoic acid neutralises more NaOH because it is an organic molecule" }
    ],
    correctAnswer: 0,
    explanation: "* HCl is a strong acid (completely ionised), so $[H^+]$ is higher, pH is lower, conductivity is greater, and reaction rate is faster.\n* However, both acids are monoprotic and have equal molar concentrations and volumes, so they contain the exact same total number of neutralisable acidic protons and therefore require identical volumes of $NaOH$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q32",
    lessonNum: 1,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

