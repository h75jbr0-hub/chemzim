import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u5_l1_lv2_1-2026",
    question: "Why might a redox reaction with a positive standard cell potential ($E_{\\text{cell}}^\\ominus = +0.65\\text{ V} > 0$) NOT occur at a measurable rate under standard conditions at $298\\text{ K}$?",
    options: [
      { text: "Because the equilibrium constant is too small" },
      { text: "The reaction has a high activation energy (kinetic inhibition), resulting in an extremely slow rate despite being thermodynamically feasible", isCorrect: true },
      { text: "Because positive E° values violate Gibbs free energy laws" },
      { text: "Because electron transfer is impossible in liquid phase" }
    ],
    correctAnswer: 1,
    explanation: "* $E^\\ominus$ values predict thermodynamic feasibility only, not reaction rate (kinetics). High activation energy ($E_a$) creates **kinetic stability**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q4",
    createdAt: "2027-01-12T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv2_2-2026",
    question: "Given: $\\text{Cl}_2 + 2\\text{e}^- \\rightleftharpoons 2\\text{Cl}^- \\quad E^\\ominus = +1.36\\text{ V}$, $\\text{Br}_2 + 2\\text{e}^- \\rightleftharpoons 2\\text{Br}^- \\quad E^\\ominus = +1.09\\text{ V}$, and $\\text{I}_2 + 2\\text{e}^- \\rightleftharpoons 2\\text{I}^- \\quad E^\\ominus = +0.54\\text{ V}$. Which of the following displacement reactions is thermodynamically FEASIBLE under standard conditions?",
    options: [
      { text: "I₂(aq) + 2Cl⁻(aq) → 2I⁻(aq) + Cl₂(aq)" },
      { text: "Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq) (E°_cell = +0.27 V)", isCorrect: true },
      { text: "Br₂(aq) + 2Cl⁻(aq) → 2Br⁻(aq) + Cl₂(aq)" },
      { text: "I₂(aq) + 2Br⁻(aq) → 2I⁻(aq) + Br₂(aq)" }
    ],
    correctAnswer: 1,
    explanation: "* $E_{\\text{cell}}^\\ominus = E^\\ominus(\\text{Cl}_2/\\text{Cl}^-) - E^\\ominus(\\text{Br}_2/\\text{Br}^-) = +1.36 - 1.09 = \\mathbf{+0.27\\text{ V} > 0}$ (feasible).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q5",
    createdAt: "2027-01-12T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv2_3-2026",
    question: "What is the mathematical equation connecting standard cell electromotive force ($E_{\\text{cell}}^\\ominus$) with the standard Gibbs free energy change ($\\Delta G^\\ominus$)?",
    options: [
      { text: "ΔG° = -nFE°_cell (where n = moles of electrons transferred, F = Faraday constant ≈ 96485 C mol⁻¹)", isCorrect: true },
      { text: "ΔG° = +nFE°_cell" },
      { text: "ΔG° = -RT / (nFE°_cell)" },
      { text: "ΔG° = E°_cell / nF" }
    ],
    correctAnswer: 0,
    explanation: "* $\\mathbf{\\Delta G^\\ominus = -n F E_{\\text{cell}}^\\ominus}$. When $E_{\\text{cell}}^\\ominus > 0$, $\\Delta G^\\ominus < 0$, meaning the reaction is spontaneous/feasible.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q3",
    createdAt: "2027-01-13T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv2_4-2026",
    question: "For the half-cell: $\\text{Cu}^{2+}\\text{(aq)} + 2\\text{e}^- \\rightleftharpoons \\text{Cu(s)} \\quad E^\\ominus = +0.34\\text{ V}$, how does the electrode potential ($E$) change if the concentration of aqueous $\\text{Cu}^{2+}$ ions is diluted from $1.00\\text{ mol dm}^{-3}$ to $0.010\\text{ mol dm}^{-3}$?",
    options: [
      { text: "E becomes more positive" },
      { text: "E becomes less positive (decreases below +0.34 V) because lowering [Cu²⁺] shifts the equilibrium to the left (by Le Chatelier's principle), favoring electron release", isCorrect: true },
      { text: "E remains strictly at +0.34 V" },
      { text: "E becomes zero immediately" }
    ],
    correctAnswer: 1,
    explanation: "* Decreasing $[\\text{Cu}^{2+}]$ shifts equilibrium left: $\\text{Cu(s)} \\rightarrow \\text{Cu}^{2+} + 2\\text{e}^-$, making the electrode potential **less positive / lower**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q5",
    createdAt: "2027-01-13T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv2_5-2026",
    question: "In an alkaline hydrogen-oxygen fuel cell, what are the half-cell reactions occurring at the anode (negative electrode) and cathode (positive electrode) respectively?",
    options: [
      { text: "Anode: O₂ + 4e⁻ → 2O²⁻; Cathode: 2H₂ → 4H⁺ + 4e⁻" },
      { text: "Anode: 2H₂(g) + 4OH⁻(aq) → 4H₂O(l) + 4e⁻; Cathode: O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq)", isCorrect: true },
      { text: "Anode: 2H⁺ + 2e⁻ → H₂; Cathode: 2OH⁻ → H₂O + ½O₂ + 2e⁻" },
      { text: "Anode: H₂ → 2H⁺ + 2e⁻; Cathode: O₂ → 2O + 2e⁻" }
    ],
    correctAnswer: 1,
    explanation: "* Alkaline fuel cell: Anode oxidation: $2\\text{H}_2 + 4\\text{OH}^- \\rightarrow 4\\text{H}_2\\text{O} + 4\\text{e}^-$; Cathode reduction: $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4\\text{e}^- \\rightarrow 4\\text{OH}^-$. Overall: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$ ($E^\\ominus = +1.23\\text{ V}$).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q6",
    createdAt: "2027-01-14T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv2_6-2026",
    question: "What is the key environmental and operational advantage of a hydrogen fuel cell compared to a traditional internal combustion petrol engine?",
    options: [
      { text: "Fuel cells use toxic heavy metals that never deplete" },
      { text: "The only chemical exhaust product is harmless water (H₂O), eliminating emissions of greenhouse gas CO₂, toxic CO, NO_x, and unburnt particulates at the point of use", isCorrect: true },
      { text: "Fuel cells operate without needing any oxygen" },
      { text: "Fuel cells generate electricity without consuming reactants" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrogen fuel cells emit only pure water vapor ($\text{H}_2\\text{O}$) and operate at higher energy conversion efficiency than internal combustion engines.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q4",
    createdAt: "2027-01-14T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv2_7-2026",
    question: "Given: $\\text{Cr}_2\\text{O}_7^{2-}\\text{(aq)} + 14\\text{H}^+ + 6\\text{e}^- \\rightleftharpoons 2\\text{Cr}^{3+}\\text{(aq)} + 7\\text{H}_2\\text{O} \\quad E^\\ominus = +1.33\\text{ V}$. How does increasing the $pH$ of the solution (by adding aqueous $\\text{NaOH}$) affect the oxidizing ability and electrode potential of this half-cell?",
    options: [
      { text: "E becomes more positive; oxidizing ability increases" },
      { text: "E becomes less positive (decreases); oxidizing ability decreases because lowering [H⁺] shifts the equilibrium to the left", isCorrect: true },
      { text: "E remains unchanged" },
      { text: "E doubles in magnitude" }
    ],
    correctAnswer: 1,
    explanation: "* Increasing $pH$ removes $\\text{H}^+$ ions. By Le Chatelier's principle, the equilibrium shifts left, reducing the tendency to gain electrons and making the potential **less positive**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q11",
    createdAt: "2027-01-22T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv2_8-2026",
    question: "Which of the following transitions corresponds to a disproportionation reaction?",
    options: [
      { text: "2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻" },
      { text: "3Cl₂(g) + 6OH⁻(aq) → 5Cl⁻(aq) + ClO₃⁻(aq) + 3H₂O(l) (in hot concentrated alkali)", isCorrect: true },
      { text: "Zn + 2HCl → ZnCl₂ + H₂" },
      { text: "Cu²⁺ + 4NH₃ → [Cu(NH₃)₄]²⁺" }
    ],
    correctAnswer: 1,
    explanation: "* In hot concentrated $\\text{NaOH}$, chlorine ($\text{Cl}_2$, oxidation state $0$) is simultaneously reduced to $\\text{Cl}^-$ ($-1$) and oxidized to $\\text{ClO}_3^-$ ($+5$): a classic **disproportionation**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q12",
    createdAt: "2027-01-22T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv2_9-2026",
    question: "In a lithium-ion rechargeable battery, what process occurs during DISCHARGE at the positive electrode (cathode)?",
    options: [
      { text: "Lithium metal dissolves in water" },
      { text: "Lithium ions (Li⁺) insert (intercalate) into the cobalt oxide lattice (Li_{1-x}CoO₂ + xLi⁺ + xe⁻ → LiCoO₂) while cobalt is reduced from +4 to +3", isCorrect: true },
      { text: "Lithium evaporates as vapor" },
      { text: "Oxygen gas is evolved" }
    ],
    correctAnswer: 1,
    explanation: "* During discharge, $\\text{Li}^+$ ions de-intercalate from the graphite anode and intercalate into the $\\text{CoO}_2$ cathode lattice, accompanied by cobalt reduction.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q9",
    createdAt: "2027-01-23T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv2_10-2026",
    question: "Given: $\\text{Fe}^{3+}\\text{(aq)} + \\text{e}^- \\rightleftharpoons \\text{Fe}^{2+}\\text{(aq)} \\quad E^\\ominus = +0.77\\text{ V}$ and $\\text{I}_2\\text{(aq)} + 2\\text{e}^- \\rightleftharpoons 2\\text{I}^-\\text{(aq)} \\quad E^\\ominus = +0.54\\text{ V}$. What is the overall balanced equation and standard cell potential for the spontaneous reaction when solutions of $\\text{Fe}^{3+}$ and $\\text{I}^-$ are mixed?",
    options: [
      { text: "2Fe²⁺ + I₂ → 2Fe³⁺ + 2I⁻; E°_cell = -0.23 V" },
      { text: "2Fe³⁺(aq) + 2I⁻(aq) → 2Fe²⁺(aq) + I₂(aq); E°_cell = +0.23 V", isCorrect: true },
      { text: "Fe³⁺ + I⁻ → Fe²⁺ + I; E°_cell = +1.31 V" },
      { text: "No reaction occurs" }
    ],
    correctAnswer: 1,
    explanation: "* $E_{\\text{cell}}^\\ominus = E^\\ominus(\\text{Fe}^{3+}/\\text{Fe}^{2+}) - E^\\ominus(\\text{I}_2/\\text{I}^-) = (+0.77) - (+0.54) = \\mathbf{+0.23\\text{ V} > 0}$. Reaction: $2\\text{Fe}^{3+} + 2\\text{I}^- \\rightarrow 2\\text{Fe}^{2+} + \\text{I}_2$.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q12",
    createdAt: "2027-01-23T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv2_11-2026",
    question: "What is the standard cell notation for the electrochemical cell set up between the $\\text{Fe}^{3+}/\\text{Fe}^{2+}$ half-cell and the $\\text{MnO}_4^-/\\text{Mn}^{2+}$ half-cell in acidic solution?",
    options: [
      { text: "Fe(s) | Fe²⁺(aq) || MnO₄⁻(aq) | Mn(s)" },
      { text: "Pt(s) | Fe²⁺(aq), Fe³⁺(aq) || MnO₄⁻(aq), H⁺(aq), Mn²⁺(aq) | Pt(s)", isCorrect: true },
      { text: "Pt(s) | Fe³⁺(aq) || MnO₄⁻(aq) | Pt(s)" },
      { text: "Fe²⁺(aq) | Fe³⁺(aq) || MnO₄⁻(aq) | Mn²⁺(aq)" }
    ],
    correctAnswer: 1,
    explanation: "* Both half-cells consist entirely of aqueous ions, so inert **Pt(s)** electrodes are required on both sides, with comma separators between species in the same aqueous phase.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q13",
    createdAt: "2027-01-24T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv2_12-2026",
    question: "Why is a fuel cell fundamentally different from a primary or secondary chemical battery in terms of continuous electrical energy supply?",
    options: [
      { text: "A fuel cell stores electrical charge on metallic plates" },
      { text: "A fuel cell does not store chemical reactants internally; it operates continuously and indefinitely as long as an external supply of fuel (H₂) and oxidant (O₂) is continuously fed into the cell", isCorrect: true },
      { text: "A fuel cell only works in direct sunlight" },
      { text: "A fuel cell does not produce direct current" }
    ],
    correctAnswer: 1,
    explanation: "* Batteries contain a fixed internal mass of reactants and run down when exhausted; fuel cells receive an external continuous flow of fuel and never need recharging as long as fuel is supplied.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q10",
    createdAt: "2027-01-24T10:00:00Z"
  }
];


