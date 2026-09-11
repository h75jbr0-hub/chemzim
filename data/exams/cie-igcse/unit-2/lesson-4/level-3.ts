import { Question } from '../../../types';

// Simple Molecules and Covalent Bonds - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u2_l4_lv3_1-2026",
    question: "Tetrachloromethane ($CCl_4$) and silicon(IV) oxide ($SiO_2$) both contain Group IV elements bonded covalently to non-metals. Why is $CCl_4$ a volatile liquid with a low boiling point ($76.7^\\circ\\text{C}$), whereas $SiO_2$ (quartz) is an extremely hard solid with a very high melting point ($1710^\\circ\\text{C}$)?",
    options: [
      { text: "$CCl_4$ consists of simple discrete molecules held by weak intermolecular forces, whereas $SiO_2$ is a giant macromolecular covalent lattice where every silicon atom is bonded to 4 oxygen atoms by strong covalent bonds extending in 3 dimensions throughout the entire structure" },
      { text: "$CCl_4$ has ionic bonding between $C^{4+}$ and $Cl^-$ ions while $SiO_2$ has metallic bonding" },
      { text: "Silicon is a metal with a sea of delocalised electrons while carbon is a non-metal" },
      { text: "The covalent $C-Cl$ bond is much weaker than standard intermolecular forces" }
    ],
    correctAnswer: 0,
    explanation: "* $CCl_4$ has a simple molecular structure: only weak intermolecular attractions between molecules need to be broken to boil it, requiring little energy.\n* $SiO_2$ has a giant covalent macromolecular structure (similar to diamond): melting requires breaking millions of strong covalent $Si-O$ bonds throughout the 3D lattice, requiring enormous thermal energy.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 23 Q10",
    createdAt: "2026-05-18T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv3_2-2023",
    question: "Which of the following compounds has the highest boiling point and why? ($CH_4$, $C_2H_6$, $C_3H_8$, $C_4H_{10}$)",
    options: [
      { text: "$CH_4$, because it is the smallest and molecules pack tightest" },
      { text: "$C_4H_{10}$, because as relative molecular mass ($M_r$) and molecular size increase, the intermolecular attractive forces between molecules become stronger, requiring more thermal energy to separate them" },
      { text: "$C_2H_6$, because it contains only single C-C bonds" },
      { text: "All four have identical boiling points because they are all non-polar alkanes" }
    ],
    correctAnswer: 1,
    explanation: "* In homologous series of simple covalent molecules (like alkanes), larger molecules have more electrons and larger surface areas.\n* This increases the strength of weak intermolecular forces, resulting in progressively higher boiling points as chain length increases ($CH_4 < C_2H_6 < C_3H_8 < C_4H_{10}$).",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q10",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv3_3-2024",
    question: "Ethene ($C_2H_4$) and ethane ($C_2H_6$) both contain covalent bonds. Which statement is correct regarding the total number of shared electron pairs in one molecule of each gas?",
    options: [
      { text: "Ethene has 5 shared pairs; ethane has 6 shared pairs" },
      { text: "Ethene has 6 shared pairs; ethane has 7 shared pairs" },
      { text: "Ethene has 4 shared pairs; ethane has 8 shared pairs" },
      { text: "Both have 6 shared pairs" }
    ],
    correctAnswer: 1,
    explanation: "* In ethene ($H_2C=CH_2$), there are 4 single C-H bonds and 1 double C=C bond ($4 + 2 = 6\\text{ shared pairs of electrons}$).\n* In ethane ($H_3C-CH_3$), there are 6 single C-H bonds and 1 single C-C bond ($6 + 1 = 7\\text{ shared pairs of electrons}$).",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q10",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv3_4-2025",
    question: "Hydrogen cyanide ($HCN$) has a triple bond between carbon and nitrogen ($H-C \\equiv N$). How many bonding electrons and how many non-bonding valence electrons are present in one molecule of $HCN$?",
    options: [
      { text: "8 bonding electrons, 2 non-bonding electrons" },
      { text: "6 bonding electrons, 4 non-bonding electrons" },
      { text: "4 bonding electrons, 6 non-bonding electrons" },
      { text: "10 bonding electrons, 0 non-bonding electrons" }
    ],
    correctAnswer: 0,
    explanation: "* $H-C$ is a single bond (2 electrons); $C \\equiv N$ is a triple bond (6 electrons).\n* Total bonding electrons = $2 + 6 = 8\\text{ electrons}$ (4 shared pairs).\n* Carbon and hydrogen have no lone pairs; nitrogen has 1 lone pair (2 non-bonding electrons).\n* Total valence electrons = $1 (H) + 4 (C) + 5 (N) = 10 = 8 + 2$.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q8",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

