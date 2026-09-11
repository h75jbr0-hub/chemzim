import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Water: Testing, Supply & Domestic Treatment";
export const lessonNumber = 1;

export const theoryMarkdown = `
## Water: Testing, Supply & Domestic Treatment
This lesson covers the physical and chemical tests for pure water, beneficial and harmful dissolved substances in natural waters, eutrophication, and the sequential stages of domestic water treatment (screening, sedimentation, coagulation, filtration, chlorination, carbon filtration).
`;

const waterTreatmentSvg = `
<svg viewBox="0 0 680 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wtBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="wtArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
  </defs>

  <rect width="680" height="280" fill="url(#wtBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Stages of Domestic Water Treatment (Waterworks)</text>

  <!-- Step 1: Reservoir / Source -->
  <g transform="translate(25, 45)">
    <rect width="105" height="85" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="52" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. Reservoir</text>
    <text x="52" y="44" fill="#94a3b8" font-size="9" text-anchor="middle">River / Lake source</text>
    <text x="52" y="58" fill="#f8fafc" font-size="9" text-anchor="middle">+ Screening</text>
    <text x="52" y="72" fill="#64748b" font-size="8" text-anchor="middle">(removes twigs/rubbish)</text>
  </g>
  <path d="M 130 87 L 155 87" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#wtArrow)" />

  <!-- Step 2: Sedimentation -->
  <g transform="translate(155, 45)">
    <rect width="105" height="85" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
    <text x="52" y="22" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">2. Sedimentation</text>
    <text x="52" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">Water sits still;</text>
    <text x="52" y="56" fill="#f8fafc" font-size="9" text-anchor="middle">coarse sand &amp; mud</text>
    <text x="52" y="70" fill="#fca5a5" font-size="8" text-anchor="middle">settles to bottom</text>
  </g>
  <path d="M 260 87 L 285 87" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#wtArrow)" />

  <!-- Step 3: Coagulation -->
  <g transform="translate(285, 45)">
    <rect width="105" height="85" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
    <text x="52" y="22" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">3. Coagulation</text>
    <text x="52" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">Add iron(III) sulfate</text>
    <text x="52" y="56" fill="#f8fafc" font-size="9" text-anchor="middle">tiny clay particles</text>
    <text x="52" y="70" fill="#e9d5ff" font-size="8" text-anchor="middle">clump into flocs</text>
  </g>
  <path d="M 390 87 L 415 87" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#wtArrow)" />

  <!-- Step 4: Filtration -->
  <g transform="translate(415, 45)">
    <rect width="105" height="85" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5" />
    <text x="52" y="22" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">4. Sand Filters</text>
    <text x="52" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">Beds of fine sand</text>
    <text x="52" y="56" fill="#f8fafc" font-size="9" text-anchor="middle">removes small solids</text>
    <text x="52" y="70" fill="#86efac" font-size="8" text-anchor="middle">&amp; reduces bacteria</text>
  </g>
  <path d="M 520 87 L 545 87" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#wtArrow)" />

  <!-- Step 5: Chlorination / Disinfection -->
  <g transform="translate(545, 45)">
    <rect width="110" height="85" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.5" />
    <text x="55" y="22" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">5. Chlorination</text>
    <text x="55" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">Chlorine added (or</text>
    <text x="55" y="56" fill="#f8fafc" font-size="9" text-anchor="middle">ozone / UV light) to</text>
    <text x="55" y="70" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">KILL BACTERIA</text>
  </g>

  <!-- Carbon Filtration & Storage at Bottom -->
  <g transform="translate(100, 150)">
    <rect width="480" height="110" rx="12" fill="#0f172a" stroke="#475569" stroke-width="1.5" />
    <text x="240" y="25" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Post-Treatment &amp; Distribution</text>
    <text x="240" y="48" fill="#f8fafc" font-size="11" text-anchor="middle">• **Activated Carbon:** Removes unpleasant tastes and odours from decaying organic matter.</text>
    <text x="240" y="70" fill="#94a3b8" font-size="11" text-anchor="middle">• **Fluoridation (optional):** Small amounts of fluoride added to prevent tooth decay.</text>
    <text x="240" y="94" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Treated tap water leaves waterworks containing safe residual chlorine and dissolved minerals!</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "water-tests-and-purity",
    title: "Tests for Water & Physical Purity Criteria",
    type: "text",
    content: `
### 💧 Water: The Life-Sustaining Substance

Water covers about $70\%$ of the Earth's surface, but the vast majority is salty ocean water that cannot be drunk directly.

> [!IMPORTANT]
> ### 🔬 Testing Water: Physical Purity vs. Chemical Presence
> In Cambridge examinations, you must distinguish between **testing for purity** and **testing for presence**:
> 
> 1. **Physical Test for PURITY:**
>    * Pure water has fixed, sharp physical constants at standard pressure ($1\text{ atm}$):
>      * **Melting/Freezing Point:** Exactly **$0^\circ\text{C}$**.
>      * **Boiling Point:** Exactly **$100^\circ\text{C}$**.
>    * If impurities (like dissolved salts) are present: the boiling point increases ($> 100^\circ\text{C}$) and the freezing point depresses ($< 0^\circ\text{C}$).
> 
> 2. **Chemical Tests for the PRESENCE of Water:**
>    * **Test A (Anhydrous Copper(II) Sulfate):**
>      $$\text{CuSO}_4\text{(s)} + 5\text{H}_2\text{O(l)} \rightleftharpoons \text{CuSO}_4\cdot 5\text{H}_2\text{O(s)}$$
>      * Anhydrous (dry): **White** solid $\rightarrow$ Turns **Blue** when water is added.
>      * The reverse reaction (heating blue hydrated crystals) turns it back to white!
>    * **Test B (Anhydrous Cobalt(II) Chloride):**
>      $$\text{CoCl}_2\text{(s)} + 6\text{H}_2\text{O(l)} \rightleftharpoons \text{CoCl}_2\cdot 6\text{H}_2\text{O(s)}$$
>      * Anhydrous (dry): **Blue** paper $\rightarrow$ Turns **Pink** when water is added.
> 
> > [!CAUTION]
> > ### ⚠️ Crucial Exam Distinction
> > Anhydrous copper(II) sulfate turning blue proves only that **water is present** — it does **NOT** prove that the water is pure! Contaminated salty water or sea water will also turn white copper(II) sulfate blue. Only sharp boiling at $100^\circ\text{C}$ confirms purity.
`,
    keyPoints: [
      "Pure water boils sharply at 100 °C and freezes at 0 °C.",
      "Anhydrous copper(II) sulfate turns from white to blue in the presence of water.",
      "Anhydrous cobalt(II) chloride turns from blue to pink in the presence of water.",
      "Chemical tests prove the presence of water, but only physical tests (boiling/freezing points) prove purity."
    ]
  },
  {
    id: "water-treatment-and-eutrophication",
    title: "Substances in Water & Waterworks Treatment",
    type: "text",
    content: `
### 🌊 Substances in Natural Water & Domestic Water Treatment

Water from natural sources (rivers, underground aquifers) contains dissolved substances, both beneficial and harmful:

> [!NOTE]
> ### 📋 Substances Present in Natural Water
> 1. **Beneficial Substances:**
>    * **Dissolved Oxygen:** From air diffusion and aquatic photosynthesis, vital for fish respiration.
>    * **Essential Minerals:** Trace dissolved ions ($\text{Na}^+, \text{K}^+, \text{Ca}^{2+}, \text{Mg}^{2+}, \text{Fe}^{2+}, \text{Zn}^{2+}$) needed for human bone and teeth health.
> 
> 2. **Harmful Pollutants:**
>    * **Heavy Metal Compounds ($\text{Pb}, \text{Hg}$):** From industrial dumping and mining; toxic to human nervous system.
>    * **Untreated Sewage:** Carries pathogenic bacteria and harmful microbes causing diseases like cholera and typhoid.
>    * **Nitrates & Phosphates:** From synthetic agricultural fertilisers and detergents, causing **eutrophication**!

> [!WARNING]
> ### 🛑 Eutrophication: Step-by-Step Mechanism
> * **Definition:** Enrichment of an aquatic environment with excessive nutrient minerals (nitrates and phosphates).
> * **Step 1:** Fertilisers leach into rivers and lakes.
> * **Step 2:** Rapid growth of algae on the surface (**algal bloom**), blocking sunlight.
> * **Step 3:** Submerged aquatic plants die due to lack of photosynthesis.
> * **Step 4:** Aerobic bacteria multiply rapidly and decompose the dead plant matter, consuming dissolved oxygen.
> * **Step 5:** Extreme **deoxygenation of water** causes fish and other aquatic animals to suffocate and die!

> ${svgToken(waterTreatmentSvg)}

> [!IMPORTANT]
> ### 🚰 Stages of Domestic Water Treatment
> 1. **Screening:** Removes floating debris, leaves, and twigs.
> 2. **Sedimentation:** Water is allowed to stand in large tanks; heavy grit, sand, and mud settle to the bottom.
> 3. **Coagulation:** A coagulant like **iron(III) sulfate** or aluminium sulfate is added to make fine colloidal clay particles clump together into larger flocs.
> 4. **Filtration:** Water is passed through beds of **fine sand and gravel** to remove tiny insoluble suspended solids.
> 5. **Chlorination (Sterilisation):** **Chlorine gas** is bubbled through the water to **kill bacteria and harmful microbes**. (Alternatively, ozone or UV light is used).
> 6. **Activated Carbon Filtration:** Adsorbs traces of organic compounds to eliminate bad tastes and odours.
`,
    keyPoints: [
      "Eutrophication is caused by fertiliser runoff (nitrates/phosphates) leading to algal blooms and deoxygenation of water.",
      "Filtration through sand beds removes solid insoluble impurities.",
      "Chlorination kills bacteria and harmful microorganisms."
    ]
  }
];
