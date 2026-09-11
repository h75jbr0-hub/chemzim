import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Covalent Bonds";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Covalent Bonds
This lesson covers the formation of covalent bonds, simple molecular structures, and giant covalent structures (macromolecules).
`;

const macromoleculesSvg = `
<svg viewBox="0 0 1000 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="carbonGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#475569" />
    </radialGradient>
    <radialGradient id="siliconGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#a78bfa" />
      <stop offset="100%" stop-color="#7c3aed" />
    </radialGradient>
    <radialGradient id="oxygenGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f87171" />
      <stop offset="100%" stop-color="#dc2626" />
    </radialGradient>
  </defs>

  <rect width="1000" height="380" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="200" y="40" fill="#38bdf8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Diamond (Allotrope of Carbon)</text>
  <text x="500" y="40" fill="#38bdf8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Graphite (Allotrope of Carbon)</text>
  <text x="800" y="40" fill="#38bdf8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Silicon Dioxide (Quartz)</text>

  <g stroke="#94a3b8" stroke-width="2">
    <line x1="200" y1="190" x2="200" y2="120" />
    <line x1="200" y1="190" x2="140" y2="230" />
    <line x1="200" y1="190" x2="250" y2="230" />
    <line x1="200" y1="190" x2="230" y2="170" />
    <line x1="200" y1="120" x2="160" y2="80" />
    <line x1="200" y1="120" x2="240" y2="80" />
    <line x1="140" y1="230" x2="90" y2="220" />
    <line x1="140" y1="230" x2="150" y2="280" />
    <line x1="250" y1="230" x2="230" y2="280" />
    <line x1="250" y1="230" x2="300" y2="250" />
  </g>

  <circle cx="200" cy="190" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="200" cy="120" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="140" cy="230" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="250" cy="230" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="230" cy="170" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="160" cy="80" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="240" cy="80" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="90" cy="220" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="150" cy="280" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="230" cy="280" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="300" cy="250" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />

  <text x="200" y="330" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Every Carbon atom bonded to 4 others</text>
  <text x="200" y="348" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">in a rigid 3D Tetrahedral lattice.</text>

  <g stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3">
    <line x1="440" y1="120" x2="440" y2="210" />
    <line x1="490" y1="110" x2="490" y2="200" />
    <line x1="550" y1="120" x2="550" y2="210" />
    <line x1="500" y1="150" x2="500" y2="240" />
  </g>

  <g stroke="#94a3b8" stroke-width="2">
    <line x1="400" y1="140" x2="440" y2="120" />
    <line x1="440" y1="120" x2="490" y2="110" />
    <line x1="490" y1="110" x2="550" y2="120" />
    <line x1="550" y1="120" x2="500" y2="150" />
    <line x1="500" y1="150" x2="450" y2="160" />
    <line x1="450" y1="160" x2="400" y2="140" />
    <line x1="550" y1="120" x2="590" y2="110" />
    <line x1="590" y1="110" x2="630" y2="130" />
    <line x1="630" y1="130" x2="580" y2="150" />
    <line x1="580" y1="150" x2="500" y2="150" />
  </g>

  <g stroke="#94a3b8" stroke-width="2">
    <line x1="400" y1="230" x2="440" y2="210" />
    <line x1="440" y1="210" x2="490" y2="200" />
    <line x1="490" y1="200" x2="550" y2="210" />
    <line x1="550" y1="210" x2="500" y2="240" />
    <line x1="500" y1="240" x2="450" y2="250" />
    <line x1="450" y1="250" x2="400" y2="230" />
    <line x1="550" y1="210" x2="590" y2="200" />
    <line x1="590" y1="200" x2="630" y2="220" />
    <line x1="630" y1="220" x2="580" y2="240" />
    <line x1="580" y1="240" x2="500" y2="240" />
  </g>

  <circle cx="400" cy="140" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="440" cy="120" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="490" cy="110" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="550" cy="120" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="500" cy="150" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="450" cy="160" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="590" cy="110" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="630" cy="130" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="580" cy="150" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />

  <circle cx="400" cy="230" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="440" cy="210" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="490" cy="200" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="550" cy="210" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="500" cy="240" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="450" cy="250" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="590" cy="200" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="630" cy="220" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="580" cy="240" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />

  <text x="500" y="330" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Carbon bonded to 3 others in flat layers.</text>
  <text x="500" y="348" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Weak forces and free electrons between layers.</text>

  <g stroke="#94a3b8" stroke-width="1.5">
    <line x1="800" y1="190" x2="800" y2="130" />
    <line x1="800" y1="190" x2="745" y2="225" />
    <line x1="800" y1="190" x2="845" y2="225" />
    <line x1="800" y1="190" x2="830" y2="175" />
    <line x1="800" y1="130" x2="770" y2="90" />
    <line x1="800" y1="130" x2="830" y2="90" />
    <line x1="745" y1="225" x2="700" y2="215" />
    <line x1="745" y1="225" x2="755" y2="270" />
    <line x1="845" y1="225" x2="830" y2="270" />
    <line x1="845" y1="225" x2="890" y2="245" />
  </g>

  <circle cx="800" cy="190" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="800" cy="130" r="7.5" fill="url(#oxygenGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="745" cy="225" r="7.5" fill="url(#oxygenGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="845" cy="225" r="7.5" fill="url(#oxygenGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="830" cy="175" r="7.5" fill="url(#oxygenGrad)" stroke="#0f172a" stroke-width="0.5" />

  <circle cx="770" cy="90" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="830" cy="90" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="700" cy="215" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="755" cy="270" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="830" cy="270" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="890" cy="245" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />

  <text x="800" y="330" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Every Si (purple) bonded to 4 O (red).</text>
  <text x="800" y="348" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Every O bonded to 2 Si atoms.</text>
</svg>
`;

const covalentDotAndCrossSvg = `
<svg viewBox="0 0 650 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgCovGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="650" height="250" fill="url(#bgCovGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Covalent Molecules: Dot-and-Cross Overlap Diagrams</text>

  <!-- Card 1: Chlorine Cl2 (Single Bond) -->
  <g transform="translate(20, 45)">
    <rect width="140" height="180" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
    <text x="70" y="22" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Chlorine (Cl₂)</text>
    <text x="70" y="36" fill="#94a3b8" font-size="9" text-anchor="middle">Single: 1 shared pair</text>
    <!-- Overlapping circles -->
    <circle cx="52" cy="100" r="30" fill="none" stroke="#34d399" stroke-width="1.5" />
    <circle cx="88" cy="100" r="30" fill="none" stroke="#34d399" stroke-width="1.5" />
    <!-- Overlap electrons: 1 dot, 1 cross -->
    <circle cx="68" cy="96" r="2.5" fill="#38bdf8" />
    <text x="72" y="109" fill="#f87171" font-size="11" font-weight="bold">×</text>
    <text x="70" y="155" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">Cl — Cl</text>
  </g>

  <!-- Card 2: Oxygen O2 (Double Bond) -->
  <g transform="translate(175, 45)">
    <rect width="140" height="180" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
    <text x="70" y="22" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Oxygen (O₂)</text>
    <text x="70" y="36" fill="#94a3b8" font-size="9" text-anchor="middle">Double: 2 shared pairs</text>
    <circle cx="52" cy="100" r="30" fill="none" stroke="#f87171" stroke-width="1.5" />
    <circle cx="88" cy="100" r="30" fill="none" stroke="#f87171" stroke-width="1.5" />
    <!-- 4 shared electrons -->
    <circle cx="67" cy="93" r="2.5" fill="#38bdf8" />
    <circle cx="67" cy="107" r="2.5" fill="#38bdf8" />
    <text x="71" y="96" fill="#fbbf24" font-size="11" font-weight="bold">×</text>
    <text x="71" y="110" fill="#fbbf24" font-size="11" font-weight="bold">×</text>
    <text x="70" y="155" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">O = O</text>
  </g>

  <!-- Card 3: Nitrogen N2 (Triple Bond) -->
  <g transform="translate(330, 45)">
    <rect width="140" height="180" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
    <text x="70" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Nitrogen (N₂)</text>
    <text x="70" y="36" fill="#94a3b8" font-size="9" text-anchor="middle">Triple: 3 shared pairs</text>
    <circle cx="52" cy="100" r="30" fill="none" stroke="#38bdf8" stroke-width="1.5" />
    <circle cx="88" cy="100" r="30" fill="none" stroke="#38bdf8" stroke-width="1.5" />
    <!-- 6 shared electrons (3 dots, 3 crosses) -->
    <circle cx="67" cy="88" r="2.2" fill="#34d399" />
    <circle cx="67" cy="100" r="2.2" fill="#34d399" />
    <circle cx="67" cy="112" r="2.2" fill="#34d399" />
    <text x="71" y="91" fill="#f87171" font-size="10" font-weight="bold">×</text>
    <text x="71" y="103" fill="#f87171" font-size="10" font-weight="bold">×</text>
    <text x="71" y="115" fill="#f87171" font-size="10" font-weight="bold">×</text>
    <!-- Lone pairs on outer edges -->
    <circle cx="30" cy="100" r="2.2" fill="#34d399" />
    <circle cx="30" cy="108" r="2.2" fill="#34d399" />
    <text x="105" y="103" fill="#f87171" font-size="10" font-weight="bold">×</text>
    <text x="105" y="111" fill="#f87171" font-size="10" font-weight="bold">×</text>
    <text x="70" y="155" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">N ≡ N</text>
  </g>

  <!-- Card 4: Water H2O -->
  <g transform="translate(485, 45)">
    <rect width="145" height="180" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
    <text x="72" y="22" fill="#a78bfa" font-size="11" font-weight="bold" text-anchor="middle">Water (H₂O)</text>
    <text x="72" y="36" fill="#94a3b8" font-size="9" text-anchor="middle">Two single bonds</text>
    <circle cx="72" cy="95" r="28" fill="none" stroke="#f87171" stroke-width="1.5" />
    <circle cx="48" cy="122" r="16" fill="none" stroke="#38bdf8" stroke-width="1.2" />
    <circle cx="96" cy="122" r="16" fill="none" stroke="#38bdf8" stroke-width="1.2" />
    <text x="72" y="98" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">O</text>
    <text x="44" y="125" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">H</text>
    <text x="100" y="125" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">H</text>
    <!-- Shared pairs -->
    <circle cx="56" cy="112" r="2" fill="#38bdf8" />
    <text x="59" y="115" fill="#f87171" font-size="9" font-weight="bold">×</text>
    <circle cx="85" cy="112" r="2" fill="#38bdf8" />
    <text x="88" y="115" fill="#f87171" font-size="9" font-weight="bold">×</text>
    <!-- 2 lone pairs on O -->
    <text x="72" y="75" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">× ×</text>
    <text x="72" y="155" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">H — O — H</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "covalent-bonding",
    title: "Covalent Bonding & Molecule Types",
    type: "text",
    bondingSimulator: {
      initialMode: "covalent"
    },
    content: `
### 🤝 What is a Covalent Bond?

A **covalent bond** is formed when non-metal atoms share pairs of electrons to achieve stable, full outer shells (noble gas electron configuration).

> [!IMPORTANT]
> ### 🧮 Definition: Covalent Bond
> A **covalent bond** is the strong **electrostatic attraction between the shared pair of electrons and the positive nuclei** of the bonding non-metal atoms.

#### 📋 Types of Covalent Bonds:
1. **Single Bond:** One shared pair of electrons ($2\\text{ electrons}$ total).
   * *Examples:* Chlorine $Cl_2$, Hydrogen $H_2$, Hydrogen chloride $HCl$, Methane $CH_4$, Water $H_2O$.
2. **Double Bond:** Two shared pairs of electrons ($4\\text{ electrons}$ total).
   * *Examples:* Oxygen gas $O_2$, Ethene $C_2H_4$, Carbon dioxide $CO_2$.
3. **Triple Bond:** Three shared pairs of electrons ($6\\text{ electrons}$ total).
   * *Examples:* Nitrogen gas $N_2$.

> ${svgToken(covalentDotAndCrossSvg)}

> [!BOX]
> ### 🔬 Diatomic Molecules vs Compounds
> * **Diatomic Molecules of Elements:** Consist of two identical non-metal atoms: $H_2, N_2, O_2, F_2, Cl_2, Br_2, I_2$.
> * **Polyatomic Elements:** Sulfur $S_8$, Phosphorus $P_4$.
> * **Covalent Compounds:** Contain different non-metals: $H_2O, CO_2, CH_4, NH_3, HCl, C_2H_5OH$ (ethanol).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Electron Arrangement in Nitrogen (N2)
> **Question:** Which diagram correctly represents the outer shell electron arrangement in a molecule of nitrogen ($N_2$)?
> 
> **A** Two nitrogen atoms sharing one pair of electrons, with 6 non-bonding electrons each
> 
> **B** Two nitrogen atoms sharing two pairs of electrons, with 4 non-bonding electrons each
> 
> **C** Two nitrogen atoms sharing three pairs of electrons (6 shared electrons), with one non-bonding lone pair (2 electrons) on each atom
> 
> **D** Two nitrogen atoms with 8 shared electrons in the overlap
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall Nitrogen Valence Electrons:**
> >    * Nitrogen is in Group V and has 5 outer electrons.
> > 2. **Calculate Required Electrons for an Octet:**
> >    * Each N needs 3 electrons to reach 8. Therefore, each N shares 3 electrons.
> >    * $3 + 3 = 6\\text{ electrons}$ shared in the overlap (a triple bond, $N \\equiv N$).
> > 3. **Count Non-Bonding Electrons (Lone Pairs):**
> >    * Out of 5 valence electrons, 3 are shared, leaving $5 - 3 = 2\\text{ non-bonding electrons}$ (one lone pair) on each nitrogen atom.
> > 4. **Conclusion:**
> >    * The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Molecule with Four Shared Electrons
> **Question:** A covalent molecule $\\text{M}$ contains a total of **four shared electrons**. What is the identity of $\\text{M}$?
> 
> **A** Ammonia, $NH_3$
> 
> **B** Hydrogen chloride, $HCl$
> 
> **C** Water, $H_2O$
> 
> **D** Methane, $CH_4$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Count Shared Pairs and Total Shared Electrons for Each Option:**
> >    * $HCl$: 1 single bond $= 1 \\text{ pair} = 2\\text{ shared electrons}$.
> >    * $NH_3$: 3 single $N-H$ bonds $= 3 \\text{ pairs} = 6\\text{ shared electrons}$.
> >    * $CH_4$: 4 single $C-H$ bonds $= 4 \\text{ pairs} = 8\\text{ shared electrons}$.
> >    * $H_2O$: 2 single $O-H$ bonds $= 2 \\text{ pairs} = 4\\text{ shared electrons}$.
> > 2. **Conclusion:**
> >    * Water ($H_2O$) has exactly 4 shared electrons in total. The correct option is **C**.
        `,
    keyPoints: [
      "Covalent bonds are electrostatic attractions between shared electron pairs and positive nuclei.",
      "Single bond = 2 shared electrons; Double bond = 4; Triple bond = 6.",
      "Water (H₂O) has 2 shared pairs (4 shared electrons); Nitrogen (N₂) has a triple bond (6 shared electrons)."
    ]
  },
  {
    id: "simple-molecular-vs-ionic",
    title: "Simple Molecular vs. Ionic Compounds",
    type: "text",
    content: `
### ⚖️ Comprehensive Comparison: Ionic vs. Molecular Compounds

In Cambridge IGCSE examinations, comparing the properties of ionic compounds against simple molecular covalent compounds is one of the most frequently assessed topics:

> [!IMPORTANT]
> ### 📊 Complete Comparison Table
> | Comparison Criteria | Ionic Compounds (e.g. $NaCl, MgO$) | Molecular Compounds (e.g. $H_2O, CH_4$) |
> | :--- | :--- | :--- |
> | **Particles Present** | **Charged ions** ($+$ cations &amp; $-$ anions) formed by transfer of electrons | **Neutral molecules** formed by sharing pairs of electrons |
> | **Forces Between Particles** | **Strong electrostatic attraction** throughout the giant 3D lattice | **Weak intermolecular forces** between individual molecules |
> | **Melting & Boiling Points** | **High:** Takes a huge amount of thermal energy to break the strong lattice | **Low:** Very little energy is needed to overcome weak intermolecular forces |
> | **Volatility** | **Low volatility** (do not evaporate easily) | **High volatility** (evaporate easily at room temperature) |
> | **Solubility in Water** | **Usually soluble** (water molecules hydrate and separate the ions) | **Mostly insoluble** in water (except polar ones like ethanol/sugar) |
> | **Electrical Conductivity** | **Conducts when molten or in aqueous solution** (ions free to move); Insulator when solid | **Non-conductor in all states** (no free-moving ions or delocalised electrons) |

> [!EXAMPLE]
> #### 📝 Worked Example 3: Comparing Melting Points
> **Question:** Why does sodium chloride ($NaCl$) have a high melting point ($801\\text{ }^{\\circ}\\text{C}$) while methane ($CH_4$) has a very low melting point ($-182\\text{ }^{\\circ}\\text{C}$)?
> 
> **A** Covalent bonds in $CH_4$ are weaker than the ionic bonds in $NaCl$
> 
> **B** Melting $NaCl$ breaks strong electrostatic forces in a giant lattice, while melting $CH_4$ only overcomes weak intermolecular forces
> 
> **C** $CH_4$ is a liquid at room temperature while $NaCl$ is an ionic gas
> 
> **D** Sodium chloride contains delocalised electrons
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Bonding Types:**
> >    * $NaCl$ has giant ionic lattice structure held by strong electrostatic bonds.
> >    * $CH_4$ has simple molecular structure.
> > 2. **Identify What Breaks During Melting:**
> >    * Melting a simple molecular substance does **not** break strong covalent bonds within the molecule; it only overcomes weak intermolecular forces between the molecules.
> > 3. **Conclusion:**
> >    * The correct option is **B**.
        `,
    keyPoints: [
      "Ionic compounds have high melting points and conduct electricity only when molten or dissolved.",
      "Simple molecular compounds have low melting points due to weak intermolecular forces.",
      "Melting simple molecules breaks weak intermolecular forces, NOT the strong covalent bonds."
    ]
  },
  {
    id: "giant-covalent",
    title: "Giant Covalent Structures (Macromolecules)",
    type: "text",
    content: `
### 💎 Giant Covalent Structures (Macromolecules)

**Macromolecules** (giant covalent structures) are substances where billions of atoms are held together by strong covalent bonds extending continuously in a giant lattice.

> [!NOTE]
> ### 🌿 Allotropes
> **Allotropes** are two or more different structural forms of the **same element** in the same physical state (e.g. Diamond and Graphite are allotropes of solid Carbon).

> [!BOX]
> ### 📊 Comparison: Diamond, Graphite, and Silicon Dioxide (Silica)
> | Property | Diamond (Carbon) | Graphite (Carbon) | Silica (Silicon(IV) Oxide, $SiO_2$) |
> | :--- | :--- | :--- | :--- |
> | **Appearance** | Colourless, transparent, sparkling crystal | Dark grey/black, dull, opaque solid | Colourless, transparent / white crystals (Quartz) |
> | **Hardness** | **Hardest known natural substance** (used in cutting tools and drill bits) | **Soft and slippery** (layers slide over each other; used as lubricant and pencil lead) | **Hard and rigid** (scratches glass; used in sandpaper) |
> | **Electrical Conductivity** | **Non-conductor** (no free electrons; all 4 outer electrons bonded) | **Good electrical conductor** (1 free delocalised electron per carbon atom; used in electrodes) | **Non-conductor** (all outer electrons are localized in covalent bonds) |
> | **Structure & Bonding** | Each $\\text{C}$ atom forms **4 strong covalent bonds** in a **rigid 3D tetrahedral lattice** | Each $\\text{C}$ forms **3 covalent bonds** in **flat hexagonal layers** held by weak forces | Each $\\text{Si}$ bonds to **4 oxygen atoms**, and each $\\text{O}$ bonds to **2 silicon atoms** |
> | **Melting Point** | **Extremely high** ($> 3500\\text{ }^{\\circ}\\text{C}$) | **Extremely high** ($> 3600\\text{ }^{\\circ}\\text{C}$) | **Very high** ($> 1600\\text{ }^{\\circ}\\text{C}$) |

> ${svgToken(macromoleculesSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 4: Comparing Diamond and Graphite
> **Question:** Which statement about graphite and diamond is correct?
> 
> **A** Diamond and graphite both have giant covalent structures
> 
> **B** Diamond is covalent, and graphite is ionic
> 
> **C** Diamond and graphite both conduct electricity
> 
> **D** Diamond has a high melting point, but graphite melts easily
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate Structure:**
> >    * Both diamond and graphite are allotropes of carbon and both form giant covalent macromolecules.
> > 2. **Check Conductivity and Melting Points:**
> >    * Diamond is an insulator, whereas graphite conducts. Both have extraordinarily high melting points ($> 3500\\text{ }^{\\circ}\\text{C}$).
> > 3. **Conclusion:**
> >    * The correct option is **A**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Diamond and Silicon(IV) Oxide Statements
> **Question:** Diamond and silicon(IV) oxide ($SiO_2$) both have giant structures. Which statements are correct?
> 1. Both substances are compounds
> 2. There are strong covalent bonds in diamond
> 3. Silicon(IV) oxide is bonded ionically
> 4. Both substances have very high melting points
> 
> **A** 2 and 3
> 
> **B** 1 and 2
> 
> **C** 3 and 4
> 
> **D** 2 and 4
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Examine Statement 1:** False. Diamond is an element (pure carbon), not a compound.
> > 2. **Examine Statement 2:** True. Diamond consists entirely of strong $C-C$ tetrahedral covalent bonds.
> > 3. **Examine Statement 3:** False. $SiO_2$ is a giant covalent macromolecule, not ionic.
> > 4. **Examine Statement 4:** True. Breaking the giant covalent networks in both requires huge thermal energy.
> > 5. **Conclusion:**
> >    * Statements 2 and 4 are correct. The correct option is **D**.
        `,
    keyPoints: [
      "Allotropes are different structural forms of the same element (e.g. Diamond and Graphite).",
      "Diamond has a 3D tetrahedral network of 4 bonds per carbon (hard, insulator).",
      "Graphite has 3 bonds per carbon in layers with delocalised electrons (soft lubricant, conductor).",
      "Silicon dioxide (SiO₂) has each Si bonded to 4 O atoms and each O bonded to 2 Si atoms."
    ]
  }
];

