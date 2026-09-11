export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: FOUNDATION (EASY - 3 Questions)
  // ==========================================
  {
    id: "EDX-AL-U6-L1-EASY-01",
    question: "In the kinetics experiment investigating the reaction between propanone and iodine in acid, why is solid sodium hydrogencarbonate added to each sample withdrawn at time t?",
    options: [
      { text: "To catalyse the reduction of iodine by thiosulfate", isCorrect: false },
      { text: "To neutralise the acid catalyst and freeze the reaction rate at that time", isCorrect: true },
      { text: "To dissolve the insoluble iodopropanone product", isCorrect: false },
      { text: "To serve as an indicator for the endpoint of the titration", isCorrect: false }
    ],
    explanation: "* The reaction between propanone and iodine is acid-catalysed by H⁺ ions.\n* Adding sodium hydrogencarbonate neutralises the acid: H⁺ + HCO₃⁻ → H₂O + CO₂.\n* Without the catalyst, the reaction rate drops to zero immediately (quenching), preserving the exact concentration of unreacted iodine at time t."
  },
  {
    id: "EDX-AL-U6-L1-EASY-02",
    question: "At which stage of an iodometric titration should starch indicator solution be added?",
    options: [
      { text: "At the very beginning when the solution is dark red-brown", isCorrect: false },
      { text: "Only when the iodine solution has faded to a pale straw-yellow colour", isCorrect: true },
      { text: "After the end-point is reached to confirm absence of iodine", isCorrect: false },
      { text: "Immediately before adding the quenching agent", isCorrect: false }
    ],
    explanation: "* At high iodine concentrations, iodine forms an insoluble, irreversible complex with starch that does not readily dissociate.\n* Therefore, standard thiosulfate must be added first until the iodine has reacted sufficiently to fade to a pale straw-yellow colour.\n* Adding starch at this point gives a sharp blue-black colour that cleanly discharges to colourless at the true stoichiometric end-point."
  },
  {
    id: "EDX-AL-U6-L1-EASY-03",
    question: "How does the melting temperature and range of an impure organic solid compare to that of the pure substance?",
    options: [
      { text: "The impure solid melts at a higher temperature with a sharp melting range", isCorrect: false },
      { text: "The impure solid melts at a lower temperature over a broader range", isCorrect: true },
      { text: "The impure solid melts at the exact same temperature but sublimes instead", isCorrect: false },
      { text: "The impure solid shows no change in melting point", isCorrect: false }
    ],
    explanation: "* Impurities disrupt the regular crystalline lattice of an organic solid, weakening intermolecular attractions.\n* As a result, less thermal energy is required to disrupt the lattice, causing the substance to melt at a lower (depressed) temperature and over a wide/broad temperature range (e.g., 125–132 °C instead of a sharp 138–139 °C)."
  },

  // ==========================================
  // LEVEL 2: APPLICATION (MEDIUM - 3 Questions)
  // ==========================================
  {
    id: "EDX-AL-U6-L1-MED-01",
    question: "A weak acid HA is titrated against 0.10 mol dm⁻³ NaOH. The volume of base required to reach the equivalence point is 28.40 cm³. At what volume of added NaOH does pH = pKa for this weak acid?",
    options: [
      { text: "0.00 cm³", isCorrect: false },
      { text: "14.20 cm³", isCorrect: true },
      { text: "28.40 cm³", isCorrect: false },
      { text: "56.80 cm³", isCorrect: false }
    ],
    explanation: "* At the half-neutralisation point, exactly half of the weak acid has reacted: [HA] = [A⁻].\n* According to Ka = [H⁺][A⁻] / [HA], when [HA] = [A⁻], Ka = [H⁺], meaning pH = pKa.\n* The half-neutralisation point occurs at half the equivalence volume: 28.40 / 2 = 14.20 cm³."
  },
  {
    id: "EDX-AL-U6-L1-MED-02",
    question: "During the recrystallisation of crude aspirin, why is the filtered solid washed with ice-cold solvent rather than room temperature solvent on the Büchner funnel?",
    options: [
      { text: "To dissolve insoluble impurities stuck to the crystal surface", isCorrect: false },
      { text: "To remove soluble impurities from the crystal surface while minimising the loss of product by dissolution", isCorrect: true },
      { text: "To lower the melting point of the crystals", isCorrect: false },
      { text: "To react with unreacted ethanoic anhydride", isCorrect: false }
    ],
    explanation: "* The purified crystals are washed to remove residual solution containing soluble impurities.\n* Aspirin has a non-zero solubility at room temperature.\n* Using ice-cold solvent ensures that the soluble impurities are rinsed through the filter while dissolving as little of the valuable crystalline product as possible."
  },
  {
    id: "EDX-AL-U6-L1-MED-03",
    question: "In thin layer chromatography (TLC), the solvent front travelled 7.5 cm from the pencil origin line. An organic compound produced a spot that travelled 4.8 cm. What is the Rf value of this compound?",
    options: [
      { text: "0.48", isCorrect: false },
      { text: "0.64", isCorrect: true },
      { text: "1.56", isCorrect: false },
      { text: "0.75", isCorrect: false }
    ],
    explanation: "* Rf = (distance travelled by spot) / (distance travelled by solvent front).\n* Rf = 4.8 cm / 7.5 cm = 0.64."
  },

  // ==========================================
  // LEVEL 3: HIGHER / EXAM CHALLENGE (2 Questions)
  // ==========================================
  {
    id: "EDX-AL-U6-L1-HARD-01",
    question: "An unknown organic ester with molecular formula C₃H₆O₂ displays two singlets in its ¹H NMR spectrum: one singlet at δ 2.0 ppm (integration 3H) and one singlet at δ 3.7 ppm (integration 3H). Its ¹³C NMR spectrum exhibits exactly 3 peaks. Identify the compound.",
    options: [
      { text: "Methyl ethanoate (CH₃COOCH₃)", isCorrect: true },
      { text: "Ethyl methanoate (HCOOCH₂CH₃)", isCorrect: false },
      { text: "Propanoic acid (CH₃CH₂COOH)", isCorrect: false },
      { text: "Hydroxypropanone (CH₃COCH₂OH)", isCorrect: false }
    ],
    explanation: "* Methyl ethanoate (CH₃COOCH₃) contains two sets of protons: the acetate methyl (CH₃-C=O) at δ 2.0 ppm and the ester methyl (-O-CH₃) at δ 3.7 ppm.\n* Both groups have zero adjacent protons, yielding two singlets with an integration ratio of 3:3 (1:1).\n* It has 3 distinct carbon environments, matching the 3 peaks in ¹³C NMR."
  },
  {
    id: "EDX-AL-U6-L1-HARD-02",
    question: "In an Arrhenius investigation (Core Practical 11), a plot of ln(1/t) on the y-axis against 1/T on the x-axis gave a straight line with a gradient of -6500 K. What is the activation energy Ea for the reaction? (Gas constant R = 8.314 J K⁻¹ mol⁻¹)",
    options: [
      { text: "+54.0 kJ mol⁻¹", isCorrect: true },
      { text: "-54.0 kJ mol⁻¹", isCorrect: false },
      { text: "+782 kJ mol⁻¹", isCorrect: false },
      { text: "+6.50 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "* From the Arrhenius equation: ln(1/t) = -Ea/(R × T) + constant.\n* Therefore, gradient = -Ea / R.\n* -6500 K = -Ea / 8.314 J K⁻¹ mol⁻¹.\n* Ea = 6500 × 8.314 = 54,041 J mol⁻¹ = +54.0 kJ mol⁻¹."
  }
];
