import { Question } from '../../../types';

// Giant Covalent Structures and Metallic Bonding - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u2_l5_lv2_1-2026",
    question: "Why is graphite soft, slippery, and suitable as a solid lubricant in machinery, whereas diamond is extremely hard and used on cutting drill tips, even though both are pure allotropes of carbon?",
    options: [
      { text: "In graphite, carbon atoms form hexagonal layers held together only by weak intermolecular forces that allow the layers to slide easily over each other; in diamond, each carbon atom is covalently bonded to 4 others in a rigid 3D tetrahedral network" },
      { text: "Diamond contains strong ionic bonds between carbon ions while graphite contains metallic bonds" },
      { text: "Graphite has a simple molecular structure while diamond is macromolecular" },
      { text: "Graphite contains free moving hydrogen atoms between the carbon layers" }
    ],
    correctAnswer: 0,
    explanation: "* In graphite, carbon atoms form planar hexagonal rings within layers where each carbon is bonded to 3 others. The separate layers are held by weak attractive forces and slide easily when sheared, making graphite slippery and soft.\n* In diamond, every carbon atom forms 4 strong, tetrahedral covalent bonds in a continuous 3D giant covalent lattice, providing exceptional hardness and rigidity.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q10",
    createdAt: "2026-05-20T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l5_lv2_2-2023",
    question: "Why does graphite conduct electricity whereas diamond does not?",
    options: [
      { text: "Graphite has mobile positive carbon ions, but diamond does not" },
      { text: "In graphite, each carbon atom forms only 3 covalent bonds, leaving 1 unbonded valence electron per atom delocalised along the layers; in diamond, all 4 valence electrons are localized in covalent bonds" },
      { text: "Graphite absorbs moisture from the air which conducts electricity" },
      { text: "Diamond has higher resistance because it is a metal" }
    ],
    correctAnswer: 1,
    explanation: "* In graphite, each carbon atom is bonded to 3 other carbon atoms in hexagonal layers.\n* The fourth outer electron of each carbon becomes delocalised and is free to move along the layers, enabling graphite to conduct electricity.\n* In diamond, all 4 outer electrons are held tightly in single covalent bonds, leaving no free electrons or ions to conduct charge.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 22 Q11",
    lessonNum: 5,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l5_lv2_3-2024",
    question: "Pure metals are malleable and ductile, whereas alloys are typically harder and less malleable. What is the explanation for this difference?",
    options: [
      { text: "Alloys have no metallic bonding" },
      { text: "In pure metals, layers of regularly sized atoms can slide smoothly over one another; in alloys, differently sized atoms disrupt the regular lattice, preventing layers from sliding easily" },
      { text: "Pure metals contain covalent bonds that bend without breaking" },
      { text: "Alloys contain ionic bonds that make them brittle" }
    ],
    correctAnswer: 1,
    explanation: "* In a pure metal, all atoms are identical in size and arranged in uniform layers that slide over each other when a force is applied (malleability).\n* In an alloy, atoms of different elements have different atomic radii, distorting the regular layers and making it harder for the layers to slide past each other.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 21 Q10",
    lessonNum: 5,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l5_lv2_4-2025",
    question: "Which row correctly describes the structure and properties of silicon(IV) oxide (silica, $SiO_2$)?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Structure</th><th class="p-2 border">Melting point</th><th class="p-2 border">Electrical conductivity</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">giant covalent</td><td class="p-2 border">very high</td><td class="p-2 border">non-conductor</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">simple molecular</td><td class="p-2 border">low</td><td class="p-2 border">non-conductor</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">giant ionic</td><td class="p-2 border">very high</td><td class="p-2 border">conducts when molten</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">giant covalent</td><td class="p-2 border">very high</td><td class="p-2 border">good conductor</td></tr></tbody></table>`,
    options: [
      { text: "Row A: giant covalent | very high | non-conductor" },
      { text: "Row B: simple molecular | low | non-conductor" },
      { text: "Row C: giant ionic | very high | conducts when molten" },
      { text: "Row D: giant covalent | very high | good conductor" }
    ],
    correctAnswer: 0,
    explanation: "* Silicon(IV) oxide ($SiO_2$) is a giant macromolecular covalent lattice (similar to diamond).\n* It has a very high melting point (> 1600 °C) because strong covalent bonds must be broken.\n* It has no delocalised electrons or ions, so it is an electrical insulator (non-conductor).",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 22 Q10",
    lessonNum: 5,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

