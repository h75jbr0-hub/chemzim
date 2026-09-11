import { LessonPart } from '@/data/curriculum/registry';
import { svgToken } from '@/data/curriculum/svgToken';

export const lessonTitle = "Unit 6 Practical: A2 Practical Skills & Advanced Techniques";
export const lessonNumber = 1;

export const theoryMarkdown = `
# Unit 6: Practical Skills in Chemistry II
This unit covers the advanced laboratory methods, kinetics experiments, buffer and pH titration curves, transition metal synthesis and redox titrations, recrystallisation and melting point analysis, thin layer chromatography, and integrated spectroscopic analysis for Pearson Edexcel International A2 Chemistry (Core Practicals 9 to 16).
`;

// ==========================================
// SVG 1: pH Titration Curve & pKa
// ==========================================
const phTitrationCurveSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 280" class="w-full max-w-2xl mx-auto h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="325" y="24" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Core Practical 12: Weak Acid – Strong Base Titration Curve &amp; pKa</text>

  <!-- Axes -->
  <line x1="80" y1="230" x2="580" y2="230" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="230" x2="80" y2="45" stroke="#64748b" stroke-width="2"/>
  
  <!-- Axis Labels -->
  <text x="330" y="260" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">Volume of 0.10 mol dm⁻³ NaOH added (cm³)</text>
  <text x="35" y="140" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 35,140)">pH</text>
  
  <!-- Y Ticks -->
  <text x="70" y="234" fill="#64748b" font-size="10" text-anchor="end">0</text>
  <text x="70" y="174" fill="#64748b" font-size="10" text-anchor="end">4</text>
  <text x="70" y="134" fill="#64748b" font-size="10" text-anchor="end">7</text>
  <text x="70" y="74" fill="#64748b" font-size="10" text-anchor="end">11</text>
  <text x="70" y="48" fill="#64748b" font-size="10" text-anchor="end">14</text>

  <!-- Weak Acid Curve -->
  <path d="M 80,185 Q 120,165 210,160 T 320,150 L 320,80 Q 360,65 540,60" fill="none" stroke="#38bdf8" stroke-width="3"/>

  <!-- Equivalence Point (V = 24.0 cm³, pH ~ 8.8) -->
  <circle cx="320" cy="115" r="5" fill="#ef4444"/>
  <line x1="320" y1="230" x2="320" y2="45" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="330" y="112" fill="#ef4444" font-size="11" font-weight="bold">Equivalence Point (pH &gt; 7)</text>
  <text x="320" y="244" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">24.0 cm³ (V_eq)</text>

  <!-- Half Neutralisation Point (V = 12.0 cm³, pH = pKa) -->
  <circle cx="200" cy="160" r="5" fill="#10b981"/>
  <line x1="200" y1="230" x2="200" y2="160" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4"/>
  <line x1="80" y1="160" x2="200" y2="160" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="210" y="180" fill="#34d399" font-size="11" font-weight="bold">Half-Equivalence: pH = pKa</text>
  <text x="200" y="244" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">12.0 cm³</text>
  
  <!-- Buffer Region Shading -->
  <rect x="130" y="145" width="140" height="30" rx="4" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-opacity="0.4"/>
  <text x="200" y="140" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Maximum Buffer Capacity [HA] = [A⁻]</text>
</svg>`;

// ==========================================
// SVG 2: Buchner Filtration & Recrystallisation
// ==========================================
const buchnerFiltrationSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 280" class="w-full max-w-2xl mx-auto h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="325" y="24" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Core Practicals 14 &amp; 16: Reduced Pressure Filtration (Büchner Funnel)</text>

  <!-- Left: Vacuum Filtration Setup -->
  <g transform="translate(60, 45)">
    <!-- Büchner Funnel Ceramic -->
    <rect x="70" y="30" width="80" height="40" rx="3" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
    <polygon points="70,70 150,70 120,110 100,110" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect x="105" y="110" width="10" height="40" fill="#f1f5f9"/>
    
    <!-- Filter Paper & Wet Crystals -->
    <line x1="75" y1="65" x2="145" y2="65" stroke="#38bdf8" stroke-width="3"/>
    <text x="110" y="55" fill="#0f172a" font-size="9" font-weight="bold" text-anchor="middle">Damp Crystals</text>
    
    <!-- Rubber Collar / Bung -->
    <rect x="98" y="105" width="24" height="12" fill="#475569" rx="2"/>
    
    <!-- Büchner Flask (Thick-walled Glass) -->
    <path d="M 90,115 L 130,115 L 160,200 L 60,200 Z" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
    <rect x="62" y="180" width="96" height="18" fill="#0284c7" fill-opacity="0.3"/>
    
    <!-- Side Arm to Vacuum Pump -->
    <rect x="125" y="125" width="40" height="8" fill="#94a3b8"/>
    <path d="M 165,129 L 210,129" stroke="#f59e0b" stroke-width="4"/>
    <text x="220" y="133" fill="#f59e0b" font-size="10" font-weight="bold">To Vacuum Pump / Aspirator</text>
    
    <text x="110" y="222" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">Büchner Flask</text>
  </g>

  <!-- Right: Recrystallisation Steps Summary -->
  <g transform="translate(360, 50)">
    <rect x="0" y="0" width="250" height="205" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="125" y="22" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">5 Key Recrystallisation Steps</text>
    
    <text x="15" y="50" fill="#f8fafc" font-size="10" font-weight="bold">1. Solvent Choice:</text>
    <text x="15" y="65" fill="#94a3b8" font-size="9">Insoluble cold, highly soluble hot.</text>
    
    <text x="15" y="85" fill="#f8fafc" font-size="10" font-weight="bold">2. Dissolution:</text>
    <text x="15" y="100" fill="#94a3b8" font-size="9">Dissolve in MINIMUM volume of boiling solvent.</text>
    
    <text x="15" y="120" fill="#f8fafc" font-size="10" font-weight="bold">3. Hot Filtration:</text>
    <text x="15" y="135" fill="#94a3b8" font-size="9">Removes INSOLUBLE impurities (use fluted filter).</text>
    
    <text x="15" y="155" fill="#f8fafc" font-size="10" font-weight="bold">4. Cooling in Ice Bath:</text>
    <text x="15" y="170" fill="#94a3b8" font-size="9">Crystals reform; soluble impurities stay in solution.</text>
    
    <text x="15" y="190" fill="#f8fafc" font-size="10" font-weight="bold">5. Wash &amp; Dry:</text>
    <text x="15" y="202" fill="#94a3b8" font-size="9">Wash with ICE-COLD solvent, dry in desiccator.</text>
  </g>
</svg>`;

// ==========================================
// SVG 3: Thin Layer Chromatography (TLC)
// ==========================================
const tlcPlateSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 280" class="w-full max-w-2xl mx-auto h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="325" y="24" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Core Practical 16: Thin Layer Chromatography (TLC) Analysis</text>

  <!-- TLC Tank -->
  <g transform="translate(60, 45)">
    <rect x="0" y="0" width="220" height="210" rx="6" fill="#0f172a" stroke="#475569" stroke-width="2"/>
    <rect x="5" y="195" width="210" height="10" fill="#0284c7" fill-opacity="0.4"/>
    <text x="110" y="204" fill="#38bdf8" font-size="9" text-anchor="middle">Solvent (depth &lt; baseline)</text>
    
    <!-- TLC Plate -->
    <rect x="35" y="25" width="150" height="175" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    
    <!-- Solvent Front -->
    <line x1="35" y1="45" x2="185" y2="45" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3"/>
    <text x="110" y="40" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Solvent Front</text>
    
    <!-- Baseline in pencil -->
    <line x1="35" y1="175" x2="185" y2="175" stroke="#475569" stroke-width="1.5"/>
    <text x="110" y="188" fill="#475569" font-size="9" text-anchor="middle">Pencil Baseline</text>
    
    <!-- Spots: Pure Aspirin, Pure Impurity, Reaction Mixture -->
    <circle cx="65" cy="115" r="4.5" fill="#6366f1"/>
    <circle cx="110" cy="80" r="4.5" fill="#f59e0b"/>
    <circle cx="155" cy="115" r="4.5" fill="#6366f1"/>
    <circle cx="155" cy="80" r="4" fill="#f59e0b"/>
    
    <text x="65" y="165" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">Aspirin</text>
    <text x="110" y="165" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">Impurity</text>
    <text x="155" y="165" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">Crude</text>
  </g>

  <!-- Right: Rf Formula & Principle Callout -->
  <g transform="translate(320, 50)">
    <rect x="0" y="0" width="290" height="200" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="145" y="24" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">Rf Calculation &amp; Chromatography Rules</text>
    
    <rect x="20" y="45" width="250" height="42" rx="4" fill="#0f172a" stroke="#475569" stroke-width="1"/>
    <text x="145" y="65" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Rf = (distance travelled by spot) /</text>
    <text x="145" y="79" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">(distance travelled by solvent front)</text>
    
    <text x="20" y="110" fill="#cbd5e1" font-size="10" font-weight="bold">• Stationary Phase:</text>
    <text x="30" y="125" fill="#94a3b8" font-size="9">Silica gel (SiO₂) or alumina — polar polar surface.</text>
    
    <text x="20" y="145" fill="#cbd5e1" font-size="10" font-weight="bold">• Separation Mechanism:</text>
    <text x="30" y="160" fill="#94a3b8" font-size="9">More polar compounds form stronger H-bonds with</text>
    <text x="30" y="172" fill="#94a3b8" font-size="9">silica gel, move slower, and have smaller Rf values.</text>
    
    <text x="20" y="192" fill="#fca5a5" font-size="9" font-weight="bold">⚠️ Always draw baseline in pencil (ink dissolves in solvent!).</text>
  </g>
</svg>`;

export const parts: LessonPart[] = [
  // ==========================================
  // PART 1: Reaction Kinetics & Titrimetric Monitoring
  // ==========================================
  {
    id: "edx-a2-u6-part-1",
    title: "1. Reaction Kinetics: Continuous Monitoring & Quenching (Core Practical 9)",
    type: "text",
    content: `
> [!NOTE]
> ### 🧪 Core Practical 9: Propanone Iodination Kinetics
> In Core Practical 9, students monitor the rate of the acid-catalysed iodination of propanone:
> $$\\text{CH}_3\\text{COCH}_3\\text{(aq)} + \\text{I}_2\\text{(aq)} \\xrightarrow{\\text{H}^+\\text{(aq)}} \\text{CH}_3\\text{COCH}_2\\text{I(aq)} + \\text{H}^+\\text{(aq)} + \\text{I}^-\\text{(aq)}$$
> The rate equation determined experimentally is:
> $$\\text{Rate} = k[\\text{CH}_3\\text{COCH}_3]^1 [\\text{H}^+]^1 [\\text{I}_2]^0$$

> [!IMPORTANT]
> ### 🛑 The Quenching Procedure
> To measure the concentration of remaining unreacted iodine ($[\\text{I}_2]$) at specific time intervals $t$:
> 1. A pipette is used to withdraw a $25.0\\text{ cm}^3$ aliquot from the reaction mixture at exact time $t$.
> 2. The aliquot is transferred into a conical flask containing excess **solid sodium hydrogencarbonate** ($\\text{NaHCO}_3$) or saturated aqueous $\\text{NaHCO}_3$.
> 3. **Why Quench?** The hydrogencarbonate neutralises the $\\text{H}^+$ acid catalyst:
>    $$\\text{H}^+\\text{(aq)} + \\text{HCO}_3^-\\text{(aq)} \\to \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$$
>    Without the $\\text{H}^+$ catalyst, the rate of the reaction drops immediately to zero, effectively **freezing** the reaction mixture at time $t$.
> 4. The quenched solution is immediately titrated against standard sodium thiosulfate solution ($\\text{Na}_2\\text{S}_2\\text{O}_3$):
>    $$2\\text{S}_2\\text{O}_3^{2-}\\text{(aq)} + \\text{I}_2\\text{(aq)} \\to \\text{S}_4\\text{O}_6^{2-}\\text{(aq)} + 2\\text{I}^-\\text{(aq)}$$

> [!TIP]
> ### 📋 Titration Technique with Starch Indicator
> * Titrate the brown mixture with standard thiosulfate until it becomes **pale straw-yellow**.
> * Only **then** add $1\\text{ cm}^3$ of starch indicator solution $\\implies$ turns intense deep **blue-black**.
> * Add thiosulfate dropwise until the solution turns permanently **colourless**.
> * *Exam Rule:* If starch is added at the start when $[\\text{I}_2]$ is high, iodine forms an insoluble complex with starch that does not readily release iodine, causing inaccurate titres.
`,
    keyPoints: [
      "Quenching with NaHCO₃ stops the reaction instantly by removing the acid catalyst.",
      "A straight line on a graph of [I₂] against time confirms zero-order kinetics with respect to iodine.",
      "Add starch indicator only when the mixture is pale straw-yellow to avoid irreversible starch-iodine binding."
    ]
  },

  // ==========================================
  // PART 2: Clock Reactions & Activation Energy
  // ==========================================
  {
    id: "edx-a2-u6-part-2",
    title: "2. Clock Reactions & Activation Energy Determination (Core Practicals 10 & 11)",
    type: "text",
    content: `
> [!NOTE]
> ### ⏱️ Core Practical 10: The Iodine Clock (Initial Rates Method)
> In an iodine clock reaction (such as peroxodisulfate $\\text{S}_2\\text{O}_8^{2-}$ reacting with iodide $\\text{I}^-$ in the presence of a fixed small amount of thiosulfate and starch):
> 
> * **Main reaction (slow):** $\\text{S}_2\\text{O}_8^{2-} + 2\\text{I}^- \\to 2\\text{SO}_4^{2-} + \\text{I}_2$
> * **Scavenger reaction (instant):** $2\\text{S}_2\\text{O}_3^{2-} + \\text{I}_2 \\to \\text{S}_4\\text{O}_6^{2-} + 2\\text{I}^-$
> 
> As long as any $\\text{S}_2\\text{O}_3^{2-}$ remains, iodine is instantly reduced back to $\\text{I}^-$, and the solution stays colourless.
> The moment all thiosulfate has been consumed, the next drop of free $\\text{I}_2$ forms a blue-black complex with starch.
> 
> Because the amount of thiosulfate is constant:
> $$\\text{Initial Rate} \\propto \\frac{1}{t}$$
> where $t$ is the time taken for the blue-black colour to suddenly appear.

> [!IMPORTANT]
> ### 🧮 Core Practical 11: Calculating Activation Energy ($E_a$) via Arrhenius
> The Arrhenius equation relates the rate constant $k$ (or relative rate $1/t$) to temperature $T$ in Kelvin:
> $$\\ln k = -\\frac{E_a}{R} \\left( \\frac{1}{T} \\right) + \\ln A$$
> 
> * Plot **$\\ln(1/t)$** on the y-axis against **$1/T$** (in $\\text{K}^{-1}$) on the x-axis.
> * The graph yields a straight line with a negative gradient:
>   $$\\text{Gradient} = -\\frac{E_a}{R} \\implies E_a = -\\text{Gradient} \\times R$$
> * $R = 8.314\\text{ J K}^{-1}\\text{ mol}^{-1}$. Divide by $1000$ to report $E_a$ in $\\text{kJ mol}^{-1}$.
`,
    keyPoints: [
      "In clock reactions, rate is inversely proportional to time (Rate ∝ 1/t).",
      "Temperature must always be converted from °C to Kelvin (T = °C + 273.15).",
      "The Arrhenius gradient = -Ea / R, giving activation energy in J mol⁻¹."
    ]
  },

  // ==========================================
  // PART 3: pH Titrations & Buffer Curves
  // ==========================================
  {
    id: "edx-a2-u6-part-3",
    title: "3. pH Titration Curves & Determining pKa (Core Practical 12)",
    type: "text",
    content: `
> [!NOTE]
> ### 🧪 Core Practical 12: Precision pH Curves
> Core Practical 12 investigates the titration curves of strong and weak acids against a strong base using a calibrated pH meter.

> ${svgToken(phTitrationCurveSvg)}

> [!IMPORTANT]
> ### 🧮 Determining $K_a$ and $pK_a$ from the Half-Equivalence Point
> For a weak monobasic acid $\\text{HA}$:
> $$\\text{HA(aq)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{A}^-\\text{(aq)}$$
> The acid dissociation constant is:
> $$K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}$$
> 
> * At the **equivalence point** ($V_{\\text{eq}}$), all $\\text{HA}$ has been converted into the conjugate base $\\text{A}^-$.
> * At the **half-equivalence point** ($V_{\\text{eq}} / 2$), exactly half of the initial $\\text{HA}$ has been neutralised:
>   $$[\\text{HA}] = [\\text{A}^-]$$
> * Substituting into the $K_a$ expression:
>   $$K_a = [\\text{H}^+] \\implies \\text{pH} = pK_a$$
> 
> Hence, to find $pK_a$ from an experimental titration curve:
> 1. Read the volume at equivalence (e.g. $24.0\\text{ cm}^3$).
> 2. Find the half-volume ($12.0\\text{ cm}^3$).
> 3. Read the pH at this half-volume on the y-axis $\\implies \\text{pH} = pK_a \\implies K_a = 10^{-\\text{pH}}$.

> [!TIP]
> ### 📋 Calibrating a pH Meter
> Before use, the pH probe must be rinsed with deionised water and calibrated using standard **buffer solutions of known pH** (typically pH 4.0, 7.0, and 10.0).
> Calibration compensates for electrode drift and temperature differences.
`,
    keyPoints: [
      "Calibrate the pH probe using buffer solutions of pH 4.0, 7.0, and 10.0.",
      "At the half-neutralisation point of a weak acid, [HA] = [A⁻], so pH = pKa.",
      "Phenolphthalein is suitable for weak acid-strong base titrations (pK_in in alkaline region 8.3 - 10.0)."
    ]
  },

  // ==========================================
  // PART 4: Transition Metal Complex Preparation
  // ==========================================
  {
    id: "edx-a2-u6-part-4",
    title: "4. Transition Metal Synthesis & Redox Titrations (Core Practicals 13 & 14)",
    type: "text",
    content: `
> [!NOTE]
> ### 🧪 Core Practical 14: Synthesis of $[\\text{Cu(NH}_3)_4]\\text{SO}_4 \\cdot \\text{H}_2\\text{O}$
> Reacting hydrated copper(II) sulfate with concentrated aqueous ammonia:
> $$[\\text{Cu(H}_2\\text{O)}_6]^{2+}\\text{(aq)} + 4\\text{NH}_3\\text{(aq)} \\to [\\text{Cu(NH}_3)_4(\\text{H}_2\\text{O)}_2]^{2+}\\text{(aq)} + 4\\text{H}_2\\text{O(l)}$$
> * Adding excess concentrated ammonia causes ligand substitution: the pale blue solution forms a light blue precipitate of $\\text{Cu(OH)}_2$, which dissolves in excess $\\text{NH}_3$ to give a magnificent **deep royal blue solution**.
> * **Ethanol Precipitation:** Ethanol is added because the complex is much less soluble in ethanol than in water, inducing rapid precipitation of deep blue-violet needle crystals.

> ${svgToken(buchnerFiltrationSvg)}

> [!IMPORTANT]
> ### ⚖️ Core Practical 13b: Redox Titrations
> 1. **Manganate(VII) Titration:** $\\text{MnO}_4^-$ in acidic conditions (dilute $\\text{H}_2\\text{SO}_4$):
>    $$\\text{MnO}_4^- + 8\\text{H}^+ + 5\\text{Fe}^{2+} \\to \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$$
>    * Self-indicating: End point is the first permanent faint pink colour.
>    * Read the top of the meniscus for dark purple $\\text{KMnO}_4$ solution.
> 2. **Iodine-Thiosulfate Titration for % Copper in Brass:**
>    * Dissolve brass in concentrated $\\text{HNO}_3$, neutralise excess acid.
>    * Add excess $\\text{KI}$ $\\implies$ copper(II) is reduced to copper(I) iodide (off-white precipitate) and liberates brown iodine:
>      $$2\\text{Cu}^{2+}\\text{(aq)} + 4\\text{I}^-\\text{(aq)} \\to 2\\text{CuI(s)} + \\text{I}_2\\text{(aq)}$$
>    * Titrate liberated $\\text{I}_2$ against standard $\\text{Na}_2\\text{S}_2\\text{O}_3$ with starch indicator.
`,
    keyPoints: [
      "Ethanol reduces the solubility of tetraamminecopper(II) sulfate, causing crystallization.",
      "KMnO₄ titrations are self-indicating (pale purple/pink at end-point); read meniscus from top.",
      "1 mol of Cu²⁺ liberates 0.5 mol of I₂, which reacts with 1 mol of S₂O₃²⁻ (1:1 stoichiometric ratio between Cu²⁺ and S₂O₃²⁻)."
    ]
  },

  // ==========================================
  // PART 5: Organic Synthesis & Recrystallisation
  // ==========================================
  {
    id: "edx-a2-u6-part-5",
    title: "5. Organic Synthesis, Recrystallisation & Purity (Core Practicals 15 & 16)",
    type: "text",
    content: `
> [!NOTE]
> ### 💊 Core Practicals 15 & 16: Synthesis and Purification of Aspirin
> Aspirin (2-ethanoyloxybenzoic acid) is synthesised by esterifying 2-hydroxybenzoic acid (salicylic acid) with **ethanoic anhydride** using concentrated phosphoric acid ($(\\text{H}_3\\text{PO}_4$) or concentrated sulfuric acid as catalyst:
> $$\\text{HOC}_6\\text{H}_4\\text{COOH} + (\\text{CH}_3\\text{CO})_2\\text{O} \\to \\text{CH}_3\\text{COOC}_6\\text{H}_4\\text{COOH} + \\text{CH}_3\\text{COOH}$$
> Ethanoic anhydride is preferred over ethanoyl chloride because it reacts less violently and does not release toxic, corrosive $\\text{HCl}$ gas fumes.

> [!IMPORTANT]
> ### 💎 Principles of Recrystallisation
> Recrystallisation purifies crude organic solids by exploiting differences in solubility:
> 1. **Choice of Solvent:** Must dissolve the compound poorly at room temperature, but very well near its boiling point.
> 2. **Dissolution:** Dissolve crude solid in the **minimum volume of boiling solvent** (excess solvent prevents crystals from precipitating on cooling).
> 3. **Hot Gravity Filtration:** Uses a fluted filter paper and pre-warmed funnel to remove insoluble impurities (grit, carbon).
> 4. **Cooling:** Allow to cool slowly to room temperature, then place in an ice bath. Slow cooling yields larger, purer crystals.
> 5. **Büchner Filtration & Washing:** Filter under reduced pressure, wash crystals with **ice-cold solvent** to remove soluble impurities clinging to the surface without dissolving the product.

> [!WARNING]
> ### ⚠️ Assessing Purity: Melting Point Analysis
> * A **pure organic substance** has a **sharp melting point** (typically within a $1-2^\\circ\\text{C}$ range) that matches the literature value (pure aspirin melts at $138-140^\\circ\\text{C}$).
> * An **impure organic substance** shows:
>   1. A **depressed (lower) melting point** than the literature value.
>   2. A **broad melting range** (e.g. $128-135^\\circ\\text{C}$).
`,
    keyPoints: [
      "Dissolve in the minimum volume of hot solvent to maximize crystallization yield.",
      "Hot filtration removes insoluble impurities; washing with ice-cold solvent removes soluble impurities.",
      "A pure solid has a sharp melting point matching literature; impurities lower and broaden the melting range."
    ]
  },

  // ==========================================
  // PART 6: Thin Layer Chromatography (TLC)
  // ==========================================
  {
    id: "edx-a2-u6-part-6",
    title: "6. Thin Layer Chromatography & Rf Values (Core Practical 16)",
    type: "text",
    content: `
> [!NOTE]
> ### 🧪 TLC Analysis in Purity Assessment
> Thin layer chromatography (TLC) provides rapid verification of reaction completion and sample purity by comparing the crude reaction mixture with pure reference standards.

> ${svgToken(tlcPlateSvg)}

> [!IMPORTANT]
> ### 📋 Key Experimental Protocols for TLC
> 1. **Stationary Phase:** A thin layer of silica gel ($\\text{SiO}_2$) or alumina coated onto an aluminum or glass plate.
> 2. **Mobile Phase:** A chosen organic solvent or solvent mixture (e.g. ethyl ethanoate / hexane).
> 3. **Pencil Baseline:** Draw the origin line in **pencil** $\\approx 1.5\\text{ cm}$ above the bottom. *Never use pen, as ink dyes dissolve and separate in the solvent.*
> 4. **Solvent Depth:** Must be **below the pencil baseline** so samples do not dissolve into the bulk solvent pool.
> 5. **Lid on Tank:** The developing chamber must be covered with a watch glass or lid to maintain a **saturated solvent vapor atmosphere**, preventing solvent evaporation from the plate.
> 6. **Visualisation:** Many organic compounds (like aspirin) are colourless. Visualise spots by:
>    * Shining a short-wave **UV lamp** ($254\\text{ nm}$) on fluorescent indicator plates.
>    * Placing in a jar containing **iodine crystals** (iodine vapours adsorb onto organic spots, turning them brown).
`,
    keyPoints: [
      "Rf value = distance travelled by spot / distance travelled by solvent front.",
      "Baseline must be drawn in pencil and placed above the liquid solvent depth.",
      "Covering the tank prevents solvent evaporation from the plate.",
      "Pure samples yield a single spot; mixtures yield multiple spots."
    ]
  },

  // ==========================================
  // PART 7: Advanced Integrated Spectroscopy
  // ==========================================
  {
    id: "edx-a2-u6-part-7",
    title: "7. Integrated Organic Spectroscopy (NMR, IR, Mass Spec)",
    type: "text",
    content: `
> [!NOTE]
> ### 🔬 Combined Spectroscopic Deduction
> In Unit 6 exam papers (WCH16/01), Question 4 or 5 regularly tests the complete identification of an unknown compound by integrating data from four spectroscopic methods.

> [!IMPORTANT]
> ### 🧮 Systematic Spectroscopic Roadmap
> 
> 1. **Mass Spectrometry ($M^+$ and Fragments):**
>    * Molecular ion peak ($M^+$) gives the exact **relative molecular mass ($M_r$)**.
>    * $M+1$ peak height gives the number of carbon atoms: $n = \\frac{100 \\times \\text{height of } M+1}{1.1 \\times \\text{height of } M^+}$.
>    * Characteristic fragment ions:
>      * $m/z = 15 \\implies [\\text{CH}_3]^+$
>      * $m/z = 29 \\implies [\\text{C}_2\\text{H}_5]^+$ or $[\\text{CHO}]^+$
>      * $m/z = 43 \\implies [\\text{CH}_3\\text{CO}]^+$ or $[\\text{C}_3\\text{H}_7]^+$
>      * $m/z = 77 \\implies [\\text{C}_6\\text{H}_5]^+$ (phenyl ring)
>      * $m/z = 105 \\implies [\\text{C}_6\\text{H}_5\\text{CO}]^+$ (benzoyl cation)
> 
> 2. **Infrared Spectroscopy (IR):**
>    * $1700 - 1750\\text{ cm}^{-1}$: Sharp strong peak $\\implies C=O$ (carbonyl: aldehyde, ketone, ester, carboxylic acid).
>    * $2500 - 3300\\text{ cm}^{-1}$: Very broad jagged band $\\implies O-H$ of carboxylic acid.
>    * $3200 - 3600\\text{ cm}^{-1}$: Broad smooth tongue $\\implies O-H$ of alcohol.
>    * $3300 - 3500\\text{ cm}^{-1}$: Moderate sharp peak(s) $\\implies N-H$ of amine/amide.
> 
> 3. **$^1\\text{H}$ NMR Spectroscopy:**
>    * **Number of peaks:** Number of non-equivalent hydrogen environments.
>    * **Chemical shift ($\\delta$):** Electronic environment (e.g. $\\delta 0.9-1.3\\text{ ppm}$ for aliphatic $R-\\text{CH}_3$; $\\delta 2.0-2.6\\text{ ppm}$ for $-\\text{COCH}_3$; $\\delta 7.0-8.5\\text{ ppm}$ for aromatic protons).
>    * **Integration ratio:** Relative number of protons in each environment.
>    * **Splitting pattern ($n+1$ rule):** Number of adjacent non-equivalent protons ($n$). Singlet ($n=0$), doublet ($n=1$), triplet ($n=2$), quartet ($n=3$).
> 
> 4. **$^{13}\\text{C}$ NMR Spectroscopy:**
>    * Number of separate peaks corresponds directly to the number of non-equivalent carbon environments. Symmetry significantly reduces the number of observed peaks.
`,
    keyPoints: [
      "Molecular ion peak (M⁺) provides the precise molar mass.",
      "IR distinguishes functional groups: broad 2500-3300 cm⁻¹ for acid O-H vs 1700-1750 cm⁻¹ for C=O.",
      "1H NMR: number of signals = environments; integration = proton ratio; splitting = n+1 neighbor protons.",
      "13C NMR reveals molecule symmetry through the number of unique carbon peaks."
    ]
  }
];
