import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u1_l3_lv2_1-2026",
    question: "Using VSEPR theory, deduce the shape and approximate bond angle of the ammonia molecule, $\\text{NH}_3$.",
    options: [
      { text: "Trigonal planar, 120°" },
      { text: "Trigonal pyramidal, 107°", isCorrect: true },
      { text: "Tetrahedral, 109.5°" },
      { text: "T-shaped, 90°" }
    ],
    correctAnswer: 1,
    explanation: "* Nitrogen has 5 valence electrons, forming 3 bonding pairs with hydrogens and 1 lone pair (total 4 electron pairs arranged tetrahedrally).\n* Lone pair-bonding pair repulsion is stronger than bonding pair-bonding pair repulsion, reducing the standard tetrahedral angle from $109.5^\\circ$ by roughly $2.5^\\circ$ to **$107^\\circ$** in a **trigonal pyramidal** shape.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q23",
    createdAt: "2026-06-03T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv2_2-2026",
    question: "Which of the following molecules has polar covalent bonds but has NO overall permanent dipole moment (is non-polar)?",
    options: [
      { text: "HCl" },
      { text: "H₂O" },
      { text: "NH₃" },
      { text: "CCl₄", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* In tetrachloromethane ($\\text{CCl}_4$), each $\\text{C}-\\text{Cl}$ bond is polar due to the electronegativity difference between carbon and chlorine.\n* However, the four dipoles are arranged in a perfectly symmetrical tetrahedral geometry, exactly cancelling each other out to give zero net dipole moment.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q23",
    createdAt: "2026-06-03T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv2_3-2026",
    question: "Why does magnesium metal have a significantly higher melting point and higher electrical conductivity than sodium metal?",
    options: [
      { text: "Magnesium has a lower atomic mass than sodium" },
      { text: "Magnesium ions have a $2+$ charge and release two delocalized electrons per atom, resulting in a higher charge density and stronger metallic bonding than the $1+$ ions in sodium", isCorrect: true },
      { text: "Sodium forms covalent networks while magnesium is ionic" },
      { text: "Magnesium has fewer protons in its nucleus" }
    ],
    correctAnswer: 1,
    explanation: "* In metallic bonding, strength is determined by the cation charge and the number of delocalized electrons per atom.\n* $\\text{Mg}^{2+}$ has a smaller ionic radius, double the nuclear charge, and contributes 2 delocalized electrons per atom (compared to 1 for $\\text{Na}^+$), creating much stronger electrostatic attractions to the sea of electrons.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q23",
    createdAt: "2026-06-04T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv2_4-2026",
    question: "Using VSEPR theory, deduce the molecular shape and bond angle of the water molecule, $\\text{H}_2\\text{O}$.",
    options: [
      { text: "Linear, 180°" },
      { text: "Trigonal planar, 120°" },
      { text: "Non-linear (bent / V-shaped), 104.5°", isCorrect: true },
      { text: "Tetrahedral, 109.5°" }
    ],
    correctAnswer: 2,
    explanation: "* Oxygen has 6 valence electrons, forming 2 bonding pairs with hydrogen and retaining 2 lone pairs (total 4 electron pairs in a tetrahedral arrangement).\n* Two lone pairs exert strong lone pair-lone pair and lone pair-bonding pair repulsion, closing the bond angle down to **$104.5^\\circ$** in a **bent (V-shaped)** structure.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q26",
    createdAt: "2026-06-09T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv2_5-2026",
    question: "Which of the following compounds has the highest lattice energy (most negative enthalpy of lattice formation)?",
    options: [
      { text: "NaCl" },
      { text: "KCl" },
      { text: "MgO", isCorrect: true },
      { text: "CaO" }
    ],
    correctAnswer: 2,
    explanation: "* Lattice energy increases with higher ionic charge ($q_1 \\times q_2$) and smaller ionic radii ($r_1 + r_2$).\n* $\\text{MgO}$ contains divalent ions ($\text{Mg}^{2+}$ and $\text{O}^{2-}$, charge product $= 4$) and $\text{Mg}^{2+}$ has a much smaller radius than $\text{Ca}^{2+}$, making $\\text{MgO}$ possess the highest lattice energy.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q27",
    createdAt: "2026-06-09T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv2_6-2026",
    question: "Why is graphite able to conduct electricity while diamond is an electrical insulator?",
    options: [
      { text: "Graphite has metallic bonding while diamond has ionic bonding" },
      { text: "In graphite, each carbon is bonded to three others, leaving one delocalized electron per carbon atom free to move along hexagonal layers; in diamond, all four valence electrons are fixed in localized sigma bonds", isCorrect: true },
      { text: "Diamond contains mobile ions instead of electrons" },
      { text: "Graphite has a simple molecular structure" }
    ],
    correctAnswer: 1,
    explanation: "* In graphite ($sp^2$ hybridized), each carbon forms 3 covalent bonds, leaving 1 delocalized electron per atom in overlapping p orbitals across layers.\n* In diamond ($sp^3$ hybridized), all 4 valence electrons form rigid localized single bonds with no mobile charge carriers.",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q26",
    createdAt: "2026-06-10T10:00:00Z"
  }
];


