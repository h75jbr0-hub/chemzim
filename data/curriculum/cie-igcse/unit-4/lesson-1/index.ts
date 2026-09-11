import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Principles of Electrolysis & Molten Electrolytes";
export const lessonNumber = 1;

export const theoryMarkdown = `
## Principles of Electrolysis & Molten Electrolytes
This lesson covers the core definitions of electrochemistry, ionic conduction, electrode polarity, and the decomposition of molten binary ionic compounds (such as molten lead(II) bromide and molten silver iodide) in accordance with Cambridge IGCSE Chemistry standards.
`;

const moltenElectrolysisSvg = `
<svg viewBox="0 0 680 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cellBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="arrowCyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
    <marker id="arrowAmber" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
    </marker>
  </defs>

  <rect width="680" height="320" fill="url(#cellBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="340" y="26" fill="#f8fafc" font-size="15" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Electrolysis of Molten Lead(II) Bromide (PbBr₂)</text>

  <!-- Battery & Circuit at top -->
  <g transform="translate(240, 42)">
    <!-- Battery symbol -->
    <line x1="80" y1="15" x2="80" y2="35" stroke="#f43f5e" stroke-width="3" />
    <text x="80" y="10" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">+</text>
    <line x1="95" y1="20" x2="95" y2="30" stroke="#94a3b8" stroke-width="2" />
    <line x1="105" y1="15" x2="105" y2="35" stroke="#f43f5e" stroke-width="3" />
    <line x1="120" y1="18" x2="120" y2="32" stroke="#38bdf8" stroke-width="4" />
    <text x="120" y="10" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">-</text>

    <!-- Switch & Bulb -->
    <circle cx="160" cy="25" r="9" fill="#fbbf24" fill-opacity="0.2" stroke="#fbbf24" stroke-width="2" />
    <path d="M 154 25 L 166 25 M 160 19 L 160 31" stroke="#fbbf24" stroke-width="1.5" />
    <text x="160" y="46" fill="#fbbf24" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Bulb Lights</text>

    <!-- Wires -->
    <path d="M 80 25 L -40 25 L -40 80" fill="none" stroke="#f43f5e" stroke-width="2" />
    <path d="M 120 25 L 240 25 L 240 80" fill="none" stroke="#38bdf8" stroke-width="2" />

    <!-- Electron flow arrow -->
    <path d="M 0 16 L 50 16" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowCyan)" />
    <text x="25" y="10" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">e⁻ flow (to cathode)</text>
  </g>

  <!-- Crucible / Container -->
  <rect x="160" y="140" width="360" height="150" rx="12" fill="#0f172a" stroke="#475569" stroke-width="2" />
  <!-- Molten Electrolyte liquid -->
  <path d="M 162 180 Q 340 185 518 180 L 518 286 Q 340 290 162 286 Z" fill="#b45309" fill-opacity="0.25" stroke="#f59e0b" stroke-opacity="0.3" />
  <text x="340" y="275" fill="#f59e0b" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Molten PbBr₂ (Free mobile ions: Pb²⁺, Br⁻)</text>

  <!-- Anode (Positive Graphite Rod) -->
  <rect x="195" y="110" width="30" height="130" rx="4" fill="#334155" stroke="#f43f5e" stroke-width="2" />
  <text x="210" y="98" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">Anode (+)</text>
  <text x="210" y="170" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">C</text>

  <!-- Cathode (Negative Graphite Rod) -->
  <rect x="455" y="110" width="30" height="130" rx="4" fill="#334155" stroke="#38bdf8" stroke-width="2" />
  <text x="470" y="98" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Cathode (-)</text>
  <text x="470" y="170" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">C</text>

  <!-- Ions migrating & Reactions -->
  <!-- Anode side: Bromide ions -->
  <circle cx="250" cy="210" r="13" fill="#f43f5e" fill-opacity="0.3" stroke="#f43f5e" stroke-width="1.5" />
  <text x="250" y="215" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">Br⁻</text>
  <path d="M 240 205 L 230 195" fill="none" stroke="#f43f5e" stroke-width="1.5" marker-end="url(#arrowCyan)" />

  <!-- Bubbles of Br2 gas -->
  <circle cx="190" cy="190" r="6" fill="#ef4444" fill-opacity="0.6" />
  <circle cx="185" cy="165" r="8" fill="#ef4444" fill-opacity="0.7" />
  <circle cx="190" cy="140" r="10" fill="#ef4444" fill-opacity="0.8" />
  <text x="145" y="135" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Br₂ gas (red-brown)</text>

  <!-- Cathode side: Lead ions -->
  <circle cx="420" cy="210" r="14" fill="#38bdf8" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1.5" />
  <text x="420" y="215" fill="#bae6fd" font-size="11" font-weight="bold" text-anchor="middle">Pb²⁺</text>
  <path d="M 434 205 L 450 195" fill="none" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrowCyan)" />

  <!-- Molten Lead bead formed -->
  <ellipse cx="470" cy="245" rx="18" ry="8" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="545" y="245" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="start">Molten grey Pb metal</text>

  <!-- Heat burner below crucible -->
  <g transform="translate(340, 298)">
    <path d="M -15 15 Q -5 0 0 -12 Q 5 0 15 15 Z" fill="#f97316" />
    <path d="M -8 15 Q 0 5 0 -4 Q 0 5 8 15 Z" fill="#fde047" />
    <text x="0" y="20" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">Continuous Heat</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "principles-of-electrolysis",
    title: "Core Concepts & Electrical Conduction",
    type: "text",
    content: `
### ⚡ What is Electrolysis?

**Electrolysis** is the decomposition (breaking down) of a molten or aqueous ionic compound (**electrolyte**) by the passage of an electric current.

> [!NOTE]
> ### ⚛️ Essential Electrochemical Definitions
> 
> * **Electrolyte:** A liquid substance that conducts electricity when molten or dissolved in water (**aqueous**) because it contains freely moving (**mobile**) ions.
> * **Non-Conductors (Solids):** Solid ionic compounds do NOT conduct electricity because their ions are held tightly in fixed positions in a giant ionic lattice and cannot move.
> * **Charge Carriers in Liquids:** In an electrolyte, **ions** carry the current through the liquid by migrating towards the oppositely charged electrode.
> * **Charge Carriers in Wires:** In the external metallic circuit (wires), **free delocalised electrons** carry the current, flowing from the positive anode to the negative cathode through the power supply.
> * **Electrodes:** Inert conductive rods (usually made of non-metal **graphite** or metal **platinum**) that carry current into and out of the liquid without chemically reacting themselves.

> [!IMPORTANT]
> ### 🧮 Electrode Polarity & Redox Conventions
> 
> * **Anode (+):** The **positive electrode** connected to the positive terminal of the DC power source.
>   * Attracts negative ions (**anions**).
>   * **Oxidation** always occurs here (loss of electrons: $2\\text{Br}^- \\rightarrow \\text{Br}_2 + 2e^-$).
> * **Cathode (-):** The **negative electrode** connected to the negative terminal of the DC power source.
>   * Attracts positive ions (**cations**).
>   * **Reduction** always occurs here (gain of electrons: $\\text{Pb}^{2+} + 2e^- \\rightarrow \\text{Pb}$).
> * **Redox Rule:** Oxidation and reduction ALWAYS occur simultaneously during electrolysis.

> [!TIP]
> ### 💡 Memory Aids (Mnemonics)
> * **PANIC:** **P**ositive is **A**node, **N**egative **I**s **C**athode.
> * **OIL RIG:** **O**xidation **I**s **L**oss of electrons, **R**eduction **I**s **G**ain of electrons.
> * **An Ox & Red Cat:** **An**ode = **Ox**idation; **Red**uction = **Cat**hode.
`,
    keyPoints: [
      "Electrolysis decomposes an electrolyte using electrical energy from a DC power supply.",
      "Electrolytes conduct electricity via mobile ions, while external wires conduct via mobile electrons.",
      "Oxidation always occurs at the positive anode; reduction always occurs at the negative cathode."
    ]
  },
  {
    id: "molten-lead-bromide",
    title: "Electrolysis of Molten Binary Compounds",
    type: "text",
    content: `
### 🧪 Molten Binary Electrolytes

In a molten binary salt, there are **no water molecules** present. The only species available are the metal cations and non-metal anions.

> ${svgToken(moltenElectrolysisSvg)}

> [!NOTE]
> ### 📋 Case Study: Electrolysis of Molten Lead(II) Bromide (PbBr₂)
> 
> When solid lead(II) bromide is heated until molten:
> 1. **Observations:**
>    * The test bulb in the circuit illuminates, confirming current is flowing through the molten salt.
>    * **At the Anode (+):** Reddish-brown bubbles of **bromine gas** ($\\text{Br}_2$) are evolved.
>    * **At the Cathode (-):** A silvery, shiny bead of **molten lead metal** ($\\text{Pb}$) forms and sinks to the bottom.
> 
> 2. **Electrode Half-Equations:**
>    * **Anode (Oxidation):**
>      $$2\\text{Br}^-\\text{(l)} \\rightarrow \\text{Br}_2\\text{(g)} + 2e^-$$
>    * **Cathode (Reduction):**
>      $$\\text{Pb}^{2+}\\text{(l)} + 2e^- \\rightarrow \\text{Pb}\\text{(l)}$$
>    * **Overall Decomposition:**
>      $$\\text{PbBr}_2\\text{(l)} \\rightarrow \\text{Pb}\\text{(l)} + \\text{Br}_2\\text{(g)}$$

> [!BOX]
> ### 🌈 Colors and Physical States of Common Non-Metal Products
> | Substance | Physical State at r.t.p. | Observed Color |
> | :--- | :--- | :--- |
> | **Fluorine (F₂)** | Gas | Pale yellow gas |
> | **Chlorine (Cl₂)** | Gas | Greenish-yellow gas (bleaches litmus) |
> | **Bromine (Br₂)** | Liquid (vaporises on heating) | Red-brown liquid / dense brown fumes |
> | **Iodine (I₂)** | Solid | Grey-black solid / purple vapour |
> | **Oxygen (O₂)** | Gas | Colourless, odourless gas (relights glowing splint) |
> | **Hydrogen (H₂)** | Gas | Colourless, odourless gas (pops with lighted splint) |

> [!EXAMPLE]
> #### 📝 Worked Example 1: Molten Silver Iodide
> **Question:** What are the electrode products when molten silver iodide ($\\text{AgI}$) is electrolysed between inert graphite electrodes?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the ions present:**
> >    * Molten $\\text{AgI}$ contains only $\\text{Ag}^+$ cations and $\\text{I}^-$ anions (no water).
> > 
> > 2. **Anode reaction (+):**
> >    * Negative iodide ions ($\\text{I}^-$) are attracted to the positive anode and undergo oxidation (lose electrons).
> >    * Half-equation: $2\\text{I}^-\\text{(l)} \\rightarrow \\text{I}_2\\text{(g)} + 2e^-$
> >    * Product at anode: **Iodine** (purple vapour / grey-black solid upon cooling).
> > 
> > 3. **Cathode reaction (-):**
> >    * Positive silver ions ($\\text{Ag}^+$) are attracted to the negative cathode and undergo reduction (gain electrons).
> >    * Half-equation: $\\text{Ag}^+\\text{(l)} + e^- \\rightarrow \\text{Ag}\\text{(s)}$
> >    * Product at cathode: **Silver metal** (shiny grey deposit).
`,
    keyPoints: [
      "In molten binary electrolytes, metal cations form at the cathode and non-metal anions form at the anode.",
      "Lead(II) bromide yields molten lead at the cathode and reddish-brown bromine vapor at the anode.",
      "Molten silver iodide yields silver at the cathode and iodine at the anode."
    ]
  },
  {
    id: "extraction-of-reactive-metals",
    title: "Extraction of Reactive Metals",
    type: "text",
    content: `
### 🏭 Industrial Significance: Electrolysis of Molten Ores

Electrolysis of molten compounds is the only method powerful enough to extract very reactive metals from their compounds.

> [!IMPORTANT]
> ### ⚖️ Reactivity Series & Extraction Method
> * **High Reactivity Metals:** Potassium ($\\text{K}$), Sodium ($\\text{Na}$), Lithium ($\\text{Li}$), Calcium ($\\text{Ca}$), Magnesium ($\\text{Mg}$), and Aluminium ($\\text{Al}$).
>   * Their ores are extremely stable; carbon is not strong enough to reduce them.
>   * They **MUST** be extracted by electrolysis of their molten salts or oxides.
> * **Medium Reactivity Metals:** Zinc ($\\text{Zn}$), Iron ($\\text{Fe}$), Lead ($\\text{Pb}$).
>   * Can be extracted more cheaply by reduction with carbon or carbon monoxide in a furnace.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Molten Potassium Bromide
> **Question:** Predict the products formed at the anode and cathode during the electrolysis of molten potassium bromide ($\\text{KBr}$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify ions present:** $\\text{K}^+$ and $\\text{Br}^-$.
> > 2. **At Anode (+):** $\\text{Br}^-$ ions lose electrons to form **Bromine** ($\\text{Br}_2$).
> > 3. **At Cathode (-):** $\\text{K}^+$ ions gain electrons to form **Potassium** metal ($\\text{K}$).
> > 4. **Correct result:** Anode = Bromine, Cathode = Potassium.
`,
    keyPoints: [
      "Highly reactive metals (K, Na, Ca, Mg, Al) are extracted by electrolysis of their molten compounds.",
      "Electrolysis requires large amounts of electrical energy, making it an expensive industrial process."
    ]
  }
];
