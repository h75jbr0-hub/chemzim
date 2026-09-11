import { Question } from '../../../types';

// Electrolytic Cells - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u4_l2_lv3_1-2026",
    question: "When a dilute solution of sodium chloride is electrolysed using inert electrodes, what are the products formed at the cathode and anode, and what happens to the concentration of the sodium chloride electrolyte over time?",
    options: [
      { text: "Cathode: Hydrogen; Anode: Oxygen; Concentration increases", isCorrect: true },
      { text: "Cathode: Sodium; Anode: Chlorine; Concentration decreases" },
      { text: "Cathode: Hydrogen; Anode: Chlorine; Concentration increases" },
      { text: "Cathode: Hydrogen; Anode: Oxygen; Concentration decreases" }
    ],
    correctAnswer: 0,
    explanation: "* In dilute NaCl, H⁺ ions are discharged at the cathode to form H₂ gas.\n* Hydroxide ions (OH⁻) are discharged at the anode to form O₂ gas.\n* Since H⁺ and OH⁻ ions are removed (which is equivalent to removing water, H₂O) while Na⁺ and Cl⁻ ions remain in the cell, the overall concentration of sodium chloride increases over time.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q77",
    createdAt: "2026-08-20T15:40:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv3_2-2026",
    question: "During the electrolysis of dilute aqueous copper(II) sulfate using carbon electrodes, what is observed in the electrolyte solution as the reaction proceeds?",
    options: [
      { text: "The blue colour of the solution fades until it becomes colourless", isCorrect: true },
      { text: "The blue colour of the solution becomes darker blue" },
      { text: "The solution remains blue and unchanged" },
      { text: "A white precipitate forms in the solution" }
    ],
    correctAnswer: 0,
    explanation: "* The blue colour of the aqueous copper(II) sulfate solution is due to the presence of hydrated copper(II) ions, Cu²⁺.\n* As electrolysis proceeds, Cu²⁺ ions are discharged at the cathode to form copper metal (Cu), depleting the concentration of Cu²⁺ in solution.\n* Consequently, the blue colour fades until the solution becomes colourless (and acidic due to remaining H⁺ and SO₄²⁻ ions).",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q78",
    createdAt: "2026-08-20T15:45:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv3_3-2026",
    question: "In the electrolysis of concentrated sodium chloride solution, what is the ratio of the volume of gas produced at the cathode to the volume of gas produced at the anode under the same temperature and pressure?",
    options: [
      { text: "1:1", isCorrect: true },
      { text: "2:1" },
      { text: "1:2" },
      { text: "1:8" }
    ],
    correctAnswer: 0,
    explanation: "* Cathode reaction: 2H⁺ + 2e⁻ → H₂(g). Thus, 2 moles of electrons produce 1 mole of hydrogen gas.\n* Anode reaction: 2Cl⁻ → Cl₂(g) + 2e⁻. Thus, 2 moles of electrons produce 1 mole of chlorine gas.\n* The molar ratio of H₂ to Cl₂ is 1:1, so the volume ratio is also 1:1.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q79",
    createdAt: "2026-08-20T15:50:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv3_4-2026",
    question: "A student electrolyses four different aqueous solutions using carbon electrodes. Which solution does NOT produce oxygen gas at the anode?",
    options: [
      { text: "Dilute sulfuric acid" },
      { text: "Concentrated hydrochloric acid", isCorrect: true },
      { text: "Dilute sodium chloride" },
      { text: "Dilute copper(II) sulfate" }
    ],
    correctAnswer: 1,
    explanation: "* Dilute sulfuric acid, dilute sodium chloride, and dilute copper(II) sulfate all contain OH⁻ ions that are preferentially discharged to produce oxygen gas (O₂) at the anode.\n* Concentrated hydrochloric acid has a high concentration of Cl⁻ ions, which are preferentially discharged over OH⁻, yielding chlorine gas (Cl₂) instead of oxygen.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q80",
    createdAt: "2026-08-20T15:55:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv3_5-2023",
    question: "Aqueous copper(II) sulfate is electrolysed using pure copper electrodes for 30 minutes. Which statement describes the changes in the mass of the electrodes and the concentration of the electrolyte?",
    options: [
      { text: "Cathode gains mass, anode loses identical mass, concentration of Cu²⁺ remains constant", isCorrect: true },
      { text: "Cathode gains mass, anode loses mass, concentration of Cu²⁺ decreases" },
      { text: "Both electrodes lose mass, concentration of Cu²⁺ decreases" },
      { text: "Cathode gains mass, anode has gas evolved, concentration of Cu²⁺ remains constant" }
    ],
    correctAnswer: 0,
    explanation: "* At the anode: $Cu(s) \\rightarrow Cu^{2+}(aq) + 2e^-$ (copper dissolves, losing mass).\n* At the cathode: $Cu^{2+}(aq) + 2e^- \\rightarrow Cu(s)$ (copper deposits, gaining mass).\n* Since the rate of copper dissolving at the anode equals the rate of copper depositing at the cathode, the concentration of $Cu^{2+}$ ions and the blue colour of the solution remain unchanged.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q20",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv3_6-2024",
    question: "During the electrolysis of concentrated aqueous sodium chloride, 40 cm³ of chlorine gas is collected at the anode. What volume of gas is collected at the cathode under the same conditions of temperature and pressure?",
    options: [
      { text: "20 cm³ of hydrogen" },
      { text: "40 cm³ of hydrogen", isCorrect: true },
      { text: "80 cm³ of hydrogen" },
      { text: "40 cm³ of oxygen" }
    ],
    correctAnswer: 1,
    explanation: "* Anode: $2Cl^- \\rightarrow Cl_2(g) + 2e^-$.\n* Cathode: $2H^+ + 2e^- \\rightarrow H_2(g)$.\n* The molar ratio between $Cl_2$ produced and $H_2$ produced is 1:1.\n* According to Avogadro's law, equal volumes of gases at the same temperature and pressure contain equal numbers of molecules, so 40 cm³ of $H_2$ gas is produced.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q20",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv3_7-2025",
    question: "A solution of dilute sulfuric acid is electrolysed between inert platinum electrodes. Which statement correctly compares the volumes of gases produced at the electrodes?",
    options: [
      { text: "The volume of gas at the cathode is double the volume of gas at the anode", isCorrect: true },
      { text: "The volume of gas at the anode is double the volume of gas at the cathode" },
      { text: "Equal volumes of gas are produced at both electrodes" },
      { text: "The volume of gas at the cathode is four times that at the anode" }
    ],
    correctAnswer: 0,
    explanation: "* Cathode: $4H^+ + 4e^- \\rightarrow 2H_2(g)$ (2 moles of $H_2$).\n* Anode: $4OH^- \\rightarrow O_2(g) + 2H_2O + 4e^-$ (1 mole of $O_2$).\n* For the transfer of 4 moles of electrons, 2 moles of hydrogen are formed for every 1 mole of oxygen.\n* Therefore, the volume ratio of cathode gas ($H_2$) to anode gas ($O_2$) is 2:1.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q21",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

