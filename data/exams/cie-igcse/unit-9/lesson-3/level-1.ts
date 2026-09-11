import { Question } from '../../../types';

// Extraction of Metals - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u9_l3_lv1_1-2026",
    question: "Why is aluminium extracted from its molten ore by electrolysis rather than by heating with carbon in a blast furnace?",
    options: [
      { text: "Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide", isCorrect: true },
      { text: "Aluminium has a lower melting point than carbon" },
      { text: "Carbon reacts with aluminium to form an explosive gas" },
      { text: "Electrolysis is much cheaper than heating with coke" }
    ],
    correctAnswer: 0,
    explanation: "* Metals above carbon in the reactivity series (K, Na, Ca, Mg, Al) form very stable oxides and must be extracted using electrolysis of their molten compounds.\n* Metals below carbon (Zn, Fe, Cu) can be extracted by chemical reduction using carbon or carbon monoxide.",
    level: 1,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q317",
    createdAt: "2026-08-21T15:00:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv1_2-2026",
    question: "Which of the following lists the four raw materials added into the top of the Blast Furnace for the extraction of iron?",
    options: [
      { text: "Iron ore (hematite, Fe₂O₃), coke (carbon), limestone (calcium carbonate), and hot air", isCorrect: true },
      { text: "Bauxite, cryolite, graphite, and oxygen" },
      { text: "Iron ore, sand, carbon dioxide, and water" },
      { text: "Magnetite, calcium chloride, slag, and nitrogen" }
    ],
    correctAnswer: 0,
    explanation: "* The Blast Furnace requires:\n  1. Hematite (Fe₂O₃) as source of iron.\n  2. Coke (C) as fuel and reducing agent.\n  3. Limestone (CaCO₃) to remove acidic silica impurities as slag.\n  4. Hot air to burn coke.",
    level: 1,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q318",
    createdAt: "2026-08-21T15:05:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv1_3-2026",
    question: "What is the main commercial ore from which aluminium is extracted?",
    options: [
      { text: "Bauxite (hydrated aluminium oxide)", isCorrect: true },
      { text: "Hematite" },
      { text: "Galena" },
      { text: "Chalcopyrite" }
    ],
    correctAnswer: 0,
    explanation: "* Aluminium is primarily extracted from bauxite, which is purified into alumina (Al₂O₃) before electrolysis.",
    level: 1,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q319",
    createdAt: "2026-08-21T15:10:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv1_4-2023",
    question: "What is the main ore of iron used in the blast furnace?",
    options: [
      { text: "Hematite", isCorrect: true },
      { text: "Bauxite" },
      { text: "Cryolite" },
      { text: "Limestone" }
    ],
    correctAnswer: 0,
    explanation: "* Hematite contains primarily iron(III) oxide, Fe₂O₃, and is the main ore from which iron is extracted in the blast furnace.\n* Bauxite is the ore of aluminium.",
    level: 1,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q86",
    lessonNum: 3,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv1_5-2024",
    question: "Why is limestone added to the blast furnace during the extraction of iron?",
    options: [
      { text: "To remove acidic silicon dioxide impurities as molten slag", isCorrect: true },
      { text: "To act as a fuel and release heat" },
      { text: "To directly reduce iron(III) oxide to iron" },
      { text: "To prevent the iron from rusting inside the furnace" }
    ],
    correctAnswer: 0,
    explanation: "* Limestone (CaCO₃) decomposes into calcium oxide (CaO), which reacts with acidic impurities such as silica (SiO₂) to form calcium silicate (CaSiO₃, slag), which floats on top of molten iron.",
    level: 1,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q87",
    lessonNum: 3,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv1_6-2025",
    question: "Why must aluminium be extracted by electrolysis rather than by heating its oxide with carbon?",
    options: [
      { text: "Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide", isCorrect: true },
      { text: "Aluminium oxide has too low a melting point for a blast furnace" },
      { text: "Aluminium reacts with carbon to produce toxic methane gas" },
      { text: "Electrolysis uses less energy than heating with coal" }
    ],
    correctAnswer: 0,
    explanation: "* In the reactivity series, aluminium is above carbon.\n* Because aluminium forms stronger bonds with oxygen than carbon does, carbon cannot take oxygen away from aluminium oxide.",
    level: 1,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q88",
    lessonNum: 3,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
