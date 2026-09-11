import { Question } from '../../../types';

// Collision Theory - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u6_l2_lv3_1-2026",
    question: "On an energy distribution curve showing the number of molecules with a given kinetic energy at temperature T₁ and a higher temperature T₂:\nWhich statement correctly describes the curve at the higher temperature T₂?",
    options: [
      { text: "The peak shifts to the right and becomes lower, and the area under the curve to the right of $E_a$ increases significantly", isCorrect: true },
      { text: "The peak shifts to the left and becomes higher, while $E_a$ decreases" },
      { text: "The peak stays at the same position but the total area under the curve doubles" },
      { text: "The peak shifts to the right and becomes higher, while $E_a$ shifts to the left" }
    ],
    correctAnswer: 0,
    explanation: "* At higher temperature, average kinetic energy increases, shifting the distribution peak to the right (higher energy) and lowering its height so total area (number of particles) remains constant.\n* The shaded area to the right of $E_a$ (particles with energy $\\ge E_a$) increases substantially, leading to a much higher frequency of successful collisions.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q170",
    createdAt: "2026-08-20T23:35:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv3_2-2026",
    question: "Two molecules with total kinetic energy greater than $E_a$ collide but fail to react.\nWhat is the most likely explanation for why no reaction occurs?",
    options: [
      { text: "The molecules did not collide with the correct orientation in space", isCorrect: true },
      { text: "The temperature of the reaction mixture was too high" },
      { text: "The activation energy suddenly increased during the collision" },
      { text: "The reaction is endothermic" }
    ],
    correctAnswer: 0,
    explanation: "* Having $E \\ge E_a$ is necessary but not sufficient on its own.\n* The reactive parts/functional groups of the colliding molecules must also collide with the proper steric alignment/orientation to allow bond breaking and bond making to occur.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q171",
    createdAt: "2026-08-20T23:40:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv3_3-2026",
    question: "An experiment is carried out between 1.0 g of calcium carbonate and 50 cm³ of 1.0 mol/dm³ HCl.\nIn Experiment 1: Large marble chips at 20°C.\nIn Experiment 2: Small marble chips at 30°C.\nWhich statement comparing Experiment 2 to Experiment 1 is correct?",
    options: [
      { text: "Experiment 2 has a higher initial rate and finishes faster, but produces the same final volume of CO₂", isCorrect: true },
      { text: "Experiment 2 produces a larger final volume of CO₂ because of higher temperature" },
      { text: "Experiment 2 has a lower activation energy than Experiment 1" },
      { text: "Experiment 2 has a slower initial rate because small chips dissolve too quickly" }
    ],
    correctAnswer: 0,
    explanation: "* Smaller chips (larger surface area) and higher temperature both increase the rate of reaction, so Experiment 2 is much faster initially and completes in less time.\n* Since the quantities of reactants are unchanged, the total moles of CO₂ produced at completion remain the same.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q172",
    createdAt: "2026-08-20T23:45:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv3_4-2023",
    question: "A Maxwell-Boltzmann distribution curve shows the molecular energies in a gas at temperature T1. When the gas is heated to temperature T2 (T2 > T1), which change occurs to the curve?",
    options: [
      { text: "The peak shifts to the right and becomes lower, with a larger area under the curve beyond Ea", isCorrect: true },
      { text: "The peak shifts to the left and becomes higher" },
      { text: "The peak shifts to the right and becomes higher" },
      { text: "The total area under the whole curve increases" }
    ],
    correctAnswer: 0,
    explanation: "* As temperature increases, the average molecular speed increases, shifting the distribution peak to higher energy (to the right).\n* Since total number of particles (area under curve) is constant, the peak must broaden and become lower, resulting in a substantially larger area under the tail beyond the activation energy ($E_a$).",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q28",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv3_5-2024",
    question: "Two experiments are carried out between magnesium and hydrochloric acid:\n* Exp 1: 0.12 g Mg ribbon + 50 cm³ of 1.0 mol/dm³ HCl\n* Exp 2: 0.12 g Mg powder + 25 cm³ of 2.0 mol/dm³ HCl\nWhich statement correctly compares the initial rate of reaction and the total volume of H₂ gas collected at r.t.p.?",
    options: [
      { text: "Exp 2 has a higher initial rate, and both produce identical total volumes of H₂ gas", isCorrect: true },
      { text: "Exp 2 has a higher initial rate and produces twice the volume of H₂ gas" },
      { text: "Both experiments have identical initial rates and produce identical volumes of H₂" },
      { text: "Exp 1 has a higher initial rate because the volume of acid is larger" }
    ],
    correctAnswer: 0,
    explanation: "* In both experiments, magnesium is the limiting reactant ($n = 0.12/24 = 0.005\\text{ mol}$). Acid moles = $0.050\\text{ mol}$ in Exp 1 and $0.050\\text{ mol}$ in Exp 2 (both in large excess).\n* Therefore, both yield identical amounts of $H_2$ gas.\n* Exp 2 uses powdered Mg (higher surface area) and 2.0 mol/dm³ HCl (higher concentration), giving a significantly faster initial rate.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q30",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv3_6-2025",
    question: "Why does an increase in pressure increase the rate of reaction between sulfur dioxide and oxygen in the Contact process, but have no effect on the rate of reaction between aqueous sodium hydroxide and hydrochloric acid?",
    options: [
      { text: "Gases are compressible so pressure increases particle density; liquids and solutions are virtually incompressible", isCorrect: true },
      { text: "Pressure lowers the activation energy of gas reactions only" },
      { text: "Aqueous reactions do not involve collisions between particles" },
      { text: "Sulfur dioxide is a catalyst" }
    ],
    correctAnswer: 0,
    explanation: "* Increasing pressure reduces the volume occupied by gases, forcing gas molecules closer together and increasing collision frequency.\n* In liquids and solutions, particles are already closely packed and virtually incompressible, so pressure changes do not significantly alter particle spacing or collision rates.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q32",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

