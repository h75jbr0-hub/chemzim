export const lessonQuiz = [
  // ==========================
  // PART 1: FORMULAE & HOMOLOGOUS SERIES (10 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q1-EASY-20260627",
    question: "Which of the following describes the empirical formula of a compound?",
    options: [
      { text: "The actual number of atoms of each element in a molecule." },
      { text: "The simplest whole-number ratio of atoms of each element in a compound.", isCorrect: true },
      { text: "The algebraic formula describing a homologous series." },
      { text: "The minimal structural arrangement of atoms carbon-by-carbon." }
    ],
    explanation: "The empirical formula is defined as the simplest whole-number ratio of atoms of each element present in a compound, whereas the molecular formula shows the actual number of atoms of each element."
  },
  {
    id: "EDEXCEL-U1-L4-Q2-EASY-20260627",
    question: "What is the general formula for the homologous series of alkanes?",
    options: [
      { text: "$\\text{C}_n\\text{H}_{2n}$" },
      { text: "$\\text{C}_n\\text{H}_{2n+2}$", isCorrect: true },
      { text: "$\\text{C}_n\\text{H}_{2n-2}$" },
      { text: "$\\text{C}_n\\text{H}_{2n+1}\\text{OH}$" }
    ],
    explanation: "Alkanes are saturated hydrocarbons with the general formula $\\text{C}_n\\text{H}_{2n+2}$."
  },
  {
    id: "EDEXCEL-U1-L4-Q3-EASY-20260627",
    question: "Which of the following is a characteristic feature of a homologous series?",
    options: [
      { text: "Members have different functional groups." },
      { text: "Each successive member differs by a $\\text{-CH}_3\\text{-}$ unit." },
      { text: "Members have identical physical properties." },
      { text: "Members have similar chemical properties due to the same functional group.", isCorrect: true }
    ],
    explanation: "Members of a homologous series share the same functional group, giving them similar chemical properties. Successive members differ by a $\\text{-CH}_2\\text{-}$ unit."
  },
  {
    id: "EDEXCEL-U1-L4-Q4-MEDIUM-20260627",
    question: "An organic compound has the molecular formula $\\text{C}_6\\text{H}_{12}$. What is its empirical formula?",
    options: [
      { text: "$\\text{CH}$" },
      { text: "$\\text{CH}_2$", isCorrect: true },
      { text: "$\\text{C}_3\\text{H}_6$" },
      { text: "$\\text{C}_2\\text{H}_4$" }
    ],
    explanation: "Simplifying the molecular ratio of Carbon to Hydrogen (6:12) to the lowest whole-number ratio gives 1:2. Therefore, the empirical formula is $\\text{CH}_2$."
  },
  {
    id: "EDEXCEL-U1-L4-Q5-MEDIUM-20260627",
    question: "Which representation shows only the carbon-carbon bonds as lines, omitting carbon-hydrogen bonds?",
    options: [
      { text: "Displayed formula" },
      { text: "Structural formula" },
      { text: "Skeletal formula", isCorrect: true },
      { text: "Molecular formula" }
    ],
    explanation: "A skeletal formula simplifies organic representations by showing only carbon-carbon bonds as lines, with carbon atoms assumed at vertices and ends. Hydrogens attached to carbons are omitted."
  },
  {
    id: "EDEXCEL-U1-L4-Q6-MEDIUM-20260627",
    question: "Determine the homologous series of the compound represented by the structural formula $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH}$.",
    options: [
      { text: "Alkane" },
      { text: "Halogenoalkane" },
      { text: "Alcohol", isCorrect: true },
      { text: "Carboxylic acid" }
    ],
    explanation: "The compound contains the hydroxyl group ($\\text{-OH}$), which is the characteristic functional group of the alcohol homologous series."
  },
  {
    id: "EDEXCEL-U1-L4-Q7-MEDIUM-20260627",
    question: "What is the general formula of a saturated monocarboxylic acid?",
    options: [
      { text: "$\\text{C}_n\\text{H}_{2n}\\text{O}$" },
      { text: "$\\text{C}_n\\text{H}_{2n}\\text{O}_2$", isCorrect: true },
      { text: "$\\text{C}_n\\text{H}_{2n+2}\\text{O}_2$" },
      { text: "$\\text{C}_n\\text{H}_{2n+1}\\text{O}$" }
    ],
    explanation: "Carboxylic acids have the general formula $\\text{C}_n\\text{H}_{2n+1}\\text{COOH}$ (or $\\text{C}_{n+1}\\text{H}_{2n+2}\\text{O}_2$), which simplifies to $\\text{C}_m\\text{H}_{2m}\\text{O}_2$."
  },
  {
    id: "EDEXCEL-U1-L4-Q8-HARD-20260627",
    question: "An organic compound contains $82.8\\%$ carbon and $17.2\\%$ hydrogen by mass. What is its empirical formula? ($A_r$: $\\text{C}=12.0$, $\\text{H}=1.0$)",
    options: [
      { text: "$\\text{CH}_3$" },
      { text: "$\\text{C}_2\\text{H}_5$", isCorrect: true },
      { text: "$\\text{CH}_2$" },
      { text: "$\\text{C}_3\\text{H}_7$" }
    ],
    explanation: "Moles of C: $82.8 / 12.0 = 6.90\\text{ mol}$. Moles of H: $17.2 / 1.0 = 17.2\\text{ mol}$. Dividing by the smallest value ($6.90$) gives a C:H ratio of 1 : 2.49, which is approximately 1 : 2.5. Multiplying by 2 to obtain the simplest whole-number ratio gives a C:H ratio of 2:5, so the empirical formula is $\\text{C}_2\\text{H}_5$."
  },
  {
    id: "EDEXCEL-U1-L4-Q9-HARD-20260627",
    question: "Which of the following compounds belongs to the halogenoalkanes homologous series?",
    options: [
      { text: "$\\text{CH}_3\\text{COCl}$" },
      { text: "$\\text{CH}_2\\text{Cl}_2$", isCorrect: true },
      { text: "$\\text{C}_6\\text{H}_5\\text{Cl}$" },
      { text: "$\\text{HCl}$" }
    ],
    explanation: "Halogenoalkanes are formed when hydrogen atoms in an alkane are replaced by halogen atoms. $\\text{CH}_2\\text{Cl}_2$ (dichloromethane) fits this definition. $\\text{CH}_3\\text{COCl}$ is an acyl chloride."
  },
  {
    id: "EDEXCEL-U1-L4-Q10-EASY-20260627",
    question: "What functional group is present in the compound $\\text{CH}_3\\text{CH}_2\\text{COOH}$?",
    options: [
      { text: "Hydroxyl group" },
      { text: "Carbonyl group" },
      { text: "Carboxyl group", isCorrect: true },
      { text: "Ester link" }
    ],
    explanation: "The $\\text{-COOH}$ group is called the carboxyl group, which defines carboxylic acids like propanoic acid."
  },

  // ==========================
  // PART 2: IUPAC NOMENCLATURE (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q11-EASY-20260627",
    question: "What is the systematic IUPAC name for a straight-chain alkane with 5 carbon atoms?",
    options: [
      { text: "Butane" },
      { text: "Pentane", isCorrect: true },
      { text: "Hexane" },
      { text: "Propane" }
    ],
    explanation: "A 5-carbon alkane has the prefix 'pent-' and the suffix '-ane', giving the name pentane."
  },
  {
    id: "EDEXCEL-U1-L4-Q12-MEDIUM-20260627",
    question: "Give the IUPAC name for the following molecule: $\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_2\\text{CH}_3$.",
    options: [
      { text: "2-methylpentane", isCorrect: true },
      { text: "4-methylpentane" },
      { text: "1,1-dimethylbutane" },
      { text: "Methylhexane" }
    ],
    explanation: "The longest continuous carbon chain has 5 carbon atoms (pentane). Numbering from the left end gives the methyl branch the lowest position (carbon 2), resulting in 2-methylpentane."
  },
  {
    id: "EDEXCEL-U1-L4-Q13-MEDIUM-20260627",
    question: "Which of the following compounds is named 2,2-dimethylpropane?",
    options: [
      { text: "$\\text{CH}_3\\text{CH}_2\\text{CH(CH}_3)_2$" },
      { text: "$\\text{C(CH}_3)_4$", isCorrect: true },
      { text: "$\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_3$" },
      { text: "$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3$" }
    ],
    explanation: "2,2-dimethylpropane consists of a central carbon bonded to 4 methyl groups, giving a molecular formula of $\\text{C(CH}_3)_4$ (also known as neopentane)."
  },
  {
    id: "EDEXCEL-U1-L4-Q14-HARD-20260627",
    question: "What is the correct IUPAC name for the halogenoalkane $\\text{CH}_3\\text{CH}_2\\text{CH(Cl)CH(Br)CH}_3$?",
    options: [
      { text: "2-bromo-3-chloropentane", isCorrect: true },
      { text: "4-bromo-3-chloropentane" },
      { text: "3-chloro-2-bromopentane" },
      { text: "3-chloro-4-bromopentane" }
    ],
    explanation: "The longest chain is 5 carbons (pentane). Numbering from the right gives substituents the lowest numbers (2 and 3). Side chains are listed alphabetically: 'bromo' before 'chloro'. Thus: 2-bromo-3-chloropentane."
  },
  {
    id: "EDEXCEL-U1-L4-Q15-HARD-20260627",
    question: "What is the IUPAC name of the compound $\\text{CH}_3\\text{CH}_2\\text{C(CH}_3)_2\\text{CH(CH}_2\\text{CH}_3)\\text{CH}_3$?",
    options: [
      { text: "4-ethyl-3,3-dimethylpentane" },
      { text: "3-ethyl-2,2-dimethylpentane" },
      { text: "3,3,4-trimethylhexane", isCorrect: true },
      { text: "2,3,3-trimethylhexane" }
    ],
    explanation: "The longest continuous carbon chain has 6 carbons (hexane), starting from the ethyl branch on the right. Numbering from the left gives the substituents positions 3, 3, and 4. This yields 3,3,4-trimethylhexane."
  },

  // ==========================
  // PART 3: STRUCTURAL ISOMERISM (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q16-EASY-20260627",
    question: "What type of isomerism is shown by butane and methylpropane?",
    options: [
      { text: "Chain isomerism", isCorrect: true },
      { text: "Position isomerism" },
      { text: "Functional group isomerism" },
      { text: "Stereoisomerism" }
    ],
    explanation: "Butane and methylpropane have the same molecular formula ($\\text{C}_4\\text{H}_{10}$) but different arrangements of the carbon skeleton (branched vs. straight chain), which is chain isomerism."
  },
  {
    id: "EDEXCEL-U1-L4-Q17-MEDIUM-20260627",
    question: "How many structural isomers exist for the alkane with molecular formula $\\text{C}_5\\text{H}_{12}$?",
    options: [
      { text: "2" },
      { text: "3", isCorrect: true },
      { text: "4" },
      { text: "5" }
    ],
    explanation: "The three structural isomers of pentane ($\\text{C}_5\\text{H}_{12}$) are: 1. pentane (straight-chain), 2. 2-methylbutane, and 3. 2,2-dimethylpropane."
  },
  {
    id: "EDEXCEL-U1-L4-Q18-MEDIUM-20260627",
    question: "Which of the following pairs represent functional group isomers?",
    options: [
      { text: "1-chlorobutane and 2-chlorobutane" },
      { text: "Propene and cyclopropane", isCorrect: true },
      { text: "Pentane and 2-methylbutane" },
      { text: "Ethanoic acid and ethanol" }
    ],
    explanation: "Propene (alkene) and cyclopropane (cycloalkane) both share the molecular formula $\\text{C}_3\\text{H}_6$ but contain different functional group types (double bond vs. cyclic single bonds)."
  },
  {
    id: "EDEXCEL-U1-L4-Q19-HARD-20260627",
    question: "How many structural isomers are there of the halogenoalkane $\\text{C}_3\\text{H}_7\\text{Cl}$?",
    options: [
      { text: "2", isCorrect: true },
      { text: "3" },
      { text: "4" },
      { text: "5" }
    ],
    explanation: "There are exactly 2 structural isomers of chloropropane: 1-chloropropane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Cl}$) and 2-chloropropane ($\\text{CH}_3\\text{CH(Cl)CH}_3$)."
  },
  {
    id: "EDEXCEL-U1-L4-Q20-HARD-20260627",
    question: "Which type of isomerism is demonstrated by 1-bromobutane and 2-bromobutane?",
    options: [
      { text: "Chain isomerism" },
      { text: "Position isomerism", isCorrect: true },
      { text: "Functional group isomerism" },
      { text: "Stereoisomerism" }
    ],
    explanation: "Both molecules have a straight 4-carbon chain, but the bromine atom is attached to carbon-1 in one and carbon-2 in the other. This is position isomerism."
  },

  // ==========================
  // PART 4: BOND FISSION & REACTIONS (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q21-EASY-20260627",
    question: "What is formed during the homolytic fission of a covalent bond?",
    options: [
      { text: "A cation and an anion" },
      { text: "Two cations" },
      { text: "Two free radicals", isCorrect: true },
      { text: "A double bond" }
    ],
    explanation: "Homolytic fission splits the shared electron pair equally, leaving each bonding atom with one unpaired electron to form two neutral free radicals."
  },
  {
    id: "EDEXCEL-U1-L4-Q22-MEDIUM-20260627",
    question: "Which of the following species acts as a nucleophile?",
    options: [
      { text: "$\\text{H}^+$" },
      { text: "$\\text{NO}_2^+$" },
      { text: "$\\text{AlCl}_3$" },
      { text: "$\\text{NH}_3$", isCorrect: true }
    ],
    explanation: "A nucleophile must have a lone pair of electrons to donate. Ammonia ($\\text{NH}_3$) has a lone pair on the nitrogen atom, whereas the others are electron-deficient electrophiles."
  },
  {
    id: "EDEXCEL-U1-L4-Q23-MEDIUM-20260627",
    question: "Which reaction class describes the conversion of ethene to bromoethane by reaction with hydrogen bromide?",
    options: [
      { text: "Substitution" },
      { text: "Elimination" },
      { text: "Addition", isCorrect: true },
      { text: "Hydrolysis" }
    ],
    explanation: "Reacting ethene (unsaturated) with HBr forms a single product, bromoethane (saturated). This is an addition reaction."
  },
  {
    id: "EDEXCEL-U1-L4-Q24-HARD-20260627",
    question: "In the heterolytic fission of the $\\text{C-Br}$ bond in bromomethane, which species are formed?",
    options: [
      { text: "$\\bullet\\text{CH}_3$ and $\\bullet\\text{Br}$" },
      { text: "$\\text{CH}_3^+$ and $\\text{Br}^-$", isCorrect: true },
      { text: "$\\text{CH}_3^-$ and $\\text{Br}^+$" },
      { text: "$\\text{CH}_4$ and $\\text{HBr}$" }
    ],
    explanation: "Bromine is more electronegative than carbon, so during heterolytic fission, bromine takes both bonding electrons, forming a bromide ion ($\\text{Br}^-$) and leaving a methyl carbocation ($\\text{CH}_3^+$)."
  },
  {
    id: "EDEXCEL-U1-L4-Q25-HARD-20260627",
    question: "Which of the following correctly defines an electrophile?",
    options: [
      { text: "An electron pair donor" },
      { text: "An electron pair acceptor", isCorrect: true },
      { text: "A species with an unpaired electron" },
      { text: "A negatively charged ion" }
    ],
    explanation: "An electrophile is an electron-deficient species that accepts an electron pair to form a new covalent bond."
  },

  // ==========================
  // PART 5: ALKANES - SOURCES & COMBUSTION (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q26-EASY-20260627",
    question: "Which process is used to separate crude oil into fractions of similar boiling points?",
    options: [
      { text: "Catalytic cracking" },
      { text: "Fractional distillation", isCorrect: true },
      { text: "Reforming" },
      { text: "Thermal cracking" }
    ],
    explanation: "Fractional distillation separates crude oil based on the differing boiling points of its hydrocarbon components."
  },
  {
    id: "EDEXCEL-U1-L4-Q27-MEDIUM-20260627",
    question: "What is the primary product of reforming straight-chain alkanes in petroleum refining?",
    options: [
      { text: "Shorter alkenes for polymer synthesis" },
      { text: "Branched-chain and cyclic hydrocarbons", isCorrect: true },
      { text: "Sulfur dioxide emissions" },
      { text: "Hydrogen chloride gas" }
    ],
    explanation: "Reforming converts straight-chain alkanes into branched-chain and cyclic/aromatic hydrocarbons to increase fuel combustion efficiency (octane rating)."
  },
  {
    id: "EDEXCEL-U1-L4-Q28-MEDIUM-20260627",
    question: "Which gas is formed inside car engines due to the direct reaction of nitrogen and oxygen at high temperatures?",
    options: [
      { text: "$\\text{NO}$", isCorrect: true },
      { text: "$\\text{NH}_3$" },
      { text: "$\\text{HNO}_3$" },
      { text: "$\\text{N}_2\\text{O}$" }
    ],
    explanation: "The extreme temperatures inside combustion engines cause atmospheric nitrogen and oxygen to react directly to produce nitrogen monoxide gas ($\\text{NO}$)."
  },
  {
    id: "EDEXCEL-U1-L4-Q29-HARD-20260627",
    question: "What equation represents the reaction occurring in a catalytic converter to remove both nitrogen monoxide and carbon monoxide?",
    options: [
      { text: "$\\text{NO} + \\text{CO} \\rightarrow \\text{CO}_2 + \\text{N}$" },
      { text: "$2\\text{NO} + 2\\text{CO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$", isCorrect: true },
      { text: "$\\text{NO}_2 + \\text{CO} \\rightarrow \\text{CO}_2 + \\text{NO}$" },
      { text: "$2\\text{NO}_2 + 4\\text{CO} \\rightarrow 4\\text{CO}_2 + \\text{N}_2$" }
    ],
    explanation: "The catalyst in a converter promotes the reaction between nitrogen monoxide and carbon monoxide to produce harmless nitrogen and carbon dioxide: $2\\text{NO} + 2\\text{CO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$."
  },
  {
    id: "EDEXCEL-U1-L4-Q30-HARD-20260627",
    question: "Which of the following is a key limitation of the free-radical substitution reaction of alkanes?",
    options: [
      { text: "It is an endothermic reaction that requires high pressures." },
      { text: "It yields a complex mixture of multi-substituted products and isomers, requiring separation.", isCorrect: true },
      { text: "It only occurs with gaseous fluorine." },
      { text: "The reaction cannot be terminated once initiated." }
    ],
    explanation: "Free-radical substitution is difficult to control; it leads to further substitutions (e.g. forming $\\text{CH}_2\\text{Cl}_2$ alongside $\\text{CH}_3\\text{Cl}$) and yields multiple structural isomers for longer-chain alkanes."
  },

  // ==========================
  // PART 6: HAZARDS, SAFETY & PICTOGRAMS (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q31-MEDIUM-20260627",
    question: "A student plans to heat cyclohexanol (flammable and volatile, boiling point $161^\\circ\\text{C}$) to prepare cyclohexene. Which heating method and safety precaution are most appropriate to minimize risk?",
    options: [
      { text: "Heating directly with a Bunsen burner in an open beaker." },
      { text: "Heating using an electric water bath in a sealed flask." },
      { text: "Heating using an electric heating mantle with a reflux condenser.", isCorrect: true },
      { text: "Heating with a Bunsen burner using a fractionating column." }
    ],
    explanation: "Cyclohexanol has a high boiling point ($161^\\circ\\text{C}$), so a water bath (which maxes at $100^\\circ\\text{C}$) cannot heat it effectively. An electric heating mantle is required. Since it is flammable and volatile, heating under reflux prevents the escape of flammable vapors, reducing the risk of fire."
  },
  {
    id: "EDEXCEL-U1-L4-Q32-MEDIUM-20260627",
    question: "A bottle of concentrated nitric acid ($\\text{HNO}_3$) is labeled with two GHS hazard pictograms. Which pair of pictograms must be present on this bottle?",
    options: [
      { text: "Flammable and Corrosive" },
      { text: "Oxidizing and Corrosive", isCorrect: true },
      { text: "Toxic and Explosive" },
      { text: "Environmental Hazard and Irritant" }
    ],
    explanation: "Nitric acid is a strong oxidizing agent (GHS03 - oxidizing) and causes severe chemical burns to skin and materials (GHS05 - corrosive). It is not flammable itself."
  },
  {
    id: "EDEXCEL-U1-L4-Q33-HARD-20260627",
    question: "Which of the following statements correctly distinguishes between hazard and risk in a laboratory experiment?",
    options: [
      { text: "A hazard is the probability of a chemical causing harm, while risk is the severity of that harm." },
      { text: "Diluting a concentrated acid decreases its hazard but does not affect its risk." },
      { text: "Hazard is an intrinsic property of a substance that cannot be changed, whereas risk depends on the specific conditions of use and can be managed.", isCorrect: true },
      { text: "Using safety goggles reduces the chemical hazard of a corrosive solution." }
    ],
    explanation: "Hazard is an intrinsic, fixed property of a substance (e.g., toxicity or flammability). Risk is the likelihood of that hazard causing harm under specific conditions, which can be minimized using safety precautions like PPE or scaling down."
  },
  {
    id: "EDEXCEL-U1-L4-Q34-MEDIUM-20260627",
    question: "During the laboratory preparation of a halogenoalkane, acidic waste gases are produced. Which method is most suitable for safely removing these acidic vapors from the fume cupboard exhaust?",
    options: [
      { text: "Passing the vapors through a basic scrubber containing calcium carbonate slurry.", isCorrect: true },
      { text: "Condensing the gases in a cold water bath." },
      { text: "Passing the gases over hot copper turnings." },
      { text: "Dissolving the gases in concentrated sulfuric acid." }
    ],
    explanation: "Acidic waste gases (such as $\\text{HCl}$ or $\\text{HBr}$) are neutralized by basic scrubbers containing alkaline compounds like $\\text{CaCO}_3$ or $\\text{NaOH}$ to form harmless salts."
  },
  {
    id: "EDEXCEL-U1-L4-Q35-HARD-20260627",
    question: "Concentrated nitric acid ($\\text{HNO}_3$) is stored in dark brown bottles. Which statement correctly explains the chemical reasoning for this storage method and its safety implications?",
    options: [
      { text: "Light accelerates the oxidation of nitric acid to nitrogen gas." },
      { text: "Light causes photochemical decomposition of $\\text{HNO}_3$ into toxic nitrogen dioxide ($\\text{NO}_2$) gas, increasing container pressure.", isCorrect: true },
      { text: "Dark glass prevents the acid from reacting with the silicon dioxide in the container." },
      { text: "Amber glass absorbs heat, preventing thermal decomposition of the acid." }
    ],
    explanation: "Nitric acid undergoes photochemical decomposition when exposed to light: $4\\text{HNO}_3 \\rightarrow 4\\text{NO}_2 + \\text{O}_2 + 2\\text{H}_2\\text{O}$. This produces toxic, brown $\\text{NO}_2$ gas and increases pressure inside the bottle. Dark brown glass blocks light to prevent this reaction."
  },

  // ==========================
  // PART 7: SUSTAINABILITY & ENVIRONMENTAL ISSUES (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q36-MEDIUM-20260627",
    question: "Greenhouse gases trap heat in the atmosphere. Which physical process describes how greenhouse gases contribute to global warming?",
    options: [
      { text: "They absorb incoming short-wavelength UV radiation from the sun." },
      { text: "They absorb outgoing long-wavelength infrared radiation emitted by the Earth's surface.", isCorrect: true },
      { text: "They reflect visible light back to the Earth's surface." },
      { text: "They undergo exothermic decomposition when exposed to solar radiation." }
    ],
    explanation: "The Earth's surface absorbs solar energy (mostly UV and visible light) and re-radiates it as longer-wavelength infrared (IR) radiation. Greenhouse gases absorb this IR radiation, trapping heat in the atmosphere."
  },
  {
    id: "EDEXCEL-U1-L4-Q37-HARD-20260627",
    question: "Bioethanol is often described as carbon-neutral because the carbon dioxide released during its combustion is equal to the carbon dioxide absorbed during photosynthesis. Why is bioethanol not fully carbon-neutral in practice?",
    options: [
      { text: "Bioethanol releases more carbon dioxide per mole during combustion than is absorbed during glucose synthesis." },
      { text: "The fermentation of glucose is an anaerobic process that does not involve carbon dioxide." },
      { text: "Fossil fuels are consumed during crop cultivation, mechanical harvesting, transport, and the energy-intensive distillation process.", isCorrect: true },
      { text: "Photosynthesis by crops absorbs only carbon monoxide, not carbon dioxide." }
    ],
    explanation: "While the chemical equations for photosynthesis and combustion balance out in terms of carbon, the industrial process of cultivating crops, transporting them, and distilling ethanol requires energy that is currently derived from burning fossil fuels."
  },
  {
    id: "EDEXCEL-U1-L4-Q38-MEDIUM-20260627",
    question: "Biodiesel is produced from waste vegetable oils. What is the name of the chemical reaction used to convert triglycerides in vegetable oil into biodiesel (fatty acid methyl esters)?",
    options: [
      { text: "Transesterification", isCorrect: true },
      { text: "Fractional distillation" },
      { text: "Catalytic cracking" },
      { text: "Saponification" }
    ],
    explanation: "Biodiesel is produced via transesterification, where triglycerides react with an alcohol (usually methanol) in the presence of a catalyst (such as $\\text{NaOH}$) to yield fatty acid methyl esters (biodiesel) and glycerol."
  },
  {
    id: "EDEXCEL-U1-L4-Q39-MEDIUM-20260627",
    question: "Why is the incineration of poly(chloroethene) (PVC) more environmentally hazardous than the incineration of poly(ethene)?",
    options: [
      { text: "PVC undergoes incomplete combustion to form toxic carbon monoxide only." },
      { text: "The combustion of PVC releases corrosive and toxic hydrogen chloride ($\\text{HCl}$) gas.", isCorrect: true },
      { text: "PVC decomposes to release heavy metal catalysts like lead." },
      { text: "The C-C backbone of PVC is more resistant to thermal degradation." }
    ],
    explanation: "PVC contains chlorine atoms. When incinerated, it releases toxic and highly corrosive hydrogen chloride ($\\text{HCl}$) gas, which contributes to acid rain unless neutralized by alkaline scrubbers."
  },
  {
    id: "EDEXCEL-U1-L4-Q40-HARD-20260627",
    question: "Which of the following describes the process of 'feedstock recycling' of waste polymers?",
    options: [
      { text: "Sorting, washing, melting, and remolding the polymers into new plastic products." },
      { text: "Burning the polymers to generate steam for electricity production." },
      { text: "Breaking down the polymers using heat or chemical catalysts to recover monomers or raw chemicals.", isCorrect: true },
      { text: "Converting non-biodegradable polymers into biodegradable ones using bacteria." }
    ],
    explanation: "Feedstock recycling involves thermal or chemical depolymerization of waste plastics to recover their constituent monomers or raw chemical feedstocks, which can then be used to manufacture new polymers or other chemicals."
  },
  {
    id: "EDEXCEL-U1-L4-Q41-EASY-2026",
    question: "In 1828, Friedrich WÃ¶hler disproved the theory of 'vitalism' by heating an inorganic compound to produce urea. What was this starting inorganic compound?",
    options: [
      { text: "Ammonium cyanate", isCorrect: true },
      { text: "Ammonium carbonate" },
      { text: "Urea nitrate" },
      { text: "Sodium cyanide" }
    ],
    explanation: "Friedrich WÃ¶hler heated ammonium cyanate ($\\text{NH}_4\\text{CNO}$), which is an inorganic salt, and converted it into urea ($\\text{CO(NH}_2)_2$), an organic compound. This demonstrated that organic compounds do not require a living 'vital force' to be synthesized."
  },
  {
    id: "EDEXCEL-U1-L4-Q42-EASY-2026",
    question: "Which extremely strong, heat-resistant organic polymer was invented by organic chemist Stephanie Kwolek in the 1960s?",
    options: [
      { text: "KevlarÂ®", isCorrect: true },
      { text: "Nylon-6,6" },
      { text: "TeflonÂ®" },
      { text: "Poly(ethene)" }
    ],
    explanation: "Stephanie Kwolek invented KevlarÂ® in 1965. It is a polyamide polymer with exceptional strength-to-weight ratio, widely used in body armour, safety gloves, and sports equipment."
  },
  {
    id: "EDEXCEL-U1-L4-Q43-MEDIUM-2026",
    question: "What are the molecular formulae of the two possible saturated hydrocarbons that contain exactly five carbon atoms?",
    options: [
      { text: "$\\text{C}_5\\text{H}_{12}$ and $\\text{C}_5\\text{H}_{10}$", isCorrect: true },
      { text: "$\\text{C}_5\\text{H}_{12}$ and $\\text{C}_5\\text{H}_8$" },
      { text: "$\\text{C}_5\\text{H}_{10}$ and $\\text{C}_5\\text{H}_8$" },
      { text: "$\\text{C}_5\\text{H}_{12}$ only" }
    ],
    explanation: "A saturated hydrocarbon containing only single bonds can either be an alkane chain ($\\text{C}_n\\text{H}_{2n+2}$) or a cyclic cycloalkane ($\\text{C}_n\\text{H}_{2n}$). For five carbons, these correspond to pentane ($\\text{C}_5\\text{H}_{12}$) and cyclopentane ($\\text{C}_5\\text{H}_{10}$)."
  },
  {
    id: "EDEXCEL-U1-L4-Q44-MEDIUM-2026",
    question: "Explain why the actual 3D C-C-C bond angle in cyclobutane is much closer to 109.5Â° than the 90Â° angle seen in its 2D drawing.",
    options: [
      { text: "The carbon atoms are $sp^3$ hybridized, and the ring puckers in 3D to minimize eclipse strain and approach the tetrahedral angle", isCorrect: true },
      { text: "The carbon atoms are $sp^2$ hybridized, pushing the bonds to a planar arrangement" },
      { text: "The hydrogen atoms repel each other, widening the angle to exactly 120Â°" },
      { text: "Cyclobutane is planar, but the C-C bonds are bent due to coordinate bonding" }
    ],
    explanation: "Carbon atoms in cyclobutane are $sp^3$ hybridized, which ideally prefers a tetrahedral angle of 109.5Â°. To minimize ring strain and eclipse strain of C-H bonds, cyclobutane does not stay flat at 90Â°; it puckers slightly in 3D, keeping its internal angles close to tetrahedral (around 88Â°)."
  },
  {
    id: "EDEXCEL-U1-L4-Q45-MEDIUM-2026",
    question: "Why is sucrose ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$) classified as a carbohydrate and not a hydrocarbon?",
    options: [
      { text: "It contains oxygen atoms in addition to carbon and hydrogen", isCorrect: true },
      { text: "It does not contain any carbon-hydrogen bonds" },
      { text: "It is an organic sugar compound" },
      { text: "It is a polymer of ethene monomers" }
    ],
    explanation: "A hydrocarbon is defined as a compound containing carbon and hydrogen atoms ONLY. Because sucrose contains oxygen atoms in its structure, it is classified as a carbohydrate (the suffix '-ate' indicates oxygen presence) and not a hydrocarbon."
  },
  {
    id: "EDEXCEL-U1-L4-Q46-MEDIUM-2026",
    question: "For which of the following compounds are the molecular formula and empirical formula identical?",
    options: [
      { text: "Chloroethane ($\\text{C}_2\\text{H}_5\\text{Cl}$)", isCorrect: true },
      { text: "Butane ($\\text{C}_4\\text{H}_{10}$)" },
      { text: "Ethene ($\\text{C}_2\\text{H}_4$)" },
      { text: "Ethanoic acid ($\\text{C}_2\\text{H}_4\\text{O}_2$)" }
    ],
    explanation: "An empirical formula is the simplest whole-number ratio of atoms. In chloroethane ($\\text{C}_2\\text{H}_5\\text{Cl}$), the ratio of C:H:Cl is 2:5:1, which cannot be simplified further. Therefore, its empirical and molecular formulae are identical."
  },
  {
    id: "EDEXCEL-U1-L4-Q47-HARD-2026",
    question: "An organic compound has the molecular formula $\\text{C}_3\\text{H}_7\\text{Cl}$. How many structural isomers can this formula represent?",
    options: [
      { text: "2", isCorrect: true },
      { text: "3" },
      { text: "4" },
      { text: "1" }
    ],
    explanation: "The molecular formula $\\text{C}_3\\text{H}_7\\text{Cl}$ represents exactly two positional isomers: 1-chloropropane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Cl}$) and 2-chloropropane ($\\text{CH}_3\\text{CHClCH}_3$)."
  },
  {
    id: "EDEXCEL-U1-L4-Q48-MEDIUM-2026",
    question: "A student writes down a formula as $\\text{CH}_3\\text{CH}_2\\text{Cl}$. What type of chemical formula is this?",
    options: [
      { text: "Structural formula", isCorrect: true },
      { text: "Displayed formula" },
      { text: "Skeletal formula" },
      { text: "Empirical formula" }
    ],
    explanation: "A structural formula shows the arrangement of atoms carbon-by-carbon without showing all the individual bonds explicitly. Thus, $\\text{CH}_3\\text{CH}_2\\text{Cl}$ is the structural formula of chloroethane."
  },
  {
    id: "EDEXCEL-U1-L4-Q49-MEDIUM-2026",
    question: "Which type of chemical formula represents butane as a simple zig-zag line showing only carbon-carbon bonds?",
    options: [
      { text: "Skeletal formula", isCorrect: true },
      { text: "Structural formula" },
      { text: "Displayed formula" },
      { text: "Molecular formula" }
    ],
    explanation: "A skeletal formula simplifies organic representations by showing only the carbon-carbon bonds as a zig-zag line, omitting the carbon and hydrogen atoms themselves (which are assumed at vertices and ends)."
  },
  {
    id: "EDEXCEL-U1-L4-Q50-HARD-2026",
    question: "Which statement is an essential requirement when drawing a displayed formula in an exam?",
    options: [
      { text: "Every single atom and every single bond (including C-H and O-H bonds) must be drawn explicitly with bond lines", isCorrect: true },
      { text: "Carbon-hydrogen bonds can be grouped together as $\\text{-CH}_3$ to save space" },
      { text: "Only double bonds must be shown with lines, while single bonds can be omitted" },
      { text: "The skeleton of the molecule must be represented as a zig-zag line" }
    ],
    explanation: "A displayed formula must show every atom and every single bond separately. Failing to draw the bond lines (e.g. grouping as $\\text{-CH}_3$ or writing $\\text{-OH}$ without the $\\text{-O-H}$ bond line) will result in loss of marks in Edexcel examinations."
  },
  {
    id: "EDEXCEL-U1-L4-Q51-MEDIUM-2026",
    question: "Why is the compound with structural formula $\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_3$ systematically named methylpropane rather than 2-methylpropane?",
    options: [
      { text: "Because there is only one carbon position (carbon 2) where a methyl group can be attached to the propane chain without changing the parent chain length, making the locant '2-' redundant", isCorrect: true },
      { text: "Because IUPAC rules forbid the use of numbers for chains shorter than four carbons" },
      { text: "Because the compound has a circular structure where all carbons are equivalent" },
      { text: "Because the prefix methyl has priority and automatically assigns itself to carbon 1" }
    ],
    explanation: "In propane (3 carbons), a methyl group can only be attached to carbon-2. If it were attached to carbon-1 or carbon-3, it would extend the longest continuous carbon chain to 4 carbons, making the compound butane. Since carbon-2 is the only possible position for a branched methyl group in propane, the locant '2-' is omitted as it is redundant."
  },
  {
    id: "EDEXCEL-U1-L4-Q52-HARD-2026",
    question: "What is the correct systematic IUPAC name for the compound with structural formula $\\text{CH}_3\\text{CH}_2\\text{CH(CH}_2\\text{CH}_3)\\text{CH(CH}_3)\\text{CH}_3$?",
    options: [
      { text: "3-ethyl-2-methylpentane", isCorrect: true },
      { text: "3-ethyl-4-methylpentane" },
      { text: "3-methyl-4-ethylpentane" },
      { text: "2-methyl-3-ethylpentane" }
    ],
    explanation: "Let's follow IUPAC rules:\n1. Longest continuous carbon chain containing the branches has 5 carbons (parent: pentane).\n2. Number from the end that gives the lowest locant set: numbering from right to left gives branches at positions 2 (methyl) and 3 (ethyl) -> locants **2, 3**. (Left-to-right numbering would give 3, 4, which is higher).\n3. Alphabetical ordering: 'ethyl' comes before 'methyl' (e before m).\n4. Combine: **3-ethyl-2-methylpentane**."
  },
  {
    id: "EDEXCEL-U1-L4-Q53-HARD-2026",
    question: "What is the correct systematic IUPAC name for the compound represented by the structural formula $\\text{CH}_2\\text{(Br)CH(OH)CH}_3$?",
    options: [
      { text: "1-bromopropan-2-ol", isCorrect: true },
      { text: "3-bromopropan-2-ol" },
      { text: "1-bromopropanol" },
      { text: "3-bromopropanol" }
    ],
    explanation: "In this compound, the principal functional group is the alcohol ($-\\text{OH}$), which determines the suffix '-ol' and has priority for numbering over the bromine substituent. The chain is numbered from right to left to give the $-\\text{OH}$ group the lowest possible number (carbon-2). The bromine atom is at carbon-1. Therefore, the name is **1-bromopropan-2-ol**."
  },
  {
    id: "EDEXCEL-U1-L4-Q54-MEDIUM-2026",
    question: "Why are no locants used in the systematic name of dimethylpropane, $\\text{CH}_3\\text{C(CH}_3)_2\\text{CH}_3$?",
    options: [
      { text: "Because both methyl groups must be attached to carbon 2 of the propane chain; attaching them elsewhere would extend the main chain, making locants redundant", isCorrect: true },
      { text: "Because dimethylpropane contains only carbon atoms with identical environments" },
      { text: "Because the prefix 'di-' indicates that the methyl groups are automatically placed at the ends of the chain" },
      { text: "Because it is an isomer of pentane and isomers do not require locants" }
    ],
    explanation: "In propane (3 carbons), the only carbon that can support two branches without extending the longest carbon chain (which would make it butane or pentane) is carbon-2. Therefore, both methyl groups must be attached to carbon-2. Because this is the only possible arrangement for dimethylpropane, writing '2,2-dimethylpropane' is unnecessary, and the locants are omitted."
  },
  {
    id: "EDEXCEL-U1-L4-Q55-HARD-2026",
    question: "What is the total number of structural isomers with the molecular formula $\\text{C}_4\\text{H}_8\\text{Cl}_2$?",
    options: [
      { text: "9", isCorrect: true },
      { text: "6" },
      { text: "8" },
      { text: "4" }
    ],
    explanation: "There are 9 structural isomers of $\\text{C}_4\\text{H}_8\\text{Cl}_2$:\n1. 6 isomers with a straight butane chain: 1,1-dichlorobutane, 2,2-dichlorobutane, 1,2-dichlorobutane, 1,3-dichlorobutane, 1,4-dichlorobutane, and 2,3-dichlorobutane.\n2. 3 isomers with a branched methylpropane chain: 1,1-dichloro-2-methylpropane, 1,2-dichloro-2-methylpropane, and 1,3-dichloro-2-methylpropane."
  },
  {
    id: "EDEXCEL-U1-L4-Q56-HARD-2026",
    question: "Which of the following is NOT a possible cycloalkane isomer with the molecular formula $\\text{C}_5\\text{H}_{10}$?",
    options: [
      { text: "1,3-dimethylcyclobutane", isCorrect: true },
      { text: "methylcyclobutane" },
      { text: "1,2-dimethylcyclopropane" },
      { text: "ethylcyclopropane" }
    ],
    explanation: "Let's count the carbons for 1,3-dimethylcyclobutane:\n* Cyclobutane ring = 4 carbons\n* Two methyl groups = 2 carbons\nTotal carbons = 6 carbons ($\\text{C}_6\\text{H}_{12}$). Therefore, it is an isomer of $\\text{C}_6\\text{H}_{12}$, not $\\text{C}_5\\text{H}_{10}$. The valid cycloalkane isomers of $\\text{C}_5\\text{H}_{10}$ are cyclopentane, methylcyclobutane, 1,1-dimethylcyclopropane, 1,2-dimethylcyclopropane, and ethylcyclopropane."
  },
  {
    id: "EDEXCEL-U1-L4-Q57-MEDIUM-2026",
    question: "Consider the following reaction:\n$$\\text{CH}_3\\text{CHO} + \\text{HCN} \\rightarrow \\text{CH}_3\\text{CH(OH)CN}$$\nClassify the type of organic reaction occurring in this process.",
    options: [
      { text: "Addition", isCorrect: true },
      { text: "Substitution" },
      { text: "Oxidation" },
      { text: "Reduction" }
    ],
    explanation: "In this reaction, two reactant molecules (ethanal and hydrogen cyanide) combine to form a single product molecule (2-hydroxypropanenitrile). Since multiple reactants combine to form a single product species, this is classified as an addition reaction."
  },
  {
    id: "EDEXCEL-U1-L4-Q58-MEDIUM-2026",
    question: "When writing organic equations, why is the symbol $\\text{[O]}$ used to represent the oxidising agent instead of molecular oxygen ($\\text{O}_2$)?",
    options: [
      { text: "Using $\\text{O}_2$ implies that the reaction occurs using gaseous oxygen from the air, whereas $\\text{[O]}$ represents oxygen delivered from a chemical oxidising agent (like acidified dichromate)", isCorrect: true },
      { text: "Because $\\text{[O]}$ represents a spectator ion that does not participate in electron transfer" },
      { text: "Because molecular oxygen is a reducing agent in organic chemistry" },
      { text: "Because square brackets indicate that the reaction must occur under high pressure" }
    ],
    explanation: "The symbol $\\text{[O]}$ represents oxygen supplied by an oxidising agent (such as acidified potassium dichromate(VI)). Writing $\\text{O}_2$ would be incorrect because it indicates that combustion or reaction with atmospheric molecular oxygen is taking place, which involves completely different conditions and mechanisms."
  },
  {
    id: "EDEXCEL-U1-L4-Q59-MEDIUM-2026",
    question: "Which statement correctly defines an electrophile and describes its behavior in organic reactions?",
    options: [
      { text: "An electron-deficient species (electron-pair acceptor) that is attracted to and attacks regions of high electron density", isCorrect: true },
      { text: "An electron-rich species (electron-pair donor) that attacks positive or electron-deficient carbon atoms" },
      { text: "A neutral species containing an unpaired valence electron that attacks sigma bonds" },
      { text: "An ion that only reacts via homolytic fission" }
    ],
    explanation: "An electrophile ('electron-lover') is an electron-deficient species (such as a positive ion or a polar positive atom) that accepts an electron pair. It is attracted to and attacks areas of high electron density (such as a C=C double bond or a region carrying a partial negative charge)."
  },
  {
    id: "EDEXCEL-U1-L4-Q60-HARD-2026",
    question: "Which of the following equations represents the homolytic fission of a covalent bond in ethane?",
    options: [
      { text: "$\\text{CH}_3-\\text{CH}_3 \\rightarrow 2\\text{CH}_3^\\bullet$", isCorrect: true },
      { text: "$\\text{CH}_3-\\text{CH}_3 \\rightarrow \\text{CH}_3^+ + \\text{CH}_3^-$" },
      { text: "$\\text{CH}_3-\\text{CH}_3 + \\text{Cl}_2 \\rightarrow \\text{CH}_3-\\text{CH}_2\\text{Cl} + \\text{HCl}$" },
      { text: "$\\text{CH}_3-\\text{CH}_3 \\rightarrow \\text{C}_2\\text{H}_4 + \\text{H}_2$" }
    ],
    explanation: "Homolytic fission is the breaking of a covalent bond where each atom gets one of the shared bonding electrons. This produces neutral, highly reactive free radicals with unpaired electrons (represented by dots). For ethane, homolytic fission of the C-C bond yields two methyl free radicals: $\\text{CH}_3-\\text{CH}_3 \\rightarrow 2\\text{CH}_3^\\bullet$."
  },
  {
    id: "EDEXCEL-U1-L4-Q61-MEDIUM-2026",
    question: "Using dilute sulfuric acid as an example, which statement correctly explains the difference between a hazard and a risk?",
    options: [
      { text: "The hazard is that the acid is an irritant (an inherent, fixed chemical property), whereas the risk is the likelihood of it splashing into the eyes during use (which can be reduced by using safety goggles)", isCorrect: true },
      { text: "The hazard is the probability of the acid causing tissue damage, while the risk is the concentration of the acid" },
      { text: "The hazard is a property that can be changed by using a fume cupboard, whereas the risk is a fixed property of the acid" },
      { text: "The hazard is the type of container the acid is stored in, whereas the risk is the temperature of the acid during reaction" }
    ],
    explanation: "A hazard is an inherent, fixed property of a substance that has the potential to cause harm (dilute sulfuric acid is inherently an irritant/corrosive). A risk is the probability of that hazard actually causing harm under specific experimental conditions (e.g., the chance of splashing it into your eyes). Wearing eye protection decreases the risk but has no effect on the hazard of the acid itself."
  },
  {
    id: "EDEXCEL-U1-L4-Q62-MEDIUM-2026",
    question: "A liquid to be heated in an organic synthesis experiment is labeled 'highly flammable'. Which pair of control measures would most effectively reduce the risk of fire?",
    options: [
      { text: "Heat using an electrical heating mantle instead of a Bunsen burner, and keep the reagent bottle closed when not in use", isCorrect: true },
      { text: "Wear a lab coat and carry out the heating near an open window" },
      { text: "Use a mercury thermometer to monitor temperature and heat with a Bunsen burner using a tripod and gauze" },
      { text: "Dilute the organic compound with water and heat with a Bunsen burner" }
    ],
    explanation: "To reduce the risk of fire when heating a flammable liquid:\n1. Eliminate the ignition source by using an electrical heating mantle or water bath instead of a naked Bunsen burner flame.\n2. Keep the container capped to prevent flammable volatile vapors from escaping into the room."
  },
  {
    id: "EDEXCEL-U1-L4-Q63-MEDIUM-2026",
    question: "Why are spirit thermometers or digital thermometers preferred over mercury thermometers in modern school organic chemistry laboratories?",
    options: [
      { text: "Mercury is highly toxic, so using spirit or digital thermometers reduces the health risk of toxic exposure if the thermometer breaks", isCorrect: true },
      { text: "Spirit thermometers have a much higher boiling point than mercury, allowing them to measure combustion temperatures" },
      { text: "Mercury reacts violently with alkanes and alkenes to release toxic fumes" },
      { text: "Digital thermometers do not have any hazards associated with their manufacturing" }
    ],
    explanation: "Mercury is a highly toxic heavy metal. If a mercury thermometer breaks in the laboratory, it releases toxic mercury liquid and vapors which are hazardous to breathe and difficult to clean up. Spirit (usually containing colored ethanol) or digital thermometers have significantly lower hazards."
  },
  {
    id: "EDEXCEL-U1-L4-Q64-MEDIUM-2026",
    question: "Why is glass apparatus connected by ground glass joints preferred over glass tubes fitted through corks or rubber bungs when assembling distillation setups?",
    options: [
      { text: "Pushing glass tubing through rubber bungs requires force and has a high risk of breaking the glass and puncturing the hand, which is avoided by ground glass joints", isCorrect: true },
      { text: "Ground glass joints are completely flexible, preventing the glass from breaking under thermal expansion" },
      { text: "Rubber bungs react with volatile organic solvents and dissolve immediately, contaminating the products" },
      { text: "Ground glass joints act as catalysts for the oxidation of organic vapours" }
    ],
    explanation: "Fitting glass tubing through rubber bungs or corks is a common source of laboratory accidents due to the force required, which can cause the thin glass tubing to snap and cause severe hand lacerations. Modern ground glass joints slide together easily without requiring force, eliminating this risk."
  },
  {
    id: "EDEXCEL-U1-L4-Q65-EASY-2026",
    question: "Which statement is true regarding any single fraction collected from the fractional distillation of crude oil?",
    options: [
      { text: "It is still a mixture of different hydrocarbon compounds with a defined range of boiling points", isCorrect: true },
      { text: "It consists of a single pure hydrocarbon compound" },
      { text: "It contains only unsaturated alkenes with identical chain lengths" },
      { text: "It contains only compounds that have been chemically cracked during heating" }
    ],
    explanation: "Fractional distillation is a physical separation process that separates crude oil into fractions. Each fraction is not a pure compound, but rather a mixture of a smaller number of hydrocarbons that have boiling points within a specific temperature range."
  },
  {
    id: "EDEXCEL-U1-L4-Q66-MEDIUM-2026",
    question: "One molecule of the alkane $\\text{C}_{12}\\text{H}_{26}$ is cracked to form exactly two molecules of ethene and one molecule of another alkane. What is the molecular formula of the other alkane formed?",
    options: [
      { text: "$\\text{C}_8\\text{H}_{18}$", isCorrect: true },
      { text: "$\\text{C}_8\\text{H}_{16}$" },
      { text: "$\\text{C}_{10}\\text{H}_{22}$" },
      { text: "$\\text{C}_6\\text{H}_{14}$" }
    ],
    explanation: "The equation for the cracking reaction is:\n$$\\text{C}_{12}\\text{H}_{26} \\rightarrow 2\\text{C}_2\\text{H}_4 + \\text{C}_x\\text{H}_y$$\n* Balance carbon: $12 - (2 \\times 2) = 8$ carbons.\n* Balance hydrogen: $26 - (2 \\times 4) = 18$ hydrogens.\nTherefore, the molecular formula of the other alkane is $\\text{C}_8\\text{H}_{18}$ (octane)."
  },
  {
    id: "EDEXCEL-U1-L4-Q67-MEDIUM-2026",
    question: "The cracking of one molecule of a long-chain alkane produces exactly two molecules of ethene and one molecule of pentane. What is the molecular formula of the original alkane?",
    options: [
      { text: "$\\text{C}_9\\text{H}_{20}$", isCorrect: true },
      { text: "$\\text{C}_7\\text{H}_{16}$" },
      { text: "$\\text{C}_9\\text{H}_{18}$" },
      { text: "$\\text{C}_8\\text{H}_{18}$" }
    ],
    explanation: "We can assemble the cracking equation from the products:\n$$\\text{Original Alkane} \\rightarrow 2\\text{C}_2\\text{H}_4 + \\text{C}_5\\text{H}_{12}$$\n* Total carbon atoms: $(2 \\times 2) + 5 = 9$ carbons.\n* Total hydrogen atoms: $(2 \\times 4) + 12 = 20$ hydrogens.\nTherefore, the original alkane is nonane, which has the molecular formula $\\text{C}_9\\text{H}_{20}$."
  },
  {
    id: "EDEXCEL-U1-L4-Q68-MEDIUM-2026",
    question: "Which equation correctly represents the incomplete combustion of propane ($\\text{C}_3\\text{H}_8$) where one of the products is solid carbon (soot)?",
    options: [
      { text: "$\\text{C}_3\\text{H}_8 + 4\\text{O}_2 \\rightarrow \\text{C} + 2\\text{CO}_2 + 4\\text{H}_2\\text{O}$", isCorrect: true },
      { text: "$\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$" },
      { text: "$\\text{C}_3\\text{H}_8 + 3\\text{O}_2 \\rightarrow 3\\text{C} + 4\\text{H}_2\\text{O}$" },
      { text: "$\\text{C}_3\\text{H}_8 + 2\\text{O}_2 \\rightarrow 3\\text{CO} + 4\\text{H}_2$" }
    ],
    explanation: "During incomplete combustion of propane under very limited oxygen, some carbon atoms do not oxidize fully. The equation:\n$$\\text{C}_3\\text{H}_8 + 4\\text{O}_2 \\rightarrow \\text{C} + 2\\text{CO}_2 + 4\\text{H}_2\\text{O}$$\nshows two carbon atoms forming carbon dioxide and one carbon atom forming solid soot ($\\text{C}$), with all hydrogen atoms oxidized to water."
  },
  {
    id: "EDEXCEL-U1-L4-Q69-MEDIUM-2026",
    question: "Which equation correctly represents the incomplete combustion of propane ($\\text{C}_3\\text{H}_8$) to form a mixture of carbon monoxide (CO), carbon dioxide ($\\text{CO}_2$), and water?",
    options: [
      { text: "$\\text{C}_3\\text{H}_8 + 4\\text{O}_2 \\rightarrow 2\\text{CO} + \\text{CO}_2 + 4\\text{H}_2\\text{O}$", isCorrect: true },
      { text: "$\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 2\\text{CO} + \\text{CO}_2 + 4\\text{H}_2\\text{O}$" },
      { text: "$\\text{C}_3\\text{H}_8 + 3\\text{O}_2 \\rightarrow 3\\text{CO} + 4\\text{H}_2\\text{O}$" },
      { text: "$\\text{C}_3\\text{H}_8 + 2\\text{O}_2 \\rightarrow \\text{CO} + 2\\text{C} + 4\\text{H}_2\\text{O}$" }
    ],
    explanation: "The balanced equation for incomplete combustion forming a mixture of CO and $\\text{CO}_2$ is:\n$$\\text{C}_3\\text{H}_8 + 4\\text{O}_2 \\rightarrow 2\\text{CO} + \\text{CO}_2 + 4\\text{H}_2\\text{O}$$\n* Carbon balance: 3 on left, $2 + 1 = 3$ on right.\n* Hydrogen balance: 8 on left, $4 \\times 2 = 8$ on right.\n* Oxygen balance: $4 \\times 2 = 8$ on left, $2 + (1 \\times 2) + 4 = 8$ on right."
  },
  {
    id: "EDEXCEL-U1-L4-Q70-HARD-2026",
    question: "In the atmosphere, sulfur dioxide ($\\text{SO}_2$) can be further oxidized and react with water to form sulfuric acid ($\\text{H}_2\\text{SO}_4$). Which sequence of equations correctly represents this process?",
    options: [
      { text: "$2\\text{SO}_2 + \\text{O}_2 \\rightarrow 2\\text{SO}_3$ followed by $\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4$", isCorrect: true },
      { text: "\\text{SO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_3$ followed by $\\text{H}_2\\text{SO}_3 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{SO}_4$", isCorrect: false },
      { text: "\\text{SO}_2 + \\text{O}_3 \\rightarrow \\text{SO}_3 + \\text{O}_2$ followed by $\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_3$", isCorrect: false },
      { text: "$2\\text{SO}_2 + \\text{O}_2 \\rightarrow 2\\text{SO}_3$ followed by $2\\text{SO}_3 + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2\\text{SO}_3 + \\text{O}_2$", isCorrect: false }
    ],
    explanation: "Sulfur dioxide is oxidized by oxygen in the atmosphere to sulfur trioxide ($2\\text{SO}_2 + \\text{O}_2 \\rightarrow 2\\text{SO}_3$). The sulfur trioxide then dissolves in atmospheric water droplets to produce sulfuric acid ($\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4$), which is a major component of strong acid rain."
  },
  {
    id: "EDEXCEL-U1-L4-Q71-MEDIUM-2026",
    question: "No carbon dioxide is formed when hydrogen burns ($2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$). Why is hydrogen still NOT considered a 100% carbon-neutral fuel in practice?",
    options: [
      { text: "Because the electricity used to produce hydrogen via water electrolysis or compress it for storage often comes from power stations burning fossil fuels", isCorrect: true },
      { text: "Because hydrogen atoms release carbon dioxide when reacting with oxygen in fuel cells" },
      { text: "Because hydrogen is naturally mixed with carbon compounds in water molecules" },
      { text: "Because hydrogen has a very high global warming potential as a greenhouse gas" }
    ],
    explanation: "While the combustion of hydrogen gas does not produce any carbon dioxide, the production of hydrogen (via electrolysis of water) and its compression or liquefaction for storage require significant amounts of energy. If this energy is generated by burning fossil fuels, the overall lifecycle of hydrogen fuel still releases $\\text{CO}_2$, making it not carbon neutral."
  },
  {
    id: "EDEXCEL-U1-L4-Q72-HARD-2026",
    question: "What is the primary factor that sets an upper limit to the concentration of ethanol that can be obtained directly from yeast fermentation of sugars?",
    options: [
      { text: "Ethanol becomes toxic to yeast, killing the yeast cells when the concentration reaches about 14%", isCorrect: true },
      { text: "Water starts evaporating faster than ethanol, keeping the concentration constant" },
      { text: "Enzymes in yeast begin to convert ethanol back into glucose at higher concentrations" },
      { text: "The carbon dioxide gas produced inhibits the further absorption of sugar by yeast" }
    ],
    explanation: "During the fermentation of sugars, yeast enzymes convert glucose into ethanol. However, ethanol is toxic to yeast. When the concentration of ethanol in the solution reaches about 14%, it kills the yeast cells, halting the fermentation process. Further concentration requires energy-intensive distillation."
  },
  {
    id: "EDEXCEL-U1-L4-Q73-EASY-2026",
    question: "In vehicle fuels, what do the designations E10 and E85 represent?",
    options: [
      { text: "E10 is 10% bioethanol and 90% petrol; E85 is 85% bioethanol and 15% petrol", isCorrect: true },
      { text: "E10 is 10% petrol and 90% bioethanol; E85 is 85% petrol and 15% bioethanol" },
      { text: "E10 is an octane rating of 10; E85 is an octane rating of 85" },
      { text: "E10 contains 10% methane; E85 contains 85% methane" }
    ],
    explanation: "Petrol-ethanol blends are designated by their 'E-number', which indicates the percentage of bioethanol by volume. Therefore, E10 contains 10% bioethanol and 90% petrol, whereas E85 contains 85% bioethanol and 15% petrol."
  },
  {
    id: "EDEXCEL-U1-L4-Q74-MEDIUM-2026",
    question: "Which statement correctly compares biofuels with natural gas as vehicle fuels?",
    options: [
      { text: "Biofuels require vast land areas to grow crops which competes with food production, whereas natural gas is extracted from underground with no surface agricultural land use", isCorrect: true },
      { text: "Natural gas requires high land use to build pipelines, while biofuels require no agricultural land" },
      { text: "Biofuels have a much higher energy yield and lower transport costs than natural gas" },
      { text: "Natural gas is closer to being carbon neutral than biofuels" }
    ],
    explanation: "A major disadvantage of biofuels is land use; vast fields are needed to grow the crops (like sugarcane or corn) used to produce them, which can compete with agricultural land needed to feed populations. In contrast, natural gas is extracted from underground reservoirs and does not compete with food production land."
  },
  {
    id: "EDEXCEL-U1-L4-Q75-HARD-2026",
    question: "To store hydrogen as a liquid, it must be cooled in heavily insulated containers. At what temperature does hydrogen liquefy under standard pressure?",
    options: [
      { text: "$-253^\\circ\\text{C}$", isCorrect: true },
      { text: "$-196^\\circ\\text{C}$" },
      { text: "$-78^\\circ\\text{C}$" },
      { text: "$0^\\circ\\text{C}$" }
    ],
    explanation: "Hydrogen has a extremely low boiling point of $-253^\\circ\\text{C}$ (20 K). Therefore, storing it as a liquid requires cryogenic containers cooled to and maintained at $-253^\\circ\\text{C}$."
  },
  {
    id: "EDEXCEL-U1-L4-Q76-MEDIUM-2026",
    question: "Since catalytic converters are not very effective at removing sulfur-based compounds from exhaust gases, what is the best way to prevent sulfur dioxide pollution from vehicle emissions?",
    options: [
      { text: "Remove sulfur compounds from the fuel before it is burned, producing low-sulfur or ultra-low-sulfur fuel", isCorrect: true },
      { text: "Spray calcium oxide powder directly into the vehicle's exhaust pipe during driving" },
      { text: "React the exhaust gases with hydrogen gas to form non-toxic sulfur hexahydride" },
      { text: "Dilute the fuel with ethanol, which neutralizes the sulfur impurities" }
    ],
    explanation: "Because catalytic converters cannot remove sulfur-based compounds from exhaust gases effectively, the best industrial solution to prevent sulfur dioxide ($\\text{SO}_2$) pollution is flue gas desulfurization in power stations, or removing sulfur impurities directly from crude fractions at oil refineries to produce low-sulfur or ultra-low-sulfur fuel."
  },
  {
    id: "EDEXCEL-U1-L4-Q77-EASY-2026",
    question: "What type of chemical formula is shown for the compound $\\text{CH}_3-\\text{C(CH}_3)_2-\\text{CH}_3$?",
    options: [
      { text: "Structural formula", isCorrect: true },
      { text: "Displayed formula" },
      { text: "Skeletal formula" },
      { text: "Molecular formula" }
    ],
    explanation: "The formula $\\text{CH}_3-\\text{C(CH}_3)_2-\\text{CH}_3$ shows the arrangement of atoms and the bonds connecting the carbon atoms, but groups the hydrogen atoms together as $\\text{-CH}_3$. Therefore, it is a structural formula (condensed/extended structural formula)."
  },
  {
    id: "EDEXCEL-U1-L4-Q78-MEDIUM-2026",
    question: "Which equation represents a termination step in the reaction between chlorine ($\\text{Cl}_2$) and chloromethane ($\\text{CH}_3\\text{Cl}$) under UV light?",
    options: [
      { text: "${}^\\bullet\\text{CH}_2\\text{Cl} + \\text{Cl}^\\bullet \\rightarrow \\text{CH}_2\\text{Cl}_2$", isCorrect: true },
      { text: "${}^\\bullet\\text{CH}_3 + \\text{Cl}_2 \\rightarrow \\text{CH}_3\\text{Cl} + \\text{Cl}^\\bullet$" },
      { text: "\\text{CH}_3\\text{Cl} + \\text{Cl}_2 \\rightarrow \\text{CH}_2\\text{Cl}_2 + \\text{HCl}$" },
      { text: "$\\text{H}^\\bullet + \\text{Cl}^\\bullet \\rightarrow \\text{HCl}$" }
    ],
    explanation: "A termination step involves the collision and combination of any two free radicals to form a stable molecule. When chlorine reacts with chloromethane, the propagation step produces chloromethyl radicals (${}^\\bullet\\text{CH}_2\\text{Cl}$). Collision of this radical with a chlorine radical ($\\text{Cl}^\\bullet$) forms dichloromethane ($\\text{CH}_2\\text{Cl}_2$) and terminates the chain. (Note: $\\text{H}^\\bullet$ radicals are not formed in this mechanism)."
  },
  {
    id: "EDEXCEL-U1-L4-Q79-MEDIUM-2026",
    question: "Using the following boiling points for alkanes: heptane = 372 K, octane = 399 K, decane = 447 K. Predict a reasonable value for the boiling temperature of nonane ($\\text{C}_9\\text{H}_{20}$).",
    options: [
      { text: "423 K", isCorrect: true },
      { text: "385 K" },
      { text: "458 K" },
      { text: "410 K" }
    ],
    explanation: "The boiling points of alkanes show a smooth gradation with chain length. Nonane ($\\text{C}_9\\text{H}_{20}$) lies exactly between octane ($399\\text{ K}$) and decane ($447\\text{ K}$). A value of **423 K** fits this trend perfectly (lying in the expected range of 415 to 430 K)."
  },
  {
    id: "EDEXCEL-U1-L4-Q80-HARD-2026",
    question: "Industrially, ethene is converted into ethanol by direct hydration with steam. What are the correct catalyst and reaction conditions used for this process?",
    options: [
      { text: "Phosphoric acid ($\\text{H}_3\\text{PO}_4$) catalyst, $300^\\circ\\text{C}$, $60-70\\text{ atm}$ pressure", isCorrect: true },
      { text: "Nickel catalyst, $150^\\circ\\text{C}$, $1\\text{ atm}$ pressure" },
      { text: "Zeolite catalyst, $450^\\circ\\text{C}$, $70\\text{ atm}$ pressure" },
      { text: "Platinum catalyst, $900^\\circ\\text{C}$, $60-70\\text{ atm}$ pressure" }
    ],
    explanation: "The industrial hydration of ethene to manufacture ethanol is carried out by reacting ethene with steam at a temperature of approximately $300^\\circ\\text{C}$ (570 K) and a high pressure of $60 - 70\\text{ atm}$ in the presence of a phosphoric acid catalyst ($\\text{H}_3\\text{PO}_4$) adsorbed on silica."
  },
  {
    id: "EDEXCEL-U1-L4-Q81-MEDIUM-2026",
    question: "Which equation correctly represents the catalytic reforming of heptane ($\\text{C}_7\\text{H}_{16}$) into methylcyclohexane?",
    options: [
      { text: "$\\text{C}_7\\text{H}_{16} \\rightarrow \\text{C}_6\\text{H}_{11}\\text{CH}_3 + \\text{H}_2$", isCorrect: true },
      { text: "$\\text{C}_7\\text{H}_{16} \\rightarrow \\text{C}_6\\text{H}_{11}\\text{CH}_3 + 2\\text{H}_2$" },
      { text: "$\\text{C}_7\\text{H}_{16} \\rightarrow \\text{C}_7\\text{H}_{14} + 2\\text{H}_2$" },
      { text: "$\\text{C}_7\\text{H}_{16} \\rightarrow \\text{C}_5\\text{H}_9\\text{CH}_3 + \\text{H}_2$" }
    ],
    explanation: "Reforming heptane ($\\text{C}_7\\text{H}_{16}$) into methylcyclohexane ($\\text{C}_7\\text{H}_{14}$) is a dehydrogenation and cyclization reaction. Since the reactant has 16 hydrogens and the product has 14 hydrogens, one molecule of hydrogen gas ($\\text{H}_2$) is formed as a byproduct: $\\text{C}_7\\text{H}_{16} \\rightarrow \\text{C}_6\\text{H}_{11}\\text{CH}_3 + \\text{H}_2$."
  },
  {
    id: "EDEXCEL-U1-L4-Q82-MEDIUM-2026",
    question: "Hydrocarbon Y contains 85.7% carbon by mass and has a molar mass of $56\\text{ g/mol}$. How many structural isomers (excluding stereoisomers) can be drawn for this molecular formula?",
    options: [
      { text: "5", isCorrect: true },
      { text: "4" },
      { text: "6" },
      { text: "3" }
    ],
    explanation: "First, deduce the formula of Y: empirical formula is $\\text{CH}_2$ ($85.7/12 = 7.14$ C, $14.3/1 = 14.3$ H), and since $M_r = 56$, the molecular formula is $\\text{C}_4\\text{H}_8$. There are 5 structural isomers of $\\text{C}_4\\text{H}_8$:\n1. Alkenes: but-1-ene, but-2-ene, and methylpropene (3 structural isomers).\n2. Cycloalkanes: cyclobutane and methylcyclopropane (2 structural isomers).\n(Note: if cis/trans stereoisomers of but-2-ene are included, the total count rises to 6, but there are exactly 5 structural isomers)."
  },
  {
    id: "EDEXCEL-U1-L4-Q83-EASY-2026",
    question: "Two structural formulas represent the same compound if they show the same connectivity of atoms, even if drawn bent on paper. Which two of the following representations depict the exact same molecule?\n* A: $\\text{CH}_3-\\text{CH}_2$ going down to $\\text{CH}_2-\\text{CH}_3$\n* B: $\\text{CH}_3-\\text{CH}_2$ going down to $\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$\n* C: $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2$ going down to $\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$\n* D: $\\text{CH}_3-\\text{CH}_2$ going down to $\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$",
    options: [
      { text: "C and D", isCorrect: true },
      { text: "A and B" },
      { text: "B and C" },
      { text: "A and D" }
    ],
    explanation: "Both C and D have a continuous, unbranched chain of 6 carbon atoms (hexane, $\\text{C}_6\\text{H}_{14}$). Drawing the carbon chain bent on paper does not change the connectivity or the identity of the molecule, so both represent the same compound."
  },
  {
    id: "EDEXCEL-U1-L4-Q84-MEDIUM-2026",
    question: "What are the systematic IUPAC names for the two branched isomers of pentane ($\\text{C}_5\\text{H}_{12}$)?",
    options: [
      { text: "2-methylbutane and dimethylpropane", isCorrect: true },
      { text: "2-methylbutane and 2,2-dimethylbutane" },
      { text: "methylbutane and 2-methylpropane" },
      { text: "pentane and 2-methylbutane" }
    ],
    explanation: "Pentane ($\\text{C}_5\\text{H}_{12}$) has three structural isomers: one straight-chain (pentane) and two branched isomers. The branched isomers are 2-methylbutane ($\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_3$) and dimethylpropane ($\\text{CH}_3\\text{C(CH}_3)_2\\text{CH}_3$)."
  },
  {
    id: "EDEXCEL-U1-L4-Q85-MEDIUM-2026",
    question: "Which equation correctly represents the isomerization of decane into 2,3-dimethyloctane during petroleum reforming?",
    options: [
      { text: "$\\text{C}_{10}\\text{H}_{22} \\rightarrow \\text{C}_{10}\\text{H}_{22}$", isCorrect: true },
      { text: "$\\text{C}_{10}\\text{H}_{22} \\rightarrow \\text{C}_{10}\\text{H}_{20} + \\text{H}_2$" },
      { text: "$\\text{C}_{10}\\text{H}_{22} \\rightarrow \\text{C}_8\\text{H}_{18} + \\text{C}_2\\text{H}_4$" },
      { text: "$\\text{C}_{10}\\text{H}_{22} \\rightarrow \\text{C}_9\\text{H}_{20} + \\text{CH}_4$" }
    ],
    explanation: "Converting decane into 2,3-dimethyloctane is a structural isomerization reaction. Since both compounds are saturated alkanes with 10 carbon atoms, they share the identical molecular formula ($\\text{C}_{10}\\text{H}_{22}$). No other products (like hydrogen or small alkanes) are formed, so the equation is simply: $\\text{C}_{10}\\text{H}_{22} \\rightarrow \\text{C}_{10}\\text{H}_{22}$."
  }
];

