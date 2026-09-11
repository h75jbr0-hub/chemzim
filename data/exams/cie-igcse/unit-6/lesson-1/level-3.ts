import { Question } from '../../../types';

// Rate of Reaction - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u6_l1_lv3_1-2026",
    question: "In an experiment, excess marble chips react with 50 cm³ of 1.0 mol/dm³ HCl to produce curve X on a volume-time graph.\nWhich change in conditions would produce a curve that is steeper initially and levels off at TWICE the final volume of gas?",
    options: [
      { text: "Using 50 cm³ of 2.0 mol/dm³ HCl at the same temperature", isCorrect: true },
      { text: "Using 100 cm³ of 1.0 mol/dm³ HCl at the same temperature" },
      { text: "Using 50 cm³ of 1.0 mol/dm³ HCl with powdered marble at a higher temperature" },
      { text: "Using 100 cm³ of 2.0 mol/dm³ HCl at the same temperature" }
    ],
    correctAnswer: 0,
    explanation: "* Doubling concentration from 1.0 to 2.0 mol/dm³ doubles the rate of collision (steeper initial slope).\n* Since the volume is 50 cm³, the moles of HCl doubled ($0.050 \\times 2.0 = 0.10\\text{ mol}$ vs $0.050\\text{ mol}$), producing twice the volume of CO₂ gas.\n* (100 cm³ of 1.0 mol/dm³ would give twice the volume, but with the same initial concentration, its initial slope would not be steeper).",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q160",
    createdAt: "2026-08-20T22:35:00Z"
  },
  {
    id: "ex_ci_u6_l1_lv3_2-2026",
    question: "A tangent drawn to a gas volume-time curve at $t = 15\\text{ s}$ passes through the points $(0\\text{ s}, 10\\text{ cm}^3)$ and $(30\\text{ s}, 70\\text{ cm}^3)$.\nWhat is the instantaneous rate of reaction at $t = 15\\text{ s}$?",
    options: [
      { text: "2.0 cm³/s", isCorrect: true },
      { text: "2.33 cm³/s" },
      { text: "4.0 cm³/s" },
      { text: "1.5 cm³/s" }
    ],
    correctAnswer: 0,
    explanation: "* Gradient of tangent $= \\Delta y / \\Delta x = (70 - 10) / (30 - 0) = 60 / 30 = 2.0\\text{ cm}^3\\text{/s}$.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q161",
    createdAt: "2026-08-20T22:40:00Z"
  },
  {
    id: "ex_ci_u6_l1_lv3_3-2026",
    question: "In an iodine clock experiment, the time $t$ for the dark blue starch-iodine complex to appear was recorded for different concentrations of iodide ions.\nWhich graph would yield a straight line passing through the origin if the rate of reaction is directly proportional to the concentration of iodide ions?",
    options: [
      { text: "Time ($t$) against [I⁻]" },
      { text: "1 / Time ($1/t$) against [I⁻]", isCorrect: true },
      { text: "Time ($t$) against 1 / [I⁻]" },
      { text: "Log($t$) against [I⁻]" }
    ],
    correctAnswer: 1,
    explanation: "* The rate of reaction is inversely proportional to reaction time ($\\text{Rate} \\propto 1/t$).\n* If rate is directly proportional to $[\\text{I}^-]$, then plotting $1/t$ against $[\\text{I}^-]$ will produce a straight line passing through the origin.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q162",
    createdAt: "2026-08-20T22:45:00Z"
  },
  {
    id: "ex_ci_u6_l1_lv3_4-2023",
    question: "A reaction produces a gas. At time t = 30 s, the tangent to the volume-time curve has coordinates (10 s, 25 cm³) and (50 s, 85 cm³). What is the instantaneous rate of reaction at t = 30 s?",
    options: [
      { text: "1.5 cm³/s", isCorrect: true },
      { text: "2.0 cm³/s" },
      { text: "0.67 cm³/s" },
      { text: "2.83 cm³/s" }
    ],
    correctAnswer: 0,
    explanation: "* The instantaneous rate of reaction is given by the gradient of the tangent to the curve.\n* $\\text{Gradient} = \\frac{\\Delta V}{\\Delta t} = \\frac{85 - 25}{50 - 10} = \\frac{60}{40} = 1.5\\text{ cm}^3\\text{/s}$.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q27",
    lessonNum: 1,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l1_lv3_5-2024",
    question: "In an experiment, 2.0 g of small marble chips was added to 50 cm³ of 1.0 mol/dm³ HCl (excess acid). Which change would produce a graph that is steeper initially but finishes at the EXACT same final volume of CO₂?",
    options: [
      { text: "Using 2.0 g of powdered marble chips with 50 cm³ of 1.0 mol/dm³ HCl", isCorrect: true },
      { text: "Using 4.0 g of small marble chips with 50 cm³ of 1.0 mol/dm³ HCl" },
      { text: "Using 2.0 g of small marble chips with 50 cm³ of 2.0 mol/dm³ HCl" },
      { text: "Using 2.0 g of small marble chips with 100 cm³ of 1.0 mol/dm³ HCl" }
    ],
    correctAnswer: 0,
    explanation: "* Marble chips ($CaCO_3$) are the limiting reactant. The same mass (2.0 g) determines the final volume of $CO_2$ gas produced.\n* Powdering the marble increases the surface area exposed to acid collisions, increasing the initial reaction rate (steeper initial slope) without altering the final amount of product.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q27",
    lessonNum: 1,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l1_lv3_6-2025",
    question: "A student investigated the rate of reaction between sodium thiosulfate and hydrochloric acid at different temperatures. The time taken (t) for the cross to disappear was recorded. Why is 1/t used as a measure of the rate of reaction?",
    options: [
      { text: "The shorter the time taken for a fixed amount of precipitate to form, the faster the rate of reaction", isCorrect: true },
      { text: "The rate of reaction is directly proportional to the total time taken" },
      { text: "1/t gives the exact number of moles of sulfur formed per second" },
      { text: "The activation energy decreases as 1/t increases" }
    ],
    correctAnswer: 0,
    explanation: "* In the disappearing cross experiment, the amount of sulfur required to obscure the cross is constant.\n* Since rate is (amount of product / time) and the amount is constant, rate is inversely proportional to time: $\\text{Rate} \\propto 1/t$.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 23 Q28",
    lessonNum: 1,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

