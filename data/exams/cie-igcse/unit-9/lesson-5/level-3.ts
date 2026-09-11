import { Question } from '../../../types';

// Alloys - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u9_l5_lv3_1-2026",
    question: "Why do alloys typically melt over a range of temperatures rather than at a single, sharp melting point?",
    options: [
      { text: "Alloys are mixtures containing atoms of different elements, each with different bonding energies across the lattice", isCorrect: true },
      { text: "Alloys contain impurities that decompose into gases before melting" },
      { text: "Alloys do not have metallic bonds" },
      { text: "The metals in an alloy evaporate before melting" }
    ],
    correctAnswer: 0,
    explanation: "* Pure elements and pure compounds have sharp, distinct melting points.\n* Because alloys are non-stoichiometric mixtures of different elements, bonds between different neighboring atoms break across a temperature range rather than at one fixed point.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q342",
    createdAt: "2026-08-21T17:30:00Z"
  },
  {
    id: "ex_ci_u9_l5_lv3_2-2026",
    question: "A 10.0 g sample of brass (alloy of copper and zinc) is treated with excess dilute hydrochloric acid. The zinc reacts completely to produce 0.72 dm³ of hydrogen gas at r.t.p., while the copper remains unreacted.\nWhat is the percentage by mass of copper in this brass sample?\n(Given: $A_r$ of Zn = 65; Molar gas volume at r.t.p. = 24.0 dm³/mol)",
    options: [
      { text: "80.5%", isCorrect: true },
      { text: "19.5%" },
      { text: "65.0%" },
      { text: "35.0%" }
    ],
    correctAnswer: 0,
    explanation: "* Only zinc reacts with HCl: Zn + 2HCl → ZnCl₂ + H₂.\n* Moles of H₂ $= 0.72 / 24.0 = 0.030\\text{ mol}$.\n* Moles of Zn $= 0.030\\text{ mol}$.\n* Mass of Zn $= 0.030 \\times 65 = 1.95\\text{ g}$.\n* Mass of Cu $= 10.0 - 1.95 = 8.05\\text{ g}$.\n* Percentage of Cu $= (8.05 / 10.0) \\times 100\\% = 80.5\\%$.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q343",
    createdAt: "2026-08-21T17:35:00Z"
  },
  {
    id: "ex_ci_u9_l5_lv3_3-2026",
    question: "Why is duralumin (an alloy containing ~95% aluminium, ~4% copper, plus traces of magnesium and manganese) used in aircraft construction instead of pure aluminium metal?",
    options: [
      { text: "Copper and magnesium atoms prevent dislocation gliding in the aluminium lattice, giving high tensile strength while retaining low density", isCorrect: true },
      { text: "Duralumin has a much higher density that stabilises the aircraft" },
      { text: "Pure aluminium dissolves in rain whereas duralumin does not" },
      { text: "Duralumin is transparent to radar waves" }
    ],
    correctAnswer: 0,
    explanation: "* Pure aluminium is too soft and ductile for aircraft structural airframes.\n* Alloying it with small percentages of copper and magnesium introduces lattice distortion and precipitate hardening, dramatically boosting tensile strength while preserving aluminium's low weight.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q344",
    createdAt: "2026-08-21T17:40:00Z"
  },
  {
    id: "ex_ci_u9_l5_lv3_4-2023",
    question: "Why do alloys typically melt over a temperature range rather than at a single sharp melting temperature?",
    options: [
      { text: "They are mixtures of different elements with varying atomic bond strengths across the lattice", isCorrect: true },
      { text: "They contain trapped air bubbles that boil off before melting" },
      { text: "Metallic bonds are replaced by weak covalent bonds in alloys" },
      { text: "Alloys decompose chemically before turning into liquids" }
    ],
    correctAnswer: 0,
    explanation: "* Pure metals and pure compounds have sharp, well-defined melting points because all bonds throughout the lattice are identical.\n* Alloys are mixtures composed of different atoms in varying ratios; bonds between different pairs of atoms require different amounts of thermal energy to break, leading to melting over a range.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q110",
    lessonNum: 5,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u9_l5_lv3_5-2024",
    question: "A 5.00 g sample of brass (copper-zinc alloy) is reacted with excess dilute sulfuric acid. Only the zinc reacts, generating 480 cm³ of hydrogen gas at r.t.p. What is the mass percentage of copper in this sample?\n($A_r: \\text{Zn} = 65$; Molar gas volume at r.t.p. = 24,000 cm³)",
    options: [
      { text: "74.0%", isCorrect: true },
      { text: "26.0%" },
      { text: "52.0%" },
      { text: "85.5%" }
    ],
    correctAnswer: 0,
    explanation: "* Copper does not react with dilute H₂SO₄. Only zinc reacts: Zn + H₂SO₄ → ZnSO₄ + H₂.\n* Moles of H₂ = 480 / 24,000 = 0.020 mol.\n* Moles of Zn = 0.020 mol.\n* Mass of Zn = 0.020 mol × 65 g/mol = 1.30 g.\n* Mass of copper = 5.00 g - 1.30 g = 3.70 g.\n* Mass % of Cu = (3.70 / 5.00) × 100% = 74.0%.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q111",
    lessonNum: 5,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u9_l5_lv3_6-2025",
    question: "Why is duralumin (an alloy of aluminium with copper and magnesium) used for aircraft manufacture rather than pure aluminium?",
    options: [
      { text: "It combines the low density of aluminium with significantly higher tensile strength and hardness", isCorrect: true },
      { text: "It has a much higher density which adds weight to stabilise the aircraft" },
      { text: "It is an electrical insulator that prevents lightning strikes" },
      { text: "It reacts with oxygen to form a liquid lubricant layer" }
    ],
    correctAnswer: 0,
    explanation: "* Pure aluminium is too soft and malleable to endure aerodynamic stress on aircraft frames.\n* Adding small amounts of copper and magnesium distorts the lattice and causes precipitate hardening, yielding high tensile strength while preserving aluminium's low weight.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q112",
    lessonNum: 5,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
