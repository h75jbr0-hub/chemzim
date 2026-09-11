import { Question } from '../../../types';

// Giant Covalent Structures and Metallic Bonding - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u2_l5_lv3_1-2026",
    question: "Metals are malleable and ductile (can be hammered into sheets and drawn into wires without shattering) and conduct electricity in both solid and liquid states. Which row correctly explains both of these properties based on metallic lattice theory?",
    options: [
      { text: "Malleability: Layers of positive metal cations can slide past one another without breaking the non-directional metallic bond; Electrical conductivity: Delocalised electrons are free to move randomly and drift towards the positive terminal when a voltage is applied" },
      { text: "Malleability: Metal atoms compress and shrink when struck; Electrical conductivity: Positive metal ions flow through the wire" },
      { text: "Malleability: Covalent bonds stretch and reform; Electrical conductivity: Protons carry the electric charge" },
      { text: "Malleability: Metallic bonds are weak intermolecular attractions; Electrical conductivity: Mobile electrons evaporate through the lattice" }
    ],
    correctAnswer: 0,
    explanation: "* In metallic bonding, positive cations are arranged in regular layers. When force is applied, the layers of ions slide over each other while the surrounding delocalised electron cloud continuously maintains the electrostatic bond, preventing fracture (malleability/ductility).\n* Mobile delocalised valence electrons are free to drift through the lattice, carrying thermal energy and electric current efficiently in both solid and molten phases.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q11",
    createdAt: "2026-05-21T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l5_lv3_2-2026",
    question: "Why does graphite conduct electricity whereas diamond is an electrical insulator, even though both substances are pure allotropic forms of elemental carbon?",
    options: [
      { text: "In graphite, each carbon atom forms only 3 covalent bonds with neighbouring atoms, leaving 1 unbonded valence electron per atom that becomes delocalised and free to move throughout the layers; in diamond, all 4 outer electrons form localized single covalent bonds with no mobile charge carriers" },
      { text: "Graphite has charged carbon ions ($C^{4+}$) while diamond has neutral atoms" },
      { text: "Diamond absorbs electrical current and converts it entirely into heat energy" },
      { text: "Graphite forms temporary ionic bonds when connected to an electrical circuit" }
    ],
    correctAnswer: 0,
    explanation: "* Carbon has 4 valence electrons.\n* In graphite, $sp^2$ hybridization means each carbon bonds to 3 others in planar hexagonal rings. The fourth valence electron is delocalised over the layer, enabling electrical conductivity.\n* In diamond, $sp^3$ hybridization bonds each carbon to 4 others tetrahedrally, fixing all electrons in localised $\\sigma$-bonds with zero electrical conductivity.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q12",
    createdAt: "2026-05-21T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l5_lv3_3-2023",
    question: "Graphene is a single, two-dimensional sheet of carbon atoms. Which statement about the properties and structure of graphene is correct?",
    options: [
      { text: "It consists of carbon atoms arranged tetrahedrally, making it an electrical insulator" },
      { text: "It consists of a single hexagonal layer of carbon atoms, each bonded to 3 others, providing exceptional tensile strength and high electrical conductivity" },
      { text: "It has a simple molecular formula with weak intermolecular forces" },
      { text: "It is an ionic lattice of $C^{4+}$ and $C^{4-}$ ions" }
    ],
    correctAnswer: 1,
    explanation: "* Graphene is a single two-dimensional layer of graphite.\n* Each carbon atom is bonded to 3 others by strong covalent bonds in a hexagonal lattice, with one delocalised electron per carbon atom, giving it remarkable electrical conductivity, thermal conductivity, and tensile strength.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2023 Paper 23 Q11",
    lessonNum: 5,
    createdAt: "2023-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l5_lv3_4-2024",
    question: "Buckminsterfullerene ($C_{60}$) is an allotrope of carbon with simple molecular structure. Why does $C_{60}$ have a much lower melting point than diamond or graphite?",
    options: [
      { text: "The covalent bonds inside each $C_{60}$ cage molecule are very weak" },
      { text: "Melting $C_{60}$ requires overcoming only weak intermolecular attractions between individual $C_{60}$ molecules, whereas melting diamond or graphite requires breaking strong covalent bonds throughout a giant lattice" },
      { text: "$C_{60}$ contains metallic bonds that melt at room temperature" },
      { text: "$C_{60}$ decomposes spontaneously into methane gas" }
    ],
    correctAnswer: 1,
    explanation: "* Buckminsterfullerene ($C_{60}$) consists of discrete ball-shaped molecules containing 60 carbon atoms.\n* While bonds inside each cage are strong covalent bonds, individual $C_{60}$ cages are held together only by weak intermolecular forces, which are easily overcome at moderate temperatures (~280 °C sublimation).",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2024 Paper 23 Q11",
    lessonNum: 5,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l5_lv3_5-2025",
    question: "Silicon(IV) oxide ($SiO_2$) and diamond have similar giant covalent structures. In $SiO_2$, what is the ratio of silicon atoms to oxygen atoms, and how many bonds does each atom form?",
    options: [
      { text: "Each Si atom is bonded to 4 O atoms; each O atom is bonded to 2 Si atoms; ratio is 1:2" },
      { text: "Each Si atom is bonded to 2 O atoms; each O atom is bonded to 1 Si atom; ratio is 1:2" },
      { text: "Each Si atom is bonded to 4 O atoms; each O atom is bonded to 4 Si atoms; ratio is 1:1" },
      { text: "Each Si atom is bonded to 6 O atoms; each O atom is bonded to 3 Si atoms; ratio is 2:1" }
    ],
    correctAnswer: 0,
    explanation: "* In the giant macromolecular lattice of silica ($SiO_2$), each silicon atom is tetrahedrally bonded to 4 oxygen atoms.\n* Each oxygen atom is bonded to 2 silicon atoms.\n* This $4:2$ coordination ratio reduces to the empirical formula $SiO_2$ (1:2 ratio).",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / June 2025 Paper 21 Q12",
    lessonNum: 5,
    createdAt: "2025-06-01T10:00:00Z"
  }
];

