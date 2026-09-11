import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u4_l4_lv2_1-2026",
    question: "Calculate the $pH$ of a $0.0500\\text{ mol dm}^{-3}$ aqueous solution of barium hydroxide ($\\text{Ba(OH)}_2$), assuming complete dissociation at $298\\text{ K}$ ($K_w = 1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$).",
    options: [
      { text: "12.70" },
      { text: "13.00", isCorrect: true },
      { text: "13.30" },
      { text: "1.00" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Ba(OH)}_2$ is a strong dibasic alkali: $[\\text{OH}^-] = 2 \\times [\\text{Ba(OH)}_2] = 2 \\times 0.0500 = 0.100\\text{ mol dm}^{-3}$.\n* $[\\text{H}^+] = \\frac{K_w}{[\\text{OH}^-]} = \\frac{1.00 \\times 10^{-14}}{0.100} = 1.00 \\times 10^{-13}\\text{ mol dm}^{-3}$.\n* $pH = -\\log_{10}(1.00 \\times 10^{-13}) = \\mathbf{13.00}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q46",
    createdAt: "2026-11-13T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv2_2-2026",
    question: "Calculate the $pH$ of a $0.100\\text{ mol dm}^{-3}$ solution of weak propanoic acid ($\\text{CH}_3\\text{CH}_2\\text{COOH}$), given $K_a = 1.35 \\times 10^{-5}\\text{ mol dm}^{-3}$ at $298\\text{ K}$.",
    options: [
      { text: "2.43" },
      { text: "2.93", isCorrect: true },
      { text: "4.87" },
      { text: "5.87" }
    ],
    correctAnswer: 1,
    explanation: "* For a weak monoprotic acid: $[\\text{H}^+] = \\sqrt{K_a \\times [\\text{HA}]} = \\sqrt{1.35 \\times 10^{-5} \\times 0.100} = \\sqrt{1.35 \\times 10^{-6}} = 1.1619 \\times 10^{-3}\\text{ mol dm}^{-3}$.\n* $pH = -\\log_{10}(1.1619 \\times 10^{-3}) = \\mathbf{2.9348} \\approx \\mathbf{2.93}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q47",
    createdAt: "2026-11-13T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv2_3-2026",
    question: "At body temperature ($37\\text{ }^\\circ\\text{C}$), the ionic product of water is $K_w = 2.40 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$. What is the $pH$ of pure neutral water at $37\\text{ }^\\circ\\text{C}$, and is water acidic, basic, or neutral at this temperature?",
    options: [
      { text: "pH = 7.00; Neutral" },
      { text: "pH = 6.81; Neutral (because [H⁺] = [OH⁻] = 1.55 × 10⁻⁷ mol dm⁻³)", isCorrect: true },
      { text: "pH = 6.81; Acidic" },
      { text: "pH = 7.19; Basic" }
    ],
    correctAnswer: 1,
    explanation: "* In pure water: $[\\text{H}^+] = \\sqrt{K_w} = \\sqrt{2.40 \\times 10^{-14}} = 1.549 \\times 10^{-7}\\text{ mol dm}^{-3}$.\n* $pH = -\\log_{10}(1.549 \\times 10^{-7}) = \\mathbf{6.81}$.\n* Water is **neutral** because $[\\text{H}^+] = [\\text{OH}^-]$ exactly.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q39",
    createdAt: "2026-11-14T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv2_4-2026",
    question: "A buffer solution contains $0.200\\text{ mol dm}^{-3}$ ethanoic acid ($K_a = 1.74 \\times 10^{-5}\\text{ mol dm}^{-3}$) and $0.100\\text{ mol dm}^{-3}$ sodium ethanoate. Calculate the $pH$ of this buffer solution at $298\\text{ K}$.",
    options: [
      { text: "4.46", isCorrect: true },
      { text: "4.76" },
      { text: "5.06" },
      { text: "5.36" }
    ],
    correctAnswer: 0,
    explanation: "* Using the Henderson-Hasselbalch equation: $pH = pK_a + \\log_{10}\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right)$.\n* $pK_a = -\\log_{10}(1.74 \\times 10^{-5}) = 4.7595$.\n* $pH = 4.7595 + \\log_{10}\\left(\\frac{0.100}{0.200}\\right) = 4.7595 + \\log_{10}(0.500) = 4.7595 - 0.3010 = \\mathbf{4.4585} \\approx \\mathbf{4.46}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q47",
    createdAt: "2026-11-14T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv2_5-2026",
    question: "During the titration of a weak acid with a strong base (e.g. ethanoic acid with sodium hydroxide), what is the special relationship between $pH$ and $pK_a$ at the half-equivalence point?",
    options: [
      { text: "pH = 7.00" },
      { text: "pH = pK_a (because [HA] = [A⁻], so log₁₀([A⁻]/[HA]) = log₁₀(1) = 0)", isCorrect: true },
      { text: "pH = 2 × pK_a" },
      { text: "pH = 14.0 - pK_a" }
    ],
    correctAnswer: 1,
    explanation: "* At the half-neutralization volume, exactly half the weak acid has been converted to its conjugate base ($[\\text{HA}] = [\\text{A}^-]$).\n* In $pH = pK_a + \\log_{10}\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right)$, $\\log_{10}(1) = 0$, so $\\mathbf{pH = pK_a}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q48",
    createdAt: "2026-11-15T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv2_6-2026",
    question: "Why is methyl orange (color change range $pH\\text{ 3.1–4.4}$) a suitable indicator for a strong acid / weak base titration (e.g. $\\text{HCl}$ vs $\\text{NH}_3$), but completely UNACCEPTABLE for a weak acid / strong base titration (e.g. $\\text{CH}_3\\text{COOH}$ vs $\\text{NaOH}$)?",
    options: [
      { text: "Methyl orange precipitates in ethanoic acid" },
      { text: "The vertical pH jump for weak acid/strong base occurs between pH 7.0 and 10.0 in the alkaline region; methyl orange changes color at pH 3.1–4.4 before the equivalence point is reached, giving a premature false endpoint", isCorrect: true },
      { text: "Methyl orange does not change color in water" },
      { text: "Strong bases destroy all indicators" }
    ],
    correctAnswer: 1,
    explanation: "* For weak acid / strong base, the equivalence point is basic ($pH \\approx 8.5–9.0$) due to conjugate base hydrolysis; phenolphthalein ($pH\\text{ 8.3–10.0}$) lies within the vertical jump, whereas methyl orange changes color far too early.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q40",
    createdAt: "2026-11-15T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv2_7-2026",
    question: "Calculate the $pH$ of a $0.0400\\text{ mol dm}^{-3}$ solution of potassium hydroxide ($\text{KOH}$) at $298\\text{ K}$ ($K_w = 1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$).",
    options: [
      { text: "1.40" },
      { text: "12.60", isCorrect: true },
      { text: "13.40" },
      { text: "14.00" }
    ],
    correctAnswer: 1,
    explanation: "* $pOH = -\\log_{10}[\\text{OH}^-] = -\\log_{10}(0.0400) = 1.3979$.\n* $pH = 14.00 - pOH = 14.00 - 1.3979 = \\mathbf{12.602} \\approx \\mathbf{12.60}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q53",
    createdAt: "2026-11-23T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv2_8-2026",
    question: "A weak acid $\\text{HA}$ with $pK_a = 4.82$ is dissolved in water to make a $0.0500\\text{ mol dm}^{-3}$ solution. What is the $pH$ of this solution at $298\\text{ K}$?",
    options: [
      { text: "2.41" },
      { text: "3.06", isCorrect: true },
      { text: "4.82" },
      { text: "6.12" }
    ],
    correctAnswer: 1,
    explanation: "* $K_a = 10^{-pK_a} = 10^{-4.82} = 1.5136 \\times 10^{-5}\\text{ mol dm}^{-3}$.\n* $[\\text{H}^+] = \\sqrt{K_a \\times [\\text{HA}]} = \\sqrt{1.5136 \\times 10^{-5} \\times 0.0500} = \\sqrt{7.568 \\times 10^{-7}} = 8.699 \\times 10^{-4}\\text{ M}$.\n* $pH = -\\log_{10}(8.699 \\times 10^{-4}) = \\mathbf{3.0605} \\approx \\mathbf{3.06}$ (or formula: $pH = \\frac{1}{2}(pK_a - \\log C) = \\frac{1}{2}(4.82 - (-1.301)) = \\frac{6.121}{2} = 3.06$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q54",
    createdAt: "2026-11-23T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv2_9-2026",
    question: "When $1.0\\text{ cm}^3$ of $0.10\\text{ mol dm}^{-3}$ $\\text{HCl}$ is added to $100.0\\text{ cm}^3$ of an unbuffered aqueous solution at $pH = 7.00$, the $pH$ drops precipitously to $3.00$. In contrast, when the same amount of acid is added to $100.0\\text{ cm}^3$ of an ethanoic acid/sodium ethanoate buffer, the $pH$ barely changes by $0.01\\text{ units}$. What chemical equation explains how this buffer neutralizes the added $\\text{H}^+$ ions?",
    options: [
      { text: "CH₃COOH + H⁺ → CH₃COOH₂⁺" },
      { text: "CH₃COO⁻(aq) + H⁺(aq) → CH₃COOH(aq)", isCorrect: true },
      { text: "Na⁺ + Cl⁻ → NaCl" },
      { text: "2H⁺ + 2e⁻ → H₂" }
    ],
    correctAnswer: 1,
    explanation: "* Added $\\text{H}^+$ ions are consumed by the large reservoir of ethanoate conjugate base anions: $\\mathbf{\\text{CH}_3\\text{COO}^-\\text{(aq)} + \\text{H}^+\\text{(aq)} \\rightarrow \\text{CH}_3\\text{COOH(aq)}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q45",
    createdAt: "2026-11-24T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv2_10-2026",
    question: "Which of the following titration curves exhibits a sharp vertical $pH$ jump between $pH\\text{ 3.0}$ and $pH\\text{ 11.0}$ (spanning 8 pH units)?",
    options: [
      { text: "Weak acid titrated with weak base" },
      { text: "Strong acid (e.g. HCl) titrated with strong base (e.g. NaOH)", isCorrect: true },
      { text: "Weak acid (e.g. CH₃COOH) titrated with strong base" },
      { text: "Strong acid titrated with weak base (e.g. NH₃)" }
    ],
    correctAnswer: 1,
    explanation: "* Strong acid / strong base titrations produce the steepest and longest vertical inflexion jump ($pH\\text{ 3–11}$), allowing both methyl orange and phenolphthalein to serve as accurate indicators.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q54",
    createdAt: "2026-11-24T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv2_11-2026",
    question: "Why is water self-ionization: $\\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$ an ENDOTHERMIC process ($\\Delta H > 0$), and what happens to the value of $K_w$ and the $pH$ of neutral water as temperature rises?",
    options: [
      { text: "Bond formation is endothermic; K_w decreases and pH increases" },
      { text: "Breaking strong covalent O–H bonds requires heat input; therefore K_w increases with temperature, causing [H⁺] to increase and the neutral pH to decrease below 7.00", isCorrect: true },
      { text: "K_w remains constant at all temperatures" },
      { text: "Water becomes strongly alkaline at 100 °C" }
    ],
    correctAnswer: 1,
    explanation: "* Endothermic bond breaking $\\implies$ Raising $T$ shifts equilibrium right, increasing $K_w$ ($1.0 \\times 10^{-14}$ at $25^\\circ\\text{C} \\rightarrow 5.1 \\times 10^{-13}$ at $100^\\circ\\text{C}$), lowering neutral $pH$ to $6.14$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q55",
    createdAt: "2026-11-25T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv2_12-2026",
    question: "A buffer solution is formed by mixing equal volumes of $0.10\\text{ mol dm}^{-3}$ $\\text{NH}_3\\text{(aq)}$ and $0.10\\text{ mol dm}^{-3}$ $\\text{NH}_4\\text{Cl(aq)}$. How does this basic buffer neutralize added hydroxide ions ($\\text{OH}^-$)?",
    options: [
      { text: "NH₃ + OH⁻ → NH₂⁻ + H₂O" },
      { text: "NH₄⁺(aq) + OH⁻(aq) → NH₃(aq) + H₂O(l)", isCorrect: true },
      { text: "Cl⁻ + OH⁻ → ClOH²⁻" },
      { text: "Water evaporates" }
    ],
    correctAnswer: 1,
    explanation: "* The added $\\text{OH}^-$ ions react with the reservoir of ammonium cations: $\\mathbf{\\text{NH}_4^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{NH}_3\\text{(aq)} + \\text{H}_2\\text{O(l)}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q46",
    createdAt: "2026-11-25T10:00:00Z"
  }
];


