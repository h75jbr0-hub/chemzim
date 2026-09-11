import { Question } from '../../../types';

// Strong and Weak Acids and Bases - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u7_l5_lv3_1-2026",
    question: "Which statement correctly distinguishes between the 'strength' and 'concentration' of an acidic solution?",
    options: [
      { text: "Strength refers to the fraction of acid molecules dissociated into ions in water, while concentration refers to the amount of acid dissolved per unit volume", isCorrect: true },
      { text: "Strength is measured in mol/dm³, while concentration is measured on the pH scale" },
      { text: "A concentrated acid is always a strong acid" },
      { text: "A dilute acid always has a higher pH than a weak acid" }
    ],
    correctAnswer: 0,
    explanation: "* Acid strength is an intrinsic property describing the degree of ionisation in water (strong = complete, weak = partial).\n* Concentration describes the amount of acid solute dissolved in a given volume of solution (concentrated = many moles/dm³, dilute = few moles/dm³).\n* For instance, 10 mol/dm³ ethanoic acid is a concentrated weak acid, while 0.001 mol/dm³ HCl is a dilute strong acid.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q246",
    createdAt: "2026-08-21T07:30:00Z"
  },
  {
    id: "ex_ci_u7_l5_lv3_2-2026",
    question: "In the reversible proton-transfer reaction: NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)\nWhich species act as Brønsted–Lowry bases in the forward and reverse directions, respectively?",
    options: [
      { text: "Forward base: NH₃; Reverse base: OH⁻", isCorrect: true },
      { text: "Forward base: H₂O; Reverse base: NH₄⁺" },
      { text: "Forward base: NH₃; Reverse base: NH₄⁺" },
      { text: "Forward base: H₂O; Reverse base: OH⁻" }
    ],
    correctAnswer: 0,
    explanation: "* In the forward reaction, NH₃ accepts a proton from H₂O to form NH₄⁺ (NH₃ is the base).\n* In the reverse reaction, OH⁻ accepts a proton from NH₄⁺ to reform H₂O (OH⁻ is the base).",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q247",
    createdAt: "2026-08-21T07:35:00Z"
  },
  {
    id: "ex_ci_u7_l5_lv3_3-2026",
    question: "A 20.0 cm³ sample of vinegar containing ethanoic acid (CH₃COOH) requires 24.0 cm³ of 0.50 mol/dm³ sodium hydroxide (NaOH) for complete neutralisation.\nWhat is the concentration of ethanoic acid in the vinegar in g/dm³?\n(Given: $M_r$ of CH₃COOH = 60)",
    options: [
      { text: "36.0 g/dm³", isCorrect: true },
      { text: "0.60 g/dm³" },
      { text: "18.0 g/dm³" },
      { text: "72.0 g/dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Equation: CH₃COOH + NaOH → CH₃COONa + H₂O.\n* Moles of NaOH $= 0.024 \\times 0.50 = 0.012\\text{ mol}$.\n* Moles of CH₃COOH $= 0.012\\text{ mol}$.\n* Concentration of CH₃COOH in mol/dm³ $= 0.012 / 0.020 = 0.60\\text{ mol/dm}^3$.\n* Concentration in g/dm³ $= 0.60 \\times 60 = 36.0\\text{ g/dm}^3$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q248",
    createdAt: "2026-08-21T07:40:00Z"
  },
  {
    id: "ex_ci_u7_l5_lv3_4-2023",
    question: "A 25.0 cm³ sample of aqueous sodium hydroxide required 21.50 cm³ of 0.100 mol/dm³ sulfuric acid for complete neutralisation in a titration:\n2NaOH(aq) + H₂SO₄(aq) → Na₂SO₄(aq) + 2H₂O(l)\nWhat was the concentration of the sodium hydroxide solution in mol/dm³?",
    options: [
      { text: "0.172 mol/dm³", isCorrect: true },
      { text: "0.086 mol/dm³" },
      { text: "0.043 mol/dm³" },
      { text: "0.344 mol/dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of $H_2SO_4 = \\frac{21.50}{1000} \\times 0.100 = 0.00215\\text{ mol}$.\n* From stoichiometry, 1 mole of $H_2SO_4$ reacts with 2 moles of $NaOH$.\n* Moles of $NaOH = 0.00215 \\times 2 = 0.00430\\text{ mol}$.\n* Concentration of $NaOH = \\frac{0.00430}{0.0250} = 0.172\\text{ mol/dm}^3$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q36",
    lessonNum: 5,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l5_lv3_5-2024",
    question: "Consider the hydrogen carbonate equilibrium in water:\nHCO₃⁻(aq) + OH⁻(aq) ⇌ CO₃²⁻(aq) + H₂O(l)\nWhich of the following describes the role of the hydrogen carbonate ion (HCO₃⁻) in the forward reaction?",
    options: [
      { text: "It donates a proton to OH⁻ and therefore acts as a Brønsted–Lowry acid", isCorrect: true },
      { text: "It accepts a proton and acts as a Brønsted–Lowry base" },
      { text: "It acts as a reducing agent by gaining electrons" },
      { text: "It acts as an oxidising agent by losing oxygen" }
    ],
    correctAnswer: 0,
    explanation: "* In the forward reaction, $HCO_3^-$ loses a hydrogen ion ($H^+$) to $OH^-$, forming $CO_3^{2-}$ and $H_2O$.\n* As a proton donor, $HCO_3^-$ is functioning as a Brønsted–Lowry acid.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q36",
    lessonNum: 5,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l5_lv3_6-2025",
    question: "A student adds 0.1 mol/dm³ sodium hydroxide dropwise to 25 cm³ of 0.1 mol/dm³ ethanoic acid (CH₃COOH) while recording the pH. Why is the pH at the equivalence point slightly alkaline (pH ≈ 8.8) rather than neutral (pH = 7.0)?",
    options: [
      { text: "The ethanoate ion (CH₃COO⁻) hydrolyses in water to generate hydroxide ions (OH⁻)", isCorrect: true },
      { text: "Ethanoic acid is a stronger acid than hydrochloric acid" },
      { text: "Sodium ions react with water to form excess hydrogen ions" },
      { text: "Phenolphthalein indicator neutralises the acid" }
    ],
    correctAnswer: 0,
    explanation: "* At the equivalence point of a weak acid - strong base titration, sodium ethanoate ($CH_3COONa$) is formed.\n* Ethanoate ions are conjugate bases of a weak acid and react with water in a salt hydrolysis equilibrium: $CH_3COO^- + H_2O \\rightleftharpoons CH_3COOH + OH^-$.\n* The resulting production of $OH^-$ ions makes the solution weakly alkaline (pH ~ 8.8).",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q36",
    lessonNum: 5,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

