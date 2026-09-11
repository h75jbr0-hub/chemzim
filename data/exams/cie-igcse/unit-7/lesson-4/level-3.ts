import { Question } from '../../../types';

// Identification of Ions and Gases - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u7_l4_lv3_1-2026",
    question: "A student tests an unknown salt solution Z:\n1. Sodium hydroxide and aluminium foil are added, and the mixture is warmed gently. A gas is evolved that turns damp red litmus paper blue.\n2. When aqueous sodium hydroxide is added dropwise, a green precipitate forms which dissolves in excess NaOH to form a green solution.\nWhich ions are present in salt Z?",
    options: [
      { text: "Chromium(III) ions (Cr³⁺) and nitrate ions (NO₃⁻)", isCorrect: true },
      { text: "Iron(II) ions (Fe²⁺) and ammonium ions (NH₄⁺)" },
      { text: "Iron(II) ions (Fe²⁺) and nitrate ions (NO₃⁻)" },
      { text: "Copper(II) ions (Cu²⁺) and carbonate ions (CO₃²⁻)" }
    ],
    correctAnswer: 0,
    explanation: "* Warming with NaOH and aluminium foil reduces nitrate ions (NO₃⁻) to ammonia gas (turns red litmus blue).\n* Cr³⁺ reacts with NaOH to give a grey-green precipitate of Cr(OH)₃ that dissolves in excess NaOH to form a dark green solution.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q237",
    createdAt: "2026-08-21T06:35:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv3_2-2026",
    question: "How can sulfate ions (SO₄²⁻) and sulfite ions (SO₃²⁻) in separate test-tubes be distinguished experimentally?",
    options: [
      { text: "Add dilute hydrochloric acid and warm; sulfite produces sulfur dioxide gas (turns acidified KMnO₄ colourless), while sulfate produces no gas", isCorrect: true },
      { text: "Add aqueous barium nitrate; only sulfate forms a white precipitate" },
      { text: "Add aqueous silver nitrate; only sulfite forms a yellow precipitate" },
      { text: "Add aluminium foil and sodium hydroxide; only sulfate produces ammonia" }
    ],
    correctAnswer: 0,
    explanation: "* Sulfite ions react with dilute acids upon warming to release sulfur dioxide gas: SO₃²⁻(aq) + 2H⁺(aq) → SO₂(g) + H₂O(l).\n* SO₂ is a reducing gas that decolourises acidified potassium manganate(VII).\n* Sulfate ions do not react with dilute acid to produce gas.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q238",
    createdAt: "2026-08-21T06:40:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv3_3-2026",
    question: "Why MUST dilute nitric acid (HNO₃) be added before aqueous silver nitrate (AgNO₃) when testing for halide ions (Cl⁻, Br⁻, I⁻)?",
    options: [
      { text: "To react with and remove any carbonate ions (CO₃²⁻) which would otherwise form a false-positive white precipitate of silver carbonate", isCorrect: true },
      { text: "To oxidise chloride ions to chlorine gas" },
      { text: "To act as a catalyst for silver halide precipitate formation" },
      { text: "To increase the solubility of silver chloride" }
    ],
    correctAnswer: 0,
    explanation: "* Carbonate ions react with Ag⁺ to form insoluble white silver carbonate (Ag₂CO₃), mimicking silver chloride.\n* Acidifying with HNO₃ decomposes carbonates into CO₂ and water (2H⁺ + CO₃²⁻ → H₂O + CO₂), preventing false positives.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q239",
    createdAt: "2026-08-21T06:45:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv3_4-2023",
    question: "A solid compound X was analysed:\n1. A flame test on X gave a lilac flame\n2. When aqueous barium nitrate was added to an acidified solution of X, no precipitate formed\n3. When aqueous silver nitrate was added to an acidified solution of X, a cream precipitate formed which was sparingly soluble in dilute ammonia\nWhat is the chemical formula of compound X?",
    options: [
      { text: "KBr (potassium bromide)", isCorrect: true },
      { text: "KCl (potassium chloride)" },
      { text: "KI (potassium iodide)" },
      { text: "K₂SO₄ (potassium sulfate)" }
    ],
    correctAnswer: 0,
    explanation: "* Lilac flame test confirms potassium ($K^+$).\n* No precipitate with acidified barium nitrate rules out sulfate ($SO_4^{2-}$).\n* A cream precipitate with acidified silver nitrate confirms bromide ($Br^-$).\n* Therefore, compound X is potassium bromide ($KBr$).",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q35",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv3_5-2024",
    question: "A student adds aqueous sodium hydroxide dropwise to an unknown solution until in excess. A white precipitate forms which dissolves in excess NaOH to give a colourless solution.\nWhen aqueous ammonia is added dropwise to a fresh sample of the same unknown solution, a white precipitate forms which is INSOLUBLE in excess ammonia.\nWhich cation is present in the solution?",
    options: [
      { text: "Aluminium ion, Al³⁺", isCorrect: true },
      { text: "Zinc ion, Zn²⁺" },
      { text: "Calcium ion, Ca²⁺" },
      { text: "Lead(II) ion, Pb²⁺" }
    ],
    correctAnswer: 0,
    explanation: "* $Al^{3+}$, $Zn^{2+}$, and $Pb^{2+}$ all dissolve in excess $NaOH$.\n* In excess aqueous ammonia ($NH_3$), $Zn^{2+}$ precipitates redissolve, whereas $Al^{3+}$ precipitates remain insoluble.\n* Calcium ($Ca^{2+}$) does not dissolve in excess $NaOH$. Hence, the cation is $Al^{3+}$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q35",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv3_6-2025",
    question: "To test for sulfite ions (SO₃²⁻) in a solid sample, dilute hydrochloric acid is added and the mixture is warmed gently. What gas is evolved, and which test confirms its identity?",
    options: [
      { text: "Sulfur dioxide (SO₂), which turns acidified potassium manganate(VII) from purple to colourless", isCorrect: true },
      { text: "Hydrogen sulfide (H₂S), which turns lead acetate paper black" },
      { text: "Carbon dioxide (CO₂), which turns limewater milky" },
      { text: "Chlorine (Cl₂), which bleaches damp litmus paper" }
    ],
    correctAnswer: 0,
    explanation: "* Acidifying and warming sulfite ions releases sulfur dioxide gas:\n  $SO_3^{2-}(aq) + 2H^+(aq) \\rightarrow H_2O(l) + SO_2(g)$.\n* Sulfur dioxide is a reducing agent that reduces acidified potassium manganate(VII) from purple to colourless.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q35",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

