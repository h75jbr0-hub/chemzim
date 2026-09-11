import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Halogenoalkanes, Alcohols & Modern Analytical Techniques I";
export const lessonNumber = 5;

export const theoryMarkdown = `
In this lesson, we introduce the general principles of organic chemistry (reaction classifications, mechanisms, homolytic vs. heterolytic bond breaking, and nucleophiles/electrophiles) followed by halogenoalkanes and alcohols chemistry, and modern spectroscopic techniques (mass spectra and infrared spectroscopy).
`;

export const parts: LessonPart[] = [
    {
        id: '10a1-reaction-classification',
        title: 'Organic Reaction Classifications',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚛️ Classifying Organic Reactions
> Chemical reactions in organic chemistry can be classified into seven primary types based on what happens to the atoms and bonds:
> 
> 1. **Addition Reactions:** Two reactant molecules combine to form a single product. Multiple bonds become single bonds.
>    * *Example:* $C_2H_4\\text{(g)} + Br_2\\text{(l)} \\\\rightarrow C_2H_4Br_2\\text{(l)}$ (Ethene adding bromine).
> 2. **Elimination Reactions:** Two atoms or groups are removed from a molecule, forming a double bond and a small molecule.
>    * *Example:* $CH_3CH_2Br\\text{(l)} + KOH\\text{(alc)} \\\\rightarrow CH_2=CH_2\\text{(g)} + KBr\\text{(s)} + H_2O\\text{(l)}$ (Dehydrohalogenation of bromoethane).
> 3. **Substitution Reactions:** An atom or group in a molecule is replaced by another atom or group, yielding two products.
>    * *Example:* $C_2H_5Br\\text{(l)} + OH^-\\text{(aq)} \\\\rightarrow C_2H_5OH\\text{(aq)} + Br^-\\text{(aq)}$ (Hydrolysis of bromoethane).
> 4. **Oxidation Reactions:** An organic compound gains oxygen or loses hydrogen atoms.
>    * *Example:* $C_2H_5OH\\text{(l)} + [O] \\\\rightarrow CH_3CHO\\text{(l)} + H_2O\\text{(l)}$ (Oxidation of ethanol to ethanal).
> 5. **Reduction Reactions:** An organic compound loses oxygen or gains hydrogen atoms.
>    * *Example:* $C_2H_4\\text{(g)} + H_2\\text{(g)} \\\\rightarrow C_2H_6\\text{(g)}$ (Hydrogenation of ethene).
> 6. **Hydrolysis Reactions:** An organic compound reacts with water (or aqueous hydroxide), causing a bond to break and an $OH$ group to replace a halogen or other leaving group.
>    * *Example:* $RX + H_2O \\\\rightarrow ROH + HX$.
> 7. **Polymerisation Reactions:** Large numbers of monomer molecules react together to form a single very large polymer chain.
>    * *Example:* $n CH_2=CH_2 \\\\rightarrow [-CH_2-CH_2-]_n$ (Ethene to poly(ethene)).

> [!TIP]
> ### 🧪 Oxidation Agents and Alkenes vs. Alcohols
> Acidified potassium manganate(VII) ($KMnO_4/H^+$) will oxidise an alkene double bond to form a diol (an alcohol with two OH groups).
> However, to oxidise primary or secondary alcohols to aldehydes, ketones, or carboxylic acids, acidified potassium dichromate(VI) ($K_2Cr_2O_7/H^+$) is used instead.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Classifying Reactions
> **Question:** Classify each of the following reactions:
> 1. $CH_3CH_2Cl\\text{(l)} + LiOH\\text{(aq)} \\\\rightarrow CH_3CH_2OH\\text{(aq)} + LiCl\\text{(aq)}$
> 2. $CH_3CH=CH_2\\text{(g)} + H_2O\\text{(g)} \\\\rightarrow CH_3CH(OH)CH_3\\text{(l)}$
> 3. $CH_3CH_2CHO\\text{(l)} + [O] \\\\rightarrow CH_3CH_2COOH\\text{(l)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Reaction 1:**
> >    * Chlorine atom on bromoethane is replaced by an $OH$ group.
> >    * This is a **substitution** reaction (specifically, a **hydrolysis** reaction).
> > 
> > 2. **Reaction 2:**
> >    * Propene and water combine to form a single product, propan-2-ol.
> >    * This is an **addition** reaction (specifically, hydration).
> > 
> > 3. **Reaction 3:**
> >    * Propanal gains an oxygen atom to become propanoic acid.
> >    * This is an **oxidation** reaction.
`
    },
    {
        id: '10a2-mechanisms-cleavage',
        title: 'Reaction Mechanisms & Bond Cleavage',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧬 What is a Reaction Mechanism?
> A **reaction mechanism** is a step-by-step sequence of elementary reactions (or steps) showing the detailed movements of electrons as bonds are broken and formed during a chemical reaction.
> * Curved arrows with a **double head** ($\\\\curvearrowright$) represent the movement of an **electron pair**.
> * Curved arrows with a **single fishhook head** represent the movement of a **single electron**.

> [!IMPORTANT]
> ### 🪓 Homolytic vs. Heterolytic Cleavage
> When a covalent bond breaks, it can do so in one of two ways:
> 
> 1. **Homolytic Fission:** The shared pair of electrons is split equally between the two bonding atoms.
>    * Each atom leaves with **one single electron**, forming highly reactive neutral species called **free radicals** (represented with a dot, e.g., $Cl\\\\bullet$).
> 2. **Heterolytic Fission:** One of the two bonding atoms keeps **both** electrons from the shared pair.
>    * This results in the formation of ions. The atom that retains the electrons becomes a negatively charged ion (nucleophile/anion), and the atom that loses the electrons becomes positively charged (electrophile/cation).
> 
> \${svgToken(\`<svg viewBox="0 0 650 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradCleave" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGradCleave)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  
  <!-- Left Side: Homolytic Fission -->
  <g transform="translate(10, 0)">
    <text x="150" y="35" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Homolytic Fission (Equal Split)</text>
    
    <!-- Bond representation -->
    <text x="110" y="110" fill="#f8fafc" font-size="18" font-weight="bold">Cl</text>
    <line x1="135" y1="105" x2="175" y2="105" stroke="#94a3b8" stroke-width="2"/>
    <text x="180" y="110" fill="#f8fafc" font-size="18" font-weight="bold">Cl</text>
    
    <!-- Fishhook arrows (one electron each) -->
    <!-- Curved path left -->
    <path d="M 150 100 C 135 70, 125 70, 115 90" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
    <!-- Fishhook head left -->
    <path d="M 115 90 L 111 85 M 115 90 L 121 88" stroke="#fbbf24" stroke-width="1.5"/>
    
    <!-- Curved path right -->
    <path d="M 160 100 C 175 70, 185 70, 195 90" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
    <!-- Fishhook head right -->
    <path d="M 195 90 L 199 85 M 195 90 L 189 88" stroke="#fbbf24" stroke-width="1.5"/>
    
    <text x="150" y="138" text-anchor="middle" fill="#cbd5e1" font-size="9">Fishhook arrow = single electron transfer</text>
    
    <!-- Products -->
    <text x="110" y="180" fill="#38bdf8" font-size="15" font-weight="bold">Cl•</text>
    <text x="145" y="180" fill="#f8fafc" font-size="15">+</text>
    <text x="175" y="180" fill="#38bdf8" font-size="15" font-weight="bold">Cl•</text>
    <text x="150" y="198" text-anchor="middle" fill="#38bdf8" font-size="10">Neutral Free Radicals</text>
  </g>
  
  <!-- Divider -->
  <line x1="325" y1="20" x2="325" y2="200" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="4 4"/>
  
  <!-- Right Side: Heterolytic Fission -->
  <g transform="translate(330, 0)">
    <text x="150" y="35" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">Heterolytic Fission (Unequal Split)</text>
    
    <!-- C-Cl bond -->
    <text x="110" y="110" fill="#f8fafc" font-size="18" font-weight="bold">C</text>
    <line x1="130" y1="105" x2="175" y2="105" stroke="#94a3b8" stroke-width="2"/>
    <text x="180" y="110" fill="#f8fafc" font-size="18" font-weight="bold">Cl</text>
    <text x="110" y="85" fill="#34d399" font-size="9">δ+</text>
    <text x="185" y="85" fill="#f43f5e" font-size="9">δ-</text>
    
    <!-- Double-headed arrow (electron pair to Cl) -->
    <path d="M 145 102 C 160 85, 175 85, 185 98" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
    <path d="M 185 98 L 184 91 M 185 98 L 178 98" stroke="#f43f5e" stroke-width="1.5"/>
    
    <text x="150" y="138" text-anchor="middle" fill="#cbd5e1" font-size="9">Double-headed arrow = electron pair transfer</text>
    
    <!-- Products -->
    <text x="110" y="180" fill="#34d399" font-size="15" font-weight="bold">C⁺</text>
    <text x="145" y="180" fill="#f8fafc" font-size="15">+</text>
    <text x="175" y="180" fill="#f43f5e" font-size="15" font-weight="bold">Cl⁻</text>
    <text x="150" y="198" text-anchor="middle" fill="#f43f5e" font-size="10">Charged Ions (Cation + Anion)</text>
  </g>
</svg>\`)}
`
    },
    {
        id: '10a3-electrophiles-nucleophiles',
        title: 'Electrophiles, Nucleophiles & Bond Polarity',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧲 Electrophiles and Nucleophiles
> 
> 1. **Nucleophile (Nucleus-loving):** An electron-rich species containing a **lone pair of electrons** that it can donate to an electron-deficient carbon atom to form a new covalent bond.
>    * *Examples:* Hydroxide ion ($OH^-$), water ($H_2O$), ammonia ($NH_3$), and cyanide ion ($CN^-$).
> 2. **Electrophile (Electron-loving):** An electron-deficient species that can **accept a pair of electrons** from an electron-rich center (like a double bond or lone pair) to form a new covalent bond.
>    * *Examples:* Hydrogen ion ($H^+$), nitronium ion ($NO_2^+$), carbon dioxide, and polar molecules like $H-Br$.

> [!IMPORTANT]
> ### ⚡ Link Between Bond Polarity and Mechanism
> The polarity of bonds in organic reactants determines how they break:
> * **Non-polar or Very Slightly Polar Bonds:** (e.g. C-H in alkanes, Cl-Cl) tend to break **homolytically**, forming free radicals. Consequently, they undergo **free radical substitution** mechanisms.
> * **Polar Bonds:** (e.g. C-X in halogenoalkanes where the halogen is highly electronegative, creating a polar $C^{\\delta+} - X^{\\delta-}$ bond) tend to break **heterolytically**. This polar center attracts nucleophiles, leading to **nucleophilic substitution** or elimination mechanisms.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Species Classification
> **Question:** Identify whether each of the following species acts as a nucleophile or an electrophile:
> 1. $NH_3$
> 2. $H^+$
> 3. $Br^-$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Ammonia ($NH_3$):**
> >    * The nitrogen atom has a lone pair of electrons ($:\\\\text{NH}_3$) that it can donate to form a bond.
> >    * Therefore, it is a **nucleophile**.
> > 
> > 2. **Hydrogen ion ($H^+$):**
> >    * It has a positive charge and is electron-deficient, seeking electrons to fill its shell.
> >    * Therefore, it is an **electrophile**.
> > 
> > 3. **Bromide ion ($Br^-$):**
> >    * It carries a negative charge and has lone pairs of electrons to donate.
> >    * Therefore, it is a **nucleophile**.
`
    },
    {
        id: '10b1-halogenoalkanes-intro',
        title: 'Halogenoalkanes: Structure & Classification',
        type: 'text',
        content: `
> [!NOTE]
> ### 🏷️ What are Halogenoalkanes?
> Halogenoalkanes are a homologous series of organic compounds with the general formula $C_n H_{2n+1} X$ (often simplified to $RX$), where a hydrogen atom in an alkane is replaced by a halogen atom ($X = F, Cl, Br, I$).
> * **Nomenclature Rules:**
>   * Identify the longest carbon chain as the parent alkane.
>   * Number the chain from the end closest to the halogen substituent.
>   * Use prefixes *fluoro-*, *chloro-*, *bromo-*, and *iodo-* to show halogen presence.
>   * If multiple different halogens are present, list them in **alphabetical order** (e.g., bromo- before chloro-).
>   * Prefix numbers should add up to the smallest sum possible.
>   * *Examples:*
>     * $CH_2Cl-CHCl-CH_3$ is **1,2-dichloropropane**
>     * $CH_2Br-CH_2-CH_2Cl$ is **1-bromo-3-chloropropane**
>     * $CCl_4$ is **tetrachloromethane**
>     * $CH_3-CHF-CH_2-CH_3$ is **2-fluorobutane**

> [!TIP]
> ### 📁 Classifying Halogenoalkanes
> Halogenoalkanes are classified based on the number of alkyl groups attached to the carbon bonded to the halogen atom:
> * **Primary ($1^{\\circ}$):** The halogen-bearing carbon is attached to **one** alkyl group (or is methyl, e.g. $CH_3CH_2CH_2F$). Abbreviated as $RCH_2X$.
> * **Secondary ($2^{\\circ}$):** The halogen-bearing carbon is attached to **two** alkyl groups (e.g. $CH_3-CHBr-CH_3$). Abbreviated as $R_2CHX$.
> * **Tertiary ($3^{\\circ}$):** The halogen-bearing carbon is attached to **three** alkyl groups (e.g. $(CH_3)_3C-Cl$). Abbreviated as $R_3CX$.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Naming and Classifying Isomers
> **Question:** Write the IUPAC name and classify each of the following halogenoalkanes as primary, secondary, or tertiary:
> 1. $(CH_3)_3C-CH_2-CH_2-Cl$
> 2. $CH_3-CH(CH_3)-CHBr-CH_3$
> 3. $(CH_3)_3C-Cl$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compound 1: $(CH_3)_3C-CH_2-CH_2-Cl$**
> >    * Longest chain containing Cl has 4 carbons (butane).
> >    * Numbering starts from the end nearest Cl: C1 is bonded to Cl, C3 has two methyl groups.
> >    * Name: **1-chloro-3,3-dimethylbutane**.
> >    * Classification: The carbon bonded to Cl is attached to only one carbon group (the $-CH_2-C(CH_3)_3$ group). Thus, it is a **primary ($1^{\\circ}$)** halogenoalkane.
> > 
> > 2. **Compound 2: $CH_3-CH(CH_3)-CHBr-CH_3$**
> >    * Longest chain containing Br has 4 carbons (butane).
> >    * Numbering starts from the right to give substituents lowest numbers: Br is at C2, methyl is at C3.
> >    * Name: **2-bromo-3-methylbutane** (listed alphabetically).
> >    * Classification: The carbon bonded to Br is attached to two carbons (a methyl group and a $-CH(CH_3)_2$ group). Thus, it is a **secondary ($2^{\\circ}$)** halogenoalkane.
> > 
> > 3. **Compound 3: $(CH_3)_3C-Cl$**
> >    * Longest chain has 3 carbons (propane). Cl and methyl are at C2.
> >    * Name: **2-chloro-2-methylpropane**.
> >    * Classification: The carbon bonded to Cl is attached to three methyl groups. Thus, it is a **tertiary ($3^{\\circ}$)** halogenoalkane.
`
    },
    {
        id: '10b2-hydrolysis-rates',
        title: 'Rates of Hydrolysis & Reactivity Trends',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Measuring Hydrolysis Rates (Core Practical 5)
> Halogenoalkanes undergo hydrolysis when reacted with water:
> $$RX\\text{(aq)} + H_2O\\text{(l)} \\\\rightarrow ROH\\text{(aq)} + H^+\\text{(aq)} + X^-\\text{(aq)}$$
> * **Experimental Method:**
>   * We add **aqueous silver nitrate ($AgNO_3$)** to three test tubes containing 1-chlorobutane, 1-bromobutane, and 1-iodobutane at the same temperature.
>   * **Ethanol** is added as a co-solvent. Since halogenoalkanes are insoluble in water, ethanol allows them to mix with the aqueous silver nitrate, preventing the formation of separate layers.
>   * The released halide ions ($X^-$) react immediately with $Ag^+$ to form a silver halide precipitate:
>     $$Ag^+\\text{(aq)} + X^-\\text{(aq)} \\\\rightarrow AgX\\text{(s)}$$
>   * We measure the time taken for a visible precipitate to appear in each tube.
> 
> \${svgToken(\`<svg viewBox="0 0 650 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradHydro" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGradHydro)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  
  <!-- Left Panel: Test Tube Precipitates -->
  <g transform="translate(10, 20)">
    <!-- Tube A: AgCl (White, Slowest) -->
    <rect x="30" y="30" width="25" height="110" rx="12.5" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
    <path d="M 30 110 C 30 140, 55 140, 55 110 Z" fill="#f8fafc" fill-opacity="0.2"/>
    <text x="42" y="155" text-anchor="middle" fill="#cbd5e1" font-size="9">Tube (a)</text>
    <text x="42" y="168" text-anchor="middle" fill="#94a3b8" font-size="8">AgCl (White)</text>
    <text x="42" y="180" text-anchor="middle" fill="#ef4444" font-size="8" font-weight="bold">SLOWEST</text>
    
    <!-- Tube B: AgBr (Cream, Medium) -->
    <rect x="85" y="30" width="25" height="110" rx="12.5" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
    <path d="M 85 110 C 85 140, 110 140, 110 110 Z" fill="#fef08a" fill-opacity="0.4"/>
    <text x="97" y="155" text-anchor="middle" fill="#cbd5e1" font-size="9">Tube (b)</text>
    <text x="97" y="168" text-anchor="middle" fill="#fde047" font-size="8">AgBr (Cream)</text>
    <text x="97" y="180" text-anchor="middle" fill="#f59e0b" font-size="8" font-weight="bold">MEDIUM</text>
    
    <!-- Tube C: AgI (Yellow, Fastest) -->
    <rect x="140" y="30" width="25" height="110" rx="12.5" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
    <path d="M 140 110 C 140 140, 165 140, 165 110 Z" fill="#eab308" fill-opacity="0.8"/>
    <text x="152" y="155" text-anchor="middle" fill="#cbd5e1" font-size="9">Tube (c)</text>
    <text x="152" y="168" text-anchor="middle" fill="#ca8a04" font-size="8">AgI (Yellow)</text>
    <text x="152" y="180" text-anchor="middle" fill="#10b981" font-size="8" font-weight="bold">FASTEST</text>
    
    <text x="97" y="200" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Precipitate Colors &amp; Rates</text>
  </g>
  
  <!-- Right Panel: Bond Enthalpy Bar Chart -->
  <g transform="translate(250, 20)">
    <text x="180" y="25" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="bold">Mean Bond Enthalpies</text>
    
    <!-- C-Cl Bar -->
    <text x="20" y="65" fill="#f8fafc" font-size="10">C—Cl</text>
    <rect x="60" y="55" width="200" height="15" fill="#ef4444" rx="3"/>
    <text x="270" y="67" fill="#ef4444" font-size="9" font-weight="bold">+346 kJ/mol</text>
    
    <!-- C-Br Bar -->
    <text x="20" y="105" fill="#f8fafc" font-size="10">C—Br</text>
    <rect x="60" y="95" width="167" height="15" fill="#f59e0b" rx="3"/>
    <text x="240" y="107" fill="#f59e0b" font-size="9" font-weight="bold">+290 kJ/mol</text>
    
    <!-- C-I Bar -->
    <text x="20" y="145" fill="#f8fafc" font-size="10">C—I</text>
    <rect x="60" y="135" width="131" height="15" fill="#10b981" rx="3"/>
    <text x="200" y="147" fill="#10b981" font-size="9" font-weight="bold">+228 kJ/mol</text>
    
    <text x="180" y="185" text-anchor="middle" fill="#94a3b8" font-size="9">Weaker bonds require less energy &amp; break faster.</text>
    <text x="180" y="198" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-weight="bold">Bond Enthalpy governs reactivity trend, not polarity.</text>
  </g>
</svg>\`)}

> [!IMPORTANT]
> ### ⚖️ Bond Polarity vs. Bond Enthalpy
> Why do iodoalkanes react the fastest, even though C-F and C-Cl bonds are much more polar?
> * **Bond Polarity Argument:** Electronegativity decreases down Group 7 ($F > Cl > Br > I$). Therefore, the $C^{\\delta+} - Cl^{\\delta-}$ bond is much more polar than C-I. The C atom in chloroalkanes is more positive and should attract nucleophiles more strongly. This predicts $Cl > Br > I$ (incorrect).
> * **Bond Enthalpy Argument:** Breaking the carbon-halogen covalent bond requires energy. The mean bond enthalpies decrease down the group:
>   * $C-Cl = +346\\text{ kJ mol}^{-1}$
>   * $C-Br = +290\\text{ kJ mol}^{-1}$
>   * $C-I = +228\\text{ kJ mol}^{-1}$
> * **Conclusion:** The C-I bond is the weakest and breaks most easily. The fact that iodoalkanes hydrolyse fastest proves that **bond enthalpy is the dominant factor** determining reactivity, not bond polarity.
> * Fluoroalkanes are extremely unreactive because the C-F bond is exceptionally strong ($+467\\text{ kJ mol}^{-1}$).

> [!IMPORTANT]
> ### 🏢 Structural Reactivity Trend
> When comparing primary, secondary, and tertiary halogenoalkanes containing the **same halogen**:
> * **Reactivity Trend:** Tertiary ($3^{\\circ}$) > Secondary ($2^{\\circ}$) > Primary ($1^{\\circ}$)
> * *Example:* 2-bromo-2-methylpropane (tertiary) hydrolyses **fastest**, whereas 1-bromobutane (primary) hydrolyses **slowest**.
> * *Reason:* Tertiary halogenoalkanes react via a different mechanism (Sn1, creating stable tertiary carbocations) which has a much lower activation energy barrier.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Rate Comparison
> **Question:** 2-chloropropane and 2-iodopropane are warmed in separate test tubes with aqueous silver nitrate and ethanol. State and explain which compound will form a precipitate more quickly.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the precipitate type:**
> >    * Hydrolysis releases halide ions: 2-chloropropane releases $Cl^-(aq)$ yielding white $AgCl(s)$, and 2-iodopropane releases $I^-(aq)$ yielding yellow $AgI(s)$.
> > 
> > 2. **Compare bond enthalpies:**
> >    * The C-I bond enthalpy ($+228\\text{ kJ mol}^{-1}$) is weaker than the C-Cl bond enthalpy ($+346\\text{ kJ mol}^{-1}$).
> > 
> > 3. **Conclude:**
> >    * The weaker C-I bond breaks more easily under the same conditions.
> >    * Therefore, **2-iodopropane** will hydrolyse faster, forming a yellow precipitate of silver iodide ($AgI$) more quickly.
`
    },
    {
        id: '10b3-substitution-reactions',
        title: 'Nucleophilic Substitution Reactions of Halogenoalkanes',
        type: 'text',
        content: `
> [!NOTE]
> ### 🔄 Substitution Chemistry
> The polar carbon-halogen bond ($C^{\\delta+} - X^{\\delta-}$) attracts electron-rich nucleophiles, leading to **nucleophilic substitution** reactions where the halogen atom is replaced.
> 
> Here are the three key substitution reactions you must know:
> 
> 1. **Reaction with Aqueous Potassium Hydroxide ($KOH$ / $OH^-$):**
>    * **Reagents & Conditions:** Warm aqueous $KOH$ (or $NaOH$), heated under reflux.
>    * **Product:** Alcohols ($ROH$).
>    * **Role of Nucleophile:** The $OH^-$ ion acts as the attacking nucleophile.
>    * **Equation:**
>      $$CH_3CH_2CH_2Cl + KOH \\\\rightarrow CH_3CH_2CH_2OH + KCl$$
>      $$\\text{Ionic: } CH_3CH_2CH_2Cl + OH^- \\\\rightarrow CH_3CH_2CH_2OH + Cl^-$$

> [!IMPORTANT]
> ### 🔗 2. Reaction with Potassium Cyanide ($KCN$): Carbon Chain Extension
> * **Reagents & Conditions:** $KCN$ dissolved in ethanol, heated under reflux.
> * **Product:** Nitriles ($RCN$).
> * **Role of Nucleophile:** The cyanide ion ($:CN^-$) acts as the nucleophile.
> * **Significance:** This is a crucial synthetic reaction because it **increases the length of the carbon chain** by one carbon atom.
> * **Equation:**
>   $$CH_3CH_2Br + KCN \\\\rightarrow CH_3CH_2CN + KBr$$
>   $$\\text{Ionic: } CH_3CH_2Br + CN^- \\\\rightarrow CH_3CH_2CN + Br^-$$
>   *(Product is propanenitrile, which contains 3 carbons, whereas bromoethane contains 2).*

> [!IMPORTANT]
> ### 🛢️ 3. Reaction with Ammonia ($NH_3$): Amine Formation
> * **Reagents & Conditions:** Excess ammonia dissolved in ethanol, **heated in a sealed tube under pressure** (to prevent gaseous ammonia from escaping).
> * **Product:** Primary amines ($RNH_2$).
> * **Role of Nucleophile:** The ammonia molecule ($:NH_3$) acts as the nucleophile via its nitrogen lone pair.
> * **Equation (Two-step mechanism):**
>   * *Step 1 (Nucleophilic attack):* $R-I + NH_3 \\\\rightarrow R-NH_3^+ + I^-$
>   * *Step 2 (Deprotonation by excess ammonia):* $R-NH_3^+ + NH_3 \\\\rightleftharpoons R-NH_2 + NH_4^+$
>   * *Overall Equation:*
>     $$CH_3CH_2CH_2CH_2I + 2NH_3 \\\\rightarrow CH_3CH_2CH_2CH_2NH_2 + NH_4I$$
>     *(Product is butylamine and ammonium iodide).*

> [!EXAMPLE]
> #### 📝 Worked Example 6: Reaction Synthesis
> **Question:** Write the chemical equation and conditions required to convert 1-bromopropane into butanenitrile.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare reactants and products:**
> >    * Reactant: 1-bromopropane (3 carbons).
> >    * Product: butanenitrile (4 carbons).
> >    * Carbon chain is extended by one carbon.
> > 
> > 2. **Select reagents and conditions:**
> >    * Reagent for chain extension is potassium cyanide ($KCN$).
> >    * Conditions: Ethanol solvent, heat under reflux.
> > 
> > 3. **Write the balanced equation:**
> >    $$CH_3CH_2CH_2Br + KCN \\\\rightarrow CH_3CH_2CH_2CN + KBr$$
`
    },
    {
        id: '10b4-substitution-mechanisms',
        title: 'Nucleophilic Substitution Mechanisms',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚙️ Nucleophilic Attack by Hydroxide
> For primary halogenoalkanes (like bromoethane) reacting with aqueous potassium hydroxide, the mechanism occurs as a single continuous step (concerted $S_N2$ pathway):
> 
> 1. **Nucleophile attack:** The hydroxide ion ($:OH^-$) uses its lone pair of electrons to attack the electron-deficient carbon atom ($C^{\\delta+}$) bonded to the halogen.
>    * The curved arrow starts at the negative charge or lone pair of $:OH^-$ and points directly to the $C^{\\delta+}$ atom.
> 
> 2. **Bond breaking:** Simultaneously, the polar $C-Br$ bond breaks heterolytically. The halogen takes both bonding electrons, departing as a bromide ($Br^-$) leaving group.
>    * The curved arrow starts at the center of the $C-Br$ bond and points to the $Br^{\\delta-}$ atom.
> 
> 3. **Result:** An alcohol is formed, and a bromide halide ion is released:
>    $$CH_3CH_2Br + OH^- \\\\rightarrow CH_3CH_2OH + Br^-$$

> [!IMPORTANT]
> ### ⚙️ Nucleophilic Attack by Ammonia
> The reaction with ammonia is a **two-step** mechanism:
> 
> 1. **Step 1 (Nucleophilic attack):**
>    * The nitrogen atom on the ammonia molecule uses its lone pair ($:\\\\text{NH}_3$) to attack the electron-deficient carbon atom ($C^{\\delta+}$) of the halogenoalkane.
>    * Simultaneously, the $C-X$ bond breaks heterolytically, releasing a halide ion ($X^-$).
>    * This forms a positively charged **alkylammonium intermediate**:
>      $$R-X + :NH_3 \\\\rightarrow R-NH_3^+ + X^-$$
> 
> 2. **Step 2 (Deprotonation by base):**
>    * A **second** ammonia molecule acts as a **base**, using its lone pair to remove a hydrogen ion ($H^+$) from the alkylammonium intermediate.
>    * The $N-H$ bonding electrons move onto the nitrogen, neutralising its positive charge.
>    * This yields the final primary amine and an ammonium ion:
>      $$R-NH_3^+ + :NH_3 \\\\rightleftharpoons R-NH_2 + NH_4^+$$

> [!EXAMPLE]
> #### 📝 Worked Example 7: Mechanism Draw Description
> **Question:** Describe the curved arrows required to represent the first step in the mechanism of the reaction between chloromethane and ammonia.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the nucleophile and electrophile:**
> >    * The nucleophile is ammonia ($:NH_3$) with a lone pair on nitrogen.
> >    * The electrophile is chloromethane ($CH_3Cl$), which has a polar $C^{\\delta+} - Cl^{\\delta-}$ bond.
> > 
> > 2. **Specify arrow 1 (attack):**
> >    * Draw a curved arrow starting from the lone pair on the nitrogen atom of $:NH_3$ pointing to the carbon atom of the chloromethane.
> > 
> > 3. **Specify arrow 2 (bond breaking):**
> >    * Draw a curved arrow starting from the center of the $C-Cl$ bond and pointing to the chlorine atom to show heterolytic bond cleavage.
`
    },
    {
        id: '10b5-elimination-reactions',
        title: 'Elimination Reactions of Halogenoalkanes',
        type: 'text',
        content: `
> [!NOTE]
> ### ✂️ Elimination of Halogenoalkanes
> When a halogenoalkane is heated with **ethanolic potassium hydroxide** (dissolved in ethanol solvent instead of water), a completely different reaction occurs:
> * **Role of Hydroxide:** Under ethanolic conditions, the hydroxide ion ($OH^-$) acts as a **base**, not as a nucleophile.
> * **Mechanism:** The $OH^-$ base attacks and removes a hydrogen ion ($H^+$) from a carbon atom *adjacent* to the carbon bonded to the halogen (a beta-carbon).
> * **Double Bond Formation:** The bonding electron pair from the C-H bond moves to form a C=C double bond, and the halogen atom is eliminated as a halide ion.
> * **Products:** An alkene, water, and a potassium halide.
>   * *Example with 2-bromopropane:*
>     $$CH_3-CHBr-CH_3 + KOH\\text{(ethanol)} \\\\rightarrow CH_2=CH-CH_3 + H_2O + KBr$$

> [!TIP]
> ### 🎛️ Solvent Control: Substitution vs. Elimination
> The solvent controls the reaction pathway of a halogenoalkane with $KOH$:
> * **Aqueous KOH:** The $OH^-$ acts as a **nucleophile**, leading to **nucleophilic substitution** (forming an alcohol).
> * **Ethanolic KOH:** The $OH^-$ acts as a **base**, leading to **elimination** (forming an alkene).
> * *Learning Tip:* The hydroxide ion ($OH^-$) and ammonia ($NH_3$) are dual-character species. They can act as nucleophiles (donating electron pairs to carbon) or bases (accepting protons).

> [!EXAMPLE]
> #### 📝 Worked Example 8: Solvent Product Shifts
> **Question:** 2-chlorobutane is heated under reflux in two separate experiments:
> 1. With aqueous potassium hydroxide.
> 2. With ethanolic potassium hydroxide.
> State the organic product(s) formed in each case, and explain the difference.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Experiment 1 (Aqueous solvent):**
> >    * Hydroxide acts as a nucleophile, replacing Cl.
> >    * Product: **butan-2-ol** (substitution).
> > 
> > 2. **Analyze Experiment 2 (Ethanolic solvent):**
> >    * Hydroxide acts as a base, eliminating H and Cl to form double bonds.
> >    * Hydrogen can be removed from C1 (forming **but-1-ene**) or C3 (forming **but-2-ene**).
> >    * Since but-2-ene has stereoisomers, we obtain both cis-but-2-ene and trans-but-2-ene.
> >    * Products: **but-1-ene**, **Z-but-2-ene**, and **E-but-2-ene** (elimination).
`
    },
    {
        id: '10c1-alcohols-halogenation',
        title: 'Alcohols: Structure & Halogenation Reactions',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 What are Alcohols?
> Alcohols are a homologous series containing the **hydroxyl group (-OH)** with the general formula $C_n H_{2n+1} OH$ (simplified to $ROH$).
> * **Classification:**
>   * **Primary ($1^{\\circ}$):** The C-OH carbon is attached to **one** alkyl group (e.g. ethanol, $CH_3CH_2OH$).
>   * **Secondary ($2^{\\circ}$):** The C-OH carbon is attached to **two** alkyl groups (e.g. propan-2-ol, $CH_3CH(OH)CH_3$).
>   * **Tertiary ($3^{\\circ}$):** The C-OH carbon is attached to **three** alkyl groups (e.g. 2-methylpropan-2-ol, $(CH_3)_3COH$).

> [!IMPORTANT]
> ### 🧱 Halogenation of Alcohols
> Alcohols can be converted into halogenoalkanes by replacing the -OH group with a halogen. The reagents vary depending on the halogen:
> 
> 1. **Chlorination:**
>    * **Primary & Secondary Alcohols:** Reacted with solid **phosphorus(V) chloride ($PCl_5$)** at room temperature.
>      $$ROH + PCl_5 \\\\rightarrow RCl + POCl_3 + HCl\\text{(g)}$$
>      * *Qualitative Test:* This reaction is used to test for the presence of the -OH group, as it rapidly releases misty white fumes of $HCl$ gas that turn damp blue litmus paper red.
>    * **Tertiary Alcohols:** Reacted with **concentrated hydrochloric acid ($HCl$)** by simply shaking at room temperature.
>      $$(CH_3)_3COH + HCl \\\\rightarrow (CH_3)_3CCl + H_2O$$
> 
> 2. **Bromination:**
>    * Warmed with a mixture of **potassium bromide ($KBr$)** and **50% concentrated sulfuric acid ($H_2SO_4$)**.
>    * The reagents react *in situ* to produce $HBr$, which then halogenates the alcohol:
>      $$KBr + H_2SO_4 \\\\rightarrow KHSO_4 + HBr$$
>      $$ROH + HBr \\\\rightarrow RBr + H_2O$$
>    * *Warning:* If sulfuric acid is more concentrated than 50%, it will oxidise the bromide ($Br^-$) ions into bromine gas ($Br_2$), resulting in poor yields and impurities.
> 
> 3. **Iodination:**
>    * Warmed under reflux with a mixture of **red phosphorus and iodine ($P + I_2$)**.
>    * The phosphorus and iodine react *in situ* to form phosphorus(III) iodide ($PI_3$), which converts the alcohol to iodoalkane:
>      $$2P + 3I_2 \\\\rightarrow 2PI_3$$
>      $$3ROH + PI_3 \\\\rightarrow 3RI + H_3PO_3$$

> [!EXAMPLE]
> #### 📝 Worked Example 9: Iodination Equation
> **Question:** Write the balanced chemical equation for the conversion of propan-1-ol to 1-iodopropane using red phosphorus and iodine.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the active halogenating agent:**
> >    * Red phosphorus and iodine react to form phosphorus(III) iodide ($PI_3$).
> > 
> > 2. **Set up the reaction equation:**
> >    * Three molecules of propan-1-ol ($CH_3CH_2CH_2OH$) react with one molecule of $PI_3$.
> > 
> > 3. **Write the final balanced equation:**
> >    $$3CH_3CH_2CH_2OH + PI_3 \\\\rightarrow 3CH_3CH_2CH_2I + H_3PO_3$$
`
    },
    {
        id: '10c2-dehydration-oxidation',
        title: 'Dehydration & Oxidation of Alcohols',
        type: 'text',
        content: `
> [!NOTE]
> ### 🚰 Dehydration (Elimination) to Alkenes
> Alcohols can be dehydrated to form alkenes by heating with **concentrated phosphoric acid ($H_3PO_4$)** (a safer alternative to concentrated sulfuric acid).
> * The hydroxyl (-OH) group and a hydrogen atom from an adjacent carbon are eliminated as water ($H_2O$), forming a C=C double bond.
> * **Multiple products:** If the starting alcohol is asymmetrical (e.g. butan-2-ol), elimination of hydrogen can occur on either neighboring carbon, yielding a mixture of alkenes:
>   * Removing H from C1: **but-1-ene**.
>   * Removing H from C3: **but-2-ene** (which exists as **E-but-2-ene** and **Z-but-2-ene** stereoisomers).

> [!IMPORTANT]
> ### 🎨 Oxidation of Alcohols
> Acidified **potassium dichromate(VI) ($K_2Cr_2O_7 / H^+$)** is the standard oxidising agent.
> * **Color Change:** The orange dichromate ($Cr_2O_7^{2-}$) ion is reduced to the green chromium ($Cr^{3+}$) ion.
> * **Reactivity by Class:**
>   * **Tertiary Alcohols:** Resistant to oxidation because the carbon bonded to the -OH group does not have a hydrogen atom attached to it.
>   * **Secondary Alcohols:** Oxidised under reflux to **ketones** ($RCOR'$).
>     $$CH_3CH(OH)CH_3 + [O] \\\\rightarrow CH_3COCH_3 + H_2O$$
>   * **Primary Alcohols:** Can be oxidised to two different products depending on the laboratory technique used:
> 
> \${svgToken(\`<svg viewBox="0 0 650 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradApp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGradApp)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  
  <!-- Left Panel: Reflux (Carboxylic Acid) -->
  <g transform="translate(10, 10)">
    <rect width="300" height="230" rx="6" fill="#334155" fill-opacity="0.1" stroke="#1e293b" stroke-width="1"/>
    <text x="150" y="20" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">1. Heating Under Reflux (Complete)</text>
    <text x="150" y="35" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Keeps volatile components in flask for further oxidation</text>
    
    <!-- Drawing Reflux Setup -->
    <rect x="140" y="50" width="20" height="110" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5"/>
    <circle cx="150" cy="175" r="20" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5"/>
    <path d="M 148 55 L 148 150 M 152 55 L 152 150" stroke="#94a3b8" stroke-width="1"/> <!-- inner tube -->
    
    <!-- Water jackets -->
    <text x="110" y="70" fill="#cbd5e1" font-size="7">Water Out</text>
    <line x1="140" y1="65" x2="128" y2="65" stroke="#cbd5e1" stroke-width="1"/>
    <text x="110" y="150" fill="#cbd5e1" font-size="7">Water In</text>
    <line x1="140" y1="145" x2="128" y2="145" stroke="#cbd5e1" stroke-width="1"/>
    
    <text x="150" y="210" text-anchor="middle" fill="#10b981" font-size="9" font-weight="bold">Primary Alcohol + 2[O] ➔ Carboxylic Acid</text>
    <text x="150" y="222" text-anchor="middle" fill="#10b981" font-size="8">E.g., Ethanol ➔ Ethanoic Acid</text>
  </g>
  
  <!-- Right Panel: Distillation (Aldehyde) -->
  <g transform="translate(340, 10)">
    <rect width="300" height="230" rx="6" fill="#334155" fill-opacity="0.1" stroke="#1e293b" stroke-width="1"/>
    <text x="150" y="20" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">2. Distillation with Addition (Partial)</text>
    <text x="150" y="35" text-anchor="middle" fill="#cbd5e1" font-size="8.5">Distills off aldehyde immediately before it can oxidise</text>
    
    <!-- Drawing Distillation Setup -->
    <circle cx="70" cy="175" r="20" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5"/>
    <path d="M 70 155 L 70 100 L 200 150" fill="none" stroke="#cbd5e1" stroke-width="1.5"/> <!-- delivery tube -->
    <rect x="110" y="105" width="80" height="20" transform="rotate(21 110 105)" fill="#1e293b" stroke="#cbd5e1" stroke-width="1"/> <!-- condenser -->
    <circle cx="215" cy="165" r="15" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5"/>
    
    <text x="150" y="210" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">Primary Alcohol + [O] ➔ Aldehyde</text>
    <text x="150" y="222" text-anchor="middle" fill="#38bdf8" font-size="8">E.g., Ethanol ➔ Ethanal</text>
  </g>
</svg>\`)}

> [!IMPORTANT]
> ### 🎛️ Primary Alcohol Oxidation Control
> 1. **Aldehyde Formation (Partial Oxidation):**
>    * **Technique:** Distillation with addition. The alcohol is dripped into the warm oxidising agent.
>    * **Reason:** Aldehydes cannot form hydrogen bonds with each other, so their boiling points are lower than parent alcohols. They vaporise instantly upon formation and escape through the condenser, preventing further oxidation to carboxylic acids.
>    * **Equation:**
>      $$CH_3CH_2CH_2OH + [O] \\\\rightarrow CH_3CH_2CHO + H_2O$$
> 
> 2. **Carboxylic Acid Formation (Complete Oxidation):**
>    * **Technique:** Heating under reflux.
>    * **Reason:** The condenser is mounted vertically. Any vaporised aldehyde condenses and drips back down into the hot oxidising agent, forcing it to undergo complete oxidation.
>    * **Equation:**
>      $$CH_3CH_2CHO + [O] \\\\rightarrow CH_3CH_2COOH$$
>`
    },
    {
        id: '10c3-purification-liquid',
        title: 'Purifying an Organic Liquid',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Background on Organic Contamination
> When preparing a liquid organic compound, the product is rarely pure. It may be contaminated with:
> * Unreacted starting materials.
>   * Other organic by-products.
>   * Inorganic reagents or inorganic salts.
>   * Water.
> * **Ground-glass joints:** Organic liquids can dissolve cork or rubber bungs, risking leaks and product contamination. Ground-glass joint glassware is used to seal joints tightly without rubber or cork.
> * **Heating sources:** Because organic liquids are highly flammable and volatile, electric heating mantles or water/oil baths are preferred over Bunsen burners.

> [!TIP]
> ### 🛢️ Separation & Washing (Solvent Extraction)
> Solvent extraction separates the organic product from aqueous mixtures:
> * **Separating Funnel:** The mixture is swirled with an **immiscible solvent** (in which the product is highly soluble) in a separating funnel.
> * **Venting:** The funnel is shaken and inverted frequently, opening the tap to release built-up vapour pressure.
> * **Portion Efficiency:** Washing/extracting with **multiple small volumes** of solvent (e.g., four $25\\text{ cm}^3$ portions) is mathematically **much more efficient** at extracting the product than washing once with a single large volume (e.g., one $100\\text{ cm}^3$ portion).

> [!IMPORTANT]
> ### 🧼 Drying the Organic Liquid
> Water is removed from the organic layer using an **anhydrous metal salt** as a drying agent:
> * **Common agents:** Anhydrous calcium sulfate ($CaSO_4$), anhydrous magnesium sulfate ($MgSO_4$), and anhydrous sodium sulfate ($Na_2SO_4$). These salts absorb water by forming hydrated crystals.
> * **Reaction check:** The drying agent must not react with the organic product.
>   * *Warning:* **Anhydrous calcium chloride ($CaCl_2$)** is widely used, but it **cannot** be used to dry alcohols because it dissolves in and reacts with alcohols.
> * **Clumping check:** When first added, the dry salt clump together. More drying agent is added until it remains **powdery and free-flowing** on swirling, indicating the liquid is dry. The salt is then removed by filtration or decantation.

> [!IMPORTANT]
> ### 🌡️ Testing for Purity (Boiling Point range)
> The purity of a liquid organic product is assessed by measuring its **boiling temperature** using a simple distillation setup:
> * **Pure Liquid:** Boils at a **sharp, constant temperature** that matches values in literature data books.
> * **Impure Liquid:** Boils over a **wide range of temperatures**, and the boiling temperature is typically higher than that of the pure compound.
> * *Caution:* Boiling point is not fully conclusive on its own, as different compounds can share the same boiling point by coincidence (e.g., 1-chloropentane and 2-methylpropan-1-ol both boil at $108\\text{ }^{\\circ}\\text{C}$).
`
    },
    {
        id: '10d1-mass-spectrometry',
        title: 'Mass Spectrometry of Organic Compounds',
        type: 'text',
        content: `
> [!NOTE]
> ### 📡 The Molecular Ion Peak (M⁺)
> Mass spectrometry is an analytical technique used to determine the relative molecular mass ($M_r$) and structure of organic molecules:
> * **Mechanism:** The sample molecule ($M$) is bombarded with high-energy electrons, knocking out an electron to form a positively charged **molecular ion ($M^+$)**:
>   $$C_4H_{10}\\text{(g)} + e^- \\\\rightarrow C_4H_{10}^+\\text{(g)} + 2e^-$$
> * **Identifying Mr:** The **molecular ion peak** is the peak with the greatest mass-to-charge ratio ($m/z$) value on the spectrum (furthest to the right, ignoring isotope peaks). Its $m/z$ value directly equals the relative molecular mass ($M_r$) of the compound.

> [!IMPORTANT]
> ### ⚛️ The M+1 Peak & Carbon-13
> A small peak is often seen exactly one mass unit to the right of the molecular ion peak (at $m/z = M+1$):
> * This is caused by the presence of the **carbon-13 ($^{13}C$)** isotope in a small fraction of the molecules.
> * Approximately $1.1\\%$ of all natural carbon atoms are $^{13}C$. In a molecule with many carbon atoms, there is a small chance one of them is $^{13}C$, resulting in a peak at $M+1$.

> [!TIP]
> ### 🪓 Fragmentation
> In the mass spectrometer, the unstable molecular ion breaks apart into smaller fragments. This process is called **fragmentation**:
> * **Mechanism:** A covalent bond breaks, splitting the molecular ion into a **positively charged fragment ion** and a **neutral free radical**:
>   $$C_4H_{10}^+ \\\\rightarrow C_3H_7^+ + \\\\bullet CH_3$$
> * **Detection:** Only the **positively charged fragment ion ($C_3H_7^+$)** is accelerated and detected by the spectrometer. The neutral free radical ($\\bullet CH_3$) is lost and does not appear on the spectrum.
> 
> \${svgToken(\`<svg viewBox="0 0 650 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradSpec" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGradSpec)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  
  <!-- Axes -->
  <line x1="50" y1="180" x2="600" y2="180" stroke="#f8fafc" stroke-width="1.5"/>
  <line x1="50" y1="180" x2="50" y2="30" stroke="#f8fafc" stroke-width="1.5"/>
  <text x="325" y="210" text-anchor="middle" fill="#f8fafc" font-size="10">Mass-to-charge ratio (m/z)</text>
  <text x="18" y="105" text-anchor="middle" fill="#f8fafc" font-size="10" transform="rotate(-90 18 105)">Relative Abundance (%)</text>
  
  <!-- Grid lines -->
  <line x1="50" y1="105" x2="600" y2="105" stroke="#334155" stroke-width="0.5" stroke-dasharray="2 2"/>
  <text x="40" y="108" fill="#94a3b8" font-size="8">50</text>
  <text x="40" y="33" fill="#94a3b8" font-size="8">100</text>
  
  <!-- Peaks -->
  <!-- m/z = 15: CH3+ (abundance 20%) -->
  <line x1="150" y1="180" x2="150" y2="150" stroke="#38bdf8" stroke-width="2"/>
  <text x="150" y="142" text-anchor="middle" fill="#38bdf8" font-size="8.5">15 (CH₃⁺)</text>
  
  <!-- m/z = 29: C2H5+ (abundance 100%) -->
  <line x1="290" y1="180" x2="290" y2="30" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="290" y="22" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="bold">29 (C₂H₅⁺)</text>
  
  <!-- m/z = 43: C3H7+ (abundance 60%) -->
  <line x1="430" y1="180" x2="430" y2="90" stroke="#38bdf8" stroke-width="2"/>
  <text x="430" y="82" text-anchor="middle" fill="#38bdf8" font-size="8.5">43 (C₃H₇⁺)</text>
  
  <!-- m/z = 57: C4H9+ (abundance 10%) -->
  <line x1="570" y1="180" x2="570" y2="165" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="570" y="157" text-anchor="middle" fill="#38bdf8" font-size="8.5">57</text>
  
  <!-- m/z = 58: Molecular Ion M+ (abundance 15%) -->
  <line x1="580" y1="180" x2="580" y2="157" stroke="#f43f5e" stroke-width="2"/>
  <text x="580" y="148" text-anchor="middle" fill="#f43f5e" font-size="8.5" font-weight="bold">58 (M⁺)</text>
  
  <!-- m/z = 59: M+1 Peak (abundance 0.6%) -->
  <line x1="590" y1="180" x2="590" y2="178" stroke="#a855f7" stroke-width="1"/>
  <text x="612" y="174" text-anchor="middle" fill="#c084fc" font-size="8">59 (M+1)</text>
</svg>\`)}

> [!IMPORTANT]
> ### 🧮 Common Fragment Ions to Memorize
> Keep these common fragment masses in mind for solving mass spectra:
> 
> | m/z Value | Possible Structure | Fragment Ion |
> | :---: | :--- | :---: |
> | **15** | Methyl group | $CH_3^+$ |
> | **17** | Hydroxide / Oxygen group | $OH^+$ |
> | **29** | Ethyl group | $C_2H_5^+$ |
> | **43** | Propyl group | $C_3H_7^+$ |
> | **57** | Butyl group | $C_4H_9^+$ |

> [!EXAMPLE]
> #### 📝 Worked Example 10: Ethanol Fragmentation
> **Question:** Ethanol ($CH_3CH_2OH$, $M_r = 46$) is analysed in a mass spectrometer. Identify the fragment ion responsible for the peak at $m/z = 31$, and write an equation showing its formation from the molecular ion.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the mass loss:**
> >    * Parent molecular ion $M^+ = 46$.
> >    * Fragment peak is at $m/z = 31$.
> >    * Mass lost = $46 - 31 = 15$.
> >    * A mass of 15 corresponds to a methyl group ($\\bullet CH_3$).
> > 
> > 2. **Deduce the structure of the remaining fragment:**
> >    * If a methyl group is lost from $CH_3CH_2OH^+$, the remaining positive fragment is $^+CH_2OH$ (mass = $12 + 2 + 16 + 1 = 31$).
> > 
> > 3. **Write the equation:**
> >    $$CH_3CH_2OH^+ \\\\rightarrow ^{+}\\text{CH}_2\\text{OH} + \\\\bullet \\text{CH}_3$$
`
    },
    {
        id: '10d2-deducing-structures',
        title: 'Deducing Structures from Mass Spectra',
        type: 'text',
        content: `
> [!NOTE]
> ### 🏆 The Base Peak
> While the molecular ion peak ($M^+$) tells us the molecular mass of the compound, the **base peak** is the tallest peak in the spectrum:
> * It is assigned a **relative abundance of 100%**.
> * It represents the **most stable fragment ion** formed during fragmentation.
> * Other peaks are scaled relative to this base peak.

> [!IMPORTANT]
> ### 🧩 Case Study 1: Distinguishing Carbonyls (propanal vs. propanone)
> Both propanal ($CH_3CH_2CHO$) and propanone ($CH_3COCH_3$) share the molecular formula $C_3H_6O$ ($M^+ = 58$):
> * **Propanal Spectrum:** Shows a major peak at **$m/z = 29$**.
>   * *Origin:* Cleavage of the $C-C$ bond adjacent to the carbonyl:
>     $$(CH_3CH_2CHO)^+ \\\\rightarrow CH_3CH_2^+ + \\\\bullet CHO$$
>     *(The ethyl cation $C_2H_5^+$ has a mass of 29).*
> * **Propanone Spectrum:** Shows a major peak at **$m/z = 43$**.
>   * *Origin:* Loss of a methyl radical to form the stable acylium ion ($CH_3CO^+$):
>     $$(CH_3COCH_3)^+ \\\\rightarrow CH_3CO^+ + \\\\bullet CH_3$$
>     *(The acetyl cation $CH_3CO^+$ has a mass of 43).*

> [!IMPORTANT]
> ### 🧩 Case Study 2: Distinguishing Alcohols (propan-1-ol vs. propan-2-ol)
> Both propan-1-ol ($CH_3CH_2CH_2OH$) and propan-2-ol ($CH_3CH(OH)CH_3$) share the molecular formula $C_3H_8O$ ($M^+ = 60$):
> * **Propan-1-ol Spectrum:** Characterised by a dominant peak at **$m/z = 31$**.
>   * *Origin:* Loss of an ethyl radical ($C_2H_5$) to yield the primary alcohol fragment ion ($CH_2OH^+$):
>     $$(CH_3CH_2CH_2OH)^+ \\\\rightarrow CH_2OH^+ + \\\\bullet C_2H_5$$
> * **Propan-2-ol Spectrum:** Characterised by a dominant peak at **$m/z = 45$**.
>   * *Origin:* Loss of a methyl radical ($\bullet CH_3$) to yield the secondary alcohol fragment ion ($CH_3CHOH^+$):
>     $$(CH_3CH(OH)CH_3)^+ \\\\rightarrow CH_3CHOH^+ + \\\\bullet CH_3$$

> [!EXAMPLE]
> #### 📝 Worked Example 11: Pentane Fragmentation
> **Question:** Pentane ($C_5H_{12}$, $M_r = 72$) fragments in a mass spectrometer. Write the equation showing the formation of the ethyl cation ($m/z = 29$) from the pentane molecular ion.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the molecular ion formula:**
> >    * The parent molecular ion is $C_5H_{12}^+$.
> > 
> > 2. **Deduce the neutral radical lost:**
> >    * Target fragment is $C_2H_5^+$ ($m/z = 29$).
> >    * Radical mass lost = $72 - 29 = 43$.
> >    * A mass of 43 corresponds to a propyl radical ($\bullet C_3H_7$).
> > 
> > 3. **Write the fragmentation equation:**
> >    $$C_5H_{12}^+ \\\\rightarrow C_2H_5^+ + \\\\bullet C_3H_7$$
`
    },
    {
        id: '10d3-ir-principles',
        title: 'Infrared Spectroscopy: Principles & Axes',
        type: 'text',
        content: `
> [!NOTE]
> ### 〰️ Molecular Vibrations
> Infrared (IR) radiation has a lower frequency (and wavenumber) than red visible light:
> * When organic molecules are exposed to IR radiation, covalent bonds absorb energy and undergo **stretching** (vibrating along the bond axis, changing bond length) and **bending** (vibrating to change bond angles).
> * The specific frequency of IR radiation absorbed depends on:
>   * The **masses of the atoms** involved in the bond.
>   * The **strength of the bond** (double bonds absorb at higher frequencies than single bonds).
>   * The **bond length**.

> [!IMPORTANT]
> ### 🧲 Criteria for IR Absorption: Polar Bonds
> * **Polarity Rule:** Covalent bonds will only absorb IR radiation if the vibration results in a **change in the dipole moment (polarity)** of the molecule.
> * **Non-absorbing molecules:** Symmetric homonuclear diatomic molecules like $H_2$, $Cl_2$, and $N_2$ have no polar bond and their vibrations cause no dipole change. Thus, they are **IR inactive** and do not absorb IR.
> * **Absorbing molecules:** Polar molecules like $HF$, $HCl$, $H_2O$, and $CO_2$ undergo dipole changes during stretching/bending, making them **IR active**.

> [!TIP]
> ### 📊 Understanding an IR Spectrum's Axes
> An IR spectrum looks upside-down compared to mass spectra:
> * **Vertical Axis (Transmittance, %):** Ranges from 0 to 100%. A value of 100% means all radiation passed through. Therefore, absorptions appear as **dips or troughs pointing downwards** (often called "peaks" in spectroscopy).
> * **Horizontal Axis (Wavenumber, cm⁻¹):** Wavenumber is the reciprocal of wavelength ($1/\\lambda$) and is proportional to frequency.
>   * The scale runs **backwards** from **$4000\\text{ cm}^{-1}$ to $500\\text{ cm}^{-1}$** (decreasing from left to right).
>   * The scale is non-linear and typically changes spacing after $2000\\text{ cm}^{-1}$.
`
    },
    {
        id: '10d4-ir-characteristic-absorptions',
        title: 'Characteristic IR Absorptions & Identification',
        type: 'text',
        content: `
> [!NOTE]
> ### 📋 Characteristic Wavenumber Table
> Covalent bonds absorb infrared radiation at characteristic wavenumbers:
> 
> | Bond | Functional Group | Wavenumber Range ($\text{cm}^{-1}$) | Peak Appearance |
> | :---: | :--- | :---: | :--- |
> | **O—H** | Alcohol | **3750 – 3200** | **Broad** and rounded |
> | **N—H** | Amine | **3500 – 3300** | Sharp, often spiky |
> | **O—H** | Carboxylic acid | **3300 – 2500** | **Very broad**, overlaps C-H |
> | **C—H** | Alkane / Alkene | **3095 – 2850** | Sharp and narrow |
> | **C=O** | Carbonyl (aldehyde/ketone/acid) | **1740 – 1700** | **Strong** and sharp |
> | **C=C** | Alkene | **1669 – 1645** | Weak to medium |

> [!IMPORTANT]
> ### 🧠 Distinguishing Alcohols vs. Carboxylic Acids
> Two very common traps in exam papers involve identifying O-H stretches:
> * **Alcohol O-H:** Absorbs broadly between **3750 – 3200 cm⁻¹**. The peak is rounded and completely separated from the C-H stretch.
> * **Carboxylic Acid O-H:** Absorbs exceptionally broadly between **3300 – 2500 cm⁻¹**. It looks like a huge, wide trough that overlaps and swallows the C-H stretch (giving a "hairy" appearance to the left of the spectrum).
> * **Carbonyl (C=O) confirmation:** A carboxylic acid will *also* show a strong, sharp carbonyl absorption at **1725 – 1700 cm⁻¹**, whereas an alcohol spectrum will show no peak around 1700 cm⁻¹.

\${svgToken(\`<svg viewBox="0 0 650 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradIR" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGradIR)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  
  <!-- Grid and Axes -->
  <line x1="60" y1="40" x2="600" y2="40" stroke="#334155" stroke-dasharray="2 2" stroke-width="0.5"/>
  <line x1="60" y1="120" x2="600" y2="120" stroke="#334155" stroke-dasharray="2 2" stroke-width="0.5"/>
  <line x1="60" y1="200" x2="600" y2="200" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="60" y1="40" x2="60" y2="200" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="600" y1="40" x2="600" y2="200" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="330" y="235" text-anchor="middle" fill="#cbd5e1" font-size="11">Wavenumber / cm⁻¹ (Decreasing scale)</text>
  <text x="20" y="120" text-anchor="middle" fill="#cbd5e1" font-size="11" transform="rotate(-90 20 120)">Transmittance / %</text>
  
  <!-- Tick Marks and Values -->
  <text x="60" y="215" text-anchor="middle" fill="#94a3b8" font-size="9">4000</text>
  <text x="200" y="215" text-anchor="middle" fill="#94a3b8" font-size="9">3000</text>
  <text x="340" y="215" text-anchor="middle" fill="#94a3b8" font-size="9">2000</text>
  <text x="470" y="215" text-anchor="middle" fill="#94a3b8" font-size="9">1500</text>
  <text x="600" y="215" text-anchor="middle" fill="#94a3b8" font-size="9">500</text>
  
  <text x="50" y="45" text-anchor="end" fill="#94a3b8" font-size="9">100</text>
  <text x="50" y="125" text-anchor="end" fill="#94a3b8" font-size="9">50</text>
  <text x="50" y="205" text-anchor="end" fill="#94a3b8" font-size="9">0</text>
  
  <!-- IR Spectrum Curve (Ethanol Example) -->
  <!-- Broad O-H peak around 3300 cm-1 (represented by x = 120 to 180) -->
  <!-- C-H stretch around 2950 cm-1 (represented by x = 200 to 220) -->
  <!-- Baseline transmittance at ~90% (y = 56) -->
  <path d="M 60 56 
           C 90 56, 110 56, 120 58
           C 130 65, 140 160, 150 160
           C 160 160, 170 65, 180 58
           C 190 56, 195 56, 200 58
           C 205 90, 210 150, 212 150
           C 213 150, 215 90, 218 100
           C 220 120, 222 56, 230 56
           C 300 56, 350 56, 400 56
           C 420 56, 430 70, 440 56
           C 460 56, 480 60, 500 120
           C 510 120, 520 56, 540 56
           C 570 56, 590 56, 600 56" 
        fill="none" stroke="#38bdf8" stroke-width="2"/>
        
  <!-- Annotations -->
  <!-- O-H stretch -->
  <line x1="150" y1="160" x2="150" y2="100" stroke="#f43f5e" stroke-width="1" stroke-dasharray="2 2"/>
  <circle cx="150" cy="160" r="3" fill="#f43f5e"/>
  <text x="150" y="90" text-anchor="middle" fill="#f43f5e" font-size="9" font-weight="bold">Broad O—H stretch</text>
  <text x="150" y="78" text-anchor="middle" fill="#ef4444" font-size="8">3750-3200 cm⁻¹</text>
  
  <!-- C-H stretch -->
  <line x1="212" y1="150" x2="250" y2="120" stroke="#a855f7" stroke-width="1" stroke-dasharray="2 2"/>
  <circle cx="212" cy="150" r="3" fill="#a855f7"/>
  <text x="275" y="118" fill="#c084fc" font-size="9" font-weight="bold">C—H stretch</text>
  
  <!-- Title -->
  <text x="330" y="25" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">Infrared Spectrum of an Alcohol (Ethanol)</text>
</svg>\`)}

> [!EXAMPLE]
> #### 📝 Worked Example 12: Identifying Unknowns
> **Question:** An organic compound has the molecular formula $C_3H_6O_2$. Its IR spectrum shows a broad absorption centred at $3000\text{ cm}^{-1}$ and a strong, sharp absorption at $1715\text{ cm}^{-1}$. Deduce the functional group(s) present and identify the compound.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyse the $1715\text{ cm}^{-1}$ peak:**
> >    * A strong, sharp peak at $1715\text{ cm}^{-1}$ lies in the $1740-1700\text{ cm}^{-1}$ range.
> >    * This indicates the presence of a carbonyl group (**C=O**).
> > 
> > 2. **Analyse the broad $3000\text{ cm}^{-1}$ peak:**
> >    * A broad absorption centred at $3000\text{ cm}^{-1}$ covering the $3300-2500\text{ cm}^{-1}$ region corresponds to an **acid O-H group** (carboxylic acid).
> > 
> > 3. **Combine the findings:**
> >    * The compound contains both a C=O and an O-H group from a carboxylic acid.
> >    * The molecular formula $C_3H_6O_2$ has 3 carbons.
> >    * Therefore, the compound is **propanoic acid** ($CH_3CH_2COOH$).
`
    },
    {
        id: '10d5-fingerprint-region',
        title: 'The Fingerprint Region',
        type: 'text',
        content: `
> [!NOTE]
> ### 🖨️ What is the Fingerprint Region?
> The region of the infrared spectrum below **$1500\\text{ cm}^{-1}$** (typically $1500 – 500\\text{ cm}^{-1}$) is called the **fingerprint region**:
> * **Complexity:** It contains many complicated, overlapping absorption peaks. These peaks result from complex bending vibrations of the molecule's carbon-carbon skeletal structure.
> * **Uniqueness:** The exact pattern of peaks in this region is unique to a specific molecule—just like a human fingerprint. Even structural isomers with the same functional groups will have slightly different fingerprint regions.

> [!TIP]
> ### 🔍 Using the Fingerprint Region
> Because the fingerprint region is too complex to interpret peak-by-peak, chemists use it in a specific way:
> * They run the spectrum of an unknown compound.
> * They compare its fingerprint region with a computer database of reference spectra of known pure compounds.
> * A perfect match confirms the exact identity of the organic compound.
`
    },
    {
        id: '10d6-multi-spectra-deduction',
        title: 'Multi-Spectra Identification',
        type: 'text',
        content: `
> [!NOTE]
> ### 🗺️ Step-by-Step Analytical Roadmap
> In exam papers, you will often need to combine multiple sources of chemical and spectroscopic data to identify a compound:
> 1. **Empirical Formula:** Calculate the simplest ratio of atoms using percentage composition by mass.
> 2. **Molecular Formula:** Use the Molecular Ion peak ($M^+$) from a mass spectrum to find the compound's relative molecular mass ($M_r$) and determine the multiplier.
> 3. **Functional Groups:** Identify characteristic bonds from the IR spectrum (such as O-H stretches, C=O carbonyls, or C=C alkene bonds).
> 4. **Structural Details:** Use mass spec fragmentation peaks (e.g. $m/z = 43$ for acylium ions or $29$ for ethyl ions) and chemical test results (e.g., Fehling's solution or Tollens' reagent) to distinguish between isomers.

> [!EXAMPLE]
> #### 📝 Worked Example 13: Solving Compound X
> **Question:** An organic compound X has the percentage composition by mass: C, 62.07%; H, 10.34%; O, 27.59%. 
> * The mass spectrum of X shows a molecular ion peak at $m/z = 58$ and a base peak at $m/z = 43$.
> * The IR spectrum of X shows a strong, sharp absorption at $1715\text{ cm}^{-1}$ but no absorption above $3200\text{ cm}^{-1}$.
> * Compound X produces no observable change when heated with Fehling's solution.
> Deduce the molecular formula and structural formula of X, justifying your answer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the Empirical Formula:**
> >    * Carbon: $\\frac{62.07}{12.0} = 5.17\\text{ moles}$
> >    * Hydrogen: $\\frac{10.34}{1.0} = 10.34\\text{ moles}$
> >    * Oxygen: $\\frac{27.59}{16.0} = 1.72\\text{ moles}$
> >    * Divide by the smallest value ($1.72$):
> >      * $C = \\frac{5.17}{1.72} = 3$
> >      * $H = \\frac{10.34}{1.72} = 6$
> >      * $O = \\frac{1.72}{1.72} = 1$
> >    * Empirical formula is **$C_3H_6O$** (empirical mass = 58).
> > 
> > 2. **Determine the Molecular Formula:**
> >    * The molecular ion peak ($M^+$) in the mass spectrum is at $m/z = 58$.
> >    * Since the empirical mass (58) equals the molecular mass, the molecular formula is **$C_3H_6O$**.
> > 
> > 3. **Identify functional groups using IR:**
> >    * The strong, sharp peak at $1715\text{ cm}^{-1}$ indicates a carbonyl group (**C=O**).
> >    * No peak above $3200\text{ cm}^{-1}$ indicates there is no alcohol O-H group.
> > 
> > 4. **Analyse chemical test & fragmentation:**
> >    * Since $C_3H_6O$ has a C=O carbonyl, X must be either **propanal** (aldehyde) or **propanone** (ketone).
> >    * Aldehydes react with Fehling's solution to form a brick-red precipitate, while ketones do not react.
> >    * Since X produces no change with Fehling's, X must be the ketone **propanone** ($CH_3COCH_3$).
> >    * *Confirmation:* The base peak at $m/z = 43$ represents the acetyl fragment ($CH_3CO^+$) formed by losing a methyl group ($\bullet CH_3$):
> >      $$(CH_3COCH_3)^+ \\\\rightarrow CH_3CO^+ + \\\\bullet CH_3$$
`
    }
];

export const lessonNotes = parts;



