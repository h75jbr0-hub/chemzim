import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u5_l2_lv1_1-2026",
    question: "What is the IUPAC chemical definition of a transition element?",
    options: [
      { text: "Any element in the d-block of the periodic table" },
      { text: "A d-block element that forms at least one stable simple ion with an incompletely filled d-subshell (1 to 9 d-electrons)", isCorrect: true },
      { text: "An element with a full 3d subshell in its elemental state" },
      { text: "Any metal that forms colored salts" }
    ],
    correctAnswer: 1,
    explanation: "* By IUPAC definition, a transition element must form at least one stable ion with a partially filled $d$-subshell ($d^1$ to $d^9$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q15",
    createdAt: "2027-01-28T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_2-2026",
    question: "Why are scandium ($\\text{Sc}$) and zinc ($\\text{Zn}$) classified as d-block elements, but strictly NOT transition elements?",
    options: [
      { text: "They are non-metals" },
      { text: "Scandium forms only Sc³⁺ (which has an empty 3d⁰ configuration) and zinc forms only Zn²⁺ (which has a completely filled 3d¹⁰ configuration); neither ion possesses a partially filled d-subshell", isCorrect: true },
      { text: "They have very low melting points" },
      { text: "They do not react with water" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Sc}^{3+} = [\\text{Ar}]3d^0$ (empty) and $\\text{Zn}^{2+} = [\\text{Ar}]3d^{10}$ (full). Neither has an incompletely filled $d$-subshell, so they are not transition elements.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q16",
    createdAt: "2027-01-28T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_3-2026",
    question: "What is the ground-state electron configuration of a copper atom ($\\text{Cu}$, $Z = 29$) and a chromium atom ($\\text{Cr}$, $Z = 24$)?",
    options: [
      { text: "Cu: [Ar] 4s² 3d⁹; Cr: [Ar] 4s² 3d⁴" },
      { text: "Cu: [Ar] 3d¹⁰ 4s¹; Cr: [Ar] 3d⁵ 4s¹ (due to the enhanced stability of completely filled and half-filled 3d subshells)", isCorrect: true },
      { text: "Cu: [Ar] 3d¹¹; Cr: [Ar] 3d⁶" },
      { text: "Cu: [Ar] 4s¹ 3d⁸ 4p²; Cr: [Ar] 4s² 3d³ 4p¹" }
    ],
    correctAnswer: 1,
    explanation: "* Special stability of full ($3d^{10}$) and half-full ($3d^5$) subshells causes an electron to promote from $4s$ to $3d$: $\\text{Cu} = [\\text{Ar}]3d^{10}4s^1$ and $\\text{Cr} = [\\text{Ar}]3d^54s^1$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q13",
    createdAt: "2027-01-29T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_4-2026",
    question: "What is a ligand in transition metal coordination chemistry?",
    options: [
      { text: "An electron-deficient metal cation" },
      { text: "An anion or neutral molecule possessing at least one lone pair of electrons that it donates to a central metal ion to form a dative covalent (coordinate) bond", isCorrect: true },
      { text: "A catalyst that speeds up precipitation" },
      { text: "A spectator ion in the crystal lattice" }
    ],
    correctAnswer: 1,
    explanation: "* A ligand is a Lewis base that donates a lone pair to the central transition metal ion (Lewis acid) forming coordinate bonds.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q16",
    createdAt: "2027-01-29T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_5-2026",
    question: "What is the coordination number and geometry of the hexaaquairon(II) complex ion $[\\text{Fe(H}_2\\text{O)}_6]^{2+}$?",
    options: [
      { text: "Coordination number = 4; Tetrahedral" },
      { text: "Coordination number = 6; Octahedral", isCorrect: true },
      { text: "Coordination number = 4; Square planar" },
      { text: "Coordination number = 2; Linear" }
    ],
    correctAnswer: 1,
    explanation: "* Six monodentate $\\text{H}_2\\text{O}$ ligands form 6 coordinate bonds in an **octahedral** geometry ($90^\\circ$ bond angles).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q17",
    createdAt: "2027-01-30T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_6-2026",
    question: "Which of the following is a BIDENTATE ligand capable of forming two coordinate bonds from two different donor atoms per ligand molecule?",
    options: [
      { text: "Water (H₂O)" },
      { text: "1,2-diaminoethane (en, H₂N–CH₂–CH₂–NH₂) or ethanedioate ion (oxalate, C₂O₄²⁻)", isCorrect: true },
      { text: "Chloride ion (Cl⁻)" },
      { text: "Ammonia (NH₃)" }
    ],
    correctAnswer: 1,
    explanation: "* 1,2-diaminoethane possesses two nitrogen atoms with lone pairs, and ethanedioate ($\text{C}_2\\text{O}_4^{2-}$) has two oxygen donor atoms, making them **bidentate**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q14",
    createdAt: "2027-01-30T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_7-2026",
    question: "Why do transition metal complex ions exhibit distinct, vibrant colors in aqueous solution?",
    options: [
      { text: "They emit nuclear radiation" },
      { text: "Ligands split the five degenerate 3d orbitals into two energy levels (ΔE); d-electrons absorb specific frequencies of visible light (ΔE = hν) to transition from lower to higher d-orbitals, transmitting the complementary color", isCorrect: true },
      { text: "Color is caused by vibrations of the water molecules" },
      { text: "Electrons are emitted as visible photons" }
    ],
    correctAnswer: 1,
    explanation: "* Ligand field crystal field splitting creates an energy gap $\\Delta E$ between $d$-orbitals ($t_{2g}$ and $e_g$). Absorption of $h\\nu$ promotes a $d$-electron ($d\\text{-}d$ transition), and the complementary transmitted wavelength is seen.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q17",
    createdAt: "2027-01-31T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_8-2026",
    question: "What is the coordination number, geometry, and color of the tetrachlorocuprate(II) complex ion $[\\text{CuCl}_4]^{2-}$ formed when concentrated $\\text{HCl}$ is added to aqueous $\\text{Cu}^{2+}$?",
    options: [
      { text: "Coordination number = 6; Octahedral; Blue" },
      { text: "Coordination number = 4; Tetrahedral; Yellow-green", isCorrect: true },
      { text: "Coordination number = 4; Square planar; Red" },
      { text: "Coordination number = 2; Linear; Colorless" }
    ],
    correctAnswer: 1,
    explanation: "* Chloride ligands are large and charged, experiencing steric/electrostatic repulsion that limits the coordination number to 4 in a **tetrahedral** arrangement: $[\\text{CuCl}_4]^{2-}$ is **yellow-green**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q18",
    createdAt: "2027-01-31T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_9-2026",
    question: "What is the oxidation state and electron configuration of the iron ion in the hexacyanoferrate(II) complex $[\\text{Fe(CN)}_6]^{4-}$ ($Z = 26$)?",
    options: [
      { text: "+3; [Ar] 3d⁵" },
      { text: "+2; [Ar] 3d⁶", isCorrect: true },
      { text: "+2; [Ar] 4s² 3d⁴" },
      { text: "+4; [Ar] 3d⁴" }
    ],
    correctAnswer: 1,
    explanation: "* Let oxidation state be $x$: $x + 6(-1) = -4 \\implies x = \\mathbf{+2}$. Neutral $\\text{Fe} = [\\text{Ar}]3d^64s^2 \\implies \\text{Fe}^{2+} = \\mathbf{[\\text{Ar}]3d^6}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q65",
    createdAt: "2027-04-08T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_10-2026",
    question: "Which of the following transition metal ions forms a COMPLETELY COLORLESS aqueous solution in water?",
    options: [
      { text: "Cu²⁺(aq) (blue)" },
      { text: "Sc³⁺(aq) ([Ar] 3d⁰) or Zn²⁺(aq) ([Ar] 3d¹⁰)", isCorrect: true },
      { text: "Fe³⁺(aq) (yellow-brown)" },
      { text: "Ni²⁺(aq) (green)" }
    ],
    correctAnswer: 1,
    explanation: "* Color requires $d\\text{-}d$ electronic transitions. $\\text{Sc}^{3+}$ ($3d^0$, no $d$-electrons) and $\\text{Zn}^{2+}$ ($3d^{10}$, no empty $d$-orbitals) cannot undergo $d\\text{-}d$ transitions $\\implies$ **colorless**.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q65",
    createdAt: "2027-04-08T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_11-2026",
    question: "What is the coordination number and geometry of the diamminesilver(I) complex ion $[\\text{Ag(NH}_3)_2]^+$ present in Tollens' reagent?",
    options: [
      { text: "Coordination number = 4; Tetrahedral" },
      { text: "Coordination number = 2; Linear (180° bond angle)", isCorrect: true },
      { text: "Coordination number = 6; Octahedral" },
      { text: "Coordination number = 4; Square planar" }
    ],
    correctAnswer: 1,
    explanation: "* Two ammonia ligands form 2 coordinate bonds with $\\text{Ag}^+$ in a **linear** geometry ($180^\\circ$): $[\\text{H}_3\\text{N}-\\text{Ag}-\\text{NH}_3]^+$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q55",
    createdAt: "2027-04-09T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_12-2026",
    question: "What observation is made when aqueous sodium hydroxide is added dropwise until in excess to an aqueous solution of chromium(III) sulfate ($[\\text{Cr(H}_2\\text{O)}_6]^{3+}$)?",
    options: [
      { text: "A blue precipitate forms that dissolves to a yellow solution" },
      { text: "A green precipitate of Cr(OH)₃(s) forms initially, which redissolves in excess NaOH(aq) to give a dark green solution of the hexahydroxochromate(III) complex ion [Cr(OH)₆]³⁻", isCorrect: true },
      { text: "A white precipitate forms that is insoluble in excess" },
      { text: "A brown precipitate forms with gas evolution" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Cr(OH)}_3\\text{(s)}$ is **amphoteric**: it dissolves in excess alkali via $[\\text{Cr(OH)}_3(\\text{H}_2\\text{O})_3] + 3\\text{OH}^- \\rightarrow \\mathbf{[\\text{Cr(OH)}_6]^{3-}\\text{(aq (dark green))}} + 3\\text{H}_2\\text{O}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q66",
    createdAt: "2027-04-09T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_13-2026",
    question: "What is the definition of a hexadentate ligand, and what is the standard example in analytical chemistry?",
    options: [
      { text: "A ligand that donates 2 electron pairs; Ethanedioate" },
      { text: "A ligand that donates 6 lone pairs of electrons from 6 different donor atoms per ligand molecule to form 6 coordinate bonds; EDTA⁴⁻ (ethylenediaminetetraacetate)", isCorrect: true },
      { text: "A ligand containing 6 carbon atoms; Benzene" },
      { text: "A ligand that coordinates 6 different metal ions simultaneously" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{EDTA}^{4-}$ has 2 nitrogen atoms and 4 carboxylate oxygen atoms with lone pairs, wrapping around a metal ion to form **6 coordinate bonds** (**hexadentate**).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q66",
    createdAt: "2027-04-10T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_14-2026",
    question: "What is the characteristic color of aqueous vanadium in its four common positive oxidation states: $\\text{V(V)}$, $\\text{V(IV)}$, $\\text{V(III)}$, and $\\text{V(II)}$?",
    options: [
      { text: "V(V): Purple; V(IV): Green; V(III): Blue; V(II): Yellow" },
      { text: "V(V) (VO₂⁺): Yellow; V(IV) (VO²⁺): Blue; V(III) (V³⁺): Green; V(II) (V²⁺): Violet/Purple", isCorrect: true },
      { text: "All vanadium oxidation states are pink" },
      { text: "V(V): Colorless; V(IV): Red; V(III): Orange; V(II): Green" }
    ],
    correctAnswer: 1,
    explanation: "* Mnemonic: **You Better Get Victorious** $\\implies$ **Y**ellow $\\text{V(V)}$, **B**lue $\\text{V(IV)}$, **G**reen $\\text{V(III)}$, **V**iolet $\\text{V(II)}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q56",
    createdAt: "2027-04-10T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_15-2026",
    question: "What observation occurs when excess concentrated ammonia is added to an aqueous solution containing hexaaquacopper(II) ions ($[\\text{Cu(H}_2\\text{O)}_6]^{2+}$)?",
    options: [
      { text: "A green solution forms" },
      { text: "The pale blue precipitate of Cu(OH)₂(s) formed initially dissolves in excess NH₃ to form a deep royal blue solution of the tetraamminediaquacopper(II) complex ion [Cu(NH₃)₄(H₂O)₂]²⁺", isCorrect: true },
      { text: "A ruby red solution forms" },
      { text: "A white precipitate forms" }
    ],
    correctAnswer: 1,
    explanation: "* In excess $\\text{NH}_3$, four water ligands undergo ligand exchange: $\\text{Cu(OH)}_2\\text{(s)} + 4\\text{NH}_3 + 2\\text{H}_2\\text{O} \\rightarrow \\mathbf{[\\text{Cu(NH}_3)_4(\\text{H}_2\\text{O})_2]^{2+}\\text{(aq (deep royal blue))}} + 2\\text{OH}^-$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q67",
    createdAt: "2027-04-11T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv1_16-2026",
    question: "Why do transition metals exhibit variable oxidation states in their chemical compounds?",
    options: [
      { text: "Their nuclear charge constantly fluctuates" },
      { text: "The 4s and 3d subshell energy levels are very close in energy, allowing variable numbers of 4s and 3d electrons to be involved in chemical bonding without requiring prohibitively large jumps in successive ionization energies", isCorrect: true },
      { text: "They lose protons during oxidation" },
      { text: "They absorb gamma rays" }
    ],
    correctAnswer: 1,
    explanation: "* The energetic proximity of $3d$ and $4s$ orbitals enables gradual removal of both $4s$ and $3d$ electrons without huge ionization energy barriers.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q67",
    createdAt: "2027-04-11T10:00:00Z"
  }
];


