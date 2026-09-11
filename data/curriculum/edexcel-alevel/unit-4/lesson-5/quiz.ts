export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: FOUNDATION (EASY)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L5-EASY-20260717-01",
    question: "Which of the following compounds is chiral and contains an asymmetric carbon atom?",
    options: [
      { text: "Propan-2-ol", isCorrect: false },
      { text: "Butan-2-ol", isCorrect: true },
      { text: "Butan-1-ol", isCorrect: false },
      { text: "Propanal", isCorrect: false }
    ],
    explanation: "Butan-2-ol (CH₃CH(OH)CH₂CH₃) has carbon-2 bonded to four different groups: -H, -OH, -CH₃, and -CH₂CH₃. Thus, it contains a chiral centre. Propan-2-ol, butan-1-ol, and propanal do not have any carbon bonded to four different groups."
  },
  {
    id: "EDEXCEL-AL-U4-L5-EASY-20260717-02",
    question: "Which reagent can be used to distinguish between aldehydes and ketones?",
    options: [
      { text: "2,4-dinitrophenylhydrazine (2,4-DNPH)", isCorrect: false },
      { text: "Tollens' reagent", isCorrect: true },
      { text: "Lithium tetrahydridoaluminate (LiAlH₄)", isCorrect: false },
      { text: "Phosphorus pentachloride (PCl₅)", isCorrect: false }
    ],
    explanation: "Tollens' reagent reacts only with aldehydes to form a silver mirror (aldehydes are oxidized, Ag⁺ is reduced to Ag). Ketones cannot be easily oxidized, so they show no reaction. 2,4-DNPH reacts with both to form orange precipitates."
  },

  // ==========================================
  // LEVEL 2: APPLICATION (MEDIUM)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260717-03",
    question: "Why does the nucleophilic addition of HCN to propanal result in a product that is optically inactive?",
    options: [
      { text: "The product does not contain a chiral carbon.", isCorrect: false },
      { text: "The nucleophile CN⁻ is symmetrical.", isCorrect: false },
      { text: "The carbonyl group is planar, allowing attack with equal probability from above or below.", isCorrect: true },
      { text: "The reaction occurs via an SN2 mechanism.", isCorrect: false }
    ],
    explanation: "The carbonyl group (C=O) is planar. The CN⁻ nucleophile can attack the electron-deficient carbon atom from above or below the plane with equal (50:50) probability. This forms equal amounts of the two enantiomers, creating a racemic mixture, which is optically inactive."
  },
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260717-04",
    question: "What organic products are formed when ethyl benzoate is heated under reflux with aqueous sodium hydroxide?",
    options: [
      { text: "Benzoic acid and ethanol", isCorrect: false },
      { text: "Sodium benzoate and ethanol", isCorrect: true },
      { text: "Sodium benzoate and sodium ethoxide", isCorrect: false },
      { text: "Ethyl sodium carbonate and benzene", isCorrect: false }
    ],
    explanation: "Heating an ester with NaOH leads to base hydrolysis (saponification). The ester bond is cleaved. Since NaOH is a base, benzoic acid is deprotonated immediately to form its sodium salt. The products are sodium benzoate and ethanol."
  },

  // ==========================================
  // LEVEL 3: ANALYSIS (HARD)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L5-HARD-20260717-05",
    question: "A compound Y has the molecular formula C₃H₆O. It reacts with 2,4-DNPH to give an orange precipitate but does not react with Fehling's solution. When treated with iodine in alkaline solution, it yields a yellow precipitate. Identify Y.",
    options: [
      { text: "Propan-1-ol", isCorrect: false },
      { text: "Propanal", isCorrect: false },
      { text: "Propanone", isCorrect: true },
      { text: "Propanoic acid", isCorrect: false }
    ],
    explanation: "1. Y reacts with 2,4-DNPH: Y contains a carbonyl (C=O) group (eliminates propan-1-ol and propanoic acid).\n2. Y does not react with Fehling's: Y is a ketone, not an aldehyde (eliminates propanal).\n3. Y reacts with iodine/NaOH (Iodoform test): Y contains a methyl carbonyl group (CH₃-CO-).\nPropanone (CH₃COCH₃) is a ketone containing a methyl carbonyl group, fitting all tests."
  },
  // ==========================================
  // ADDED FOR 20 QUESTIONS COMPREHENSIVE COVERAGE
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260721-06",
    question: "When 2-bromobutane is hydrolyzed by aqueous sodium hydroxide via an SN1 mechanism, the product is optically inactive. However, when it is hydrolyzed via an SN2 mechanism, the product is optically active. Why is this?",
    options: [
      { text: "The SN1 mechanism forms a planar carbocation intermediate allowing attack from both sides, while SN2 involves a transition state with back-side attack only.", isCorrect: true },
      { text: "The SN2 mechanism produces a racemic mixture, while SN1 produces a single enantiomer.", isCorrect: false },
      { text: "The SN1 mechanism goes through an inversion of configuration.", isCorrect: false },
      { text: "Hydroxide ions can only attack the front side in an SN1 reaction.", isCorrect: false }
    ],
    explanation: "• In SN1, the leaving group departs first, forming a planar carbocation intermediate. The hydroxide nucleophile can attack with equal probability from either side, forming a 50:50 racemic mixture which is optically inactive.\n• In SN2, the nucleophile attacks from the side opposite to the leaving group in a single concerted step. If a single enantiomer of a chiral starting material is used, it undergoes inversion of configuration (Walden inversion) to form a single enantiomer product, which remains optically active."
  },
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260721-07",
    question: "Why do carboxylic acids (like ethanoic acid) have significantly higher boiling temperatures than alcohols of similar molecular mass?",
    options: [
      { text: "Carboxylic acids are much more polar than alcohols.", isCorrect: false },
      { text: "Carboxylic acids can form stable dimers via two hydrogen bonds between two molecules.", isCorrect: true },
      { text: "Carboxylic acids contain stronger covalent bonds.", isCorrect: false },
      { text: "Carboxylic acids undergo condensation polymerisation upon heating.", isCorrect: false }
    ],
    explanation: "• Carboxylic acid molecules can align to form stable dimers held together by two hydrogen bonds between the carbonyl oxygen of one molecule and the hydroxyl hydrogen of another.\n• This dimerisation effectively doubles the size of the molecules, significantly increasing the strength of London dispersion forces and hydrogen bonding, requiring more energy to break them apart."
  },
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260721-08",
    question: "Which reagents and conditions are required to convert propanenitrile (CH₃CH₂CN) into propanoic acid directly?",
    options: [
      { text: "Heat under reflux with dilute hydrochloric acid.", isCorrect: true },
      { text: "Heat under reflux with aqueous sodium hydroxide.", isCorrect: false },
      { text: "React with lithium aluminium hydride (LiAlH₄) in dry ether.", isCorrect: false },
      { text: "Warm with acidified potassium dichromate(VI).", isCorrect: false }
    ],
    explanation: "• Direct conversion of a nitrile to a carboxylic acid is achieved by acid hydrolysis.\n• Heating a nitrile under reflux with a dilute acid (such as HCl or H₂SO₄) yields a carboxylic acid and an ammonium salt: CH₃CH₂CN + H⁺ + 2H₂O → CH₃CH₂COOH + NH₄⁺.\n• Alkaline hydrolysis with NaOH yields a sodium carboxylate salt, which requires subsequent acidification with dilute acid to obtain the carboxylic acid."
  },
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260721-09",
    question: "Which reagent is suitable for reducing butanoic acid to butan-1-ol, and why can this reaction not be stopped at the intermediate aldehyde stage?",
    options: [
      { text: "NaBH₄ in aqueous ethanol; aldehydes are less reactive than carboxylic acids.", isCorrect: false },
      { text: "LiAlH₄ in dry ether; aldehydes are more easily reduced than carboxylic acids.", isCorrect: true },
      { text: "Hydrogen gas with a nickel catalyst; the catalyst prevents further reduction.", isCorrect: false },
      { text: "Acidified potassium dichromate(VI); it is a selective reducing agent.", isCorrect: false }
    ],
    explanation: "• LiAlH₄ in dry ether is a powerful reducing agent that can reduce carboxylic acids to primary alcohols.\n• The reaction cannot be stopped at the aldehyde stage because aldehydes are more easily reduced than carboxylic acids, so any aldehyde formed is immediately reduced to the primary alcohol.\n• NaBH₄ is a weaker reducing agent and cannot reduce carboxylic acids."
  },
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260721-10",
    question: "Acyl chlorides react rapidly with water at room temperature. What are the products of the reaction of ethanoyl chloride (CH₃COCl) with water?",
    options: [
      { text: "Ethanoic acid and hydrogen chloride gas.", isCorrect: true },
      { text: "Ethanol and chlorine gas.", isCorrect: false },
      { text: "Ethyl ethanoate and water.", isCorrect: false },
      { text: "Ethanal and hypochlorous acid.", isCorrect: false }
    ],
    explanation: "• Acyl chlorides undergo rapid nucleophilic addition-elimination reactions with water at room temperature.\n• The water acts as a nucleophile, replacing the chlorine atom to form a carboxylic acid: CH₃COCl + H₂O → CH₃COOH + HCl(g).\n• The reaction is indicated by the evolution of white, misty fumes of toxic and corrosive HCl gas."
  },
  {
    id: "EDEXCEL-AL-U4-L5-HARD-20260721-11",
    question: "An organic compound X has the molecular formula C₄H₁₀O. When X is warmed with iodine and aqueous sodium hydroxide, a yellow precipitate with an antiseptic smell forms. Which structure is X?",
    options: [
      { text: "CH₃CH₂CH₂CH₂OH", isCorrect: false },
      { text: "CH₃CH(OH)CH₂CH₃", isCorrect: true },
      { text: "(CH₃)₃COH", isCorrect: false },
      { text: "(CH₃)₂CHCH₂OH", isCorrect: false }
    ],
    explanation: "• The formation of a yellow precipitate with iodine/alkali indicates a positive iodoform (triiodomethane) test.\n• For an alcohol to give a positive test, it must have the methyl-hydroxyl structure CH₃CH(OH)-.\n• The iodine/alkali mixture first oxidizes the alcohol to a methyl carbonyl (CH₃CO-), which then reacts further to form triiodomethane (CHI₃).\n• Among the isomers of C₄H₁₀O, only butan-2-ol (CH₃CH(OH)CH₂CH₃) has the required CH₃CH(OH)- group."
  },
  {
    id: "EDEXCEL-AL-U4-L5-HARD-20260721-12",
    question: "Why are 2,4-dinitrophenylhydrazine (2,4-DNPH) derivatives useful in identifying specific carbonyl compounds, rather than just relying on their boiling points?",
    options: [
      { text: "Carbonyl compounds with similar boiling points form solid derivatives with distinct and well-defined melting points.", isCorrect: true },
      { text: "2,4-DNPH derivatives are highly volatile gases that can be analyzed by gas chromatography.", isCorrect: false },
      { text: "The derivatives always have a melting point of exactly 100 °C.", isCorrect: false },
      { text: "The reaction changes the color of the carbonyl compound to green.", isCorrect: false }
    ],
    explanation: "• Many aldehydes and ketones have very similar boiling points (e.g. pentanal, pentan-2-one, and pentan-3-one all boil at 102 °C), making identification by boiling point difficult.\n• Reacting them with 2,4-DNPH yields crystalline orange/yellow solid hydrazone derivatives.\n• These solids can be purified by recrystallisation, and their sharp melting points can be measured and compared to literature values to identify the original carbonyl compound."
  },
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260721-13",
    question: "A student hydrolyzes ethyl ethanoate using aqueous sodium hydroxide under reflux. What are the products of this reaction?",
    options: [
      { text: "Ethanoic acid and ethanol.", isCorrect: false },
      { text: "Sodium ethanoate and ethanol.", isCorrect: true },
      { text: "Sodium ethoxide and ethanoic acid.", isCorrect: false },
      { text: "Ethyl alcohol and sodium acetate.", isCorrect: false }
    ],
    explanation: "• Hydrolysis of an ester with aqueous alkali (e.g., NaOH) is called base hydrolysis or saponification.\n• It is an irreversible reaction that goes to completion, yielding an alcohol and a carboxylate salt.\n• For ethyl ethanoate: CH₃COOCH₂CH₃ + NaOH → CH₃COO⁻Na⁺ + CH₃CH₂OH. The products are sodium ethanoate and ethanol."
  },
  {
    id: "EDEXCEL-AL-U4-L5-HARD-20260721-14",
    question: "A polymer is formed by reacting ethane-1,2-diol (HO-CH₂CH₂-OH) and benzene-1,4-dioyl chloride (ClOC-C₆H₄-COCl). What is the repeat unit and the small molecule eliminated during this polymerisation?",
    options: [
      { text: "[-O-CH₂CH₂-O-CO-C₆H₄-CO-]_n ; HCl", isCorrect: true },
      { text: "[-O-CH₂CH₂-CO-C₆H₄-CO-]_n ; H₂O", isCorrect: false },
      { text: "[-CO-CH₂CH₂-CO-O-C₆H₄-O-]_n ; HCl", isCorrect: false },
      { text: "[-O-CH₂CH₂-O-CO-C₆H₄-CO-]_n ; H₂O", isCorrect: false }
    ],
    explanation: "• When a diol (HO-R-OH) reacts with a diacyl chloride (ClOC-R'-COCl), the ester linkage is formed by eliminating a hydrogen atom from the diol and a chlorine atom from the diacyl chloride.\n• The eliminated small molecule is hydrogen chloride (HCl).\n• The ester link is -O-CO-, leading to the repeat unit: [-O-CH₂CH₂-O-CO-C₆H₄-CO-]_n."
  },
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260721-15",
    question: "Which of the following is a characteristic physical property of lower molecular mass esters?",
    options: [
      { text: "Extremely high solubility in water compared to carboxylic acids.", isCorrect: false },
      { text: "Sweet, pleasant, fruity smells, making them useful in perfumes and artificial flavorings.", isCorrect: true },
      { text: "Strong, pungent acidic odor like vinegar.", isCorrect: false },
      { text: "High electrical conductivity in liquid state.", isCorrect: false }
    ],
    explanation: "• Esters are relatively volatile organic liquids with pleasant, fruity, or sweet smells.\n• They are widely used as solvents, in perfumes, and as food flavorings (e.g., pentyl ethanoate smells of pear drops).\n• They lack hydrogen atoms bonded to oxygen, so they cannot form hydrogen bonds with themselves, resulting in lower boiling points and lower water solubility than their parent carboxylic acids."
  },
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260721-16",
    question: "In the first step of the nucleophilic addition of cyanide ions (CN⁻) to propanal (CH₃CH₂CHO), what intermediate is formed?",
    options: [
      { text: "A planar carbocation.", isCorrect: false },
      { text: "A tetrahedral intermediate with a negative charge on the oxygen atom.", isCorrect: true },
      { text: "A transition state containing a partially broken carbon-oxygen double bond.", isCorrect: false },
      { text: "A carbanion with a negative charge on the carbon atom.", isCorrect: false }
    ],
    explanation: "• The nucleophilic CN⁻ ion attacks the carbon of the carbonyl group (Cᵟ⁺=Oᵟ⁻).\n• As the new C-C bond is formed, the π electrons from the C=O double bond shift entirely to the oxygen atom.\n• This turns the trigonal planar carbonyl carbon into a tetrahedral carbon, forming a tetrahedral intermediate with a negatively charged oxygen (-O⁻): CH₃CH₂CH(CN)O⁻."
  },
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260721-17",
    question: "What is the active chemical species in Tollens' reagent that oxidizes aldehydes, and what is its coordination structure?",
    options: [
      { text: "The silver-diammine complex ion, [Ag(NH₃)₂]⁺, which has a linear geometry.", isCorrect: true },
      { text: "Silver oxide precipitate, Ag₂O, which has a giant covalent lattice.", isCorrect: false },
      { text: "Silver nitrate, AgNO₃, which has an octahedral shape.", isCorrect: false },
      { text: "Diamminesilver(I) hydroxide, which is a tetrahedral molecule.", isCorrect: false }
    ],
    explanation: "• Tollens' reagent is prepared by adding ammonia to silver nitrate until the precipitate of silver oxide dissolves.\n• The active oxidizing agent is the complex ion [Ag(NH₃)₂]⁺, called the diamminesilver(I) ion.\n• The silver ion Ag⁺ is coordinated by two ammonia ligands in a linear arrangement."
  },
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260721-18",
    question: "Why can a polymer NOT be formed by reacting propanedioic acid (HOOC-CH₂-COOH) with methanol (CH₃OH)?",
    options: [
      { text: "Methanol is monofunctional, which causes chain termination after reacting with one carboxyl group.", isCorrect: true },
      { text: "Propanedioic acid is too weak to react with methanol.", isCorrect: false },
      { text: "The reaction eliminates water, which hydrolyzes the polymer immediately.", isCorrect: false },
      { text: "Methanol does not contain an ester linkage.", isCorrect: false }
    ],
    explanation: "• Polymerisation requires both monomers to be bifunctional (having reactive groups at both ends) to allow the polymer chain to grow continuously from both directions.\n• Methanol (CH₃OH) is monofunctional. Once it reacts with one of the carboxyl groups of propanedioic acid, the end of the molecule is blocked and cannot grow further, causing chain termination."
  },
  {
    id: "EDEXCEL-AL-U4-L5-HARD-20260721-19",
    question: "Which of the following statements correctly compares the acid-catalyzed and base-catalyzed hydrolysis of ethyl propanoate?",
    options: [
      { text: "Acid hydrolysis is reversible and does not go to completion, whereas base hydrolysis is irreversible and goes to completion.", isCorrect: true },
      { text: "Acid hydrolysis yields a carboxylate salt, whereas base hydrolysis yields a carboxylic acid.", isCorrect: false },
      { text: "Both reactions are reversible and require a catalyst to achieve 100% yield.", isCorrect: false },
      { text: "Base hydrolysis requires a dry ether solvent, whereas acid hydrolysis is done in dry alcohol.", isCorrect: false }
    ],
    explanation: "• Acid hydrolysis of an ester (heating with dilute acid) is a reversible reaction that reaches an equilibrium mixture of ester, water, carboxylic acid, and alcohol.\n• Base hydrolysis (heating with aqueous alkali like NaOH) is irreversible because the carboxylic acid formed is immediately deprotonated by the base to form a stable carboxylate salt (RCOO⁻).\n• The deprotonation removes the carboxylic acid from the equilibrium system, driving the reaction to 100% completion."
  },
  {
    id: "EDEXCEL-AL-U4-L5-HARD-20260721-20",
    question: "What is the structure of the organic product formed when propanoyl chloride (CH₃CH₂COCl) reacts with dimethylamine ((CH₃)₂NH)?",
    options: [
      { text: "CH₃CH₂CON(CH₃)₂ (N,N-dimethylpropanamide)", isCorrect: true },
      { text: "CH₃CH₂COOCH₃ and NH₄Cl", isCorrect: false },
      { text: "CH₃CH₂CONH₂ and CH₃Cl", isCorrect: false },
      { text: "CH₃CH₂CONHCH₃ (N-methylpropanamide)", isCorrect: false }
    ],
    explanation: "• Acyl chlorides react vigorously with amines to form amides and eliminate HCl.\n• Reacting with a secondary amine like dimethylamine ((CH₃)₂NH) replaces the chlorine atom with the dimethylamino group (-N(CH₃)₂).\n• The product is an N,N-disubstituted amide: N,N-dimethylpropanamide (CH₃CH₂CON(CH₃)₂)."
  }
];
