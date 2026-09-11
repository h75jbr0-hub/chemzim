import { LessonPart } from '../../../registry';

export const lessonTitle = "Transition Metals & Their Chemistry";
export const lessonNumber = 2;

export const theoryMarkdown = `
# Topic 17: Transition Metals & Their Chemistry
This unit covers the definition and electronic configurations of transition elements (including Cr and Cu anomalies), characteristic properties (variable oxidation states, catalytic and magnetic behavior), complex ion formation, ligands, geometries and the chelate effect, the origin of colour from d-orbital splitting, ligand substitution reactions, and hydroxide precipitation reactions.
`;

export const parts: LessonPart[] = [
    {
        id: 'electronic-configuration-properties-u5-l2',
        title: 'Definition & Electronic Configurations of Transition Metals',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚛️ Definition of a Transition Element
> An IUPAC transition element is defined as:
> **A d-block element that forms at least one stable ion with a partially filled (incomplete) d-subshell ($d^1$ to $d^9$).**
> 
> * **Scandium (Sc) is NOT a transition metal:**
>   * $\\text{Sc: } [\\text{Ar}]\\, 3d^1 4s^2$
>   * Its only stable ion is $\\text{Sc}^{3+}: [\\text{Ar}]\\, 3d^0$ (empty d-subshell).
> * **Zinc (Zn) is NOT a transition metal:**
>   * $\\text{Zn: } [\\text{Ar}]\\, 3d^{10} 4s^2$
>   * Its only stable ion is $\\text{Zn}^{2+}: [\\text{Ar}]\\, 3d^{10}$ (completely full d-subshell).

> [!IMPORTANT]
> ### ⚡ Anomalous Electronic Configurations: Chromium & Copper
> In atoms of Chromium and Copper, an electron from the $4s$ orbital is promoted to the $3d$ orbital to achieve extra stability associated with half-filled or completely filled d-subshells:
> * **Chromium (Cr, $Z=24$):** $[\\text{Ar}]\\, 3d^5 4s^1$ (half-filled $3d^5$ subshell minimises electron repulsion).
> * **Copper (Cu, $Z=29$):** $[\\text{Ar}]\\, 3d^{10} 4s^1$ (completely filled $3d^{10}$ subshell provides exceptional stability).
> 
> * **Ion Formation Rule:** When transition metals form positive ions, electrons are **always removed from the $4s$ subshell before the $3d$ subshell**:
>   * $\\text{Fe: } [\\text{Ar}]\\, 3d^6 4s^2 \\implies \\text{Fe}^{2+}: [\\text{Ar}]\\, 3d^6 \\implies \\text{Fe}^{3+}: [\\text{Ar}]\\, 3d^5$
>   * $\\text{Cu: } [\\text{Ar}]\\, 3d^{10} 4s^1 \\implies \\text{Cu}^{2+}: [\\text{Ar}]\\, 3d^9$
`,
        keyPoints: [
            'Transition metals form at least one stable ion with a partially filled d-subshell (d¹–d⁹).',
            'Scandium (forms Sc³⁺ with 3d⁰) and Zinc (forms Zn²⁺ with 3d¹⁰) are not transition elements.',
            'Cr ([Ar] 3d⁵ 4s¹) and Cu ([Ar] 3d¹⁰ 4s¹) have anomalous ground-state electron configurations.',
            'Electrons are always lost from the 4s subshell before the 3d subshell during ionisation.'
        ]
    },
    {
        id: 'characteristic-properties-catalysis-u5-l2',
        title: 'Characteristic Properties & Catalytic Behavior',
        type: 'text',
        content: `
> [!NOTE]
> ### 🌟 Key Characteristics of Transition Metals
> Transition elements exhibit distinct properties arising from their partially filled d-orbitals:
> 1. **Variable Oxidation States:** The energies of $4s$ and $3d$ electrons are very close together, allowing varying numbers of electrons to participate in bonding.
> 2. **Complex Ion Formation:** High charge density of central ions allows them to accept lone pairs from ligands.
> 3. **Formation of Coloured Compounds:** Resulting from $d-d$ electron transitions.
> 4. **Catalytic Activity:** Both metals and their ions act as homogeneous and heterogeneous catalysts.
> 5. **Magnetic Properties:** Unpaired d-electrons give rise to paramagnetism.

> [!IMPORTANT]
> ### ⚙️ Catalytic Mechanisms (Homogeneous vs Heterogeneous)
> 1. **Heterogeneous Catalysis:**
>    * Catalyst is in a **different phase** from the reactants (usually a solid metal surface catalyzing gas reactions).
>    * Transition metals use empty $3d$ and $4s$ orbitals to form weak chemisorption bonds with reactant molecules, weakening internal bonds and lowering activation energy.
>    * Examples:
>      * $\\text{Fe}$ in the Haber Process: $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$
>      * $\\text{V}_2\\text{O}_5$ in the Contact Process: $2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3$
> 
> 2. **Homogeneous Catalysis:**
>    * Catalyst is in the **same phase** as reactants (typically aqueous transition metal ions in solution).
>    * Mechanism relies on transition metals readily changing oxidation state to provide an alternative pathway with a lower $E_a$.
>    * Example: $\\text{Fe}^{2+}$ or $\\text{Fe}^{3+}$ catalysing the reaction between peroxodisulfate and iodide:
>      $$\\text{S}_2\\text{O}_8^{2-} + 2\\text{I}^- \\rightarrow 2\\text{SO}_4^{2-} + \\text{I}_2$$
>      * *Direct uncatalysed reaction:* Involves collision between two negative ions (high electrostatic repulsion, very slow).
>      * *Catalysed Step 1:* $\\text{S}_2\\text{O}_8^{2-} + 2\\text{Fe}^{2+} \\rightarrow 2\\text{SO}_4^{2-} + 2\\text{Fe}^{3+}$
>      * *Catalysed Step 2:* $2\\text{Fe}^{3+} + 2\\text{I}^- \\rightarrow 2\\text{Fe}^{2+} + \\text{I}_2$
`,
        keyPoints: [
            'Transition metals show variable oxidation states because 3d and 4s energy levels are closely matched.',
            'Heterogeneous catalysts (e.g. Fe in Haber, V₂O₅ in Contact) adsorb reactants onto active surface sites.',
            'Homogeneous catalysts (e.g. Fe²⁺/Fe³⁺) cycle between oxidation states to bypass high-activation pathways.',
            'Fe²⁺/Fe³⁺ catalyses S₂O₈²⁻ + 2I⁻ by converting an anion-anion repulsion into successive cation-anion steps.'
        ],
        equationVisualizer: {
            reactants: [['S2O8 2-(aq)', '#8b5cf6'], ['2Fe2+(aq)', '#10b981']],
            products: [['2SO4 2-(aq)', '#06b6d4'], ['2Fe3+(aq)', '#eab308']],
            description: "First step of homogeneous catalysis where peroxodisulfate oxidises Fe2+ to Fe3+."
        }
    },
    {
        id: 'complex-ions-ligands-chelate-u5-l2',
        title: 'Complex Ions, Ligands, Geometries & The Chelate Effect',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧲 Definitions & Ligand Types
> * **Complex Ion:** A central transition metal ion surrounded by coordinately bonded ligands.
> * **Ligand:** A species with at least one lone pair of electrons that it donates to a central metal ion to form a dative covalent (coordinate) bond.
> * **Coordination Number:** The total number of coordinate bonds formed to the central metal ion.
> 
> * **Classification of Ligands:**
>   1. **Monodentate (1 coordinate bond):**
>      * Neutral: $\\text{H}_2\\text{O}$, $\\text{NH}_3$
>      * Anionic: $\\text{Cl}^-$, $\\text{OH}^-$, $\\text{CN}^-$
>   2. **Bidentate (2 coordinate bonds):**
>      * 1,2-diaminoethane (en): $\\text{H}_2\\text{NCH}_2\\text{CH}_2\\text{NH}_2$
>      * Ethanedioate ion (oxalate, $\\text{ox}^{2-}$): $\\text{C}_2\\text{O}_4^{2-}$
>   3. **Hexadentate (6 coordinate bonds):**
>      * $\\text{EDTA}^{4-}$ (ethylenediaminetetraacetate): wraps completely around a metal ion in an octahedral arrangement.

> [!IMPORTANT]
> ### 📐 Shapes & Coordination Numbers of Complexes
> * **Coordination Number 6 (Octahedral, $90°$):**
>   * Formed with small ligands like $\\text{H}_2\\text{O}$ and $\\text{NH}_3$.
>   * Examples: $[\\text{Fe(H}_2\\text{O})_6]^{2+}$, $[\\text{Cu(H}_2\\text{O})_6]^{2+}$, $[\\text{Fe(CN)}_6]^{3-}$.
> * **Coordination Number 4 (Tetrahedral, $109.5°$):**
>   * Formed with larger, bulky or negatively charged ligands like $\\text{Cl}^-$ (steric hindrance prevents 6 ligands fitting).
>   * Examples: $[\\text{CuCl}_4]^{2-}$ (yellow-green), $[\\text{CoCl}_4]^{2-}$ (deep blue).
> * **Coordination Number 4 (Square Planar, $90°$):**
>   * Common for $\\text{Pt}^{2+}$ and $\\text{Ni}^{2+}$ complexes.
>   * Example: **Cisplatin** ($cis-[\\text{Pt(NH}_3)_2\\text{Cl}_2]$), a vital anti-cancer drug.
> * **Coordination Number 2 (Linear, $180°$):**
>   * Characteristic of $\\text{Ag}^+$ complexes.
>   * Example: Tollens' reagent ($[\\text{Ag(NH}_3)_2]^+$).

> [!IMPORTANT]
> ### 🌿 The Chelate Effect & Thermodynamics
> * When monodentate ligands are replaced by multidentate ligands (chelates), the complex formed is **thermodynamically much more stable**:
>   $$[\\text{Cu(H}_2\\text{O})_6]^{2+} + \\text{EDTA}^{4-} \\rightleftharpoons [\\text{Cu(EDTA)}]^{2-} + 6\\text{H}_2\\text{O}$$
> * **Thermodynamic Analysis:**
>   * $\\Delta H^\\ominus \\approx 0$: The number and type of coordinate bonds broken and made are essentially identical.
>   * $\\Delta S^\\ominus_{\\text{system}} \\gg 0$: 2 particles on the left produce 7 particles on the right (net increase of $+5$ free particles), causing a massive increase in entropy.
>   * Since $\\Delta G^\\ominus = \\Delta H^\\ominus - T\\Delta S^\\ominus$, $\\Delta G^\\ominus$ becomes large and negative, driving the equilibrium heavily to the right.
`,
        keyPoints: [
            'Ligands donate electron pairs to form dative coordinate bonds with central metal cations.',
            'Small ligands (H₂O, NH₃) yield 6-coordinate octahedral complexes; bulky Cl⁻ ligands yield 4-coordinate tetrahedral complexes.',
            'Cisplatin is a square planar Pt(II) complex used as an anti-cancer chemotherapeutic.',
            'The chelate effect drives multidentate ligand substitutions through a large positive entropy change (ΔS > 0).'
        ]
    },
    {
        id: 'origin-of-colour-d-splitting-u5-l2',
        title: 'The Origin of Colour & Crystal Field Theory ($d$-Orbital Splitting)',
        type: 'text',
        content: `
> [!NOTE]
> ### 🌈 Why Transition Metal Complexes are Coloured
> In an isolated gaseous transition metal ion, all five $3d$ orbitals are degenerate (have equal energy).
> 
> * **Crystal Field Splitting:** When ligands approach the central metal ion along the Cartesian axes to form an octahedral complex:
>   * The lone pairs on the ligands repel electrons in the metal's $d$-orbitals.
>   * Orbitals pointing directly along the axes ($d_{x^2-y^2}$ and $d_{z^2}$) experience greater repulsion and are raised to a higher energy level.
>   * Orbitals pointing between the axes ($d_{xy}$, $d_{xz}$, $d_{yz}$) experience less repulsion and remain at a lower energy level.
>   * This splits the five $d$-orbitals into two sets separated by an energy gap, **$\\Delta E$**.

> [!IMPORTANT]
> ### 💡 Light Absorption & The Color Wheel
> 1. **Electron Promotion ($d-d$ transition):**
>    * When white light passes through the solution, an electron in a lower energy $d$-orbital absorbs a photon of light matching $\\Delta E$ and is promoted to an upper $d$-orbital:
>      $$\\Delta E = h\\nu = \\frac{hc}{\\lambda}$$
> 2. **Complementary Colour Transmitted:**
>    * The unabsorbed frequencies of light are transmitted and reach our eye.
>    * The observed colour is the **complementary colour** to the colour absorbed (e.g., absorbing red light causes the solution to appear blue/cyan).
> 
> * **Colourless Exceptions:**
>   * $\\text{Sc}^{3+}$ ($3d^0$): No d-electrons available to be promoted.
>   * $\\text{Zn}^{2+}$, $\\text{Cu}^+$ ($3d^{10}$): The d-subshell is completely full, so no space exists for electron promotion.

> [!TIP]
> ### 🎛️ Factors Affecting $\\Delta E$ and Complex Colour
> 1. **Identity of the Ligand (Spectrochemical Series):**
>    * $\\text{Cl}^- < \\text{H}_2\\text{O} < \\text{NH}_3 < \\text{CN}^-$
>    * Stronger-field ligands cause greater splitting (larger $\\Delta E$), absorbing shorter wavelengths (higher frequencies).
> 2. **Oxidation State of the Metal:**
>    * Higher oxidation state (e.g. $\\text{Fe}^{3+}$ vs $\\text{Fe}^{2+}$) draws ligands closer, increasing repulsion and enlarging $\\Delta E$.
> 3. **Coordination Number and Geometry:**
>    * Tetrahedral splitting ($\Delta E_{\\text{tet}}$) is approximately $4/9$ of octahedral splitting ($\Delta E_{\\text{oct}}$).
`,
        keyPoints: [
            'Ligand approach splits 3d orbitals into two non-degenerate energy levels separated by ΔE.',
            'd-d transitions occur when an electron absorbs a photon where ΔE = hc/λ.',
            'The transmitted colour seen by the human eye is complementary to the absorbed wavelength.',
            'd⁰ (Sc³⁺) and d¹⁰ (Zn²⁺, Cu⁺) complexes are colourless because d-d transitions cannot occur.'
        ]
    },
    {
        id: 'ligand-substitution-copper-cobalt-u5-l2',
        title: 'Ligand Substitution Reactions of Copper & Cobalt',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Reactions of Copper(II) in Aqueous Solution
> Aqueous copper(II) exists as the pale blue hexaaqua ion: $[\\text{Cu(H}_2\\text{O})_6]^{2+}$.
> 
> 1. **Reaction with Concentrated Ammonia ($\text{NH}_3$):**
>    * **Dropwise addition:** Ammonia acts as a base, removing protons to form a **pale blue precipitate** of copper(II) hydroxide:
>      $$[\\text{Cu(H}_2\\text{O})_6]^{2+} + 2\\text{NH}_3 \\rightarrow \\text{Cu(OH)}_2(\\text{H}_2\\text{O})_4\\text{(s)} + 2\\text{NH}_4^+$$
>    * **Excess ammonia:** The precipitate dissolves via ligand substitution to give a **deep royal blue solution** of tetraamminediaquacopper(II):
>      $$\\text{Cu(OH)}_2(\\text{H}_2\\text{O})_4\\text{(s)} + 4\\text{NH}_3 \\rightarrow [\\text{Cu(NH}_3)_4(\\text{H}_2\\text{O})_2]^{2+} + 2\\text{H}_2\\text{O} + 2\\text{OH}^-$$
>      *(Only 4 water molecules are replaced due to Jahn-Teller axial distortion).*
> 
> 2. **Reaction with Concentrated Hydrochloric Acid (Conc. $\text{HCl}$):**
>    * Adding conc. $\\text{HCl}$ displaces water with chloride ligands, changing shape and colour from pale blue octahedral to **yellow-green tetrahedral**:
>      $$[\\text{Cu(H}_2\\text{O})_6]^{2+} + 4\\text{Cl}^- \\rightleftharpoons [\\text{CuCl}_4]^{2-} + 6\\text{H}_2\\text{O}$$
>    * Diluting with distilled water shifts the equilibrium back to the pale blue hexaaqua ion.

> [!IMPORTANT]
> ### 🧪 Reactions of Cobalt(II) in Aqueous Solution
> Aqueous cobalt(II) exists as pink $[\\text{Co(H}_2\\text{O})_6]^{2+}$.
> * **Reaction with Concentrated $\text{HCl}$:**
>   $$[\\text{Co(H}_2\\text{O})_6]^{2+}\\text{(pink, oct)} + 4\\text{Cl}^- \\rightleftharpoons [\\text{CoCl}_4]^{2-}\\text{(deep blue, tet)} + 6\\text{H}_2\\text{O}$$
> * **Stability Constants ($K_{\\text{stab}}$):**
>   $$K_{\\text{stab}} = \\frac{[[\\text{CoCl}_4]^{2-}]}{[[\\text{Co(H}_2\\text{O})_6]^{2+}][\\text{Cl}^-]^4}$$
>   * A higher $K_{\\text{stab}}$ indicates greater thermodynamic stability of the complex ion.
`,
        keyPoints: [
            '[Cu(H₂O)₆]²⁺ is pale blue; with excess NH₃ it forms deep royal blue [Cu(NH₃)₄(H₂O)₂]²⁺.',
            'With conc. HCl, [Cu(H₂O)₆]²⁺ undergoes substitution to form yellow-green tetrahedral [CuCl₄]²⁻.',
            '[Co(H₂O)₆]²⁺ is pink octahedral; with conc. HCl it forms deep blue tetrahedral [CoCl₄]²⁻.',
            'Stability constant (Kstab) measures complex equilibrium stability; higher Kstab means more stable complex.'
        ],
        equationVisualizer: {
            reactants: [['[Cu(H2O)6]2+(aq)', '#38bdf8'], ['4NH3(aq)', '#94a3b8']],
            products: [['[Cu(NH3)4(H2O)2]2+(aq)', '#1d4ed8'], ['4H2O(l)', '#06b6d4']],
            description: "Ligand substitution of copper(II) hexaaqua complex with excess ammonia forming deep royal blue solution."
        }
    },
    {
        id: 'transition-hydroxide-precipitates-u5-l2',
        title: 'Transition Metal Hydroxides & Amphoteric Behavior',
        type: 'text',
        content: `
> [!NOTE]
> ### 📋 Reactions of Transition Metal Aqua Ions with $\\text{OH}^-$
> Adding dilute aqueous sodium hydroxide ($\\text{NaOH}$) causes stepwise deprotonation of hexaaqua ions to form neutral hydroxide precipitates:
> 
> | Metal Ion | Precipitate with dilute $\\text{NaOH}$ | Effect of excess $\\text{NaOH}$ | Observation on standing in air |
> |---|---|---|---|
> | $\\text{Fe}^{2+}$ | **Dirty green precipitate:** $\\text{Fe(OH)}_2(\\text{H}_2\\text{O})_4$ | Insoluble | Slowly oxidises at surface to brown $\\text{Fe(OH)}_3$ |
> | $\\text{Fe}^{3+}$ | **Rust-brown / foxy-red precipitate:** $\\text{Fe(OH)}_3(\\text{H}_2\\text{O})_3$ | Insoluble | No change |
> | $\\text{Cu}^{2+}$ | **Pale blue precipitate:** $\\text{Cu(OH)}_2(\\text{H}_2\\text{O})_4$ | Insoluble | No change |
> | $\\text{Mn}^{2+}$ | **Off-white / pale pink precipitate:** $\\text{Mn(OH)}_2$ | Insoluble | Darkens rapidly to brown $\\text{MnO}_2 / \\text{Mn(III)}$ in air |
> | $\\text{Cr}^{3+}$ | **Grey-green precipitate:** $\\text{Cr(OH)}_3(\\text{H}_2\\text{O})_3$ | **Dissolves to deep green solution** | Forms $[\\text{Cr(OH)}_6]^{3-}$ or $[\\text{Cr(OH)}_4]^-$ |

> [!IMPORTANT]
> ### 🔄 Amphoteric Behavior of Chromium(III) Hydroxide
> Chromium(III) hydroxide is **amphoteric**, reacting with both acids and bases:
> 1. **Acting as a Base (reacting with acid):**
>    $$\\text{Cr(OH)}_3(\\text{H}_2\\text{O})_3\\text{(s)} + 3\\text{H}^+\\text{(aq)} \\rightarrow [\\text{Cr(H}_2\\text{O})_6]^{3+}\\text{(aq)} \\quad \\text{(green-violet)}$$
> 2. **Acting as an Acid (reacting with excess base):**
>    $$\\text{Cr(OH)}_3(\\text{H}_2\\text{O})_3\\text{(s)} + 3\\text{OH}^-\\text{(aq)} \\rightarrow [\\text{Cr(OH)}_6]^{3-}\\text{(aq)} \\quad \\text{(deep green)}$$
`,
        keyPoints: [
            'Fe²⁺ forms dirty green Fe(OH)₂, oxidising in air to rust-brown Fe(OH)₃.',
            'Cu²⁺ forms a pale blue precipitate of Cu(OH)₂, insoluble in excess NaOH.',
            'Cr³⁺ forms grey-green Cr(OH)₃ which dissolves in excess NaOH to give a deep green hexahydroxochromate(III) solution.',
            'Amphoteric hydroxides like Cr(OH)₃ react with both acids (forming aqua ions) and excess alkali (forming hydroxo complexes).'
        ]
    }
];
