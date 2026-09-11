import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Energetics";
export const lessonNumber = 1;

const exoDiagramSvg = `<svg viewBox="0 0 650 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
    </marker>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">Exothermic Reaction Enthalpy Level Diagram</text>
  <line x1="80" y1="60" x2="80" y2="260" stroke="#f8fafc" stroke-width="2"/>
  <path d="M 75 70 L 80 60 L 85 70" fill="none" stroke="#f8fafc" stroke-width="2"/>
  <text x="50" y="160" fill="#f8fafc" font-size="14" font-weight="bold" transform="rotate(-90 50 160)" text-anchor="middle">Enthalpy, H</text>
  
  <line x1="120" y1="100" x2="300" y2="100" stroke="#38bdf8" stroke-width="3"/>
  <text x="210" y="90" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Reactants</text>
  <text x="210" y="120" fill="#94a3b8" font-size="12" text-anchor="middle">C(s) + O₂(g)</text>
  
  <line x1="380" y1="220" x2="560" y2="220" stroke="#34d399" stroke-width="3"/>
  <text x="470" y="210" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">Products</text>
  <text x="470" y="240" fill="#94a3b8" font-size="12" text-anchor="middle">CO₂(g)</text>
  
  <line x1="340" y1="105" x2="340" y2="210" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="355" y="160" fill="#ef4444" font-size="14" font-weight="bold">ΔH = -394 kJ mol⁻¹</text>
  
  <line x1="80" y1="260" x2="600" y2="260" stroke="#475569" stroke-width="1.5" stroke-dasharray="4"/>
</svg>`;

const endoDiagramSvg = `<svg viewBox="0 0 650 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
    <marker id="arrowBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
    </marker>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad2)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">Endothermic Reaction Enthalpy Level Diagram</text>
  <line x1="80" y1="60" x2="80" y2="260" stroke="#f8fafc" stroke-width="2"/>
  <path d="M 75 70 L 80 60 L 85 70" fill="none" stroke="#f8fafc" stroke-width="2"/>
  <text x="50" y="160" fill="#f8fafc" font-size="14" font-weight="bold" transform="rotate(-90 50 160)" text-anchor="middle">Enthalpy, H</text>
  
  <line x1="120" y1="220" x2="300" y2="220" stroke="#34d399" stroke-width="3"/>
  <text x="210" y="210" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">Reactants</text>
  <text x="210" y="240" fill="#94a3b8" font-size="12" text-anchor="middle">C(s) + CO₂(g)</text>
  
  <line x1="380" y1="100" x2="560" y2="100" stroke="#38bdf8" stroke-width="3"/>
  <text x="470" y="90" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Products</text>
  <text x="470" y="120" fill="#94a3b8" font-size="12" text-anchor="middle">2CO(g)</text>
  
  <line x1="340" y1="215" x2="340" y2="110" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrowBlue)"/>
  <text x="355" y="165" fill="#3b82f6" font-size="14" font-weight="bold">ΔH = +172 kJ mol⁻¹</text>
  
  <line x1="80" y1="260" x2="600" y2="260" stroke="#475569" stroke-width="1.5" stroke-dasharray="4"/>
</svg>`;

const calorimeterSvg = `<svg viewBox="0 0 650 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
    <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad3)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">Calorimeter Setup: Enthalpy of Combustion</text>
  
  <path d="M 120 70 L 120 340 L 530 340 L 530 70" fill="none" stroke="#475569" stroke-dasharray="4 4" stroke-width="1.5"/>
  <text x="515" y="200" fill="#94a3b8" font-size="13" transform="rotate(90 515 200)" text-anchor="middle">Draught Shield</text>
  
  <rect x="250" y="120" width="150" height="120" fill="#0284c7" fill-opacity="0.3" rx="4" stroke="#f59e0b" stroke-width="2"/>
  <rect x="250" y="140" width="150" height="100" fill="#0ea5e9" fill-opacity="0.5" rx="2"/>
  <line x1="245" y1="120" x2="405" y2="120" stroke="#f59e0b" stroke-width="3"/>
  <text x="325" y="185" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">Water</text>
  
  <rect x="322" y="60" width="6" height="150" fill="#e2e8f0" rx="3" stroke="#475569" stroke-width="1"/>
  <line x1="325" y1="70" x2="325" y2="200" stroke="#ef4444" stroke-width="2"/>
  <circle cx="325" cy="205" r="6" fill="#ef4444"/>
  
  <path d="M 280 320 L 370 320 L 360 280 L 290 280 Z" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
  <line x1="325" y1="280" x2="325" y2="265" stroke="#e2e8f0" stroke-width="3"/>
  <path d="M 325 240 Q 310 260 325 265 Q 340 260 325 240 Z" fill="url(#flameGrad)"/>
  
  <line x1="325" y1="80" x2="460" y2="80" stroke="#64748b" stroke-width="1"/>
  <text x="465" y="84" fill="#f8fafc" font-size="13">Thermometer</text>
  
  <line x1="325" y1="120" x2="460" y2="120" stroke="#64748b" stroke-width="1"/>
  <text x="465" y="124" fill="#f8fafc" font-size="13">Lid</text>
  
  <line x1="400" y1="160" x2="460" y2="160" stroke="#64748b" stroke-width="1"/>
  <text x="465" y="164" fill="#f8fafc" font-size="13">Copper Can</text>
  
  <line x1="360" y1="300" x2="460" y2="300" stroke="#64748b" stroke-width="1"/>
  <text x="465" y="304" fill="#f8fafc" font-size="13">Spirit Burner</text>
</svg>`;

const neutralisationSvg = `<svg viewBox="0 0 650 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad4)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">Calorimeter Setup: Enthalpy of Neutralisation</text>
  
  <path d="M 220 100 L 220 260 Q 220 270 230 270 L 420 270 Q 430 270 430 260 L 430 100" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <path d="M 240 110 L 255 240 Q 256 250 266 250 L 384 250 Q 394 250 395 240 L 410 110" fill="#334155" fill-opacity="0.3" stroke="#cbd5e1" stroke-dasharray="3 3" stroke-width="1.5"/>
  <line x1="230" y1="105" x2="420" y2="105" stroke="#475569" stroke-width="4"/>
  <path d="M 250 160 L 400 160 L 392 235 Q 391 245 381 245 L 269 245 Q 259 245 258 235 Z" fill="#38bdf8" fill-opacity="0.4"/>
  <text x="325" y="200" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">Acid + Alkali Mixture</text>
  
  <rect x="300" y="50" width="6" height="150" fill="#e2e8f0" rx="3" stroke="#475569" stroke-width="1"/>
  <line x1="303" y1="60" x2="303" y2="185" stroke="#ef4444" stroke-width="2"/>
  <circle cx="303" cy="190" r="5" fill="#ef4444"/>
  
  <line x1="303" y1="70" x2="150" y2="70" stroke="#64748b" stroke-width="1"/>
  <text x="140" y="74" fill="#f8fafc" font-size="13" text-anchor="end">Thermometer</text>
  
  <line x1="325" y1="105" x2="150" y2="105" stroke="#64748b" stroke-width="1"/>
  <text x="140" y="109" fill="#f8fafc" font-size="13" text-anchor="end">Lid</text>
  
  <line x1="245" y1="140" x2="150" y2="140" stroke="#64748b" stroke-width="1"/>
  <text x="140" y="144" fill="#f8fafc" font-size="13" text-anchor="end">Polystyrene Cup</text>
  
  <line x1="425" y1="180" x2="490" y2="180" stroke="#64748b" stroke-width="1"/>
  <text x="495" y="184" fill="#f8fafc" font-size="13">Beaker</text>
</svg>`;

const hessCycleSvg = `<svg viewBox="0 0 650 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
    <marker id="arrowHead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f8fafc"/>
    </marker>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad5)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">Hess's Law Enthalpy Cycle: Carbon Monoxide Formation</text>
  
  <rect x="70" y="80" width="180" height="50" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="6"/>
  <text x="160" y="105" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">C(s, graphite) + ½O₂(g)</text>
  
  <rect x="400" y="80" width="180" height="50" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="6"/>
  <text x="490" y="105" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">CO(g)</text>
  
  <rect x="235" y="210" width="180" height="50" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="6"/>
  <text x="325" y="235" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">CO₂(g)</text>
  
  <line x1="260" y1="105" x2="385" y2="105" stroke="#f8fafc" stroke-width="2" marker-end="url(#arrowHead)"/>
  <text x="322" y="95" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">Δf H°</text>
  
  <path d="M 160 140 L 235 210" fill="none" stroke="#f8fafc" stroke-dasharray="3 3" stroke-width="2" marker-end="url(#arrowHead)"/>
  <text x="165" y="185" fill="#ef4444" font-size="12" font-weight="bold">-394 kJ mol⁻¹</text>
  <text x="145" y="200" fill="#94a3b8" font-size="11">+ ½O₂(g)</text>
  
  <path d="M 490 140 L 415 210" fill="none" stroke="#f8fafc" stroke-dasharray="3 3" stroke-width="2" marker-end="url(#arrowHead)"/>
  <text x="485" y="185" fill="#ef4444" font-size="12" font-weight="bold">-283 kJ mol⁻¹</text>
  <text x="515" y="200" fill="#94a3b8" font-size="11">+ ½O₂(g)</text>
</svg>`;

const bondEnergyCycleSvg = `<svg viewBox="0 0 650 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
    <marker id="arrowHeadGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#34d399"/>
    </marker>
    <marker id="arrowHeadRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
    </marker>
    <marker id="arrowHeadWhite" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f8fafc"/>
    </marker>
  </defs>
  <rect width="100%" height="100%" fill="url(#bgGrad6)" rx="8" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold">Reaction Enthalpy from Bond Enthalpies</text>
  
  <rect x="70" y="80" width="160" height="50" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="6"/>
  <text x="150" y="110" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">H₂(g) + Cl₂(g)</text>
  
  <rect x="420" y="80" width="160" height="50" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="6"/>
  <text x="500" y="110" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">2HCl(g)</text>
  
  <rect x="245" y="210" width="160" height="50" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="6"/>
  <text x="325" y="240" fill="#f59e0b" font-size="14" font-weight="bold" text-anchor="middle">2H(g) + 2Cl(g)</text>
  
  <line x1="240" y1="105" x2="410" y2="105" stroke="#f8fafc" stroke-width="2" marker-end="url(#arrowHeadWhite)"/>
  <text x="325" y="95" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">Δr H = -184 kJ</text>
  
  <path d="M 150 140 L 235 215" fill="none" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrowHeadGreen)"/>
  <text x="140" y="185" fill="#34d399" font-size="12" font-weight="bold" text-anchor="end">Bonds Broken: +680 kJ</text>
  
  <path d="M 405 220 L 490 140" fill="none" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrowHeadRed)"/>
  <text x="510" y="185" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="start">Bonds Made: -864 kJ</text>
</svg>`;

export const theoryMarkdown = `
# Topic 6: Energetics
This topic explores chemical energetics, focusing on introducing enthalpy, measuring enthalpy changes under standard conditions, and constructing and interpreting enthalpy level diagrams.
`;

export const parts: LessonPart[] = [
    {
        id: '6a-introducing-enthalpy',
        title: 'Introducing Enthalpy & Enthalpy Change',
        type: 'text',
        equationVisualizer: {
            reactants: [['HCl', '#38bdf8'], ['NaOH', '#34d399']],
            products: [['NaCl', '#f59e0b'], ['H₂O', '#a78bfa']],
            description: "Neutralisation reaction: hydrochloric acid and sodium hydroxide."
        },
        content: `
> [!NOTE]
> ### ⚛️ Chemical Energy and Heat Energy
> Chemical thermodynamics tells us that energy cannot be created or destroyed, but only transferred from one form to another.
> 
> * **Chemical Energy:** Composed of kinetic energy (motion of particles) and potential energy (forces of attraction and repulsion between atoms/molecules/ions)
> * **Heat Energy:** The portion of potential and kinetic energy responsible for the temperature of a substance, directly proportional to absolute temperature in Kelvin
> * **Enthalpy ($H$):** A measure of the total heat energy content of a system at constant pressure. While absolute enthalpy cannot be directly measured, we can measure the enthalpy change ($\\\\Delta H$) during a physical or chemical process

> [!TIP]
> ### 🧪 Exothermic and Endothermic Processes
> Physical changes and chemical reactions are classified based on the direction of net heat energy transfer:
> 
> 1. **Exothermic:** Heat energy is transferred from the system to the surroundings ($\\\\Delta H < 0$). This is felt as a temperature rise in the surroundings
> 2. **Endothermic:** Heat energy is absorbed by the system from the surroundings ($\\\\Delta H > 0$). This is felt as a temperature drop in the surroundings, or requires constant heating to proceed

> [!BOX]
> ### 📋 Examples of Processes
> 
> | Exothermic Processes | Endothermic Processes |
> | :--- | :--- |
> | Freezing water | Melting ice |
> | Condensing water vapour | Evaporating water |
> | Dissolving NaOH(s) in water | Dissolving NH₄NO₃(s) in water |
> | Reaction of HCl(aq) and NaOH(aq) | Reaction of citric acid and NaHCO₃(s) |
> | Combustion of fuels | Photosynthesis |

> [!IMPORTANT]
> ### 🧮 Standard Conditions & Standard Enthalpy changes
> To compare enthalpy changes fairly, standard conditions are defined by IUPAC (1982):
> * A standard pressure of $100\\\\text{ kPa}$ (approximately 1 bar)
> * A specified temperature, usually $298\\\\text{ K}$ ($25^\\\\circ\\\\text{C}$)
> * Substances in their standard states (most stable physical state under standard conditions)
> 
> The standard enthalpy change of reaction, $\\\\Delta_r H^\\\\ominus$, represents the enthalpy change when standard molar quantities of reactants react under standard conditions to form products in their standard states

> [!EXAMPLE]
> #### 📝 Worked Example 1: Deducing the Enthalpy Change per Mole of Equation
> **Question:** Consider the reaction of nitrogen and hydrogen to form ammonia.
> 
> $$\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{NH}_3\\\\text{(g)} \\\\quad \\\\Delta_r H^\\\\ominus = -92\\\\text{ kJ mol}^{-1}$$
> 
> Calculate the enthalpy change for the production of one mole of ammonia gas under the same conditions.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the stoichiometric relationship:**
> >    * The given equation shows the formation of $2\\\\text{ moles}$ of $\\\\text{NH}_3\\\\text{(g)}$ corresponds to $\\\\Delta_r H^\\\\ominus = -92\\\\text{ kJ mol}^{-1}$
> > 
> > 2. **Scale the equation down to 1 mole of products:**
> >    * Half all stoichiometric coefficients:
> >      $$\\\\frac{1}{2}\\\\text{N}_2\\\\text{(g)} + 1\\\\frac{1}{2}\\\\text{H}_2\\\\text{(g)} \\\\rightarrow \\\\text{NH}_3\\\\text{(g)}$$
> > 
> > 3. **Calculate the scaled enthalpy change:**
> >    * Multiply the original enthalpy change by $\\\\frac{1}{2}$:
> >      $$\\\\Delta_r H^\\\\ominus = \\\\frac{-92\\\\text{ kJ mol}^{-1}}{2} = -46\\\\text{ kJ mol}^{-1}$$
`,
        keyPoints: [
            'Enthalpy change is measured at constant pressure.',
            'Standard pressure is defined as 100 kPa, not 101.325 kPa (1 atm).',
            'Exothermic reactions have negative enthalpy changes; endothermic reactions have positive enthalpy changes.'
        ]
    },
    {
        id: '6b-enthalpy-level-diagrams',
        title: 'Enthalpy Level Diagrams',
        type: 'text',
        content: `
> [!NOTE]
> ### 📊 Drawing Enthalpy Level Diagrams
> Enthalpy level diagrams visually represent the relative enthalpy levels of reactants and products:
> 
> 1. **Vertical Axis:** Labelled "Enthalpy, H" to indicate the heat content of the system.
> 2. **Reactants and Products Lines:** Drawn as horizontal lines, clearly showing the formulae and state symbols.
> 3. **Direction of Arrow:** The enthalpy change arrow ($\\\\Delta H$) must point from the reactants level towards the products level.
> 4. **Enthalpy Value:** The numerical value of $\\\\Delta H$, including its correct sign ($+$ or $-$) and units ($\\\\text{kJ mol}^{-1}$), must be written next to the arrow.
> 
> Unlike reaction profile diagrams, activation energy barriers are not shown on standard enthalpy level diagrams.

> [!NOTE]
> ### 🔴 Exothermic Enthalpy Level Diagram
> In an exothermic process, the products have less enthalpy than the reactants. The arrow points downwards:
> 
> ${svgToken(exoDiagramSvg)}

> [!NOTE]
> ### 🔵 Endothermic Enthalpy Level Diagram
> In an endothermic process, the products have more enthalpy than the reactants. The arrow points upwards:
> 
> ${svgToken(endoDiagramSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 2: Interpreting an Enthalpy Level Diagram
> **Question:** An enthalpy level diagram has reactants $\\\\frac{1}{2}\\\\text{H}_2\\\\text{(g)} + \\\\frac{1}{2}\\\\text{I}_2\\\\text{(g)}$ at a lower level and product $\\\\text{HI(g)}$ at a higher level, with an upward arrow showing $\\\\Delta_r H^\\\\ominus = +26.5\\\\text{ kJ mol}^{-1}$.
> 1. Classify the reaction as exothermic or endothermic.
> 2. Deduce the standard enthalpy change of reaction for the process:
>    $$\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{HI(g)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Classify the reaction:**
> >    * Since the products lie at a higher enthalpy level than the reactants and the arrow points upwards ($\\\\Delta H$ is positive), the reaction is **endothermic**
> > 
> > 2. **Calculate the scaled enthalpy change:**
> >    * The target equation is multiplied by a factor of 2 compared to the reference diagram:
> >      $$\\\\Delta_r H^\\\\ominus = 2 \\\\times (+26.5\\\\text{ kJ mol}^{-1}) = +53.0\\\\text{ kJ mol}^{-1}$$
`,
        keyPoints: [
            'Reactant and product lines must include chemical formulas and physical state symbols.',
            'The vertical axis must be labeled Enthalpy, H.',
            'The arrow for enthalpy change always points from reactants to products.'
        ]
    },
    {
        id: '6c-enthalpy-of-combustion',
        title: 'Standard Enthalpy Change of Combustion',
        type: 'text',
        equationVisualizer: {
            reactants: [['C₂H₅OH', '#38bdf8'], ['O₂', '#34d399']],
            products: [['CO₂', '#f59e0b'], ['H₂O', '#a78bfa']],
            description: "Complete combustion of ethanol."
        },
        content: `
> [!NOTE]
> ### 🔥 Enthalpy Change of Combustion
> * **Standard Enthalpy Change of Combustion ($\\\\Delta_c H^\\\\ominus$):** The enthalpy change measured at $100\\\\text{ kPa}$ and a specified temperature (usually $298\\\\text{ K}$) when **one mole** of a substance is completely burned in excess oxygen
> * It is always exothermic, so the value of $\\\\Delta_c H^\\\\ominus$ is always negative
> * Writing equations for combustion requires balancing so that exactly **one mole** of the fuel reactant is burned:
>   * *Correct:* $\\\\text{H}_2\\\\text{(g)} + \\\\frac{1}{2}\\\\text{O}_2\\\\text{(g)} \\\\rightarrow \\\\text{H}_2\\\\text{O(l)}$ ($\\\\Delta_c H^\\\\ominus$)
>   * *Incorrect for standard enthalpy definition:* $2\\\\text{H}_2\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{H}_2\\\\text{O(l)}$ (this is $2 \\\\times \\\\Delta_c H^\\\\ominus$)

> [!BOX]
> ### 🧪 Experimental Calorimetry Setup
> To determine the enthalpy change of combustion of a liquid fuel in a laboratory, the heat energy released by burning a known mass of the fuel is used to heat a known volume of water in a copper can calorimeter.
> 
> ${svgToken(calorimeterSvg)}

> [!IMPORTANT]
> ### 🧮 Molar Enthalpy Change Calculation (3 Stages)
> 
> 1. **Stage 1: Calculate heat energy ($Q$) transferred to the water:**
>    $$Q = m c \\\\Delta T$$
>    * Where $m$ is the mass of water in grams (numerically equal to volume in $\\\\text{cm}^3$, as density is $1.00\\\\text{ g cm}^{-3}$)
>    * $c$ is the specific heat capacity of water ($4.18\\\\text{ J g}^{-1}\\\\text{ K}^{-1}$)
>    * $\\\\Delta T$ is the temperature change in $\\\\text{K}$ (or $^\\\\circ\\\\text{C}$)
> 
> 2. **Stage 2: Calculate the amount of substance ($n$) burned in moles:**
>    $$n = \\\\frac{\\\\text{mass of fuel burned}}{\\\\text{molar mass of fuel}}$$
> 
> 3. **Stage 3: Calculate the enthalpy change of combustion ($\\\\Delta_c H^\\\\ominus$):**
>    $$\\\\Delta_c H^\\\\ominus = -\\\\frac{Q}{n}$$
>    * Convert $Q$ from $\\\\text{J}$ to $\\\\text{kJ}$ (divide by 1000) and apply the negative sign to represent the exothermic process

> [!EXAMPLE]
> #### 📝 Worked Example 3: Enthalpy Change of Combustion of Ethanol
> **Question:** In an experiment to find the enthalpy change of combustion of ethanol ($Mr = 46.0$), $0.420\\\\text{ g}$ of ethanol was burned. The heat released increased the temperature of $100.0\\\\text{ cm}^3$ of water by $24.5^\\\\circ\\\\text{C}$. Calculate the value of $\\\\Delta_c H^\\\\ominus$ in $\\\\text{kJ mol}^{-1}$ to 3 significant figures. (Specific heat capacity of water = $4.18\\\\text{ J g}^{-1}\\\\text{ K}^{-1}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the heat energy ($Q$) transferred to the water:**
> >    * Since density of water is $1.00\\\\text{ g cm}^{-3}$, mass of water $m = 100.0\\\\text{ g}$
> >      $$Q = m c \\\\Delta T = 100.0\\\\text{ g} \\\\times 4.18\\\\text{ J g}^{-1}\\\\text{ K}^{-1} \\\\times 24.5\\\\text{ K}$$
> >      $$Q = 10241\\\\text{ J} = 10.241\\\\text{ kJ}$$
> > 
> > 2. **Calculate the amount ($n$) of ethanol burned:**
> >      $$n = \\\\frac{\\\\text{mass}}{\\\\text{molar mass}} = \\\\frac{0.420\\\\text{ g}}{46.0\\\\text{ g mol}^{-1}} = 9.1304 \\\\times 10^{-3}\\\\text{ mol}$$
> > 
> > 3. **Calculate the enthalpy change ($\\\\Delta_c H^\\\\ominus$):**
> >      $$\\\\Delta_c H^\\\\ominus = -\\\\frac{Q}{n} = -\\\\frac{10.241\\\\text{ kJ}}{9.1304 \\\\times 10^{-3}\\\\text{ mol}} \\\\approx -1120\\\\text{ kJ mol}^{-1}$$
> >    * (rounded to 3 significant figures)

> [!WARNING]
> ### ⚠️ Evaluating Experimental Sources of Error
> Laboratory-obtained values for enthalpy of combustion are typically less exothermic than standard book values (e.g. $-1120\\\\text{ kJ mol}^{-1}$ vs $-1367\\\\text{ kJ mol}^{-1}$ for ethanol) due to:
> 
> 1. **Heat Loss:** Significant heat is lost to the surrounding air and to the copper can itself instead of heating the water.
> 2. **Incomplete Combustion:** Visible soot forms on the bottom of the can due to incomplete combustion, which releases less energy than complete combustion.
> 3. **Evaporation:** Fuel evaporates from the wick of the spirit burner while weighing.
> 4. **Non-Standard Conditions:** Water vapour (gas) is produced rather than liquid water, which requires energy to vaporize and changes the measured heat output.
`,
        keyPoints: [
            'Enthalpy of combustion always relates to the combustion of exactly one mole of the substance.',
            'Heat loss to surroundings is the major reason experimental values are less exothermic than theoretical data book values.',
            'Ensure the negative sign is applied to the final calculated enthalpy value.'
        ]
    },
    {
        id: '6d-enthalpy-of-neutralisation',
        title: 'Standard Enthalpy Change of Neutralisation',
        type: 'text',
        equationVisualizer: {
            reactants: [['H⁺', '#38bdf8'], ['OH⁻', '#34d399']],
            products: [['H₂O', '#a78bfa']],
            description: "Net ionic equation for strong acid-strong alkali neutralisation."
        },
        content: `
> [!NOTE]
> ### 🧪 What is Standard Enthalpy of Neutralisation?
> * **Standard Enthalpy Change of Neutralisation ($\\\\Delta_{neut} H^\\\\ominus$):** The enthalpy change measured at $100\\\\text{ kPa}$ and a specified temperature (usually $298\\\\text{ K}$) when **one mole of water** is produced by the neutralisation of an acid with an alkali
> * Always exothermic, meaning values are negative
> * The chemical equations must be scaled to form exactly one mole of water:
>   * *Hydrochloric acid:* $\\\\text{HCl(aq)} + \\\\text{NaOH(aq)} \\\\rightarrow \\\\text{NaCl(aq)} + \\\\text{H}_2\\\\text{O(l)}$
>   * *Sulfuric acid:* $\\\\frac{1}{2}\\\\text{H}_2\\\\text{SO}_4\\\\text{(aq)} + \\\\text{NaOH(aq)} \\\\rightarrow \\\\frac{1}{2}\\\\text{Na}_2\\\\text{SO}_4\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)}$

> [!BOX]
> ### 📋 Remarkable Constancy for Strong Acids and Alkalis
> For reactions between strong acids and strong alkalis, the standard enthalpy change of neutralisation is remarkably constant (approx. $-57.9$ to $-57.6\\\\text{ kJ mol}^{-1}$):
> 
> | Acid | Alkali | $\\\\Delta_{neut} H^\\\\ominus$ / $\\\\text{kJ mol}^{-1}$ |
> | :--- | :--- | :---: |
> | $\\\\text{HCl(aq)}$ | $\\\\text{NaOH(aq)}$ | $-57.9$ |
> | $\\\\text{HBr(aq)}$ | $\\\\text{KOH(aq)}$ | $-57.6$ |
> | $\\\\text{HNO}_3\\\\text{(aq)}$ | $\\\\text{NaOH(aq)}$ | $-57.6$ |
> 
> **Why?** Strong acids and alkalis ionise fully in aqueous solution. The net reaction is simply the combination of hydrogen ions and hydroxide ions to form water:
> 
> $$\\\\text{H}^+\\\\text{(aq)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{H}_2\\\\text{O(l)}$$

> [!BOX]
> ### 🛡️ Experimental Neutralisation Calorimetry
> The experiment is carried out inside an expanded polystyrene cup (acting as a calorimeter) placed in a glass beaker for stability, fitted with a lid to reduce heat loss to the surrounding air.
> 
> ${svgToken(neutralisationSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 4: Enthalpy Change of Neutralisation Calculation
> **Question:** In an experiment, $25.0\\\\text{ cm}^3$ of $1.00\\\\text{ mol dm}^{-3}$ HCl is mixed with $25.0\\\\text{ cm}^3$ of $1.20\\\\text{ mol dm}^{-3}$ NaOH in a polystyrene cup. The starting temperature of the acid was $18.6^\\\\circ\\\\text{C}$ and the alkali was $18.8^\\\\circ\\\\text{C}$. The maximum temperature reached was $25.4^\\\\circ\\\\text{C}$. Calculate $\\\\Delta_{neut} H^\\\\ominus$ in $\\\\text{kJ mol}^{-1}$ to 2 significant figures. (Assume specific heat capacity of solution = $4.18\\\\text{ J g}^{-1}\\\\text{ K}^{-1}$, density = $1.00\\\\text{ g cm}^{-3}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the mean starting temperature:**
> >      $$\\\\text{Mean Starting Temp} = \\\\frac{18.6 + 18.8}{2} = 18.7^\\\\circ\\\\text{C}$$
> > 
> > 2. **Calculate the temperature change ($\\\\Delta T$):**
> >      $$\\\\Delta T = 25.4 - 18.7 = +6.7\\\\text{ K}$$
> > 
> > 3. **Calculate the heat energy ($Q$) released:**
> >    * Total mass of solution $m = 25.0 + 25.0 = 50.0\\\\text{ g}$
> >      $$Q = m c \\\\Delta T = 50.0\\\\text{ g} \\\\times 4.18\\\\text{ J g}^{-1}\\\\text{ K}^{-1} \\\\times 6.7\\\\text{ K}$$
> >      $$Q = 1400.3\\\\text{ J} = 1.4003\\\\text{ kJ}$$
> > 
> > 4. **Calculate the amount of water formed ($n$):**
> >    * HCl is the limiting reactant:
> >      $$n(\\\\text{HCl}) = C \\\\times V = 1.00\\\\text{ mol dm}^{-3} \\\\times 0.0250\\\\text{ dm}^3 = 0.0250\\\\text{ mol}$$
> >    * Moles of water formed = $0.0250\\\\text{ mol}$
> > 
> > 5. **Calculate the neutralisation enthalpy change ($\\\\Delta_{neut} H^\\\\ominus$):**
> >      $$\\\\Delta_{neut} H^\\\\ominus = -\\\\frac{Q}{n} = -\\\\frac{1.4003\\\\text{ kJ}}{0.0250\\\\text{ mol}} \\\\approx -56\\\\text{ kJ mol}^{-1}$$
> >    * (rounded to 2 significant figures matching $\\\\Delta T$)

> [!WARNING]
> ### ⚠️ Behavior of Weak Acids and Alkalis
> If a weak acid (e.g. ethanoic acid, $\\\\text{CH}_3\\\\text{COOH}$) is neutralised, the measured enthalpy change is typically less exothermic (e.g. $-55.2\\\\text{ kJ mol}^{-1}$) because weak acids are only partially dissociated. Some energy is absorbed to fully ionise the acid molecules before neutralisation can occur.
`,
        keyPoints: [
            'Enthalpy of neutralisation is defined per mole of water formed.',
            'For strong acids and strong alkalis, the reaction is always H⁺(aq) + OH⁻(aq) → H₂O(l), explaining the constant enthalpy change.',
            'Weak acids show less exothermic neutralisation values due to the energy required for full dissociation.'
        ]
    },
    {
        id: '6e-enthalpy-of-formation-hess-law',
        title: 'Standard Enthalpy Change of Formation & Hess\'s Law',
        type: 'text',
        content: `
> [!NOTE]
> ### 🏗️ Standard Enthalpy Change of Formation
> * **Standard Enthalpy Change of Formation ($\\\\Delta_f H^\\\\ominus$):** The enthalpy change measured at $100\\\\text{ kPa}$ and a specified temperature (usually $298\\\\text{ K}$) when **one mole** of a substance is formed from its constituent elements in their standard physical states
> * *Examples:*
>   * Carbon dioxide: $\\\\text{C(s, graphite)} + \\\\text{O}_2\\\\text{(g)} \\\\rightarrow \\\\text{CO}_2\\\\text{(g)}$ ($\\\\Delta_f H^\\\\ominus = -394\\\\text{ kJ mol}^{-1}$)
>   * Liquid ethanol: $2\\\\text{C(s, graphite)} + 3\\\\text{H}_2\\\\text{(g)} + \\\\frac{1}{2}\\\\text{O}_2\\\\text{(g)} \\\\rightarrow \\\\text{C}_2\\\\text{H}_5\\\\text{OH(l)}$ ($\\\\Delta_f H^\\\\ominus = -278\\\\text{ kJ mol}^{-1}$)
> * **Important Rule:** The standard enthalpy change of formation of any element in its standard state is exactly **zero** (e.g., $\\\\Delta_f H^\\\\ominus[\\\\text{O}_2\\\\text{(g)}] = 0$).

> [!IMPORTANT]
> ### ⚖️ Hess\'s Law
> **Hess\'s Law states that:** The enthalpy change of a chemical reaction is independent of the pathway taken to convert reactants into products, provided that the initial and final conditions are identical.
> * Hess's Law is a consequence of the First Law of Thermodynamics (Conservation of Energy)
> * It allows us to calculate enthalpy changes that cannot be measured directly in a laboratory, such as the formation of carbon monoxide from carbon and oxygen (since combustion of carbon always produces some carbon dioxide)

> [!BOX]
> ### 🔄 Hess's Law Enthalpy Cycles
> We can construct cycles to link reactions. For example, to find the formation enthalpy of carbon monoxide using combustion data of carbon and carbon monoxide:
> 
> ${svgToken(hessCycleSvg)}
> 
> By Hess's Law:
> $$\\\\Delta_f H^\\\\ominus[\\\\text{CO(g)}] + \\\\Delta_c H^\\\\ominus[\\\\text{CO(g)}] = \\\\Delta_c H^\\\\ominus[\\\\text{C(s, graphite)}]$$
> $$\\\\Delta_f H^\\\\ominus[\\\\text{CO(g)}] = \\\\Delta_c H^\\\\ominus[\\\\text{C}] - \\\\Delta_c H^\\\\ominus[\\\\text{CO}] = -394 - (-283) = -111\\\\text{ kJ mol}^{-1}$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Hess\'s Law with Enthalpies of Combustion
> **Question:** Calculate the standard enthalpy change of formation ($\\\\Delta_f H^\\\\ominus$) of methanol, $\\\\text{CH}_3\\\\text{OH(l)}$, given:
> * $\\\\Delta_c H^\\\\ominus[\\\\text{CH}_3\\\\text{OH(l)}] = -726\\\\text{ kJ mol}^{-1}$
> * $\\\\Delta_c H^\\\\ominus[\\\\text{C(s, graphite)}] = -394\\\\text{ kJ mol}^{-1}$
> * $\\\\Delta_c H^\\\\ominus[\\\\text{H}_2\\\\text{(g)}] = -286\\\\text{ kJ mol}^{-1}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the formation equation for methanol:**
> >      $$\\\\text{C(s, graphite)} + 2\\\\text{H}_2\\\\text{(g)} + \\\\frac{1}{2}\\\\text{O}_2\\\\text{(g)} \\\\rightarrow \\\\text{CH}_3\\\\text{OH(l)}$$
> > 
> > 2. **Set up the cycle using enthalpies of combustion:**
> >    * Both reactants and products combust to form $\\\\text{CO}_2\\\\text{(g)} + 2\\\\text{H}_2\\\\text{O(l)}$:
> >      $$\\\\Delta_f H^\\\\ominus = \\\\sum \\\\Delta_c H^\\\\ominus(\\\\text{Reactants}) - \\\\sum \\\\Delta_c H^\\\\ominus(\\\\text{Products})$$
> > 
> > 3. **Calculate the value:**
> >      $$\\\\Delta_f H^\\\\ominus = [\\\\Delta_c H^\\\\ominus(\\\\text{C}) + 2 \\\\times \\\\Delta_c H^\\\\ominus(\\\\text{H}_2)] - \\\\Delta_c H^\\\\ominus(\\\\text{CH}_3\\\\text{OH})$$
> >      $$\\\\Delta_f H^\\\\ominus = [-394 + 2(-286)] - (-726)$$
> >      $$\\\\Delta_f H^\\\\ominus = [-394 - 572] + 726$$
> >      $$\\\\Delta_f H^\\\\ominus = -966 + 726 = -240\\\\text{ kJ mol}^{-1}$$
`,
        keyPoints: [
            'Standard formation enthalpy is defined for one mole of a compound formed from elements.',
            'The enthalpy of formation of pure elements in their standard state is zero.',
            'Hess\'s Law is used to calculate enthalpy changes that cannot be determined directly by experiment.'
        ]
    },
    {
        id: '6f-bond-enthalpy-atomisation',
        title: 'Bond Enthalpy & Mean Bond Enthalpy',
        type: 'text',
        content: `
> [!NOTE]
> ### 🔗 What is Bond Enthalpy?
> * **Bond Enthalpy ($\\\\Delta_B H$):** The enthalpy change when one mole of a covalent bond in the gaseous state is broken to form gaseous atoms or radicals under standard conditions.
> * Bond breaking is always endothermic, so bond enthalpies are always positive:
>   * *Example (diatomic):* $\\\\text{Cl}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{Cl(g)}$ $\\\\Delta_B H = +243\\\\text{ kJ mol}^{-1}$
> * For polyatomic molecules, each successive bond has a slightly different breaking enthalpy. For example, in methane ($\\\\text{CH}_4$), successive breaking of the four C–H bonds requires $+423$, $+480$, $+425$, and $+335\\\\text{ kJ mol}^{-1}$ respectively.

> [!TIP]
> ### 🧮 Mean Bond Enthalpy
> * **Mean Bond Enthalpy:** The average enthalpy change required to break one mole of a specific type of covalent bond, calculated across a wide variety of gaseous organic molecules.
> * *For Methane:* The mean bond enthalpy for C–H is the average of its four successive values:
>   $$\\\\text{Mean } E(\\\\text{C–H}) = \\\\frac{423 + 480 + 425 + 335}{4} = +416\\\\text{ kJ mol}^{-1}$$
> * Standard mean values from data books include: $E(\\\\text{C–C}) = +347\\\\text{ kJ mol}^{-1}$, $E(\\\\text{C=C}) = +612\\\\text{ kJ mol}^{-1}$, $E(\\\\text{O–H}) = +464\\\\text{ kJ mol}^{-1}$

> [!BOX]
> ### ⚛️ Standard Enthalpy of Atomisation ($\\\\Delta_{at} H^\\\\ominus$)
> * **Standard Enthalpy Change of Atomisation ($\\\\Delta_{at} H^\\\\ominus$):** The enthalpy change measured under standard conditions when **one mole of gaseous atoms** is formed from the element in its standard state.
> * *Examples:*
>   * Gaseous carbon: $\\\\text{C(s, graphite)} \\\\rightarrow \\\\text{C(g)}$ $\\\\Delta_{at} H^\\\\ominus = +717\\\\text{ kJ mol}^{-1}$
>   * Gaseous hydrogen atoms: $\\\\frac{1}{2}\\\\text{H}_2\\\\text{(g)} \\\\rightarrow \\\\text{H(g)}$ $\\\\Delta_{at} H^\\\\ominus = +218\\\\text{ kJ mol}^{-1}$

> [!IMPORTANT]
> ### 🧮 Calculating Reaction Enthalpies from Bond Enthalpies
> We can estimate the enthalpy change of a reaction using mean bond enthalpies by comparing the energy required to break bonds in reactants against the energy released when making bonds in products:
> 
> $$\\\\Delta_r H = \\\\sum(\\\\text{Mean bond enthalpies of bonds broken}) - \\\\sum(\\\\text{Mean bond enthalpies of bonds made})$$
> 
> ${svgToken(bondEnergyCycleSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 6: Reaction Enthalpy from Bond Enthalpies
> **Question:** Estimate the standard enthalpy change of reaction for:
> 
> $$\\\\text{H}_2\\\\text{(g)} + \\\\text{Cl}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{HCl(g)}$$
> 
> Given: $E(\\\\text{H–H}) = +436\\\\text{ kJ mol}^{-1}$, $E(\\\\text{Cl–Cl}) = +244\\\\text{ kJ mol}^{-1}$, $E(\\\\text{H–Cl}) = +432\\\\text{ kJ mol}^{-1}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate energy required to break bonds (reactants):**
> >      $$\\\\sum(\\\\text{bonds broken}) = E(\\\\text{H–H}) + E(\\\\text{Cl–Cl}) = 436 + 244 = +680\\\\text{ kJ mol}^{-1}$$
> > 
> > 2. **Calculate energy released when making bonds (products):**
> >      $$\\\\sum(\\\\text{bonds made}) = 2 \\\\times E(\\\\text{H–Cl}) = 2 \\\\times 432 = +864\\\\text{ kJ mol}^{-1}$$
> > 
> > 3. **Calculate the enthalpy change of reaction ($\\\\Delta_r H$):**
> >      $$\\\\Delta_r H = \\\\sum(\\\\text{broken}) - \\\\sum(\\\\text{made}) = 680 - 864 = -184\\\\text{ kJ mol}^{-1}$$

> [!EXAMPLE]
> #### 📝 Worked Example 7: Deducing an Unknown Bond Enthalpy
> **Question:** The reaction of ethene with hydrogen gas to form ethane is represented by:
> 
> $$\\\\text{C}_2\\\\text{H}_4\\\\text{(g)} + \\\\text{H}_2\\\\text{(g)} \\\\rightarrow \\\\text{C}_2\\\\text{H}_6\\\\text{(g)} \\\\quad \\\\Delta_r H = -147\\\\text{ kJ mol}^{-1}$$
> 
> Given: $E(\\\\text{H–H}) = +436\\\\text{ kJ mol}^{-1}$, $E(\\\\text{C–H}) = +413\\\\text{ kJ mol}^{-1}$, $E(\\\\text{C–C}) = +347\\\\text{ kJ mol}^{-1}$. Calculate the mean bond enthalpy of the $\\\\text{C=C}$ double bond in ethene.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **List all bonds broken and made:**
> >    * *Bonds broken (Reactants):* $1 \\\\times \\\\text{C=C}$, $4 \\\\times \\\\text{C–H}$, $1 \\\\times \\\\text{H–H}$
> >    * *Bonds made (Products):* $1 \\\\times \\\\text{C–C}$, $6 \\\\times \\\\text{C–H}$
> >    * *Simplifying:* We can subtract $4 \\\\times \\\\text{C–H}$ from both sides.
> >      * *Bonds broken (net):* $1 \\\\times \\\\text{C=C} + E(\\\\text{H–H})$
> >      * *Bonds made (net):* $1 \\\\times E(\\\\text{C–C}) + 2 \\\\times E(\\\\text{C–H})$
> > 
> > 2. **Set up the Hess equation:**
> >      $$\\\\Delta_r H = [E(\\\\text{C=C}) + 436] - [347 + 2(413)]$$
> >      $$-147 = E(\\\\text{C=C}) + 436 - 1173$$
> >      $$-147 = E(\\\\text{C=C}) - 737$$
> > 
> > 3. **Solve for $E(\\\\text{C=C})$:**
> >      $$E(\\\\text{C=C}) = -147 + 737 = +590\\\\text{ kJ mol}^{-1}$$

> [!WARNING]
> ### ⚠️ Limitations of Mean Bond Enthalpies
> Mean bond enthalpies are only average estimates. Calculations using them may differ from experimental values because:
> 1. They are calculated based on substances in the **gaseous state**. If reactants or products are liquids or solids, additional energy is involved in phase changes (e.g. latent heat of vaporisation or condensation).
> 2. The actual bond enthalpy depends on the local molecular environment of the specific compound, which differs slightly from the mean average value.
`,
        keyPoints: [
            'Bond enthalpies are only valid for substances in the gaseous state.',
            'Bond breaking is endothermic (+); bond making is exothermic (-).',
            'Mean bond enthalpies are averages calculated from a range of different organic compounds.'
        ]
    }
];
