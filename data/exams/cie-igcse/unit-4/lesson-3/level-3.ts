import { Question } from '../../../types';

// Electroplating - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u4_l3_lv3_1-2026",
    question: "During the electrolytic purification of copper, which of the following is correct regarding the changes in mass of the electrodes and the concentration of Cu²⁺ ions in the electrolyte?",
    options: [
      { text: "Mass of Anode: Decreases; Mass of Cathode: Increases; Cu²⁺ concentration: Decreases" },
      { text: "Mass of Anode: Decreases; Mass of Cathode: Increases; Cu²⁺ concentration: Remains constant", isCorrect: true },
      { text: "Mass of Anode: Increases; Mass of Cathode: Decreases; Cu²⁺ concentration: Remains constant" },
      { text: "Mass of Anode: Decreases; Mass of Cathode: Decreases; Cu²⁺ concentration: Increases" }
    ],
    correctAnswer: 1,
    explanation: "* The impure copper anode dissolves (mass decreases): Cu(s) → Cu²⁺(aq) + 2e⁻.\n* Pure copper deposits on the cathode (mass increases): Cu²⁺(aq) + 2e⁻ → Cu(s).\n* Since the amount of copper dissolving at the anode matches the amount of copper depositing at the cathode, the concentration of Cu²⁺ ions in the electrolyte remains constant.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q89",
    createdAt: "2026-08-20T16:40:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv3_2-2026",
    question: "What happens to the noble metal impurities (like gold and silver) present in the impure copper anode during electrolytic refining?",
    options: [
      { text: "They dissolve in the electrolyte and plate onto the cathode" },
      { text: "They remain undissolved and settle beneath the anode as 'anode slime'", isCorrect: true },
      { text: "They are oxidized and remain as dissolved cations in the solution" },
      { text: "They react with sulfate ions to form a white precipitate" }
    ],
    correctAnswer: 1,
    explanation: "* Impurities like gold, silver, and platinum are less reactive than copper.\n* They do not lose electrons (are not oxidized) at the operating potential of the cell.\n* As the copper around them dissolves, these unreactive metal particles fall to the bottom of the cell, forming a valuable residue known as 'anode slime' or 'anode mud'.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q90",
    createdAt: "2026-08-20T16:45:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv3_3-2026",
    question: "A student sets up two cells. Cell 1: aqueous CuSO₄ with graphite electrodes. Cell 2: aqueous CuSO₄ with copper electrodes.\nWhich of the following occurs in BOTH cells?",
    options: [
      { text: "Oxygen gas is evolved at the anode" },
      { text: "The blue colour of the electrolyte fades" },
      { text: "Copper is deposited at the cathode", isCorrect: true },
      { text: "The pH of the solution decreases" }
    ],
    correctAnswer: 2,
    explanation: "* At the negative cathode in both cells, Cu²⁺ ions are attracted and reduced to copper metal (pink/brown solid): Cu²⁺ + 2e⁻ → Cu.\n* In Cell 1, oxygen is evolved at the anode, pH decreases, and blue color fades.\n* In Cell 2, the anode dissolves, pH remains constant, and blue color does not fade.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q91",
    createdAt: "2026-08-20T16:50:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv3_4-2026",
    question: "Which of the following metals would dissolve from the impure copper anode and remain in the copper(II) sulfate electrolyte as ions rather than depositing on the cathode or forming anode slime?\n(Assume standard reactivity series rules apply)",
    options: [
      { text: "Gold (Au)" },
      { text: "Silver (Ag)" },
      { text: "Zinc (Zn)", isCorrect: true },
      { text: "Platinum (Pt)" }
    ],
    correctAnswer: 2,
    explanation: "* Metals that are more reactive than copper (like zinc, iron, and nickel) lose electrons easily and dissolve into the electrolyte as ions (e.g. Zn²⁺).\n* However, since they are more reactive than copper, their ions are not reduced at the cathode at the potential used to deposit copper.\n* Noble metals like gold, silver, and platinum are less reactive than copper and do not dissolve, falling down as anode slime.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q92",
    createdAt: "2026-08-20T16:55:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv3_5-2023",
    question: "During copper refining, an impure copper anode contains zinc and silver impurities. Which statement describes what happens to these two impurities during electrolysis?",
    options: [
      { text: "Zinc dissolves into the electrolyte as Zn²⁺ ions; silver falls to the bottom as anode sludge", isCorrect: true },
      { text: "Zinc falls to the bottom as anode sludge; silver dissolves into the electrolyte" },
      { text: "Both zinc and silver deposit on the pure copper cathode" },
      { text: "Both zinc and silver dissolve into the electrolyte as cations" }
    ],
    correctAnswer: 0,
    explanation: "* Zinc is more reactive than copper; it loses electrons readily and dissolves into the electrolyte as $Zn^{2+}$ ions without depositing at the cathode.\n* Silver is less reactive than copper; it cannot be oxidised at the voltage used and drops to the bottom of the cell below the anode as insoluble anode sludge.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q22",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv3_6-2024",
    question: "In an electroplating experiment, a spoon is coated with silver using a current of 2.0 A for 10 minutes. If the current is doubled to 4.0 A and the time is doubled to 20 minutes, how will the mass of silver deposited change?",
    options: [
      { text: "It will be four times greater", isCorrect: true },
      { text: "It will be twice as great" },
      { text: "It will be eight times greater" },
      { text: "It will remain the same" }
    ],
    correctAnswer: 0,
    explanation: "* The mass of substance deposited in electrolysis is directly proportional to the total electric charge passed: $Q = I \\times t$.\n* Doubling both the electric current ($2 \\times$) and the time ($2 \\times$) increases the total charge passed by a factor of $2 \\times 2 = 4$.\n* Consequently, the mass of silver deposited becomes four times greater.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q20",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv3_7-2025",
    question: "A piece of copper is electroplated onto an iron object. Why is it essential that the object is thoroughly cleaned and grease-free before electroplating begins?",
    options: [
      { text: "To ensure the electroplated copper layer adheres firmly and evenly to the surface", isCorrect: true },
      { text: "To prevent the iron object from dissolving in the electrolyte" },
      { text: "To increase the voltage of the power supply" },
      { text: "To prevent the formation of hydrogen gas at the anode" }
    ],
    correctAnswer: 0,
    explanation: "* Any grease, dirt, or oxide film on the metal object prevents direct contact between the depositing copper atoms and the metal substrate.\n* Thorough cleaning ensures that the electroplated metal adheres strongly and forms a uniform, non-peeling coating.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q22",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

