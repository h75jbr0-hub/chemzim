import { Question } from '../../../types';

// Elements, Compounds and Mixtures - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u2_l2_lv2_1-2026",
    question: "A mixture contains solid sand (silicon dioxide, insoluble in water) and solid sodium chloride (soluble in water). Which sequence of laboratory techniques is used to obtain dry crystals of pure sodium chloride and dry sand?",
    options: [
      { text: "Add water → filter → wash and dry residue (sand) → heat filtrate to crystallisation point → cool and dry crystals (NaCl)" },
      { text: "Fractional distillation → condensation → filtration" },
      { text: "Chromatography → evaporation → magnetic separation" },
      { text: "Add acid → neutralisation → decantation" }
    ],
    correctAnswer: 0,
    explanation: "* Adding water dissolves the soluble sodium chloride while leaving the insoluble sand as a solid.\n* Filtration separates the solid sand (residue) on the filter paper from the sodium chloride solution (filtrate).\n* Evaporating the filtrate to saturation point, cooling to crystallise, and drying gives pure sodium chloride crystals.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q5",
    lessonNum: 2,
    createdAt: "2026-05-11T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv2_2-impurity-mp-bp",
    question: "Pure water melts at 0 °C and boils at 100 °C. What could be the melting point and boiling point of water containing a dissolved impurity?",
    options: [
      { text: "Melting point: +3 °C ; Boiling point: 96 °C" },
      { text: "Melting point: +3 °C ; Boiling point: 104 °C" },
      { text: "Melting point: -3 °C ; Boiling point: 96 °C" },
      { text: "Melting point: -3 °C ; Boiling point: 104 °C" }
    ],
    correctAnswer: 3,
    explanation: "* The presence of an impurity causes depression of the freezing/melting point below 0 °C (-3 °C).\n* The presence of an impurity causes elevation of the boiling point above 100 °C (104 °C).\n* Both transitions occur gradually over a temperature range rather than at a sharp fixed point.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q2",
    lessonNum: 2,
    createdAt: "2026-05-11T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv2_3-classifying-table",
    question: "In which row are the three substances correctly classified?",
    options: [
      { text: "Element: Water ; Compound: Sulfur ; Mixture: Brass" },
      { text: "Element: Sulfur ; Compound: Brass ; Mixture: Water" },
      { text: "Element: Brass ; Compound: Sulfur ; Mixture: Water" },
      { text: "Element: Sulfur ; Compound: Water ; Mixture: Brass" }
    ],
    correctAnswer: 3,
    explanation: "* Sulfur consists of identical S atoms and cannot be broken down chemically, so it is an element.\n* Water consists of H and O chemically combined in a fixed 2:1 ratio (H₂O), so it is a compound.\n* Brass is an alloy of copper and zinc mixed physically in variable proportions without chemical bonds, so it is a mixture.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q4",
    lessonNum: 2,
    createdAt: "2026-05-11T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv2_4-2023",
    question: "A mixture containing iron filings and sulfur powder is heated strongly in a test tube. A glow spreads through the mixture and a black solid, iron(II) sulfide (FeS), is formed. How does this product differ from the original mixture?",
    options: [
      { text: "The iron can still be separated from the sulfur by using a bar magnet" },
      { text: "A chemical reaction has occurred forming a new compound with completely different properties that cannot be separated by a magnet" },
      { text: "The iron and sulfur can be separated by adding water because sulfur dissolves" },
      { text: "The mass of the product is significantly less than the sum of the reactants" }
    ],
    correctAnswer: 1,
    explanation: "* Heating initiates an exothermic chemical reaction: $\\text{Fe} + \\text{S} \\rightarrow \\text{FeS}$.\n* A compound is formed where atoms are bonded chemically in a fixed ratio, losing individual magnetic and physical properties of elemental iron and sulfur.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q7",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv2_5-2024",
    question: "Which of the following statements about mixtures and compounds is NOT correct?",
    options: [
      { text: "The components of a mixture can be separated by physical methods" },
      { text: "The formation of a compound from its elements usually involves a detectable energy change" },
      { text: "A mixture always has a sharp, fixed boiling point" },
      { text: "A compound has a fixed, definite composition by mass" }
    ],
    correctAnswer: 2,
    explanation: "* Pure substances (elements and compounds) melt and boil at sharp, fixed temperatures.\n* Mixtures melt and boil over a range of temperatures depending on their variable composition.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q7",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv2_6-2025",
    question: "Which row correctly identifies a mixture of elements, a mixture of compounds, and a mixture of an element and a compound?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Mixture of elements</th><th class="p-2 border">Mixture of compounds</th><th class="p-2 border">Mixture of an element and a compound</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Brass (Cu + Zn)</td><td class="p-2 border">Petroleum (hydrocarbons)</td><td class="p-2 border">Air containing damp argon and water vapor</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Steel (Fe + C)</td><td class="p-2 border">Air (N₂ + O₂)</td><td class="p-2 border">Sea water (NaCl + H₂O)</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Water (H₂O)</td><td class="p-2 border">Air</td><td class="p-2 border">Brass</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Air</td><td class="p-2 border">Sea water</td><td class="p-2 border">Petroleum</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Brass (Cu + Zn) | Petroleum (hydrocarbons) | Air containing argon and water vapor" },
      { text: "Row B: Steel (Fe + C) | Air (N₂ + O₂) | Sea water (NaCl + H₂O)" },
      { text: "Row C: Water (H₂O) | Air | Brass" },
      { text: "Row D: Air | Sea water | Petroleum" }
    ],
    correctAnswer: 0,
    explanation: "* Brass consists of copper and zinc (two metallic elements).\n* Petroleum is a mixture of various alkane compounds.\n* Atmospheric air containing argon (element) and water vapor ($H_2O$, compound) is a mixture of an element and a compound.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q6",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];


