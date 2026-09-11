import { Question } from '../../../types';

// Simple Molecules and Covalent Bonds - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u2_l4_lv2_1-2026",
    question: "A molecule of nitrogen gas ($N_2$) contains a triple covalent bond ($N \\equiv N$). How many bonding electrons and how many non-bonding (lone pair) electrons are in a single $N_2$ molecule?",
    options: [
      { text: "6 bonding electrons (3 shared pairs) and 4 non-bonding electrons (2 lone pairs)" },
      { text: "3 bonding electrons and 7 non-bonding electrons" },
      { text: "6 bonding electrons and 8 non-bonding electrons" },
      { text: "2 bonding electrons and 6 non-bonding electrons" }
    ],
    correctAnswer: 0,
    explanation: "* A triple covalent bond consists of 3 shared pairs of electrons, meaning $3 \\times 2 = 6\\text{ bonding electrons}$.\n* Each nitrogen atom ($2, 5$) contributes 3 valence electrons to the triple bond, leaving 2 non-bonding electrons (1 lone pair) on each nitrogen atom ($2 \\times 2 = 4\\text{ non-bonding electrons}$).\n* Total valence electrons = $6 + 4 = 10\\text{ electrons}$.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q8",
    createdAt: "2026-05-17T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv2_2-2026",
    question: "Methane ($CH_4$) has a very low boiling point ($-161.5^\\circ\\text{C}$) and is a gas at room temperature. Which statement correctly explains why simple molecular substances have low melting and boiling points?",
    options: [
      { text: "The intermolecular forces between separate $CH_4$ molecules are weak and require relatively little thermal energy to overcome, even though the covalent $C-H$ bonds inside each molecule are strong" },
      { text: "The covalent bonds between carbon and hydrogen atoms break easily at low temperatures" },
      { text: "Carbon and hydrogen atoms lose their electrical charge when bonded" },
      { text: "Methane forms a giant covalent macromolecule that expands and evaporates easily" }
    ],
    correctAnswer: 0,
    explanation: "* In simple molecular structures, melting and boiling involve overcoming the weak attractive intermolecular forces between molecules.\n* The strong intra-molecular covalent bonds within the molecules remain completely intact during state changes.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q9",
    createdAt: "2026-05-17T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv2_3-2023",
    question: "Carbon dioxide ($CO_2$) is a gas at room temperature, while silicon dioxide ($SiO_2$) is a solid with a very high melting point (> 1600 °C). Which statement accounts for this huge difference?",
    options: [
      { text: "$CO_2$ contains ionic bonds while $SiO_2$ contains covalent bonds" },
      { text: "$CO_2$ consists of simple molecules held by weak intermolecular forces, whereas $SiO_2$ has a giant covalent lattice with strong covalent bonds extending throughout" },
      { text: "Carbon is a non-metal while silicon is a metal" },
      { text: "Silicon has more neutrons than carbon" }
    ],
    correctAnswer: 1,
    explanation: "* $CO_2$ has a simple molecular structure with weak intermolecular forces between molecules that are easily overcome at low temperatures.\n* $SiO_2$ is a giant covalent macromolecule where every silicon atom is bonded to 4 oxygen atoms and every oxygen to 2 silicon atoms in a continuous 3D network of strong covalent bonds.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q10",
    lessonNum: 4,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv2_4-2024",
    question: "In which of the following molecules are ALL the valence shell electrons of all bonded atoms involved in covalent bonding (i.e. no lone pairs on any atom)?",
    options: [
      { text: "Ammonia ($NH_3$)" },
      { text: "Methane ($CH_4$)" },
      { text: "Water ($H_2O$)" },
      { text: "Hydrogen chloride ($HCl$)" }
    ],
    correctAnswer: 1,
    explanation: "* In methane ($CH_4$), carbon has 4 valence electrons and forms 4 single C-H bonds with 4 hydrogen atoms.\n* All 4 carbon electrons and each hydrogen electron are shared in bonding, leaving zero lone pairs in the entire molecule.\n* $NH_3$ has 1 lone pair, $H_2O$ has 2 lone pairs, and $HCl$ has 3 lone pairs on chlorine.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q9",
    lessonNum: 4,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv2_5-2025",
    question: "Which row correctly describes the electrical conductivity of ethanol ($C_2H_5OH$) in the liquid state and when dissolved in water?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Liquid ethanol</th><th class="p-2 border">Aqueous ethanol</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">does not conduct</td><td class="p-2 border">does not conduct</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">conducts well</td><td class="p-2 border">conducts well</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">does not conduct</td><td class="p-2 border">conducts well</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">conducts well</td><td class="p-2 border">does not conduct</td></tr></tbody></table>`,
    options: [
      { text: "Row A: does not conduct | does not conduct" },
      { text: "Row B: conducts well | conducts well" },
      { text: "Row C: does not conduct | conducts well" },
      { text: "Row D: conducts well | does not conduct" }
    ],
    correctAnswer: 0,
    explanation: "* Ethanol is a covalent molecular compound consisting of uncharged neutral molecules.\n* Because it contains no mobile ions or free delocalised electrons in either pure liquid form or in aqueous solution, it cannot conduct electricity in either state.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q9",
    lessonNum: 4,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

