import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u2_l2_lv1_1-2026",
    question: "Which of the following is the origin of London dispersion forces (instantaneous dipole - induced dipole interactions)?",
    options: [
      { text: "Electrostatic attraction between oppositely charged full ionic species" },
      { text: "Random, continuous fluctuations in electron cloud density around an atom or molecule creating a temporary instantaneous dipole, which induces an opposite dipole in an adjacent molecule", isCorrect: true },
      { text: "The sharing of a lone pair of electrons to form a coordinate bond" },
      { text: "Electrons moving through a delocalized metal lattice" }
    ],
    correctAnswer: 1,
    explanation: "* London dispersion forces arise in all atoms and molecules due to the unsymmetrical movement of electrons at any given instant, creating temporary dipoles that induce dipoles in neighboring molecules.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q8",
    createdAt: "2026-07-13T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_2-2026",
    question: "Which of the following intermolecular forces is generally the strongest under comparable molecular size?",
    options: [
      { text: "London dispersion forces" },
      { text: "Permanent dipole-dipole attractions" },
      { text: "Hydrogen bonding", isCorrect: true },
      { text: "Gravitational forces" }
    ],
    correctAnswer: 2,
    explanation: "* Hydrogen bonding is the strongest type of intermolecular attraction, occurring when hydrogen is directly bonded to a highly electronegative atom (N, O, or F).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q9",
    createdAt: "2026-07-13T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_3-2026",
    question: "Which of the following molecules can form hydrogen bonds between its own molecules in the pure liquid state?",
    options: [
      { text: "CH₄" },
      { text: "H₂S" },
      { text: "CH₃OH (Methanol)", isCorrect: true },
      { text: "CH₃OCH₃ (Dimethyl ether)" }
    ],
    correctAnswer: 2,
    explanation: "* Hydrogen bonding requires a hydrogen atom covalently bonded directly to Nitrogen, Oxygen, or Fluorine (with available lone pairs).\n* Methanol contains an $-\\text{O}-\\text{H}$ group, allowing intermolecular hydrogen bonding.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q7",
    createdAt: "2026-07-14T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_4-2026",
    question: "Why does the boiling point of the noble gases increase systematically down Group 0 (He < Ne < Ar < Kr < Xe)?",
    options: [
      { text: "Nuclear charge decreases down the group" },
      { text: "The number of electrons per atom increases, increasing the polarizability of the electron cloud and leading to stronger London dispersion forces", isCorrect: true },
      { text: "They form covalent bonds with each other in the liquid state" },
      { text: "Helium forms hydrogen bonds" }
    ],
    correctAnswer: 1,
    explanation: "* Down Group 0, atoms have more electrons and larger electron clouds.\n* The electron cloud is more easily polarized, resulting in stronger instantaneous dipole-induced dipole (London dispersion) forces that require more thermal energy to overcome.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q9",
    createdAt: "2026-07-14T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_5-2026",
    question: "Which of the following compounds has permanent dipole-dipole attractions between its molecules but CANNOT form hydrogen bonds between its own molecules?",
    options: [
      { text: "HF" },
      { text: "H₂O" },
      { text: "HCl", isCorrect: true },
      { text: "NH₃" }
    ],
    correctAnswer: 2,
    explanation: "* Hydrogen chloride ($\\text{HCl}$) is a polar molecule ($^{\\delta+}\\text{H}-\\text{Cl}^{\\delta-}$), so it experiences permanent dipole-dipole attractions.\n* However, Chlorine is not electronegative or small enough to support true hydrogen bonding.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q10",
    createdAt: "2026-07-15T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_6-2026",
    question: "Why is water (H₂O) a liquid at room temperature while hydrogen sulfide (H₂S) is a gas, despite H₂S having a greater molecular mass ($M_r = 34.1$ vs $18.0$)?",
    options: [
      { text: "H₂S has stronger London forces" },
      { text: "Water molecules are held together by extensive intermolecular hydrogen bonds, which require substantially more energy to break than the weaker dipole-dipole and London forces in H₂S", isCorrect: true },
      { text: "H₂S is an ionic solid at high temperature" },
      { text: "Water contains covalent triple bonds" }
    ],
    correctAnswer: 1,
    explanation: "* Oxygen is much more electronegative than sulfur, enabling water to form strong intermolecular hydrogen bonds (two lone pairs and two $\\text{O}-\\text{H}$ bonds per molecule forming a 3D network), giving it an anomalously high boiling point.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q8",
    createdAt: "2026-07-15T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_7-2026",
    question: "Why does solid ice have a lower density than liquid water at 0 °C (allowing ice to float)?",
    options: [
      { text: "Ice contains trapped air bubbles" },
      { text: "In ice, hydrogen bonds hold water molecules in a rigid, open tetrahedral lattice with large spaces; upon melting, the open structure collapses and molecules pack more closely together", isCorrect: true },
      { text: "Liquid water has covalent bonds whereas ice does not" },
      { text: "Water expands upon cooling because electrons expand" }
    ],
    correctAnswer: 1,
    explanation: "* In ice, each water molecule participates in 4 hydrogen bonds in a regular open tetrahedral lattice.\n* When ice melts, some hydrogen bonds break, allowing water molecules to tumble into the open voids and pack closer together, making liquid water denser than ice.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q10",
    createdAt: "2026-07-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_8-2026",
    question: "Why are non-polar organic alkanes like hexane insoluble in water?",
    options: [
      { text: "Hexane molecules react violently with water" },
      { text: "Hexane cannot form hydrogen bonds with water; the weak London attractions between hexane and water cannot overcome the strong hydrogen bonds between water molecules", isCorrect: true },
      { text: "Water molecules are non-polar" },
      { text: "Hexane is a solid at room temperature" }
    ],
    correctAnswer: 1,
    explanation: "* Dissolving hexane would require breaking strong hydrogen bonds between water molecules without releasing sufficient energy from weak hexane-water London interactions, making the dissolution energetically unfavorable.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q11",
    createdAt: "2026-07-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_9-2026",
    question: "Which of the following bonds is the most polar, based on electronegativity differences?",
    options: [
      { text: "C–H" },
      { text: "C–N" },
      { text: "C–O" },
      { text: "C–F", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Polar covalent bonds arise due to differences in electronegativity between the bonded atoms.\n* Fluorine is the most electronegative element in the periodic table, so the $\\text{C}-\\text{F}$ bond has the largest electronegativity difference and is the most polar.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q17",
    createdAt: "2026-07-28T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_10-2026",
    question: "Which of the following molecules contains polar bonds but is non-polar overall due to its symmetrical molecular geometry?",
    options: [
      { text: "BF₃", isCorrect: true },
      { text: "NF₃" },
      { text: "H₂O" },
      { text: "NH₃" }
    ],
    correctAnswer: 0,
    explanation: "* $\\text{BF}_3$ is trigonal planar. Its three polar $\\text{B}-\\text{F}$ bonds point symmetrically in opposite directions, canceling out the dipoles and leaving the molecule with no net dipole moment.\n* $\\text{NF}_3$, $\\text{H}_2\\text{O}$, and $\\text{NH}_3$ are asymmetrical and therefore polar.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q15",
    createdAt: "2026-07-28T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_11-2026",
    question: "What is the primary type of intermolecular force holding carbon dioxide molecules together in dry ice (solid CO₂)?",
    options: [
      { text: "London dispersion forces", isCorrect: true },
      { text: "Permanent dipole-dipole forces" },
      { text: "Hydrogen bonding" },
      { text: "Covalent bonds" }
    ],
    correctAnswer: 0,
    explanation: "* $\\text{CO}_2$ is a linear, symmetrical, non-polar molecule.\n* Therefore, the only intermolecular forces acting between $\\text{CO}_2$ molecules in the solid state are weak London dispersion forces.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2025 Paper 1 Q13",
    createdAt: "2026-07-29T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_12-2026",
    question: "Propanone (CH₃COCH₃) cannot form hydrogen bonds with other propanone molecules. However, it is highly soluble in water because:",
    options: [
      { text: "It forms permanent covalent bonds with water" },
      { text: "The carbonyl oxygen (C=O) in propanone acts as a hydrogen bond acceptor for water's δ+ hydrogen atoms", isCorrect: true },
      { text: "It has a higher boiling point than water" },
      { text: "It reacts with water to form propane gas" }
    ],
    correctAnswer: 1,
    explanation: "* Propanone lacks a highly electronegative atom bonded to hydrogen, so it cannot act as a hydrogen bond donor.\n* However, its electronegative carbonyl oxygen has lone pairs that can accept hydrogen bonds from water molecules, facilitating solubility.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q18",
    createdAt: "2026-07-29T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_13-2026",
    question: "Which of the following noble gases is expected to have the highest boiling point?",
    options: [
      { text: "Helium" },
      { text: "Neon" },
      { text: "Argon" },
      { text: "Krypton", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Boiling points of noble gases increase down the group.\n* Krypton has the largest atomic size and the highest number of electrons among the options, resulting in more polarizable electron clouds and stronger London forces.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q16",
    createdAt: "2026-07-30T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_14-2026",
    question: "Instantaneous dipole-induced dipole interactions are also known as:",
    options: [
      { text: "London dispersion forces", isCorrect: true },
      { text: "Permanent dipole-dipole forces" },
      { text: "Hydrogen bonds" },
      { text: "Electrostatic ionic forces" }
    ],
    correctAnswer: 0,
    explanation: "* Instantaneous dipole-induced dipole interactions are officially referred to as London dispersion forces, which exist between all atoms and molecules.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q14",
    createdAt: "2026-07-30T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_15-2026",
    question: "Why does liquid water have an exceptionally high surface tension compared to non-polar organic liquids?",
    options: [
      { text: "The covalent O–H bonds are very strong" },
      { text: "Extensive intermolecular hydrogen bonds exert a strong net inward attractive force on molecules at the surface", isCorrect: true },
      { text: "Water molecules are linear and highly symmetrical" },
      { text: "Hexane has stronger London forces than water" }
    ],
    correctAnswer: 1,
    explanation: "* Molecules at the liquid surface experience cohesive hydrogen bonds only from below and sideways, causing a net inward pull that minimizes the surface area and creates high surface tension.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q19",
    createdAt: "2026-07-31T10:00:00Z"
  }
];

