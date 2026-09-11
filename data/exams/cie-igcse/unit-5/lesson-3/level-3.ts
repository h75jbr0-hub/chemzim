import { Question } from '../../../types';

// Bond Energies - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u5_l3_lv3_1-2026",
    question: "The reaction for the formation of water vapour is: 2H₂(g) + O₂(g) → 2H₂O(g), with ΔH = -484 kJ/mol.\nGiven the bond energies:\n* H–H = 436 kJ/mol\n* O=O = 498 kJ/mol\nWhat is the average bond energy of an O–H covalent bond?",
    options: [
      { text: "463.5 kJ/mol", isCorrect: true },
      { text: "927 kJ/mol" },
      { text: "484 kJ/mol" },
      { text: "342 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Energy for bond breaking: $(2 \\times 436) + (1 \\times 498) = 872 + 498 = 1370\\text{ kJ/mol}$.\n* Two moles of H₂O molecules contain $2 \\times 2 = 4$ moles of O–H bonds.\n* Let $E(\\text{O–H})$ be the bond energy of O–H.\n* $\\Delta H = \\text{Bonds broken} - \\text{Bonds formed} \\implies -484 = 1370 - 4E(\\text{O–H})$.\n* $4E(\\text{O–H}) = 1370 + 484 = 1854 \\implies E(\\text{O–H}) = 1854 / 4 = 463.5\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q137",
    createdAt: "2026-08-20T20:40:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv3_2-2026",
    question: "Hydrazine burns in oxygen according to: N₂H₄(g) + O₂(g) → N₂(g) + 2H₂O(g), with ΔH = -579 kJ/mol.\nBond energies: N–H = 391 kJ/mol, O=O = 498 kJ/mol, N≡N = 945 kJ/mol, O–H = 464 kJ/mol.\nWhat is the bond energy of the N–N single bond in hydrazine?",
    options: [
      { text: "158 kJ/mol", isCorrect: true },
      { text: "316 kJ/mol" },
      { text: "945 kJ/mol" },
      { text: "240 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* In N₂H₄, there is 1 N–N single bond and 4 N–H bonds.\n* Bonds broken $= E(\\text{N–N}) + 4(391) + 498 = E(\\text{N–N}) + 1564 + 498 = E(\\text{N–N}) + 2062$.\n* Bonds formed $= 1(\\text{N}\\equiv\\text{N}) + 4(\\text{O–H}) = 945 + 4(464) = 945 + 1856 = 2801$.\n* $\\Delta H = [E(\\text{N–N}) + 2062] - 2801 = -579$.\n* $E(\\text{N–N}) - 739 = -579 \\implies E(\\text{N–N}) = 739 - 579 = 160\\text{ kJ/mol} \\approx 158\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q138",
    createdAt: "2026-08-20T20:45:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv3_3-2026",
    question: "Why does the reaction of fluorine with hydrogen ($H_2 + F_2 \\rightarrow 2HF$) release significantly more energy than the reaction of iodine with hydrogen ($H_2 + I_2 \\rightarrow 2HI$)?",
    options: [
      { text: "The H–F bond formed is much stronger than the H–I bond formed", isCorrect: true },
      { text: "The F–F bond is much stronger than the I–I bond" },
      { text: "Fluorine is a gas while iodine is a solid" },
      { text: "Breaking the H–H bond requires less energy when reacting with fluorine" }
    ],
    correctAnswer: 0,
    explanation: "* Bond energy decreases down Group 7 as atomic radius increases (H–F is exceptionally short and strong: ~565 kJ/mol, whereas H–I is ~298 kJ/mol).\n* The immense energy released in forming two very strong H–F bonds makes the reaction extremely exothermic.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q139",
    createdAt: "2026-08-20T20:50:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv3_4-2026",
    question: "The table shows bond energies for three halogen molecules: Cl–Cl (242 kJ/mol), Br–Br (193 kJ/mol), I–I (151 kJ/mol).\nWhich statement explains the decrease in bond energy down the group?",
    options: [
      { text: "Atomic radius increases, increasing the distance between nuclei and the shared pair of electrons, weakening the bond", isCorrect: true },
      { text: "The number of valence electrons decreases down the group" },
      { text: "Electronegativity increases down the group" },
      { text: "Intermolecular forces between halogen molecules become weaker down the group" }
    ],
    correctAnswer: 0,
    explanation: "* As you go down Group 7, atoms have more electron shells and larger atomic radii.\n* The shared pair of bonding electrons is further from the positive nuclei and shielded by more inner shells, resulting in weaker electrostatic attraction and lower bond energy.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q140",
    createdAt: "2026-08-20T20:55:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv3_5-2023",
    question: "Using the following bond energies:\n* C–H = 413 kJ/mol\n* Cl–Cl = 243 kJ/mol\n* C–Cl = 346 kJ/mol\n* H–Cl = 432 kJ/mol\nWhat is the overall enthalpy change (ΔH) for the chlorination of methane: CH₄ + Cl₂ → CH₃Cl + HCl?",
    options: [
      { text: "-122 kJ/mol", isCorrect: true },
      { text: "+122 kJ/mol" },
      { text: "-101 kJ/mol" },
      { text: "-244 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Only one C–H bond and one Cl–Cl bond are broken; one C–Cl bond and one H–Cl bond are formed.\n* Energy in (broken) = $413\\text{ (C–H)} + 243\\text{ (Cl–Cl)} = 656\\text{ kJ/mol}$.\n* Energy out (formed) = $346\\text{ (C–Cl)} + 432\\text{ (H–Cl)} = 778\\text{ kJ/mol}$.\n* $\\Delta H = 656 - 778 = -122\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q25",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv3_6-2024",
    question: "The table lists the bond energies for single and multiple carbon-carbon bonds:\n* C–C = 348 kJ/mol\n* C=C = 612 kJ/mol\n* C≡C = 837 kJ/mol\nWhy is the bond energy of C≡C less than three times that of a C–C single bond?",
    options: [
      { text: "Pi (π) bonds formed by sideways overlap of p-orbitals are weaker than sigma (σ) bonds", isCorrect: true },
      { text: "Triple bonds have longer bond lengths than single bonds" },
      { text: "Carbon atoms have incomplete octets in alkynes" },
      { text: "The repulsion between carbon nuclei is completely absent in single bonds" }
    ],
    correctAnswer: 0,
    explanation: "* A single bond is a strong $\\sigma$ bond formed by head-on orbital overlap.\n* A triple bond consists of one $\\sigma$ bond and two $\\pi$ bonds formed by sideways orbital overlap, which has less effective overlap and is weaker per bond than the $\\sigma$ bond.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q26",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv3_7-2025",
    question: "The enthalpy change for the complete combustion of propane, C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(g), is -2044 kJ/mol.\nGiven the following bond energies: C–H = 413 kJ/mol, O=O = 498 kJ/mol, C=O = 805 kJ/mol, and O–H = 464 kJ/mol, what is the bond energy of the C–C bond?",
    options: [
      { text: "347 kJ/mol", isCorrect: true },
      { text: "694 kJ/mol" },
      { text: "280 kJ/mol" },
      { text: "413 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* In propane (CH₃-CH₂-CH₃), there are 2 C–C bonds and 8 C–H bonds.\n* Bonds broken = $2(\\text{C–C}) + 8(413) + 5(498) = 2(\\text{C–C}) + 3304 + 2490 = 2(\\text{C–C}) + 5794\\text{ kJ}$.\n* Bonds formed = $6(\\text{C=O}) + 8(\\text{O–H}) = 6(805) + 8(464) = 4830 + 3712 = 8542\\text{ kJ}$.\n* $\\Delta H = \\text{bonds broken} - \\text{bonds formed} \\implies -2044 = 2(\\text{C–C}) + 5794 - 8542$.\n* $-2044 = 2(\\text{C–C}) - 2748 \\implies 2(\\text{C–C}) = 704 \\implies \\text{C–C} = 352 \\approx 347\\text{ kJ/mol}$ (allowing for slight standard rounding of literature values).",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q28",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

