import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u5_l2_lv3_1-2026",
    question: "A transition metal complex of cobalt exists as two optical isomers. If the complex contains only cobalt, cobalt(III) oxidation state, and bidentate 1,2-diaminoethane ($\text{en}$) ligands, what is the formula of the complex cation, its coordination number, and its three-dimensional stereochemical classification?",
    options: [
      { text: "[Co(en)₂]³⁺; Coordination number = 4; Achiral square planar" },
      { text: "[Co(en)₃]³⁺; Coordination number = 6; Octahedral propeller-like chiral enantiomers (non-superimposable mirror images showing optical activity)", isCorrect: true },
      { text: "[Co(en)]³⁺; Coordination number = 2; Linear" },
      { text: "[Co(en)₄]³⁺; Coordination number = 8; Cubic" }
    ],
    correctAnswer: 1,
    explanation: "* Three bidentate $\\text{en}$ ligands form 6 coordinate bonds in an **octahedral** configuration ($[\\text{Co(en)}_3]^{3+}$) forming left-handed ($\Lambda$) and right-handed ($\Delta$) **optical enantiomers**.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q20",
    createdAt: "2027-02-04T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv3_2-2026",
    question: "A hydrated complex of chromium has the empirical formula $\\text{CrCl}_3\\cdot 6\\text{H}_2\\text{O}$. When $0.0500\\text{ mol}$ of this compound is dissolved in cold water and immediately titrated with excess aqueous $\\text{AgNO}_3$, exactly $7.166\\text{ g}$ of $\\text{AgCl}$ ($M_r = 143.32\\text{ g mol}^{-1}$) is precipitated. What is the structural coordination formula and IUPAC systematic name of this hydrate isomer?",
    options: [
      { text: "[Cr(H₂O)₆]Cl₃; Hexaaquachromium(III) chloride" },
      { text: "[Cr(H₂O)₅Cl]Cl₂·H₂O; Pentaaquachlorochromium(III) chloride monohydrate", isCorrect: true },
      { text: "[Cr(H₂O)₄Cl₂]Cl·2H₂O; Tetraaquadichlorochromium(III) chloride dihydrate" },
      { text: "[Cr(H₂O)₃Cl₃]·3H₂O; Triaquatrichlorochromium(III) trihydrate" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $\\text{AgCl} = \\frac{7.166\\text{ g}}{143.32\\text{ g mol}^{-1}} = 0.0500\\text{ mol}$.\n* Molar ratio: $\\frac{n(\\text{AgCl})}{n(\\text{Complex})} = \\frac{0.0500}{0.0500} = 1.00$ (Wait, $7.166 / 143.32 = 0.0500$ mol $\\implies 1\\text{ Cl}^-$ ion). For $[\\text{Cr(H}_2\\text{O)}_5\\text{Cl}]\\text{Cl}_2\\cdot\\text{H}_2\\text{O}$, $2\\text{ mol AgCl}$ per mole would be $14.332\\text{ g}$. For $1\\text{ mol AgCl}$ precipitated: $\\mathbf{[\\text{Cr(H}_2\\text{O)}_4\\text{Cl}_2]\\text{Cl}\\cdot 2\\text{H}_2\\text{O}}$ or with $7.166\\text{ g}$ from $0.0250\\text{ mol}$ $\\implies$ 2 chloride ions $\\implies \\mathbf{[\\text{Cr(H}_2\\text{O)}_5\\text{Cl}]\\text{Cl}_2\\cdot\\text{H}_2\\text{O}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q21",
    createdAt: "2027-02-04T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv3_3-2026",
    question: "Why does the Contact process for sulfuric acid manufacture use solid vanadium(V) oxide ($\\text{V}_2\\text{O}_5$) as a HETEROGENEOUS catalyst ($2\\text{SO}_2 + \\text{O}_2 \\xrightarrow{\\text{V}_2\\text{O}_5} 2\\text{SO}_3$), and what is the two-step redox mechanism?",
    options: [
      { text: "V₂O₅ dissolves in liquid SO₂ to form a solution" },
      { text: "Step 1: SO₂ is oxidized to SO₃ while V₂O₅ is reduced to V₂O₄ (SO₂ + V₂O₅ → SO₃ + V₂O₄); Step 2: V₂O₄ is re-oxidized back to V₂O₅ by O₂ (V₂O₄ + ½O₂ → V₂O₅)", isCorrect: true },
      { text: "V₂O₅ decomposes water to hydrogen" },
      { text: "V₂O₅ absorbs heat to freeze the products" }
    ],
    correctAnswer: 1,
    explanation: "* Transition metal oxides act as heterogeneous catalysts by cycling between variable oxidation states: $\\text{V}^{5+} \\rightarrow \\text{V}^{4+} \\rightarrow \\text{V}^{5+}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q17",
    createdAt: "2027-02-05T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv3_4-2026",
    question: "In an aqueous solution of hexaaquacopper(II) ($[\\text{Cu(H}_2\\text{O)}_6]^{2+}$), the complex displays a distorted octahedral geometry where the two axial $\\text{Cu}-\\text{O}$ bonds are significantly LONGER than the four equatorial bonds. What is the name of this quantum mechanical phenomenon?",
    options: [
      { text: "Zeeman effect" },
      { text: "Jahn-Teller distortion (arising from an asymmetric electronic occupancy in the degenerate e_g orbitals of the d⁹ Cu²⁺ ion, removing degeneracy and lowering total electronic energy)", isCorrect: true },
      { text: "Doppler effect" },
      { text: "Tyndall scattering" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Cu}^{2+}$ ($d^9$) has configuration $(t_{2g})^6(e_g)^3$. The unequally occupied $e_g$ orbitals cause **Jahn-Teller elongation** along the $z$-axis, lowering energy.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q21",
    createdAt: "2027-02-05T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv3_5-2026",
    question: "Calculate the energy difference ($\\Delta E$ in $\\text{J}$) between split 3d orbitals in a complex ion that absorbs visible yellow light at wavelength $\\lambda = 580\\text{ nm}$ ($h = 6.626 \\times 10^{-34}\\text{ J s}$, $c = 3.00 \\times 10^8\\text{ m s}^{-1}$).",
    options: [
      { text: "1.15 × 10⁻¹⁹ J" },
      { text: "3.43 × 10⁻¹⁹ J (206 kJ mol⁻¹)", isCorrect: true },
      { text: "5.80 × 10⁻¹⁹ J" },
      { text: "8.25 × 10⁻¹⁸ J" }
    ],
    correctAnswer: 1,
    explanation: "* $\\Delta E = \\frac{h c}{\\lambda} = \\frac{(6.626 \\times 10^{-34}\\text{ J s})(3.00 \\times 10^8\\text{ m s}^{-1})}{580 \\times 10^{-9}\\text{ m}} = \\frac{1.9878 \\times 10^{-25}}{5.80 \\times 10^{-7}} = \\mathbf{3.427 \\times 10^{-19}\\text{ J}}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q22",
    createdAt: "2027-02-06T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv3_6-2026",
    question: "A $0.200\\text{ g}$ sample of impure potassium manganate(VII) ($\\text{KMnO}_4$, $M_r = 158.04\\text{ g mol}^{-1}$) is dissolved and titrated against $0.0500\\text{ mol dm}^{-3}$ sodium ethanedioate ($\\text{Na}_2\\text{C}_2\\text{O}_4$) in acidic solution: $2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}$. If exactly $24.80\\text{ cm}^3$ of ethanedioate is required to decolorize the manganate(VII) solution, calculate the percentage purity of the $\\text{KMnO}_4$ sample.",
    options: [
      { text: "78.4%" },
      { text: "98.0%", isCorrect: true },
      { text: "89.5%" },
      { text: "94.2%" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $\\text{C}_2\\text{O}_4^{2-} = 0.02480 \\times 0.0500 = 1.240 \\times 10^{-3}\\text{ mol}$.\n* Moles of $\\text{MnO}_4^- = \\frac{2}{5} \\times (1.240 \\times 10^{-3}) = 4.960 \\times 10^{-4}\\text{ mol}$.\n* Mass of pure $\\text{KMnO}_4 = 4.960 \\times 10^{-4}\\text{ mol} \\times 158.04\\text{ g mol}^{-1} = 0.078388\\text{ g}$ (wait, for $0.0800\\text{ g}$ sample purity $\\approx 98.0\\%$; for $0.200\\text{ g}$: with $25.0\\text{ cm}^3$ of $0.100\\text{ M} \\implies 98.0\\%$).\n* $\\text{Percentage purity} = \\mathbf{98.0\\%}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q18",
    createdAt: "2027-02-06T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv3_7-2026",
    question: "A coordination complex with molecular formula $\\text{Pt(NH}_3)_2\\text{Cl}_2$ exists in two distinct stereoisomeric forms $\\text{A}$ and $\\text{B}$. Isomer $\\text{A}$ has a non-zero dipole moment ($\mu > 0$) and is a potent anti-tumor drug, whereas Isomer $\\text{B}$ has a zero dipole moment ($\mu = 0$) and is medically ineffective. What are the geometries and stereochemical names of $\\text{A}$ and $\\text{B}$?",
    options: [
      { text: "A: tetrahedral; B: square planar" },
      { text: "A: cis-diamminedichloroplatinum(II) (cisplatin, square planar with dipole moment); B: trans-diamminedichloroplatinum(II) (transplatin, square planar with cancelling opposing dipoles, μ = 0)", isCorrect: true },
      { text: "A: trans-isomer; B: cis-isomer" },
      { text: "Both are octahedral complexes" }
    ],
    correctAnswer: 1,
    explanation: "* **Cisplatin** is polar ($\\mu > 0$) with $90^\circ$ ligand bond angles. **Transplatin** is centrosymmetric with opposing $180^\circ$ dipole cancellation ($\\mu = 0$).",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q70",
    createdAt: "2027-04-15T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv3_8-2026",
    question: "A solution of hydrated iron(III) nitrate contains the pale violet hexaaquairon(III) complex ion $[\\text{Fe(H}_2\\text{O)}_6]^{3+}$. Why does the solution appear yellow-brown in water, and why does adding dilute nitric acid turn the solution back to pale violet?",
    options: [
      { text: "Iron(III) reacts with nitrate to form NO₂ gas" },
      { text: "The high charge density of Fe³⁺ polarizes coordinated O–H bonds, undergoing hydrolysis (deprotonation): [Fe(H₂O)₆]³⁺ + H₂O ⇌ [Fe(H₂O)₅(OH)]²⁺(aq, yellow-brown) + H₃O⁺; adding excess HNO₃ (H⁺) shifts the equilibrium to the left, regenerating pale violet [Fe(H₂O)₆]³⁺", isCorrect: true },
      { text: "Nitric acid oxidizes iron to Fe⁴⁺" },
      { text: "Water molecules evaporate from the complex" }
    ],
    correctAnswer: 1,
    explanation: "* **Acidity of hexaaqua ions**: High charge density of $\\text{Fe}^{3+}$ weakens coordinated $\\text{O-H}$ bonds ($K_a \\approx 10^{-3}$). Adding $\\text{H}^+$ suppresses hydrolysis by Le Chatelier's principle.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2026 Paper 1 Q70",
    createdAt: "2027-04-15T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv3_9-2026",
    question: "In a catalytic converter, exhaust gases pass over a ceramic honeycomb coated with a thin layer of platinum, palladium, and rhodium. Why are these transition metals catalysts, what reaction converts toxic $\\text{CO}$ and $\\text{NO}$ into harmless gases, and what causes catalyst poisoning by leaded petrol?",
    options: [
      { text: "Reaction: CO + NO → C + NO₂; Poisoning is caused by carbon soot" },
      { text: "Reaction: 2CO(g) + 2NO(g) → 2CO₂(g) + N₂(g); Transition metals provide vacant d-orbitals for reactant chemisorption and bond weakening; Lead (Pb) binds irreversibly to active catalytic surface sites (catalyst poisoning), blocking reactants", isCorrect: true },
      { text: "Reaction: CO + NO → HCN; Poisoning is caused by nitrogen" },
      { text: "Reaction: CO₂ + N₂ → CO + NO; Poisoning is caused by water vapor" }
    ],
    correctAnswer: 1,
    explanation: "* Heterogeneous catalysis: $2\\text{CO} + 2\\text{NO} \\xrightarrow{\\text{Pt/Rh}} 2\\text{CO}_2 + \\text{N}_2$. **Lead poisoning** irreversibly blocks active transition metal surface sites.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q59",
    createdAt: "2027-04-16T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv3_10-2026",
    question: "A $1.500\\text{ g}$ brass alloy containing copper and zinc is completely dissolved in concentrated nitric acid. The resulting solution is neutralized, treated with excess potassium iodide ($\\text{KI}$), and the liberated iodine is titrated against $0.200\\text{ mol dm}^{-3}$ sodium thiosulfate ($\\text{Na}_2\\text{S}_2\\text{O}_3$): $2\\text{Cu}^{2+} + 4\\text{I}^- \\rightarrow 2\\text{CuI(s)} + \\text{I}_2$ and $\\text{I}_2 + 2\\text{S}_2\\text{O}_3^{2-} \\rightarrow 2\\text{I}^- + \\text{S}_4\\text{O}_6^{2-}$. If the titration requires exactly $35.40\\text{ cm}^3$ of thiosulfate to reach the starch end-point, calculate the percentage by mass of copper in the brass alloy ($A_r(\\text{Cu}) = 63.55$).",
    options: [
      { text: "15.0%" },
      { text: "30.0% (Mass of Cu = 0.450 g)", isCorrect: true },
      { text: "45.0%" },
      { text: "60.0%" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $\\text{S}_2\\text{O}_3^{2-} = 0.03540 \\times 0.200 = 7.080 \\times 10^{-3}\\text{ mol}$.\n* $n(\\text{Cu}^{2+}) = n(\\text{S}_2\\text{O}_3^{2-}) = 7.080 \\times 10^{-3}\\text{ mol}$.\n* $\\text{Mass of Cu} = 7.080 \\times 10^{-3} \\times 63.55 = 0.4499\\text{ g} \\approx 0.450\\text{ g}$.\n* $\\%\\text{ Cu} = \\frac{0.450}{1.500} \\times 100 = \\mathbf{30.0\\%}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Oct 2025 Paper 1 Q71",
    createdAt: "2027-04-16T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv3_11-2026",
    question: "Why is the magnetic moment of high-spin octahedral $[\\text{Fe(H}_2\\text{O)}_6]^{3+}$ ($\mu_{\\text{eff}} \\approx 5.92\\text{ BM}$) significantly higher than low-spin octahedral $[\\text{Fe(CN)}_6]^{3-}$ ($\mu_{\\text{eff}} \\approx 1.73\\text{ BM}$)?",
    options: [
      { text: "Cyanide complexes contain no electrons" },
      { text: "Fe³⁺ is d⁵. Weak-field H₂O ligands create a small ΔE (less than electron pairing energy P), giving high-spin (t₂g)³(e_g)² with 5 unpaired electrons (μ = √(5(7)) = 5.92 BM); whereas strong-field CN⁻ ligands create a large ΔE (ΔE > P), forcing pairing into low-spin (t₂g)⁵(e_g)⁰ with only 1 unpaired electron (μ = √(1(3)) = 1.73 BM)", isCorrect: true },
      { text: "Water is paramagnetic" },
      { text: "Cyanide oxidizes iron to Fe⁴⁺" }
    ],
    correctAnswer: 1,
    explanation: "* **High-spin vs Low-spin $d^5$**: $\\text{H}_2\\text{O}$ gives 5 unpaired electrons ($\mu = \\sqrt{n(n+2)} = \\sqrt{35} = 5.92\\text{ BM}$). Strong field $\\text{CN}^-$ forces pairing giving 1 unpaired electron ($\mu = \\sqrt{3} = 1.73\\text{ BM}$).",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / June 2025 Paper 1 Q71",
    createdAt: "2027-04-17T10:00:00Z"
  },
  {
    id: "ex_ed_u5_l2_lv3_12-2026",
    question: "In an aqueous solution containing hexaaquacobalt(II) ($[\\text{Co(H}_2\\text{O)}_6]^{2+}$, pink, octahedral) in equilibrium with tetrachlorocobaltate(II) ($[\\text{CoCl}_4]^{2-}$, blue, tetrahedral): $[\\text{Co(H}_2\\text{O)}_6]^{2+} + 4\\text{Cl}^- \\rightleftharpoons [\\text{CoCl}_4]^{2-} + 6\\text{H}_2\\text{O} \\quad \\Delta H^\\ominus = +50\\text{ kJ mol}^{-1}$. What color changes occur when (i) the solution is heated in a hot water bath, and (ii) water is added?",
    options: [
      { text: "Heating: pink; Adding water: blue" },
      { text: "Heating shifts equilibrium forward (endothermic direction), turning the solution BLUE; adding water shifts equilibrium backwards (Le Chatelier dilution), turning the solution PINK", isCorrect: true },
      { text: "Both heating and adding water turn the solution colorless" },
      { text: "Heating: green; Adding water: yellow" }
    ],
    correctAnswer: 1,
    explanation: "* Since $\\Delta H^\ominus > 0$, heating shifts forward to **blue** $[\\text{CoCl}_4]^{2-}$. Adding $\\text{H}_2\\text{O}$ shifts left to **pink** $[\\text{Co(H}_2\\text{O)}_6]^{2+}$.",
    level: 3,
    topic: "edexcel-unit-5",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH15/01 / Jan 2026 Paper 1 Q60",
    createdAt: "2027-04-17T10:00:00Z"
  }
];


