import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Identification of Ions & Gases (Qualitative Analysis)";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Identification of Ions and Gases (Qualitative Analysis)
This lesson covers standard Cambridge qualitative analysis tests: identification of gases (carbon dioxide, ammonia, chlorine, hydrogen, oxygen, and sulfur dioxide), flame tests, tests for aqueous cations and anions, redox indicator color changes (acidified potassium manganate(VII) and potassium dichromate(VI)), and chemical/physical tests for water.
`;

const gasTestsSvg = `
<svg viewBox="0 0 680 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gasBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
  </defs>

  <rect width="680" height="340" fill="url(#gasBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="24" fill="#f8fafc" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Standard Cambridge Gas Identification Summary</text>

  <!-- Gas 1: CO2 -->
  <g transform="translate(25, 45)">
    <rect width="195" height="130" rx="8" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />
    <rect x="0" y="0" width="195" height="28" rx="8" fill="#334155" fill-opacity="0.3" />
    <text x="97" y="19" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Carbon Dioxide (CO₂)</text>
    <text x="10" y="48" fill="#94a3b8" font-size="10">Test:</text>
    <text x="10" y="63" fill="#f8fafc" font-size="10.5">Bubble through limewater</text>
    <text x="10" y="85" fill="#94a3b8" font-size="10">Result:</text>
    <text x="10" y="100" fill="#38bdf8" font-size="10.5" font-weight="bold">Turns milky / cloudy</text>
    <text x="10" y="116" fill="#94a3b8" font-size="9">(forms white ppt of CaCO₃)</text>
  </g>

  <!-- Gas 2: NH3 -->
  <g transform="translate(242, 45)">
    <rect width="195" height="130" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5" />
    <rect x="0" y="0" width="195" height="28" rx="8" fill="#1d4ed8" fill-opacity="0.3" />
    <text x="97" y="19" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">Ammonia (NH₃)</text>
    <text x="10" y="48" fill="#94a3b8" font-size="10">Test &amp; Properties:</text>
    <text x="10" y="63" fill="#f8fafc" font-size="10.5">Damp RED litmus paper</text>
    <text x="10" y="85" fill="#94a3b8" font-size="10">Result:</text>
    <text x="10" y="100" fill="#60a5fa" font-size="10.5" font-weight="bold">Turns BLUE</text>
    <text x="10" y="116" fill="#94a3b8" font-size="9">Pungent choking alkaline gas</text>
  </g>

  <!-- Gas 3: Cl2 -->
  <g transform="translate(460, 45)">
    <rect width="195" height="130" rx="8" fill="#0f172a" stroke="#eab308" stroke-width="1.5" />
    <rect x="0" y="0" width="195" height="28" rx="8" fill="#ca8a04" fill-opacity="0.3" />
    <text x="97" y="19" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">Chlorine (Cl₂)</text>
    <text x="10" y="48" fill="#94a3b8" font-size="10">Test &amp; Appearance:</text>
    <text x="10" y="63" fill="#f8fafc" font-size="10.5">Damp litmus paper</text>
    <text x="10" y="85" fill="#94a3b8" font-size="10">Result:</text>
    <text x="10" y="100" fill="#fde047" font-size="10.5" font-weight="bold">Bleached white</text>
    <text x="10" y="116" fill="#94a3b8" font-size="9">Yellow-green toxic gas (fume cupb.)</text>
  </g>

  <!-- Gas 4: H2 -->
  <g transform="translate(25, 190)">
    <rect width="195" height="130" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
    <rect x="0" y="0" width="195" height="28" rx="8" fill="#059669" fill-opacity="0.3" />
    <text x="97" y="19" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Hydrogen (H₂)</text>
    <text x="10" y="48" fill="#94a3b8" font-size="10">Test:</text>
    <text x="10" y="63" fill="#f8fafc" font-size="10.5">Lighted wooden splint</text>
    <text x="10" y="85" fill="#94a3b8" font-size="10">Result:</text>
    <text x="10" y="100" fill="#34d399" font-size="10.5" font-weight="bold">Burns with a "squeaky pop"</text>
    <text x="10" y="116" fill="#94a3b8" font-size="9">Lightest colourless gas</text>
  </g>

  <!-- Gas 5: O2 -->
  <g transform="translate(242, 190)">
    <rect width="195" height="130" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="1.5" />
    <rect x="0" y="0" width="195" height="28" rx="8" fill="#dc2626" fill-opacity="0.3" />
    <text x="97" y="19" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Oxygen (O₂)</text>
    <text x="10" y="48" fill="#94a3b8" font-size="10">Test:</text>
    <text x="10" y="63" fill="#f8fafc" font-size="10.5">Glowing wooden splint</text>
    <text x="10" y="85" fill="#94a3b8" font-size="10">Result:</text>
    <text x="10" y="100" fill="#f87171" font-size="10.5" font-weight="bold">Relights glowing splint</text>
    <text x="10" y="116" fill="#94a3b8" font-size="9">Supports vigorous combustion</text>
  </g>

  <!-- Gas 6: SO2 -->
  <g transform="translate(460, 190)">
    <rect width="195" height="130" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
    <rect x="0" y="0" width="195" height="28" rx="8" fill="#7e22ce" fill-opacity="0.3" />
    <text x="97" y="19" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">Sulfur Dioxide (SO₂)</text>
    <text x="10" y="48" fill="#94a3b8" font-size="10">Test (Acidified KMnO₄):</text>
    <text x="10" y="63" fill="#f8fafc" font-size="10.5">Purple acidified KMnO₄(aq)</text>
    <text x="10" y="85" fill="#94a3b8" font-size="10">Result:</text>
    <text x="10" y="100" fill="#c084fc" font-size="10.5" font-weight="bold">Purple to COLOURLESS</text>
    <text x="10" y="116" fill="#94a3b8" font-size="9">Or K₂Cr₂O₇: orange to green</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "cie-igcse-unit-12-lesson-3-part-1",
    title: "Identification of Common Gases",
    type: "text",
    content: `
### 💨 Tests for Gases in Cambridge IGCSE Chemistry

The syllabus specifies distinctive identification tests for six key laboratory gases.

> [!BOX]
> ### 📋 Cambridge Standard Gas Testing Table
> 
> | Gas | Formula & Nature | Test Method | Positive Result |
> | :--- | :--- | :--- | :--- |
> | **Carbon Dioxide** | $\\text{CO}_2$ (Colourless, acidic) | Bubble through aqueous calcium hydroxide (**limewater**) | Limewater turns **cloudy / milky** (white $\\text{CaCO}_3$ precipitate) |
> | **Ammonia** | $\\text{NH}_3$ (Colourless, pungent, alkaline) | Hold **damp red litmus paper** at the mouth of the tube | Turns **blue** (the only alkaline gas tested) |
> | **Chlorine** | $\\text{Cl}_2$ (Pale yellow-green, toxic) | Hold **damp litmus paper** in a fume cupboard | Turns red momentarily, then is **bleached white** |
> | **Hydrogen** | $\\text{H}_2$ (Colourless, odourless, flammable) | Hold a **lighted wooden splint** to the mouth of the tube | Burns with a distinctive **squeaky pop** |
> | **Oxygen** | $\\text{O}_2$ (Colourless, odourless) | Insert a **glowing wooden splint** into the tube | **Relights** the glowing splint |
> | **Sulfur Dioxide** | $\\text{SO}_2$ (Colourless, pungent, acidic, reducing) | Bubble through acidified aqueous potassium manganate(VII) | Purple solution turns **colourless** |

${svgToken(gasTestsSvg)}

> [!TIP]
> ### ⚠️ Key Practical Precautions for Gas Tests
> 1. **Damp Litmus Paper:** Litmus paper must be **damp** when testing ammonia or chlorine. Dry gas molecules cannot dissolve or dissociate into ions without moisture; water allows $\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$ to take place.
> 2. **Splints:**
>    * Lighted splint has an active flame (used for $\\text{H}_2$).
>    * Glowing splint is glowing red without an active flame (used for $\\text{O}_2$).
`,
    keyPoints: [
      "Carbon dioxide turns limewater milky due to the formation of calcium carbonate precipitate.",
      "Ammonia is the only alkaline gas tested and turns damp red litmus paper blue.",
      "Chlorine gas bleaches damp litmus paper white.",
      "Hydrogen pops with a lighted splint; oxygen relights a glowing splint.",
      "Sulfur dioxide decolourises purple acidified potassium manganate(VII)."
    ]
  },
  {
    id: "cie-igcse-unit-12-lesson-3-part-2",
    title: "Tests for Water & Oxidising Agents",
    type: "text",
    content: `
### 💧 Chemical & Physical Identification of Water

Cambridge exams strictly differentiate between testing for the **presence of water** (chemical test) and confirming the **purity of water** (physical test).

> [!NOTE]
> ### 🧪 Chemical Tests for the Presence of Water
> 1. **Anhydrous Copper(II) Sulfate:**
>    * Anhydrous $\\text{CuSO}_4$ is a **white** powder.
>    * When water is added, it turns into hydrated copper(II) sulfate, which is **blue**:
>    $$\\text{CuSO}_4\\text{(s) [white]} + 5\\text{H}_2\\text{O(l)} \\rightarrow \\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O(s) [blue]}$$
> 2. **Anhydrous Cobalt(II) Chloride:**
>    * Dry cobalt(II) chloride paper is **blue**.
>    * When exposed to water or moisture, it turns **pink**:
>    $$\\text{CoCl}_2\\text{(s) [blue]} + 6\\text{H}_2\\text{O(l)} \\rightarrow \\text{CoCl}_2\\cdot 6\\text{H}_2\\text{O(s) [pink]}$$
> * *Crucial Note:* These tests confirm that water is present, but they do NOT prove the water is pure!

> [!IMPORTANT]
> ### 🌡️ Physical Test for Pure Water
> To prove that water is **pure**, you must measure its physical constants:
> * Pure water boils at exactly **$100^\\circ\\text{C}$** at standard atmospheric pressure ($1\\text{ atm}$).
> * Pure water freezes (melts) at exactly **$0^\\circ\\text{C}$**.
> * If water contains dissolved impurities (like salts), its boiling point increases above $100^\\circ\\text{C}$ and its freezing point decreases below $0^\\circ\\text{C}$.

> [!BOX]
> ### 🌈 Colour Changes of Common Oxidising Agents
> When tested in redox reactions or with reducing gases (like $\\text{SO}_2$):
> 1. **Acidified Potassium Manganate(VII) ($\\text{KMnO}_4 / \\text{H}^+$):**
>    * Colour change: **Purple $\\rightarrow$ Colourless**
>    * Half-equation: $\\text{MnO}_4^- + 8\\text{H}^+ + 5\\text{e}^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$
> 2. **Acidified Potassium Dichromate(VI) ($\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}^+$):**
>    * Colour change: **Orange $\\rightarrow$ Green**
>    * Half-equation: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{e}^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$
`,
    keyPoints: [
      "Chemical tests for water: anhydrous copper(II) sulfate turns white to blue; anhydrous cobalt(II) chloride paper turns blue to pink.",
      "Physical purity test for water: boils at exactly 100 °C and freezes at 0 °C.",
      "Acidified KMnO4 changes from purple to colourless in the presence of reducing agents (e.g. SO2).",
      "Acidified K2Cr2O7 changes from orange to green in the presence of reducing agents."
    ]
  },
  {
    id: "cie-igcse-unit-12-lesson-3-part-3",
    title: "Tests for Anions (Halides, Sulfate, Carbonate, Nitrate)",
    type: "text",
    content: `
### 🧪 Qualitative Analysis: Tests for Aqueous Anions

Anions are identified by characteristic precipitation or gas evolution reactions.

> [!NOTE]
> ### 🔍 1. Carbonate ($\\text{CO}_3^{2-}$)
> * **Test:** Add dilute hydrochloric acid (or nitric acid).
> * **Observation:** Rapid effervescence (bubbling); the colourless gas produced turns **limewater cloudy/milky** (confirms $\\text{CO}_2$).
> * **Ionic Equation:** $\\text{CO}_3^{2-}\\text{(aq)} + 2\\text{H}^+\\text{(aq)} \\rightarrow \\text{CO}_2\\text{(g)} + \\text{H}_2\\text{O(l)}$

> [!IMPORTANT]
> ### ❄️ 2. Halide Ions ($\text{Cl}^-$, $\text{Br}^-$, $\text{I}^-$)
> * **Standard Test:** Acidify with dilute **nitric acid** ($\text{HNO}_3$), then add aqueous **silver nitrate** ($\text{AgNO}_3$).
> * **Why add dilute nitric acid first?** To react with and eliminate any interfering carbonate ($\text{CO}_3^{2-}$) or sulfite ($\text{SO}_3^{2-}$) ions which would otherwise form false white silver precipitates!
> * **Observations with Aqueous Silver Nitrate:**
>   * **Chloride ($\text{Cl}^-$):** Forms a **white** precipitate of silver chloride ($\text{AgCl}$).
>   * **Bromide ($\text{Br}^-$):** Forms a **cream (off-white)** precipitate of silver bromide ($\text{AgBr}$).
>   * **Iodide ($\text{I}^-$):** Forms a **yellow** precipitate of silver iodide ($\text{AgI}$).
> * **Alternative Halide Test (Aqueous Lead(II) Nitrate, $\text{Pb(NO}_3)_2$):**
>   * **$\text{Cl}^-$:** White ppt ($\text{PbCl}_2$)
>   * **$\text{Br}^-$:** Creamy / white ppt ($\text{PbBr}_2$)
>   * **$\text{I}^-$:** **Bright yellow** precipitate of lead(II) iodide ($\text{PbI}_2$)
> * **Effect of Sunlight on Silver Halides:**
>   * When test-tubes containing silver halides ($\text{AgCl}, \text{AgBr}, \text{AgI}$) are exposed to direct sunlight, the precipitates slowly turn **grey / violet**.
>   * *Reason:* Photochemical reduction of silver ions to solid silver metal: $2\text{AgX(s)} \rightarrow 2\text{Ag(s) [grey]} + \text{X}_2$ (in UV / light).

> [!BOX]
> ### 🛡️ 3. Sulfate ($\text{SO}_4^{2-}$), Sulfite ($\text{SO}_3^{2-}$), and Carbonate Stability
> * **Sulfate ($\text{SO}_4^{2-}$):**
>   * Acidify with dilute **nitric acid** (or $\text{HCl}$), then add aqueous **barium nitrate** (or $\text{BaCl}_2$).
>   * Observation: A dense **white precipitate** of barium sulfate ($\text{BaSO}_4$) forms, which is **insoluble in excess acid**.
> * **Sulfite ($\text{SO}_3^{2-}$):**
>   * Add aqueous barium nitrate: forms a white precipitate ($\text{BaSO}_3$) that **dissolves upon adding dilute acid**.
>   * Add acidified aqueous potassium manganate(VII) ($\text{KMnO}_4/\text{H}^+$): colour changes from **purple to colourless** as $\text{SO}_3^{2-}$ reduces it.
> * **Thermal Decomposition of Carbonates:**
>   1. $\text{CaCO}_3\text{(s)} \rightarrow \text{CaO(s)} + \text{CO}_2\text{(g)}$ (Limestone to quicklime, on strong heating)
>   2. Group 1 Carbonates (e.g. $\text{K}_2\text{CO}_3, \text{Na}_2\text{CO}_3$): **No reaction upon heating** with a Bunsen burner because potassium and sodium are highly reactive metals with exceptionally stable ionic lattices.

> [!TIP]
> ### 🌿 4. Nitrate ($\text{NO}_3^-$)
> * **Test:** Add aqueous sodium hydroxide ($\text{NaOH}$), then add aluminium foil (or Devarda's alloy) and warm gently.
> * **Observation:** Effervescence occurs; ammonia gas ($\text{NH}_3$) is produced, detected by its pungent choking smell and turning **damp red litmus paper blue**.
`,
    keyPoints: [
      "Carbonates produce CO2 gas (effervescence) when reacted with dilute acid.",
      "Halides: Cl⁻ gives white ppt (AgCl), Br⁻ gives cream ppt (AgBr), I⁻ gives yellow ppt (AgI) with acidified silver nitrate.",
      "Silver halides turn grey when exposed to sunlight due to photochemical reduction to silver metal.",
      "Sulfate forms white BaSO4 insoluble in excess acid; sulfite forms BaSO3 soluble in acid and decolourises purple KMnO4."
    ]
  },
  {
    id: "cie-igcse-unit-12-lesson-3-part-4",
    title: "Tests for Aqueous Cations, Flame Tests & Solubility Rules",
    type: "text",
    content: `
### 🧪 Qualitative Analysis: Metal Cations & Flame Tests

Metal ions in solution are identified using aqueous sodium hydroxide ($\text{NaOH}$) and aqueous ammonia ($\text{NH}_3$).

> [!NOTE]
> ### 🎨 Transition Metal & Metal Cation Precipitates
> Transition metal compounds are typically coloured, whereas group metals form white compounds:
> * **Copper(II) ($\text{Cu}^{2+}$):**
>   * With $\text{NaOH(aq)}$: **Light blue precipitate**; insoluble in excess $\text{NaOH}$.
>   * With $\text{NH}_3\text{(aq)}$: **Light blue precipitate**; dissolves in excess $\text{NH}_3$ to give a **deep royal blue solution** (complex ion $[\text{Cu(NH}_3)_4]^{2+}$).
> * **Iron(II) ($\text{Fe}^{2+}$):**
>   * With both reagents: **Green precipitate**; insoluble in excess; turns brown near the surface on standing in air due to oxidation to $\text{Fe}^{3+}$.
> * **Iron(III) ($\text{Fe}^{3+}$):**
>   * With both reagents: **Red-brown precipitate**; insoluble in excess.
> * **Chromium(III) ($\text{Cr}^{3+}$):**
>   * With $\text{NaOH(aq)}$: **Grey-green precipitate**; dissolves in excess to give a **dark green solution**.
>   * With $\text{NH}_3\text{(aq)}$: **Grey-green precipitate**; insoluble in excess.

> [!BOX]
> ### ⚪ Distinguishing White Precipitates: $\text{Al}^{3+}$, $\text{Zn}^{2+}$, $\text{Ca}^{2+}$
> 
> | Cation | Effect of adding $\text{NaOH(aq)}$ | Effect of adding $\text{NH}_3\text{(aq)}$ |
> | :--- | :--- | :--- |
> | **Aluminium ($\text{Al}^{3+}$)** | White precipitate; **dissolves in excess** to give colourless solution | White precipitate; **insoluble in excess** |
> | **Zinc ($\text{Zn}^{2+}$)** | White precipitate; **dissolves in excess** to give colourless solution | White precipitate; **dissolves in excess** to give colourless solution |
> | **Calcium ($\text{Ca}^{2+}$)** | White precipitate; **insoluble in excess** | **No precipitate** (or very slight faint white) |
> | **Ammonium ($\text{NH}_4^+$)** | Ammonia gas produced **on warming** (turns damp red litmus blue) | N/A |

> [!IMPORTANT]
> ### 🔥 Solid Flame (Metal Ion) Tests
> **Procedure:**
> 1. Clean a platinum or nichrome wire loop by dipping it into concentrated hydrochloric acid ($\text{HCl}$) and heating it in a hot flame until clean.
> 2. Dip the clean wire into the solid metal salt sample.
> 3. Hold the wire at the outer edge of the **blue (non-luminous) flame** of a hot Bunsen burner (air holes fully open) so the flame's natural color does not interfere.
> 
> | Group 1 Element & Ion | Flame Colour | Group 2 / Transition Element & Ion | Flame Colour |
> | :--- | :--- | :--- | :--- |
> | **Lithium ($\text{Li}^+$)** | **Red** | **Beryllium / Magnesium** | White / No flame color |
> | **Sodium ($\text{Na}^+$)** | **Yellow** | **Calcium ($\text{Ca}^{2+}$)** | **Brick-red (Orange-red)** |
> | **Potassium ($\text{K}^+$)** | **Lilac** | **Strontium ($\text{Sr}^{2+}$)** | **Scarlet red (deep red)** |
> | **Rubidium ($\text{Rb}^+$)** | **Purple red (dark)** | **Barium ($\text{Ba}^{2+}$)** | **Light green (apple green)** |
> | **Caesium ($\text{Cs}^+$)** | **Blue-violet** | **Copper(II) ($\text{Cu}^{2+}$)** | **Blue-green** |

> [!BOX]
> ### 📋 Cambridge Universal Salt Solubility Rules
> Understanding salt solubility is essential for designing qualitative tests and salt preparations:
> 
> | Soluble Salts | Insoluble Salts (Exceptions) |
> | :--- | :--- |
> | All Sodium ($\text{Na}^+$), Potassium ($\text{K}^+$), and Ammonium ($\text{NH}_4^+$) salts | *None (All soluble!)* |
> | All Nitrates ($\text{NO}_3^-$) and Ethanoates ($\text{CH}_3\text{COO}^-$) | *None (All soluble!)* |
> | Most Chlorides, Bromides, Iodides ($\text{Cl}^-, \text{Br}^-, \text{I}^-$) | Silver ($\text{Ag}^+$) and Lead(II) ($\text{Pb}^{2+}$) halides |
> | Most Sulfates ($\text{SO}_4^{2-}$) | Barium ($\text{Ba}^{2+}$), Calcium ($\text{Ca}^{2+}$), Lead(II) ($\text{Pb}^{2+}$) |
> | Carbonates: Only $\text{Na}^+, \text{K}^+, \text{NH}_4^+$ | All other metal carbonates ($\text{CaCO}_3, \text{CuCO}_3$, etc.) |
> | Hydroxides: Only $\text{Na}^+, \text{K}^+, \text{NH}_4^+$ (and sparingly $\text{Ca(OH)}_2, \text{Ba(OH)}_2$) | All other metal hydroxides ($\text{Fe(OH)}_2, \text{Fe(OH)}_3, \text{Cu(OH)}_2, \text{Al(OH)}_3$) |
`,
    keyPoints: [
      "Cu²⁺ forms a light blue ppt that dissolves in excess NH3 to give a deep blue solution.",
      "Fe²⁺ forms a green ppt turning brown in air; Fe³⁺ forms a red-brown ppt.",
      "Al³⁺ and Zn²⁺ both dissolve in excess NaOH; only Zn²⁺ dissolves in excess NH3.",
      "Flame colours: Li⁺ red, Na⁺ yellow, K⁺ lilac, Ca²⁺ brick-red, Ba²⁺ light-green, Cu²⁺ blue-green.",
      "All nitrates, Group 1, and ammonium salts are soluble in water."
    ]
  }
];
