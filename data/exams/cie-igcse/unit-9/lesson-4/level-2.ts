import { Question } from '../../../types';

// Uses of Metals & Rusting - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u9_l4_lv2_1-2026",
    question: "Why does galvanised iron (iron coated with a layer of zinc) continue to resist rusting even if the zinc coating is scratched and iron is exposed?",
    options: [
      { text: "Zinc is more reactive than iron and preferentially oxidises (sacrificial protection), sacrificing itself by losing electrons to protect the iron", isCorrect: true },
      { text: "Zinc forms an acidic gas that dissolves water" },
      { text: "Iron absorbs electrons from oxygen to protect zinc" },
      { text: "Scratched zinc forms an alloy that is completely inert" }
    ],
    correctAnswer: 0,
    explanation: "* Zinc is higher than iron in the reactivity series.\n* Zinc readily loses electrons: Zn → Zn²⁺ + 2e⁻.\n* These electrons flow to the iron, preventing Fe from oxidising into Fe²⁺/Fe³⁺ (sacrificial protection).",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q330",
    createdAt: "2026-08-21T16:15:00Z"
  },
  {
    id: "ex_ci_u9_l4_lv2_2-2026",
    question: "Which of the following rust prevention methods works SOLELY as a physical barrier to exclude oxygen and water?",
    options: [
      { text: "Painting an iron garden gate", isCorrect: true },
      { text: "Attaching magnesium blocks to an underground steel pipeline" },
      { text: "Attaching zinc anodes to a steel ship hull" },
      { text: "Galvanising a steel bucket with zinc" }
    ],
    correctAnswer: 0,
    explanation: "* Painting, greasing, and plastic coating act purely as barrier methods.\n* If the paint layer is scratched, the exposed iron will rust immediately (unlike sacrificial methods).",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q331",
    createdAt: "2026-08-21T16:20:00Z"
  },
  {
    id: "ex_ci_u9_l4_lv2_3-2026",
    question: "Why are overhead electrical power transmission cables made of an aluminium core surrounded by or reinforced with a steel cable?",
    options: [
      { text: "Aluminium provides high electrical conductivity and low density, while the steel core provides tensile strength to prevent sagging and breaking", isCorrect: true },
      { text: "Steel conducts electricity better than aluminium" },
      { text: "Aluminium protects the steel from direct sunlight" },
      { text: "Steel prevents birds from sitting on the cable" }
    ],
    correctAnswer: 0,
    explanation: "* Aluminium is a good electrical conductor and lightweight (low density), reducing weight on pylons.\n* Steel has very high tensile strength, providing structural support over long distances.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q332",
    createdAt: "2026-08-21T16:25:00Z"
  },
  {
    id: "ex_ci_u9_l4_lv2_4-2023",
    question: "Why does galvanised iron remain protected from rusting even if the outer zinc layer is scratched?",
    options: [
      { text: "Zinc is more reactive than iron and corrodes preferentially (sacrificial protection)", isCorrect: true },
      { text: "Zinc forms an insoluble salt that coats the exposed iron" },
      { text: "Iron absorbs electrons from the zinc, turning into stainless steel" },
      { text: "The scratch quickly closes due to the high malleability of zinc" }
    ],
    correctAnswer: 0,
    explanation: "* Zinc is higher than iron in the reactivity series.\n* If the zinc coating is scratched, zinc corrodes preferentially because it loses electrons more readily than iron: Zn → Zn²⁺ + 2e⁻.\n* The released electrons flow to the iron, preventing it from oxidising (sacrificial protection).",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q98",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u9_l4_lv2_5-2024",
    question: "Which rust prevention method is an example of a barrier method ONLY, without providing sacrificial protection?",
    options: [
      { text: "Painting an iron gate", isCorrect: true },
      { text: "Attaching magnesium blocks to an underground steel pipe" },
      { text: "Galvanising steel with a zinc coating" },
      { text: "Attaching zinc blocks to the hull of a steel ship" }
    ],
    correctAnswer: 0,
    explanation: "* Painting provides a physical barrier that prevents oxygen and water from reaching iron.\n* If the paint layer is scratched, the exposed iron rusts immediately, because paint provides no sacrificial protection.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q99",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u9_l4_lv2_6-2025",
    question: "Why are overhead electricity cables made of aluminium with a steel core?",
    options: [
      { text: "Aluminium is a good conductor with low density, while steel provides high tensile strength", isCorrect: true },
      { text: "Steel conducts electricity better than aluminium" },
      { text: "Aluminium increases the weight to keep cables steady in high winds" },
      { text: "Steel protects aluminium from rusting" }
    ],
    correctAnswer: 0,
    explanation: "* Aluminium has low density (lightweight) and high electrical conductivity.\n* A core of steel gives the high tensile strength needed to prevent the cables from breaking under their own weight or stretching between pylons.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q100",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
