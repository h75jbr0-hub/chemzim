import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u1_l3_lv3_1-2026",
    question: "Using VSEPR theory, predict the electron pair geometry, the molecular shape, and the bond angles in sulfur tetrafluoride, $\\text{SF}_4$.",
    options: [
      { text: "Tetrahedral electron geometry, tetrahedral shape, 109.5°" },
      { text: "Trigonal bipyramidal electron geometry, see-saw shape, <90° and <120°", isCorrect: true },
      { text: "Octahedral electron geometry, square planar shape, 90°" },
      { text: "Trigonal bipyramidal electron geometry, T-shaped, 90°" }
    ],
    correctAnswer: 1,
    explanation: "* Sulfur has 6 valence electrons and forms 4 single bonds with fluorines plus 1 lone pair (total 5 electron pairs $\\implies$ trigonal bipyramidal electron geometry).\n* The lone pair occupies an equatorial position to minimize $90^\\circ$ repulsions, producing a **see-saw** molecular shape with angles of approximately $87^\\circ$ (axial-equatorial) and $102^\\circ$ (equatorial-equatorial).",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q24",
    createdAt: "2026-06-05T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv3_2-2026",
    question: "Which of the following compounds contains BOTH ionic bonding and covalent bonding (including dative covalent bonding)?",
    options: [
      { text: "MgCl₂" },
      { text: "NH₄Cl", isCorrect: true },
      { text: "CH₄" },
      { text: "SiO₂" }
    ],
    correctAnswer: 1,
    explanation: "* Ammonium chloride ($\\text{NH}_4\\text{Cl}$) has an ionic lattice between $\\text{NH}_4^+$ cations and $\\text{Cl}^-$ anions.\n* Inside each ammonium ion ($\\text{NH}_4^+$), there are 3 standard $\\text{N}-\\text{H}$ covalent bonds and 1 dative covalent (coordinate) bond formed by the donation of nitrogen's lone pair to an $\\text{H}^+$ ion.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q24",
    createdAt: "2026-06-05T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv3_3-2026",
    question: "Under Fajan's Rules, which combination of ionic properties produces the maximum degree of covalent character (polarization) in an ionic compound?",
    options: [
      { text: "Large cation with low charge, and small anion with low charge" },
      { text: "Small cation with high charge (high charge density), and large polarizable anion with high negative charge", isCorrect: true },
      { text: "Large cation with high charge, and small anion with high charge" },
      { text: "Small cation with low charge, and large anion with low charge" }
    ],
    correctAnswer: 1,
    explanation: "* According to Fajan's Rules, covalent character increases when a small, highly charged cation (high polarizing power) distorts the electron cloud of a large, highly charged anion (high polarizability), leading to electron sharing.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q24",
    createdAt: "2026-06-06T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv3_4-2026",
    question: "Using VSEPR theory, deduce the shape and bond angle of the xenon tetrafluoride molecule, $\\text{XeF}_4$.",
    options: [
      { text: "Tetrahedral, 109.5°" },
      { text: "See-saw, <90° and <120°" },
      { text: "Square planar, 90°", isCorrect: true },
      { text: "Octahedral, 90°" }
    ],
    correctAnswer: 2,
    explanation: "* Xenon has 8 valence electrons, forming 4 single bonds with fluorines and keeping 2 lone pairs (total 6 electron pairs $\\implies$ octahedral electron geometry).\n* The 2 lone pairs occupy axial positions opposite each other ($180^\\circ$) to minimize electron repulsions, producing a planar **square planar** geometry with $90^\\circ$ bond angles.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Oct 2025 Paper 1 Q27",
    createdAt: "2026-06-11T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv3_5-2026",
    question: "Experimental lattice enthalpy for silver iodide ($\\text{AgI}$) is $-889\\text{ kJ mol}^{-1}$, whereas the theoretical value calculated using the purely ionic Born-Mayer model is $-833\\text{ kJ mol}^{-1}$. What accounts for this discrepancy?",
    options: [
      { text: "Silver iodide contains covalent triple bonds" },
      { text: "The small $\\text{Ag}^+$ ion polarizes the large, highly polarizable $\\text{I}^-$ electron cloud, introducing significant covalent character that strengthens the bonding beyond purely electrostatic forces", isCorrect: true },
      { text: "Experimental measurement errors" },
      { text: "Iodide ions undergo radioactive decay" }
    ],
    correctAnswer: 1,
    explanation: "* The theoretical Born-Mayer model assumes $100\\%$ spherical, non-polarizable point charges.\n* The large difference between experimental and theoretical values indicates substantial covalent character (polarization of the $\\text{I}^-$ anion by the $\\text{Ag}^+$ cation), which provides extra bond strength.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q28",
    createdAt: "2026-06-11T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv3_6-2026",
    question: "Which of the following species has a bond angle greater than 120°?",
    options: [
      { text: "NO₂⁺ (Nitronium ion)", isCorrect: true },
      { text: "NO₂⁻ (Nitrite ion)" },
      { text: "NO₂ (Nitrogen dioxide)" },
      { text: "NH₄⁺ (Ammonium ion)" }
    ],
    correctAnswer: 0,
    explanation: "* In the nitronium ion ($\\text{NO}_2^+$), nitrogen has 2 double bonds ($\text{O}=\text{N}^+=\text{O}$) and 0 lone pairs, giving a linear geometry with a **$180^\\circ$** bond angle.\n* $\\text{NO}_2^-$ is bent ($\approx 115^\\circ$), $\\text{NO}_2$ is bent ($\approx 134^\\circ$), and $\\text{NH}_4^+$ is tetrahedral ($109.5^\\circ$).",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / Jan 2026 Paper 1 Q27",
    createdAt: "2026-06-12T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv3_7-june2026",
    question: "What is the shape and approximate bond angle of chlorine trifluoride, ClF₃?",
    options: [
      { text: "T-shaped, ~87.5°", isCorrect: true },
      { text: "Trigonal planar, 120°" },
      { text: "Trigonal pyramidal, 107°" },
      { text: "See-saw, ~102° and ~173°" }
    ],
    correctAnswer: 0,
    explanation: "* The central chlorine atom has 7 valence electrons, forming 3 single bonds with fluorines and leaving 2 non-bonding lone pairs (total 5 electron pairs $\\\\implies$ trigonal bipyramidal electron geometry).\n* The 2 lone pairs occupy equatorial positions to minimise $90^\\\\circ$ repulsions, giving a **T-shaped** molecular geometry with bond angles compressed to approximately $87.5^\\\\circ$.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2026 Paper 1 Q5",
    createdAt: "2026-06-15T10:00:00Z"
  },
  {
    id: "ex_ed_u1_l3_lv3_8-june2026",
    question: "Which of the following Group 2 carbonates requires the HIGHEST temperature to undergo thermal decomposition?",
    options: [
      { text: "Barium carbonate, BaCO₃", isCorrect: true },
      { text: "Strontium carbonate, SrCO₃" },
      { text: "Calcium carbonate, CaCO₃" },
      { text: "Magnesium carbonate, MgCO₃" }
    ],
    correctAnswer: 0,
    explanation: "* Moving down Group 2, the ionic radius of the cation increases ($\\\\text{Mg}^{2+} < \\\\text{Ca}^{2+} < \\\\text{Sr}^{2+} < \\\\text{Ba}^{2+}$), reducing charge density and polarizing power.\n* The larger $\\\\text{Ba}^{2+}$ cation polarises the large $\\\\text{CO}_3^{2-}$ electron cloud least effectively, weakening the $\\\\text{C–O}$ bond least.\n* Consequently, $\\\\text{BaCO}_3$ is thermally the most stable and requires the highest decomposition temperature.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 / June 2025 Paper 1 Q6",
    createdAt: "2026-06-15T10:00:00Z"
  }
];


