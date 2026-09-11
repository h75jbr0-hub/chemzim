export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: FOUNDATION (EASY)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L2-EASY-20260708-01",
    lessonNum: 2,
    question: "Which of the following changes results in a DECREASE in entropy?",
    options: [
      { text: "Dissolving a solid salt in water", isCorrect: false },
      { text: "Evaporation of a liquid to a gas", isCorrect: false },
      { text: "Condensation of a gas to form a liquid", isCorrect: true },
      { text: "Decomposition of one solid into two gases", isCorrect: false }
    ],
    explanation: "• Condensation converts a gas (highly disordered, high entropy) into a liquid (more ordered, lower entropy).\n• Dissolving distributes ions throughout the solution, increasing disorder.\n• Evaporation converts an ordered liquid to a disordered gas.\n• Decomposition of a solid to gases increases the number of particles and disorder."
  },
  {
    id: "EDEXCEL-AL-U4-L2-EASY-20260708-02",
    lessonNum: 2,
    question: "Under what condition is a reaction ALWAYS thermodynamically feasible (spontaneous), regardless of temperature?",
    options: [
      { text: "$\\Delta H$ is positive and $\\Delta S$ is positive", isCorrect: false },
      { text: "$\\Delta H$ is negative and $\\Delta S$ is negative", isCorrect: false },
      { text: "$\\Delta H$ is negative and $\\Delta S$ is positive", isCorrect: true },
      { text: "$\\Delta H$ is positive and $\\Delta S$ is negative", isCorrect: false }
    ],
    explanation: "• According to the Gibbs Free Energy equation, $\\Delta G = \\Delta H - T\\Delta S$.\n• For a reaction to be feasible, $\\Delta G$ must be negative ($\\Delta G < 0$).\n• If $\\Delta H$ is negative (exothermic) and $\\Delta S$ is positive (entropy increases), both terms contribute to a negative $\\Delta G$ at any temperature (negative - positive = negative)."
  },
  {
    id: "EDEXCEL-AL-U4-L2-EASY-20260708-03",
    lessonNum: 2,
    question: "How does the entropy of the system change when ammonium nitrate crystals dissolve in water?",
    options: [
      { text: "It remains the same.", isCorrect: false },
      { text: "It decreases, because the hydrated ions are more ordered in the solution than they are in the crystal.", isCorrect: false },
      { text: "It increases, because the ions in the crystal become hydrated in the solution.", isCorrect: false },
      { text: "It increases, because the ions are arranged more randomly in the solution than they are in the crystal.", isCorrect: true }
    ],
    explanation: "• Dissolving breaks down the highly ordered, rigid solid lattice structure.\n• The ions become free to move and disperse throughout the solvent.\n• This increase in physical dispersal results in a large positive change in system entropy ($\\Delta S_{\\text{system}} > 0$)."
  },

  // ==========================================
  // LEVEL 2: APPLICATION (MEDIUM)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-04",
    lessonNum: 2,
    question: "A reaction has $\\Delta H^\\theta = +240\\text{ kJ mol}^{-1}$ and $\\Delta S^\\theta = +600\\text{ J K}^{-1}\\text{ mol}^{-1}$. At what minimum temperature does the reaction become thermodynamically feasible? (Give your answer in Kelvin)",
    options: [
      { text: "$0.4\\text{ K}$", isCorrect: false },
      { text: "$400\\text{ K}$", isCorrect: true },
      { text: "$40\\text{ K}$", isCorrect: false },
      { text: "$4000\\text{ K}$", isCorrect: false }
    ],
    explanation: "• Set $\\Delta G = 0$ at the boundary of feasibility: $0 = \\Delta H^\\theta - T\\Delta S^\\theta$.\n• Rearrange the equation to find temperature: $T = \\Delta H^\\theta / \\Delta S^\\theta$.\n• Convert $\\Delta S^\\theta$ to $\\text{kJ K}^{-1}\\text{ mol}^{-1}$: $\\Delta S^\\theta = 600 / 1000 = 0.600\\text{ kJ K}^{-1}\\text{ mol}^{-1}$.\n• Calculate the temperature: $T = +240 / 0.600 = 400\\text{ K}$.\n• Above $400\\text{ K}$, the $T\\Delta S$ term outweighs the $\\Delta H$ term, making $\\Delta G$ negative."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-05",
    lessonNum: 2,
    question: "Use the following data to calculate the lattice formation enthalpy of $\\text{MgO}$:\n$\\Delta H_f^\\theta(\\text{MgO}) = -601\\text{ kJ mol}^{-1}$\n$\\Delta H_{\\text{at}}^\\theta(\\text{Mg}) = +148\\text{ kJ mol}^{-1}$\n$\\Delta H_{\\text{at}}^\\theta(\\text{O}) = +249\\text{ kJ mol}^{-1}$\n$IE_1(\\text{Mg}) = +738\\text{ kJ mol}^{-1}$\n$IE_2(\\text{Mg}) = +1451\\text{ kJ mol}^{-1}$\n$EA_1(\\text{O}) = -141\\text{ kJ mol}^{-1}$\n$EA_2(\\text{O}) = +798\\text{ kJ mol}^{-1}$",
    options: [
      { text: "$-3844\\text{ kJ mol}^{-1}$", isCorrect: true },
      { text: "$+3844\\text{ kJ mol}^{-1}$", isCorrect: false },
      { text: "$-3243\\text{ kJ mol}^{-1}$", isCorrect: false },
      { text: "$-601\\text{ kJ mol}^{-1}$", isCorrect: false }
    ],
    explanation: "• Using the Born-Haber cycle formula: $\\Delta H_f^\\theta = \\Delta H_{\\text{at}}(\\text{Mg}) + \\Delta H_{\\text{at}}(\\text{O}) + IE_1 + IE_2 + EA_1 + EA_2 + \\Delta H_{\\text{latt}}$.\n• Rearrange to solve for lattice formation enthalpy: $\\Delta H_{\\text{latt}} = \\Delta H_f^\\theta - [\\Delta H_{\\text{at}}(\\text{Mg}) + \\Delta H_{\\text{at}}(\\text{O}) + IE_1 + IE_2 + EA_1 + EA_2]$.\n• Substitute the values: $\\Delta H_{\\text{latt}} = -601 - [+148 + 249 + 738 + 1451 + (-141) + 798]$.\n• Calculate the total: $\\Delta H_{\\text{latt}} = -601 - [3243] = -3844\\text{ kJ mol}^{-1}$.\n• This highly exothermic value is due to the large $+2$ and $-2$ ionic charges and small ionic radii of $\\text{Mg}^{2+}$ and $\\text{O}^{2-}$."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-06",
    lessonNum: 2,
    question: "A reaction has $\\Delta H^\\theta = -196.0\\text{ kJ mol}^{-1}$ at $298\\text{ K}$. Calculate the entropy change of the surroundings ($\\Delta S_{\\text{surroundings}}$) in $\\text{J K}^{-1}\\text{ mol}^{-1}$.",
    options: [
      { text: "$+658\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: true },
      { text: "$-658\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: false },
      { text: "$+0.658\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: false },
      { text: "$-0.658\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: false }
    ],
    explanation: "• Apply the surroundings entropy formula: $\\Delta S_{\\text{surroundings}} = -\\Delta H^\\theta / T$.\n• Convert $\\Delta H^\\theta$ to $\\text{J mol}^{-1}$: $-196.0 \\times 1000 = -196000\\text{ J mol}^{-1}$.\n• Substitute values: $\\Delta S_{\\text{surroundings}} = -(-196000) / 298$.\n• Calculate: $\\Delta S_{\\text{surroundings}} = +657.7 \\approx +658\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• The positive sign indicates that releasing heat to the surroundings increases the surroundings' disorder."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-07",
    lessonNum: 2,
    question: "The table shows the lattice energies of rubidium fluoride, $\\text{RbF}$, and caesium chloride, $\\text{CsCl}$:\n$\\text{RbF} = -783\\text{ kJ mol}^{-1}$\n$\\text{CsCl} = -661\\text{ kJ mol}^{-1}$\nWhich is the most likely lattice energy value of caesium fluoride, $\\text{CsF}$?",
    options: [
      { text: "$-647\\text{ kJ mol}^{-1}$", isCorrect: false },
      { text: "$-747\\text{ kJ mol}^{-1}$", isCorrect: true },
      { text: "$-847\\text{ kJ mol}^{-1}$", isCorrect: false },
      { text: "$-947\\text{ kJ mol}^{-1}$", isCorrect: false }
    ],
    explanation: "• Caesium fluoride ($\\text{CsF}$) has a smaller anion ($\\text{F}^-$) than caesium chloride ($\\text{CsCl}$), meaning $\\text{CsF}$ must have a more exothermic lattice energy than $\\text{CsCl}$ (more negative than $-661\\text{ kJ mol}^{-1}$).\n• However, $\\text{CsF}$ has a larger cation ($\\text{Cs}^+$) than rubidium fluoride ($\\text{RbF}$), meaning $\\text{CsF}$ must have a less exothermic lattice energy than $\\text{RbF}$ (less negative than $-783\\text{ kJ mol}^{-1}$).\n• Therefore, the lattice energy of $\\text{CsF}$ must lie between $-783$ and $-661\\text{ kJ mol}^{-1}$, pointing to $-747\\text{ kJ mol}^{-1}$."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-08",
    lessonNum: 2,
    question: "Which statement is true for the exothermic reaction: $\\text{Zn(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{ZnCl}_2\\text{(aq)} + \\text{H}_2\\text{(g)}$?",
    options: [
      { text: "$\\Delta H$ is positive", isCorrect: false },
      { text: "$\\Delta S_{\\text{surroundings}}$ is positive", isCorrect: true },
      { text: "$\\Delta S_{\\text{system}}$ is negative", isCorrect: false },
      { text: "$\\Delta S_{\\text{total}}$ is negative", isCorrect: false }
    ],
    explanation: "• For an exothermic reaction, the system releases heat energy to the surroundings.\n• The entropy change of the surroundings is calculated by $\\Delta S_{\\text{surroundings}} = -\\Delta H / T$.\n• Since $\\Delta H$ is negative, $-\\Delta H$ is positive, which makes the surroundings entropy change positive."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-09",
    lessonNum: 2,
    question: "Calcium carbonate decomposes in an endothermic reaction when heated: $\\text{CaCO}_3\\text{(s)} \\rightarrow \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$. What are the signs of the entropy changes $\\Delta S_{\\text{system}}$ and $\\Delta S_{\\text{surroundings}}$?",
    options: [
      { text: "$\\Delta S_{\\text{system}} = +$, $\\Delta S_{\\text{surroundings}} = +$", isCorrect: false },
      { text: "$\\Delta S_{\\text{system}} = +$, $\\Delta S_{\\text{surroundings}} = -$ ", isCorrect: true },
      { text: "$\\Delta S_{\\text{system}} = -$, $\\Delta S_{\\text{surroundings}} = +$", isCorrect: false },
      { text: "$\\Delta S_{\\text{system}} = -$, $\\Delta S_{\\text{surroundings}} = -$", isCorrect: false }
    ],
    explanation: "• System entropy ($\\Delta S_{\\text{system}}$) is positive ($+$) because a gas molecule ($\\text{CO}_2$) is produced from a solid reactant, increasing randomness.\n• Surroundings entropy ($\\Delta S_{\\text{surroundings}} = -\\Delta H / T$) is negative ($-$) because the reaction is endothermic ($\\Delta H > 0$), absorbing thermal energy from the surroundings."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-15",
    lessonNum: 2,
    question: "Given the reaction: $\\text{MgCO}_3\\text{(s)} \\rightarrow \\text{MgO(s)} + \\text{CO}_2\\text{(g)}$ with $\\Delta H^\\theta = +117\\text{ kJ mol}^{-1}$ and molar entropies:\n$S^\\theta[\\text{MgCO}_3\\text{(s)}] = 65.7\\text{ J K}^{-1}\\text{ mol}^{-1}$\n$S^\\theta[\\text{MgO(s)}] = 27.0\\text{ J K}^{-1}\\text{ mol}^{-1}$\n$S^\\theta[\\text{CO}_2\\text{(g)}] = 214.0\\text{ J K}^{-1}\\text{ mol}^{-1}$\nCalculate the minimum temperature at which magnesium carbonate decomposes spontaneously.",
    options: [
      { text: "$667\\text{ K}$", isCorrect: true },
      { text: "$175\\text{ K}$", isCorrect: false },
      { text: "$1500\\text{ K}$", isCorrect: false },
      { text: "$540\\text{ K}$", isCorrect: false }
    ],
    explanation: "• Calculate the system entropy change: $\\Delta S_{\\text{system}} = S^\\theta(\\text{MgO}) + S^\\theta(\\text{CO}_2) - S^\\theta(\\text{MgCO}_3) = 27.0 + 214.0 - 65.7 = +175.3\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• Convert $\\Delta S_{\\text{system}}$ to $\\text{kJ K}^{-1}\\text{ mol}^{-1}$: $+175.3 / 1000 = 0.1753\\text{ kJ K}^{-1}\\text{ mol}^{-1}$.\n• Set $\\Delta G = 0$ for the spontaneity threshold: $T = \\Delta H^\\theta / \\Delta S_{\\text{system}} = 117 / 0.1753 \\approx 667.4\\text{ K}$.\n• Above $667.4\\text{ K}$, the reaction becomes spontaneous."
  },

  // ==========================================
  // LEVEL 3: ANALYSIS (HARD)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-10",
    lessonNum: 2,
    question: "A reaction has $\\Delta G^\\theta = -85.0\\text{ kJ mol}^{-1}$ at $298\\text{ K}$ and $\\Delta S^\\theta = +125\\text{ J K}^{-1}\\text{ mol}^{-1}$. Calculate $\\Delta H^\\theta$ for the reaction.",
    options: [
      { text: "$-47.7\\text{ kJ mol}^{-1}$", isCorrect: true },
      { text: "$+47.7\\text{ kJ mol}^{-1}$", isCorrect: false },
      { text: "$-48250\\text{ kJ mol}^{-1}$", isCorrect: false },
      { text: "$-122\\text{ kJ mol}^{-1}$", isCorrect: false }
    ],
    explanation: "• Rearrange the Gibbs equation to solve for enthalpy change: $\\Delta H = \\Delta G + T\\Delta S$.\n• Convert $\\Delta S^\\theta$ to $\\text{kJ K}^{-1}\\text{ mol}^{-1}$: $125 / 1000 = 0.125\\text{ kJ K}^{-1}\\text{ mol}^{-1}$.\n• Substitute values: $\\Delta H = -85.0 + (298 \\times 0.125)$.\n• Calculate: $\\Delta H = -85.0 + 37.25 = -47.75 \\approx -47.7\\text{ kJ mol}^{-1}$."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-11",
    lessonNum: 2,
    question: "The theoretical lattice energy of $\\text{AgI}$ is $-736\\text{ kJ mol}^{-1}$ (based on a purely ionic model), whereas its experimental lattice energy from a Born-Haber cycle is $-887\\text{ kJ mol}^{-1}$. What is the explanation for this discrepancy?",
    options: [
      { text: "$\\text{Ag}^+$ has high polarizing power and distorts the electron cloud of the large, polarizable $\\text{I}^-$ ion, introducing significant covalent character.", isCorrect: true },
      { text: "$\\text{I}^-$ is highly polarizing and polarizes the $\\text{Ag}^+$ cation, making the lattice weaker.", isCorrect: false },
      { text: "$\\text{AgI}$ has purely ionic bonding, and the discrepancy is due to experimental errors in measuring hydration enthalpies.", isCorrect: false },
      { text: "The theoretical calculation assumes covalent bonding while Born-Haber assumes ionic bonding.", isCorrect: false }
    ],
    explanation: "• Theoretical lattice energy calculations assume a purely ionic model with spherical ions acting as point charges.\n• $\\text{Ag}^+$ is polarizing, and $\\text{I}^-$ is a large, highly polarizable anion.\n• The polarization of the iodide electron cloud by the silver cation introduces covalent character into the bonding.\n• Covalent character strengthens the bond, releasing more energy, which makes the experimental lattice energy significantly more exothermic than the theoretical model."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-12",
    lessonNum: 2,
    question: "At $298\\text{ K}$, a reaction has a standard Gibbs Free Energy change ($\\Delta G^\\theta$) of $-15.0\\text{ kJ mol}^{-1}$. Calculate the thermodynamic equilibrium constant $K$ for this reaction. ($R = 8.31\\text{ J K}^{-1}\\text{ mol}^{-1}$)",
    options: [
      { text: "$426$", isCorrect: true },
      { text: "$2.35 \\times 10^{-3}$", isCorrect: false },
      { text: "$1.01$", isCorrect: false },
      { text: "$6.05$", isCorrect: false }
    ],
    explanation: "• Apply the thermodynamic link formula: $\\Delta G^\\theta = -RT \\ln K$.\n• Convert $\\Delta G^\\theta$ to $\\text{J mol}^{-1}$: $-15.0 \\times 1000 = -15000\\text{ J mol}^{-1}$.\n• Rearrange to solve for $\\ln K$: $\\ln K = -\\Delta G^\\theta / (R \\times T)$.\n• Substitute values: $\\ln K = -(-15000) / (8.31 \\times 298) = 15000 / 2476.38 = 6.0573$.\n• Solve for $K$ using the exponential function: $K = e^{6.0573} \\approx 426$."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-13",
    lessonNum: 2,
    question: "The table shows the ionic radii and charges for six different ions:\n$J^+: 0.14\\text{ nm} \\mid L^+: 0.18\\text{ nm} \\mid M^{2+}: 0.15\\text{ nm}$\n$X^-: 0.14\\text{ nm} \\mid Y^-: 0.18\\text{ nm} \\mid Z^{2-}: 0.15\\text{ nm}$\nWhat is the order of magnitude of the lattice energies of the ionic solids $JX$, $LY$, and $MZ$, listing the most exothermic first?",
    options: [
      { text: "$JX > LY > MZ$", isCorrect: false },
      { text: "$JX > MZ > LY$", isCorrect: false },
      { text: "$MZ > JX > LY$", isCorrect: true },
      { text: "$MZ > LY > JX$", isCorrect: false }
    ],
    explanation: "• Lattice energy is proportional to the product of charges divided by the sum of ionic radii.\n• $MZ$ has charges of $+2$ and $-2$ (product of 4), while $JX$ and $LY$ have charges of $+1$ and $-1$ (product of 1), making $MZ$ by far the most exothermic.\n• Comparing $JX$ and $LY$: $JX$ has smaller ions ($0.14 + 0.14 = 0.28\\text{ nm}$) than $LY$ ($0.18 + 0.18 = 0.36\\text{ nm}$), so $JX$ is more exothermic than $LY$."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-14",
    lessonNum: 2,
    question: "Why do calcium and chlorine react together to form $\\text{CaCl}_2\\text{(s)}$ rather than $\\text{CaCl(s)}$?",
    options: [
      { text: "Less energy is required to remove one electron from the calcium atom than to remove two electrons.", isCorrect: false },
      { text: "More energy is released in forming chloride ions from chlorine molecules in the formation of $\\text{CaCl}_2\\text{(s)}$ than in the formation of $\\text{CaCl(s)}$.", isCorrect: false },
      { text: "The lattice energy of $\\text{CaCl(s)}$ is less exothermic than the lattice energy of $\\text{CaCl}_2\\text{(s)}$.", isCorrect: true },
      { text: "When $\\text{CaCl(s)}$ is formed from its elements, more energy is released than when $\\text{CaCl}_2\\text{(s)}$ is formed from its elements.", isCorrect: false }
    ],
    explanation: "• Standard lattice energy is proportional to the charges on the ions.\n• In $\\text{CaCl}_2$, calcium exists as $\\text{Ca}^{2+}$, which forms a much more exothermic lattice with $\\text{Cl}^-$ than the $\\text{Ca}^+$ ion in $\\text{CaCl}$.\n• This massive difference in lattice energy releases far more energy, completely compensating for the additional energy needed to remove the second electron from calcium."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-16",
    lessonNum: 2,
    question: "Using standard molar entropies:\n$S^\\theta[\\text{H}_2\\text{(g)}] = 131.0\\text{ J K}^{-1}\\text{ mol}^{-1}$\n$S^\\theta[\\text{O}_2\\text{(g)}] = 205.0\\text{ J K}^{-1}\\text{ mol}^{-1}$\n$S^\\theta[\\text{H}_2\\text{O(l)}] = 69.9\\text{ J K}^{-1}\\text{ mol}^{-1}$\nAnd standard enthalpy of combustion: $\\Delta H^\\theta = -285.5\\text{ kJ mol}^{-1}$.\nCalculate the total standard entropy change ($\\Delta S_{\\text{total}}^\\theta$) for the combustion of one mole of hydrogen at $298\\text{ K}$.",
    options: [
      { text: "$+795\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: true },
      { text: "$-164\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: false },
      { text: "$+958\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: false },
      { text: "$-1122\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: false }
    ],
    explanation: "• Calculate the system entropy change: $\\Delta S_{\\text{system}} = S^\\theta[\\text{H}_2\\text{O(l)}] - (S^\\theta[\\text{H}_2\\text{(g)}] + 0.5 \\times S^\\theta[\\text{O}_2\\text{(g)}]) = 69.9 - (131.0 + 102.5) = -163.6\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• Calculate the surroundings entropy change: $\\Delta S_{\\text{surroundings}} = -\\Delta H^\\theta / T = -(-285500) / 298 = +958.1\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• Calculate the total entropy change: $\\Delta S_{\\text{total}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} = -163.6 + 958.1 = +794.5 \\approx +795\\text{ J K}^{-1}\\text{ mol}^{-1}$."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-17",
    lessonNum: 2,
    question: "Ammonia synthesis: $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)}$ has $\\Delta H^\\theta(700\\text{ K}) = -110.2\\text{ kJ mol}^{-1}$ and $\\Delta S_{\\text{total}}^\\theta(700\\text{ K}) = -78.7\\text{ J K}^{-1}\\text{ mol}^{-1}$. Calculate the system entropy change ($\\Delta S_{\\text{system}}^\\theta$) for this reaction at $700\\text{ K}$.",
    options: [
      { text: "$-236\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: true },
      { text: "$+157\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: false },
      { text: "$-78.7\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: false },
      { text: "$+78.7\\text{ J K}^{-1}\\text{ mol}^{-1}$", isCorrect: false }
    ],
    explanation: "• Calculate the surroundings entropy change at $700\\text{ K}$: $\\Delta S_{\\text{surroundings}} = -\\Delta H^\\theta / T = -(-110200) / 700 = +157.43\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• Since $\\Delta S_{\\text{total}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}}$, rearrange to solve for system entropy: $\\Delta S_{\\text{system}} = \\Delta S_{\\text{total}} - \\Delta S_{\\text{surroundings}}$.\n• Substitute values: $\\Delta S_{\\text{system}} = -78.7 - 157.43 = -236.13 \\approx -236\\text{ J K}^{-1}\\text{ mol}^{-1}$."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-18",
    lessonNum: 2,
    question: "Based on experimental and theoretical lattice energy comparisons, which of the following compounds has the greatest percentage difference between the two values, indicating the greatest degree of covalent character?",
    options: [
      { text: "$\\text{NaF}$ (Exp: $-918$, Theo: $-912$)", isCorrect: false },
      { text: "$\\text{NaI}$ (Exp: $-705$, Theo: $-687$)", isCorrect: false },
      { text: "$\\text{AgF}$ (Exp: $-958$, Theo: $-920$)", isCorrect: false },
      { text: "$\\text{AgI}$ (Exp: $-889$, Theo: $-778$)", isCorrect: true }
    ],
    explanation: "• $\\text{NaF}$ has a percentage difference of: $(918-912)/912 \\approx 0.66\\%$.\n• $\\text{NaI}$ has a percentage difference of: $(705-687)/687 \\approx 2.62\\%$.\n• $\\text{AgF}$ has a percentage difference of: $(958-920)/920 \\approx 4.13\\%$.\n• $\\text{AgI}$ has a percentage difference of: $(889-778)/778 \\approx 14.27\\%$.\n• The large $14.27\\%$ difference in $\\text{AgI}$ indicates significant covalent character due to polarization of the large, polarizable $\\text{I}^-$ ion by the polarizing $\\text{Ag}^+$ cation."
  },

  // ==========================================
  // ADDED FOR 20 QUESTIONS COMPREHENSIVE COVERAGE
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260721-19",
    lessonNum: 2,
    question: "Calculate the enthalpy change of solution ($\\Delta H_{\\text{sol}}^\\theta$) of anhydrous magnesium chloride, $\\text{MgCl}_2$, in $\\text{kJ mol}^{-1}$ using the following data:\n• Lattice dissociation enthalpy of $\\text{MgCl}_2 = +2526\\text{ kJ mol}^{-1}$\n• Hydration enthalpy of $\\text{Mg}^{2+}\\text{(g)} = -1920\\text{ kJ mol}^{-1}$\n• Hydration enthalpy of $\\text{Cl}^-\\text{(g)} = -364\\text{ kJ mol}^{-1}$",
    options: [
      { text: "$-122\\text{ kJ mol}^{-1}$", isCorrect: true },
      { text: "$+242\\text{ kJ mol}^{-1}$", isCorrect: false },
      { text: "$-158\\text{ kJ mol}^{-1}$", isCorrect: false },
      { text: "$+606\\text{ kJ mol}^{-1}$", isCorrect: false }
    ],
    explanation: "• The dissolution process can be modeled by two steps: breaking the lattice (lattice dissociation, endothermic) and hydrating the gaseous ions (exothermic).\n• $\\Delta H_{\\text{sol}}^\\theta = \\text{Lattice dissociation enthalpy} + \\Delta H_{\\text{hyd}}^\\theta(\\text{Mg}^{2+}) + 2 \\times \\Delta H_{\\text{hyd}}^\\theta(\\text{Cl}^-)$.\n• Substitute values: $\\Delta H_{\\text{sol}}^\\theta = +2526 + (-1920) + 2 \\times (-364)$.\n• Calculate: $\\Delta H_{\\text{sol}}^\\theta = +2526 - 1920 - 728 = -122\\text{ kJ mol}^{-1}$."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260721-20",
    lessonNum: 2,
    question: "The table shows standard enthalpy of hydration ($\\Delta H_{\\text{hyd}}^\\theta$) values for three halides:\n• $\\text{Cl}^- = -364\\text{ kJ mol}^{-1}$\n• $\\text{Br}^- = -335\\text{ kJ mol}^{-1}$\n• $\\text{I}^- = -293\\text{ kJ mol}^{-1}$\nWhich statement explains this trend?",
    options: [
      { text: "Reactivity of halogens decreases down the group.", isCorrect: false },
      { text: "Ionic radius increases from $\\text{Cl}^-$ to $\\text{I}^-$, resulting in weaker electrostatic attraction between the ions and polar water molecules.", isCorrect: true },
      { text: "Electron affinity becomes more exothermic down Group VII.", isCorrect: false },
      { text: "Fluoride is a stronger reducing agent than iodide.", isCorrect: false }
    ],
    explanation: "• Enthalpy of hydration is exothermic because ion-dipole bonds are formed between the gaseous ions and polar water molecules.\n• Going down Group VII, the ionic radius increases ($\\text{Cl}^- < \\text{Br}^- < \\text{I}^-$), meaning the charge is spread over a larger volume (lower charge density).\n• As a result, the electrostatic attraction between the halide ions and the water dipoles weakens, making the hydration enthalpy less exothermic (less negative)."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260728-21",
    lessonNum: 2,
    question: "In the Born-Haber cycle for magnesium oxide, what are the names of the enthalpy changes labelled $\\Delta H_1$, $\\Delta H_2$, and $\\Delta H_3$?",
    options: [
      { text: "$\\Delta H_1$ = Atomisation of Mg, $\\Delta H_2$ = 1st Ionisation Energy of Mg, $\\Delta H_3$ = Formation of MgO", isCorrect: true },
      { text: "$\\Delta H_1$ = Formation of MgO, $\\Delta H_2$ = 2nd Ionisation Energy of Mg, $\\Delta H_3$ = Lattice Energy of MgO", isCorrect: false },
      { text: "$\\Delta H_1$ = Atomisation of Mg, $\\Delta H_2$ = 2nd Ionisation Energy of Mg, $\\Delta H_3$ = Formation of MgO", isCorrect: false },
      { text: "$\\Delta H_1$ = Sublimation of Mg, $\\Delta H_2$ = 1st Ionisation Energy of Mg, $\\Delta H_3$ = Lattice Energy of MgO", isCorrect: false }
    ],
    explanation: "• $\\Delta H_1$ is the change from solid magnesium $\\text{Mg(s)}$ to gaseous magnesium atoms $\\text{Mg(g)}$, which is the standard enthalpy of atomisation of magnesium.\n• $\\Delta H_2$ is the change from gaseous magnesium atoms $\\text{Mg(g)}$ to gaseous singly charged magnesium ions $\\text{Mg}^+\\text{(g)} + \\text{e}^-$, which is the first ionisation energy of magnesium.\n• $\\Delta H_3$ is the change from the elements in their standard states $\\text{Mg(s)} + 0.5\\text{O}_2\\text{(g)}$ to the solid ionic lattice $\\text{Mg}^{2+}\\text{O}^{2-}\\text{(s)}$, which is the standard enthalpy of formation of magnesium oxide."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260728-22",
    lessonNum: 2,
    question: "What is the missing formula that should be placed in the box at the very top of the Born-Haber cycle for magnesium oxide?",
    options: [
      { text: "$\\text{Mg}^{2+}\\text{(g)} + \\text{O}^{2-}\\text{(g)}$", isCorrect: true },
      { text: "$\\text{Mg(g)} + \\text{O(g)}$", isCorrect: false },
      { text: "$\\text{Mg}^+\\text{(g)} + \\text{O}^-\\text{(g)}$", isCorrect: false },
      { text: "$\\text{Mg}^{2+}\\text{(g)} + \\text{O(g)} + 2\\text{e}^-$", isCorrect: false }
    ],
    explanation: "• The box at the very top of the cycle represents the isolated gaseous ions before they condense to form the ionic lattice.\n• For magnesium oxide, these ions are $\\text{Mg}^{2+}\\text{(g)}$ and $\\text{O}^{2-}\\text{(g)}$.\n• The step going down from these gaseous ions to the solid lattice $\\text{Mg}^{2+}\\text{O}^{2-}\\text{(s)}$ releases energy equal to the lattice energy of formation."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260728-23",
    lessonNum: 2,
    question: "Why is the second electron affinity of oxygen endothermic ($2^{\\text{nd}}EA = +798\\text{ kJ mol}^{-1}$) while the first electron affinity is exothermic?",
    options: [
      { text: "Electrostatic repulsion occurs between the negatively charged $\\text{O}^-\\text{(g)}$ ion and the incoming negative electron.", isCorrect: true },
      { text: "More energy is needed to break the stable noble gas configuration of the oxide ion.", isCorrect: false },
      { text: "The oxygen atom has a very small atomic radius, which prevents it from accepting a second electron easily.", isCorrect: false },
      { text: "The second electron is added to an orbital at a much higher principal energy level.", isCorrect: false }
    ],
    explanation: "• The first electron affinity adds a negative electron to a neutral oxygen atom, which is an attractive process and releases energy (exothermic).\n• The second electron affinity adds a negative electron to an already negatively charged $\\text{O}^-$ ion.\n• The electrostatic repulsion between these two negative charges must be overcome, which requires an input of energy (endothermic)."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260728-24",
    lessonNum: 2,
    question: "Which of the following sets of energy changes must be determined in order to find the lattice energy of sodium fluoride ($\\text{NaF}$) using a Born-Haber cycle?",
    options: [
      { text: "Enthalpy of formation of $\\text{NaF}$, atomisation of $\\text{Na}$, 1st IE of $\\text{Na}$, atomisation of $\\text{F}_2$, and 1st EA of $\\text{F}$.", isCorrect: true },
      { text: "Enthalpy of formation of $\\text{NaF}$, 1st IE of $\\text{Na}$, 2nd IE of $\\text{Na}$, and electron affinity of $\\text{F}$.", isCorrect: false },
      { text: "Atomisation of $\\text{Na}$, 1st IE of $\\text{Na}$, 1st EA of $\\text{F}$, and hydration enthalpies of $\\text{Na}^+$ and $\\text{F}^-$.", isCorrect: false },
      { text: "Lattice dissociation energy of $\\text{NaF}$, atomisation of $\\text{Na}$, 1st IE of $\\text{Na}$, and bond energy of $\\text{F-F}$.", isCorrect: false }
    ],
    explanation: "• A Born-Haber cycle connects the elements in standard states to the gaseous ions and the solid lattice.\n• To calculate the lattice energy of $\\text{NaF}$, we need:\n1. $\\Delta H_f^\\theta$ of $\\text{NaF(s)}$ (elements to lattice)\n2. $\\Delta H_{\\text{at}}^\\theta$ of sodium (solid to gas)\n3. $1^{\\text{st}}IE$ of sodium (gaseous atom to gaseous $+1$ ion)\n4. $\\Delta H_{\\text{at}}^\\theta$ of fluorine (gas molecules to gaseous atoms, equivalent to $0.5 \\times$ bond energy of $\\text{F-F}$)\n5. $1^{\\text{st}}EA$ of fluorine (gaseous atom to gaseous $-1$ ion)."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260728-25",
    lessonNum: 2,
    question: "Using the experimental lattice energies and standard hydration enthalpies below, determine which of the four compounds is the most soluble:\n• Experimental Lattice Energy (formation): $\\text{NaF} = -918$, $\\text{NaI} = -705$, $\\text{AgF} = -958$, $\\text{AgI} = -889\\text{ kJ mol}^{-1}$\n• Hydration Enthalpies: $\\text{Na}^+ = -406$, $\\text{Ag}^+ = -464$, $\\text{F}^- = -506$, $\\text{I}^- = -293\\text{ kJ mol}^{-1}$",
    options: [
      { text: "$\\text{AgF}$", isCorrect: true },
      { text: "$\\text{NaF}$", isCorrect: false },
      { text: "$\\text{NaI}$", isCorrect: false },
      { text: "$\\text{AgI}$", isCorrect: false }
    ],
    explanation: "• Enthalpy of solution is calculated as: $\\Delta H_{\\text{sol}}^\\theta = -\\Delta H_{\\text{latt}}\\text{(formation)} + \\Delta H_{\\text{hyd}}(\\text{cation}) + \\Delta H_{\\text{hyd}}(\\text{anion})$.\n• For $\\text{NaF}$: $\\Delta H_{\\text{sol}} = -(-918) + (-406) + (-506) = +6\\text{ kJ mol}^{-1}$.\n• For $\\text{NaI}$: $\\Delta H_{\\text{sol}} = -(-705) + (-406) + (-293) = +6\\text{ kJ mol}^{-1}$.\n• For $\\text{AgF}$: $\\Delta H_{\\text{sol}} = -(-958) + (-464) + (-506) = -12\\text{ kJ mol}^{-1}$ (exothermic).\n• For $\\text{AgI}$: $\\Delta H_{\\text{sol}} = -(-889) + (-464) + (-293) = +132\\text{ kJ mol}^{-1}$.\n• Since $\\text{AgF}$ has the most exothermic (negative) enthalpy of solution, it is the most soluble compound."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260728-26",
    lessonNum: 2,
    question: "Which of the following chemical processes is correctly matched with the expected sign of its system entropy change ($\\Delta S_{\\text{system}}$)?",
    options: [
      { text: "$\\text{H}_2\\text{O(s)} \\rightarrow \\text{H}_2\\text{O(l)} \\quad (\\Delta S_{\\text{system}} = +)$", isCorrect: true },
      { text: "$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightarrow 2\\text{NH}_3\\text{(g)} \\quad (\\Delta S_{\\text{system}} = +)$", isCorrect: false },
      { text: "$2\\text{Na(s)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{Na}_2\\text{O}_2\\text{(s)} \\quad (\\Delta S_{\\text{system}} = +)$", isCorrect: false },
      { text: "$\\text{S(s)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{SO}_2\\text{(g)} \\quad (\\Delta S_{\\text{system}} = \\text{highly negative})$", isCorrect: false }
    ],
    explanation: "• Melting solid water to liquid water increases disorder, making $\\Delta S_{\\text{system}}$ positive ($+$).\n• In the Haber process ($\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$), 4 moles of gas react to form 2 moles of gas, reducing disorder ($\\Delta S_{\\text{system}}$ is negative).\n• Reacting solid sodium and oxygen gas to form a solid product reduces the number of gas particles, resulting in a negative entropy change.\n• Producing 1 mole of $\\text{SO}_2\\text{(g)}$ from 1 mole of $\\text{O}_2\\text{(g)}$ results in a very small change in entropy, not highly negative."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260728-27",
    lessonNum: 2,
    question: "Magnesium carbonate decomposes endothermically at high temperatures: $\\text{MgCO}_3\\text{(s)} \\rightarrow \\text{MgO(s)} + \\text{CO}_2\\text{(g)}$ ($\\Delta H^\\theta = +117\\text{ kJ mol}^{-1}$). Using the standard entropies:\n• $S^\\theta(\\text{MgCO}_3) = 65.7 \\mid S^\\theta(\\text{MgO}) = 27.0 \\mid S^\\theta(\\text{CO}_2) = 214.0\\text{ J K}^{-1}\\text{ mol}^{-1}$\nWhich statement correctly shows why magnesium carbonate is stable at $298\\text{ K}$?",
    options: [
      { text: "$\\Delta S_{\\text{total}} = -217\\text{ J K}^{-1}\\text{ mol}^{-1}$, which is negative, making the reaction non-feasible.", isCorrect: true },
      { text: "$\\Delta S_{\\text{system}} = -175.3\\text{ J K}^{-1}\\text{ mol}^{-1}$, which decreases the randomness of the reaction.", isCorrect: false },
      { text: "$\\Delta S_{\\text{surroundings}} = +393\\text{ J K}^{-1}\\text{ mol}^{-1}$, which fails to outweigh the system entropy decrease.", isCorrect: false },
      { text: "$\\Delta H^\\theta$ is endothermic, and endothermic reactions are never feasible at room temperature.", isCorrect: false }
    ],
    explanation: "• Calculate the system entropy: $\\Delta S_{\\text{system}} = 27.0 + 214.0 - 65.7 = +175.3\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• Calculate the surroundings entropy: $\\Delta S_{\\text{surroundings}} = -\\Delta H^\\theta / T = -117000 / 298 = -392.6\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• Calculate the total entropy: $\\Delta S_{\\text{total}} = +175.3 + (-392.6) = -217.3\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• Since $\\Delta S_{\\text{total}}$ is negative, the reaction is not feasible, making the magnesium carbonate stable against decomposition at $298\\text{ K}$."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260728-28",
    lessonNum: 2,
    question: "The combustion of hydrogen ($\\text{H}_2 + 0.5\\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$) is highly thermodynamically feasible ($\\Delta S_{\\text{total}} = +795\\text{ J K}^{-1}\\text{ mol}^{-1}$). Explain why hydrogen does not react with oxygen at room temperature unless the mixture is ignited.",
    options: [
      { text: "The reaction has a very high activation energy, making it kinetically stable at room temperature.", isCorrect: true },
      { text: "The reaction is endothermic, so it cannot initiate without external heat energy.", isCorrect: false },
      { text: "At room temperature, the total entropy change is actually negative.", isCorrect: false },
      { text: "Oxygen is chemically inert at room temperature due to its strong triple bond.", isCorrect: false }
    ],
    explanation: "• Thermodynamic feasibility (indicated by a positive $\\Delta S_{\\text{total}}$ or negative $\\Delta G$) only tells us whether a reaction *can* occur, not how fast it will occur.\n• The reaction between hydrogen and oxygen has a high activation energy barrier.\n• At room temperature, very few colliding molecules have energy greater than the activation energy, so the rate of reaction is negligible. The mixture is kinetically stable.\n• Ignition provides the energy required to overcome the activation energy barrier, initiating the reaction."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260728-29",
    lessonNum: 2,
    question: "What is the standard pressure value represented by the standard symbol ($^\\theta$) for thermodynamic measurements?",
    options: [
      { text: "$100\\text{ kPa}$", isCorrect: true },
      { text: "$1.00\\text{ kPa}$", isCorrect: false },
      { text: "$10.0\\text{ kPa}$", isCorrect: false },
      { text: "$1000\\text{ kPa}$", isCorrect: false }
    ],
    explanation: "• The standard symbol ($^\\theta$) specifies a standard pressure of $100\\text{ kPa}$ (equivalent to $1\\text{ bar}$).\n• Previously, $1\\text{ atm}$ ($101.3\\text{ kPa}$) was used, but IUPAC has updated the standard pressure to $100\\text{ kPa}$."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260728-30",
    lessonNum: 2,
    question: "For the reversible reaction: $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)}$, the total standard entropy change is negative ($\\Delta S_{\\text{total}}^\\theta(700\\text{ K}) = -78.7\\text{ J K}^{-1}\\text{ mol}^{-1}$). What does this indicate about the equilibrium mixture at $700\\text{ K}$?",
    options: [
      { text: "The equilibrium mixture contains a high proportion of reactants (nitrogen and hydrogen) and a low proportion of ammonia.", isCorrect: true },
      { text: "The reaction is completely impossible and no ammonia is formed at all.", isCorrect: false },
      { text: "The equilibrium mixture contains a high proportion of ammonia and a low proportion of reactants.", isCorrect: false },
      { text: "The reaction goes to completion in the forward direction.", isCorrect: false }
    ],
    explanation: "• A negative total entropy change ($\\Delta S_{\\text{total}} < 0$) indicates that the forward reaction is not spontaneous under these conditions.\n• For a reversible reaction, this means the equilibrium position lies to the left (favouring the reactants).\n• Therefore, the equilibrium mixture will contain a high proportion of the reactants ($\\text{N}_2$ and $\\text{H}_2$) and only a low proportion of the product ($\\text{NH}_3$)."
  }
];
