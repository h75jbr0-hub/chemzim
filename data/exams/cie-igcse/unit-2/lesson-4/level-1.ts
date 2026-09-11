import { Question } from '../../../types';

// Simple Molecules and Covalent Bonds - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u2_l4_lv1_1-2026",
    question: "How many single covalent bonds (shared pairs of valence electrons) are present in one molecule of ammonia (NH₃)?",
    options: [
      { text: "3 single covalent bonds (and 1 lone pair of electrons on the nitrogen atom)" },
      { text: "1 triple covalent bond" },
      { text: "4 single covalent bonds" },
      { text: "2 double covalent bonds" }
    ],
    correctAnswer: 0,
    explanation: "* Nitrogen (Z = 7, electronic configuration 2,5) needs 3 electrons to complete its valence octet.\n* Each of the 3 hydrogen atoms shares 1 electron with nitrogen, forming 3 single covalent N-H bonds.\n* The remaining 2 outer electrons on nitrogen form 1 non-bonding lone pair.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q7",
    lessonNum: 4,
    createdAt: "2026-05-16T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv1_2-nitrogen-molecule-electrons",
    question: "Which diagram represents the outer shell electrons arrangement in the nitrogen molecule (N₂)?",
    options: [
      { text: "Two nitrogen atoms sharing 2 electrons, with 4 non-bonding electrons each" },
      { text: "Two nitrogen atoms sharing 4 electrons, with 2 non-bonding electrons each" },
      { text: "Two nitrogen atoms sharing 6 electrons (3 pairs), with 2 non-bonding electrons (1 lone pair) on each atom" },
      { text: "Two nitrogen atoms with 8 shared electrons between them" }
    ],
    correctAnswer: 2,
    explanation: "* Nitrogen atoms have 5 valence electrons each and need 3 electrons to reach an octet.\n* They share 3 pairs of electrons (6 electrons in total) forming a triple bond (N ≡ N).\n* Each nitrogen retains 2 unshared electrons (1 lone pair).",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q8",
    lessonNum: 4,
    createdAt: "2026-05-16T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv1_3-four-shared-electrons",
    question: "A covalent molecule M contains a total of four shared electrons. What is the identity of M?",
    options: [
      { text: "Ammonia, NH₃" },
      { text: "Hydrogen chloride, HCl" },
      { text: "Water, H₂O" },
      { text: "Methane, CH₄" }
    ],
    correctAnswer: 2,
    explanation: "* Water (H₂O) has two single O-H covalent bonds. Each single bond contains 2 shared electrons, giving a total of 4 shared electrons (2 pairs).\n* Ammonia has 6 shared electrons, methane has 8, and HCl has 2.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q8",
    lessonNum: 4,
    createdAt: "2026-05-16T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv1_4-graphite-diamond-correct",
    question: "Which statement about graphite and diamond is correct?",
    options: [
      { text: "Diamond and graphite both have giant covalent structures" },
      { text: "Diamond is covalent, and graphite is ionic" },
      { text: "Diamond and graphite both conduct electricity" },
      { text: "Diamond has a high melting point, but graphite does not" }
    ],
    correctAnswer: 0,
    explanation: "* Diamond and graphite are both allotropes of carbon with giant 3D covalent structures (macromolecules).\n* Both have extremely high melting points (> 3500 °C). Only graphite conducts electricity.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 23 Q7",
    lessonNum: 4,
    createdAt: "2026-05-16T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv1_5-diamond-silica-giant",
    question: "Diamond and silicon(IV) oxide both have giant structures. Which statements are correct?\n1) Both substances are compounds\n2) There are strong covalent bonds in diamond\n3) Silicon(IV) oxide is bonded ionically\n4) Both substances have very high melting points",
    options: [
      { text: "2 and 3" },
      { text: "1 and 2" },
      { text: "3 and 4" },
      { text: "2 and 4" }
    ],
    correctAnswer: 3,
    explanation: "* Statement 2 is correct: diamond is held by strong C-C covalent bonds throughout its tetrahedral lattice.\n* Statement 4 is correct: both giant structures require enormous thermal energy to break their covalent bonds, giving very high melting points.\n* Diamond is an element (pure carbon), not a compound. Silicon(IV) oxide is covalent, not ionic.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q9",
    lessonNum: 4,
    createdAt: "2026-05-16T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv1_6-2023",
    question: "How many shared pairs of electrons (covalent bonds) and how many unshared lone pairs of electrons are present in a molecule of water ($H_2O$)?",
    options: [
      { text: "2 shared pairs, 2 lone pairs" },
      { text: "2 shared pairs, 0 lone pairs" },
      { text: "4 shared pairs, 0 lone pairs" },
      { text: "1 shared pair, 3 lone pairs" }
    ],
    correctAnswer: 0,
    explanation: "* Oxygen has 6 valence electrons ($2, 6$).\n* It shares 1 electron with each of the two hydrogen atoms, forming 2 single covalent bonds (2 shared pairs).\n* The remaining 4 valence electrons remain on the oxygen atom as 2 non-bonding lone pairs.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q10",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv1_7-2024",
    question: "Which of the following molecules contains a double covalent bond?",
    options: [
      { text: "Hydrogen ($H_2$)" },
      { text: "Methane ($CH_4$)" },
      { text: "Oxygen ($O_2$)" },
      { text: "Nitrogen ($N_2$)" }
    ],
    correctAnswer: 2,
    explanation: "* Oxygen atoms have 6 valence electrons and each needs 2 electrons to complete its octet.\n* Two oxygen atoms share 2 pairs of electrons (4 electrons total), forming a double covalent bond ($O=O$).\n* $H_2$ and $CH_4$ contain single bonds; $N_2$ contains a triple bond.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q10",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv1_8-2025",
    question: "Why do simple molecular covalent substances such as methane ($CH_4$) and oxygen ($O_2$) have low boiling points?",
    options: [
      { text: "The covalent bonds between atoms within the molecules are extremely weak" },
      { text: "Only weak intermolecular forces exist between the molecules, requiring little thermal energy to overcome" },
      { text: "They conduct electricity easily, causing them to boil" },
      { text: "Their molecules lose mass upon gentle heating" }
    ],
    correctAnswer: 1,
    explanation: "* In simple molecular structures, strong covalent bonds join the atoms inside each molecule.\n* However, the intermolecular forces between separate molecules are very weak, and it is only these weak forces that are overcome during melting and boiling.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q10",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];


