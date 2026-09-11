export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: FOUNDATION (EASY)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L6-EASY-20260717-01",
    question: "Which of the following reaction types is characteristic of benzene under standard conditions?",
    options: [
      { text: "Electrophilic addition", isCorrect: false },
      { text: "Electrophilic substitution", isCorrect: true },
      { text: "Nucleophilic substitution", isCorrect: false },
      { text: "Free radical addition", isCorrect: false }
    ],
    explanation: "Benzene undergoes electrophilic substitution. The high electron density of the delocalised π-ring attracts electrophiles, and substitution (rather than addition) occurs to preserve the stable aromatic system."
  },
  {
    id: "EDEXCEL-AL-U4-L6-EASY-20260717-02",
    question: "Which of the following compounds is the strongest base?",
    options: [
      { text: "Phenylamine", isCorrect: false },
      { text: "Ammonia", isCorrect: false },
      { text: "Ethylamine", isCorrect: true },
      { text: "Urea", isCorrect: false }
    ],
    explanation: "Ethylamine is the strongest base because the ethyl group is electron-donating (+I inductive effect), increasing electron density on the nitrogen atom and making its lone pair more available to accept a proton. Phenylamine is very weak because its lone pair delocalises into the benzene ring."
  },

  // ==========================================
  // LEVEL 2: APPLICATION (MEDIUM)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L6-MEDIUM-20260717-03",
    question: "What is the structure of the amino acid alanine (CH₃CH(NH₂)COOH) in highly acidic conditions (pH = 1)?",
    options: [
      { text: "CH₃CH(NH₂)COO⁻", isCorrect: false },
      { text: "CH₃CH(NH₃⁺)COO⁻", isCorrect: false },
      { text: "CH₃CH(NH₃⁺)COOH", isCorrect: true },
      { text: "CH₃CH(NH₂)COOH", isCorrect: false }
    ],
    explanation: "In highly acidic conditions (low pH / high H⁺ concentration), the zwitterion acts as a base. The carboxylate group (-COO⁻) is protonated to form carboxylic acid (-COOH). The ammonium group remains protonated (-NH₃⁺), yielding the cationic species: CH₃CH(NH₃⁺)COOH."
  },
  {
    id: "EDEXCEL-AL-U4-L6-MEDIUM-20260717-04",
    question: "Which polymers are biodegradable and why?",
    options: [
      { text: "Polyalkenes, because they are made from fossil fuels.", isCorrect: false },
      { text: "Polyesters and polyamides, because their ester and amide links can be hydrolysed.", isCorrect: true },
      { text: "Addition polymers, because they contain double bonds.", isCorrect: false },
      { text: "Polyamides only, because they contain peptide links that enzymes do not recognise.", isCorrect: false }
    ],
    explanation: "Condensation polymers (polyesters and polyamides) contain polar ester (-COO-) or amide (-CONH-) linkages. These polar bonds are susceptible to nucleophilic attack by water (hydrolysis), making them biodegradable. Polyalkenes have non-polar C-C backbones that cannot be easily hydrolysed."
  },

  // ==========================================
  // LEVEL 3: ANALYSIS (HARD)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L6-HARD-20260717-05",
    question: "When benzene undergoes nitration, concentrated sulfuric acid and concentrated nitric acid are reacted together. What is the role of sulfuric acid in this reaction?",
    options: [
      { text: "It acts as a reducing agent.", isCorrect: false },
      { text: "It acts as a catalyst and a proton donor (acid) to generate the NO₂⁺ electrophile.", isCorrect: true },
      { text: "It acts as an electrophile.", isCorrect: false },
      { text: "It reacts with benzene directly to form benzenesulfonic acid.", isCorrect: false }
    ],
    explanation: "Concentrated sulfuric acid acts as a stronger acid (proton donor) than nitric acid. It protonates HNO₃, which then loses water to generate the nitronium ion (NO₂⁺) electrophile: HNO₃ + 2H₂SO₄ ⇌ NO₂⁺ + H₃O⁺ + 2HSO₄⁻. The H₂SO₄ is regenerated at the end, making it a catalyst."
  }
];
