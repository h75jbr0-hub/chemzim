export interface Topic {
  id: string;
  number: number;
  title: string;
  subtopics?: string[];
  theory?: string; // Markdown/HTML content for theoretical explanation
}

export interface CurriculumLevel {
  id: string;
  code: string;
  title: string;
  description: string;
  topics: Topic[];
}

export const igcseCurriculum: CurriculumLevel = {
  id: "cie-igcse-20260106",
  code: "0620",
  title: "IGCSE Chemistry",
  description: "Cambridge IGCSE Chemistry (0620) — O-Level",
  topics: [
    {
      id: "states-of-matter-20260106",
      theory: "## States of Matter\n\nMatter exists in three main states: solid, liquid, and gas. The kinetic particle theory explains the properties of these states.\n\n### Solids\n- Particles are closely packed in a regular arrangement.\n- Particles vibrate about fixed positions.\n- Fixed volume and shape.\n\n### Liquids\n- Particles are closely packed but irregularly arranged.\n- Particles can slide past one another.\n- Fixed volume but take the shape of the container.\n\n### Gases\n- Particles are far apart and arranged randomly.\n- Particles move rapidly and freely in all directions.\n- No fixed volume or shape; they expand to fill the container.\n\n### Changes of State\n- **Melting:** Solid to liquid (requires heat).\n- **Boiling/Evaporation:** Liquid to gas (requires heat).\n- **Condensation:** Gas to liquid (releases heat).\n- **Freezing:** Liquid to solid (releases heat).\n- **Sublimation:** Solid directly to gas.",
      number: 1,
      title: "States of Matter",
      subtopics: [
        "Solids, liquids and gases",
        "Diffusion",
        "Changes of state",
        "Kinetic particle theory",
      ],
    },
    {
      id: "atoms-elements-20260106",
      theory: "## Atoms, Elements and Compounds\n\nAll substances are made of atoms.\n\n### Atomic Structure\n- **Protons:** Positively charged, located in the nucleus. Mass = 1.\n- **Neutrons:** Neutral, located in the nucleus. Mass = 1.\n- **Electrons:** Negatively charged, orbit the nucleus in shells. Mass = 1/1840.\n\n### Definitions\n- **Element:** A substance made of only one type of atom.\n- **Compound:** A substance containing two or more different elements chemically bonded together.\n- **Isotopes:** Atoms of the same element with the same proton number but different nucleon (mass) numbers.\n\n### Bonding\n- **Ionic Bonding:** Strong electrostatic attraction between oppositely charged ions (metal and non-metal).\n- **Covalent Bonding:** Sharing of electron pairs between non-metal atoms.",
      number: 2,
      title: "Atoms, Elements and Compounds",
      subtopics: [
        "Atomic structure",
        "Elements and compounds",
        "Ions and ionic bonds",
        "Covalent bonds",
        "Metallic bonding",
      ],
    },
    {
      id: "stoichiometry-20260106",
      number: 3,
      title: "Stoichiometry",
      subtopics: [
        "Formulae",
        "Relative atomic mass",
        "The mole concept",
        "Chemical equations",
        "Reacting masses",
      ],
    },
    {
      id: "electrochemistry-20260106",
      number: 4,
      title: "Electrochemistry",
      subtopics: [
        "Electrolysis",
        "Electrolytic cells",
        "Electroplating",
        "Hydrogen-oxygen fuel cells",
      ],
    },
    {
      id: "chemical-energetics-20260106",
      number: 5,
      title: "Chemical Energetics",
      subtopics: [
        "Exothermic and endothermic reactions",
        "Energy diagrams",
        "Bond energies",
        "Fuel and hydrogen",
      ],
    },
    {
      id: "chemical-reactions-20260106",
      number: 6,
      title: "Chemical Reactions",
      subtopics: [
        "Rate of reaction",
        "Collision theory",
        "Catalysts",
        "Reversible reactions and equilibrium",
        "Redox reactions",
      ],
    },
    {
      id: "acids-bases-salts-20260106",
      number: 7,
      title: "Acids, Bases and Salts",
      subtopics: [
        "Acids and bases",
        "pH scale and indicators",
        "Neutralisation",
        "Oxides",
        "Preparation of salts",
      ],
    },
    {
      id: "periodic-table-20260106",
      number: 8,
      title: "The Periodic Table",
      subtopics: [
        "Arrangement of elements",
        "Group I — Alkali metals",
        "Group VII — Halogens",
        "Group VIII/0 — Noble gases",
        "Transition elements",
      ],
    },
    {
      id: "metals-20260106",
      number: 9,
      title: "Metals",
      subtopics: [
        "Properties of metals",
        "Reactivity series",
        "Extraction of metals",
        "Uses of metals",
        "Alloys",
      ],
    },
    {
      id: "chemistry-environment-20260106",
      number: 10,
      title: "Chemistry of the Environment",
      subtopics: [
        "Water treatment",
        "Fertilisers",
        "Air quality and climate",
        "Carbon cycle",
      ],
    },
    {
      id: "organic-chemistry-20260106",
      number: 11,
      title: "Organic Chemistry",
      subtopics: [
        "Alkanes",
        "Alkenes",
        "Alcohols",
        "Carboxylic acids",
        "Polymers",
        "Esters",
      ],
    },
    {
      id: "experimental-techniques-20260106",
      number: 12,
      title: "Experimental Techniques and Chemical Analysis",
      subtopics: [
        "Measurement",
        "Purification and separation",
        "Identification of ions and gases",
        "Instrumental analysis",
      ],
    },
  ],
};

export const cieAsCurriculum: CurriculumLevel = {
  id: "cie-as-20260106",
  code: "9701",
  title: "CIE AS-Level Chemistry",
  description: "Cambridge International AS Level Chemistry covering physical, inorganic, and organic chemistry.",
  topics: [
    {
      id: "physical-chemistry-20260106",
      number: 1,
      title: "Physical Chemistry",
      subtopics: [
        "Atomic structure",
        "Atoms, molecules and stoichiometry",
        "Chemical bonding",
        "States of matter",
        "Chemical energetics",
        "Equilibria",
        "Reaction kinetics"
      ],
    },
    {
      id: "inorganic-chemistry-20260106",
      number: 2,
      title: "Inorganic Chemistry",
      subtopics: [
        "The Periodic Table: chemical periodicity",
        "Group 2",
        "Group 17",
      ],
    },
    {
      id: "organic-chemistry-as-20260106",
      number: 3,
      title: "Organic Chemistry",
      subtopics: [
        "An introduction to organic chemistry",
        "Hydrocarbons",
        "Halogen derivatives",
        "Hydroxy compounds",
      ],
    },
  ],
};

export const aLevelCurriculum: CurriculumLevel = {
  id: "cie-alevel-20260106",
  code: "9701",
  title: "CIE A-Level Chemistry",
  description: "Cambridge International A Level Chemistry covering advanced transition elements and analytical techniques.",
  topics: [
    {
      id: "physical-chemistry-a2-20260106",
      number: 1,
      title: "Advanced Physical Chemistry",
      subtopics: [
        "Electrochemistry",
        "Equilibria II",
        "Reaction kinetics II"
      ],
    },
    {
      id: "inorganic-chemistry-a2-20260106",
      number: 2,
      title: "Transition Elements",
      subtopics: [
        "An introduction to the chemistry of transition elements",
        "Nitrogen and sulfur"
      ],
    },
    {
      id: "organic-chemistry-a2-20260106",
      number: 3,
      title: "Advanced Organic Chemistry",
      subtopics: [
        "Carbonyl compounds",
        "Carboxylic acids and derivatives",
        "Nitrogen compounds",
        "Polymerisation",
        "Organic synthesis"
      ],
    },
    {
      id: "analysis-20260106",
      number: 4,
      title: "Analysis",
      subtopics: [
        "Analytical techniques"
      ],
    }
  ],
};

export const edexcelIgcseCurriculum: CurriculumLevel = {
  id: "edexcel-igcse-20260106",
  code: "4CH1",
  title: "Edexcel IGCSE Chemistry",
  description: "Pearson Edexcel International GCSE Chemistry covering core concepts.",
  topics: [
    {
      id: "principles-of-chemistry-20260106",
      number: 1,
      title: "Principles of Chemistry",
      subtopics: [
        "States of Matter",
        "Elements, Compounds & Mixtures",
        "Atomic Structure",
        "Chemical Formulae, Equations & Calculations"
      ]
    }
  ]
};

export const edexcelAsCurriculum: CurriculumLevel = {
  id: "edexcel-as-20260106",
  code: "XCH11",
  title: "Edexcel AS Chemistry",
  description: "Pearson Edexcel International AS Level Chemistry covering Units 1, 2, and 3.",
  topics: [
    {
      id: "edexcel-unit-1-20260106",
      number: 1,
      title: "Structure, Bonding & Intro Organic",
      subtopics: [
        "Topic 1: Formulae, Equations and Amount of Substance",
        "Topic 2: Atomic Structure & The Periodic Table",
        "Topic 3: Bonding & Structure",
        "Topic 4: Introductory Organic Chemistry & Alkanes",
        "Topic 5: Alkenes"
      ]
    },
    {
      id: "edexcel-unit-2-20260106",
      number: 2,
      title: "Energetics, Group Chem & Halogenoalkanes",
      subtopics: [
        "Topic 6: Energetics",
        "Topic 7: Intermolecular Forces",
        "Topic 8: Redox Chemistry & Groups 1, 2 and 7",
        "Topic 9: Kinetics & Equilibria I",
        "Topic 10: Organic Chemistry: Halogenoalkanes, Alcohols & Modern Analytical Techniques I"
      ]
    },
    {
      id: "edexcel-unit-3-20260106",
      number: 3,
      title: "Practical Skills in Chemistry I",
      subtopics: [
        "Unit 3 Practical: AS Laboratory Skills"
      ]
    }
  ]
};

export const edexcelA2Curriculum: CurriculumLevel = {
  id: "edexcel-a2-20260106",
  code: "YCH11",
  title: "Edexcel A2 Chemistry",
  description: "Pearson Edexcel International A2 Level Chemistry covering Units 4, 5, and 6.",
  topics: [
    {
      id: "edexcel-unit-4-20260106",
      number: 4,
      title: "Rates, Equilibria & Further Organic",
      subtopics: [
        "Topic 11: Kinetics",
        "Topic 12: Entropy and Energetics",
        "Topic 13: Chemical Equilibria",
        "Topic 14: Acid-Base Equilibria",
        "Topic 15: Organic Chemistry: Carbonyls, Carboxylic Acids and Chirality"
      ]
    },
    {
      id: "edexcel-unit-5-20260106",
      number: 5,
      title: "Transition Metals & Organic Nitrogen Chemistry",
      subtopics: [
        "Topic 16: Redox Equilibria",
        "Topic 17: Transition Metals and their Chemistry",
        "Topic 18: Organic Chemistry – Arenes",
        "Topic 19: Organic Nitrogen Compounds: Amines, Amides, Amino Acids and Proteins",
        "Topic 20: Organic Synthesis"
      ]
    },
    {
      id: "edexcel-unit-6-20260106",
      number: 6,
      title: "Practical Skills in Chemistry II",
      subtopics: [
        "Unit 6 Practical: A2 Laboratory Skills"
      ]
    }
  ]
};

export const allCurricula: CurriculumLevel[] = [
  igcseCurriculum,
  cieAsCurriculum,
  aLevelCurriculum,
  edexcelIgcseCurriculum,
  edexcelAsCurriculum,
  edexcelA2Curriculum
];
