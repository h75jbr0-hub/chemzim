import { Question } from '../../../types';

// Preparation of Salts - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u7_l3_lv2_1-2026",
    question: "In the preparation of copper(II) sulfate crystals from copper(II) oxide and dilute sulfuric acid, why is copper(II) oxide added in EXCESS to the warm acid?",
    options: [
      { text: "To ensure that all the sulfuric acid is completely neutralised and used up", isCorrect: true },
      { text: "To speed up the evaporation of water during crystallisation" },
      { text: "To act as a catalyst for crystal formation" },
      { text: "To increase the solubility of copper(II) sulfate in cold water" }
    ],
    correctAnswer: 0,
    explanation: "* Excess insoluble base (CuO) ensures 100% of the limiting sulfuric acid reacts.\n* The unreacted excess solid CuO is easily removed by filtration, leaving a pure aqueous solution of copper(II) sulfate.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q223",
    createdAt: "2026-08-21T05:15:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv2_2-2026",
    question: "After filtering out excess copper(II) oxide, how are large, hydrated crystals of copper(II) sulfate (CuSO₄·5H₂O) obtained from the filtrate?",
    options: [
      { text: "Heat to crystallisation point (saturation), allow to cool slowly, filter crystals, and dry between filter papers", isCorrect: true },
      { text: "Boil the solution continuously until all water has completely evaporated" },
      { text: "Freeze the solution at -20°C and sublimate the ice" },
      { text: "Add concentrated hydrochloric acid to precipitate anhydrous white CuSO₄" }
    ],
    correctAnswer: 0,
    explanation: "* Evaporating to dryness would decompose the salt into anhydrous powder.\n* Gently heating to saturation (crystallisation point, tested on a cold glass rod), followed by slow cooling, produces large hydrated crystals which are then dried gently between filter papers.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q224",
    createdAt: "2026-08-21T05:20:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv2_3-2026",
    question: "A student wants to prepare pure crystals of sodium sulfate by titration.\nWhy is the experiment first carried out using an indicator, and then repeated under identical conditions WITHOUT the indicator?",
    options: [
      { text: "To obtain an unpolluted salt solution free from indicator dye before crystallising", isCorrect: true },
      { text: "The indicator evaporates during heating and destroys the glassware" },
      { text: "The indicator reacts irreversibly with sulfuric acid to form a gas" },
      { text: "The indicator lowers the solubility of sodium sulfate" }
    ],
    correctAnswer: 0,
    explanation: "* Indicators (like methyl orange or phenolphthalein) are organic dyes that would contaminate the final salt crystals.\n* Once exact titration volumes are established, repeating without indicator yields an uncontaminated solution.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q225",
    createdAt: "2026-08-21T05:25:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv2_4-2026",
    question: "Which two soluble compounds should be chosen to prepare an insoluble precipitate of lead(II) chloride (PbCl₂)?",
    options: [
      { text: "Lead(II) nitrate solution and sodium chloride solution", isCorrect: true },
      { text: "Lead metal and dilute hydrochloric acid" },
      { text: "Lead(II) oxide solid and sodium chloride solution" },
      { text: "Lead(II) carbonate and chlorine gas" }
    ],
    correctAnswer: 0,
    explanation: "* Precipitation requires two soluble reactants.\n* Lead(II) nitrate (all nitrates are soluble) and sodium chloride (all sodium salts are soluble) react: Pb(NO₃)₂(aq) + 2NaCl(aq) → PbCl₂(s) + 2NaNO₃(aq).",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q226",
    createdAt: "2026-08-21T05:30:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv2_5-2023",
    question: "A student wants to prepare pure crystals of copper(II) sulfate from dilute sulfuric acid and an insoluble solid. Which substance is NOT suitable to use with the acid?",
    options: [
      { text: "Copper metal, Cu", isCorrect: true },
      { text: "Copper(II) oxide, CuO" },
      { text: "Copper(II) carbonate, CuCO₃" },
      { text: "Copper(II) hydroxide, Cu(OH)₂" }
    ],
    correctAnswer: 0,
    explanation: "* Copper is below hydrogen in the reactivity series and does not react with dilute non-oxidising acids like dilute sulfuric acid.\n* Copper(II) oxide, copper(II) carbonate, and copper(II) hydroxide are basic and react readily with dilute sulfuric acid to form copper(II) sulfate.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q35",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv2_6-2024",
    question: "Which of the following is the correct ionic equation for the precipitation of silver chloride?",
    options: [
      { text: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)", isCorrect: true },
      { text: "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)" },
      { text: "Ag(s) + Cl₂(g) → AgCl(s)" },
      { text: "Ag⁺(aq) + NO₃⁻(aq) → AgNO₃(s)" }
    ],
    correctAnswer: 0,
    explanation: "* In an ionic equation for a precipitation reaction, spectator ions ($Na^+$ and $NO_3^-$) are omitted.\n* The reacting aqueous ions combine to form the insoluble solid precipitate: $Ag^+(aq) + Cl^-(aq) \\rightarrow AgCl(s)$.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q33",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv2_7-2025",
    question: "In the preparation of pure, dry crystals of hydrated magnesium sulfate (MgSO₄·7H₂O), the saturated solution is left to cool slowly at room temperature rather than boiled dry. Why?",
    options: [
      { text: "Slow cooling allows large, well-formed hydrated crystals to grow and prevents loss of water of crystallisation", isCorrect: true },
      { text: "Boiling dry converts magnesium sulfate into magnesium metal" },
      { text: "Magnesium sulfate decomposes into toxic sulfur gas when heated above 50 °C" },
      { text: "Water of crystallisation can only enter the salt at temperatures below 10 °C" }
    ],
    correctAnswer: 0,
    explanation: "* Rapid heating to dryness would drive off the water of crystallisation, leaving a fine anhydrous powder ($MgSO_4$) rather than hydrated crystals ($MgSO_4\\cdot 7H_2O$).\n* Slow cooling allows proper crystal lattice growth.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q36",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

