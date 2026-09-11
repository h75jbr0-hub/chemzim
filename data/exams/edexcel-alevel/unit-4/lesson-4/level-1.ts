import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u4_l4_lv1_1-2026",
    question: "According to the Brønsted-Lowry theory, what is an acid and what is a base?",
    options: [
      { text: "An acid is an electron pair acceptor; a base is an electron pair donor" },
      { text: "An acid is a proton (H⁺) donor; a base is a proton (H⁺) acceptor", isCorrect: true },
      { text: "An acid contains oxygen; a base contains hydrogen" },
      { text: "An acid produces OH⁻ ions; a base produces H⁺ ions" }
    ],
    correctAnswer: 1,
    explanation: "* Brønsted-Lowry definition: An acid donates a proton ($\text{H}^+$), and a base accepts a proton ($\text{H}^+$).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q43",
    createdAt: "2026-11-09T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_2-2026",
    question: "In the reversible aqueous equilibrium: $\\text{NH}_3\\text{(aq)} + \\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{NH}_4^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$, which species act as the Brønsted-Lowry conjugate acid-base pairs?",
    options: [
      { text: "NH₃ (acid) and H₂O (base)" },
      { text: "NH₃ (base 1) / NH₄⁺ (acid 1) and H₂O (acid 2) / OH⁻ (base 2)", isCorrect: true },
      { text: "NH₄⁺ (base) and OH⁻ (acid)" },
      { text: "NH₃ and OH⁻" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{NH}_3$ gains $\\text{H}^+$ to form conjugate acid $\\text{NH}_4^+$; $\\text{H}_2\\text{O}$ loses $\\text{H}^+$ to form conjugate base $\\text{OH}^-$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q44",
    createdAt: "2026-11-09T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_3-2026",
    question: "What is the mathematical definition of $pH$?",
    options: [
      { text: "pH = ln[H⁺]" },
      { text: "pH = -log₁₀[H⁺] (where [H⁺] is in mol dm⁻³)", isCorrect: true },
      { text: "pH = 1 / [H⁺]" },
      { text: "pH = -log₁₀[OH⁻]" }
    ],
    correctAnswer: 1,
    explanation: "* By definition, $pH = -\\log_{10}[\\text{H}^+]$ (or $-\\log_{10}[\\text{H}_3\\text{O}^+]$), where $[\text{H}^+]$ is the molar concentration in $\\text{mol dm}^{-3}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q37",
    createdAt: "2026-11-10T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_4-2026",
    question: "What is the value and expression for the ionic product of water ($K_w$) at standard room temperature ($298\\text{ K}$)?",
    options: [
      { text: "K_w = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ mol² dm⁻⁶", isCorrect: true },
      { text: "K_w = [H⁺] / [OH⁻] = 1.00 × 10⁻⁷ mol dm⁻³" },
      { text: "K_w = [H⁺] + [OH⁻] = 14.0" },
      { text: "K_w = [H₂O] = 55.5 mol dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "* The self-ionization of water $\\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$ has $K_w = [\\text{H}^+][\\text{OH}^-] = \\mathbf{1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}}$ at $298\\text{ K}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q44",
    createdAt: "2026-11-10T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_5-2026",
    question: "What is the $pH$ of a $0.0250\\text{ mol dm}^{-3}$ solution of strong monoprotic hydrochloric acid ($\text{HCl}$)?",
    options: [
      { text: "1.30" },
      { text: "1.60", isCorrect: true },
      { text: "2.50" },
      { text: "3.20" }
    ],
    correctAnswer: 1,
    explanation: "* Strong acid completely dissociates: $[\\text{H}^+] = [\\text{HCl}] = 0.0250\\text{ mol dm}^{-3}$.\n* $pH = -\\log_{10}(0.0250) = \\mathbf{1.60}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q45",
    createdAt: "2026-11-11T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_6-2026",
    question: "How is the acid dissociation constant ($K_a$) related to $pK_a$?",
    options: [
      { text: "pK_a = ln K_a" },
      { text: "pK_a = -log₁₀ K_a (so a smaller pK_a corresponds to a stronger acid)", isCorrect: true },
      { text: "pK_a = 1 / K_a" },
      { text: "pK_a = K_a × 10⁻¹⁴" }
    ],
    correctAnswer: 1,
    explanation: "* $pK_a = -\\log_{10} K_a$. A larger $K_a$ (higher degree of dissociation) produces a smaller $pK_a$ value.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q38",
    createdAt: "2026-11-11T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_7-2026",
    question: "What is a buffer solution?",
    options: [
      { text: "A solution that maintains exactly pH = 7.00 under all conditions" },
      { text: "A solution that resists changes in pH when small amounts of acid (H⁺) or base (OH⁻) are added, or upon moderate dilution", isCorrect: true },
      { text: "A solution containing only pure water and salt" },
      { text: "A solution that neutralizes all acids instantly to dryness" }
    ],
    correctAnswer: 1,
    explanation: "* A buffer resists $pH$ changes upon addition of small amounts of $\\text{H}^+$ or $\\text{OH}^-$ by maintaining a reservoir of a weak conjugate acid-base pair.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q45",
    createdAt: "2026-11-12T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_8-2026",
    question: "Which of the following mixtures acts as an acidic buffer solution?",
    options: [
      { text: "HCl(aq) and NaCl(aq)" },
      { text: "CH₃COOH(aq) (weak acid) and CH₃COONa(aq) (its conjugate base salt)", isCorrect: true },
      { text: "NaOH(aq) and NaCl(aq)" },
      { text: "HNO₃(aq) and KNO₃(aq)" }
    ],
    correctAnswer: 1,
    explanation: "* An acidic buffer consists of a weak acid ($\text{CH}_3\text{COOH}$) and its conjugate base salt ($\text{CH}_3\text{COONa}$). Strong acid/salt mixtures do not act as buffers.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q46",
    createdAt: "2026-11-12T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_9-2026",
    question: "What is an amphoteric (or amphiprotic) substance?",
    options: [
      { text: "A substance that only reacts with oxygen" },
      { text: "A species capable of acting as both a Brønsted-Lowry acid (proton donor) and a Brønsted-Lowry base (proton acceptor), such as water or amino acids", isCorrect: true },
      { text: "A substance that cannot dissolve in water" },
      { text: "A salt formed from two strong acids" }
    ],
    correctAnswer: 1,
    explanation: "* Water ($\text{H}_2\text{O}$) acts as an acid when donating a proton to form $\text{OH}^-$, and acts as a base when accepting a proton to form $\text{H}_3\text{O}^+$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q50",
    createdAt: "2026-11-19T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_10-2026",
    question: "What is the $pH$ of a $0.00100\\text{ mol dm}^{-3}$ solution of nitric acid ($\text{HNO}_3$) at $298\\text{ K}$?",
    options: [
      { text: "1.00" },
      { text: "2.00" },
      { text: "3.00", isCorrect: true },
      { text: "4.00" }
    ],
    correctAnswer: 2,
    explanation: "* $\\text{HNO}_3$ is a strong monoprotic acid: $[\\text{H}^+] = 1.00 \\times 10^{-3}\\text{ mol dm}^{-3}$.\n* $pH = -\\log_{10}(1.00 \\times 10^{-3}) = \\mathbf{3.00}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q51",
    createdAt: "2026-11-19T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_11-2026",
    question: "What are the SI units of the acid dissociation constant ($K_a$)?",
    options: [
      { text: "No units" },
      { text: "mol dm⁻³", isCorrect: true },
      { text: "dm³ mol⁻¹" },
      { text: "mol² dm⁻⁶" }
    ],
    correctAnswer: 1,
    explanation: "* For $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$: $K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]} \\implies \\text{Units} = \\frac{(\\text{mol dm}^{-3})(\\text{mol dm}^{-3})}{\\text{mol dm}^{-3}} = \\mathbf{\\text{mol dm}^{-3}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q43",
    createdAt: "2026-11-20T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_12-2026",
    question: "Which of the following compounds forms a basic buffer solution when mixed in aqueous solution?",
    options: [
      { text: "NH₃(aq) (weak base) and NH₄Cl(aq) (its conjugate acid salt)", isCorrect: true },
      { text: "NaOH(aq) and NaCl(aq)" },
      { text: "HCl(aq) and NH₄Cl(aq)" },
      { text: "CH₃COOH(aq) and CH₃COONa(aq)" }
    ],
    correctAnswer: 0,
    explanation: "* A basic buffer is formed from a weak base ($\text{NH}_3$) and its conjugate acid salt ($\text{NH}_4\text{Cl}$).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q51",
    createdAt: "2026-11-20T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_13-2026",
    question: "What is the relationship connecting $pH$ and $pOH$ for any aqueous solution at $298\\text{ K}$ ($K_w = 1.00 \\times 10^{-14}$)?",
    options: [
      { text: "pH × pOH = 14.0" },
      { text: "pH + pOH = 14.00 (pK_w = 14.00)", isCorrect: true },
      { text: "pH / pOH = 7.0" },
      { text: "pH - pOH = 0" }
    ],
    correctAnswer: 1,
    explanation: "* Taking negative logarithms of $K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$ yields: $\\mathbf{pH + pOH = pK_w = 14.00}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q52",
    createdAt: "2026-11-21T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_14-2026",
    question: "Which of the following acids is the STRONGEST based on its given $pK_a$ value at $298\\text{ K}$?",
    options: [
      { text: "Ethanoic acid (pK_a = 4.76)" },
      { text: "Methanoic acid (pK_a = 3.75)" },
      { text: "Trichloroethanoic acid (pK_a = 0.65)", isCorrect: true },
      { text: "Phenol (pK_a = 9.95)" }
    ],
    correctAnswer: 2,
    explanation: "* A smaller (more negative) $pK_a$ corresponds to a larger $K_a$ and a stronger acid. Trichloroethanoic acid has the lowest $pK_a = 0.65$ due to three strongly electron-withdrawing chlorine atoms.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q44",
    createdAt: "2026-11-21T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_15-2026",
    question: "What is the primary operational mechanism of an acid-base indicator ($\\text{HIn}$)?",
    options: [
      { text: "It is a heavy metal salt that dissolves at neutral pH" },
      { text: "It is a weak acid (or weak base) where the un-ionized molecular form (HIn) and the deprotonated conjugate base anion (In⁻) possess distinctly different, vivid colors", isCorrect: true },
      { text: "It changes color due to temperature change only" },
      { text: "It undergoes nuclear radioactive decay" }
    ],
    correctAnswer: 1,
    explanation: "* In the equilibrium $\\text{HIn(aq (color A))} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{In}^-\\text{(aq (color B))}$, changing $[\\text{H}^+]$ shifts the equilibrium to display the color of the dominant chemical species.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q52",
    createdAt: "2026-11-22T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l4_lv1_16-2026",
    question: "Why does dilution with pure water have virtually NO effect on the $pH$ of a buffer solution?",
    options: [
      { text: "Water destroys all acids" },
      { text: "Dilution changes the volumes of both the weak acid and its conjugate base equally, leaving the ratio [A⁻] / [HA] completely unchanged in the Henderson-Hasselbalch equation (pH = pK_a + log₁₀([A⁻]/[HA]))", isCorrect: true },
      { text: "Because pK_w becomes zero" },
      { text: "Because the total number of ions increases to infinity" }
    ],
    correctAnswer: 1,
    explanation: "* In $pH = pK_a + \\log_{10}\\left(\\frac{n(\\text{A}^-) / V}{n(\\text{HA}) / V}\\right)$, the volume $V$ cancels out: $pH = pK_a + \\log_{10}\\left(\\frac{n(\\text{A}^-)}{n(\\text{HA})}\\right)$, which is volume-independent.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q53",
    createdAt: "2026-11-22T10:00:00Z"
  }
];


