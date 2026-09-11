import { LessonPart } from '../../../registry';

export const lessonTitle = "Organic Synthesis & Modern Spectroscopy";
export const lessonNumber = 5;

export const theoryMarkdown = `
# Topic 20: Organic Synthesis & Modern Analytical Techniques
This lesson covers retrosynthetic analysis, carbon-carbon bond forming methods (Grignard reagents, Friedel-Crafts, cyanide addition), synthetic pathways and reaction schemes, practical purification techniques (reflux, distillation, solvent extraction, recrystallisation, melting point determination), and structure determination using IR, Mass Spectrometry (HRMS), and NMR spectroscopy ($^1\\text{H}$ and $^{13}\\text{C}$).
`;

export const parts: LessonPart[] = [
    {
        id: 'carbon-carbon-bond-formation-grignard-u5-l5',
        title: 'Extending Carbon Chains & Grignard Reagents',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧮 Methods for Extending Carbon Chains
> 1. **Grignard Reagents ($\\text{RMgX}$):**
>    * **Preparation:** Halogenoalkane + Magnesium in dry ether: $\\text{R-Br} + \\text{Mg} \\xrightarrow{\\text{dry ether}} \\text{R-MgBr}$
>    * The $\\text{C-Mg}$ bond is polar with a carbanion-like character ($\\text{R}^{\\delta-}-\\text{Mg}^{\\delta+}\\text{Br}$), acting as a powerful nucleophile.
> 2. **Reactions of Grignard Reagents:**
>    * **With $\\text{CO}_2$ (followed by dilute acid):** Forms carboxylic acids: $\\text{RMgBr} + \\text{CO}_2 \\rightarrow \\text{RCOOMgBr} \\xrightarrow{\\text{H}^+} \\mathbf{\\text{RCOOH}}$ (extends chain by 1 carbon).
>    * **With Methanal ($\\text{HCHO}$):** Forms **primary alcohols**: $\\text{RMgBr} + \\text{HCHO} \\xrightarrow{\\text{H}^+} \\mathbf{\\text{R-CH}_2\\text{OH}}$
>    * **With Other Aldehydes ($\\text{R'CHO}$):** Forms **secondary alcohols**: $\\text{RMgBr} + \\text{R'CHO} \\xrightarrow{\\text{H}^+} \\mathbf{\\text{R-CH(OH)-R'}}$
>    * **With Ketones ($\\text{R'COR''}$):** Forms **tertiary alcohols**: $\\text{RMgBr} + \\text{R'COR''} \\xrightarrow{\\text{H}^+} \\mathbf{\\text{R-C(OH)(R')(R'')}}$
> 3. **Nitrile Additions / Substitutions:**
>    * $\\text{R-X} + \\text{KCN} \\xrightarrow{\\text{ethanol, reflux}} \\mathbf{\\text{R-CN}} + \\text{KX}$
>    * $\\text{RCHO} + \\text{HCN} \\xrightarrow{\\text{KCN, pH 8}} \\mathbf{\\text{R-CH(OH)-CN}}$ (hydroxynitrile)
`,
        keyPoints: [
            'Grignard reagents (RMgX) act as carbon nucleophiles (R⁻).',
            'RMgX + CO₂ → RCOOH (extends chain by 1 carbon).',
            'RMgX + HCHO → Primary alcohol; RMgX + Aldehyde → Secondary alcohol; RMgX + Ketone → Tertiary alcohol.',
            'Cyanide substitution/addition adds one carbon atom to the skeleton.'
        ]
    },
    {
        id: 'organic-purification-techniques-u5-l5',
        title: 'Laboratory Preparation & Purification Techniques',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Key Practical Techniques (Core Practical 16: Preparation of Aspirin)
> 1. **Refluxing:**
>    * Heating a chemical reaction mixture while continuously cooling the vapor using a vertical condenser.
>    * **Purpose:** Allows prolonged heating without losing volatile reactants or solvents.
> 2. **Purification by Washing & Solvent Extraction:**
>    * Using a separating funnel to wash organic mixtures with water and aqueous $\\text{NaHCO}_3$ (to remove and neutralize unreacted acid impurities).
>    * Drying the organic layer using an anhydrous inorganic salt (e.g. $\\text{MgSO}_4, \\text{CaCl}_2, \\text{Na}_2\\text{SO}_4$).
> 3. **Recrystallisation (Purifying Solid Products):**
>    * **Step 1:** Dissolve impure solid in the **minimum volume of hot solvent**.
>    * **Step 2:** Hot filtration to remove insoluble impurities.
>    * **Step 3:** Cool solution slowly to allow pure crystals to precipitate (soluble impurities remain dissolved in mother liquor).
>    * **Step 4:** Vacuum filtration using a Buchner funnel and cold solvent wash.
> 4. **Melting Temperature Determination:**
>    * **Pure organic solid:** Melts sharply over a very narrow range ($< 1–2°\\text{C}$) at the true literature melting point.
>    * **Impure solid:** Melts over a **broad temperature range** and at a **lower temperature** than the pure compound.
`,
        keyPoints: [
            'Reflux allows prolonged heating without losing volatile organic solvents.',
            'Recrystallisation: dissolve in minimum volume of hot solvent, cool to crystallize, filter under suction.',
            'Pure substances have sharp, high melting points; impurities lower the melting point and broaden the melting range.'
        ]
    },
    {
        id: 'chromatography-and-hrms-u5-l5',
        title: 'Chromatography (TLC, HPLC, GLC) & High-Resolution Mass Spectrometry',
        type: 'text',
        content: `
> [!NOTE]
> ### 🗂️ Chromatography: TLC, HPLC & GLC
> * **TLC (Thin-Layer Chromatography):** Solid stationary phase (silica $\\text{SiO}_2$), liquid mobile phase. $R_f = \\frac{\\text{distance travelled by spot}}{\\text{distance travelled by solvent front}}$.
> * **HPLC (High-Performance Liquid Chromatography):** Liquid mobile phase pumped under high pressure through a column packed with solid particles. Retention time ($R_t$) identifies components; peak area gives quantitative concentration.
> * **GLC (Gas-Liquid Chromatography):** Inert carrier gas mobile phase (He/$\\text{N}_2$) passing through a column with a liquid stationary phase coated on a solid support.
>   * Retention time depends on **solute volatility (boiling point)** and **solubility in liquid phase**.

> [!IMPORTANT]
> ### ⚖️ High-Resolution Mass Spectrometry (HRMS)
> * Measures atomic and molecular masses to **4 or 5 decimal places** (high precision).
> * Distinguishes between compounds with the **same nominal mass** (e.g. $\\text{C}_3\\text{H}_8\\text{O} = 60.0575\\text{ u}$ vs $\\text{C}_2\\text{H}_4\\text{O}_2 = 60.0211\\text{ u}$) because isotopes have precise non-integer masses:
>   * $^{12}\\text{C} = 12.0000$, $^1\\text{H} = 1.0078$, $^{16}\\text{O} = 15.9949$, $^{14}\\text{N} = 14.0031$
`,
        keyPoints: [
            'HPLC and GLC separate complex mixtures and identify compounds by retention times (Rt).',
            'HRMS measures m/z to 4 decimal places, differentiating isobaric molecular formulas with identical integer masses.'
        ]
    },
    {
        id: 'nmr-spectroscopy-13c-1h-u5-l5',
        title: 'NMR Spectroscopy ($^1\\text{H}$ & $^{13}\\text{C}$)',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧲 $^{13}\\text{C}$ NMR Spectroscopy
> * **Number of peaks:** Number of chemically non-equivalent carbon environments.
> * **Chemical shifts:** Alkyl carbons ($\\delta = 0–50\\text{ ppm}$), $\\text{C-O/C-N}$ ($\\delta = 50–90\\text{ ppm}$), aromatic/alkene carbons ($\\delta = 110–160\\text{ ppm}$), carbonyl carbons ($\\delta = 160–220\\text{ ppm}$).

> [!IMPORTANT]
> ### 🧲 $^1\\text{H}$ NMR Spectroscopy & Spin-Spin Splitting
> * **Number of signals:** Number of non-equivalent hydrogen environments.
> * **Integration trace (peak area):** Ratio of the number of hydrogen atoms in each environment.
> * **Chemical shift ($\\delta$):** Indicates functional group environment (TMS standard at $\\delta = 0\\text{ ppm}$).
> * **Splitting pattern ($n+1$ rule):** A proton coupled to $n$ equivalent protons on adjacent carbons is split into $(n+1)$ peaks:
>   * $n = 0 \\rightarrow$ **Singlet (s)**
>   * $n = 1 \\rightarrow$ **Doublet (d)** (ratio 1:1)
>   * $n = 2 \\rightarrow$ **Triplet (t)** (ratio 1:2:1)
>   * $n = 3 \\rightarrow$ **Quartet (q)** (ratio 1:3:3:1)
>   * $n = 6 \\rightarrow$ **Septet** (ratio 1:6:15:20:15:6:1)
`,
        keyPoints: [
            '¹³C NMR gives the number and types of carbon environments.',
            '¹H NMR splitting follows the (n+1) rule for non-equivalent adjacent protons.',
            'Peak integration gives relative numbers of hydrogen atoms in each environment.'
        ]
    }
];
