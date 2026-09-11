import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Introductory Organic Chemistry & Alkanes";
export const lessonNumber = 4;

const ghsHealthHazard = `[INLINE_SVG:${encodeURIComponent(`
<svg viewBox="0 0 100 100" style="width: 52px; height: 52px;" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="3" fill="#ffffff" stroke="#ef4444" stroke-width="8" transform="rotate(45 50 50)" />
  <g fill="#000000">
    <circle cx="50" cy="30" r="10" />
    <path d="M 32 80 C 32 65, 38 52, 50 52 C 62 52, 68 65, 68 80 Z" />
  </g>
  <path d="M50 48 L53 58 L63 56 L55 64 L59 74 L50 67 L41 74 L45 64 L37 56 L47 58 Z" fill="#ffffff" stroke="#000000" stroke-width="1.2" stroke-linejoin="round" />
</svg>
`)}]`;

const ghsToxic = `[INLINE_SVG:${encodeURIComponent(`
<svg viewBox="0 0 100 100" style="width: 52px; height: 52px;" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="3" fill="#ffffff" stroke="#ef4444" stroke-width="8" transform="rotate(45 50 50)" />
  <g stroke="#000000" stroke-width="2" fill="#ffffff">
    <path d="M 22 25 L 75 72 L 72 75 L 20 28 Z" />
    <circle cx="21" cy="21" r="4" stroke="#000000" stroke-width="2" fill="#ffffff" />
    <circle cx="27" cy="27" r="4" stroke="#000000" stroke-width="2" fill="#ffffff" />
    <circle cx="73" cy="73" r="4" stroke="#000000" stroke-width="2" fill="#ffffff" />
    <circle cx="79" cy="79" r="4" stroke="#000000" stroke-width="2" fill="#ffffff" />
    <path d="M 22 75 L 75 28 L 72 25 L 20 72 Z" />
    <circle cx="21" cy="79" r="4" stroke="#000000" stroke-width="2" fill="#ffffff" />
    <circle cx="27" cy="73" r="4" stroke="#000000" stroke-width="2" fill="#ffffff" />
    <circle cx="73" cy="27" r="4" stroke="#000000" stroke-width="2" fill="#ffffff" />
    <circle cx="79" cy="21" r="4" stroke="#000000" stroke-width="2" fill="#ffffff" />
  </g>
  <path d="M 50 22 C 36 22 34 33 34 44 C 34 54 41 58 41 64 L 59 64 C 59 58 66 54 66 44 C 66 33 64 22 50 22 Z" fill="#ffffff" stroke="#000000" stroke-width="2" />
  <g fill="#000000">
    <circle cx="43" cy="38" r="4.5" />
    <circle cx="57" cy="38" r="4.5" />
    <path d="M 50 44 L 46 50 L 54 50 Z" />
  </g>
  <g stroke="#000000" stroke-width="1.5">
    <line x1="45" y1="58" x2="55" y2="58" />
    <line x1="47" y1="54" x2="47" y2="64" />
    <line x1="50" y1="54" x2="50" y2="64" />
    <line x1="53" y1="54" x2="53" y2="64" />
  </g>
</svg>
`)}]`;

const ghsCorrosive = `[INLINE_SVG:${encodeURIComponent(`
<svg viewBox="0 0 100 100" style="width: 52px; height: 52px;" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="3" fill="#ffffff" stroke="#ef4444" stroke-width="8" transform="rotate(45 50 50)" />
  <line x1="28" y1="65" x2="48" y2="65" stroke="#000000" stroke-width="4" stroke-linecap="round" />
  <path d="M 37 63 Q 39 70 41 63" fill="#ffffff" stroke="#000000" stroke-width="1.5" />
  <path d="M 54 67 C 54 62, 57 60, 62 60 C 66 60, 68 62, 69 66 C 72 63, 76 65, 75 69 C 78 68, 80 70, 78 74 C 77 76, 73 78, 65 78 C 58 78, 54 74, 54 67 Z" fill="#ffffff" stroke="#000000" stroke-width="2" stroke-linejoin="round" />
  <circle cx="60" cy="65" r="3" fill="#ffffff" stroke="#000000" stroke-width="1.5" />
  <g transform="translate(32, 28) rotate(-45)">
    <rect x="-3" y="-12" width="6" height="24" rx="2" fill="#ffffff" stroke="#000000" stroke-width="2" />
    <rect x="-2" y="2" width="4" height="8" fill="#000000" />
  </g>
  <path d="M 39 42 Q 38 52 39 62" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" />
  <g transform="translate(68, 28) rotate(45)">
    <rect x="-3" y="-12" width="6" height="24" rx="2" fill="#ffffff" stroke="#000000" stroke-width="2" />
    <rect x="-2" y="2" width="4" height="8" fill="#000000" />
  </g>
  <path d="M 61 42 Q 62 50 60 58" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" />
</svg>
`)}]`;

const ghsEnvHazard = `[INLINE_SVG:${encodeURIComponent(`
<svg viewBox="0 0 100 100" style="width: 52px; height: 52px;" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="3" fill="#ffffff" stroke="#ef4444" stroke-width="8" transform="rotate(45 50 50)" />
  <path d="M 25 70 C 40 70, 45 74, 55 74 C 65 74, 70 70, 75 70" stroke="#000000" stroke-width="2" fill="none" />
  <path d="M 38 70 L 38 42" stroke="#000000" stroke-width="2.5" stroke-linecap="round" fill="none" />
  <path d="M 38 58 Q 30 52 28 54 M 38 52 Q 44 48 46 50 M 38 46 Q 32 40 34 38 M 38 42 Q 42 38 41 36" stroke="#000000" stroke-width="2" stroke-linecap="round" fill="none" />
  <g transform="translate(60, 64) rotate(-35)">
    <path d="M -12 0 C -6 -8, 6 -8, 12 0 C 6 8, -6 8, -12 0 Z" fill="#ffffff" stroke="#000000" stroke-width="2" stroke-linejoin="round" />
    <path d="M 12 0 L 17 -5 L 15 0 L 17 5 Z" fill="#ffffff" stroke="#000000" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M -8 -1 L -6 1 M -6 -1 L -8 1" stroke="#000000" stroke-width="1" />
  </g>
</svg>
`)}]`;

const ghsIrritant = `[INLINE_SVG:${encodeURIComponent(`
<svg viewBox="0 0 100 100" style="width: 52px; height: 52px;" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="3" fill="#ffffff" stroke="#ef4444" stroke-width="8" transform="rotate(45 50 50)" />
  <path d="M 46 28 L 54 28 L 52 56 L 48 56 Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linejoin="round" />
  <circle cx="50" cy="68" r="4.5" fill="#000000" />
</svg>
`)}]`;

const ghsExplosive = `[INLINE_SVG:${encodeURIComponent(`
<svg viewBox="0 0 100 100" style="width: 52px; height: 52px;" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="3" fill="#ffffff" stroke="#ef4444" stroke-width="8" transform="rotate(45 50 50)" />
  <circle cx="50" cy="55" r="8" fill="#000000" />
  <path d="M 40 45 L 30 35 M 60 45 L 70 35 M 40 65 L 30 75 M 60 65 L 70 75 M 50 43 L 50 30 M 50 67 L 50 78 M 38 55 L 26 55 M 62 55 L 74 55" stroke="#000000" stroke-width="2.5" stroke-linecap="round" />
  <path d="M 45 42 L 35 25 L 50 35 L 65 25 L 55 42 L 72 45 L 58 52 L 70 65 L 53 58 L 50 74 L 47 58 L 30 65 L 42 52 L 28 45 Z" fill="#000000" />
</svg>
`)}]`;

const ghsFlammable = `[INLINE_SVG:${encodeURIComponent(`
<svg viewBox="0 0 100 100" style="width: 52px; height: 52px;" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="3" fill="#ffffff" stroke="#ef4444" stroke-width="8" transform="rotate(45 50 50)" />
  <path d="M 28 75 L 72 75" stroke="#000000" stroke-width="3" stroke-linecap="round" />
  <path d="M 50 24 Q 57 38 64 48 C 70 57 67 73 50 73 C 33 73 30 57 36 48 Q 43 38 50 24" fill="#000000" />
  <path d="M 46 45 Q 49 53 44 63 Q 48 64 53 58 Q 50 50 46 45 M 56 42 Q 53 51 58 61 Q 54 62 49 56 Q 52 48 56 42" fill="#ffffff" />
</svg>
`)}]`;

const ghsOxidizing = `[INLINE_SVG:${encodeURIComponent(`
<svg viewBox="0 0 100 100" style="width: 52px; height: 52px;" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="70" height="70" rx="3" fill="#ffffff" stroke="#ef4444" stroke-width="8" transform="rotate(45 50 50)" />
  <line x1="28" y1="75" x2="72" y2="75" stroke="#000000" stroke-width="3" stroke-linecap="round" />
  <circle cx="50" cy="58" r="12" fill="#ffffff" stroke="#000000" stroke-width="3.5" />
  <path d="M 50 25 Q 56 36 61 44 C 63 48 59 52 50 51 C 41 52 37 48 39 44 Q 44 36 50 25" fill="#000000" />
  <path d="M 47 38 Q 49 43 45 48 C 50 49 52 46 50 42" fill="#ffffff" />
</svg>
`)}]`;

const heterolyticSvg = `<svg viewBox="0 0 600 200" style="max-width: 450px; width: 100%; height: auto;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#f59e0b" />
    </marker>
    <marker id="reaction-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect width="600" height="200" rx="12" ry="12" fill="url(#bg-grad-1)" stroke="#1e293b" stroke-width="1.5" />
  <text x="30" y="35" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">Heterolytic Fission (Forms Ions)</text>
  <text x="80" y="110" font-family="system-ui, sans-serif" font-size="28" font-weight="bold" fill="#f8fafc" text-anchor="middle">H</text>
  <ellipse cx="120" cy="100" rx="12" ry="24" fill="none" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="120" cy="90" r="3" fill="#38bdf8" />
  <circle cx="120" cy="110" r="3" fill="#10b981" />
  <text x="160" y="110" font-family="system-ui, sans-serif" font-size="28" font-weight="bold" fill="#10b981" text-anchor="middle">Cl</text>
  <path d="M 120,76 C 120,40 155,40 158,74" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" />
  <text x="135" y="45" font-family="system-ui, sans-serif" font-size="10" fill="#f59e0b" text-anchor="middle">Both electrons move to Cl</text>
  <line x1="210" y1="100" x2="270" y2="100" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#reaction-arrow)" />
  <text x="330" y="110" font-family="system-ui, sans-serif" font-size="28" font-weight="bold" fill="#f8fafc" text-anchor="middle">H</text>
  <text x="345" y="90" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#f8fafc">+</text>
  <text x="385" y="110" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#64748b" text-anchor="middle">+</text>
  <text x="440" y="110" font-family="system-ui, sans-serif" font-size="28" font-weight="bold" fill="#10b981" text-anchor="middle">Cl</text>
  <text x="460" y="90" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#10b981">-</text>
  <circle cx="440" cy="74" r="3" fill="#10b981" />
  <circle cx="448" cy="74" r="3" fill="#10b981" />
  <circle cx="440" cy="122" r="3" fill="#10b981" />
  <circle cx="448" cy="122" r="3" fill="#10b981" />
  <circle cx="458" cy="96" r="3" fill="#10b981" />
  <circle cx="458" cy="104" r="3" fill="#10b981" />
  <circle cx="422" cy="96" r="3" fill="#38bdf8" />
  <circle cx="422" cy="104" r="3" fill="#10b981" />
  <text x="30" y="175" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">
    <tspan fill="#f59e0b" font-weight="bold">Full-headed arrow (â¤³):</tspan> Represents the transfer of an electron pair.
  </text>
</svg>`;

const homolyticSvg = `<svg viewBox="0 0 600 200" style="max-width: 450px; width: 100%; height: auto;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="reaction-arrow-2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
  </defs>
  <rect width="600" height="200" rx="12" ry="12" fill="url(#bg-grad-2)" stroke="#1e293b" stroke-width="1.5" />
  <text x="30" y="35" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ec4899">Homolytic Fission (Forms Radicals)</text>
  <text x="80" y="110" font-family="system-ui, sans-serif" font-size="28" font-weight="bold" fill="#10b981" text-anchor="middle">Cl</text>
  <ellipse cx="120" cy="100" rx="12" ry="24" fill="none" stroke="#475569" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="114" cy="100" r="3" fill="#10b981" />
  <circle cx="126" cy="100" r="3" fill="#10b981" />
  <text x="160" y="110" font-family="system-ui, sans-serif" font-size="28" font-weight="bold" fill="#10b981" text-anchor="middle">Cl</text>
  <path d="M 114,88 C 114,65 92,65 88,85" fill="none" stroke="#ec4899" stroke-width="2" />
  <path d="M 88,85 L 94,83" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" />
  <path d="M 126,112 C 126,135 148,135 152,115" fill="none" stroke="#ec4899" stroke-width="2" />
  <path d="M 152,115 L 146,117" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" />
  <text x="120" y="48" font-family="system-ui, sans-serif" font-size="9" fill="#ec4899" text-anchor="middle">Single electron shifts</text>
  <line x1="200" y1="100" x2="260" y2="100" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#reaction-arrow-2)" />
  <text x="230" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f59e0b" text-anchor="middle">U.V. Light</text>
  <text x="310" y="110" font-family="system-ui, sans-serif" font-size="28" font-weight="bold" fill="#10b981" text-anchor="middle">Cl</text>
  <circle cx="332" cy="100" r="3.5" fill="#f43f5e" />
  <text x="365" y="110" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#64748b" text-anchor="middle">+</text>
  <circle cx="398" cy="100" r="3.5" fill="#f43f5e" />
  <text x="420" y="110" font-family="system-ui, sans-serif" font-size="28" font-weight="bold" fill="#10b981" text-anchor="middle">Cl</text>
  <text x="30" y="175" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">
    <tspan fill="#ec4899" font-weight="bold">Half-headed (fishhook) arrow (â‡€):</tspan> Represents the transfer of a single electron.
  </text>
</svg>`;

export const theoryMarkdown = `
# Topic 4: Introductory Organic Chemistry & Alkanes
This lesson introduces organic chemical formulas, homologous series, functional groups, IUPAC naming rules, structural isomerism, reaction mechanisms (homolytic/heterolytic fission), and the chemistry of alkanes (fractional distillation, cracking, reforming, combustion, and free-radical substitution).
`;

export const parts: LessonPart[] = [
  {
    id: 'hazard-risk-precautions-20260627',
    title: 'Hazard, Risk & Safety Precautions',
    type: 'text',
    content: `
> [!NOTE]
> ### âš ï¸ Hazard vs. Risk
> In scientific experiments, it is crucial to distinguish between a hazard and a risk:
> 
> * **Hazard:** Anything (substance, equipment, or procedure) that has the potential to cause harm. This is a fixed characteristic of the substance or procedure.
> * **Risk:** The likelihood or chance of a hazard causing harm under specific experimental conditions. This is variable and can be minimized through safety measures.
> 
> **Examples:**
> 1. **Hydrochloric Acid:** HCl is corrosive (a fixed hazard). Wearing safety goggles does not change the hazard of the acid, but it significantly decreases the **risk** of causing harm to the eyes.
> 2. **Boiling Water:** Water at room temperature has no chemical hazards. However, boiling water itself is a **thermal hazard**. The **risk** is the likelihood of getting burned or spilling it during the experiment.
> 3. **Beaker on a Tripod:** Carrying out heating with a beaker of boiling water on a tripod and gauze involves several operational risks.
> 
> * **Risk Assessment:** Evaluating the potential risks involved when carrying out a specific procedure and describing how to reduce those risks.

> [!TIP]
> ### ðŸ›¡ï¸ Safety Precautions & Risk Reduction
> Risks in the laboratory can be minimized using the following strategies:
> 
> 1. **Work on a Smaller Scale:** Use a smaller mass, volume, or lower concentration of hazardous reagents.
> 2. **Alternative Reagents:** Use alternative methods involving less hazardous substances where possible.
> 3. **Specific Precautionary Measures:**
>    * *Flammable Liquids (e.g., Ethanol):* Heat using an electric water bath or heating mantle instead of a Bunsen burner, and keep all bottles closed and away from naked flames.
>    * *Toxic/Volatile Vapors:* Carry out reactions that produce toxic gases or volatile vapors inside a **fume cupboard**.
>    * *Hot Objects:* Hold hot equipment (beakers, crucibles) using tongs to avoid skin burns.
>    * *Corrosive Substances (Acids & Bases):* Wear gloves to protect skin, and safety goggles to avoid splashes.
>    * *Storage & Storage Bottles:* Keep chemical bottles closed when not in use. Strong oxidizing agents (like concentrated nitric acid, conc. HNOâ‚ƒ) must be stored away from flammable materials (organic solvents) to prevent spontaneous combustion or explosions. Volatile or light-sensitive chemicals (like HNOâ‚ƒ) should be stored in dark brown glass bottles to prevent decomposition.
>    * *Neutralization of Acidic Gases:* Use basic scrubbers (such as CaCOâ‚ƒ, NaOH), activated carbon, or dissolve them in water to remove toxic acidic gases.

> [!BOX]
> ### ðŸ“‹ Concentration-Dependent Hazards & Apparatus Risks
> * **Concentration Effect:** The hazard of a substance changes significantly with concentration. For example:
>   * *Titration HCl (approx. 0.1 mol/dmÂ³):* Very low hazard (irritant).
>   * *Reagent HCl (1 to 2 mol/dmÂ³):* Moderate hazard.
>   * *Concentrated HCl (above 10 mol/dmÂ³):* Extremely hazardous (corrosive, fumes heavily in air).
> * **Thermometer Hazards:** Mercury thermometers contain highly toxic liquid mercury. Use **spirit thermometers** or **digital thermometers** to reduce the risk of toxic exposure if broken.
> * **Heating Hazards:** Open flames from Bunsen burners pose high ignition risks for flammable organic compounds. Use **electrical heating mantles** or **water baths** to heat safely.
> * **Apparatus Assembly Risks:** Fitting glass tubes through corks or rubber bungs requires force, posing high glass breakage and hand puncture risks. Use modern glass apparatus connected by **ground glass joints** to eliminate the risk of bungs assembly.

> [!BOX]
> ### ðŸ“‹ Chemical Hazard Pictograms
> Standard hazard pictograms are used globally on chemical containers to warn users of specific hazards:
>
> | Name | Symbol | Hazard Effect | Example |
> | :--- | :---: | :--- | :--- |
> | Health Hazard | ${ghsHealthHazard} | Carcinogenic, mutagenic, causes respiratory sensitization, or long-term systemic harm. | Chromates, Dichromates |
> | Toxic | ${ghsToxic} | Poisonous; can cause deadly damage to organisms (skull and crossbones). | Hydrogen cyanide, Chlorine, Chlorates, Methanol |
> | Corrosive | ${ghsCorrosive} | Causes irreversible chemical destruction of materials and living tissues. | Concentrated strong acids and bases |
> | Environmental Hazard | ${ghsEnvHazard} | Dangerous to biomes, aquatic life, or ecosystems. | Copper(II) sulfate, Cyclohexane, Chlorine |
> | Irritant | ${ghsIrritant} | Causes reversible inflammation of the skin, eyes, or respiratory tract. | Diluted acids and bases, Ammonia |
> | Explosive | ${ghsExplosive} | Highly unstable; prone to severe thermal or mechanical explosions. | Peroxides |
> | Flammable | ${ghsFlammable} | Catches fire easily if heated or exposed to a flame. | Alkanes (Câ‚â€“Câ‚‰), Acetone, Alcohols, Benzene |
> | Oxidizing | ${ghsOxidizing} | Releases oxygen, intensifying fires and enabling materials to burn fiercely. | Chlorates, Chromates, Potassium manganate(VII), conc. HNOâ‚ƒ |
>
> * **Volatile:** A substance that evaporates easily at room temperature (a liquid with a low boiling point).
> * **PPE:** Personal Protective Equipment (such as safety goggles, gloves, and lab coats).

> [!EXAMPLE]
> #### ðŸ“ Example 1: Differentiating Hazard and Risk
> **Question:** Concentrated sulfuric acid is corrosive. Explain how the hazard of using concentrated sulfuric acid differs from the risk, and describe how the risk can be reduced.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Define the hazard:**
> >    * The hazard is a fixed property of concentrated sulfuric acid (it is corrosive and causes tissue damage). This property cannot be changed.
> > 2. **Define the risk:**
> >    * The risk is the likelihood of the acid actually causing harm (such as spilling onto the skin or splashing into the eyes) under specific conditions.
> > 3. **State how to reduce the risk:**
> >    * The risk can be minimized by wearing safety goggles (to protect eyes), wearing gloves (to protect hands), and working with smaller volumes or lower concentrations of the acid.

> [!EXAMPLE]
> #### ðŸ“ Example 2: Safe Heating of Volatile Organic Solvents
> **Question:** Ethanol is highly flammable and volatile. Describe the safety measures that must be taken when heating ethanol in a laboratory experiment, explaining the chemical reasoning behind these choices.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the heating method:**
> >    * Ethanol must be heated using an electric water bath or heating mantle rather than an open Bunsen burner flame.
> > 2. **Explain the reasoning:**
> >    * Since ethanol is volatile, it evaporates easily to produce flammable vapors. Heating it with an open flame would create a high risk of ignition and fire. An electric water bath eliminates the presence of a naked flame, drastically reducing the risk of fire.

> [!EXAMPLE]
> #### ðŸ“ Example 3: Storage of Concentrated Nitric Acid
> **Question:** Concentrated nitric acid (HNOâ‚ƒ) is a strong oxidizing agent and decomposes slowly in light.
> 1. State how concentrated nitric acid should be stored to prevent decomposition.
> 2. Explain why it is dangerous to store concentrated nitric acid close to flammable organic solvents like ethanol.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Storage to prevent decomposition:**
> >    * Concentrated nitric acid must be stored in dark brown (amber) glass bottles, which block light from triggering decomposition.
> > 2. **Reason for separating from flammables:**
> >    * Concentrated nitric acid is a strong oxidizing agent that readily releases oxygen and triggers rapid electron transfer.
> >    * If stored near flammable materials, it can drastically accelerate combustion, cause spontaneous ignition, or trigger severe fire and explosion hazards.

> [!EXAMPLE]
> #### ðŸ“ Example 4: Identifying Pictograms for Strong Acids
> **Question:** Identify the pictogram that would most likely be found on a bottle of concentrated nitric acid (HNOâ‚ƒ), and justify your answer.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the pictogram:**
> >    * Concentrated nitric acid (HNOâ‚ƒ) must carry the **Corrosive** pictogram.
> > 2. **Justify the choice:**
> >    * This is because concentrated nitric acid is highly reactive and causes immediate, severe chemical burns to human skin/eyes and destroys materials upon contact.
> >    * *Note:* It is also a strong oxidizing agent, so it may additionally carry the **Oxidizing** pictogram.

> [!EXAMPLE]
> #### ðŸ“ Example 5: Handling Toxic Acidic Gaseous Products
> **Question:** During the chlorination of an organic compound, toxic and acidic hydrogen chloride gas ($\text{HCl}$) is evolved. Describe a suitable method to safely dispose of this gas without releasing it into the laboratory atmosphere, and justify your choice.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the primary safe disposal method:**
> >    * The reaction must be carried out inside a working **fume cupboard** to prevent toxic fumes from entering the laboratory atmosphere.
> > 2. **Alternative absorption method (Scrubbing):**
> >    * Alternatively, the exhaust gas can be passed through a delivery tube into an inverted funnel sitting in a beaker of **sodium hydroxide solution** ($\text{NaOH}$) or **calcium carbonate suspension**.
> > 3. **Explain the chemical reasoning:**
> >    * Being acidic, the toxic $\text{HCl}$ gas will dissolve and react with the basic solution in a neutralisation reaction, forming non-toxic salt and water:
> >    * $\text{HCl(g)} + \text{NaOH(aq)} \rightarrow \text{NaCl(aq)} + \text{H}_2\text{O(l)}$
> >    * The inverted funnel prevents the solution from sucking back into the reaction flask if temperature drops.

> [!EXAMPLE]
> #### ðŸ“ Example 6: Deducing Hazards and Safety Measures from Reagent Data
> **Question:** An organic reaction requires the use of cyclohexane (boiling point 81 Â°C, highly flammable, toxic to aquatic life) and concentrated nitric acid (boiling point 83 Â°C, corrosive, strong oxidizing agent). Compare the specific safety measures required for handling these two reagents.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Analyze precautions for cyclohexane:**
> >    * Cyclohexane is highly flammable; therefore, heat it using an electric water bath or heating mantle rather than an open Bunsen burner flame.
> >    * It is toxic to aquatic life; do not discard residues down the sink. Dispose of it in a designated organic waste container.
> > 2. **Analyze precautions for concentrated nitric acid:**
> >    * It is corrosive; wear chemical-resistant gloves and protective lab clothing to prevent severe chemical skin burns.
> >    * It is a strong oxidizing agent; store it separately from organic solvents (like cyclohexane) in amber glass bottles to prevent dangerous spontaneous combustion or decomposition.
`,
    keyPoints: [
      'Hazards are fixed characteristics of substances or procedures; risks are the variable chances of those hazards causing harm.',
      'Risks can be reduced by using smaller scales, safer alternatives, electric water baths for flammables, and fume cupboards for toxic vapors.',
      'Hazard symbols (pictograms) provide quick visual warnings about health, toxicity, corrosive nature, flammability, and oxidizing potential of chemicals.'
    ]
  },
  {
    id: 'organic-formulae-20260627',
    title: 'Organic Formulae & Functional Groups',
    type: 'text',
    content: `
> [!NOTE]
> ### ðŸ§ª What are Organic Compounds?
> Organic compounds are compounds that contain carbon (specifically C-H bonds, with rare exceptions like CClâ‚„). 
> * **Vitalism History:** In the early 1800s, scientists believed in *vitalism* â€” the theory that organic compounds possessed a 'vital force' and could only be synthesized by living organisms (plants or animals), such as urea in human urine. 
> * **The Breakthrough (1828):** German chemist **Friedrich WÃ¶hler** heated the inorganic compound **ammonium cyanate** ($\text{NH}_4\text{CNO}$) and successfully synthesized **urea** ($\text{CO(NH}_2)_2$), disproving vitalism.
> * **KevlarÂ® Discovery (1960s):** The organic chemist **Stephanie Kwolek** invented **KevlarÂ®**, an extremely strong, heat-resistant organic polymer now used in body armour, safety gloves, and smartphones.
> * **Classification:**
>   1. **Hydrocarbons:** contain only carbon and hydrogen atoms.
>   2. **Hydrocarbon Derivatives:** contain other elements like O, N, or halogens (e.g. sucrose is a carbohydrate, not a hydrocarbon, as the *-ate* ending shows it contains oxygen).
> 
> > [!IMPORTANT]
> > ### âš›ï¸ Bond Types & Valence in Organic Compounds
> > Organic compounds differ according to their bond types and molecular saturation:
> >
> > 1. **Saturated compounds:** contain only **sigma (Ïƒ) bonds** (Câ€“C single bonds) allowing maximum hydrogen atoms.
> > 2. **Unsaturated compounds:** contain one or more **pi (Ï€) bonds** (e.g., C=C double bonds or Câ‰¡C triple bonds), containing fewer hydrogen atoms than the maximum possible.
> > 
> > **Valence Rules (Bonding pairs around each atom):**
> > * Carbon: 4 bonds
> > * Nitrogen: 3 bonds
> > * Oxygen: 2 bonds
> > * Hydrogen / Halogens: 1 bond
> > 
> > **Cyclobutane 3D Bond Angle Hint:** In a 2D drawing of cyclobutane (or cyclopropane), the bond angles look like 90Â° (or 60Â°). However, because the carbon atoms are $sp^3$ hybridized, the actual 3D bond angles are puckered and closer to the tetrahedral angle of **109.5Â°** to minimize eclipse strain.

> [!TIP]
> ### ðŸŒ¡ï¸ Boiling Points of Hydrocarbons
> Boiling points of hydrocarbons **increase** by:
>
> 1. **Increasing chain length (higher $M_r$):** longer chains have greater Van der Waals (London dispersion) forces between molecules, requiring more energy to separate.
>    * At room temperature, the physical state of a straight-chain hydrocarbon depends on the number of carbons:
>
> | Number of Carbons | Physical State |
> | :---: | :--- |
> | 1 â€“ 4 | Gas |
> | 5 â€“ 17 | Liquid |
> | 18 or more | Solid |
>
> 2. **Decreasing chain branching:** straight-chain molecules have a **larger surface area** and pack more compactly together, making them harder to separate. Branched molecules are more spherical, reducing contact surface area and lowering the boiling point.
>    * *Example:* Boiling point of butane (CHâ‚ƒCHâ‚‚CHâ‚‚CHâ‚ƒ) > 2-methylpropane ((CHâ‚ƒ)â‚ƒCH)

> [!BOX]
> ### ðŸ“‹ Types of Chemical Formulae
> Organic molecules can be represented in several different ways:
>
> 1. **General Formula:** The simplest algebraic formula describing any member of a homologous series, where *n* is a whole number.
>    * Alkanes: Câ‚™Hâ‚‚â‚™â‚Šâ‚‚
>    * Alkenes and cycloalkanes: Câ‚™Hâ‚‚â‚™
>
> 2. **Empirical Formula:** The simplest whole-number ratio of atoms of each element in a molecule.
>
> 3. **Molecular Formula:** The actual number of atoms of each element in a molecule.
>    * *Example (methylpropane):* Molecular formula = **Câ‚„Hâ‚â‚€**, Empirical formula = **Câ‚‚Hâ‚…**
>
> 4. **Structural Formula:** Shows how the atoms are bonded to each carbon atom, written carbon-by-carbon.
>    * *Butane:* CHâ‚ƒCHâ‚‚CHâ‚‚CHâ‚ƒ
>
> 5. **Displayed Formula:** Shows **every atom and every bond** in the compound.
>
> 6. **Skeletal Formula:** Shows only the bonds and non-carbon atoms:
>    * Vertices represent carbon atoms.
>    * Hydrogen atoms bonded to carbon are assumed (not shown) unless stated otherwise.
>    * *Example (propane):* /\\

> [!IMPORTANT]
> ### ðŸ“‚ Homologous Series & Functional Groups
> * **Homologous Series:** A family of organic compounds that:
>    1. Have similar chemical properties due to the presence of the same **functional group**.
>    2. Each successive member differs by a **â€“CHâ‚‚â€“** unit.
>    3. Have the same **general formula**.
>    4. Display a **trend in physical properties** (e.g., boiling point increases with chain length).
> * **Functional Group:** An atom or group of atoms responsible for the characteristic chemical properties and reactivity of the molecule.
>
> | Name | Functional Group | General Formula | Suffix / Prefix |
> | :--- | :---: | :--- | :---: |
> | Alkane | Câ€“C | Câ‚™Hâ‚‚â‚™â‚Šâ‚‚ | -ane |
> | Alkene | C=C | Câ‚™Hâ‚‚â‚™ | -ene |
> | Halogenoalkane | Râ€“X | Câ‚™Hâ‚‚â‚™â‚Šâ‚X | halo- |
> | Alcohol | Râ€“OH | Câ‚™Hâ‚‚â‚™â‚Šâ‚OH | -ol |
> | Aldehyde | Râ€“CHO | Câ‚™Hâ‚‚â‚™â‚Šâ‚CHO | -al |
> | Ketone | Râ€“COâ€“R' | Câ‚™Hâ‚‚â‚™â‚Šâ‚COCâ‚™'Hâ‚‚â‚™'â‚Šâ‚ | -one |
> | Carboxylic Acid | Râ€“COOH | Câ‚™Hâ‚‚â‚™â‚Šâ‚COOH | -oic acid |
> | Ester | Râ€“COOâ€“R' | Câ‚™Hâ‚‚â‚™â‚Šâ‚COOCâ‚™'Hâ‚‚â‚™'â‚Šâ‚ | -oate |
> | Amine | Râ€“NHâ‚‚ | Câ‚™Hâ‚‚â‚™â‚Šâ‚NHâ‚‚ | -amine |
> | Nitrile | Râ€“CN | Câ‚™Hâ‚‚â‚™â‚Šâ‚CN | -nitrile |

> [!EXAMPLE]
> #### ðŸ“ Example 1: Deducing Formulae
> **Question:** Methylpropane has the molecular formula Câ‚„Hâ‚â‚€. Write down:
> 1. Its empirical formula
> 2. Its structural formula
> 3. Its skeletal formula
>
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> >
> > 1. **Empirical Formula:**
> >    * The molecular formula is Câ‚„Hâ‚â‚€. The ratio of C:H is 4:10, which simplifies by a factor of 2.
> >    * Empirical Formula: **Câ‚‚Hâ‚…**
> >
> > 2. **Structural Formula:**
> >    * The central carbon is bonded to three CHâ‚ƒ groups:
> >    * Structural Formula: **(CHâ‚ƒ)â‚ƒCH** or CHâ‚ƒCH(CHâ‚ƒ)CHâ‚ƒ
> >
> > 3. **Skeletal Formula:**
> >    * Draw three branches meeting at a central vertex:
> >    * Skeletal Formula: /\\ (with a branch pointing downward from the central vertex)

> [!EXAMPLE]
> #### ðŸ“ Example 2: Sigma and Pi Bonds in a Cyclic Hydrocarbon
> **Question:** A cyclic hydrocarbon has the structure shown below:
>
> ![Benzene Structure](/images/lessons/benzene_structure.svg)
>
> Deduce the number of sigma (Ïƒ) and pi (Ï€) bonds present in this molecule.
>
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> >
> > 1. **Identify the molecular formula and atoms:**
> >    * The structure shown is benzene, which has the formula Câ‚†Hâ‚†.
> >    * There are 6 carbon atoms arranged in a hexagonal ring, and each carbon is bonded to 1 hydrogen atom.
> >
> > 2. **Count the single bonds (Sigma Ïƒ bonds):**
> >    * Each carbon-hydrogen (C-H) bond is a single Ïƒ bond: **6 Ïƒ bonds**.
> >    * The carbon ring consists of 6 C-C connections (three single and three double bonds). Each connection contains exactly one Ïƒ bond: **6 Ïƒ bonds**.
> >    * Total Ïƒ bonds = 6 + 6 = **12**.
> >
> > 3. **Count the double bonds (Pi Ï€ bonds):**
> >    * The ring contains three double bonds. Each double bond consists of one Ïƒ bond and one Ï€ bond.
> >    * Total Ï€ bonds = **3**.
> >
> > * Final Answer: **12 Ïƒ bonds and 3 Ï€ bonds**

> [!EXAMPLE]
> #### ðŸ“ Example 3: Deducing Empirical Formula
> **Question:** A compound has the molecular formula Câ‚†Hâ‚â‚‚. Deduce its empirical formula.
>
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> >
> > 1. **Understand the definition of Empirical Formula:**
> >    * An empirical formula represents the simplest whole-number ratio of atoms of each element in a molecule.
> >
> > 2. **Simplify the molecular ratio:**
> >    * The molecular formula is Câ‚†Hâ‚â‚‚. The ratio of carbon to hydrogen is 6:12.
> >    * Divide both numbers by their greatest common divisor (6) to find the simplest ratio: 1:2.
> >
> > * Final Answer: **CHâ‚‚**

> [!EXAMPLE]
> #### ðŸ“ Example 4: Homologous Series Characteristics
> **Question:** State which of the following properties is **not** identical for members of a homologous series: chemical properties, general formula, physical properties, or the difference between successive members.
>
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> >
> > 1. **Analyze the characteristics of a homologous series:**
> >    * **Chemical properties:** Similar (due to having the same functional group).
> >    * **General formula:** Identical (all members share the same algebraic formula).
> >    * **Difference between successive members:** Identical (always differs by a CHâ‚‚ unit).
> >    * **Physical properties:** Not identical. Physical properties (like boiling point and density) show a trend or gradual change as the carbon chain length increases.
> >
> > * Final Answer: **Physical properties**

> [!EXAMPLE]
> #### ðŸ“ Example 5: Identifying Functional Groups
> **Question:** Identify the functional group that is characterized by a carbon-carbon double bond (C=C).
>
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> >
> > 1. **Analyze C=C double bonds in functional groups:**
> >    * Organic compounds with a carbon-carbon double bond (C=C) belong to the **alkene** homologous series.
> >    * The double bond itself acts as the functional group determining their characteristic reactions.
> >
> > * Final Answer: **Alkene**

> [!EXAMPLE]
> #### ðŸ“ Example 6: Comparing and Explaining Boiling Points of Isomers (Branching)
> **Question:** Pentane (CHâ‚ƒCHâ‚‚CHâ‚‚CHâ‚‚CHâ‚ƒ) and 2,2-dimethylpropane ((CHâ‚ƒ)â‚„C) are isomers with the molecular formula Câ‚…Hâ‚â‚‚. Explain, in terms of structure and intermolecular forces, why pentane has a higher boiling point than 2,2-dimethylpropane.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Compare structure:**
> >    * Pentane is a straight-chain molecule, whereas 2,2-dimethylpropane is highly branched and more spherical.
> > 2. **Compare surface area and contact:**
> >    * Straight-chain pentane has a larger surface area and can pack more closely, allowing more points of contact between molecules.
> > 3. **Connect to intermolecular forces:**
> >    * Therefore, pentane has stronger London (dispersion) forces between its molecules, requiring more thermal energy to overcome than the weaker London forces in 2,2-dimethylpropane.

> [!EXAMPLE]
> #### ðŸ“ Example 7: Translating a Condensed Formula containing Functional Groups into a Skeletal Formula
> **Question:** A student is given the following condensed structural formula:
> CHâ‚ƒCH(OH)CHâ‚‚CHâ‚‚COOH
> 1. Identify all functional groups present.
> 2. Describe how to draw the skeletal formula for this compound.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the Functional Groups:**
> >    * Alcohol (-OH hydroxyl group) on carbon-4.
> >    * Carboxylic Acid (-COOH carboxyl group) on carbon-1.
> > 2. **Skeletal Construction Steps:**
> >    * Draw a zig-zag chain of 5 carbon atoms (be careful to include the carbon of the -COOH group as carbon-1 of the chain).
> >    * At carbon-1, add a double bond to an oxygen atom (=O) and a single bond to a hydroxyl group (-OH) to represent the carboxylic acid.
> >    * At carbon-4, add a single bond to an oxygen atom of a hydroxyl group (-OH).

> [!EXAMPLE]
> #### ðŸ“ Example 8: Identifying Homologous Series and Simpler Members
> **Question:** A compound has the structural formula $\text{CH}_3\text{CH}_2\text{CHO}$.
> 1. Identify the homologous series to which this compound belongs.
> 2. Write the structural formulae of the two simpler members in this same homologous series.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the homologous series:**
> >    * The compound contains the $-\text{CHO}$ functional group (carbonyl group at the end of the chain). This defines the **aldehyde** homologous series.
> > 
> > 2. **Deduce the simpler members:**
> >    * The given compound has 3 carbons (propanal). The simpler members must have 1 and 2 carbon atoms respectively.
> >    * The 1-carbon aldehyde (methanal) has the formula: **$\text{HCHO}$**
> >    * The 2-carbon aldehyde (ethanal) has the formula: **$\text{CH}_3\text{CHO}$**

`,
    keyPoints: [
      'Saturated hydrocarbons contain only single sigma (Ïƒ) bonds, whereas unsaturated hydrocarbons contain one or more pi (Ï€) bonds.',
      'Boiling points of hydrocarbons increase with longer carbon chains (due to stronger London dispersion forces) and decrease with increased branching (due to reduced surface contact area).',
      'A homologous series is a family of compounds with the same general formula and functional group, whose successive members differ by a -CHâ‚‚- unit.'
    ]
  },
  {
    id: 'organic-nomenclature-20260627',
    title: 'IUPAC Nomenclature (Naming Rules)',
    type: 'text',
    content: `
> [!NOTE]
> ### ðŸ·ï¸ IUPAC Systematic Nomenclature
> **Nomenclature** is a standardized set of rules that outlines how different organic compounds should be named and how their chemical formulas are represented.
> 
> * **Prefix (substituents):** Placed before the root chain name to show the presence of halogen atoms or alkyl side-chains (e.g., *chloro-*, *methyl-*, *ethyl-*).
> * **Locant:** A number used to indicate the specific carbon position in the main chain to which a substituent or functional group is attached.
> * **Multiplying Prefix:** Used when two or more identical side-chains or functional groups are present (e.g., *di-*, *tri-*, *tetra-*). **Note:** These are ignored during alphabetical ordering.
> * **Suffix:** A set of letters written at the end of the name to identify the primary functional group.

> [!IMPORTANT]
> ### ðŸ“ IUPAC Rules for Nomenclature
> Follow these steps in order to name any organic compound systematically:
>
> 1. **Find the longest continuous carbon chain containing the functional group:** This determines the **Root** (stem) name.
>
> | Carbon Number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
> | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
> | Root | meth | eth | prop | but | pent | hex | hept | oct | non | dec |
>
> 2. **Number the carbon chain:** Number from the end that gives the lowest possible numbers (locants) to the functional group or substituents.
> 3. **Assemble the name in alphabetical order of substituents:** List the prefixes alphabetically (e.g., *ethyl-* before *methyl-*), ignoring multiplying prefixes like *di-* or *tri-*.
> 4. **Use hyphens (-):** Use to separate numbers from words (e.g., *2-methylpropane*).
> 5. **Use commas (,):** Use to separate numbers from other numbers (e.g., *2,3-dimethylbutane*).
> 6. **No spaces:** Write the final systematic name as one continuous word without unnecessary spaces.
> 7. **Standard Name Order:** 
>    $$\\\\text{[Locant] + [Prefix] + [Root] + [Locant] + [Suffix]}$$

> [!EXAMPLE]
> #### ðŸ“ Example 1: Naming a Branched Alkane
> **Question:** Give the systematic IUPAC name for the following compound:
> CHâ‚ƒ-C(CHâ‚ƒ)â‚‚-CHâ‚‚-CHâ‚ƒ
>
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> >
> > 1. **Find the longest carbon chain:**
> >    * The longest continuous carbon chain has 4 carbon atoms. The root is **but-** and since it is an alkane, the name ends in **-ane** (butane).
> >
> > 2. **Identify side chains:**
> >    * There are two methyl (-CHâ‚ƒ) side chains attached to the same carbon atom.
> >
> > 3. **Number the chain:**
> >    * Numbering from the left gives the side chains position 2: **C1(Hâ‚ƒ)-C2(CHâ‚ƒ)â‚‚-C3(Hâ‚‚)-C4(Hâ‚ƒ)**.
> >    * Numbering from the right would give position 3.
> >    * Therefore, we choose position 2.
> >
> > 4. **Assemble the name:**
> >    * Use commas to separate the numbers: **2,2**
> >    * Use a hyphen to separate the number and multiplying prefix: **2,2-dimethyl**
> >    * Combine with root and suffix: **2,2-dimethylbutane**
> >
> * Final Answer: **2,2-dimethylbutane**

> [!EXAMPLE]
> #### ðŸ“ Example 2: Naming a Multi-substituted Branched Alkane
> **Question:** Deduce the IUPAC name of the compound shown in the skeletal formula below:
>
> ![Skeletal Octane](/images/lessons/skeletal_octane.svg)
>
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> >
> > 1. **Find the longest continuous carbon chain:**
> >    * Tracing from the ethyl group at the bottom-left to the ethyl group at the bottom-right gives the longest continuous chain of **8 carbon atoms** (root: **octane**).
> >
> > 2. **Identify the side chains:**
> >    * There are three methyl (â€“CHâ‚ƒ) groups acting as branches on the main chain.
> >
> > 3. **Number the chain to give the lowest possible locants:**
> >    * Numbering from the left (bottom-left ethyl as C1, C2) gives methyl positions at: **3, 5, 6**
> >    * Numbering from the right (bottom-right ethyl as C1, C2) gives methyl positions at: **3, 4, 6**
> >    * Comparing the two sets of locants at the first point of difference, **3, 4, 6** is lower than **3, 5, 6**.
> >    * Therefore, we number the chain from the right.
> >
> > 4. **Assemble the name:**
> >    * Combine the locants and multiplying prefix: **3,4,6-trimethyl**
> >    * Combine with root and suffix: **3,4,6-trimethyloctane**
> >
> * Final Answer: **3,4,6-trimethyloctane**

> [!EXAMPLE]
> #### ðŸ“ Example 3: IUPAC Name from Condensed Structural Formula
> **Question:** Deduce the correct IUPAC name for the compound with the following condensed formula:
> $$(CHâ‚ƒ)â‚‚CHCH(Cl)CH(CHâ‚‚CHâ‚ƒ)â‚‚$$
>
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> >
> > 1. **Expand the condensed formula to find the longest chain:**
> >    * The right end has a CH group bonded to two ethyl groups: â€“CH(CHâ‚‚CHâ‚ƒ)â‚‚.
> >    * The left end has a CH group bonded to two methyl groups: (CHâ‚ƒ)â‚‚CHâ€“.
> >    * Tracing the longest chain from one of the ethyl groups on the right through the CH and CH(Cl) groups to one of the methyl groups on the left gives a chain of **6 carbon atoms** (root: **hexane**).
> >
> > 2. **Identify the substituents on the chain:**
> >    * A methyl group (â€“CHâ‚ƒ)
> >    * A chlorine atom (â€“Cl)
> >    * An ethyl group (â€“CHâ‚‚CHâ‚ƒ)
> >
> > 3. **Number the chain to obtain the lowest locants:**
> >    * Numbering from the left (starting near the isopropyl group):
> >      * Carbon 2 has a methyl group.
> >      * Carbon 3 has a chloro group.
> >      * Carbon 4 has an ethyl group.
> >      * Locant set: **2, 3, 4**
> >    * Numbering from the right:
> >      * Carbon 3 has an ethyl group.
> >      * Carbon 4 has a chloro group.
> >      * Carbon 5 has a methyl group.
> >      * Locant set: **3, 4, 5**
> >    * The set **2, 3, 4** is lower than **3, 4, 5**, so we number from the left.
> >
> > 4. **Assemble alphabetically:**
> >    * Chloro (at position 3) comes before ethyl (at position 4), which comes before methyl (at position 2).
> >    * Systematic name: **3-chloro-4-ethyl-2-methylhexane**
> >
> * Final Answer: **3-chloro-4-ethyl-2-methylhexane**

> [!EXAMPLE]
> #### ðŸ“ Example 4: Naming Halogenoalkanes with Alphabetical Priority
> **Question:** Deduce the correct IUPAC name for the following halogenoalkane:
>
> ![Halogenoalkane Structure](/images/lessons/halogenoalkane_structure.svg)
>
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> >
> > 1. **Find the longest carbon chain:**
> >    * The main chain contains **5 carbon atoms** (root: **pentane**).
> >
> > 2. **Identify the substituents:**
> >    * A chlorine atom (chloro-) and a bromine atom (bromo-).
> >
> > 3. **Number the chain to give the lowest locants:**
> >    * Numbering from the left gives substituents at positions: **2 (chloro) and 4 (bromo)**.
> >    * Numbering from the right gives substituents at positions: **2 (bromo) and 4 (chloro)**.
> >    * Since both numbering directions yield the identical locant set (**2, 4**), we assign the lower number to the substituent that has **alphabetical priority**.
> >    * **Bromo-** comes alphabetically before **chloro-**, so the bromine atom is assigned position 2 and chlorine is assigned position 4.
> >
> > 4. **Assemble the name alphabetically:**
> >    * **2-bromo-4-chloropentane**
> >
> * Final Answer: **2-bromo-4-chloropentane**

> [!EXAMPLE]
> #### ðŸ“ Example 5: IUPAC Name of Neopentane
> **Question:** Deduce the correct IUPAC name for the compound with the formula:
> $$(CHâ‚ƒ)â‚„C$$
>
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> >
> > 1. **Draw or visualize the molecular structure:**
> >    * The central carbon atom is bonded to 4 methyl (â€“CHâ‚ƒ) groups.
> > 2. **Find the longest carbon chain:**
> >    * Tracing through the central carbon connecting any two methyl groups yields a chain of **3 carbon atoms** (root: **propane**).
> > 3. **Identify the substituents and their positions:**
> >    * The central carbon (carbon 2) has two methyl groups attached as branches.
> > 4. **Assemble the name:**
> >    * Since there are two methyl groups at carbon 2, we use the locants **2,2-** and multiplying prefix **di-**.
> >    * Systematic name: **2,2-dimethylpropane**
> >
> * Final Answer: **2,2-dimethylpropane**

> [!EXAMPLE]
> #### ðŸ“ Example 6: Naming Compounds with Multiple Feature Priorities (Alkene with Branching)
> **Question:** Give the systematic IUPAC name for the following compound:
> CHâ‚ƒCH(CHâ‚ƒ)CH=CHCHâ‚ƒ
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the longest carbon chain containing the functional group:**
> >    * The longest continuous chain containing the C=C double bond has 5 carbon atoms. The root is **pent-** and the suffix is **-ene**.
> > 2. **Number the chain for functional group priority:**
> >    * The C=C double bond has numbering priority over alkyl branches.
> >    * Numbering from left to right: the C=C double bond starts at carbon-3.
> >    * Numbering from right to left: the C=C double bond starts at carbon-2.
> >    * We choose right-to-left numbering to give the double bond the lower number. The parent alkene is **pent-2-ene**.
> > 3. **Identify and locate the branch:**
> >    * With right-to-left numbering, the methyl (â€“CHâ‚ƒ) branch is attached to carbon-4.
> > 4. **Assemble the name:**
> >    * Combine the locant, branch name, root, and suffix: **4-methylpent-2-ene** (not 2-methylpent-3-ene).

> [!EXAMPLE]
> #### ðŸ“ Example 7: Drawing Skeletal Structure from an IUPAC Name
> **Question:** Draw the skeletal formula for the compound **3-methylbutan-1-ol**.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Decode the root and primary functional group suffix:**
> >    * The root **butan-** indicates a main chain of 4 carbon atoms.
> >    * The suffix **-1-ol** indicates an alcohol group (â€“OH) attached to carbon-1.
> > 2. **Decode the prefix branches:**
> >    * **3-methyl** indicates a methyl group (â€“CHâ‚ƒ) attached to carbon-3.
> > 3. **Describe the skeletal drawing steps:**
> >    * Draw a 4-carbon zig-zag chain.
> >    * Add a single bond pointing to an â€“OH group on carbon-1.
> >    * Draw a single line representing a methyl branch pointing outward from carbon-3.

> [!EXAMPLE]
> #### ðŸ“ Example 8: Deducing IUPAC Names from Structural Formulae
> **Question:** Deduce the systematic IUPAC names for the following compounds:
> 1. $\text{CH}_2(\text{Br})-\text{CH}(\text{Br})-\text{CH}_3$
> 2. $\text{CH}_2(\text{Br})-\text{CH}(\text{OH})-\text{CH}_3$
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Deduce name of compound 1:**
> >    * Longest carbon chain is 3 carbon atoms (root: propane).
> >    * Number the chain from the end closest to the substituents (left-to-right) to give the lowest locant set: carbon-1 and carbon-2.
> >    * There are two bromine atoms, so use multiplying prefix 'di-'.
> >    * Systematic name: **1,2-dibromopropane**
> > 
> > 2. **Deduce name of compound 2:**
> >    * Longest carbon chain is 3 carbon atoms containing the principal functional group (alcohol). The suffix is **-ol**.
> >    * Alcohol has priority over halogen substituents for numbering. Therefore, the chain is numbered to give the -OH group the lowest number (carbon-2).
> >    * The bromine atom is at carbon-1.
> >    * Systematic name: **1-bromopropan-2-ol** (not 3-bromopropan-2-ol).

> [!EXAMPLE]
> #### ðŸ“ Example 9: Writing Structural Formulae from IUPAC Names
> **Question:** Write the structural formulae for the following compounds:
> 1. **2,2-dimethylpentane**
> 2. **2,3-dimethylbutan-2-ol**
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Write formula of 2,2-dimethylpentane:**
> >    * The root 'pentane' indicates 5 carbon atoms in the main chain.
> >    * Carbon-2 has two methyl groups ($-\text{CH}_3$) attached to it.
> >    * Structural formula: **$\text{CH}_3\text{C(CH}_3)_2\text{CH}_2\text{CH}_2\text{CH}_3$**
> > 
> > 2. **Write formula of 2,3-dimethylbutan-2-ol:**
> >    * The root 'butane' indicates 4 carbon atoms in the main chain.
> >    * The suffix '-2-ol' indicates an $-\text{OH}$ group on carbon-2.
> >    * There are methyl groups on carbon-2 and carbon-3.
> >    * Structural formula: **$\text{CH}_3\text{C(OH)(CH}_3)\text{CH(CH}_3)\text{CH}_3$**

`,
    keyPoints: [
      'Systematic names are derived by finding the longest carbon chain containing the functional group and numbering it to give the lowest locants.',
      'Substituents are listed alphabetically (ignoring multiplying prefixes like di- and tri-) with numbers separated from words by hyphens.',
      'If numbering from both directions yields the same locant set, alphabetical priority determines the lower locant assignment.'
    ]
  },
  {
    id: 'organic-isomerism-20260627',
    title: 'Structural Isomerism',
    type: 'text',
    content: `
> [!NOTE]
> ### ðŸªž What is Isomerism?
> **Isomers** are compounds with the same molecular formula but different structural arrangements of atoms.
> 
> * **Structural Isomers:** Compounds with the same molecular formula but different structural formulas.

> [!BOX]
> ### ðŸ“‹ Types of Structural Isomerism
> Structural isomerism can be divided into three categories:
> 
> 1. **Chain Isomerism:** The carbon skeleton is arranged differently (e.g., straight-chain vs. branched).
>    * *Example:* Butane (CHâ‚ƒCHâ‚‚CHâ‚‚CHâ‚ƒ) and Methylpropane (CHâ‚ƒCH(CHâ‚ƒ)CHâ‚ƒ) both have the formula Câ‚„Hâ‚â‚€
> 2. **Position Isomerism:** The functional group is attached to different carbon atoms along the same chain.
>    * *Example:* 1-chloropropane (CHâ‚ƒCHâ‚‚CHâ‚‚Cl) and 2-chloropropane (CHâ‚ƒCH(Cl)CHâ‚ƒ)
> 3. **Functional Group Isomerism:** The atoms are rearranged to form completely different functional groups.
>    * *Example:* Alkenes and Cycloalkanes (e.g., Propene Câ‚ƒHâ‚† and Cyclopropane Câ‚ƒHâ‚†)
>    * *Example:* Alcohols and Ethers (e.g., Ethanol CHâ‚ƒCHâ‚‚OH and Dimethyl ether CHâ‚ƒOCHâ‚ƒ)

> [!EXAMPLE]
> #### ðŸ“ Worked Example 1: Identifying Isomers
> **Question:** Draw and name the two structural isomers of Câ‚„Hâ‚‰Cl that contain a straight carbon chain.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Analyze the request:**
> >    * The carbon chain must be straight (4 carbons in a row: butane).
> >    * The halogen (-Cl) can be placed at different positions (position isomerism).
> > 
> > 2. **Isomer 1:**
> >    * Place -Cl on the first carbon atom: CHâ‚ƒCHâ‚‚CHâ‚‚CHâ‚‚Cl
> >    * Name: **1-chlorobutane**
> > 
> > 3. **Isomer 2:**
> >    * Place -Cl on the second carbon atom: CHâ‚ƒCHâ‚‚CH(Cl)CHâ‚ƒ
> >    * Name: **2-chlorobutane**

> [!EXAMPLE]
> #### ðŸ“ Worked Example 2: Functional Group Isomers of Alkenes and Cycloalkanes
> **Question:** An organic compound has the molecular formula Câ‚„Hâ‚ˆ. Identify and draw one alkene isomer and one cycloalkane isomer, and explain what type of structural isomerism they exhibit.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the molecular formula type:**
> >    * The formula Câ‚„Hâ‚ˆ fits the general formula Câ‚™Hâ‚‚â‚™.
> >    * This general formula is characteristic of both alkenes (open-chain with one double bond) and cycloalkanes (saturated cyclic structures).
> > 
> > 2. **Draw and name the alkene isomer:**
> >    * A straight-chain of 4 carbons with a C=C double bond at the start: CHâ‚‚=CHCHâ‚‚CHâ‚ƒ
> >    * Systematic name: **but-1-ene**
> > 
> > 3. **Draw and name the cycloalkane isomer:**
> >    * A 4-membered carbon ring (arranged as a square): a cyclic structure of four CHâ‚‚ groups.
> >    * Systematic name: **cyclobutane**
> > 
> > 4. **Classify the type of structural isomerism:**
> >    * Both compounds have the same molecular formula (Câ‚„Hâ‚ˆ) but belong to different homologous series and contain different functional groups (alkene double bond vs. cycloalkane ring).
> >    * Therefore, they exhibit **functional group isomerism**.

> [!EXAMPLE]
> #### ðŸ“ Worked Example 3: Chain Isomers of Câ‚…Hâ‚â‚‚
> **Question:** Pentane (Câ‚…Hâ‚â‚‚) has three structural isomers. Draw the structural formulas and state the systematic IUPAC names for the two branched isomers of pentane.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Understand Pentane's isomers:**
> >    * Pentane (Câ‚…Hâ‚â‚‚) is a saturated alkane.
> >    * The straight-chain isomer is pentane (CHâ‚ƒCHâ‚‚CHâ‚‚CHâ‚‚CHâ‚ƒ). The remaining two isomers must contain carbon branching.
> > 
> > 2. **Deduce Isomer 1 (Single branch):**
> >    * Take a methyl group branch and attach it to the second carbon of a 4-carbon chain: CHâ‚ƒCH(CHâ‚ƒ)CHâ‚‚CHâ‚ƒ
> >    * Systematic IUPAC name: **2-methylbutane**
> > 
> > 3. **Deduce Isomer 2 (Double branch):**
> >    * Attach two methyl branches to the central carbon of a 3-carbon chain: CHâ‚ƒC(CHâ‚ƒ)â‚‚CHâ‚ƒ
> >    * Systematic IUPAC name: **2,2-dimethylpropane**
> > 
> > 4. **Identify the type of isomerism:**
> >    * Since these isomers differ only in the arrangement of the carbon skeleton (chain structure), they represent **chain isomerism**.

> [!EXAMPLE]
> #### ðŸ“ Worked Example 4: Position Isomers of Alcohols
> **Question:** An alcohol has the molecular formula Câ‚„Hâ‚â‚€O. State the IUPAC names and draw the structural formulas of two position isomers with a straight carbon chain.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Analyze the structural requirements:**
> >    * The carbon chain must be straight (4 carbons in a row).
> >    * The functional group is a hydroxyl group (-OH).
> >    * The isomers must differ only in the position of this functional group along the chain.
> > 
> > 2. **Isomer 1 (Hydroxyl at Carbon-1):**
> >    * Place the -OH group at the end of the chain: CHâ‚ƒCHâ‚‚CHâ‚‚CHâ‚‚OH
> >    * Systematic IUPAC name: **butan-1-ol**
> > 
> > 3. **Isomer 2 (Hydroxyl at Carbon-2):**
> >    * Place the -OH group on the second carbon atom: CHâ‚ƒCH(OH)CHâ‚‚CHâ‚ƒ
> >    * Systematic IUPAC name: **butan-2-ol**
> > 
> > 4. **Verify classification:**
> >    * Both share the same carbon backbone and functional group, differing only in the position index of the -OH group, which defines **position isomerism**.

> [!EXAMPLE]
> #### ðŸ“ Worked Example 5: Aldehydes and Ketones as Isomers of Câ‚ƒHâ‚†O
> **Question:** The molecular formula Câ‚ƒHâ‚†O represents two structural isomers that belong to different homologous series (aldehydes and ketones). Write down the structural formulas and systematic IUPAC names for both isomers.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Deduce the aldehyde isomer:**
> >    * Aldehydes contain the carbonyl functional group (-CHO) at the end of the chain.
> >    * For 3 carbon atoms, the structure is: CHâ‚ƒCHâ‚‚CHO
> >    * Systematic IUPAC name: **propanal**
> > 
> > 2. **Deduce the ketone isomer:**
> >    * Ketones contain the carbonyl group (C=O) positioned between two carbon atoms (not at the terminal position).
> >    * For 3 carbon atoms, the structure is: CHâ‚ƒCOCHâ‚ƒ
> >    * Systematic IUPAC name: **propanone**
> > 
> > 3. **Confirm the relationship:**
> >    * With the same molecular formula (Câ‚ƒHâ‚†O) but completely different functional groups, these compounds represent **functional group isomerism**.

> [!EXAMPLE]
> #### ðŸ“ Worked Example 6: Functional Group Isomers of Carboxylic Acids and Esters
> **Question:** An organic compound has the molecular formula Câ‚ƒHâ‚†Oâ‚‚. Draw the structural formulas and state the systematic IUPAC names for two functional group isomers representing different homologous series.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Analyze the molecular formula:**
> >    * The formula fits Câ‚™Hâ‚‚â‚™Oâ‚‚, which represents either a carboxylic acid or an ester.
> > 2. **Deduce the carboxylic acid isomer:**
> >    * A 3-carbon chain containing the â€“COOH group: CHâ‚ƒCHâ‚‚COOH
> >    * Systematic IUPAC name: **propanoic acid**
> > 3. **Deduce the ester isomer:**
> >    * Re-arrange the atoms to form an ester group (â€“COOâ€“). For example: CHâ‚ƒCOOCHâ‚ƒ
> >    * Systematic IUPAC name: **methyl ethanoate** (another option is ethyl methanoate, HCOOCHâ‚‚CHâ‚ƒ)
> > 4. **Classify the isomerism:**
> >    * Since they contain different functional groups but the same molecular formula, they represent **functional group isomerism**.

> [!EXAMPLE]
> #### ðŸ“ Worked Example 7: Systematic Identification of Combined Isomers (Câ‚„Hâ‚‰Br)
> **Question:** Deduce the total number of structural isomers for the molecular formula Câ‚„Hâ‚‰Br, draw their structural formulas, and state their systematic IUPAC names.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Start with a straight carbon chain (butane backbone - 4 carbons):**
> >    * Place the bromine atom on carbon-1: CHâ‚ƒCHâ‚‚CHâ‚‚CHâ‚‚Br (**1-bromobutane**).
> >    * Place the bromine atom on carbon-2: CHâ‚ƒCHâ‚‚CH(Br)CHâ‚ƒ (**2-bromobutane**).
> 2. **Next, branch the carbon skeleton (propane backbone with a methyl group - 3 carbons):**
>    * Backbone structure: CHâ‚ƒCH(CHâ‚ƒ)CHâ‚‚â€“
>    * Place the bromine atom on carbon-1: CHâ‚ƒCH(CHâ‚ƒ)CHâ‚‚Br (**1-bromo-2-methylpropane**).
>    * Place the bromine atom on the central carbon-2: CHâ‚ƒC(Br)(CHâ‚ƒ)CHâ‚ƒ (**2-bromo-2-methylpropane**).
> 3. **Conclusion:**
>    * There are a total of **4** structural isomers.

> [!EXAMPLE]
> #### ðŸ“ Worked Example 8: Drawing All Isomers for a Dihaloalkane ($C_4H_8Cl_2$)
> **Question:** Draw the structural formulas and state the systematic IUPAC names for all structural isomers with the molecular formula $C_4H_8Cl_2$.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Analyze straight-chain butane backbone ($C-C-C-C$):**
> >    * Both Cl on C1: $\text{CHCl}_2\text{CH}_2\text{CH}_2\text{CH}_3$ (**1,1-dichlorobutane**)
> >    * Both Cl on C2: $\text{CH}_3\text{CCl}_2\text{CH}_2\text{CH}_3$ (**2,2-dichlorobutane**)
> >    * Cl on C1 and C2: $\text{CH}_2\text{(Cl)CH(Cl)CH}_2\text{CH}_3$ (**1,2-dichlorobutane**)
> >    * Cl on C1 and C3: $\text{CH}_2\text{(Cl)CH}_2\text{CH(Cl)CH}_3$ (**1,3-dichlorobutane**)
> >    * Cl on C1 and C4: $\text{CH}_2\text{(Cl)CH}_2\text{CH}_2\text{CH}_2\text{(Cl)}$ (**1,4-dichlorobutane**)
> >    * Cl on C2 and C3: $\text{CH}_3\text{CH(Cl)CH(Cl)CH}_3$ (**2,3-dichlorobutane**)
> > 
> > 2. **Analyze branched methylpropane backbone ($\text{CH}_3\text{CH(CH}_3)\text{CH}_3$):**
> >    * Both Cl on C1: $\text{CHCl}_2\text{CH(CH}_3)\text{CH}_3$ (**1,1-dichloro-2-methylpropane**)
> >    * Cl on C1 and C2: $\text{CH}_2\text{(Cl)C(Cl)(CH}_3)\text{CH}_3$ (**1,2-dichloro-2-methylpropane**)
> >    * Cl on C1 and C3: $\text{CH}_2\text{(Cl)CH(CH}_3)\text{CH}_2\text{(Cl)}$ (**1,3-dichloro-2-methylpropane**)
> > 
> > 3. **Conclusion:**
> >    * There are a total of **9** structural isomers.

> [!EXAMPLE]
> #### ðŸ“ Worked Example 9: Drawing Cycloalkane Isomers ($C_5H_{10}$)
> **Question:** Cycloalkanes are functional group isomers of alkenes. Draw the structural formulas and state the systematic IUPAC names for all cycloalkane isomers with the molecular formula $C_5H_{10}$.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **5-membered ring (cyclopentane skeleton):**
> >    * A simple 5-membered carbon ring: **cyclopentane**
> > 
> > 2. **4-membered ring with 1 branch (cyclobutane skeleton):**
> >    * A 4-membered ring with a methyl branch: **methylcyclobutane**
> > 
> > 3. **3-membered ring with 2 branches (cyclopropane skeleton):**
> >    * Both methyls on the same carbon: **1,1-dimethylcyclopropane**
> >    * Methyls on adjacent carbon atoms: **1,2-dimethylcyclopropane**
> >    * One ethyl branch on the ring: **ethylcyclopropane**
> > 
> > 4. **Conclusion:**
> >    * There are exactly **5** cycloalkane isomers for the molecular formula $C_5H_{10}$.

`,
    keyPoints: [
      'Structural isomers share the same molecular formula but have different structural formulas.',
      'The three types of structural isomerism are chain isomerism (skeleton differences), position isomerism (functional group site differences), and functional group isomerism (different functional groups).'
    ]
  },
  {
    id: 'bond-fission-and-reactions-20260627',
    title: 'Bond Fission, Radicals & Species',
    type: 'text',
    content: `
> [!NOTE]
> ### âš¡ Covalent Bond Fission & Reaction Arrows
> Covalent bond breaking (fission) can occur in one of two ways depending on how the shared pair of electrons is distributed:
> 
> 1. **Heterolytic Fission:**
>    * The breaking of a covalent bond where **both electrons** from the shared pair go to one of the atoms.
>    * This produces ions: a positive cation (electrophile) and a negative anion (nucleophile).
>    * **Reaction Arrow:** Represented by a **full-headed curved arrow** ($\\\\curvearrowright$) showing the movement of an electron pair.
>
>    ${svgToken(heterolyticSvg)}
>
> 2. **Homolytic Fission:**
>    * The breaking of a covalent bond where **each atom gets one electron** (the electron pair splits evenly).
>    * **Reaction Arrow:** Represented by two **half-headed (fishhook) curved arrows** ($\\\\rightharpoonup$), each showing the movement of a single electron.
>    * **Conditions:** Requires U.V. light or sunlight to provide the energy to break the bond.
>    * **Occurrence:** Usually happens when two atoms with identical or very similar electronegativity are bonded together (e.g. diatomic halogens like Clâ‚‚&nbsp;â†’&nbsp;2Clâ€¢).
>    * This produces highly reactive neutral species called **free radicals**.
>
>    ${svgToken(homolyticSvg)}

> [!BOX]
> ### ðŸ§² Types of Reactive Species
> 1. **Free Radical:**
>    * A highly reactive species that contains an **unpaired valence electron** (represented by a single dot, e.g. $\\\\text{Cl}\\\\bullet$).
>    * Formed via homolytic fission.
> 2. **Electrophile:**
>    * An electron-deficient species (electron-pair acceptor) that is attracted to and attacks regions of **high electron density** (e.g. $\\\\text{H}^+$).
> 3. **Nucleophile:**
>    * An electron-rich species (electron-pair donor) that attacks **electron-deficient** atoms, such as a polar positive carbon atom (e.g. $\\\\text{OH}^-$).

> [!TIP]
> ### ðŸ”„ Classification of Organic Reactions
> Organic chemical reactions can be categorized into several fundamental types:
> 
> 1. **Addition:** A reaction in which two or more substances combine to form one single new compound.
>    * *Example:* Câ‚‚Hâ‚„ + Brâ‚‚ â†’ Câ‚‚Hâ‚„Brâ‚‚ (electrophilic addition / halogenation of an alkene containing a Ï€ bond).
> 2. **Substitution:** A reaction in which an atom or group of atoms is replaced by another atom or group.
>    * *Example:* Câ‚‚Hâ‚† + Brâ‚‚ â†’ Câ‚‚Hâ‚…Br + HBr (free-radical substitution / halogenation of a saturated alkane with no Ï€ bonds).
> 3. **Oxidation:** A reaction where a species gains oxygen, or loses hydrogen or electrons.
>    * *Examples:* 
>      * CHâ‚„ + 2Oâ‚‚ â†’ COâ‚‚ + 2Hâ‚‚O (combustion of alkanes/alkenes)
>      * Câ‚‚Hâ‚…OH + [O] â†’ CHâ‚ƒCHO + Hâ‚‚O (oxidation of alcohol to aldehyde)
> 4. **Reduction:** A reaction where a species loses oxygen, or gains hydrogen or electrons.
>    * *Example:* Câ‚‚Hâ‚„ + Hâ‚‚ â†’ Câ‚‚Hâ‚† (hydrogenation of alkene / addition reaction).
> 5. **Addition Polymerization:** A reaction where a large number of small unsaturated monomer molecules react together to form one very large polymer molecule.
>    * *Example:* nCâ‚‚Hâ‚„ â†’ â€”[Câ‚‚Hâ‚„]â‚™â€” (polymerization of ethene to poly(ethene)).

> [!BOX]
> ### âš™ï¸ Industrial Reaction Types: Reforming & Cracking
> Alkanes undergo key industrial reactions to improve fuel efficiency and supply:
> 
> * **Reforming:** Conversion of straight-chain alkanes (during petroleum refining) by a catalytic reaction (using a platinum catalyst) to produce smoothly burning fuels (raising octane rating, preventing pre-ignition and engine knocking):
>    * Produces **branched-chain alkanes**.
>    * Produces **cycloalkanes + Hâ‚‚** or **cycloalkenes + Hâ‚‚** (dehydrogenation) such as benzene and methylbenzene.
> 
> * **Cracking:** The breaking down of longer-chain, less useful alkanes into shorter, more valuable hydrocarbons.
>    * **Thermal Cracking:** Conducted at high temperatures (400Â°C to 900Â°C) and high pressure (up to 7000 kPa). It mainly produces shorter-chain alkanes and alkenes.
>    * **Catalytic Cracking:** Conducted at high temperatures (450Â°C) and low pressure in the presence of a zeolite catalyst (containing Al, Si, and O). It mainly produces shorter-chain products, including branched alkanes, cycloalkanes, and aromatic compounds.
>    * *Safety Note:* Oxygen must be strictly excluded during steam/thermal cracking to prevent combustion.
> 
> **Economic Importance of Cracking & Reforming:**
> 1. **Supply and Demand Matching:** Matches the supply of fractional distillation products with their higher market demand.
> 2. **Better Fuels:** Shorter-chain alkanes burn much more easily and are highly useful as fuels.
> 3. **Polymer Feedstocks:** Alkenes are highly valuable feedstocks used to manufacture polymers and plastics.
> 4. **Hydrogen Production:** Reforming produces hydrogen gas as a valuable byproduct.


> [!EXAMPLE]
> #### ðŸ“ Example 1: Classifying Bond Fission
> **Question:** Identify the type of fission that occurs in the following reaction and explain your answer:
> Hâ‚ƒC-Cl â†’ Hâ‚ƒCâº + Clâ»
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Observe the products:**
> >    * The products are ions: a methyl carbocation (Hâ‚ƒCâº) and a chloride anion (Clâ»).
> > 2. **Analyze the electron transfer:**
> >    * The chlorine atom is more electronegative than carbon, so it takes both bonding electrons, leaving carbon electron-deficient.
> > 3. **Classify:**
> >    * Unequal splitting of a bond forming ions is **heterolytic fission**.

> [!EXAMPLE]
> #### ðŸ“ Example 2: Reaction Classification and Species Identification
> **Question:** Bromoethane reacts with hot aqueous potassium hydroxide to produce ethanol and potassium bromide:
> CHâ‚ƒCHâ‚‚Br + KOH â†’ CHâ‚ƒCHâ‚‚OH + KBr
> 1. Classify this organic reaction type.
> 2. Identify the active species attacking bromoethane, and classify it as an electrophile or a nucleophile.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Classify the reaction type:**
> >    * The bromine atom in bromoethane is replaced by the hydroxyl (-OH) group.
> >    * A reaction where one atom or group is replaced by another is a **substitution** reaction.
> > 2. **Identify and classify the attacking species:**
> >    * KOH dissociates in water to produce hydroxide ions (OHâ»).
> >    * The OHâ» ion has lone pairs of electrons and a negative charge. It attacks the electron-deficient carbon (CÎ´+) bonded to the electronegative bromine.
> >    * Since it donates an electron pair, it acts as a **nucleophile**.

> [!EXAMPLE]
> #### ðŸ“ Example 3: Bond Fission in Methane Chlorination
> **Question:** During the photochemical chlorination of methane, chlorine molecules undergo homolytic fission. Explain, in terms of electrons and electronegativity, why homolytic fission occurs rather than heterolytic fission.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Analyze bond electronegativity:**
> >    * The covalent bond is between two chlorine atoms (Clâ€“Cl).
> >    * Both atoms have identical electronegativity, so the shared pair of electrons is distributed equally between them.
> > 2. **Analyze electron redistribution:**
> >    * When UV light provides the required activation energy, the bond breaks symmetrically.
> >    * Each chlorine atom takes exactly one electron from the shared bonding pair.
> >    * Consequently, homolytic fission occurs, producing two neutral chlorine free radicals (2Clâ€¢) instead of charged ions.

> [!EXAMPLE]
> #### ðŸ“ Example 4: Classifying Reactive Species
> **Question:** Classify the following chemical species as either electrophiles or nucleophiles:
> 1. AlClâ‚ƒ
> 2. NHâ‚ƒ
> 3. Hâ‚ƒOâº
> 4. CNâ»
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Analyze AlClâ‚ƒ:**
> >    * The aluminium atom is bonded to three chlorine atoms and has only 6 valence electrons (incomplete octet).
> >    * It can accept an electron pair, making it an **electrophile**.
> > 2. **Analyze NHâ‚ƒ:**
> >    * The nitrogen atom has a lone pair of electrons that it can readily donate.
> >    * It acts as an electron pair donor, making it a **nucleophile**.
> > 3. **Analyze Hâ‚ƒOâº:**
> >    * It carries a positive charge and can readily release a proton (Hâº), which accepts a pair of electrons.
> >    * It acts as an electron pair acceptor, making it an **electrophile**.
> > 4. **Analyze CNâ»:**
> >    * The cyanide ion carries a negative charge and has lone pairs of electrons on both carbon and nitrogen.
> >    * It acts as an electron pair donor, making it a **nucleophile**.

> [!EXAMPLE]
> #### ðŸ“ Example 5: Fission Mechanism Representation
> **Question:** State the representation and products for both homolytic and heterolytic fission using curved arrows.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Heterolytic Fission:**
> >    * Represented by a single **full-headed curved arrow** ($\\\\curvearrowright$), which shows the movement of a pair of electrons.
> >    * The products are charged species: a positive **cation** (electrophile) and a negative **anion** (nucleophile).
> > 2. **Homolytic Fission:**
> >    * Represented by two **half-headed (fishhook) curved arrows** ($\\\\rightharpoonup$), each showing the movement of a single electron.
> >    * The products are neutral, highly reactive species containing an unpaired valence electron, called **free radicals**.

> [!EXAMPLE]
> #### ðŸ“ Example 6: Catalytic Reforming of Alkanes
> **Question:** During the catalytic reforming of hexane to produce benzene, a dehydrogenation reaction occurs.
> 1. Write a balanced chemical equation for this reaction.
> 2. Explain the primary purpose of reforming straight-chain alkanes in the petroleum industry.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Write the balanced chemical equation:**
> >    * Hexane (Câ‚†Hâ‚â‚„) is converted to benzene (Câ‚†Hâ‚†) and hydrogen gas (Hâ‚‚).
> >    * Equation: Câ‚†Hâ‚â‚„ â†’ Câ‚†Hâ‚† + 4Hâ‚‚
> > 2. **Explain the purpose of reforming:**
> >    * Straight-chain alkanes are converted into branched-chain alkanes and cyclic or aromatic hydrocarbons.
> >    * Branched and cyclic hydrocarbons burn much more smoothly in car engines, which increases the octane rating of the fuel and prevents pre-ignition ("engine knocking").

> [!EXAMPLE]
> #### ðŸ“ Example 7: Thermal vs. Catalytic Cracking
> **Question:** Contrast the reaction conditions (temperature, pressure, and catalyst) and the main products obtained from thermal cracking versus catalytic cracking of long-chain alkanes.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Compare operating conditions:**
> >    * **Thermal Cracking:** Requires high temperatures (400Â°C to 900Â°C) and high pressure (up to 7000 kPa) without a catalyst.
> >    * **Catalytic Cracking:** Conducted at high temperatures (around 450Â°C), low/slight pressure, and requires a zeolite catalyst (containing Al, Si, and O).
> > 2. **Compare main products:**
> >    * **Thermal Cracking:** Mainly produces shorter-chain alkanes and a high proportion of alkenes (valuable for polymers).
> >    * **Catalytic Cracking:** Mainly produces shorter-chain products with a high proportion of branched alkanes, cycloalkanes, and aromatic compounds (valuable for high-efficiency fuels).

> [!EXAMPLE]
> #### ðŸ“ Example 8: Classifying Organic Reactions
> **Question:** Classify each of the following reactions as addition, substitution, oxidation, or reduction:
> 1. CHâ‚ƒCHâ‚‚OH + [O] â†’ CHâ‚ƒCHO + Hâ‚‚O
> 2. Câ‚‚Hâ‚„ + Hâ‚‚ â†’ Câ‚‚Hâ‚†
> 3. Câ‚‚Hâ‚† + Brâ‚‚ â†’ Câ‚‚Hâ‚…Br + HBr
> 4. Câ‚‚Hâ‚„ + Brâ‚‚ â†’ Câ‚‚Hâ‚„Brâ‚‚
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Analyze Reaction 1:**
> >    * Ethanol loses hydrogen atoms when reacted with an oxidizing agent [O] to form ethanal. This is **oxidation**.
> > 2. **Analyze Reaction 2:**
> >    * Ethene gains hydrogen atoms to form ethane. This is **reduction** (also classified as hydrogenation/addition).
> > 3. **Analyze Reaction 3:**
> >    * One hydrogen atom in ethane is replaced by a bromine atom. This is **substitution** (free-radical substitution).
> > 4. **Analyze Reaction 4:**
> >    * Bromine atoms add across the C=C double bond of ethene to form a single product. This is **addition** (electrophilic addition).

> [!EXAMPLE]
> #### ðŸ“ Example 9: Addition Polymerization and Economic Importance of Cracking
> **Question:** Ethene (Câ‚‚Hâ‚„) is obtained by cracking long-chain alkanes and is used to manufacture poly(ethene).
> 1. Write the equation for the addition polymerization of ethene.
> 2. Discuss three reasons why cracking is of great economic importance in the petrochemical industry.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Write the polymerization equation:**
> >    * n molecules of ethene react under pressure and catalyst to form a long chain polymer:
> >    * Equation: nCâ‚‚Hâ‚„ â†’ â€”[Câ‚‚Hâ‚„]â‚™â€”
> > 2. **Discuss the economic importance of cracking:**
> >    * **Matching Supply and Demand:** It matches the high supply of long-chain fractions from crude oil distillation with their low market demand, converting them to high-demand short-chain fractions.
> >    * **Fuel Value:** Shorter-chain alkanes obtained from cracking are more volatile and burn more easily, making them highly valuable as motor fuels.
> >    * **Polymer Feedstocks:** It produces alkenes (like ethene and propene), which are essential raw materials for manufacturing plastics and polymers.

> [!EXAMPLE]
> #### ðŸ“ Example 10: Dipoles and Curved Arrows in Heterolytic Fission
> **Question:** In the reaction of chloromethane with a hydroxide ion, the C-Cl bond undergoes heterolytic fission.
> 1. Show the dipoles (partial charges) on the C-Cl bond of chloromethane.
> 2. Describe where the curved arrow representing the bond breaking should start and finish, and what it represents.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the dipoles:**
> >    * Chlorine is more electronegative than carbon, so it pulls the shared electron pair closer to itself.
> >    * Carbon gets a partial positive charge (CÎ´+) and chlorine gets a partial negative charge (ClÎ´-).
> > 2. **Describe the curved arrow:**
> >    * The curved arrow must start exactly from the center of the C-Cl covalent bond (representing the shared electron pair).
> >    * The curved arrow must point and finish directly on the chlorine atom (Cl).
> >    * The curved arrow represents the transfer of both bonding electrons to the chlorine atom.

> [!EXAMPLE]
> #### ðŸ“ Example 11: Economic and Environmental Advantages of Catalytic Cracking
> **Question:** Explain why catalytic cracking is preferred over thermal cracking in the petroleum industry, in terms of operating conditions and economics.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Analyze operating conditions:**
> >    * Thermal cracking requires extremely high temperatures (up to 900Â°C) and high pressures (up to 7000 kPa).
> >    * Catalytic cracking operates at much lower temperatures (around 450Â°C) and atmospheric pressure because it uses a zeolite catalyst.
> > 2. **State the economic advantages:**
> >    * Lower temperatures and pressures require significantly less energy, reducing fuel consumption and operating costs.
> >    * It saves money by making the process faster and more cost-effective (energy-efficient).
> >    * Zeolite catalysts can be recycled, which further reduces long-term industrial expenses.

> [!IMPORTANT]
> ### âš›ï¸ Free-Radical Substitution of Alkanes
> Alkanes react with halogens (chlorine or bromine) in the presence of **ultraviolet (UV) light** via a substitution reaction. The reaction mechanism has three main stages:
> 
> 1. **Initiation:**
>    * UV light provides the energy to break the halogen bond homolytically, forming free radicals.
>    * *Equation:* Cl-Cl â†’ 2Cl$\\\\bullet$
> 2. **Propagation (Chain Reaction):**
>    * Step 1: A chlorine radical abstract a hydrogen atom from the alkane, forming a methyl radical and hydrogen chloride.
>      * *Equation:* CHâ‚„ + Cl$\\\\bullet$ â†’ $\\\\bullet$CHâ‚ƒ + HCl
>    * Step 2: The methyl radical reacts with a chlorine molecule to form chloromethane and regenerates the chlorine radical.
>      * *Equation:* $\\\\bullet$CHâ‚ƒ + Clâ‚‚ â†’ CHâ‚ƒCl + Cl$\\\\bullet$
> 3. **Termination:**
>    * Two free radicals collide and combine to form a stable molecule, ending the chain reaction.
>    * *Examples:*
>      * Cl$\\\\bullet$ + Cl$\\\\bullet$ â†’ Clâ‚‚
>      * $\\\\bullet$CHâ‚ƒ + Cl$\\\\bullet$ â†’ CHâ‚ƒCl
>      * $\\\\bullet$CHâ‚ƒ + $\\\\bullet$CHâ‚ƒ â†’ Câ‚‚Hâ‚† (ethane)
> 
> > [!WARNING]
> > ### âš ï¸ Limitations of Free-Radical Substitution
> > Free-radical substitution is not a clean synthetic route due to several side-reactions:
> > 
> > 1. **Further Substitution:** Chlorine radicals can continue to substitute hydrogens on chloromethane, forming dichloromethane (CHâ‚‚Clâ‚‚), trichloromethane (CHClâ‚ƒ), and textrachloromethane (CClâ‚„).
> > 2. **Isomer Mixtures:** For longer-chain alkanes (e.g., propane), substitution can occur on different carbon atoms, producing a mixture of positional isomers (e.g., 1-chloropropane and 2-chloropropane).
> 

> [!EXAMPLE]
> #### ðŸ“ Example 12: Identifying Termination Products
> **Question:** In the free-radical substitution of ethane (Câ‚‚Hâ‚†) with bromine, a trace of butane (Câ‚„Hâ‚â‚€) is formed. Write a termination step to explain its formation.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the radical intermediate:**
> >    * During propagation, bromine radicals abstract H from ethane, forming ethyl radicals ($\\\\bullet$Câ‚‚Hâ‚…).
> > 2. **Determine the collision leading to butane:**
> >    * Butane (Câ‚„Hâ‚â‚€) is formed when two ethyl radicals collide and combine.
> > 3. **Write the equation:**
> >    * $\\\\bullet$Câ‚‚Hâ‚… + $\\\\bullet$Câ‚‚Hâ‚… â†’ Câ‚„Hâ‚â‚€

`,
    keyPoints: [
      'Homolytic fission forms free radicals (each atom takes one electron); heterolytic fission forms cations and anions (one atom takes both electrons).',
      'Electrophiles accept an electron pair to form a covalent bond; nucleophiles donate an electron pair to form a covalent bond.',
      'Reaction classes include addition (unsaturated to saturated), substitution (replacing an atom/group), and elimination (removing a small molecule).',
      'Free-radical substitution requires ultraviolet (UV) light to initiate homolytic fission of the halogen bond.',
      'Propagation steps regenerate the radical catalyst, allowing the chain reaction to continue.',
      'Termination steps occur when any two free radicals collide and combine, producing stable molecules (such as trace alkanes of doubled length).'
    ]
  },
  {
    id: 'alkanes-sources-combustion-20260627',
    title: 'Alkanes: Sources & Combustion',
    type: 'simulation',
    equationVisualizer: {
      reactants: [
        ['2CO', '#38bdf8'],
        ['2NO', '#f59e0b']
      ],
      products: [
        ['2COâ‚‚', '#10b981'],
        ['Nâ‚‚', '#a78bfa']
      ],
      description: "Conversion of toxic Carbon Monoxide (CO) and Nitrogen Monoxide (NO) into harmless Nitrogen (Nâ‚‚) and Carbon Dioxide (COâ‚‚) inside the catalytic converter."
    },
    content: `
> [!NOTE]
> ### â›½ Alkanes as Fuel & Crude Oil Distillation
> A **fuel** is any substance that is burned to release energy. Alkanes obtained from crude oil are widely used as fuels.
> 
> **Fractional Distillation:**
> Crude oil is a complex mixture of hydrocarbons. It is separated into simpler fractions (mixtures of hydrocarbons with similar boiling points) using fractional distillation:
> 1. **Heating & Vaporization:** Crude oil is heated and vaporized before entering the fractionating tower.
> 2. **Condensation in the Tower:** The vapor rises, cools, and condenses inside the fractionating tower.
> 3. **Temperature Gradient:** The fractionating column has a temperature gradient (it is hot at the bottom and cooler at the top).
> 4. **Separation Rule:**
>    * The vapor condenses at different levels (temperatures).
>    * The higher the boiling temperature of a fraction, the lower the level at which it condenses.
>    * Fractions with less carbon (lower molecular mass $M_r$, less dense) have lower boiling points and are collected at the top of the tower.
> 
> Describe how the fractions in crude oil are separated during fractional distillation:
> 1. The vapor condenses at different levels (temperatures).
> 2. The higher the boiling temperature, the lower the level at which it condenses.

> [!IMPORTANT]
> ### ðŸ§ª Industrial Processing of Alkanes
> To meet the demand for fuels and chemical feedstocks, crude oil fractions are processed further:
> 
> * **Cracking:** The breaking down of long-chain alkanes into shorter, more useful alkanes and alkenes.
>    * *Thermal Cracking:* High temperature (700â€“1200 K) and high pressure. Produces a high percentage of alkenes.
>    * *Catalytic Cracking:* Lower temperature (around 720 K), slight pressure, and a zeolite catalyst. Produces branched alkanes and cycloalkanes.
> * **Reforming:** The conversion of straight-chain alkanes into branched-chain alkanes or cyclic hydrocarbons/aromatics (to ensure smoother burning/higher octane rating) using a platinum catalyst.

> [!WARNING]
> ### âš ï¸ Combustion of Alkanes: Complete vs. Incomplete
> Alkanes react with oxygen in combustion reactions. Depending on oxygen availability, the products differ:
> 
> 1. **Complete Combustion (Excess Oxygen):**
>    * Burns cleanly to produce **carbon dioxide** (a greenhouse gas that causes a rise in Earth's temperature), **water vapor**, and releases maximum energy.
>    * *Equation:* CHâ‚„ + 2Oâ‚‚ â†’ COâ‚‚ + 2Hâ‚‚O
> 2. **Incomplete Combustion (Lack of Oxygen):**
>    * Produces less energy and releases dangerous pollutants:
>      * **Carbon monoxide** (CO): A highly toxic, colorless, and odorless gas.
>        * *Equation:* 2CHâ‚„ + 3Oâ‚‚ â†’ 2CO + 4Hâ‚‚O
>      * **Carbon particulates** (black smoke or soot): Irritate the respiratory system.
>      * **Unburnt hydrocarbons** and **water vapor**.

> [!CAUTION]
> ### ðŸ›‘ Environmental Hazards of Alkane Pollutants
> The combustion of alkane fuels (especially in internal combustion engines) releases severe pollutants:
> 
> * **Carbon Dioxide (COâ‚‚):** A greenhouse gas that contributes to global warming and rises the Earth's temperature.
> * **Carbon Monoxide (CO):** A toxic gas produced by incomplete combustion that binds irreversibly to hemoglobin.
> * **Carbon Particulates (Black Smoke/Soot):** Solid carbon particles from incomplete combustion that irritate the respiratory system and cause global dimming.
> * **Oxides of Nitrogen (NOâ‚‚ / NOâ‚“):** Formed because the high temperature and pressure inside car engines cause nitrogen and oxygen from the air to react together.
> * **Sulfur Oxides (SOâ‚‚):** Formed due to the combustion of sulfur impurities present within the crude fuel reacting with oxygen.
> * **Unburned Hydrocarbons:** Volatile organic compounds that contribute to photochemical smog.
> * **Water Vapor:** A natural product of both complete and incomplete combustion.
> [!IMPORTANT]
> ### ðŸš— Catalytic Converters & Nitrogen Oxides Acid Rain
> Modern vehicles use a **three-way catalytic converter** containing precious transition metals (such as **platinum**, **palladium**, and **rhodium** which belong to the **d-block** of the Periodic Table).
> * **Surface Area:** The catalytic metals are spread thinly over a **honeycomb mesh** to maximize surface area and minimize cost.
> * **Nitrogen Oxides Acid Rain:** Nitrogen dioxide ($\text{NO}_2$) dissolved in water droplets forms nitrous and nitric acid, contributing to acid rain:
>   $$2\text{NO}_2 + \text{H}_2\text{O} \rightarrow \text{HNO}_2 + \text{HNO}_3$$
> * **Catalytic Reactions:**
>   * *CO and NO removal:* $2\text{CO} + 2\text{NO} \rightarrow \text{N}_2 + 2\text{CO}_2$
>   * *Unburned hydrocarbon removal:* $\text{C}_8\text{H}_{18} + 12.5\text{O}_2 \rightarrow 8\text{CO}_2 + 9\text{H}_2\text{O}$
> * **Sulfur Limitation:** Catalytic converters are **ineffective at removing sulfur compounds**. Therefore, sulfur impurities must be removed from the fuel prior to combustion, producing **low-sulfur or ultra-low-sulfur fuel**.
> 
> > [!TIP]
> > ### ðŸ’¡ Combustion Hydrogen Rule
> > Even in incomplete combustion reactions of hydrocarbons (where carbon forms CO or soot C), **all of the hydrogen atoms are always completely oxidized to water ($\text{H}_2\text{O}$)**.
> 
> > [!EXAMPLE]
> #### ðŸ“ Example 1: Combustion Equations
> **Question:** Write a balanced equation for the incomplete combustion of octane (Câ‚ˆHâ‚â‚ˆ) to produce carbon monoxide and water.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Write down the reactants and products:**
> >    * Reactants: Câ‚ˆHâ‚â‚ˆ and Oâ‚‚
> >    * Products: CO and Hâ‚‚O
> > 
> > 2. **Balance Carbon atoms:**
> >    * 8 Carbon atoms in Câ‚ˆHâ‚â‚ˆ require 8 CO molecules: Câ‚ˆHâ‚â‚ˆ + Oâ‚‚ â†’ 8CO + Hâ‚‚O
> > 
> > 3. **Balance Hydrogen atoms:**
> >    * 18 Hydrogen atoms in Câ‚ˆHâ‚â‚ˆ require 9 Hâ‚‚O molecules: Câ‚ˆHâ‚â‚ˆ + Oâ‚‚ â†’ 8CO + 9Hâ‚‚O
> > 
> > 4. **Balance Oxygen atoms:**
> >    * Right side contains: 8 (from 8CO) + 9 (from 9Hâ‚‚O) = 17 Oxygen atoms.
> >    * Left side requires 8.5 Oâ‚‚ molecules: Câ‚ˆHâ‚â‚ˆ + 8.5Oâ‚‚ â†’ 8CO + 9Hâ‚‚O
> >    * Multiply by 2 for whole number coefficients: 2Câ‚ˆHâ‚â‚ˆ + 17Oâ‚‚ â†’ 16CO + 18Hâ‚‚O

> [!EXAMPLE]
> #### ðŸ“ Example 2: Principles of Fractional Distillation
> **Question:** Explain the physical principles that allow hydrocarbons in crude oil to be separated by fractional distillation. Refer to the temperature gradient in the column and molecular boiling points.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Explain the temperature gradient:**
> >    * The fractionating column is heated at the bottom and is cooler at the top, creating a continuous temperature gradient.
> > 2. **Describe vaporization and condensation:**
> >    * Crude oil vaporizes before entering the column. The vapors rise up the column until they reach a level where the temperature falls below their boiling point, where they condense and are collected.
> > 3. **Relate boiling point to molecular structure:**
> >    * Hydrocarbons with longer carbon chains (higher molecular mass $M_r$) have stronger intermolecular forces (London forces), requiring more energy to break.
> >    * These larger molecules have high boiling points and condense at the lower, hotter levels of the column. Smaller molecules with lower boiling points rise to the cooler top before condensing.

> [!EXAMPLE]
> #### ðŸ“ Example 3: Formation of Nitrogen Oxides in Engines
> **Question:** Nitrogen monoxide (NO) is a pollutant produced inside car engines.
> 1. Write an equation showing how nitrogen monoxide is formed in an engine.
> 2. Explain why nitrogen monoxide forms in car engines but does not form when petrol is burned in an open school laboratory.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Write the balanced chemical equation:**
> >    * Nitrogen gas and oxygen gas react at high temperatures:
> >    * Equation: Nâ‚‚ + Oâ‚‚ â†’ 2NO
> > 2. **Explain the role of temperature and pressure:**
> >    * Nitrogen molecules have a very strong triple covalent bond ($N \equiv N$) which requires a large amount of activation energy to break.
> >    * The extremely high temperature and pressure inside a car engine's combustion chamber provide the necessary energy to break this bond and initiate the reaction. An open laboratory flame does not reach temperatures high enough to overcome this activation energy barrier.

> [!EXAMPLE]
> #### ðŸ“ Example 4: Function of Catalytic Converters
> **Question:** Catalytic converters are fitted to the exhaust systems of modern cars.
> 1. Identify the metals used as catalysts in a catalytic converter.
> 2. Write a balanced chemical equation for the reaction between carbon monoxide and nitrogen monoxide in a catalytic converter.
> 3. Explain how the converter reduces environmental damage.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the catalytic metals:**
> >    * Platinum (Pt), palladium (Pd), and rhodium (Rh) are typically used.
> > 2. **Write the balanced equation:**
> >    * Carbon monoxide reacts with nitrogen monoxide to form carbon dioxide and nitrogen:
> >    * Equation: 2CO + 2NO â†’ 2COâ‚‚ + Nâ‚‚
> > 3. **Explain environmental benefits:**
> >    * The converter converts highly toxic carbon monoxide (CO) and nitrogen monoxide (NO) (which causes acid rain and photochemical smog) into less harmful carbon dioxide (COâ‚‚) and non-toxic, natural nitrogen gas (Nâ‚‚).

> [!EXAMPLE]
> #### ðŸ“ Example 5: Formation and Prevention of Acid Rain
> **Question:** Fossil fuels often contain sulfur impurities.
> 1. Write chemical equations to show how sulfur impurities burn to form sulfur dioxide, and how this sulfur dioxide reacts with water in the atmosphere to form acid rain.
> 2. State two environmental consequences of acid rain.
> 3. Explain how sulfur dioxide is removed from flue gases in power stations, and write the chemical equation for this reaction.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Write the chemical equations:**
> >    * Sulfur burns to form sulfur dioxide: S + Oâ‚‚ â†’ SOâ‚‚
> >    * Sulfur dioxide reacts with water to form sulfurous acid (acid rain): SOâ‚‚ + Hâ‚‚O â†’ Hâ‚‚SOâ‚ƒ (or it can react with water and oxygen to form sulfuric acid: 2SOâ‚‚ + Oâ‚‚ + 2Hâ‚‚O â†’ 2Hâ‚‚SOâ‚„).
> > 2. **State environmental effects of acid rain:**
> >    * Acidification of lakes and rivers, which kills aquatic life (fish).
> >    * Damage to leaf tissues of trees and plants, leading to deforestation.
> >    * Reacts with and corrodes limestone buildings and statues (calcium carbonate).
> > 3. **Explain flue gas desulfurization:**
> >    * Flue gases are passed through a scrubber containing calcium oxide (CaO) or calcium carbonate (CaCOâ‚ƒ).
> >    * Calcium oxide is a basic oxide that neutralizes acidic sulfur dioxide to form calcium sulfite (CaSOâ‚ƒ), preventing it from escaping into the atmosphere.
> >    * Equation: CaO + SOâ‚‚ â†’ CaSOâ‚ƒ (or CaCOâ‚ƒ + SOâ‚‚ â†’ CaSOâ‚ƒ + COâ‚‚).
`,
    keyPoints: [
      'Cracking breaks long alkanes into shorter alkanes and alkenes; reforming converts straight alkanes into branched/cyclic ones to improve engine efficiency.',
      'Incomplete combustion occurs in limited oxygen, producing toxic carbon monoxide (CO) or carbon soot (C).',
      'Catalytic converters use platinum, palladium, and rhodium to convert toxic CO and nitrogen monoxide (NO) into COâ‚‚ and Nâ‚‚.'
    ]
  },
  {
    id: 'fuels-polymers-environment-20260627',
    title: 'Fuels, Polymers & Environmental Sustainability',
    type: 'text',
    content: `
> [!NOTE]
> ### ðŸŒ Greenhouse Gases & The Greenhouse Effect
> The Earth's surface absorbs solar energy (UV/visible light) and re-emits/re-radiates it as longer-wavelength Infrared (IR) radiation.
> 
> **Greenhouse gases** absorb this infrared radiation and trap the heat in the atmosphere, preventing it from escaping into space. This creates the greenhouse effect, resulting in global warming and climate change.
> 
> **Key Greenhouse Gases:**
> 1. **Water vapor (Hâ‚‚O):** Present at the highest concentration in the air.
> 2. **Carbon dioxide (COâ‚‚):** Has the highest overall impact on human-induced global warming.
> 3. **Dinitrogen oxide (Nâ‚‚O)**
> 4. **Methane (CHâ‚„):** Sourced from natural gas, agriculture, and decomposition.
> 5. **Sulfur hexafluoride (SFâ‚†), Nitrogen trifluoride (NFâ‚ƒ), Hydrofluorocarbons (HFCs):** Produced solely from anthropogenic (human) activities.
> 
> **Factors Determining Greenhouse Effect Strength:**
> The warming effect of any given greenhouse gas depends on two core factors:
> 1. Its **atmospheric concentration**.
> 2. Its **ability to absorb infrared radiation** (its global warming potential).
> 
> *Note:* Gases like NOâ‚‚, NO, and SOâ‚‚ do not trap heat in the same way, but instead react with water in the atmosphere to cause **acid rain**.

> [!IMPORTANT]
> ### â›½ Fossil Fuels vs. Renewable Alternatives
> **Fossil Fuels:**
> Non-renewable (finite) resources formed over millions of years. Burning them releases carbon dioxide ($\text{CO}_2$), increasing the net atmospheric concentration.
> * *Petroleum:* A complex mixture of hydrocarbons.
> * *Natural gas:* Mainly methane ($\text{CH}_4$). Burns cleaner with less $\text{CO}_2$ per kWh than coal or oil.
> 
> **Renewable Alternative Fuels:**
> 1. **Biofuels (e.g. Bioethanol & Biodiesel):**
>    * Theoretically **carbon neutral** because the $\text{CO}_2$ released during combustion matches the $\text{CO}_2$ absorbed during growth.
>    * *Yeast Fermentation Constraint:* Fermentation has an upper limit because ethanol concentrations above **14%** are toxic to yeast, killing them.
>    * *Distillation Energy:* Separating bioethanol from water requires highly energy-intensive distillation, which often relies on fossil fuels, reducing carbon neutrality.
>    * *Petrol Blends:* Bioethanol is commonly sold as blends like **E10** (10% bioethanol, 90% petrol) or **E85** (85% bioethanol, 15% petrol).
>    * *Disadvantages:* Biofuels require massive land use (potentially displacing food crops), cause deforestation, and reduce biodiversity.
> 2. **Hydrogen Gas ($\text{H}_2$):**
>    * *Advantages:* Combustion produces only water vapor ($2\text{H}_2 + \text{O}_2 \rightarrow 2\text{H}_2\text{O}$), which is non-polluting.
>    * *Disadvantages:* Highly explosive and has a very low energy density by volume. It requires extremely high-pressure cylinders or cryogenic liquid storage at **$-253^\circ\text{C}$** in heavily insulated tanks.
> 
> > [!BOX]
> > ### ðŸ“‹ Biofuels vs. Natural Gas Comparison
> > * **Land Use:** Biofuels require vast land areas to grow crops (competing with food fields). Natural gas is sourced underground, requiring no surface agricultural land.
> > * **Yield:** Biofuels have relatively low yields that are gradually increasing. Natural gas has extremely high yields.
> > * **Manufacture & Transport:** Biofuels involve high costs to grow, process, ferment, and distill. Natural gas has high initial exploration/drilling costs, but low pipeline transport costs.
> > * **Carbon Neutrality:** Biofuels are much closer to carbon neutral. Natural gas is definitely not carbon neutral.
> 
> > [!WARNING]
> ### â™»ï¸ Sustainability & Material Recovery
> Preserving resources and protecting the environment for future generations requires shifting to sustainable technologies:
> 
> **Reasons for Alternative Technologies (e.g., Electric Cars):**
> 1. **Sustainability:** Reduces reliance on finite fossil fuel reserves.
> 2. **Emissions Reduction:** Cuts tailpipe emissions of COâ‚‚ and pollutants causing acid rain.
> 3. **Noise Pollution:** Electric motors are much quieter than internal combustion engines.
> 
> **Sustainable Material Use:**
> 1. Use of renewable resources that do not contribute to climate change.
> 2. Energy recovery from waste materials.
> 3. Recycling.

> [!CAUTION]
> ### ðŸ›‘ Polymers: Environmental Problems & Chemists' Solutions
> Saturated addition polymers present major waste management issues:
> 
> **Problems Caused by Polymers:**
> 1. **Non-Biodegradable:** Saturated polymers consist of strong, non-polar Câ€“C single bonds in their backbone. This makes them chemically inert and resistant to attack by microorganisms or enzymes.
> 2. **Landfill Accumulation:** Saturated plastics accumulate in dump sites. Landfill decomposition (anaerobic respiration/putrefaction) produces greenhouse gases (CHâ‚„, COâ‚‚) and toxic sulfur compounds.
> 3. **Incineration Hazards:** Burning polymers releases toxic, acidic gases:
>    * COâ‚‚, SOâ‚‚, and nitrogen oxides.
>    * Hydrogen chloride gas (HCl), which is highly toxic and acidic, produced from chlorine-containing polymers like PVC (poly(chloroethene)).
> 
> **Chemists' Solutions to Polymer Waste:**
> 1. **Biodegradable Polymers:** Developing polymers that can be broken down naturally by bacteria.
> 2. **Acidic Gas Scrubbing:** Removing toxic acidic gases (like HCl from PVC combustion) by reacting them with fine powders of alkaline substances like calcium hydroxide (Ca(OH)â‚‚) to neutralize them (fine powder increases surface area and reaction speed).
> 3. **Feedstock Recycling:** Breaking polymers down back into their chemical monomers using heat and catalysts to be reused as raw materials for new plastics.
> 
> **Recycling vs. Incineration Advantages:**
> * **Recycling Advantages:** Saves energy (melting polymer/metal requires less energy than refining crude oil or electrolysis of metals) and conserves raw resources.
> * **Incineration Advantages:** Produces usable heat/energy, reduces the volume of landfill space needed, eliminates harmful bacteria via high temperatures, and prevents the slow release of landfill methane.
> * **Polymers vs. Metals:** Polymers are chemically and biologically stable (do not corrode) and have a much lower density than metals.

> [!EXAMPLE]
> #### ðŸ“ Example 1: Evaluating Carbon Neutrality of Biofuels
> **Question:** Bioethanol is promoted as a 100% carbon-neutral alternative to fossil fuels because the COâ‚‚ released during its combustion is equal to the COâ‚‚ absorbed during photosynthesis. Evaluate this statement, explaining why bioethanol is not entirely carbon-neutral in practice.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Explain the theoretical concept (Photosynthesis & Combustion):**
> >    * During growth, crops absorb carbon dioxide via photosynthesis:
> >      6COâ‚‚ + 6Hâ‚‚O â†’ Câ‚†Hâ‚â‚‚Oâ‚† + 6Oâ‚‚
> >    * When the bioethanol fuel is burned, it releases the same amount of COâ‚‚ back into the atmosphere.
> > 2. **Analyze the practical energy inputs:**
> >    * In practice, energy and fossil fuels are still required for agricultural machinery/tractors, harvesting, transporting the crops and final fuel, and the energy-intensive distillation and processing of ethanol.
> > 3. **Identify other greenhouse gas sources:**
> >    * The manufacturing of chemical fertilizers used for the crops also releases greenhouse gases. Therefore, the net carbon footprint of biofuels is greater than zero, making them not 100% carbon-neutral in reality.

> [!EXAMPLE]
> #### ðŸ“ Example 2: Water Vapor vs. Carbon Dioxide Contradiction
> **Question:** Water vapor (Hâ‚‚O) has a much higher concentration in the atmosphere and absorbs more infrared radiation overall than carbon dioxide (COâ‚‚). However, scientists are significantly more concerned about anthropogenic emissions of COâ‚‚. Explain this apparent contradiction.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the factors determining greenhouse impact:**
> >    * The greenhouse impact of any gas depends on two key factors: its abundance/concentration in the atmosphere, and its ability to absorb infrared (IR) radiation (along with its atmospheric residence time).
> > 2. **Analyze Water Vapor control mechanisms:**
> >    * Water vapor levels in the atmosphere are controlled by a natural, self-regulating equilibrium (evaporation and condensation) and remain relatively constant overall.
> > 3. **Analyze Carbon Dioxide trends:**
> >    * COâ‚‚ levels are steadily increasing specifically due to human activities (such as burning fossil fuels and deforestation), which disrupts the natural carbon cycle and leads to long-term warming.

> [!EXAMPLE]
> #### ðŸ“ Example 3: Recycling vs. Incineration of Polymers
> **Question:** Explain one significant energy-related advantage of recycling polymers rather than disposing of them via incineration.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Analyze the energy requirements of recycling:**
> >    * Recycling involves sorting, melting, and remolding existing polymers. This process requires significantly less energy than refining crude oil, cracking, and polymerizing new monomers from scratch.
> > 2. **Compare with incineration:**
> >    * While incineration releases heat energy, it completely destroys the polymer material. Replacing the destroyed polymer requires refining new crude oil, which is a highly energy-intensive and non-sustainable process.

> [!EXAMPLE]
> #### ðŸ“ Example 4: Neutralizing Toxic Acidic Gases
> **Question:** PVC (poly(chloroethene)) releases a highly toxic acidic gas upon incineration.
> 1. Identify this gas.
> 2. Explain how chemists neutralize this gas in incinerators, writing a balanced chemical equation for the neutralization reaction.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the toxic gas:**
> >    * PVC contains chlorine atoms. Burning it releases **hydrogen chloride** (HCl) gas.
> > 2. **Explain the neutralization process:**
> >    * The acidic HCl gas is neutralized by spraying it with a fine powder of an alkaline substance, such as **calcium hydroxide** (Ca(OH)â‚‚).
> >    * A fine powder is used to maximize the surface area, speeding up the neutralization rate.
> >    * Equation: Ca(OH)â‚‚ + 2HCl â†’ CaClâ‚‚ + 2Hâ‚‚O

> [!EXAMPLE]
> #### ðŸ“ Example 5: Explaining Non-Biodegradability of Addition Polymers
> **Question:** Saturated addition polymers, such as poly(chloroethene) (PVC), are highly resistant to biodegradation and accumulate in landfills. Explain why these polymers are non-biodegradable.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **Identify the bonds in the polymer backbone:**
> >    * Saturated addition polymers have a backbone made entirely of C-C single bonds.
> > 2. **Describe bond strength and polarity:**
> >    * The C-C bonds are extremely strong and are non-polar.
> > 3. **Relate to chemical inertness:**
> >    * Because they are non-polar and strong, they are chemically inert and cannot be hydrolyzed (broken down) by water, nucleophiles, or enzymes/microorganisms.

> [!EXAMPLE]
> #### ðŸ“ Example 6: Evaluating Hydrogen as a Fuel
> **Question:** Hydrogen gas is considered a clean, renewable alternative to fossil fuels. State two advantages and two disadvantages of using hydrogen as a fuel for vehicles compared to petrol.
> 
> > [!TIP]
> > **ðŸ”‘ Step-by-step Solution:**
> > 
> > 1. **State the advantages:**
> >    * **No carbon emissions:** Combustion produces only water vapor (2Hâ‚‚ + Oâ‚‚ â†’ 2Hâ‚‚O), which is non-polluting and does not contribute to global warming or acid rain.
> >    * **Renewable:** Can be obtained from the electrolysis of water using electricity from renewable energy sources (wind/solar).
> > 2. **State the disadvantages:**
> >    * **Storage and transport difficulties:** Hydrogen has a very low energy density by volume, requiring heavy, high-pressure tanks or cryogenic cooling to store it as a liquid.
> >    * **Safety hazards:** It is highly flammable and forms explosive mixtures with air easily, posing a significant fire risk in accidents.
`,
    keyPoints: [
      'Greenhouse gases (like Hâ‚‚O, COâ‚‚, CHâ‚„) absorb emitted IR radiation, trapping heat; their warming effect depends on atmospheric concentration and IR absorption capacity.',
      'Alternative fuels include carbon-neutral biofuels (made by plant fermentation/fats) and hydrogen (burns to produce only water), each presenting unique engineering trade-offs.',
      'Polymer disposal problems include non-biodegradability (inert C-C backbone) and toxic gases on combustion (e.g. HCl), mitigated by alkaline neutralization, feedstock recycling, or developing biodegradable alternatives.'
    ]
  }
];

