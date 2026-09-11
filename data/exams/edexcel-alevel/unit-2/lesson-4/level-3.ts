import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u2_l4_lv3_1-2026",
    question: "In an esterification reaction, $1.00\\text{ mol}$ of ethanoic acid and $1.00\\text{ mol}$ of ethanol are mixed in a sealed tube at $298\\text{ K}$. At equilibrium, $0.667\\text{ mol}$ of ethyl ethanoate is present: $\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$. Calculate the numerical value of $K_c$.",
    options: [
      { text: "0.25" },
      { text: "2.00" },
      { text: "4.00", isCorrect: true },
      { text: "8.00" }
    ],
    correctAnswer: 2,
    explanation: "* Equilibrium moles:\n  * $[\\text{ester}] = 0.667\\text{ mol}$\n  * $[\\text{water}] = 0.667\\text{ mol}$\n  * $[\\text{acid}] = 1.00 - 0.667 = 0.333\\text{ mol}$\n  * $[\\text{alcohol}] = 1.00 - 0.667 = 0.333\\text{ mol}$\n* $K_c = \\frac{0.667 \\times 0.667}{0.333 \\times 0.333} = \\left(\\frac{2/3}{1/3}\\right)^2 = 2^2 = \\mathbf{4.00}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q27",
    createdAt: "2026-08-09T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_2-2026",
    question: "For the exothermic reaction: $2\\text{NO}_2\\text{(g, brown)} \\rightleftharpoons \\text{N}_2\\text{O}_4\\text{(g, colorless)} \\quad \\Delta H = -57\\text{ kJ mol}^{-1}$. A sealed syringe containing this equilibrium mixture is suddenly compressed to half its initial volume. What color change is observed instantaneously, and then as the new equilibrium is established?",
    options: [
      { text: "Instantly turns darker brown (due to increased concentration), then gradually pales (as equilibrium shifts right to fewer moles of gas)", isCorrect: true },
      { text: "Instantly turns completely colorless and remains colorless" },
      { text: "Instantly turns paler, then darkens" },
      { text: "No visible change occurs at any point" }
    ],
    correctAnswer: 0,
    explanation: "* Instantaneously upon compression, all concentrations double ($[\\text{NO}_2]$ increases), immediately deepening the brown color.\n* Over time, by Le Chatelier's principle, increased pressure drives the system to the right ($2\\text{ moles} \\rightarrow 1\\text{ mole}$) forming colorless $\\text{N}_2\\text{O}_4$, so the mixture partially pales to its new equilibrium.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q28",
    createdAt: "2026-08-09T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_3-2026",
    question: "A reaction has an activation energy of $E_a = +55.0\\text{ kJ mol}^{-1}$ and an enthalpy change of $\\Delta H = -25.0\\text{ kJ mol}^{-1}$. What is the activation energy ($E_a'$) for the REVERSE reaction?",
    options: [
      { text: "+30.0 kJ mol⁻¹" },
      { text: "+55.0 kJ mol⁻¹" },
      { text: "+80.0 kJ mol⁻¹", isCorrect: true },
      { text: "-80.0 kJ mol⁻¹" }
    ],
    correctAnswer: 2,
    explanation: "* For an exothermic reaction: $E_{a,\\text{reverse}} = E_{a,\\text{forward}} + |\\Delta H|$.\n* $E_{a,\\text{reverse}} = 55.0 + 25.0 = \\mathbf{+80.0\\text{ kJ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q23",
    createdAt: "2026-08-10T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_4-2026",
    question: "In the Contact process for sulfuric acid: $2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{SO}_3\\text{(g)} \\quad \\Delta H = -197\\text{ kJ mol}^{-1}$, why is an atmospheric pressure of only 1–2 atm employed commercially rather than a very high pressure?",
    options: [
      { text: "High pressure causes sulfur trioxide to decompose" },
      { text: "The equilibrium yield of SO₃ is already extremely high (over 98%) at 1–2 atm, so the high financial costs of constructing and maintaining high-pressure vessels are economically unjustified", isCorrect: true },
      { text: "Vanadium(V) oxide catalyst only operates at 1 atm" },
      { text: "Oxygen liquefies at higher pressure" }
    ],
    correctAnswer: 1,
    explanation: "* Although high pressure favors product formation, the equilibrium conversion of $\\text{SO}_2$ to $\\text{SO}_3$ is already $>98\\%$ at $1-2\\text{ atm}$.\n* The marginal gain in yield cannot justify the massive capital equipment and safety costs of high-pressure compressors.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q28",
    createdAt: "2026-08-10T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_5-2026",
    question: "How does heterogeneous catalysis operate at a molecular level (the 5-stage adsorption-reaction-desorption model)?",
    options: [
      { text: "Reactants dissolve into the bulk crystal lattice of the metal" },
      { text: "Reactant molecules are ADSORBED onto active surface sites, chemical bonds are weakened to lower activation energy, the reaction occurs on the surface, and product molecules DESORB away", isCorrect: true },
      { text: "The catalyst donates electrons permanently to form ionic intermediates" },
      { text: "The catalyst increases the pressure inside the gas phase" }
    ],
    correctAnswer: 1,
    explanation: "* Steps: (1) Diffusion to surface $\\rightarrow$ (2) **Adsorption** onto active sites (weakening bonds) $\\rightarrow$ (3) Surface reaction $\\rightarrow$ (4) **Desorption** of products $\\rightarrow$ (5) Diffusion away, leaving active sites free for new reactant molecules.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q29",
    createdAt: "2026-08-11T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_6-2026",
    question: "When $0.400\\text{ mol}$ of $\\text{A}$ and $0.400\\text{ mol}$ of $\\text{B}$ are placed in a $2.00\\text{ dm}^3$ sealed container and allowed to equilibrate: $\\text{A(g)} + \\text{B(g)} \\rightleftharpoons 2\\text{C(g)}$. At equilibrium, $0.600\\text{ mol}$ of $\\text{C}$ is present. What is the value of $K_c$?",
    options: [
      { text: "9.0" },
      { text: "16.0" },
      { text: "36.0", isCorrect: true },
      { text: "72.0" }
    ],
    correctAnswer: 2,
    explanation: "* Mole of $\\text{C}$ formed $= 0.600\\text{ mol}$.\n* Moles of $\\text{A}$ and $\\text{B}$ consumed $= 0.600 / 2 = 0.300\\text{ mol}$.\n* Equilibrium moles: $n(\\text{A}) = 0.400 - 0.300 = 0.100\\text{ mol}$, $n(\\text{B}) = 0.100\\text{ mol}$, $n(\\text{C}) = 0.600\\text{ mol}$.\n* Since total moles of gas on both sides are equal ($1+1 = 2$), the volume terms cancel out:\n* $K_c = \\frac{(0.600)^2}{(0.100)(0.100)} = \\frac{0.360}{0.0100} = \\mathbf{36.0}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q24",
    createdAt: "2026-08-11T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_7-2026",
    question: "In a reversible reaction: $\\text{A(g)} + 2\\text{B(g)} \\rightleftharpoons 3\\text{C(g)} + \\text{D(g)}$, the reaction is initiated with $1.00\\text{ mol dm}^{-3}$ of A and $1.50\\text{ mol dm}^{-3}$ of B. At equilibrium, the concentration of C is found to be $0.90\\text{ mol dm}^{-3}$. Calculate the value of the equilibrium constant $K_c$ at this temperature.",
    options: [
      { text: "0.386", isCorrect: true },
      { text: "0.772" },
      { text: "1.16" },
      { text: "0.193" }
    ],
    correctAnswer: 0,
    explanation: "* Build ICE table (all values in $\\text{mol dm}^{-3}$):\n  * Initial: $[\\text{A}] = 1.00$, $[\\text{B}] = 1.50$, $[\\text{C}] = 0$, $[\\text{D}] = 0$.\n  * Change: $[\\text{C}]$ increases by $+3x = +0.90 \\implies x = 0.30$.\n  * Equilibrium: $[\\text{A}] = 1.00 - 0.30 = 0.70$, $[\\text{B}] = 1.50 - 2(0.30) = 0.90$, $[\\text{C}] = 0.90$, $[\\text{D}] = 0.30$.\n* $K_c = \\frac{[\\text{C}]^3[\\text{D}]}{[\\text{A}][\\text{B}]^2} = \\frac{(0.90)^3(0.30)}{(0.70)(0.90)^2} = \\frac{0.90 \\times 0.30}{0.70} = \\frac{0.270}{0.700} = \\mathbf{0.386\\text{ mol dm}^{-3}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q39",
    createdAt: "2026-08-27T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_8-2026",
    question: "For a gaseous endothermic reaction, which statement describes how the equilibrium yield of products and the value of $K_c$ vary when temperature is increased?",
    options: [
      { text: "Yield increases, Kc remains constant" },
      { text: "Yield increases, Kc increases", isCorrect: true },
      { text: "Yield decreases, Kc decreases" },
      { text: "Yield remains constant, Kc increases" }
    ],
    correctAnswer: 1,
    explanation: "* For an endothermic reaction ($\\Delta H > 0$), raising temperature shifts the equilibrium position to the right (products side), increasing product yield.\n* Because temperature is the ONLY factor that changes the value of $K_c$, and it shifts the reaction forward, $K_c$ must increase.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q30",
    createdAt: "2026-08-27T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_9-2026",
    question: "When the temperature of a gas sample is increased, the Maxwell-Boltzmann distribution curve changes. How does the area under the curve representing molecules with energy $E \\ge E_a$ change relative to the peak height?",
    options: [
      { text: "The area increases while the peak height increases" },
      { text: "The area increases while the peak height decreases", isCorrect: true },
      { text: "The area decreases while the peak height decreases" },
      { text: "The area remains constant while the peak height decreases" }
    ],
    correctAnswer: 1,
    explanation: "* Increasing temperature shifts the curve to the right and flattens it (peak height decreases).\n* This increases the area under the curve to the right of $E_a$ (more molecules have $E \\ge E_a$), while the total area remains constant.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q29",
    createdAt: "2026-08-28T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_10-2026",
    question: "In the Haber process: $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)}$, adding excess hydrogen gas increases the equilibrium yield of ammonia. Which statement correctly describes the effect of this addition on the equilibrium constant $K_c$?",
    options: [
      { text: "Kc increases because more products are formed" },
      { text: "Kc remains constant because temperature is unchanged", isCorrect: true },
      { text: "Kc decreases because reactant concentration is higher" },
      { text: "Kc doubles because the stoichiometry of hydrogen is 3" }
    ],
    correctAnswer: 1,
    explanation: "* The equilibrium constant $K_c$ is dependent solely on temperature.\n* Adding reactants shifts the position of equilibrium to the right to consume the excess, but the ratio of concentrations defined by $K_c$ remains constant at that temperature.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q40",
    createdAt: "2026-08-28T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_11-2026",
    question: "During industrial ammonia synthesis (Haber process), sulfur impurities in the hydrogen feed gas lead to catalyst poisoning. What describes this process at the molecular level?",
    options: [
      { text: "Sulfur reacts with nitrogen gas to form toxic compounds" },
      { text: "Sulfur molecules adsorb strongly and irreversibly onto the active sites of the iron catalyst, preventing nitrogen and hydrogen adsorption", isCorrect: true },
      { text: "Sulfur dissolves the iron catalyst completely" },
      { text: "Sulfur increases the activation energy of the gas phase" }
    ],
    correctAnswer: 1,
    explanation: "* Catalyst poisoning in heterogeneous catalysis involves chemical adsorption (chemisorption) of poison molecules onto the catalyst active sites.\n* Because sulfur binds strongly and irreversibly, it blocks the reactants ($\\text{N}_2$ and $\\text{H}_2$) from accessing the active sites, decreasing catalytic efficiency.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q31",
    createdAt: "2026-08-29T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_12-2026",
    question: "For the equilibrium reaction: $\\text{A(g)} + \\text{B(g)} \\rightleftharpoons 2\\text{C(g)}$, the reaction is started with $1.00\\text{ mol}$ of A and $1.00\\text{ mol}$ of B in a $1.00\\text{ dm}^3$ vessel. If $K_c = 16.0$, calculate the equilibrium concentration of C.",
    options: [
      { text: "1.33 mol dm⁻³", isCorrect: true },
      { text: "0.67 mol dm⁻³" },
      { text: "0.80 mol dm⁻³" },
      { text: "1.60 mol dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "* Build ICE table (in $\\text{mol dm}^{-3}$):\n  * Initial: $[\\text{A}] = 1.00$, $[\\text{B}] = 1.00$, $[\\text{C}] = 0$.\n  * Change: $-x$, $-x$, $+2x$.\n  * Equilibrium: $1.00 - x$, $1.00 - x$, $2x$.\n* $K_c = \\frac{[\\text{C}]^2}{[\\text{A}][\\text{B}]} = \\frac{(2x)^2}{(1.00 - x)^2} = 16.0$.\n* Take square root of both sides: $\\frac{2x}{1.00 - x} = 4.0 \\implies 2x = 4.0(1.00 - x) \\implies 2x = 4.0 - 4.0x \\implies 6.0x = 4.0 \\implies x = 0.667$.\n* Equilibrium concentration of $\\text{C} = 2x = 2(0.667) = \\mathbf{1.33\\text{ mol dm}^{-3}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q30",
    createdAt: "2026-08-29T10:00:00Z"
  }
];

