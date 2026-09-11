import { Question } from '../../../types';

// Electrolysis - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u4_l1_lv2_1-2026",
    question: "Which equation represents the reaction occurring at the cathode during the electrolysis of molten sodium chloride?",
    options: [
      { text: "Na⁺ + e⁻ → Na", isCorrect: true },
      { text: "2Cl⁻ → Cl₂ + 2e⁻" },
      { text: "Na → Na⁺ + e⁻" },
      { text: "Cl₂ + 2e⁻ → 2Cl⁻" }
    ],
    correctAnswer: 0,
    explanation: "* In molten sodium chloride, the sodium ions (Na⁺) migrate to the negative cathode.\n* At the cathode, reduction occurs as the Na⁺ ions gain electrons: Na⁺ + e⁻ → Na.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q61",
    createdAt: "2026-08-20T14:20:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv2_2-2026",
    question: "During the electrolysis of molten lead(II) bromide, what type of reaction takes place at the anode?",
    options: [
      { text: "Reduction" },
      { text: "Oxidation", isCorrect: true },
      { text: "Neutralisation" },
      { text: "Thermal decomposition" }
    ],
    correctAnswer: 1,
    explanation: "* At the anode (positive electrode), bromide ions lose electrons to form bromine gas: 2Br⁻ → Br₂ + 2e⁻.\n* Loss of electrons is defined as oxidation, so oxidation occurs at the anode.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q62",
    createdAt: "2026-08-20T14:25:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv2_3-2026",
    question: "Which of the following occurs during the electrolysis of molten lead(II) bromide, PbBr₂?\n1. Lead ions are oxidized\n2. Bromide ions are oxidized\n3. Reduction happens at the cathode",
    options: [
      { text: "1 and 3 only" },
      { text: "2 and 3 only", isCorrect: true },
      { text: "1 and 2 only" },
      { text: "1, 2 and 3" }
    ],
    correctAnswer: 1,
    explanation: "* Bromide ions lose electrons at the anode, which is oxidation (statement 2 is correct).\n* Lead ions gain electrons at the cathode, which is reduction (statement 3 is correct; statement 1 is incorrect because lead ions are reduced, not oxidized).",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q63",
    createdAt: "2026-08-20T14:30:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv2_4-2026",
    question: "Which statement about electrolytes is correct?",
    options: [
      { text: "They conduct electricity in the solid state" },
      { text: "They are always covalent molecular substances" },
      { text: "They conduct electricity by the flow of free electrons" },
      { text: "They decompose when an electric current passes through them", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Electrolytes are ionic compounds that conduct electricity when molten or in aqueous solution.\n* They do not conduct in the solid state because ions are fixed in the lattice.\n* They conduct via mobile ions (not electrons) and decompose chemically during the process.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q64",
    createdAt: "2026-08-20T14:35:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv2_5-2023",
    question: "Dilute sulfuric acid is electrolysed using inert carbon electrodes. What are the products formed at the anode and cathode, and what is the volume ratio of the gases produced?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Anode product</th><th class="p-2 border">Cathode product</th><th class="p-2 border">Ratio (Anode : Cathode)</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Oxygen</td><td class="p-2 border">Hydrogen</td><td class="p-2 border">1 : 2</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Hydrogen</td><td class="p-2 border">Oxygen</td><td class="p-2 border">2 : 1</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Sulfur dioxide</td><td class="p-2 border">Hydrogen</td><td class="p-2 border">1 : 1</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Oxygen</td><td class="p-2 border">Hydrogen</td><td class="p-2 border">2 : 1</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Anode: Oxygen | Cathode: Hydrogen | Ratio 1 : 2", isCorrect: true },
      { text: "Row B: Anode: Hydrogen | Cathode: Oxygen | Ratio 2 : 1" },
      { text: "Row C: Anode: Sulfur dioxide | Cathode: Hydrogen | Ratio 1 : 1" },
      { text: "Row D: Anode: Oxygen | Cathode: Hydrogen | Ratio 2 : 1" }
    ],
    correctAnswer: 0,
    explanation: "* Cathode: $2H^+ + 2e^- \\rightarrow H_2(g)$ (reduction of hydrogen ions).\n* Anode: $4OH^- \\rightarrow O_2(g) + 2H_2O + 4e^-$ (oxidation of hydroxide ions).\n* For every 4 electrons transferred, 2 molecules of $H_2$ form at the cathode and 1 molecule of $O_2$ forms at the anode, giving an anode-to-cathode volume ratio of $1 : 2$.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q19",
    lessonNum: 1,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv2_6-2024",
    question: "A student electrolyses aqueous copper(II) sulfate using inert carbon electrodes. What is observed at both electrodes after 10 minutes?",
    options: [
      { text: "Anode: Colorless gas that relights a glowing splint; Cathode: Red-brown solid coating", isCorrect: true },
      { text: "Anode: Red-brown solid coating; Cathode: Colorless gas that pops with a lighted splint" },
      { text: "Anode: Pale green gas with choking smell; Cathode: Silvery liquid metal" },
      { text: "Both electrodes evolve colorless gases that pop" }
    ],
    correctAnswer: 0,
    explanation: "* At the cathode, $Cu^{2+}$ ions are discharged in preference to $H^+$ because copper is below hydrogen in the reactivity series: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$ (pink/red-brown copper deposit).\n* At the anode, $OH^-$ ions from water are discharged in preference to sulfate ($SO_4^{2-}$), releasing oxygen gas: $4OH^- \\rightarrow O_2 + 2H_2O + 4e^-$.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q19",
    lessonNum: 1,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv2_7-2025",
    question: "Which of the following aqueous solutions produces hydrogen gas at the cathode and chlorine gas at the anode during electrolysis with inert graphite electrodes?",
    options: [
      { text: "Concentrated aqueous sodium chloride (brine)", isCorrect: true },
      { text: "Dilute aqueous copper(II) chloride" },
      { text: "Concentrated aqueous hydrochloric acid" },
      { text: "Molten sodium chloride" }
    ],
    correctAnswer: 0,
    explanation: "* In concentrated aqueous sodium chloride, $H^+$ ions are discharged at the cathode (forming $H_2$), and concentrated $Cl^-$ ions are discharged at the anode (forming $Cl_2$).\n* Dilute copper(II) chloride deposits Cu at the cathode; molten NaCl deposits Na metal, not hydrogen.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q19",
    lessonNum: 1,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

