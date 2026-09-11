export const lessonQuiz = [
  {
    id: "EDEXCEL-AL-U2-L4-01",
    question: "Which of the following statements correctly explains why a small increase in temperature leads to a significant increase in the rate of a gas phase reaction?",
    options: [
      { text: "The frequency of collisions between molecules with kinetic energy greater than the activation energy is greater at a higher temperature.", isCorrect: true },
      { text: "The frequency of collisions between molecules is greater at a higher temperature.", isCorrect: false },
      { text: "The activation energy of the reaction is less when the gases are at higher temperature.", isCorrect: false },
      { text: "The average kinetic energy of the molecules is slightly greater at a higher temperature.", isCorrect: false }
    ],
    explanation: "• Although average kinetic energy and collision frequency increase slightly, the major factor is the fraction of molecules with E ≥ Ea.\n• A small increase in temperature shifts the Maxwell-Boltzmann distribution, causing a massive increase in the frequency of successful collisions."
  },
  {
    id: "EDEXCEL-AL-U2-L4-02",
    question: "An exothermic reaction proceeds by two stages: Reactants → Intermediate → Products. The activation energy of stage 1 is $50\\text{ kJ mol}^{-1}$, and the overall enthalpy change of the reaction is $-100\\text{ kJ mol}^{-1}$. Which feature would be found in the correct reaction profile diagram?",
    options: [
      { text: "The first peak is at +50 kJ mol⁻¹ (above reactants at 0) and the final product level is at -100 kJ mol⁻¹.", isCorrect: true },
      { text: "The first peak is at +100 kJ mol⁻¹ and the product level is at +50 kJ mol⁻¹.", isCorrect: false },
      { text: "The product level is placed at +100 kJ mol⁻¹.", isCorrect: false },
      { text: "The intermediate level is placed at -150 kJ mol⁻¹.", isCorrect: false }
    ],
    explanation: "• The activation energy of the first stage is measured from the reactants (at 0 kJ mol⁻¹) to the first peak, which is +50 kJ mol⁻¹.\n• The overall enthalpy change ΔH is the difference between reactants and products, meaning products are at -100 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U2-L4-03",
    question: "The distribution of the fraction of molecules with energy E is given for two different temperatures $T_1$ and $T_2$ ($T_2 > T_1$). The letters P, Q, and R represent separate shaded areas under the curves, where P is the area under $T_1$ to the left of Ea, Q is the area under $T_1$ to the right of Ea, and R is the additional area under $T_2$ to the right of Ea. Which expression gives the fraction of molecules that have energy equal to or greater than the marked activation energy at temperature $T_2$?",
    options: [
      { text: "(Q + R) / (P + Q)", isCorrect: true },
      { text: "Q / P", isCorrect: false },
      { text: "(Q + P) / P", isCorrect: false },
      { text: "(Q + R) / (P + Q - R)", isCorrect: false }
    ],
    explanation: "• The total area under any Maxwell-Boltzmann curve represents the total number of molecules, which is represented by (P + Q) for temperature T₁.\n• Since the total number of molecules is constant at both temperatures, the total area under T₂ is also (P + Q).\n• The area to the right of Ea at temperature T₂ is (Q + R).\n• Thus, the fraction of molecules with E ≥ Ea at T₂ is (Q + R) / (P + Q)."
  },
  {
    id: "EDEXCEL-AL-U2-L4-04",
    question: "Curve X shows the volume of oxygen gas given off over time during the decomposition of $100\\text{ cm}^3$ of $1.0\\text{ mol dm}^{-3}$ hydrogen peroxide, catalysed by manganese(IV) oxide. Which alteration to the original conditions would produce a Curve Y, which starts with a gentler gradient (slower rate) but eventually levels off at a higher final volume?",
    options: [
      { text: "Adding some 0.1 mol dm⁻³ hydrogen peroxide solution.", isCorrect: true },
      { text: "Adding distilled water to the reaction mixture.", isCorrect: false },
      { text: "Using less manganese(IV) oxide catalyst.", isCorrect: false },
      { text: "Lowering the reaction temperature.", isCorrect: false }
    ],
    explanation: "• Adding 0.1 mol dm⁻³ H₂O₂ increases the total moles of reactant, yielding a higher final volume of oxygen.\n• However, mixing it with the 1.0 mol dm⁻³ solution decreases the overall concentration, slowing down the initial rate of reaction (gentler gradient)."
  },
  {
    id: "EDEXCEL-AL-U2-L4-05",
    question: "An enthalpy level diagram represents a reaction occurring with and without a catalyst. Let E₁ be the height from reactants to the uncatalysed peak, E₂ be from reactants to the catalysed peak, E₃ be from products to the catalysed peak, and E₄ be from products to the uncatalysed peak. Which statement is correct?",
    options: [
      { text: "E₄ is the activation energy for the reverse uncatalysed reaction.", isCorrect: true },
      { text: "The forward reaction, with a catalyst, is endothermic.", isCorrect: false },
      { text: "The enthalpy change of reaction is (E₂ - E₃).", isCorrect: false },
      { text: "The enthalpy change of reaction is reduced when using a catalyst.", isCorrect: false }
    ],
    explanation: "• The activation energy of the reverse uncatalysed reaction is measured from the products to the uncatalysed transition state peak, which corresponds to E₄.\n• Enthalpy change is unaffected by a catalyst."
  },
  {
    id: "EDEXCEL-AL-U2-L4-06",
    question: "Reactant R reacts with T in a reversible, exothermic reaction. The concentration of R is plotted against time. If the reaction is repeated at a higher temperature, but with the same initial concentrations, how does the new curve compare to the original?",
    options: [
      { text: "It decreases faster initially and levels off at a higher plateau (concentration of R).", isCorrect: true },
      { text: "It decreases slower initially and levels off at a lower plateau.", isCorrect: false },
      { text: "It decreases faster initially and levels off at the same plateau.", isCorrect: false },
      { text: "It decreases slower initially and levels off at a higher plateau.", isCorrect: false }
    ],
    explanation: "• Higher temperature speeds up the reaction rate, so the concentration of R decreases faster initially (steeper curve).\n• Because the forward reaction is exothermic, Le Chatelier's Principle predicts that equilibrium shifts left at higher temperatures, resulting in a higher equilibrium concentration of reactant R."
  },
  {
    id: "EDEXCEL-AL-U2-L4-07",
    question: "Which statement about the effect of a catalyst on an endothermic, reversible reaction that is in dynamic equilibrium is correct?",
    options: [
      { text: "It increases the rate of both the forward and the backward reactions.", isCorrect: true },
      { text: "It increases the percentage yield of the product.", isCorrect: false },
      { text: "It increases the rate of the forward reaction but not that of the backward reaction.", isCorrect: false },
      { text: "It increases the rate of the backward reaction but not that of the forward reaction.", isCorrect: false }
    ],
    explanation: "• A catalyst provides an alternative pathway with a lower activation energy for both directions.\n• Therefore, it increases the rates of both forward and backward reactions equally, without changing the equilibrium yield."
  },
  {
    id: "EDEXCEL-AL-U2-L4-08",
    question: "In an experiment investigating the rate of reaction between marble chips and dilute hydrochloric acid, the flask is placed on a balance with a plug of cotton wool in its neck. What is the purpose of the cotton wool?",
    options: [
      { text: "To allow carbon dioxide gas to escape while preventing any acid spray from escaping.", isCorrect: true },
      { text: "To prevent carbon dioxide gas from escaping into the room.", isCorrect: false },
      { text: "To prevent atmospheric oxygen from entering the reaction mixture.", isCorrect: false },
      { text: "To absorb the heat generated by the reaction.", isCorrect: false }
    ],
    explanation: "• Carbon dioxide gas must escape so the balance can record the loss in mass over time.\n• The cotton wool allows gas to escape but traps droplets of acid spray, ensuring the mass loss is due to carbon dioxide only."
  },
  {
    id: "EDEXCEL-AL-U2-L4-09",
    question: "If the experiment between marble chips and dilute HCl is repeated with the same mass of powdered marble, how would the mass-time graph change?",
    options: [
      { text: "The curve starts steeper (faster rate) but levels off at the same final mass loss.", isCorrect: true },
      { text: "The curve starts gentler but levels off at a higher final mass loss.", isCorrect: false },
      { text: "The curve starts steeper and levels off at a lower final mass loss.", isCorrect: false },
      { text: "The curve remains identical to the original marble chip experiment.", isCorrect: false }
    ],
    explanation: "• Powdered marble has a larger surface area, increasing the frequency of collisions and reaction rate (steeper curve).\n• Since the mass of reactant is identical, the total amount of carbon dioxide gas produced is the same, so it levels off at the same final mass loss."
  },
  {
    id: "EDEXCEL-AL-U2-L4-10",
    question: "Hydrogen and iodine react reversibly: $H_2\\text{(g)} + I_2\\text{(g)} \\rightleftharpoons 2HI\\text{(g)}$ (forward reaction is endothermic). If the purple equilibrium mixture is cooled from $400\\text{ }^{\\circ}\\text{C}$ to $200\\text{ }^{\\circ}\\text{C}$, what color change is observed?",
    options: [
      { text: "The mixture becomes darker purple because the equilibrium shifts to the left.", isCorrect: true },
      { text: "The mixture becomes colourless because the equilibrium shifts to the right.", isCorrect: false },
      { text: "The mixture turns yellow due to the formation of liquid iodine.", isCorrect: false },
      { text: "The mixture remains pale purple because cooling does not affect reversible systems.", isCorrect: false }
    ],
    explanation: "• The forward reaction is endothermic, so the backward reaction is exothermic.\n• Cooling the mixture shifts the equilibrium position to the left (exothermic direction), increasing the concentration of purple iodine gas, turning the mixture darker."
  },
  {
    id: "EDEXCEL-AL-U2-L4-11",
    question: "A concentration-time graph for the $H_2 + I_2 \\rightleftharpoons 2HI$ equilibrium shows a sudden spike in $H_2$ concentration at time t, followed by a gradual decrease in $H_2$ and $I_2$, and a gradual increase in $HI$. What change was made to the system at time t?",
    options: [
      { text: "Hydrogen gas was added to the reaction container.", isCorrect: true },
      { text: "Hydrogen iodide was removed from the container.", isCorrect: false },
      { text: "The volume of the reaction container was doubled.", isCorrect: false },
      { text: "A catalyst was added to the mixture.", isCorrect: false }
    ],
    explanation: "• A vertical spike in concentration indicates a sudden injection/removal of a species.\n• A vertical spike upwards in [H₂] means H₂ gas was added to the container at time t."
  },
  {
    id: "EDEXCEL-AL-U2-L4-12",
    question: "The percentage conversion of $Y_2$ to $XY_2$ in the reversible reaction $X_2\\text{(g)} + 2Y_2\\text{(g)} \\rightleftharpoons 2XY_2\\text{(g)}$ is measured at various temperatures. The curve decreases steadily from 50% at 0°C to 7% at 800°C. What does this indicate about the thermicity of the forward reaction?",
    options: [
      { text: "It is exothermic, because conversion decreases as temperature rises.", isCorrect: true },
      { text: "It is endothermic, because conversion decreases as temperature rises.", isCorrect: false },
      { text: "It is exothermic, because conversion increases as temperature falls.", isCorrect: false },
      { text: "It is thermoneutral (ΔH = 0).", isCorrect: false }
    ],
    explanation: "• An increase in temperature shifts the equilibrium in the endothermic direction.\n• Since the conversion of Y₂ to products decreases at higher temperatures, the equilibrium must have shifted left.\n• This proves the backward reaction is endothermic, so the forward reaction is exothermic."
  },
  {
    id: "EDEXCEL-AL-U2-L4-13",
    question: "Methanol is manufactured by the reaction: $CO\\text{(g)} + 2H_2\\text{(g)} \\rightleftharpoons CH_3OH\\text{(g)}$ (ΔH = -128 kJ mol⁻¹). Which set of conditions would yield the maximum equilibrium conversion of reactants to methanol?",
    options: [
      { text: "Low temperature and high pressure.", isCorrect: true },
      { text: "High temperature and high pressure.", isCorrect: false },
      { text: "Low temperature and low pressure.", isCorrect: false },
      { text: "High temperature and low pressure.", isCorrect: false }
    ],
    explanation: "• The forward reaction is exothermic, so low temperature shifts the equilibrium to the right.\n• There are 3 moles of gas on the left and 1 mole of gas on the right, so high pressure shifts the equilibrium to the right."
  },
  {
    id: "EDEXCEL-AL-U2-L4-14",
    question: "Graphite and diamond are allotropes of carbon. $C\\text{(graphite)} \\rightleftharpoons C\\text{(diamond)}$ (ΔH = +1.8 kJ mol⁻¹). The density of graphite is $2.25\\text{ g cm}^{-3}$ and diamond is $3.51\\text{ g cm}^{-3}$. Which statement is correct?",
    options: [
      { text: "Graphite is more thermodynamically stable than diamond because it has lower enthalpy.", isCorrect: true },
      { text: "Diamond takes up more space per mole of carbon than graphite.", isCorrect: false },
      { text: "Lowering temperature and raising pressure would favor the formation of diamond.", isCorrect: false },
      { text: "Graphite and diamond have the same standard molar volume.", isCorrect: false }
    ],
    explanation: "• The enthalpy change to go from graphite to diamond is positive, meaning diamond has higher enthalpy.\n• Since lower enthalpy states are more stable, graphite is the thermodynamically stable allotrope under standard conditions."
  },
  {
    id: "EDEXCEL-AL-U2-L4-15",
    question: "Predict the conditions of temperature and pressure required to convert graphite to diamond: $C\\text{(graphite)} \\rightleftharpoons C\\text{(diamond)}$ (ΔH = +1.8 kJ mol⁻¹; density of graphite = 2.25, diamond = 3.51 g cm⁻³).",
    options: [
      { text: "High temperature and high pressure.", isCorrect: true },
      { text: "Low temperature and high pressure.", isCorrect: false },
      { text: "High temperature and low pressure.", isCorrect: false },
      { text: "Low temperature and low pressure.", isCorrect: false }
    ],
    explanation: "• The forward reaction is endothermic, so high temperature shifts the equilibrium to the right.\n• Diamond is denser than graphite, meaning it occupies a smaller volume per mole of carbon. High pressure shifts the equilibrium to the denser (smaller volume) phase, which is diamond."
  },
  {
    id: "EDEXCEL-AL-U2-L4-16",
    question: "An acid-base indicator equilibrium is established: $HIn\\text{(aq) [yellow]} \\rightleftharpoons H^+\\text{(aq)} + In^-\\text{(aq) [blue]}$. What is observed when concentrated hydrochloric acid (HCl) is added to a green solution of this indicator?",
    options: [
      { text: "The solution turns yellow, because the addition of H⁺ shifts the equilibrium to the left.", isCorrect: true },
      { text: "The solution turns blue, because the addition of H⁺ shifts the equilibrium to the right.", isCorrect: false },
      { text: "The solution remains green, because HCl does not affect indicator equilibria.", isCorrect: false },
      { text: "The solution turns colorless due to decomposition of the indicator.", isCorrect: false }
    ],
    explanation: "• Adding HCl increases the concentration of H⁺ ions in solution.\n• According to Le Chatelier's Principle, the equilibrium shifts to the left to consume the added H⁺, converting blue In⁻ back to yellow HIn."
  },
  {
    id: "EDEXCEL-AL-U2-L4-17",
    question: "In the industrial steam reforming of methane: $CH_4\\text{(g)} + H_2O\\text{(g)} \\rightleftharpoons CO\\text{(g)} + 3H_2\\text{(g)}$ (ΔH = +210 kJ mol⁻¹), why are compromise conditions of $800\\text{ }^{\\circ}\\text{C}$ and $30\\text{ atm}$ used in industry?",
    options: [
      { text: "High temperature favors yield and rate; high pressure increases rate but decreases yield, so 30 atm is a cost-compromise.", isCorrect: true },
      { text: "Low temperature and low pressure maximize both rate and yield.", isCorrect: false },
      { text: "High pressure maximizes the equilibrium yield of hydrogen.", isCorrect: false },
      { text: "The catalyst requires high pressure to stay active.", isCorrect: false }
    ],
    explanation: "• The forward reaction is endothermic, so high temperature ($800^{\\circ}$C) increases yield and rate.\n• The forward reaction increases gas moles (2 → 4), so low pressure would maximize yield. However, high pressure ($30$ atm) is needed to ensure a fast reaction rate and collision frequency."
  },
  {
    id: "EDEXCEL-AL-U2-L4-18",
    question: "What is the standard unit of the rate of a chemical reaction?",
    options: [
      { text: "mol dm⁻³ s⁻¹", isCorrect: true },
      { text: "mol s⁻¹", isCorrect: false },
      { text: "dm³ mol⁻¹ s⁻¹", isCorrect: false },
      { text: "mol dm⁻³ s", isCorrect: false }
    ],
    explanation: "• Rate is change in concentration per unit time.\n• Concentration is measured in mol dm⁻³ and time in seconds (s).\n• Therefore, the unit is mol dm⁻³ s⁻¹."
  },
  {
    id: "EDEXCEL-AL-U2-L4-19",
    question: "How is the rate of reaction at a specific time, t, determined from a concentration-time graph?",
    options: [
      { text: "By drawing a tangent to the curve at time t and calculating its gradient.", isCorrect: true },
      { text: "By dividing the final concentration by time t.", isCorrect: false },
      { text: "By calculating the area under the curve up to time t.", isCorrect: false },
      { text: "By taking the y-value of the curve at time t.", isCorrect: false }
    ],
    explanation: "• The gradient of a concentration-time curve represents the rate of reaction.\n• For a specific time t, we draw a tangent to the curve at that point and calculate the gradient (Δy / Δx) of the tangent line."
  },
  {
    id: "EDEXCEL-AL-U2-L4-20",
    question: "In experiments where a visible change occurs after a time, t, how is the relative rate of reaction represented?",
    options: [
      { text: "Rate ∝ 1/t", isCorrect: true },
      { text: "Rate ∝ t", isCorrect: false },
      { text: "Rate ∝ t²", isCorrect: false },
      { text: "Rate ∝ log(t)", isCorrect: false }
    ],
    explanation: "• If the amount of product formed to reach the visible change is constant, the rate is inversely proportional to time.\n• This is expressed as Rate ∝ 1/t."
  },
  {
    id: "EDEXCEL-AL-U2-L4-21",
    question: "Which of the following outlines the two criteria required for a collision between reactant particles to be successful?",
    options: [
      { text: "Collision energy ≥ Ea, and correct molecular orientation.", isCorrect: true },
      { text: "High temperature, and high pressure.", isCorrect: false },
      { text: "Reactants in the gaseous state, and presence of a catalyst.", isCorrect: false },
      { text: "Low activation energy, and rapid agitation.", isCorrect: false }
    ],
    explanation: "• Collision theory states that for a collision to be successful, particles must: 1) collide with kinetic energy equal to or greater than the activation energy (Ea); 2) collide in the correct spatial orientation."
  },
  {
    id: "EDEXCEL-AL-U2-L4-22",
    question: "When ethene reacts with hydrogen bromide (HBr), why does a collision where the bromine atom approaches the double bond fail to react?",
    options: [
      { text: "The electron cloud of the bromine atom repels the electron density of the C=C double bond.", isCorrect: true },
      { text: "Bromine has a higher mass than hydrogen, slowing down collision speeds.", isCorrect: false },
      { text: "Bromine is too small to react with ethene.", isCorrect: false },
      { text: "The C=C double bond is electrophilic and attracts only anions.", isCorrect: false }
    ],
    explanation: "• Ethene has a high electron density around the C=C double bond.\n• The electronegative bromine end of HBr is repelled by this high electron density.\n• The electropositive hydrogen end (δ+) must approach the double bond for the reaction to occur."
  },
  {
    id: "EDEXCEL-AL-U2-L4-23",
    question: "What is meant by the term 'steric hindrance'?",
    options: [
      { text: "The slowing or prevention of a reaction because bulky groups physically shield the reactive site.", isCorrect: true },
      { text: "The decrease in reaction rate due to a decrease in temperature.", isCorrect: false },
      { text: "The repulsion of molecules due to identical ionic charges.", isCorrect: false },
      { text: "The blocking of active sites on a solid catalyst surface by poison molecules.", isCorrect: false }
    ],
    explanation: "• Steric hindrance is a physical blocking effect.\n• Large, bulky atoms or groups in a molecule crowd the reactive carbon, preventing the attacking nucleophile or electrophile from reaching it."
  },
  {
    id: "EDEXCEL-AL-U2-L4-24",
    question: "Why does tetrachloromethane (CCl₄) not undergo nucleophilic substitution (hydrolysis) with NaOH, whereas chloromethane (CH₃Cl) reacts readily?",
    options: [
      { text: "The four large chlorine atoms shield the central carbon, preventing the hydroxide ion from attacking.", isCorrect: true },
      { text: "Chlorine is more electronegative than hydrogen, making the C-Cl bonds non-polar.", isCorrect: false },
      { text: "CCl₄ is highly soluble in water, diluting the hydroxide ions.", isCorrect: false },
      { text: "Sodium hydroxide cannot react with compounds containing multiple halogen atoms.", isCorrect: false }
    ],
    explanation: "• In CCl₄, the carbon is bonded to four bulky chlorine atoms.\n• These chlorine atoms physically shield the central carbon from attack by the OH⁻ nucleophile (steric hindrance).\n• In CH₃Cl, the small hydrogen atoms do not shield the carbon, allowing attack."
  },
  {
    id: "EDEXCEL-AL-U2-L4-25",
    question: "Why do many organic reactions require heating or refluxing for long periods of time?",
    options: [
      { text: "They have high activation energies due to strong covalent bonds that need to be broken.", isCorrect: true },
      { text: "Organic reactants decompose instantly at room temperature.", isCorrect: false },
      { text: "Organic reactions are highly exothermic and heat must be continuously added to balance them.", isCorrect: false },
      { text: "Heating decreases the number of collisions, making them more targeted.", isCorrect: false }
    ],
    explanation: "• Organic compounds contain strong covalent bonds.\n• This leads to high activation energies.\n• Heating increases the average kinetic energy of the molecules, so a larger fraction of collisions have energy ≥ Ea."
  },
  {
    id: "EDEXCEL-AL-U2-L4-26",
    question: "A collision between two gas molecules has a kinetic energy of $1.0 \\\\times 10^{-18}\\text{ J}$. What is this energy in $\\text{kJ mol}^{-1}$?",
    options: [
      { text: "602 kJ mol⁻¹", isCorrect: true },
      { text: "60.2 kJ mol⁻¹", isCorrect: false },
      { text: "6.02 kJ mol⁻¹", isCorrect: false },
      { text: "6020 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "• Energy per mole = 1.0 × 10⁻¹⁸ J × (6.022 × 10²³ mol⁻¹) = 602,200 J mol⁻¹.\n• In kJ mol⁻¹ = 602,200 / 1000 = 602 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U2-L4-27",
    question: "At room temperature and pressure, there are about $1 \\\\times 10^{32}$ collisions per m³ every second in a gas mixture. Why do reactions not complete in a fraction of a second?",
    options: [
      { text: "The vast majority of collisions do not have energy ≥ Ea or correct orientation.", isCorrect: true },
      { text: "Gas molecules repel each other before colliding.", isCorrect: false },
      { text: "The activation energy of gas reactions is always zero.", isCorrect: false },
      { text: "Gas collisions are elastic, meaning no energy is transferred.", isCorrect: false }
    ],
    explanation: "• Although the collision frequency is extremely high, only a tiny fraction of these collisions have energy equal to or greater than the activation energy (Ea) and occur with the correct orientation."
  },
  {
    id: "EDEXCEL-AL-U2-L4-28",
    question: "Which of the following statements about reactant concentration-time graphs is correct?",
    options: [
      { text: "The gradient is negative and represents the rate of reaction.", isCorrect: true },
      { text: "The gradient is positive and represents the rate of reaction.", isCorrect: false },
      { text: "The gradient is constant throughout the reaction.", isCorrect: false },
      { text: "The gradient is zero at the start of the reaction.", isCorrect: false }
    ],
    explanation: "• Reactant concentration decreases over time, so the gradient is negative.\n• The rate is the magnitude of this gradient, so Rate = -gradient."
  },
  {
    id: "EDEXCEL-AL-U2-L4-29",
    question: "If a collision has a molar energy of $200\\text{ kJ mol}^{-1}$ but the activation energy for the reaction is $350\\text{ kJ mol}^{-1}$, what happens?",
    options: [
      { text: "The molecules bounce off each other without reacting.", isCorrect: true },
      { text: "The molecules react slowly over time.", isCorrect: false },
      { text: "A catalyst is spontaneously formed to lower the Ea.", isCorrect: false },
      { text: "The molecules react but form a different product.", isCorrect: false }
    ],
    explanation: "• The collision energy (200 kJ mol⁻¹) is less than the activation energy (350 kJ mol⁻¹).\n• Therefore, the collision is unsuccessful and the particles bounce off each other unchanged."
  },
  {
    id: "EDEXCEL-AL-U2-L4-30",
    question: "Why does increasing the concentration of a reactant solution increase the rate of reaction?",
    options: [
      { text: "Solute particles are closer together, increasing collision frequency.", isCorrect: true },
      { text: "The activation energy of the reaction is lowered.", isCorrect: false },
      { text: "The average kinetic energy of the particles is increased.", isCorrect: false },
      { text: "The particles are forced to collide in only one specific orientation.", isCorrect: false }
    ],
    explanation: "• Increasing concentration means there are more particles in a given volume.\n• This reduces the distance between them, increasing the frequency of collisions (collisions per second) and successful collisions."
  },
  {
    id: "EDEXCEL-AL-U2-L4-31",
    question: "Why does an increase in pressure have almost no effect on reactions in the solid or liquid phase?",
    options: [
      { text: "Solids and liquids are virtually incompressible, so pressure does not bring particles closer together.", isCorrect: true },
      { text: "Solids and liquids do not contain any kinetic energy.", isCorrect: false },
      { text: "Pressure decreases the temperature of condensed phases.", isCorrect: false },
      { text: "Solids and liquids react only on their outer boundaries which are pressure-shielded.", isCorrect: false }
    ],
    explanation: "• Pressure only forces particles closer together in compressible phases (gases).\n• Solids and liquids have fixed volumes and their particles are already in close contact, so raising pressure does not increase concentration or collision frequency."
  },
  {
    id: "EDEXCEL-AL-U2-L4-32",
    question: "For a heterogeneous reaction involving a solid, why does using a powdered solid instead of large lumps increase the rate?",
    options: [
      { text: "Powdering increases the surface area, exposing more particles on the surface for collisions.", isCorrect: true },
      { text: "Powdering increases the temperature of the solid.", isCorrect: false },
      { text: "Powdering lowers the activation energy barrier.", isCorrect: false },
      { text: "Powdering increases the chemical purity of the solid.", isCorrect: false }
    ],
    explanation: "• Heterogeneous reactions involving a solid occur only at the surface where phases meet.\n• Powdering increases the surface area, allowing more solid particles to collide with the liquid/gas reactants per second."
  },
  {
    id: "EDEXCEL-AL-U2-L4-33",
    question: "Which of the following is a characteristic feature of any Maxwell-Boltzmann energy distribution curve?",
    options: [
      { text: "The curve starts at the origin, is asymmetrical, and approaches the x-axis asymptotically.", isCorrect: true },
      { text: "The curve is symmetrical and passes through the origin.", isCorrect: false },
      { text: "The area under the curve increases as the temperature increases.", isCorrect: false },
      { text: "The peak represents the maximum possible energy of the molecules.", isCorrect: false }
    ],
    explanation: "• Maxwell-Boltzmann curves start at (0,0) because no molecules have zero energy.\n• They are asymmetrical (skewed to the right) and approach the x-axis asymptotically (there is no upper energy limit)."
  },
  {
    id: "EDEXCEL-AL-U2-L4-34",
    question: "How does the Maxwell-Boltzmann distribution curve shift when the temperature of a gas is increased?",
    options: [
      { text: "The peak moves down and to the right.", isCorrect: true },
      { text: "The peak moves up and to the right.", isCorrect: false },
      { text: "The peak moves down and to the left.", isCorrect: false },
      { text: "The peak remains at the same height but shifts right.", isCorrect: false }
    ],
    explanation: "• At higher temperatures, the average energy of the molecules increases, shifting the peak to the right.\n• Since the total number of molecules remains constant, the area under the curve must remain constant, forcing the peak to shift down."
  },
  {
    id: "EDEXCEL-AL-U2-L4-35",
    question: "What does the area under the Maxwell-Boltzmann distribution curve to the right of the activation energy (Ea) line represent?",
    options: [
      { text: "The fraction of molecules with sufficient energy to react.", isCorrect: true },
      { text: "The total number of unsuccessful collisions.", isCorrect: false },
      { text: "The rate constant of the reaction.", isCorrect: false },
      { text: "The total enthalpy change (ΔH) of the reaction.", isCorrect: false }
    ],
    explanation: "• The vertical Ea line marks the threshold required for reaction.\n• The shaded area to the right of this line represents the total fraction of molecules that possess kinetic energy equal to or greater than the activation energy."
  },
  {
    id: "EDEXCEL-AL-U2-L4-36",
    question: "Which statement correctly identifies the primary reason why a small increase in temperature results in a large increase in reaction rate?",
    options: [
      { text: "There is an exponential increase in the fraction of molecules with energy equal to or greater than the activation energy.", isCorrect: true },
      { text: "The overall collision frequency increases exponentially.", isCorrect: false },
      { text: "The activation energy of the reaction is significantly lowered.", isCorrect: false },
      { text: "The orientation of colliding molecules becomes highly ordered.", isCorrect: false }
    ],
    explanation: "• Increasing temperature increases collision frequency only slightly.\n• The major effect is that the distribution shifts, causing an exponential increase in the fraction of molecules with E ≥ Ea, leading to a massive increase in successful collisions."
  },
  {
    id: "EDEXCEL-AL-U2-L4-37",
    question: "In solutions, solute molecules are often trapped by surrounding solvent molecules. What is this phenomenon called?",
    options: [
      { text: "Solvent cage effect", isCorrect: true },
      { text: "Steric hindrance", isCorrect: false },
      { text: "Transition state barrier", isCorrect: false },
      { text: "Dynamic hydration", isCorrect: false }
    ],
    explanation: "• In solution, solute molecules are surrounded by closely packed solvent molecules, forming a 'solvent cage'.\n• Reactants must diffuse through these cages to meet and react, though once inside the same cage, they collide multiple times."
  },
  {
    id: "EDEXCEL-AL-U2-L4-38",
    question: "Which of the following is the correct definition of a catalyst's mode of action?",
    options: [
      { text: "It provides an alternative reaction pathway with a lower activation energy.", isCorrect: true },
      { text: "It lowers the activation energy of the original reaction pathway.", isCorrect: false },
      { text: "It increases the temperature of the reacting particles locally.", isCorrect: false },
      { text: "It shifts the position of equilibrium towards the products.", isCorrect: false }
    ],
    explanation: "• A catalyst does not alter the original pathway or its Ea.\n• Instead, it provides a different, alternative reaction route that has a lower activation energy barrier."
  },
  {
    id: "EDEXCEL-AL-U2-L4-39",
    question: "When a catalyst reacts with reactants to form a stable intermediate, what feature is seen on the catalysed reaction profile diagram?",
    options: [
      { text: "Two peaks with a local minimum (valley) representing the intermediate in between.", isCorrect: true },
      { text: "A single peak that is lower than the uncatalysed peak.", isCorrect: false },
      { text: "A flat line representing constant enthalpy.", isCorrect: false },
      { text: "A curve starting at a lower enthalpy than the reactants.", isCorrect: false }
    ],
    explanation: "• The formation of a stable intermediate involves a two-step mechanism.\n• This is represented by two activation energy peaks (one for forming the intermediate, one for reacting it to products) with a local valley (minimum) in between representing the intermediate."
  },
  {
    id: "EDEXCEL-AL-U2-L4-40",
    question: "What effect does adding a catalyst have on a reversible reaction at equilibrium?",
    options: [
      { text: "It increases the rate of both forward and backward reactions equally, causing no shift in equilibrium.", isCorrect: true },
      { text: "It increases the yield of products by shifting equilibrium to the right.", isCorrect: false },
      { text: "It decreases the rate of the backward reaction, shifting equilibrium to the right.", isCorrect: false },
      { text: "It stops the backward reaction entirely.", isCorrect: false }
    ],
    explanation: "• A catalyst increases the rates of the forward and backward reactions by the same factor.\n• Therefore, it does not change the yield of products or shift the position of equilibrium; it only allows the system to reach equilibrium faster."
  },
  {
    id: "EDEXCEL-AL-U2-L4-41",
    question: "How do catalysts improve the sustainability of industrial processes, such as the Haber Process?",
    options: [
      { text: "They allow reactions to run at lower temperatures (saving energy/fuel) and can increase atom economy.", isCorrect: true },
      { text: "They increase the enthalpy change (ΔH) of the reaction, releasing more heat.", isCorrect: false },
      { text: "They eliminate the need for any reactants other than water.", isCorrect: false },
      { text: "They make reactions irreversible, preventing product loss.", isCorrect: false }
    ],
    explanation: "• By lowering Ea, catalysts allow reactions to occur at lower temperatures, reducing fossil fuel consumption and carbon emissions.\n• They can also enable cleaner pathways with higher atom economy."
  },
  {
    id: "EDEXCEL-AL-U2-L4-42",
    question: "In the reaction profile diagram of an exothermic reaction, where is the enthalpy level of the products placed relative to the reactants?",
    options: [
      { text: "Below the reactants, because heat is released (ΔH is negative).", isCorrect: true },
      { text: "Above the reactants, because heat is absorbed.", isCorrect: false },
      { text: "At the same level as the reactants.", isCorrect: false },
      { text: "At the peak of the activation energy curve.", isCorrect: false }
    ],
    explanation: "• Exothermic reactions release heat energy to the surroundings, meaning the products have lower chemical energy (enthalpy) than the reactants.\n• Thus, products are placed below reactants, and ΔH is negative."
  },
  {
    id: "EDEXCEL-AL-U2-L4-43",
    question: "Why is the reaction between peroxydisulfate ions ($S_2O_8^{2-}$) and iodide ions ($I^-$) extremely slow without a catalyst?",
    options: [
      { text: "Both reactants are negatively charged, causing strong electrostatic repulsion.", isCorrect: true },
      { text: "The activation energy of the reaction is zero, preventing stable collisions.", isCorrect: false },
      { text: "Iodide ions are highly steric hindered by the sulfur atoms.", isCorrect: false },
      { text: "Peroxydisulfate decomposes into sulfur dioxide in water.", isCorrect: false }
    ],
    explanation: "• Both S₂O₈²⁻ and I⁻ ions carry negative charges.\n• Like charges repel, creating a very high electrostatic activation barrier that prevents them from colliding and reacting."
  },
  {
    id: "EDEXCEL-AL-U2-L4-44",
    question: "When Fe²⁺ is used to catalyse the peroxydisulfate-iodide reaction, what intermediate species are present?",
    options: [
      { text: "Fe³⁺(aq) and SO₄²⁻(aq)", isCorrect: true },
      { text: "Fe(s) and I₂(aq)", isCorrect: false },
      { text: "S₂O₈²⁻(aq) and Fe³⁺(aq)", isCorrect: false },
      { text: "Fe(OH)₃(s) and SO₂(g)", isCorrect: false }
    ],
    explanation: "• Step 1 produces Fe³⁺ and SO₄²⁻ from Fe²⁺ and S₂O₈²⁻.\n• In Step 2, Fe³⁺ reacts with I⁻ to regenerate Fe²⁺ and yield I₂.\n• Hence, the intermediate species are Fe³⁺(aq) and SO₄²⁻(aq)."
  },
  {
    id: "EDEXCEL-AL-U2-L4-45",
    question: "Which of the following outlines the correct sequence of steps for a heterogeneous catalyst in a gas-phase reaction?",
    options: [
      { text: "Adsorption of reactants, reaction on the surface, desorption of products.", isCorrect: true },
      { text: "Desorption of reactants, reaction on the surface, adsorption of products.", isCorrect: false },
      { text: "Dissolution of reactants, complexation, precipitation of products.", isCorrect: false },
      { text: "Ionisation of gases, electrostatic alignment, filtration.", isCorrect: false }
    ],
    explanation: "• First, gas molecules chemically bond to active sites on the solid surface (adsorption).\n• Next, bonds are weakened and the reaction takes place on the surface.\n• Finally, the newly formed products release from the surface (desorption)."
  },
  {
    id: "EDEXCEL-AL-U2-L4-46",
    question: "What is the primary green chemistry improvement in the modern ibuprofen synthesis route over the original route?",
    options: [
      { text: "It reduces the synthesis from six steps to three, utilizing easily recovered catalysts (HF and Raney Ni) to boost atom economy.", isCorrect: true },
      { text: "It uses non-toxic chlorine gas instead of aluminium chloride.", isCorrect: false },
      { text: "It replaces HF with highly organic, biodegradable solvents.", isCorrect: false },
      { text: "It allows the reaction to occur without any catalysts at all.", isCorrect: false }
    ],
    explanation: "• The original route used AlCl₃ which was destroyed and disposed of as waste.\n• The new 3-step green route uses HF and Raney Nickel catalysts, which are recovered and recycled, reducing steps and massively increasing atom economy."
  },
  {
    id: "EDEXCEL-AL-U2-L4-47",
    question: "Which of the following statements about reversible and irreversible reactions is correct?",
    options: [
      { text: "Reversible reactions do not go to completion, leaving detectable quantities of both reactants and products in the system.", isCorrect: true },
      { text: "Irreversible reactions are represented by double arrows (⇌).", isCorrect: false },
      { text: "Reversible reactions always have extremely high, negative enthalpy changes.", isCorrect: false },
      { text: "All reactions are fully irreversible if they occur in a closed system.", isCorrect: false }
    ],
    explanation: "• Reversible reactions reach a state where forward and backward reactions occur together.\n• Because of this, reactants and products are both present in the equilibrium mixture (they do not go to 100% completion)."
  },
  {
    id: "EDEXCEL-AL-U2-L4-48",
    question: "What defines a system at dynamic equilibrium?",
    options: [
      { text: "The rate of the forward reaction equals the rate of the backward reaction, and concentrations remain constant.", isCorrect: true },
      { text: "The mass of reactants equals the mass of products, and the reaction has fully stopped.", isCorrect: false },
      { text: "The concentration of reactants is exactly equal to the concentration of products.", isCorrect: false },
      { text: "The forward reaction rate is twice the backward reaction rate.", isCorrect: false }
    ],
    explanation: "• Dynamic equilibrium means the reaction is still active (dynamic), but the forward and backward rates are equal, meaning no net change in concentration occurs (equilibrium)."
  },
  {
    id: "EDEXCEL-AL-U2-L4-49",
    question: "Why must a system be closed for dynamic equilibrium to be established?",
    options: [
      { text: "To prevent gaseous reactants or products from escaping from the system.", isCorrect: true },
      { text: "To ensure that temperature and pressure are kept at zero.", isCorrect: false },
      { text: "To completely prevent any collisions with spectator solvent molecules.", isCorrect: false },
      { text: "To force the reaction to become exothermic.", isCorrect: false }
    ],
    explanation: "• If the container is open, gaseous products or reactants can escape to the surroundings.\n• This would prevent the reverse reaction from occurring or shifting, making it impossible to establish a stable dynamic equilibrium."
  },
  {
    id: "EDEXCEL-AL-U2-L4-50",
    question: "The dissolution of CO₂ in water is represented by the equilibrium: $CO_2(g) + H_2O(l) ⇌ H_2CO_3(aq)$. If CO₂ is less soluble in hot water, is the forward reaction exothermic or endothermic?",
    options: [
      { text: "Exothermic, because heating shifts the equilibrium to the left.", isCorrect: true },
      { text: "Endothermic, because heating shifts the equilibrium to the right.", isCorrect: false },
      { text: "Exothermic, because heating shifts the equilibrium to the right.", isCorrect: false },
      { text: "Endothermic, because heating shifts the equilibrium to the left.", isCorrect: false }
    ],
    explanation: "• Saturated carbon dioxide is less soluble in hot water, meaning heating shifts the equilibrium to the left.\n• Since heating favors the endothermic direction, the backward reaction is endothermic, and the forward reaction is exothermic."
  }
];
