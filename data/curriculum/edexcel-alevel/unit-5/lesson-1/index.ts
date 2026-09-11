import { LessonPart } from '../../../registry';

export const lessonTitle = "Redox Equilibria";
export const lessonNumber = 1;

export const theoryMarkdown = `
# Topic 16: Redox Equilibria
This unit covers standard electrode potentials ($E^\\ominus$), the standard hydrogen electrode (SHE), electrochemical cell conventions, calculation of cell emf, thermodynamic feasibility ($\\Delta G^\\ominus = -nFE^\\ominus_{\\text{cell}}$ and equilibrium constants), and quantitative redox titrations including manganate(VII) and iodometric titrations.
`;

export const parts: LessonPart[] = [
    {
        id: 'standard-electrode-potentials-u5-l1',
        title: 'Standard Electrode Potentials & The Standard Hydrogen Electrode',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚡ Standard Electrode Potential ($E^\\ominus$)
> The standard electrode potential of a half-cell is the electromotive force (emf) measured when the half-cell is connected to the **Standard Hydrogen Electrode (SHE)** under standard conditions:
> * **Standard Temperature:** $298\\text{ K}$ ($25°\\text{C}$)
> * **Standard Pressure of gases:** $100\\text{ kPa}$ ($1\\text{ bar}$)
> * **Standard Concentration of aqueous ions:** $1.00\\text{ mol dm}^{-3}$
> 
> Standard electrode potentials are always quoted for the reduction process (reduction potentials):
> $$\\text{Oxidised form} + n e^- \\rightleftharpoons \\text{Reduced form}$$

> [!IMPORTANT]
> ### 🧪 The Standard Hydrogen Electrode (SHE)
> The SHE is assigned an electrode potential of exactly **$0.00\\text{ V}$** at all temperatures:
> $$\\text{2H}^+\\text{(aq)} + 2e^- \\rightleftharpoons \\text{H}_2\\text{(g)} \\quad E^\\ominus = 0.00\\text{ V}$$
> 
> * **Components of SHE:**
>   * Hydrogen gas (H₂) bubbled at a pressure of $100\\text{ kPa}$.
>   * Aqueous hydrochloric acid solution containing $[\\text{H}^+] = 1.00\\text{ mol dm}^{-3}$.
>   * Inert platinum foil coated with finely divided platinum black (platinised platinum) to provide a high surface area and catalyse rapid electron transfer between H₂(g) and H⁺(aq).
>   * Maintained at $298\\text{ K}$.

> [!TIP]
> ### 🔍 The Electrochemical Series & Relative Strengths
> * **More negative $E^\\ominus$:** The half-cell releases electrons more readily. The reduced form is a **stronger reducing agent** (easily oxidised). Position lies further to the left.
> * **More positive $E^\\ominus$:** The half-cell attracts electrons more readily. The oxidised form is a **stronger oxidising agent** (easily reduced). Position lies further to the right.
`,
        keyPoints: [
            'Standard conditions are 298 K, 100 kPa gas pressure, and 1.00 mol/dm³ ion concentration.',
            'The Standard Hydrogen Electrode (SHE) is assigned an arbitrary potential of 0.00 V.',
            'Platinised platinum acts as an inert electrical conductor and catalyst in gas/solution half-cells.',
            'Species with more negative E° are stronger reducing agents; species with more positive E° are stronger oxidising agents.'
        ]
    },
    {
        id: 'electrochemical-cells-notation-u5-l1',
        title: 'Electrochemical Cells & IUPAC Cell Diagrams',
        type: 'text',
        content: `
> [!NOTE]
> ### 🔋 Construction of an Electrochemical Cell
> An electrochemical cell consists of two half-cells connected by:
> 1. **An external wire:** Allows electron flow from the negative electrode (oxidation site / anode) to the positive electrode (reduction site / cathode).
> 2. **A Salt Bridge:** Completes the electrical circuit and maintains electrical neutrality by allowing ions to flow between the two half-cells without mixing the solutions.
>    * Usually a strip of filter paper soaked in an inert, non-reacting electrolyte such as saturated aqueous $\\text{KNO}_3$ or $\\text{NH}_4\\text{NO}_3$.
>    * Ions must not precipitate with solutions in the half-cells (e.g. $\\text{KCl}$ is unsuitable if half-cells contain $\\text{Ag}^+$ or $\\text{Pb}^{2+}$ ions).

> [!IMPORTANT]
> ### 📝 IUPAC Cell Diagram Conventions
> By international IUPAC convention:
> * The **left-hand electrode** undergoes **oxidation** (loss of electrons, anode).
> * The **right-hand electrode** undergoes **reduction** (gain of electrons, cathode).
> * A single vertical line ($|$) represents a **phase boundary** (e.g., between solid metal and aqueous solution).
> * A double vertical line ($||$) represents the **salt bridge**.
> * Comma ($,$) separates chemical species in the same phase.
> * Inert electrodes (e.g. $\\text{Pt(s)}$) are placed on the outer edge if no solid metal is involved.
> * Cell notation format:
>   $$\\text{Oxidation Half-Cell (Left)} \\; || \\; \\text{Reduction Half-Cell (Right)}$$
>   $$\\text{Zn(s)} \\mid \\text{Zn}^{2+}\\text{(aq)} \\;\\parallel\\; \\text{Cu}^{2+}\\text{(aq)} \\mid \\text{Cu(s)}$$

> [!IMPORTANT]
> ### 🧮 Calculating Cell Emf ($E^\\ominus_{\\text{cell}}$)
> $$E^\\ominus_{\\text{cell}} = E^\\ominus_{\\text{Right}} - E^\\ominus_{\\text{Left}} = E^\\ominus_{\\text{reduction}} - E^\\ominus_{\\text{oxidation}}$$
> If $E^\\ominus_{\\text{cell}} > 0$, the cell reaction proceeds spontaneously in the direction written from left to right.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Cell Notation & Emf Calculation
> **Question:** An electrochemical cell is constructed from standard $\\text{Mg}^{2+}/\\text{Mg}$ ($E^\\ominus = -2.37\\text{ V}$) and $\\text{Fe}^{3+}/\\text{Fe}^{2+}$ ($E^\\ominus = +0.77\\text{ V}$) half-cells. Write the conventional IUPAC cell diagram, calculate $E^\\ominus_{\\text{cell}}$, and write the overall spontaneous equation.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the oxidation and reduction half-cells:**
> >    * $\\text{Fe}^{3+}/\\text{Fe}^{2+}$ has a more positive potential ($+0.77\\text{ V}$), so it undergoes reduction (right-hand side).
> >    * $\\text{Mg}^{2+}/\\text{Mg}$ has a more negative potential ($-2.37\\text{ V}$), so it undergoes oxidation (left-hand side).
> > 
> > 2. **Write the IUPAC cell notation:**
> >    * Oxidation on left: $\\text{Mg(s)} \\mid \\text{Mg}^{2+}\\text{(aq)}$
> >    * Reduction on right (needs inert Pt): $\\text{Fe}^{3+}\\text{(aq)}, \\text{Fe}^{2+}\\text{(aq)} \\mid \\text{Pt(s)}$
> >    * Overall cell diagram: $\\text{Mg(s)} \\mid \\text{Mg}^{2+}\\text{(aq)} \\;\\parallel\\; \\text{Fe}^{3+}\\text{(aq)}, \\text{Fe}^{2+}\\text{(aq)} \\mid \\text{Pt(s)}$
> > 
> > 3. **Calculate standard cell emf:**
> >    $$E^\\ominus_{\\text{cell}} = E^\\ominus_{\\text{Right}} - E^\\ominus_{\\text{Left}} = (+0.77) - (-2.37) = \\mathbf{+3.14\\text{ V}}$$
> > 
> > 4. **Overall balanced equation:**
> >    $$\\text{Mg(s)} + 2\\text{Fe}^{3+}\\text{(aq)} \\rightarrow \\text{Mg}^{2+}\\text{(aq)} + 2\\text{Fe}^{2+}\\text{(aq)}$$
`,
        keyPoints: [
            'Salt bridge maintains electrical neutrality by ion migration (commonly saturated KNO₃).',
            'IUPAC cell diagram convention: Left = Oxidation (Anode), Right = Reduction (Cathode).',
            'A single bar | indicates phase boundary; double bar || indicates salt bridge.',
            'E°cell = E°(Right) - E°(Left) = E°(reduction) - E°(oxidation).'
        ],
        equationVisualizer: {
            reactants: [['Mg(s)', '#10b981'], ['2Fe3+(aq)', '#3b82f6']],
            products: [['Mg2+(aq)', '#06b6d4'], ['2Fe2+(aq)', '#8b5cf6']],
            description: "Spontaneous redox reaction in the Mg-Fe cell producing +3.14 V emf."
        }
    },
    {
        id: 'thermodynamics-feasibility-u5-l1',
        title: 'Thermodynamic Feasibility, Free Energy & Equilibrium Constants',
        type: 'text',
        content: `
> [!IMPORTANT]
> ### 🧮 Linking $E^\\ominus_{\\text{cell}}$ to $\\Delta G^\\ominus$ and Equilibrium Constant $K$
> The electromotive force of a cell is fundamentally connected to Gibbs free energy change and the equilibrium constant of the chemical reaction:
> 
> 1. **Gibbs Free Energy and Cell Potential:**
>    $$\\Delta G^\\ominus = -n F E^\\ominus_{\\text{cell}}$$
>    * $\\Delta G^\\ominus$: Standard Gibbs free energy change (in $\\text{J mol}^{-1}$).
>    * $n$: Number of moles of electrons transferred in the balanced redox equation.
>    * $F$: Faraday constant ($96485\\text{ C mol}^{-1}$, or approx $96500\\text{ C mol}^{-1}$).
>    * $E^\\ominus_{\\text{cell}}$: Standard cell potential (in $\\text{V} = \\text{J C}^{-1}$).
> 
> 2. **Relation to Equilibrium Constant ($K$):**
>    Since $\\Delta G^\\ominus = -RT \\ln K$:
>    $$-n F E^\\ominus_{\\text{cell}} = -RT \\ln K \\implies \\mathbf{\\ln K = \\frac{n F E^\\ominus_{\\text{cell}}}{RT}}$$
>    At $298\\text{ K}$, this simplifies to:
>    $$\\ln K = \\frac{n \\times 96485 \\times E^\\ominus_{\\text{cell}}}{8.314 \\times 298} = \\frac{n E^\\ominus_{\\text{cell}}}{0.0257}$$

> [!NOTE]
> ### ⚖️ Summary of Feasibility Criteria
> | $E^\\ominus_{\\text{cell}}$ | $\\Delta G^\\ominus$ | $\\ln K$ | $K$ | Feasibility under standard conditions |
> |---|---|---|---|---|
> | Positive ($> 0$) | Negative ($< 0$) | Positive ($> 0$) | $> 1$ | Reaction is **thermodynamically feasible** |
> | Zero ($= 0$) | Zero ($= 0$) | Zero ($= 0$) | $= 1$ | Reaction is at equilibrium |
> | Negative ($< 0$) | Positive ($> 0$) | Negative ($< 0$) | $< 1$ | Not feasible (reverse reaction is feasible) |

> [!WARNING]
> ### ⚠️ Limitations of Predictions Based on $E^\\ominus$
> Even if a reaction has $E^\\ominus_{\\text{cell}} > 0$ (thermodynamically feasible), it may not occur in practice due to:
> 1. **Kinetic Inertia / High Activation Energy ($E_a$):** The rate of reaction may be infinitely slow at room temperature (e.g., reaction between H₂ and O₂).
> 2. **Non-Standard Conditions:** Changing concentrations or temperatures alters electrode potentials according to Le Chatelier's principle. If ion concentrations drop significantly, actual $E$ will deviate from $E^\\ominus$.
`,
        keyPoints: [
            'ΔG° = -nFE°cell relates electrical energy to Gibbs free energy.',
            'A positive E°cell corresponds to a negative ΔG° and equilibrium constant K > 1.',
            'High activation energy (kinetic control) can prevent a thermodynamically feasible reaction from occurring.',
            'Non-standard conditions shift electrode potentials away from tabulated E° values.'
        ]
    },
    {
        id: 'manganate-titrations-u5-l1',
        title: 'Manganate(VII) Redox Titrations & Autocatalysis',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Principles of Potassium Manganate(VII) Titrations
> Potassium manganate(VII), $\\text{KMnO}_4$, is a powerful self-indicating oxidising agent:
> * In acidic solution, the deep purple manganate(VII) ion (MnO₄⁻) is reduced to the practically colourless manganese(II) ion (Mn²⁺):
>   $$\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O} \\quad E^\\ominus = +1.51\\text{ V}$$
> * **End-point observation:** The solution turns from colourless to the first **permanent pale pink** color with one drop of excess $\\text{MnO}_4^-$.
> * **Self-indicating:** No external indicator is required.
> * **Acidification:** Dilute sulfuric acid ($\\text{H}_2\\text{SO}_4\\text{(aq)}$) must be used.
>   * Do **NOT** use $\\text{HCl}$: $\\text{MnO}_4^-$ is powerful enough to oxidise $\\text{Cl}^-$ to toxic $\\text{Cl}_2$, giving an artificially high titre.
>   * Do **NOT** use $\\text{HNO}_3$: Nitrate ions are oxidising agents that would compete with $\\text{MnO}_4^-$, giving an artificially low titre.

> [!IMPORTANT]
> ### 🔄 Key Manganate(VII) Reactions
> 1. **Titration with Iron(II) ions ($\text{Fe}^{2+}$):**
>    $$\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$$
>    * Mole ratio: $1\\text{ mol MnO}_4^- : 5\\text{ mol Fe}^{2+}$.
> 
> 2. **Titration with Ethanedioate ions ($\text{C}_2\text{O}_4^{2-}$):**
>    $$2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}$$
>    * Mole ratio: $2\\text{ mol MnO}_4^- : 5\\text{ mol C}_2\\text{O}_4^{2-}$.
>    * **Autocatalysis:** The reaction is initially very slow at room temperature because both MnO₄⁻ and C₂O₄²⁻ are negative ions that repel each other. The reaction mixture is heated to around $60°\\text{C}$. Once Mn²⁺ ions are formed, they act as an **autocatalyst**, rapidly accelerating the rate.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Determining Iron in an Ore
> **Question:** A $2.80\\text{ g}$ sample of iron ore was dissolved in excess dilute $\\text{H}_2\\text{SO}_4$, and all iron was reduced to $\\text{Fe}^{2+}\\text{(aq)}$. The solution was made up to $250.0\\text{ cm}^3$ in a volumetric flask. A $25.0\\text{ cm}^3$ portion required $22.50\\text{ cm}^3$ of $0.0200\\text{ mol dm}^{-3}$ $\\text{KMnO}_4$ for complete oxidation. Calculate the percentage by mass of iron in the ore ($A_r(\\text{Fe}) = 55.8$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Moles of $\text{MnO}_4^-$ used in titration:**
> >    $$\\text{Moles of } \\text{MnO}_4^- = 0.0200 \\times \\frac{22.50}{1000} = 4.50 \\times 10^{-4}\\text{ mol}$$
> > 
> > 2. **Moles of $\text{Fe}^{2+}$ in $25.0\\text{ cm}^3$ aliquot:**
> >    From the stoichiometric ratio $1\\text{ MnO}_4^- : 5\\text{ Fe}^{2+}$:
> >    $$\\text{Moles of } \\text{Fe}^{2+} = 5 \\times (4.50 \\times 10^{-4}) = 2.25 \\times 10^{-3}\\text{ mol}$$
> > 
> > 3. **Moles of $\text{Fe}^{2+}$ in original $250.0\\text{ cm}^3$ solution:**
> >    $$\\text{Total moles of Fe} = 2.25 \\times 10^{-3} \\times \\frac{250.0}{25.0} = 2.25 \\times 10^{-2}\\text{ mol}$$
> > 
> > 4. **Mass of iron and percentage in the ore:**
> >    $$\\text{Mass of Fe} = 2.25 \\times 10^{-2} \\times 55.8 = 1.2555\\text{ g}$$
> >    $$\\%\\text{ Fe by mass} = \\frac{1.2555}{2.80} \\times 100 = \\mathbf{44.8\\%}$$
`,
        keyPoints: [
            'MnO₄⁻ is self-indicating: colour change at endpoint is colourless to persistent pale pink.',
            'Always acidify with dilute H₂SO₄; never HCl (Cl⁻ oxidised to Cl₂) or HNO₃ (competing oxidiser).',
            'Reaction with ethanedioate (C₂O₄²⁻) is autocatalysed by Mn²⁺ products and requires gentle initial heating (~60°C).',
            'Stoichiometric ratios: 1 MnO₄⁻ : 5 Fe²⁺ and 2 MnO₄⁻ : 5 C₂O₄²⁻.'
        ],
        equationVisualizer: {
            reactants: [['MnO4-(aq)', '#8b5cf6'], ['5Fe2+(aq)', '#10b981'], ['8H+(aq)', '#64748b']],
            products: [['Mn2+(aq)', '#f472b6'], ['5Fe3+(aq)', '#eab308'], ['4H2O(l)', '#06b6d4']],
            description: "Redox titration of iron(II) with potassium manganate(VII) in acidic solution."
        }
    },
    {
        id: 'iodometric-titrations-u5-l1',
        title: 'Iodometric Titrations: Iodine & Thiosulfate Chemistry',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚗️ Principles of Thiosulfate Titrations
> Iodometric titrations are used to determine the concentration of various oxidising agents (such as $\\text{Cu}^{2+}$, $\\text{ClO}^-$, or $\\text{IO}_3^-$) via a two-step process:
> 1. **Step 1: Generation of Iodine ($\text{I}_2$):**
>    * Excess potassium iodide (KI) is added to the oxidising agent.
>    * The oxidising agent oxidises iodide ions ($\text{I}^-$) to iodine ($\text{I}_2$):
>      $$2\\text{Cu}^{2+} + 4\\text{I}^- \\rightarrow 2\\text{CuI(s)} + \\text{I}_2$$
>      *(Copper(I) iodide forms an off-white precipitate; liberated iodine turns the mixture brown/red).*
> 
> 2. **Step 2: Titration with Standard Sodium Thiosulfate ($\text{Na}_2\text{S}_2\text{O}_3$):**
>    * The liberated iodine is titrated against standard thiosulfate solution:
>      $$2\\text{S}_2\\text{O}_3^{2-} + \\text{I}_2 \\rightarrow \\text{S}_4\\text{O}_6^{2-} + 2\\text{I}^-$$
>      *(Thiosulfate is oxidised to the tetrathionate ion S₄O₆²⁻; iodine is reduced to colourless I⁻).*
>    * Mole ratio: $2\\text{ mol S}_2\\text{O}_3^{2-} : 1\\text{ mol I}_2$.

> [!IMPORTANT]
> ### 🌾 The Starch Indicator Protocol
> * **Timing of addition:** Starch indicator must **NOT** be added at the beginning of the titration when iodine concentration is high. Starch forms an insoluble, irreversible blue-black complex with high concentrations of I₂.
> * **Procedure:**
>   1. Titrate the brown iodine solution until it fades to a **pale straw yellow**.
>   2. Add a few drops of freshly prepared starch indicator: the solution instantly turns **deep blue-black**.
>   3. Continue titrating dropwise until the blue-black color **just disappears leaving a colourless solution** (or off-white suspension if CuI(s) is present).

> [!EXAMPLE]
> #### 📝 Worked Example 3: Brass Analysis for Copper Content
> **Question:** A $2.50\\text{ g}$ sample of brass (alloy of Cu and Zn) was dissolved in concentrated nitric acid and neutralized. Excess KI was added, and the liberated I₂ required $32.40\\text{ cm}^3$ of $0.100\\text{ mol dm}^{-3}$ $\\text{Na}_2\\text{S}_2\\text{O}_3$ to reach the starch end-point. Calculate the percentage of copper in the brass ($A_r(\\text{Cu}) = 63.5$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Moles of thiosulfate used:**
> >    $$\\text{Moles of } \\text{S}_2\\text{O}_3^{2-} = 0.100 \\times \\frac{32.40}{1000} = 3.24 \\times 10^{-3}\\text{ mol}$$
> > 
> > 2. **Moles of liberated iodine ($\text{I}_2$):**
> >    From $2\\text{S}_2\\text{O}_3^{2-} : 1\\text{I}_2$:
> >    $$\\text{Moles of } \\text{I}_2 = \\frac{3.24 \\times 10^{-3}}{2} = 1.62 \\times 10^{-3}\\text{ mol}$$
> > 
> > 3. **Moles of copper ions ($\text{Cu}^{2+}$):**
> >    From $2\\text{Cu}^{2+} : 1\\text{I}_2$:
> >    $$\\text{Moles of } \\text{Cu}^{2+} = 2 \\times 1.62 \\times 10^{-3} = 3.24 \\times 10^{-3}\\text{ mol}$$
> >    *(Notice: Moles of $\\text{Cu}^{2+} = \\text{Moles of } \\text{S}_2\\text{O}_3^{2-}$).*
> > 
> > 4. **Mass and percentage of copper in brass:**
> >    $$\\text{Mass of Cu} = 3.24 \\times 10^{-3} \\times 63.5 = 0.2057\\text{ g}$$
> >    $$\\%\\text{ Cu in brass} = \\frac{0.2057}{2.50} \\times 100 = \\mathbf{8.23\\%}$$
`,
        keyPoints: [
            'Iodometric titrations quantify oxidising agents by reacting with excess I⁻ and titrating liberated I₂ with S₂O₃²⁻.',
            'Starch indicator is only added near the end-point when the solution reaches a pale straw yellow colour.',
            'The end-point is the sharp disappearance of the blue-black starch-iodine complex.',
            'Stoichiometric ratios: 2 Cu²⁺ : 1 I₂ : 2 S₂O₃²⁻, so moles of Cu²⁺ equal moles of S₂O₃²⁻.'
        ],
        equationVisualizer: {
            reactants: [['2S2O3 2-(aq)', '#3b82f6'], ['I2(aq)', '#92400e']],
            products: [['S4O6 2-(aq)', '#06b6d4'], ['2I-(aq)', '#10b981']],
            description: "Titration of liberated iodine with standard sodium thiosulfate using starch indicator."
        }
    }
];
