import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: 'u4-l3-q1-l1-20260803',
    question: 'Which of the following correctly links the standard total entropy change to the equilibrium constant?',
    options: [
      { text: '$\\Delta S^\\theta_{\\text{total}} = R \\ln K$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = \\frac{R}{K}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = RT \\ln K$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = -R \\ln K$' }
    ],
    correctAnswer: 0,
    explanation:
      '- The correct thermodynamic relationship is $\\Delta S^\\theta_{\\text{total}} = R \\ln K$.\n- Where $R = 8.31\\text{ J K}^{-1}\\text{mol}^{-1}$ is the gas constant.\n- This can be rearranged to give $K = e^{\\Delta S^\\theta_{\\text{total}} / R}$.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q2",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q2-l1-20260803',
    question: 'A reaction has a large positive standard total entropy change ($\\Delta S^\\theta_{\\text{total}} \\gg 0$). What does this tell us about the equilibrium constant $K$?',
    options: [
      { text: '$K \\ll 1$ — reaction barely proceeds' },
      { text: '$K = 0$ — reaction does not proceed at all' },
      { text: '$K \\gg 1$ — reaction goes virtually to completion' },
      { text: '$K = 1$ — significant amounts of both reactants and products' }
    ],
    correctAnswer: 2,
    explanation:
      '- Since $\\Delta S^\\theta_{\\text{total}} = R \\ln K$, a large positive $\\Delta S^\\theta_{\\text{total}}$ means $\\ln K$ is large and positive.\n- Therefore $K \\gg 1$, and the equilibrium position lies far to the right.\n- The reaction goes virtually to completion.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q3",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q3-l1-20260803',
    question: 'Which of the following is the correct expression for the equilibrium constant $K$ in terms of the standard total entropy change?',
    options: [
      { text: '$K = e^{R / \\Delta S^\\theta_{\\text{total}}}$' },
      { text: '$K = e^{\\Delta S^\\theta_{\\text{total}} / R}$' },
      { text: '$K = \\ln(\\Delta S^\\theta_{\\text{total}} / R)$' },
      { text: '$K = R / \\Delta S^\\theta_{\\text{total}}$' }
    ],
    correctAnswer: 1,
    explanation:
      '- Starting from $\\Delta S^\\theta_{\\text{total}} = R \\ln K$, divide both sides by $R$: $\\ln K = \\Delta S^\\theta_{\\text{total}} / R$.\n- Taking the exponential of both sides: $K = e^{\\Delta S^\\theta_{\\text{total}} / R}$.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q4",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q4-l1-20260803',
    question: 'For a reversible reaction at equilibrium, which statement about $\\Delta S^\\theta_{\\text{total}}$ is correct?',
    options: [
      { text: '$\\Delta S^\\theta_{\\text{total}}$ must always be positive for a reaction to reach equilibrium' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = 0$ at the exact equilibrium point' },
      { text: '$\\Delta S^\\theta_{\\text{total}}$ has no relationship to the equilibrium position' },
      { text: '$\\Delta S^\\theta_{\\text{total}}$ is always negative for reversible reactions' }
    ],
    correctAnswer: 1,
    explanation:
      '- At the equilibrium point, the forward and reverse rates are equal and the system has reached its maximum entropy.\n- At this point, the total entropy change for any infinitesimal shift in either direction is zero: $\\Delta S^\\theta_{\\text{total}} = 0$.\n- The standard entropy change $\\Delta S^\\theta_{\\text{total}}$ under standard conditions relates to how far equilibrium lies to one side, via $K = e^{\\Delta S^\\theta_{\\text{total}} / R}$.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q5",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q5-l1-20260803',
    question: 'A reaction has $\\Delta S^\\theta_{\\text{total}} = +57.4\\text{ J K}^{-1}\\text{mol}^{-1}$ and $R = 8.31\\text{ J K}^{-1}\\text{mol}^{-1}$. What is the approximate value of $K$?',
    options: [
      { text: '$K \\approx 6.90$' },
      { text: '$K \\approx 57.4$' },
      { text: '$K \\approx 1030$' },
      { text: '$K \\approx 0.001$' }
    ],
    correctAnswer: 2,
    explanation:
      '- Use the formula $K = e^{\\Delta S^\\theta_{\\text{total}} / R}$.\n- $\\Delta S^\\theta_{\\text{total}} / R = 57.4 / 8.31 = 6.91$.\n- $K = e^{6.91} \\approx 1003 \\approx 1030$.\n- This large $K$ value confirms the reaction proceeds nearly to completion.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q6",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q6-l1-20260803',
    question: 'A reaction is described as thermodynamically feasible but kinetically stable at room temperature. What does this mean?',
    options: [
      { text: 'The reaction has a negative $\\Delta S^\\theta_{\\text{total}}$ but a fast rate' },
      { text: 'The reaction has a positive $\\Delta S^\\theta_{\\text{total}}$ but requires energy input (e.g. a spark) to proceed' },
      { text: 'The reaction has $K < 1$ and a high activation energy' },
      { text: 'The reaction can only proceed in the reverse direction' }
    ],
    correctAnswer: 1,
    explanation:
      '- Thermodynamically feasible means $\\Delta S^\\theta_{\\text{total}} > 0$ (i.e. $K > 1$), so the reaction is energetically favourable.\n- Kinetically stable means the activation energy ($E_a$) is so high that the reaction does not proceed at a measurable rate at room temperature without a catalyst or ignition source.\n- Example: methane + oxygen mixture is stable at room temperature but combusts rapidly once ignited.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q7",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q7-l1-20260803',
    question: 'The entropy change of the surroundings is given by which expression?',
    options: [
      { text: '$\\Delta S_{\\text{surr}} = \\Delta H \\times T$' },
      { text: '$\\Delta S_{\\text{surr}} = +\\dfrac{\\Delta H}{T}$' },
      { text: '$\\Delta S_{\\text{surr}} = -\\dfrac{\\Delta H}{T}$' },
      { text: '$\\Delta S_{\\text{surr}} = \\Delta H - T\\Delta S_{\\text{sys}}$' }
    ],
    correctAnswer: 2,
    explanation:
      '- The surroundings entropy change is: $\\Delta S_{\\text{surr}} = -\\dfrac{\\Delta H}{T}$.\n- For an exothermic reaction ($\\Delta H < 0$), heat is released to the surroundings, increasing their entropy (positive $\\Delta S_{\\text{surr}}$).\n- For an endothermic reaction ($\\Delta H > 0$), heat is absorbed from the surroundings, decreasing their entropy (negative $\\Delta S_{\\text{surr}}$).',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q8",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q8-l1-20260803',
    question: 'For a spontaneous process, what must be true of the total entropy change?',
    options: [
      { text: '$\\Delta S_{\\text{total}} < 0$' },
      { text: '$\\Delta S_{\\text{total}} = 0$' },
      { text: '$\\Delta S_{\\text{total}} > 0$' },
      { text: '$\\Delta S_{\\text{total}}$ can have any value' }
    ],
    correctAnswer: 2,
    explanation:
      '- The second law of thermodynamics states that for a spontaneous (feasible) process, the total entropy of the universe must increase.\n- Therefore $\\Delta S_{\\text{total}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} > 0$.\n- If $\\Delta S_{\\text{total}} < 0$, the process is non-spontaneous; if $\\Delta S_{\\text{total}} = 0$, the system is at equilibrium.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q9",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q9-l1-20260803',
    question: 'The decomposition of calcium carbonate is endothermic ($\\Delta H > 0$). At what temperature range does this reaction become spontaneous?',
    options: [
      { text: 'Only at very low temperatures' },
      { text: 'Only when a catalyst is added' },
      { text: 'At all temperatures above the transition temperature where $\\Delta S_{\\text{total}} > 0$' },
      { text: 'Never — endothermic reactions cannot be spontaneous' }
    ],
    correctAnswer: 2,
    explanation:
      '- For an endothermic reaction, $\\Delta S_{\\text{surr}} = -\\Delta H / T$ is negative.\n- If the system entropy change $\\Delta S_{\\text{sys}}$ is positive (e.g. gas is produced), at high enough temperatures, $\\Delta S_{\\text{sys}}$ can outweigh the negative $\\Delta S_{\\text{surr}}$.\n- At the transition temperature, $\\Delta S_{\\text{total}} = 0$; above it, $\\Delta S_{\\text{total}} > 0$ and the reaction becomes spontaneous.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q10",
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q10-l1-20260803',
    question: 'Which of the following reactions would have the largest positive $\\Delta S^\\theta_{\\text{system}}$?',
    options: [
      { text: '$\\text{NaCl(s)} \\rightarrow \\text{Na}^+(\\text{aq}) + \\text{Cl}^-(\\text{aq})$' },
      { text: '$\\text{N}_2(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightarrow 2\\text{NH}_3(\\text{g})$' },
      { text: '$\\text{CaCO}_3(\\text{s}) \\rightarrow \\text{CaO(s)} + \\text{CO}_2(\\text{g})$' },
      { text: '$\\text{H}_2\\text{O(g)} \\rightarrow \\text{H}_2\\text{O(l)}$' }
    ],
    correctAnswer: 2,
    explanation:
      '- Entropy increases with the number of gas moles and with changes from solid/liquid to gas.\n- Dissolving NaCl: moderate increase (ions disperse in water).\n- N2 + 3H2 → 2NH3: 4 moles gas → 2 moles gas — entropy DECREASES.\n- CaCO3(s) → CaO(s) + CO2(g): solid produces a gas — large entropy INCREASE.\n- H2O(g) → H2O(l): gas becomes liquid — entropy DECREASES.\n- Therefore CaCO3 decomposition has the largest positive $\\Delta S^\\theta_{\\text{system}}$.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q1",
    createdAt: "2026-08-03T10:00:00Z",
    lessonNum: 3
  },
  {
    id: "ex_ed_u4_l3_lv1_1-2026",
    question: "What is the correct expression for the concentration equilibrium constant ($K_c$) for the homogeneous reaction: $\\text{N}_2\\text{O}_4\\text{(g)} \\rightleftharpoons 2\\text{NO}_2\\text{(g)}$?",
    options: [
      { text: "K_c = [N₂O₄] / [NO₂]²" },
      { text: "K_c = [NO₂]² / [N₂O₄]", isCorrect: true },
      { text: "K_c = 2[NO₂] / [N₂O₄]" },
      { text: "K_c = [NO₂] / [N₂O₄]" }
    ],
    correctAnswer: 1,
    explanation: "* By the Equilibrium Law, $K_c = \\frac{[\\text{Products}]^n}{[\\text{Reactants}]^m} = \\mathbf{\\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q29",
    createdAt: "2026-10-20T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_2-2026",
    question: "What are the SI units of the concentration equilibrium constant ($K_c$) for the Contact process equilibrium: $2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{SO}_3\\text{(g)}$?",
    options: [
      { text: "No units" },
      { text: "mol dm⁻³" },
      { text: "dm³ mol⁻¹", isCorrect: true },
      { text: "dm⁶ mol⁻²" }
    ],
    correctAnswer: 2,
    explanation: "* $\\text{Units} = \\frac{(\\text{mol dm}^{-3})^2}{(\\text{mol dm}^{-3})^2(\\text{mol dm}^{-3})} = \\frac{1}{\\text{mol dm}^{-3}} = \\mathbf{\\text{dm}^3\\text{ mol}^{-1}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q30",
    createdAt: "2026-10-20T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_3-2026",
    question: "How is the partial pressure ($p_{\\text{A}}$) of a gas A related to its mole fraction ($x_{\\text{A}}$) and the total pressure ($P_{\\text{total}}$) of the gas mixture?",
    options: [
      { text: "p_A = x_A / P_total" },
      { text: "p_A = x_A × P_total (Dalton's Law of Partial Pressures)", isCorrect: true },
      { text: "p_A = P_total / x_A" },
      { text: "p_A = x_A + P_total" }
    ],
    correctAnswer: 1,
    explanation: "* Dalton's Law states that the partial pressure exerted by an individual gas in a mixture equals its **mole fraction multiplied by the total pressure**: $\\mathbf{p_{\\text{A}} = x_{\\text{A}} P_{\\text{total}}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q25",
    createdAt: "2026-10-21T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_4-2026",
    question: "In a heterogeneous equilibrium involving solid and gaseous species, such as $\\text{CaCO}_3\\text{(s)} \\rightleftharpoons \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$, how is the pressure equilibrium constant ($K_p$) expressed?",
    options: [
      { text: "K_p = (p_CaO × p_CO₂) / p_CaCO₃" },
      { text: "K_p = p_CO₂ (pure solids have constant chemical activity and are omitted from K_p)", isCorrect: true },
      { text: "K_p = 1 / p_CO₂" },
      { text: "K_p = p_CaO / p_CaCO₃" }
    ],
    correctAnswer: 1,
    explanation: "* The concentration/activity of pure solids is constant and incorporated into the equilibrium constant, so only gaseous species appear: $\\mathbf{K_p = p_{\\text{CO}_2}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q30",
    createdAt: "2026-10-21T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_5-2026",
    question: "What effect does adding a catalyst have on the numerical value of the equilibrium constant ($K_c$ or $K_p$) and the position of equilibrium?",
    options: [
      { text: "Increases K_c and shifts equilibrium to the right" },
      { text: "No effect on K_c or the position of equilibrium; it only accelerates the rate at which equilibrium is reached by lowering the activation energy of both forward and reverse reactions equally", isCorrect: true },
      { text: "Decreases K_c" },
      { text: "Shifts equilibrium towards the exothermic direction" }
    ],
    correctAnswer: 1,
    explanation: "* A catalyst increases forward and reverse reaction rates equally by providing a common lower-energy pathway without changing the chemical potentials of reactants or products.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q31",
    createdAt: "2026-10-22T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_6-2026",
    question: "Which single external factor is the ONLY variable that can change the numerical value of the equilibrium constant ($K_c$ or $K_p$) for a given reaction?",
    options: [
      { text: "Total pressure" },
      { text: "Reactant concentration" },
      { text: "Temperature", isCorrect: true },
      { text: "Surface area of catalyst" }
    ],
    correctAnswer: 2,
    explanation: "* Only **temperature** alters the value of $K_c$ and $K_p$, because temperature directly changes the surrounding entropy and standard Gibbs free energy of the system.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q26",
    createdAt: "2026-10-22T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_7-2026",
    question: "For an EXOTHERMIC equilibrium reaction ($\Delta H < 0$), what happens to the value of $K_p$ and the position of equilibrium when the temperature is INCREASED?",
    options: [
      { text: "K_p increases and equilibrium shifts right" },
      { text: "K_p decreases and equilibrium shifts left (towards reactants)", isCorrect: true },
      { text: "K_p remains constant and equilibrium shifts right" },
      { text: "K_p decreases and equilibrium shifts right" }
    ],
    correctAnswer: 1,
    explanation: "* By Le Chatelier's principle and thermodynamics, raising temperature for an exothermic reaction shifts the equilibrium in the endothermic reverse direction, resulting in lower product concentrations and a **smaller $K_p$**.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q31",
    createdAt: "2026-10-23T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_8-2026",
    question: "A gaseous mixture contains $0.20\\text{ mol}$ of $\\text{N}_2$, $0.60\\text{ mol}$ of $\\text{H}_2$, and $0.20\\text{ mol}$ of $\\text{NH}_3$ at a total pressure of $10.0\\text{ atm}$. What is the partial pressure of nitrogen ($p_{\\text{N}_2}$)?",
    options: [
      { text: "1.0 atm" },
      { text: "2.0 atm", isCorrect: true },
      { text: "6.0 atm" },
      { text: "10.0 atm" }
    ],
    correctAnswer: 1,
    explanation: "* Total moles $= 0.20 + 0.60 + 0.20 = 1.00\\text{ mol}$.\n* Mole fraction $x_{\\text{N}_2} = \\frac{0.20}{1.00} = 0.20$.\n* $p_{\\text{N}_2} = x_{\\text{N}_2} \\times P_{\\text{total}} = 0.20 \\times 10.0\\text{ atm} = \\mathbf{2.0\\text{ atm}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q32",
    createdAt: "2026-10-23T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_9-2026",
    question: "What is a dynamic chemical equilibrium?",
    options: [
      { text: "A state where all chemical reactions completely stop" },
      { text: "A state in a closed system where the rate of the forward reaction equals the rate of the reverse reaction, and the concentrations of reactants and products remain constant over time", isCorrect: true },
      { text: "A state where the concentrations of reactants and products are exactly equal" },
      { text: "A state where the total pressure is zero" }
    ],
    correctAnswer: 1,
    explanation: "* In a dynamic equilibrium, microscopic forward and reverse processes continue at identical rates ($\\text{Rate}_{\\text{forward}} = \\text{Rate}_{\\text{reverse}}$) in a closed system, so macroscopic concentrations do not change.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q36",
    createdAt: "2026-10-30T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_10-2026",
    question: "What is the mole fraction ($x_{\\text{A}}$) of a gas component A in a mixture of gases?",
    options: [
      { text: "The mass of gas A divided by total mass" },
      { text: "The number of moles of gas A divided by the total number of moles of all gas components in the mixture (x_A = n_A / n_total)", isCorrect: true },
      { text: "The volume of gas A divided by temperature" },
      { text: "The partial pressure of gas A multiplied by total pressure" }
    ],
    correctAnswer: 1,
    explanation: "* The mole fraction is defined as $x_{\\text{A}} = \\frac{n_{\\text{A}}}{n_{\\text{total}}}$, and the sum of all mole fractions in a mixture is always equal to $1.00$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q37",
    createdAt: "2026-10-30T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_11-2026",
    question: "What is the sum of the mole fractions of all components in any closed gas mixture?",
    options: [
      { text: "Always 0" },
      { text: "Always 1.00 (Σ x_i = 1)", isCorrect: true },
      { text: "Equal to the total pressure" },
      { text: "Equal to the gas constant R" }
    ],
    correctAnswer: 1,
    explanation: "* By definition: $\\sum x_i = \\frac{n_1 + n_2 + \\dots + n_k}{n_{\\text{total}}} = \\frac{n_{\\text{total}}}{n_{\\text{total}}} = \\mathbf{1.00}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q31",
    createdAt: "2026-10-31T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_12-2026",
    question: "Why is water ($\text{H}_2\text{O}$) omitted from the equilibrium constant expression ($K_c$) in dilute aqueous acid-base equilibria (e.g. $\\text{CH}_3\\text{COOH(aq)} + \\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{CH}_3\\text{COO}^-\\text{(aq)} + \\text{H}_3\\text{O}^+\\text{(aq)}$)?",
    options: [
      { text: "Water is a catalyst" },
      { text: "Water is the solvent in huge excess (concentration ≈ 55.5 mol dm⁻³), so its concentration remains virtually constant during the reaction and is incorporated into the acid dissociation constant (K_a)", isCorrect: true },
      { text: "Water does not participate in chemical reactions" },
      { text: "Water has zero mass" }
    ],
    correctAnswer: 1,
    explanation: "* In dilute aqueous solutions, $[\\text{H}_2\\text{O}] \\approx 55.5\\text{ mol dm}^{-3}$ is constant; multiplying $K_c$ by $[\\text{H}_2\\text{O}]$ gives the constant $K_a = \\frac{[\\text{CH}_3\\text{COO}^-][\\text{H}_3\\text{O}^+]}{[\\text{CH}_3\\text{COOH}]}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q37",
    createdAt: "2026-10-31T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_13-2026",
    question: "What are the SI units of $K_p$ for the dissociation of dinitrogen tetroxide: $\\text{N}_2\\text{O}_4\\text{(g)} \\rightleftharpoons 2\\text{NO}_2\\text{(g)}$ when partial pressures are measured in kilopascals ($\\text{kPa}$)?",
    options: [
      { text: "No units" },
      { text: "kPa", isCorrect: true },
      { text: "kPa⁻¹" },
      { text: "kPa²" }
    ],
    correctAnswer: 1,
    explanation: "* $K_p = \\frac{p_{\\text{NO}_2}^2}{p_{\\text{N}_2\\text{O}_4}} \\implies \\text{Units} = \\frac{\\text{kPa}^2}{\\text{kPa}} = \\mathbf{\\text{kPa}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q38",
    createdAt: "2026-11-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_14-2026",
    question: "For the equilibrium $\\text{A(g)} + \\text{B(g)} \\rightleftharpoons \\text{C(g)} + \\text{D(g)}$, which statement about the effect of container volume on the position of equilibrium is correct?",
    options: [
      { text: "Decreasing volume shifts the equilibrium to the right" },
      { text: "Changing container volume has NO effect on the position of equilibrium because the total moles of gas on both sides are equal (Δn_gas = 0)", isCorrect: true },
      { text: "Increasing volume shifts the equilibrium to the right" },
      { text: "Changing volume changes the value of K_c" }
    ],
    correctAnswer: 1,
    explanation: "* Since moles of reactant gas ($1+1=2$) equals moles of product gas ($1+1=2$), pressure/volume changes alter both sides equally and do not shift equilibrium.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q32",
    createdAt: "2026-11-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_15-2026",
    question: "In the industrial production of sulfur trioxide in the Contact Process ($2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{SO}_3\\text{(g)}$ $\\Delta H = -197\\text{ kJ mol}^{-1}$), why is an elevated temperature (400–450 °C) used despite reducing the equilibrium yield?",
    options: [
      { text: "To decompose SO₃ into sulfur" },
      { text: "As a compromise: low temperatures favor high equilibrium yield but give an impractically slow reaction rate; 450 °C provides an acceptable rate in the presence of the V₂O₅ catalyst", isCorrect: true },
      { text: "To prevent SO₂ from solidifying" },
      { text: "To eliminate the need for oxygen" }
    ],
    correctAnswer: 1,
    explanation: "* Industrial compromise: Low temperature maximizes yield (exothermic), but reaction kinetics is too sluggish. $450\\text{ }^\\circ\\text{C}$ gives rapid throughput with acceptable yield.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q38",
    createdAt: "2026-11-02T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l3_lv1_16-2026",
    question: "What does an extremely small equilibrium constant ($K \\ll 10^{-10}$) indicate about a chemical reaction?",
    options: [
      { text: "The reaction proceeds virtually to 100% completion" },
      { text: "The position of equilibrium lies almost entirely to the left; negligible product is formed and reactants remain virtually unreacted", isCorrect: true },
      { text: "The reaction is extremely fast" },
      { text: "The reaction requires zero activation energy" }
    ],
    correctAnswer: 1,
    explanation: "* $K \\ll 1$ signifies that reactant concentrations vastly dominate at equilibrium, meaning the reaction barely proceeds in the forward direction.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q39",
    createdAt: "2026-11-02T10:00:00Z"
  }
];


