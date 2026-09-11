export const lessonQuiz = [
  {
    id: "EDEXCEL-AL-U2-L2-01",
    question: "Which of the following intermolecular forces exists between all molecules, whether polar or non-polar?",
    options: [
      { text: "London dispersion forces", isCorrect: true },
      { text: "Permanent dipole-dipole interactions", isCorrect: false },
      { text: "Hydrogen bonds", isCorrect: false },
      { text: "Ion-dipole forces", isCorrect: false }
    ],
    explanation: "• London dispersion forces (instantaneous dipole-induced dipole interactions) arise from fluctuations in electron density.\n• Because all molecules contain electrons, London forces exist between all molecules, polar or non-polar."
  },
  {
    id: "EDEXCEL-AL-U2-L2-02",
    question: "Which noble gas has the highest boiling temperature, and why?",
    options: [
      { text: "Radon, because it has the largest number of electrons leading to the strongest London forces.", isCorrect: true },
      { text: "Helium, because it is the lightest and has the highest kinetic energy.", isCorrect: false },
      { text: "Xenon, because it forms permanent dipole-dipole interactions.", isCorrect: false },
      { text: "Argon, because it has a complete octet of valence electrons.", isCorrect: false }
    ],
    explanation: "• Noble gases are monatomic and non-polar, meaning they only experience London forces.\n• The strength of London forces increases with the number of electrons, as larger electron clouds are more easily polarisable.\n• Radon has 86 electrons (the most in the noble gas group shown), resulting in the strongest London forces and highest boiling point."
  },
  {
    id: "EDEXCEL-AL-U2-L2-03",
    question: "Pentane and dimethylpropane are isomers with the formula C₅H₁₂. Pentane boils at 36.1 °C, while dimethylpropane boils at 9.5 °C. Which statement correctly explains this difference?",
    options: [
      { text: "Pentane has a higher surface area of contact, resulting in stronger London forces.", isCorrect: true },
      { text: "Dimethylpropane is polar, which lowers its boiling point.", isCorrect: false },
      { text: "Pentane has more electrons than dimethylpropane.", isCorrect: false },
      { text: "Dimethylpropane can form hydrogen bonds.", isCorrect: false }
    ],
    explanation: "• Isomers with the same formula have the same number of electrons, so the strength of instantaneous dipoles is similar.\n• Pentane is a straight-chain molecule with a larger surface area of contact, allowing molecules to pack closely together.\n• Dimethylpropane is branched and spherical, resulting in a smaller contact surface area and weaker London forces."
  },
  {
    id: "EDEXCEL-AL-U2-L2-04",
    question: "Which of the following molecules forms intermolecular hydrogen bonds in the liquid state?",
    options: [
      { text: "HF", isCorrect: true },
      { text: "HCl", isCorrect: false },
      { text: "CH₃OCH₃", isCorrect: false },
      { text: "H₂S", isCorrect: false }
    ],
    explanation: "• Hydrogen bonding requires a hydrogen atom covalently bonded to a highly electronegative atom (N, O, or F) with a lone pair.\n• Fluorine is highly electronegative, making HF capable of forming strong hydrogen bonds.\n• HCl and H₂S contain less electronegative atoms (Cl, S) and cannot form hydrogen bonds.\n• CH₃OCH₃ (dimethyl ether) has polar C-O bonds, but no hydrogen bonded directly to oxygen."
  },
  {
    id: "EDEXCEL-AL-U2-L2-05",
    question: "What is the typical bond angle around the hydrogen atom involved in a hydrogen bond (e.g. O–H...O)?",
    options: [
      { text: "180°", isCorrect: true },
      { text: "104.5°", isCorrect: false },
      { text: "120°", isCorrect: false },
      { text: "109.5°", isCorrect: false }
    ],
    explanation: "• Hydrogen bonds are highly directional.\n• The repulsion between the electron clouds of the two electronegative atoms (e.g., the two oxygen atoms in water) is minimised when the three atoms (O–H...O) are arranged in a straight line.\n• This results in a bond angle of approximately 180° around the hydrogen atom."
  },
  {
    id: "EDEXCEL-AL-U2-L2-06",
    question: "Why is ice less dense than liquid water at 0 °C?",
    options: [
      { text: "The molecules in ice form a rigid, open hexagonal cage-like structure held by hydrogen bonds.", isCorrect: true },
      { text: "Liquid water has stronger covalent bonds than ice.", isCorrect: false },
      { text: "Ice contains dissolved air bubbles that expand.", isCorrect: false },
      { text: "Liquid water molecules dissociate into ions, packing tighter.", isCorrect: false }
    ],
    explanation: "• In solid ice, water molecules are held in a fixed lattice where each oxygen atom is hydrogen-bonded to four hydrogen atoms.\n• This forces the molecules into an open hexagonal structure with relatively large spaces between them.\n• Upon melting, some hydrogen bonds break and the cage collapses, allowing molecules to pack closer together in liquid water."
  },
  {
    id: "EDEXCEL-AL-U2-L2-07",
    question: "Which of the following lists the hydrogen halides in order of increasing boiling temperature?",
    options: [
      { text: "HCl, HBr, HI, HF", isCorrect: true },
      { text: "HF, HCl, HBr, HI", isCorrect: false },
      { text: "HI, HBr, HCl, HF", isCorrect: false },
      { text: "HCl, HBr, HF, HI", isCorrect: false }
    ],
    explanation: "• HF has the highest boiling point because of its capability to form strong intermolecular hydrogen bonds.\n• For the remaining halides (HCl, HBr, HI), boiling point increases from HCl to HI because the increasing number of electrons down the group increases the strength of London forces, overriding the decrease in polar dipole-dipole forces.\n• Therefore, the order of increasing boiling temperature is: HCl < HBr < HI < HF."
  },
  {
    id: "EDEXCEL-AL-U2-L2-08",
    question: "Why are halogenoalkanes like chloromethane relatively insoluble in water despite being polar?",
    options: [
      { text: "They cannot form hydrogen bonds with water molecules.", isCorrect: true },
      { text: "They react violently with water to form toxic gases.", isCorrect: false },
      { text: "They are too large to fit between water molecules.", isCorrect: false },
      { text: "Their London forces are too strong to be broken by water.", isCorrect: false }
    ],
    explanation: "• Water molecules are held together by strong hydrogen bonds.\n• While chloromethane is polar, it cannot form hydrogen bonds with water (since the hydrogen atoms are bonded to carbon, not N, O, or F).\n• The weak dipole-dipole interactions between chloromethane and water are not strong enough to overcome the energy required to break the hydrogen bonds between water molecules."
  },
  {
    id: "EDEXCEL-AL-U2-L2-09",
    question: "Ethanoic acid dimerises in non-polar solvents. Which functional groups are involved in the hydrogen bonding of the dimer?",
    options: [
      { text: "The hydroxyl (O–H) group of one molecule and the carbonyl (C=O) group of another.", isCorrect: true },
      { text: "The methyl (CH₃) groups of both molecules.", isCorrect: false },
      { text: "The two carbonyl (C=O) groups directly.", isCorrect: false },
      { text: "The two hydroxyl (O–H) groups directly.", isCorrect: false }
    ],
    explanation: "• Ethanoic acid forms a cyclic dimer via two mutual hydrogen bonds.\n• The partially positive hydrogen of the O–H group on one molecule attracts the lone pair on the carbonyl oxygen of the neighboring molecule, and vice-versa."
  },
  {
    id: "EDEXCEL-AL-U2-L2-10",
    question: "Which of the following compounds is most soluble in water?",
    options: [
      { text: "Ethanol, CH₃CH₂OH", isCorrect: true },
      { text: "Ethane, CH₃CH₃", isCorrect: false },
      { text: "Chloroethane, CH₃CH₂Cl", isCorrect: false },
      { text: "Hexan-1-ol, CH₃(CH₂)₅OH", isCorrect: false }
    ],
    explanation: "• Ethanol is highly soluble in water because its hydroxyl (–OH) group forms hydrogen bonds with water molecules, and its non-polar alkyl chain is small.\n• Ethane is non-polar and insoluble.\n• Chloroethane is polar but cannot form hydrogen bonds, so it is insoluble.\n• Hexan-1-ol has a long hydrophobic carbon chain that disrupts water's hydrogen-bonded network, making it significantly less soluble than ethanol."
  },
  {
    id: "EDEXCEL-AL-U2-L2-11",
    question: "Which of the following solids consists of atoms or molecules held together by London forces?",
    options: [
      { text: "I₂", isCorrect: true },
      { text: "Cu", isCorrect: false },
      { text: "NaCl", isCorrect: false },
      { text: "SiO₂", isCorrect: false }
    ],
    explanation: "• Iodine (I₂) is a simple molecular solid held together in a crystalline lattice solely by weak intermolecular London forces between non-polar diatomic molecules.\n• Copper (Cu) is held by metallic bonding.\n• Sodium chloride (NaCl) is held by ionic bonding.\n• Silicon dioxide (SiO₂) is a giant covalent structure."
  },
  {
    id: "EDEXCEL-AL-U2-L2-12",
    question: "Which of the following phenomena can be explained by intermolecular hydrogen bonding?",
    options: [
      { text: "Ice has a lower density than water at 0 °C.", isCorrect: true },
      { text: "The boiling points of alkanes increase with relative molecular mass.", isCorrect: false },
      { text: "Propanone (Mr = 58) has a higher boiling point than propane (Mr = 44).", isCorrect: false },
      { text: "Hydrogen chloride forms an acidic solution when dissolved in water.", isCorrect: false }
    ],
    explanation: "• The open, hexagonal, cage-like crystal structure of ice is held in place by highly directional hydrogen bonds.\n• This structure collapses when ice melts, letting the molecules pack closer together in liquid water, which explains why ice is less dense than water at 0 °C.\n• Option B is due to increasing London forces.\n• Option C is due to polar dipole-dipole forces.\n• Option D is due to ionization and acid dissociation."
  },
  {
    id: "EDEXCEL-AL-U2-L2-13",
    question: "Which of the following isomers is likely to have the highest boiling temperature?",
    options: [
      { text: "CH₃CH₂CH₂CH₂CH₂CH₃", isCorrect: true },
      { text: "(CH₃)₂CHCH₂CH₂CH₃", isCorrect: false },
      { text: "CH₃CH₂CH(CH₃)CH₂CH₃", isCorrect: false },
      { text: "(CH₃)₂CHCH(CH₃)₂", isCorrect: false }
    ],
    explanation: "• All four options are isomers of hexane (C₆H₁₄) with identical numbers of electrons.\n• Unbranched hexane (straight-chain) has the largest contact surface area and can pack closest together.\n• This maximizes the points of contact and produces the strongest London forces, leading to the highest boiling point."
  },
  {
    id: "EDEXCEL-AL-U2-L2-14",
    question: "Which quantity would best indicate the relative strengths of the hydrogen bonds between molecules in liquid hydrogen halides, HF, HCl, HBr, and HI?",
    options: [
      { text: "Enthalpy changes of vaporisation", isCorrect: true },
      { text: "Bond enthalpies", isCorrect: false },
      { text: "Enthalpy changes of formation", isCorrect: false },
      { text: "Enthalpy changes of solution", isCorrect: false }
    ],
    explanation: "• Enthalpy change of vaporisation directly measures the energy required to completely separate the molecules in a liquid state to gaseous state.\n• This makes it a direct measure of the total strength of the intermolecular forces (including hydrogen bonds) holding the liquid together."
  },
  {
    id: "EDEXCEL-AL-U2-L2-15",
    question: "The surface of Triton, a moon of Neptune, contains condensed liquid methane that flows rapidly. Which statement explains this behavior?",
    options: [
      { text: "The intermolecular forces between methane molecules are weak.", isCorrect: true },
      { text: "Condensed methane has a metallic structure.", isCorrect: false },
      { text: "Methane molecules contain strong covalent bonds.", isCorrect: false },
      { text: "Methane molecules have a tetrahedral shape.", isCorrect: false }
    ],
    explanation: "• Methane (CH₄) is a small, non-polar molecule with only 10 electrons.\n• The intermolecular forces between methane molecules are very weak London dispersion forces.\n• These weak attractions make it very easy for molecules to slide past one another, resulting in low viscosity and rapid flow."
  },
  {
    id: "EDEXCEL-AL-U2-L2-16",
    question: "Which type of interaction is responsible for the intermolecular forces in liquid tetrachloromethane, CCl₄?",
    options: [
      { text: "Instantaneous dipole-induced dipole attractions", isCorrect: true },
      { text: "Covalent bonding", isCorrect: false },
      { text: "Hydrogen bonding", isCorrect: false },
      { text: "Permanent dipole-permanent dipole attractions", isCorrect: false }
    ],
    explanation: "• Tetrachloromethane (CCl₄) has polar C-Cl bonds, but the molecule is perfectly symmetrical and tetrahedral.\n• The individual dipoles cancel out, rendering the overall molecule completely non-polar.\n• Non-polar molecules can only experience instantaneous dipole-induced dipole attractions (London dispersion forces)."
  }
];
