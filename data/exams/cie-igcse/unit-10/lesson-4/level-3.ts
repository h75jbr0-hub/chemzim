import { Question } from '../../../types';

// Carbon Cycle & Photosynthesis - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u10_l4_lv3_1-2026",
    question: "A plant absorbs 144 dm³ of carbon dioxide gas (CO₂) at r.t.p. during photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.\nWhat mass of glucose ($M_r = 180$) is synthesized?\n(Molar gas volume at r.t.p. = 24.0 dm³/mol)",
    options: [
      { text: "180 g", isCorrect: true },
      { text: "1080 g" },
      { text: "30 g" },
      { text: "360 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of CO₂ $= 144 / 24.0 = 6.0\\text{ mol}$.\n* From stoichiometry, 6 moles of CO₂ produce 1 mole of glucose (C₆H₁₂O₆).\n* Moles of glucose synthesized $= 1.0\\text{ mol}$.\n* Mass of glucose $= 1.0 \\times 180 = 180\\text{ g}$.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q389",
    createdAt: "2026-08-21T21:40:00Z"
  },
  {
    id: "ex_ci_u10_l4_lv3_2-2026",
    question: "Why is a hydrogen-oxygen fuel cell vehicle classified as producing 'zero emissions' during driving?",
    options: [
      { text: "The only chemical product formed from the overall cell reaction (2H₂ + O₂ → 2H₂O) is pure water vapour", isCorrect: true },
      { text: "The fuel cell decomposes greenhouse gases in the air as it drives" },
      { text: "Hydrogen fuel cells run without any chemical reactions taking place" },
      { text: "Fuel cells absorb all exhaust fumes from surrounding cars" }
    ],
    correctAnswer: 0,
    explanation: "* The electrochemical reaction in a hydrogen fuel cell is: 2H₂(g) + O₂(g) → 2H₂O(l/g).\n* No carbon dioxide, carbon monoxide, sulfur dioxide, particulates, or oxides of nitrogen are produced at the tailpipe.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q390",
    createdAt: "2026-08-21T21:45:00Z"
  },
  {
    id: "ex_ci_u10_l4_lv3_3-2026",
    question: "What distinguishes 'green hydrogen' from 'grey hydrogen' in modern sustainable environmental chemistry?",
    options: [
      { text: "Green hydrogen is produced by the electrolysis of water powered entirely by renewable solar/wind electricity, generating zero carbon footprint", isCorrect: true },
      { text: "Green hydrogen is extracted from green plant leaves" },
      { text: "Grey hydrogen contains radioactive carbon isotopes" },
      { text: "Green hydrogen is a green-coloured liquid" }
    ],
    correctAnswer: 0,
    explanation: "* Green hydrogen uses clean renewable electricity (solar/wind) to split water into H₂ and O₂ with zero emissions.\n* Grey hydrogen is manufactured by steam reforming of fossil methane (CH₄ + 2H₂O → CO₂ + 4H₂), releasing substantial CO₂.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q391",
    createdAt: "2026-08-21T21:50:00Z"
  },
  {
    id: "ex_ci_u10_l4_lv3_4-2026",
    question: "How does the thawing of Arctic permafrost create a dangerous positive feedback loop in global climate warming?",
    options: [
      { text: "Thawing allows anaerobic bacteria to decompose ancient organic matter, releasing massive volumes of trapped methane (CH₄) and CO₂, which accelerate further atmospheric warming", isCorrect: true },
      { text: "Thawing permafrost consumes oxygen and cools the atmosphere" },
      { text: "Permafrost reacts with ocean salt to generate toxic chlorine clouds" },
      { text: "Melting permafrost turns all Arctic soil into graphite" }
    ],
    correctAnswer: 0,
    explanation: "* Warming temperatures melt frozen permafrost soils, triggering microbial decomposition of organic carbon.\n* This releases huge stores of methane and CO₂, amplifying greenhouse warming and causing even faster permafrost melting (positive feedback loop).",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q392",
    createdAt: "2026-08-21T21:55:00Z"
  },
  {
    id: "ex_ci_u10_l4_lv3_5-2023",
    question: "During photosynthesis, a green plant absorbs 72.0 dm³ of carbon dioxide measured at r.t.p. What mass of glucose is produced by this reaction?\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n($M_r(\\text{glucose}) = 180$; Molar volume of gas at r.t.p. = 24.0 dm³/mol)",
    options: [
      { text: "90.0 g", isCorrect: true },
      { text: "180 g" },
      { text: "540 g" },
      { text: "15.0 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of CO₂ absorbed = 72.0 / 24.0 = 3.00 mol.\n* From the stoichiometric equation, 6 mol CO₂ produce 1 mol glucose.\n* Moles of glucose = 3.00 / 6 = 0.500 mol.\n* Mass of glucose = 0.500 mol × 180 g/mol = 90.0 g.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q146",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u10_l4_lv3_6-2024",
    question: "Why is a vehicle powered by a hydrogen-oxygen fuel cell considered zero-emission during operation?",
    options: [
      { text: "The only chemical product emitted from the exhaust is pure water vapour", isCorrect: true },
      { text: "The vehicle consumes and filters harmful pollutants from ambient air" },
      { text: "Hydrogen fuel cells operate without undergoing any chemical change" },
      { text: "The vehicle's emissions are stored indefinitely inside the battery" }
    ],
    correctAnswer: 0,
    explanation: "* In a hydrogen-oxygen fuel cell, hydrogen fuel is electrochemically oxidised: 2H₂(g) + O₂(g) → 2H₂O(l).\n* The only chemical exhaust product is harmless water vapour; no greenhouse gases or toxic pollutants are released at point of use.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q147",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u10_l4_lv3_7-2025",
    question: "What is meant by 'green hydrogen' in sustainable environmental chemistry?",
    options: [
      { text: "Hydrogen produced by water electrolysis powered entirely by renewable energy sources", isCorrect: true },
      { text: "Hydrogen extracted directly from chlorophyll in green plants" },
      { text: "Hydrogen manufactured from the steam reforming of methane with carbon capture" },
      { text: "Hydrogen compressed into a green-tinted liquid cylinder" }
    ],
    correctAnswer: 0,
    explanation: "* Green hydrogen is generated through the electrolysis of water (2H₂O → 2H₂ + O₂) using electricity derived 100% from renewable sources (such as wind or solar), leaving zero carbon footprint.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q148",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];
