import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u1_l2_lv3_1-2026",
    question: "The successive ionization energies (in $\\text{kJ mol}^{-1}$) of an element Y are: 738, 1451, 7733, 10543, 13630. To which group of the Periodic Table does element Y belong?",
    options: [
      { text: "Group 1" },
      { text: "Group 2", isCorrect: true },
      { text: "Group 3 (13)" },
      { text: "Group 4 (14)" }
    ],
    correctAnswer: 1,
    explanation: "* Notice the massive jump in ionization energy between the 2nd (1451) and 3rd (7733) ionization energies (a factor of over 5).\n* This indicates that removing the 3rd electron breaks into a complete, noble-gas inner electron shell.\n* Therefore, element Y has exactly 2 valence electrons and belongs to **Group 2** (Magnesium).",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q19",
    createdAt: "2026-05-27T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv3_2-2026",
    question: "In a TOF mass spectrometer, a singly charged ion of isotope $^{79}\\text{Br}^+$ with mass $m_1 = 1.31 \\times 10^{-25}\\text{ kg}$ has a flight time of $1.50 \\times 10^{-5}\\text{ s}$ through a flight tube of length $d$. What is the flight time for a singly charged ion of isotope $^{81}\\text{Br}^+$ ($m_2 = 1.34 \\times 10^{-25}\\text{ kg}$) through the same flight tube under identical acceleration potential?",
    options: [
      { text: "1.48 × 10⁻⁵ s" },
      { text: "1.50 × 10⁻⁵ s" },
      { text: "1.52 × 10⁻⁵ s", isCorrect: true },
      { text: "1.58 × 10⁻⁵ s" }
    ],
    correctAnswer: 2,
    explanation: "* In TOF mass spectrometry, flight time is proportional to the square root of ion mass: $t \\propto \\sqrt{m}$.\n* $t_2 = t_1 \\times \\sqrt{\\frac{m_2}{m_1}} = (1.50 \\times 10^{-5}) \\times \\sqrt{\\frac{81}{79}} = (1.50 \\times 10^{-5}) \\times 1.01258 = 1.519 \\times 10^{-5}\\text{ s} \\approx 1.52 \\times 10^{-5}\\text{ s}$.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q20",
    createdAt: "2026-05-27T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv3_3-2026",
    question: "The mass spectrum of molecular chlorine gas ($\\text{Cl}_2$) contains isotopes $^{35}\\text{Cl}$ and $^{37}\\text{Cl}$ in a $3 : 1$ ratio. What is the expected ratio of peak heights for the molecular ion peaks $\\text{M}^+$ at $m/z = 70, 72$, and $74$?",
    options: [
      { text: "3 : 2 : 1" },
      { text: "9 : 6 : 1", isCorrect: true },
      { text: "3 : 1 : 1" },
      { text: "1 : 2 : 1" }
    ],
    correctAnswer: 1,
    explanation: "* Probability of $^{35}\\text{Cl} = 3/4$; probability of $^{37}\\text{Cl} = 1/4$.\n* Peak $m/z = 70$ ($^{35}\\text{Cl}-^{35}\\text{Cl}$): $(3/4) \\times (3/4) = 9/16$.\n* Peak $m/z = 72$ ($^{35}\\text{Cl}-^{37}\\text{Cl}$ or $^{37}\\text{Cl}-^{35}\\text{Cl}$): $2 \\times (3/4) \\times (1/4) = 6/16$.\n* Peak $m/z = 74$ ($^{37}\\text{Cl}-^{37}\\text{Cl}$): $(1/4) \\times (1/4) = 1/16$.\n* Peak height ratio $= 9 : 6 : 1$.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q20",
    createdAt: "2026-05-28T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv3_4-2026",
    question: "Which of the following elements has the highest second ionization energy?",
    options: [
      { text: "Sodium (Na)", isCorrect: true },
      { text: "Magnesium (Mg)" },
      { text: "Aluminum (Al)" },
      { text: "Silicon (Si)" }
    ],
    correctAnswer: 0,
    explanation: "* The second ionization energy involves removing an electron from the $1+$ ion: $\\text{Na}^+\\text{(g)} \\rightarrow \\text{Na}^{2+}\\text{(g)} + \\text{e}^-$.\n* $\\text{Na}^+$ has a stable noble-gas configuration ($1s^2 2s^2 2p^6$); removing a second electron requires taking an electron from a lower-energy inner $2p$ subshell experiencing minimal shielding and high effective nuclear charge.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q20",
    createdAt: "2026-05-28T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv3_5-2026",
    question: "A sample of lead is analyzed by mass spectrometry and contains three isotopes: $^{206}\\text{Pb}$ (24.1%), $^{207}\\text{Pb}$ (22.1%), and $^{208}\\text{Pb}$ (53.8%). Calculate the relative atomic mass ($A_r$) of this lead sample to 1 decimal place.",
    options: [
      { text: "206.8" },
      { text: "207.2" },
      { text: "207.3", isCorrect: true },
      { text: "207.8" }
    ],
    correctAnswer: 2,
    explanation: "* $A_r = \\frac{(206 \\times 24.1) + (207 \\times 22.1) + (208 \\times 53.8)}{100} = \\frac{4964.6 + 4574.7 + 11190.4}{100} = \\frac{20729.7}{100} = 207.297 \\approx 207.3$.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q21",
    createdAt: "2026-05-29T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l2_lv3_6-2026",
    question: "How does the current detected at the collector plate of a mass spectrometer relate to the abundance of an isotope?",
    options: [
      { text: "Current is inversely proportional to the mass of the ions" },
      { text: "Current is directly proportional to the number of positive ions hitting the detector plate as electrons are transferred to neutralize them", isCorrect: true },
      { text: "Current depends only on the velocity of the ions" },
      { text: "Current is proportional to the square root of time of flight" }
    ],
    correctAnswer: 1,
    explanation: "* When positive ions strike the detector detector plate, they accept electrons from the metal to be neutralized.\n* This flow of electrons generates an electric current that is directly proportional to the number of ions arriving (abundance).",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q21",
    createdAt: "2026-05-29T10:00:00Z"
  }
];

