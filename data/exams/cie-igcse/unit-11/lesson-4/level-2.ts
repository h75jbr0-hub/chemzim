import { Question } from '../../../types';

// Carboxylic Acids - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u11_l4_lv2_1-2026",
    question: "When magnesium ribbon is added to dilute ethanoic acid, slow effervescence of a colourless gas is observed.\nWhat is the balanced chemical equation and name of the salt formed?",
    options: [
      { text: "2CH₃COOH(aq) + Mg(s) → (CH₃COO)₂Mg(aq) + H₂(g)   (Magnesium ethanoate)", isCorrect: true },
      { text: "CH₃COOH(aq) + Mg(s) → CH₃COOMg(aq) + H₂(g)   (Magnesium methanoate)" },
      { text: "2CH₃COOH(aq) + Mg(s) → MgCO₃(s) + C₂H₆(g) + H₂O(l)" },
      { text: "CH₃COOH(aq) + 2Mg(s) → Mg₂C(s) + 2H₂O(l)" }
    ],
    correctAnswer: 0,
    explanation: "* Ethanoic acid behaves as a typical acid: acid + metal → salt + hydrogen gas.\n* Magnesium has a valency of 2+ ($Mg^{2+}$) and ethanoate ion is 1- ($CH_3COO^-$), forming $(CH_3COO)_2Mg$ and $H_2$ gas.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q420",
    createdAt: "2026-08-22T01:15:00Z"
  },
  {
    id: "ex_ci_u11_l4_lv2_2-2026",
    question: "Which observation and equation describe the reaction when solid sodium carbonate is added to dilute ethanoic acid?",
    options: [
      { text: "Effervescence of a gas that turns limewater milky; 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂", isCorrect: true },
      { text: "A white precipitate of sodium metal; CH₃COOH + Na₂CO₃ → Na + CO₂ + H₂O" },
      { text: "Evolution of brown toxic gas; CH₃COOH + Na₂CO₃ → CH₄ + 2NO₂" },
      { text: "No observable reaction occurs" }
    ],
    correctAnswer: 0,
    explanation: "* Acid + carbonate → salt + water + carbon dioxide.\n* CO₂ gas turns limewater milky (forming insoluble $CaCO_3$ precipitate).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q421",
    createdAt: "2026-08-22T01:20:00Z"
  },
  {
    id: "ex_ci_u11_l4_lv2_3-2026",
    question: "How does the electrical conductivity of 1.0 mol/dm³ ethanoic acid compare to that of 1.0 mol/dm³ hydrochloric acid at 25°C?",
    options: [
      { text: "Ethanoic acid has significantly lower electrical conductivity because it only partially ionises into mobile ions, whereas HCl is fully ionised", isCorrect: true },
      { text: "Ethanoic acid has higher electrical conductivity because it contains more hydrogen atoms per molecule" },
      { text: "Both have identical electrical conductivity because they have the same molar concentration" },
      { text: "Ethanoic acid does not conduct electricity at all" }
    ],
    correctAnswer: 0,
    explanation: "* Electrical conductivity depends on the concentration of mobile free ions.\n* HCl is a strong acid that ionises 100% (high [$H^+$] and [$Cl^-$]), while weak ethanoic acid ionises < 1%, resulting in far fewer charge carriers and lower conductivity.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q422",
    createdAt: "2026-08-22T01:25:00Z"
  },
  {
    id: "ex_ci_u11_l4_lv2_4-2023",
    question: "When magnesium metal is added to aqueous ethanoic acid, which salt is formed along with hydrogen gas?",
    options: [
      { text: "Magnesium ethanoate, (CH₃COO)₂Mg", isCorrect: true },
      { text: "Magnesium methanoate, (HCOO)₂Mg" },
      { text: "Magnesium carbonate, MgCO₃" },
      { text: "Magnesium oxide, MgO" }
    ],
    correctAnswer: 0,
    explanation: "* Magnesium reacts with ethanoic acid according to the equation:\n  Mg + 2CH₃COOH → (CH₃COO)₂Mg + H₂.\n* The salt produced is magnesium ethanoate.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q179",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l4_lv2_5-2024",
    question: "What is observed when solid sodium carbonate is added to dilute ethanoic acid?",
    options: [
      { text: "Effervescence of a gas that turns limewater cloudy", isCorrect: true },
      { text: "A blue precipitate forms" },
      { text: "Evolution of brown toxic fumes" },
      { text: "A glowing splint is relit" }
    ],
    correctAnswer: 0,
    explanation: "* Like other acids, ethanoic acid reacts with carbonates to produce carbon dioxide gas:\n  2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂.\n* CO₂ gas turns limewater milky.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q180",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u11_l4_lv2_6-2025",
    question: "Why does 1.0 mol/dm³ hydrochloric acid conduct electricity better than 1.0 mol/dm³ ethanoic acid?",
    options: [
      { text: "Hydrochloric acid is fully ionised, producing a higher concentration of mobile ions", isCorrect: true },
      { text: "Ethanoic acid is an electrical insulator in the liquid state" },
      { text: "Ethanoic acid has a higher concentration of hydrogen ions than hydrochloric acid" },
      { text: "Hydrochloric acid contains metal cations" }
    ],
    correctAnswer: 0,
    explanation: "* HCl is a strong acid that completely dissociates into H⁺ and Cl⁻ ions.\n* Ethanoic acid is a weak acid that only partially ionises, resulting in a much lower concentration of charge-carrying mobile ions.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q181",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
