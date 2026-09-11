import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Kinetic Particle Theory";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Kinetic Particle Theory
This lesson covers the fundamentals of Kinetic Particle Theory as part of the States of Matter unit in IGCSE Chemistry.
`;

const gasPressureSvg = `
<svg viewBox="0 0 680 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gpBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <marker id="impactArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
    </marker>
  </defs>

  <rect width="680" height="260" fill="url(#gpBg)" stroke="#1e293b" stroke-width="2" rx="16" />

  <!-- Title -->
  <text x="340" y="28" fill="#f8fafc" font-size="13" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Gas Pressure: Collisions with the Container Walls</text>

  <!-- Container Box -->
  <rect x="70" y="45" width="220" height="180" fill="#0b1329" stroke="#38bdf8" stroke-width="3" rx="10" />

  <!-- Particles and Collision Vectors -->
  <!-- Colliding with Right Wall -->
  <circle cx="270" cy="90" r="7" fill="#f43f5e" />
  <path d="M 235 90 L 265 90" stroke="#f43f5e" stroke-width="2" marker-end="url(#impactArrow)" fill="none" />
  <line x1="288" y1="80" x2="288" y2="100" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round" />

  <!-- Colliding with Top Wall -->
  <circle cx="160" cy="55" r="7" fill="#f43f5e" />
  <path d="M 160 85 L 160 58" stroke="#f43f5e" stroke-width="2" marker-end="url(#impactArrow)" fill="none" />
  <line x1="150" y1="47" x2="170" y2="47" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round" />

  <!-- Colliding with Left Wall -->
  <circle cx="90" cy="170" r="7" fill="#f43f5e" />
  <path d="M 120 170 L 93 170" stroke="#f43f5e" stroke-width="2" marker-end="url(#impactArrow)" fill="none" />
  <line x1="72" y1="160" x2="72" y2="180" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round" />

  <!-- Colliding with Bottom Wall -->
  <circle cx="230" cy="210" r="7" fill="#f43f5e" />
  <path d="M 230 180 L 230 207" stroke="#f43f5e" stroke-width="2" marker-end="url(#impactArrow)" fill="none" />
  <line x1="220" y1="223" x2="240" y2="223" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round" />

  <!-- Non-colliding particles -->
  <circle cx="120" cy="115" r="6" fill="#38bdf8" />
  <circle cx="190" cy="140" r="6" fill="#38bdf8" />
  <circle cx="150" cy="180" r="6" fill="#38bdf8" />

  <!-- Side Explanatory Cards -->
  <g transform="translate(320, 48)">
    <rect width="320" height="75" rx="8" fill="#1e293b" fill-opacity="0.6" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="15" y="24" fill="#38bdf8" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">🔥 Temperature Effect (Direct)</text>
    <text x="15" y="44" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif">Higher T → Particles have more kinetic energy</text>
    <text x="15" y="62" fill="#cbd5e1" font-size="11" font-weight="semibold" font-family="system-ui, sans-serif">Hit walls more frequently &amp; with greater force</text>
  </g>

  <g transform="translate(320, 140)">
    <rect width="320" height="75" rx="8" fill="#1e293b" fill-opacity="0.6" stroke="#a855f7" stroke-opacity="0.3" stroke-width="1.5" />
    <text x="15" y="24" fill="#c084fc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">📦 Volume Effect (Inverse)</text>
    <text x="15" y="44" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif">Smaller space → More particles per unit volume</text>
    <text x="15" y="62" fill="#cbd5e1" font-size="11" font-weight="semibold" font-family="system-ui, sans-serif">Hit walls more frequently → Pressure increases</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
    {
        id: "explaining-changes",
        title: "Explaining Phase Changes",
        type: "text",
        content: `
### 🔬 Explaining States of Matter and Phase Changes

Kinetic particle theory explains the physical behavior of matter by describing the energy, arrangement, and forces of particles.

### 🏃 Movement and Particle Speed

The rate of movement of particles depends fundamentally on:
1. **Mass of Particles (Inverse Proportion):** Lighter particles move faster and diffuse more quickly than heavier particles at the same temperature.
2. **Kinetic Energy of Particles (Direct Proportion):** Particles with higher kinetic energy (higher temperature) move at greater average speeds.

### 💨 Factors Affecting the Rate of Evaporation

Evaporation is the escape of energetic particles from the surface of a liquid. The rate of evaporation depends on three key factors:

> [!NOTE]
> ### 📋 Key Factors Affecting Evaporation
> 
> * **1. Temperature (Direct Proportion):** As temperature increases, a greater fraction of particles possess sufficient kinetic energy to overcome intermolecular attractions and escape the surface.
> * **2. Surface Area (Direct Proportion):** A larger surface area provides more surface sites from which energetic liquid particles can escape into the gas phase.
> * **3. Intermolecular Forces (Inverse Proportion):** Liquids with weaker intermolecular forces have higher **volatility** (they evaporate much more rapidly at room temperature, e.g. ethanol vs water).

### 🌡️ 1. Solid to Liquid (Melting)

1. In the **solid state**, particles are arranged in a regular lattice structure and vibrate in closely packed positions.
2. **When heated**, particles absorb thermal energy, gaining kinetic energy and vibrating faster.
3. As the temperature rises, the vibrations become energetic enough to **overcome the intermolecular forces** holding the lattice together.
4. The lattice structure breaks down, causing the solid to expand. Particles leave their fixed positions and slide over one another, turning into a **liquid**.

### 🌡️ 2. Liquid to Gas (Boiling / Evaporation)

1. In the **liquid state**, particles are close together but randomly arranged, in constant motion.
2. **When heated**, particles gain more kinetic energy and move faster.
3. High-energy particles near the surface (or throughout during boiling) gain enough energy to **break completely free of the intermolecular forces** keeping them in the liquid state.
4. Particles bounce far apart, becoming a **gas** where they are widely spaced and free to move randomly.

### ❄️ 3. Condensation and Freezing

1. **When cooled**, particles lose kinetic energy and move slower.
2. As they slow down, they move closer together.
3. The intermolecular forces of attraction become stronger, pulling particles back into a liquid arrangement (condensation) or a regular solid lattice (freezing).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Overcoming forces during melting
> **Question:** What happens to the arrangement and motion of particles when a solid melts?
> 
> **A** Particles change from a regular arrangement vibrating about fixed positions to a random arrangement sliding over each other.
> 
> **B** Particles break completely free from each other to move rapidly in all directions.
> 
> **C** Particles stop moving and form a regular crystalline structure.
> 
> **D** Particles expand and double in size as they slide.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand Solid State Particles:**
> >    * In a solid, particles are arranged in a regular lattice structure and only vibrate in closely packed fixed positions.
> > 2. **Analyze the Melting Process:**
> >    * Heating gives the particles kinetic energy, making them vibrate faster. At the melting point, this energy overcomes the intermolecular forces holding the lattice together.
> > 3. **Determine the Liquid State Properties:**
> >    * In a liquid, particles are close but randomly arranged and slide over one another.
> > 4. **Conclusion:**
> >    * Solid (regular arrangement, fixed vibration) changes to liquid (random arrangement, sliding). The correct option is **A**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Boiling from kinetic theory perspective
> **Question:** Which statement best explains boiling using kinetic particle theory?
> 
> **A** Liquid particles lose kinetic energy and bond into regular rows.
> 
> **B** High-energy particles escape only from the surface at any temperature.
> 
> **C** Liquid particles gain enough kinetic energy to completely break all remaining forces of attraction and separate widely as a gas.
> 
> **D** The mass of the particles increases, causing them to float as a gas.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Temperature and Kinetic Energy:**
> >    * Heating the liquid increases the kinetic energy and speed of all particles.
> > 2. **Differentiate Boiling from Evaporation:**
> >    * Evaporation happens at any temperature and only at the surface (rules out B). Boiling happens throughout the liquid at a specific temperature.
> > 3. **Identify Force and Spacing Changes:**
> >    * At the boiling point, the particles have enough energy to overcome all remaining attractive forces, separating widely into gas particles. Particle mass does not change (rules out D).
> > 4. **Conclusion:**
> >    * Particles gain energy to break all remaining forces and separate widely. The correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Energy changes during freezing
> **Question:** When liquid water freezes to form ice, what happens to the energy of the particles?
> 
> **A** The particles absorb thermal energy, increasing their kinetic energy.
> 
> **B** The particles lose kinetic energy, move slower, and form a regular lattice as attractive forces pull them together.
> 
> **C** The potential energy decreases while kinetic energy increases.
> 
> **D** The particles stop all movement and vibrations.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the Nature of Freezing:**
> >    * Freezing is a cooling process where a liquid turns into a solid. Heat is released to the surroundings.
> > 2. **Analyze Particle Motion:**
> >    * As water cools, the particles lose kinetic energy and move slower.
> > 3. **Analyze Arrangement Changes:**
> >    * As they slow down, intermolecular attractions pull them together into the fixed regular lattice of ice. They still vibrate in fixed positions (so they don't stop moving entirely, ruling out D).
> > 4. **Conclusion:**
> >    * Particles lose kinetic energy, slow down, and form a regular lattice. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Sublimation vs melting bonds
> **Question:** When solid dry ice (carbon dioxide) sublimates at room temperature, what is the nature of this change in terms of particles?
> 
> **A** Particles absorb enough energy to directly transition from a regular solid lattice to widely separated gas particles, bypassing the liquid state.
> 
> **B** Chemical bonds within carbon dioxide molecules are broken.
> 
> **C** Particles lose kinetic energy and move closer together.
> 
> **D** The arrangement of particles remains regular but they move faster.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Define Sublimation:**
> >    * Sublimation is the phase change from solid directly to gas, completely bypassing the liquid phase.
> > 2. **Relate to Kinetic Theory:**
> >    * Particles start in a solid lattice (highly ordered) and absorb heat energy to directly overcome intermolecular forces and separate widely into gas particles.
> > 3. **Understand Physical vs Chemical:**
> >    * Phase changes are physical changes; covalent bonds inside the CO₂ molecules are not broken (rules out B).
> > 4. **Conclusion:**
> >    * Solid to gas direct transition. The correct option is **A**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Heating a Liquid to Vapor
> **Question:** Heating a liquid causes it to become a vapor. What happens to the molecules of the liquid during this process?
> 
> | | The molecules become bigger | The molecules move further apart |
> | :--- | :--- | :--- |
> | A | ✗ | ✗ |
> | B | ✓ | ✗ |
> | C | ✗ | ✓ |
> | D | ✓ | ✓ |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate Molecule Size:**
> >    * Physical phase changes do NOT change the size or structure of individual molecules. The molecules do not become bigger (✗).
> > 2. **Evaluate Molecule Separation:**
> >    * Turning liquid into gas overcomes intermolecular forces and separates the particles widely from touching to very large distances. The molecules move further apart (✓).
> > 3. **Conclusion:**
> >    * Row **C** is correct.
        `,
        keyPoints: [
            "Melting occurs when solid particles gain enough energy to break out of their fixed lattice positions.",
            "Boiling/evaporation occurs when liquid particles overcome forces to separate completely.",
            "Cooling causes particles to lose energy, slow down, and form stronger bonds (condensation/freezing).",
            "Rate of evaporation increases with higher temperature, larger surface area, and weaker intermolecular forces."
        ]
    },
    {
        id: "gas-pressure",
        title: "Gas Pressure",
        type: "text",
        content: `
### 🎈 What Causes Gas Pressure?

**Gas pressure** is caused by the constant bombardment of moving gas particles hitting the inner walls of their container. Each collision exerts a tiny force, creating overall pressure.

> [!NOTE]
> ### ⚛️ Gas Pressure Mechanism
> 
> ${svgToken(gasPressureSvg)}

### ⚡ Factors Affecting Gas Pressure

The frequency and force of these collisions determine the gas pressure:

> [!IMPORTANT]
> ### 🧮 1. Temperature (Direct Proportion)
> Raising the temperature increases the average kinetic energy of the particles. 
> * They move faster, hitting the container walls **more frequently** and with **greater force**, which increases the pressure.

> [!IMPORTANT]
> ### 🧮 2. Volume of Container (Inverse Proportion)
> Reducing the container volume forces the same number of particles into a smaller space. 
> * They collide with the container walls **more frequently**, increasing the pressure.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Cause of Gas Pressure
> **Question:** Which statement best describes how a gas exerts pressure on the walls of its container?
> 
> **A** The gas particles chemically react with the container walls.
> 
> **B** The gas particles continuously collide with the inner walls of the container, exerting a force on impact.
> 
> **C** The electrostatic attraction between gas particles pulls them outward.
> 
> **D** The total weight of the gas particles rests on the base of the container.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand Gas Particle Motion:**
> >    * Gas particles are in constant, rapid, and random straight-line motion.
> > 2. **Describe Collisions with Container Walls:**
> >    * Because they move randomly, particles continuously hit the inner walls of the container.
> > 3. **Relate Force to Pressure:**
> >    * Each individual collision exerts a tiny outward force. The collective force of billions of these impacts per second over a unit area is what we measure as pressure.
> > 4. **Conclusion:**
> >    * Pressure is due to continuous collisions with the walls. The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Conditions for Maximum Collision Frequency
> **Question:** Which row represents the conditions under which the particles of a gas collide most frequently with the walls?
> 
> | | Pressure | Temperature |
> | :--- | :--- | :--- |
> | A | High | High |
> | B | High | Low |
> | C | Low | High |
> | D | Low | Low |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Temperature Effect on Collision Frequency:**
> >    * At **High Temperature**, particles have higher average kinetic energy and move at higher velocities, meaning they travel between wall boundaries faster and hit walls more times per second.
> > 2. **Analyze Pressure Effect on Collision Frequency:**
> >    * At **High Pressure**, either the gas is compressed into a smaller volume or more particles are packed per unit volume.
> >    * More particles packed together means vastly more impacts occur on the container surfaces per unit time.
> > 3. **Combine Both Conditions:**
> >    * Both High Pressure and High Temperature maximize the rate and frequency of particle collisions.
> > 4. **Conclusion:**
> >    * Row **A** represents the conditions for highest collision frequency.
        `,
        keyPoints: [
            "Gas pressure results from gas particles colliding with the walls of their container.",
            "Higher temperatures increase gas pressure because particles move faster and hit walls harder and more often.",
            "Smaller container volumes increase collision frequency, raising gas pressure.",
            "High pressure and high temperature maximize the frequency of particle collisions."
        ]
    }
];
