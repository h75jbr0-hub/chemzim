import { Question } from '../../../types';

// Redox Reactions - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u6_l5_lv3_1-2026",
    question: "When chlorine gas is bubbled into cold dilute aqueous sodium hydroxide: Cl₂ + 2NaOH → NaCl + NaClO + H₂O\nWhat happens to the oxidation state of chlorine in this reaction?",
    options: [
      { text: "It is simultaneously oxidised from 0 to +1 in NaClO and reduced from 0 to -1 in NaCl (disproportionation)", isCorrect: true },
      { text: "It is only reduced from 0 to -1" },
      { text: "It is only oxidised from 0 to +1" },
      { text: "Its oxidation state remains 0 in all products" }
    ],
    correctAnswer: 0,
    explanation: "* In Cl₂, chlorine has oxidation state 0.\n* In NaCl, Cl has oxidation state -1 (reduction).\n* In NaClO, Cl has oxidation state +1 (oxidation).\n* When the same element is simultaneously oxidised and reduced, the reaction is called a disproportionation redox reaction.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q198",
    createdAt: "2026-08-21T02:30:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv3_2-2026",
    question: "Which of the following chemical reactions is NOT a redox reaction?",
    options: [
      { text: "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)", isCorrect: true },
      { text: "2Mg(s) + CO₂(g) → 2MgO(s) + C(s)" },
      { text: "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)" },
      { text: "2FeCl₂(aq) + Cl₂(g) → 2FeCl₃(aq)" }
    ],
    correctAnswer: 0,
    explanation: "* In the precipitation reaction AgNO₃ + NaCl → AgCl + NaNO₃, all ions retain their exact oxidation states (Ag⁺ is +1, Na⁺ is +1, Cl⁻ is -1, N in NO₃⁻ is +5, O is -2).\n* The others all involve changes in oxidation numbers (electron transfers).",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q199",
    createdAt: "2026-08-21T02:35:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv3_3-2026",
    question: "Consider the ionic half-equation: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O\nWhat change in oxidation state does each chromium atom undergo?",
    options: [
      { text: "Reduced from +6 to +3", isCorrect: true },
      { text: "Reduced from +7 to +3" },
      { text: "Oxidised from +3 to +6" },
      { text: "Reduced from +12 to +3" }
    ],
    correctAnswer: 0,
    explanation: "* In dichromate Cr₂O₇²⁻: $2x + 7(-2) = -2 \\implies 2x - 14 = -2 \\implies 2x = +12 \\implies x = +6$.\n* In Cr³⁺, the oxidation state is +3.\n* Each chromium atom gains 3 electrons and decreases in oxidation number from +6 to +3 (reduction).",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q200",
    createdAt: "2026-08-21T02:40:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv3_4-2023",
    question: "When chlorine gas is bubbled into cold dilute aqueous sodium hydroxide, the following reaction occurs:\nCl₂ + 2NaOH → NaCl + NaClO + H₂O\nWhich statement describes the behaviour of chlorine in this disproportionation reaction?",
    options: [
      { text: "Chlorine is simultaneously oxidised from 0 to +1 and reduced from 0 to -1", isCorrect: true },
      { text: "Chlorine is oxidised from -1 to 0" },
      { text: "Chlorine acts solely as a reducing agent" },
      { text: "Chlorine is reduced from +1 to 0" }
    ],
    correctAnswer: 0,
    explanation: "* In $Cl_2$, the oxidation state is 0.\n* In $NaCl$, chlorine is -1 (reduction: 0 to -1).\n* In $NaClO$, chlorine is +1 (oxidation: 0 to +1).\n* Because the same element is simultaneously oxidised and reduced, it is a disproportionation redox reaction.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q31",
    lessonNum: 5,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv3_5-2024",
    question: "Acidified potassium dichromate(VI), K₂Cr₂O₇, is used to test for sulfur dioxide gas. What colour change is observed, and what happens to the oxidation state of chromium?",
    options: [
      { text: "Turns from orange to green as chromium is reduced from +6 to +3", isCorrect: true },
      { text: "Turns from green to orange as chromium is oxidised from +3 to +6" },
      { text: "Turns from purple to colourless as chromium is reduced from +7 to +2" },
      { text: "Turns from orange to yellow as chromium remains at +6" }
    ],
    correctAnswer: 0,
    explanation: "* Dichromate(VI) ions ($Cr_2O_7^{2-}$) are orange with chromium in the +6 oxidation state.\n* Sulfur dioxide reduces $Cr_2O_7^{2-}$ to green chromium(III) ions ($Cr^{3+}$, oxidation state +3), serving as a standard diagnostic test for reducing agents like $SO_2$.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q31",
    lessonNum: 5,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv3_6-2025",
    question: "Consider the redox reaction between iron(II) ions and acidified potassium manganate(VII):\n5Fe²⁺(aq) + MnO₄⁻(aq) + 8H⁺(aq) → 5Fe³⁺(aq) + Mn²⁺(aq) + 4H₂O(l)\nWhich statement correctly identifies the oxidising agent and the change in its oxidation number?",
    options: [
      { text: "MnO₄⁻ is the oxidising agent, and manganese decreases from +7 to +2", isCorrect: true },
      { text: "Fe²⁺ is the oxidising agent, and iron increases from +2 to +3" },
      { text: "MnO₄⁻ is the reducing agent, and manganese decreases from +7 to +2" },
      { text: "H⁺ is the oxidising agent, and hydrogen decreases from +1 to 0" }
    ],
    correctAnswer: 0,
    explanation: "* The oxidising agent oxidises another species and gets reduced itself.\n* In $MnO_4^-$, $Mn$ has an oxidation number of +7, which decreases to +2 in $Mn^{2+}$.\n* Therefore, $MnO_4^-$ is the oxidising agent undergoing reduction.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q31",
    lessonNum: 5,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

