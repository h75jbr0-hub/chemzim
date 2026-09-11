import { Question } from '../../../types';

// Ions and Ionic Bonds - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u2_l3_lv3_1-2026",
    question: "Magnesium oxide ($MgO$) and sodium chloride ($NaCl$) both form giant ionic lattices. Why is the melting point of magnesium oxide ($2852^\\circ\\text{C}$) vastly higher than that of sodium chloride ($801^\\circ\\text{C}$)?",
    options: [
      { text: "$Mg^{2+}$ and $O^{2-}$ ions carry double the charge of $Na^+$ and $Cl^-$ ions, resulting in much stronger electrostatic attractions in the lattice that require significantly more thermal energy to break apart" },
      { text: "Magnesium oxide contains giant covalent macromolecular bonds rather than ionic bonds" },
      { text: "Sodium chloride molecules are simple covalent structures held by weak intermolecular forces" },
      { text: "Magnesium is a denser metal than sodium, which prevents the lattice from expanding" }
    ],
    correctAnswer: 0,
    explanation: "* Electrostatic attraction between ions is proportional to the product of their ionic charges ($q_1 \\times q_2$).\n* In $MgO$, the charges are $+2$ and $-2$ ($|q_1 q_2| = 4$), whereas in $NaCl$, the charges are $+1$ and $-1$ ($|q_1 q_2| = 1$).\n* The fourfold stronger ionic attractions in $MgO$ require far greater kinetic energy (higher temperature) to overcome and melt the crystal lattice.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 23 Q8",
    createdAt: "2026-05-15T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv3_2-2023",
    question: "Comparing the ionic lattices of sodium fluoride ($NaF$), sodium chloride ($NaCl$), and sodium bromide ($NaBr$), which compound has the highest lattice energy and highest melting point, and why?",
    options: [
      { text: "$NaBr$, because the bromide ion has the largest radius and highest mass" },
      { text: "$NaF$, because all three have $+1$ and $-1$ charges, but the fluoride ion ($F^-$) has the smallest ionic radius, allowing ions to pack closer and produce stronger electrostatic attraction" },
      { text: "$NaCl$, because chlorine is in the middle of Group VII" },
      { text: "All three have identical melting points because the sodium cation is the same" }
    ],
    correctAnswer: 1,
    explanation: "* Lattice strength depends on both ionic charge and ionic radius ($F \\propto \\frac{q_1 q_2}{r^2}$).\n* While all three salts have $1+$ and $1-$ charges, the halide ionic radii increase down the group: $F^- < Cl^- < Br^-$.\n* The smaller $F^-$ ion allows a shorter inter-ionic distance to $Na^+$, maximizing electrostatic attraction and giving $NaF$ the highest melting point (993 °C vs 801 °C for $NaCl$ and 747 °C for $NaBr$).",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q9",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv3_3-2024",
    question: "Which of the following compounds contains BOTH ionic bonding and covalent bonding within its solid crystalline structure?",
    options: [
      { text: "Potassium chloride ($KCl$)" },
      { text: "Sodium nitrate ($NaNO_3$)" },
      { text: "Carbon dioxide ($CO_2$)" },
      { text: "Methane ($CH_4$)" }
    ],
    correctAnswer: 1,
    explanation: "* Sodium nitrate contains $Na^+$ cations and nitrate polyatomic anions ($NO_3^-$) held together by ionic bonds.\n* Within the nitrate anion ($NO_3^-$), the nitrogen and oxygen atoms are held together by covalent bonds, so $NaNO_3$ contains both ionic and covalent bonding.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q8",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv3_4-2025",
    question: "A solid compound X conducts electricity when molten but is insoluble in organic non-polar solvents. A concentrated aqueous solution of X is electrolysed using inert carbon electrodes, producing hydrogen gas at the cathode and chlorine gas at the anode. What is the nature of compound X?",
    options: [
      { text: "A non-polar simple covalent compound" },
      { text: "An ionic salt containing chloride ions (e.g. sodium chloride or potassium chloride)" },
      { text: "A giant macromolecular covalent crystal" },
      { text: "A pure metallic element" }
    ],
    correctAnswer: 1,
    explanation: "* Conduction when molten and insolubility in organic non-polar solvents are hallmark characteristics of ionic compounds.\n* Electrolysis yielding chlorine at the anode ($2Cl^- \\rightarrow Cl_2 + 2e^-$) and hydrogen at the cathode ($2H^+ + 2e^- \\rightarrow H_2$) confirms an aqueous metal chloride salt such as $NaCl$.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q8",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

