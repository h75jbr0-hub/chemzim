import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u2_l4_lv1_1-2026",
    question: "What is the definition of activation energy (E_a) in collision theory?",
    options: [
      { text: "The total energy released when products are formed" },
      { text: "The minimum kinetic energy that colliding particles must possess for a collision to result in a successful chemical reaction", isCorrect: true },
      { text: "The average kinetic energy of all gas particles at a given temperature" },
      { text: "The energy difference between reactants and products (ΔH)" }
    ],
    correctAnswer: 1,
    explanation: "* Activation energy ($E_a$) is the minimum threshold of energy required to overcome the energy barrier and initiate bond breaking during a collision.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q22",
    createdAt: "2026-08-02T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_2-2026",
    question: "How does a catalyst increase the rate of a chemical reaction?",
    options: [
      { text: "By increasing the total number of particles in the system" },
      { text: "By providing an alternative reaction pathway with a lower activation energy", isCorrect: true },
      { text: "By shifting the position of equilibrium towards the products" },
      { text: "By increasing the average kinetic energy of the reacting particles" }
    ],
    correctAnswer: 1,
    explanation: "* A catalyst provides an alternative mechanism with a lower activation energy ($E_a$), allowing a significantly greater fraction of colliding particles to possess sufficient energy ($E \\ge E_a$) to react.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q23",
    createdAt: "2026-08-02T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_3-2026",
    question: "On a Maxwell-Boltzmann energy distribution curve, what does the total area under the curve represent?",
    options: [
      { text: "The activation energy of the reaction" },
      { text: "The total number of gaseous particles in the sample", isCorrect: true },
      { text: "The rate of reaction" },
      { text: "The equilibrium constant" }
    ],
    correctAnswer: 1,
    explanation: "* The area under the Maxwell-Boltzmann distribution curve represents the sum of all particles across all energy states (the total number of particles in the sample), and remains constant unless particles are added or removed.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q19",
    createdAt: "2026-08-03T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_4-2026",
    question: "What is dynamic chemical equilibrium?",
    options: [
      { text: "A state where the reaction has completely stopped and all reactants are consumed" },
      { text: "A state in a closed system where the rates of the forward and backward reactions are equal, and the macroscopic concentrations of reactants and products remain constant", isCorrect: true },
      { text: "A state where the concentrations of reactants and products are exactly identical" },
      { text: "A reaction that proceeds in one direction only" }
    ],
    correctAnswer: 1,
    explanation: "* In a dynamic equilibrium, both forward and reverse processes continue at identical rates ($r_{\\text{forward}} = r_{\\text{backward}}$) in a closed system, so no net change in composition is observed.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q23",
    createdAt: "2026-08-03T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_5-2026",
    question: "According to Le Chatelier's principle, what happens when the pressure is increased on the gas-phase equilibrium: $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)}$?",
    options: [
      { text: "Equilibrium shifts to the left towards reactants" },
      { text: "Equilibrium shifts to the right towards products (fewer moles of gas)", isCorrect: true },
      { text: "The value of the equilibrium constant Kc increases" },
      { text: "No change in position of equilibrium occurs" }
    ],
    correctAnswer: 1,
    explanation: "* Reactant side has $1 + 3 = 4\\text{ moles}$ of gas; product side has $2\\text{ moles}$ of gas.\n* Increasing pressure favors the side with fewer gas molecules to oppose the increase in pressure, shifting the equilibrium to the right.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q24",
    createdAt: "2026-08-04T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_6-2026",
    question: "For an endothermic reversible reaction ($\\Delta H > 0$), what effect does an increase in temperature have on the equilibrium position and the value of $K_c$?",
    options: [
      { text: "Equilibrium shifts left, Kc decreases" },
      { text: "Equilibrium shifts right, Kc increases", isCorrect: true },
      { text: "Equilibrium shifts right, Kc remains unchanged" },
      { text: "Equilibrium does not shift, Kc remains unchanged" }
    ],
    correctAnswer: 1,
    explanation: "* By Le Chatelier's principle, raising the temperature favors the endothermic direction (forward reaction) to absorb added heat.\n* Because product yield increases relative to reactants, the numerical value of $K_c$ increases.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q20",
    createdAt: "2026-08-04T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_7-2026",
    question: "What is the equilibrium constant expression ($K_c$) for the homogeneous esterification reaction: $\\text{CH}_3\\text{COOH(l)} + \\text{C}_2\\text{H}_5\\text{OH(l)} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5\\text{(l)} + \\text{H}_2\\text{O(l)}$?",
    options: [
      { text: "Kc = [CH₃COOH][C₂H₅OH] / [CH₃COOC₂H₅][H₂O]" },
      { text: "Kc = [CH₃COOC₂H₅][H₂O] / [CH₃COOH][C₂H₅OH]", isCorrect: true },
      { text: "Kc = [CH₃COOC₂H₅] / [CH₃COOH][C₂H₅OH]" },
      { text: "Kc = [CH₃COOC₂H₅][H₂O] / [CH₃COOH]" }
    ],
    correctAnswer: 1,
    explanation: "* In homogeneous organic liquid equilibria (non-aqueous solvent), water is a product in equivalent stoichiometry and must be included: $K_c = \\frac{[\\text{CH}_3\\text{COOC}_2\\text{H}_5][\\text{H}_2\\text{O}]}{[\\text{CH}_3\\text{COOH}][\\text{C}_2\\text{H}_5\\text{OH}]}$.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q24",
    createdAt: "2026-08-05T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_8-2026",
    question: "What effect does adding a catalyst have on the numerical value of the equilibrium constant ($K_c$) and the position of equilibrium?",
    options: [
      { text: "Increases Kc and shifts equilibrium to the right" },
      { text: "Has NO effect on Kc and NO effect on the position of equilibrium (it only increases the rate at which equilibrium is established)", isCorrect: true },
      { text: "Decreases Kc and shifts equilibrium to the left" },
      { text: "Doubles the yield of products" }
    ],
    correctAnswer: 1,
    explanation: "* A catalyst increases the rates of the forward and backward reactions equally by lowering $E_a$ equally for both directions.\n* Therefore, it does not alter the equilibrium position or the value of $K_c$.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q25",
    createdAt: "2026-08-05T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_9-2026",
    question: "Why does increasing the concentration of a solution increase the rate of a chemical reaction?",
    options: [
      { text: "It decreases the activation energy" },
      { text: "It increases the number of reacting particles per unit volume, which increases the frequency of collisions between particles", isCorrect: true },
      { text: "It increases the average kinetic energy of the particles" },
      { text: "It shifts the position of equilibrium to the left" }
    ],
    correctAnswer: 1,
    explanation: "* Increasing concentration means there are more reactant particles packed in the same space.\n* This increases the probability and frequency of collisions per unit time, resulting in a higher rate of successful collisions.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q33",
    createdAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_10-2026",
    question: "Which of the following describes a heterogeneous equilibrium?",
    options: [
      { text: "All reactants and products are in the same physical state" },
      { text: "The reactants and products are in more than one physical state", isCorrect: true },
      { text: "The rate of the forward reaction is different from the reverse reaction" },
      { text: "The reaction goes to completion without establishing equilibrium" }
    ],
    correctAnswer: 1,
    explanation: "* A heterogeneous equilibrium is one in which the species involved are in different phases or states of matter (e.g., solid reactants and gaseous products).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q26",
    createdAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_11-2026",
    question: "How does grinding a solid reactant into a fine powder affect the rate of reaction?",
    options: [
      { text: "It lowers the activation energy" },
      { text: "It increases the surface area, allowing more collisions to occur per unit time between reactants", isCorrect: true },
      { text: "It increases the temperature of the system" },
      { text: "It decreases the rate of reaction by packing particles too tightly" }
    ],
    correctAnswer: 1,
    explanation: "* Grinding increases the exposed surface area of the solid, meaning more reactant particles are accessible to collide with other reactants at any given instant.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q25",
    createdAt: "2026-08-21T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_12-2026",
    question: "Which of the following is a necessary condition for a dynamic equilibrium to be established and maintained?",
    options: [
      { text: "The reaction must occur in an open container" },
      { text: "The reaction must occur in a closed system", isCorrect: true },
      { text: "The reactants must be completely converted to products" },
      { text: "The temperature must be constantly changing" }
    ],
    correctAnswer: 1,
    explanation: "* A closed system prevents reactants or products from escaping, ensuring that both the forward and reverse reactions can continue indefinitely.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q34",
    createdAt: "2026-08-21T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_13-2026",
    question: "According to Le Chatelier's principle, what is the effect of continuously removing a product as it forms in a reversible reaction?",
    options: [
      { text: "The reaction stops completely" },
      { text: "The position of equilibrium shifts to the right to produce more of that product", isCorrect: true },
      { text: "The position of equilibrium shifts to the left" },
      { text: "The value of Kc decreases" }
    ],
    correctAnswer: 1,
    explanation: "* Removing product decreases its concentration.\n* The system opposes this change by shifting to the right (products side) to replace the lost product, which helps drive the reaction to high yields.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q27",
    createdAt: "2026-08-22T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_14-2026",
    question: "On a reaction profile diagram, what represents the activation energy of the forward reaction?",
    options: [
      { text: "The energy level of the products" },
      { text: "The difference in energy between the reactants and the transition state (peak of the curve)", isCorrect: true },
      { text: "The difference in energy between reactants and products (ΔH)" },
      { text: "The energy level of the catalyst" }
    ],
    correctAnswer: 1,
    explanation: "* Activation energy ($E_a$) is the energy barrier that must be overcome.\n* It is represented by the height from the reactant energy level up to the highest point of the energy profile curve.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q26",
    createdAt: "2026-08-22T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv1_15-2026",
    question: "How does increasing the temperature affect the reactant particles in terms of collision theory?",
    options: [
      { text: "It decreases their average speed" },
      { text: "It increases both the frequency of collisions and the proportion of colliding particles that have energy greater than or equal to the activation energy", isCorrect: true },
      { text: "It only increases the collision frequency, leaving particle energies unchanged" },
      { text: "It decreases the activation energy" }
    ],
    correctAnswer: 2,
    explanation: "* Raising temperature makes particles move faster (increasing collision frequency).\n* More importantly, it shifts the Maxwell-Boltzmann distribution so a much higher percentage of particles have sufficient energy ($E \\ge E_a$) to react successfully.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q35",
    createdAt: "2026-08-23T10:00:00Z"
  }
];

