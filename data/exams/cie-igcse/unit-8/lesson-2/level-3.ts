import { Question } from '../../../types';

// Group I - Alkali Metals - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u8_l2_lv3_1-2026",
    question: "Why does potassium react more vigorously with water than lithium in terms of electronic structure?",
    options: [
      { text: "Potassium has more electron shells, so its outer electron is further from the nucleus and shielded by more inner shells, requiring less energy to be lost", isCorrect: true },
      { text: "Potassium has a higher nuclear charge that attracts electrons more strongly" },
      { text: "Potassium atoms are smaller in size than lithium atoms" },
      { text: "Potassium needs to gain an electron to achieve a noble gas configuration" }
    ],
    correctAnswer: 0,
    explanation: "* Potassium (2,8,8,1) has 4 occupied electron shells compared to lithium (2,1) with 2 shells.\n* The single valence electron in K is further from the nucleus and experiences greater shielding from inner electron shells.\n* The electrostatic attraction between the positive nucleus and the valence electron is weaker, so the electron is lost much more readily (lower first ionisation energy).",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q266",
    createdAt: "2026-08-21T09:35:00Z"
  },
  {
    id: "ex_ci_u8_l2_lv3_2-2026",
    question: "When 0.46 g of sodium ($A_r = 23$) reacts completely with excess water at r.t.p.: 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)\nWhat volume of hydrogen gas (in cm³) is produced?\n(Molar gas volume at r.t.p. = 24,000 cm³/mol)",
    options: [
      { text: "240 cm³", isCorrect: true },
      { text: "480 cm³" },
      { text: "120 cm³" },
      { text: "24,000 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of Na $= 0.46 / 23 = 0.020\\text{ mol}$.\n* From the stoichiometry, mole ratio of Na : H₂ is 2 : 1.\n* Moles of H₂ $= 0.020 / 2 = 0.010\\text{ mol}$.\n* Volume of H₂ $= 0.010 \\times 24,000\\text{ cm}^3 = 240\\text{ cm}^3$.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q267",
    createdAt: "2026-08-21T09:40:00Z"
  },
  {
    id: "ex_ci_u8_l2_lv3_3-2026",
    question: "Why do Group I alkali metals have much lower melting points and lower densities than the transition metals in Period 4?",
    options: [
      { text: "Alkali metal atoms contribute only one valence electron per atom to the metallic bond and form large cations with relatively weak metallic lattices", isCorrect: true },
      { text: "Alkali metals contain covalent molecules rather than metallic lattices" },
      { text: "Alkali metal nuclei have negative charges" },
      { text: "Transition metals have fewer protons in their nuclei" }
    ],
    correctAnswer: 0,
    explanation: "* In Group I, each atom donates only 1 delocalised electron into the sea of electrons, and the atomic/ionic radii are large, leading to weak metallic bonding.\n* Transition metals donate multiple outer and d-orbital electrons and have smaller radii, resulting in much stronger metallic bonding and closer packing.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q268",
    createdAt: "2026-08-21T09:45:00Z"
  },
  {
    id: "ex_ci_u8_l2_lv3_4-2023",
    question: "A piece of sodium metal (density = 0.97 g/cm³) floats on water, whereas a piece of rubidium metal (density = 1.53 g/cm³) sinks to the bottom before reacting violently. What explains why rubidium sinks while sodium floats?",
    options: [
      { text: "The large increase in mass of rubidium nuclei outweighs the increase in atomic volume, so density exceeds that of water (1.00 g/cm³)", isCorrect: true },
      { text: "Sodium atoms have more electron shells than rubidium atoms" },
      { text: "Rubidium reacts endothermically, cooling the water and freezing it" },
      { text: "Sodium reacts with water to form solid ice that floats" }
    ],
    correctAnswer: 0,
    explanation: "* The density of water is 1.00 g/cm³.\n* Sodium has a density of 0.97 g/cm³ (< 1.0) and floats.\n* Rubidium's atomic mass (85.5) is much greater relative to its increase in volume, giving a density of 1.53 g/cm³ (> 1.0), causing it to sink.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q38",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u8_l2_lv3_5-2024",
    question: "Francium (Fr) is the heaviest alkali metal in Group I. Based on periodic trends, which prediction is most reliable?",
    options: [
      { text: "Francium has the lowest first ionisation energy and reacts explosively with water", isCorrect: true },
      { text: "Francium has the highest melting point in Group I" },
      { text: "Francium atoms have a smaller atomic radius than lithium atoms" },
      { text: "Francium forms a covalent hydride with formula FrH₄" }
    ],
    correctAnswer: 0,
    explanation: "* Down Group I, the valence electron is in the 7th shell, furthest from the nucleus with maximum shielding, making it the easiest to remove (lowest ionisation energy and highest chemical reactivity).",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q38",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u8_l2_lv3_6-2025",
    question: "When 0.46 g of sodium (Ar = 23) is added to excess cold water, what volume of hydrogen gas is collected at r.t.p.? (Molar gas volume at r.t.p. = 24 dm³)",
    options: [
      { text: "240 cm³", isCorrect: true },
      { text: "480 cm³" },
      { text: "120 cm³" },
      { text: "24 dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Equation: $2Na + 2H_2O \\rightarrow 2NaOH + H_2$.\n* Moles of $Na = 0.46 / 23 = 0.020\\text{ mol}$.\n* Moles of $H_2 = 0.020 / 2 = 0.010\\text{ mol}$.\n* Volume of $H_2 = 0.010 \\times 24000\\text{ cm}^3 = 240\\text{ cm}^3$.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q38",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

