import { LessonPart } from '@/data/curriculum/registry';
import { svgToken } from '@/data/curriculum/svgToken';

export const lessonTitle = "Unit 3 Practical: AS Laboratory Skills & Techniques";
export const lessonNumber = 1;

export const theoryMarkdown = `
# Unit 3: Practical Skills in Chemistry I
This unit covers the essential laboratory techniques, volumetric analysis, calorimetry, synthetic organic preparation, and qualitative inorganic identification for Pearson Edexcel International AS Chemistry (Core Practicals 1 to 8).
`;

// ==========================================
// SVG DIAGRAM 1: Volumetric & Gas Apparatus
// ==========================================
const gasCollectionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 300" class="w-full max-w-2xl mx-auto h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="325" y="24" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Core Practical 1: Gas Syringe Setup vs Inverted Burette</text>
  
  <!-- Left Side: Conical Flask & Gas Syringe -->
  <g transform="translate(25, 45)">
    <rect x="0" y="0" width="285" height="230" rx="8" fill="#38bdf8" fill-opacity="0.04" stroke="#38bdf8" stroke-opacity="0.2"/>
    <text x="142" y="22" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Gas Syringe Method (All Gases)</text>
    
    <!-- Conical Flask -->
    <path d="M 50,180 L 80,110 L 80,85 L 110,85 L 110,110 L 140,180 Z" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 55,175 L 135,175 L 125,140 L 65,140 Z" fill="#0284c7" fill-opacity="0.3"/>
    <circle cx="85" cy="155" r="2.5" fill="#ffffff" opacity="0.8"/>
    <circle cx="105" cy="148" r="2" fill="#ffffff" opacity="0.7"/>
    <circle cx="95" cy="162" r="3" fill="#ffffff" opacity="0.9"/>
    
    <!-- Rubber Bung -->
    <rect x="78" y="78" width="34" height="10" fill="#475569" rx="2"/>
    <!-- Delivery Tube -->
    <path d="M 95,80 L 95,55 L 175,55 L 175,100 L 195,100" fill="none" stroke="#64748b" stroke-width="2.5"/>
    
    <!-- Gas Syringe Barrel -->
    <rect x="195" y="85" width="80" height="30" rx="3" fill="#020617" stroke="#475569" stroke-width="1.5"/>
    <line x1="210" y1="85" x2="210" y2="92" stroke="#94a3b8" stroke-width="1"/>
    <line x1="230" y1="85" x2="230" y2="92" stroke="#94a3b8" stroke-width="1"/>
    <line x1="250" y1="85" x2="250" y2="92" stroke="#94a3b8" stroke-width="1"/>
    <!-- Syringe Plunger -->
    <rect x="235" y="87" width="8" height="26" rx="1" fill="#f59e0b"/>
    <rect x="243" y="97" width="36" height="6" fill="#64748b"/>
    
    <text x="95" y="202" fill="#cbd5e1" font-size="11" text-anchor="middle">Mg ribbon + excess dil. HCl</text>
    <text x="235" y="132" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">100 cm³ Gas Syringe</text>
  </g>

  <!-- Right Side: Inverted Cylinder Over Water -->
  <g transform="translate(340, 45)">
    <rect x="0" y="0" width="285" height="230" rx="8" fill="#10b981" fill-opacity="0.04" stroke="#10b981" stroke-opacity="0.2"/>
    <text x="142" y="22" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Downward Displacement of Water</text>
    
    <!-- Water Trough -->
    <rect x="30" y="150" width="225" height="45" rx="4" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
    <rect x="31" y="160" width="223" height="34" fill="#0284c7" fill-opacity="0.25"/>
    
    <!-- Inverted Graduated Cylinder / Burette -->
    <rect x="130" y="60" width="30" height="110" rx="2" fill="#020617" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Gas collected pocket at top -->
    <rect x="131" y="61" width="28" height="40" fill="#10b981" fill-opacity="0.3"/>
    <text x="145" y="85" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">H₂ Gas</text>
    
    <!-- Delivery Tube entering from under -->
    <path d="M 50,110 L 50,185 L 145,185 L 145,155" fill="none" stroke="#64748b" stroke-width="2.5"/>
    <circle cx="145" cy="130" r="2.5" fill="#ffffff" opacity="0.8"/>
    <circle cx="145" cy="115" r="3" fill="#ffffff" opacity="0.9"/>
    
    <text x="142" y="210" fill="#94a3b8" font-size="10" text-anchor="middle">Only suitable for gases with low solubility in H₂O</text>
  </g>
</svg>`;

// ==========================================
// SVG DIAGRAM 2: Titration & Volumetric Flask
// ==========================================
const volumetricTitrationSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 280" class="w-full max-w-2xl mx-auto h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="325" y="24" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Core Practicals 2 & 3: Volumetric Standard Solution & Titration</text>

  <!-- Step 1: Volumetric Flask -->
  <g transform="translate(30, 45)">
    <rect x="0" y="0" width="180" height="215" rx="6" fill="#6366f1" fill-opacity="0.04" stroke="#6366f1" stroke-opacity="0.2"/>
    <text x="90" y="20" text-anchor="middle" fill="#818cf8" font-size="12" font-weight="bold">1. Standard Solution</text>
    
    <!-- Volumetric Flask Outline -->
    <path d="M 83,40 L 83,100 L 50,170 L 130,170 L 97,100 L 97,40 Z" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 53,168 L 127,168 L 95,108 L 85,108 Z" fill="#6366f1" fill-opacity="0.3"/>
    
    <!-- Graduation Mark -->
    <line x1="80" y1="75" x2="100" y2="75" stroke="#ef4444" stroke-width="2"/>
    <text x="110" y="79" fill="#ef4444" font-size="9" font-weight="bold">250.0 cm³ Mark</text>
    
    <text x="90" y="195" fill="#cbd5e1" font-size="10" text-anchor="middle">Invert 10× to mix thoroughly</text>
  </g>

  <!-- Step 2: Pipette with Filler -->
  <g transform="translate(235, 45)">
    <rect x="0" y="0" width="180" height="215" rx="6" fill="#38bdf8" fill-opacity="0.04" stroke="#38bdf8" stroke-opacity="0.2"/>
    <text x="90" y="20" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">2. Volumetric Pipette</text>
    
    <!-- Pipette Bulb & Tube -->
    <rect x="88" y="35" width="4" height="60" fill="#94a3b8"/>
    <ellipse cx="90" cy="115" rx="14" ry="25" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
    <rect x="88" y="140" width="4" height="40" fill="#94a3b8"/>
    
    <!-- Mark -->
    <line x1="84" y1="65" x2="96" y2="65" stroke="#ef4444" stroke-width="1.5"/>
    <text x="90" y="195" fill="#cbd5e1" font-size="10" text-anchor="middle">Rinse with solution before use</text>
    <text x="90" y="208" fill="#94a3b8" font-size="9" text-anchor="middle">Touch tip to flask wall (do not blow)</text>
  </g>

  <!-- Step 3: Burette & Conical Flask -->
  <g transform="translate(440, 45)">
    <rect x="0" y="0" width="180" height="215" rx="6" fill="#10b981" fill-opacity="0.04" stroke="#10b981" stroke-opacity="0.2"/>
    <text x="90" y="20" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">3. Precision Titration</text>
    
    <!-- Burette Tube -->
    <rect x="83" y="35" width="14" height="110" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="84" y="65" width="12" height="78" fill="#0284c7" fill-opacity="0.3"/>
    <!-- Stopcock -->
    <rect x="80" y="145" width="20" height="6" fill="#f59e0b"/>
    <!-- Tip -->
    <path d="M 87,151 L 90,165 L 93,151 Z" fill="#94a3b8"/>
    
    <!-- White Tile under flask -->
    <rect x="45" y="195" width="90" height="8" rx="2" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
    <text x="90" y="215" fill="#f8fafc" font-size="9" text-anchor="middle">White tile under flask</text>
  </g>
</svg>`;

// ==========================================
// SVG DIAGRAM 3: Reflux vs Simple Distillation
// ==========================================
const organicApparatusSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 300" class="w-full max-w-2xl mx-auto h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="325" y="24" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Core Practicals 6 & 7: Reflux vs Simple Distillation</text>

  <!-- Left: Heating Under Reflux -->
  <g transform="translate(25, 45)">
    <rect x="0" y="0" width="285" height="235" rx="8" fill="#f59e0b" fill-opacity="0.04" stroke="#f59e0b" stroke-opacity="0.2"/>
    <text x="142" y="22" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">Heating Under Reflux</text>
    
    <!-- Pear-shaped Flask -->
    <circle cx="142" cy="180" r="24" fill="#0f172a" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="142" cy="180" r="18" fill="#f59e0b" fill-opacity="0.25"/>
    <rect x="137" y="135" width="10" height="25" fill="#0f172a" stroke="#cbd5e1" stroke-width="1.5"/>
    
    <!-- Liebig Condenser (Vertical) -->
    <rect x="134" y="45" width="16" height="90" fill="#020617" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="130" y="55" width="24" height="70" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
    
    <!-- Water In / Out Labels -->
    <path d="M 120,118 L 130,118" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="75" y="122" fill="#38bdf8" font-size="9" font-weight="bold">Water IN (bottom)</text>
    
    <path d="M 154,62 L 168,62" stroke="#38bdf8" stroke-width="2"/>
    <text x="215" y="66" fill="#38bdf8" font-size="9" font-weight="bold">Water OUT (top)</text>
    
    <text x="142" y="40" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">NEVER SEAL TOP (Explosion risk!)</text>
    <text x="142" y="222" fill="#cbd5e1" font-size="10" text-anchor="middle">Anti-bumping granules prevent violent boiling</text>
  </g>

  <!-- Right: Simple Distillation -->
  <g transform="translate(340, 45)">
    <rect x="0" y="0" width="285" height="235" rx="8" fill="#10b981" fill-opacity="0.04" stroke="#10b981" stroke-opacity="0.2"/>
    <text x="142" y="22" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Simple Distillation</text>
    
    <!-- Distillation Flask & Stillhead -->
    <circle cx="65" cy="180" r="22" fill="#0f172a" stroke="#cbd5e1" stroke-width="2"/>
    <path d="M 61,160 L 61,85 L 75,85 L 75,160" fill="#0f172a" stroke="#cbd5e1" stroke-width="1.5"/>
    
    <!-- Thermometer with Bulb at Side Arm -->
    <line x1="68" y1="45" x2="68" y2="105" stroke="#ef4444" stroke-width="2"/>
    <circle cx="68" cy="105" r="3.5" fill="#ef4444"/>
    <text x="68" y="38" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Bulb level with exit</text>
    
    <!-- Downward Sloping Condenser -->
    <line x1="75" y1="105" x2="195" y2="175" stroke="#94a3b8" stroke-width="6"/>
    <line x1="85" y1="110" x2="185" y2="170" stroke="#38bdf8" stroke-width="14" stroke-opacity="0.3"/>
    
    <!-- Receiver Flask -->
    <polygon points="195,190 205,190 220,215 180,215" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5"/>
    
    <text x="142" y="226" fill="#cbd5e1" font-size="10" text-anchor="middle">Separates liquid by differences in boiling point</text>
  </g>
</svg>`;

// ==========================================
// SVG DIAGRAM 4: Separating Funnel Extraction
// ==========================================
const separatingFunnelSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 280" class="w-full max-w-2xl mx-auto h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="325" y="24" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Core Practical 6: Purification Using a Separating Funnel</text>
  
  <g transform="translate(185, 40)">
    <!-- Funnel Body -->
    <path d="M 110,40 L 170,40 L 185,110 L 150,180 L 150,215 L 130,215 L 130,180 L 95,110 Z" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
    
    <!-- Upper Organic Layer -->
    <path d="M 103,90 L 177,90 L 183,125 L 97,125 Z" fill="#f59e0b" fill-opacity="0.35"/>
    <text x="140" y="112" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Upper Organic Layer (d &lt; 1.0 g/cm³)</text>
    
    <!-- Lower Aqueous Layer -->
    <path d="M 97,125 L 183,125 L 150,180 L 130,180 Z" fill="#0284c7" fill-opacity="0.4"/>
    <text x="140" y="152" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Lower Aqueous Layer (d ≈ 1.0 g/cm³)</text>
    
    <!-- Stopcock Tap -->
    <rect x="120" y="190" width="40" height="8" rx="2" fill="#64748b"/>
    <!-- Glass Stopper at Top -->
    <polygon points="125,25 155,25 150,40 130,40" fill="#475569" stroke="#94a3b8" stroke-width="1"/>
  </g>

  <!-- Washing Stages Callouts -->
  <g transform="translate(40, 70)">
    <rect x="0" y="0" width="130" height="60" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
    <text x="65" y="20" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">1. Water Wash</text>
    <text x="65" y="38" fill="#94a3b8" font-size="9" text-anchor="middle">Removes water-soluble</text>
    <text x="65" y="50" fill="#94a3b8" font-size="9" text-anchor="middle">inorganic salts</text>
  </g>

  <g transform="translate(40, 150)">
    <rect x="0" y="0" width="130" height="75" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
    <text x="65" y="20" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">2. NaHCO₃(aq) Wash</text>
    <text x="65" y="38" fill="#94a3b8" font-size="9" text-anchor="middle">Neutralises residual acid</text>
    <text x="65" y="52" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">⚠️ Invert &amp; open tap</text>
    <text x="65" y="66" fill="#cbd5e1" font-size="8" text-anchor="middle">frequently to release CO₂</text>
  </g>

  <g transform="translate(470, 100)">
    <rect x="0" y="0" width="140" height="85" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
    <text x="70" y="22" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">3. Anhydrous Drying</text>
    <text x="70" y="42" fill="#cbd5e1" font-size="9" text-anchor="middle">Add anhydrous Na₂SO₄</text>
    <text x="70" y="56" fill="#cbd5e1" font-size="9" text-anchor="middle">or CaCl₂ to organic layer.</text>
    <text x="70" y="72" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle">Swirl until liquid turns CLEAR</text>
  </g>
</svg>`;

export const parts: LessonPart[] = [
  // ==========================================
  // PART 1: Core Practicals 1-3 & Volumetric Skills
  // ==========================================
  {
    id: "edx-as-u3-part-1",
    title: "1. Molar Volume & Volumetric Standard Solutions (Core Practicals 1–3)",
    type: "text",
    content: `
> [!NOTE]
> ### 🧪 AS Unit 3 Practical Overview
> Pearson Edexcel IAL Unit 3 (**WCH13/01**) assesses the practical skills, measurement precision, experimental design, and quantitative error analysis developed across **Core Practicals 1 to 8**.

In Core Practical 1, you determine the molar volume of a gas under room temperature and pressure ($20^\\circ\\text{C}$ and $101\\text{ kPa}$) by reacting a known mass of magnesium ribbon or calcium carbonate with excess dilute hydrochloric acid:
$$\\text{Mg(s)} + 2\\text{HCl(aq)} \\to \\text{MgCl}_2\\text{(aq)} + \\text{H}_2\\text{(g)}$$

> ${svgToken(gasCollectionSvg)}

> [!IMPORTANT]
> ### 🧮 Calculating Percentage Uncertainties & Reducing Errors
> Every measuring instrument carries an experimental reading uncertainty:
> $$\\text{Percentage Uncertainty} = \\frac{\\text{Instrument Uncertainty} \\times \\text{Number of Readings}}{\\text{Measured Quantity Value}} \\times 100\\%$$
> 
> * **Gas Syringe:** Typically $\\pm 0.5\\text{ cm}^3$ or $\\pm 1.0\\text{ cm}^3$.
> * **Analytical Balance (2 d.p.):** Weighing by difference requires **two readings** (mass of boat + solid, and mass of empty boat):
>   $$\\text{Total Uncertainty} = 2 \\times 0.005\\text{ g} = \\pm 0.01\\text{ g}$$
> * **Volumetric Flask ($250.0\\text{ cm}^3$):** $\\pm 0.20\\text{ cm}^3$ (only 1 reading).
> * **Burette ($50.00\\text{ cm}^3$):** Initial and final reading $\\implies 2 \\times 0.05\\text{ cm}^3 = \\pm 0.10\\text{ cm}^3$.

> [!TIP]
> ### 📋 Key Procedural Rules for Core Practicals 2 & 3
> 1. **Preparing a Standard Solution:** Dissolve the solid in a beaker with $\\approx 100\\text{ cm}^3$ deionised water, transfer quantitatively using a funnel, rinse beaker, stirring rod, and funnel with wash bottle, fill until bottom of meniscus rests on calibration mark, invert 10 times with stopper firmly held.
> 2. **Burette Operation:** Rinse with the acid/alkali titrant before filling. Remove air bubble in the jet space below the tap.
> 3. **Concordant Titres:** Only average titres that agree within $\\pm 0.20\\text{ cm}^3$ (ideally within $\\pm 0.10\\text{ cm}^3$). Discard the initial rough trial.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Percentage Purity from Titration
> **Question:** A student dissolved $1.550\\text{ g}$ of an impure sample of anhydrous sodium carbonate in deionised water and made up to $250.0\\text{ cm}^3$. A $25.0\\text{ cm}^3$ portion was titrated against $0.100\\text{ mol dm}^{-3}$ hydrochloric acid. The mean concordant titre was $23.40\\text{ cm}^3$. Calculate the percentage purity of the sodium carbonate sample. [$M_r$: $\\text{Na}_2\\text{CO}_3 = 106.0$]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate moles of $\\text{HCl}$ used in titration:**
> >    $$\\text{Moles of HCl} = 0.100 \\times \\frac{23.40}{1000} = 2.340 \\times 10^{-3}\\text{ mol}$$
> > 
> > 2. **Deduce moles of $\\text{Na}_2\\text{CO}_3$ in $25.0\\text{ cm}^3$ portion:**
> >    $$\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\to 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2$$
> >    $$\\text{Moles in } 25.0\\text{ cm}^3 = \\frac{2.340 \\times 10^{-3}}{2} = 1.170 \\times 10^{-3}\\text{ mol}$$
> > 
> > 3. **Scale up to total volume ($250.0\\text{ cm}^3$):**
> >    $$\\text{Total moles in } 250\\text{ cm}^3 = 1.170 \\times 10^{-3} \\times 10 = 1.170 \\times 10^{-2}\\text{ mol}$$
> > 
> > 4. **Calculate mass of pure $\\text{Na}_2\\text{CO}_3$ and percentage purity:**
> >    $$\\text{Pure Mass} = 1.170 \\times 10^{-2} \\times 106.0 = 1.2402\\text{ g}$$
> >    $$\\text{Percentage Purity} = \\frac{1.2402}{1.550} \\times 100\\% = 80.0\\%$$
`,
    keyPoints: [
      "Molar volume of ideal gas at r.t.p. is 24.0 dm³ mol⁻¹ (24,000 cm³ mol⁻¹).",
      "Weighing by difference eliminates balance zero-calibration errors.",
      "Concordant titres must be within 0.10 - 0.20 cm³; the rough titre is never included in the average.",
      "Remove air bubbles from the burette jet before recording the initial reading."
    ]
  },

  // ==========================================
  // PART 2: Thermochemistry & Calorimetry
  // ==========================================
  {
    id: "edx-as-u3-part-2",
    title: "2. Calorimetry & Enthalpy of Reaction (Core Practical 4)",
    type: "text",
    content: `
> [!NOTE]
> ### ⚖️ Core Practical 4: Calorimetry Principles
> Core Practical 4 measures enthalpy changes of neutralisation and displacement reactions using an expanded polystyrene cup with lid as a constant-pressure calorimeter.

Polystyrene is chosen because it has a high insulating capacity and very low specific heat capacity, minimising heat loss to surroundings.

> [!IMPORTANT]
> ### 🧮 The Heat Exchange Formula
> $$q = m \\times c \\times \\Delta T$$
> 
> * $q$ = Heat transferred in Joules ($\\text{J}$).
> * $m$ = Mass of the solution (assume aqueous solutions have density $\\rho = 1.00\\text{ g cm}^{-3}$, so $50.0\\text{ cm}^3 \\implies 50.0\\text{ g}$).
> * $c$ = Specific heat capacity of solution (assumed equal to water: $4.18\\text{ J g}^{-1}\\text{ }^\\circ\\text{C}^{-1}$).
> * $\\Delta T$ = Temperature change ($T_{\\text{max}} - T_{\\text{initial}}$ in $^\\circ\\text{C}$ or $\\text{K}$).
> 
> The molar enthalpy change is calculated by:
> $$\\Delta H = -\\frac{q}{n \\times 1000}\\text{ kJ mol}^{-1}$$
> *(Note the negative sign for exothermic reactions where temperature rises).*

> [!WARNING]
> ### ⚠️ Major Experimental Errors in Calorimetry
> * **Heat loss to surroundings:** Leads to a lower measured $\\Delta T$ and hence an enthalpy change less exothermic than literature.
> * **Incomplete reaction:** Especially with zinc powder clumping in displacement of $\\text{CuSO}_4$.
> * **Assumption errors:** Specific heat capacity of the salt solution is slightly different from pure water ($4.18\\text{ J g}^{-1}\\text{ K}^{-1}$).
> * **Extrapolation to Time of Mixing:** For slow reactions, record temperature every minute for 3 minutes before addition, add reactant at minute 4 (do not measure), then record from minute 5 to 10. Extrapolate cooling curve back to minute 4 to find theoretical $\\Delta T_{\\text{corrected}}$.
`,
    keyPoints: [
      "Assume aqueous solutions have density 1.00 g/cm³ and c = 4.18 J g⁻¹ K⁻¹.",
      "Extrapolating the cooling curve back to the mixing time compensates for heat lost during the reaction.",
      "Exothermic reactions always have negative ΔH values; endothermic reactions have positive ΔH values."
    ]
  },

  // ==========================================
  // PART 3: Halogenoalkanes & Rates of Hydrolysis
  // ==========================================
  {
    id: "edx-as-u3-part-3",
    title: "3. Halogenoalkane Hydrolysis & Synthesis (Core Practicals 5 & 6)",
    type: "text",
    content: `
> [!NOTE]
> ### 🧪 Core Practical 5: Relative Rates of Halogenoalkane Hydrolysis
> In Core Practical 5, equal amounts of 1-chlorobutane, 1-bromobutane, and 1-iodobutane are warmed in a water bath at $50-60^\\circ\\text{C}$ with aqueous silver nitrate ($\\text{AgNO}_3$) and ethanol.
> 
> * **Role of Ethanol:** Halogenoalkanes and aqueous $\\text{AgNO}_3$ are immiscible. Ethanol acts as a common co-solvent to allow them to mix into a single homogenous phase.
> * **Water as Nucleophile:** The hydrolysis reaction is:
>   $$\\text{R-X} + \\text{H}_2\\text{O} \\to \\text{R-OH} + \\text{H}^+ + \\text{X}^-$$
> * **Precipitate Formation:** Released halide ions react instantly with $\\text{Ag}^+$:
>   $$\\text{Ag}^+\\text{(aq)} + \\text{X}^-\\text{(aq)} \\to \\text{AgX(s)}$$

> [!IMPORTANT]
> ### 📋 Experimental Trend & Underlying Factor
> * **Order of precipitate formation:**
>   $$1\\text{-iodobutane (yellow ppt, fastest)} > 1\\text{-bromobutane (cream ppt)} > 1\\text{-chlorobutane (white ppt, slowest)}$$
> * **Explanation:** The rate of hydrolysis depends on the **carbon-halogen bond enthalpy** ($C-I < C-Br < C-Cl$), **NOT** bond polarity. Although the $C-Cl$ bond is the most polar, the $C-I$ bond is by far the weakest and requires the least energy to break.
> * **Structural Trend:** For the same halogen: $\\text{Tertiary } (3^\\circ) > \\text{Secondary } (2^\\circ) > \\text{Primary } (1^\\circ)$ due to the stability of the carbocation intermediate in the $S_N1$ mechanism.

> ${svgToken(separatingFunnelSvg)}

> [!TIP]
> ### 📋 Core Practical 6: Synthesis of 2-chloro-2-methylpropane
> Reacting 2-methylpropan-2-ol with concentrated hydrochloric acid at room temperature:
> $$(\\text{CH}_3)_3\\text{COH} + \\text{HCl} \\to (\\text{CH}_3)_3\\text{CCl} + \\text{H}_2\\text{O}$$
> 
> **Purification Steps:**
> 1. Separate layers in a separating funnel (organic layer is less dense, so it floats on top).
> 2. Wash with aqueous sodium hydrogencarbonate ($\\text{NaHCO}_3$) to remove acidic impurities:
>    $$\\text{H}^+ + \\text{HCO}_3^- \\to \\text{H}_2\\text{O} + \\text{CO}_2$$
>    *Vent frequently by turning funnel upside down with tap open to relieve built-up $\\text{CO}_2$ gas!*
> 3. Add anhydrous sodium sulfate ($\\text{Na}_2\\text{SO}_4$) or calcium chloride ($\\text{CaCl}_2$) until the liquid clears from cloudy to transparent.
> 4. Filter off drying agent and purify by simple distillation collecting the fraction boiling between $50-52^\\circ\\text{C}$.
`,
    keyPoints: [
      "Ethanol acts as a mutual solvent for water and halogenoalkanes.",
      "Rate of hydrolysis depends on bond enthalpy: C-I < C-Br < C-Cl.",
      "Tertiary halogenoalkanes hydrolyse fastest (SN1 mechanism via stable 3° carbocation).",
      "Always vent the separating funnel tap after shaking with NaHCO₃ to release carbon dioxide pressure."
    ]
  },

  // ==========================================
  // PART 4: Oxidation of Alcohols & Organic Apparatus
  // ==========================================
  {
    id: "edx-as-u3-part-4",
    title: "4. Organic Techniques: Reflux & Distillation (Core Practical 7)",
    type: "text",
    content: `
> [!NOTE]
> ### 🧪 Core Practical 7: Oxidation of Alcohols
> Ethanol can be oxidised by acidified sodium dichromate(VI) ($\\text{Na}_2\\text{Cr}_2\\text{O}_7 / \\text{H}_2\\text{SO}_4$).
> During the reaction, the dichromate(VI) ion is reduced from **orange** ($\\text{Cr}_2\\text{O}_7^{2-}$) to **green** ($\\text{Cr}^{3+}$).

> ${svgToken(organicApparatusSvg)}

> [!IMPORTANT]
> ### ⚖️ Selective Oxidation: Ethanal vs Ethanoic Acid
> 
> | Goal Product | Technique | Key Conditions & Reasons |
> | :--- | :--- | :--- |
> | **Ethanal** (Aldehyde, b.p. $21^\\circ\\text{C}$) | **Simple Distillation** | * Excess ethanol, limited oxidising agent.<br>* Ethanal distils off immediately as it forms, preventing further oxidation because aldehydes have no hydrogen bonding and boil off at lower temperatures than ethanol ($78^\\circ\\text{C}$). |
> | **Ethanoic Acid** (Carboxylic acid, b.p. $118^\\circ\\text{C}$) | **Heating Under Reflux** | * Excess acidified dichromate.<br>* Vapours condense and drop back into the flask for continuous boiling without solvent loss, ensuring 100% conversion to ethanoic acid. |

> [!WARNING]
> ### ⚠️ Apparatus Safety & Common Exam Pitfalls
> * **Condenser Water Flow:** Water must enter at the **bottom** and leave at the **top**. This ensures the condenser jacket remains completely filled with cold water, avoiding air pockets that reduce cooling efficiency.
> * **Open System:** The top of a reflux condenser must **never be stoppered**; sealing the system creates explosive pressure buildup upon heating.
> * **Anti-bumping granules:** Added before heating to promote smooth boiling by providing nucleation sites for bubble formation, preventing violent boil-overs.
`,
    keyPoints: [
      "Aldehydes are obtained by distilling off the product immediately using excess alcohol.",
      "Carboxylic acids require prolonged heating under reflux with excess oxidising agent.",
      "Acidified dichromate(VI) turns from orange to green on reduction to Cr³⁺.",
      "Water enters condenser at the bottom and leaves at the top to eliminate air locks."
    ]
  },

  // ==========================================
  // PART 5: Qualitative Inorganic Analysis
  // ==========================================
  {
    id: "edx-as-u3-part-5",
    title: "5. Qualitative Inorganic Analysis (Core Practical 8)",
    type: "text",
    content: `
> [!NOTE]
> ### 📋 Core Practical 8: Systematic Ion Identification
> In Core Practical 8, students identify unknown cations and anions through flame tests, precipitate reactions, and gas evolutions.

> [!BOX]
> ### 🔥 Flame Test Procedures & Observations
> 1. Dip a clean **nichrome or platinum wire** into concentrated hydrochloric acid ($\\text{HCl}$) to form volatile chlorides.
> 2. Heat wire in a roaring blue Bunsen flame until no colour is observed (cleaning check).
> 3. Dip wire back into acid, then touch the solid sample, and hold in flame:
>    * **Lithium ($\\text{Li}^+$):** Crimson red
>    * **Sodium ($\\text{Na}^+$):** Intense persistent yellow-orange
>    * **Potassium ($\\text{K}^+$):** Lilac (pink through cobalt glass)
>    * **Calcium ($\\text{Ca}^{2+}$):** Brick-red / orange-red
>    * **Strontium ($\\text{Sr}^{2+}$):** Crimson / scarlet
>    * **Barium ($\\text{Ba}^{2+}$):** Apple green
>    * **Copper ($\\text{Cu}^{2+}$):** Blue-green

> [!IMPORTANT]
> ### 🧪 Identifying Halide Ions with $\\text{AgNO}_3$ and $\\text{NH}_3$
> Acidify solution with **dilute nitric acid** ($\\text{HNO}_3$) to remove carbonate impurities, then add aqueous silver nitrate ($\\text{AgNO}_3$):
> 
> * **Chloride ($\\text{Cl}^-$):** White precipitate of $\\text{AgCl}$
>   * *Soluble in dilute aqueous ammonia* ($\\text{NH}_3$).
> * **Bromide ($\\text{Br}^-$):** Cream precipitate of $\\text{AgBr}$
>   * *Insoluble in dilute ammonia, but dissolves in concentrated ammonia*.
> * **Iodide ($\\text{I}^-$):** Yellow precipitate of $\\text{AgI}$
>   * *Insoluble in both dilute and concentrated ammonia*.

> [!TIP]
> ### 📋 Anion & Cation Confirmatory Tests
> * **Sulfate ($\\text{SO}_4^{2-}$):** Add dilute $\\text{HCl}$, then aqueous barium chloride ($\\text{BaCl}_2$). Formation of a dense white precipitate of barium sulfate:
>   $$\\text{Ba}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\to \\text{BaSO}_4\\text{(s)}$$
> * **Carbonate / Hydrogencarbonate:** Add dilute acid $\\implies$ effervescence of $\\text{CO}_2$ gas, which turns limewater ($\\text{Ca(OH)}_2$) cloudy/milky:
>   $$\\text{CO}_2\\text{(g)} + \\text{Ca(OH)}_2\\text{(aq)} \\to \\text{CaCO}_3\\text{(s)} + \\text{H}_2\\text{O(l)}$$
> * **Ammonium ($\\text{NH}_4^+$):** Warm with aqueous sodium hydroxide ($\\text{NaOH}$) $\\implies$ releases alkaline $\\text{NH}_3$ gas that turns damp red litmus paper blue and produces dense white fumes of $\\text{NH}_4\\text{Cl}$ with concentrated $\\text{HCl}$ vapour.
`,
    keyPoints: [
      "Nichrome wire is cleaned in concentrated HCl to form volatile metal chlorides.",
      "Acidify halide tests with dilute HNO₃, NEVER HCl or H₂SO₄ (which would give false precipitates).",
      "AgCl dissolves in dilute NH₃, AgBr dissolves in concentrated NH₃, AgI is insoluble in concentrated NH₃.",
      "Ammonium ions release ammonia gas on warming with NaOH(aq), turning damp red litmus paper blue."
    ]
  }
];
