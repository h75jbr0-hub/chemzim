import { Question } from '../../../types';

// Water Treatment & Testing - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u10_l1_lv3_1-2026",
    question: "When blue hydrated copper(II) sulfate is heated, it turns white. When water is added back to the white powder, it turns blue again and releases heat.\nWhich chemical equation represents this reversible reaction?",
    options: [
      { text: "CuSO₄·5H₂O(s) ⇌ CuSO₄(s) + 5H₂O(l)   (Forward: endothermic; Reverse: exothermic)", isCorrect: true },
      { text: "CuSO₄(s) + H₂O(l) ⇌ Cu(OH)₂(s) + H₂SO₄(aq)" },
      { text: "CuSO₄·5H₂O(s) → CuO(s) + SO₃(g) + 5H₂O(g)" },
      { text: "CuSO₄(s) + 5H₂O(l) → Cu(s) + 5H₂SO₄(aq)" }
    ],
    correctAnswer: 0,
    explanation: "* Heating blue hydrated crystals drives off water endothermically: CuSO₄·5H₂O(s) ⇌ CuSO₄(s) + 5H₂O(l).\n* Adding water back regenerates blue hydrated copper(II) sulfate in an exothermic process.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q353",
    createdAt: "2026-08-21T18:40:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv3_2-2026",
    question: "Why MUST deionised / distilled water be used instead of tap water when preparing standard solutions and conducting analytical precipitation tests in chemistry laboratories?",
    options: [
      { text: "Tap water contains dissolved ions (e.g. Cl⁻, Ca²⁺, Mg²⁺, SO₄²⁻) that would form unwanted precipitates and interfere with qualitative test results", isCorrect: true },
      { text: "Tap water reacts with glass beakers and etches them" },
      { text: "Deionised water has a pH of 1.0 which speeds up precipitation" },
      { text: "Tap water evaporates too quickly during heating" }
    ],
    correctAnswer: 0,
    explanation: "* Tap water contains dissolved mineral ions (like $Cl^-$, $SO_4^{2-}$, $Ca^{2+}$) which give false-positive precipitates with analytical reagents like $AgNO_3$ or $Ba(NO_3)_2$.\n* Deionised water contains no dissolved ionic impurities.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q354",
    createdAt: "2026-08-21T18:45:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv3_3-2026",
    question: "What is the percentage by mass of water in hydrated cobalt(II) chloride crystals (CoCl₂·6H₂O)?\n(Given relative atomic masses: Co = 59, Cl = 35.5, H = 1, O = 16)",
    options: [
      { text: "45.4%", isCorrect: true },
      { text: "25.2%" },
      { text: "54.6%" },
      { text: "38.0%" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r$ of CoCl₂ $= 59 + 2(35.5) = 130$.\n* Mass of $6\\text{H}_2\\text{O} = 6 \\times 18 = 108$.\n* Total $M_r = 130 + 108 = 238$.\n* Percentage of water $= (108 / 238) \\times 100\\% = 45.38\\% \\approx 45.4\\%$.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q355",
    createdAt: "2026-08-21T18:50:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv3_4-2026",
    question: "Why is fluoride (e.g. NaF or H₂SiF₆) added to drinking water supplies in some municipal regions?",
    options: [
      { text: "To strengthen tooth enamel and reduce the incidence of dental caries (tooth decay) in children", isCorrect: true },
      { text: "To eliminate toxic heavy metals from the water supply" },
      { text: "To soften hard water by precipitating calcium ions" },
      { text: "To act as an alternative disinfectant to chlorine" }
    ],
    correctAnswer: 0,
    explanation: "* Controlled fluoridation (~1 ppm) converts hydroxyapatite in tooth enamel to acid-resistant fluorapatite, protecting teeth against decay.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q356",
    createdAt: "2026-08-21T18:55:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv3_5-2023",
    question: "Why must distilled or deionised water be used instead of tap water when preparing standard solutions and conducting qualitative analysis in a chemistry laboratory?",
    options: [
      { text: "Tap water contains dissolved ions like chloride and sulfate which produce false precipitates with testing reagents", isCorrect: true },
      { text: "Tap water has a very low pH which neutralises alkaline precipitates" },
      { text: "Tap water boils at a much higher temperature than distilled water" },
      { text: "Tap water reacts with laboratory glassware, etching the containers" }
    ],
    correctAnswer: 0,
    explanation: "* Tap water contains dissolved ions such as Cl⁻, SO₄²⁻, Ca²⁺, and Mg²⁺.\n* In tests for halides (using acidified AgNO₃) or sulfates (using acidified Ba(NO₃)₂), these ions in tap water would form unwanted precipitates, giving false-positive results.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q119",
    lessonNum: 1,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv3_6-2024",
    question: "What is the percentage by mass of water of crystallisation in hydrated copper(II) sulfate, CuSO₄·5H₂O?\n($A_r: \\text{Cu} = 64, \\text{S} = 32, \\text{O} = 16, \\text{H} = 1$)",
    options: [
      { text: "36.0%", isCorrect: true },
      { text: "28.8%" },
      { text: "45.0%" },
      { text: "18.0%" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r(\\text{CuSO}_4) = 64 + 32 + (4 \\times 16) = 160$.\n* $M_r(5\\text{H}_2\\text{O}) = 5 \\times 18 = 90$.\n* Total $M_r(\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}) = 160 + 90 = 250$.\n* % of water = $(90 / 250) \\times 100\\% = 36.0\\%$.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q120",
    lessonNum: 1,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv3_7-2025",
    question: "The reversible hydration of anhydrous copper(II) sulfate is represented by:\nCuSO₄(s) + 5H₂O(l) ⇌ CuSO₄·5H₂O(s)\nWhich statement about this reaction is correct?",
    options: [
      { text: "The forward reaction is exothermic and accompanied by a color change from white to blue", isCorrect: true },
      { text: "The forward reaction is endothermic and accompanied by a color change from blue to white" },
      { text: "Both forward and backward reactions are endothermic" },
      { text: "The reverse dehydration reaction is exothermic" }
    ],
    correctAnswer: 0,
    explanation: "* Driving off water (dehydration) requires heating, so the reverse reaction is endothermic.\n* Consequently, adding water (hydration) is exothermic and turns the white anhydrous powder into blue hydrated crystals.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q121",
    lessonNum: 1,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
