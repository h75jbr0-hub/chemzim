import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Intermolecular Forces";
export const lessonNumber = 2;

const londonForcesSvg = `<svg viewBox="0 0 650 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="25" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Origin of London Forces (Instantaneous-Induced Dipoles)</text>
  
  <g transform="translate(40, 20)">
    <text x="120" y="40" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold">Symmetric Electron Cloud (No Dipole)</text>
    <rect x="20" y="60" width="80" height="50" rx="25" fill="#334155" fill-opacity="0.5" stroke="#475569" stroke-width="1.5"/>
    <circle cx="45" cy="85" r="5" fill="#94a3b8"/>
    <circle cx="75" cy="85" r="5" fill="#94a3b8"/>
    <text x="60" y="130" text-anchor="middle" fill="#f8fafc" font-size="12">Molecule A</text>
    
    <rect x="140" y="60" width="80" height="50" rx="25" fill="#334155" fill-opacity="0.5" stroke="#475569" stroke-width="1.5"/>
    <circle cx="165" cy="85" r="5" fill="#94a3b8"/>
    <circle cx="195" cy="85" r="5" fill="#94a3b8"/>
    <text x="180" y="130" text-anchor="middle" fill="#f8fafc" font-size="12">Molecule B</text>
  </g>
  
  <line x1="325" y1="50" x2="325" y2="210" stroke="#1e293b" stroke-width="2" stroke-dasharray="4"/>
  
  <g transform="translate(350, 20)">
    <text x="120" y="40" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Instantaneous &amp; Induced Dipoles</text>
    
    <rect x="20" y="60" width="80" height="50" rx="25" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="40" cy="85" r="5" fill="#f8fafc"/>
    <circle cx="70" cy="85" r="5" fill="#f8fafc"/>
    <text x="35" y="52" fill="#ef4444" font-size="11" font-weight="bold">δ-</text>
    <text x="85" y="52" fill="#34d399" font-size="11" font-weight="bold">δ+</text>
    <text x="60" y="130" text-anchor="middle" fill="#f8fafc" font-size="12">Molecule A (Instantaneous)</text>
    
    <rect x="140" y="60" width="80" height="50" rx="25" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-dasharray="3 3" stroke-width="1.5"/>
    <circle cx="160" cy="85" r="5" fill="#e2e8f0"/>
    <circle cx="190" cy="85" r="5" fill="#e2e8f0"/>
    <text x="155" y="52" fill="#ef4444" font-size="11" font-weight="bold">δ-</text>
    <text x="205" y="52" fill="#34d399" font-size="11" font-weight="bold">δ+</text>
    <text x="180" y="130" text-anchor="middle" fill="#f8fafc" font-size="12">Molecule B (Induced)</text>
    
    <line x1="105" y1="85" x2="135" y2="85" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3"/>
    <text x="120" y="100" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">Attraction</text>
  </g>
</svg>`;

const hydrogenBondingSvg = `<svg viewBox="0 0 650 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad2)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="25" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Hydrogen Bonding in Water (H₂O) &amp; Hydrogen Fluoride (HF)</text>
  
  <g transform="translate(20, 20)">
    <text x="140" y="30" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Water (Linear O-H...O, 180°)</text>
    
    <circle cx="80" cy="110" r="16" fill="#ef4444"/>
    <text x="80" y="115" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">O</text>
    <text x="80" y="85" fill="#ef4444" font-size="10" font-weight="bold">δ-</text>
    <circle cx="70" cy="100" r="1.5" fill="#f8fafc"/>
    <circle cx="67" cy="103" r="1.5" fill="#f8fafc"/>
    <circle cx="70" cy="120" r="1.5" fill="#f8fafc"/>
    <circle cx="67" cy="117" r="1.5" fill="#f8fafc"/>
    
    <line x1="80" y1="110" x2="120" y2="80" stroke="#f8fafc" stroke-width="2.5"/>
    <circle cx="120" cy="80" r="10" fill="#64748b"/>
    <text x="120" y="84" text-anchor="middle" fill="#f8fafc" font-size="10">H</text>
    <text x="130" y="75" fill="#34d399" font-size="10" font-weight="bold">δ+</text>
    
    <line x1="80" y1="110" x2="120" y2="140" stroke="#f8fafc" stroke-width="2.5"/>
    <circle cx="120" cy="140" r="10" fill="#64748b"/>
    <text x="120" y="144" text-anchor="middle" fill="#f8fafc" font-size="10">H</text>
    
    <line x1="120" y1="80" x2="185" y2="80" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4"/>
    <text x="152" y="70" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">H-Bond</text>
    
    <circle cx="220" cy="80" r="16" fill="#ef4444"/>
    <text x="220" y="85" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">O</text>
    <text x="220" y="55" fill="#ef4444" font-size="10" font-weight="bold">δ-</text>
    
    <line x1="220" y1="80" x2="260" y2="50" stroke="#f8fafc" stroke-width="2.5"/>
    <circle cx="260" cy="50" r="10" fill="#64748b"/>
    <text x="260" y="54" text-anchor="middle" fill="#f8fafc" font-size="10">H</text>
    
    <line x1="220" y1="80" x2="260" y2="110" stroke="#f8fafc" stroke-width="2.5"/>
    <circle cx="260" cy="110" r="10" fill="#64748b"/>
    <text x="260" y="114" text-anchor="middle" fill="#f8fafc" font-size="10">H</text>
    
    <path d="M 115 80 A 10 10 0 0 1 185 80" fill="none" stroke="#f8fafc" stroke-width="1"/>
    <text x="152" y="98" fill="#f8fafc" font-size="10" text-anchor="middle">180°</text>
  </g>
  
  <g transform="translate(360, 20)">
    <text x="130" y="30" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Hydrogen Fluoride (Zig-Zag Chain)</text>
    
    <circle cx="40" cy="120" r="14" fill="#a78bfa"/>
    <text x="40" y="124" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">F</text>
    <text x="40" y="98" fill="#ef4444" font-size="10" font-weight="bold">δ-</text>
    
    <line x1="40" y1="120" x2="80" y2="80" stroke="#f8fafc" stroke-width="2"/>
    <circle cx="80" cy="80" r="8" fill="#64748b"/>
    <text x="80" y="83" text-anchor="middle" fill="#f8fafc" font-size="9">H</text>
    <text x="80" y="65" fill="#34d399" font-size="10" font-weight="bold">δ+</text>
    
    <line x1="80" y1="80" x2="130" y2="130" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4"/>
    
    <circle cx="130" cy="130" r="14" fill="#a78bfa"/>
    <text x="130" y="134" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">F</text>
    <text x="130" y="152" fill="#ef4444" font-size="10" font-weight="bold">δ-</text>
    
    <line x1="130" y1="130" x2="170" y2="90" stroke="#f8fafc" stroke-width="2"/>
    <circle cx="170" cy="90" r="8" fill="#64748b"/>
    <text x="170" y="93" text-anchor="middle" fill="#f8fafc" font-size="9">H</text>
    
    <line x1="170" y1="90" x2="220" y2="140" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4"/>
    
    <circle cx="220" cy="140" r="14" fill="#a78bfa"/>
    <text x="220" y="144" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">F</text>
  </g>
</svg>`;

const hydrationSvg = `<svg viewBox="0 0 650 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad3)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="25" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Hydration of Ions: Dissolving NaCl in Water</text>
  
  <g transform="translate(50, 40)">
    <text x="110" y="20" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Sodium Cation (Na⁺) Hydration</text>
    <circle cx="110" cy="120" r="22" fill="#0ea5e9"/>
    <text x="110" y="125" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">Na⁺</text>
    
    <circle cx="110" cy="65" r="12" fill="#ef4444"/>
    <text x="110" y="69" text-anchor="middle" fill="#f8fafc" font-size="9">O</text>
    <circle cx="95" cy="50" r="7" fill="#64748b"/>
    <circle cx="125" cy="50" r="7" fill="#64748b"/>
    <line x1="110" y1="65" x2="95" y2="50" stroke="#f8fafc" stroke-width="1.5"/>
    <line x1="110" y1="65" x2="125" y2="50" stroke="#f8fafc" stroke-width="1.5"/>
    <path d="M 110 77 L 110 93" stroke="#f8fafc" stroke-dasharray="2 2" stroke-width="1.5"/>
    
    <circle cx="110" cy="175" r="12" fill="#ef4444"/>
    <text x="110" y="179" text-anchor="middle" fill="#f8fafc" font-size="9">O</text>
    <circle cx="95" cy="190" r="7" fill="#64748b"/>
    <circle cx="125" cy="190" r="7" fill="#64748b"/>
    <line x1="110" y1="175" x2="95" y2="190" stroke="#f8fafc" stroke-width="1.5"/>
    <line x1="110" y1="175" x2="125" y2="190" stroke="#f8fafc" stroke-width="1.5"/>
    <path d="M 110 163 L 110 147" stroke="#f8fafc" stroke-dasharray="2 2" stroke-width="1.5"/>
    
    <circle cx="55" cy="120" r="12" fill="#ef4444"/>
    <text x="55" y="124" text-anchor="middle" fill="#f8fafc" font-size="9">O</text>
    <circle cx="40" cy="105" r="7" fill="#64748b"/>
    <circle cx="40" cy="135" r="7" fill="#64748b"/>
    <line x1="55" y1="120" x2="40" y2="105" stroke="#f8fafc" stroke-width="1.5"/>
    <line x1="55" y1="120" x2="40" y2="135" stroke="#f8fafc" stroke-width="1.5"/>
    <path d="M 67 120 L 83 120" stroke="#f8fafc" stroke-dasharray="2 2" stroke-width="1.5"/>
    
    <circle cx="165" cy="120" r="12" fill="#ef4444"/>
    <text x="165" y="124" text-anchor="middle" fill="#f8fafc" font-size="9">O</text>
    <circle cx="180" cy="105" r="7" fill="#64748b"/>
    <circle cx="180" cy="135" r="7" fill="#64748b"/>
    <line x1="165" y1="120" x2="180" y2="105" stroke="#f8fafc" stroke-width="1.5"/>
    <line x1="165" y1="120" x2="180" y2="135" stroke="#f8fafc" stroke-width="1.5"/>
    <path d="M 153 120 L 137 120" stroke="#f8fafc" stroke-dasharray="2 2" stroke-width="1.5"/>
  </g>
  
  <g transform="translate(380, 40)">
    <text x="110" y="20" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Chloride Anion (Cl⁻) Hydration</text>
    <circle cx="110" cy="120" r="22" fill="#10b981"/>
    <text x="110" y="125" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">Cl⁻</text>
    
    <circle cx="110" cy="50" r="12" fill="#ef4444"/>
    <text x="110" y="54" text-anchor="middle" fill="#f8fafc" font-size="9">O</text>
    <circle cx="95" cy="70" r="7" fill="#64748b"/>
    <circle cx="125" cy="70" r="7" fill="#64748b"/>
    <line x1="110" y1="50" x2="95" y2="70" stroke="#f8fafc" stroke-width="1.5"/>
    <line x1="110" y1="50" x2="125" y2="70" stroke="#f8fafc" stroke-width="1.5"/>
    <path d="M 95 77 L 102 93" stroke="#f8fafc" stroke-dasharray="2 2" stroke-width="1.5"/>
    <path d="M 125 77 L 118 93" stroke="#f8fafc" stroke-dasharray="2 2" stroke-width="1.5"/>
    
    <circle cx="110" cy="190" r="12" fill="#ef4444"/>
    <text x="110" y="194" text-anchor="middle" fill="#f8fafc" font-size="9">O</text>
    <circle cx="95" cy="170" r="7" fill="#64748b"/>
    <circle cx="125" cy="170" r="7" fill="#64748b"/>
    <line x1="110" y1="190" x2="95" y2="170" stroke="#f8fafc" stroke-width="1.5"/>
    <line x1="110" y1="190" x2="125" y2="170" stroke="#f8fafc" stroke-width="1.5"/>
    <path d="M 95 163 L 102 147" stroke="#f8fafc" stroke-dasharray="2 2" stroke-width="1.5"/>
    <path d="M 125 163 L 118 147" stroke="#f8fafc" stroke-dasharray="2 2" stroke-width="1.5"/>
  </g>
</svg>`;

export const theoryMarkdown = `
# Topic 7: Intermolecular Forces
This topic covers the nature and origins of physical intermolecular interactions, including London dispersion forces, permanent dipole-dipole forces, and hydrogen bonds, as well as their effects on physical properties and solubility.
`;

export const parts: LessonPart[] = [
    {
        id: '7a-london-dispersion-forces',
        title: 'Intermolecular Forces & London Forces',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚛️ What are Intermolecular Forces?
> Intermolecular forces are the non-bonded attractive forces that exist **between molecules**.
> * They are significantly weaker than intramolecular covalent or ionic bonds
> * They play a dominant role in determining the physical properties of substances, such as melting/boiling points, volatility, and solubility
> * The three main types of intermolecular forces are **London forces**, **permanent dipole-dipole interactions**, and **hydrogen bonds** (all collectively referred to as van der Waals forces in some contexts)

> [!TIP]
> ### ⚡ London Dispersion Forces (Instantaneous-Induced Dipole)
> London forces are temporary attractions that exist between **all molecules**, polar or non-polar:
> 
> 1. **Fluctuation:** Electron density in a molecule fluctuates constantly. At any given moment, the electron cloud can become unsymmetrical, creating a temporary **instantaneous dipole**
> 2. **Induction:** This instantaneous dipole repels or attracts electrons in a neighboring molecule, generating an **induced dipole**
> 3. **Attraction:** The weak electrostatic attraction between these dipoles constitutes the London force
> 
> ${svgToken(londonForcesSvg)}

> [!BOX]
> ### 📋 Boiling Points of Noble Gases & Unbranched Alkanes
> The strength of London forces increases with:
> * **Number of electrons:** Larger electron clouds are more easily deformed (polarisable), creating larger fluctuations.
> * **Points of Contact:** Longer, unbranched carbon chains allow adjacent molecules to pack closer together, providing more points of contact along the chain.
> 
> | Noble Gas | Number of Electrons | Boiling Temperature / K | Alkane | Carbon Chain Length | Boiling Temperature / K |
> | :--- | :---: | :---: | :--- | :---: | :---: |
> | Helium, He | 2 | 4.3 | Methane, CH₄ | 1 | 111 |
> | Neon, Ne | 10 | 27.1 | Ethane, C₂H₆ | 2 | 184 |
> | Argon, Ar | 18 | 87.4 | Propane, C₃H₈ | 3 | 231 |
> | Krypton, Kr | 36 | 121 | Butane, C₄H₁₀ | 4 | 272 |
> | Xenon, Xe | 54 | 165 | Pentane, C₅H₁₂ | 5 | 309 |

> [!EXAMPLE]
> #### 📝 Worked Example 1: Comparing Boiling Temperatures of Alkanes
> **Question:** Pentane ($C_5H_{12}$, straight chain) and dimethylpropane ($C_5H_{12}$, highly branched isomer) have the same number of electrons. Pentane has a boiling point of $309\\\\text{ K}$ ($36.1^\\\\circ\\\\text{C}$) while dimethylpropane has a boiling point of $283\\\\text{ K}$ ($9.5^\\\\circ\\\\text{C}$). Explain this difference.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze molecular shapes:**
> >    * Pentane is a straight-chain alkane with an elongated shape
> >    * Dimethylpropane is branched and has a spherical shape
> > 
> > 2. **Relate shape to contact surface area:**
> >    * Elongated molecules can pack closely together, providing more points of contact between neighboring molecules
> >    * Spherical molecules have a smaller surface area of contact
> > 
> > 3. **Link to London force strength:**
> >    * Larger surface area of contact leads to stronger overall London forces, requiring more thermal energy to break. Hence, pentane has a higher boiling point
`,
        keyPoints: [
            'London forces occur between all molecules, polar or non-polar.',
            'The strength of London forces increases with the total number of electrons in the molecule.',
            'Branching in carbon chains decreases boiling points by reducing contact surface area.'
        ]
    },
    {
        id: '7b-permanent-dipoles-hydrogen-bonds',
        title: 'Permanent Dipoles & Hydrogen Bonding',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧲 Permanent Dipole-Dipole Interactions
> Molecules with polar covalent bonds (due to electronegativity differences) possess a permanent dipole:
> * If dipoles align correctly (positive end of one near negative end of another), they attract
> * If misaligned, they repel
> * On average, permanent dipole-dipole attractions are stronger than repulsions in a liquid, contributing to higher boiling points compared to non-polar molecules of similar electron numbers

> [!IMPORTANT]
> ### 🔗 The Hydrogen Bond
> A hydrogen bond is a specific, strong type of intermolecular force that occurs when:
> 1. Hydrogen is covalently bonded to a highly electronegative atom: **Nitrogen (N)**, **Oxygen (O)**, or **Fluorine (F)**
> 2. The electronegative atom possesses at least one **lone pair** of electrons
> 
> The electronegative atom pulls electron density away from hydrogen, leaving it highly electron-deficient ($\\\\delta+$). The $\\\\delta+$ hydrogen is then strongly attracted to the lone pair of the N, O, or F atom of a neighboring molecule.
> 
> ${svgToken(hydrogenBondingSvg)}

> [!BOX]
> ### 📋 Strengths of Hydrogen Bonds
> Hydrogen bonds are stronger than other intermolecular forces, but much weaker than covalent bonds (typically $5\\\\% $ to $10\\\\% $ as strong):
> 
> | Intermolecular Bond | Mean Bond Enthalpy / $\\\\text{kJ mol}^{-1}$ |
> | :--- | :---: |
> | $\\\\text{H–S} \\\\dots \\\\text{H–S}$ | $+7$ |
> | $\\\\text{N–H} \\\\dots \\\\text{H–N}$ (ammonia) | $+17$ |
> | $\\\\text{O–H} \\\\dots \\\\text{H–O}$ (water) | $+22$ |
> | $\\\\text{F–H} \\\\dots \\\\text{H–F}$ (hydrogen fluoride) | $+29$ |

> [!EXAMPLE]
> #### 📝 Worked Example 2: Ethanoic Acid Dimerisation
> **Question:** In certain organic solvents, ethanoic acid ($\\\\text{CH}_3\\\\text{COOH}$) exists as a dimer (a double molecule structure). Draw a structural diagram representing the hydrogen bonding that leads to dimerisation.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the functional groups:**
> >    * Ethanoic acid contains a carbonyl group ($\\\\text{C=O}$) and a hydroxyl group ($\\\\text{O–H}$)
> > 
> > 2. **Align two molecules facing each other:**
> >    * Align the hydroxyl hydrogen of the first molecule with the carbonyl oxygen of the second molecule, and vice versa:
> >      $$\\\\text{CH}_3–\\\\text{C}(=\\\\text{O} \\\\dots \\\\text{H–O})–\\\\text{O–H} \\\\dots \\\\text{O}=\\\\text{C}–\\\\text{CH}_3$$
> > 
> > 3. **Represent the hydrogen bonds:**
> >    * Draw dashed lines representing the attractions between the electronegative carbonyl oxygen lone pairs ($\\\\delta-$) and the hydroxyl hydrogen atoms ($\\\\delta+$)
`,
        keyPoints: [
            'Hydrogen bonding requires hydrogen bonded to N, O, or F, which have lone pairs.',
            'Hydrogen bonds are highly directional; the O–H...O bond angle is close to 180°.',
            'Ethanoic acid forms stable dimers via two mutual hydrogen bonds.'
        ]
    },
    {
        id: '7c-anomalous-properties-solvents',
        title: 'Anomalous Properties & Solvents',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚠️ Anomalous Properties of Water
> Hydrogen bonding gives rise to several anomalous physical properties of water:
> 
> 1. **High Melting & Boiling Points:** Water has much higher melting/boiling points than other Group 6 hydrides ($\\\\text{H}_2\\\\text{S}$, $\\\\text{H}_2\\\\text{Se}$, $\\\\text{H}_2\\\\text{Te}$) because hydrogen bonds require significant energy to break, whereas other hydrides only have weaker London/dipole-dipole forces
> 2. **Density of Ice:** Ice is **less dense** than liquid water (ice floats). In ice, water molecules form a rigid, open hexagonal cage-like structure held together by hydrogen bonds. When ice melts, this structure collapses, allowing water molecules to pack closer together in the liquid state
> 
> **Boiling Points comparison (same electron count = 10):**
> * **$H_2O$ (373 K / 100°C):** Forms up to 4 hydrogen bonds per molecule (2 H atoms and 2 lone pairs).
> * **$HF$ (293 K / 20°C):** Forms only 2 hydrogen bonds per molecule on average (limited by 1 hydrogen atom despite having 3 lone pairs).
> * **$NH_3$ (240 K / -33°C):** Forms only 2 hydrogen bonds per molecule on average (limited by 1 lone pair despite having 3 hydrogen atoms) and has weaker bond strength.

> [!IMPORTANT]
> ### 🧮 Boiling Point Trends in Hydrogen Halides (HF to HI)
> When comparing the boiling points of hydrogen halides:
> * **HF** has the highest boiling point because it is the only one capable of forming strong intermolecular hydrogen bonds
> * **HCl** to **HI** show an increasing trend in boiling points. Although dipole-dipole forces decrease (due to decreasing electronegativity down Group 7), the increasing number of electrons down the group increases the strength of London forces, which dominates the trend
> 
> $$\\\\text{HF} > \\\\text{HI} > \\\\text{HBr} > \\\\text{HCl}$$

> [!IMPORTANT]
> ### 🧪 Enthalpy Change of Vaporisation & Contributions
> Vaporisation enthalpy ($\\\\Delta_{vap} H$) measures the total strength of intermolecular attractions. By comparing alcohols and alkanes, we calculate the percentage contribution of hydrogen bonding:
> * **Ethanol ($\\\\Delta_{vap} H = 38.6\\\\text{ kJ mol}^{-1}$)** vs **Ethane ($\\\\Delta_{vap} H = 15.7\\\\text{ kJ mol}^{-1}$)**:
>   * Hydrogen bonding contribution = $38.6 - 15.7 = 22.9\\\\text{ kJ mol}^{-1}$ (approx. $59\\\%$)
> * **Trend down alcohol homologous series (Table D):**
>   * Ethanol: $56\\\%$ contribution from H-bonding
>   * Propan-1-ol: $50\\\%$ contribution from H-bonding
>   * Butan-1-ol: $45\\\%$ contribution from H-bonding
>   * Pentan-1-ol: $41\\\%$ contribution from H-bonding
>   * *Conclusion:* As carbon chain length increases, London forces grow and eventually predominate over hydrogen bonding.

> [!BOX]
> ### 🧪 Solubility & Choice of Solvents
> A general rule in chemistry is **\"like dissolves like\"** based on two conditions: 1) Solute particles must separate, and 2) Solute-solvent attractions must be strong enough to overcome solute-solute and solvent-solvent attractions.
> 
> 1. **Water as a Polar Solvent:**
>    * **Ionic Compounds:** Water dissolves ionic compounds (like NaCl) through **ion-dipole interactions** (hydration), where water oxygen atoms ($\\\\delta-$) surround cations ($\\\\text{Na}^+$) and hydrogen atoms ($\\\\delta+$) surround anions ($\\\\text{Cl}^-$).
>    * **Alcohols:** Simple alcohols are highly soluble in water because they form hydrogen bonds with water molecules.
>    * **Halogenoalkanes:** Polar but insoluble in water because they cannot form strong hydrogen bonds.
> 
> ${svgToken(hydrationSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 3: Comparing Alcohol vs. Alkane Volatility
> **Question:** Ethanol ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}$) has a boiling point of $78.5^\\\\circ\\\\text{C}$ while methoxymethane ($\\\\text{CH}_3\\\\text{OCH}_3$, an isomer with the same molecular formula and number of electrons) has a boiling point of $-24.8^\\\\circ\\\\text{C}$. Explain this difference.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the intermolecular forces present in each isomer:**
> >    * Ethanol contains a highly polar $\\\\text{O–H}$ bond and can form intermolecular hydrogen bonds
> >    * Methoxymethane contains polar $\\\\text{C–O}$ bonds but has no hydrogen bonded to oxygen, so it can only form permanent dipole-dipole interactions and London forces
> > 
> > 2. **Compare the strength of these forces:**
> >    * Hydrogen bonds are much stronger than dipole-dipole forces
> > 
> > 3. **Conclude:**
> >    * More thermal energy is required to separate ethanol molecules, resulting in its much higher boiling point
`,
        keyPoints: [
            'Ice is less dense than water because of its open hexagonal hydrogen-bonded cage structure.',
            'Boiling points of hydrogen halides decrease from HF to HCl, then increase from HCl to HI due to dominating London forces.',
            'Solubility is determined by matching the types of intermolecular forces between solute and solvent.'
        ]
    }
];
