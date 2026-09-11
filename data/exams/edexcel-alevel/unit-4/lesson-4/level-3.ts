import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u4_l4_lv3_1-2026",
    question: "A buffer solution is prepared by mixing $50.0\\text{ cm}^3$ of $0.500\\text{ mol dm}^{-3}$ methanoic acid ($\text{HCOOH}$, $K_a = 1.60 \\times 10^{-4}\\text{ mol dm}^{-3}$) with $25.0\\text{ cm}^3$ of $0.400\\text{ mol dm}^{-3}$ sodium hydroxide ($\text{NaOH}$). Calculate the $pH$ of the resulting buffer solution at $298\\text{ K}$.",
    options: [
      { text: "3.45" },
      { text: "3.62", isCorrect: true },
      { text: "3.80" },
      { text: "4.15" }
    ],
    correctAnswer: 1,
    explanation: "* Initial moles:\n  * $n(\\text{HCOOH}) = 0.0500 \\times 0.500 = 0.0250\\text{ mol}$.\n  * $n(\\text{NaOH}) = 0.0250 \\times 0.400 = 0.0100\\text{ mol}$.\n* Reaction: $\\text{HCOOH} + \\text{OH}^- \\rightarrow \\text{HCOO}^- + \\text{H}_2\\text{O}$.\n* Remaining $n(\\text{HCOOH}) = 0.0250 - 0.0100 = 0.0150\\text{ mol}$.\n* Formed $n(\\text{HCOO}^-) = 0.0100\\text{ mol}$.\n* $pK_a = -\\log_{10}(1.60 \\times 10^{-4}) = 3.7959$.\n* $pH = 3.7959 + \\log_{10}\\left(\\frac{0.0100}{0.0150}\\right) = 3.7959 + \\log_{10}(0.6667) = 3.7959 - 0.1761 = \\mathbf{3.6198} \\approx \\mathbf{3.62}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q48",
    createdAt: "2026-11-16T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv3_2-2026",
    question: "Calculate the $pH$ of the solution formed when $20.0\\text{ cm}^3$ of $0.150\\text{ mol dm}^{-3}$ sulfuric acid ($\\text{H}_2\\text{SO}_4$, fully dissociated strong diprotic acid) is mixed with $30.0\\text{ cm}^3$ of $0.100\\text{ mol dm}^{-3}$ sodium hydroxide ($\\text{NaOH}$) at $298\\text{ K}$.",
    options: [
      { text: "1.00" },
      { text: "1.22", isCorrect: true },
      { text: "1.52" },
      { text: "2.00" }
    ],
    correctAnswer: 1,
    explanation: "* $n(\\text{H}^+) = 2 \\times (0.0200 \\times 0.150) = 2 \\times 0.00300 = 0.00600\\text{ mol}$.\n* $n(\\text{OH}^-) = 0.0300 \\times 0.100 = 0.00300\\text{ mol}$.\n* Unreacted $n(\\text{H}^+) = 0.00600 - 0.00300 = 0.00300\\text{ mol}$.\n* Total volume $V_{\\text{total}} = 20.0 + 30.0 = 50.0\\text{ cm}^3 = 0.0500\\text{ dm}^3$.\n* $[\\text{H}^+] = \\frac{0.00300}{0.0500} = 0.0600\\text{ mol dm}^{-3}$.\n* $pH = -\\log_{10}(0.0600) = \\mathbf{1.2218} \\approx \\mathbf{1.22}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q49",
    createdAt: "2026-11-16T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv3_3-2026",
    question: "A $0.0500\\text{ mol dm}^{-3}$ solution of a weak monoprotic acid $\\text{HA}$ has a measured $pH = 3.10$ at $298\\text{ K}$. Calculate the percentage ionization of the acid.",
    options: [
      { text: "0.79%" },
      { text: "1.59%", isCorrect: true },
      { text: "3.10%" },
      { text: "6.30%" }
    ],
    correctAnswer: 1,
    explanation: "* $[\\text{H}^+] = 10^{-pH} = 10^{-3.10} = 7.943 \\times 10^{-4}\\text{ mol dm}^{-3}$.\n* $\\text{Percentage ionization} = \\frac{[\\text{H}^+]}{[\\text{HA}]_{\\text{initial}}} \\times 100\\% = \\frac{7.943 \\times 10^{-4}}{0.0500} \\times 100\\% = \\mathbf{1.5886\\%} \\approx \\mathbf{1.59\\%}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q41",
    createdAt: "2026-11-17T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv3_4-2026",
    question: "How does human blood maintain its $pH$ strictly within the vital physiological range of $7.35–7.45$ via the carbonic acid / hydrogencarbonate buffer system: $\\text{CO}_2\\text{(aq)} + \\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{H}_2\\text{CO}_3\\text{(aq)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{HCO}_3^-\\text{(aq)}$?",
    options: [
      { text: "Red blood cells absorb all acid directly into hemoglobin" },
      { text: "When excess H⁺ enters blood, it reacts with abundant HCO₃⁻ to form H₂CO₃, which decomposes to CO₂ that is exhaled by the lungs; when OH⁻ enters, it reacts with H₂CO₃ to form HCO₃⁻ and water", isCorrect: true },
      { text: "Blood pH is controlled entirely by skin perspiration" },
      { text: "Carbonic acid is a strong acid that ionizes completely" }
    ],
    correctAnswer: 1,
    explanation: "* Added $\\text{H}^+$ shifts $\\text{H}^+ + \\text{HCO}_3^- \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{CO}_2 + \\text{H}_2\\text{O}$ left, venting $\\text{CO}_2$ via respiration.\n* Added $\\text{OH}^-$ is neutralized by carbonic acid: $\\text{H}_2\\text{CO}_3 + \\text{OH}^- \\rightarrow \\text{HCO}_3^- + \\text{H}_2\\text{O}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q49",
    createdAt: "2026-11-17T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv3_5-2026",
    question: "Calculate the $pH$ of the solution at the equivalence point when $25.0\\text{ cm}^3$ of $0.100\\text{ mol dm}^{-3}$ ethanoic acid ($K_a = 1.75 \\times 10^{-5}\\text{ mol dm}^{-3}$) is titrated with $25.0\\text{ cm}^3$ of $0.100\\text{ mol dm}^{-3}$ $\\text{NaOH}$ ($K_w = 1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$ at $298\\text{ K}$).",
    options: [
      { text: "7.00" },
      { text: "8.73", isCorrect: true },
      { text: "9.25" },
      { text: "11.15" }
    ],
    correctAnswer: 1,
    explanation: "* Total volume at equivalence $= 25.0 + 25.0 = 50.0\\text{ cm}^3 = 0.050\\text{ dm}^3$.\n* Formed salt moles $n(\\text{CH}_3\\text{COONa}) = 0.0250 \\times 0.100 = 0.00250\\text{ mol}$.\n* $[\text{CH}_3\\text{COO}^-] = \\frac{0.00250}{0.050} = 0.0500\\text{ mol dm}^{-3}$.\n* Base hydrolysis constant: $K_b = \\frac{K_w}{K_a} = \\frac{1.00 \\times 10^{-14}}{1.75 \\times 10^{-5}} = 5.714 \\times 10^{-10}\\text{ mol dm}^{-3}$.\n* $[\\text{OH}^-] = \\sqrt{K_b \\times [\\text{CH}_3\\text{COO}^-]} = \\sqrt{5.714 \\times 10^{-10} \\times 0.0500} = \\sqrt{2.857 \\times 10^{-11}} = 5.345 \\times 10^{-6}\\text{ M}$.\n* $pOH = -\\log_{10}(5.345 \\times 10^{-6}) = 5.272 \\implies pH = 14.00 - 5.272 = \\mathbf{8.728} \\approx \\mathbf{8.73}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q50",
    createdAt: "2026-11-18T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv3_6-2026",
    question: "An acid-base indicator $\\text{HIn}$ has an acid dissociation constant of $K_{\\text{In}} = 2.00 \\times 10^{-5}\\text{ mol dm}^{-3}$. The un-ionized form $\\text{HIn}$ is red, while the deprotonated form $\\text{In}^-$ is yellow. Over what approximate $pH$ range does this indicator change color, and what is its color at $pH = 7.0$?",
    options: [
      { text: "pH 1.0–2.0; Red" },
      { text: "pH 3.7–5.7 (centered at pK_In = 4.70); Yellow at pH = 7.0 (since pH > pK_In, In⁻ dominates)", isCorrect: true },
      { text: "pH 8.0–10.0; Orange" },
      { text: "pH 6.5–7.5; Green" }
    ],
    correctAnswer: 1,
    explanation: "* Indicator transition range is $pK_{\\text{In}} \\pm 1$.\n* $pK_{\\text{In}} = -\\log_{10}(2.00 \\times 10^{-5}) = 4.699 \\approx 4.70$, giving range $\\mathbf{pH\\text{ 3.7–5.7}}$.\n* At $pH = 7.0 > pK_{\\text{In}}$, $[\\text{In}^-] \\gg [\\text{HIn}]$, so the solution appears distinctly **yellow**.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q42",
    createdAt: "2026-11-18T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv3_7-2026",
    question: "A buffer solution of volume $500.0\\text{ cm}^3$ is $0.100\\text{ mol dm}^{-3}$ in ethanoic acid ($\text{CH}_3\text{COOH}$, $K_a = 1.75 \\times 10^{-5}\\text{ mol dm}^{-3}$) and $0.100\\text{ mol dm}^{-3}$ in sodium ethanoate ($\text{CH}_3\text{COONa}$). Calculate the $pH$ after adding $2.00\\text{ cm}^3$ of $1.00\\text{ mol dm}^{-3}$ $\\text{HCl(aq)}$ to this buffer solution at $298\\text{ K}$ (assume negligible volume change).",
    options: [
      { text: "4.72", isCorrect: true },
      { text: "4.76" },
      { text: "4.80" },
      { text: "4.41" }
    ],
    correctAnswer: 0,
    explanation: "* Initial moles in $500\\text{ cm}^3$: $n(\\text{HA}) = 0.500 \\times 0.100 = 0.0500\\text{ mol}$, $n(\\text{A}^-) = 0.500 \\times 0.100 = 0.0500\\text{ mol}$.\n* Added $\\text{HCl}$: $n(\\text{H}^+) = 0.00200 \\times 1.00 = 0.00200\\text{ mol}$.\n* Reaction: $\\text{CH}_3\\text{COO}^- + \\text{H}^+ \\rightarrow \\text{CH}_3\\text{COOH}$.\n* New $n(\\text{A}^-) = 0.0500 - 0.00200 = 0.0480\\text{ mol}$, new $n(\\text{HA}) = 0.0500 + 0.00200 = 0.0520\\text{ mol}$.\n* $pH = 4.757 + \\log_{10}\\left(\\frac{0.0480}{0.0520}\\right) = 4.757 + \\log_{10}(0.9231) = 4.757 - 0.0348 = \\mathbf{4.722} \\approx \\mathbf{4.72}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q55",
    createdAt: "2026-11-26T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv3_8-2026",
    question: "Calculate the mass of solid sodium ethanoate ($\\text{CH}_3\\text{COONa}$, $M_r = 82.03\\text{ g mol}^{-1}$) that must be dissolved in $250.0\\text{ cm}^3$ of $0.200\\text{ mol dm}^{-3}$ ethanoic acid ($K_a = 1.75 \\times 10^{-5}\\text{ mol dm}^{-3}$) to produce a buffer solution with a target $pH = 5.00$ at $298\\text{ K}$.",
    options: [
      { text: "1.44 g" },
      { text: "7.18 g", isCorrect: true },
      { text: "14.36 g" },
      { text: "28.70 g" }
    ],
    correctAnswer: 1,
    explanation: "* $pK_a = -\\log_{10}(1.75 \\times 10^{-5}) = 4.757$.\n* $\\log_{10}\\left(\\frac{[\\text{A}^-]}{[\\text{HA}]}\\right) = pH - pK_a = 5.00 - 4.757 = +0.243$.\n* $\\frac{[\\text{A}^-]}{[\\text{HA}]} = 10^{0.243} = 1.750 \\implies [\\text{A}^-] = 1.750 \\times 0.200 = 0.350\\text{ mol dm}^{-3}$.\n* Moles of $\\text{CH}_3\\text{COONa}$ in $250\\text{ cm}^3 = 0.250 \\times 0.350 = 0.0875\\text{ mol}$.\n* Mass $= 0.0875\\text{ mol} \\times 82.03\\text{ g mol}^{-1} = \\mathbf{7.178\\text{ g}} \\approx \\mathbf{7.18\\text{ g}}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q56",
    createdAt: "2026-11-26T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv3_9-2026",
    question: "When titrating $25.0\\text{ cm}^3$ of $0.100\\text{ mol dm}^{-3}$ ammonia solution with $0.100\\text{ mol dm}^{-3}$ $\\text{HCl}$, what is the characteristic shape of the titration curve and the approximate $pH$ at the equivalence point?",
    options: [
      { text: "Initial pH ≈ 13.0; equivalence point at pH = 7.00" },
      { text: "Initial pH ≈ 11.1; sharp vertical drop occurs in the acidic region with equivalence point at pH ≈ 5.3 (due to hydrolysis of NH₄⁺ forming H₃O⁺)", isCorrect: true },
      { text: "Initial pH ≈ 9.0; equivalence point at pH = 8.5" },
      { text: "No vertical jump exists" }
    ],
    correctAnswer: 1,
    explanation: "* Weak base starts around $pH \\approx 11.1$.\n* At equivalence, the formed salt $\\text{NH}_4\\text{Cl}$ hydrolyzes: $\\text{NH}_4^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3 + \\text{H}_3\\text{O}^+$, making the solution **weakly acidic ($pH \\approx 5.3$)**.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q47",
    createdAt: "2026-11-27T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv3_10-2026",
    question: "A dibasic organic acid $\\text{H}_2\\text{A}$ has two dissociation constants: $pK_{a1} = 3.20$ and $pK_{a2} = 6.40$. When $25.0\\text{ cm}^3$ of $0.100\\text{ mol dm}^{-3}$ $\\text{H}_2\\text{A}$ is titrated with $0.100\\text{ mol dm}^{-3}$ $\\text{NaOH}$, what are the two volumes of base added to reach the first and second equivalence points respectively?",
    options: [
      { text: "12.5 cm³ and 25.0 cm³" },
      { text: "25.0 cm³ and 50.0 cm³", isCorrect: true },
      { text: "50.0 cm³ and 100.0 cm³" },
      { text: "25.0 cm³ and 75.0 cm³" }
    ],
    correctAnswer: 1,
    explanation: "* 1st proton neutralization: $\\text{H}_2\\text{A} + \\text{OH}^- \\rightarrow \\text{HA}^- + \\text{H}_2\\text{O} \\implies V_1 = \\frac{25.0 \\times 0.100}{0.100} = \\mathbf{25.0\\text{ cm}^3}$.\n* 2nd proton neutralization: $\\text{HA}^- + \\text{OH}^- \\rightarrow \\text{A}^{2-} + \\text{H}_2\\text{O} \\implies V_2 = 2 \\times 25.0 = \\mathbf{50.0\\text{ cm}^3}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q56",
    createdAt: "2026-11-27T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv3_11-2026",
    question: "Why does the $pH$ curve for a weak acid – weak base titration (e.g. ethanoic acid titrated with aqueous ammonia) lack any vertical inflection region, making standard indicator titration impossible?",
    options: [
      { text: "Because the products precipitate completely" },
      { text: "Both the forward and reverse buffer regions overlap, causing the pH to change very gradually throughout neutralization without any sudden vertical jump, so no indicator can give a sharp color change", isCorrect: true },
      { text: "Because the equivalence point is always pH = 0" },
      { text: "Because ammonia destroys all indicators" }
    ],
    correctAnswer: 1,
    explanation: "* The buffering action of both the unreacted weak acid/salt and unreacted weak base/salt flattens the curve, producing a gentle slope without a vertical inflection.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q57",
    createdAt: "2026-11-28T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv3_12-2026",
    question: "Calculate the exact $pH$ of a $1.00 \\times 10^{-8}\\text{ mol dm}^{-3}$ solution of hydrochloric acid ($\text{HCl}$) at $298\\text{ K}$, taking into account the auto-ionization of water ($K_w = 1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$).",
    options: [
      { text: "8.00 (basic)" },
      { text: "6.96 (slightly acidic)", isCorrect: true },
      { text: "7.00 (neutral)" },
      { text: "6.00 (acidic)" }
    ],
    correctAnswer: 1,
    explanation: "* Total $[\\text{H}^+] = [\\text{H}^+]_{\\text{HCl}} + [\\text{H}^+]_{\\text{water}} = 10^{-8} + x$.\n* $[\\text{OH}^-] = x$.\n* $K_w = (10^{-8} + x)x = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n* Solving quadratic: $x = 9.512 \\times 10^{-8}\\text{ M}$.\n* Total $[\\text{H}^+] = 1.00 \\times 10^{-8} + 9.512 \\times 10^{-8} = 1.0512 \\times 10^{-7}\\text{ mol dm}^{-3}$.\n* $pH = -\\log_{10}(1.0512 \\times 10^{-7}) = \\mathbf{6.958} \\approx \\mathbf{6.96}$ (an acid solution can never have $pH > 7$ at $25^\\circ\\text{C}$).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q48",
    createdAt: "2026-11-28T10:00:00Z"
  }
];


