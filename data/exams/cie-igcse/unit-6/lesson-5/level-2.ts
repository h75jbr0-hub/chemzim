import { Question } from '../../../types';

// Redox Reactions - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u6_l5_lv2_1-2026",
    question: "What is the oxidation state of manganese in potassium manganate(VII), KMnO₄?",
    options: [
      { text: "+7", isCorrect: true },
      { text: "+6" },
      { text: "+4" },
      { text: "+2" }
    ],
    correctAnswer: 0,
    explanation: "* In KMnO₄, K has an oxidation state of +1 and each O has -2.\n* Let $x$ be the oxidation state of Mn: $(+1) + x + 4(-2) = 0 \\implies 1 + x - 8 = 0 \\implies x = +7$.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q195",
    createdAt: "2026-08-21T02:15:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv2_2-2026",
    question: "When acidified aqueous potassium manganate(VII) is added to a solution containing a reducing agent (such as aqueous iron(II) sulfate or sulfur dioxide), what colour change is observed?",
    options: [
      { text: "Purple to colourless", isCorrect: true },
      { text: "Colourless to purple" },
      { text: "Orange to green" },
      { text: "Brown to colourless" }
    ],
    correctAnswer: 0,
    explanation: "* Acidified potassium manganate(VII) is a powerful oxidising agent that contains deep purple MnO₄⁻ ions.\n* When it reacts with a reducing agent, MnO₄⁻ is reduced to almost colourless Mn²⁺ ions.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q196",
    createdAt: "2026-08-21T02:20:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv2_3-2026",
    question: "When aqueous potassium iodide (KI) is added to a solution containing an oxidising agent (such as chlorine water or acidified hydrogen peroxide), what colour change takes place?",
    options: [
      { text: "Colourless to red-brown", isCorrect: true },
      { text: "Purple to colourless" },
      { text: "Blue to pink" },
      { text: "Yellow to dark green" }
    ],
    correctAnswer: 0,
    explanation: "* Potassium iodide contains colourless iodide ions (I⁻).\n* An oxidising agent oxidises I⁻ to aqueous iodine (I₂), turning the solution red-brown (or dark blue if starch indicator is present).",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q197",
    createdAt: "2026-08-21T02:25:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv2_4-2023",
    question: "In the reaction: Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)\nWhich species acts as the reducing agent?",
    options: [
      { text: "Zinc atoms (Zn)", isCorrect: true },
      { text: "Copper(II) ions (Cu²⁺)" },
      { text: "Sulfate ions (SO₄²⁻)" },
      { text: "Copper atoms (Cu)" }
    ],
    correctAnswer: 0,
    explanation: "* The reducing agent donates electrons to reduce another species and is itself oxidised.\n* Zinc atoms lose two electrons ($Zn \\rightarrow Zn^{2+} + 2e^-$), thus acting as the reducing agent.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q32",
    lessonNum: 5,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv2_5-2024",
    question: "What is the oxidation state of sulfur in sodium sulfite, Na₂SO₃?",
    options: [
      { text: "+4", isCorrect: true },
      { text: "+6" },
      { text: "-2" },
      { text: "+2" }
    ],
    correctAnswer: 0,
    explanation: "* In $Na_2SO_3$: each $Na$ is +1, each $O$ is -2.\n* Let $x$ be the oxidation state of sulfur: $2(+1) + x + 3(-2) = 0 \\implies 2 + x - 6 = 0 \\implies x = +4$.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q30",
    lessonNum: 5,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv2_6-2025",
    question: "When potassium iodide solution is added to acidified hydrogen peroxide, a red-brown colour forms. Which statement explains this observation?",
    options: [
      { text: "Iodide ions (I⁻) are oxidised to iodine (I₂) by hydrogen peroxide", isCorrect: true },
      { text: "Iodide ions (I⁻) are reduced to iodine (I₂) by hydrogen peroxide" },
      { text: "Hydrogen peroxide is oxidised to water" },
      { text: "Potassium ions form a red-brown insoluble precipitate" }
    ],
    correctAnswer: 0,
    explanation: "* Iodide ions ($I^-$) lose electrons to form molecular iodine ($I_2$), turning the solution red-brown: $2I^- \\rightarrow I_2 + 2e^-$.\n* Loss of electrons is oxidation; hydrogen peroxide acts as the oxidising agent.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q33",
    lessonNum: 5,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

