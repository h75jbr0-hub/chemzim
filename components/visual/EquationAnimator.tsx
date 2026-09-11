'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EquationAnimatorProps {
    reactants: [string, string][]; // [name, colorHex]
    products: [string, string][]; // [name, colorHex]
    description?: string; // stoichiometry narrative
}

export default function EquationAnimator({ reactants, products, description }: EquationAnimatorProps) {
    // Helper to format chemical formulas with coefficients and subscripts
    const formatFormula = (formula: string) => {
        // Find if there is a leading coefficient (e.g. "2" in "2H2O")
        const coefficientMatch = formula.match(/^(\d+)(.*)/);
        let coeff = "";
        let mainFormula = formula;
        
        if (coefficientMatch) {
            coeff = coefficientMatch[1];
            mainFormula = coefficientMatch[2];
        }

        const parts = mainFormula.split(/([0-9₂₃₄₅]+)/);
        return (
            <>
                {coeff && <span className="mr-1 text-slate-300 font-medium">{coeff}</span>}
                {parts.map((part, idx) => {
                    if (/^[0-9₂₃₄₅]+$/.test(part)) {
                        // Normalize unicode subscripts to normal numbers for rendering
                        const normalDigit = part
                            .replace(/₂/g, '2')
                            .replace(/₃/g, '3')
                            .replace(/₄/g, '4')
                            .replace(/₅/g, '5');
                        return <sub key={idx} className="text-[10px] bottom-[-0.2em] relative ml-[1px]">{normalDigit}</sub>;
                    }
                    return part;
                })}
            </>
        );
    };

    return (
        <div className="bg-[#0a0a1f]/40 border border-white/5 rounded-2xl p-6 text-center overflow-hidden flex flex-col gap-5 flex-shrink-0">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Chemical Equation Visualizer</h4>

            <div className="flex items-center justify-center gap-4 flex-wrap select-none">
                {/* Reactants */}
                <div className="flex items-center gap-2">
                    {reactants.map((r, i) => (
                        <React.Fragment key={`r-${i}`}>
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className="px-4 py-2 rounded-xl font-bold border text-sm shadow-md"
                                style={{
                                    backgroundColor: `${r[1]}10`,
                                    borderColor: `${r[1]}40`,
                                    color: r[1],
                                }}
                            >
                                {formatFormula(r[0])}
                            </motion.div>
                            {i < reactants.length - 1 && (
                                <span className="text-slate-400 font-bold text-base px-1">+</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Reaction Arrow */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: reactants.length * 0.2 }}
                    className="flex items-center justify-center px-2"
                >
                    <span className="text-indigo-400 font-bold text-xl">→</span>
                </motion.div>

                {/* Products */}
                <div className="flex items-center gap-2">
                    {products.map((p, i) => (
                        <React.Fragment key={`p-${i}`}>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: (reactants.length + 1) * 0.2 + i * 0.2 }}
                                className="px-4 py-2 rounded-xl font-bold border text-sm shadow-md"
                                style={{
                                    backgroundColor: `${p[1]}10`,
                                    borderColor: `${p[1]}40`,
                                    color: p[1],
                                }}
                            >
                                {formatFormula(p[0])}
                            </motion.div>
                            {i < products.length - 1 && (
                                <span className="text-slate-400 font-bold text-base px-1">+</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Description Text */}
            {description && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (reactants.length + products.length + 1) * 0.2 }}
                    className="bg-indigo-500/5 border border-indigo-500/10 rounded-xl p-4 text-xs md:text-sm text-slate-300 italic leading-relaxed"
                >
                    💡 <span className="font-semibold text-indigo-400 not-italic">Stoichiometric Ratio:</span> {description}
                </motion.div>
            )}
        </div>
    );
}
