import { LessonPart } from '../../../registry';

export const lessonTitle = "Organic Chemistry: Arenes";
export const lessonNumber = 3;

export const theoryMarkdown = `
# Topic 18: Organic Chemistry – Arenes
This lesson covers the structure, bonding, stability and thermochemical evidence for benzene, electrophilic aromatic substitution mechanisms (halogenation, nitration, Friedel-Crafts alkylation and acylation), the chemistry of phenol, and directing effects of substituents.
`;

export const parts: LessonPart[] = [
    {
        id: 'benzene-structure-bonding-u5-l3',
        title: 'Structure, Bonding & Stability of Benzene',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚛️ Structure and the Delocalised Model
> * **Molecular formula:** $\\text{C}_6\\text{H}_6$
> * **Shape:** Planar, regular hexagonal ring with bond angles of **$120°$**.
> * **Hybridisation:** Each carbon atom is **$sp^2$ hybridised**, forming three $\\sigma$ bonds (two to adjacent carbons, one to hydrogen).
> * **Delocalised $\\pi$-system:** The remaining unhybridised $p$-orbital on each carbon atom overlaps sideways above and below the plane of the carbon ring, forming a continuous, delocalised ring of six $\\pi$-electrons.
> * **Bond lengths:** All six carbon–carbon bonds are completely identical ($0.139\\text{ nm}$), intermediate between a single bond ($\text{C-C} = 0.154\\text{ nm}$) and a double bond ($\text{C=C} = 0.134\\text{ nm}$).

> [!IMPORTANT]
> ### 📊 Thermochemical Evidence for Stability (Resonance Energy)
> The enthalpy of hydrogenation provides direct thermodynamic proof of delocalisation:
> * **Theoretical cyclohexa-1,3,5-triene (Kekulé model):** Contains 3 isolated $\\text{C=C}$ double bonds. Expected $\\Delta H^\\ominus_{\\text{hydro}} = 3 \\times (-120) = \\mathbf{-360\\text{ kJ mol}^{-1}}$.
> * **Experimental benzene:** $\\Delta H^\\ominus_{\\text{hydro}} = \\mathbf{-208\\text{ kJ mol}^{-1}}$.
> * **Resonance / Delocalisation Energy:** Benzene is **$152\\text{ kJ mol}^{-1}$ more stable** than predicted for the triene structure ($360 - 208 = 152\\text{ kJ mol}^{-1}$).
> * **Reactivity:** Due to this $152\\text{ kJ mol}^{-1}$ stability, benzene resists electrophilic addition (which would permanently destroy the delocalised $\\pi$-ring) and instead undergoes **electrophilic aromatic substitution**.
`,
        keyPoints: [
            'Benzene has a planar hexagonal ring with all C–C bonds equal (0.139 nm) and 120° bond angles.',
            'Each carbon is sp² hybridised with delocalised π-electron clouds above and below the ring.',
            'Enthalpy of hydrogenation is –208 kJ/mol (152 kJ/mol more stable than theoretical Kekulé triene).',
            'Undergoes electrophilic substitution to preserve the stable aromatic π-system.'
        ]
    },
    {
        id: 'electrophilic-substitution-mechanisms-u5-l3',
        title: 'Electrophilic Aromatic Substitution Reactions',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚗️ The General Mechanism (Three Steps)
> 1. **Generation of the electrophile ($\text{E}^+$)** by a catalyst/halogen carrier.
> 2. **Electrophilic attack on the benzene ring:** The $\\pi$-electron cloud attacks $\\text{E}^+$, forming an unstable positively charged carbocation intermediate (Wheland intermediate / arenium ion) where 4 $\\pi$-electrons are delocalised over 5 carbons.
> 3. **Loss of a proton ($\text{H}^+$):** Rapid deprotonation restores the full aromatic $6\\pi$-electron ring and regenerates the catalyst.

> [!IMPORTANT]
> ### 🧪 Key Electrophilic Substitution Reactions
> 1. **Nitration:**
>    * Reagents: Concentrated $\\text{HNO}_3$ + Concentrated $\\text{H}_2\\text{SO}_4$ at **$50–55°\\text{C}$**.
>    * Electrophile generation: $\\text{HNO}_3 + 2\\text{H}_2\\text{SO}_4 \\rightleftharpoons \\mathbf{\\text{NO}_2^+} + \\text{H}_3\\text{O}^+ + 2\\text{HSO}_4^-$
>    * Overall: $\\text{C}_6\\text{H}_6 + \\text{HNO}_3 \\xrightarrow{\\text{H}_2\\text{SO}_4} \\text{C}_6\\text{H}_5\\text{NO}_2 + \\text{H}_2\\text{O}$ (Nitrobenzene)
> 2. **Halogenation (Chlorination / Bromination):**
>    * Reagents: $\\text{Cl}_2$ or $\\text{Br}_2$ with an anhydrous halogen carrier ($\\text{AlCl}_3, \\text{FeCl}_3, \\text{FeBr}_3$) at room temperature.
>    * Electrophile generation: $\\text{Cl}_2 + \\text{AlCl}_3 \\rightarrow \\mathbf{\\text{Cl}^+} + \\text{AlCl}_4^-$
> 3. **Friedel-Crafts Alkylation:**
>    * Reagents: Halogenoalkane (e.g. $\\text{CH}_3\\text{Cl}$) + anhydrous $\\text{AlCl}_3$.
>    * Electrophile generation: $\\text{CH}_3\\text{Cl} + \\text{AlCl}_3 \\rightarrow \\mathbf{\\text{CH}_3^+} + \\text{AlCl}_4^-$
> 4. **Friedel-Crafts Acylation:**
>    * Reagents: Acyl chloride (e.g. $\\text{CH}_3\\text{COCl}$) + anhydrous $\\text{AlCl}_3$.
>    * Electrophile generation: $\\text{CH}_3\\text{COCl} + \\text{AlCl}_3 \\rightarrow \\mathbf{\\text{CH}_3\\text{C}^+=\\text{O}} + \\text{AlCl}_4^-$
`,
        keyPoints: [
            'Nitration uses conc. HNO₃ and conc. H₂SO₄ at 50–55°C to generate the NO₂⁺ electrophile.',
            'Halogenation requires anhydrous AlCl₃/FeCl₃ halogen carrier to generate Cl⁺/Br⁺.',
            'Friedel-Crafts alkylation/acylation forms new C–C bonds to the benzene ring using AlCl₃ catalyst.'
        ]
    },
    {
        id: 'phenol-chemistry-u5-l3',
        title: 'Phenol: Properties, Reactivity & Directing Effects',
        type: 'text',
        content: `
> [!NOTE]
> ### 🌸 Structure and Enhanced Reactivity of Phenol ($\\text{C}_6\\text{H}_5\\text{OH}$)
> * In phenol, a lone pair of electrons on the oxygen atom **delocalises into the aromatic $\\pi$-ring**.
> * This **increases the $\\pi$-electron density** of the ring, particularly at positions **2, 4, and 6 (ortho and para)**.
> * As a result, phenol is **much more reactive** towards electrophiles than benzene and can react without halogen carriers or heating.

> [!IMPORTANT]
> ### 🧪 Reactions of Phenol
> 1. **With Bromine water ($\text{Br}_2\text{(aq)}$):**
>    * Reacts **instantly at room temperature without any catalyst**.
>    * Observation: Bromine water decolorizes and a dense **white precipitate of 2,4,6-tribromophenol** forms (with an antiseptic smell).
> 2. **Acidity of Phenol:**
>    * Phenol is weakly acidic ($pK_a \\approx 9.95$), more acidic than aliphatic alcohols but weaker than carboxylic acids.
>    * Reacts with $\\text{NaOH(aq)}$ to form sodium phenoxide: $\\text{C}_6\\text{H}_5\\text{OH} + \\text{NaOH} \\rightarrow \\text{C}_6\\text{H}_5\\text{O}^-\\text{Na}^+ + \\text{H}_2\\text{O}$
>    * Does **NOT** react with $\\text{NaHCO}_3\\text{(aq)}$ (cannot liberate $\\text{CO}_2$), distinguishing it from carboxylic acids.
> 3. **Test with $\text{FeCl}_3\text{(aq)}$:**
>    * Addition of neutral iron(III) chloride solution forms a characteristic intense **purple/violet coloration** ($[\\text{Fe(OC}_6\\text{H}_5)_6]^{3-}$ complex).
`,
        keyPoints: [
            'Oxygen lone pair delocalises into the benzene ring, activating the ring towards electrophilic attack.',
            'Phenol reacts instantly with bromine water without a catalyst to form white 2,4,6-tribromophenol.',
            'Phenol dissolves in NaOH to form sodium phenoxide, but does not react with NaHCO₃.',
            'Gives a distinctive purple/violet color with neutral FeCl₃(aq).'
        ]
    }
];
