import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u2_l3_lv3_1-2026",
    question: "When solid potassium iodide (KI) reacts with concentrated sulfuric acid (H₂SO₄), a complex mixture of products is formed including purple iodine vapor, steamy acidic fumes, yellow solid sulfur, and a gas with a foul rotten-egg smell. What is the identity of the rotten-egg smelling gas, and what is the change in oxidation number of sulfur in forming it?",
    options: [
      { text: "SO₂; sulfur changes from +6 to +4" },
      { text: "H₂S (Hydrogen sulfide); sulfur changes from +6 in H₂SO₄ to -2 in H₂S (a change of -8)", isCorrect: true },
      { text: "SO₃; sulfur changes from +6 to +3" },
      { text: "S₈; sulfur changes from +6 to 0" }
    ],
    correctAnswer: 1,
    explanation: "* Iodide is a powerful reducing agent capable of reducing sulfuric acid through multiple steps: $\\text{SO}_4^{2-} (+6) \\rightarrow \\text{SO}_2 (+4) \\rightarrow \\text{S} (0) \\rightarrow \\text{H}_2\\text{S} (-2)$.\n* The toxic rotten-egg smelling gas is hydrogen sulfide ($\\text{H}_2\\text{S}$), involving an $8$-electron reduction.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q20",
    createdAt: "2026-07-30T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_2-2026",
    question: "Balance the redox equation in acidic conditions for the oxidation of iron(II) ions by dichromate(VI) ions: $a\\text{Fe}^{2+} + b\\text{Cr}_2\\text{O}_7^{2-} + c\\text{H}^+ \\rightarrow d\\text{Fe}^{3+} + e\\text{Cr}^{3+} + f\\text{H}_2\\text{O}$. What are the stoichiometric coefficients $a, b,$ and $e$?",
    options: [
      { text: "a = 5, b = 1, e = 2" },
      { text: "a = 6, b = 1, e = 2", isCorrect: true },
      { text: "a = 6, b = 2, e = 1" },
      { text: "a = 3, b = 1, e = 2" }
    ],
    correctAnswer: 1,
    explanation: "* Oxidation half: $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + \\text{e}^-$ (multiply by 6).\n* Reduction half: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{e}^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$.\n* Combined: $6\\text{Fe}^{2+} + \\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ \\rightarrow 6\\text{Fe}^{3+} + 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$.\n* Therefore: $a = 6, b = 1, e = 2$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q21",
    createdAt: "2026-07-30T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_3-2026",
    question: "When chlorine gas is reacted with HOT, concentrated aqueous sodium hydroxide solution at 70 °C, disproportionation yields sodium chloride and compound Z. What is the systematic IUPAC name and oxidation state of chlorine in compound Z?",
    options: [
      { text: "Sodium chlorate(I), +1" },
      { text: "Sodium chlorate(III), +3" },
      { text: "Sodium chlorate(V) (NaClO₃), +5", isCorrect: true },
      { text: "Sodium perchlorate(VII), +7" }
    ],
    correctAnswer: 2,
    explanation: "* In hot concentrated $\\text{NaOH}$: $3\\text{Cl}_2 + 6\\text{NaOH} \\rightarrow 5\\text{NaCl} + \\text{NaClO}_3 + 3\\text{H}_2\\text{O}$.\n* Chlorine is oxidized from $0$ to **$+5$** in **sodium chlorate(V)** ($\\text{NaClO}_3$).",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q17",
    createdAt: "2026-07-31T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_4-2026",
    question: "Why does the thermal decomposition of lithium carbonate ($\text{Li}_2\text{CO}_3$) occur readily upon gentle heating, whereas all other Group 1 carbonates (e.g., Na₂CO₃, K₂CO₃) do NOT decompose under standard laboratory Bunsen heating?",
    options: [
      { text: "Lithium has a negative oxidation state" },
      { text: "The very small radius of the Li⁺ cation gives it an anomalously high charge density, enabling it to polarize and weaken the C–O bonds in the neighboring carbonate ion (diagonal relationship with magnesium)", isCorrect: true },
      { text: "Lithium carbonate is a molecular covalent gas" },
      { text: "Other Group 1 carbonates are liquids at room temperature" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Li}^+$ is exceptionally small, conferring very high polarizing power that distorts $\\text{CO}_3^{2-}$ to decompose into $\\text{Li}_2\\text{O}$ and $\\text{CO}_2$, unlike larger $\\text{Na}^+$ and $\\text{K}^+$ ions.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q21",
    createdAt: "2026-07-31T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_5-2026",
    question: "A $25.0\\text{ cm}^3$ sample of hydrogen peroxide ($\\text{H}_2\\text{O}_2$) is titrated with acidified $0.0200\\text{ mol dm}^{-3}$ potassium manganate(VII), $\\text{KMnO}_4$. The reaction is: $2\\text{MnO}_4^- + 5\\text{H}_2\\text{O}_2 + 6\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 5\\text{O}_2 + 8\\text{H}_2\\text{O}$. Exactly $20.0\\text{ cm}^3$ of $\\text{KMnO}_4$ is required for complete reaction. Calculate the molar concentration of the $\\text{H}_2\\text{O}_2$ solution.",
    options: [
      { text: "0.0160 mol dm⁻³" },
      { text: "0.0400 mol dm⁻³", isCorrect: true },
      { text: "0.0800 mol dm⁻³" },
      { text: "0.1000 mol dm⁻³" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $\\text{MnO}_4^- = 0.0200 \\times 0.0200 = 4.00 \\times 10^{-4}\\text{ mol}$.\n* Mole ratio $\\text{H}_2\\text{O}_2 : \\text{MnO}_4^- = 5 : 2$.\n* Moles of $\\text{H}_2\\text{O}_2 = (4.00 \\times 10^{-4}) \\times \\frac{5}{2} = 1.00 \\times 10^{-3}\\text{ mol}$.\n* Concentration of $\\text{H}_2\\text{O}_2 = \\frac{1.00 \\times 10^{-3}\\text{ mol}}{0.0250\\text{ dm}^3} = \\mathbf{0.0400\\text{ mol dm}^{-3}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q22",
    createdAt: "2026-08-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_6-2026",
    question: "Why is hydrochloric acid (HCl) NEVER used to acidify potassium manganate(VII) solutions in redox titrations?",
    options: [
      { text: "HCl neutralizes the manganate(VII) ion completely" },
      { text: "Manganate(VII) is a powerful enough oxidizing agent to oxidize chloride ions (Cl⁻) in HCl into toxic chlorine gas (Cl₂), causing an inaccurate titre value", isCorrect: true },
      { text: "HCl turns the purple solution into an insoluble blue solid" },
      { text: "HCl causes water to freeze at room temperature" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{MnO}_4^-$ has a higher standard electrode potential than the $\\text{Cl}_2/\\text{Cl}^-$ couple and would oxidize $\\text{Cl}^-$ to $\\text{Cl}_2$, consuming extra $\\text{KMnO}_4$ and creating dangerous chlorine gas.\n* Dilute sulfuric acid ($\\text{H}_2\\text{SO}_4$) must always be used instead.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q18",
    createdAt: "2026-08-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_7-2026",
    question: "A sample of $1.50\\text{ g}$ of an iron ore was dissolved in acid and all the iron converted to $\\text{Fe}^{2+}\\text{(aq)}$. The solution was titrated against $0.0250\\text{ mol dm}^{-3}$ potassium dichromate(VI) solution, and $32.40\\text{ cm}^3$ was required to reach the end-point. Calculate the percentage by mass of iron in the ore. ($A_r[\\text{Fe}] = 55.8$)",
    options: [
      { text: "18.1%", isCorrect: true },
      { text: "3.01%" },
      { text: "9.05%" },
      { text: "10.8%" }
    ],
    correctAnswer: 0,
    explanation: "* Balanced equation: $6\\text{Fe}^{2+} + \\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ \\rightarrow 6\\text{Fe}^{3+} + 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$.\n* Moles of $\\text{Cr}_2\\text{O}_7^{2-} = 0.0250 \\times 0.03240 = 8.10 \\times 10^{-4}\\text{ mol}$.\n* Moles of $\\text{Fe}^{2+} = 6 \\times 8.10 \\times 10^{-4} = 4.86 \\times 10^{-3}\\text{ mol}$.\n* Mass of Fe $= 4.86 \\times 10^{-3} \\times 55.8 = 0.2712\\text{ g}$.\n* Percentage of Fe $= \\frac{0.2712}{1.50} \\times 100 = \\mathbf{18.08\\%} \\approx \\mathbf{18.1\\%}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q24",
    createdAt: "2026-08-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_8-2026",
    question: "Which of the following describes the mechanism by which magnesium ions decompose carbonates at lower temperatures than barium ions?",
    options: [
      { text: "Magnesium ions are larger and have lower lattice energy" },
      { text: "The smaller Mg²⁺ ion has a higher charge density and polarizes the large carbonate ion more strongly, weakening the carbon-oxygen covalent bonds", isCorrect: true },
      { text: "Barium ions are more electronegative and attract electrons away from carbonate" },
      { text: "Magnesium carbonate decomposes into magnesium metal and oxygen gas" }
    ],
    correctAnswer: 1,
    explanation: "* Cation charge density is inversely proportional to radius.\n* $\\text{Mg}^{2+}$ ($0.072\\text{ nm}$) is much smaller than $\\text{Ba}^{2+}$ ($0.135\\text{ nm}$).\n* The high charge density of $\\text{Mg}^{2+}$ polarizes the electron cloud of the carbonate ion, making it easier for the $\\text{CO}_3^{2-}$ to break apart into $\\text{CO}_2$ and oxide.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q23",
    createdAt: "2026-08-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_9-2026",
    question: "The bond enthalpy of the fluorine-fluorine bond (F–F) is anomalously low ($158\\text{ kJ mol}^{-1}$) compared to the chlorine-chlorine bond ($242\\text{ kJ mol}^{-1}$). What is the reason for this exception in Group 7?",
    options: [
      { text: "Fluorine atoms are too large to overlap effectively" },
      { text: "The F atom is so small that the lone pairs on the two bonded fluorine atoms are close together, resulting in significant electron-electron repulsion that weakens the single covalent bond", isCorrect: true },
      { text: "Fluorine contains d-orbitals which participate in anti-bonding" },
      { text: "Chlorine has higher electronegativity than fluorine" }
    ],
    correctAnswer: 1,
    explanation: "* The very small atomic size of fluorine brings the lone pairs on adjacent atoms into close proximity.\n* The resulting repulsion between these non-bonding electron pairs weakens the $\\text{F}-\\text{F}$ covalent bond relative to $\\text{Cl}-\\text{Cl}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q31",
    createdAt: "2026-08-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_10-2026",
    question: "Identify the oxidation state of the transition metal in the complex ion $[\\text{Fe(H}_2\\text{O)}_5(\\text{SCN})]^{2+}$.",
    options: [
      { text: "+1" },
      { text: "+2" },
      { text: "+3", isCorrect: true },
      { text: "+4" }
    ],
    correctAnswer: 2,
    explanation: "* Water ($\\text{H}_2\\text{O}$) is a neutral ligand (charge $= 0$).\n* Thiocyanate ($\\text{SCN}^-$) carries a charge of $-1$.\n* Let $x$ be the oxidation state of Fe:\n* $x + 5(0) + (-1) = +2 \\implies x - 1 = +2 \\implies x = \\mathbf{+3}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Oct 2025 Paper 1 Q25",
    createdAt: "2026-08-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_11-2026",
    question: "Explain why reacting chlorine with hot, concentrated aqueous sodium hydroxide results in disproportionation to a higher oxidation state of chlorine (+5) compared to cold, dilute aqueous sodium hydroxide (+1).",
    options: [
      { text: "Hot water contains more dissolved oxygen gas" },
      { text: "The chlorate(I) ion (ClO⁻) formed in cold conditions is thermodynamically unstable and disproportionates at higher temperatures into chlorate(V) (ClO₃⁻) and chloride (Cl⁻) ions", isCorrect: true },
      { text: "Hot NaOH acts as a strong reducing agent" },
      { text: "Chlorine undergoes complete ionization into protons and electrons at high temperature" }
    ],
    correctAnswer: 1,
    explanation: "* In cold conditions, the reaction forms $\\text{ClO}^-$.\n* However, $\\text{ClO}^-$ is unstable and undergoes self-disproportionation when heated:\n* $3\\text{ClO}^-\\text{(aq)} \\rightarrow \\text{ClO}_3^-\\text{(aq)} + 2\\text{Cl}^-\\text{(aq)}$.\n* Thus, hot conditions yield the more stable $+5$ oxidation state in $\\text{ClO}_3^-$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / Jan 2026 Paper 1 Q24",
    createdAt: "2026-08-18T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_12-2026",
    question: "A $20.00\\text{ cm}^3$ solution of iodine (I₂) is titrated against $0.100\\text{ mol dm}^{-3}$ sodium thiosulfate (Na₂S₂O₃) using starch indicator. The volume of thiosulfate required is $24.80\\text{ cm}^3$. Calculate the concentration of the iodine solution.",
    options: [
      { text: "0.0620 mol dm⁻³", isCorrect: true },
      { text: "0.1240 mol dm⁻³" },
      { text: "0.2480 mol dm⁻³" },
      { text: "0.0310 mol dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "* Balanced equation: $\\text{I}_2 + 2\\text{S}_2\\text{O}_3^{2-} \\rightarrow 2\\text{I}^- + \\text{S}_4\\text{O}_6^{2-}$.\n* Moles of $\\text{S}_2\\text{O}_3^{2-} = 0.100 \\times 0.02480 = 2.480 \\times 10^{-3}\\text{ mol}$.\n* Moles of $\\text{I}_2 = \\frac{1}{2} \\times 2.480 \\times 10^{-3} = 1.240 \\times 10^{-3}\\text{ mol}$.\n* Concentration of $\\text{I}_2 = \\frac{1.240 \\times 10^{-3}}{0.02000} = \\mathbf{0.0620\\text{ mol dm}^{-3}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q32",
    createdAt: "2026-08-18T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_13-june2026",
    question: "Given the standard enthalpies of combustion (in kJ mol⁻¹):\nΔ_c H°[C(s, graphite)] = −393.5\nΔ_c H°[H₂(g)] = −285.8\nΔ_c H°[CH₄(g)] = −890.3\nCalculate the standard enthalpy of formation, Δ_f H°, of methane, CH₄(g).",
    options: [
      { text: "−74.8 kJ mol⁻¹", isCorrect: true },
      { text: "+74.8 kJ mol⁻¹" },
      { text: "−211.0 kJ mol⁻¹" },
      { text: "−1569.6 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Target reaction: $\\\\text{C(s)} + 2\\\\text{H}_2\\\\text{(g)} \\\\rightarrow \\\\text{CH}_4\\\\text{(g)}$.\n* Using Hess's Law with enthalpies of combustion: $\\\\Delta_f H^\\\\circ = \\\\sum \\\\Delta_c H^\\\\circ(\\\\text{reactants}) - \\\\sum \\\\Delta_c H^\\\\circ(\\\\text{products})$.\n* $\\\\Delta_f H^\\\\circ = [(-393.5) + 2(-285.8)] - (-890.3) = [-393.5 - 571.6] + 890.3 = -965.1 + 890.3 = -74.8\\\\text{ kJ mol}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2026 Paper 1 Q7",
    createdAt: "2026-06-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_14-june2026",
    question: "Why does the standard enthalpy of combustion obtained from mean bond enthalpies usually differ from the experimental value measured by bomb calorimetry?",
    options: [
      { text: "Mean bond enthalpies are averages taken over various distinct molecular environments, and bond enthalpies apply only to species in the gaseous state", isCorrect: true },
      { text: "Mean bond enthalpies take into account intermolecular London dispersion forces" },
      { text: "Calorimetry measurements always assume 100% heat loss to the surroundings" },
      { text: "Bond enthalpies cannot be defined for covalent bonds" }
    ],
    correctAnswer: 0,
    explanation: "* Mean bond enthalpies are averaged across a wide range of different chemical compounds rather than the specific molecule under test.\n* Furthermore, bond enthalpy calculations assume all reactants and products are in the gaseous state, neglecting enthalpies of vaporisation or condensation (such as liquid water formed in combustion).",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 / June 2025 Paper 1 Q8",
    createdAt: "2026-06-16T10:00:00Z"
  }
];

