import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Reversible Reactions & Chemical Equilibrium";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Reversible Reactions, Dynamic Equilibrium & Le Chatelier's Principle
This lesson covers reversible reactions, hydration and dehydration of copper(II) sulfate and cobalt(II) chloride (chemical tests for water), dynamic equilibrium criteria, Le Chatelier's principle, and real-world industrial applications (Haber Process & Contact Process).
`;

// Compact SVG Diagram: Dynamic Equilibrium & Tests for Water (650x260)
const equilibriumSvg = `
<svg viewBox="0 0 650 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgEquilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="arrowFwd" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="arrowRev" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
    </marker>
  </defs>

  <rect width="650" height="260" fill="url(#bgEquilGrad)" stroke="#1e293b" stroke-width="2" rx="14" />
  <text x="325" y="24" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Dynamic Equilibrium &amp; Reversible Tests for Water</text>

  <!-- Left Card: Dynamic Equilibrium Concept -->
  <g transform="translate(25, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />
    <text x="142" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. Dynamic Chemical Equilibrium</text>

    <!-- Equilibrium Rates Box -->
    <rect x="25" y="45" width="235" height="42" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="142" y="62" fill="#e2e8f0" font-size="9.5" font-weight="bold" text-anchor="middle">Forward Rate = Backward Rate</text>
    <line x1="60" y1="74" x2="130" y2="74" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowFwd)" />
    <line x1="225" y1="74" x2="155" y2="74" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrowRev)" />

    <!-- 4 Essential Cambridge Criteria -->
    <text x="20" y="112" fill="#93c5fd" font-size="8.5" font-weight="bold">• Only occurs in a CLOSED system</text>
    <text x="20" y="132" fill="#cbd5e1" font-size="8.5">• Forward and reverse rates are EQUAL</text>
    <text x="20" y="152" fill="#cbd5e1" font-size="8.5">• Concentrations of reactants &amp; products stay CONSTANT</text>
    <text x="20" y="172" fill="#cbd5e1" font-size="8.5">• Reaction NEVER stops (microscopically dynamic)</text>
    <text x="20" y="190" fill="#94a3b8" font-size="8">• Macroscopic properties (color, pressure) do not change</text>
  </g>

  <!-- Right Card: Chemical Tests for Water (Reversible Hydration) -->
  <g transform="translate(340, 42)">
    <rect width="285" height="198" rx="10" fill="#0f172a" stroke="#ec4899" stroke-width="1.2" />
    <text x="142" y="22" fill="#f472b6" font-size="11" font-weight="bold" text-anchor="middle">2. Reversible Chemical Tests for Water</text>

    <!-- Test A: Copper(II) Sulfate -->
    <rect x="15" y="45" width="255" height="66" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="142" y="60" fill="#38bdf8" font-size="9.5" font-weight="bold" text-anchor="middle">Copper(II) Sulfate (CuSO₄)</text>
    <text x="25" y="78" fill="#f8fafc" font-size="8.5">Anhydrous (White) + 5H₂O ⇌ Hydrated (Blue)</text>
    <text x="25" y="94" fill="#a5b4fc" font-size="8">• Forward (+water): turns from WHITE to BLUE</text>
    <text x="25" y="106" fill="#fb7185" font-size="8">• Reverse (+heat): turns from BLUE to WHITE</text>

    <!-- Test B: Cobalt(II) Chloride -->
    <rect x="15" y="120" width="255" height="66" rx="6" fill="#1e293b" stroke="#334155" />
    <text x="142" y="135" fill="#f472b6" font-size="9.5" font-weight="bold" text-anchor="middle">Cobalt(II) Chloride (CoCl₂)</text>
    <text x="25" y="153" fill="#f8fafc" font-size="8.5">Anhydrous (Blue) + 6H₂O ⇌ Hydrated (Pink)</text>
    <text x="25" y="169" fill="#f472b6" font-size="8">• Forward (+water): turns from BLUE to PINK</text>
    <text x="25" y="181" fill="#38bdf8" font-size="8">• Reverse (+heat): turns from PINK to BLUE</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: 'ci-u6-l4-part1',
    title: 'Reversible Reactions & Tests for Water',
    type: 'text',
    content: `
> [!NOTE]
> ### 🔄 Reversible Reactions
> A **reversible reaction** is a reaction that can proceed in **both forward and backward directions**, represented by the equilibrium symbol $\\\\rightleftharpoons$:
> $$\\text{Reactants} \\\\rightleftharpoons \\\\text{Products}$$
>
> If the forward reaction is **exothermic**, the reverse reaction is **endothermic** by the exact same numerical amount of energy.

> [!IMPORTANT]
> ### 💧 Two Chemical Tests for the Presence of Water
> Two classic reversible dehydration-hydration reactions are standard chemical tests for water in the Cambridge syllabus:
> 
> 1. **Copper(II) Sulfate Test:**
>    $$\\\\text{CuSO}_4\\\\cdot 5\\\\text{H}_2\\\\text{O(s)} \\\\xrightleftharpoons{\\\\text{heat}} \\\\text{CuSO}_4\\\\text{(s)} + 5\\\\text{H}_2\\\\text{O(l)}$$
>    * **Hydrated copper(II) sulfate:** Blue crystals containing water of crystallisation.
>    * **Anhydrous copper(II) sulfate:** White powder.
>    * **Test for water:** Adding water to white anhydrous copper(II) sulfate turns it **blue** (and releases heat). Heating hydrated blue copper(II) sulfate turns it back to **white** anhydrous powder and releases steam.
>
> 2. **Cobalt(II) Chloride Paper Test:**
>    $$\\\\text{CoCl}_2\\\\cdot 6\\\\text{H}_2\\\\text{O(s)} \\\\xrightleftharpoons{\\\\text{heat}} \\\\text{CoCl}_2\\\\text{(s)} + 6\\\\text{H}_2\\\\text{O(l)}$$
>    * **Hydrated cobalt(II) chloride:** Pink.
>    * **Anhydrous cobalt(II) chloride:** Blue.
>    * **Test for water:** Cobalt chloride paper turns from **blue to pink** when exposed to water or water vapour.

> [!BOX]
> ### 🧪 Visual Overview: Dynamic Equilibrium & Water Tests
>
> ${svgToken(equilibriumSvg)}
    `,
    keyPoints: [
      "Forward and reverse reactions have equal and opposite ΔH values.",
      "Anhydrous CuSO₄: White → Blue on adding water.",
      "Anhydrous CoCl₂: Blue → Pink on adding water.",
      "Water of crystallisation refers to water chemically bonded into crystal lattices."
    ]
  },
  {
    id: 'ci-u6-l4-part2',
    title: 'Dynamic Equilibrium & Le Chatelier\'s Principle',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚖️ What is Dynamic Equilibrium?
> A reversible reaction reaches **dynamic equilibrium** when:
> 1. It occurs in a **closed system** (no reactants or products can enter or escape).
> 2. The **rate of the forward reaction equals the rate of the reverse reaction**.
> 3. The **concentrations of reactants and products remain constant**.
> 4. Macroscopic properties (color, pressure, temperature) show no further visible change, although the reaction continues microscopically at equal speeds in both directions.

> [!IMPORTANT]
> ### 📐 Le Chatelier's Principle
> *When a system at equilibrium is subjected to an external change in conditions (temperature, pressure, concentration), the system shifts its position of equilibrium in the direction that **opposes (cancels out) the change**.*
>
> 1. **Effect of Temperature:**
>    * **Increasing temperature:** Shifts equilibrium in the **endothermic ($+\\\\Delta H$)** direction to absorb excess heat.
>    * **Decreasing temperature:** Shifts equilibrium in the **exothermic ($-\\\\Delta H$)** direction to release heat.
>
> 2. **Effect of Pressure (gases only):**
>    * **Increasing pressure:** Shifts equilibrium to the side with **fewer moles of gas** (lower volume) to reduce pressure.
>    * **Decreasing pressure:** Shifts equilibrium to the side with **more moles of gas** to restore pressure.
>    * If both sides have equal moles of gas, changing pressure has **no effect** on equilibrium position.
>
> 3. **Effect of Concentration:**
>    * Adding more reactant shifts equilibrium **forward (to the right)** to consume added reactant and make more product.
>    * Removing a product continuously shifts equilibrium **forward (to the right)** to replace the removed product.
>
> 4. **Effect of a Catalyst:**
>    * A catalyst increases the speed of **both forward and backward reactions equally**.
>    * Therefore, a catalyst **does NOT change the position of equilibrium or yield of products**; it only enables equilibrium to be reached **faster**.
    `,
    keyPoints: [
      "Dynamic equilibrium requires a closed system: forward rate = backward rate.",
      "Heating favors the endothermic direction; cooling favors the exothermic direction.",
      "Increasing pressure shifts equilibrium to the side with fewer gas moles.",
      "Catalysts do NOT shift equilibrium or alter yield; they only speed up reaching equilibrium."
    ]
  },
  {
    id: 'ci-u6-l4-part3',
    title: 'Industrial Applications: Haber & Contact Processes',
    type: 'text',
    content: `
> [!TIP]
> ### 🏭 1. The Haber Process (Ammonia Manufacture)
> $$N_2(g) + 3H_2(g) \\\\rightleftharpoons 2NH_3(g) \\\\quad \\\\Delta H = -92\\\\text{ kJ/mol}$$
> * **Raw Materials:**
>   * Nitrogen ($N_2$): Obtained from the fractional distillation of liquid air.
>   * Hydrogen ($H_2$): Obtained from reacting methane (natural gas) with steam (steam reforming) or cracking hydrocarbons.
> * **Compromise Conditions:**
>   * **Temperature: $450^\\\\circ\\\\text{C}$ (Compromise):** Forward reaction is exothermic, so low temp favors high yield, but at low temp the rate is too slow. $450^\\\\circ\\\\text{C}$ gives an acceptable rate with reasonable yield.
>   * **Pressure: $200\\\\text{ atm}$ ($20,000\\\\text{ kPa}$):** Higher pressure favors the product ($4\\\\text{ moles gas} \\\\rightarrow 2\\\\text{ moles gas}$), but excessively high pressure requires extremely thick-walled pipes, heavy pumps, and expensive electricity.
>   * **Catalyst: Finely divided Iron ($\\text{Fe}$):** Speeds up reaction rate without affecting yield.
>   * **Condensation:** Ammonia gas is liquefied by cooling and removed continuously, shifting equilibrium to the right. Unreacted $N_2$ and $H_2$ are recycled.

> [!TIP]
> ### 🏭 2. The Contact Process (Sulfuric Acid Manufacture)
> Stage 2 is the reversible conversion of sulfur dioxide into sulfur trioxide:
> $$2SO_2(g) + O_2(g) \\\\rightleftharpoons 2SO_3(g) \\\\quad \\\\Delta H = -196\\\\text{ kJ/mol}$$
> * **Conditions:**
>   * **Catalyst:** Vanadium(V) oxide ($\\text{V}_2\\\\text{O}_5$).
>   * **Temperature:** $450^\\\\circ\\\\text{C}$ (optimum compromise; catalyst is ineffective below $400^\\\\circ\\\\text{C}$).
>   * **Pressure:** $1-2\\\\text{ atm}$ (ambient / slightly above atmospheric pressure, because yield is already $>98\\\\%$ at $2\\\\text{ atm}$, avoiding expensive high-pressure plants).
> * **Conversion to Oleum (Safety step):**
>   * $\\\\text{SO}_3$ is dissolved in concentrated $H_2SO_4$ to form **Oleum** ($H_2S_2O_7$):
>     $$\\\\text{SO}_3(g) + H_2SO_4(l) \\\\rightarrow H_2S_2O_7(l)$$
>   * Dissolving $\\\\text{SO}_3$ directly in water is dangerously exothermic, creating uncontrollable mist of sulfuric acid droplets.
>   * Oleum is then diluted safely with water to produce concentrated $H_2SO_4$:
>     $$H_2S_2O_7(l) + H_2O(l) \\\\rightarrow 2H_2SO_4(aq)$$
> [!IMPORTANT]
> ### 🛢️ Industrial Uses of Sulfuric Acid (H₂SO₄)
> Sulfuric acid is one of the most vital industrial chemicals in the world. Key applications examined in Cambridge:
> 1. **Manufacture of Fertilizers:**
>    * Particularly **ammonium sulfate**, $(NH_4)_2SO_4$, by neutralisation with ammonia.
> 2. **Manufacture of Chemicals:**
>    * Synthesis of phosphoric acid ($H_3PO_4$), hydrochloric acid ($HCl$), nitric acid ($HNO_3$), and various sulfate salts.
> 3. **Paints, Pigments & Dyes:**
>    * Used extensively in titanium dioxide ($TiO_2$) pigment manufacturing for white paints.
> 4. **Petroleum Refining & Metal Processing:**
>    * Pickling steel and cleaning metal surfaces before galvanising or electroplating.
> 5. **Electrolyte in Batteries:**
>    * Acts as the liquid acid electrolyte in automotive **lead-acid storage batteries**.
> 6. **Bleaching & Fibers:**
>    * Bleaching wood pulp in paper making and producing synthetic fibers (Rayon), soaps, and detergents.

> [!EXAMPLE]
> #### 📝 Cambridge Exam Worked Example: Haber Process Optimization
> **Question:** In the Haber process for the manufacture of ammonia:
> $$N_2(g) + 3H_2(g) \\\\rightleftharpoons 2NH_3(g) \\\\quad \\\\Delta H = -92\\\\text{ kJ/mol}$$
> Explain why a pressure higher than $200\\\\text{ atm}$ is NOT used industrially, even though Le Chatelier's principle predicts a higher yield of ammonia at higher pressures.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Economic & Safety Analysis:**
> >    * Operating at extremely high pressures (e.g. $400-1000\\\\text{ atm}$) requires specialized, ultra-thick steel reaction vessels, reinforced pipes, and extremely powerful compressors that consume huge amounts of electrical energy.
> >    * Building and maintaining such high-pressure equipment is prohibitively expensive.
> > 2. **Safety Hazards:**
> >    * Extremely high pressure presents serious risks of explosive container rupture or catastrophic leaks of flammable hydrogen and toxic ammonia gas.
> > 3. **Compromise Value:**
> >    * A compromise pressure of $200\\\\text{ atm}$ gives an economic balance between acceptable percentage yield, rapid reaction rate, plant construction costs, and industrial safety.
    `,
    keyPoints: [
      "Haber Process conditions: 450°C, 200 atm, Iron catalyst.",
      "Contact Process stage 2: 450°C, 1-2 atm, V₂O₅ catalyst.",
      "SO₃ is dissolved in concentrated H₂SO₄ to form oleum to prevent dangerous acid mist.",
      "Sulfuric acid is mainly used for fertilizers (ammonium sulfate), car battery electrolyte, and paints/pigments."
    ]
  }
];


