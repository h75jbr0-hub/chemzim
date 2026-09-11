import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: 'u4-l3-q1-l2-20260803',
    question: 'The standard total entropy change for a reaction is $\\Delta S^\\theta_{\\text{total}} = +24.93\\text{ J K}^{-1}\\text{mol}^{-1}$. Calculate the equilibrium constant $K$ at this temperature. ($R = 8.31\\text{ J K}^{-1}\\text{mol}^{-1}$)',
    options: [
      { text: '$K = 0.049$' },
      { text: '$K = 3.00$' },
      { text: '$K = 20.1$' },
      { text: '$K = 62.1$' }
    ],
    correctAnswer: 2,
    explanation:
      '- Use $K = e^{\\Delta S^\\theta_{\\text{total}} / R}$.\n- $\\Delta S / R = 24.93 / 8.31 = 2.998 \\approx 3.00$.\n- $K = e^{3.00} \\approx 20.1$.\n- This moderate $K$ value indicates significant concentrations of both reactants and products at equilibrium.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q2",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q2-l2-20260803',
    question: 'For the reaction: $\\text{SO}_2(\\text{g}) + \\frac{1}{2}\\text{O}_2(\\text{g}) \\rightleftharpoons \\text{SO}_3(\\text{g})$, the standard total entropy change is $+238.3\\text{ J K}^{-1}\\text{mol}^{-1}$. Which of the following correctly describes the position of equilibrium?',
    options: [
      { text: '$K < 1$; equilibrium lies to the left, mainly SO2 and O2 present' },
      { text: '$K > 1$ but small; approximately equal amounts of reactants and products' },
      { text: '$K \\gg 1$; equilibrium lies far to the right, mainly SO3 present' },
      { text: '$K = 1$; exactly half converted to SO3' }
    ],
    correctAnswer: 2,
    explanation:
      '- Calculate $K = e^{238.3/8.31} = e^{28.67} \\approx 2.84 \\times 10^{12}$.\n- This enormously large $K$ value means equilibrium lies far to the right.\n- At equilibrium, almost all SO2 and O2 have been converted to SO3.\n- This is why the Contact Process for making H2SO4 is highly favourable thermodynamically.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q3",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q3-l2-20260803',
    question: 'A reaction has $\\Delta S^\\theta_{\\text{system}} = -35.0\\text{ J K}^{-1}\\text{mol}^{-1}$ and $\\Delta H^\\theta = -52.0\\text{ kJ mol}^{-1}$ at $298\\text{ K}$. Calculate $\\Delta S^\\theta_{\\text{total}}$.',
    options: [
      { text: '$\\Delta S^\\theta_{\\text{total}} = -209.5\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = +139.4\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = +174.4\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = -209.5\\text{ J K}^{-1}\\text{mol}^{-1}$' }
    ],
    correctAnswer: 1,
    explanation:
      '- First calculate $\\Delta S^\\theta_{\\text{surr}} = -\\Delta H / T = -(-52000) / 298 = +174.5\\text{ J K}^{-1}\\text{mol}^{-1}$.\n- Then: $\\Delta S^\\theta_{\\text{total}} = \\Delta S^\\theta_{\\text{sys}} + \\Delta S^\\theta_{\\text{surr}} = -35.0 + 174.5 = +139.5 \\approx +139.4\\text{ J K}^{-1}\\text{mol}^{-1}$.\n- Since $\\Delta S^\\theta_{\\text{total}} > 0$, the reaction is spontaneous at 298 K.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q4",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q4-l2-20260803',
    question: 'A reaction has $K = 1.00 \\times 10^{-5}$ at a given temperature. What is the standard total entropy change $\\Delta S^\\theta_{\\text{total}}$? ($R = 8.31\\text{ J K}^{-1}\\text{mol}^{-1}$)',
    options: [
      { text: '$\\Delta S^\\theta_{\\text{total}} = +95.6\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = -95.6\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = +41.6\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = -41.6\\text{ J K}^{-1}\\text{mol}^{-1}$' }
    ],
    correctAnswer: 1,
    explanation:
      '- Use $\\Delta S^\\theta_{\\text{total}} = R \\ln K$.\n- $\\ln(1.00 \\times 10^{-5}) = \\ln(1) + \\ln(10^{-5}) = 0 + (-5 \\times 2.303) = -11.51$.\n- $\\Delta S^\\theta_{\\text{total}} = 8.31 \\times (-11.51) = -95.7 \\approx -95.6\\text{ J K}^{-1}\\text{mol}^{-1}$.\n- The negative value confirms that equilibrium lies far to the left ($K \\ll 1$).',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q5",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q5-l2-20260803',
    question: 'Consider the Haber Process: $\\text{N}_2(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightleftharpoons 2\\text{NH}_3(\\text{g})$, $\\Delta H^\\theta = -92\\text{ kJ mol}^{-1}$, $\\Delta S^\\theta_{\\text{system}} = -198\\text{ J K}^{-1}\\text{mol}^{-1}$. What happens to $\\Delta S^\\theta_{\\text{total}}$ as temperature increases?',
    options: [
      { text: '$\\Delta S^\\theta_{\\text{total}}$ increases because $\\Delta S^\\theta_{\\text{system}}$ increases with temperature' },
      { text: '$\\Delta S^\\theta_{\\text{total}}$ decreases because $\\Delta S^\\theta_{\\text{surr}} = -\\Delta H / T$ becomes less positive as $T$ increases' },
      { text: '$\\Delta S^\\theta_{\\text{total}}$ stays constant because entropy does not depend on temperature' },
      { text: '$\\Delta S^\\theta_{\\text{total}}$ increases because the reaction becomes more exothermic at higher temperatures' }
    ],
    correctAnswer: 1,
    explanation:
      '- $\\Delta S^\\theta_{\\text{surr}} = -\\Delta H / T = -(-92000) / T = +92000/T$.\n- As $T$ increases, $\\Delta S^\\theta_{\\text{surr}}$ decreases (becomes less positive).\n- Since $\\Delta S^\\theta_{\\text{system}} \\approx -198\\text{ J K}^{-1}\\text{mol}^{-1}$ (approximately constant with temperature), $\\Delta S^\\theta_{\\text{total}}$ decreases.\n- This means $K$ decreases as temperature increases — consistent with Le Chatelier: raising temperature shifts equilibrium left for exothermic reactions.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q6",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q6-l2-20260803',
    question: 'An iron-silver ionic equilibrium: $\\text{Fe}^{2+}(\\text{aq}) + \\text{Ag}^+(\\text{aq}) \\rightleftharpoons \\text{Fe}^{3+}(\\text{aq}) + \\text{Ag(s)}$ has $\\Delta S^\\theta_{\\text{total}} = +47.64\\text{ J K}^{-1}\\text{mol}^{-1}$. Which statement is correct?',
    options: [
      { text: '$K < 1$; mostly Fe2+ and Ag+ at equilibrium' },
      { text: '$K \\approx 309$; equilibrium lies to the right, mostly Fe3+ and Ag formed' },
      { text: '$K \\approx 1$; equal amounts of all species at equilibrium' },
      { text: '$K = 47.64$; equilibrium constant equals the entropy change numerically' }
    ],
    correctAnswer: 1,
    explanation:
      '- $K = e^{\\Delta S^\\theta_{\\text{total}} / R} = e^{47.64/8.31} = e^{5.733} \\approx 308.8 \\approx 309$.\n- Since $K \\gg 1$, the equilibrium lies to the right.\n- At equilibrium, mostly Fe3+ ions and Ag metal are present.\n- A grey/shiny silver precipitate forms and the solution turns yellow/orange (Fe3+).',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q7",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q7-l2-20260803',
    question: 'The system entropy change for the reaction $\\text{Fe}^{2+}(\\text{aq}) + \\text{Ag}^+(\\text{aq}) \\rightleftharpoons \\text{Fe}^{3+}(\\text{aq}) + \\text{Ag(s)}$ is $\\Delta S^\\theta_{\\text{system}} = -208.3\\text{ J K}^{-1}\\text{mol}^{-1}$. Why is the system entropy change negative?',
    options: [
      { text: 'Because an endothermic reaction has a negative entropy change' },
      { text: 'Because the number of aqueous ions decreases: 2 ions become 1 ion, and a solid is formed' },
      { text: 'Because gas is being absorbed into the reaction mixture' },
      { text: 'Because silver metal has a higher entropy than silver ions' }
    ],
    correctAnswer: 1,
    explanation:
      '- Reactant side: 2 aqueous ions (Fe2+ and Ag+) — higher disorder.\n- Product side: only 1 aqueous ion (Fe3+) plus solid Ag — lower disorder.\n- Forming a solid from aqueous ions reduces the number of particles free to move, decreasing entropy.\n- Therefore $\\Delta S^\\theta_{\\text{system}}$ is negative.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q8",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q8-l2-20260803',
    question: 'For the methane reforming reaction: $\\text{CH}_4(\\text{g}) + \\text{H}_2\\text{O}(\\text{g}) \\rightleftharpoons \\text{CO}(\\text{g}) + 3\\text{H}_2(\\text{g})$, at a temperature where $K_p = 8.54$, calculate $\\Delta S_{\\text{total}}$. ($R = 8.31\\text{ J K}^{-1}\\text{mol}^{-1}$)',
    options: [
      { text: '$\\Delta S_{\\text{total}} = +17.8\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S_{\\text{total}} = -17.8\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S_{\\text{total}} = +70.9\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S_{\\text{total}} = +8.54\\text{ J K}^{-1}\\text{mol}^{-1}$' }
    ],
    correctAnswer: 0,
    explanation:
      '- Use $\\Delta S_{\\text{total}} = R \\ln K_p = 8.31 \\times \\ln(8.54)$.\n- $\\ln(8.54) = 2.145$.\n- $\\Delta S_{\\text{total}} = 8.31 \\times 2.145 = +17.8\\text{ J K}^{-1}\\text{mol}^{-1}$.\n- This small positive value indicates that equilibrium lies slightly to the right at this temperature.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q9",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q9-l2-20260803',
    question: 'Which of the following best explains why the thermodynamic equilibrium constant $K$ must be dimensionless?',
    options: [
      { text: 'Because $K$ is always calculated at standard pressure of 1 atm' },
      { text: 'Because each concentration or pressure is divided by its standard value (1 mol dm⁻³ or 1 atm), making the ratio unitless' },
      { text: 'Because all equilibrium constants are defined in terms of mole fractions' },
      { text: 'Because $K$ is derived from $\\Delta S$ which is always dimensionless' }
    ],
    correctAnswer: 1,
    explanation:
      '- In the thermodynamic derivation, each concentration term is expressed as a ratio relative to a standard concentration ($c^\\theta = 1\\text{ mol dm}^{-3}$) or standard pressure ($p^\\theta = 1\\text{ atm}$).\n- For example: $[A] / c^\\theta$ = a pure number.\n- Since each term in the $K$ expression is dimensionless, $K$ itself has no units.\n- Numerically, the values are unchanged because dividing by 1 does not alter the number.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q10",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q10-l2-20260803',
    question: 'The CaCO₃ decomposition: $\\text{CaCO}_3(\\text{s}) \\rightarrow \\text{CaO(s)} + \\text{CO}_2(\\text{g})$, $\\Delta H^\\theta = +177.9\\text{ kJ mol}^{-1}$, $\\Delta S^\\theta_{\\text{system}} = +160.4\\text{ J K}^{-1}\\text{mol}^{-1}$. At which temperature does the reaction become spontaneous?',
    options: [
      { text: 'Above approximately $838\\text{ K}$ ($565\\text{ °C}$)' },
      { text: 'Above approximately $1109\\text{ K}$ ($836\\text{ °C}$)' },
      { text: 'Above approximately $55\\text{ K}$ ($-218\\text{ °C}$)' },
      { text: 'The reaction is always non-spontaneous as $\\Delta H > 0$' }
    ],
    correctAnswer: 1,
    explanation:
      '- The reaction is spontaneous when $\\Delta S_{\\text{total}} > 0$.\n- At the transition temperature $T$: $\\Delta S_{\\text{total}} = 0$, so $\\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} = 0$.\n- $\\Delta S_{\\text{surr}} = -\\Delta H/T$, so at the transition: $\\Delta S_{\\text{sys}} = \\Delta H / T$.\n- $T = \\Delta H / \\Delta S_{\\text{sys}} = 177900 / 160.4 \\approx 1109\\text{ K}$.\n- Above 1109 K, $\\Delta S_{\\text{total}} > 0$ and decomposition is spontaneous.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q2",
    createdAt: "2026-08-03T10:00:00Z",
    lessonNum: 3
  },
  {
    id: "ex_ed_u4_l3_lv2_1-2026",
    question: "In an esterification equilibrium: $\\text{CH}_3\\text{COOH} + \\text{CH}_3\\text{CH}_2\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOCH}_2\\text{CH}_3 + \\text{H}_2\\text{O}$, $1.00\\text{ mol}$ of ethanoic acid and $1.00\\text{ mol}$ of ethanol are mixed in a sealed flask. At equilibrium, $0.667\\text{ mol}$ of ethyl ethanoate is formed. Calculate the value of $K_c$.",
    options: [
      { text: "0.25" },
      { text: "2.00" },
      { text: "4.00", isCorrect: true },
      { text: "9.00" }
    ],
    correctAnswer: 2,
    explanation: "* ICE Table:\n  * Initial: Acid $= 1.00$, Alcohol $= 1.00$, Ester $= 0$, Water $= 0$.\n  * Change: $-0.667, -0.667, +0.667, +0.667$.\n  * Equilibrium: Acid $= 0.333$, Alcohol $= 0.333$, Ester $= 0.667$, Water $= 0.667$.\n* $K_c = \\frac{[\\text{Ester}][\\text{H}_2\\text{O}]}{[\\text{Acid}][\\text{Alcohol}]} = \\frac{(0.667)(0.667)}{(0.333)(0.333)} = \\left(\\frac{0.667}{0.333}\\right)^2 = 2^2 = \\mathbf{4.00}$ (volumes cancel out).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q32",
    createdAt: "2026-10-24T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv2_2-2026",
    question: "For the Haber process: $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)}$, the equilibrium partial pressures at $700\\text{ K}$ are $p_{\\text{N}_2} = 10.0\\text{ atm}$, $p_{\\text{H}_2} = 30.0\\text{ atm}$, and $p_{\\text{NH}_3} = 3.00\\text{ atm}$. Calculate $K_p$.",
    options: [
      { text: "3.33 × 10⁻⁵ atm⁻²", isCorrect: true },
      { text: "1.00 × 10⁻² atm⁻²" },
      { text: "3.00 × 10⁴ atm⁻²" },
      { text: "0.010 atm⁻²" }
    ],
    correctAnswer: 0,
    explanation: "* $K_p = \\frac{p_{\\text{NH}_3}^2}{p_{\\text{N}_2} \\cdot p_{\\text{H}_2}^3} = \\frac{(3.00)^2}{(10.0) \\times (30.0)^3} = \\frac{9.00}{10.0 \\times 27000} = \\frac{9.00}{270000} = \\mathbf{3.33 \\times 10^{-5}\\text{ atm}^{-2}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q33",
    createdAt: "2026-10-24T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv2_3-2026",
    question: "Why does an increase in total pressure shift the equilibrium position of $2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{SO}_3\\text{(g)}$ to the right, even though the numerical value of $K_p$ remains constant?",
    options: [
      { text: "K_p increases with pressure" },
      { text: "Increasing total pressure increases all partial pressures; because the reactant side has 3 moles of gas versus 2 moles on the product side, the denominator of the reaction quotient Q_p increases more than the numerator, forcing Q_p < K_p so the reaction shifts right to restore K_p", isCorrect: true },
      { text: "Oxygen liquefies at high pressure" },
      { text: "The activation energy is lowered by pressure" }
    ],
    correctAnswer: 1,
    explanation: "* $K_p$ is strictly a function of temperature.\n* When pressure doubles, $Q_p = \\frac{(2p_{\\text{SO}_3})^2}{(2p_{\\text{SO}_2})^2(2p_{\\text{O}_2})} = \\frac{1}{2} K_p < K_p$, compelling the forward reaction to proceed until the partial pressure ratio equals $K_p$ again.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q27",
    createdAt: "2026-10-25T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv2_4-2026",
    question: "At a certain temperature, $0.400\\text{ mol}$ of $\\text{PCl}_5$ is placed in a $2.00\\text{ dm}^3$ container. At equilibrium, $0.100\\text{ mol}$ of $\\text{Cl}_2$ is present: $\\text{PCl}_5\\text{(g)} \\rightleftharpoons \\text{PCl}_3\\text{(g)} + \\text{Cl}_2\\text{(g)}$. Calculate $K_c$.",
    options: [
      { text: "0.0167 mol dm⁻³", isCorrect: true },
      { text: "0.0333 mol dm⁻³" },
      { text: "0.0500 mol dm⁻³" },
      { text: "0.100 mol dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "* At equilibrium: moles of $\\text{Cl}_2 = 0.100$, $\\text{PCl}_3 = 0.100$, $\\text{PCl}_5 = 0.400 - 0.100 = 0.300\\text{ mol}$.\n* Concentrations ($V = 2.00\\text{ dm}^3$): $[\\text{PCl}_5] = 0.150\\text{ M}$, $[\\text{PCl}_3] = 0.050\\text{ M}$, $[\\text{Cl}_2] = 0.050\\text{ M}$.\n* $K_c = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]} = \\frac{(0.050)(0.050)}{0.150} = \\frac{0.0025}{0.150} = \\mathbf{0.0167\\text{ mol dm}^{-3}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q33",
    createdAt: "2026-10-25T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv2_5-2026",
    question: "When water is added to dilute an equilibrium mixture of $\\text{Fe}^{3+}\\text{(aq)} + \\text{SCN}^-\\text{(aq)} \\rightleftharpoons [\\text{Fe(SCN)}]^{2+}\\text{(aq)}$, the deep blood-red color fades. Why does dilution shift the equilibrium position to the left (towards reactants)?",
    options: [
      { text: "Water reacts chemically to destroy SCN⁻" },
      { text: "Dilution decreases all concentrations equally; because there are 2 solute particles on the left versus 1 on the right, the concentration quotient Q_c drops below K_c, forcing a net reverse shift to increase total dissolved particles", isCorrect: true },
      { text: "The temperature drops to 0 °C" },
      { text: "K_c decreases upon dilution" }
    ],
    correctAnswer: 1,
    explanation: "* Dilution by factor $D$ alters the reaction quotient: $Q_c = \\frac{[\\text{Fe(SCN)}^{2+}] / D}{([\\text{Fe}^{3+}] / D)([\\text{SCN}^-] / D)} = D \\times K_c > K_c$, shifting the reaction towards the side with more dissolved ions (left).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q34",
    createdAt: "2026-10-26T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv2_6-2026",
    question: "For the endothermic synthesis of nitrogen monoxide: $\\text{N}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{NO(g)}$ ($\Delta H = +180\\text{ kJ mol}^{-1}$), how do an increase in temperature and an increase in total pressure affect the equilibrium yield of NO?",
    options: [
      { text: "Temperature increase increases yield; Pressure increase increases yield" },
      { text: "Temperature increase increases yield; Pressure increase has NO effect on yield (equal moles of gas on both sides)", isCorrect: true },
      { text: "Temperature increase decreases yield; Pressure increase decreases yield" },
      { text: "Neither has any effect" }
    ],
    correctAnswer: 1,
    explanation: "* $\\Delta H > 0 \\implies$ Raising temperature shifts equilibrium right, **increasing NO yield**.\n* $\\Delta n_{\\text{gas}} = (2 - 2) = 0 \\implies$ Pressure has **no effect on position of equilibrium or yield**.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q28",
    createdAt: "2026-10-26T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv2_7-2026",
    question: "In the gaseous equilibrium: $2\\text{NO}_2\\text{(g)} \\rightleftharpoons \\text{N}_2\\text{O}_4\\text{(g)}$ ($\Delta H = -57.2\\text{ kJ mol}^{-1}$), a sealed syringe containing an equilibrium mixture of brown $\\text{NO}_2$ and colorless $\\text{N}_2\\text{O}_4$ is suddenly compressed. What visual changes occur to the color of the gas inside the syringe?",
    options: [
      { text: "The gas immediately turns permanently colorless" },
      { text: "The brown color momentarily intensifies due to the sudden increase in concentration of NO₂, then gradually lightens (becomes paler) as the equilibrium shifts to the right towards colorless N₂O₄", isCorrect: true },
      { text: "The gas permanently darkens without any fading" },
      { text: "No change in color occurs" }
    ],
    correctAnswer: 1,
    explanation: "* Sudden volume decrease instantly raises all gas concentrations, darkening the brown tint momentarily.\n* By Le Chatelier's principle, the system responds by shifting towards fewer moles of gas ($2\\text{ mol} \\rightarrow 1\\text{ mol}$), converting brown $\\text{NO}_2$ to colorless $\\text{N}_2\\text{O}_4$, causing the mixture to lighten over time.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q39",
    createdAt: "2026-11-03T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv2_8-2026",
    question: "A mixture containing $1.00\\text{ mol}$ of $\\text{H}_2$ and $2.00\\text{ mol}$ of $\\text{I}_2$ is heated to $450\\text{ }^\\circ\\text{C}$ in a $1.00\\text{ dm}^3$ sealed vessel. At equilibrium, $1.80\\text{ mol}$ of $\\text{HI}$ is formed: $\\text{H}_2\\text{(g)} + \\text{I}_2\\text{(g)} \\rightleftharpoons 2\\text{HI(g)}$. Calculate $K_c$.",
    options: [
      { text: "14.7" },
      { text: "29.5", isCorrect: true },
      { text: "59.0" },
      { text: "81.0" }
    ],
    correctAnswer: 1,
    explanation: "* Formation of $1.80\\text{ mol HI}$ requires reaction of $\\frac{1.80}{2} = 0.90\\text{ mol}$ of $\\text{H}_2$ and $\\text{I}_2$.\n* Equilibrium amounts: $n(\\text{H}_2) = 1.00 - 0.90 = 0.10\\text{ mol}$, $n(\\text{I}_2) = 2.00 - 0.90 = 1.10\\text{ mol}$, $n(\\text{HI}) = 1.80\\text{ mol}$.\n* $K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\frac{(1.80)^2}{(0.10)(1.10)} = \\frac{3.24}{0.110} = \\mathbf{29.45} \\approx \\mathbf{29.5}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q40",
    createdAt: "2026-11-03T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv2_9-2026",
    question: "For the gas-phase equilibrium $\\text{CO(g)} + 2\\text{H}_2\\text{(g)} \\rightleftharpoons \\text{CH}_3\\text{OH(g)}$, the total pressure is $50.0\\text{ atm}$. At equilibrium, the mole fractions are $x_{\\text{CO}} = 0.20$, $x_{\\text{H}_2} = 0.60$, and $x_{\\text{CH}_3\\text{OH}} = 0.20$. Calculate the partial pressure of hydrogen ($p_{\\text{H}_2}$).",
    options: [
      { text: "10.0 atm" },
      { text: "30.0 atm", isCorrect: true },
      { text: "50.0 atm" },
      { text: "60.0 atm" }
    ],
    correctAnswer: 1,
    explanation: "* $p_{\\text{H}_2} = x_{\\text{H}_2} \\times P_{\\text{total}} = 0.60 \\times 50.0\\text{ atm} = \\mathbf{30.0\\text{ atm}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q33",
    createdAt: "2026-11-04T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv2_10-2026",
    question: "When cobalt(II) chloride is dissolved in aqueous hydrochloric acid, the equilibrium is established:\n$[\\text{Co(H}_2\\text{O)}_6]^{2+}\\text{(aq (pink))} + 4\\text{Cl}^-\\text{(aq)} \\rightleftharpoons [\\text{CoCl}_4]^{2-}\\text{(aq (blue))} + 6\\text{H}_2\\text{O(l)}$ ($\Delta H > 0$)\nWhat happens to the color when the solution is heated?",
    options: [
      { text: "Turns colorless" },
      { text: "Turns deep blue because the forward endothermic reaction is favored by higher temperatures", isCorrect: true },
      { text: "Turns deep pink" },
      { text: "Precipitates metallic cobalt" }
    ],
    correctAnswer: 1,
    explanation: "* The forward reaction is **endothermic** (absorbing heat).\n* Heating shifts the equilibrium to the right, favoring formation of the tetrahedral blue complex $[\\text{CoCl}_4]^{2-}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q40",
    createdAt: "2026-11-04T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv2_11-2026",
    question: "In the equilibrium: $\\text{A(g)} + 2\\text{B(g)} \\rightleftharpoons \\text{C(g)}$, the volume of the reaction flask is halved at constant temperature. By what factor does the reaction quotient $Q_c$ change immediately before equilibrium re-adjusts?",
    options: [
      { text: "Decreases by half (0.5×)" },
      { text: "Decreases to one-quarter (0.25× K_c), so Q_c < K_c and the forward reaction accelerates to reach a new equilibrium position with higher yield of C", isCorrect: true },
      { text: "Doubles (2×)" },
      { text: "Quadruples (4×)" }
    ],
    correctAnswer: 1,
    explanation: "* Halving volume doubles all molar concentrations ($2\\times$):\n* $Q_c = \\frac{2[\\text{C}]}{(2[\\text{A}])(2[\\text{B}])^2} = \\frac{2}{2 \\times 4} K_c = \\frac{1}{4} K_c$.\n* Since $Q_c = 0.25 K_c < K_c$, the reaction shifts to the right (towards fewer moles).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q41",
    createdAt: "2026-11-05T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv2_12-2026",
    question: "Why does the value of $K_p$ for the exothermic Haber process: $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)}$ ($\Delta H^{\\ominus} = -92.2\\text{ kJ mol}^{-1}$) decrease from $K_p = 6.8 \\times 10^5\\text{ atm}^{-2}$ at $25\\text{ }^\\circ\\text{C}$ to $K_p = 3.3 \\times 10^{-5}\\text{ atm}^{-2}$ at $450\\text{ }^\\circ\\text{C}$?",
    options: [
      { text: "Ammonia decomposes into elements at high temperature" },
      { text: "According to the van 't Hoff relation, the surrounding entropy change ΔS_surr = -ΔH / T becomes less positive as T increases, making ΔS_total less positive and ΔG° more positive, which exponentially decreases K_p (ln K_p = ΔS_total° / R)", isCorrect: true },
      { text: "The catalyst becomes inactive" },
      { text: "Nitrogen gas escapes from the reactor" }
    ],
    correctAnswer: 1,
    explanation: "* Thermodynamics: For exothermic reactions, $\\Delta S_{\\text{surr}} = -\\frac{\\Delta H}{T}$. Increasing $T$ diminishes $\\Delta S_{\\text{surr}}$, decreasing $\\Delta S_{\\text{total}}$ and lowering $\\ln K_p = \\frac{\\Delta S_{\\text{total}}}{R}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q34",
    createdAt: "2026-11-05T10:00:00Z"
  }
];


