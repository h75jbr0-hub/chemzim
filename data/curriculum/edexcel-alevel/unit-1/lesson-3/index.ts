import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Bonding & Structure";
export const lessonNumber = 3;

export const theoryMarkdown = `
# Topic 3: Bonding & Structure
This lesson covers the fundamentals of chemical bonding—including ionic, covalent, dative covalent, and metallic bonding—along with molecular geometry (VSEPR theory), giant structures, and physical properties.
`;

export const parts: LessonPart[] = [
  {
    id: 'valency-and-naming-20260627',
    title: 'Chemical Formulae, Valency & Naming',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧪 What is Valency?
> **Valency** represents the combining power of an atom or group of atoms.
> 1. **Definition:**
>    * The number of electrons that an atom loses, gains, or shares when forming chemical bonds.
> 2. **Valency by Periodic Table Group:**
>    
> | Group | I | II | III | IV | V | VI | VII | VIII |
> | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
> | Valency | 1 | 2 | 3 | 4 | 3 | 2 | 1 | 0 |
> | Typical Compound | NaCl | MgCl₂ | AlCl₃ | SiCl₄ | PCl₃ | H₂S | HCl | — |
> 
> 3. **Transition Metals:**
>    * Transition metals can exhibit variable valencies. This is indicated by a Roman numeral in parentheses next to the metal's name:
>    * *Zinc (Zn):* Always (II).
>    * *Copper (Cu):* Usually (II).
>    * *Silver (Ag):* Usually (I).
>    * *Iron (Fe):* Can be (II) or (III).

> [!BOX]
> ### 📋 Common Ionic Groups & Compound Ions
> The valency of a compound ion corresponds to the value of its electrical charge:
> 
> * **Valency 1 (Charge 1- / 1+):**
>   * Ammonium: NH₄⁺
>   * Hydroxide: OH⁻
>   * Nitrite: NO₂⁻
>   * Nitrate: NO₃⁻
>   * Hydrogen carbonate: HCO₃⁻
> * **Valency 2 (Charge 2-):**
>   * Sulfate: SO₄²⁻
>   * Carbonate: CO₃²⁻
> * **Valency 3 (Charge 3-):**
>   * Phosphate: PO₄³⁻

> [!TIP]
> ### 🏷️ Rules for Naming Compounds
> Follow these guidelines to name chemical compounds correctly:
> 
> 1. **Metals First:** Start with the name of the metal element if present.
>    * *Example:* AgBr is named **silver bromide**.
> 2. **Roman Numerals:** Add the Roman numeral for valency after the metal name if the metal can form more than one stable ion.
>    * *Example:* FeCl₂ is **iron(II) chloride**, whereas FeCl₃ is **iron(III) chloride**.
> 3. **Binary Compounds (-ide):** Compounds containing only two elements have names ending in **-ide**.
>    * *Example:* NaCl (sodium chloride), CaBr₂ (calcium bromide), Mg₃N₂ (magnesium nitride).
> 4. **Oxygen-Containing Groups (-ate):** Compounds containing a polyatomic compound ion (usually containing oxygen) end in **-ate**.
>    * *Example:* CaCO₃ (calcium carbonate), NaHCO₃ (sodium hydrogen carbonate), KNO₃ (potassium nitrate), MgSO₄ (magnesium sulfate), (NH₄)₃PO₄ (ammonium phosphate).
>    * *Organic Example:* CH₃COONa (sodium ethanoate).
> 5. **Numerical Prefixes:** Use prefixes to indicate the number of atoms in simple molecular compounds if the elements can form multiple combinations:
>    * CO: carbon monoxide | CO₂: carbon dioxide
>    * NO: nitrogen monoxide | NO₂: nitrogen dioxide
>    * SO₂: sulfur dioxide | SO₃: sulfur trioxide
>    * CCl₄: carbon tetrachloride | N₂O₃: dinitrogen trioxide
> 6. **Common Names:** Some compounds use universally accepted common names:
>    * H₂SO₄: sulfuric acid
>    * H₂O: water
>    * NH₃: ammonia
>    * CH₄: methane

> [!IMPORTANT]
> ### ✍️ Rules for Writing Chemical Symbols and Formulae
> 1. **Metal and Non-metal:** Always place the metal first.
>    * *Example:* NaF (sodium fluoride), K₂O (potassium oxide).
> 2. **Two Non-metals:** Start with:
>    * **Hydrogen** if it is present.
>      * *Example:* H₂S (hydrogen sulfide), HBr (hydrogen bromide).
>    * The atom with the **lower group number**.
>      * *Example:* CO₂ (carbon dioxide), NO (nitrogen monoxide).
> 3. **What does a Formula represent?**
>    * For giant structures (like NaCl), it tells us the simplest ratio of ions or atoms.
>    * For molecular compounds (like H₂O), it tells us the exact number of atoms in a single molecule.
> 4. **Balancing Chemical Formulae:**
>    * **Using Valency:** Swap and drop valency numbers after the symbols, then simplify to the lowest ratio to balance.
>    * **Using Charges:** Adjust subscripts until the sum of positive and negative charges equals zero.

> [!NOTE]
> ### ⚖️ Word and Symbol Equations
> Reactions are represented using either chemical names or symbols:
> 
> * **Word Equation:** A summary of a chemical reaction using the chemical names of reactants and products.
> * **Symbol Equation:** A summary using chemical symbols and formulae.
> * **State Symbols:** Physical states shown in parentheses:
>   * **(s):** solid
>   * **(l):** liquid
>   * **(g):** gas
>   * **(aq):** aqueous solution (substance dissolved in water)
> * **Redox Equations & Balancing:**
>   * **Oxidation:** Loss of electrons, or an increase in oxidation number.
>   * **Reduction:** Gain of electrons, or a decrease in oxidation number.
>   * **Balanced Equations:** Must have the same number of atoms of each element and the same total charge on both sides. In redox equations, we balance by splitting into oxidation and reduction half-equations, equating the number of electrons transferred, and summing them up.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Writing Formulae from Valencies
> **Question:** Write the chemical formula for:
> 1. Aluminium sulfate
> 2. Iron(III) oxide
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Aluminium sulfate:**
> >    * Identify the symbols and valencies: Aluminium (Al, valency 3) and Sulfate (SO₄, valency 2).
> >    * Cross over the valencies: Al₂(SO₄)₃.
> >    * Check charge balance: 2 × (+3) = +6 and 3 × (-2) = -6. Net charge is 0.
> >    * Formula: Al₂(SO₄)₃
> > 
> > 2. **Iron(III) oxide:**
> >    * Identify the symbols and valencies: Iron(III) (Fe, valency 3) and Oxide (O, valency 2).
> >    * Cross over the valencies: Fe₂O₃.
> >    * Check charge balance: 2 × (+3) = +6 and 3 × (-2) = -6. Net charge is 0.
> >    * Formula: Fe₂O₃

> [!EXAMPLE]
> #### 📝 Worked Example 2: Balancing Redox Half-Equations (Reduction)
> **Question:** Balance the half-equation for the reduction of dichromate(VI) ions to chromium(III) ions in acidic conditions:
> Cr₂O₇²⁻ + H⁺ → Cr³⁺ + H₂O
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Balance Chromium (Cr) atoms:**
> >    * Start with Cr atoms: Cr₂O₇²⁻ → 2Cr³⁺
> > 
> > 2. **Balance Oxygen (O) atoms:**
> >    * Add 7 H₂O to the right to balance O atoms: Cr₂O₇²⁻ → 2Cr³⁺ + 7H₂O
> > 
> > 3. **Balance Hydrogen (H) atoms:**
> >    * Add 14 H⁺ to the left to balance H atoms: Cr₂O₇²⁻ + 14H⁺ → 2Cr³⁺ + 7H₂O
> > 
> > 4. **Balance the electrical charge:**
> >    * Left side charge is (-2) + 14(+1) = +12. Right side charge is 2(+3) = +6.
> >    * Add 6 electrons (6e⁻) to the left side: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O

> [!EXAMPLE]
> #### 📝 Worked Example 3: Balancing Redox Half-Equations (Oxidation)
> **Question:** Balance the half-equation for the oxidation of iodide ions to iodine molecules:
> I⁻ → I₂
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Balance Iodine (I) atoms:**
> >    * Put a coefficient of 2 before iodide: 2I⁻ → I₂
> > 
> > 2. **Balance Oxygen (O) and Hydrogen (H) atoms:**
> >    * No O or H atoms are present, so no H₂O or H⁺ is needed.
> > 
> > 3. **Balance the electrical charge:**
> >    * Left side charge is -2. Right side charge is 0.
> >    * Add 2 electrons (2e⁻) to the right side to balance charge: 2I⁻ → I₂ + 2e⁻

> [!EXAMPLE]
> #### 📝 Worked Example 4: Constructing Combined Redox Equations
> **Question:** Construct the full balanced redox equation by combining the following half-equations:
> * Reduction: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O
> * Oxidation: H₂O₂ → O₂ + 2H⁺ + 2e⁻
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Equate the number of electrons transferred:**
> >    * The reduction reaction gains 5e⁻, while the oxidation reaction loses 2e⁻. The lowest common multiple is 10.
> >    * Multiply the reduction half-equation by 2: 2MnO₄⁻ + 16H⁺ + 10e⁻ → 2Mn²⁺ + 8H₂O
> >    * Multiply the oxidation half-equation by 5: 5H₂O₂ → 5O₂ + 10H⁺ + 10e⁻
> > 
> > 2. **Add both equations together:**
> >    * Left side: 2MnO₄⁻ + 5H₂O₂ + 16H⁺ + 10e⁻
> >    * Right side: 2Mn²⁺ + 5O₂ + 8H₂O + 10H⁺ + 10e⁻
> > 
> > 3. **Cancel common species from both sides:**
> >    * Cancel 10e⁻ from both sides.
> >    * Cancel 10 H⁺ from both sides (16H⁺ on the left becomes 6H⁺).
> >    * Net balanced equation: 2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂ + 8H₂O

> [!EXAMPLE]
> #### 📝 Worked Example 5: Predicting Formulae from Group Numbers
> **Question:** An element X is in Group V of the Periodic Table. It reacts with an element Y which is in Group II of the Periodic Table. What is the correct empirical formula of the ionic compound formed between Y and X?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the charges of the ions:**
> >    * Element Y is in Group II, so it loses 2 electrons to form a 2+ cation (Y²⁺).
> >    * Element X is in Group V, so it gains 3 electrons to complete its octet, forming a 3- anion (X³⁻).
> > 
> > 2. **Balance the charges to make the compound neutral:**
> >    * To balance charges between 2+ and 3-, find the lowest common multiple (which is 6).
> >    * We need three Y²⁺ ions ($3 \times +2 = +6$) and two X³⁻ ions ($2 \times -3 = -6$).
> > 
> > 3. **Write the empirical formula:**
> >    * Write the metal/cation first, followed by the non-metal/anion: Y₃X₂

> [!EXAMPLE]
> #### 📝 Worked Example 6: Interpreting Chemical Formulae
> **Question:** The chemical formulae for sodium chloride is NaCl and for water is H₂O. Explain what each of these formulae represents.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze H₂O:**
> >    * Water is a molecular compound. The formula H₂O represents the exact number of atoms of each element present in a single discrete molecule (2 hydrogen atoms and 1 oxygen atom).
> > 
> > 2. **Analyze NaCl:**
> >    * Sodium chloride is a giant ionic lattice. The formula NaCl does not represent a molecule but rather the simplest whole-number ratio of ions (1 sodium ion to 1 chloride ion) in the giant structure.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Balancing a Half-Equation
> **Question:** When the manganate(VII) ion, MnO₄⁻, acts as an oxidizing agent in acidic solution, it is reduced to manganese(II) ions, Mn²⁺, according to the following incomplete half-equation:
> MnO₄⁻ + a H⁺ + b e⁻ → Mn²⁺ + c H₂O
> What are the correct balancing coefficients for a, b, and c?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Balance Oxygen (O) atoms:**
> >    * There are 4 oxygen atoms on the left (in MnO₄⁻), so we must form 4 water molecules on the right.
> >    * Therefore, c = 4.
> > 
> > 2. **Balance Hydrogen (H) atoms:**
> >    * 4 water molecules (4 H₂O) contain 8 hydrogen atoms, so we need 8 H⁺ ions on the left.
> >    * Therefore, a = 8.
> > 
> > 3. **Balance electrical charges:**
> >    * The right-hand side has a net charge of +2 (from Mn²⁺).
> >    * The left-hand side currently has a charge of (-1 from MnO₄⁻) + (+8 from 8H⁺) = +7.
> >    * To make both sides equal to +2, we must add 5 negative electrons (5e⁻) to the left side.
> >    * Therefore, b = 5.
> > 
> > 4. **Summary of coefficients:**
> >    * a = 8, b = 5, c = 4
`,
    keyPoints: [
      'Valency represents the combining power of an element, determined by its group number or valence electrons.',
      'Transition metals exhibit variable oxidation states, which are indicated using Roman numerals in their systematic names.',
      'Chemical equations must be balanced for both mass (number of atoms of each element) and net electrical charge.'
    ]
  },
  {
    id: 'ionic-bonding-20260106',
    title: 'Ionic Bonding & Polarization',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚛️ Nature of Ionic Bonding & Crystals
> * **Ion Formation:**
>    * **Cation (positive ion):** Formed when an atom loses one or more valence electrons (typically metals).
>    * **Anion (negative ion):** Formed when an atom gains one or more valence electrons (typically non-metals).
> * **Ionic bonding:** The strong net electrostatic attraction between oppositely charged ions in a giant ionic lattice.
> * **Lattice Structure:** Ionic compounds form a regular 3D giant ionic lattice where positive and negative ions alternate in a regular array.
> * **Dot-and-Cross Diagrams:** Standard representations showing outer-shell electrons. Use dots ($\bullet$) for electrons of one atom and crosses ($\times$) for the other.
> * **Isoelectronic Ions:** Species with the same number of electrons and electronic configuration (e.g. $\text{N}^{3-}, \text{O}^{2-}, \text{F}^-, \text{Na}^+, \text{Mg}^{2+}, \text{Al}^{3+}$ all have $10$ electrons: $1s^2 2s^2 2p^6$).
> 
> > [!TIP]
> > ### 🧪 Learning Tip: Avoid saying "an ionic bond"
> > Avoid saying that there is an "ionic bond" between two specific ions. In an ionic solid, each ion interacts with many other ions of both the same and opposite charge throughout the lattice. The energy binding the lattice is the **lattice energy**, arising from net electrostatic attractions of all ions, not single isolated bonds.

> [!IMPORTANT]
> ### ⚡ Factors Affecting Ionic Bond Strength
> The strength of ionic bonding is measured by the **lattice energy** (the energy required to separate one mole of ionic solid into gaseous ions at an infinite distance). It is affected by:
> 
> 1. **Ionic Radius:** Smaller ions get closer to each other, strengthening the electrostatic attraction forces.
> 2. **Ionic Charge:** Ions with higher charges experience much stronger electrostatic attraction.
>    * *Charge vs Radius comparison:* The ionic radius of $\text{Mg}^{2+}$ ($0.072\text{ nm}$) is almost identical to that of $\text{Li}^+$ ($0.074\text{ nm}$). However, the doubled charge on $\text{Mg}^{2+}$ results in a massive increase in lattice energy ($\text{MgF}_2$ is $2957\text{ kJ mol}^{-1}$ compared to $\text{LiF}$ which is $1031\text{ kJ mol}^{-1}$).
> 
> #### 📊 Table A: Energy to separate ions to infinity (Lattice Energy) / $\text{kJ mol}^{-1}$
> 
> | Cation | $\text{F}^-$ | $\text{Cl}^-$ | $\text{Br}^-$ | $\text{I}^-$ |
> | :---: | :---: | :---: | :---: | :---: |
> | **$\text{Li}^+$** | 1031 | 848 | 803 | 759 |
> | **$\text{Na}^+$** | 918 | 780 | 742 | 705 |
> | **$\text{K}^+$** | 817 | 711 | 679 | 651 |
> | **$\text{Rb}^+$** | 783 | 685 | 656 | 628 |

> [!WARNING]
> ### 🧲 Polarization & Covalent Character
> * **Polarization Power:** The ability of a cation to attract and distort the electron density of a neighbouring anion.
> * **Polarization:** The distortion of the spherical electron cloud of an anion by the electrostatic pull of a cation.
> * **Cation Polarizing Power Formula:** An approximation of the charge density of a spherical cation is given by:
>   $$\text{Charge Density} \approx \frac{\text{charge}}{r^2}$$
>   *(where $r$ is the ionic radius).*
> * **Fajan's Rules for Increasing Polarization:**
>    1. **High Charge Density of Cation:** High positive charge and small ionic radius.
>       * **Group 1 Radii:** $\text{Li}^+$ ($0.076\text{ nm}$), $\text{Na}^+$ ($0.102\text{ nm}$), $\text{K}^+$ ($0.138\text{ nm}$), $\text{Rb}^+$ ($0.152\text{ nm}$). $\text{Li}^+$ has the highest polarizing power in Group 1.
>       * **Isoelectronic Cations (10 electrons):** $\text{Na}^+$ ($0.102\text{ nm}$, charge $+1$), $\text{Mg}^{2+}$ ($0.072\text{ nm}$, charge $+2$), $\text{Al}^{3+}$ ($0.054\text{ nm}$, charge $+3$). Polarizing power increases dramatically from $\text{Na}^+$ to $\text{Al}^{3+}$ because nuclear charge increases, pulling electrons closer and shrinking the radius while increasing positive charge.
>    2. **High Charge and Large Size of Anion:** The outer electron cloud of a large anion is easily distorted because it is far from its own nucleus and highly shielded.
>       * **Group 7 Radii:** $\text{F}^-$ ($0.133\text{ nm}$), $\text{Cl}^-$ ($0.181\text{ nm}$), $\text{Br}^-$ ($0.196\text{ nm}$), $\text{I}^-$ ($0.220\text{ nm}$). $\text{I}^-$ is the most polarizable.
>       * **Isoelectronic Anions (10 electrons):** $\text{N}^{3-}$ ($0.146\text{ nm}$), $\text{O}^{2-}$ ($0.140\text{ nm}$), $\text{F}^-$ ($0.133\text{ nm}$). $\text{N}^{3-}$ is the most polarizable due to its larger size and high $-3$ negative charge.
> * **Covalent Character:** High polarization leads to a sharing of electron density between the two nuclei, introducing covalent character into the predominantly ionic bonding (e.g., $\text{AlI}_3$ is significantly covalent, whereas $\text{AlF}_3$ is ionic).

> [!BOX]
> ### 📋 Physical Properties of Ionic Compounds
> 1. **High Melting & Boiling Points:** Due to the strong electrostatic attraction forces between oppositely charged ions in the lattice, which require a large amount of thermal energy to overcome.
> 2. **Electrical Conductivity:** 
>    * Insulators in the solid state because ions are fixed in position and cannot move.
>    * Good electrical conductors when molten or in aqueous solution because the lattice breaks down, allowing the ions to move freely as charge carriers.
>    * **The Lithium Nitride ($\text{Li}_3\text{N}$) Solid Conductivity Exception:** Uniquely, solid lithium nitride conducts electricity due to highly mobile lithium ions migrating through defects in its crystal lattice. Because of this solid conductivity, $\text{Li}_3\text{N}$ is used in solid-state batteries.
> 3. **Solubility in Water (Hydration):** 
>    * Usually soluble in polar water because the electrostatic attractions between the ions and the polar water molecules (hydration) release enough energy to overcome the ionic lattice forces.
>    * **Exothermic Nature:** Hydration of ions is always an **exothermic process** (energy is released as water molecules attract the ions).
>    * **Dipole Alignment:** The negatively polarized oxygen ends ($\delta^-$) of water molecules are attracted to positive cations ($\text{Na}^+$). The positively polarized hydrogen ends ($\delta^+$) are attracted to negative anions ($\text{Cl}^-$).
> 4. **Brittleness:** Ionic crystals are brittle. When stress is applied, the layers of ions slide over each other. This shifts ions of the same charge next to each other, causing strong electrostatic repulsion that splits the crystal apart.
> 
> ${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 300" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="cationGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#b91c1c" />
    </radialGradient>
    <radialGradient id="anionGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </radialGradient>
    <radialGradient id="oxygenGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f87171" />
      <stop offset="100%" stop-color="#dc2626" />
    </radialGradient>
    <radialGradient id="hydrogenGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e2e8f0" />
      <stop offset="100%" stop-color="#94a3b8" />
    </radialGradient>
  </defs>

  <rect width="650" height="300" rx="8" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" />

  <g transform="translate(170, 150)">
    <circle r="30" fill="url(#cationGrad)" stroke="#fca5a5" stroke-width="1.5" />
    <text y="5" fill="#ffffff" font-size="14" font-family="system-ui, sans-serif" font-weight="700" text-anchor="middle">Na+</text>
    <text y="48" fill="#cbd5e1" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle">Cation (Positive)</text>

    <g transform="translate(0, -75)">
      <circle r="14" fill="url(#oxygenGrad)" />
      <text y="4" fill="#ffffff" font-size="9" font-family="system-ui, sans-serif" text-anchor="middle">&#948;-</text>
      <circle cx="-13" cy="-10" r="8" fill="url(#hydrogenGrad)" />
      <circle cx="13" cy="-10" r="8" fill="url(#hydrogenGrad)" />
    </g>

    <g transform="translate(0, 75)">
      <circle r="14" fill="url(#oxygenGrad)" />
      <text y="4" fill="#ffffff" font-size="9" font-family="system-ui, sans-serif" text-anchor="middle">&#948;-</text>
      <circle cx="-13" cy="10" r="8" fill="url(#hydrogenGrad)" />
      <circle cx="13" cy="10" r="8" fill="url(#hydrogenGrad)" />
    </g>

    <g transform="translate(-75, 0)">
      <circle r="14" fill="url(#oxygenGrad)" />
      <text y="4" fill="#ffffff" font-size="9" font-family="system-ui, sans-serif" text-anchor="middle">&#948;-</text>
      <circle cx="-10" cy="-13" r="8" fill="url(#hydrogenGrad)" />
      <circle cx="-10" cy="13" r="8" fill="url(#hydrogenGrad)" />
    </g>

    <g transform="translate(75, 0)">
      <circle r="14" fill="url(#oxygenGrad)" />
      <text y="4" fill="#ffffff" font-size="9" font-family="system-ui, sans-serif" text-anchor="middle">&#948;-</text>
      <circle cx="10" cy="-13" r="8" fill="url(#hydrogenGrad)" />
      <circle cx="10" cy="13" r="8" fill="url(#hydrogenGrad)" />
    </g>

    <line x1="0" y1="-30" x2="0" y2="-61" stroke="#f87171" stroke-dasharray="3 3" stroke-width="1.5" />
    <line x1="0" y1="30" x2="0" y2="61" stroke="#f87171" stroke-dasharray="3 3" stroke-width="1.5" />
    <line x1="-30" y1="0" x2="-61" y2="0" stroke="#f87171" stroke-dasharray="3 3" stroke-width="1.5" />
    <line x1="30" y1="0" x2="61" y2="0" stroke="#f87171" stroke-dasharray="3 3" stroke-width="1.5" />
  </g>

  <g transform="translate(480, 150)">
    <circle r="36" fill="url(#anionGrad)" stroke="#a7f3d0" stroke-width="1.5" />
    <text y="5" fill="#ffffff" font-size="14" font-family="system-ui, sans-serif" font-weight="700" text-anchor="middle">Cl-</text>
    <text y="53" fill="#cbd5e1" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle">Anion (Negative)</text>

    <g transform="translate(0, -78)">
      <circle cy="-12" r="14" fill="url(#oxygenGrad)" />
      <circle cx="-11" cy="5" r="8" fill="url(#hydrogenGrad)" />
      <circle cx="11" cy="5" r="8" fill="url(#hydrogenGrad)" />
      <text x="-11" y="8" fill="#1e293b" font-size="7" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">&#948;+</text>
      <text x="11" y="8" fill="#1e293b" font-size="7" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">&#948;+</text>
    </g>

    <g transform="translate(0, 78)">
      <circle cy="12" r="14" fill="url(#oxygenGrad)" />
      <circle cx="-11" cy="-5" r="8" fill="url(#hydrogenGrad)" />
      <circle cx="11" cy="-5" r="8" fill="url(#hydrogenGrad)" />
      <text x="-11" y="-2" fill="#1e293b" font-size="7" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">&#948;+</text>
      <text x="11" y="-2" fill="#1e293b" font-size="7" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">&#948;+</text>
    </g>

    <g transform="translate(-78, 0)">
      <circle cx="-12" r="14" fill="url(#oxygenGrad)" />
      <circle cx="5" cy="-11" r="8" fill="url(#hydrogenGrad)" />
      <circle cx="5" cy="11" r="8" fill="url(#hydrogenGrad)" />
      <text x="5" y="-8" fill="#1e293b" font-size="7" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">&#948;+</text>
      <text x="5" y="14" fill="#1e293b" font-size="7" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">&#948;+</text>
    </g>

    <g transform="translate(78, 0)">
      <circle cx="12" r="14" fill="url(#oxygenGrad)" />
      <circle cx="-5" cy="-11" r="8" fill="url(#hydrogenGrad)" />
      <circle cx="-5" cy="11" r="8" fill="url(#hydrogenGrad)" />
      <text x="-5" y="-8" fill="#1e293b" font-size="7" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">&#948;+</text>
      <text x="-5" y="14" fill="#1e293b" font-size="7" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">&#948;+</text>
    </g>

    <line x1="0" y1="-36" x2="0" y2="-70" stroke="#a7f3d0" stroke-dasharray="3 3" stroke-width="1.5" />
    <line x1="0" y1="36" x2="0" y2="70" stroke="#a7f3d0" stroke-dasharray="3 3" stroke-width="1.5" />
    <line x1="-36" y1="0" x2="-70" y2="0" stroke="#a7f3d0" stroke-dasharray="3 3" stroke-width="1.5" />
    <line x1="36" y1="0" x2="70" y2="0" stroke="#a7f3d0" stroke-dasharray="3 3" stroke-width="1.5" />
  </g>

  <text x="325" y="30" fill="#cbd5e1" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Hydration of Ions in Aqueous Solution (Exothermic)</text>
</svg>`)}

> [!TIP]
> ### 🧪 Experimental Evidence for the Existence of Ions
> 1. **Migration of Ions (Electrolysis):**
>    * **Copper(II) chromate(VI) Experiment:** Electrolysis of a green copper(II) chromate(VI) solution ($\text{CuCrO}_4\text{(aq)}$). The solution turns green because it contains blue $\text{Cu}^{2+}\text{(aq)}$ ions and yellow $\text{CrO}_4^{2-}\text{(aq)}$ ions. Under electric current, the blue $\text{Cu}^{2+}$ ions migrate towards the negative electrode (cathode), and the yellow $\text{CrO}_4^{2-}$ ions migrate towards the positive electrode (anode), creating visible blue and yellow bands.
>    * **Potassium Manganate(VII) Experiment:** Placed on wet filter paper; the purple $\text{MnO}_4^-$ ions migrate towards the positive anode.
> 2. **Electron Density Maps:** Obtainable via X-ray diffraction. In ionic structures like $\text{NaCl}$:
>    * The contour lines of electron density are completely separate and do not merge, confirming that the ions are separate spherical entities with no shared electron density.
>    * We can identify the ions because the sodium ion ($\text{Na}^+$) is smaller (fewer and tighter contour circles) than the chloride ion ($\text{Cl}^-$) which has larger and more expansive contour circles.
> 3. **Lattice Energy Comparisons:** Good agreement between experimental and theoretical (purely ionic model) lattice energies confirms a purely ionic structure. A large difference indicates significant polarization (covalent character).
> 4. **Electrical Conductivity:** Conducting in molten/solution states but not solid state proves the presence of mobile charged particles (ions).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Polarization Trends
> **Question:** Predict which of the following compounds has the highest degree of covalent character: $\\text{MgCl}_2$, $\\text{MgBr}_2$, or $\\text{BaCl}_2$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the cation effect:**
> >    * Magnesium ($\\text{Mg}^{2+}$) is smaller than barium ($\\text{Ba}^{2+}$) while having the same $+2$ charge
> >    * Therefore, $\\text{Mg}^{2+}$ has a higher charge density and greater polarizing power than $\\ Ba^{2+}$
> > 2. **Analyze the anion effect:**
> >    * Bromide ($\\text{Br}^-$) is larger than chloride ($\\text{Cl}^-$)
> >    * Therefore, the outer electron cloud of $\\text{Br}^-$ is more polarizable than $\\text{Cl}^-$
> > 3. **Conclude:**
> >    * The combination of the highly polarizing $\\text{Mg}^{2+}$ cation and the highly polarizable $\\text{Br}^-$ anion makes **$\\text{MgBr}_2$** the compound with the greatest polarization and thus the highest covalent character

> [!EXAMPLE]
> #### 📝 Worked Example 2: Comparing Melting Points
> **Question:** Which of the following compounds has the highest melting point (least polarization): $\\text{NaCl}$, $\\text{KCl}$, $\\text{KF}$, or $\\text{NaF}$?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine polarization criteria for high melting point:**
> >    * The highest melting point corresponds to the strongest ionic bond, which occurs when there is the **least polarization** (most purely ionic model)
> > 2. **Compare cations ($\\text{Na}^+$ vs $\\text{K}^+$):**
> >    * $\\text{Na}^+$ has a smaller ionic radius than $\\text{K}^+$, resulting in stronger electrostatic attractions in $\\text{Na}^+$ salts
> > 3. **Compare anions ($\\text{F}^-$ vs $\\text{Cl}^-$):**
> >    * $\\text{F}^-$ is smaller and has a lower polarizability than $\\text{Cl}^-$, meaning it is less distorted and maintains a purely ionic character
> > 4. **Conclude:**
> >    * Combining the small, highly attracting $\\text{Na}^+$ cation and the small, least polarizable $\\text{F}^-$ anion gives **$\\text{NaF}$** the strongest ionic bond and the highest melting point

> [!EXAMPLE]
> #### 📝 Worked Example 3: Comparing Ion Polarization
> **Question:** Which of the following compounds exhibits the greatest polarization: $\\text{NaCl}$, $\\text{KCl}$, $\\text{KF}$, or $\\text{NaF}$?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine factors increasing polarization:**
> >    * Polarization is maximized by a cation with high polarizing power (small size, high charge) and an anion with high polarizability (large size, high charge)
> > 2. **Compare cations ($\text{Na}^+$ vs $\text{K}^+$):**
> >    * $\text{Na}^+$ is smaller than $\text{K}^+$ with the same $+1$ charge, so $\text{Na}^+$ has a higher polarizing power
> > 3. **Compare anions ($\text{F}^-$ vs $\text{Cl}^-$):**
> >    * $\text{Cl}^-$ is larger than $\text{F}^-$, so the outer electron cloud of $\text{Cl}^-$ is more polarizable (more easily distorted)
> > 4. **Conclude:**
> >    * The combination of the more polarizing cation ($\text{Na}^+$) and the more polarizable anion ($\text{Cl}^-$) makes **$\text{NaCl}$** the compound with the greatest polarization

> [!EXAMPLE]
> #### 📝 Worked Example 4: Covalent Character in Period 3
> **Question:** Which of the following compounds has the greatest covalent character: $\text{MgF}_2$, $\text{NaF}$, $\text{NaBr}$, or $\text{MgBr}_2$?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Relate covalent character to polarization:**
> >    * The greatest covalent character is caused by the greatest polarization of the anion by the cation
> > 2. **Select the most polarizing cation:**
> >    * $\text{Mg}^{2+}$ has a higher charge ($+2$) and a smaller size than $\text{Na}^+$ ($+1$), giving $\text{Mg}^{2+}$ significantly higher polarizing power
> > 3. **Select the most polarizable anion:**
> >    * $\text{Br}^-$ has a larger ionic radius than $\text{F}^-$, making it much more polarizable
> > 4. **Conclude:**
> >    * The compound **$\text{MgBr}_2$** combines the highly polarizing $\text{Mg}^{2+}$ and the highly polarizable $\text{Br}^-$, resulting in the greatest polarization and the highest covalent character

> [!EXAMPLE]
> #### 📝 Worked Example 5: Identifying Least Polarized Lattices
> **Question:** Which of the following compounds exhibits the least polarization: $\text{NaCl}$, $\text{LiCl}$, $\text{KF}$, or $\text{NaBr}$?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine factors for least polarization:**
> >    * Least polarization occurs with a cation of lowest polarizing power (large size, low charge) and an anion of lowest polarizability (small size, low charge)
> > 2. **Compare cations ($\text{Li}^+$, $\text{Na}^+$, $\text{K}^+$):**
> >    * $\text{K}^+$ is the largest Group 1 cation listed, so it has the lowest polarizing density
> > 3. **Compare anions ($\text{F}^-$, $\text{Cl}^-$, $\text{Br}^-$):**
> >    * $\text{F}^-$ is the smallest halide anion listed, making it the least polarizable (most resistant to distortion)
> > 4. **Conclude:**
> >    * **$\text{KF}$** combines the least polarizing cation ($\text{K}^+$) and the least polarizable anion ($\text{F}^-$), resulting in the least polarization (most purely ionic bonding model)

> [!EXAMPLE]
> #### 📝 Worked Example 9: Drawing Dot-and-Cross Diagrams for Calcium Fluoride
> **Question:** Calcium reacts with fluorine to form the ionic compound calcium fluoride ($\text{CaF}_2$). Draw a dot-and-cross diagram to show the electronic changes and the ions formed in this reaction (show outer-shell electrons only).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the electronic configurations of the neutral atoms:**
> >    * Calcium (Ca, $Z=20$) has the configuration $2, 8, 8, 2$. It has $2$ valence electrons.
> >    * Fluorine (F, $Z=9$) has the configuration $2, 7$. It has $7$ valence electrons, needing $1$ more to complete its octet.
> > 
> > 2. **Describe the electron transfer:**
> >    * One Calcium atom loses its $2$ valence electrons, forming a $\text{Ca}^{2+}$ cation with a stable octet ($2, 8, 8$ outer configuration).
> >    * Since each Fluorine atom can only accept $1$ electron, two Fluorine atoms are required to accept the $2$ electrons from the Calcium atom. This forms two $\text{F}^-$ fluoride anions.
> > 
> > 3. **Draw the ions using dot-and-cross notation:**
> >    * **Calcium cation ($\text{Ca}^{2+}$):** Draw a sphere with no valence electrons (or show the full inner shell with crosses), with square brackets and a $2+$ charge.
> >    * **Fluoride anions ($2 \times [\text{F}]^-$):** Draw two fluoride spheres. Each has $7$ dots ($\bullet$) representing fluorine's original valence electrons, and $1$ cross ($\times$) representing the electron transferred from Calcium, inside square brackets with a $1-$ charge.
> >    * Net representation:
> >      $$[\text{Ca}]^{2+} \quad 2 \times [ \text{F} ]^-$$

> [!EXAMPLE]
> #### 📝 Worked Example 10: Explaining Lattice Energy Ratios
> **Question:** Suggest why the strength of ionic bonding in calcium oxide ($\text{Ca}^{2+}\text{O}^{2-}$) is approximately four times larger than that in potassium fluoride ($\text{K}^+\text{F}^-$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **State the relationship between electrostatic force and ionic charge:**
> >    * The electrostatic force of attraction ($F$) in an ionic lattice is directly proportional to the product of the ionic charges ($q_+ \times q_-$):
> >      $$F \propto \frac{q_+ \times q_-}{d^2}$$
> > 
> > 2. **Compare the charges of both compounds:**
> >    * For Potassium Fluoride ($\text{K}^+\text{F}^-$): Cation charge = $+1$, Anion charge = $-1$. Product of charges = $1 \times 1 = 1$.
> >    * For Calcium Oxide ($\text{Ca}^{2+}\text{O}^{2-}$): Cation charge = $+2$, Anion charge = $-2$. Product of charges = $2 \times 2 = 4$.
> > 
> > 3. **Compare the ionic radii (interionic distance, $d$):**
> >    * The sizes of the ions are comparable: the interionic distances in both crystal lattices are very similar.
> > 
> > 4. **Conclude:**
> >    * Because the product of the charges in $\text{CaO}$ ($4$) is four times larger than in $\text{KF}$ ($1$), and their interionic distances are similar, the electrostatic attraction throughout the lattice is approximately four times stronger. This results in a lattice energy that is about four times greater.

> [!EXAMPLE]
> #### 📝 Worked Example 11: Calculating Cation Polarizing Power (Charge Densities)
> **Question:** Arrange the following cations in order of increasing polarizing power (lowest to highest), calculating their approximate charge densities using the formula $\text{charge density} \approx \text{charge} / r^2$:
> * $\text{Li}^+$ (radius $0.076\text{ nm}$)
> * $\text{Na}^+$ (radius $0.102\text{ nm}$)
> * $\text{Mg}^{2+}$ (radius $0.072\text{ nm}$)
> * $\text{Al}^{3+}$ (radius $0.054\text{ nm}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the approximate charge density for each cation:**
> >    * For $\text{Li}^+$:
> >      $$\text{Charge density} \approx \frac{1}{(0.076)^2} = \frac{1}{0.005776} \approx 173.1\text{ charge nm}^{-2}$$
> >    * For $\text{Na}^+$:
> >      $$\text{Charge density} \approx \frac{1}{(0.102)^2} = \frac{1}{0.010404} \approx 96.1\text{ charge nm}^{-2}$$
> >    * For $\text{Mg}^{2+}$:
> >      $$\text{Charge density} \approx \frac{2}{(0.072)^2} = \frac{2}{0.005184} \approx 385.8\text{ charge nm}^{-2}$$
> >    * For $\text{Al}^{3+}$:
> >      $$\text{Charge density} \approx \frac{3}{(0.054)^2} = \frac{3}{0.002916} \approx 1028.8\text{ charge nm}^{-2}$$
> > 
> > 2. **Analyze and explain the order:**
> >    * Comparing Group 1 cations, $\text{Na}^+$ is larger than $\text{Li}^+$, so it has a lower polarizing density.
> >    * Comparing cations with higher charges ($\text{Mg}^{2+}$ and $\text{Al}^{3+}$), they are significantly smaller and have higher charges, which dramatically increases their polarizing power.
> [!NOTE]
> ### 🤝 Covalent Bonding & Orbital Overlap
> * **Definition:** A covalent bond is the strong electrostatic attraction between the shared pair of electrons (in the overlapping region of atomic orbitals) and the nuclei of the two bonded atoms.
> * **Orbital Overlap Types:**
>    1. **s-s Orbital Overlap:** Spherical s-orbitals overlap head-to-head along the internuclear axis to form a sigma ($\sigma$) bond (e.g. in $\text{H}_2$).
>    2. **p-p End-on Overlap:** Dumbbell-shaped p-orbitals overlap head-to-head along the internuclear axis to form a sigma ($\sigma$) bond (e.g. in $\text{Cl}_2$).
>    3. **s-p End-on Overlap (Polar Covalent Exception):** An s-orbital from one atom overlaps head-to-head with a p-orbital from a different element. This almost always leads to an unequal sharing of electrons, forming a **polar covalent bond**.
>    4. **p-p Sideways Overlap:** p-orbitals overlap sideways (parallel) to form a pi ($\pi$) bond, with electron density concentrated in two regions above and below the internuclear axis.
> * **Sigma ($\sigma$) vs Pi ($\pi$) Bond Strength:**
>    * **$\sigma$ Bonds are stronger:** Overlap is along the internuclear axis (end-on), yielding maximum orbital overlap and placing the shared electron density directly between the two positive nuclei.
>    * **$\pi$ Bonds are weaker:** Overlap is sideways (parallel), placing the shared electron density further from the positive nuclei. Additionally, a $\pi$ bond cannot form unless a $\sigma$ bond has already been established.
> * **Bond Types:**
>    * **Single Bond:** composed of $1\sigma$ bond.
>    * **Double Bond:** composed of $1\sigma$ and $1\pi$ bond (e.g., in ethene $\text{C}_2\text{H}_4$, which makes alkenes highly reactive compared to alkanes because the weaker $\pi$ bond breaks easily to undergo addition reactions).
>    * **Triple Bond:** composed of $1\sigma$ and $2\pi$ bonds (e.g., in nitrogen $\text{N}_2$, which is extremely unreactive due to the massive strength of its triple bond).
> 
> ${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 380" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="sOrbGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.8" />
    </radialGradient>
    <linearGradient id="pLobeA" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fb923c" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#ea580c" stop-opacity="0.8" />
    </linearGradient>
    <linearGradient id="pLobeB" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f472b6" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#db2777" stop-opacity="0.8" />
    </linearGradient>
  </defs>

  <rect width="650" height="380" rx="8" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" />

  <g transform="translate(150, 90)">
    <circle cx="-25" cy="0" r="30" fill="url(#sOrbGrad)" stroke="#38bdf8" stroke-width="1" />
    <circle cx="25" cy="0" r="30" fill="url(#sOrbGrad)" stroke="#38bdf8" stroke-width="1" />
    <path d="M 0,-16.5 A 30 30 0 0 1 0,16.5 A 30 30 0 0 1 0,-16.5" fill="#fef08a" opacity="0.5" />
    <circle cx="-25" cy="0" r="2.5" fill="#ffffff" />
    <circle cx="25" cy="0" r="2.5" fill="#ffffff" />
    <text y="52" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">s-s orbital overlap (sigma bond)</text>
    <text y="-40" fill="#38bdf8" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">1. Head-to-Head (s-s)</text>
  </g>

  <g transform="translate(480, 90)">
    <g transform="translate(-40, 0)">
      <path d="M 0,0 C -25,-18 -35,-18 -35,0 C -35,18 -25,18 0,0 Z" fill="url(#pLobeA)" stroke="#ea580c" stroke-width="0.8" />
      <path d="M 0,0 C 25,-18 35,-18 35,0 C 35,18 25,18 0,0 Z" fill="url(#pLobeB)" stroke="#db2777" stroke-width="0.8" />
      <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
    </g>
    <g transform="translate(40, 0)">
      <path d="M 0,0 C -25,-18 -35,-18 -35,0 C -35,18 -25,18 0,0 Z" fill="url(#pLobeB)" stroke="#db2777" stroke-width="0.8" />
      <path d="M 0,0 C 25,-18 35,-18 35,0 C 35,18 25,18 0,0 Z" fill="url(#pLobeA)" stroke="#ea580c" stroke-width="0.8" />
      <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
    </g>
    <ellipse cx="0" cy="0" rx="7" ry="10" fill="#fef08a" opacity="0.5" />
    <text y="52" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">p-p end-on overlap (sigma bond)</text>
    <text y="-40" fill="#38bdf8" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">2. Head-to-Head (p-p)</text>
  </g>

  <g transform="translate(150, 260)">
    <circle cx="-35" cy="0" r="30" fill="url(#sOrbGrad)" stroke="#38bdf8" stroke-width="1" />
    <circle cx="-35" cy="0" r="2.5" fill="#ffffff" />
    <g transform="translate(25, 0)">
      <path d="M 0,0 C -25,-18 -35,-18 -35,0 C -35,18 -25,18 0,0 Z" fill="url(#pLobeB)" stroke="#db2777" stroke-width="0.8" />
      <path d="M 0,0 C 25,-18 35,-18 35,0 C 35,18 25,18 0,0 Z" fill="url(#pLobeA)" stroke="#ea580c" stroke-width="0.8" />
      <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
    </g>
    <path d="M -7.5,-12 A 30 30 0 0 1 -7.5,12 A 12 12 0 0 1 -7.5,-12" fill="#fef08a" opacity="0.5" />
    <text y="52" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">s-p end-on overlap (polar sigma bond)</text>
    <text y="-40" fill="#38bdf8" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">3. Head-to-Head (s-p)</text>
  </g>

  <g transform="translate(480, 260)">
    <g transform="translate(-30, 0)">
      <path d="M 0,0 C -18,-25 -18,-35 0,-35 C 18,-35 18,-25 0,0 Z" fill="url(#pLobeA)" stroke="#ea580c" stroke-width="0.8" />
      <path d="M 0,0 C -18,25 -18,35 0,35 C 18,35 18,25 0,0 Z" fill="url(#pLobeB)" stroke="#db2777" stroke-width="0.8" />
      <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
    </g>
    <g transform="translate(30, 0)">
      <path d="M 0,0 C -18,-25 -18,-35 0,-35 C 18,-35 18,-25 0,0 Z" fill="url(#pLobeA)" stroke="#ea580c" stroke-width="0.8" />
      <path d="M 0,0 C -18,25 -18,35 0,35 C 18,35 18,25 0,0 Z" fill="url(#pLobeB)" stroke="#db2777" stroke-width="0.8" />
      <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
    </g>
    <path d="M -30,-22 Q 0,-35 30,-22 Q 0,-15 -30,-22 Z" fill="#fef08a" opacity="0.4" />
    <path d="M -30,22 Q 0,15 30,22 Q 0,35 -30,22 Z" fill="#fef08a" opacity="0.4" />
    <text y="52" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">p-p sideways overlap (pi bond)</text>
    <text y="-40" fill="#38bdf8" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">4. Side-by-Side (p-p)</text>
  </g>
</svg>`)}

> [!IMPORTANT]
> ### 🔗 Factors Affecting Covalent Bond Strength
> 1. **Bond Length:** The average distance between the nuclei of two atoms that are covalently bonded together. The shorter the bond, the greater its strength, as the shared electrons are closer to both positive nuclei, resulting in stronger electrostatic attraction forces.
> 2. **Bond Multiplicity:** Triple bonds are shorter and stronger than double bonds, which in turn are shorter and stronger than single bonds of the same kind:
> ### ⚠️ Exceptions to the Octet Rule
> Some atoms do not follow the octet rule when forming covalent bonds:
> 1. **Less than 8 outer electrons (Incomplete Octet):** $\text{H}$ (max 2), $\text{He}$, $\text{Be}$ (in $\text{BeCl}_2$, 4 electrons), and $\text{B}$ (in $\text{BF}_3$, 6 electrons)
> 2. **More than 8 outer electrons (Expanded Octet):** Elements in Period 3 and below (with -ate suffix like $\text{S}$ in sulfate $\text{SO}_4^{2-}$ and $\text{P}$ in phosphate $\text{PO}_4^{3-}$) can expand their octet due to the presence of empty, low-lying d-orbitals

> [!IMPORTANT]
> ### 🏹 Dative Covalent (Coordinate) Bonding
> * **Definition:** A dative covalent bond forms when one atom provides both electrons of the shared pair to overlap with an empty orbital of another atom (acceptor).
> * **Arrow Notation:** In displayed structural formulae, a dative covalent bond is represented by an arrow ($\rightarrow$) pointing from the donor atom to the acceptor atom.
> * **Important Formations & Mechanics:**
>    1. **Ammonium Ion ($\text{NH}_4^+$):** The empty $1s$ orbital of an $\text{H}^+$ ion overlaps with the lone pair of the nitrogen atom in a neutral ammonia ($\text{NH}_3$) molecule. Once formed, all four $\text{N-H}$ bonds are identical in length and strength.
>    2. **Hydroxonium Ion ($\text{H}_3\text{O}^+$):** The empty $1s$ orbital of an $\text{H}^+$ ion overlaps with one of the lone pairs on the oxygen atom of a water ($\text{H}_2\text{O}$) molecule.
>    3. **Aluminium Chloride Dimer ($\text{Al}_2\text{Cl}_6$):** At low temperatures or in the gas phase, monomeric $\text{AlCl}_3$ molecules (where Aluminium is electron-deficient with only 6 outer electrons) combine. A lone pair from a chlorine atom on one $\text{AlCl}_3$ molecule is donated to the empty orbital of the aluminium atom on the neighboring $\text{AlCl}_3$ molecule, and vice-versa, forming two chlorine bridges.
> 
> > [!TIP]
> > ### 🧪 Learning & Exam Tips:
> > * **Lone Pairs in Displayed vs. Dot-and-Cross:** While it is essential to show all non-bonding (lone) pairs of electrons in a dot-and-cross diagram, it is **not necessary** to show them in a displayed formula (where bonds are shown as lines).
> > * **Halogen Non-Bonding Electrons:** When drawing dot-and-cross diagrams for molecules like chloromethane ($\text{CH}_3\text{Cl}$), do not forget to show all three non-bonding lone pairs ($6$ electrons) on the chlorine atom.
> > * **What is NOT a Molecule:** Remember that simple/discrete molecules are electrically neutral groups of atoms. Giant ionic lattices ($\text{NaCl}$), giant covalent networks (diamond, graphite, graphene), and metals are **not** composed of molecules.
> 
> * **Common Dative Structures:**
> 
> | Species Name | Formula | Cation / Anion / Molecule | Dative Source |
> | :--- | :---: | :--- | :--- |
> | Ammonium ion | $\text{NH}_4^+$ | Cation | Nitrogen donates lone pair to $\text{H}^+$ |
> | Hydronium ion | $\text{H}_3\text{O}^+$ | Cation | Oxygen donates lone pair to $\text{H}^+$ |
> | Nitrate ion | $\text{NO}_3^-$ | Anion | Nitrogen donates lone pair to one oxygen |
> | Ozone | $\text{O}_3$ | Molecule | Central oxygen donates lone pair to terminal oxygen |
> | Sulfur dioxide | $\text{SO}_2$ | Molecule | Sulfur donates lone pair to oxygen |
> | Carbon monoxide | $\text{CO}$ | Molecule | Oxygen donates lone pair to carbon |
> | Nitrous oxide | $\text{N}_2\text{O}$ | Molecule | Central nitrogen donates lone pair to oxygen |
> | Chlorine dioxide | $\text{ClO}_2$ | Molecule | Chlorine donates lone pair to oxygen |
> | Ammonia borane | $\text{NH}_3\text{BF}_3$ | Adduct Molecule | Nitrogen in $\text{NH}_3$ donates lone pair to Boron |
> | Beryllium chloride dimer | $\text{Be}_2\text{Cl}_4$ | Dimer Molecule | Chlorine donates lone pair to Beryllium |
> | Aluminium chloride dimer | $\text{Al}_2\text{Cl}_6$ | Dimer Molecule | Chlorine donates lone pair to Aluminium |

\`\`\`carousel
![Ammonium Ion NH₄⁺](/images/lessons/ammonium.svg)
<!-- slide -->
![Hydronium Ion H₃O⁺](/images/lessons/hydronium.svg)
<!-- slide -->
![Aluminium Chloride Dimer Al₂Cl₆](/images/lessons/al2cl6.svg)
<!-- slide -->
![Carbon Monoxide CO](/images/lessons/carbon_monoxide.svg)
<!-- slide -->
![Ozone Molecule O₃](/images/lessons/ozone.svg)
<!-- slide -->
![Ammonia Borane NH₃BF₃](/images/lessons/ammonia_borane.svg)
<!-- slide -->
![Nitrate Ion NO₃⁻](/images/lessons/nitrate.svg)
<!-- slide -->
![Sulfur Dioxide SO₂](/images/lessons/sulfur_dioxide.svg)
\`\`\`

> [!NOTE]
> ### 🧪 Chemical Properties of $\text{AlCl}_3$
> * **Aluminium Trichloride ($\text{AlCl}_3$) Properties:**
>    1. Exists as an ionic lattice in the solid state but vaporises as a covalent dimer molecule $\text{Al}_2\text{Cl}_6$ in the gas phase (held together by two dative bonds)
>    2. Has very low melting and boiling points for a metal chloride
>    3. Reacts vigorously with water to release acidic hydrogen chloride gas:
>
>       $\text{AlCl}_3\text{(s)} + 3\text{H}_2\text{O}\text{(l)} \rightarrow \text{Al(OH)}_3\text{(s)} + 3\text{HCl}\text{(g)}$
> * **Why Boron Trichloride ($\text{BCl}_3$) Cannot Form a Dimer ($\text{B}_2\text{Cl}_6$):**
>    * Due to the small size of the central boron atom, it is geometrically impossible to pack four large chlorine atoms around it into a stable tetrahedral arrangement
>    * The resulting steric repulsion between the chlorine atoms destabilizes any potential dimer structure

> [!WARNING]
> ### 🧲 Electronegativity, Bond Polarity & Maps
> * **Electronegativity:** The ability of an atom to attract the bonding pair of electrons in a covalent bond.
> * **Periodic Trends:** Increases across a period (nuclear charge increases while shielding remains similar) and decreases down a group (increased shells and shielding increase distance to nucleus).
>   * *Fluorine vs Chlorine:* Fluorine is the most electronegative element (4.0). Even though Chlorine has more protons, Fluorine is smaller ($n=2$ vs $n=3$), meaning the bonding pair is closer to the nucleus and attracted much more strongly.
> 
> #### 📊 Table B: Pauling Electronegativity Values
> 
> | Element | H | Li | Be | B | C | N | O | F | Na | Mg | Al | Si | P | S | Cl | K | Ca | Br | I |
> | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
> | **EN Value** | 2.1 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 | 3.5 | 4.0 | 0.9 | 1.2 | 1.5 | 1.8 | 2.1 | 2.5 | 3.0 | 0.8 | 1.0 | 2.8 | 2.5 |
> 
> * **Bond Polarity & Dipoles:** 
>   * **Pure Covalent Bond:** Non-polar covalent bonds (sometimes called 'normal' or 'pure' covalent bonds) form between atoms with identical or very similar electronegativities (equal sharing).
>   * **Polar Covalent Bond:** Formed when there is an electronegativity difference between two atoms, causing the bonding pair of electrons to be pulled closer to the more electronegative atom (represented by $H^{\delta+} - Cl^{\delta-}$ or $H \rightarrow Cl$).
> * **The Bonding Continuum:** Covalent and ionic bonding are not completely separate categories but rather two extremes of a continuous spectrum of bonding types.
> 
> #### 📊 Table C: Electronegativity Difference ($\Delta\text{EN}$) vs. % Ionic Character
> 
> | $\Delta\text{EN}$ | 0 | 0.2 | 0.4 | 0.6 | 0.8 | 1.0 | 1.2 | 1.4 | 1.6 | 1.7 | 1.8 | 2.0 | 2.2 | 2.4 | 2.6 | 2.8 | 3.0 | 3.2 |
> | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
> | **% Ionic Character** | 0% | 1% | 4% | 9% | 15% | 22% | 30% | 39% | 47% | **51%** | 55% | 63% | 70% | 76% | 82% | 86% | 89% | 91% |
> 
>   * *Predominant Bonding Type:* A difference of **1.7** represents exactly **51%** ionic character. This is the boundary where a compound transitions from being predominantly covalent to being predominantly ionic.
> * **Electron Density Maps:** Obtainable via X-ray diffraction, showing contour lines representing electron probability densities.
>   1. **Symmetrical Distribution:** Symmetrical contours centered around both nuclei, indicating equal electron sharing (e.g. in homonuclear diatomic molecules like $\text{Cl}_2$ or $\text{H}_2$).
>   2. **Asymmetrical Distribution:** Contour lines are distorted and spaced closer together around the more electronegative atom, indicating a polar covalent bond (e.g. in $\text{HCl}$ where density shifts to Chlorine).
> 
> ${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 240" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="650" height="240" rx="8" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" />

  <g transform="translate(170, 110)">
    <path d="M -50,-10 C -50,-25 -25,-25 0,-15 C 25,-25 50,-25 50,-10 C 50,10 25,15 0,15 C -25,15 -50,10 -50,-10 Z" fill="none" stroke="#38bdf8" stroke-width="1" />
    <path d="M -45,-8 C -45,-20 -25,-20 0,-11 C 25,-20 45,-20 45,-8 C 45,8 25,11 0,11 C -25,11 -45,8 -45,-8 Z" fill="none" stroke="#38bdf8" stroke-width="1.2" />
    <circle cx="-30" cy="-2" r="16" fill="none" stroke="#38bdf8" stroke-width="1.4" />
    <circle cx="30" cy="-2" r="16" fill="none" stroke="#38bdf8" stroke-width="1.4" />
    <circle cx="-30" cy="-2" r="8" fill="none" stroke="#38bdf8" stroke-width="1.5" />
    <circle cx="30" cy="-2" r="8" fill="none" stroke="#38bdf8" stroke-width="1.5" />
    
    <circle cx="-30" cy="-2" r="2.5" fill="#ffffff" />
    <circle cx="30" cy="-2" r="2.5" fill="#ffffff" />
    <text x="-30" y="22" fill="#cbd5e1" font-size="10" font-family="system-ui" text-anchor="middle">Cl (3.0)</text>
    <text x="30" y="22" fill="#cbd5e1" font-size="10" font-family="system-ui" text-anchor="middle">Cl (3.0)</text>
    
    <text x="0" y="65" fill="#38bdf8" font-size="12" font-family="system-ui" font-weight="bold" text-anchor="middle">Symmetrical (Non-polar Cl₂)</text>
  </g>

  <g transform="translate(480, 110)">
    <path d="M -50,-10 C -50,-20 -25,-22 5,-15 C 28,-28 55,-28 55,-10 C 55,10 28,15 5,15 C -25,15 -50,10 -50,-10 Z" fill="none" stroke="#fb923c" stroke-width="1" />
    <path d="M -42,-8 C -42,-16 -20,-18 5,-12 C 25,-24 50,-24 50,-8 C 50,8 25,12 5,12 C -20,12 -42,8 -42,-8 Z" fill="none" stroke="#fb923c" stroke-width="1.2" />
    <circle cx="-25" cy="-2" r="12" fill="none" stroke="#fb923c" stroke-width="1.4" />
    <circle cx="25" cy="-2" r="22" fill="none" stroke="#fb923c" stroke-width="1.4" />
    <circle cx="25" cy="-2" r="14" fill="none" stroke="#fb923c" stroke-width="1.5" />
    <circle cx="25" cy="-2" r="7" fill="none" stroke="#fb923c" stroke-width="1.6" />
    
    <circle cx="-25" cy="-2" r="2" fill="#ffffff" />
    <circle cx="25" cy="-2" r="2.5" fill="#ffffff" />
    <text x="-25" y="22" fill="#cbd5e1" font-size="10" font-family="system-ui" text-anchor="middle">H (2.1)</text>
    <text x="25" y="30" fill="#cbd5e1" font-size="10" font-family="system-ui" text-anchor="middle">Cl (3.0)</text>
    <text x="-25" y="-18" fill="#fb923c" font-size="11" font-weight="bold" font-family="system-ui" text-anchor="middle">&#948;+</text>
    <text x="25" y="-28" fill="#fb923c" font-size="11" font-weight="bold" font-family="system-ui" text-anchor="middle">&#948;-</text>
    
    <text x="0" y="65" fill="#fb923c" font-size="12" font-family="system-ui" font-weight="bold" text-anchor="middle">Asymmetrical (Polar HCl)</text>
  </g>

  <text x="325" y="30" fill="#cbd5e1" font-size="14" font-weight="bold" font-family="system-ui" text-anchor="middle">X-ray Electron Density Map Comparison</text>
</svg>`)}

\`\`\`carousel
![Symmetrical Covalent Overlap](/images/lessons/density_symmetrical.svg)
<!-- slide -->
![Asymmetrical Covalent Overlap](/images/lessons/density_asymmetrical.svg)
<!-- slide -->
![Polarized Ionic](/images/lessons/density_polarized_ionic.svg)
<!-- slide -->
![Pure Ionic Model](/images/lessons/density_pure_ionic.svg)
\`\`\`


> [!BOX]
> ### 🕸️ Giant Covalent Lattices & Allotropes
> * **Giant Covalent Lattice:** A strong, massive three-dimensional network in which billions of atoms are held together by strong covalent bonds throughout the entire structure (e.g. diamond, graphite, graphene, silica, and boron nitride)
> * **Allotropes:** More than one physical form of the same element in the same physical state (e.g. diamond, graphite, and graphene are all allotropes of carbon)
> 
> | Feature | Diamond | Graphite | Graphene |
> | :--- | :--- | :--- | :--- |
> | Structure | Rigid 3D tetrahedral arrangement (bond angles $109.5^\circ$) | Flat 2D layers of hexagonal rings (bond angles $120^\circ$) | A single, flat 2D sheet of carbon atoms (one layer of graphite, $120^\circ$) |
> | Bonding | Each carbon atom forms 4 strong $\sigma$ bonds to 4 other carbon atoms | Each carbon atom forms 3 $\sigma$ bonds. The 4th electron is in a p-orbital and delocalises between the layers | Each carbon atom forms 3 $\sigma$ bonds. The 4th electron is in a p-orbital and delocalises across the single layer |
> | Appearance | Colourless, transparent, highly lustrous crystal | Dark grey, opaque, lustrous solid | Ultra-thin, nearly transparent sheet |
> | Hardness | Hardest natural substance known (used in cutting tools and drill bits) | Very soft and slippery (layers slide over each other easily; used in lubricants and pencils) | Extremely strong (about 200 times stronger than steel by weight; used in composites) |
> | Conductivity | Non-conductor (all valence electrons are localized in covalent bonds) | Good conductor parallel to its layers (delocalised electrons move freely between layers) | Excellent electrical conductor (free electrons move rapidly across the layer) |
> 
> * **High Melting Points:** Giant covalent structures have extremely high melting points because a huge amount of energy is required to break the strong covalent bonds holding the lattice together
> * **Graphite Conductivity Limitation:** Delocalised electrons in graphite are restricted within the hexagonal planes. As a result, graphite conducts electricity **only parallel to its layers** and is an insulator perpendicular to the layers.
> * **Graphite as a Lubricant (Gas Requirement):** Graphite can function as an effective lubricant only when gas molecules (like water vapour or oxygen) are present to be adsorbed and trapped between the layers, reducing friction. In a vacuum (e.g. in space), graphite loses its lubricating properties because the layers cannot slide as easily without these trapped gas particles; space-based lubricants use molybdenum disulfide ($\text{MoS}_2$) or hexagonal boron nitride ($\text{BN}$).
> * **Diamond Thermal Properties:** Despite being an electrical insulator, diamond has a very high thermal conductivity (even higher than metals like copper) because its rigid, strong 3D tetrahedral covalent network transfers lattice vibrations (phonons) exceptionally fast. Real diamonds are verified using a thermal conductivity probe (heats up quickly, but feels cool to the touch like ice).
> * **Graphene Properties:** Graphene is the thinnest material on Earth (one atom thick), 200 times stronger than steel, and is an excellent thermal conductor. It has a unique **self-repair mechanism** where holes in the sheet are automatically filled when exposed to carbon-containing gases (hydrocarbons), as carbon atoms perfectly align into the hexagonal pattern. A sheet of graphene can be rolled to produce carbon nanotubes or spherical buckminsterfullerenes ($\text{C}_{60}$).
> * **Allotrope Geometry vs Cyclohexane:** Graphite and graphene consist of flat, planar hexagonal carbon rings with $120^\circ$ bond angles due to $sp^2$ hybridisation. In contrast, cyclohexane (C₆H₁₂) is a simple molecular compound that has a puckered 6-membered ring structure (chair or boat conformation) to maintain tetrahedral $109.5^\circ$ bond angles (all $sp^3$ carbons)
> * **Silica Lattice (SiO₂):** Silicon(IV) oxide possesses a giant covalent tetrahedral structure very similar to diamond:
>    * Each silicon atom is covalently bonded to 4 oxygen atoms
>    * Each oxygen atom is covalently bonded to 2 silicon atoms
>    * It has a high melting point and does not conduct electricity
> 
> #### 📦 Molecular Lattices & Solids
> * **Iodine ($\text{I}_2$):** Exists as diatomic molecules arranged in a regular face-centred cubic lattice. The molecules are held together in the solid structure by weak London dispersion forces.
> * **Other Molecular Solids:** Examples include sulfur ($\text{S}_8$ ring molecules), white phosphorus ($\text{P}_4$ tetrahedra), dry ice (solid $\text{CO}_2$), buckminsterfullerene ($\text{C}_{60}$), sucrose ($\text{C}_{12}\text{H}_{22}\text{O}_{11}$), and solid alkanes (such as paraffin wax). All have low melting points because melting only breaks weak intermolecular attractions.

> [!IMPORTANT]
> ### 🧪 Intermolecular Forces in Simple Molecules
> While giant covalent structures require breaking covalent bonds, simple covalent molecules only require overcoming weak intermolecular forces (IMFs) to melt or boil. These intermolecular forces tend to increase (leading to higher melting/boiling points) with:
> 1. **Number of Electrons:** More electrons per molecule increase the polarizability of the electron cloud, creating stronger temporary dipole-induced dipole forces (London dispersion forces)
>    $$\\text{I}_2 > \\text{Br}_2 > \\text{Cl}_2$$
> 2. **Length of Organic Molecule (Molecular Mass $M_r$):** Longer carbon chains have more surface area of contact, enabling more points of electrostatic attraction between adjacent molecules:
>    $$C₈H₁₈ > C₃H₈$$


> [!EXAMPLE]
> #### 📝 Worked Example 1: Dative Bond Identification
> **Question:** Describe how a dative covalent bond is formed in the hydronium ion ($\\text{H}_3\\text{O}^+$) and identify the donor species
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the species involved:**
> >    * A water molecule ($\\text{H}_2\\text{O}$) and a hydrogen ion ($\\text{H}^+$)
> > 2. **Check electron configurations:**
> >    * The oxygen atom in $\\text{H}_2\\text{O}$ has two bonding pairs and two lone pairs of electrons
> >    * The $\\text{H}^+$ ion has zero electrons and an empty $1s$ orbital
> > 3. **Explain the donation:**
> >    * The oxygen atom in water donates one of its lone pairs of electrons to the empty orbital of the $\\text{H}^+$ ion
> >    * Oxygen is the electron donor, and the $\\text{H}^+$ ion is the electron acceptor, forming the hydronium ion ($\\text{H}_3\\text{O}^+$)

> [!EXAMPLE]
> #### 📝 Worked Example 2: Comparing Dimerization of Group 13 Halides
> **Question:** Explain why aluminium chloride forms a stable dimer ($\\text{Al}_2\\text{Cl}_6$) in the gas phase, whereas boron trichloride ($\\text{BCl}_3$) remains as a monomer
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare central atom atomic sizes:**
> >    * Boron (Period 2) is a much smaller atom than aluminium (Period 3)
> > 2. **Evaluate geometry and steric crowding:**
> >    * Chlorine atoms are relatively large. In a dimer structure (like $\\text{B}_2\\text{Cl}_6$), four chlorine atoms would have to pack closely around each central boron atom in a tetrahedral geometry
> > 3. **Analyse the repulsion:**
> >    * Due to the very small size of the boron atom, these four large chlorine atoms would experience severe steric (electrostatic) repulsion, destabilizing the dimer
> >    * Aluminium is larger, allowing four chlorine atoms to pack comfortably around it without significant repulsion
> > 4. **Conclude:**
> >    * $\\text{AlCl}_3$ dimerizes into stable $\\text{Al}_2\\text{Cl}_6$, whereas $\\text{BCl}_3$ remains monomeric due to the small size of boron preventing dimer formation

> [!EXAMPLE]
> #### 📝 Worked Example 3: Anomalous Bond Enthalpy of Fluorine (F₂)
> **Question:** The bond enthalpy of the halogen diatomic molecules generally decreases down the group. However, the bond enthalpy of F–F in fluorine gas (158 kJ/mol) is anomalously weak compared to Cl–Cl in chlorine gas (242 kJ/mol), despite fluorine atoms being smaller. Explain this anomaly.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare atomic sizes and bond lengths:**
> >    * Fluorine atoms are in Period 2 and are smaller than chlorine atoms (Period 3).
> >    * As a result, the F–F covalent bond length is extremely short, bringing the nuclei and the non-bonding valence electron shells of the two atoms very close together.
> > 
> > 2. **Analyze lone pair repulsion:**
> >    * Each fluorine atom possesses three non-bonding lone pairs of electrons in its valence shell.
> >    * Because the bond length is so short, these highly concentrated lone pairs on adjacent fluorine atoms are brought into close proximity.
> >    * This creates intense electrostatic repulsion between the lone pairs of the two fluorine atoms.
> > 
> > 3. **Conclude the effect on bond strength:**
> >    * This strong inter-electron repulsion opposes the attractive force of the shared bonding pair, significantly weakening the covalent bond and reducing the F–F bond enthalpy.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Explaining Boiling Point Trends in Halogens
> **Question:** Explain the trend in the boiling points of the halogens: chlorine (-34°C), bromine (59°C), and iodine (184°C).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the structure and forces:**
> >    * Halogens are simple molecular structures consisting of non-polar diatomic molecules (Cl₂, Br₂, I₂).
> >    * To boil these substances, weak intermolecular forces (temporary dipole-induced dipole forces or London dispersion forces) must be overcome, not covalent bonds.
> > 
> > 2. **Analyze the number of electrons:**
> >    * Down Group 7, the number of shells and total electrons per molecule increases: Cl₂ (34), Br₂ (70), I₂ (106).
> > 
> > 3. **Relate electrons to polarizability:**
> >    * An increase in the number of electrons makes the electron cloud larger and more easily polarized (higher polarizability).
> >    * This leads to stronger temporary dipole-induced dipole attractions (London forces) between adjacent molecules.
> > 
> > 4. **Conclude:**
> >    * Stronger intermolecular forces require more thermal energy to overcome, resulting in a steady increase in boiling point down the group from Cl₂ to I₂.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Dative Covalent Bonding in Aluminium Chloride Dimer (Al₂Cl₆)
> **Question:** Describe the dative covalent bonding in a molecule of aluminium chloride dimer, Al₂Cl₆, and identify the donor and acceptor atoms.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the monomer components:**
> >    * The dimer is composed of two AlCl₃ units. Each aluminium atom is electron-deficient (only has 6 valence electrons).
> > 2. **Explain the coordinate bond formation:**
> >    * A chlorine atom from one AlCl₃ unit donates a lone pair of electrons to the empty octet orbital of the aluminium atom in the other AlCl₃ unit.
> >    * Simultaneously, a chlorine atom from the second unit donates a lone pair to the first aluminium atom.
> > 3. **Conclude:**
> >    * This dual donation forms two bridging dative covalent bonds, satisfying the octet rule for both aluminium atoms.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Giant Structures of Carbon Allotropes
> **Question:** Which of the following does not have a structure formed by a giant lattice of carbon? Explain why.
> * **A:** Fullerene $\\text{C}_{60}$
> * **B:** Diamond
> * **C:** Graphite
> * **D:** Graphene
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate giant allotropes:**
> >    * Diamond, graphite, and graphene consist of giant networks of carbon atoms held together entirely by strong covalent bonds in 3D or 2D.
> > 2. **Evaluate Fullerene $\\\\text{C}_{60}$:**
> >    * Buckminsterfullerene ($\\\\text{C}_{60}$) consists of small, discrete football-shaped molecular cages.
> >    * While covalent bonds exist within each cage, the bulk solid structure is held together by weak intermolecular forces (London dispersion forces).
> > 3. **Conclude:**
> >    * Fullerene $\\\\text{C}_{60}$ is simple molecular, making **Option A** the correct answer.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Graphene Properties and Applications
> **Question:** Graphene is widely used in electronic components like touch screens. Explain the property of graphene that makes it suitable for this application.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand graphene structure:**
> >    * Graphene is a single 2D layer of carbon atoms arranged in a hexagonal lattice.
> > 2. **Identify key properties:**
> >    * Each carbon atom is bonded to 3 others, leaving one unbonded valence electron in a p-orbital.
> >    * These 4th valence electrons delocalise across the entire sheet and are highly mobile, providing **excellent electrical conductivity**.
> >    * Being only one atom thick, it is also highly transparent and flexible.
> > 3. **Conclude:**
> >    * The combination of transparency and high electrical conductivity makes it ideal for touch screens.

> [!EXAMPLE]
> #### 📝 Worked Example 8: Comparing CO₂ and SiO₂ Bonding
> **Question:** Compare and contrast the covalent bonding in carbon dioxide (CO₂) and silicon dioxide (SiO₂) in terms of orbital overlap.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Carbon Dioxide (CO₂) Covalent Bonding:**
> >    * Carbon dioxide has a simple molecular structure.
> >    * Each carbon atom is bonded to two oxygen atoms with a double bond for each ($C=O$).
> >    * Each double bond consists of one $\sigma$ bond (formed by head-to-head orbital overlap) and one $\pi$ bond (formed by side-by-side overlap of p-orbitals).
> > 
> > 2. **Silicon Dioxide (SiO₂) Covalent Bonding:**
> >    * Silicon dioxide has a giant covalent structure.
> >    * Each silicon atom is bonded to four oxygen atoms.
> >    * This is achieved through four single covalent bonds, which are all $\sigma$ bonds (formed by along-the-axis orbital overlap).
    `,
    keyPoints: [
      'A covalent bond is the electrostatic attraction between a shared pair of electrons and the nuclei.',
      'Sigma bonds are stronger head-to-head overlaps along the axis; pi bonds are weaker sideways overlaps.',
      'Dative covalent bonds involve one atom donating both electrons (e.g. $\\text{NH}_4^+$, $\\text{H}_3\\text{O}^+$, $\\text{Al}_2\\text{Cl}_6$).',
      'Electronegativity differences determine bond polarity, shown as asymmetrical overlaps on electron density maps.'
    ]
  },
  {
    id: 'metallic-bonding-20260106',
    title: 'Metallic Bonding & Giant Structures',
    type: 'text',
    content: `
> [!NOTE]
> ### 🪙 Nature of Metallic Bonding
> * **Lattice Structure:** Metals possess a giant, regular 3D lattice of closely packed positive metal ions (cations) surrounded by a sea of delocalised electrons
> * **Metallic Bond:** The strong electrostatic attraction between the closely packed positive metal ions and the mobile, delocalised valence electrons
> * **Delocalisation and Conductivity:** As the number of delocalised valence electrons increases, the electrical conductivity increases:
>   $$\\\\text{Al} > \\\\text{Mg} > \\\\text{Na}$$

> [!IMPORTANT]
> ### 📈 Factors Affecting Metallic Bond Strength
> The strength of a metallic bond determines the melting point and physical strength of the metal. It depends on:
> 
> 1. **Charge of the Cation:** Cations with higher charges (e.g. $\\\\text{Al}^{3+}$ vs $\\\\text{Na}^+$) exert a stronger electrostatic pull on the delocalised electrons
> 2. **Number of Delocalised Electrons:** More donated valence electrons per atom create a denser electron cloud
> 3. **Ionic Radius:** Smaller cations can pack closer to the delocalised electron cloud, strengthening attractions
> * **Example Trend:** Melting points increase significantly across Period 3:
>   $$\\\\text{Na (Group 1, } 98^\\\\circ\\\\text{C)} < \\\\text{Mg (Group 2, } 650^\\\\circ\\\\text{C)} < \\\\text{Al (Group 13, } 660^\\\\circ\\\\text{C)}$$

> [!BOX]
> ### 📋 Key Physical Properties of Metals
> 1. **High Melting & Boiling Points:** It requires a large amount of thermal energy to break the strong metallic bonds throughout the giant lattice. (Exceptions: Mercury $\\\\text{Hg}$ is a liquid at r.t.p., and Group 1 metals like Sodium $\\\\text{Na}$ have low melting points)
> 2. **Electrical Conductivity:** Excellent conductors in both solid and liquid states:
>    * Under a potential difference, mobile delocalised electrons flow in a specific direction (towards the positive terminal)
>    * **Group Trend:** Conductivity **decreases down a group** because the size of the ions increases and the number of delocalised electrons per unit volume (charge density) decreases
>    * **Period Trend:** Conductivity **increases across a period** because there are more delocalised electrons per atom
>    * **Best Conductors:** Silver ($\\\\text{Ag}$) is the best electrical conductor, followed closely by Copper ($\\\\text{Cu}$)
> 3. **Thermal Conductivity:** Good conductors of heat because:
>    * The delocalised electrons are free to move in all directions and pass kinetic energy rapidly
>    * The positive cations are closely packed and vibrate against each other, passing the kinetic energy along
> 4. **Malleability and Ductility:**
>    * **Malleable:** Can be bent, pressed, or hammered into thin sheets without breaking
>    * **Ductile:** Can be stretched (drawn) into thin wires
>    * **Explanation:** When pressure is applied, the layers of positive ions can slide over each other. The sea of delocalised electrons is mobile, moves with the positive ions, and maintains the bonding throughout the distortion
> * **Special Application (Aluminium):** Aluminium is used for overhead power cables because of its **low density** (lightweight), **high electrical conductivity**, **high ductility**, and **resistance to corrosion** due to the protective oxide layer ($\\\\text{Al}_2\\\\text{O}_3$)

> [!BOX]
> ### 📋 Giant Lattices Overview
> Elements and compounds form different macro-structures based on their bonding:
> 
> | Structure Type | Bonding | Structural Units | Examples |
> | :--- | :--- | :--- | :--- |
> | Giant Ionic | Ionic | Positive and negative ions | NaCl, MgO, CaF₂ |
> | Giant Covalent | Covalent | Atoms bonded in a 3D network | Diamond, Graphite, Silicon, SiO₂ |
> | Giant Metallic | Metallic | Metal cations and delocalised electrons | Copper, Iron, Sodium |
> | Simple Molecular | Covalent (intramolecular), Intermolecular (weak) | Individual molecules | H₂O, CO₂, I₂, P₄ |

> [!EXAMPLE]
> #### 📝 Worked Example 1: Metallic Trends
> **Question:** Explain why magnesium has a significantly higher melting point than sodium
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare charge and electrons:**
> >    * Magnesium forms $\\\\text{Mg}^{2+}$ ions and contributes 2 delocalised electrons per atom
> >    * Sodium forms $\\\\text{Na}^+$ ions and contributes only 1 delocalised electron per atom
> > 2. **Compare size:**
> >    * The $\\\\text{Mg}^{2+}$ cation has a smaller ionic radius than the $\\\\text{Na}^+$ cation due to a higher nuclear charge (12 protons vs 11 protons) pulling the same core electronic shells closer
> > 3. **Conclude:**
> >    * Magnesium has a higher charge density and double the concentration of delocalised electrons, resulting in much stronger electrostatic attractions in its metallic lattice, requiring more thermal energy to break

> [!EXAMPLE]
> #### 📝 Worked Example 2: Period 3 Metallic Trends
> **Question:** Which of the following rows correctly describes the trends in Period 3 metals from Sodium ($\\\\text{Na}$) to Aluminium ($\\\\text{Al}$)?
> 
> | Row | Number of delocalised electrons per atom | Strength of metallic bond | Electrical conductivity |
> | :--- | :--- | :--- | :--- |
> | A | Increases | Decreases | Decreases |
> | B | Increases | Increases | Increases |
> | C | Decreases | Increases | Increases |
> | D | Decreases | Decreases | Decreases |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze electron count:**
> >    * Moving from $\\\\text{Na}$ ($[\\\\text{Ne}]3s^1$) to $\\\\text{Al}$ ($[\\\\text{Ne}]3s^2 3p^1$), the number of delocalised electrons donated to the sea increases (1 to 2 to 3)
> > 2. **Analyze bond strength:**
> >    * Because the charge on the metal cation increases and size decreases, the electrostatic attraction between the cations and the electron sea increases, making the metallic bond stronger
> > 3. **Analyze electrical conductivity:**
> >    * More delocalised electrons per atom increase the density of charge carriers, enhancing electrical conductivity
> > 4. **Conclude:**
> >    * All three parameters increase from $\\\\text{Na}$ to $\\\\text{Al}$, making **Row B** the correct answer

> [!EXAMPLE]
> #### 📝 Worked Example 3: Explaining Malleability
> **Question:** Metals are characterized by being malleable and ductile. Which statement best explains why a piece of copper can be hammered into thin sheets without breaking?
> 
> * **A:** The delocalised electrons repel each other, pushing the positive ions apart
> * **B:** Covalent bonds between copper atoms are flexible and can stretch easily
> * **C:** Layers of positive copper ions can slide over each other while the sea of delocalised electrons maintains the structure
> * **D:** Copper atoms change their electronic configuration under high pressure to form weaker bonds
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze metallic distortion:**
> >    * When force is applied to copper, the positive cations slide over each other in layers
> > 2. **Analyze how the bond is maintained:**
> >    * The sea of delocalised electrons is highly mobile and flows with the cations, maintaining the electrostatic attraction between the ions and the sea throughout the movement
> > 3. **Conclude:**
> >    * This sliding without loss of bonding prevents the metal from shattering, making **Statement C** the correct explanation

> [!EXAMPLE]
> #### 📝 Worked Example 4: Group Conductivity Trend
> **Question:** Explain why the electrical conductivity of Group 1 metals decreases down the group from lithium to potassium
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the number of charge carriers:**
> >    * All Group 1 metals ($\\\\text{Li}$, $\\\\text{Na}$, $\\\\text{K}$) contribute exactly 1 delocalised valence electron per atom
> > 2. **Analyze size and density:**
> >    * Down Group 1, the atomic and ionic radius increases significantly due to the addition of extra quantum shells
> >    * Because the volume of the positive ions increases, the number of ions and delocalised electrons per unit volume (charge density) decreases
> > 3. **Analyze electron mobility and attraction:**
> >    * The delocalised valence electrons are further from the positive nuclei of the larger cations, meaning they experience more resistance to movement through the larger lattice structure
> > 4. **Conclude:**
> >    * The decrease in charge density and increased path resistance down the group results in a decrease in electrical conductivity

> [!EXAMPLE]
> #### 📝 Worked Example 5: Overhead Power Cables Material Choice
> **Question:** Overhead power cables are used to transmit high-voltage electricity over long distances. Explain why aluminium is preferred over copper for this application despite copper having a higher electrical conductivity
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyse density and weight:**
> >    * Aluminium has a much lower density than copper (it is lightweight)
> >    * This reduces the mechanical load on the supporting pylons, preventing the heavy cables from sagging or snapping
> > 2. **Analyse physical properties (ductility):**
> >    * Aluminium is highly ductile, meaning it can be easily drawn into the long thin wires required for cables
> > 3. **Analyse chemical resistance (corrosion):**
> >    * Aluminium reacts rapidly with oxygen in the air to form a tough, protective surface layer of aluminium oxide ($\\\\text{Al}_2\\\\text{O}_3$)
> >    * This layer is impermeable and completely protects the inner metal from further chemical weathering and corrosion, ensuring long-term durability in outdoor conditions

> [!EXAMPLE]
> #### 📝 Worked Example 6: Identifying Structure and Bonding from Physical Properties
> **Question:** The table below shows the physical properties of four substances, P, Q, R, and S.
> 
> | Substance | Melting Point (°C) | Electrical Conductivity as Solid | Electrical Conductivity as Liquid | Solubility in Water |
> | :---: | :---: | :---: | :---: | :---: |
> | P | 1085 | Good | Good | Insoluble |
> | Q | -114 | Poor | Poor | Soluble |
> | R | 801 | Poor | Good | Soluble |
> | S | 3550 | Poor | Poor | Insoluble |
> 
> Deduce the structure and bonding type for each substance.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce for Substance P:**
> >    * High melting point (1085°C) and conducts electricity in both solid and liquid states.
> >    * This is typical of a metal with free mobile delocalised electrons.
> >    * **Structure and Bonding:** Giant metallic lattice.
> > 
> > 2. **Deduce for Substance Q:**
> >    * Low melting point (-114°C) and poor conductivity in all states.
> >    * This indicates that only weak intermolecular forces are broken, and there are no mobile ions or delocalised electrons.
> >    * **Structure and Bonding:** Simple molecular (covalent bonding within molecules).
> > 
> > 3. **Deduce for Substance R:**
> >    * High melting point (801°C), poor solid conductivity but good liquid conductivity.
> >    * This shows that ions are fixed in a lattice in the solid state but become mobile charge carriers when molten.
> >    * **Structure and Bonding:** Giant ionic lattice.
> > 
> > 4. **Deduce for Substance S:**
> >    * Extremely high melting point (3550°C) and poor conductivity in all states.
> >    * This indicates a strong 3D network of atoms held entirely by strong covalent bonds with no mobile charged particles.
> >    * **Structure and Bonding:** Giant covalent lattice.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Explaining Why Alloys are Harder than Pure Metals
> **Question:** Brass is an alloy of copper and zinc. Explain why brass is harder and less malleable than pure copper.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Describe pure copper structure:**
> >    * Pure copper has a regular giant metallic lattice.
> >    * The copper cations are all of the same size and are arranged in uniform, neat layers that can slide over one another easily when a force is applied.
> > 
> > 2. **Describe brass (alloy) structure:**
> >    * Brass is formed by adding zinc atoms into the copper lattice.
> >    * Zinc atoms/ions are of a different size compared to copper atoms/ions.
> > 
> > 3. **Analyze the effect on layers:**
> >    * The introduction of different-sized zinc atoms disrupts the regular arrangement and distorts the neat, uniform layers of the copper lattice.
> > 
> > 4. **Conclude:**
> >    * This distortion makes it much more difficult for the layers of ions to slide over each other, making the alloy (brass) harder and less malleable than the pure metal.

    `,
    keyPoints: [
      'Metallic bonding consists of positive metal ions attracted to delocalised electrons.',
      'Metallic bonds are strengthened by higher cation charge, more delocalised electrons, and smaller ionic radii.',
      'Substances can pack into giant ionic, giant covalent, giant metallic, or simple molecular structures.',
      'Metals are malleable and ductile because layers of cations slide over each other while the delocalised electron sea maintains the bonding.'
    ]
  },
  {
    id: 'molecular-shapes-20260106',
    title: 'Shapes of Molecules & Ions (EPR / VSEPR)',
    type: 'simulation',
    molecularShapeSimulator: true,
    content: `

> [!NOTE]
> ### 📐 Electron-pair Repulsion Theory (EPR) & VSEPR
> The shape of a molecule or polyatomic ion is determined by the repulsion between electron pairs around the central atom:
> 1. **Repulsion Minimization:** Electron pairs (regions of electron density) surround the central atom and orient themselves as far apart as possible to minimize electrostatic repulsion (achieving maximum separation)
> 2. **Repulsion Hierarchy:** Lone pairs (non-bonding electrons) are held closer to the central nucleus than bonding pairs. Thus, lone pairs repel more strongly:
>    $$\\\\text{Lone Pair - Lone Pair} > \\\\text{Lone Pair - Bond Pair} > \\\\text{Bond Pair - Bond Pair}$$
> 3. **Angle Reduction:** Every lone pair around a central atom compresses the bond angles between bonding pairs by approximately $2.5^\\\\circ$
> 4. **Multiple Bonds:** Double and triple bonds count as a single bonding region (electron domain) when determining the shape.

> [!IMPORTANT]
> ### 📊 Shapes, Electron Pairs and Bond Angles Table
> The table below summarizes shapes based on bonding pairs (sigma bonds), lone pairs, and bond angles using unicode formulas to ensure rendering:
> 
> | Shape Name | Bonding Pairs (σ-bonds) | Lone Pairs | Bond Angle(s) | Examples |
> | :--- | :---: | :---: | :---: | :--- |
> | Linear | 2 | 0 | 180° | BeF₂, CS₂, C₂H₂, CO₂, HCN |
> | Trigonal Planar | 3 | 0 | 120° | BF₃, C₂H₄, AlCl₃, SO₃ |
> | Tetrahedral | 4 | 0 | 109.5° | CH₄, SiH₄, NH₄⁺ |
> | Trigonal Pyramidal | 3 | 1 | 107° | NH₃, PCl₃, H₃O⁺ |
> | Bent / V-shaped | 2 | 2 | 104.5° | H₂O, H₂S, SCl₂ |
> | Trigonal Bipyramidal | 5 | 0 | 120°, 90°, 180° | PCl₅, AsCl₅ |
> | Octahedral | 6 | 0 | 90°, 180° | SF₆ |
> | Seesaw | 4 | 1 | 102°, 173° | SF₄ |
> | Square Planar | 4 | 2 | 90° | XeF₄ |
> 
> * **Note 1:** SO₂ is also V-shaped, but it has 2 bonding regions and 1 lone pair, making its bond angle around 119°
> * **Note 2:** Double and triple bonds count as a single bonding region (electron domain) when determining the shape.

> [!TIP]
> ### 📝 How to Write a Perfect Shape Explanation for Edexcel
> When explaining the shape and bond angle of any molecule or ion, follow this 4-step checklist:
> 
> 1. **State the number of pairs:** State the exact number of bonding pairs and lone pairs surrounding the central atom. (e.g., "The central nitrogen atom has 3 bonding pairs and 1 lone pair.")
> 2. **State the repulsion principle:** State that electron pairs repel each other and arrange themselves as far apart as possible to achieve maximum separation (or minimum repulsion).
> 3. **State the repulsion hierarchy:** State that lone pairs repel more than bonding pairs (\`lp-lp > lp-bp > bp-bp\`), which compresses the bond angle.
> 4. **State the final shape name and angle.**

> [!EXAMPLE]
> #### 📝 Worked Example 1: Predicting Shapes & Angles
> **Question:** Predict the shape and bond angle of the hydronium ion ($\\\\text{H}_3\\\\text{O}^+$) and explain your answer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine central atom valence electrons:**
> >    * Oxygen is in Group 16, so it has 6 valence electrons
> > 2. **Account for bonding and charge:**
> >    * 3 hydrogen atoms bond to oxygen, adding 3 electrons (total = 9)
> >    * The $+1$ charge means we subtract 1 electron (total = 8 electrons, or 4 pairs)
> > 3. **Classify the electron pairs:**
> >    * There are 3 bonding pairs (with H) and 1 lone pair remaining on oxygen
> > 4. **Apply Edexcel explanation criteria:**
> >    * Oxygen is surrounded by 4 electron pairs: 3 bonding pairs and 1 lone pair.
> >    * These electron pairs repel each other to get as far apart as possible to minimize repulsion.
> >    * Lone pairs repel more than bonding pairs, compressing the bond angle.
> >    * Therefore, the geometry is **Trigonal Pyramidal** and the bond angle is compressed to **107°**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Trigonal Planar Shape Identification
> **Question:** Identify which of the following molecules has a trigonal planar shape and explain why: CH₄, H₂O, BF₃, or NH₃.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the central atom valence shell:**
> >    * Boron in BF₃ is in Group 13 and contributes 3 valence electrons.
> >    * The 3 fluorine atoms each share 1 electron, forming 3 bonding pairs. There are 0 lone pairs.
> > 2. **Apply the repulsion principle:**
> >    * The 3 bonding pairs surrounding the central boron atom repel each other to arrange themselves as far apart as possible to minimize electrostatic repulsion.
> > 3. **Conclude shape and angle:**
> >    * Maximum separation for 3 electron regions is achieved at equal 120° bond angles in a flat, planar arrangement.
> >    * Therefore, BF₃ has a **Trigonal Planar** shape (whereas CH₄ is tetrahedral, H₂O is V-shaped, and NH₃ is trigonal pyramidal).

> [!EXAMPLE]
> #### 📝 Worked Example 3: Bond Angle in a Linear Molecule
> **Question:** State the bond angle in a molecule with a linear shape (such as BeCl₂ or CO₂) and explain how this angle arises based on electron-pair repulsion.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the electron pair arrangement:**
> >    * A linear molecule has 2 bonding regions (or electron domains) and 0 lone pairs surrounding the central atom.
> > 2. **State the repulsion principle:**
> >    * These 2 regions of electron density repel each other and move as far apart as possible to achieve maximum separation and minimum repulsion.
> > 3. **Conclude the shape and angle:**
> >    * The maximum separation between 2 electron regions is achieved when they point in opposite directions at a bond angle of **180°**, resulting in a **Linear** shape.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Hierarchy of Electron Pair Repulsion
> **Question:** Explain the order of repulsion strength between bonding pairs and lone pairs of electrons, and describe its effect on bond angles.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **State the repulsion hierarchy:**
> >    * Lone pairs occupy more space and are held closer to the central nucleus than bonding pairs, leading to the hierarchy:
> >      \`lone pair - lone pair > lone pair - bond pair > bond pair - bond pair\`.
> > 2. **Explain the effect on bond angles:**
> >    * Because lone pairs repel neighboring bonding pairs more strongly than bonding pairs repel each other, they compress the bond angles.
> >    * Every lone pair compresses the bond angles between adjacent bonds by approximately **2.5°** (e.g. compressing tetrahedral 109.5° to 107° in NH₃ and 104.5° in H₂O).

> [!EXAMPLE]
> #### 📝 Worked Example 5: Shape of the Ammonium Ion (NH₄⁺)
> **Question:** Predict the shape and bond angle of the ammonium ion (NH₄⁺) using the electron-pair repulsion theory.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine central atom valence electrons:**
> >    * Nitrogen is in Group 15 (5 valence electrons).
> >    * 4 hydrogen atoms form bonds (adding 4 electrons, total = 9).
> >    * Subtract 1 electron for the +1 charge, leaving 8 valence electrons (4 pairs).
> > 2. **Classify electron pairs:**
> >    * All 4 pairs are bonding pairs (forming N-H bonds) with 0 lone pairs.
> > 3. **Apply repulsion and geometry:**
> >    * The 4 bonding pairs repel each other to get as far apart as possible to minimize repulsion.
> >    * With 4 bonding pairs and 0 lone pairs, the ion adopts a **Tetrahedral** shape with a bond angle of **109.5°**.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Shape of a Molecule with 6 Bonding Regions (SF₆)
> **Question:** Predict the shape and bond angles of sulfur hexafluoride, SF₆, using the electron-pair repulsion theory.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine central atom valence electrons:**
> >    * Sulfur is in Group 16, contributing 6 valence electrons.
> >    * The 6 fluorine atoms each share 1 electron, forming 6 bonding pairs (total = 12 electrons in the valence shell, expanding the octet).
> > 
> > 2. **Classify electron pairs:**
> >    * There are 6 bonding pairs and 0 lone pairs surrounding the central sulfur atom.
> > 
> > 3. **Apply the repulsion principle:**
> >    * These 6 bonding regions of electron density repel each other and arrange themselves as far apart as possible to achieve maximum separation and minimum repulsion.
> > 
> > 4. **Conclude the shape and angles:**
> >    * The maximum separation for 6 electron domains is achieved in an **Octahedral** geometry.
> >    * Due to symmetrical repulsion, all adjacent bond angles are exactly **90°** (and opposite bonds are **180°**).

> [!EXAMPLE]
> #### 📝 Worked Example 7: Shape of a Molecule with Lone Pairs and 4 Bonds (XeF₄)
> **Question:** Deduce the shape and bond angles of xenon tetrafluoride, XeF₄, using the electron-pair repulsion theory.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine central atom valence electrons:**
> >    * Xenon is a noble gas in Group 18, so it has 8 valence electrons.
> >    * The 4 fluorine atoms each share 1 electron, forming 4 bonding pairs (total = 12 electrons in the valence shell).
> > 
> > 2. **Classify electron pairs:**
> >    * Total valence electrons = 8 (from Xe) + 4 (from 4 F) = 12 electrons (6 pairs).
> >    * There are 4 bonding pairs and 2 lone pairs surrounding the central xenon atom.
> > 
> > 3. **Analyze the spatial arrangement of pairs:**
> >    * 6 electron pairs orient in an octahedral parent geometry.
> >    * To minimize repulsion, the 2 lone pairs (which repel most strongly) position themselves as far apart as possible: at opposite axial positions (180° apart).
> > 
> > 4. **Conclude shape and angle:**
> >    * The remaining 4 bonding pairs lie in a single flat plane.
> >    * Therefore, the actual shape of the molecule is **Square Planar** with bond angles of exactly **90°**.

> [!EXAMPLE]
> #### 📝 Worked Example 8: Shapes & Bonding in Solid Phosphorus Pentachloride
> **Question:** In the solid state, phosphorus pentachloride exists as an ionic compound with the formula [PCl₄]⁺[PCl₆]⁻. Predict the shapes and bond angles of the [PCl₄]⁺ cation and the [PCl₆]⁻ anion.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the [PCl₄]⁺ cation:**
> >    * Central Phosphorus atom is in Group 15 (5 valence electrons).
> >    * 4 chlorine atoms each share 1 electron (adding 4 electrons, total = 9).
> >    * Subtract 1 electron for the +1 charge, leaving 8 valence electrons (4 pairs).
> >    * All 4 pairs are bonding pairs (forming P-Cl bonds) with 0 lone pairs.
> >    * *Repulsion & Geometry:* These 4 bonding pairs repel each other to get as far apart as possible to minimize repulsion. With 4 bonding pairs and 0 lone pairs, the shape is **Tetrahedral** and the bond angle is **109.5°**.
> > 
> > 2. **Analyze the [PCl₆]⁻ anion:**
> >    * Central Phosphorus atom provides 5 valence electrons.
> >    * 6 chlorine atoms each share 1 electron (adding 6 electrons, total = 11).
> >    * Add 1 electron for the -1 charge, leaving 12 valence electrons (6 pairs).
> >    * All 6 pairs are bonding pairs (forming P-Cl bonds) with 0 lone pairs.
> >    * *Repulsion & Geometry:* These 6 bonding pairs repel to achieve maximum separation. With 6 bonding pairs and 0 lone pairs, the shape is **Octahedral** and the bond angles are **90°** (between adjacent bonds) and **180°** (between opposite bonds).

> [!EXAMPLE]
> #### 📝 Worked Example 9: Polarity of Dichloroethene Stereoisomers
> **Question:** Dichloroethene (C₂H₂Cl₂) exists as two stereoisomers: *cis*-dichloroethene and *trans*-dichloroethene. Explain why the *cis* isomer is a polar molecule with a net dipole moment, while the *trans* isomer is non-polar.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Examine the dipoles in both isomers:**
> >    * In both isomers, there are polar C-Cl bonds because chlorine is much more electronegative than carbon (3.0 vs 2.5). There are also minor C-H dipoles.
> > 
> > 2. **Analyze the geometry of *cis*-dichloroethene:**
> >    * In the *cis* isomer, both chlorine atoms are located on the same side of the C=C double bond.
> >    * The two polar C-Cl dipoles point in the same general direction and reinforce each other instead of cancelling out.
> >    * Therefore, the molecule has an asymmetrical distribution of charge, resulting in a net dipole moment (polar molecule).
> > 
> > 3. **Analyze the geometry of *trans*-dichloroethene:**
> >    * In the *trans* isomer, the two chlorine atoms are located on opposite sides of the C=C double bond (180° apart).
> >    * The two polar C-Cl dipoles point in equal and opposite directions.
> >    * Therefore, the dipoles cancel each other out completely due to symmetry, resulting in a net dipole moment of zero (non-polar molecule).
     `,
    keyPoints: [
      'EPR/VSEPR theory states that electron pairs repel to get as far apart as possible to minimize repulsion.',
      'Lone pairs repel more than bonding pairs, compressing bond angles by about 2.5 degrees each.',
      'The shape is determined by the number of bonding regions and lone pairs around the central atom.'
    ]
  },
  {
    id: 'properties-and-structures-20260106',
    title: 'Structure & Physical Properties',
    type: 'text',
    content: `
> [!NOTE]
> ### 🌡️ Melting & Boiling Points
> * **Giant Lattices (Ionic, Covalent, Metallic):** Have very high melting and boiling points because melting requires breaking strong electrostatic forces (ionic/metallic bonds) or strong covalent bonds throughout the macromolecular network
> * **Simple Molecular Lattices:** Have low melting and boiling points because the strong covalent bonds exist *only inside* the molecules. Melting/boiling only requires breaking the weak intermolecular forces (London forces, permanent dipole-dipole, or hydrogen bonds) between molecules, leaving the molecules intact

> [!IMPORTANT]
> ### 🔌 Electrical Conductivity
> To conduct electricity, a substance must contain mobile charge carriers (free electrons or free-moving ions):
> 
> 1. **Giant Metallic:** Conducts in both solid and liquid states due to mobile, delocalised valence electrons
> 2. **Giant Ionic:** Insulator in the solid state because ions are fixed in a rigid lattice. Conducts when molten (liquid) or dissolved in aqueous solution because the lattice breaks down, freeing the ions to migrate
> 3. **Giant Covalent:** Most are insulators (e.g. Diamond, Silicon) because all valence electrons are locked in localized covalent bonds. **Graphite** is an exception; each carbon atom is bonded to 3 others in planar sheets, leaving one delocalised electron per atom that is free to move parallel to the sheets
> 4. **Simple Molecular:** Do not conduct in any state as there are no delocalised electrons or free ions

> [!BOX]
> ### 💧 Solubility Trends
> * **Ionic Compounds:** Generally soluble in polar solvents (like water) because polar solvent molecules hydrate the ions. The electrostatic attractions between the water molecules and the ions (ion-dipole forces) release enough energy to overcome the lattice energy
> * **Giant Covalent:** Completely insoluble in all solvents because the covalent bonds holding the atoms together are too strong to be broken by solvent interactions
> * **Simple Molecular:** Soluble in solvents with similar intermolecular forces. Non-polar molecules (like I₂) dissolve in non-polar solvents (like hexane) but are insoluble in polar water ("like dissolves like")

> [!IMPORTANT]
> ### 🧲 Dipole Moment & Molecular Polarity
> * **Dipole Moment:** The difference in magnitude between partially positive (δ⁺) and partially negative (δ⁻) charges multiplied by the distance of separation between the charges.
> * **Types of Molecules according to Polarity:**
>   1. **Polar Molecules:** Have a permanent dipole moment (net polarity ≠ 0):
>      * **Diatomic molecules of different elements:** HCl, HBr, CO
>      * **Trigonal pyramidal molecules:** NH₃, NF₃, PBr₃
>      * **Bent / V-shaped molecules:** H₂O, H₂S, F₂O, SO₂ (Note: H₂O has a greater dipole moment than F₂O because its individual bond dipoles reinforce one another as a result of summation, similar to NH₃ vs NF₃).
>      * **Asymmetric molecules:** Any shape with different elements or groups surrounding the central atom (e.g. CHCl₃, CH₂Cl₂).
>   2. **Non-polar Molecules:** The individual bond dipoles cancel out because the molecule is highly symmetrical (net polarity = 0):
>      * **Diatomic molecules of the same element:** H₂, Cl₂, O₂, N₂ (bonds are completely non-polar as atoms share identical electronegativity values).
>      * **Linear molecules with identical terminal atoms:** BeCl₂, CO₂, C₂H₂ (dipoles point in opposite directions and cancel out).
>      * **Trigonal planar molecules:** BF₃, BCl₃, AlBr₃, C₂H₄, SO₃
>      * **Symmetrical tetrahedral molecules:** CH₄, CCl₄, C₂H₆
>      * **Trigonal bipyramidal molecules:** PCl₅
>      * **Octahedral molecules:** SF₆
>      * **Square planar molecules:** XeF₄
> * **Liquid Jet Deflection Experiment:**
>   * A thin jet of a **polar liquid** (like water or ethanol) flowing from a burette will be **deflected** (attracted) towards a statically charged plastic rod (regardless of whether the rod has a positive or negative charge).
>   * In contrast, the jet of a **non-polar liquid** (like hexane or cyclohexane) will show **no deflection** when the charged rod is brought near.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Solubility and Intermolecular Forces
> **Question:** Explain, in terms of intermolecular forces and bonding, why iodine (I₂) is highly soluble in cyclohexane but almost insoluble in water.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the bonding and forces in iodine and cyclohexane:**
> >    * Iodine (I₂) is a non-polar simple molecular element, and cyclohexane is a non-polar solvent. Both are held together by weak temporary dipole-induced dipole forces (London dispersion forces).
> >    * When iodine dissolves in cyclohexane, the new London forces formed between the iodine molecules and the solvent molecules are similar in strength to the forces being broken. Thus, they mix easily.
> > 
> > 2. **Analyze the bonding and forces in water:**
> >    * Water (H₂O) is a polar solvent whose molecules are held together by strong hydrogen bonds (in addition to London forces).
> > 
> > 3. **Explain why iodine is insoluble in water:**
> >    * The electrostatic attraction between the non-polar iodine molecules and the polar water molecules is very weak.
> >    * This weak attraction does not release enough energy to overcome and break the strong hydrogen bonds holding the water molecules together. Hence, iodine cannot dissolve in water.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Polarity of Trigonal Pyramidal Molecules
> **Question:** Explain whether a molecule with a trigonal pyramidal shape (such as NH₃) is polar or non-polar.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the molecular geometry:**
> >    * A trigonal pyramidal molecule (like NH₃) has 3 bonding pairs and 1 lone pair surrounding the central atom.
> > 2. **Analyze symmetry and charge distribution:**
> >    * Due to the presence of the lone pair, the molecule is asymmetrical, meaning the bond dipoles do not cancel each other out.
> > 3. **Conclude:**
> >    * The lack of symmetry results in a permanent net dipole moment (net polarity ≠ 0). Therefore, the molecule is **polar**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Comparing Dipole Moments of H₂O and F₂O
> **Question:** Explain why water (H₂O) has a significantly larger overall dipole moment than oxygen difluoride (F₂O), despite both having a bent geometry.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze H₂O dipole alignment:**
> >    * Oxygen is more electronegative than hydrogen, so the O-H bond dipoles point towards the oxygen atom.
> >    * The lone pairs on the oxygen atom also pull electron density in this same general direction.
> >    * Consequently, the bond dipoles and lone pair dipoles reinforce each other (summation), resulting in a large overall net dipole moment.
> > 2. **Analyze F₂O dipole alignment:**
> >    * Fluorine is more electronegative than oxygen, so the O-F bond dipoles point away from the central oxygen atom (towards the fluorine atoms).
> >    * This pull is in the opposite direction to the pull of the lone pairs on the oxygen atom.
> >    * As a result, the bond dipoles and lone pair dipoles oppose and partially cancel each other, yielding a very small net dipole moment.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Dipole Cancellation in Symmetrical Molecules
> **Question:** Explain how a molecule can contain polar bonds but have an overall non-polar character, and identify one molecular geometry that exhibits this.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain the cancellation principle:**
> >    * A molecule is non-polar overall if its individual bond dipoles are equal in magnitude and point in opposite directions, canceling each other out (net dipole moment = 0).
> > 2. **Relate to symmetry:**
> >    * This cancellation occurs in highly symmetrical molecular shapes where identical atoms surround the central atom.
> > 3. **Identify a geometry example:**
> >    * Symmetrical shapes include linear (e.g. CO₂), trigonal planar (e.g. BF₃), tetrahedral (e.g. CCl₄), and octahedral with identical surrounding atoms (such as SF₆).
> >    * Therefore, an octahedral molecule like SF₆ is non-polar despite having polar S-F bonds.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Liquid Jet Deflection Experiment
> **Question:** Describe and explain the behaviour of a thin stream of water versus a stream of cyclohexane when a statically charged rod is brought close to them.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the water stream:**
> >    * Water (H₂O) is a polar liquid with a large net dipole moment.
> >    * When a charged rod (positive or negative) is brought near, the water molecules rotate so that their oppositely charged poles are attracted to the rod.
> >    * This electrostatic attraction causes the jet of water to deflect (bend) towards the rod.
> > 2. **Analyze the cyclohexane stream:**
> >    * Cyclohexane is a highly symmetrical, non-polar hydrocarbon with no net dipole moment.
> >    * Being non-polar, it is unaffected by the electrostatic charge, showing no deflection.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Hexagonal Boron Nitride vs Graphite Lubrication in a Vacuum
> **Question:** Hexagonal boron nitride (BN) has a layered structure similar to graphite. Explain why hexagonal boron nitride can act as an effective solid lubricant in a vacuum (such as in outer space), whereas graphite cannot.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Examine the bonding polarity:**
> >    * In graphite, all bonds are C-C bonds between identical carbon atoms, meaning the covalent sheets are completely non-polar.
> >    * In hexagonal boron nitride (BN), the sheets consist of alternating boron and nitrogen atoms. Since nitrogen is more electronegative than boron (3.0 vs 2.0), the B-N bonds are polar, giving the sheets polar character.
> > 2. **Explain the Earth vs vacuum lubricant mechanism:**
> >    * Non-polar graphite layers rely on adsorbed gas molecules (like water vapour) to reduce friction and allow the layers to slide over one another easily. In a vacuum, these desorb, causing the layers to bind tightly together.
> >    * Hexagonal boron nitride layers, due to their polar B-N bonds, are held together by electrostatic interlayer forces that can slide (shear) easily even in the complete absence of adsorbed gases.
> > 3. **Conclude:**
> >    * Therefore, boron nitride maintains its lubricating properties in a vacuum, making it suitable for space applications, whereas graphite does not.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Identifying Unknown Substances from Physical Properties
> **Question:** Identify three unknown substances, P, Q, and R, based on the following experimental observations:
> * **Substance P:** Melting point 813°C; conducts electricity in both the solid and liquid states; reacts with water to form ammonia gas (NH₃) and an alkaline solution.
> * **Substance Q:** Melting point 1414°C; semi-conductor of electricity when solid; insoluble in water.
> * **Substance R:** Melting point 98°C; good conductor of electricity when solid; reacts vigorously with water to form hydrogen gas and an alkaline solution.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify Substance P:**
> >    * A melting point of 813°C and reaction with water to release ammonia gas indicates a metal nitride.
> >    * Lithium nitride (Li₃N) reacts with water: Li₃N + 3H₂O -> 3LiOH + NH₃.
> >    * It has a melting point of 813°C and exhibits solid-state ionic conductivity due to mobile lithium ions in defect pathways.
> >    * **Identity:** Lithium Nitride (Li₃N) [Giant Ionic Structure].
> > 
> > 2. **Identify Substance Q:**
> >    * A melting point of 1414°C and semi-conducting solid properties are characteristic of a giant covalent group 14 element.
> >    * **Identity:** Silicon (Si) [Giant Covalent Structure].
> > 
> > 3. **Identify Substance R:**
> >    * A low melting point (98°C), good metallic conductivity, and a vigorous reaction with water to produce hydrogen and an alkaline solution are key indicators of sodium.
> >    * **Identity:** Sodium (Na) [Giant Metallic Structure].
    `,
    keyPoints: [
      'Giant structures (ionic, covalent, metallic) have high melting points; simple molecular structures have low melting points.',
      'Electrical conductivity requires mobile electrons (metals, graphite) or mobile ions (molten/aqueous ionic compounds).',
      'Polar solvents dissolve ionic compounds; non-polar solvents dissolve simple molecular compounds.'
    ]
  }
];
