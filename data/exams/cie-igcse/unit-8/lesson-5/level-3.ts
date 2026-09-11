import { Question } from '../../../types';

// Group VIII/0 - Noble Gases - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u8_l5_lv3_1-2026",
    question: "Under identical temperature and pressure conditions, which noble gas diffuses through a porous membrane at the highest rate?",
    options: [
      { text: "Helium (He, $A_r = 4$)", isCorrect: true },
      { text: "Neon (Ne, $A_r = 20$)" },
      { text: "Argon (Ar, $A_r = 40$)" },
      { text: "Krypton (Kr, $A_r = 84$)" }
    ],
    correctAnswer: 0,
    explanation: "* According to Graham's Law of diffusion, the rate of diffusion of a gas is inversely proportional to the square root of its relative atomic/molecular mass ($M_r$).\n* Helium has the lowest $A_r$ (4), so its atoms have the highest average velocity and diffuse fastest.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q294",
    createdAt: "2026-08-21T12:30:00Z"
  },
  {
    id: "ex_ci_u8_l5_lv3_2-2026",
    question: "Although noble gases are generally unreactive, heavier noble gases such as xenon (Xe) can form stable compounds with fluorine (e.g. XeF₄).\nWhy is xenon able to react with fluorine under specific conditions while helium cannot?",
    options: [
      { text: "Xenon has a much larger atomic radius with heavily shielded outer electrons that can be polarised/shared by highly electronegative fluorine", isCorrect: true },
      { text: "Xenon has only 2 electrons in its outer shell" },
      { text: "Xenon is a metal located in Period 5" },
      { text: "Xenon readily loses protons to fluorine atoms" }
    ],
    correctAnswer: 0,
    explanation: "* Xenon has 5 occupied shells; its outer electrons are far from the nucleus and loosely held (lower ionisation energy) compared to helium or neon.\n* The extremely electronegative fluorine can draw electron density and form covalent bonds with xenon.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q295",
    createdAt: "2026-08-21T12:35:00Z"
  },
  {
    id: "ex_ci_u8_l5_lv3_3-2026",
    question: "Which electronic configuration represents an isolated atom that does NOT form chemical bonds under standard conditions?",
    options: [
      { text: "2,8,8", isCorrect: true },
      { text: "2,8,7" },
      { text: "2,8,1" },
      { text: "2,8,6" }
    ],
    correctAnswer: 0,
    explanation: "* The electronic configuration 2,8,8 represents Argon (Ar), a Group VIII noble gas with a complete octet in its outer valence shell, making it completely stable and chemically inert.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q296",
    createdAt: "2026-08-21T12:40:00Z"
  },
  {
    id: "ex_ci_u8_l5_lv3_4-2023",
    question: "Samples of helium ($A_r = 4$) and argon ($A_r = 40$) are placed in separate containers at the same temperature and pressure. Which statement comparing the two gases is correct?",
    options: [
      { text: "Helium gas diffuses faster than argon gas because its atoms have a lower mass", isCorrect: true },
      { text: "Argon gas diffuses faster because its atoms have more electrons" },
      { text: "Both gases diffuse at the exact same rate at the same temperature" },
      { text: "Argon is less dense than helium under identical conditions" }
    ],
    correctAnswer: 0,
    explanation: "* The rate of diffusion of gas particles is inversely proportional to the square root of relative atomic/molecular mass ($M_r$).\n* Helium atoms are lighter ($A_r = 4$) than argon atoms ($A_r = 40$), so helium atoms travel at higher average speeds and diffuse faster.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q65",
    lessonNum: 5,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u8_l5_lv3_5-2024",
    question: "Although Group VIII elements are described as inert, xenon can react with fluorine to form xenon tetrafluoride, XeF₄. Why can xenon form compounds whereas helium cannot?",
    options: [
      { text: "Xenon has outer electrons that are far from the nucleus and shielded, making them easier to share with highly electronegative fluorine", isCorrect: true },
      { text: "Xenon has fewer occupied electron shells than helium" },
      { text: "Helium has a lower first ionisation energy than xenon" },
      { text: "Xenon atoms readily lose all 8 outer electrons to form ionic lattices" }
    ],
    correctAnswer: 0,
    explanation: "* Down Group VIII, atomic radius increases and the outer electron shells are farther from the nucleus and shielded by inner electrons.\n* As a result, the ionisation energy of xenon is significantly lower than that of helium, allowing powerful oxidising agents like fluorine to form covalent bonds with xenon.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q66",
    lessonNum: 5,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u8_l5_lv3_6-2025",
    question: "An element Z has atomic number 18. Which statement correctly describes the bonding and physical state of element Z at 20 °C?",
    options: [
      { text: "It is a monatomic gas that does not readily form covalent or ionic bonds", isCorrect: true },
      { text: "It forms diatomic covalent molecules like Z₂" },
      { text: "It forms a giant covalent structure with high melting point" },
      { text: "It forms a metallic lattice of Z⁺ ions in a sea of electrons" }
    ],
    correctAnswer: 0,
    explanation: "* Element 18 is Argon (electron configuration 2,8,8).\n* Having a completely full outer valence shell, argon has no drive to form chemical bonds and exists at room temperature as independent, unbonded monatomic gas atoms.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q67",
    lessonNum: 5,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
