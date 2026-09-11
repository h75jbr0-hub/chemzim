import { Question } from '../../../types';

// Ions and Ionic Bonds - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u2_l3_lv1_1-2026",
    question: "What type of chemical bonding is present in magnesium oxide (MgO), and what electrostatic force holds the structure together?",
    options: [
      { text: "Ionic bonding: strong electrostatic attraction between oppositely charged magnesium cations (Mg²⁺) and oxide anions (O²⁻)" },
      { text: "Covalent bonding: sharing of two pairs of valence electrons between atoms" },
      { text: "Metallic bonding: attraction between positive ions and a sea of delocalised electrons" },
      { text: "Intermolecular bonding: weak attractive forces between separate molecules" }
    ],
    correctAnswer: 0,
    explanation: "* Ionic bonding occurs between metals and non-metals.\n* Magnesium loses 2 electrons to form Mg²⁺ (2,8) and oxygen gains 2 electrons to form O²⁻ (2,8).\n* The strong electrostatic force of attraction between the oppositely charged ions forms a giant ionic lattice.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q6",
    lessonNum: 3,
    createdAt: "2026-05-13T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv1_2-describe-bonding-nacl",
    question: "Which statement correctly describes the bonding in sodium chloride?",
    options: [
      { text: "A strong force of attraction between two molecules" },
      { text: "A strong force of electrostatic attraction between oppositely charged ions" },
      { text: "A weak force of attraction between oppositely charged ions" },
      { text: "A shared pair of electrons between two atoms leading to a noble gas configuration" }
    ],
    correctAnswer: 1,
    explanation: "* Ionic bonding is defined by Cambridge as the strong electrostatic attraction between oppositely charged ions (cations and anions).\n* Sodium chloride is a giant ionic lattice, not a molecular substance, and its bonds are strong rather than weak.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q7",
    lessonNum: 3,
    createdAt: "2026-05-13T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv1_3-which-substance-ionic",
    question: "The table shows the properties of four substances. Which substance is an ionic compound?",
    options: [
      { text: "Volatility: Low ; Electrical conductivity when molten: Good ; Solubility in water: Insoluble" },
      { text: "Volatility: High ; Electrical conductivity when molten: Poor ; Solubility in water: Insoluble" },
      { text: "Volatility: Low ; Electrical conductivity when molten: Good ; Solubility in water: Soluble" },
      { text: "Volatility: High ; Electrical conductivity when molten: Poor ; Solubility in water: Soluble" }
    ],
    correctAnswer: 2,
    explanation: "* Ionic compounds have low volatility and high melting points due to strong electrostatic attraction throughout the giant lattice.\n* They conduct electricity well when molten because their ions become free to move.\n* Most simple ionic compounds are readily soluble in polar water.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q7",
    lessonNum: 3,
    createdAt: "2026-05-13T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv1_4-react-to-form-ionic",
    question: "The electronic structures of four elements are shown:\n• Element R: 2,4\n• Element T: 2,8\n• Element X: 2,8,1\n• Element Z: 2,8,7\n\nWhich two elements react together to form an ionic compound?",
    options: [
      { text: "R and Z" },
      { text: "X and T" },
      { text: "R and T" },
      { text: "X and Z" }
    ],
    correctAnswer: 3,
    explanation: "* Element X (2,8,1) is a reactive Group I metal (Sodium) that readily loses 1 electron.\n* Element Z (2,8,7) is a reactive Group VII non-metal (Chlorine) that gains 1 electron.\n* The reaction between a metal and a non-metal forms an ionic compound (XZ / NaCl).\n* T (2,8) is an unreactive noble gas (Neon), and R (2,4) forms covalent bonds.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 23 Q6",
    lessonNum: 3,
    createdAt: "2026-05-13T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv1_5-2023",
    question: "When a potassium atom ($Z = 19$) reacts with a bromine atom ($Z = 35$) to form potassium bromide (KBr), which process takes place?",
    options: [
      { text: "Each potassium atom shares a pair of electrons with a bromine atom" },
      { text: "Each potassium atom transfers one electron to a bromine atom" },
      { text: "Each bromine atom transfers one electron to a potassium atom" },
      { text: "Two pairs of electrons are shared between the atoms" }
    ],
    correctAnswer: 1,
    explanation: "* Potassium ($2, 8, 8, 1$) is a Group I metal and loses its single valence electron to achieve a stable octet ($K^+$).\n* Bromine ($2, 8, 18, 7$) is a Group VII halogen and accepts that electron into its outer shell to form bromide ($Br^-$).",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q9",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv1_6-2024",
    question: "What is the formula of the ionic compound formed between calcium ions ($Ca^{2+}$) and nitrate ions ($NO_3^-$)?",
    options: [
      { text: "$CaNO_3$" },
      { text: "$Ca(NO_3)_2$" },
      { text: "$Ca_2NO_3$" },
      { text: "$Ca_2(NO_3)_2$" }
    ],
    correctAnswer: 1,
    explanation: "* An ionic compound must be electrically neutral overall.\n* One calcium ion has a $2+$ charge ($Ca^{2+}$), so it requires two nitrate ions ($NO_3^-$) with $1-$ charge each to balance the charge: $Ca(NO_3)_2$.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q9",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv1_7-2025",
    question: "Which property is characteristic of most ionic compounds such as sodium chloride?",
    options: [
      { text: "Low melting and boiling points" },
      { text: "High volatility and rapid evaporation" },
      { text: "High melting points and ability to conduct electricity when molten or dissolved in water" },
      { text: "Good electrical conductivity in the solid state" }
    ],
    correctAnswer: 2,
    explanation: "* Giant ionic lattices are held together by strong electrostatic attractions between oppositely charged ions in all directions, requiring large amounts of thermal energy to break (high melting points).\n* When solid, ions are locked in fixed lattice sites and cannot conduct electricity, but when molten or aqueous, ions are mobile to carry current.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q9",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];


