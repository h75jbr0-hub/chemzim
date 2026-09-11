import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u2_l2_lv2_1-2026",
    question: "Water (H₂O) has a boiling point of 100 °C, while hydrogen fluoride (HF) has a boiling point of only 19.5 °C, despite HF having a stronger individual hydrogen bond (due to fluorine's higher electronegativity). What accounts for water's higher boiling point?",
    options: [
      { text: "HF is an ionic compound" },
      { text: "Each water molecule forms an average of 2 hydrogen bonds per molecule (using its 2 lone pairs and 2 δ+ hydrogens), forming an extensive 3D network, whereas HF forms an average of only 1 hydrogen bond per molecule (limited by its single hydrogen atom)", isCorrect: true },
      { text: "Water has more electrons than HF" },
      { text: "Fluorine does not possess lone pairs" }
    ],
    correctAnswer: 1,
    explanation: "* In HF, each molecule has 3 lone pairs but only 1 $\\text{H}$ atom, limiting the network to an average of 1 hydrogen bond per molecule in linear chains.\n* Water has a $1:1$ ratio of lone pairs to $\\text{H}$ atoms (2 of each), allowing on average 2 hydrogen bonds per molecule (4 per molecule in ice), creating a vastly more cohesive 3D network.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q11",
    createdAt: "2026-07-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_2-2026",
    question: "Which of the following compounds has the highest boiling point?",
    options: [
      { text: "Propane (CH₃CH₂CH₃, Mr = 44)" },
      { text: "Methoxymethane (CH₃OCH₃, Mr = 46)" },
      { text: "Ethanal (CH₃CHO, Mr = 44)" },
      { text: "Ethanol (CH₃CH₂OH, Mr = 46)", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Propane relies solely on weak London dispersion forces ($bp = -42\\text{ }^\\circ\\text{C}$).\n* Methoxymethane and ethanal experience permanent dipole-dipole attractions ($bp = -24\\text{ }^\\circ\\text{C}$ and $+20\\text{ }^\\circ\\text{C}$).\n* Ethanol possesses strong intermolecular **hydrogen bonding** ($-\\text{OH}$ group), giving it the highest boiling point ($bp = 78.4\\text{ }^\\circ\\text{C}$).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q12",
    createdAt: "2026-07-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_3-2026",
    question: "Why does the boiling point of the hydrogen halides increase in the order: $\\text{HCl} (-85\\text{ }^\\circ\\text{C}) < \\text{HBr} (-67\\text{ }^\\circ\\text{C}) < \\text{HI} (-35\\text{ }^\\circ\\text{C})$?",
    options: [
      { text: "The permanent dipole moment increases from HCl to HI" },
      { text: "Increasing number of electrons and molecular size from HCl to HI increases polarizability, making London dispersion forces significantly stronger and dominant over the decreasing dipole-dipole attractions", isCorrect: true },
      { text: "HI forms hydrogen bonds in the liquid state" },
      { text: "HCl has a giant ionic lattice" }
    ],
    correctAnswer: 1,
    explanation: "* Although permanent dipole moment decreases from $\\text{HCl}$ to $\\text{HI}$ (due to falling electronegativity difference), the number of electrons increases from 18 to 36 to 54.\n* The resulting increase in London dispersion forces easily outweighs the decrease in dipole forces.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q9",
    createdAt: "2026-07-18T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_4-2026",
    question: "Why is propan-1-ol completely miscible with water, whereas hexan-1-ol has very low solubility in water?",
    options: [
      { text: "Hexan-1-ol is an ionic salt" },
      { text: "In hexan-1-ol, the large non-polar hydrophobic hydrocarbon chain disrupts the hydrogen-bonded water structure without forming enough compensating attractions, outweighing the hydrophilic effect of the single –OH group", isCorrect: true },
      { text: "Propan-1-ol cannot form hydrogen bonds" },
      { text: "Hexan-1-ol reacts with water to produce toxic gas" }
    ],
    correctAnswer: 1,
    explanation: "* In short-chain alcohols (propan-1-ol), the hydrophilic $-\\text{OH}$ group forms strong hydrogen bonds with water that dominate the molecule.\n* In long-chain alcohols (hexan-1-ol), the large non-polar alkyl chain is hydrophobic and cannot interact favorably with water, greatly reducing solubility.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q12",
    createdAt: "2026-07-18T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_5-2026",
    question: "Which of the following physical properties of water is a direct consequence of its extensive intermolecular hydrogen bonding network?",
    options: [
      { text: "High surface tension and high specific heat capacity", isCorrect: true },
      { text: "Zero electrical resistance at room temperature" },
      { text: "Low enthalpy of vaporization" },
      { text: "High compressibility" }
    ],
    correctAnswer: 0,
    explanation: "* Hydrogen bonding gives water an unusually high surface tension (molecules at the surface are pulled inward by strong cohesive forces) and a high specific heat capacity ($4.18\\text{ J g}^{-1}\\text{ K}^{-1}$) as heat energy is absorbed breaking hydrogen bonds.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q13",
    createdAt: "2026-07-19T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_6-2026",
    question: "When a charged rod (e.g., electrostatic plastic rod) is held near a thin stream of liquid from a burette, which of the following liquids will be deflected significantly towards the rod?",
    options: [
      { text: "Hexane (C₆H₁₄)" },
      { text: "Tetrachloromethane (CCl₄)" },
      { text: "Trichloromethane (CHCl₃)", isCorrect: true },
      { text: "Cyclohexane (C₆H₁₂)" }
    ],
    correctAnswer: 2,
    explanation: "* Polar molecules align their permanent dipoles in the non-uniform electric field of a charged rod and are attracted towards it.\n* Trichloromethane ($\\text{CHCl}_3$) is polar (net dipole moment towards chlorine), whereas $\\text{CCl}_4$, hexane, and cyclohexane are non-polar and show no significant deflection.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q10",
    createdAt: "2026-07-19T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_7-2026",
    question: "Explain why butane (bp = -0.5 °C) has a higher boiling point than 2-methylpropane (bp = -11.7 °C), despite both sharing the same molecular formula (C₄H₁₀).",
    options: [
      { text: "Butane is a polar molecule" },
      { text: "Butane is a straight-chain molecule with a larger surface area, allowing more points of contact between molecules and resulting in stronger London dispersion forces", isCorrect: true },
      { text: "2-methylpropane contains covalent double bonds" },
      { text: "Butane forms intermolecular hydrogen bonds" }
    ],
    correctAnswer: 1,
    explanation: "* Butane is an unbranched, linear molecule, allowing closer alignment and more surface-to-surface contact between adjacent molecules.\n* This increases the strength of temporary instantaneous-induced dipoles compared to the compact spherical shape of 2-methylpropane.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q20",
    createdAt: "2026-08-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_8-2026",
    question: "What is the correct order of increasing boiling points for the following compounds: $CH_3CH_2CH_2CH_3$, $CH_3CH_2CH_2Cl$, $CH_3CH_2CH_2OH$?",
    options: [
      { text: "$CH_3CH_2CH_2OH < CH_3CH_2CH_2Cl < CH_3CH_2CH_2CH_3$" },
      { text: "$CH_3CH_2CH_2CH_3 < CH_3CH_2CH_2Cl < CH_3CH_2CH_2OH$", isCorrect: true },
      { text: "$CH_3CH_2CH_2Cl < CH_3CH_2CH_2CH_3 < CH_3CH_2CH_2OH$" },
      { text: "$CH_3CH_2CH_2CH_3 < CH_3CH_2CH_2OH < CH_3CH_2CH_2Cl$" }
    ],
    correctAnswer: 1,
    explanation: "* Butane ($CH_3CH_2CH_2CH_3$) is non-polar and relies on London forces.\n* Chloropropane ($CH_3CH_2CH_2Cl$) is polar and has permanent dipole-dipole attractions in addition to London forces.\n* Propan-1-ol ($CH_3CH_2CH_2OH$) has intermolecular hydrogen bonding, giving it the highest boiling point.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q16",
    createdAt: "2026-08-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_9-2026",
    question: "Why do the standard boiling points of Group 6 hydrides show a sudden, anomalous drop from $H_2O$ (100 °C) to $H_2S$ (-60 °C), before rising gradually for $H_2Se$ (-41 °C) and $H_2Te$ (-2 °C)?",
    options: [
      { text: "Water is ionic, whereas the others are simple molecular" },
      { text: "Water contains strong intermolecular hydrogen bonds, whereas $H_2S$, $H_2Se$, and $H_2Te$ only experience weaker dipole-dipole and London dispersion forces that increase down the group with molecular size", isCorrect: true },
      { text: "$H_2S$ forms stronger coordinate covalent bonds" },
      { text: "Oxygen is less electronegative than sulfur" }
    ],
    correctAnswer: 1,
    explanation: "* Oxygen's high electronegativity allows water to form extensive intermolecular hydrogen bonds, causing an anomalously high boiling point.\n* The other hydrides lack hydrogen bonding, and their boiling points rise from $H_2S$ to $H_2Te$ due to increasing London forces (more electrons).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q15",
    createdAt: "2026-08-02T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_10-2026",
    question: "Why is iodine (I₂) significantly more soluble in hexane than in water?",
    options: [
      { text: "Iodine is ionic and water is polar" },
      { text: "Iodine is non-polar and can form favorable London dispersion forces with non-polar hexane molecules, but cannot disrupt the strong hydrogen bonds between water molecules", isCorrect: true },
      { text: "Hexane forms hydrogen bonds with iodine" },
      { text: "Iodine reacts chemically with water to form a solid salt" }
    ],
    correctAnswer: 1,
    explanation: "* Iodine is a non-polar diatomic molecule.\n* Under the 'like dissolves like' rule, non-polar substances dissolve readily in non-polar solvents (hexane) via London dispersion interactions, but cannot break the cohesive hydrogen bonding network of water.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q21",
    createdAt: "2026-08-02T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_11-2026",
    question: "Which factor primarily explains why pentan-1-ol has a lower solubility in water compared to ethanol?",
    options: [
      { text: "Pentan-1-ol has no hydroxyl (–OH) group" },
      { text: "The larger hydrophobic hydrocarbon chain in pentan-1-ol disrupts water's hydrogen-bonding network without offering sufficient compensating interactions", isCorrect: true },
      { text: "Ethanol has a greater molecular mass" },
      { text: "Pentan-1-ol is a gas at room temperature" }
    ],
    correctAnswer: 1,
    explanation: "* Both molecules have one hydrophilic $-\\text{OH}$ group, but pentan-1-ol has a five-carbon alkyl chain compared to ethanol's two-carbon chain.\n* The larger non-polar hydrophobic region makes pentan-1-ol less soluble in water.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q17",
    createdAt: "2026-08-03T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_12-2026",
    question: "Why does water expand upon freezing, unlike almost all other substances which contract?",
    options: [
      { text: "Covalent bonds become longer in solid ice" },
      { text: "Upon freezing, water molecules align in an open, hexagonal crystalline structure held by fixed, rigid hydrogen bonds, leaving large empty voids", isCorrect: true },
      { text: "Ice absorbs oxygen from the air" },
      { text: "Water molecules stop rotating" }
    ],
    correctAnswer: 1,
    explanation: "* Liquid water has molecules packed closely in a dynamic, disorganized state.\n* As it freezes, hydrogen bonds force water molecules into a fixed, open hexagonal lattice, which increases the volume and decreases the density.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q16",
    createdAt: "2026-08-03T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_13-2026",
    question: "Which of the following organic liquids is expected to have the highest viscosity at room temperature?",
    options: [
      { text: "Propane-1,2,3-triol (glycerol)", isCorrect: true },
      { text: "Propan-1-ol" },
      { text: "Propanone" },
      { text: "Propane" }
    ],
    correctAnswer: 0,
    explanation: "* Viscosity depends on intermolecular attraction.\n* Glycerol contains three $-\\text{OH}$ groups per molecule, allowing extensive intermolecular hydrogen bonding that holds the molecules tightly together and restricts their flow.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q22",
    createdAt: "2026-08-04T10:00:00Z"
  }
];

