import { Question } from '../../../types';

// Preparation of Salts - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u7_l3_lv3_1-2026",
    question: "Why does the reaction between solid calcium carbonate and dilute sulfuric acid quickly stop, even when plenty of calcium carbonate and acid remain?",
    options: [
      { text: "An insoluble layer of calcium sulfate (CaSO₄) forms on the surface of the carbonate, preventing further acid contact", isCorrect: true },
      { text: "Sulfuric acid decomposes completely into sulfur dioxide gas" },
      { text: "Calcium carbonate turns into unreactive diamond" },
      { text: "Carbon dioxide gas creates high pressure that stops the reaction" }
    ],
    correctAnswer: 0,
    explanation: "* Calcium sulfate is sparingly soluble/insoluble in water.\n* It precipitates as a protective crust (passivation layer) covering the remaining unreacted CaCO₃ solid, halting the reaction rapidly.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q227",
    createdAt: "2026-08-21T05:35:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv3_2-2026",
    question: "A student prepares hydrated copper(II) sulfate crystals (CuSO₄·5H₂O, $M_r = 250$) from 8.0 g of copper(II) oxide (CuO, $M_r = 80$).\nIf the actual yield of crystals obtained is 18.75 g, what is the percentage yield?",
    options: [
      { text: "75.0%", isCorrect: true },
      { text: "50.0%" },
      { text: "90.0%" },
      { text: "25.0%" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of CuO $= 8.0 / 80 = 0.10\\text{ mol}$.\n* Theoretical moles of CuSO₄·5H₂O $= 0.10\\text{ mol}$.\n* Theoretical mass of CuSO₄·5H₂O $= 0.10 \\times 250 = 25.0\\text{ g}$.\n* Percentage yield $= (18.75 / 25.0) \\times 100\\% = 75.0\\%$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q228",
    createdAt: "2026-08-21T05:40:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv3_3-2026",
    question: "When 4.99 g of hydrated copper(II) sulfate (CuSO₄·xH₂O) is heated strongly to constant mass, 3.19 g of white anhydrous copper(II) sulfate (CuSO₄, $M_r = 159.5$) remains.\nWhat is the value of $x$ in the formula of the hydrated salt?\n(Given: $M_r$ of H₂O = 18)",
    options: [
      { text: "5", isCorrect: true },
      { text: "2" },
      { text: "7" },
      { text: "10" }
    ],
    correctAnswer: 0,
    explanation: "* Mass of water lost $= 4.99 - 3.19 = 1.80\\text{ g}$.\n* Moles of CuSO₄ $= 3.19 / 159.5 = 0.020\\text{ mol}$.\n* Moles of H₂O $= 1.80 / 18 = 0.100\\text{ mol}$.\n* Mole ratio (H₂O : CuSO₄) $= 0.100 / 0.020 = 5 \\implies x = 5$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q229",
    createdAt: "2026-08-21T05:45:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv3_4-2023",
    question: "A student prepares a pure, dry sample of barium sulfate (BaSO₄) by mixing 50 cm³ of 1.0 mol/dm³ BaCl₂ with 50 cm³ of 1.0 mol/dm³ Na₂SO₄. Which experimental procedure correctly describes how to obtain the pure, dry salt from the reaction mixture?",
    options: [
      { text: "Filter the mixture, wash the residue with cold distilled water, and dry on filter paper or in an oven below 100 °C", isCorrect: true },
      { text: "Evaporate the mixture until crystallization occurs, then filter" },
      { text: "Filter the mixture, wash the residue with dilute hydrochloric acid, and evaporate to dryness" },
      { text: "Centrifuge the mixture and crystallise the supernatant liquid" }
    ],
    correctAnswer: 0,
    explanation: "* In precipitation, the insoluble solid ($BaSO_4$) is filtered.\n* The residue contains adhering spectator solution ($NaCl$).\n* Washing thoroughly with small portions of distilled water removes all dissolved spectator ions, and drying on filter paper leaves pure, dry $BaSO_4$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q34",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv3_5-2024",
    question: "Why can calcium sulfate (CaSO₄) NOT be successfully prepared in high yield by reacting solid calcium carbonate lumps with dilute sulfuric acid?",
    options: [
      { text: "An insoluble layer of CaSO₄ quickly coats the carbonate lumps, preventing further acid from reaching the interior", isCorrect: true },
      { text: "Calcium sulfate is a gas and escapes immediately" },
      { text: "Sulfuric acid is too weak an acid to react with carbonates" },
      { text: "Calcium carbonate decomposes into calcium metal" }
    ],
    correctAnswer: 0,
    explanation: "* Calcium sulfate is only sparingly soluble in water.\n* As soon as the reaction begins, an insoluble crust of $CaSO_4$ forms on the surface of the $CaCO_3$ lumps, acting as a physical barrier that stops the acid from reacting further.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q34",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv3_6-2025",
    question: "A hydrated salt has the empirical formula MgSO₄·xH₂O. A 5.00 g sample was heated until all water was driven off, leaving 2.44 g of anhydrous MgSO₄ (Mr = 120.4). What is the value of x? (Mr of H₂O = 18.0)",
    options: [
      { text: "7", isCorrect: true },
      { text: "5" },
      { text: "6" },
      { text: "2" }
    ],
    correctAnswer: 0,
    explanation: "* Mass of water lost $= 5.00 - 2.44 = 2.56\\text{ g}$.\n* Moles of MgSO₄ $= 2.44 / 120.4 = 0.02027\\text{ mol}$.\n* Moles of H₂O $= 2.56 / 18.0 = 0.1422\\text{ mol}$.\n* Ratio $x = 0.1422 / 0.02027 = 7.01 \\approx 7$ (Epsom salts: $MgSO_4\\cdot 7H_2O$).",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q34",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

