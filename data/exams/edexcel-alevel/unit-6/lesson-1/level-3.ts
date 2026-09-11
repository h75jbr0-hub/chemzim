import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u6_l1_lv3_1-2026",
    question: "A student performs a redox back titration to determine the percentage purity of a sample of impure iron wire ($M_r[\\text{Fe}] = 55.85\\text{ g mol}^{-1}$). A $1.400\\text{ g}$ sample of wire is dissolved in excess dilute sulfuric acid to form $\\text{Fe}^{2+}\\text{(aq)}$, and the solution is made up to $250.0\\text{ cm}^3$ in a volumetric flask. A $25.0\\text{ cm}^3$ aliquot requires exactly $24.20\\text{ cm}^3$ of $0.0200\\text{ mol dm}^{-3}$ $\\text{KMnO}_4$ for complete oxidation ($\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+ \rightarrow \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}$). Calculate the percentage purity of iron in the wire.",
    options: [
      { text: "85.2%" },
      { text: "96.5%", isCorrect: true },
      { text: "98.9%" },
      { text: "92.1%" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $\\text{MnO}_4^-$ in titre $= 0.02420 \\times 0.0200 = 4.84 \\times 10^{-4}\\text{ mol}$.\n* Moles of $\\text{Fe}^{2+}$ in $25.0\\text{ cm}^3 = 5 \\times (4.84 \\times 10^{-4}) = 2.420 \\times 10^{-3}\\text{ mol}$.\n* Total moles of $\\text{Fe}^{2+}$ in $250.0\\text{ cm}^3 = 2.420 \\times 10^{-3} \\times 10 = 0.02420\\text{ mol}$.\n* Mass of pure $\\text{Fe} = 0.02420\\text{ mol} \\times 55.85\\text{ g mol}^{-1} = 1.3516\\text{ g}$.\n* $\\text{Percentage purity} = \\frac{1.3516\\text{ g}}{1.400\\text{ g}} \\times 100\\% = \\mathbf{96.54\\%} \\approx \\mathbf{96.5\\%}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q6",
    createdAt: "2026-12-16T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_2-2026",
    question: "In the synthesis of aspirin (acetylsalicylic acid, $M_r = 180.15\\text{ g mol}^{-1}$) from 2-hydroxybenzoic acid (salicylic acid, $M_r = 138.12\\text{ g mol}^{-1}$) and ethanoic anhydride ($M_r = 102.09\\text{ g mol}^{-1}$), $6.90\\text{ g}$ of salicylic acid reacts with excess anhydride to produce $6.75\\text{ g}$ of pure recrystallized aspirin. Calculate the percentage yield of the preparation.",
    options: [
      { text: "67.5%" },
      { text: "75.0%", isCorrect: true },
      { text: "82.4%" },
      { text: "97.8%" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of salicylic acid $= \\frac{6.90\\text{ g}}{138.12\\text{ g mol}^{-1}} = 0.04996\\text{ mol}$.\n* Theoretical maximum mass of aspirin $= 0.04996\\text{ mol} \\times 180.15\\text{ g mol}^{-1} = 9.000\\text{ g}$.\n* $\\text{Percentage yield} = \\frac{\\text{Actual mass}}{\\text{Theoretical mass}} \\times 100\\% = \\frac{6.75\\text{ g}}{9.00\\text{ g}} \\times 100\\% = \\mathbf{75.0\\%}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q7",
    createdAt: "2026-12-16T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_3-2026",
    question: "During a pH titration of $25.0\\text{ cm}^3$ of an unknown weak organic acid with $0.100\\text{ mol dm}^{-3}$ $\\text{NaOH}$, the equivalence point is reached after adding exactly $30.0\\text{ cm}^3$ of base. At a base volume of $15.0\\text{ cm}^3$ (the half-equivalence point), the measured $pH$ is $4.86$. What is the acid dissociation constant ($K_a$) and initial concentration of the weak acid?",
    options: [
      { text: "K_a = 1.38 × 10⁻⁵ mol dm⁻³; [HA] = 0.120 mol dm⁻³", isCorrect: true },
      { text: "K_a = 1.00 × 10⁻⁴ mol dm⁻³; [HA] = 0.083 mol dm⁻³" },
      { text: "K_a = 4.86 × 10⁻⁵ mol dm⁻³; [HA] = 0.100 mol dm⁻³" },
      { text: "K_a = 1.38 × 10⁻³ mol dm⁻³; [HA] = 0.240 mol dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "* At half-equivalence: $pH = pK_a = 4.86 \\implies K_a = 10^{-4.86} = \\mathbf{1.38 \\times 10^{-5}\\text{ mol dm}^{-3}}$.\n* At equivalence: $n(\\text{HA}) = n(\\text{NaOH}) = 0.0300 \\times 0.100 = 0.00300\\text{ mol}$.\n* Initial $[\\text{HA}] = \\frac{0.00300\\text{ mol}}{0.0250\\text{ dm}^3} = \\mathbf{0.120\\text{ mol dm}^{-3}}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q5",
    createdAt: "2026-12-17T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_4-2026",
    question: "In an experiment to determine the activation energy ($E_a$) of the reaction between peroxodisulfate and iodide ions ($\text{S}_2\text{O}_8^{2-} + 2\text{I}^- \rightarrow 2\text{SO}_4^{2-} + \text{I}_2$) using an iodine clock with sodium thiosulfate, how is the initial rate of reaction ($r_0$) related to the measured clock reaction time ($t$)?",
    options: [
      { text: "Rate is proportional to time: Rate ∝ t" },
      { text: "Rate is inversely proportional to time: Rate = 1 / t (since a fixed amount of iodine is consumed by a constant volume of thiosulfate before the blue-black starch color appears)", isCorrect: true },
      { text: "Rate = ln t" },
      { text: "Rate = t²" }
    ],
    correctAnswer: 1,
    explanation: "* In a clock reaction, the time $t$ taken for a fixed amount of product ($\Delta [\text{I}_2]$) to be trapped by a fixed aliquot of thiosulfate means $\\text{Rate} = \\frac{\\Delta [\\text{I}_2]}{t} \\propto \\mathbf{\\frac{1}{t}}$. Plotting $\\ln(1/t)$ vs $1/T$ yields gradient $= -\\frac{E_a}{R}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q7",
    createdAt: "2026-12-17T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_5-2026",
    question: "A transition metal complex $\\text{Cr(H}_2\\text{O)}_6\\text{Cl}_3$ can exist as three hydrate isomers. When an aqueous solution containing $0.0100\\text{ mol}$ of one isomer is treated with excess aqueous silver nitrate ($\\text{AgNO}_3$), exactly $2.868\\text{ g}$ of silver chloride ($\\text{AgCl}$, $M_r = 143.32\\text{ g mol}^{-1}$) is precipitated immediately. Which coordination formula represents this isomer?",
    options: [
      { text: "[Cr(H₂O)₆]Cl₃ (precipitates 3 mol AgCl per mol complex)" },
      { text: "[Cr(H₂O)₅Cl]Cl₂·H₂O (precipitates exactly 2 mol AgCl per mol complex)", isCorrect: true },
      { text: "[Cr(H₂O)₄Cl₂]Cl·2H₂O (precipitates 1 mol AgCl per mol complex)" },
      { text: "[Cr(H₂O)₃Cl₃]·3H₂O (precipitates zero AgCl)" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $\\text{AgCl} = \\frac{2.868\\text{ g}}{143.32\\text{ g mol}^{-1}} = 0.0200\\text{ mol}$.\n* Molar ratio: $\\frac{n(\\text{AgCl})}{n(\\text{Complex})} = \\frac{0.0200}{0.0100} = \\mathbf{2.00}$.\n* This proves there are exactly **2 free chloride counter-ions** outside the coordination sphere: $\\mathbf{[\\text{Cr(H}_2\\text{O)}_5\\text{Cl}]\\text{Cl}_2\\cdot\\text{H}_2\\text{O}}$ (pentaaquachlorochromium(III) chloride monohydrate).",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q8",
    createdAt: "2026-12-18T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_6-2026",
    question: "When carrying out an organic liquid purification by fractional distillation, why is the thermometer bulb placed EXACTLY adjacent to the side-arm entrance of the condenser rather than immersed in the boiling liquid?",
    options: [
      { text: "To prevent the thermometer from cracking" },
      { text: "To accurately measure the true temperature of the exiting vapor condensing into the side-arm, ensuring that only the desired pure fraction is collected at its true boiling point", isCorrect: true },
      { text: "To increase the rate of boiling" },
      { text: "To measure atmospheric pressure" }
    ],
    correctAnswer: 1,
    explanation: "* The vapor passing into the side-arm represents the distillate being collected; measuring vapor temperature at this exact junction confirms the identity and purity of the collecting fraction.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q6",
    createdAt: "2026-12-18T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_7-2026",
    question: "A student determines the percentage of copper in a brass alloy sample ($M_r[\\text{Cu}] = 63.55\\text{ g mol}^{-1}$). A $2.540\\text{ g}$ sample of brass is dissolved in concentrated nitric acid, neutralized, and made up to $250.0\\text{ cm}^3$. Excess potassium iodide is added to a $25.0\\text{ cm}^3$ portion, liberating iodine: $2\\text{Cu}^{2+} + 4\\text{I}^- \\rightarrow 2\\text{CuI(s)} + \\text{I}_2$. The liberated iodine requires $20.00\\text{ cm}^3$ of $0.100\\text{ mol dm}^{-3}$ sodium thiosulfate ($2\\text{S}_2\\text{O}_3^{2-} + \\text{I}_2 \\rightarrow \\text{S}_4\\text{O}_6^{2-} + 2\\text{I}^-$) to reach the starch endpoint. Calculate the mass percentage of copper in the brass alloy.",
    options: [
      { text: "40.0%" },
      { text: "50.0%" },
      { text: "63.6%" },
      { text: "50.04%", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Moles of $\\text{S}_2\\text{O}_3^{2-} = 0.02000 \\times 0.100 = 2.00 \\times 10^{-3}\\text{ mol}$.\n* Stoichiometry: $2\\text{mol Cu}^{2+} \\equiv 1\\text{mol I}_2 \\equiv 2\\text{mol S}_2\\text{O}_3^{2-} \\implies n(\\text{Cu}^{2+}) = n(\\text{S}_2\\text{O}_3^{2-}) = 2.00 \\times 10^{-3}\\text{ mol}$ in $25.0\\text{ cm}^3$.\n* Total moles in $250\\text{ cm}^3 = 2.00 \\times 10^{-3} \\times 10 = 0.0200\\text{ mol}$.\n* Mass of $\\text{Cu} = 0.0200\\text{ mol} \\times 63.55\\text{ g mol}^{-1} = 1.271\\text{ g}$.\n* $\\text{Percentage} = \\frac{1.271\\text{ g}}{2.540\\text{ g}} \\times 100\\% = \\mathbf{50.04\\%}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q13",
    createdAt: "2026-12-26T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_8-2026",
    question: "In an experiment measuring the rate of iodide oxidation by hydrogen peroxide ($\text{H}_2\text{O}_2 + 2\text{I}^- + 2\text{H}^+ \rightarrow \text{I}_2 + 2\text{H}_2\text{O}$), when the concentration of $\text{H}_2\text{O}_2$ is doubled while holding all other concentrations constant, the reaction time ($t$) decreases from $80.0\\text{ s}$ to $40.0\\text{ s}$. When the concentration of $\text{I}^-$ is doubled at constant $[\text{H}_2\text{O}_2]$, the time decreases from $80.0\\text{ s}$ to $20.0\\text{ s}$. What is the overall order of reaction?",
    options: [
      { text: "First order overall" },
      { text: "Second order overall" },
      { text: "Third order overall (Rate = k[H₂O₂]¹[I⁻]²)", isCorrect: true },
      { text: "Zero order overall" }
    ],
    correctAnswer: 2,
    explanation: "* Rate $\\propto \\frac{1}{t}$.\n* Doubling $[\text{H}_2\text{O}_2]$ halves $t \\implies$ Rate doubles ($2^1$) $\\implies$ 1st order in $[\text{H}_2\text{O}_2]$.\n* Doubling $[\text{I}^-]$ reduces $t$ by factor of 4 ($80 \\rightarrow 20\\text{ s}$) $\\implies$ Rate quadruples ($2^2 = 4$) $\\implies$ 2nd order in $[\text{I}^-]$.\n* $\\text{Overall order} = 1 + 2 = \\mathbf{3}$ (Rate $= k[\\text{H}_2\\text{O}_2][\\text{I}^-]^2$).",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q14",
    createdAt: "2026-12-26T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_9-2026",
    question: "A crystalline hydrated salt of nickel chloride $\\text{NiCl}_2\\cdot x\\text{H}_2\\text{O}$ is analyzed. A $2.379\\text{ g}$ sample of the green crystals is dissolved in water and treated with excess dimethylglyoxime in ammoniacal solution, producing a red precipitate of $[\\text{Ni(dmg)}_2]$ of dry mass $2.889\\text{ g}$ ($M_r[\\text{Ni(dmg)}_2] = 288.91\\text{ g mol}^{-1}$; $M_r[\\text{NiCl}_2] = 129.60\\text{ g mol}^{-1}$; $M_r[\\text{H}_2\\text{O}] = 18.02\\text{ g mol}^{-1}$). Determine the integer value of $x$ in the hydrated salt formula.",
    options: [
      { text: "x = 2" },
      { text: "x = 4" },
      { text: "x = 6 (NiCl₂·6H₂O)", isCorrect: true },
      { text: "x = 7" }
    ],
    correctAnswer: 2,
    explanation: "* Moles of Ni complex $= \\frac{2.889\\text{ g}}{288.91\\text{ g mol}^{-1}} = 0.0100\\text{ mol} = n(\\text{NiCl}_2\\cdot x\\text{H}_2\\text{O})$.\n* Molar mass of hydrate $= \\frac{2.379\\text{ g}}{0.0100\\text{ mol}} = 237.9\\text{ g mol}^{-1}$.\n* Mass of water in 1 mole $= 237.9 - 129.60 = 108.3\\text{ g}$.\n* $x = \\frac{108.3}{18.02} = \\mathbf{6.01} \\approx \\mathbf{6}$ (nickel(II) chloride hexahydrate).",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q11",
    createdAt: "2026-12-27T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_10-2026",
    question: "A student performs a thermometric titration of $50.0\\text{ cm}^3$ of $2.00\\text{ mol dm}^{-3}$ $\\text{HCl}$ with $2.00\\text{ mol dm}^{-3}$ $\\text{NaOH}$ in a polystyrene cup, plotting temperature versus volume of $\\text{NaOH}$ added. Why are the pre-equivalence and post-equivalence cooling lines extrapolated to find the maximum theoretical temperature rise ($\Delta T_{\\text{max}}$)?",
    options: [
      { text: "To eliminate errors caused by burette parallax" },
      { text: "To correct for continuous heat loss from the calorimeter to the surroundings that occurs while adding the titrant and measuring temperatures", isCorrect: true },
      { text: "To account for chemical evaporation of water" },
      { text: "Because temperature changes quadratically" }
    ],
    correctAnswer: 1,
    explanation: "* Linear extrapolation of the heating and cooling curves back to the exact neutralization time compensates for heat lost to surroundings, yielding an accurate maximum temperature rise $\\Delta T_{\\text{max}}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q14",
    createdAt: "2026-12-27T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_11-2026",
    question: "In the quantitative analysis of an unknown transition metal solution, addition of aqueous sodium hydroxide produces a pale green precipitate $\\text{A}$, which dissolves in excess $\\text{NaOH}$ to give a deep green solution $\\text{B}$. When hydrogen peroxide ($\\text{H}_2\\text{O}_2$) is added to solution $\\text{B}$ and heated, a bright yellow solution $\\text{C}$ is formed. Acidification of $\\text{C}$ with dilute sulfuric acid turns the solution orange ($\\text{D}$). Identify species $\\text{B}$, $\\text{C}$, and $\\text{D}$.",
    options: [
      { text: "B = [Fe(OH)₆]⁴⁻, C = FeO₄²⁻, D = Fe³⁺" },
      { text: "B = [Cr(OH)₆]³⁻ (or [Cr(OH)₄]⁻), C = CrO₄²⁻ (chromate(VI), yellow), D = Cr₂O₇²⁻ (dichromate(VI), orange)", isCorrect: true },
      { text: "B = [Cu(OH)₄]²⁻, C = CuO, D = Cu²⁺" },
      { text: "B = [Ni(OH)₄]²⁻, C = NiO₂, D = Ni²⁺" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Cr}^{3+}$ is amphoteric: $\\text{Cr(OH)}_3\\text{(s)} + 3\\text{OH}^- \\rightarrow [\\text{Cr(OH)}_6]^{3-}\\text{(aq (dark green))}$.\n* Oxidation with alkaline $\\text{H}_2\\text{O}_2$: $2[\\text{Cr(OH)}_6]^{3-} + 3\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{CrO}_4^{2-}\\text{(aq (yellow))} + 2\\text{OH}^- + 8\\text{H}_2\\text{O}$.\n* Acidification shifts equilibrium to orange dichromate: $2\\text{CrO}_4^{2-} + 2\\text{H}^+ \\rightleftharpoons \\text{Cr}_2\\text{O}_7^{2-}\\text{(aq (orange))} + \\text{H}_2\\text{O}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q15",
    createdAt: "2026-12-28T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_12-2026",
    question: "When determining the percentage uncertainty in a titration where a $50.00\\text{ cm}^3$ burette with an uncertainty of $\\pm 0.05\\text{ cm}^3$ per reading gives an initial reading of $1.10\\text{ cm}^3$ and a final reading of $24.70\\text{ cm}^3$, what is the total percentage apparatus uncertainty for the titre volume?",
    options: [
      { text: "0.21%" },
      { text: "0.42%", isCorrect: true },
      { text: "0.85%" },
      { text: "1.00%" }
    ],
    correctAnswer: 1,
    explanation: "* Titre volume $= 24.70 - 1.10 = 23.60\\text{ cm}^3$.\n* Two readings taken (initial and final), so total absolute uncertainty $= 2 \\times (\\pm 0.05) = \\pm 0.10\\text{ cm}^3$.\n* $\\text{Percentage uncertainty} = \\frac{0.10\\text{ cm}^3}{23.60\\text{ cm}^3} \\times 100\\% = \\mathbf{0.4237\\%} \\approx \\mathbf{0.42\\%}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q12",
    createdAt: "2026-12-28T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_13-june2026",
    question: "In the analysis of iron in 'iron tablets', five crushed tablets (total mass 1.75 g) are dissolved in excess dilute sulfuric acid and made up to 250 cm³ with distilled water. A 25.0 cm³ aliquot requires 22.4 cm³ of 0.0100 mol dm⁻³ KMnO₄ for complete reaction. What is the mass of iron (Fe) in ONE tablet? (Aᵣ: Fe = 55.8)\n5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O",
    options: [
      { text: "125 mg", isCorrect: true },
      { text: "62.5 mg" },
      { text: "250 mg" },
      { text: "31.3 mg" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of $\\\\text{MnO}_4^- = 0.0224 \\\\times 0.0100 = 2.24 \\\\times 10^{-4}\\\\text{ mol}$.\n* Moles of $\\\\text{Fe}^{2+}$ in $25.0\\\\text{ cm}^3 = 5 \\\\times (2.24 \\\\times 10^{-4}) = 1.12 \\\\times 10^{-3}\\\\text{ mol}$.\n* Total moles of $\\\\text{Fe}^{2+}$ in $250\\\\text{ cm}^3 = 1.12 \\\\times 10^{-3} \\\\times 10 = 1.12 \\\\times 10^{-2}\\\\text{ mol}$.\n* Total mass of iron in 5 tablets $= 1.12 \\\\times 10^{-2} \\\\times 55.8 = 0.625\\\\text{ g} = 625\\\\text{ mg}$.\n* Mass of iron per tablet $= \\\\frac{625\\\\text{ mg}}{5} = 125\\\\text{ mg}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q1",
    createdAt: "2026-06-20T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_14-june2026",
    question: "During the preparation and purification of aspirin by recrystallisation from hot water/ethanol, which of the following observations indicates that the recrystallised product is pure?",
    options: [
      { text: "A sharp melting point within 1–2 °C of the literature value (138–140 °C) and a negative neutral iron(III) chloride test", isCorrect: true },
      { text: "A broad melting range from 125 °C to 142 °C" },
      { text: "A deep purple coloration when tested with neutral iron(III) chloride solution" },
      { text: "Effervescence with sodium carbonate solution only when heated" }
    ],
    correctAnswer: 0,
    explanation: "* Pure crystalline organic compounds melt sharply over a narrow temperature range (typically within $1-2^\\\\circ\\\\text{C}$) close to the true literature value.\n* Any unreacted starting material (2-hydroxybenzoic acid) contains a phenolic $-\\\\text{OH}$ group which gives a purple coloration with $\\\\text{FeCl}_3$; a pure aspirin sample gives no purple colour.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q2",
    createdAt: "2026-06-20T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_15-june2026",
    question: "A 2.50 g sample of brass (a copper-zinc alloy) is dissolved in concentrated nitric acid and diluted to 250 cm³. An excess of aqueous potassium iodide (KI) is added to a 25.0 cm³ portion, precipitating copper(I) iodide and liberating iodine:\n2Cu²⁺ + 4I⁻ → 2CuI(s) + I₂\nThe liberated iodine requires 28.5 cm³ of 0.100 mol dm⁻³ Na₂S₂O₃ for complete titration:\n2S₂O₃²⁻ + I₂ → S₄O₆²⁻ + 2I⁻\nWhat is the percentage by mass of copper in the brass alloy? (Aᵣ: Cu = 63.5)",
    options: [
      { text: "72.4%", isCorrect: true },
      { text: "36.2%" },
      { text: "85.0%" },
      { text: "55.5%" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of $\\\\text{S}_2\\\\text{O}_3^{2-} = 0.0285 \\\\times 0.100 = 2.85 \\\\times 10^{-3}\\\\text{ mol}$.\n* Stoichiometry: $2\\\\text{S}_2\\\\text{O}_3^{2-} \\\\equiv \\\\text{I}_2 \\\\equiv 2\\\\text{Cu}^{2+} \\\\implies n(\\\\text{Cu}^{2+}) = n(\\\\text{S}_2\\\\text{O}_3^{2-}) = 2.85 \\\\times 10^{-3}\\\\text{ mol}$ in $25.0\\\\text{ cm}^3$.\n* Total moles of $\\\\text{Cu}^{2+}$ in $250\\\\text{ cm}^3 = 2.85 \\\\times 10^{-3} \\\\times 10 = 2.85 \\\\times 10^{-2}\\\\text{ mol}$.\n* Mass of copper $= 2.85 \\\\times 10^{-2} \\\\times 63.5 = 1.810\\\\text{ g}$.\n* $\\\\text{\\% Cu} = \\\\frac{1.810}{2.50} \\\\times 100 = 72.4\\%$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q19",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_16-june2026",
    question: "In an Arrhenius kinetics investigation, the rate of reaction is measured at various temperatures using a clock method. A graph of ln(1/t) against 1/T yields a straight line with a slope of −6250 K. What is the experimental activation energy (E_a) of this reaction in kJ mol⁻¹? (R = 8.314 J mol⁻¹ K⁻¹)",
    options: [
      { text: "+52.0 kJ mol⁻¹", isCorrect: true },
      { text: "−52.0 kJ mol⁻¹" },
      { text: "+75.2 kJ mol⁻¹" },
      { text: "+26.0 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Since rate $\\\\propto \\\\frac{1}{t}$, the Arrhenius equation is: $\\\\ln(1/t) = -\\\\frac{E_a}{R}\\\\left(\\\\frac{1}{T}\\\\right) + \\\\text{constant}$.\n* $\\\\text{Slope} = -\\\\frac{E_a}{R} = -6250\\\\text{ K}$.\n* $E_a = -(-6250) \\\\times 8.314 = 51,962.5\\\\text{ J mol}^{-1} = +52.0\\\\text{ kJ mol}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q20",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_17-june2026",
    question: "A chemist wishes to prepare an aqueous buffer solution of pH 4.80. Which of the following acid–base conjugate pairs is most effective?",
    options: [
      { text: "Ethanoic acid and sodium ethanoate (pK_a = 4.76)", isCorrect: true },
      { text: "Methanoic acid and sodium methanoate (pK_a = 3.75)" },
      { text: "Carbonic acid and sodium hydrogencarbonate (pK_a = 6.35)" },
      { text: "Ammonium chloride and ammonia (pK_a = 9.25)" }
    ],
    correctAnswer: 0,
    explanation: "* A buffer has maximum buffering capacity when $\\\\text{pH} = \\\\text{p}K_a$, where the concentrations of weak acid and conjugate base are equal ($[\\\\text{HA}] = [\\\\text{A}^-]$).\n* For $\\\\text{pH } 4.80$, ethanoic acid ($\\\\text{p}K_a = 4.76$) is closest to the desired pH.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q21",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_18-june2026",
    question: "In solvent extraction, why is extracting an aqueous solution with two successive 25 cm³ portions of an organic solvent mathematically more efficient than extracting once with a single 50 cm³ portion?",
    options: [
      { text: "The partition coefficient governs that successive extractions leave a smaller geometric fraction of solute unextracted in the aqueous layer", isCorrect: true },
      { text: "The organic solvent becomes denser in smaller volumes" },
      { text: "Two extractions eliminate the partition coefficient completely" },
      { text: "The solute decomposes in large volumes of solvent" }
    ],
    correctAnswer: 0,
    explanation: "* The mass of solute remaining in the aqueous layer after $n$ extractions is $m_n = m_0 \\\\left(\\\\frac{V_{\\\\text{aq}}}{V_{\\\\text{aq}} + K_D V_{\\\\text{org}}}\\\\right)^n$.\n* Because the factor is raised to the power of $n$, multiple extractions with smaller portions always extract a greater total percentage of solute.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q22",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_19-june2026",
    question: "A student synthesises aspirin by reacting 2.00 g of 2-hydroxybenzoic acid (Mᵣ = 138.1) with excess ethanoic anhydride. After recrystallisation, 1.85 g of dry pure aspirin (Mᵣ = 180.2) is collected. What is the percentage yield?",
    options: [
      { text: "70.9%", isCorrect: true },
      { text: "92.5%" },
      { text: "61.2%" },
      { text: "80.4%" }
    ],
    correctAnswer: 0,
    explanation: "* Theoretical moles of acid $= \\\\frac{2.00}{138.1} = 0.01448\\\\text{ mol}$.\n* Theoretical mass of aspirin $= 0.01448 \\\\times 180.2 = 2.610\\\\text{ g}$.\n* $\\\\text{\\% Yield} = \\\\frac{1.85}{2.610} \\\\times 100 = 70.88\\% \\\\approx 70.9\\%$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q23",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_20-june2026",
    question: "In the infrared spectrum of pure aspirin, which two distinct carbonyl (C=O) absorption peaks are observed?",
    options: [
      { text: "An ester C=O peak at approx. 1750 cm⁻¹ and a carboxylic acid C=O peak at approx. 1690 cm⁻¹", isCorrect: true },
      { text: "A single broad peak at 3300 cm⁻¹" },
      { text: "An aldehyde C=O peak at 1720 cm⁻¹ and an amide C=O at 1650 cm⁻¹" },
      { text: "Two peaks at 2250 cm⁻¹ due to nitrile groups" }
    ],
    correctAnswer: 0,
    explanation: "* Aspirin (acetylsalicylic acid) contains both an ester group and a carboxylic acid group.\n* The ester $-\\\\text{OCOCH}_3$ carbonyl absorbs at $\\\\sim 1750\\\\text{ cm}^{-1}$, while the hydrogen-bonded aryl carboxylic acid $-\\\\text{COOH}$ carbonyl absorbs at $\\\\sim 1690\\\\text{ cm}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q24",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_21-june2026",
    question: "How many peaks are observed in the low-resolution ¹H-NMR spectrum of aspirin (2-ethanoyloxybenzoic acid), and what is the relative peak area ratio?",
    options: [
      { text: "3 peaks with peak area ratio 3 : 4 : 1", isCorrect: true },
      { text: "4 peaks with peak area ratio 1 : 1 : 1 : 1" },
      { text: "2 peaks with peak area ratio 3 : 5" },
      { text: "5 peaks with peak area ratio 3 : 1 : 1 : 1 : 1" }
    ],
    correctAnswer: 0,
    explanation: "* Aspirin has three proton environments:\n  1. The methyl group protons ($-\\\\text{CH}_3$): 3 protons (singlet $\\\\delta \\\\sim 2.3$).\n  2. The aromatic ring protons: 4 protons (multiplets $\\\\delta \\\\sim 7.1-8.1$).\n  3. The carboxylic acid proton ($-\\\\text{COOH}$): 1 proton (broad singlet $\\\\delta \\\\sim 11.0$).\n* Relative ratio of peak areas is $3 : 4 : 1$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q25",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_22-june2026",
    question: "When heating an impure solid sample in a capillary tube to measure its melting point, which of the following confirms that the sample contains an impurity?",
    options: [
      { text: "The melting point is lower than the literature value and the sample melts over a broad temperature range of several degrees", isCorrect: true },
      { text: "The sample melts at an exact single temperature higher than the literature value" },
      { text: "The sample sublimes directly into gas without melting" },
      { text: "The sample turns bright blue before melting" }
    ],
    correctAnswer: 0,
    explanation: "* Impurities disrupt the regular crystalline lattice of a solid, weakening intermolecular forces.\n* This causes melting point depression (melting below true value) and melting point broadening (melting over a range $> 2^\\\\circ\\\\text{C}$).",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q26",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_23-interactive",
    question: "In Core Practical 13b, a student investigates the variation of the rate constant (k in s⁻¹) with absolute temperature (T in K) for an organic substitution reaction to determine the activation energy. Use the interactive graph plotter below to plot ln k against (1000/T) and draw the line of best fit to determine the gradient and calculate the activation energy (Ea) in kJ mol⁻¹.\n*(Gas constant: R = 8.31 J K⁻¹ mol⁻¹)*",
    options: [
      { text: "Gradient = -10,000 K; Ea = +83.1 kJ mol⁻¹", isCorrect: true },
      { text: "Gradient = +10,000 K; Ea = -83.1 kJ mol⁻¹" },
      { text: "Gradient = -5,000 K; Ea = +41.6 kJ mol⁻¹" },
      { text: "Gradient = -1,200 K; Ea = +9.97 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* The Arrhenius equation in logarithmic form: $\\ln k = -\\frac{E_a}{R} \\left(\\frac{1}{T}\\right) + \\ln A$\n* Plotting $\\ln k$ against $\\frac{1000}{T}$ gives a straight line with gradient $m = -\\frac{E_a}{1000 R}$\n* From the plotted coordinates: $m = \\frac{-5.0 - (-2.0)}{3.40 - 3.10} = \\frac{-3.0}{0.30} = -10.0\\times 10^3\\text{ K} = -10,000\\text{ K}$\n* Activation energy: $E_a = -m \\times R = -(-10,000\\text{ K}) \\times 8.31\\text{ J K}^{-1}\\text{mol}^{-1} = +83,100\\text{ J mol}^{-1} = \\mathbf{+83.1\\text{ kJ mol}^{-1}}$",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q27",
    createdAt: "2026-06-23T10:00:00Z",
    graphConfig: {
      title: "Core Practical 13b: Arrhenius Plot (ln k vs 1000/T)",
      xAxis: {
        label: "1000 / T",
        unit: "K⁻¹",
        min: 3.0,
        max: 3.5,
        step: 0.1
      },
      yAxis: {
        label: "ln k",
        unit: "",
        min: -6.0,
        max: -1.0,
        step: 1.0
      },
      targetPoints: [
        { x: 3.10, y: -2.0 },
        { x: 3.20, y: -3.0 },
        { x: 3.30, y: -4.0 },
        { x: 3.40, y: -5.0 }
      ],
      curveType: "line",
      tolerance: 0.15
    },
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "straight line with negative gradient", text: "Points plotted correctly and line drawn with negative slope." },
        { mark: 1, keyword: "gradient = -10000 K", text: "Calculate gradient m = -10,000 K from line coordinates." },
        { mark: 1, keyword: "+83.1 kJ mol-1", text: "Calculate Ea = +83.1 kJ mol⁻¹ (converting J to kJ)." }
      ],
      examinerTips: "Remember that gradient equals -Ea/R, so activation energy is positive. Always convert J mol⁻¹ to kJ mol⁻¹."
    }
  },
  {
    id: "ex_ed_u6_l1_lv3_24-interactive",
    question: "In Core Practical 12, a student titrates 25.0 cm³ of 0.100 mol dm⁻³ ethanoic acid (CH₃COOH) with 0.100 mol dm⁻³ sodium hydroxide using a calibrated pH meter. Use the interactive graph plotter below to plot pH against the volume of NaOH added, and identify the pH at the half-equivalence point to deduce the acid dissociation constant (pKa) of ethanoic acid.",
    options: [
      { text: "Equivalence at 25.0 cm³; Half-equivalence at 12.5 cm³ where pH = pKa = 4.8", isCorrect: true },
      { text: "Equivalence at 50.0 cm³; Half-equivalence at 25.0 cm³ where pH = pKa = 7.0" },
      { text: "Equivalence at 25.0 cm³; Half-equivalence at 12.5 cm³ where pH = 1.0" },
      { text: "Equivalence at 20.0 cm³; Half-equivalence at 10.0 cm³ where pH = 3.2" }
    ],
    correctAnswer: 0,
    explanation: "* Equivalence occurs when stoichiometric amounts react: $25.0\\text{ cm}^3$ of $\\text{NaOH}$\n* Half-equivalence occurs at exactly half this volume ($12.5\\text{ cm}^3$)\n* At half-equivalence, $[\\text{CH}_3\\text{COOH}] = [\\text{CH}_3\\text{COO}^-]$, so by the buffer equation: $\\text{pH} = \\text{p}K_a + \\log(1) = \\text{p}K_a = 4.8$\n* Therefore, $K_a = 10^{-4.8} = 1.58 \\times 10^{-5}\\text{ mol dm}^{-3}$",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q28",
    createdAt: "2026-06-23T10:00:00Z",
    graphConfig: {
      title: "Core Practical 12: Weak Acid - Strong Base Titration pH Curve",
      xAxis: {
        label: "Volume of 0.100 mol dm⁻³ NaOH added",
        unit: "cm³",
        min: 0,
        max: 50,
        step: 10
      },
      yAxis: {
        label: "pH",
        unit: "",
        min: 0,
        max: 14,
        step: 2
      },
      targetPoints: [
        { x: 0, y: 2.9 },
        { x: 12.5, y: 4.8 },
        { x: 20.0, y: 5.4 },
        { x: 24.0, y: 6.2 },
        { x: 25.0, y: 8.8 },
        { x: 26.0, y: 11.2 },
        { x: 35.0, y: 12.3 },
        { x: 50.0, y: 12.7 }
      ],
      curveType: "curve",
      tolerance: 0.5
    },
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "S-shaped curve with steep rise at 25.0 cm3", text: "Curve shows buffer region and sharp vertical equivalence region at 25.0 cm³." },
        { mark: 1, keyword: "half-equivalence at 12.5 cm3", text: "Identify half-equivalence point at V = 12.5 cm³." },
        { mark: 1, keyword: "pH = pKa = 4.8", text: "State that at half-equivalence [acid] = [salt] so pH = pKa = 4.8." }
      ],
      examinerTips: "At half-neutralisation of a weak monoprotic acid, pH always equals pKa."
    }
  },
  {
    id: "ex_ed_u6_l1_lv3_25-jan2026",
    question: "A student performs a redox titration to determine the percentage by mass of iron in an iron wire. A 1.40 g sample of iron wire is dissolved in excess dilute sulfuric acid to form Fe²⁺(aq) and made up to 250.0 cm³. A 25.0 cm³ aliquot requires 24.50 cm³ of 0.0200 mol dm⁻³ KMnO₄ for complete oxidation:\n$$\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$$\nWhat is the percentage by mass of iron in the wire?\n*(Relative atomic mass: Fe = 55.8 g mol⁻¹)*",
    options: [
      { text: "97.7%", isCorrect: true },
      { text: "85.4%" },
      { text: "91.2%" },
      { text: "78.9%" }
    ],
    correctAnswer: 0,
    explanation: "* Amount of $\\text{MnO}_4^-$ in titre: $n = 0.02450 \\times 0.0200 = 4.90 \\times 10^{-4}\\text{ mol}$\n* Mole ratio $\\text{Fe}^{2+} : \\text{MnO}_4^- = 5 : 1$, so $n(\\text{Fe}^{2+})\\text{ in } 25.0\\text{ cm}^3 = 5 \\times 4.90 \\times 10^{-4} = 2.45 \\times 10^{-3}\\text{ mol}$\n* Total $n(\\text{Fe}^{2+})\\text{ in } 250.0\\text{ cm}^3 = 2.45 \\times 10^{-3} \\times 10 = 2.45 \\times 10^{-2}\\text{ mol}$\n* Total mass of iron: $m = 2.45 \\times 10^{-2}\\text{ mol} \\times 55.8\\text{ g mol}^{-1} = 1.367\\text{ g}$\n* Percentage of iron in wire: $\\frac{1.367\\text{ g}}{1.40\\text{ g}} \\times 100 = \\mathbf{97.7\\%}$",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q13",
    createdAt: "2026-01-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_26-jan2026",
    question: "When monitoring the progress of an organic reaction using thin-layer chromatography (TLC), why must the solvent level in the developing tank be kept below the pencil baseline on which the reaction samples are spotted?",
    options: [
      { text: "If the solvent level is above the baseline, the spotted samples will dissolve directly into the solvent pool instead of travelling up the plate by capillary action", isCorrect: true },
      { text: "The solvent will chemically react with the silica coating on the plate" },
      { text: "The pencil lead will dissolve and blur the ultraviolet visualization" },
      { text: "It prevents the solvent from evaporating through the top of the chromatography tank" }
    ],
    correctAnswer: 0,
    explanation: "* The solvent must rise past the baseline by capillary action through the stationary phase (silica gel or alumina)\n* If the initial solvent depth exceeds the baseline height, the sample spots will dissolve into the bulk solvent reservoir at the bottom of the beaker, ruining the chromatogram",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q14",
    createdAt: "2026-01-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_27-jan2026",
    question: "An ester with molecular formula C₄H₈O₂ produces a high-resolution ¹H-NMR spectrum with three signals: a singlet at δ 2.0 ppm (relative area 3), a triplet at δ 1.2 ppm (relative area 3), and a quartet at δ 4.1 ppm (relative area 2). Which ester is this?",
    options: [
      { text: "Ethyl ethanoate, CH₃COOCH₂CH₃", isCorrect: true },
      { text: "Methyl propanoate, CH₃CH₂COOCH₃" },
      { text: "Propyl methanoate, HCOOCH₂CH₂CH₃" },
      { text: "Isopropyl methanoate, HCOOCH(CH₃)₂" }
    ],
    correctAnswer: 0,
    explanation: "* The singlet at $\\delta\\text{ 2.0 ppm}$ (area 3) corresponds to an isolated $-\\text{CO}-\\text{CH}_3$ methyl group with no adjacent protons ($0 + 1 = 1$ singlet)\n* The quartet at $\\delta\\text{ 4.1 ppm}$ (area 2) corresponds to $-\\text{O}-\\text{CH}_2-$, deshielded by the single-bonded oxygen and split by adjacent $-\\text{CH}_3$ ($3 + 1 = 4$ quartet)\n* The triplet at $\\delta\\text{ 1.2 ppm}$ (area 3) corresponds to the terminal $-\\text{CH}_3$ of the ethyl group, split by $-\\text{CH}_2-$ ($2 + 1 = 3$ triplet)\n* This confirms ethyl ethanoate: $\\text{CH}_3\\text{COOCH}_2\\text{CH}_3$",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q15",
    createdAt: "2026-01-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_28-oct2025",
    question: "In an iodometric titration to determine the concentration of copper(II) ions in brass, excess potassium iodide is added to liberate iodine:\n$$2\\text{Cu}^{2+} + 4\\text{I}^- \\rightarrow 2\\text{CuI(s)} + \\text{I}_2$$\nThe liberated iodine is titrated against standard sodium thiosulfate solution:\n$$2\\text{S}_2\\text{O}_3^{2-} + \\text{I}_2 \\rightarrow \\text{S}_4\\text{O}_6^{2-} + 2\\text{I}^-$$\nWhy must the starch indicator only be added when the solution becomes pale straw-yellow, rather than at the start of the titration?",
    options: [
      { text: "At high iodine concentrations, starch forms an insoluble blue-black complex that releases iodine very slowly, leading to an inaccurate endpoint", isCorrect: true },
      { text: "Starch decomposes rapidly in acidic conditions if left too long" },
      { text: "Starch oxidises copper(I) iodide precipitate back to copper(II) ions" },
      { text: "The sodium thiosulfate is hydrolysed by starch unless the concentration is low" }
    ],
    correctAnswer: 0,
    explanation: "* When iodine concentration is high at the beginning of the titration, starch forms an intensely dark and relatively insoluble starch-iodine inclusion complex\n* This complex does not readily dissociate or release iodine back into solution when near the endpoint, causing sluggish colour changes and overshooting the true equivalence point\n* Adding starch when the mixture is pale straw-yellow (low $[\\text{I}_2]$) ensures rapid, reversible release of iodine and a sharp transition from blue-black to creamy-white precipitate",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q6",
    createdAt: "2025-10-18T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_29-jan2025",
    question: "In an experiment to determine the activation energy of a chemical reaction, a student measures the reaction time t at various temperatures T. Which plot yields a straight line whose gradient can be directly used to calculate the activation energy $E_a$?\n*(R is the universal gas constant)*",
    options: [
      { text: "ln(1/t) on the y-axis against 1/T on the x-axis, with gradient = -Ea / R", isCorrect: true },
      { text: "t on the y-axis against T on the x-axis, with gradient = Ea × R" },
      { text: "ln(t) on the y-axis against T on the x-axis, with gradient = -Ea / R" },
      { text: "1/t on the y-axis against ln(T) on the x-axis, with gradient = Ea / R" }
    ],
    correctAnswer: 0,
    explanation: "* The rate constant $k$ is inversely proportional to reaction time: $k \\propto 1/t$\n* The Arrhenius equation is $\\ln(k) = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln(A)$\n* Substituting $k \\propto 1/t$ gives $\\ln(1/t) = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\text{constant}$\n* A plot of $\\ln(1/t)$ vs $1/T$ is linear with gradient $m = -E_a / R$, from which $E_a = -m \\times R$",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q13",
    createdAt: "2025-01-18T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_30-jan2025",
    question: "A student uses a colorimeter to determine the concentration of copper(II) ions in an unknown sample. Which filter color should be selected, and why?",
    options: [
      { text: "Red filter, because the blue copper(II) solution absorbs red light most strongly", isCorrect: true },
      { text: "Blue filter, because the solution transmits and reflects blue light" },
      { text: "Green filter, because green light has the highest energy in the visible spectrum" },
      { text: "Violet filter, because it produces maximum fluorescence in aqueous ions" }
    ],
    correctAnswer: 0,
    explanation: "* A colorimeter measures absorbance; the chosen filter must correspond to the complementary wavelength that the solute absorbs most strongly\n* Aqueous copper(II) ions appear blue because they transmit blue wavelengths and absorb complementary orange-red wavelengths ($620-700\\text{ nm}$)\n* Using a red filter maximizes light absorbance and provides the greatest sensitivity and linearity in calibration curves",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q14",
    createdAt: "2025-01-18T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_31-jan2025",
    question: "After synthesizing and filtering crystals of potassium tris(oxalato)ferrate(III), why are the crystals washed with a small volume of ice-cold ethanol rather than room-temperature distilled water?",
    options: [
      { text: "The complex is significantly soluble in water but insoluble in cold ethanol, minimizing yield loss while removing soluble impurities and speeding up drying", isCorrect: true },
      { text: "Water would reduce iron(III) in the complex to iron(II)" },
      { text: "Ethanol acts as a catalyst to convert the amorphous solid into crystalline needles" },
      { text: "Water reacts violently with the oxalate ligands to release toxic carbon monoxide gas" }
    ],
    correctAnswer: 0,
    explanation: "* Potassium tris(oxalato)ferrate(III) is an ionic coordination compound that is soluble in water, especially at room temperature\n* Washing with water would dissolve significant quantities of product, drastically reducing percentage yield\n* Ice-cold ethanol removes aqueous soluble impurities without dissolving the coordination salt, and its volatility accelerates drying of the crystals",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q15",
    createdAt: "2025-01-18T10:00:00Z"
  }
];


