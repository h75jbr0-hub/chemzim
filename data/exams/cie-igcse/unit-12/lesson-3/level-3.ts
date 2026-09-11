import { Question } from '../../../types';

// Identification of Ions and Gases - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u12_l3_lv3_1-2026",
    question: "When aqueous sodium hydroxide is added to a green solution of chromium(III) ions (Cr³⁺), a grey-green precipitate forms which dissolves in excess NaOH to form a dark green solution.\nWhat observation is made when aqueous ammonia (NH₃) is added in EXCESS to a fresh sample of chromium(III) solution?",
    options: [
      { text: "A grey-green precipitate forms which is INSOLUBLE in excess aqueous ammonia", isCorrect: true },
      { text: "A grey-green precipitate forms which dissolves to give a colourless solution" },
      { text: "No precipitate is formed under any conditions" },
      { text: "A red-brown precipitate forms immediately" }
    ],
    correctAnswer: 0,
    explanation: "* With $Cr^{3+}$ ions:\n  - NaOH: Grey-green precipitate of $Cr(OH)_3$, soluble in excess NaOH to form dark green $[Cr(OH)_6]^{3-}$.\n  - Aqueous $NH_3$: Grey-green precipitate of $Cr(OH)_3$, insoluble in excess $NH_3$.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q473",
    createdAt: "2026-08-22T06:40:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv3_2-2026",
    question: "Why MUST test solutions always be acidified with dilute NITRIC acid (HNO₃) rather than hydrochloric acid (HCl) or sulfuric acid (H₂SO₄) before testing for halide ions with aqueous silver nitrate?",
    options: [
      { text: "HCl contains chloride ions (Cl⁻) and H₂SO₄ contains sulfate ions (SO₄²⁻), both of which would form false-positive precipitates with silver ions (AgCl / Ag₂SO₄)", isCorrect: true },
      { text: "Nitric acid dissolves all silver halides instantly" },
      { text: "Hydrochloric acid causes silver nitrate to explode" },
      { text: "Sulfuric acid oxidises silver ions to silver oxide" }
    ],
    correctAnswer: 0,
    explanation: "* Acidifying removes interfering carbonate ($CO_3^{2-}$) and sulfite ($SO_3^{2-}$) ions that would precipitate with $Ag^+$.\n* Nitric acid must be used because its nitrate ion ($NO_3^-$) does not form precipitates with any cations.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q474",
    createdAt: "2026-08-22T06:45:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv3_3-2026",
    question: "A green solid X undergoes thermal decomposition to release a gas that turns limewater milky and leaves a black solid residue Y. Solid Y dissolves in dilute sulfuric acid to form a clear blue solution.\nWhat is the chemical identity of solid X?",
    options: [
      { text: "Copper(II) carbonate, CuCO₃", isCorrect: true },
      { text: "Iron(II) sulfate, FeSO₄" },
      { text: "Chromium(III) oxide, Cr₂O₃" },
      { text: "Nickel(II) nitrate, Ni(NO₃)₂" }
    ],
    correctAnswer: 0,
    explanation: "* Green solid X is copper(II) carbonate: CuCO₃(s) → CuO(s) + CO₂(g).\n* $CO_2$ turns limewater milky.\n* Black residue Y is copper(II) oxide (CuO), which reacts with $H_2SO_4$ to form blue $CuSO_4(aq)$ solution.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q475",
    createdAt: "2026-08-22T06:50:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv3_4-2026",
    question: "When aqueous sodium hydroxide is added to a colourless solution of compound Z, NO precipitate forms even upon adding excess NaOH. When the mixture is heated gently, a pungent gas is evolved that turns damp red litmus paper blue.\nWhat cation is present in compound Z?",
    options: [
      { text: "Ammonium ion (NH₄⁺)", isCorrect: true },
      { text: "Calcium ion (Ca²⁺)" },
      { text: "Aluminium ion (Al³⁺)" },
      { text: "Zinc ion (Zn²⁺)" }
    ],
    correctAnswer: 0,
    explanation: "* $NH_4^+$ forms no precipitate with $OH^-$ ions because ammonia and water are formed in solution: NH₄⁺(aq) + OH⁻(aq) → NH₃(g) + H₂O(l).\n* Gentle heating drives out volatile $NH_3$ gas, which turns damp red litmus blue.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q476",
    createdAt: "2026-08-22T06:55:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv3_5-2023",
    question: "A mixture of two solid salts, X and Y, was dissolved in water.\n1. Addition of excess aqueous sodium hydroxide gave a white precipitate which remained undissolved.\n2. When the mixture was heated, a gas was evolved that turned damp red litmus paper blue.\n3. Addition of dilute nitric acid followed by aqueous barium nitrate produced a thick white precipitate.\nWhich two compounds could be salts X and Y?",
    options: [
      { text: "Magnesium sulfate and ammonium chloride", isCorrect: true },
      { text: "Zinc sulfate and potassium chloride" },
      { text: "Calcium chloride and sodium carbonate" },
      { text: "Aluminium sulfate and sodium nitrate" }
    ],
    correctAnswer: 0,
    explanation: "* Magnesium ions ($Mg^{2+}$) produce a white precipitate with NaOH that is insoluble in excess.\n* Ammonium ions ($NH_4^+$) evolve ammonia gas ($NH_3$) when heated with aqueous NaOH, turning damp red litmus blue.\n* Sulfate ions ($SO_4^{2-}$) form a white precipitate of barium sulfate with acidified barium nitrate.\n* Chloride ions remain soluble in these conditions. Hence, magnesium sulfate + ammonium chloride fits all tests.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 3,
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q40",
    createdAt: "2023-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv3_6-2024",
    question: "A sample of green crystals of salt G is heated in a dry test tube.\nA colourless liquid condenses on the cooler parts of the test tube, and a pungent gas is evolved that turns acidified potassium manganate(VII) from purple to colourless.\nThe residue in the test tube is a red-brown solid.\nWhat is salt G?",
    options: [
      { text: "Hydrated iron(II) sulfate", isCorrect: true },
      { text: "Hydrated copper(II) carbonate" },
      { text: "Anhydrous iron(III) chloride" },
      { text: "Hydrated nickel(II) nitrate" }
    ],
    correctAnswer: 0,
    explanation: "* Hydrated iron(II) sulfate ($FeSO_4 \\cdot 7H_2O$) is pale green.\n* On heating, it releases water of crystallisation (colourless liquid) and decomposes to give sulfur dioxide ($SO_2$), which decolourises acidified potassium manganate(VII).\n* The red-brown solid residue is iron(III) oxide ($Fe_2O_3$).",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 3,
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q40",
    createdAt: "2024-06-01T09:00:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv3_7-2025",
    question: "A solution contains both chloride ions (Cl⁻) and iodide ions (I⁻).\nWhich reagent and observation can be used to prove the presence of iodide ions without interference from chloride ions?",
    options: [
      { text: "Add chlorine water and a few drops of starch solution: a deep blue-black colour appears", isCorrect: true },
      { text: "Add acidified silver nitrate: a white precipitate appears" },
      { text: "Add dilute hydrochloric acid: effervescence occurs" },
      { text: "Add aqueous sodium hydroxide: a yellow precipitate forms" }
    ],
    correctAnswer: 0,
    explanation: "* Chlorine water is a stronger oxidizing agent than iodine, displacing iodide ions: $Cl_2 + 2I^- \\rightarrow 2Cl^- + I_2$.\n* The liberated iodine ($I_2$) gives an intense blue-black colour with starch solution.\n* Chloride ions do not react with chlorine water.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    lessonNum: 3,
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q39",
    createdAt: "2025-06-01T09:00:00Z"
  }
];
