import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Purity Determination & Instrumental Analysis";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Purity Determination and Instrumental Analysis
This lesson explores heating and cooling curves for pure versus impure substances, melting and boiling point determination methods, and modern instrumental techniques (flame emission spectroscopy, gas-liquid chromatography, and infrared spectroscopy), emphasizing their speed, sensitivity, and accuracy.
`;

const heatingCurveSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="curveBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="320" fill="url(#curveBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Heating Curves: Pure Substance vs Impure Mixture</text>

  <!-- Graph Axes -->
  <g transform="translate(60, 45)">
    <!-- Axes lines -->
    <line x1="40" y1="220" x2="560" y2="220" stroke="#64748b" stroke-width="2" />
    <line x1="40" y1="220" x2="40" y2="20" stroke="#64748b" stroke-width="2" />
    
    <!-- Axis Labels -->
    <text x="300" y="250" fill="#94a3b8" font-size="12" text-anchor="middle">Time / minutes</text>
    <text x="-120" y="15" fill="#94a3b8" font-size="12" transform="rotate(-90)" text-anchor="middle">Temperature / °C</text>

    <!-- Pure Substance Curve (Solid Cyan) -->
    <!-- Solid heating -> horizontal plateau at MP -> liquid heating -> horizontal plateau at BP -> gas heating -->
    <polyline points="40,200 120,150 220,150 320,70 420,70 500,30" fill="none" stroke="#38bdf8" stroke-width="3" />

    <!-- Impure Substance Curve (Dashed Rose) -->
    <!-- Lower melting start, sloping plateau; higher boiling start, sloping plateau -->
    <path d="M 40,200 L 110,165 Q 160,155 210,140 L 310,65 Q 360,60 420,48 L 500,20" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="5,4" />

    <!-- Annotations -->
    <!-- Pure MP Plateau -->
    <line x1="120" y1="150" x2="40" y2="150" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3,3" />
    <text x="35" y="154" fill="#38bdf8" font-size="10" text-anchor="end">Pure MP</text>
    <circle cx="170" cy="150" r="4" fill="#38bdf8" />
    <text x="170" y="138" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">Sharp MP Plateau</text>

    <!-- Impure MP Sloping -->
    <text x="160" y="180" fill="#f43f5e" font-size="10" text-anchor="middle">Impure: melts over range</text>
    <text x="160" y="193" fill="#f43f5e" font-size="9.5" text-anchor="middle">(depressed melting point)</text>

    <!-- Pure BP Plateau -->
    <line x1="320" y1="70" x2="40" y2="70" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3,3" />
    <text x="35" y="74" fill="#38bdf8" font-size="10" text-anchor="end">Pure BP</text>
    <circle cx="370" cy="70" r="4" fill="#38bdf8" />
    <text x="370" y="58" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">Sharp BP Plateau</text>

    <!-- Impure BP Sloping -->
    <text x="400" y="100" fill="#f43f5e" font-size="10" text-anchor="middle">Impure: boils over range</text>
    <text x="400" y="113" fill="#f43f5e" font-size="9.5" text-anchor="middle">(elevated boiling point)</text>

    <!-- Legend -->
    <g transform="translate(420, 170)">
      <rect width="140" height="50" rx="6" fill="#0f172a" stroke="#334155" />
      <line x1="12" y1="18" x2="40" y2="18" stroke="#38bdf8" stroke-width="3" />
      <text x="48" y="22" fill="#38bdf8" font-size="10" font-weight="bold">Pure substance</text>
      <line x1="12" y1="36" x2="40" y2="36" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4,3" />
      <text x="48" y="40" fill="#f43f5e" font-size="10" font-weight="bold">Impure mixture</text>
    </g>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "cie-igcse-unit-12-lesson-4-part-1",
    title: "Thermal Analysis: Melting & Boiling Point Heating Curves",
    type: "text",
    content: `
### 🌡️ Purity Determination & Heating Curves

The physical constants of a chemical substance—especially its **melting point (MP)** and **boiling point (BP)**—provide unequivocal proof of its purity.

> [!NOTE]
> ### 📊 Pure vs Impure Heating Curves
> When a solid is heated steadily:
> 1. **Pure Substance:**
>    * The temperature rises until the melting point is reached.
>    * While the substance melts, the temperature remains **strictly constant (horizontal plateau)** because thermal energy absorbed is used to break intermolecular bonds (latent heat of fusion) rather than increasing kinetic energy.
>    * Once completely melted, the temperature of the liquid rises until reaching the boiling point, forming another sharp flat plateau.
> 2. **Impure Substance (Mixture):**
>    * **No sharp plateau:** Melting occurs over a broad **temperature range**.
>    * **Depression of Melting Point:** The substance starts melting at a **lower temperature** than the pure solid.
>    * **Elevation of Boiling Point:** The liquid boils at a **higher temperature** than the pure solvent.

${svgToken(heatingCurveSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example: Identifying an Unknown Liquid
> **Question:** A sample of a clear, colourless liquid is tested. It has a pH of 7 and turns anhydrous cobalt(II) chloride paper pink. Its boiling point is determined to be $102.5^\\circ\\text{C}$. Is the sample pure water? Explain your reasoning.
> 
> > > [!TIP]
> > > **🔑 Step-by-step Solution:**
> > > 
> > > 1. **Chemical Test Evaluation:** Turning anhydrous cobalt(II) chloride pink confirms that water is present in the sample.
> > > 2. **Purity Evaluation:** Pure water boils at exactly $100.0^\\circ\\text{C}$ at $1\\text{ atm}$.
> > > 3. **Conclusion:** Because the measured boiling point is $102.5^\\circ\\text{C}$ (elevated above $100.0^\\circ\\text{C}$), the sample is NOT pure water. It is an impure aqueous solution containing dissolved non-volatile solute (e.g. sodium chloride).
`,
    keyPoints: [
      "Pure substances have sharp, distinct melting and boiling points characterized by horizontal plateaus on heating curves.",
      "Impurities decrease the melting point and raise the boiling point, resulting in phase changes over a temperature range.",
      "Chemical tests indicate the presence of a substance, but only sharp physical constants confirm purity."
    ]
  },
  {
    id: "cie-igcse-unit-12-lesson-4-part-2",
    title: "Instrumental Analysis: Advantages & Modern Techniques",
    type: "text",
    content: `
### 🔬 Modern Instrumental Methods of Chemical Analysis

In addition to traditional bench chemistry (precipitation tests and titrations), industrial and forensic laboratories rely on automated instrumental methods.

> [!BOX]
> ### ⚡ Advantages of Instrumental Methods over Bench Tests
> Modern instruments offer three critical advantages:
> 1. **High Speed:** Analyses that take hours manually can be completed in seconds or minutes.
> 2. **High Sensitivity & Precision:** Instruments can detect and quantify minute trace concentrations (parts per billion, $\\text{ppb}$) in tiny sample volumes ($< 1\\text{ mm}^3$).
> 3. **High Accuracy & Automation:** Eliminates human subjective error (such as subtle indicator colour perception) and allows automated continuous monitoring.

> [!NOTE]
> ### 🌈 1. Flame Emission Spectroscopy (FES)
> * **Principle:** When a sample containing metal ions is sprayed into a flame, electrons are excited to higher energy levels. When returning to their ground state, they emit light at characteristic wavelengths.
> * **Analysis:**
>   * The emitted light is passed through a spectroscope to produce a line spectrum.
>   * **Qualitative:** Each metal ion produces a unique "fingerprint" line spectrum, allowing identification even in complex multi-ion mixtures.
>   * **Quantitative:** The intensity (brightness) of the spectral lines is directly proportional to the concentration of the metal ion in solution.

> [!IMPORTANT]
> ### 💨 2. Gas-Liquid Chromatography (GLC)
> * **Application:** Separating and analysing complex mixtures of volatile organic compounds (e.g. blood alcohol, forensic drugs, petrochemicals).
> * **Components:**
>   * **Mobile Phase:** An unreactive carrier gas (e.g. helium or nitrogen).
>   * **Stationary Phase:** A microscopic layer of viscous liquid coated on solid particles inside a coiled column held in an oven.
> * **Retention Time:** The time taken for a compound to travel through the column to the detector.
>   * Retention time identifies the substance (by comparison with known standards).
>   * The area under each peak on the chromatogram represents the relative amount (concentration) of that compound.
`,
    keyPoints: [
      "Instrumental methods are faster, more sensitive, more accurate, and can analyse tiny sample quantities compared to manual bench tests.",
      "Flame emission spectroscopy identifies metal ions by their unique line spectra and measures their concentration by line intensity.",
      "Gas-liquid chromatography separates volatile mixtures, using retention time for identification and peak area for quantification."
    ]
  },
  {
    id: "cie-igcse-unit-12-lesson-4-part-3",
    title: "Planning an Investigation & Laboratory Safety",
    type: "text",
    content: `
### 📝 Planning an Investigation (Paper 6 / Alternative to Practical)

Cambridge Alternative to Practical (Paper 6) dedicates a major 6-mark question to planning a full scientific investigation.

> [!BOX]
> ### 📋 Key Framework for Planning an Investigation
> When designing an experimental investigation from scratch, ensure you address every component:
> 1. **Chronological Steps:**
>    * **Preparation:** Initial setup of reagents and apparatus (e.g. weighing reactants, measuring initial volumes and temperatures).
>    * **Action:** How the reaction is initiated and timed (e.g. adding metal to acid and immediately replacing the bung).
>    * **Measurement:** Specify precisely what is measured and at what intervals (e.g. "Record the volume of gas collected every 30 seconds for 5 minutes").
>    * **Repetition:** State that the entire experiment will be repeated to ensure **reliability** and calculate concordant average values.
> 2. **Apparatus Specification:**
>    * Name all tools explicitly with appropriate precision: digital balance (mass to 2 d.p.), burette/pipette (accurate volume), gas syringe (volume of gas), stopwatch (time to nearest second).
> 3. **Experimental Variables:**
>    * **Independent Variable:** The factor you deliberately change (e.g. concentration of acid, particle size/surface area of solid, temperature).
>    * **Dependent Variable:** The factor measured as a response (e.g. volume of gas evolved per minute, time taken for cross to disappear).
>    * **Control Variables (Constants):** Factors that must stay strictly the same to ensure a fair test (e.g. total volume of solution, mass and surface area of solid, initial temperature, stirring speed).
> 4. **Conclusion & Interpretation:**
>    * State clearly how the measured data will lead to the final conclusion (e.g. "The more effective catalyst will produce the greatest volume of oxygen gas in the first 2 minutes").

> [!WARNING]
> ### 🥽 Essential Laboratory Safety Precautions
> Safety precautions in Cambridge mark schemes must always be justified with specific hazards:
> 1. **Personal Protective Equipment (PPE):**
>    * **Safety Goggles / Eye Protection:** Protect eyes against corrosive acid splashes or violent effervescence.
>    * **Lab Coat & Chemical-Resistant Gloves:** Protect skin and clothing when handling corrosive acids ($\text{HCl}, \text{H}_2\text{SO}_4$) or toxic salts.
> 2. **Toxic & Poisonous Gases (Fume Cupboard):**
>    * When experiments produce toxic, choking, or hazardous gases (such as chlorine $\text{Cl}_2$ or sulfur dioxide $\text{SO}_2$), the entire reaction MUST be conducted inside a **fume cupboard (fume hood)**.
> 3. **Flammable Liquids (Electric Heater / Water Bath):**
>    * Volatile flammable organic liquids (such as alcohols, ethanol, propan-1-ol) must **NEVER be heated directly over a naked Bunsen burner flame**!
>    * Use a thermostatically controlled **electric heating mantle** or a **hot water bath** to prevent vapor ignition and laboratory fires.
`,
    keyPoints: [
      "A complete investigation plan must state chronological steps, apparatus, variables (independent, dependent, control), and interpretation of results.",
      "Toxic gases (Cl2, SO2) must be prepared inside a fume cupboard.",
      "Flammable liquids (e.g. alcohols) must be heated using a water bath or electric mantle, never an open Bunsen burner flame."
    ]
  }
];
