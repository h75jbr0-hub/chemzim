import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u4_l1_lv3_1-2026",
    question: "A multi-step reaction mechanism for $2\\text{NO} + 2\\text{H}_2 \\rightarrow \\text{N}_2 + 2\\text{H}_2\\text{O}$ is proposed as follows:\nStep 1: $\\text{NO} + \\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2$ (fast equilibrium, forward $k_1$, reverse $k_{-1}$)\nStep 2: $\\text{N}_2\\text{O}_2 + \\text{H}_2 \\rightarrow \\text{N}_2\\text{O} + \\text{H}_2\\text{O}$ (slow, rate constant $k_2$)\nStep 3: $\\text{N}_2\\text{O} + \\text{H}_2 \\rightarrow \\text{N}_2 + \\text{H}_2\\text{O}$ (fast)\nDerive the rate equation for this mechanism in terms of the initial reactants.",
    options: [
      { text: "Rate = k[NO][H₂]" },
      { text: "Rate = k[NO]²[H₂] (where k = k₂ × (k₁/k₋₁))", isCorrect: true },
      { text: "Rate = k[NO]²[H₂]²" },
      { text: "Rate = k[N₂O₂][H₂]" }
    ],
    correctAnswer: 1,
    explanation: "* The slow step gives $\\text{Rate} = k_2[\\text{N}_2\\text{O}_2][\\text{H}_2]$.\n* From the pre-equilibrium in Step 1: $k_1[\\text{NO}]^2 = k_{-1}[\\text{N}_2\\text{O}_2] \\implies [\\text{N}_2\\text{O}_2] = \\frac{k_1}{k_{-1}}[\\text{NO}]^2$.\n* Substituting gives $\\text{Rate} = k_2 \\left(\\frac{k_1}{k_{-1}}\\right)[\\text{NO}]^2[\\text{H}_2] = \\mathbf{k[\\text{NO}]^2[\\text{H}_2]}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q6",
    createdAt: "2026-09-17T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv3_2-2026",
    question: "A chemical reaction has a rate constant of $k_1 = 1.50 \\times 10^{-4}\\text{ s}^{-1}$ at $300\\text{ K}$ and $k_2 = 1.20 \\times 10^{-3}\\text{ s}^{-1}$ at $320\\text{ K}$. Using the two-point Arrhenius equation $\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$, calculate the activation energy $E_a$ in $\\text{kJ mol}^{-1}$ ($R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$).",
    options: [
      { text: "+17.3 kJ mol⁻¹" },
      { text: "+42.5 kJ mol⁻¹" },
      { text: "+83.0 kJ mol⁻¹", isCorrect: true },
      { text: "+166.0 kJ mol⁻¹" }
    ],
    correctAnswer: 2,
    explanation: "* $\\ln(1.20 \\times 10^{-3} / 1.50 \\times 10^{-4}) = \\ln(8.0) = 2.0794$.\n* $\\left(\\frac{1}{300} - \\frac{1}{320}\\right) = 3.3333 \\times 10^{-3} - 3.1250 \\times 10^{-3} = 2.0833 \\times 10^{-4}\\text{ K}^{-1}$.\n* $E_a = \\frac{2.0794 \\times 8.314}{2.0833 \\times 10^{-4}} = \\frac{17.288}{2.0833 \\times 10^{-4}} = 82,983\\text{ J mol}^{-1} \\approx \\mathbf{+83.0\\text{ kJ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q7",
    createdAt: "2026-09-17T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv3_3-2026",
    question: "When investigating the kinetics of an ester hydrolysis reaction $\\text{CH}_3\\text{COOCH}_3 + \\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COOH} + \\text{CH}_3\\text{OH}$, water is used in large excess as the solvent ($[\\text{H}_2\\text{O}] \\gg [\\text{ester}]$). What is the term for this experimental condition and what is the pseudo-order observed?",
    options: [
      { text: "Zero order kinetics (overall order is 0)" },
      { text: "Pseudo-first-order kinetics (because [H₂O] remains effectively constant throughout the reaction, so Rate = k'[ester] where k' = k[H₂O])", isCorrect: true },
      { text: "Second-order kinetics with variable rate constant" },
      { text: "Heterogeneous catalysis" }
    ],
    correctAnswer: 1,
    explanation: "* When one reactant is in huge excess, its concentration remains virtually unchanged ($\Delta [\\text{H}_2\\text{O}] \\approx 0$).\n* It is incorporated into an apparent rate constant $k' = k[\\text{H}_2\\text{O}]$, simplifying the kinetics to **pseudo-first-order**.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q5",
    createdAt: "2026-09-18T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv3_4-2026",
    question: "In the quenching-and-titration method for monitoring the iodination of propanone, reaction samples are withdrawn at regular time intervals and immediately quenched. What reagent is added to quench the reaction sample immediately, and what is the chemical mechanism of quenching?",
    options: [
      { text: "Boiling water to evaporate the iodine" },
      { text: "Excess sodium hydrogencarbonate (NaHCO₃(s) or NaHCO₃(aq)), which neutralizes the H⁺ acid catalyst immediately, stopping further reaction instantaneously", isCorrect: true },
      { text: "Concentrated sulfuric acid to precipitate propanone" },
      { text: "Starch indicator to solidify the solution" }
    ],
    correctAnswer: 1,
    explanation: "* The reaction is acid-catalyzed ($\\text{Rate} \\propto [\\text{H}^+]$).\n* Adding sodium hydrogencarbonate rapidly neutralizes the acid catalyst ($\\text{H}^+ + \\text{HCO}_3^- \\rightarrow \\text{H}_2\\text{O} + \\text{CO}_2$), freezing the reaction composition for subsequent titration against standard sodium thiosulfate.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q7",
    createdAt: "2026-09-18T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv3_5-2026",
    question: "A gaseous reaction follows second-order kinetics: $\\text{Rate} = k[\\text{G}]^2$. If the reaction is carried out in a vessel of initial volume $V$, and the container volume is suddenly compressed to $\\frac{1}{3}V$ at constant temperature, by what factor does the instantaneous rate of reaction increase?",
    options: [
      { text: "3 times" },
      { text: "6 times" },
      { text: "9 times", isCorrect: true },
      { text: "27 times" }
    ],
    correctAnswer: 2,
    explanation: "* Compressing volume to $\\frac{1}{3}V$ triples the concentration of gas: $[\\text{G}]' = 3[\\text{G}]$.\n* Since the reaction is second order: $\\text{Rate}' = k(3[\\text{G}])^2 = 9 \\cdot k[\\text{G}]^2 = \\mathbf{9 \\times \\text{Initial Rate}}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q8",
    createdAt: "2026-09-19T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv3_6-2026",
    question: "The rate equation for the hydrolysis of a tertiary bromoalkane is $\\text{Rate} = k[\\text{(CH}_3)_3\\text{CBr}]$. When the concentration of nucleophile ($\\text{OH}^-$) is tripled, the rate of reaction remains unchanged. Which mechanistic energy profile diagram matches this reaction?",
    options: [
      { text: "A single-step profile with one high energy transition state (S_N2)" },
      { text: "A two-step profile featuring a high activation energy first barrier (slow carbocation formation) followed by a low activation energy second barrier (fast nucleophilic attack by OH⁻)", isCorrect: true },
      { text: "A profile with zero activation energy" },
      { text: "A single step endothermic profile" }
    ],
    correctAnswer: 1,
    explanation: "* This is unimolecular nucleophilic substitution ($S_N1$):\n* Step 1 (rate-determining, slow, high $E_a$): heterolytic fission into $(\\text{CH}_3)_3\\text{C}^+$ intermediate (energy minimum between two peaks).\n* Step 2 (fast, low $E_a$): rapid combination of the planar carbocation intermediate with $\\text{OH}^-$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q6",
    createdAt: "2026-09-19T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv3_7-2026",
    question: "A catalyst provides an alternative pathway with a lower activation energy, reducing $E_a$ from $80.0\\text{ kJ mol}^{-1}$ to $40.0\\text{ kJ mol}^{-1}$ at $298\\text{ K}$. Assuming the pre-exponential factor $A$ remains unchanged, by what factor does the rate constant $k$ increase in the presence of the catalyst ($R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)?",
    options: [
      { text: "2.00" },
      { text: "1.02 × 10³" },
      { text: "1.04 × 10⁷", isCorrect: true },
      { text: "4.85 × 10¹⁴" }
    ],
    correctAnswer: 2,
    explanation: "* $\\frac{k_{\\text{cat}}}{k_{\\text{uncat}}} = \\frac{A e^{-E_{a,\\text{cat}} / RT}}{A e^{-E_{a,\\text{uncat}} / RT}} = e^{(E_{a,\\text{uncat}} - E_{a,\\text{cat}}) / RT}$.\n* $\\Delta E_a = (80000 - 40000) = 40000\\text{ J mol}^{-1}$.\n* $\\frac{\\Delta E_a}{RT} = \\frac{40000}{8.314 \\times 298} = \\frac{40000}{2477.57} = 16.1448$.\n* $\\text{Factor} = e^{16.1448} = \\mathbf{1.04 \\times 10^7\\text{ times faster}}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q13",
    createdAt: "2026-09-27T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv3_8-2026",
    question: "The rate equation for the oxidation of bromide by bromate(V) in acidic solution is:\n$\\text{Rate} = k[\\text{BrO}_3^-][\\text{Br}^-][\\text{H}^+]^2$\nIf the $pH$ of the reaction mixture is increased by $1.0\\text{ unit}$ (e.g., from $pH = 2.0$ to $pH = 3.0$) while keeping $[\\text{BrO}_3^-]$ and $[\\text{Br}^-]$ constant, by what factor does the rate of reaction change?",
    options: [
      { text: "Decreases by a factor of 10" },
      { text: "Decreases by a factor of 100 (1/100 of the original rate)", isCorrect: true },
      { text: "Increases by a factor of 100" },
      { text: "Decreases by a factor of 2" }
    ],
    correctAnswer: 1,
    explanation: "* Increasing $pH$ by $1.0$ unit means $[\\text{H}^+]$ decreases by a factor of $10$ ($[\\text{H}^+]' = 0.10[\\text{H}^+]$).\n* Because the reaction is second order in $[\\text{H}^+]$ ($[\\text{H}^+]^2$), the new rate is $(0.10)^2 = 0.010 = \\mathbf{\\frac{1}{100}\\text{ of the original rate}}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q14",
    createdAt: "2026-09-27T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv3_9-2026",
    question: "A proposed mechanism for the reaction between peroxodisulfate ions and iodide ions: $\\text{S}_2\\text{O}_8^{2-} + 2\\text{I}^- \\rightarrow 2\\text{SO}_4^{2-} + \\text{I}_2$ catalyzed by iron(II) ions ($\text{Fe}^{2+}$) involves two redox steps. Why is the catalyzed pathway significantly faster than the uncatalyzed direct collision between $\\text{S}_2\\text{O}_8^{2-}$ and $\\text{I}^-$?",
    options: [
      { text: "Because Fe²⁺ solidifies the mixture" },
      { text: "Direct uncatalyzed collision requires two negatively charged anions (S₂O₈²⁻ and I⁻) to collide, creating severe electrostatic repulsion and high E_a; the Fe²⁺/Fe³⁺ catalyst provides alternating collisions between oppositely charged species (+ and -), substantially lowering E_a", isCorrect: true },
      { text: "Because Fe²⁺ absorbs all UV light" },
      { text: "Because sulfate ions precipitate with Fe²⁺" }
    ],
    correctAnswer: 1,
    explanation: "* Direct collision between two anions ($\\text{S}_2\\text{O}_8^{2-}$ and $\\text{I}^-$) suffers from strong electrostatic repulsion.\n* $\\text{Fe}^{2+}$ enables low-barrier opposite-charge steps: (1) $\\text{S}_2\\text{O}_8^{2-} + 2\\text{Fe}^{2+} \\rightarrow 2\\text{SO}_4^{2-} + 2\\text{Fe}^{3+}$ followed by (2) $2\\text{Fe}^{3+} + 2\\text{I}^- \\rightarrow 2\\text{Fe}^{2+} + \\text{I}_2$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q11",
    createdAt: "2026-09-28T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv3_10-2026",
    question: "For a reaction following the rate law $\\text{Rate} = k[\\text{A}]^2[\\text{B}]$, the initial concentrations are $[\\text{A}] = 0.050\\text{ mol dm}^{-3}$ and $[\\text{B}] = 0.040\\text{ mol dm}^{-3}$, with an initial rate of $6.0 \\times 10^{-5}\\text{ mol dm}^{-3}\\text{ s}^{-1}$. Calculate the rate constant $k$.",
    options: [
      { text: "0.060 dm⁶ mol⁻² s⁻¹" },
      { text: "0.60 dm⁶ mol⁻² s⁻¹", isCorrect: true },
      { text: "6.0 dm⁶ mol⁻² s⁻¹" },
      { text: "60.0 dm⁶ mol⁻² s⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* $k = \\frac{\\text{Rate}}{[\\text{A}]^2[\\text{B}]} = \\frac{6.0 \\times 10^{-5}}{(0.050)^2 \\times 0.040} = \\frac{6.0 \\times 10^{-5}}{0.0025 \\times 0.040} = \\frac{6.0 \\times 10^{-5}}{1.0 \\times 10^{-4}} = \\mathbf{0.60\\text{ dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q14",
    createdAt: "2026-09-28T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l1_lv3_12-2026",
    question: "In the base-catalyzed hydrolysis of an optically active haloalkane $(R)\\text{-2-bromooctane}$ with $\\text{OH}^-$, the reaction follows second-order kinetics: $\\text{Rate} = k[\\text{R-Br}][\\text{OH}^-]$. What is the observed stereochemical outcome and transition state geometry?",
    options: [
      { text: "Racemic mixture through a planar carbocation" },
      { text: "Complete Walden inversion of configuration to yield pure (S)-octan-2-ol through a single pentacoordinate trigonal bipyramidal transition state [HO...C...Br]⁻ ‡", isCorrect: true },
      { text: "Retention of (R) configuration" },
      { text: "Zero optical activity due to elimination" }
    ],
    correctAnswer: 1,
    explanation: "* Second-order kinetics confirms a bimolecular concerted mechanism ($S_N2$).\n* The nucleophile $\\text{OH}^-$ attacks $180^\\circ$ opposite the leaving $\\text{Br}^-$ through a trigonal bipyramidal transition state, causing $100\\%$ **Walden inversion** to $(S)\\text{-octan-2-ol}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q12",
    createdAt: "2026-09-29T10:00:00Z"
  }
];


