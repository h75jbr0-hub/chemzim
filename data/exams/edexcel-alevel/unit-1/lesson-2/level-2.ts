import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u1_l2_lv2_1-2026",
    question: "Why does the first ionization energy of aluminum ($Z = 13$, $[\\text{Ne}]3s^2 3p^1$) have a lower value than that of magnesium ($Z = 12$, $[\\text{Ne}]3s^2$)?",
    options: [
      { text: "Aluminum has a smaller nuclear charge than magnesium" },
      { text: "The electron removed in aluminum is in a higher-energy $3p$ orbital, which is shielded by the inner $3s^2$ electrons and is further from the nucleus", isCorrect: true },
      { text: "Magnesium has more electron shells than aluminum" },
      { text: "The electron in magnesium experiences electron-electron spin repulsion in the $3s$ orbital" }
    ],
    correctAnswer: 1,
    explanation: "* In aluminum, the outermost electron is in the $3p$ subshell, which is higher in energy than the $3s$ subshell of magnesium.\n* The $3p$ electron is shielded by the inner $3s^2$ subshell, so less energy is required to remove it.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q17",
    createdAt: "2026-05-24T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv2_2-2026",
    question: "Why is the first ionization energy of sulfur ($Z = 16$, $[\\text{Ne}]3s^2 3p^4$) lower than that of phosphorus ($Z = 15$, $[\\text{Ne}]3s^2 3p^3$)?",
    options: [
      { text: "Sulfur has a lower nuclear charge than phosphorus" },
      { text: "In sulfur, the electron is removed from a doubly occupied $3p$ orbital where spin-pair repulsion makes it easier to remove", isCorrect: true },
      { text: "Phosphorus has an extra occupied electron shell" },
      { text: "The $3p$ subshell in sulfur has zero shielding" }
    ],
    correctAnswer: 1,
    explanation: "* Phosphorus has three singly occupied $3p$ orbitals (half-filled stability).\n* Sulfur has one paired $3p$ orbital ($3p_x^2 3p_y^1 3p_z^1$); repulsion between the paired electrons in the same orbital reduces the energy needed to remove one.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q18",
    createdAt: "2026-05-24T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv2_3-2026",
    question: "What is the correct electronic configuration of a copper atom ($\text{Cu}$, $Z = 29$)?",
    options: [
      { text: "[Ar] 4s² 3d⁹" },
      { text: "[Ar] 4s¹ 3d¹⁰", isCorrect: true },
      { text: "[Ar] 4s² 3d¹⁰" },
      { text: "[Ar] 3d¹¹" }
    ],
    correctAnswer: 1,
    explanation: "* Transition metals show anomalous configurations for chromium and copper to achieve half-filled ($3d^5$) or completely filled ($3d^{10}$) d subshell stability.\n* Copper promotes one $4s$ electron into the $3d$ subshell: $[\text{Ar}] 4s^1 3d^{10}$.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q18",
    createdAt: "2026-05-25T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv2_4-2026",
    question: "What is the electronic configuration of the iron(III) ion, $\\text{Fe}^{3+}$ ($Z = 26$)?",
    options: [
      { text: "[Ar] 4s² 3d³" },
      { text: "[Ar] 3d⁵", isCorrect: true },
      { text: "[Ar] 4s¹ 3d⁴" },
      { text: "[Ar] 3d⁶" }
    ],
    correctAnswer: 1,
    explanation: "* Neutral iron atom has configuration $[\text{Ar}] 4s^2 3d^6$.\n* Transition metals lose electrons from the $4s$ subshell before the $3d$ subshell when forming ions.\n* Losing 3 electrons: 2 from $4s$ and 1 from $3d$ leaves $[\text{Ar}] 3d^5$.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q18",
    createdAt: "2026-05-25T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv2_5-2026",
    question: "The mass spectrum of an element X shows two peaks at $m/z = 85$ and $m/z = 87$ with relative peak heights of $3 : 1$. What is the relative atomic mass of element X?",
    options: [
      { text: "85.5", isCorrect: true },
      { text: "86.0" },
      { text: "86.5" },
      { text: "87.0" }
    ],
    correctAnswer: 0,
    explanation: "* $A_r = \\frac{(85 \\times 3) + (87 \\times 1)}{3 + 1} = \\frac{255 + 87}{4} = \\frac{342}{4} = 85.5$.\n* Element X is Rubidium ($^{85}\\text{Rb}$ and $^{87}\\text{Rb}$).",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q19",
    createdAt: "2026-05-26T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv2_6-2026",
    question: "Which of the following atoms/ions has the smallest ionic radius?",
    options: [
      { text: "N³⁻" },
      { text: "O²⁻" },
      { text: "F⁻" },
      { text: "Na⁺", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* $\\text{N}^{3-}, \\text{O}^{2-}, \\text{F}^-$, and $\\text{Na}^+$ are isoelectronic (each has 10 electrons with configuration $1s^2 2s^2 2p^6$).\n* $\\text{Na}^+$ has the highest nuclear charge (11 protons), pulling the 10 electrons most strongly towards the nucleus and resulting in the smallest radius.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q19",
    createdAt: "2026-05-26T10:00:00Z"
  }
];

