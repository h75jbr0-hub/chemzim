import { Question } from '../../../types';

// Transition Elements - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u8_l4_lv3_1-2026",
    question: "How do transition metal catalysts (such as platinum in catalytic converters or Fe in the Haber process) increase reaction rates?",
    options: [
      { text: "They provide an alternative reaction pathway with a lower activation energy ($E_a$)", isCorrect: true },
      { text: "They increase the average kinetic energy of the reacting particles" },
      { text: "They increase the frequency of particle collisions without changing the activation energy" },
      { text: "They shift the position of dynamic equilibrium towards the products" }
    ],
    correctAnswer: 0,
    explanation: "* Catalysts lower the activation energy by providing an alternate mechanistic route (often involving adsorption onto the metal surface and variable oxidation states), so a higher proportion of collisions have $E \\ge E_a$.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q285",
    createdAt: "2026-08-21T11:30:00Z"
  },
  {
    id: "ex_ci_u8_l4_lv3_2-2026",
    question: "Both potassium and copper are metals in Period 4.\nWhich pair of statements correctly compares their chemical reactivity with cold water and dilute hydrochloric acid?",
    options: [
      { text: "Potassium reacts vigorously with cold water; Copper does not react with cold water or dilute hydrochloric acid", isCorrect: true },
      { text: "Copper reacts vigorously with cold water; Potassium is unreactive" },
      { text: "Both potassium and copper react rapidly with dilute hydrochloric acid releasing hydrogen" },
      { text: "Neither potassium nor copper reacts with cold water" }
    ],
    correctAnswer: 0,
    explanation: "* Potassium is a Group I alkali metal with very high reactivity (reacts violently with water).\n* Copper is a transition metal below hydrogen in the reactivity series, so it does not displace H₂ from cold water or dilute non-oxidising acids like HCl.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q286",
    createdAt: "2026-08-21T11:35:00Z"
  },
  {
    id: "ex_ci_u8_l4_lv3_3-2026",
    question: "Zinc ($Zn$) forms only $Zn^{2+}$ ions and its compounds (e.g. $ZnSO_4$, $ZnO$) are white solids that dissolve in water to give colourless solutions.\nWhy does zinc exhibit these atypical properties compared to typical transition elements like iron or copper?",
    options: [
      { text: "Zinc has a completely filled d-subshell in both its metallic atom and $Zn^{2+}$ ion, preventing d-d electronic transitions and variable oxidation states", isCorrect: true },
      { text: "Zinc has no d-electrons in its atomic structure" },
      { text: "Zinc is an alkali metal located in Group I" },
      { text: "Zinc forms giant covalent networks rather than ionic compounds" }
    ],
    correctAnswer: 0,
    explanation: "* Transition metals show colour and variable valency due to partially filled d-orbitals.\n* Zinc has a full $3d^{10}$ subshell in its atom and $Zn^{2+}$ ion, which is why it has a single oxidation state (+2) and forms colourless/white compounds.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q287",
    createdAt: "2026-08-21T11:40:00Z"
  },
  {
    id: "ex_ci_u8_l4_lv3_4-2023",
    question: "A transition metal ion with formula [CrO₄]²⁻ reacts with acid according to the equilibrium:\n2[CrO₄]²⁻(aq) + 2H⁺(aq) ⇌ [Cr₂O₇]²⁻(aq) + H₂O(l)\nWhat are the oxidation states of chromium in [CrO₄]²⁻ and [Cr₂O₇]²⁻, and is this a redox reaction?",
    options: [
      { text: "+6 in both ions; it is NOT a redox reaction", isCorrect: true },
      { text: "+6 in [CrO₄]²⁻ and +3 in [Cr₂O₇]²⁻; it is a redox reaction" },
      { text: "+4 in [CrO₄]²⁻ and +6 in [Cr₂O₇]²⁻; it is a redox reaction" },
      { text: "+3 in both ions; it is NOT a redox reaction" }
    ],
    correctAnswer: 0,
    explanation: "* In [CrO₄]²⁻: Cr + 4(-2) = -2 $\\implies$ Cr = +6.\n* In [Cr₂O₇]²⁻: 2Cr + 7(-2) = -2 $\\implies$ 2Cr = +12 $\\implies$ Cr = +6.\n* Since the oxidation state of chromium does not change, it is an acid-base equilibrium, not a redox reaction.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q56",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u8_l4_lv3_5-2024",
    question: "Which statement explains why scandium and zinc are sometimes not considered typical transition elements?",
    options: [
      { text: "Scandium forms only Sc³⁺ with an empty 3d subshell, and zinc forms only Zn²⁺ with a completely filled 3d subshell", isCorrect: true },
      { text: "Neither scandium nor zinc conducts electricity in the metallic state" },
      { text: "Both elements have very low melting points and react violently with cold water like sodium" },
      { text: "Both elements form non-metallic covalent oxides only" }
    ],
    correctAnswer: 0,
    explanation: "* A transition element forms at least one stable ion with an incomplete d-subshell.\n* Sc³⁺ has electron configuration [Ar] 3d⁰ (empty d subshell).\n* Zn²⁺ has electron configuration [Ar] 3d¹⁰ (fully filled d subshell).\n* Neither possesses partially filled d-orbitals, so both form only colourless compounds and single oxidation states.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q57",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u8_l4_lv3_6-2025",
    question: "Iron exhibits variable oxidation states. Which sequence shows iron species in order of INCREASING oxidation state of iron?",
    options: [
      { text: "Fe → FeCl₂ → Fe₂O₃", isCorrect: true },
      { text: "Fe₂O₃ → FeCl₂ → Fe" },
      { text: "FeCl₂ → Fe → Fe₂O₃" },
      { text: "Fe → Fe₂O₃ → FeCl₂" }
    ],
    correctAnswer: 0,
    explanation: "* In elemental Fe, oxidation state = 0.\n* In FeCl₂, iron is iron(II) = +2.\n* In Fe₂O₃, iron is iron(III) = +3.\n* The sequence 0 $\\rightarrow$ +2 $\\rightarrow$ +3 represents increasing oxidation states.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q58",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
