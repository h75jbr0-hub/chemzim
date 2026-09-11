import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Alkenes: Structure, Addition Reactions & Bromine Water Test";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Alkenes: Structure, Addition Reactions & Bromine Water Test
This lesson covers the homologous series of alkenes: their general formula (CnH2n), the reactive carbon-carbon double bond (C=C), addition reactions with hydrogen (hydrogenation to margarine), steam (hydration to ethanol), hydrogen halides, and bromine water (the definitive test for unsaturation), as well as addition polymerisation.
`;

const alkeneReactionsSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="akBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="akArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
  </defs>

  <rect width="680" height="320" fill="url(#akBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Addition Reactions of Ethene (CH₂=CH₂) — Breaking the C=C Double Bond</text>

  <!-- Central Molecule: Ethene -->
  <g transform="translate(260, 115)">
    <rect width="160" height="70" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="2" />
    <text x="80" y="30" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">Ethene (C₂H₄)</text>
    <text x="80" y="52" fill="#f8fafc" font-size="11" font-family="monospace" text-anchor="middle">CH₂ = CH₂</text>
  </g>

  <!-- Top Left: Hydrogenation (H₂) -->
  <path d="M 260 130 L 175 75" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#akArrow)" />
  <g transform="translate(25, 40)">
    <rect width="145" height="70" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="72" y="20" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">+ H₂ (Nickel, 150°C)</text>
    <text x="72" y="38" fill="#f8fafc" font-size="10" text-anchor="middle">Ethane (C₂H₆)</text>
    <text x="72" y="56" fill="#94a3b8" font-size="9" text-anchor="middle">Margarine manufacture</text>
  </g>

  <!-- Top Right: Halogenation / Bromine Water (Br₂) -->
  <path d="M 420 130 L 505 75" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#akArrow)" />
  <g transform="translate(510, 40)">
    <rect width="145" height="70" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
    <text x="72" y="20" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">+ Br₂ (aq)</text>
    <text x="72" y="38" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">Orange → Colourless</text>
    <text x="72" y="56" fill="#94a3b8" font-size="9" text-anchor="middle">1,2-dibromoethane</text>
  </g>

  <!-- Bottom Left: Hydration with Steam (H₂O) -->
  <path d="M 260 170 L 175 225" fill="none" stroke="#a855f7" stroke-width="2" marker-end="url(#akArrow)" />
  <g transform="translate(25, 205)">
    <rect width="145" height="75" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
    <text x="72" y="20" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">+ Steam (H₃PO₄, 300°C)</text>
    <text x="72" y="38" fill="#f8fafc" font-size="10" text-anchor="middle">Ethanol (C₂H₅OH)</text>
    <text x="72" y="56" fill="#94a3b8" font-size="9" text-anchor="middle">60 atm pressure</text>
  </g>

  <!-- Bottom Right: Hydrogen Halide (HBr) -->
  <path d="M 420 170 L 505 225" fill="none" stroke="#ec4899" stroke-width="2" marker-end="url(#akArrow)" />
  <g transform="translate(510, 205)">
    <rect width="145" height="75" rx="8" fill="#0f172a" stroke="#ec4899" stroke-width="1.5" />
    <text x="72" y="20" fill="#f472b6" font-size="11" font-weight="bold" text-anchor="middle">+ HBr</text>
    <text x="72" y="38" fill="#f8fafc" font-size="10" text-anchor="middle">Bromoethane</text>
    <text x="72" y="56" fill="#94a3b8" font-size="9" text-anchor="middle">CH₃CH₂Br (addition)</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "alkene-structure-and-bromine-test",
    title: "Alkenes & The Chemical Test for Unsaturation",
    type: "text",
    content: `
### 🧬 Alkenes: Unsaturated Hydrocarbons

Alkenes are a homologous series of hydrocarbons containing a **carbon-carbon double covalent bond ($C=C$)** with the general formula **$C_nH_{2n}$** (where $n \ge 2$).

> [!NOTE]
> ### 🔬 First Four Members of Alkenes
> * **Ethene ($C_2H_4$):** $CH_2=CH_2$
> * **Propene ($C_3H_6$):** $CH_3CH=CH_2$
> * **But-1-ene ($C_4H_8$):** $CH_2=CHCH_2CH_3$
> * **But-2-ene ($C_4H_8$):** $CH_3CH=CHCH_3$
> *(Notice: There is no methene because a double bond requires at least two carbon atoms).*

> ${svgToken(alkeneReactionsSvg)}

> [!IMPORTANT]
> ### 🧪 Chemical Test to Distinguish Alkanes from Alkenes (Aqueous Bromine Water)
> The standard Cambridge test for an unsaturated hydrocarbon ($C=C$ double bond) is shaking the substance with **aqueous bromine water ($Br_2\text{(aq)}$)**:
> 
> 1. **Alkene (Unsaturated):**
>    * The reddish-brown / orange bromine water turns **colourless immediately** (decolourises).
>    * Reaction: Bromine atoms add across the double bond forming a saturated, colourless haloalkane:
>      $$\text{C}_2\text{H}_4\text{(g)} + \text{Br}_2\text{(aq)} \rightarrow \text{CH}_2\text{Br-CH}_2\text{Br(l)}$$
>      *(Ethene + Bromine $\rightarrow$ 1,2-dibromoethane)*
> 
> 2. **Alkane (Saturated):**
>    * The solution **remains orange / brown** in the dark (no immediate reaction because alkanes lack a $C=C$ double bond and require UV light for substitution).
`,
    keyPoints: [
      "Alkenes have the general formula CₙH₂ₙ and contain a C=C double bond.",
      "Alkenes decolourise aqueous bromine water from reddish-brown/orange to colourless immediately.",
      "Alkanes remain orange/brown when mixed with bromine water in the dark."
    ]
  },
  {
    id: "addition-reactions-of-alkenes",
    title: "Addition Reactions of Alkenes (Hydrogenation, Hydration, Halides)",
    type: "text",
    content: `
### ➕ Addition Reactions of Alkenes

Because of the reactive $C=C$ double bond, alkenes undergo **addition reactions** where the double bond breaks open and two new atoms or groups attach to the carbon atoms, forming a single saturated product (**only ONE product is formed**):

> [!BOX]
> ### 📋 Key Addition Reactions of Ethene
> 
> 1. **Hydrogenation (Addition of $H_2$):**
>    * Reagent: Hydrogen gas ($H_2$).
>    * Conditions: Nickel catalyst at $150 - 200^\circ\text{C}$, heat and pressure.
>    * Reaction:
>      $$\text{C}_2\text{H}_4\text{(g)} + \text{H}_2\text{(g)} \rightarrow \text{C}_2\text{H}_6\text{(g)} \quad \text{(Ni, } 150^\circ\text{C)}$$
>    * *Application:* Industrial hydrogenation of liquid unsaturated vegetable oils into solid margarine.
> 
> 2. **Hydration (Addition of Steam, $H_2O$):**
>    * Reagent: Steam ($H_2O\text{(g)}$).
>    * Conditions: Concentrated phosphoric acid catalyst ($\text{H}_3\text{PO}_4$), **$300^\circ\text{C}$**, and **$60\text{ atm}$** ($6000\text{ kPa}$) pressure.
>    * Reaction:
>      $$\text{C}_2\text{H}_4\text{(g)} + \text{H}_2\text{O(g)} \rightarrow \text{C}_2\text{H}_5\text{OH(g)} \quad \text{(H}_3\text{PO}_4, 300^\circ\text{C}, 60\text{ atm)}$$
>    * *Product:* Pure ethanol. This is a fast, continuous industrial manufacturing process for alcohol.
> 
> 3. **Addition of Hydrogen Halides ($HX$):**
>    * Reagent: Hydrogen bromide ($HBr$) or hydrogen chloride ($HCl$).
>    * Reaction:
>      $$\text{C}_2\text{H}_4\text{(g)} + \text{HBr(g)} \rightarrow \text{CH}_3\text{CH}_2\text{Br(l)}$$
>      *(Ethene + Hydrogen bromide $\rightarrow$ Bromoethane)*
> 
> 4. **Addition Polymerisation:**
>    * Thousands of ethene monomers link together under high pressure and temperature with a catalyst:
>      $$n\text{ CH}_2=\text{CH}_2 \rightarrow -[\text{CH}_2-\text{CH}_2]_n-$$
>      *(Ethene $\rightarrow$ Poly(ethene))*

> [!EXAMPLE]
> #### 📝 Worked Example 5: Decolourisation of Bromine Water
> **Question:** Compound Q rapidly decolourises aqueous bromine water. Compound Q contains two carbon atoms per molecule. What is compound Q and how is it produced?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. Decolourising bromine water proves the compound is an **alkene** ($C=C$ double bond).
> > 2. Two carbon atoms per molecule = **ethene ($C_2H_4$)**.
> > 3. Ethene is produced industrially by the **catalytic cracking of long-chain alkanes** from petroleum fractions!
`,
    keyPoints: [
      "Addition reactions involve breaking the C=C double bond to yield a single product.",
      "Hydrogenation uses a nickel catalyst at 150–200 °C to make alkanes (e.g. margarine).",
      "Hydration of ethene requires steam, a phosphoric acid (H₃PO₄) catalyst, 300 °C, and 60 atm pressure to yield ethanol."
    ]
  }
];
