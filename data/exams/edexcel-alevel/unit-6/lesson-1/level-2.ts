import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u6_l1_lv2_1-2026",
    question: "During the preparation and purification of an organic solid (such as aspirin or benzoic acid) by recrystallization, why is the crude solid dissolved in the MINIMUM volume of HOT solvent?",
    options: [
      { text: "To increase the temperature of the laboratory" },
      { text: "To ensure the solution is saturated at high temperature, maximizing the yield of pure crystals upon cooling and minimizing loss of product remaining dissolved in the cold filtrate", isCorrect: true },
      { text: "To prevent the solid from reacting with oxygen" },
      { text: "To completely evaporate the solvent instantly" }
    ],
    correctAnswer: 1,
    explanation: "* Using minimum hot solvent creates a saturated solution; when cooled in an ice bath, solubility drops drastically, precipitating the maximum mass of pure crystal product.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q4",
    createdAt: "2026-12-13T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_2-2026",
    question: "Why is a Buchner funnel and suction flask attached to a vacuum pump preferred over simple gravity filtration using a conical filter funnel when isolating recrystallized organic crystals?",
    options: [
      { text: "Suction filtration neutralizes acidic impurities" },
      { text: "Vacuum filtration provides vastly faster liquid-solid separation and pulls air through the crystal cake to yield much drier crystals", isCorrect: true },
      { text: "It prevents crystals from dissolving in hot solvent" },
      { text: "It eliminates the need for filter paper" }
    ],
    correctAnswer: 1,
    explanation: "* Reduced pressure below the Buchner funnel speeds up filtration by tenfold and draws air through the solid, efficiently removing mother liquor.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q5",
    createdAt: "2026-12-13T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_3-2026",
    question: "In the redox titration of iron(II) ions with standard acidified potassium manganate(VII): $\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$, why must dilute sulfuric acid ($\\text{H}_2\\text{SO}_4$) be used for acidification rather than hydrochloric acid ($\\text{HCl}$) or nitric acid ($\\text{HNO}_3$)?",
    options: [
      { text: "Sulfuric acid is a catalyst for the reaction" },
      { text: "Chloride ions (Cl⁻) in HCl would be oxidized by MnO₄⁻ to toxic Cl₂ gas, giving an erroneously high titre; HNO₃ is an oxidizing agent that would oxidize Fe²⁺ prematurely", isCorrect: true },
      { text: "HCl dissolves the glass burette" },
      { text: "Sulfuric acid acts as the color indicator" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{MnO}_4^-$ has $E^\\ominus = +1.51\\text{ V}$, high enough to oxidize $\\text{Cl}^-$ to $\\text{Cl}_2$ ($E^\\ominus = +1.36\\text{ V}$), falsely consuming manganate; $\\text{SO}_4^{2-}$ is completely resistant to oxidation.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q3",
    createdAt: "2026-12-14T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_4-2026",
    question: "When measuring the potential difference of an electrochemical cell: $\\text{Zn(s)} | \\text{Zn}^{2+}\\text{(aq)} || \\text{Cu}^{2+}\\text{(aq)} | \\text{Cu(s)}$, what is the vital function of the potassium nitrate ($\\text{KNO}_3$) salt bridge?",
    options: [
      { text: "To allow electrons to flow directly through the liquid" },
      { text: "To complete the electrical circuit by allowing ions to migrate between half-cells, maintaining electrical neutrality without allowing the two bulk solutions to mix", isCorrect: true },
      { text: "To act as a catalyst for zinc oxidation" },
      { text: "To measure the pH of both solutions" }
    ],
    correctAnswer: 1,
    explanation: "* Ions ($\text{K}^+$ and $\text{NO}_3^-$) migrate through the agar gel to balance charge build-up, preventing polarization that would halt cell current.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q5",
    createdAt: "2026-12-14T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_5-2026",
    question: "In the continuous colorimetric monitoring of the iodine-propanone reaction: $\\text{CH}_3\\text{COCH}_3 + \\text{I}_2 \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COCH}_2\\text{I} + \\text{H}^+ + \\text{I}^-$, why is a blue or complementary green-blue filter chosen for the colorimeter?",
    options: [
      { text: "To prevent heat transfer to the cuvette" },
      { text: "Because brown/yellow aqueous iodine strongly absorbs blue/cyan wavelengths of light (400–480 nm), maximizing absorbance sensitivity according to the Beer-Lambert Law", isCorrect: true },
      { text: "To make the propanone glow under fluorescence" },
      { text: "To catalyze the iodination reaction" }
    ],
    correctAnswer: 1,
    explanation: "* A colorimeter filter must transmit the complementary wavelength to the solution color (yellow-brown solutions absorb blue light maximally), maximizing linear absorbance change with $[\text{I}_2]$.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q6",
    createdAt: "2026-12-15T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_6-2026",
    question: "During the preparation of a liquid organic product (such as ethyl ethanoate or cyclohexene), the crude organic distillate in a separatory funnel is washed with aqueous sodium carbonate ($\\text{Na}_2\\text{CO}_3\\text{(aq)}$). Why must the stoppered funnel be inverted and vented repeatedly during shaking?",
    options: [
      { text: "To allow oxygen into the funnel" },
      { text: "To release the build-up of carbon dioxide gas (CO₂) pressure produced from the neutralization of acidic impurities (2H⁺ + CO₃²⁻ → H₂O + CO₂)", isCorrect: true },
      { text: "To evaporate the solvent" },
      { text: "To separate the layers faster" }
    ],
    correctAnswer: 1,
    explanation: "* Neutralization of acid residues generates $\\text{CO}_2$ gas, causing rapid pressure build-up that could blow the stopper out violently if not vented.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q4",
    createdAt: "2026-12-15T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_7-2026",
    question: "In the continuous gravimetric monitoring of the decomposition of calcium carbonate ($\text{CaCO}_3\\text{(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{CaCl}_2\\text{(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$) placed on a top-pan digital balance, why is a loose plug of cotton wool inserted into the neck of the conical flask?",
    options: [
      { text: "To prevent heat loss to the surroundings" },
      { text: "To allow the heavy CO₂ gas to escape freely while completely blocking acid spray/droplets from being carried out, preventing an exaggerated false mass loss", isCorrect: true },
      { text: "To absorb atmospheric moisture" },
      { text: "To trap CO₂ gas inside the flask" }
    ],
    correctAnswer: 1,
    explanation: "* Bubbles of effervescing gas throw up microscopic acid droplets. Cotton wool permits $\\text{CO}_2$ gas exit while catching aerosol spray.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q11",
    createdAt: "2026-12-23T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_8-2026",
    question: "Why is a water bath or electric heating mantle used rather than an open Bunsen burner flame when heating organic reaction mixtures containing ethanol or propanone?",
    options: [
      { text: "Organic reactions require very low temperatures" },
      { text: "Ethanol and propanone are highly flammable volatile organic liquids with low flashpoints; their vapors can ignite explosively if exposed to an open flame", isCorrect: true },
      { text: "Bunsen flames destroy glass flasks" },
      { text: "Electric mantles accelerate nuclear decay" }
    ],
    correctAnswer: 1,
    explanation: "* Flammable volatile solvents produce dense, flammable vapors that sink and ignite readily on contact with naked flames.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q12",
    createdAt: "2026-12-23T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_9-2026",
    question: "How is the end point of an EDTA complexometric titration for determining aqueous $\\text{Mg}^{2+}$ or $\\text{Ca}^{2+}$ water hardness detected using Eriochrome Black T (EBT) indicator at $pH = 10$?",
    options: [
      { text: "Color change from yellow to clear" },
      { text: "Color change from wine-red ([Mg-EBT] complex) to pure sky-blue (free uncomplexed EBT indicator when all Mg²⁺ is chelated by EDTA⁴⁻)", isCorrect: true },
      { text: "Formation of a dense white precipitate" },
      { text: "Evolution of gas bubbles" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{EDTA}^{4-}$ forms a stronger chelate with $\\text{Mg}^{2+}$ than EBT does, releasing free $\\text{EBT}^{2-}$, which is distinctly sky-blue at $pH = 10$.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q9",
    createdAt: "2026-12-24T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_10-2026",
    question: "What is the key experimental difference in apparatus setup between refluxing a reaction mixture and distilling the product?",
    options: [
      { text: "Reflux uses an open beaker, while distillation uses a closed test tube" },
      { text: "In reflux, the condenser is vertical (open to the air at the top) returning vapors to the flask; in distillation, the condenser is sloped downward with a thermometer and collection vessel to separate components by boiling point", isCorrect: true },
      { text: "Reflux requires ice, distillation requires high pressure" },
      { text: "Distillation does not use heat" }
    ],
    correctAnswer: 1,
    explanation: "* Reflux allows prolonged heating without loss of volatile reactants; distillation separates and collects the volatile fraction based on boiling point differences.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q12",
    createdAt: "2026-12-24T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_11-2026",
    question: "Why is an ice-cold solvent used to wash recrystallized aspirin crystals on the Buchner funnel during vacuum filtration?",
    options: [
      { text: "To freeze the filter paper" },
      { text: "To wash away soluble mother liquor impurities adhering to the crystal surfaces while minimizing the dissolution and loss of purified crystal product", isCorrect: true },
      { text: "To catalyze crystal growth" },
      { text: "To convert aspirin into salicylic acid" }
    ],
    correctAnswer: 1,
    explanation: "* Organic solids have minimal solubility in ice-cold solvents; washing with warm solvent would dissolve and wash away significant amounts of the purified product.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q13",
    createdAt: "2026-12-25T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_12-2026",
    question: "When measuring enthalpy changes of neutralization in a simple polystyrene cup calorimeter, which of the following is the PRIMARY source of experimental uncertainty?",
    options: [
      { text: "Measuring cylinder graduation marks" },
      { text: "Heat exchange (loss) to the surroundings and the heat capacity of the polystyrene cup/thermometer not being fully accounted for", isCorrect: true },
      { text: "The color of the solutions" },
      { text: "Atmospheric pressure fluctuations" }
    ],
    correctAnswer: 1,
    explanation: "* Heat loss to the atmosphere and container absorption during the reaction are the dominant systematic errors, causing experimental $\\Delta H$ to be less exothermic than theoretical values.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q10",
    createdAt: "2026-12-25T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_13-june2026",
    question: "When continuously monitoring the volume of gas produced over time using a gas syringe, how is the initial rate of reaction determined accurately from the experimental graph?",
    options: [
      { text: "By drawing a tangent to the curve at time t = 0 and calculating its gradient", isCorrect: true },
      { text: "By dividing the final maximum volume by the total time taken" },
      { text: "By reading the volume at half-time (t½)" },
      { text: "By calculating the area under the curve" }
    ],
    correctAnswer: 0,
    explanation: "* The rate at any instant equals the gradient of the curve ($\\\\frac{dV}{dt}$).\n* At $t = 0$, reactants are at their initial known concentrations, so the gradient of the tangent drawn at $t = 0$ gives the true **initial rate**.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q11",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_14-june2026",
    question: "In an iodine clock experiment, doubling the concentration of peroxodisulfate ions, S₂O₈²⁻, while keeping all other reagent concentrations constant causes the reaction time (t) to halve. What is the order of reaction with respect to S₂O₈²⁻?",
    options: [
      { text: "First order", isCorrect: true },
      { text: "Zero order" },
      { text: "Second order" },
      { text: "Half order" }
    ],
    correctAnswer: 0,
    explanation: "* In a clock reaction, $\\\\text{Rate} \\\\propto \\\\frac{1}{t}$.\n* When time $t$ halves, $\\\\frac{1}{t}$ doubles, meaning the initial rate doubles.\n* Since doubling $[\\\\text{S}_2\\\\text{O}_8^{2-}]$ doubles the rate ($2^1 = 2$), the reaction is **first order** with respect to $\\\\text{S}_2\\\\text{O}_8^{2-}$.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q12",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_15-june2026",
    question: "During a pH titration of a weak monoprotic acid with sodium hydroxide, at what point on the titration curve does pH = pK_a?",
    options: [
      { text: "At the half-equivalence point (exactly half the volume of base required for complete neutralization)", isCorrect: true },
      { text: "At the equivalence point" },
      { text: "At the initial point before adding any base" },
      { text: "At double the equivalence point volume" }
    ],
    correctAnswer: 0,
    explanation: "* From the Henderson-Hasselbalch equation: $\\\\text{pH} = \\\\text{p}K_a + \\\\log\\\\left(\\\\frac{[\\\\text{A}^-]}{[\\\\text{HA}]}\\\\right)$.\n* At half-neutralisation, exactly half of the weak acid has been converted to its conjugate base, so $[\\\\text{HA}] = [\\\\text{A}^-]$ and $\\\\log(1) = 0$, giving $\\\\mathbf{\\\\text{pH} = \\\\text{p}K_a}$.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q13",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_16-june2026",
    question: "Which indicator is most suitable for titrating ethanoic acid (a weak acid) with sodium hydroxide (a strong base)?",
    options: [
      { text: "Phenolphthalein (pH transition range 8.3–10.0)", isCorrect: true },
      { text: "Methyl orange (pH transition range 3.1–4.4)" },
      { text: "Bromophenol blue (pH transition range 3.0–4.6)" },
      { text: "Methyl red (pH transition range 4.4–6.2)" }
    ],
    correctAnswer: 0,
    explanation: "* Neutralisation of a weak acid by a strong base produces a basic salt (sodium ethanoate), hydrolysing to give an alkaline equivalence point ($\\\\text{pH} \\\\sim 8.5-9.0$).\n* The indicator's pH range must coincide with the vertical equivalence section, making **phenolphthalein** ideal.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q14",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_17-june2026",
    question: "In the esterification equilibrium experiment to determine K_c (Core Practical 11), what role does concentrated sulfuric acid play?",
    options: [
      { text: "It acts as a homogeneous acid catalyst to speed up attainment of equilibrium", isCorrect: true },
      { text: "It acts as a primary standard" },
      { text: "It acts as an indicator" },
      { text: "It oxidises the ester into a carboxylic acid" }
    ],
    correctAnswer: 0,
    explanation: "* The esterification of ethanoic acid with ethanol is very slow at room temperature.\n* Adding concentrated $\\\\text{H}_2\\\\text{SO}_4$ acts as a catalyst (providing protons), allowing equilibrium to be reached within a few days without altering the numerical value of $K_c$.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q15",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_18-june2026",
    question: "In the synthesis of aspirin from 2-hydroxybenzoic acid, why is ethanoic anhydride preferred over ethanoyl chloride as the acylating reagent?",
    options: [
      { text: "Ethanoic anhydride is cheaper, reacts less violently, and produces harmless ethanoic acid as a byproduct rather than toxic, corrosive hydrogen chloride fumes (HCl)", isCorrect: true },
      { text: "Ethanoyl chloride does not react with phenols" },
      { text: "Ethanoic anhydride gives an ester with a lower boiling point" },
      { text: "Ethanoyl chloride is an unreactive solid" }
    ],
    correctAnswer: 0,
    explanation: "* Ethanoyl chloride ($\\\\text{CH}_3\\\\text{COCl}$) reacts exothermically, releasing toxic, choking white $\\\\text{HCl}$ gas.\n* Ethanoic anhydride ($(\\\\text{CH}_3\\\\text{CO})_2\\\\text{O}$) is safer, less vigorous, and its byproduct is non-toxic ethanoic acid.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q16",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_19-june2026",
    question: "When separating an organic reaction mixture in a separating funnel containing two colourless immiscible liquid layers, how can the student definitively identify which layer is the aqueous layer?",
    options: [
      { text: "Add a few drops of distilled water to the funnel; the layer into which the water drops merge and dissolve is the aqueous layer", isCorrect: true },
      { text: "Shake the funnel vigorously until only one layer remains" },
      { text: "The bottom layer is always the organic layer regardless of density" },
      { text: "Heat the funnel with a Bunsen burner" }
    ],
    correctAnswer: 0,
    explanation: "* Water is miscible with aqueous solutions.\n* Adding a few drops of water and watching where the droplets blend confirms the aqueous layer without ambiguity (important because chlorinated solvents are denser than water, whereas hydrocarbons and ethers are less dense).",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q17",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_20-june2026",
    question: "What observation confirms the presence of iron(III) ions (Fe³⁺) when aqueous potassium thiocyanate (KSCN) is added to an acidified solution?",
    options: [
      { text: "A blood-red coloration forms due to the complex ion [Fe(H₂O)₅(SCN)]²⁺", isCorrect: true },
      { text: "A pale green precipitate forms" },
      { text: "A bright yellow precipitate of sulfur forms" },
      { text: "The solution turns completely colourless with effervescence" }
    ],
    correctAnswer: 0,
    explanation: "* Thiocyanate replaces a water ligand in aqueous iron(III): $[\\\\text{Fe(H}_2\\\\text{O)}_6]^{3+} + \\\\text{SCN}^- \\\\rightleftharpoons [\\\\text{Fe(H}_2\\\\text{O)}_5(\\\\text{SCN})]^{2+} + \\\\text{H}_2\\\\text{O}$.\n* The pentaaquathiocyanatoiron(III) complex possesses an intense, distinctive **blood-red** colour.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q18",
    createdAt: "2026-06-22T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_21-interactive",
    question: "In Core Practical 11 (Quantitative analysis of copper in brass), liberated iodine is titrated against standard 0.100 mol dm⁻³ sodium thiosulfate solution. The initial burette reading was 0.50 cm³. Use the interactive burette scale reader below to determine the final burette reading at the sharp starch endpoint, and calculate the volume of sodium thiosulfate delivered.",
    options: [
      { text: "Delivered: 20.85 cm³ (Final: 21.35 cm³)", isCorrect: true },
      { text: "Delivered: 21.35 cm³ (Final: 21.85 cm³)" },
      { text: "Delivered: 20.35 cm³ (Final: 20.85 cm³)" },
      { text: "Delivered: 21.85 cm³ (Final: 22.35 cm³)" }
    ],
    correctAnswer: 0,
    explanation: "* Final burette meniscus bottom aligns precisely with $21.35\\text{ cm}^3$\n* Delivered titre volume $= 21.35 - 0.50 = 20.85\\text{ cm}^3$\n* Starch is added near the endpoint when the solution is pale yellow, and the blue-black colour discharges sharply to colourless / white precipitate of $\\text{CuI}$",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2026 Paper 6 Q19",
    createdAt: "2026-06-23T10:00:00Z",
    apparatusScaleConfig: {
      type: "burette",
      targetValue: 21.35,
      initialReading: 0.50,
      unit: "cm³",
      minScale: 20.0,
      maxScale: 22.0,
      step: 0.5,
      subdivision: 0.05,
      tolerance: 0.05,
      title: "Unit 6 Thiosulfate Titration Burette Reading (21.35 cm³)",
      liquidColor: "rgba(59, 130, 246, 0.3)"
    },
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "21.35", text: "Read final burette reading as 21.35 cm³." },
        { mark: 1, keyword: "20.85 cm3", text: "Calculate delivered titre: 21.35 - 0.50 = 20.85 cm³." }
      ],
      examinerTips: "Burettes are calibrated from top (0) to bottom (50). Make sure to read downwards."
    }
  },
  {
    id: "ex_ed_u6_l1_lv2_22-interactive",
    question: "In Core Practical 15, a student measures a volume of ethoxyethane solvent in a 50 cm³ measuring cylinder to extract an organic product from an aqueous mixture. Use the interactive scale reader below to determine the volume of organic solvent in the measuring cylinder.",
    options: [
      { text: "35.0 cm³", isCorrect: true },
      { text: "36.0 cm³" },
      { text: "34.5 cm³" },
      { text: "37.0 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* The horizontal surface of the organic liquid lines up with the $35.0\\text{ cm}^3$ mark\n* One small graduation represents $1.0\\text{ cm}^3$, and reading at eye level gives $35.0\\text{ cm}^3$",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / June 2025 Paper 6 Q20",
    createdAt: "2026-06-23T10:00:00Z",
    apparatusScaleConfig: {
      type: "measuring-cylinder",
      targetValue: 35.0,
      unit: "cm³",
      minScale: 20.0,
      maxScale: 50.0,
      step: 5.0,
      subdivision: 0.5,
      tolerance: 0.5,
      title: "Measuring Cylinder Solvent Volume (35.0 cm³)",
      liquidColor: "rgba(16, 185, 129, 0.4)"
    },
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "35.0 cm3", text: "Accurately read volume as 35.0 cm³." }
      ],
      examinerTips: "Read the center of the horizontal liquid meniscus at eye level."
    }
  },
  {
    id: "ex_ed_u6_l1_lv2_23-jan2026",
    question: "During the preparation of a liquid organic product under reflux, why must anti-bumping granules be added to the pear-shaped flask before heating begins?",
    options: [
      { text: "They provide nucleation sites for smooth and controlled bubble formation, preventing violent bumping and liquid boiling over", isCorrect: true },
      { text: "They react chemically with impurities to neutralize acidic fumes" },
      { text: "They act as a heterogeneous catalyst to increase the percentage yield" },
      { text: "They prevent the condenser from cracking due to sudden thermal shock" }
    ],
    correctAnswer: 0,
    explanation: "* Anti-bumping granules have porous surfaces that trap small air bubbles\n* These act as nucleation centers for smooth bubble formation during boiling, preventing localized superheating and sudden violent boiling (bumping)\n* They must never be added to a hot liquid as this can trigger instantaneous, violent boiling",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q7",
    createdAt: "2026-01-20T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_24-jan2026",
    question: "In the recrystallisation of crude aspirin (Core Practical 10), why is the impure solid dissolved in the minimum volume of boiling solvent?",
    options: [
      { text: "To obtain a saturated solution at high temperature, maximising crystal recovery upon cooling", isCorrect: true },
      { text: "To save on expensive laboratory solvents" },
      { text: "To ensure that insoluble impurities remain completely suspended in the liquid" },
      { text: "To prevent the solvent from reacting with the ester functional group" }
    ],
    correctAnswer: 0,
    explanation: "* Using the minimum volume ensures the hot solution is saturated\n* As the solution cools down to room temperature and then in an ice bath, solubility drops drastically, allowing maximum precipitation and recovery of pure crystals\n* Excess solvent would keep significant amounts of the pure product dissolved even when cold, reducing yield",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q8",
    createdAt: "2026-01-20T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_25-jan2026",
    question: "When aqueous sodium hydroxide is added dropwise until in excess to a solution containing chromium(III) ions [Cr(H₂O)₆]³⁺, which of the following describes the sequence of observations?",
    options: [
      { text: "A green-grey precipitate forms, which dissolves in excess sodium hydroxide to form a dark green solution", isCorrect: true },
      { text: "A pale blue precipitate forms, which remains insoluble in excess sodium hydroxide" },
      { text: "A white precipitate forms, which dissolves in excess sodium hydroxide to give a colourless solution" },
      { text: "A brown precipitate forms immediately and does not dissolve" }
    ],
    correctAnswer: 0,
    explanation: "* Dropwise $\\text{NaOH}$ precipitates amphoteric chromium(III) hydroxide: $[\\text{Cr(H}_2\\text{O)}_6]^{3+} + 3\\text{OH}^- \\rightarrow \\text{Cr(H}_2\\text{O)}_3(\\text{OH})_3\\text{(s)} + 3\\text{H}_2\\text{O}$ (grey-green solid)\n* In excess alkali, it acts as an acid and deprotonates further: $\\text{Cr(H}_2\\text{O)}_3(\\text{OH})_3 + 3\\text{OH}^- \\rightarrow [\\text{Cr(OH)}_6]^{3-}\\text{(aq)} + 3\\text{H}_2\\text{O}$ (deep green hexahydroxochromate(III) solution)",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2026 Paper 6 Q9",
    createdAt: "2026-01-20T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_26-oct2025",
    question: "When concentrated hydrochloric acid is added dropwise to an aqueous solution of copper(II) sulfate until in excess, the pale blue solution changes through green to yellow-green. What causes this color change?",
    options: [
      { text: "Ligand exchange of water ligands by chloride ions to form tetrahedral [CuCl₄]²⁻", isCorrect: true },
      { text: "Reduction of copper(II) ions to copper(I) oxide precipitate" },
      { text: "Oxidation of chloride ions to chlorine gas by copper(II) ions" },
      { text: "Precipitation of insoluble white copper(II) chloride" }
    ],
    correctAnswer: 0,
    explanation: "* The hexaaquacopper(II) complex $[\text{Cu(H}_2\text{O)}_6]^{2+}$ is pale blue and octahedral\n* Concentrated $\text{HCl}$ provides a high concentration of $\text{Cl}^-$ ligands which displace neutral $\text{H}_2\text{O}$ ligands: $[\text{Cu(H}_2\text{O)}_6]^{2+} + 4\text{Cl}^- \rightleftharpoons [\text{CuCl}_4]^{2-} + 6\text{H}_2\text{O}$\n* The tetrachlorocuprate(II) complex $[\text{CuCl}_4]^{2-}$ is tetrahedral and yellow, creating an intermediate green mixture before appearing yellow-green when fully formed",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Oct 2025 Paper 6 Q5",
    createdAt: "2025-10-15T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_27-jan2025",
    question: "When measuring the melting temperature of a purified organic solid using an electrical melting point apparatus, why must the temperature increase be slowed to approximately 1–2 °C per minute as the expected melting point is approached?",
    options: [
      { text: "To prevent thermal lag between the heating block and the thermometer, ensuring an accurate and sharp melting point range", isCorrect: true },
      { text: "To allow the sample sufficient time to decompose completely" },
      { text: "To prevent the glass capillary tube from cracking due to sudden thermal shock" },
      { text: "To give any residual solvent time to evaporate before melting occurs" }
    ],
    correctAnswer: 0,
    explanation: "* Rapid heating creates a significant temperature difference (thermal lag) between the heating metal block/oil and the sample inside the capillary tube\n* Slowing the heating rate to $1-2\\text{ }^\\circ\\text{C min}^{-1}$ ensures the sample and the thermometer sensor remain at thermodynamic equilibrium\n* This allows precise observation of the first drop of liquid and complete liquefaction, giving a true, sharp melting range",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q7",
    createdAt: "2025-01-15T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_28-jan2025",
    question: "When dilute aqueous ammonia is added to a test tube containing aqueous iron(II) sulfate, a dirty green precipitate forms which slowly turns rusty brown at the surface upon exposure to air. What causes the brown coloration?",
    options: [
      { text: "Oxidation of iron(II) hydroxide to iron(III) hydroxide by dissolved atmospheric oxygen", isCorrect: true },
      { text: "Formation of an ammine complex of iron(II) that absorbs green light" },
      { text: "Reduction of iron(II) ions to elemental iron metal" },
      { text: "Dehydration of iron(II) hydroxide to form black iron(II) oxide" }
    ],
    correctAnswer: 0,
    explanation: "* Dilute aqueous ammonia acts as a weak base, precipitating iron(II) hydroxide: $\\text{Fe}^{2+}\\text{(aq)} + 2\\text{OH}^-\\text{(aq)} \\rightarrow \\text{Fe(OH)}_2\\text{(s)}$ (gelatinous dirty-green solid)\n* In contact with air, dissolved atmospheric oxygen oxidises iron(II) to iron(III): $4\\text{Fe(OH)}_2 + \\text{O}_2 + 2\\text{H}_2\\text{O} \\rightarrow 4\\text{Fe(OH)}_3\\text{(s)}$\n* Iron(III) hydroxide is insoluble and rust-brown, causing the surface to turn brown",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "practical",
    source: "Pearson Edexcel IAL Chemistry WCH16/01 / Jan 2025 Paper 6 Q8",
    createdAt: "2025-01-15T10:00:00Z"
  }
];


