import { Question } from '../../../types';

// Ions and Ionic Bonds - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u2_l3_lv2_1-2026",
    question: "An element X from Group II reacts with an element Y from Group VII. What is the correct empirical formula of the ionic compound formed, and what are the charges on the respective ions?",
    options: [
      { text: "Formula: $\\text{XY}_2$; Ions: $\\text{X}^{2+}$ and $\\text{Y}^-$" },
      { text: "Formula: $\\text{XY}$; Ions: $\\text{X}^+$ and $\\text{Y}^-$" },
      { text: "Formula: $\\text{X}_2\\text{Y}$; Ions: $\\text{X}^+$ and $\\text{Y}^{2-}$" },
      { text: "Formula: $\\text{X}_2\\text{Y}_7$; Ions: $\\text{X}^{7+}$ and $\\text{Y}^{2-}$" }
    ],
    correctAnswer: 0,
    explanation: "* Group II elements have 2 valence electrons and lose them to form $+2$ cations ($\\text{X}^{2+}$).\n* Group VII elements have 7 valence electrons and gain 1 electron to form $-1$ anions ($\\text{Y}^-$).\n* To form a neutral ionic compound with zero net charge, 1 $\\text{X}^{2+}$ ion pairs with 2 $\\text{Y}^-$ ions, giving the empirical formula $\\text{XY}_2$ (e.g. $MgCl_2$, $CaF_2$).",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q6",
    createdAt: "2026-05-14T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv2_2-2026",
    question: "Why does solid sodium chloride ($NaCl$) act as an electrical insulator, whereas molten sodium chloride and aqueous sodium chloride conduct electricity readily?",
    options: [
      { text: "In the solid state, ions are locked in fixed positions in the rigid 3D lattice and cannot move; in molten and aqueous states, the ions are mobile and free to move toward the electrodes to carry electric charge" },
      { text: "Solid sodium chloride contains only neutral atoms, but melting creates charged ions" },
      { text: "Electrons flow freely through liquid sodium chloride but are absorbed in the solid" },
      { text: "Melting sodium chloride turns it into a metallic lattice with a sea of delocalised electrons" }
    ],
    correctAnswer: 0,
    explanation: "* Electrical conduction in ionic compounds requires mobile charged particles.\n* In solid ionic lattices, $Na^+$ and $Cl^-$ ions are held rigidly by strong electrostatic forces and can only vibrate in place.\n* When melted or dissolved in water, the lattice is broken down, allowing $Na^+$ cations and $Cl^-$ anions to move freely and conduct electric current.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q7",
    createdAt: "2026-05-14T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv2_3-2023",
    question: "Which of the following compounds has the highest melting point and why? ($MgO$ vs $NaCl$)",
    options: [
      { text: "$NaCl$, because sodium has fewer electrons than magnesium" },
      { text: "$MgO$, because $Mg^{2+}$ and $O^{2-}$ carry higher charges ($2+$ and $2-$) than $Na^+$ and $Cl^-$ ($1+$ and $1-$), resulting in much stronger electrostatic attractions in the lattice" },
      { text: "$MgO$, because it is a simple molecular covalent structure" },
      { text: "$NaCl$, because chlorine is in Period 3 and oxygen is in Period 2" }
    ],
    correctAnswer: 1,
    explanation: "* The strength of electrostatic attraction in an ionic lattice is proportional to the product of ionic charges ($q_1 \\times q_2$) and inversely proportional to the square of the distance between ions.\n* In $MgO$, the ions are doubly charged ($Mg^{2+}$ and $O^{2-}$), so the electrostatic attraction is roughly 4 times stronger than in $NaCl$ ($1+$ and $1-$), giving $MgO$ a vastly higher melting point (2852 °C vs 801 °C).",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q9",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv2_4-2024",
    question: "An element M has atomic number 12 and reacts with an element N of atomic number 7. What is the formula of the ionic compound formed between M and N?",
    options: [
      { text: "$MN$" },
      { text: "$M_2N_3$" },
      { text: "$M_3N_2$" },
      { text: "$MN_2$" }
    ],
    correctAnswer: 2,
    explanation: "* Element M ($Z = 12$) has configuration $2, 8, 2$ (magnesium) and loses 2 electrons to form $M^{2+}$.\n* Element N ($Z = 7$) has configuration $2, 5$ (nitrogen) and gains 3 electrons to form nitride, $N^{3-}$.\n* To balance the charges: $3 \\times (+2) + 2 \\times (-3) = 0$, giving the formula $M_3N_2$ (magnesium nitride, $Mg_3N_2$).",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q8",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv2_5-2025",
    question: "Why do ionic crystals such as potassium fluoride fracture and shatter easily when hit with a hammer (brittle behavior)?",
    options: [
      { text: "The impact causes layers of ions to slide, bringing ions of like charges into alignment, producing strong repulsion that splits the lattice" },
      { text: "Potassium fluoride contains weak covalent bonds that break immediately" },
      { text: "Hammering breaks the delocalised electron cloud" },
      { text: "The ions instantly vaporise upon mechanical contact" }
    ],
    correctAnswer: 0,
    explanation: "* When an ionic crystal is struck, a layer of ions shifts relative to the adjacent layer.\n* Ions of like charge (e.g. positive next to positive, negative next to negative) are forced into close contact.\n* The resulting strong electrostatic repulsion forces the crystal planes apart, causing the crystal to fracture along cleavage lines.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q7",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

