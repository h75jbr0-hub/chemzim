import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u4_l2_lv1_1-2026",
    question: "What is entropy ($S$) in chemical thermodynamics?",
    options: [
      { text: "The total heat content of a chemical system" },
      { text: "A quantitative measure of the degree of disorder or the number of energetically equivalent microscopic arrangements (microstates) available to a system", isCorrect: true },
      { text: "The activation energy required for a spontaneous reaction" },
      { text: "The rate at which heat is exchanged with the surroundings" }
    ],
    correctAnswer: 1,
    explanation: "* Entropy ($S$) measures the dispersal of matter and energy among available quantum microstates ($S = k_B \\ln W$), with units $\\text{J K}^{-1}\\text{ mol}^{-1}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q15",
    createdAt: "2026-09-30T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_2-2026",
    question: "In which of the following physical phase transitions does the system experience the LARGEST positive increase in standard entropy ($\Delta S_{\\text{sys}} > 0$)?",
    options: [
      { text: "Freezing liquid water to ice: H₂O(l) → H₂O(s)" },
      { text: "Condensing steam to water: H₂O(g) → H₂O(l)" },
      { text: "Boiling liquid water to steam: H₂O(l) → H₂O(g)", isCorrect: true },
      { text: "Cooling gaseous argon from 400 K to 300 K" }
    ],
    correctAnswer: 2,
    explanation: "* Transition from liquid to gas involves a massive increase in volume and degrees of freedom (translation, rotation, vibration), producing a very large positive entropy change ($\Delta S_{\\text{vaporization}} \\approx +109\\text{ J K}^{-1}\\text{ mol}^{-1}$ for water).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q16",
    createdAt: "2026-09-30T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_3-2026",
    question: "What is the thermodynamic criterion for a chemical reaction to be feasible (spontaneous) at a given temperature $T$ under standard conditions?",
    options: [
      { text: "ΔH_system must be positive" },
      { text: "ΔG_system ≤ 0 (Gibbs free energy change must be zero or negative, meaning ΔS_total ≥ 0)", isCorrect: true },
      { text: "ΔS_system must be negative" },
      { text: "Activation energy must be zero" }
    ],
    correctAnswer: 1,
    explanation: "* Feasibility requires the total entropy of the universe to increase ($\Delta S_{\\text{total}} \\ge 0$).\n* Since $\\Delta G = -T \\Delta S_{\\text{total}}$, this is mathematically equivalent to $\\mathbf{\\Delta G \\le 0}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q13",
    createdAt: "2026-10-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_4-2026",
    question: "How is the entropy change of the surroundings ($\\Delta S_{\\text{surroundings}}$) calculated from the enthalpy change of the reaction ($\\Delta H$)?",
    options: [
      { text: "ΔS_surroundings = +ΔH / T" },
      { text: "ΔS_surroundings = -ΔH / T", isCorrect: true },
      { text: "ΔS_surroundings = -T / ΔH" },
      { text: "ΔS_surroundings = ΔH × T" }
    ],
    correctAnswer: 1,
    explanation: "* An exothermic reaction ($\Delta H < 0$) transfers heat energy to the surroundings, increasing their thermal entropy: $\\Delta S_{\\text{surroundings}} = \\mathbf{-\\frac{\\Delta H}{T}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q16",
    createdAt: "2026-10-01T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_5-2026",
    question: "What is the definition of standard lattice energy (lattice enthalpy, $\\Delta_{\\text{latt}}H^{\\ominus}$) of an ionic compound?",
    options: [
      { text: "The enthalpy change when one mole of gaseous atoms is formed from the element in its standard state" },
      { text: "The enthalpy change when one mole of a solid ionic lattice is formed from its constituent gaseous ions under standard conditions (or dissociated into gaseous ions)", isCorrect: true },
      { text: "The energy required to dissolve one mole of solid in water" },
      { text: "The enthalpy change when one mole of electrons is added to a mole of gaseous atoms" }
    ],
    correctAnswer: 1,
    explanation: "* Lattice energy ($\Delta_{\\text{latt}}H^\\ominus$) is defined as the enthalpy change for: $\\text{M}^{n+}\\text{(g)} + \\text{X}^{m-}\\text{(g)} \\rightarrow \\text{M}_m\\text{X}_n\\text{(s)}$ (exothermic formation from gaseous ions).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q17",
    createdAt: "2026-10-02T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_6-2026",
    question: "Which of the following processes represents the first electron affinity ($\\Delta_{\\text{ea1}}H^{\\ominus}$) of chlorine?",
    options: [
      { text: "Cl(g) → Cl⁺(g) + e⁻" },
      { text: "Cl(g) + e⁻ → Cl⁻(g)", isCorrect: true },
      { text: "1/2 Cl₂(g) + e⁻ → Cl⁻(g)" },
      { text: "Cl₂(g) → 2Cl(g)" }
    ],
    correctAnswer: 1,
    explanation: "* First electron affinity is the enthalpy change when one mole of electrons is added to one mole of isolated gaseous atoms to form one mole of uninegative gaseous ions: $\\text{Cl(g)} + \\text{e}^- \\rightarrow \\text{Cl}^-\\text{(g)}$ (exothermic).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q14",
    createdAt: "2026-10-02T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_7-2026",
    question: "What is the relationship connecting standard enthalpy of solution ($\\Delta_{\\text{sol}}H^{\\ominus}$), lattice enthalpy (formation $\\Delta_{\\text{latt}}H^{\\ominus}$), and enthalpies of hydration ($\\Delta_{\\text{hyd}}H^{\\ominus}$)?",
    options: [
      { text: "Δ_sol H = Δ_latt H + Σ Δ_hyd H" },
      { text: "Δ_sol H = Σ Δ_hyd H - Δ_latt H (or Δ_latt H_dissoc + Σ Δ_hyd H)", isCorrect: true },
      { text: "Δ_sol H = Δ_latt H × Σ Δ_hyd H" },
      { text: "Δ_sol H = Σ Δ_hyd H / T" }
    ],
    correctAnswer: 1,
    explanation: "* By Hess's law cycle: breaking solid lattice to gaseous ions ($-\\Delta_{\\text{latt}}H$) followed by hydrating gaseous ions ($+\\sum \\Delta_{\\text{hyd}}H$) yields $\\mathbf{\\Delta_{\\text{sol}}H = \\sum \\Delta_{\\text{hyd}}H - \\Delta_{\\text{latt}}H}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q17",
    createdAt: "2026-10-03T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_8-2026",
    question: "Why is the second electron affinity of oxygen ($\text{O}^-\text{(g)} + \text{e}^- \rightarrow \text{O}^{2-}\text{(g)}$) ENDOTHERMIC ($\Delta H > 0$), unlike the first electron affinity?",
    options: [
      { text: "Because oxygen has too many neutrons" },
      { text: "Because energy must be supplied to overcome the strong electrostatic repulsion between the negatively charged O⁻ ion and the incoming negative electron (e⁻)", isCorrect: true },
      { text: "Because O²⁻ is an unstable gas" },
      { text: "Because the octet rule is violated" }
    ],
    correctAnswer: 1,
    explanation: "* Adding an electron to an already negatively charged anion requires input of energy to overcome significant electrostatic repulsion between like charges.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q18",
    createdAt: "2026-10-03T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_9-2026",
    question: "What is the third law of thermodynamics concerning entropy?",
    options: [
      { text: "The entropy of the universe is constant" },
      { text: "The entropy of a perfectly crystalline substance is exactly zero at absolute zero temperature (0 K)", isCorrect: true },
      { text: "Energy cannot be created or destroyed" },
      { text: "Spontaneous reactions must always be exothermic" }
    ],
    correctAnswer: 1,
    explanation: "* At $0\\text{ K}$, all molecular motion ceases and there is only a single microscopic arrangement ($W = 1$), so $S = k_B \\ln(1) = \\mathbf{0\\text{ J K}^{-1}\\text{ mol}^{-1}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q22",
    createdAt: "2026-10-10T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_10-2026",
    question: "Which of the following chemical reactions has a POSITIVE change in system entropy ($\Delta S_{\\text{sys}} > 0$)?",
    options: [
      { text: "2SO₂(g) + O₂(g) → 2SO₃(g)" },
      { text: "CaCO₃(s) → CaO(s) + CO₂(g)", isCorrect: true },
      { text: "N₂(g) + 3H₂(g) → 2NH₃(g)" },
      { text: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)" }
    ],
    correctAnswer: 1,
    explanation: "* In $\\text{CaCO}_3\\text{(s)} \\rightarrow \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$, a solid decomposes to produce a mole of gas, greatly increasing system disorder and entropy ($\\Delta n_{\\text{gas}} = +1$).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q23",
    createdAt: "2026-10-10T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_11-2026",
    question: "What are the standard SI units for Gibbs free energy change ($\\Delta G$) and standard molar entropy ($S^{\\ominus}$)?",
    options: [
      { text: "ΔG in J mol⁻¹; S° in kJ mol⁻¹" },
      { text: "ΔG in kJ mol⁻¹ (or J mol⁻¹); S° in J K⁻¹ mol⁻¹", isCorrect: true },
      { text: "ΔG in K; S° in J mol⁻¹" },
      { text: "ΔG in kJ K⁻¹; S° in kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* Gibbs free energy is an energy term expressed in $\\mathbf{\\text{kJ mol}^{-1}}$ (or $\\text{J mol}^{-1}$), while entropy is thermal dispersal per Kelvin: $\\mathbf{\\text{J K}^{-1}\\text{ mol}^{-1}}$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2025 Paper 1 Q19",
    createdAt: "2026-10-11T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_12-2026",
    question: "Which of the following compounds has the most exothermic (most negative) lattice energy?",
    options: [
      { text: "NaCl" },
      { text: "KCl" },
      { text: "MgO", isCorrect: true },
      { text: "CaO" }
    ],
    correctAnswer: 2,
    explanation: "* Lattice energy is proportional to $\\frac{q_1 \\cdot q_2}{r_+ + r_-}$.\n* $\\text{MgO}$ has doubly charged ions ($\text{Mg}^{2+}$ and $\text{O}^{2-}$, charge product $= 4$) and small ionic radii, giving an exceptionally high lattice energy ($-3791\\text{ kJ mol}^{-1}$).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q23",
    createdAt: "2026-10-11T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_13-2026",
    question: "What is the standard enthalpy of atomization ($\\Delta_{\\text{at}}H^{\\ominus}$) of an element?",
    options: [
      { text: "The enthalpy change when one mole of a compound is burned in excess oxygen" },
      { text: "The enthalpy change when one mole of gaseous atoms is formed from the element in its standard physical state under standard conditions", isCorrect: true },
      { text: "The energy required to break one mole of bonds in solution" },
      { text: "The heat released when gaseous ions are hydrated" }
    ],
    correctAnswer: 1,
    explanation: "* Standard enthalpy of atomization produces exactly 1 mole of separated gaseous atoms from the element at $298\\text{ K}$ and $1\\text{ atm}$ (e.g., $\\frac{1}{2}\\text{Cl}_2\\text{(g)} \\rightarrow \\text{Cl(g)}$).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2026 Paper 1 Q24",
    createdAt: "2026-10-12T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_14-2026",
    question: "If a reaction is endothermic ($\\Delta H > 0$) and results in a decrease in system entropy ($\\Delta S_{\\text{sys}} < 0$), under what temperature conditions is the reaction feasible?",
    options: [
      { text: "Feasible at all temperatures" },
      { text: "Feasible only at high temperatures" },
      { text: "Feasible only at low temperatures" },
      { text: "NOT feasible at ANY temperature (ΔG is always positive)", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* $\\Delta G = \\Delta H - T\\Delta S_{\\text{sys}}$.\n* If $\\Delta H > 0$ and $\\Delta S < 0$, the term $-T\\Delta S$ is always positive, meaning $\\Delta G$ remains strictly positive at all possible Kelvin temperatures.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Jan 2026 Paper 1 Q20",
    createdAt: "2026-10-12T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_15-2026",
    question: "What is enthalpy of hydration ($\\Delta_{\\text{hyd}}H^{\\ominus}$) of an ion?",
    options: [
      { text: "The energy required to vaporize liquid water" },
      { text: "The enthalpy change when one mole of specified gaseous ions dissolves in water to form an infinitely dilute aqueous solution", isCorrect: true },
      { text: "The enthalpy change when an ionic solid dissolves in alcohol" },
      { text: "The heat released when solid ice melts" }
    ],
    correctAnswer: 1,
    explanation: "* Hydration enthalpy: $\\text{X}^{n+}\\text{(g)} + \\text{aq} \\rightarrow \\text{X}^{n+}\\text{(aq)}$, which is always exothermic ($\Delta_{\\text{hyd}}H < 0$) due to ion-dipole attractions.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / Oct 2025 Paper 1 Q24",
    createdAt: "2026-10-13T10:00:00Z"
  },
  {
    id: "ex_ed_u4_l2_lv1_16-2026",
    question: "Why does diamond have a lower standard molar entropy ($S^{\\ominus} = 2.4\\text{ J K}^{-1}\\text{ mol}^{-1}$) than graphite ($S^{\\ominus} = 5.7\\text{ J K}^{-1}\\text{ mol}^{-1}$) at 298 K?",
    options: [
      { text: "Diamond has a higher molar mass" },
      { text: "Diamond has a rigid three-dimensional tetrahedral network with restricted vibrational modes, whereas graphite has layered sheets that can vibrate and slide more freely", isCorrect: true },
      { text: "Graphite contains radioactive isotopes" },
      { text: "Diamond conducts electricity" }
    ],
    correctAnswer: 1,
    explanation: "* The rigid 3D covalent lattice of diamond restricts atomic vibrations to fewer accessible energy microstates compared to the looser 2D layered sheets of graphite.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH14/01 / June 2025 Paper 1 Q25",
    createdAt: "2026-10-13T10:00:00Z"
  }
];


