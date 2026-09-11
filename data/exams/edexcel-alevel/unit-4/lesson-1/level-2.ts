import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u4_l1_lv2_1-2026",
    question: "Initial rate data for the reaction $2\\text{NO(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{NO}_2\\text{(g)}$ show:\n- When $[\\text{NO}]$ is doubled while $[\\text{O}_2]$ is kept constant, the initial rate quadruples ($4\\times$).\n- When $[\\text{O}_2]$ is doubled while $[\\text{NO}]$ is kept constant, the initial rate doubles ($2\\times$).\nWhat is the overall rate equation and the units of $k$?",
    options: [
      { text: "Rate = k[NO][O₂]; units: dm³ mol⁻¹ s⁻¹" },
      { text: "Rate = k[NO]²[O₂]; units: dm⁶ mol⁻² s⁻¹", isCorrect: true },
      { text: "Rate = k[NO][O₂]²; units: dm⁶ mol⁻² s⁻¹" },
      { text: "Rate = k[NO]²[O₂]²; units: dm⁹ mol⁻³ s⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* Doubling $[\\text{NO}]$ increases rate by $2^m = 4 \\implies m = 2$ (second order in $\\text{NO}$).\n* Doubling $[\\text{O}_2]$ increases rate by $2^n = 2 \\implies n = 1$ (first order in $\\text{O}_2$).\n* Overall rate equation: $\\text{Rate} = k[\\text{NO}]^2[\\text{O}_2]$.\n* Units of $k = \\frac{\\text{mol dm}^{-3}\\text{ s}^{-1}}{(\\text{mol dm}^{-3})^3} = \\mathbf{\\text{dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q4",
    createdAt: "2026-09-14T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_2-2026",
    question: "A first-order decomposition reaction has a constant half-life of $t_{1/2} = 240\\text{ s}$. Calculate the numerical value of the rate constant $k$ in $\\text{s}^{-1}$.",
    options: [
      { text: "1.44 × 10⁻³ s⁻¹" },
      { text: "2.89 × 10⁻³ s⁻¹", isCorrect: true },
      { text: "4.17 × 10⁻³ s⁻¹" },
      { text: "166.3 s⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* $k = \\frac{\\ln 2}{t_{1/2}} = \\frac{0.69315}{240\\text{ s}} = \\mathbf{2.89 \\times 10^{-3}\\text{ s}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q5",
    createdAt: "2026-09-14T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_3-2026",
    question: "For the continuous monitoring of the reaction between propanone and iodine in acid solution:\n$\\text{CH}_3\\text{COCH}_3 + \\text{I}_2 \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COCH}_2\\text{I} + \\text{H}^+ + \\text{I}^-$\nThe experimentally determined rate law is $\\text{Rate} = k[\\text{CH}_3\\text{COCH}_3]^1[\\text{H}^+]^1[\\text{I}_2]^0$. What is the chemical role of $\\text{I}_2$ in the reaction mechanism?",
    options: [
      { text: "I₂ is involved in the slow rate-determining step" },
      { text: "I₂ reacts in a fast step that occurs AFTER the rate-determining step, so changing [I₂] has zero effect on the overall rate", isCorrect: true },
      { text: "I₂ acts as a homogeneous catalyst" },
      { text: "I₂ is an inhibitor" }
    ],
    correctAnswer: 1,
    explanation: "* A reactant with zero order ($[\\text{I}_2]^0$) does not participate in the rate-determining step or any preceding equilibrium; it reacts only in a fast subsequent step.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q3",
    createdAt: "2026-09-15T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_4-2026",
    question: "An Arrhenius plot of $\\ln k$ versus $1/T$ yields a straight line with a gradient of $-6.50 \\times 10^3\\text{ K}$. Calculate the activation energy ($E_a$) of the reaction in $\\text{kJ mol}^{-1}$ ($R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$).",
    options: [
      { text: "+0.782 kJ mol⁻¹" },
      { text: "+54.0 kJ mol⁻¹", isCorrect: true },
      { text: "+78.2 kJ mol⁻¹" },
      { text: "+540.0 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Gradient} = -\\frac{E_a}{R} = -6.50 \\times 10^3\\text{ K}$.\n* $E_a = -(\\text{Gradient}) \\times R = 6.50 \\times 10^3 \\times 8.314 = 54,041\\text{ J mol}^{-1} = \\mathbf{+54.0\\text{ kJ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q5",
    createdAt: "2026-09-15T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_5-2026",
    question: "Consider the proposed two-step mechanism for the reaction $2\\text{NO}_2 + \\text{F}_2 \\rightarrow 2\\text{NO}_2\\text{F}$:\nStep 1: $\\text{NO}_2 + \\text{F}_2 \\rightarrow \\text{NO}_2\\text{F} + \\text{F}^\\bullet$ (slow)\nStep 2: $\\text{NO}_2 + \\text{F}^\\bullet \\rightarrow \\text{NO}_2\\text{F}$ (fast)\nWhich rate equation is fully consistent with this proposed mechanism?",
    options: [
      { text: "Rate = k[NO₂]²[F₂]" },
      { text: "Rate = k[NO₂][F₂]", isCorrect: true },
      { text: "Rate = k[NO₂]²" },
      { text: "Rate = k[F₂]" }
    ],
    correctAnswer: 1,
    explanation: "* The rate equation is dictated by the slow rate-determining step: Step 1 involves 1 molecule of $\\text{NO}_2$ and 1 molecule of $\\text{F}_2$.\n* Therefore, $\\text{Rate} = k[\\text{NO}_2][\\text{F}_2]$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q6",
    createdAt: "2026-09-16T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_6-2026",
    question: "Why does the rate of an autocatalytic reaction (such as the redox reaction between acidified potassium manganate(VII) and ethanedioic acid) initially start very slowly, then accelerate dramatically, and finally slow down?",
    options: [
      { text: "Manganate(VII) decomposes to oxygen at the start" },
      { text: "The reaction initially lacks catalyst; as Mn²⁺ product ions form, they act as a catalyst to dramatically accelerate the reaction, until reactants are consumed", isCorrect: true },
      { text: "The temperature drops to freezing during the reaction" },
      { text: "Oxalic acid evaporates rapidly" }
    ],
    correctAnswer: 1,
    explanation: "* In autocatalysis, a reaction product ($\text{Mn}^{2+}$) catalyzes the reaction.\n* Phase 1: Slow uncatalyzed start $\\rightarrow$ Phase 2: Rapid catalyzed acceleration as $[\\text{Mn}^{2+}]$ rises $\\rightarrow$ Phase 3: Deceleration due to reactant depletion.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q4",
    createdAt: "2026-09-16T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_7-2026",
    question: "Initial rates data for the reaction $\\text{A} + 2\\text{B} + \\text{C} \\rightarrow \\text{Products}$ show:\n- Experiment 1: $[\\text{A}] = 0.10, [\\text{B}] = 0.10, [\\text{C}] = 0.10 \\implies \\text{Rate} = 2.0 \\times 10^{-4}\\text{ mol dm}^{-3}\\text{ s}^{-1}$\n- Experiment 2: $[\\text{A}] = 0.20, [\\text{B}] = 0.10, [\\text{C}] = 0.10 \\implies \\text{Rate} = 4.0 \\times 10^{-4}$\n- Experiment 3: $[\\text{A}] = 0.10, [\\text{B}] = 0.30, [\\text{C}] = 0.10 \\implies \\text{Rate} = 1.8 \\times 10^{-3}$\n- Experiment 4: $[\\text{A}] = 0.10, [\\text{B}] = 0.10, [\\text{C}] = 0.40 \\implies \\text{Rate} = 2.0 \\times 10^{-4}$\nWhat is the overall order of the reaction?",
    options: [
      { text: "Order = 2" },
      { text: "Order = 3 (First order in A, Second order in B, Zero order in C)", isCorrect: true },
      { text: "Order = 4" },
      { text: "Order = 1" }
    ],
    correctAnswer: 1,
    explanation: "* Order in A: $[\\text{A}]$ doubles $\\implies$ Rate doubles ($2^1$) $\\implies$ Order $= 1$.\n* Order in B: $[\\text{B}]$ triples $\\implies$ Rate increases by $9\\times$ ($3^2$) $\\implies$ Order $= 2$.\n* Order in C: $[\\text{C}]$ quadruples $\\implies$ Rate is unchanged ($4^0$) $\\implies$ Order $= 0$.\n* Overall order $= 1 + 2 + 0 = \\mathbf{3}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q11",
    createdAt: "2026-09-24T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_8-2026",
    question: "A first-order reaction has a rate constant of $k = 3.50 \\times 10^{-3}\\text{ s}^{-1}$. Starting from an initial concentration of $[\\text{A}]_0 = 0.800\\text{ mol dm}^{-3}$, how long will it take for the concentration of A to drop to $0.100\\text{ mol dm}^{-3}$?",
    options: [
      { text: "198 s" },
      { text: "594 s", isCorrect: true },
      { text: "800 s" },
      { text: "1188 s" }
    ],
    correctAnswer: 1,
    explanation: "* Dropping from $0.800 \\rightarrow 0.400 \\rightarrow 0.200 \\rightarrow 0.100\\text{ mol dm}^{-3}$ represents exactly **3 half-lives** ($3 \\times t_{1/2}$).\n* $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.69315}{3.50 \\times 10^{-3}} = 198.0\\text{ s}$.\n* Total time $= 3 \\times 198.0\\text{ s} = \\mathbf{594.1\\text{ s}} \\approx \\mathbf{594\\text{ s}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q12",
    createdAt: "2026-09-24T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_9-2026",
    question: "The rate of a gaseous reaction is monitored by measuring total pressure in a constant volume sealed container:\n$2\\text{N}_2\\text{O}_5\\text{(g)} \\rightarrow 4\\text{NO}_2\\text{(g)} + \\text{O}_2\\text{(g)}$\nWhy does the total gas pressure inside the container increase as the reaction proceeds?",
    options: [
      { text: "Because the temperature increases automatically" },
      { text: "Because 2 moles of reactant gas are converted into 5 moles of gaseous products (4 NO₂ + 1 O₂), increasing the total number of gas molecules and therefore total pressure at constant volume", isCorrect: true },
      { text: "Because NO₂ has a heavier molar mass than N₂O₅" },
      { text: "Because oxygen reacts with the glass container" }
    ],
    correctAnswer: 1,
    explanation: "* Stoichiometry: $2\\text{ mol gas} \\rightarrow 5\\text{ mol gas}$.\n* By the ideal gas law ($P = \\frac{nRT}{V}$), an increase in the total number of gas moles ($n$) produces a directly proportional increase in measured total pressure.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q9",
    createdAt: "2026-09-25T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_10-2026",
    question: "How does a homogeneous catalyst differ from a heterogeneous catalyst in its kinetic mechanism?",
    options: [
      { text: "A homogeneous catalyst works by surface adsorption only" },
      { text: "A homogeneous catalyst reacts with a reactant to form a reactive intermediate (often in the same phase), which then reacts in a subsequent step to regenerate the catalyst", isCorrect: true },
      { text: "Homogeneous catalysts cannot lower activation energy" },
      { text: "Heterogeneous catalysts always dissolve into the solution" }
    ],
    correctAnswer: 1,
    explanation: "* Homogeneous catalysts operate in the same phase by forming specific chemical intermediates that provide an alternate lower-barrier transition pathway before being regenerated.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q12",
    createdAt: "2026-09-25T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_11-2026",
    question: "For a reaction with activation energy $E_a = +60.0\\text{ kJ mol}^{-1}$, by what factor does the rate constant $k$ increase when the temperature is raised from $300\\text{ K}$ to $310\\text{ K}$ ($R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)?",
    options: [
      { text: "1.22 times" },
      { text: "2.16 times", isCorrect: true },
      { text: "4.50 times" },
      { text: "10.0 times" }
    ],
    correctAnswer: 1,
    explanation: "* $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right) = \\frac{60000}{8.314}\\left(\\frac{1}{300} - \\frac{1}{310}\\right) = 7216.7 \\times (1.0753 \\times 10^{-4}) = 0.7760$.\n* $\\frac{k_2}{k_1} = e^{0.7760} = \\mathbf{2.17} \\approx \\mathbf{2.16\\text{ times}}$ (roughly doubles, conforming to the $10\\text{ K}$ rule of thumb).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q13",
    createdAt: "2026-09-26T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_12-2026",
    question: "When measuring reaction rates by continuous electrical conductivity monitoring, why does the conductivity of the reaction mixture change during the ester hydrolysis: $\\text{CH}_3\\text{COOCH}_2\\text{CH}_3 + \\text{OH}^- \\rightarrow \\text{CH}_3\\text{COO}^- + \\text{CH}_3\\text{CH}_2\\text{OH}$?",
    options: [
      { text: "Ions are destroyed and neutral atoms are formed" },
      { text: "Highly conductive, small hydroxide ions (OH⁻) with high ionic mobility are replaced by bulkier, less mobile ethanoate ions (CH₃COO⁻), leading to a measurable continuous decrease in electrical conductivity", isCorrect: true },
      { text: "Ethanol conducts electricity better than sodium hydroxide" },
      { text: "The water solvent evaporates" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{OH}^-$ ions have exceptionally high ionic mobility ($G \\approx 198\\text{ S cm}^2\\text{ mol}^{-1}$); replacing them with slower carboxylate ions ($\\text{CH}_3\\text{COO}^-$) produces a clear drop in solution conductivity.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q10",
    createdAt: "2026-09-26T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv2_13-interactive",
    question: "A student studies the decomposition of hydrogen peroxide: 2H₂O₂ → 2H₂O + O₂ at 298 K. The concentration of reactant [H₂O₂] was recorded every 50 seconds. Use the interactive graph plotter below to plot [H₂O₂] against time, draw the curve of best fit, and verify the order of reaction by measuring two successive half-lives (t₁/₂).",
    options: [
      { text: "First order: two consecutive half-lives are constant at t₁/₂ = 50 s", isCorrect: true },
      { text: "Zero order: the concentration falls at a constant linear rate" },
      { text: "Second order: the half-life doubles from 50 s to 100 s" },
      { text: "Third order: the half-life quadruples" }
    ],
    correctAnswer: 0,
    explanation: "* The plotted points form a smooth downward exponential decay curve\n* The time taken for $[\\text{H}_2\\text{O}_2]$ to decrease from $1.00\\text{ mol dm}^{-3}$ to $0.50\\text{ mol dm}^{-3}$ is $50\\text{ s}$\n* The time taken to fall from $0.50\\text{ mol dm}^{-3}$ to $0.25\\text{ mol dm}^{-3}$ is another $50\\text{ s}$ ($100 - 50 = 50\\text{ s}$)\n* A constant half-life independent of initial concentration is the definitive characteristic of a first-order reaction",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "structured",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q14",
    createdAt: "2026-09-27T10:00:00Z",
    graphConfig: {
      title: "First Order Decomposition: [H₂O₂] vs Time (Constant Half-Life Analysis)",
      xAxis: {
        label: "Time",
        unit: "s",
        min: 0,
        max: 200,
        step: 25
      },
      yAxis: {
        label: "[H₂O₂]",
        unit: "mol dm⁻³",
        min: 0,
        max: 1.0,
        step: 0.2
      },
      targetPoints: [
        { x: 0, y: 1.00 },
        { x: 50, y: 0.50 },
        { x: 100, y: 0.25 },
        { x: 150, y: 0.125 },
        { x: 200, y: 0.0625 }
      ],
      curveType: "curve",
      tolerance: 0.05
    },
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "exponential decay curve", text: "Points plotted correctly and smooth decay curve drawn." },
        { mark: 1, keyword: "successive half-lives are constant at 50 s", text: "Show that first half-life = 50 s and second half-life = 50 s." },
        { mark: 1, keyword: "first order / k = ln 2 / t1/2", text: "Conclude first order and deduce rate constant k = 0.693 / 50 = 0.0139 s⁻¹." }
      ],
      examinerTips: "In exam questions asking to prove first-order kinetics from a concentration-time graph, you must state that at least two consecutive half-lives are constant."
    }
  }
];


