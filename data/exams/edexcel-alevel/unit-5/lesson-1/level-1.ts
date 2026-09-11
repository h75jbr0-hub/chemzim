import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u5_l1_lv1_1-2026",
    question: "What are the precise standard conditions defined for measuring standard electrode potentials ($E^\\ominus$)?",
    options: [
      { text: "T = 273 K, P = 1 atm, concentration = 0.10 mol dm⁻³" },
      { text: "Temperature = 298 K (25 °C), pressure of gases = 100 kPa (1 bar), and concentration of all aqueous ions = 1.00 mol dm⁻³", isCorrect: true },
      { text: "T = 373 K, P = 100 kPa, concentration = 1.00 mol dm⁻³" },
      { text: "Room temperature and any concentration" }
    ],
    correctAnswer: 1,
    explanation: "* Standard conditions: Temperature of $298\\text{ K}$, all aqueous ions at $1.00\\text{ mol dm}^{-3}$, and all gases at $100\\text{ kPa}$ ($1\\text{ bar}$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q1",
    createdAt: "2027-01-08T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_2-2026",
    question: "What is the universally accepted standard reference electrode against which all standard electrode potentials are compared, and what is its defined potential ($E^\\ominus$)?",
    options: [
      { text: "Calomel electrode; E° = +0.24 V" },
      { text: "Standard Hydrogen Electrode (SHE): Pt(s) | H₂(g, 100 kPa) | H⁺(aq, 1.00 mol dm⁻³); defined as exactly 0.00 V at all temperatures", isCorrect: true },
      { text: "Silver/silver chloride electrode; E° = +0.80 V" },
      { text: "Zinc half-cell; E° = -0.76 V" }
    ],
    correctAnswer: 1,
    explanation: "* The Standard Hydrogen Electrode (SHE) is assigned $E^\\ominus = 0.00\\text{ V}$ by international convention at all temperatures.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q2",
    createdAt: "2027-01-08T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_3-2026",
    question: "Why is an inert platinum ($\\text{Pt}$) electrode used in half-cells that involve two aqueous ions (e.g. $\\text{Fe}^{3+}/\\text{Fe}^{2+}$) or a gas and an ion (e.g. $\\text{Cl}_2/\\text{Cl}^-$)?",
    options: [
      { text: "Platinum dissolves to provide ions" },
      { text: "Platinum is chemically unreactive and provides a conductive solid surface for electron transfer between the oxidised and reduced forms", isCorrect: true },
      { text: "Platinum acts as an oxidizing agent" },
      { text: "Platinum neutralizes acidic solutions" }
    ],
    correctAnswer: 1,
    explanation: "* Platinum is inert (does not react with reactants) and provides a catalytic conductive surface for electron transfer.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q1",
    createdAt: "2027-01-09T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_4-2026",
    question: "How is the standard cell electromotive force ($E_{\\text{cell}}^\\ominus$) calculated from the standard electrode potentials of the two half-cells?",
    options: [
      { text: "E°_cell = E°_oxidation - E°_reduction" },
      { text: "E°_cell = E°_reduction (positive electrode / right) - E°_oxidation (negative electrode / left)", isCorrect: true },
      { text: "E°_cell = E°_right × E°_left" },
      { text: "E°_cell = (E°_right + E°_left) / 2" }
    ],
    correctAnswer: 1,
    explanation: "* $E_{\\text{cell}}^\\ominus = E_{\\text{cathode}}^\\ominus - E_{\\text{anode}}^\\ominus = E_{\\text{reduction}}^\\ominus - E_{\\text{oxidation}}^\\ominus = E_{\\text{right}}^\\ominus - E_{\\text{left}}^\\ominus$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q2",
    createdAt: "2027-01-09T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_5-2026",
    question: "Given: $\\text{Zn}^{2+}\\text{(aq)} + 2\\text{e}^- \\rightleftharpoons \\text{Zn(s)} \\quad E^\\ominus = -0.76\\text{ V}$ and $\\text{Cu}^{2+}\\text{(aq)} + 2\\text{e}^- \\rightleftharpoons \\text{Cu(s)} \\quad E^\\ominus = +0.34\\text{ V}$. What is the standard cell potential for the Daniell cell $\\text{Zn(s)} | \\text{Zn}^{2+}\\text{(aq)} || \\text{Cu}^{2+}\\text{(aq)} | \\text{Cu(s)}$?",
    options: [
      { text: "+0.42 V" },
      { text: "+1.10 V", isCorrect: true },
      { text: "-1.10 V" },
      { text: "-0.42 V" }
    ],
    correctAnswer: 1,
    explanation: "* $E_{\\text{cell}}^\\ominus = E^\\ominus(\\text{Cu}^{2+}/\\text{Cu}) - E^\\ominus(\\text{Zn}^{2+}/\\text{Zn}) = (+0.34) - (-0.76) = \\mathbf{+1.10\\text{ V}}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q3",
    createdAt: "2027-01-10T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_6-2026",
    question: "What does a more POSITIVE standard electrode potential ($E^\\ominus$) indicate about a chemical species?",
    options: [
      { text: "The species is a stronger reducing agent that oxidizes easily" },
      { text: "The species has a greater tendency to gain electrons (be reduced), making the oxidised form a stronger oxidizing agent", isCorrect: true },
      { text: "The reaction is extremely slow" },
      { text: "The species is chemically unreactive" }
    ],
    correctAnswer: 1,
    explanation: "* More positive $E^\\ominus \\implies$ equilibrium lies further to the right (reduction is favored), meaning the species on the left is a stronger oxidizing agent (e.g. $\\text{F}_2$, $\\text{MnO}_4^-$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q2",
    createdAt: "2027-01-10T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_7-2026",
    question: "In IUPAC standard cell notation (e.g. $\\text{Zn(s)} | \\text{Zn}^{2+}\\text{(aq)} || \\text{Cu}^{2+}\\text{(aq)} | \\text{Cu(s)}$), what do the single vertical line ($|$) and the double vertical line ($||$) represent respectively?",
    options: [
      { text: "Single line = wire; Double line = voltmeter" },
      { text: "Single line (|) = phase boundary between different states (e.g. solid/aqueous); Double line (||) = salt bridge connecting the two half-cells", isCorrect: true },
      { text: "Single line = covalent bond; Double line = double bond" },
      { text: "Single line = positive electrode; Double line = negative electrode" }
    ],
    correctAnswer: 1,
    explanation: "* $|$ denotes a phase boundary (e.g., solid metal and aqueous solution), and $||$ represents the ionic contact through the salt bridge.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q3",
    createdAt: "2027-01-11T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_8-2026",
    question: "What is the primary thermodynamic condition for a redox reaction to be thermodynamically feasible under standard conditions?",
    options: [
      { text: "E°_cell must be zero" },
      { text: "E°_cell must be positive (E°_cell > 0, corresponding to ΔG° < 0 and ln K > 0)", isCorrect: true },
      { text: "E°_cell must be negative" },
      { text: "ΔS°_surroundings must be negative" }
    ],
    correctAnswer: 1,
    explanation: "* Feasibility requires $\\Delta G^\\ominus = -n F E_{\\text{cell}}^\\ominus < 0 \\implies \\mathbf{E_{\\text{cell}}^\\ominus > 0\\text{ V}}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q4",
    createdAt: "2027-01-11T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_9-2026",
    question: "Which of the following half-equations correctly represents the standard reduction reaction occurring at the Standard Hydrogen Electrode (SHE)?",
    options: [
      { text: "H₂(g) → 2H⁺(aq) + 2e⁻" },
      { text: "2H⁺(aq, 1.00 mol dm⁻³) + 2e⁻ ⇌ H₂(g, 100 kPa)", isCorrect: true },
      { text: "2H₂O(l) + 2e⁻ ⇌ H₂(g) + 2OH⁻(aq)" },
      { text: "H⁺(aq) + OH⁻(aq) ⇌ H₂O(l)" }
    ],
    correctAnswer: 1,
    explanation: "* By IUPAC standard, all standard electrode potentials are written as reduction equilibria: $\\mathbf{2\\text{H}^+\\text{(aq)} + 2\\text{e}^- \\rightleftharpoons \\text{H}_2\\text{(g)}}$ with $E^\\ominus = 0.00\\text{ V}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q8",
    createdAt: "2027-01-18T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_10-2026",
    question: "Why must the voltmeter used to measure cell electromotive force ($E_{\\text{cell}}$) have a HIGH INTERNAL RESISTANCE (high impedance)?",
    options: [
      { text: "To prevent electric shocks to the experimenter" },
      { text: "To draw virtually zero current from the electrochemical cell, preventing polarization and ensuring the potential difference is measured under true reversible equilibrium conditions", isCorrect: true },
      { text: "To heat up the electrolyte solutions" },
      { text: "To measure current instead of voltage" }
    ],
    correctAnswer: 1,
    explanation: "* If significant current flowed, concentrations of ions in the half-cells would change, altering the potential away from its true equilibrium standard value.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q9",
    createdAt: "2027-01-18T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_11-2026",
    question: "What is the direction of electron flow in the external circuit of an electrochemical cell (e.g. $\\text{Zn} - \\text{Cu}$ cell)?",
    options: [
      { text: "From the more positive electrode (cathode) to the more negative electrode (anode)" },
      { text: "From the more negative electrode (anode / oxidation site) to the more positive electrode (cathode / reduction site)", isCorrect: true },
      { text: "Electrons flow through the salt bridge only" },
      { text: "Electrons flow in both directions simultaneously" }
    ],
    correctAnswer: 1,
    explanation: "* Oxidation occurs at the negative electrode, releasing electrons which flow through the wire to the positive electrode where reduction consumes them.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q7",
    createdAt: "2027-01-19T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_12-2026",
    question: "Given: $\\text{Ag}^+\\text{(aq)} + \\text{e}^- \\rightleftharpoons \\text{Ag(s)} \\quad E^\\ominus = +0.80\\text{ V}$ and $\\text{Mg}^{2+}\\text{(aq)} + 2\\text{e}^- \\rightleftharpoons \\text{Mg(s)} \\quad E^\\ominus = -2.37\\text{ V}$. What is the standard cell potential ($E_{\\text{cell}}^\\ominus$) for the cell: $\\text{Mg(s)} | \\text{Mg}^{2+}\\text{(aq)} || \\text{Ag}^+\\text{(aq)} | \\text{Ag(s)}$?",
    options: [
      { text: "+1.57 V" },
      { text: "+3.17 V", isCorrect: true },
      { text: "-3.17 V" },
      { text: "-0.77 V" }
    ],
    correctAnswer: 1,
    explanation: "* $E_{\\text{cell}}^\\ominus = E^\\ominus(\\text{Ag}^+/\\text{Ag}) - E^\\ominus(\\text{Mg}^{2+}/\\text{Mg}) = (+0.80) - (-2.37) = \\mathbf{+3.17\\text{ V}}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q9",
    createdAt: "2027-01-19T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_13-2026",
    question: "Why is a potassium chloride ($\\text{KCl}$) salt bridge UNACCEPTABLE when constructing an electrochemical cell containing silver ions ($\\text{Ag}^+$) or lead(II) ions ($\\text{Pb}^{2+}$)?",
    options: [
      { text: "KCl is a non-electrolyte" },
      { text: "Chloride ions (Cl⁻) react with Ag⁺ or Pb²⁺ to form insoluble precipitates (AgCl(s) or PbCl₂(s)), which clog the junction and drastically alter ion concentrations", isCorrect: true },
      { text: "Potassium oxidizes silver" },
      { text: "KCl evaporates at room temperature" }
    ],
    correctAnswer: 1,
    explanation: "* Precipitation of $\\text{AgCl(s)}$ depletes free $\\text{Ag}^+$ ions and blocks the salt bridge; a potassium nitrate ($\\text{KNO}_3$) bridge must be used instead.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q10",
    createdAt: "2027-01-20T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_14-2026",
    question: "What does the Faraday constant ($F = 96485\\text{ C mol}^{-1}$) represent physically?",
    options: [
      { text: "The voltage produced by 1 mole of battery" },
      { text: "The electric charge carried by exactly one mole of electrons: F = L × e (where L = Avogadro's constant, e = elementary charge)", isCorrect: true },
      { text: "The speed of light in a vacuum" },
      { text: "The number of atoms in a gram of hydrogen" }
    ],
    correctAnswer: 1,
    explanation: "* $F = (6.022 \\times 10^{23}\\text{ mol}^{-1}) \\times (1.602 \\times 10^{-19}\\text{ C}) = \\mathbf{96485\\text{ C mol}^{-1}}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q8",
    createdAt: "2027-01-20T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_15-2026",
    question: "In an acidic hydrogen-oxygen fuel cell, what reaction occurs at the cathode (positive electrode)?",
    options: [
      { text: "2H⁺ + 2e⁻ → H₂" },
      { text: "O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)", isCorrect: true },
      { text: "H₂ → 2H⁺ + 2e⁻" },
      { text: "O₂ + 2H₂O + 4e⁻ → 4OH⁻" }
    ],
    correctAnswer: 1,
    explanation: "* In an acidic electrolyte (e.g. phosphoric acid or proton-exchange membrane), oxygen is reduced by reacting with protons: $\\mathbf{\\text{O}_2 + 4\\text{H}^+ + 4\\text{e}^- \\rightarrow 2\\text{H}_2\\text{O}}$ ($E^\\ominus = +1.23\\text{ V}$).",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2025 Paper 1 Q10",
    createdAt: "2027-01-21T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l1_lv1_16-2026",
    question: "What is the oxidation state of chlorine in the chlorate(V) ion ($\\text{ClO}_3^-$)?",
    options: [
      { text: "+1" },
      { text: "+3" },
      { text: "+5", isCorrect: true },
      { text: "+7" }
    ],
    correctAnswer: 2,
    explanation: "* $\\text{Oxidation state of Cl} + 3(-2) = -1 \\implies \\text{Oxidation state of Cl} = -1 + 6 = \\mathbf{+5}$.",
    level: 1,
    topic: "edexcel-unit-5",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q11",
    createdAt: "2027-01-21T10:00:00Z"
  }
];


