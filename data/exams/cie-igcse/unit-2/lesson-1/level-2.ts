import { Question } from '../../../types';

// Atomic Structure - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u2_l1_lv2_1-2026",
    question: "An oxide ion has the chemical formula $^{16}_{8}\\text{O}^{2-}$. What is the correct number of protons, neutrons, and electrons in this ion?",
    options: [
      { text: "8 protons, 8 neutrons, 6 electrons" },
      { text: "8 protons, 8 neutrons, 10 electrons" },
      { text: "8 protons, 16 neutrons, 10 electrons" },
      { text: "10 protons, 8 neutrons, 8 electrons" }
    ],
    correctAnswer: 1,
    explanation: "* Protons = Atomic number $Z = 8$.\n* Neutrons = Mass number $A - Z = 16 - 8 = 8$.\n* Electrons = In neutral oxygen there are 8 electrons; a $2-$ charge means it has gained 2 extra electrons ($8 + 2 = 10\\text{ electrons}$).",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q25",
    createdAt: "2026-04-17T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv2_2-2026",
    question: "Chlorine exists naturally as two isotopes: chlorine-35 ($^{35}\\text{Cl}$, 75% abundance) and chlorine-37 ($^{37}\\text{Cl}$, 25% abundance). What is the calculated relative atomic mass ($A_r$) of chlorine?",
    options: [
      { text: "35.0" },
      { text: "35.5" },
      { text: "36.0" },
      { text: "37.0" }
    ],
    correctAnswer: 1,
    explanation: "* $A_r = \\frac{(35 \\times 75) + (37 \\times 25)}{100} = \\frac{2625 + 925}{100} = \\frac{3550}{100} = 35.5$.\n* Relative atomic mass is the weighted average mass of naturally occurring isotopes relative to $1/12$th of a carbon-12 atom.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q27",
    createdAt: "2026-04-17T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv2_3-2026",
    question: "An element X has an electronic configuration of $2, 8, 5$. Which statement about element X is correct?",
    options: [
      { text: "It is located in Period 5 and Group 3 of the Periodic Table" },
      { text: "It is a non-metal located in Period 3 and Group V (15)" },
      { text: "It forms positive $\\text{X}^{3+}$ cations by losing 5 electrons" },
      { text: "It has 8 valence electrons in its outermost shell" }
    ],
    correctAnswer: 1,
    explanation: "* Number of electron shells occupied ($3\\text{ shells}$) = Period 3.\n* Number of valence electrons in outer shell ($5\\text{ electrons}$) = Group V (Group 15).\n* Phosphorus ($Z = 15$) has configuration $2, 8, 5$ and is a non-metal.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q19",
    createdAt: "2026-04-18T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv2_4-2026",
    question: "An aluminum ion has the symbol $^{27}_{13}\\text{Al}^{3+}$. What is the correct electronic configuration of this aluminum cation?",
    options: [
      { text: "2, 8, 3" },
      { text: "2, 8" },
      { text: "2, 8, 6" },
      { text: "2, 8, 8" }
    ],
    correctAnswer: 1,
    explanation: "* Neutral aluminum has 13 electrons ($2, 8, 3$).\n* Forming an $\\text{Al}^{3+}$ cation means losing all 3 valence electrons from the outer shell, leaving a stable noble gas configuration of $2, 8$ (like neon).",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q28",
    createdAt: "2026-04-23T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv2_5-2026",
    question: "A sample of neon contains three isotopes: $^{20}\\text{Ne}$ (90%), $^{21}\\text{Ne}$ (1%), and $^{22}\\text{Ne}$ (9%). What is the calculated relative atomic mass ($A_r$) of neon?",
    options: [
      { text: "20.19" },
      { text: "21.00" },
      { text: "20.50" },
      { text: "22.00" }
    ],
    correctAnswer: 0,
    explanation: "* $A_r = \\frac{(20 \\times 90) + (21 \\times 1) + (22 \\times 9)}{100} = \\frac{1800 + 21 + 198}{100} = \\frac{2019}{100} = 20.19$.\n* This accurately reflects the periodic table standard atomic weight for neon.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q30",
    createdAt: "2026-04-23T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv2_6-2026",
    question: "Why do noble gases (Group VIII / 0) such as helium, neon, and argon exist as unreactive, monoatomic gases under standard conditions?",
    options: [
      { text: "Their nuclei contain no neutrons" },
      { text: "They have completely filled outer electron shells (duplet/octet), giving them exceptional chemical stability with no tendency to gain, lose, or share electrons" },
      { text: "They have zero protons in their atoms" },
      { text: "Their electrons are locked permanently in the nucleus" }
    ],
    correctAnswer: 1,
    explanation: "* Helium has a full outer shell of 2 electrons (duplet), and other noble gases have 8 valence electrons (octet).\n* This full-shell configuration provides maximum electronic stability, making noble gases chemically inert.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q19",
    createdAt: "2026-04-24T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv2_7-2023",
    question: "An element X has two isotopes: $^{35}\\text{X}$ with an abundance of 75% and $^{37}\\text{X}$ with an abundance of 25%. What is the relative atomic mass ($A_r$) of element X?",
    options: [
      { text: "35.0" },
      { text: "35.5" },
      { text: "36.0" },
      { text: "37.0" }
    ],
    correctAnswer: 1,
    explanation: "* Relative atomic mass ($A_r$) is the weighted average mass of naturally occurring isotopes relative to carbon-12.\n* $A_r = \\frac{(35 \\times 75) + (37 \\times 25)}{100} = \\frac{2625 + 925}{100} = \\frac{3550}{100} = 35.5$.\n* This matches chlorine ($Cl$).",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q6",
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv2_8-2024",
    question: "Which statement correctly describes two isotopes of the same element?",
    options: [
      { text: "They have identical numbers of neutrons but different numbers of protons" },
      { text: "They have different chemical properties because their electron configurations differ" },
      { text: "They have the same number of protons and identical chemical properties, but different physical properties such as density and mass" },
      { text: "They have identical nucleon numbers" }
    ],
    correctAnswer: 2,
    explanation: "* Isotopes have identical proton numbers and identical electron configurations, giving them identical chemical properties.\n* Because they have different numbers of neutrons, they have different mass numbers and different physical properties (such as density and diffusion rates).",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q6",
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv2_9-2025",
    question: "An ion of element Y has 18 electrons, 16 protons, and 16 neutrons. What is the correct formula and symbol for this ion?",
    options: [
      { text: "$^{32}_{16}\\text{S}^{2-}$" },
      { text: "$^{32}_{16}\\text{S}^{2+}$" },
      { text: "$^{34}_{16}\\text{S}^{2-}$" },
      { text: "$^{34}_{18}\\text{Ar}^{2-}$" }
    ],
    correctAnswer: 0,
    explanation: "* 16 protons identifies the element as sulfur (S, $Z = 16$).\n* Nucleon number = 16 protons + 16 neutrons = 32.\n* Charge = 16 protons (+) + 18 electrons (-) = $2-$.\n* The complete symbol is $^{32}_{16}\\text{S}^{2-}$.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q6",
    createdAt: "2025-06-01T10:00:00Z"
  }
];



