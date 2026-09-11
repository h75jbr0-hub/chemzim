import { Question } from '../../../types';

// Elements, Compounds and Mixtures - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u2_l2_lv1_1-2026",
    question: "Which row correctly compares an element, a compound, and a mixture?",
    options: [
      { text: "Element: Contains only one type of atom; Compound: Two or more elements chemically combined; Mixture: Two or more substances physically mixed" },
      { text: "Element: Can be broken down chemically; Compound: Contains only one element; Mixture: Has a fixed boiling point" },
      { text: "Element: Contains two types of atoms; Compound: Easily separated by filtration; Mixture: Formed with energy release" },
      { text: "Element: Has varying composition; Compound: Physically mixed; Mixture: Contains only non-metals" }
    ],
    correctAnswer: 0,
    explanation: "* An element consists of only one type of atom (e.g. O₂, Fe) and cannot be broken down into simpler substances by chemical means.\n* A compound contains two or more elements chemically bonded in a fixed ratio (e.g. H₂O, NaCl).\n* A mixture contains two or more substances that are not chemically joined and can be separated by physical methods (e.g. air, salt water).",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q4",
    lessonNum: 2,
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv1_2-2026",
    question: "Brass is an alloy made of copper and zinc. Why is brass classified as a mixture rather than a compound?",
    options: [
      { text: "The copper and zinc atoms are chemically bonded in a fixed, constant ratio" },
      { text: "The proportions of copper and zinc can vary and their atoms are not chemically combined together" },
      { text: "Brass has a sharp, fixed melting point like pure copper" },
      { text: "Brass can only be separated into copper and zinc by an electrolytic chemical reaction" }
    ],
    correctAnswer: 1,
    explanation: "* Alloys are physical mixtures of a metal with other elements (metals or carbon).\n* In brass, copper and zinc atoms are mixed without chemical bonds in variable proportions, retaining their individual chemical characteristics.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q4",
    lessonNum: 2,
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv1_3-compound-desc",
    question: "Which statement describes a chemical compound?",
    options: [
      { text: "It contains two or more elements forming an alloy" },
      { text: "It contains two or more elements chemically combined in a fixed ratio" },
      { text: "It contains two or more elements physically combined in variable amounts" },
      { text: "It contains two or more elements that can be easily separated by filtration" }
    ],
    correctAnswer: 1,
    explanation: "* A compound is formed when two or more different elements chemically combine in a fixed, definite proportion.\n* The resulting compound possesses completely new chemical properties from the elements it was made from.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q3",
    lessonNum: 2,
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv1_4-element-formula",
    question: "Which of the following is the chemical formula of an element?",
    options: [
      { text: "H₂O₂" },
      { text: "H" },
      { text: "CH₄O" },
      { text: "H₂" }
    ],
    correctAnswer: 3,
    explanation: "* An element is a pure substance containing only one type of atom (same atomic number).\n* In nature, hydrogen gas is found as stable diatomic molecules with the formula H₂.\n* Isolated H atoms do not exist stably at room conditions, while H₂O₂ and CH₄O are compounds.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q3",
    lessonNum: 2,
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv1_5-identify-pure-substance",
    question: "What is always true for any pure chemical substance?",
    options: [
      { text: "It is a solid at room temperature" },
      { text: "It always boils at 100 °C" },
      { text: "It has a sharp, precise melting point" },
      { text: "It contains only one type of atom" }
    ],
    correctAnswer: 2,
    explanation: "* The defining criterion of purity for a chemical substance is that it melts and boils sharply at a single definite temperature.\n* Impure substances melt and boil over a wide range of temperatures.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 23 Q2",
    lessonNum: 2,
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv1_6-pure-intended-use",
    question: "Which substance must be completely pure for its intended use?",
    options: [
      { text: "Water for washing a vehicle" },
      { text: "Limestone for extracting iron in a blast furnace" },
      { text: "A pharmaceutical drug for curing disease" },
      { text: "Petroleum for fractional distillation" }
    ],
    correctAnswer: 2,
    explanation: "* Pharmaceutical drugs and medical products must be strictly pure because harmful impurities can cause fatal toxic reactions or dangerous side-effects.\n* Industrial washing or blast furnace limestone do not require high chemical purity.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q2",
    lessonNum: 2,
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv1_7-2023",
    question: "Which statement about elements, compounds, and mixtures is correct?",
    options: [
      { text: "Air is a compound because its gases cannot be separated" },
      { text: "Water ($H_2O$) is a compound because hydrogen and oxygen are chemically bonded in a fixed ratio" },
      { text: "Methane ($CH_4$) is a mixture of carbon and hydrogen" },
      { text: "Brass is an element because it is a metal" }
    ],
    correctAnswer: 1,
    explanation: "* Water is a compound containing hydrogen and oxygen chemically joined in a fixed 2:1 ratio by covalent bonds.\n* Air and brass are mixtures; methane is a compound, not a mixture.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 21 Q7",
    lessonNum: 2,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv1_8-2024",
    question: "Which of the following substances is an element?",
    options: [
      { text: "Clean dry air" },
      { text: "Carbon monoxide" },
      { text: "Diamond" },
      { text: "Petroleum" }
    ],
    correctAnswer: 2,
    explanation: "* Diamond is an allotrope of carbon, consisting only of carbon atoms bonded in a giant tetrahedral lattice, so it is an element.\n* Carbon monoxide is a compound ($CO$); air and petroleum are mixtures.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 22 Q7",
    lessonNum: 2,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv1_9-2025",
    question: "Which process is a physical change rather than a chemical change?",
    options: [
      { text: "Burning ethanol in air" },
      { text: "Separating crude oil into fractions by fractional distillation" },
      { text: "Rusting of iron in damp air" },
      { text: "Neutralising hydrochloric acid with sodium hydroxide" }
    ],
    correctAnswer: 1,
    explanation: "* Fractional distillation is a physical separation technique based on differences in boiling points.\n* No new chemical bonds are formed or broken between different elements; hydrocarbons simply vaporise and condense.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q7",
    lessonNum: 2,
    createdAt: "2025-06-01T10:00:00Z"
  }
];


