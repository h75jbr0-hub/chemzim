import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u5_l1_lv3_1-2026",
    question: "Calculate the standard Gibbs free energy change ($\\Delta G^\\ominus$ in $\\text{kJ mol}^{-1}$) for the reaction: $\\text{Zn(s)} + \\text{Cu}^{2+}\\text{(aq)} \\rightarrow \\text{Zn}^{2+}\\text{(aq)} + \\text{Cu(s)}$ ($E_{\\text{cell}}^\\ominus = +1.10\\text{ V}$, $F = 96485\\text{ C mol}^{-1}$, $n = 2$).",
    options: [
      { text: "-106.1 kJ mol⁻¹" },
      { text: "-212.3 kJ mol⁻¹", isCorrect: true },
      { text: "+212.3 kJ mol⁻¹" },
      { text: "-424.5 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* $\\Delta G^\\ominus = -n F E_{\\text{cell}}^\\ominus = -2 \\times 96485\\text{ C mol}^{-1} \\times 1.10\\text{ V} = -212267\\text{ J mol}^{-1} = \\mathbf{-212.3\\text{ kJ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q6",
    createdAt: "2027-01-15T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_2-2026",
    question: "Given the thermodynamic relationship: $\\Delta S_{\\text{total}}^\\ominus = R \\ln K = \\frac{n F E_{\\text{cell}}^\\ominus}{T}$, calculate the equilibrium constant ($K$) at $298\\text{ K}$ for a cell with $n = 2$ and $E_{\\text{cell}}^\\ominus = +0.295\\text{ V}$ ($R = 8.314\\text{ J K}^{-1}\\text{ mol}^{-1}$, $F = 96485\\text{ C mol}^{-1}$).",
    options: [
      { text: "1.0 × 10⁵" },
      { text: "1.0 × 10¹⁰", isCorrect: true },
      { text: "2.3 × 10⁴" },
      { text: "5.0 × 10¹²" }
    ],
    correctAnswer: 1,
    explanation: "* $\\ln K = \\frac{n F E^\\ominus}{R T} = \\frac{2 \\times 96485 \\times 0.295}{8.314 \\times 298} = \\frac{56926.15}{2477.57} = 22.977$.\n* $K = e^{22.977} = 10^{\\frac{22.977}{2.3026}} = 10^{9.979} = \\mathbf{9.97 \\times 10^9} \\approx \\mathbf{1.0 \\times 10^{10}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q7",
    createdAt: "2027-01-15T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_3-2026",
    question: "Given the standard electrode potentials: $\\text{VO}_2^+\\text{(aq)} + 2\\text{H}^+ + \\text{e}^- \\rightleftharpoons \\text{VO}^{2+}\\text{(aq)} + \\text{H}_2\\text{O} \\quad E^\\ominus = +1.00\\text{ V}$, $\\text{VO}^{2+}\\text{(aq)} + 2\\text{H}^+ + \\text{e}^- \\rightleftharpoons \\text{V}^{3+}\\text{(aq)} + \\text{H}_2\\text{O} \\quad E^\\ominus = +0.34\\text{ V}$, $\\text{V}^{3+}\\text{(aq)} + \\text{e}^- \\rightleftharpoons \\text{V}^{2+}\\text{(aq)} \\quad E^\\ominus = -0.26\\text{ V}$, and $\\text{Zn}^{2+}\\text{(aq)} + 2\\text{e}^- \\rightleftharpoons \\text{Zn(s)} \\quad E^\\ominus = -0.76\\text{ V}$. When acidified yellow $\\text{VO}_2^+$ is reduced with excess zinc metal, what is the final oxidation state and color of the vanadium solution?",
    options: [
      { text: "+4 (blue VO²⁺)" },
      { text: "+3 (green V³⁺)" },
      { text: "+2 (violet V²⁺, since E°(Zn²⁺/Zn) = -0.76 V is more negative than all three reduction potentials)", isCorrect: true },
      { text: "0 (vanadium metal precipitates)" }
    ],
    correctAnswer: 2,
    explanation: "* Since $E^\\ominus(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\text{ V}$ is lower than $E^\\ominus(\\text{V}^{3+}/\\text{V}^{2+}) = -0.26\\text{ V}$, zinc reduces $\\text{V(V) [yellow]} \\rightarrow \\text{V(IV) [blue]} \\rightarrow \\text{V(III) [green]} \\rightarrow \\mathbf{\\text{V(II) [violet]}}$. Zinc cannot reduce $\\text{V}^{2+}$ to $\\text{V(0)}$ ($E^\\ominus(\\text{V}^{2+}/\\text{V}) = -1.18\\text{ V}$).",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q5",
    createdAt: "2027-01-16T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_4-2026",
    question: "Given: $\\text{Fe}^{3+}\\text{(aq)} + \\text{e}^- \\rightleftharpoons \\text{Fe}^{2+}\\text{(aq)} \\quad E^\\ominus = +0.77\\text{ V}$ and $\\text{Ag}^+\\text{(aq)} + \\text{e}^- \\rightleftharpoons \\text{Ag(s)} \\quad E^\\ominus = +0.80\\text{ V}$. When equimolar solutions ($1.00\\text{ M}$) of $\\text{Fe}^{2+}$ and $\\text{Ag}^+$ are mixed, a reversible equilibrium is established: $\\text{Fe}^{2+}\\text{(aq)} + \\text{Ag}^+\\text{(aq)} \\rightleftharpoons \\text{Fe}^{3+}\\text{(aq)} + \\text{Ag(s)}$. If aqueous sodium fluoride ($\\text{NaF}$) is added to this mixture, forming a very stable colorless complex $[\\text{FeF}_6]^{3-}$, what happens to the position of equilibrium and the mass of precipitated silver?",
    options: [
      { text: "Equilibrium shifts left; silver dissolves" },
      { text: "Equilibrium shifts to the right, precipitating more solid silver, because removing free Fe³⁺ ions decreases the quotient Q below K", isCorrect: true },
      { text: "No change is observed" },
      { text: "The cell potential becomes zero" }
    ],
    correctAnswer: 1,
    explanation: "* Complexing $\\text{Fe}^{3+}$ with $\\text{F}^-$ drastically reduces free $[\\text{Fe}^{3+}]$, shifting the redox equilibrium to the right by Le Chatelier's principle and precipitating more metallic **silver**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q7",
    createdAt: "2027-01-16T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_5-2026",
    question: "Consider the disproportionation of copper(I) ions in aqueous solution: $2\\text{Cu}^+\\text{(aq)} \\rightarrow \\text{Cu}^{2+}\\text{(aq)} + \\text{Cu(s)}$. Given: $\\text{Cu}^+ + \\text{e}^- \\rightleftharpoons \\text{Cu(s)} \\quad E^\\ominus = +0.52\\text{ V}$ and $\\text{Cu}^{2+} + \\text{e}^- \\rightleftharpoons \\text{Cu}^+ \\quad E^\\ominus = +0.15\\text{ V}$. Calculate $E_{\\text{cell}}^\\ominus$ for this disproportionation reaction and explain why uncomplexed $\\text{Cu}^+$ is unstable in aqueous solution.",
    options: [
      { text: "E°_cell = -0.37 V; Cu⁺ is stable" },
      { text: "E°_cell = +0.37 V; Cu⁺ spontaneously disproportionates into Cu²⁺(aq) and Cu(s) because E°_cell > 0", isCorrect: true },
      { text: "E°_cell = +0.67 V; Cu⁺ boils water" },
      { text: "E°_cell = 0.00 V; Cu⁺ forms a dimer" }
    ],
    correctAnswer: 1,
    explanation: "* Reduction: $\\text{Cu}^+ + \\text{e}^- \\rightarrow \\text{Cu(s)} \\quad (E^\\ominus = +0.52\\text{ V})$. Oxidation: $\\text{Cu}^+ \\rightarrow \\text{Cu}^{2+} + \\text{e}^- \\quad (-E^\\ominus = -0.15\\text{ V})$.\n* $E_{\\text{cell}}^\\ominus = +0.52 - (+0.15) = \\mathbf{+0.37\\text{ V} > 0}$. Hence $\\text{Cu}^+$ readily disproportionates in water.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q8",
    createdAt: "2027-01-17T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_6-2026",
    question: "A concentration cell consists of two silver electrodes dipping into silver nitrate solutions of different concentrations: $\\text{Ag(s)} | \\text{Ag}^+\\text{(aq, 0.0010 mol dm}^{-3}) || \\text{Ag}^+\\text{(aq, 1.00 mol dm}^{-3}) | \\text{Ag(s)}$. Using the Nernst relationship $E_{\\text{cell}} = \\frac{0.0591}{n} \\log_{10}\\left(\\frac{[\\text{Ag}^+]_{\\text{conc}}}{[\\text{Ag}^+]_{\\text{dil}}}\\right)$ at $298\\text{ K}$, calculate the cell electromotive force ($E_{\\text{cell}}$).",
    options: [
      { text: "0.000 V" },
      { text: "+0.177 V", isCorrect: true },
      { text: "+0.354 V" },
      { text: "+0.059 V" }
    ],
    correctAnswer: 1,
    explanation: "* $n = 1$.\n* $\\frac{[\\text{Ag}^+]_{\\text{conc}}}{[\\text{Ag}^+]_{\\text{dil}}} = \\frac{1.00}{0.0010} = 1000 = 10^3$.\n* $\\log_{10}(1000) = 3$.\n* $E_{\\text{cell}} = 0.0591 \\times 3 = \\mathbf{+0.1773\\text{ V}} \\approx \\mathbf{+0.177\\text{ V}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q6",
    createdAt: "2027-01-17T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_7-2026",
    question: "Calculate the standard electrode potential ($E^\\ominus$) for the reduction of iron(III) to solid iron: $\\text{Fe}^{3+}\\text{(aq)} + 3\\text{e}^- \\rightleftharpoons \\text{Fe(s)}$, given: $\\text{Fe}^{3+}\\text{(aq)} + \\text{e}^- \\rightleftharpoons \\text{Fe}^{2+}\\text{(aq)} \\quad E_1^\\ominus = +0.77\\text{ V}$ and $\\text{Fe}^{2+}\\text{(aq)} + 2\\text{e}^- \\rightleftharpoons \\text{Fe(s)} \\quad E_2^\\ominus = -0.44\\text{ V}$.",
    options: [
      { text: "+0.33 V" },
      { text: "-0.037 V (using ΔG° = ΔG₁° + ΔG₂°)", isCorrect: true },
      { text: "-1.21 V" },
      { text: "+0.11 V" }
    ],
    correctAnswer: 1,
    explanation: "* Potentials cannot be added directly; $\\Delta G^\\ominus$ values must be summed:\n* $\\Delta G_3^\\ominus = \\Delta G_1^\\ominus + \\Delta G_2^\\ominus \\implies -3FE_3^\\ominus = -1F(E_1^\\ominus) + (-2F)(E_2^\\ominus)$.\n* $3E_3^\\ominus = 1(+0.77) + 2(-0.44) = 0.77 - 0.88 = -0.11\\text{ V}$.\n* $E_3^\\ominus = \\frac{-0.11}{3} = \\mathbf{-0.0367\\text{ V}} \\approx \\mathbf{-0.037\\text{ V}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q13",
    createdAt: "2027-01-25T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_8-2026",
    question: "Using a Frost diagram (plot of $\\Delta G^\\ominus / F = nE^\\ominus$ versus oxidation state $N$), how can one identify whether an intermediate oxidation state of a transition metal will spontaneously undergo DISPROPORTIONATION?",
    options: [
      { text: "If the species lies at a local minimum on the curve" },
      { text: "If the point for the intermediate species lies ABOVE the straight line connecting the two neighboring oxidation states (convex curve / thermodynamic instability)", isCorrect: true },
      { text: "If the oxidation state is zero" },
      { text: "If the slope of the line is exactly zero" }
    ],
    correctAnswer: 1,
    explanation: "* On a Frost diagram, any species lying **above the chord** connecting two adjacent oxidation states has a higher free energy than their average mixture, and will spontaneously disproportionate.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q14",
    createdAt: "2027-01-25T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_9-2026",
    question: "Given the standard electrode potentials: $\\text{O}_2\\text{(g)} + 4\\text{H}^+ + 4\\text{e}^- \\rightleftharpoons 2\\text{H}_2\\text{O} \\quad E^\\ominus = +1.23\\text{ V}$, $\\text{Co}^{3+}\\text{(aq)} + \\text{e}^- \\rightleftharpoons \\text{Co}^{2+}\\text{(aq)} \\quad E^\\ominus = +1.82\\text{ V}$, and $[\\text{Co(NH}_3)_6]^{3+}\\text{(aq)} + \\text{e}^- \\rightleftharpoons [\\text{Co(NH}_3)_6]^{2+}\\text{(aq)} \\quad E^\\ominus = +0.10\\text{ V}$. Why is simple uncomplexed $\\text{Co}^{3+}\\text{(aq)}$ unstable in water (oxidizes water to oxygen), whereas the hexamminecobalt(III) complex $[\\text{Co(NH}_3)_6]^{3+}$ is completely stable in aqueous solution?",
    options: [
      { text: "Ammonia decomposes all cobalt ions" },
      { text: "Uncomplexed Co³⁺ has E° = +1.82 V > +1.23 V, spontaneously oxidizing H₂O to O₂; coordinating with NH₃ stabilizes the +3 state far more than +2, lowering E° to +0.10 V (< +1.23 V), making it thermodynamically incapable of oxidizing water", isCorrect: true },
      { text: "Co³⁺ is insoluble in water" },
      { text: "The amine complex forms a polymer" }
    ],
    correctAnswer: 1,
    explanation: "* Hexammine coordination stabilizes $\\text{Co}^{3+}$ ($d^6$ low spin) enormously compared to $\\text{Co}^{2+}$, shifting $E^\\ominus$ from $+1.82\\text{ V}$ down to $+0.10\\text{ V}$, below the water oxidation potential.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q11",
    createdAt: "2027-01-26T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_10-2026",
    question: "Calculate the total entropy change of the universe ($\\Delta S_{\\text{total}}^\\ominus$ in $\\text{J K}^{-1}\\text{ mol}^{-1}$) at $298\\text{ K}$ for an electrochemical cell with standard cell electromotive force $E_{\\text{cell}}^\\ominus = +0.500\\text{ V}$ involving the transfer of $n = 2$ electrons ($F = 96485\\text{ C mol}^{-1}$).",
    options: [
      { text: "+162 J K⁻¹ mol⁻¹" },
      { text: "+324 J K⁻¹ mol⁻¹", isCorrect: true },
      { text: "-324 J K⁻¹ mol⁻¹" },
      { text: "+648 J K⁻¹ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* $\\Delta S_{\\text{total}}^\\ominus = \\frac{-\\Delta G^\\ominus}{T} = \\frac{n F E_{\\text{cell}}^\\ominus}{T} = \\frac{2 \\times 96485 \\times 0.500}{298} = \\frac{96485}{298} = \\mathbf{+323.78\\text{ J K}^{-1}\\text{ mol}^{-1}} \\approx \\mathbf{+324\\text{ J K}^{-1}\\text{ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q14",
    createdAt: "2027-01-26T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_11-2026",
    question: "In a lead-acid car battery during DISCHARGE, what are the balanced half-equations at the negative anode and positive cathode, and what insoluble product coats both plates?",
    options: [
      { text: "Anode: Pb → Pb²⁺; Cathode: PbO₂ → Pb; product is PbO" },
      { text: "Anode: Pb(s) + HSO₄⁻(aq) → PbSO₄(s) + H⁺(aq) + 2e⁻; Cathode: PbO₂(s) + HSO₄⁻(aq) + 3H⁺(aq) + 2e⁻ → PbSO₄(s) + 2H₂O(l); product is lead(II) sulfate (PbSO₄(s))", isCorrect: true },
      { text: "Anode: H₂ → 2H⁺ + 2e⁻; Cathode: O₂ → 2O²⁻; product is H₂O" },
      { text: "Anode: Pb → Pb⁴⁺; Cathode: Pb²⁺ → Pb; product is PbCl₂" }
    ],
    correctAnswer: 1,
    explanation: "* Overall discharge: $\\text{Pb(s)} + \\text{PbO}_2\\text{(s)} + 2\\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow 2\\text{PbSO}_4\\text{(s)} + 2\\text{H}_2\\text{O(l)}$ ($E_{\\text{cell}} \\approx 2.05\\text{ V}$ per cell). Insoluble $\\mathbf{\\text{PbSO}_4\\text{(s)}}$ coats both electrodes.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q15",
    createdAt: "2027-01-27T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_12-2026",
    question: "A galvanic cell consists of $\\text{Fe}^{3+}/\\text{Fe}^{2+}$ ($E^\\ominus = +0.77\\text{ V}$) and $\\text{Sn}^{4+}/\\text{Sn}^{2+}$ ($E^\\ominus = +0.15\\text{ V}$). If the concentration of $\\text{Fe}^{3+}$ is decreased to $0.0010\\text{ mol dm}^{-3}$ while holding all other ion concentrations at $1.00\\text{ mol dm}^{-3}$, calculate the non-standard cell electromotive force ($E_{\\text{cell}}$) at $298\\text{ K}$ using the Nernst equation ($E_{\\text{cell}} = E_{\\text{cell}}^\\ominus - \\frac{0.0591}{n} \\log_{10} Q$).",
    options: [
      { text: "+0.620 V" },
      { text: "+0.443 V", isCorrect: true },
      { text: "+0.797 V" },
      { text: "+0.266 V" }
    ],
    correctAnswer: 1,
    explanation: "* Reaction: $2\\text{Fe}^{3+} + \\text{Sn}^{2+} \\rightarrow 2\\text{Fe}^{2+} + \\text{Sn}^{4+} \\quad (n = 2)$.\n* $E_{\\text{cell}}^\\ominus = +0.77 - (+0.15) = +0.620\\text{ V}$.\n* $Q = \\frac{[\\text{Fe}^{2+}]^2 [\\text{Sn}^{4+}]}{[\\text{Fe}^{3+}]^2 [\\text{Sn}^{2+}]} = \\frac{(1.00)^2 (1.00)}{(0.0010)^2 (1.00)} = \\frac{1}{10^{-6}} = 10^6$.\n* $\\log_{10} Q = 6$.\n* $E_{\\text{cell}} = 0.620 - \\frac{0.0591}{2}(6) = 0.620 - 3(0.0591) = 0.620 - 0.1773 = \\mathbf{+0.4427\\text{ V}} \\approx \\mathbf{+0.443\\text{ V}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q12",
    createdAt: "2027-01-27T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_13-june2026",
    question: "Why is the substitution of monodentate water ligands in [Cu(H₂O)₆]²⁺ by the hexadentate ligand EDTA⁴⁻ thermodynamically highly favourable, resulting in an exceptionally large stability constant (K_stab)?",
    options: [
      { text: "The chelate effect: 1 complex ion + 1 EDTA⁴⁻ generates 1 complex ion + 6 H₂O molecules, resulting in a large positive increase in system entropy (ΔS_system > 0)", isCorrect: true },
      { text: "EDTA⁴⁻ forms much weaker coordinate bonds than water" },
      { text: "The reaction is extremely endothermic with negative entropy change" },
      { text: "EDTA⁴⁻ oxidises copper(II) to copper(III)" }
    ],
    correctAnswer: 0,
    explanation: "* Reaction: $[\\\\text{Cu(H}_2\\\\text{O)}_6]^{2+} + \\\\text{EDTA}^{4-} \\\\rightleftharpoons [\\\\text{Cu(EDTA)}]^{2-} + 6\\\\text{H}_2\\\\text{O}$.\n* Two reactant particles produce seven product particles in solution, creating a massive increase in positional disorder ($\\\\Delta S_{\\\\text{system}} \\\\gg 0$).\n* Because $\\\\Delta G^\\\\circ = \\\\Delta H^\\\\circ - T\\\\Delta S^\\\\circ$, this large positive entropy makes $\\\\Delta G^\\\\circ$ very negative, giving a huge stability constant.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q11",
    createdAt: "2026-06-19T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv3_14-june2026",
    question: "Why is scandium (Sc) NOT classified as a d-block transition metal according to the IUPAC definition, despite being located in the d-block of the Periodic Table?",
    options: [
      { text: "Sc forms only one stable oxidation state, Sc³⁺ ([Ar] 3d⁰), which has an empty d-subshell and never forms any stable ion with an incompletely filled d-subshell", isCorrect: true },
      { text: "Scandium has a higher electronegativity than all other d-block elements" },
      { text: "Scandium has completely filled d-orbitals in its elemental atom" },
      { text: "Scandium compounds are paramagnetic" }
    ],
    correctAnswer: 0,
    explanation: "* The IUPAC definition of a transition element is an element whose atom has a partially filled d-subshell, or which can give rise to cations with an incomplete d-subshell.\n* Scandium's only common stable ion is $\\\\text{Sc}^{3+}$, with electron configuration $[\\\\text{Ar}] 3d^0$ (empty d-subshell). Thus it does not meet the definition.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q12",
    createdAt: "2026-06-19T10:00:00Z"
  }
];


