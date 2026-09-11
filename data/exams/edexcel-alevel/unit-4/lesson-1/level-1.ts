import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u4_l1_lv1_1-2026",
    question: "What is the definition of the 'overall order of reaction' for a rate equation expressed as $\\text{Rate} = k[\\text{A}]^m[\\text{B}]^n$?",
    options: [
      { text: "The stoichiometric sum of coefficients in the balanced chemical equation" },
      { text: "The sum of the powers (m + n) to which the concentration terms are raised in the experimentally determined rate equation", isCorrect: true },
      { text: "The highest exponent in the rate equation" },
      { text: "The number of molecules colliding in the slow step" }
    ],
    correctAnswer: 1,
    explanation: "* The overall order is the sum of the individual orders ($m + n$) with respect to each reactant in the experimentally determined rate law.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q1",
    createdAt: "2026-09-10T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_2-2026",
    question: "What are the SI units of the rate constant ($k$) for a reaction that is first order overall: $\\text{Rate} = k[\\text{A}]$?",
    options: [
      { text: "mol dm⁻³ s⁻¹" },
      { text: "s⁻¹", isCorrect: true },
      { text: "dm³ mol⁻¹ s⁻¹" },
      { text: "dm⁶ mol⁻² s⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* Rearranging: $k = \\frac{\\text{Rate}}{[\\text{A}]} = \\frac{\\text{mol dm}^{-3}\\text{ s}^{-1}}{\\text{mol dm}^{-3}} = \\mathbf{s^{-1}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q2",
    createdAt: "2026-09-10T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_3-2026",
    question: "For a zero-order reactant X (Rate = k[X]⁰), what is the characteristic shape of the concentration against time graph?",
    options: [
      { text: "An exponential decay curve with constant half-life" },
      { text: "A straight line with a constant negative gradient (-k)", isCorrect: true },
      { text: "A horizontal straight line parallel to the x-axis" },
      { text: "An upward sloping quadratic curve" }
    ],
    correctAnswer: 1,
    explanation: "* For zero-order kinetics, rate is constant and independent of concentration, meaning $[\\text{X}]$ decreases at a constant rate over time, producing a straight downward line: $\\text{slope} = -k$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q1",
    createdAt: "2026-09-11T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_4-2026",
    question: "What is the defining kinetic feature of a first-order reaction with respect to half-life ($t_{1/2}$)?",
    options: [
      { text: "The half-life doubles as the reactant concentration is halved" },
      { text: "The half-life remains constant and is independent of the initial reactant concentration (t₁/₂ = ln 2 / k)", isCorrect: true },
      { text: "The half-life is inversely proportional to temperature" },
      { text: "The half-life decreases to zero as the reaction proceeds" }
    ],
    correctAnswer: 1,
    explanation: "* For any first-order reaction, $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$, which is completely independent of concentration $[\\text{A}]_0$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q2",
    createdAt: "2026-09-11T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_5-2026",
    question: "In the Arrhenius equation: $k = A e^{-E_a / RT}$, what physical quantity does the symbol 'A' represent?",
    options: [
      { text: "The activation energy in J mol⁻¹" },
      { text: "The pre-exponential factor (Arrhenius constant / frequency factor), representing the frequency of collisions with correct molecular orientation", isCorrect: true },
      { text: "The universal gas constant" },
      { text: "The absorbance measured by a colorimeter" }
    ],
    correctAnswer: 1,
    explanation: "* $A$ is the pre-exponential frequency factor, which accounts for the total collision frequency and the fraction of collisions with the correct steric orientation.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q3",
    createdAt: "2026-09-12T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_6-2026",
    question: "When plotting $\\ln k$ against $\\frac{1}{T}$ (Arrhenius plot), what does the gradient of the straight line equal?",
    options: [
      { text: "+E_a / R" },
      { text: "-E_a / R", isCorrect: true },
      { text: "ln A" },
      { text: "-R / E_a" }
    ],
    correctAnswer: 1,
    explanation: "* Taking the natural logarithm: $\\ln k = -\\frac{E_a}{R} \\cdot \\left(\\frac{1}{T}\\right) + \\ln A$.\n* Comparing with $y = mx + c$, where $y = \\ln k$ and $x = \\frac{1}{T}$, the $\\text{gradient} = -\\frac{E_a}{R}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q2",
    createdAt: "2026-09-12T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_7-2026",
    question: "What is the 'rate-determining step' (RDS) in a multi-step reaction mechanism?",
    options: [
      { text: "The first step in the mechanism" },
      { text: "The slowest elementary step in the reaction pathway, which controls the overall rate of reaction", isCorrect: true },
      { text: "The fastest step involving free radicals" },
      { text: "The step that releases the most heat" }
    ],
    correctAnswer: 1,
    explanation: "* The rate-determining step is the bottleneck step with the highest activation energy; any species appearing in the rate equation must participate in or before the rate-determining step.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q3",
    createdAt: "2026-09-13T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_8-2026",
    question: "In an iodine clock reaction, how is the initial rate of reaction experimentally approximated?",
    options: [
      { text: "By measuring the total volume of gas produced at infinity" },
      { text: "By calculating 1 / t, where t is the time taken for the sudden blue-black starch-iodine color to appear", isCorrect: true },
      { text: "By determining the temperature rise with a thermometer" },
      { text: "By titrating with potassium manganate" }
    ],
    correctAnswer: 1,
    explanation: "* In a clock reaction, the time $t$ taken for a fixed small amount of product to form is recorded, so initial rate is directly proportional to $\\frac{1}{t}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q4",
    createdAt: "2026-09-13T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_9-2026",
    question: "What are the SI units of the rate constant ($k$) for a reaction that is second order overall: $\\text{Rate} = k[\\text{A}]^2$?",
    options: [
      { text: "s⁻¹" },
      { text: "dm³ mol⁻¹ s⁻¹", isCorrect: true },
      { text: "dm⁶ mol⁻² s⁻¹" },
      { text: "mol dm⁻³ s⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* $k = \\frac{\\text{Rate}}{[\\text{A}]^2} = \\frac{\\text{mol dm}^{-3}\\text{ s}^{-1}}{(\\text{mol dm}^{-3})^2} = \\mathbf{\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q8",
    createdAt: "2026-09-20T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_10-2026",
    question: "For a reactant that is first order (Rate = k[A]¹), what is the shape of the Rate versus Concentration ([A]) graph?",
    options: [
      { text: "A horizontal line parallel to the x-axis" },
      { text: "A straight line passing through the origin (0,0) with a constant positive gradient equal to k", isCorrect: true },
      { text: "An upward curving parabola" },
      { text: "A downward sloping curve" }
    ],
    correctAnswer: 1,
    explanation: "* Since $\\text{Rate} = k[\\text{A}]$, the relationship is directly proportional, giving a straight line through the origin where $\\text{slope} = k$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q9",
    createdAt: "2026-09-20T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_11-2026",
    question: "How does the half-life ($t_{1/2}$) change as a second-order reaction proceeds and the reactant concentration decreases?",
    options: [
      { text: "The half-life remains constant" },
      { text: "Each successive half-life DOUBLES as the concentration halves (t₁/₂ = 1 / (k[A]₀))", isCorrect: true },
      { text: "The half-life decreases to zero" },
      { text: "The half-life fluctuates randomly" }
    ],
    correctAnswer: 1,
    explanation: "* For a second-order reaction, $t_{1/2} = \\frac{1}{k[\\text{A}]_0}$, so as concentration halves, the time taken for the next halving is twice as long ($100\\text{ s} \\rightarrow 200\\text{ s} \\rightarrow 400\\text{ s}$).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q7",
    createdAt: "2026-09-21T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_12-2026",
    question: "On an Arrhenius plot of $\\ln k$ versus $1/T$, what does the y-intercept of the line represent?",
    options: [
      { text: "Activation energy (E_a)" },
      { text: "ln A (the natural logarithm of the pre-exponential factor)", isCorrect: true },
      { text: "The gas constant (R)" },
      { text: "The rate constant at 0 °C" }
    ],
    correctAnswer: 1,
    explanation: "* In the equation $\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$, the $y$-intercept when $\\frac{1}{T} = 0$ is $\\mathbf{\\ln A}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q9",
    createdAt: "2026-09-21T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_13-2026",
    question: "Which of the following experimental techniques is suitable for continuously monitoring the rate of a reaction that produces hydrogen gas ($\text{H}_2$)?",
    options: [
      { text: "Measuring mass loss on a digital balance" },
      { text: "Collecting gas in a graduated gas syringe over time", isCorrect: true },
      { text: "Using a colorimeter" },
      { text: "Measuring electrical conductivity" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrogen gas has an extremely low molar mass ($M_r = 2.0\\text{ g mol}^{-1}$), making mass loss on a balance undetectable; a gas syringe accurately measures the evolved volume over time.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q10",
    createdAt: "2026-09-22T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_14-2026",
    question: "What is an intermediate in a multi-step chemical reaction mechanism?",
    options: [
      { text: "A substance that speeds up the reaction without being consumed" },
      { text: "A species that is formed in an earlier elementary step and consumed in a subsequent step, so it does not appear in the overall balanced stoichiometric equation", isCorrect: true },
      { text: "A transition state that cannot be isolated" },
      { text: "The final product of the reaction" }
    ],
    correctAnswer: 1,
    explanation: "* An intermediate is a real molecular species with fully formed bonds (occupying a potential energy minimum) generated during the reaction and subsequently used up.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q8",
    createdAt: "2026-09-22T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv1_15-2026",
    question: "Why does the rate of reaction increase exponentially with increasing temperature according to the Boltzmann factor $e^{-E_a / RT}$?",
    options: [
      { text: "Because the activation energy decreases as temperature rises" },
      { text: "Because an increase in temperature dramatically increases the fraction of colliding molecules that possess kinetic energy greater than or equal to E_a", isCorrect: true },
      { text: "Because the collision frequency increases ten-fold" },
      { text: "Because the order of reaction changes" }
    ],
    correctAnswer: 1,
    explanation: "* The exponential term $e^{-E_a / RT}$ represents the proportion of collisions having energy $E \\ge E_a$, which increases dramatically with even modest temperature rises.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q10",
    createdAt: "2026-09-23T10:00:00Z"
  }
];


