import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Laboratory Equipment, Measurement & Titration Techniques";
export const lessonNumber = 1;

export const theoryMarkdown = `
## Laboratory Equipment, Measurement & Titration Techniques
This lesson covers essential laboratory apparatus for measuring mass, time, temperature, and volume (comparing pipettes, burettes, measuring cylinders, and gas syringes), heating equipment for flammable liquids, gas collection techniques, divided flask methods, and titration practical tips (rinsing rules, white tile, concordant results).
`;

const labApparatusSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="labBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="320" fill="url(#labBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Laboratory Apparatus for Volume Measurement &amp; Precision</text>

  <!-- Card 1: Volumetric Pipette -->
  <g transform="translate(25, 45)">
    <rect width="145" height="250" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <rect x="0" y="0" width="145" height="35" rx="10" fill="#0284c7" fill-opacity="0.2" />
    <text x="72" y="22" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Pipette</text>
    
    <text x="12" y="55" fill="#f8fafc" font-size="11" font-weight="bold">Type of Volume:</text>
    <text x="12" y="72" fill="#94a3b8" font-size="10">Single FIXED volume</text>
    <text x="12" y="88" fill="#38bdf8" font-size="10">(e.g. exactly 25.0 cm³)</text>

    <text x="12" y="118" fill="#f8fafc" font-size="11" font-weight="bold">Accuracy:</text>
    <text x="12" y="135" fill="#34d399" font-size="10">Extremely High</text>

    <text x="12" y="165" fill="#f8fafc" font-size="11" font-weight="bold">Speed &amp; Use:</text>
    <text x="12" y="182" fill="#94a3b8" font-size="9">Slow to deliver</text>
    <text x="12" y="200" fill="#f8fafc" font-size="10">Accurately transfer</text>
    <text x="12" y="215" fill="#f8fafc" font-size="10">standard alkali/acid</text>
    <text x="12" y="230" fill="#f8fafc" font-size="10">into conical flask</text>
  </g>

  <!-- Card 2: Burette -->
  <g transform="translate(185, 45)">
    <rect width="145" height="250" rx="10" fill="#0f172a" stroke="#34d399" stroke-width="1.5" />
    <rect x="0" y="0" width="145" height="35" rx="10" fill="#059669" fill-opacity="0.2" />
    <text x="72" y="22" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Burette</text>
    
    <text x="12" y="55" fill="#f8fafc" font-size="11" font-weight="bold">Type of Volume:</text>
    <text x="12" y="72" fill="#94a3b8" font-size="10">VARIABLE volume</text>
    <text x="12" y="88" fill="#34d399" font-size="10">(0 to 50.0 cm³)</text>

    <text x="12" y="118" fill="#f8fafc" font-size="11" font-weight="bold">Accuracy:</text>
    <text x="12" y="135" fill="#34d399" font-size="10">Very High (±0.05 cm³)</text>

    <text x="12" y="165" fill="#f8fafc" font-size="11" font-weight="bold">Speed &amp; Use:</text>
    <text x="12" y="182" fill="#94a3b8" font-size="9">Drop-by-drop delivery</text>
    <text x="12" y="200" fill="#f8fafc" font-size="10">Measures volume of</text>
    <text x="12" y="215" fill="#f8fafc" font-size="10">acid added in titration</text>
    <text x="12" y="230" fill="#f8fafc" font-size="10">Scale runs 0 at top!</text>
  </g>

  <!-- Card 3: Measuring Cylinder -->
  <g transform="translate(345, 45)">
    <rect width="145" height="250" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
    <rect x="0" y="0" width="145" height="35" rx="10" fill="#d97706" fill-opacity="0.2" />
    <text x="72" y="22" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">Measuring Cylinder</text>
    
    <text x="12" y="55" fill="#f8fafc" font-size="11" font-weight="bold">Type of Volume:</text>
    <text x="12" y="72" fill="#94a3b8" font-size="10">Approximate variable</text>
    <text x="12" y="88" fill="#f59e0b" font-size="10">(10, 25, 50, 100 cm³)</text>

    <text x="12" y="118" fill="#f8fafc" font-size="11" font-weight="bold">Accuracy:</text>
    <text x="12" y="135" fill="#fca5a5" font-size="10">Moderate / Low</text>

    <text x="12" y="165" fill="#f8fafc" font-size="11" font-weight="bold">Speed &amp; Use:</text>
    <text x="12" y="182" fill="#34d399" font-size="9">Very fast &amp; convenient</text>
    <text x="12" y="200" fill="#f8fafc" font-size="10">Quickly adding excess</text>
    <text x="12" y="215" fill="#f8fafc" font-size="10">reagents (e.g. 50 cm³</text>
    <text x="12" y="230" fill="#f8fafc" font-size="10">acid in rate trials)</text>
  </g>

  <!-- Card 4: Gas Syringe -->
  <g transform="translate(505, 45)">
    <rect width="150" height="250" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
    <rect x="0" y="0" width="150" height="35" rx="10" fill="#7e22ce" fill-opacity="0.2" />
    <text x="75" y="22" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">Gas Syringe</text>
    
    <text x="12" y="55" fill="#f8fafc" font-size="11" font-weight="bold">Measurement:</text>
    <text x="12" y="72" fill="#94a3b8" font-size="10">Accurate volume of</text>
    <text x="12" y="88" fill="#c084fc" font-size="10">PRODUCED GASES</text>

    <text x="12" y="118" fill="#f8fafc" font-size="11" font-weight="bold">Accuracy:</text>
    <text x="12" y="135" fill="#34d399" font-size="10">High (0 to 100 cm³)</text>

    <text x="12" y="165" fill="#f8fafc" font-size="11" font-weight="bold">Versatility:</text>
    <text x="12" y="182" fill="#f8fafc" font-size="9">Collects ALL gases</text>
    <text x="12" y="200" fill="#94a3b8" font-size="9">(even soluble gases</text>
    <text x="12" y="215" fill="#94a3b8" font-size="9">like SO₂ and NH₃ that</text>
    <text x="12" y="230" fill="#94a3b8" font-size="9">dissolve in water!)</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "laboratory-apparatus-measurement",
    title: "Laboratory Apparatus & Measurement Precision",
    type: "text",
    content: `
### 🔬 Measurements & Laboratory Equipment

In Cambridge IGCSE Chemistry, selecting the correct experimental apparatus based on **accuracy, speed, and safety** is essential.

> [!NOTE]
> ### 🧰 General Laboratory Tools
> * **Mortar and Pestle:** Used for crushing and grinding large lumps/crystals into fine powders to increase surface area, or for extracting pigments from plant leaves. (The bowl is the mortar; the club-shaped tool is the pestle).
> * **Tripod, Gauze & Bunsen Burner:** Used together to support and evenly heat glassware.
> * **Spatula:** For transferring small solid powders or crystals.
> * **Digital Balance:** Measures mass to 2 decimal places ($0.01\text{ g}$). It must always be **tared (zeroed)** before placing chemicals.
> * **Thermometer:** Measures temperature changes ($^\circ\text{C}$).
> * **Stopwatch / Clock:** Measures elapsed time in seconds for reaction rate experiments.
> * **Condenser (Liebig Condenser):** Cooled by circulating tap water. The cold water inlet is **always at the bottom** and the outlet is at the top to ensure the jacket fills completely without trapping air bubbles.

> ${svgToken(labApparatusSvg)}

> [!IMPORTANT]
> ### 🧪 Selecting Apparatus for Volume Measurement
> 1. **Volumetric Pipette:** Measures an **extremely accurate, fixed volume** of liquid (e.g. exactly $25.0\text{ cm}^3$ or $10.0\text{ cm}^3$). Slower to fill and empty.
> 2. **Burette:** Measures a **highly accurate variable volume** (0 to $50.0\text{ cm}^3$, graduated in $0.1\text{ cm}^3$ marks). Scale zero is at the top. Used in titrations to measure the exact volume of acid needed to neutralise an alkali.
> 3. **Measuring Cylinder:** Used when speed is more important than extreme precision (e.g. measuring "approximately $50\text{ cm}^3$ of acid quickly" into a reaction flask).
> 4. **Gas Syringe:** Measures the volume of gases produced in a reaction over time (up to $100\text{ cm}^3$).

> [!TIP]
> ### 💡 Exam Experimental Accuracy Tip: Avoiding Gas Loss
> When investigating the rate of reaction between marble chips and acid, adding the solid and putting the rubber bung back causes a loss of gas before the stopper is secured.
> * **Better Technique:** Place the acid in a flask and the solid inside a small test tube resting upright inside the flask (or use a divided flask). Swirl the flask to tip the contents together **without ever opening the bung**!
`,
    keyPoints: [
      "Use a pipette for an exact fixed volume (e.g. 25.0 cm³) and a burette for accurate variable volumes in titrations.",
      "Use a measuring cylinder for quickly measuring approximate volumes.",
      "A gas syringe collects and measures the volume of both soluble and insoluble gases accurately.",
      "Condensers must have water entering at the bottom and leaving at the top."
    ]
  },
  {
    id: "titration-tips-and-indicators",
    title: "Titration Practical Tips & Acid-Base Indicators",
    type: "text",
    content: `
### 🧪 Standard Titration Procedure & Precautions

A **standard solution** is a solution containing a precisely known concentration of a dissolved solute.

> [!IMPORTANT]
> ### 🧼 Essential Rinsing Rules for Titration Glassware
> Cambridge Paper 6 frequently tests glassware preparation:
> 1. **Burette:**
>    * First rinse with **distilled water** to remove traces of previous chemicals.
>    * Secondly, rinse with the **acid (or solution to be used)**! If left rinsed with only water, leftover water droplets would dilute the acid and cause a systematic titration error.
> 2. **Volumetric Pipette:**
>    * First rinse with **distilled water**.
>    * Secondly, rinse with the **alkali (or solution to be measured)** so the transferred concentration is not diluted.
> 3. **Conical Flask:**
>    * Rinse with **distilled water ONLY**!
>    * *Reason:* Water droplets remaining in the conical flask do NOT change the number of moles of acid or alkali transferred from the pipette!

> [!BOX]
> ### 🎯 Practical Execution Tips
> * **White Tile:** Placed directly underneath the conical flask to see the indicator color change sharply at the end-point.
> * **Swirling:** Continuously swirl the conical flask as the tap is opened.
> * **Dropwise Near End-point:** Add titrant drop-by-drop near the estimated equivalence point.
> * **Reliability:** Repeat titrations until you achieve **concordant results** (titres within $\pm 0.1\text{ cm}^3$ of each other) and calculate the mean using only concordant titres.

> [!BOX]
> ### 🌈 Acid-Base Indicators in IGCSE Chemistry
>
> | Indicator | Acidic Solution | Neutral Solution | Alkaline (Basic) Solution |
> | :--- | :--- | :--- | :--- |
> | **Litmus Paper / Solution** | **Red** | Purple | **Blue** |
> | **Methyl Orange** | **Red** | Orange | **Yellow** |
> | **Thymolphthalein** | **Colourless** | Colourless | **Blue** |
> | **Phenolphthalein** | **Colourless** | Colourless | **Pink** |
> | **Universal Indicator** | **Red / Orange** | **Green (pH 7)** | **Blue / Purple** |
`,
    keyPoints: [
      "Burettes and pipettes must be rinsed with distilled water followed by the solution they will contain.",
      "The conical flask is rinsed with distilled water only (water does not alter the moles of reagent).",
      "Place a white tile under the conical flask to observe the end-point colour change clearly.",
      "Concordant titres are within ±0.1 cm³ of each other."
    ]
  }
];
