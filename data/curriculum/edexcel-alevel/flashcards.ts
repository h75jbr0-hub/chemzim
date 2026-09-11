export interface Flashcard {
    id: string;
    question: string;
    answer: string;
    category?: string;
    topicId?: string;
    unitNum?: number;
    lessonNum?: number;
    difficulty?: 'easy' | 'medium' | 'hard';
    examinerTip?: string;
}

export const edexcelAlevelFlashcards: Flashcard[] = [
    // Unit 1 - Topic 1: Formulae, Equations and Amount of Substance (Lesson 1)
    {
        id: 'ed-u1-l1-1',
        unitNum: 1,
        lessonNum: 1,
        category: 'Moles & Avogadro',
        question: 'What is Avogadro\'s Constant ($N_A$) value and unit?',
        answer: '$6.02 \\times 10^{23} \\text{ mol}^{-1}$',
        examinerTip: 'It represents the exact number of elementary particles in one mole of any substance.'
    },
    {
        id: 'ed-u1-l1-2',
        unitNum: 1,
        lessonNum: 1,
        category: 'Moles & Avogadro',
        question: 'Define the Mole ($n$).',
        answer: 'The amount of substance containing the same number of elementary particles as there are atoms in exactly $12\\text{ g}$ of Carbon-12.',
        examinerTip: 'Moles = Mass / Molar Mass ($n = m / M_r$).'
    },
    {
        id: 'ed-u1-l1-3',
        unitNum: 1,
        lessonNum: 1,
        category: 'Moles & Avogadro',
        question: 'Define Relative Atomic Mass ($A_r$).',
        answer: 'The weighted average mass of an atom of an element relative to 1/12th the mass of an atom of Carbon-12.',
        examinerTip: 'Always include "weighted average mass" and reference Carbon-12.'
    },
    {
        id: 'ed-u1-l1-4',
        unitNum: 1,
        lessonNum: 1,
        category: 'Relative Masses',
        question: 'Why is Carbon-12 ($^{12}\\text{C}$) used as the international reference standard for atomic masses?',
        answer: 'Because it has a stable abundance and its relative mass is defined as exactly 12.000.',
        examinerTip: 'All relative atomic and molecular masses are dimensionless ratios compared to 1/12th of Carbon-12.'
    },
    {
        id: 'ed-u1-l1-5',
        unitNum: 1,
        lessonNum: 1,
        category: 'Relative Masses',
        question: 'Define Relative Molecular Mass ($M_r$).',
        answer: 'The weighted average mass of a molecule compared to 1/12th the mass of an atom of Carbon-12.',
        examinerTip: 'Used for simple covalent molecules like $\\text{H}_2\\text{O}$ and $\\text{CO}_2$.'
    },
    {
        id: 'ed-u1-l1-6',
        unitNum: 1,
        lessonNum: 1,
        category: 'Relative Masses',
        question: 'Define Relative Formula Mass ($M_r$).',
        answer: 'The sum of the relative atomic masses of atoms in a formula unit of an ionic compound.',
        examinerTip: 'Used for ionic networks like $\\text{NaCl}$ where discrete molecules do not exist.'
    },
    {
        id: 'ed-u1-l1-7',
        unitNum: 1,
        lessonNum: 1,
        category: 'Relative Masses',
        question: 'What is Molar Mass ($M$) and its SI unit?',
        answer: 'The mass of one mole of a substance, expressed in $\\text{g mol}^{-1}$.',
        examinerTip: 'Molar mass has units ($\\text{g mol}^{-1}$), whereas $A_r$ and $M_r$ are unitless ratios.'
    },
    {
        id: 'ed-u1-l1-8',
        unitNum: 1,
        lessonNum: 1,
        category: 'Ionic Equations',
        question: 'What are Spectator Ions in an ionic equation?',
        answer: 'Ions that exist in the same state on both reactant and product sides without taking part in the chemical reaction.',
        examinerTip: 'Always omit spectator ions when writing a net ionic equation.'
    },
    {
        id: 'ed-u1-l1-9',
        unitNum: 1,
        lessonNum: 1,
        category: 'Ionic Equations',
        question: 'What is the net ionic equation for strong acid-alkali neutralization?',
        answer: '$\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(l)}$',
        examinerTip: 'State symbols $(\\text{aq})$ and $(\\text{l})$ are mandatory in ionic equations.'
    },
    {
        id: 'ed-u1-l1-10',
        unitNum: 1,
        lessonNum: 1,
        category: 'Empirical Formula',
        question: 'Define Empirical Formula.',
        answer: 'The simplest whole-number ratio of atoms of each element in a compound.',
        examinerTip: 'Calculate by dividing mass/percentage by Ar, then dividing by smallest mole value.'
    },
    {
        id: 'ed-u1-l1-11',
        unitNum: 1,
        lessonNum: 1,
        category: 'Empirical Formula',
        question: 'Define Molecular Formula.',
        answer: 'The actual number of atoms of each element present in one molecule of a compound.',
        examinerTip: '$\\text{Molecular Formula} = k \\times (\\text{Empirical Formula})$, where $k = M_r / \\text{Empirical Mass}$.'
    },
    {
        id: 'ed-u1-l1-12',
        unitNum: 1,
        lessonNum: 1,
        category: 'Hydrated Salts',
        question: 'What is Water of Crystallization?',
        answer: 'Water molecules chemically bonded into the crystalline structure of a hydrated salt.',
        examinerTip: 'Heating to constant mass removes all water of crystallization to form the anhydrous salt.'
    },
    {
        id: 'ed-u1-l1-13',
        unitNum: 1,
        lessonNum: 1,
        category: 'Hydrated Salts',
        question: 'Distinguish between Hydrated and Anhydrous salts.',
        answer: 'Hydrated salts contain water of crystallization in their lattice, whereas anhydrous salts have lost all water.',
        examinerTip: 'Hydrated copper(II) sulfate is blue ($\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$); anhydrous is white ($\\text{CuSO}_4$).'
    },
    {
        id: 'ed-u1-l1-14',
        unitNum: 1,
        lessonNum: 1,
        category: 'Acids & Salts',
        question: 'What are the products of an Acid + Metal Carbonate reaction?',
        answer: '$\\text{Salt} + \\text{Water} + \\text{Carbon Dioxide}$',
        examinerTip: 'Effervescence (bubbling) indicates carbon dioxide gas evolution.'
    },
    {
        id: 'ed-u1-l1-15',
        unitNum: 1,
        lessonNum: 1,
        category: 'Acids & Salts',
        question: 'What are the products of an Acid + Reactive Metal reaction?',
        answer: '$\\text{Salt} + \\text{Hydrogen Gas}$',
        examinerTip: 'Hydrogen gas is tested with a burning splint (squeaky pop test).'
    },
    {
        id: 'ed-u1-l1-16',
        unitNum: 1,
        lessonNum: 1,
        category: 'Salts Preparation',
        question: 'Why is excess insoluble metal oxide added when preparing a soluble salt from acid?',
        answer: 'To ensure all the acid is completely neutralized and reacted.',
        examinerTip: 'The excess insoluble solid is removed by filtration before crystallization.'
    },
    {
        id: 'ed-u1-l1-17',
        unitNum: 1,
        lessonNum: 1,
        category: 'Solutions & Concentrations',
        question: 'What is the formula for Concentration in $\\text{mol dm}^{-3}$?',
        answer: '$\\text{Concentration} = \\frac{\\text{Moles (mol)}}{\\text{Volume (dm}^3\\text{)}}$',
        examinerTip: 'To convert $\\text{cm}^3$ to $\\text{dm}^3$, divide by 1000.'
    },
    {
        id: 'ed-u1-l1-18',
        unitNum: 1,
        lessonNum: 1,
        category: 'Solutions & Concentrations',
        question: 'What is a Standard Solution in volumetric analysis?',
        answer: 'A solution of accurately known concentration.',
        examinerTip: 'Prepared by dissolving a known mass of solute in a volumetric flask.'
    },
    {
        id: 'ed-u1-l1-19',
        unitNum: 1,
        lessonNum: 1,
        category: 'Gas Volumes',
        question: 'What is the Molar Gas Volume ($V_m$) at Room Temperature and Pressure (RTP)?',
        answer: '$24.0 \\text{ dm}^3 \\text{ mol}^{-1}$ (or $24,000 \\text{ cm}^3 \\text{ mol}^{-1}$).',
        examinerTip: 'One mole of any gas occupies $24.0 \\text{ dm}^3$ at $298\\text{ K}$ and $101\\text{ kPa}$.'
    },
    {
        id: 'ed-u1-l1-20',
        unitNum: 1,
        lessonNum: 1,
        category: 'Ideal Gas Law',
        question: 'What is the Ideal Gas Equation and its SI units?',
        answer: '$PV = nRT$ (where $P$ is in Pa, $V$ in $\\text{m}^3$, $T$ in Kelvin).',
        examinerTip: 'Critical unit conversions: $1 \\text{ m}^3 = 1000 \\text{ dm}^3$ and $T(\\text{K}) = \\text{°C} + 273$.'
    },
    {
        id: 'ed-u1-l1-21',
        unitNum: 1,
        lessonNum: 1,
        category: 'Yield & Atom Economy',
        question: 'How is Percentage Yield calculated?',
        answer: '$\\text{\\% Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100$',
        examinerTip: 'Yield is affected by incomplete reactions, side reactions, or product loss during purification.'
    },
    {
        id: 'ed-u1-l1-22',
        unitNum: 1,
        lessonNum: 1,
        category: 'Yield & Atom Economy',
        question: 'How is Atom Economy calculated and why is high atom economy desirable?',
        answer: '$\\text{\\% Atom Economy} = \\frac{\\text{Molar Mass of Desired Product}}{\\text{Total Molar Mass of All Reactants}} \\times 100$. High atom economy minimizes industrial waste.',
        examinerTip: 'Addition reactions have $100\\%$ atom economy because only one product is formed.'
    },
    {
        id: 'ed-u1-l1-23',
        unitNum: 1,
        lessonNum: 1,
        category: 'Uncertainty',
        question: 'How do you calculate Percentage Uncertainty of a burette reading (2 readings)?',
        answer: '$\\text{\\% Uncertainty} = \\frac{2 \\times \\text{Uncertainty of Equipment}}{\\text{Measured Volume}} \\times 100$',
        examinerTip: 'Burettes require 2 readings (initial & final), so double the equipment uncertainty.'
    },

    // Unit 1 - Topic 2: Atomic Structure & The Periodic Table (Lesson 2)
    {
        id: 'ed-u1-l2-1',
        unitNum: 1,
        lessonNum: 2,
        category: 'Atomic Structure',
        question: 'What are the relative mass and relative charge of a Proton, Neutron, and Electron?',
        answer: 'Proton: mass = $1$, charge = $+1$. Neutron: mass = $1$, charge = $0$. Electron: mass = $1/1840$, charge = $-1$.',
        examinerTip: 'Protons and neutrons form the central nucleus; electrons orbit in outer shells.'
    },
    {
        id: 'ed-u1-l2-2',
        unitNum: 1,
        lessonNum: 2,
        category: 'Atomic Structure',
        question: 'Define Atomic Number ($Z$) and Mass Number ($A$).',
        answer: 'Atomic number ($Z$) is the number of protons in the nucleus. Mass number ($A$) is the total number of protons and neutrons.',
        examinerTip: 'Atomic number uniquely identifies an element. Mass number is always a whole integer.'
    },
    {
        id: 'ed-u1-l2-3',
        unitNum: 1,
        lessonNum: 2,
        category: 'Isotopes',
        question: 'Define Isotopes and explain why they share identical chemical properties.',
        answer: 'Atoms of the same element with the same number of protons but different numbers of neutrons. They share identical chemical properties because they have the same electronic configuration.',
        examinerTip: 'Physical properties (density, rate of diffusion) differ slightly due to different atomic masses.'
    },
    {
        id: 'ed-u1-l2-4',
        unitNum: 1,
        lessonNum: 2,
        category: 'Isotopes',
        question: 'Define Relative Isotopic Mass.',
        answer: 'The mass of an atom of an isotope relative to 1/12th the mass of an atom of Carbon-12.',
        examinerTip: 'Applies to a specific individual isotope (e.g., Chlorine-35 vs Chlorine-37).'
    },
    {
        id: 'ed-u1-l2-5',
        unitNum: 1,
        lessonNum: 2,
        category: 'Mass Spectrometry',
        question: 'What are the 5 main stages of Time of Flight (TOF) Mass Spectrometry?',
        answer: '1. Vaporization, 2. Ionization, 3. Acceleration, 4. Ion Drift (Flight Tube), 5. Detection.',
        examinerTip: 'All ions are accelerated to have the same kinetic energy ($KE = \\frac{1}{2}mv^2$).'
    },
    {
        id: 'ed-u1-l2-6',
        unitNum: 1,
        lessonNum: 2,
        category: 'Mass Spectrometry',
        question: 'What equation represents Electron Impact Ionization in Mass Spectrometry?',
        answer: '$X\\text{(g)} + e^- \\rightarrow X^+\\text{(g)} + 2e^-$',
        examinerTip: 'Used for elements and low mass organic compounds; high-energy electrons knock off an electron, which can cause fragmentation.'
    },
    {
        id: 'ed-u1-l2-7',
        unitNum: 1,
        lessonNum: 2,
        category: 'Mass Spectrometry',
        question: 'What equation represents Electrospray Ionization in Mass Spectrometry?',
        answer: '$X\\text{(g)} + \\text{H}^+ \\rightarrow X\\text{H}^+\\text{(g)}$',
        examinerTip: 'A soft ionization technique used for large biological molecules; adds a proton, giving a peak at $M_r + 1$.'
    },
    {
        id: 'ed-u1-l2-8',
        unitNum: 1,
        lessonNum: 2,
        category: 'Mass Spectrometry',
        question: 'How does ion mass ($m$) affect the time of flight ($t$) in a TOF mass spectrometer?',
        answer: 'All ions gain identical kinetic energy ($KE$), so lighter ions ($m/z$) travel faster and reach the detector in a shorter time ($t \\propto \\sqrt{m}$).',
        examinerTip: '$KE = \\frac{1}{2}m v^2 \\implies v = \\sqrt{\\frac{2KE}{m}}$.'
    },
    {
        id: 'ed-u1-l2-9',
        unitNum: 1,
        lessonNum: 2,
        category: 'Mass Spectrometry',
        question: 'How is Relative Atomic Mass ($A_r$) calculated from a mass spectrum?',
        answer: '$A_r = \\frac{\\sum (\\text{Isotopic Mass} \\times \\text{Abundance})}{\\sum \\text{Total Abundance}}$',
        examinerTip: 'Total abundance can be percentages (summing to 100) or relative peak heights.'
    },
    {
        id: 'ed-u1-l2-10',
        unitNum: 1,
        lessonNum: 2,
        category: 'Electronic Configuration',
        question: 'Define an Atomic Orbital.',
        answer: 'A region of space around the nucleus that can hold up to two electrons with opposite spins.',
        examinerTip: 'Opposite spins (Pauli Exclusion Principle) minimize electrostatic repulsion between electrons in the same orbital.'
    },
    {
        id: 'ed-u1-l2-11',
        unitNum: 1,
        lessonNum: 2,
        category: 'Electronic Configuration',
        question: 'Describe the 3D shapes of an $s$ orbital and a $p$ orbital.',
        answer: 'An $s$ orbital is spherical. A $p$ orbital has a dumbbell shape (oriented along the x, y, or z axis).',
        examinerTip: '$s$ subshells contain 1 orbital; $p$ subshells contain 3 degenerate orbitals ($p_x, p_y, p_z$).'
    },
    {
        id: 'ed-u1-l2-12',
        unitNum: 1,
        lessonNum: 2,
        category: 'Electronic Configuration',
        question: 'How many electrons can be held in $s$, $p$, $d$, and $f$ subshells?',
        answer: '$s = 2$, $p = 6$, $d = 10$, $f = 14$ electrons.',
        examinerTip: 'Number of orbitals per subshell = $1, 3, 5, 7$; each orbital holds 2 electrons.'
    },
    {
        id: 'ed-u1-l2-13',
        unitNum: 1,
        lessonNum: 2,
        category: 'Electronic Configuration',
        question: 'What is the filling order of subshells up to $4p$?',
        answer: '$1s^2 \\ 2s^2 \\ 2p^6 \\ 3s^2 \\ 3p^6 \\ 4s^2 \\ 3d^{10} \\ 4p^6$',
        examinerTip: '$4s$ subshell fills BEFORE $3d$ because $4s$ is at a lower energy level than $3d$ in uncharged atoms.'
    },
    {
        id: 'ed-u1-l2-14',
        unitNum: 1,
        lessonNum: 2,
        category: 'Electronic Configuration',
        question: 'What are the electronic configurations of Chromium ($\\text{Cr}, Z=24$) and Copper ($\\text{Cu}, Z=29$)?',
        answer: 'Chromium: $[\\text{Ar}] 4s^1 3d^5$. Copper: $[\\text{Ar}] 4s^1 3d^{10}$.',
        examinerTip: 'Half-filled ($3d^5$) and fully-filled ($3d^{10}$) subshells provide extra stability.'
    },
    {
        id: 'ed-u1-l2-15',
        unitNum: 1,
        lessonNum: 2,
        category: 'Electronic Configuration',
        question: 'Which electrons are lost first when a transition metal forms a cation?',
        answer: 'The $4s$ electrons are lost BEFORE the $3d$ electrons (e.g. $\\text{Fe}^{2+}$ is $[\\text{Ar}] 3d^6$, NOT $[\\text{Ar}] 4s^2 3d^4$).',
        examinerTip: 'Once filled, $3d$ electrons repel $4s$, pushing $4s$ to a higher energy level.'
    },
    {
        id: 'ed-u1-l2-16',
        unitNum: 1,
        lessonNum: 2,
        category: 'Ionization Energy',
        question: 'Define First Ionization Energy ($\\text{IE}_1$) and write its general equation.',
        answer: 'The energy required to remove 1 mole of electrons from 1 mole of gaseous atoms to form 1 mole of gaseous $1+$ ions: $X\\text{(g)} \\rightarrow X^+\\text{(g)} + e^-$.',
        examinerTip: 'Always include state symbols $(\\text{g})$ on both sides.'
    },
    {
        id: 'ed-u1-l2-17',
        unitNum: 1,
        lessonNum: 2,
        category: 'Ionization Energy',
        question: 'What three factors determine the magnitude of First Ionization Energy?',
        answer: '1. Nuclear charge (proton count), 2. Atomic radius (distance to outer shell), 3. Shielding effect by inner shells.',
        examinerTip: 'Increased nuclear charge increases attraction; increased radius and shielding decrease attraction.'
    },
    {
        id: 'ed-u1-l2-18',
        unitNum: 1,
        lessonNum: 2,
        category: 'Ionization Energy',
        question: 'What is the general trend in First Ionization Energy across Period 3 (Na to Ar) and why?',
        answer: 'General INCREASE. Nuclear charge increases while shielding remains roughly constant, pulling outer electrons closer.',
        examinerTip: 'Note the two dips at Aluminium (Group 3) and Sulfur (Group 6).'
    },
    {
        id: 'ed-u1-l2-19',
        unitNum: 1,
        lessonNum: 2,
        category: 'Ionization Energy',
        question: 'Why is the First Ionization Energy of Aluminium lower than Magnesium?',
        answer: 'Aluminium\'s outer electron is in a $3p$ orbital, which is higher in energy and shielded by the filled $3s^2$ subshell.',
        examinerTip: '$3p$ electron is further from the nucleus and easier to remove than a $3s$ electron.'
    },
    {
        id: 'ed-u1-l2-20',
        unitNum: 1,
        lessonNum: 2,
        category: 'Ionization Energy',
        question: 'Why is the First Ionization Energy of Sulfur lower than Phosphorus?',
        answer: 'Sulfur has a paired electron in one of its $3p$ orbitals ($\\uparrow\\downarrow$). Spin pair repulsion makes this electron easier to remove.',
        examinerTip: 'Phosphorus has singly occupied $3p$ orbitals ($\\uparrow \\ \\uparrow \\ \\uparrow$).'
    },
    {
        id: 'ed-u1-l2-21',
        unitNum: 1,
        lessonNum: 2,
        category: 'Ionization Energy',
        question: 'What is the trend in First Ionization Energy down Group 2 (Be to Ba) and why?',
        answer: 'DECREASES down the group. Atomic radius and inner shell shielding increase, overriding the increase in nuclear charge.',
        examinerTip: 'Outer electrons are further from nucleus and experience weaker electrostatic attraction.'
    },
    {
        id: 'ed-u1-l2-22',
        unitNum: 1,
        lessonNum: 2,
        category: 'Ionization Energy',
        question: 'How do successive ionization energy values provide evidence for electron shells?',
        answer: 'Large jumps between successive ionization energies indicate the removal of an electron from a new inner shell closer to the nucleus.',
        examinerTip: 'Count electrons removed BEFORE the first major jump to determine the element\'s group number.'
    },

    // Unit 1 - Topic 3: Bonding & Structure (Lesson 3)
    {
        id: 'ed-u1-l3-1',
        unitNum: 1,
        lessonNum: 3,
        category: 'Valency & Naming',
        question: 'What is Valency and how is it determined for main group elements?',
        answer: 'Valency is the combining power of an atom (number of bonds it can form). Groups I-IV valency = group number; Groups V-VII valency = 8 - group number.',
        examinerTip: 'Transition metals show variable valencies indicated by Roman numerals e.g. Iron(III) = valency 3.'
    },
    {
        id: 'ed-u1-l3-2',
        unitNum: 1,
        lessonNum: 3,
        category: 'Valency & Naming',
        question: 'What do chemical name suffixes -ide and -ate indicate?',
        answer: '-ide indicates a binary compound of two elements (e.g. Sodium chloride). -ate indicates a polyatomic anion containing oxygen (e.g. Calcium carbonate).',
        examinerTip: 'Prefixes mono-, di-, tri- specify atom counts in simple covalent molecules (e.g. Carbon dioxide).'
    },
    {
        id: 'ed-u1-l3-3',
        unitNum: 1,
        lessonNum: 3,
        category: 'Ionic Bonding',
        question: 'Define Ionic Bonding.',
        answer: 'The strong electrostatic attraction between oppositely charged ions formed by electron transfer.',
        examinerTip: 'Ionic bond strength increases with higher ionic charges and smaller ionic radii.'
    },
    {
        id: 'ed-u1-l3-4',
        unitNum: 1,
        lessonNum: 3,
        category: 'Ionic Radius',
        question: 'What is the trend in ionic radius across an Isoelectronic Series of ions (e.g. $\\text{N}^{3-}, \\text{O}^{2-}, \\text{F}^-, \\text{Na}^+, \\text{Mg}^{2+}, \\text{Al}^{3+}$)?',
        answer: 'Ionic radius DECREASES as atomic number increases. All have 10 electrons, but increasing proton count pulls electron shells closer.',
        examinerTip: 'Cations are always smaller than their neutral parent atoms; anions are always larger.'
    },
    {
        id: 'ed-u1-l3-5',
        unitNum: 1,
        lessonNum: 3,
        category: 'Ionic Polarization',
        question: 'What factors increase the Polarization of an anion by a cation (Fajans\' Rules)?',
        answer: 'High charge density of cation (small ionic radius & high charge) and high polarizability of anion (large ionic radius & high charge).',
        examinerTip: 'Greater polarization distorts the electron cloud of the anion, introducing covalent character into ionic bonds.'
    },
    {
        id: 'ed-u1-l3-6',
        unitNum: 1,
        lessonNum: 3,
        category: 'Covalent Bonding',
        question: 'Define Covalent Bonding.',
        answer: 'The strong electrostatic attraction between a shared pair of electrons and the nuclei of the bonded atoms.',
        examinerTip: 'Occurs between non-metal atoms.'
    },
    {
        id: 'ed-u1-l3-7',
        unitNum: 1,
        lessonNum: 3,
        category: 'Covalent Bonding',
        question: 'What is a Dative (Coordinate) Covalent Bond?',
        answer: 'A covalent bond in which BOTH shared electrons are provided by the same atom.',
        examinerTip: 'Requires one atom with a lone pair and another with an empty orbital (e.g. $\\text{NH}_4^+$, $\\text{H}_3\\text{O}^+$, $\\text{BF}_3 \\leftarrow \\text{NH}_3$).'
    },
    {
        id: 'ed-u1-l3-8',
        unitNum: 1,
        lessonNum: 3,
        category: 'Metallic Bonding',
        question: 'Define Metallic Bonding and factors affecting its strength.',
        answer: 'Electrostatic attraction between positive metal cations and a delocalized sea of electrons. Strength increases with higher cation charge, smaller cation radius, and more delocalized electrons.',
        examinerTip: 'Aluminum ($1269^\\circ\\text{C}$) has a higher melting point than Sodium ($98^\\circ\\text{C}$) due to $\\text{Al}^{3+}$ vs $\\text{Na}^+$.'
    },
    {
        id: 'ed-u1-l3-9',
        unitNum: 1,
        lessonNum: 3,
        category: 'Shapes of Molecules',
        question: 'What is VSEPR Theory?',
        answer: 'Valence Shell Electron Pair Repulsion theory states that electron pairs around a central atom position themselves as far apart as possible to minimize repulsion.',
        examinerTip: 'Repulsion order: Lone pair - lone pair > lone pair - bonding pair > bonding pair - bonding pair.'
    },
    {
        id: 'ed-u1-l3-10',
        unitNum: 1,
        lessonNum: 3,
        category: 'Shapes of Molecules',
        question: 'What is the shape and bond angle of Carbon Dioxide ($\\text{CO}_2$) and Beryllium Chloride ($\\text{BeCl}_2$)?',
        answer: 'Linear shape with a bond angle of $180^\\circ$ (2 bonding regions, 0 lone pairs).',
        examinerTip: 'Double bonds count as a single region of electron density in VSEPR theory.'
    },
    {
        id: 'ed-u1-l3-11',
        unitNum: 1,
        lessonNum: 3,
        category: 'Shapes of Molecules',
        question: 'What is the shape and bond angle of Boron Trifluoride ($\\text{BF}_3$)?',
        answer: 'Trigonal Planar shape with a bond angle of $120^\\circ$ (3 bonding pairs, 0 lone pairs).',
        examinerTip: 'Boron is electron deficient with only 6 electrons in its outer shell.'
    },
    {
        id: 'ed-u1-l3-12',
        unitNum: 1,
        lessonNum: 3,
        category: 'Shapes of Molecules',
        question: 'What is the shape and bond angle of Methane ($\\text{CH}_4$)?',
        answer: 'Tetrahedral shape with a bond angle of $109.5^\\circ$ (4 bonding pairs, 0 lone pairs).',
        examinerTip: 'Adding 1 lone pair reduces the bond angle by approximately $2.5^\\circ$.'
    },
    {
        id: 'ed-u1-l3-13',
        unitNum: 1,
        lessonNum: 3,
        category: 'Shapes of Molecules',
        question: 'What is the shape and bond angle of Ammonia ($\\text{NH}_3$)?',
        answer: 'Trigonal Pyramidal shape with a bond angle of $107^\\circ$ (3 bonding pairs, 1 lone pair).',
        examinerTip: 'The lone pair repels more strongly than bonding pairs, reducing the angle from $109.5^\\circ$ to $107^\\circ$.'
    },
    {
        id: 'ed-u1-l3-14',
        unitNum: 1,
        lessonNum: 3,
        category: 'Shapes of Molecules',
        question: 'What is the shape and bond angle of Water ($\\text{H}_2\\text{O}$)?',
        answer: 'Non-linear / Bent shape with a bond angle of $104.5^\\circ$ (2 bonding pairs, 2 lone pairs).',
        examinerTip: '2 lone pairs reduce the tetrahedral $109.5^\\circ$ angle by $2 \\times 2.5^\\circ = 5^\\circ$.'
    },
    {
        id: 'ed-u1-l3-15',
        unitNum: 1,
        lessonNum: 3,
        category: 'Shapes of Molecules',
        question: 'What is the shape and bond angles of Sulfur Hexafluoride ($\\text{SF}_6$)?',
        answer: 'Octahedral shape with bond angles of $90^\\circ$ (6 bonding pairs, 0 lone pairs).',
        examinerTip: 'Sulfur expands its octet to hold 12 valence electrons.'
    },
    {
        id: 'ed-u1-l3-16',
        unitNum: 1,
        lessonNum: 3,
        category: 'Electronegativity',
        question: 'Define Electronegativity.',
        answer: 'The power of an atom to attract the electron density in a covalent bond towards itself.',
        examinerTip: 'Fluorine is the most electronegative element; trend increases up and across the Periodic Table.'
    },
    {
        id: 'ed-u1-l3-17',
        unitNum: 1,
        lessonNum: 3,
        category: 'Polarity',
        question: 'Why is Carbon Tetrachloride ($\\text{CCl}_4$) non-polar despite having polar $\\text{C}-\\text{Cl}$ bonds?',
        answer: '$\\text{CCl}_4$ has a symmetrical tetrahedral shape, so individual bond dipoles cancel out, resulting in zero net dipole moment.',
        examinerTip: 'Asymmetrical polar molecules like $\\text{CHCl}_3$ or $\\text{H}_2\\text{O}$ have a permanent net dipole.'
    },
    {
        id: 'ed-u1-l3-18',
        unitNum: 1,
        lessonNum: 3,
        category: 'Giant Lattices',
        question: 'Why are Giant Ionic Lattices brittle?',
        answer: 'When a mechanical force shifts layers of ions, ions of like charges align next to each other. Repulsion between like charges breaks the lattice apart.',
        examinerTip: 'Ionic compounds conduct electricity ONLY when molten or in aqueous solution where ions are free to move.'
    },
    {
        id: 'ed-u1-l3-19',
        unitNum: 1,
        lessonNum: 3,
        category: 'Giant Lattices',
        question: 'Why does Graphite conduct electricity while Diamond does not?',
        answer: 'Graphite has delocalized $\\pi$ electrons free to move along its hexagonal layers (3 bonds per C). Diamond uses all 4 outer electrons in localized single covalent bonds.',
        examinerTip: 'Graphite also acts as a lubricant because weak London forces allow layers to slide.'
    },
    {
        id: 'ed-u1-l3-20',
        unitNum: 1,
        lessonNum: 3,
        category: 'Giant Lattices',
        question: 'What is Graphene and its unique properties?',
        answer: 'A single 2D layer of carbon atoms arranged in a hexagonal honeycomb lattice. It is 1 atom thick, exceptionally strong, lightweight, transparent, and highly conductive.',
        examinerTip: 'Graphene is the fundamental structural element of graphite and carbon nanotubes.'
    },
    {
        id: 'ed-u1-l3-21',
        unitNum: 1,
        lessonNum: 3,
        category: 'Simple Molecular Lattices',
        question: 'Why do Simple Molecular structures (e.g. $\\text{I}_2, \\text{H}_2\\text{O}$) have low melting points?',
        answer: 'Only weak intermolecular forces (London forces / hydrogen bonds) between molecules are broken when melting, requiring little energy. Strong covalent bonds inside molecules remain intact.',
        examinerTip: 'Simple molecular substances do NOT conduct electricity because they have no mobile ions or delocalized electrons.'
    },

    // Unit 1 - Topic 4: Introductory Organic Chemistry & Alkanes (Lesson 4)
    {
        id: 'ed-u1-l4-1',
        unitNum: 1,
        lessonNum: 4,
        category: 'Hazards & Risk',
        question: 'Distinguish between a Hazard and a Risk in organic chemistry experiments.',
        answer: 'A Hazard is the inherent potential of a substance or process to cause harm. A Risk is the likelihood of harm occurring under specific exposure conditions.',
        examinerTip: 'Risk can be reduced by using smaller quantities, fume cupboards, or lower concentrations without changing the hazard.'
    },
    {
        id: 'ed-u1-l4-2',
        unitNum: 1,
        lessonNum: 4,
        category: 'Organic Formulae',
        question: 'Define Empirical, Molecular, Structural, Displayed, and Skeletal formulas.',
        answer: 'Empirical = simplest ratio of atoms; Molecular = actual number of atoms; Structural = shows carbon arrangement; Displayed = shows all atoms & bonds; Skeletal = shows carbon skeleton lines.',
        examinerTip: 'Skeletal formulas omit C and H attached to C, showing carbon vertices and functional groups.'
    },
    {
        id: 'ed-u1-l4-3',
        unitNum: 1,
        lessonNum: 4,
        category: 'Organic Basics',
        question: 'Define a Homologous Series.',
        answer: 'A family of organic compounds with the same functional group, same general formula, similar chemical reactivity, and a gradual trend in physical properties.',
        examinerTip: 'Each consecutive member differs by a $-\\text{CH}_2-$ unit.'
    },
    {
        id: 'ed-u1-l4-4',
        unitNum: 1,
        lessonNum: 4,
        category: 'Nomenclature',
        question: 'State the primary rules for naming branched organic compounds according to IUPAC.',
        answer: '1. Find the longest continuous carbon chain. 2. Number from the end nearest a substituent. 3. List alkyl side-chains alphabetically with locant numbers.',
        examinerTip: 'Di-, tri-, tetra- prefixes do NOT alter alphabetical ordering (e.g. ethyl before dimethyl).'
    },
    {
        id: 'ed-u1-l4-5',
        unitNum: 1,
        lessonNum: 4,
        category: 'Isomerism',
        question: 'Define Structural Isomerism and name its three types.',
        answer: 'Compounds with the same molecular formula but different structural formulas. Types: 1. Chain, 2. Position, 3. Functional Group isomerism.',
        examinerTip: 'Chain isomers have different carbon skeleton branching.'
    },
    {
        id: 'ed-u1-l4-6',
        unitNum: 1,
        lessonNum: 4,
        category: 'Isomerism',
        question: 'Define Functional Group Isomerism and list common functional group isomer pairs.',
        answer: 'Isomers with the same molecular formula but different functional groups. Pairs: Alkenes & Cycloalkanes ($C_n H_{2n}$), Alcohols & Ethers ($C_n H_{2n+2}O$), Carboxylic Acids & Esters ($C_n H_{2n}O_2$).',
        examinerTip: 'Cyclohexane ($C_6H_{12}$) and Hex-1-ene ($C_6H_{12}$) are functional group isomers.'
    },
    {
        id: 'ed-u1-l4-7',
        unitNum: 1,
        lessonNum: 4,
        category: 'Bond Fission',
        question: 'Compare Homolytic Fission and Heterolytic Fission.',
        answer: 'Homolytic: Covalent bond breaks with each atom taking 1 electron $\\rightarrow$ 2 free radicals. Heterolytic: Bond breaks with 1 atom taking both electrons $\\rightarrow$ positive and negative ions.',
        examinerTip: 'Single-headed "fish-hook" arrows represent 1 electron movement; double-headed arrows represent 2 electron movement.'
    },
    {
        id: 'ed-u1-l4-8',
        unitNum: 1,
        lessonNum: 4,
        category: 'Reactions Basics',
        question: 'Distinguish between a Nucleophile and an Electrophile.',
        answer: 'A Nucleophile is an electron-pair donor (e.g. $\\text{OH}^-$, $\\text{NH}_3$). An Electrophile is an electron-pair acceptor (e.g. $\\text{H}^+$, $\\text{NO}_2^+$, $\\text{Br}^{\\delta+}$).',
        examinerTip: 'Nucleophiles attack electron-deficient carbon centers; electrophiles attack electron-rich $C=C$ bonds.'
    },
    {
        id: 'ed-u1-l4-9',
        unitNum: 1,
        lessonNum: 4,
        category: 'Alkanes Properties',
        question: 'How does carbon chain length and branching affect alkane boiling points?',
        answer: 'Longer chains increase boiling points (larger surface area for London forces). Branching decreases boiling points (spherical shape reduces surface contact area).',
        examinerTip: 'Pentane ($36^\\circ\\text{C}$) > 2-Methylbutane ($28^\\circ\\text{C}$) > 2,2-Dimethylpropane ($10^\\circ\\text{C}$).'
    },
    {
        id: 'ed-u1-l4-10',
        unitNum: 1,
        lessonNum: 4,
        category: 'Crude Oil',
        question: 'Explain how Fractional Distillation separates crude oil components.',
        answer: 'Crude oil is vaporized and fed into a fractionating column (hot at bottom, cool at top). Hydrocarbons condense at different heights according to their boiling points.',
        examinerTip: 'Short-chain hydrocarbons have lower boiling points and emerge near the top.'
    },
    {
        id: 'ed-u1-l4-11',
        unitNum: 1,
        lessonNum: 4,
        category: 'Crude Oil',
        question: 'Compare Thermal Cracking and Catalytic Cracking conditions and products.',
        answer: 'Thermal: high temp ($1000^\\circ\\text{C}$) & high pressure $\\rightarrow$ high yield of alkenes. Catalytic: moderate temp ($450^\\circ\\text{C}$), zeolite catalyst $\\rightarrow$ branched alkanes, cycloalkanes & aromatics.',
        examinerTip: 'Cracking breaks strong $C-C$ $\\sigma$ bonds in long-chain alkanes.'
    },
    {
        id: 'ed-u1-l4-12',
        unitNum: 1,
        lessonNum: 4,
        category: 'Combustion',
        question: 'Why is Carbon Monoxide ($CO$) a dangerous pollutant produced during incomplete combustion?',
        answer: 'It is a toxic, colorless, odorless gas that binds irreversibly to hemoglobin, reducing oxygen transport in the blood.',
        examinerTip: 'Incomplete combustion occurs when oxygen supply is limited.'
    },
    {
        id: 'ed-u1-l4-13',
        unitNum: 1,
        lessonNum: 4,
        category: 'Pollution',
        question: 'How are Nitrogen Oxides ($NO_x$) formed in car engines and why are they harmful?',
        answer: 'Extreme spark temperatures cause atmospheric $\\text{N}_2$ and $\\text{O}_2$ to react ($N_2 + O_2 \\rightarrow 2NO$). $NO_x$ causes acid rain and photochemical smog.',
        examinerTip: 'Catalytic converters remove $NO$ via $2\\text{CO} + 2\\text{NO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$.'
    },
    {
        id: 'ed-u1-l4-14',
        unitNum: 1,
        lessonNum: 4,
        category: 'Free Radical Substitution',
        question: 'What is a Free Radical and how is it formed?',
        answer: 'A species with an unpaired electron, formed by homolytic fission of a covalent bond.',
        examinerTip: 'Represented with a dot (e.g. $\\text{Cl}^\\bullet$).'
    },
    {
        id: 'ed-u1-l4-15',
        unitNum: 1,
        lessonNum: 4,
        category: 'Free Radical Substitution',
        question: 'Write the Initiation step equation for the reaction of Methane with Chlorine.',
        answer: '$\\text{Cl}_2 \\xrightarrow{\\text{UV light}} 2\\text{Cl}^\\bullet$',
        examinerTip: 'UV light provides energy required to break the $\\text{Cl}-\\text{Cl}$ bond homolytically.'
    },
    {
        id: 'ed-u1-l4-16',
        unitNum: 1,
        lessonNum: 4,
        category: 'Free Radical Substitution',
        question: 'Write the two Propagation step equations for chlorination of methane.',
        answer: '1) $\\text{CH}_4 + \\text{Cl}^\\bullet \\rightarrow {}^\\bullet\\text{CH}_3 + \\text{HCl}$ \n2) ${}^\\bullet\\text{CH}_3 + \\text{Cl}_2 \\rightarrow \\text{CH}_3\\text{Cl} + \\text{Cl}^\\bullet$',
        examinerTip: 'Propagation steps maintain the free radical chain reaction.'
    },
    {
        id: 'ed-u1-l4-17',
        unitNum: 1,
        lessonNum: 4,
        category: 'Free Radical Substitution',
        question: 'What happens in a Termination step? Give an equation showing Ethane formation during methane chlorination.',
        answer: 'Two free radicals collide and combine to form a stable non-radical molecule, stopping the chain. Equation: ${}^\\bullet\\text{CH}_3 + {}^\\bullet\\text{CH}_3 \\rightarrow \\text{C}_2\\text{H}_6$.',
        examinerTip: 'Traces of ethane in products prove the presence of methyl free radicals ($^\\bullet\\text{CH}_3$).'
    },
    {
        id: 'ed-u1-l4-18',
        unitNum: 1,
        lessonNum: 4,
        category: 'Free Radical Substitution',
        question: 'Why is free radical substitution inefficient for synthesizing a pure haloalkane?',
        answer: 'Multi-substitution occurs producing mixtures ($\\text{CH}_2\\text{Cl}_2, \\text{CHCl}_3, \\text{CCl}_4$), and positional isomers form on longer carbon chains.',
        examinerTip: 'Using a large excess of methane maximizes chloromethane ($\text{CH}_3\text{Cl}$).'
    },
    {
        id: 'ed-u1-l4-19',
        unitNum: 1,
        lessonNum: 4,
        category: 'Fuels & Biofuels',
        question: 'What is Carbon Neutrality in the context of Biofuels?',
        answer: 'Carbon neutral means the amount of $\\text{CO}_2$ released during biofuel combustion equals the amount of $\\text{CO}_2$ absorbed by crops during photosynthesis.',
        examinerTip: 'Fossil fuels used in harvesting, transport, and fertilizer production mean biofuels are not $100\\%$ carbon neutral in practice.'
    },

    // Unit 1 - Topic 5: Alkenes (Lesson 5)
    {
        id: 'ed-u1-l5-1',
        unitNum: 1,
        lessonNum: 5,
        category: 'Alkenes Structure',
        question: 'Describe the bonding in a $C=C$ double bond in Alkenes.',
        answer: 'Consists of one $\\sigma$ (sigma) bond (head-on orbital overlap) and one $\\pi$ (pi) bond (sideways overlap of $p$ orbitals above and below the $C=C$ plane).',
        examinerTip: 'The $\\pi$ bond is weaker than the $\\sigma$ bond and restricts rotation around the double bond axis.'
    },
    {
        id: 'ed-u1-l5-2',
        unitNum: 1,
        lessonNum: 5,
        category: 'Alkenes Geometry',
        question: 'What is the hybridisation, shape, and bond angle around each carbon in a $C=C$ double bond?',
        answer: '$sp^2$ hybridisation, Trigonal Planar shape, and a bond angle of $120^\\circ$.',
        examinerTip: 'The molecule is completely planar around the $C=C$ double bond.'
    },
    {
        id: 'ed-u1-l5-3',
        unitNum: 1,
        lessonNum: 5,
        category: 'Stereoisomerism',
        question: 'What two conditions are required for $E/Z$ (stereoisomerism) to occur in alkenes?',
        answer: '1. Restricted rotation around the $C=C$ double bond. \n2. Two DIFFERENT groups attached to EACH carbon atom of the $C=C$.',
        examinerTip: 'Use CIP priority rules: $Z$ = high priority groups on same side (Zame side); $E$ = high priority on opposite sides.'
    },
    {
        id: 'ed-u1-l5-4',
        unitNum: 1,
        lessonNum: 5,
        category: 'Stereoisomerism',
        question: 'State the Cahn-Ingold-Prelog (CIP) priority rules for assigning $E/Z$ stereoisomers.',
        answer: 'Higher atomic number = higher priority. If high priority groups are on the same side of $C=C$, it is the $Z$-isomer; if on opposite sides, it is the $E$-isomer.',
        examinerTip: 'If atoms attached directly to $C=C$ are identical, compare atoms bonded next down the chain.'
    },
    {
        id: 'ed-u1-l5-5',
        unitNum: 1,
        lessonNum: 5,
        category: 'Electrophilic Addition',
        question: 'Define an Electrophile and explain why alkenes undergo electrophilic addition.',
        answer: 'An Electrophile is an electron-pair acceptor. Alkenes undergo electrophilic addition because the $\\pi$ bond in $C=C$ is an area of high electron density.',
        examinerTip: 'Electrophilic addition breaks the $\\pi$ bond to form two new $\\sigma$ bonds.'
    },
    {
        id: 'ed-u1-l5-6',
        unitNum: 1,
        lessonNum: 5,
        category: 'Electrophilic Addition',
        question: 'How does non-polar Bromine ($\\text{Br}_2$) act as an electrophile when reacting with an alkene?',
        answer: 'As $\\text{Br}_2$ approaches the electron-rich $C=C$ double bond, electron repulsion induces a dipole ($\\text{Br}^{\\delta+} - \\text{Br}^{\\delta-}$).',
        examinerTip: 'Heterolytic fission of $\\text{Br}-\\text{Br}$ forms a bromide ion ($\\text{Br}^-$) and a carbocation intermediate.'
    },
    {
        id: 'ed-u1-l5-7',
        unitNum: 1,
        lessonNum: 5,
        category: 'Electrophilic Addition',
        question: 'What is observed when Bromine water is added to an Alkene?',
        answer: 'Orange bromine water turns COLORLESS (decolourizes) as addition across $C=C$ forms a dibromoalkane.',
        examinerTip: 'This is the classic qualitative test for unsaturation ($C=C$ double bonds).'
    },
    {
        id: 'ed-u1-l5-8',
        unitNum: 1,
        lessonNum: 5,
        category: 'Electrophilic Addition',
        question: 'What is the product when an alkene reacts with Hydrogen Bromide ($\\text{HBr}$)?',
        answer: 'A bromoalkane (e.g. $\\text{CH}_2=\\text{CH}_2 + \\text{HBr} \\rightarrow \\text{CH}_3\\text{CH}_2\\text{Br}$).',
        examinerTip: 'Occurs at room temperature via electrophilic addition.'
    },
    {
        id: 'ed-u1-l5-9',
        unitNum: 1,
        lessonNum: 5,
        category: 'Markovnikov Rule',
        question: 'State Markovnikov\'s Rule for electrophilic addition of $HX$ to unsymmetrical alkenes.',
        answer: 'When $HX$ adds to an unsymmetrical alkene, $H^+$ attaches to the carbon with more hydrogen atoms, forming the major product via the most stable carbocation.',
        examinerTip: 'Carbocation stability trend: Tertiary ($3^\\circ$) > Secondary ($2^\\circ$) > Primary ($1^\\circ$) due to alkyl group electron-donating inductive effects.'
    },
    {
        id: 'ed-u1-l5-10',
        unitNum: 1,
        lessonNum: 5,
        category: 'Carbocation Stability',
        question: 'Explain why Tertiary ($3^\\circ$) carbocations are more stable than Primary ($1^\\circ$) carbocations.',
        answer: 'Tertiary carbocations have 3 electron-donating alkyl groups attached to the positive carbon. Alkyl groups push electron density (+I inductive effect), dispersing the positive charge.',
        examinerTip: 'Greater charge dispersion = greater carbocation stability.'
    },
    {
        id: 'ed-u1-l5-11',
        unitNum: 1,
        lessonNum: 5,
        category: 'Hydration of Alkenes',
        question: 'What are the industrial conditions and product for the Hydration of Ethene?',
        answer: 'Steam ($\\text{H}_2\\text{O(g)}$), Concentrated Phosphoric Acid catalyst ($\\text{H}_3\\text{PO}_4$), $300^\\circ\\text{C}$, 60-70 atm. Product: Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$).',
        examinerTip: 'Reversible addition reaction with $100\\%$ atom economy.'
    },
    {
        id: 'ed-u1-l5-12',
        unitNum: 1,
        lessonNum: 5,
        category: 'Hydrogenation',
        question: 'What are the conditions for Catalytic Hydrogenation of Alkenes to Alkanes?',
        answer: 'Hydrogen gas ($\\text{H}_2$), Nickel catalyst ($Ni$), temperature around $150^\\circ\\text{C}$.',
        examinerTip: 'Used industrially to harden unsaturated vegetable oils to make margarine.'
    },
    {
        id: 'ed-u1-l5-13',
        unitNum: 1,
        lessonNum: 5,
        category: 'Oxidation of Alkenes',
        question: 'What reagent and observation are associated with mild oxidation of alkenes to diols?',
        answer: 'Cold, dilute acidified Potassium Manganate(VII) ($\\text{KMnO}_4$). Purple solution turns COLORLESS (or brown $\\text{MnO}_2$ precipitate forms).',
        examinerTip: 'Ethene oxidation yields Ethane-1,2-diol ($\\text{HO-CH}_2\\text{-CH}_2\\text{-OH}$).'
    },
    {
        id: 'ed-u1-l5-14',
        unitNum: 1,
        lessonNum: 5,
        category: 'Addition Polymerization',
        question: 'Describe Addition Polymerization of Alkenes and define a repeat unit.',
        answer: 'Unsaturated alkene monomers join together by opening $C=C$ double bonds to form long-chain saturated polymers. The repeat unit is the specific arrangement of atoms yielding the polymer upon repetition.',
        examinerTip: 'Repeat units must have single bonds only and open bonds extending through square brackets with subscript $n$.'
    },
    {
        id: 'ed-u1-l5-15',
        unitNum: 1,
        lessonNum: 5,
        category: 'Polymers & Environment',
        question: 'Why are addition polymers non-biodegradable?',
        answer: 'Polymer chains consist of strong, non-polar $C-C$ and $C-H$ $\\sigma$ bonds that are resistant to chemical and bacterial breakdown.',
        examinerTip: 'Inertness of non-polar single bonds causes accumulation in landfills and oceans.'
    },
    {
        id: 'ed-u1-l5-16',
        unitNum: 1,
        lessonNum: 5,
        category: 'Waste Management',
        question: 'Compare recycling, incineration, and feedstock recycling for waste polymer disposal.',
        answer: 'Recycling = melting & remolding; Incineration = burning for energy (produces $\\text{CO}_2$ & toxic gases); Feedstock recycling = breaking polymers into monomers for new synthesis.',
        examinerTip: 'Incineration of PVC produces toxic $\\text{HCl}$ gas, which must be neutralized using base scrubbers.'
    },
    {
        id: 'ed-u1-l5-17',
        unitNum: 1,
        lessonNum: 5,
        category: 'Sustainable Chemistry',
        question: 'How do biodegradable and plant-based polymers reduce environmental impact?',
        answer: 'Biodegradable polymers contain ester or amide links broken down by microorganisms. Plant-based polymers conserve finite crude oil reserves.',
        examinerTip: 'Photodegradable polymers contain bonds broken down by absorption of UV light.'
    },
    {
        id: 'ed-u1-l5-18',
        unitNum: 1,
        lessonNum: 5,
        category: 'Flue Gas Treatment',
        question: 'Why must flue gases from PVC incineration be treated with Calcium Oxide ($\\text{CaO}$)?',
        answer: 'Incineration of PVC releases corrosive, toxic Hydrogen Chloride gas ($\\text{HCl}$). Calcium Oxide is a basic oxide that neutralizes $\\text{HCl}$: $\\text{CaO} + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O}$.',
        examinerTip: 'Base scrubbing prevents acid rain caused by $\\text{HCl}$ emissions.'
    },

    // Unit 2 AS Flashcards (Energetics, Group Chem & Halogenoalkanes)
    // Lesson 1: Energetics & Enthalpy Changes
    {
        id: 'ed-u2-l1-1',
        unitNum: 2,
        lessonNum: 1,
        category: 'Energetics',
        question: 'Define Standard Enthalpy Change of Neutralisation ($\\Delta H_{neut}^\\ominus$).',
        answer: 'The enthalpy change when 1 mole of water is formed from the reaction of an acid with an alkali under standard conditions.',
        examinerTip: 'Neutralisation is ALWAYS exothermic (negative $\\Delta H$).'
    },
    {
        id: 'ed-u2-l1-2',
        unitNum: 2,
        lessonNum: 1,
        category: 'Energetics',
        question: 'What is Hess\'s Law?',
        answer: 'The total enthalpy change for a chemical reaction is independent of the route taken, provided initial and final conditions are the same.',
        examinerTip: 'Crucial for Indirect Enthalpy Calculations using cycles.'
    },

    // Lesson 2: Intermolecular Forces
    {
        id: 'ed-u2-l2-1',
        unitNum: 2,
        lessonNum: 2,
        category: 'Intermolecular Forces',
        question: 'Which elements must be bonded to Hydrogen to form Hydrogen Bonds?',
        answer: 'Fluorine (F), Oxygen (O), or Nitrogen (N) — due to high electronegativity and lone pairs.',
        examinerTip: 'Hydrogen bonding is the strongest type of intermolecular force.'
    },
    {
        id: 'ed-u2-l2-2',
        unitNum: 2,
        lessonNum: 2,
        category: 'Intermolecular Forces',
        question: 'How does increasing electron count affect London Dispersion Forces?',
        answer: 'More electrons lead to larger instantaneous dipoles, increasing London force strength and raising boiling points.',
        examinerTip: 'Explains why boiling point increases down the Halogen group ($F_2 < Cl_2 < Br_2 < I_2$).'
    },

    // Lesson 3: Redox & Group 1, 2, 7 Trends
    {
        id: 'ed-u2-l3-1',
        unitNum: 2,
        lessonNum: 3,
        category: 'Group Trends',
        question: 'What is the trend in thermal stability of Group 2 Carbonates down the group?',
        answer: 'Thermal stability INCREASES down the group (requires higher temperature to decompose).',
        examinerTip: 'Cation ionic radius increases down group, causing LESS charge density and LESS polarising power on the carbonate ion.'
    },
    {
        id: 'ed-u2-l3-2',
        unitNum: 2,
        lessonNum: 3,
        category: 'Halogen Reactions',
        question: 'What is observed when Chlorine gas is bubbled into Potassium Iodide ($KI$) solution?',
        answer: 'Solution turns BROWN due to formation of aqueous Iodine ($I_2$).',
        examinerTip: 'Chlorine is a stronger oxidising agent than Iodine and displaces $I^-$ ions.'
    },

    // Lesson 4: Halogenoalkanes
    {
        id: 'ed-u2-l4-1',
        unitNum: 2,
        lessonNum: 4,
        category: 'Halogenoalkanes',
        question: 'Which factor determines the reactivity rate of Halogenoalkanes: Bond Polarity or Bond Enthalpy?',
        answer: 'BOND ENTHALPY determines reactivity. C-I is weakest and reacts fastest; C-F is strongest and reacts slowest.',
        examinerTip: 'Despite C-F being most polar, C-I bond strength ($238 \\text{ kJ mol}^{-1}$) breaks easiest.'
    },
    {
        id: 'ed-u2-l4-2',
        unitNum: 2,
        lessonNum: 4,
        category: 'Halogenoalkanes',
        question: 'What mechanism occurs when 1-bromopropane reacts with aqueous $NaOH$?',
        answer: 'Nucleophilic Substitution ($S_N2$ mechanism).',
        examinerTip: 'Hydroxide ion ($OH^-$) acts as a nucleophile attacking the electron-deficient Carbon atom.'
    },

    // Unit 4 - Topic 11: Kinetics (Lesson 1)
    {
        id: 'ed-u4-l1-1',
        unitNum: 4,
        lessonNum: 1,
        category: 'Kinetics & Orders',
        question: 'What is the definition of Overall Order of Reaction?',
        answer: 'The sum of the powers (orders) to which the reactant concentrations are raised in the rate equation.',
        examinerTip: 'Do not confuse overall order with the molecularity of an individual elementary step.'
    },
    {
        id: 'ed-u4-l1-2',
        unitNum: 4,
        lessonNum: 1,
        category: 'Kinetics & Orders',
        question: 'What are the units of rate constant (k) for a Zero-Order reaction?',
        answer: '$\\text{mol dm}^{-3} \\text{s}^{-1}$',
        examinerTip: 'Zero order means Rate = k, so units of k equal units of rate.'
    },
    {
        id: 'ed-u4-l1-3',
        unitNum: 4,
        lessonNum: 1,
        category: 'Kinetics & Orders',
        question: 'What are the units of rate constant (k) for a First-Order reaction?',
        answer: '$\\text{s}^{-1}$',
        examinerTip: 'Rearrange $k = \\text{Rate} / [A]$ to get $(\\text{mol dm}^{-3} \\text{s}^{-1}) / (\\text{mol dm}^{-3}) = \\text{s}^{-1}$.'
    },
    {
        id: 'ed-u4-l1-4',
        unitNum: 4,
        lessonNum: 1,
        category: 'Kinetics & Orders',
        question: 'What are the units of rate constant (k) for a Second-Order reaction?',
        answer: '$\\text{dm}^3 \\text{mol}^{-1} \\text{s}^{-1}$',
        examinerTip: 'Rearrange $k = \\text{Rate} / [A]^2$ to deduce units.'
    },
    {
        id: 'ed-u4-l1-5',
        unitNum: 4,
        lessonNum: 1,
        category: 'Kinetics & Orders',
        question: 'What are the units of rate constant (k) for a Third-Order reaction?',
        answer: '$\\text{dm}^6 \\text{mol}^{-2} \\text{s}^{-1}$',
        examinerTip: 'Rearrange $k = \\text{Rate} / ([A]^2[B])$ to deduce units.'
    },
    {
        id: 'ed-u4-l1-6',
        unitNum: 4,
        lessonNum: 1,
        category: 'Experimental Methods',
        question: 'Why is measuring mass loss unsuitable for reactions releasing Hydrogen gas ($\text{H}_2$)?',
        answer: 'Hydrogen gas has an extremely low molar mass ($2.0\\text{ g mol}^{-1}$), so the mass decrease is too small to be measured accurately on standard laboratory balances.',
        examinerTip: 'Use a gas syringe instead to collect $\\text{H}_2$ gas volume.'
    },
    {
        id: 'ed-u4-l1-7',
        unitNum: 4,
        lessonNum: 1,
        category: 'Experimental Methods',
        question: 'How should a colorimeter filter be selected for monitoring a colored solution?',
        answer: 'Choose a filter with the complementary color to the solution to ensure maximum absorbance of light.',
        examinerTip: 'For an orange-brown bromine solution, select a blue filter.'
    },
    {
        id: 'ed-u4-l1-8',
        unitNum: 4,
        lessonNum: 1,
        category: 'Experimental Methods',
        question: 'What is Quenching in chemical kinetics?',
        answer: 'Stopping or rapidly slowing down a reaction at a specific instant by rapid cooling or neutralizing a catalyst/reactant before titration.',
        examinerTip: 'Use weak bases like $\\text{NaHCO}_3$ to neutralize acid catalysts without hydrolyzing esters.'
    },
    {
        id: 'ed-u4-l1-9',
        unitNum: 4,
        lessonNum: 1,
        category: 'Half-Life & Graphs',
        question: 'What is the key characteristic of the half-life ($t_{1/2}$) of a First-Order reaction?',
        answer: 'The half-life is constant and independent of the initial reactant concentration ($t_{1/2} = \\frac{\\ln 2}{k}$).',
        examinerTip: 'Successive half-lives on a concentration-time graph will be equal for first-order reactions.'
    },
    {
        id: 'ed-u4-l1-10',
        unitNum: 4,
        lessonNum: 1,
        category: 'Reaction Mechanisms',
        question: 'Define Rate-Determining Step (RDS).',
        answer: 'The slowest elementary step in a multi-step reaction mechanism, which acts as a bottleneck and controls the overall rate.',
        examinerTip: 'Species in or before the RDS appear in the rate equation.'
    },
    {
        id: 'ed-u4-l1-11',
        unitNum: 4,
        lessonNum: 1,
        category: 'Reaction Mechanisms',
        question: 'Distinguish between a Catalyst and a Reaction Intermediate in a mechanism.',
        answer: 'A catalyst is consumed in an early step and regenerated in a later step; an intermediate is formed in an early step and consumed in a later step.',
        examinerTip: 'Neither appears in the overall balanced equation, but catalysts can appear in rate equations.'
    },
    {
        id: 'ed-u4-l1-12',
        unitNum: 4,
        lessonNum: 1,
        category: 'Reaction Mechanisms',
        question: 'Compare $S_N1$ and $S_N2$ energy profiles and rate equations.',
        answer: '$S_N1$ has 2 energy peaks (carbocation intermediate) and rate = $k[\\text{RHal}]$; $S_N2$ has 1 energy peak (single transition state) and rate = $k[\\text{RHal}][\\text{OH}^-]$.',
        examinerTip: 'Tertiary haloalkanes undergo $S_N1$ due to steric hindrance and carbocation stabilization.'
    },
    {
        id: 'ed-u4-l1-13',
        unitNum: 4,
        lessonNum: 1,
        category: 'Arrhenius Equation',
        question: 'State the logarithmic form of the Arrhenius Equation and explain how $E_a$ is determined graphically.',
        answer: '$\\ln k = -\\frac{E_a}{R}\\left(\\frac{1}{T}\\right) + \\ln A$. Plot $\\ln k$ vs $1/T$; the gradient $m = -E_a/R$.',
        examinerTip: 'Multiply gradient by $-R$ ($-8.31$) to get $E_a$ in $\\text{J mol}^{-1}$, then divide by 1000 for $\\text{kJ mol}^{-1}$.'
    },
    {
        id: 'ed-u4-l1-14',
        unitNum: 4,
        lessonNum: 1,
        category: 'Arrhenius Equation',
        question: 'What does the exponential factor $e^{-E_a/RT}$ represent in the Arrhenius equation?',
        answer: 'The fraction of molecular collisions that possess energy equal to or greater than the activation energy ($E \\ge E_a$).',
        examinerTip: 'Increasing temperature makes $-E_a/RT$ less negative, exponentially increasing $k$.'
    },
    {
        id: 'ed-u4-l1-15',
        unitNum: 4,
        lessonNum: 1,
        category: 'Catalysis',
        question: 'Distinguish between Homogeneous and Heterogeneous catalysts.',
        answer: 'Homogeneous catalysts are in the same phase as reactants; Heterogeneous catalysts are in a different phase from reactants.',
        examinerTip: 'Transition metals excel as catalysts due to variable oxidation states and partially filled d-orbitals.'
    },
    {
        id: 'ed-u4-l1-16',
        unitNum: 4,
        lessonNum: 1,
        category: 'Catalysis',
        question: 'What are the three stages of Heterogeneous Catalysis on a solid surface?',
        answer: '1. Adsorption of reactants onto active sites; 2. Reaction and bond weakening; 3. Desorption of products.',
        examinerTip: 'Catalyst poisoning occurs when impurities (e.g. Lead, Sulfur) adsorb irreversibly to active sites.'
    },
    {
        id: 'ed-u4-l1-17',
        unitNum: 4,
        lessonNum: 1,
        category: 'Catalysis',
        question: 'Define Autocatalysis and give an example.',
        answer: 'A reaction where one of the products acts as a catalyst for the reaction (e.g. $\\text{Mn}^{2+}$ in $\\text{MnO}_4^- / \\text{C}_2\\text{O}_4^{2-}$).',
        examinerTip: 'Autocatalysis exhibits a characteristic S-shaped rate curve (slow start, rapid acceleration, deceleration).'
    },

    // Unit 4 - Topic 12: Entropy and Energetics (Lesson 2)
    {
        id: 'ed-u4-l2-1',
        unitNum: 4,
        lessonNum: 2,
        category: 'Entropy & Energetics',
        question: 'Define Entropy ($S$) and state the Boltzmann Formula.',
        answer: 'Entropy measures the degree of disorder and energy dispersal in a system. $S = k \\ln W$, where $W$ is the number of microstates.',
        examinerTip: 'Standard entropy units are $\\text{J K}^{-1} \\text{mol}^{-1}$.'
    },
    {
        id: 'ed-u4-l2-2',
        unitNum: 4,
        lessonNum: 2,
        category: 'Entropy & Energetics',
        question: 'What is the Third Law of Thermodynamics?',
        answer: 'The entropy of a perfect crystal at absolute zero ($0\\text{ K}$) is zero ($S = 0$).',
        examinerTip: 'At $0\\text{ K}$, there is only one possible arrangement ($W = 1$), so $\\ln(1) = 0$.'
    },
    {
        id: 'ed-u4-l2-3',
        unitNum: 4,
        lessonNum: 2,
        category: 'Entropy Calculations',
        question: 'How is the Entropy Change of Surroundings ($\\Delta S_{\\text{surroundings}}$) calculated?',
        answer: '$\\Delta S_{\\text{surroundings}} = -\\frac{\\Delta H}{T}$',
        examinerTip: 'Must convert $\\Delta H$ from $\\text{kJ mol}^{-1}$ to $\\text{J mol}^{-1}$ (multiply by 1000) before dividing by $T$.'
    },
    {
        id: 'ed-u4-l2-4',
        unitNum: 4,
        lessonNum: 2,
        category: 'Spontaneity',
        question: 'State the Second Law of Thermodynamics (Total Entropy criterion for spontaneity).',
        answer: 'A reaction is spontaneous (feasible) if $\\Delta S_{\\text{total}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} > 0$.',
        examinerTip: 'Endothermic reactions can be spontaneous if system entropy increase is large enough.'
    },
    {
        id: 'ed-u4-l2-5',
        unitNum: 4,
        lessonNum: 2,
        category: 'Gibbs Free Energy',
        question: 'State the Gibbs Free Energy Equation and the criterion for feasibility.',
        answer: '$\\Delta G^\\theta = \\Delta H^\\theta - T\\Delta S^\\theta$. A reaction is feasible if $\\Delta G^\\theta < 0$.',
        examinerTip: 'Convert $\\Delta S^\\theta$ to $\\text{kJ K}^{-1} \\text{mol}^{-1}$ (divide by 1000) to match $\\Delta H^\\theta$ in $\\text{kJ mol}^{-1}$.'
    },
    {
        id: 'ed-u4-l2-6',
        unitNum: 4,
        lessonNum: 2,
        category: 'Gibbs & Equilibrium',
        question: 'How is $\\Delta G^\\theta$ related to the Equilibrium Constant ($K$)?',
        answer: '$\\Delta G^\\theta = -RT \\ln K$',
        examinerTip: 'A negative $\\Delta G^\\theta$ gives $\\ln K > 0$, meaning $K > 1$ and products are favoured.'
    },
    {
        id: 'ed-u4-l2-7',
        unitNum: 4,
        lessonNum: 2,
        category: 'Lattice Energy',
        question: 'Define Standard Lattice Formation Energy ($\\Delta_{\\text{LE}}H^\\theta$).',
        answer: 'The enthalpy change when one mole of an ionic solid is formed from its constituent gaseous ions under standard conditions.',
        examinerTip: 'Lattice formation enthalpy is always exothermic (negative).'
    },
    {
        id: 'ed-u4-l2-8',
        unitNum: 4,
        lessonNum: 2,
        category: 'Born-Haber Cycles',
        question: 'Why is the Second Electron Affinity (e.g. $\\text{O}^- + e^- \\rightarrow \\text{O}^{2-}$) always endothermic?',
        answer: 'Because energy is required to overcome the strong electrostatic repulsion between the negative ion and the incoming electron.',
        examinerTip: 'First electron affinity is exothermic, but second is always endothermic.'
    },
    {
        id: 'ed-u4-l2-9',
        unitNum: 4,
        lessonNum: 2,
        category: 'Polarisation',
        question: 'State Fajan\'s Rules for anion polarisation and covalent character.',
        answer: 'Polarisation increases with high cation charge density (small radius, high charge) and high anion polarisability (large radius, high charge).',
        examinerTip: 'Covalent character makes experimental lattice energy more exothermic than theoretical point-charge models.'
    },
    {
        id: 'ed-u4-l2-10',
        unitNum: 4,
        lessonNum: 2,
        category: 'Dissolution Energetics',
        question: 'State the Hess\'s Law relationship between Enthalpy of Solution, Lattice Energy, and Hydration Enthalpy.',
        answer: '$\\Delta_{\\text{sol}}H^\\theta = \\Delta H_{\\text{latt(dissociation)}}^\\theta + \\sum \\Delta_{\\text{hyd}}H^\\theta(\\text{ions})$',
        examinerTip: 'Hydration enthalpy is always exothermic (negative) due to ion-dipole attractions with water.'
    },
    {
        id: 'ed-u4-l2-11',
        unitNum: 4,
        lessonNum: 2,
        category: 'Group 2 Trends',
        question: 'Explain why Group 2 Hydroxide solubility increases down the group.',
        answer: 'Lattice energy decreases faster than cation hydration enthalpy down the group due to small $\\text{OH}^-$ ions, making $\\Delta H_{\\text{sol}}$ more exothermic.',
        examinerTip: 'Group 2 Sulfates decrease in solubility down the group because $\\text{SO}_4^{2-}$ is very large.'
    },

    // Unit 4 - Topic 13: Chemical Equilibria (Lesson 3)
    {
        id: 'ed-u4-l3-1',
        unitNum: 4,
        lessonNum: 3,
        category: 'Equilibrium Constants',
        question: 'What is the expression for $K_c$ for the reaction $a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$?',
        answer: '$K_c = \\frac{[\\text{C}]^c [\\text{D}]^d}{[\\text{A}]^a [\\text{B}]^b}$',
        examinerTip: 'Only aqueous and gaseous species are included in $K_c$; pure solids and liquids are omitted.'
    },
    {
        id: 'ed-u4-l3-2',
        unitNum: 4,
        lessonNum: 3,
        category: 'Equilibrium Constants',
        question: 'How is Partial Pressure ($p_A$) calculated from total pressure ($P_{\\text{total}}$)?',
        answer: '$p_A = \\text{Mole Fraction of A} \\times P_{\\text{total}}$, where $\\text{Mole Fraction} = \\frac{n_A}{n_{\\text{total}}}$.',
        examinerTip: 'The sum of all mole fractions equals 1.0; the sum of all partial pressures equals $P_{\\text{total}}$.'
    },
    {
        id: 'ed-u4-l3-3',
        unitNum: 4,
        lessonNum: 3,
        category: 'Equilibrium Constants',
        question: 'What is the sole factor that changes the numerical value of equilibrium constants $K_c$ and $K_p$?',
        answer: 'Temperature.',
        examinerTip: 'Changes in concentration, pressure, or adding a catalyst do NOT change the value of $K_c$ or $K_p$.'
    },
    {
        id: 'ed-u4-l3-4',
        unitNum: 4,
        lessonNum: 3,
        category: 'Le Chatelier & Kc',
        question: 'How does an increase in temperature affect $K_c$ for an exothermic reaction?',
        answer: 'Increasing temperature decreases the value of $K_c$ because the equilibrium shifts to the left (endothermic direction).',
        examinerTip: 'For endothermic reactions, increasing temperature increases the value of $K_c$.'
    },

    // Unit 4 - Topic 14: Acid-Base Equilibria (Lesson 4)
    {
        id: 'ed-u4-l4-1',
        unitNum: 4,
        lessonNum: 4,
        category: 'Acid-Base Theory',
        question: 'Define Brønsted-Lowry Acid and Base.',
        answer: 'Brønsted-Lowry Acid is a proton ($\\text{H}^+$) donor; Brønsted-Lowry Base is a proton acceptor.',
        examinerTip: 'Conjugate acid-base pairs differ by exactly one $\\text{H}^+$ proton.'
    },
    {
        id: 'ed-u4-l4-2',
        unitNum: 4,
        lessonNum: 4,
        category: 'pH Calculations',
        question: 'Define pH and state the formula to calculate $[\text{H}^+]$ from pH.',
        answer: '$\\text{pH} = -\\log_{10}[\\text{H}^+]$ and $[\\text{H}^+] = 10^{-\\text{pH}}$.',
        examinerTip: 'A decrease of 1 pH unit represents a tenfold increase in $[\\text{H}^+]$.'
    },
    {
        id: 'ed-u4-l4-3',
        unitNum: 4,
        lessonNum: 4,
        category: 'Ionic Product of Water',
        question: 'State the expression for the Ionic Product of Water ($K_w$) and its value at $298\\text{ K}$.',
        answer: '$K_w = [\\text{H}^+][\\text{OH}^-] = 1.00 \\times 10^{-14} \\text{ mol}^2 \\text{dm}^{-6}$ at $298\\text{ K}$.',
        examinerTip: 'Auto-ionization of water is endothermic, so $K_w$ increases as temperature increases, lowering pure water pH.'
    },
    {
        id: 'ed-u4-l4-4',
        unitNum: 4,
        lessonNum: 4,
        category: 'Weak Acids',
        question: 'State the Acid Dissociation Constant ($K_a$) expression for a weak acid $\\text{HA}$.',
        answer: '$K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}$, simplified for weak acid alone to $K_a = \\frac{[\\text{H}^+]^2}{[\\text{HA}]}$.',
        examinerTip: 'Smaller $K_a$ (or larger $p K_a = -\\log K_a$) indicates a weaker acid.'
    },
    {
        id: 'ed-u4-l4-5',
        unitNum: 4,
        lessonNum: 4,
        category: 'Buffer Solutions',
        question: 'Define a Buffer Solution and state its composition.',
        answer: 'A solution that resists changes in pH when small amounts of acid or alkali are added. Composed of a weak acid and its conjugate base salt.',
        examinerTip: 'Henderson-Hasselbalch equation: $\\text{pH} = p K_a + \\log_{10}\\left(\\frac{[\\text{salt}]}{[\\text{acid}]}\\right)$.'
    },
    {
        id: 'ed-u4-l4-6',
        unitNum: 4,
        lessonNum: 4,
        category: 'Ka from pH Curves',
        question: 'What is the relationship between pH and pKa at the half-equivalence point of a weak acid titration?',
        answer: '$\\text{pH} = \\text{p}K_a$ (because the concentrations of weak acid and its conjugate base are equal, $[\\text{HA}] = [\\text{A}^-]$).',
        examinerTip: 'Always use the term half-equivalence point (not half-neutralisation point) when explaining this relationship.'
    },
    {
        id: 'ed-u4-l4-7',
        unitNum: 4,
        lessonNum: 4,
        category: 'The Half-Volume Method',
        question: 'Explain the experimental half-volume method to find the pKa of an unknown weak acid.',
        answer: 'Titrate one sample to find the equivalence volume $V_{\\text{eq}}$. Add exactly half this volume ($\\frac{V_{\\text{eq}}}{2}$) of base to a fresh sample of the same acid, then measure the pH.',
        examinerTip: 'The measured pH of the half-neutralised mixture is directly equal to the $\\text{p}K_a$ of the acid, and $K_a = 10^{-\\text{p}K_a}$.'
    },
    {
        id: 'ed-u4-l4-8',
        unitNum: 4,
        lessonNum: 4,
        category: 'Titration Buffer Action',
        question: 'What is the buffer region on a weak acid-strong base titration curve?',
        answer: 'A region of gradual pH change following the initial rapid pH jump, where significant concentrations of both unreacted weak acid and its conjugate base coexist.',
        examinerTip: 'This region acts as a buffer system, resisting changes in pH upon the addition of more base.'
    },

    // Unit 4 - Topic 15: Carbonyls, Carboxylic Acids & Chirality (Lesson 5)
    {
        id: 'ed-u4-l5-1',
        unitNum: 4,
        lessonNum: 5,
        category: 'Stereochemistry',
        question: 'Define Chiral Centre and Enantiomers.',
        answer: 'A chiral centre is a carbon atom bonded to 4 different atoms/groups. Enantiomers are non-superimposable mirror image stereoisomers.',
        examinerTip: 'Enantiomers rotate plane-polarised light in equal and opposite directions.'
    },
    {
        id: 'ed-u4-l5-2',
        unitNum: 4,
        lessonNum: 5,
        category: 'Stereochemistry',
        question: 'What is a Racemic Mixture (Racemate) and why is it optically inactive?',
        answer: 'An equimolar (50:50) mixture of two enantiomers. It is optically inactive because the opposite rotations cancel out.',
        examinerTip: '$S_N1$ mechanism yields a racemic mixture because nucleophile attacks planar carbocation from top or bottom with equal probability.'
    },
    {
        id: 'ed-u4-l5-3',
        unitNum: 4,
        lessonNum: 5,
        category: 'Carbonyls',
        question: 'How do Fehling\'s and Tollens\' reagents distinguish Aldehydes from Ketones?',
        answer: 'Aldehydes form a silver mirror with Tollens\' and a red $\\text{Cu}_2\\text{O}$ precipitate with Fehling\'s. Ketones show no reaction.',
        examinerTip: 'Aldehydes are easily oxidized to carboxylic acids, whereas ketones resist mild oxidation.'
    },
    {
        id: 'ed-u4-l5-4',
        unitNum: 4,
        lessonNum: 5,
        category: 'Carbonyls',
        question: 'What is the reagent and observation for 2,4-DNPH (Brady\'s Reagent) test?',
        answer: '2,4-dinitrophenylhydrazine forms an orange/yellow precipitate with both aldehydes and ketones.',
        examinerTip: 'Melting point of purified derivative identifies the specific carbonyl compound.'
    },
    {
        id: 'ed-u4-l5-5',
        unitNum: 4,
        lessonNum: 5,
        category: 'Carbonyls',
        question: 'What mechanism occurs when $\\text{HCN}$ (with $\\text{KCN}$ catalyst) reacts with a carbonyl compound?',
        answer: 'Nucleophilic Addition, forming a hydroxynitrile.',
        examinerTip: 'Cyanide ion ($\\text{CN}^-$) attacks the electron-deficient carbonyl carbon.'
    },
    {
        id: 'ed-u4-l5-6',
        unitNum: 4,
        lessonNum: 5,
        category: 'Carboxylic Acids',
        question: 'Why do Carboxylic Acids have higher boiling points than alcohols of similar $M_r$?',
        answer: 'Carboxylic acids form stable hydrogen-bonded dimers in liquid and gas phases, doubling their effective molecular size.',
        examinerTip: 'Dimers require significantly more energy to vaporize.'
    },
    {
        id: 'ed-u4-l5-7',
        unitNum: 4,
        lessonNum: 5,
        category: 'Polymers',
        question: 'What type of polymerisation forms Polyesters and Polyamides?',
        answer: 'Condensation Polymerisation, accompanied by the loss of small molecules like $\\text{H}_2\\text{O}$ or $\\text{HCl}$.',
        examinerTip: 'Dicarboxylic acid + Diol forms Polyester (ester link $-\\text{COO}-$).'
    },
    {
        id: 'ed-u4-l5-8',
        unitNum: 4,
        lessonNum: 5,
        category: 'Chromatography',
        question: 'How is the Retention Factor ($R_f$) calculated in TLC and what does it indicate?',
        answer: '$R_f = \\frac{\\text{Distance travelled by substance}}{\\text{Distance travelled by solvent front}}$. It indicates relative affinity/adsorption to the stationary phase vs. solubility in the mobile phase.',
        examinerTip: '$R_f$ is always a value between 0 and 1, and has no units.'
    },
    {
        id: 'ed-u4-l5-9',
        unitNum: 4,
        lessonNum: 5,
        category: 'GC-MS',
        question: 'What are the distinct roles of GC and MS in a combined GC-MS system?',
        answer: 'GC (Gas Chromatography) separates the components in a mixture based on retention times. MS (Mass Spectrometry) identifies each separated component by measuring accurate $m/z$ ratios and comparing fragmentation patterns to databases.',
        examinerTip: 'Combined GC-MS allows both separation and definitive identification in one continuous process.'
    },
    {
        id: 'ed-u4-l5-10',
        unitNum: 4,
        lessonNum: 5,
        category: 'HRMS',
        question: 'What is the benefit of High-Resolution Mass Spectrometry (HRMS) over low-resolution MS?',
        answer: 'HRMS measures accurate masses to 4 decimal places, allowing the determination of the exact molecular formula of a compound (e.g., distinguishing between compounds with the same nominal $M_r$ like $\\text{C}_3\\text{H}_8$ and $\\text{CO}_2$).',
        examinerTip: 'Low-resolution MS only measures nominal masses to the nearest integer.'
    },
    {
        id: 'ed-u4-l5-11',
        unitNum: 4,
        lessonNum: 5,
        category: 'NMR Spectroscopy',
        question: 'Which atomic nuclei are NMR active, and why?',
        answer: 'Nuclei with an ODD number of nucleons (e.g. $^1\\text{H}$, $^{13}\\text{C}$, $^{19}\\text{F}$) because they possess a non-zero nuclear spin. Nuclei with even nucleons (e.g. $^{12}\\text{C}$, $^{16}\\text{O}$) have zero net spin and are NMR inactive.',
        examinerTip: 'This is why $^{13}\text{C}$ is used for carbon NMR instead of the highly abundant $^{12}\text{C}$.'
    },
    {
        id: 'ed-u4-l5-12',
        unitNum: 4,
        lessonNum: 5,
        category: 'NMR Reference',
        question: 'Why is Tetramethylsilane (TMS, $\\text{Si(CH}_3)_4$) used as the calibration standard in NMR spectroscopy?',
        answer: 'It has 12 equivalent, highly shielded protons (gives a single intense peak at $\\delta = 0\\text{ ppm}$), is chemically inert (won\'t react with samples), and is volatile (b.p. 27°C, easily evaporated for sample recovery).',
        examinerTip: 'Its protons are strongly shielded by electropositive silicon, making its peak appear far upfield from other organic protons.'
    }
];


