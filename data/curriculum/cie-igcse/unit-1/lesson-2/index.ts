import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Diffusion";
export const lessonNumber = 2;

const diffusionDemoSvg = `
<svg viewBox="0 0 1000 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <marker id="arrowCyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
    </marker>
    <marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
    </marker>
  </defs>

  <!-- Background -->
  <rect width="1000" height="360" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="16" />

  <!-- Glass Tube Outlines -->
  <line x1="150" y1="150" x2="850" y2="150" stroke="#94a3b8" stroke-width="3" />
  <line x1="150" y1="210" x2="850" y2="210" stroke="#94a3b8" stroke-width="3" />

  <!-- Stoppers (Rubber Bungs) -->
  <rect x="135" y="145" width="15" height="70" fill="#a16207" rx="3" />
  <rect x="850" y="145" width="15" height="70" fill="#a16207" rx="3" />

  <!-- Cotton wool NH3 (Left) -->
  <path d="M 160 180 q 10 -20 20 -15 q 15 -10 25 5 q 10 15 -5 20 q -20 15 -30 -5 q -10 -5 -10 -5 Z" fill="#38bdf8" fill-opacity="0.4" stroke="#38bdf8" stroke-width="1.5" />

  <!-- Cotton wool HCl (Right) -->
  <path d="M 795 180 q 10 -20 20 -15 q 15 -10 25 5 q 10 15 -5 20 q -20 15 -30 -5 q -10 -5 -10 -5 Z" fill="#64748b" fill-opacity="0.4" stroke="#64748b" stroke-width="1.5" />

  <!-- White ring of NH4Cl (Closer to HCl end) -->
  <ellipse cx="640" cy="180" rx="12" ry="29" fill="#ffffff" fill-opacity="0.85" filter="url(#glow)" />

  <!-- Diffusion Arrows and Text -->
  <path d="M 210 125 L 620 125" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowCyan)" fill="none" />
  <text x="415" y="115" fill="#38bdf8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">NH₃ gas diffuses faster (lighter)</text>

  <path d="M 790 125 L 660 125" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrowRed)" fill="none" />
  <text x="725" y="115" fill="#f43f5e" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">HCl gas diffuses slower (heavier)</text>

  <!-- Labels -->
  <path d="M 640 70 L 640 145" stroke="#ffffff" stroke-width="1" stroke-dasharray="3 3" fill="none" />
  <text x="640" y="60" fill="#ffffff" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">White Ring of NH₄Cl forms here</text>

  <path d="M 180 250 L 180 205" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3 3" fill="none" />
  <text x="180" y="270" fill="#38bdf8" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle">Cotton soaked in NH₃ solution</text>

  <path d="M 810 250 L 810 205" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3" fill="none" />
  <text x="810" y="270" fill="#94a3b8" font-size="12" font-family="system-ui, sans-serif" text-anchor="middle">Cotton soaked in HCl solution</text>

  <text x="500" y="325" fill="#94a3b8" font-size="12" font-style="italic" font-family="system-ui, sans-serif" text-anchor="middle">Glass tube (filled with air)</text>
</svg>
`;

export const theoryMarkdown = `
## Diffusion
This lesson covers the fundamentals of Diffusion as part of the States of Matter unit in IGCSE Chemistry.
`;

export const lessonParts: LessonPart[] = [
    {
        id: "diffusion-basics",
        title: "The Process of Diffusion & Dissolving",
        type: "text",
        content: `
### 🔀 What is Diffusion?

> [!IMPORTANT]
> ### 🧮 Definition: Diffusion
> **Diffusion** is the spreading out (net movement) of fluid particles from a region of higher concentration to a region of lower concentration, until they are evenly distributed (forming a homogeneous mixture).

* Diffusion only occurs in **fluids** (liquids and gases).
* It is driven by the continuous random motion of particles colliding and bouncing in all directions.
### 🌊 Dissolving and Diffusing in Liquids

When crystals are dissolved in water, we observe diffusion clearly:

> [!TIP]
> ### 💡 Dissolving Copper(II) Sulfate
> When blue crystals of **copper(II) sulfate (CuSO₄)** are placed in water:
> 1. The crystal dissolves, and copper(II) sulfate particles fill the intermolecular spaces of water.
> 2. Both water and copper(II) sulfate particles move in continuous random motion, colliding with one another.
> 3. This leads to: **Dissolving → Collision → Diffusion**.
> 4. The blue color slowly spreads throughout the beaker until the solution is uniformly blue.

* **Potassium Permanganate (KMnO₄):** Dissolves in water in a similar way, spreading a deep purple color.
* **Bromine Gas:** Reddish-brown liquid bromine evaporates and diffuses into air, turning it a light orange/brown color.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Net Movement in Diffusion
> **Question:** How do particles behave during the process of diffusion?
> 
> **A** They move in an organized stream from low to high concentration.
> 
> **B** They move randomly, resulting in a net movement from high to low concentration.
> 
> **C** They expand in size to fill the container.
> 
> **D** They stop moving once they are evenly distributed.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand Individual Particle Motion:**
> >    * Individual particles in fluids move in constant, continuous random paths, colliding and changing direction constantly. They do not move in an organized stream. This rules out A.
> > 2. **Understand Net Movement:**
> >    * Because there are more particles in the high concentration zone, random motion naturally spreads them out into areas of lower concentration. This results in a net movement from high to low concentration.
> > 3. **Evaluate Particle State:**
> >    * Particles do not expand in size (rules out C) and they do not stop moving (dynamic equilibrium means they keep moving even when concentration is uniform, ruling out D).
> > 4. **Conclusion:**
> >    * Particles move randomly, resulting in a net movement from high to low concentration. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Dissolving Copper(II) Sulfate
> **Question:** A student places a blue crystal of copper(II) sulfate at the bottom of a beaker of water. Without stirring, the blue color slowly spreads. Which process describes this spreading?
> 
> **A** Dissolving followed by diffusion
> 
> **B** Diffusion followed by chemical reaction
> 
> **C** Sublimation followed by condensation
> 
> **D** Boiling followed by evaporation
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the first step:**
> >    * The copper(II) sulfate is a solid crystal. Before its particles can spread through the liquid water, the crystal must break down and dissolve into the water.
> > 2. **Analyze the second step:**
> >    * Once dissolved, the copper(II) sulfate ions and water molecules are in constant random motion. They collide and mix, causing the color to spread throughout the liquid (diffusion).
> > 3. **Conclusion:**
> >    * The process is dissolving followed by diffusion. The correct option is **A**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Diffusion Medium
> **Question:** In which of the following will diffusion take place most slowly?
> 
> **A** Ammonia gas in air
> 
> **B** A drop of food coloring in hot water
> 
> **C** A crystal of potassium manganate(VII) in cold water
> 
> **D** Bromine gas in a vacuum
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare States of Matter:**
> >    * Diffusion is much faster in gases than in liquids because gas particles are widely spaced with negligible forces of attraction, allowing rapid movement. Thus, diffusion in gases (A and D) is fast.
> > 2. **Compare Liquid Temperatures:**
> >    * In liquids, particles are close together and touch. Hot water particles have higher average kinetic energy and move faster than cold water particles.
> >    * Therefore, diffusion in cold water (C) will be slower than in hot water (B).
> > 3. **Conclusion:**
> >    * Diffusion of a crystal in cold water is the slowest. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Evaporation and Diffusion of Bromine
> **Question:** A drop of liquid bromine is placed at the bottom of a gas jar. It soon evaporates, and a brown color spreads. What occurs during this experiment?
> 
> **A** Only diffusion
> 
> **B** Only evaporation
> 
> **C** Evaporation followed by diffusion
> 
> **D** Diffusion followed by condensation
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze State Change:**
> >    * Bromine is initially a liquid. It turns into a red-brown gas (vaporizes/evaporates).
> > 2. **Analyze Gas Spreading:**
> >    * Once it is in the gas state, the bromine particles move randomly, colliding with air molecules, and spreading throughout the jar. This is diffusion.
> > 3. **Conclusion:**
> >    * Evaporation occurs first, followed by diffusion. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Factors of Random Motion
> **Question:** What is the primary cause of the spreading of particles during dissolving and diffusion?
> 
> **A** Gravity pulling particles downwards
> 
> **B** Electrostatic attraction between all particles
> 
> **C** The continuous random motion and collisions of particles
> 
> **D** Convection currents in the container
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate Physical Causes:**
> >    * Gravity would pull heavy particles down, not spread them out evenly in all directions (ruling out A).
> >    * Electrostatic attraction holds particles together rather than spreading them (ruling out B).
> >    * Convection currents are caused by temperature differences, but diffusion occurs even at uniform temperature without external currents (ruling out D).
> > 2. **Recall Kinetic Theory:**
> >    * All particles in fluids possess kinetic energy and are in constant random motion, colliding with other particles and bouncing off in all directions, causing them to mix naturally.
> > 3. **Conclusion:**
> >    * Diffusion is driven by the continuous random motion and collisions of particles. The correct option is **C**.
        `,
        keyPoints: [
            "Diffusion is the net movement of particles from high to low concentration.",
            "Diffusion occurs only in liquids and gases due to random molecular motion.",
            "Dissolving crystals like copper(II) sulfate shows a gradual spread of color via collisions and diffusion."
        ]
    },
    {
        id: "ammonia-hcl-and-factors",
        title: "Ammonia-HCl Experiment & Factors Affecting Diffusion",
        type: "text",
        content: `
### 🧪 The Classic Diffusion Demonstration

A famous laboratory experiment demonstrating diffusion rates involves reacting **ammonia gas (NH₃)** with **hydrogen chloride gas (HCl)** in a sealed glass tube.

$$NH_3\\text{(g)} + HCl\\text{(g)} \\rightarrow NH_4Cl\\text{(s)}$$

${svgToken(diffusionDemoSvg)}

When these gases meet, they react to form **ammonium chloride (NH₄Cl)**, which appears as a white cloud or ring inside the tube.
### 🔬 Observations and Explanations

1. **Position of the White Ring:** The white cloud forms **closer to the hydrochloric acid end** of the tube.
   * **Why?** Ammonia molecules (NH₃, $Mr = 17$) are lighter than hydrogen chloride molecules (HCl, $Mr = 36.5$) and diffuse faster.
2. **The Reaction Process Sequence:**
   $$\\text{Evaporation (from cotton wool)} \\rightarrow \\text{Diffusion (along tube)} \\rightarrow \\text{Collision (between molecules)} \\rightarrow \\text{Chemical Reaction (forming solid)}$$
3. **Time Lag (Why the ring takes time to form and is not instantaneous):**
   * **Mark Scheme Point 1:** The tube is not empty; it is filled with air molecules. The diffusing gas particles constantly collide with these air particles.
   * **Mark Scheme Point 2:** Gas particles move randomly in all directions (zigzag motion), not in a single straight path towards each other.
### ⚡ The 4 Core Variables Controlling Diffusion Rate

> [!IMPORTANT]
> ### 🧮 1. Atomic or Molecular Mass ($A_r$ or $M_r$ - Inverse Proportion)
> Lighter particles (smaller $A_r$ or $M_r$) move and diffuse faster than heavier particles at the same temperature.
> * Ammonia ($M_r = 17$) diffuses faster than Hydrogen Chloride ($M_r = 36.5$).

> [!IMPORTANT]
> ### 🧮 2. Temperature (Direct Proportion)
> Increasing the temperature gives particles more kinetic energy, making them move faster.
> * *Cambridge Exam Note:* Heating the tube causes the white ring to **form in less time (faster)**, but **does not change its position** (it still forms closer to the HCl end).

> [!IMPORTANT]
> ### 🧮 3. Intermolecular Spaces (Phase of Matter)
> Gases diffuse much faster than liquids because gases have huge intermolecular spaces and negligible attractions, whereas liquid particles are touching and continuously colliding.

> [!IMPORTANT]
> ### 🧮 4. Presence of Other Substances (Vacuum Effect)
> Diffusion occurs fastest in a **vacuum** where there are zero opposing particles to collide with.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Location of White Ring
> **Question:** In the glass tube experiment with ammonia and hydrogen chloride gases, where does the white ring form?
> 
> **A** In the exact middle of the tube.
> 
> **B** Closer to the ammonia end.
> 
> **C** Closer to the hydrochloric acid end.
> 
> **D** At both ends of the tube.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare Molecular Masses:**
> >    * Ammonia ($NH_3$) has a molecular mass ($Mr$) of approximately 17.
> >    * Hydrogen chloride ($HCl$) has a molecular mass ($Mr$) of approximately 36.5.
> > 2. **Relate Mass to Rate of Diffusion:**
> >    * Lighter gas molecules diffuse faster. Therefore, $NH_3$ molecules diffuse faster along the tube than $HCl$ molecules.
> > 3. **Determine the Meeting Point:**
> >    * Since $NH_3$ diffuses faster, it covers a greater distance than $HCl$ in the same amount of time. They will meet and react closer to the source of $HCl$.
> > 4. **Conclusion:**
> >    * The white ring forms closer to the hydrochloric acid end. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Time Lag Explanation
> **Question:** Why does the white ring of ammonium chloride take a few minutes to form instead of forming instantly?
> 
> **A** The gas particles are too heavy to move quickly.
> 
> **B** Cotton wool absorbs the gas molecules and holds them.
> 
> **C** The gases must reach their boiling points first.
> 
> **D** The gas molecules constantly collide with air molecules inside the tube, slowing their net progress.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the Environment Inside the Tube:**
> >    * The tube is not a vacuum; it contains air (mostly nitrogen and oxygen molecules).
> > 2. **Describe Particle Path:**
> >    * As ammonia and hydrogen chloride molecules diffuse, they do not travel in a straight line. They constantly collide with air molecules, bouncing off in random directions.
> >    * This random collision path (zigzag path) slows down their overall speed along the length of the tube.
> > 3. **Conclusion:**
> >    * The delay is due to collisions with air molecules. The correct option is **D**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Temperature Effect on Ring Position
> **Question:** If the ammonia and hydrochloric acid experiment is repeated at a higher temperature, what happens to the position and time of formation of the white ring?
> 
> **A** The ring forms faster and closer to the ammonia end.
> 
> **B** The ring forms slower in the same position.
> 
> **C** The ring forms faster in the same position.
> 
> **D** The ring forms slower and closer to the HCl end.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the Effect of Temperature on Rate:**
> >    * Higher temperature increases the average kinetic energy of the particles. Both $NH_3$ and $HCl$ molecules move faster.
> >    * Therefore, the gases will meet sooner, so the ring forms in less time (faster).
> > 2. **Analyze the Effect on Position:**
> >    * Although both gases move faster, the ratio of their molecular masses ($17$ vs $36.5$) remains unchanged.
> >    * Thus, the ratio of their diffusion rates remains the same, meaning they still meet at the same relative position (closer to the $HCl$ end).
> > 3. **Conclusion:**
> >    * The ring forms faster but in the same position. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Porous Pot Experiment
> **Question:** A porous pot containing air is connected to a U-tube containing colored water. A beaker containing gas X is placed over the porous pot. The liquid level on the pot side of the U-tube falls. Which gas is X? (Molecular masses: H₂ = 2, He = 4, N₂ = 28, CO₂ = 44, Air ≈ 29)
> 
> **A** Carbon dioxide
> 
> **B** Helium
> 
> **C** Nitrogen
> 
> **D** Oxygen
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Interpret the U-tube Liquid Movement:**
> >    * The water level on the pot side falls. This means the gas pressure inside the porous pot has **increased**, pushing the liquid down.
> > 2. **Analyze Gas Flow Rates:**
> >    * Pressure inside the pot increases because gas X is entering (diffusing into) the pot faster than air is escaping (diffusing out of) the pot.
> > 3. **Relate Diffusion Rate to Mass:**
> >    * For gas X to diffuse faster than air, it must have a lower molecular mass than air ($M_r \\approx 29$).
> > 4. **Evaluate Options:**
> >    * Carbon dioxide (CO₂): $M_r = 44$ (Heavier than air, would diffuse slower - liquid level would rise).
> >    * Helium (He): $M_r = 4$ (Much lighter than air, diffuses much faster - liquid level falls).
> >    * Nitrogen (N₂): $M_r = 28$ (Similar to air, minimal level change).
> >    * Oxygen (O₂): $M_r = 32$ (Slightly heavier than air).
> > 5. **Conclusion:**
> >    * Gas X must be Helium. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Diffusion in a Vacuum
> **Question:** Why does a gas diffuse much faster in a vacuum than in air?
> 
> **A** There are no air particles to collide with, allowing unimpeded straight-line movement.
> 
> **B** Gravity does not act in a vacuum.
> 
> **C** The gas particles expand in a vacuum.
> 
> **D** A vacuum increases the temperature of the gas.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare Vacuum vs. Air:**
> >    * Air is full of gas molecules ($N_2$, $O_2$, etc.). Diffusing particles must continuously collide with them, slowing down their progress.
> >    * A vacuum has zero particles.
> > 2. **Analyze Particle Movement:**
> >    * In a vacuum, a diffusing gas molecule moves in a straight line at high speed without any collisions to bounce it backward or sideways.
> > 3. **Conclusion:**
> >    * The lack of other particles to collide with enables faster diffusion. The correct option is **A**.
        `,
        keyPoints: [
            "Lighter molecules diffuse faster than heavier molecules at the same temperature.",
            "Higher temperatures increase kinetic energy, accelerating the rate of diffusion.",
            "Diffusion is faster in gases than in liquids, and fastest in a vacuum."
        ]
    }
];
