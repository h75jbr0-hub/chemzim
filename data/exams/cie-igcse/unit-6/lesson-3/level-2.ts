import { Question } from '../../../types';

// Catalysts - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u6_l3_lv2_1-2026",
    question: "Catalytic converters in car exhaust systems use transition metal catalysts (platinum, palladium, rhodium) to convert polluting gases into less harmful substances.\nWhich reaction is catalyzed in a catalytic converter?",
    options: [
      { text: "2CO + 2NO → 2CO₂ + N₂", isCorrect: true },
      { text: "CO₂ + H₂O → CH₄ + O₂" },
      { text: "SO₂ + NO₂ → SO₃ + NO" },
      { text: "2C + O₂ → 2CO" }
    ],
    correctAnswer: 0,
    explanation: "* Catalytic converters catalyze the redox reaction between carbon monoxide and nitrogen monoxide to form harmless carbon dioxide and nitrogen gas: 2CO + 2NO → 2CO₂ + N₂.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q176",
    createdAt: "2026-08-21T00:15:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv2_2-2026",
    question: "Which industrial process is correctly matched with its specific transition metal or compound catalyst?",
    options: [
      { text: "Haber process (ammonia synthesis) → Finely divided iron (Fe)", isCorrect: true },
      { text: "Contact process (sulfuric acid) → Nickel (Ni)" },
      { text: "Hydrogenation of vegetable oils → Vanadium(V) oxide (V₂O₅)" },
      { text: "Cracking of long-chain alkanes → Manganese(IV) oxide (MnO₂)" }
    ],
    correctAnswer: 0,
    explanation: "* The Haber process uses finely divided iron (Fe) as catalyst.\n* The Contact process uses vanadium(V) oxide (V₂O₅).\n* Hydrogenation of alkenes/vegetable oils uses nickel (Ni).\n* Cracking uses alumina / silica catalysts.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q177",
    createdAt: "2026-08-21T00:20:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv2_3-2026",
    question: "Why does the rate of an enzyme-catalyzed reaction drop dramatically to zero when the temperature is raised above 60°C?",
    options: [
      { text: "The activation energy of the reaction becomes too negative" },
      { text: "The tertiary protein structure of the enzyme is denatured, destroying its active site", isCorrect: true },
      { text: "The substrate molecules lose all kinetic energy" },
      { text: "The enzyme evaporates out of the solution" }
    ],
    correctAnswer: 1,
    explanation: "* High temperatures break the delicate hydrogen and ionic bonds holding the enzyme's three-dimensional shape.\n* The active site is permanently altered (denaturation), preventing substrate binding.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q178",
    createdAt: "2026-08-21T00:25:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv2_4-2023",
    question: "Which catalyst is used in the Contact process to convert sulfur dioxide into sulfur trioxide: 2SO₂ + O₂ ⇌ 2SO₃?",
    options: [
      { text: "Vanadium(V) oxide (V₂O₅)", isCorrect: true },
      { text: "Iron (Fe)" },
      { text: "Nickel (Ni)" },
      { text: "Manganese(IV) oxide (MnO₂)" }
    ],
    correctAnswer: 0,
    explanation: "* In the Contact process, sulfur dioxide is oxidised to sulfur trioxide using a vanadium(V) oxide ($V_2O_5$) catalyst at approximately 450 °C.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q30",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv2_5-2024",
    question: "Why does an increase in temperature above 45 °C cause the rate of yeast fermentation to decrease rapidly?",
    options: [
      { text: "The enzymes inside yeast are denatured, altering the shape of their active sites", isCorrect: true },
      { text: "The activation energy of fermentation increases significantly" },
      { text: "Glucose decomposes into carbon and water" },
      { text: "The collision frequency between substrate and enzyme becomes zero" }
    ],
    correctAnswer: 0,
    explanation: "* Yeast contains enzymes (zymase) that catalyze fermentation.\n* At excessive temperatures (above ~40–45 °C), thermal agitation disrupts hydrogen bonding within the protein structure, denaturing the enzyme and permanently destroying catalytic activity.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q28",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv2_6-2025",
    question: "A catalyst provides an alternative pathway for a reaction. How does this alternative pathway affect the activation energy and the overall enthalpy change (ΔH)?",
    options: [
      { text: "Activation energy is lower; ΔH remains unchanged", isCorrect: true },
      { text: "Activation energy is lower; ΔH becomes more negative" },
      { text: "Activation energy is higher; ΔH remains unchanged" },
      { text: "Activation energy is lower; ΔH becomes zero" }
    ],
    correctAnswer: 0,
    explanation: "* A catalyst lowers the activation energy ($E_a$) barrier.\n* It has zero effect on the chemical potential energy of the reactants or products, meaning the enthalpy change ($\\Delta H$) is unchanged.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q31",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

