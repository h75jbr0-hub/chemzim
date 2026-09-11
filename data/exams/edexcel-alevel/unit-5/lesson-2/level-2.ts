import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u5_l2_lv2_1-2026",
    question: "What is the chelate effect in transition metal complex substitution reactions (e.g. $[\\text{Ni(H}_2\\text{O)}_6]^{2+} + 3\\text{en} \\rightleftharpoons [\\text{Ni(en)}_3]^{2+} + 6\\text{H}_2\\text{O}$), and what is its thermodynamic driving force?",
    options: [
      { text: "Enthalpy change (ΔH°) is extremely endothermic" },
      { text: "Multidentate ligands form much more thermodynamically stable complexes than monodentate ligands because replacing monodentate ligands increases the total number of independent particles (from 4 to 7), leading to a large positive entropy change (ΔS°_system > 0) that drives ΔG° negative", isCorrect: true },
      { text: "Bidentate ligands form ionic bonds" },
      { text: "The activation energy becomes zero" }
    ],
    correctAnswer: 1,
    explanation: "* 4 reacting particles produce 7 product particles: $\\Delta S_{\\text{sys}}^\\ominus > 0 \\implies -T\\Delta S^\\ominus \\ll 0 \\implies \\mathbf{\\Delta G^\\ominus < 0}$ (favorable free energy due to entropy gain).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q18",
    createdAt: "2027-02-01T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv2_2-2026",
    question: "What geometric isomerism is exhibited by the square planar anti-cancer chemotherapy drug cisplatin, and what is its chemical formula?",
    options: [
      { text: "Trans-[Pt(NH₃)₄Cl₂]; trans isomer" },
      { text: "Cis-[Pt(NH₃)₂Cl₂]; cis isomer (the two chloride ligands are adjacent at 90° to each other, allowing them to bind adjacent guanine bases in DNA)", isCorrect: true },
      { text: "Trans-[Pt(NH₃)₂Cl₂]; trans isomer" },
      { text: "Octahedral [Pt(NH₃)₆]Cl₂" }
    ],
    correctAnswer: 1,
    explanation: "* Cisplatin is $\\mathbf{\\text{cis-[Pt(NH}_3)_2\\text{Cl}_2]}$, where the identical ligands are adjacent ($90^\\circ$). Transplatin ($180^\\circ$) is biologically inactive against cancer.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q19",
    createdAt: "2027-02-01T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv2_3-2026",
    question: "Why does the reaction between peroxodisulfate ions and iodide ions: $\\text{S}_2\\text{O}_8^{2-} + 2\\text{I}^- \\rightarrow 2\\text{SO}_4^{2-} + \\text{I}_2$ have a high activation energy when uncatalyzed, and how does iron(II) / iron(III) act as a HOMOGENEOUS catalyst?",
    options: [
      { text: "Iron absorbs iodide ions onto its solid surface" },
      { text: "The uncatalyzed reaction requires two negatively charged anions (S₂O₈²⁻ and I⁻) to collide, creating high electrostatic repulsion; Fe²⁺/Fe³⁺ catalyzes the reaction in two feasible steps involving opposite charges: 2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻ followed by 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂", isCorrect: true },
      { text: "Iron acts as a dehydrating agent" },
      { text: "Iron shifts the equilibrium constant K_c" }
    ],
    correctAnswer: 1,
    explanation: "* Electrostatic repulsion between like-charged anions creates high $E_a$. Transition metals with variable oxidation states ($\text{Fe}^{2+}/\\text{Fe}^{3+}$) provide a low-energy two-step pathway with oppositely charged species.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q15",
    createdAt: "2027-02-02T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv2_4-2026",
    question: "In the autocatalyzed redox titration between acidified ethanedioate (oxalate) ions and potassium manganate(VII): $2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}$, what is the autocatalyst and why is the initial reaction rate very slow?",
    options: [
      { text: "The catalyst is CO₂ gas; rate is slow due to gas solubility" },
      { text: "The catalyst is aqueous Mn²⁺ (a product); initial rate is very slow due to anion-anion repulsion between MnO₄⁻ and C₂O₄²⁻, but accelerates rapidly as Mn²⁺ forms and acts as a homogeneous catalyst", isCorrect: true },
      { text: "The catalyst is H⁺; initial rate is slow because of low temperature" },
      { text: "The catalyst is K⁺ ions" }
    ],
    correctAnswer: 1,
    explanation: "* **Autocatalysis** occurs when a reaction product ($\text{Mn}^{2+}$) catalyzes the reaction. The initial rate is sluggish until the first trace of $\text{Mn}^{2+}$ is generated.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q19",
    createdAt: "2027-02-02T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv2_5-2026",
    question: "Why is carbon monoxide ($\\text{CO}$) extremely toxic to humans at molecular level in terms of ligand exchange equilibria in hemoglobin?",
    options: [
      { text: "CO destroys blood vessels mechanically" },
      { text: "CO acts as a ligand that binds to the Fe²⁺ ion in hemoglobin significantly more strongly (higher stability constant K_stab) than O₂ does, irreversibly displacing oxygen and preventing vital cellular oxygen transport", isCorrect: true },
      { text: "CO oxidizes Fe²⁺ to radioactive iron" },
      { text: "CO evaporates the blood plasma" }
    ],
    correctAnswer: 1,
    explanation: "* Carboxyhemoglobin has a stability constant ($K_{\\text{stab}}$) over $200\\times$ higher than oxyhemoglobin, displacing $\\text{O}_2$ and starving tissues of cellular respiration.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q20",
    createdAt: "2027-02-03T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv2_6-2026",
    question: "What is the sequence of color changes observed when aqueous ammonia is added dropwise until in excess to a solution containing hexaaquanickel(II) ions ($[\\text{Ni(H}_2\\text{O)}_6]^{2+}$)?",
    options: [
      { text: "Green solution → pale green precipitate → deep blue solution of [Ni(NH₃)₆]²⁺", isCorrect: true },
      { text: "Pink solution → blue precipitate → purple solution" },
      { text: "Colorless solution → white precipitate → yellow solution" },
      { text: "Orange solution → green precipitate → red solution" }
    ],
    correctAnswer: 0,
    explanation: "* Step 1: Deprotonation forms pale green $\\text{Ni(OH)}_2\\text{(s)}$. Step 2: Excess $\\text{NH}_3$ causes ligand exchange: $\\text{Ni(OH)}_2 + 6\\text{NH}_3 \\rightarrow [\\text{Ni(NH}_3)_6]^{2+}\\text{(aq (deep blue))} + 2\\text{OH}^-$.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q16",
    createdAt: "2027-02-03T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv2_7-2026",
    question: "Why does the stability constant ($K_{\\text{stab}}$) for the formation of $[\\text{Cu(EDTA)}]^{2-}$ from $[\\text{Cu(H}_2\\text{O)}_6]^{2+}$ have an enormous numerical value ($K_{\\text{stab}} \\approx 10^{18}\\text{ dm}^3\\text{ mol}^{-1}$)?",
    options: [
      { text: "EDTA forms covalent network crystals" },
      { text: "The reaction replaces six monodentate water molecules with one hexadentate EDTA⁴⁻ ion, increasing the total number of free particles from 2 to 7 (ΔS°_system ≫ 0), giving an immensely favorable –TΔS° term that drives ΔG° strongly negative (chelate effect)", isCorrect: true },
      { text: "The reaction is extremely endothermic" },
      { text: "Copper is oxidized to Cu³⁺" }
    ],
    correctAnswer: 1,
    explanation: "* Hexadentate chelation: $1\\text{ complex} + 1\\text{ EDTA}^{4-} \\rightarrow 1\\text{ [Cu(EDTA)]}^{2-} + 6\\text{H}_2\\text{O}$. $2 \\rightarrow 7$ particles $\\implies \\Delta S_{\\text{sys}}^\\ominus > 0 \\implies \\mathbf{\\Delta G^\\ominus \\ll 0}$ ($K_{\\text{stab}} \\approx 10^{18}$).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q68",
    createdAt: "2027-04-12T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv2_8-2026",
    question: "What is the sequence of color changes observed when an aqueous solution of potassium iodide ($\\text{KI}$) is added to aqueous copper(II) sulfate ($\\text{CuSO}_4$)?",
    options: [
      { text: "Blue solution turns green and remains clear" },
      { text: "Blue solution forms an off-white precipitate of copper(I) iodide (CuI(s)) in a dark brown solution of iodine (I₂(aq) / I₃⁻(aq))", isCorrect: true },
      { text: "Blue solution turns pink" },
      { text: "Blue solution turns colorless with no precipitate" }
    ],
    correctAnswer: 1,
    explanation: "* Redox reaction: $2\\text{Cu}^{2+} + 4\\text{I}^- \\rightarrow \\mathbf{2\\text{CuI(s) (off-white)}} + \\mathbf{\\text{I}_2\\text{(aq) (brown)}}$.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q68",
    createdAt: "2027-04-12T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv2_9-2026",
    question: "Why do transition metal complexes with identical metal ions but different ligands (e.g. $[\\text{Cu(H}_2\\text{O)}_6]^{2+}$ vs $[\\text{Cu(NH}_3)_4(\\text{H}_2\\text{O})_2]^{2+}$) have completely different colors in aqueous solution?",
    options: [
      { text: "Different ligands alter the nuclear mass of copper" },
      { text: "Different ligands exert different electrostatic field strengths (spectrochemical series), changing the magnitude of the d-orbital splitting energy (ΔE); since ΔE = hν = hc/λ, different frequencies of light are absorbed, resulting in different transmitted complementary colors", isCorrect: true },
      { text: "Ligands emit visible laser radiation" },
      { text: "Ammonia neutralizes the charge of copper" }
    ],
    correctAnswer: 1,
    explanation: "* **Spectrochemical series**: Stronger field ligands ($\\text{NH}_3 > \\text{H}_2\\text{O}$) create larger $\\Delta E$, absorbing higher frequency (shorter wavelength) light, shifting the transmitted color to deep royal blue.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q57",
    createdAt: "2027-04-13T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv2_10-2026",
    question: "What type of isomerism is exhibited between pentaamminechlorocobalt(III) sulfate $[\\text{Co(NH}_3)_5\\text{Cl}]\\text{SO}_4$ and pentaamminesulfatocobalt(III) chloride $[\\text{Co(NH}_3)_5(\\text{SO}_4)]\\text{Cl}$?",
    options: [
      { text: "Optical isomerism" },
      { text: "Ionization isomerism (structural isomers that produce different ions in aqueous solution: one precipitates with Ba²⁺, the other with Ag⁺)", isCorrect: true },
      { text: "Geometric cis-trans isomerism" },
      { text: "Linkage isomerism" }
    ],
    correctAnswer: 1,
    explanation: "* **Ionization isomers** exchange coordinated ligand with uncoordinated counter-ion: $[\\text{Co(NH}_3)_5\\text{Cl}]\\text{SO}_4$ gives a white precipitate of $\\text{BaSO}_4$ with $\\text{Ba}^{2+}$, while $[\\text{Co(NH}_3)_5(\\text{SO}_4)]\\text{Cl}$ gives a white precipitate of $\\text{AgCl}$ with $\\text{Ag}^+$.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q69",
    createdAt: "2027-04-13T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv2_11-2026",
    question: "In the redox titration of iron(II) with acidified potassium dichromate(VI): $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{Fe}^{2+} \\rightarrow 2\\text{Cr}^{3+} + 6\\text{Fe}^{3+} + 7\\text{H}_2\\text{O}$, what indicator is commonly used and what is the color change at the end-point?",
    options: [
      { text: "Phenolphthalein; pink to colorless" },
      { text: "Sodium diphenylaminesulfonate (or barium diphenylaminesulfonate); green to purple/violet (due to oxidation of the indicator once all Fe²⁺ has reacted)", isCorrect: true },
      { text: "Methyl orange; red to yellow" },
      { text: "Starch; blue-black to colorless" }
    ],
    correctAnswer: 1,
    explanation: "* **Sodium diphenylaminesulfonate** redox indicator oxidizes to an intense **purple/violet** color at the exact equivalence point.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q69",
    createdAt: "2027-04-14T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv2_12-2026",
    question: "Why is aqueous titanium(III) ($[\\text{Ti(H}_2\\text{O)}_6]^{3+}$, $d^1$) violet in color, and what happens to the absorbed light wavelength when water ligands are replaced by cyanide ($\text{CN}^-$) ligands?",
    options: [
      { text: "Absorption shifts to longer wavelength (red)" },
      { text: "Ti³⁺ has a single d-electron that absorbs yellow-green visible light (~510 nm) promoting it to an e_g orbital, transmitting violet; replacing H₂O with stronger-field CN⁻ ligands increases ΔE, shifting absorption to higher frequency / shorter wavelength (blue/UV)", isCorrect: true },
      { text: "Cyanide causes the complex to become colorless" },
      { text: "Cyanide eliminates all d-electrons" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Ti}^{3+}$ ($d^1$) absorbs yellow-green light and transmits **violet**. $\\text{CN}^-$ is higher in the spectrochemical series, increasing $\\Delta E$ and shifting absorption to **shorter wavelengths**.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q58",
    createdAt: "2027-04-14T10:00:00Z"
  }
];


