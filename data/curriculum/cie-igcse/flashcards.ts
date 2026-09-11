import { Flashcard } from '../edexcel-alevel/flashcards';

export const cieIgcseFlashcards: Flashcard[] = [
    // Unit 1 IGCSE - Lesson 1: States of Matter & Kinetic Theory
    {
        id: 'cie-u1-l1-1',
        unitNum: 1,
        lessonNum: 1,
        category: 'States of Matter',
        question: 'What happens to particle movement and arrangement during Melting?',
        answer: 'Particles gain kinetic energy, vibrate faster, overcome attractive forces, and move past one another in a random liquid arrangement.',
        examinerTip: 'Always state that kinetic energy increases and attractive forces are partially broken.'
    },
    {
        id: 'cie-u1-l1-2',
        unitNum: 1,
        lessonNum: 1,
        category: 'Diffusion',
        question: 'How does Molecular Mass ($M_r$) affect the Rate of Diffusion of a gas?',
        answer: 'Gases with LOWER $M_r$ diffuse FASTER because their particles move at higher average speeds.',
        examinerTip: 'Classic exam comparison: $NH_3$ ($M_r = 17$) diffuses faster than $HCl$ ($M_r = 36.5$).'
    },

    // Unit 1 IGCSE - Lesson 2: Atoms, Elements & Compounds
    {
        id: 'cie-u1-l2-1',
        unitNum: 1,
        lessonNum: 2,
        category: 'Atomic Structure',
        question: 'Define Isotopes.',
        answer: 'Atoms of the same element with the same number of protons but a different number of neutrons.',
        examinerTip: 'Must mention "same element" and "different number of neutrons" for full marks.'
    },
    {
        id: 'cie-u1-l2-2',
        unitNum: 1,
        lessonNum: 2,
        category: 'Atomic Structure',
        question: 'What is the relative mass and charge of a Neutron?',
        answer: 'Relative mass = 1, Relative charge = 0 (neutral).',
        examinerTip: 'Protons: mass 1, charge +1. Electrons: mass 1/1840, charge -1.'
    },

    // Unit 1 IGCSE - Lesson 3: Bonding & Structure
    {
        id: 'cie-u1-l3-1',
        unitNum: 1,
        lessonNum: 3,
        category: 'Ionic Bonding',
        question: 'Describe Ionic Bonding.',
        answer: 'The strong electrostatic attraction between oppositely charged ions.',
        examinerTip: 'Formed by transfer of electrons from a metal atom to a non-metal atom.'
    },
    {
        id: 'cie-u1-l3-2',
        unitNum: 1,
        lessonNum: 3,
        category: 'Covalent Bonding',
        question: 'Why do Simple Covalent Molecules have low melting points?',
        answer: 'They have weak intermolecular forces between molecules which require little thermal energy to overcome.',
        examinerTip: 'Do NOT say covalent bonds break when melting; only weak intermolecular forces break!'
    },

    // Unit 1 IGCSE - Lesson 4: Stoichiometry & Formulae
    {
        id: 'cie-u1-l4-1',
        unitNum: 1,
        lessonNum: 4,
        category: 'Stoichiometry',
        question: 'What is the formula for calculating Moles from Mass?',
        answer: '$\\text{Moles} = \\frac{\\text{Mass (g)}}{\\text{Relative Formula Mass } (M_r)}$',
        examinerTip: 'Always check if mass is given in grams or kilograms.'
    },
    {
        id: 'cie-u1-l4-2',
        unitNum: 1,
        lessonNum: 4,
        category: 'Gas Volumes',
        question: 'What volume is occupied by 1 mole of any gas at RTP in IGCSE?',
        answer: '$24 \\text{ dm}^3$ (or $24,000 \\text{ cm}^3$).',
        examinerTip: 'Formula: $\\text{Volume} = \\text{Moles} \\times 24 \\text{ dm}^3$.'
    },

    // Unit 2 IGCSE - Lesson 1: Electrochemistry & Electrolysis
    {
        id: 'cie-u2-l1-1',
        unitNum: 2,
        lessonNum: 1,
        category: 'Electrochemistry',
        question: 'What product is formed at the Cathode during electrolysis of Molten Lead(II) Bromide ($PbBr_2$)?',
        answer: 'Lead metal ($Pb$). Equation: $Pb^{2+} + 2e^- \\rightarrow Pb$.',
        examinerTip: 'Reduction always occurs at the Cathode (gain of electrons).'
    },
    {
        id: 'cie-u2-l1-2',
        unitNum: 2,
        lessonNum: 1,
        category: 'Electrochemistry',
        question: 'In aqueous electrolysis, when is Hydrogen gas ($H_2$) discharged at the cathode instead of a metal?',
        answer: 'When the metal is MORE reactive than Hydrogen (e.g. $Na^+$, $K^+$, $Mg^{2+}$).',
        examinerTip: 'The less reactive element is discharged preferentially at the cathode.'
    },

    // Unit 2 IGCSE - Lesson 2: Chemical Energetics
    {
        id: 'cie-u2-l2-1',
        unitNum: 2,
        lessonNum: 2,
        category: 'Energetics',
        question: 'Define an Exothermic Reaction.',
        answer: 'A reaction that releases thermal energy to the surroundings, causing a temperature INCREASE (negative $\\Delta H$).',
        examinerTip: 'Bond breaking is endothermic; bond forming is exothermic.'
    },

    // Unit 2 IGCSE - Lesson 3: Rates of Reaction
    {
        id: 'cie-u2-l3-1',
        unitNum: 2,
        lessonNum: 3,
        category: 'Rates of Reaction',
        question: 'How does increasing Temperature increase the Rate of Reaction according to Collision Theory?',
        answer: 'Particles gain kinetic energy, move faster, collide more frequently, AND a higher proportion of collisions have energy $\\ge E_a$.',
        examinerTip: 'Always mention BOTH higher collision frequency and activation energy proportion.'
    },

    // Unit 2 IGCSE - Lesson 4: Reversible Reactions & Equilibrium
    {
        id: 'cie-u2-l4-1',
        unitNum: 2,
        lessonNum: 4,
        category: 'Equilibrium',
        question: 'What is Le Chatelier\'s Principle?',
        answer: 'If a change in conditions is applied to a reversible reaction at equilibrium, the position of equilibrium shifts to counteract that change.',
        examinerTip: 'Increasing pressure shifts equilibrium to the side with FEWER gas moles.'
    },

    // Unit 2 IGCSE - Lesson 5: Redox Reactions
    {
        id: 'cie-u2-l5-1',
        unitNum: 2,
        lessonNum: 5,
        category: 'Redox',
        question: 'Define Oxidation in terms of Electron Transfer and Oxidation Number.',
        answer: 'Oxidation is the LOSS of electrons (OIL) and an INCREASE in oxidation number.',
        examinerTip: 'Remember: OIL RIG (Oxidation Is Loss, Reduction Is Gain).'
    }
];
