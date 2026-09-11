'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Grid3x3, LayoutGrid, Calculator, FlaskConical } from 'lucide-react';
import PeriodicTable from './PeriodicTable';
import ScientificCalculator from './ScientificCalculator';
import ChemistryCalculator from './ChemistryCalculator';

export default function FloatingAssistant() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTableOpen, setIsTableOpen] = useState(false);
    const [isCalcOpen, setIsCalcOpen] = useState(false);
    const [isChemCalcOpen, setIsChemCalcOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Periodic Table Icon (Simplified SVG)
    const PeriodicTableIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>
    );

    return (
        <>
            <motion.div 
                initial={{ right: -68 }}
                animate={{ right: isExpanded ? 0 : -68 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-1/2 -translate-y-1/2 z-50 flex items-center"
            >
                {/* Toggle Button */}
                <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 h-16 bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center rounded-l-lg shadow-[-4px_0_15px_rgba(79,70,229,0.4)] transition-colors border-y border-l border-white/10"
                >
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronLeft size={18} />
                    </motion.div>
                </motion.button>

                {/* Tools Container */}
                <div className="flex flex-col gap-3 bg-[#0a0a1a]/80 backdrop-blur-xl p-3 border-l border-y border-white/10 rounded-l-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
                    {/* Periodic Table Trigger */}
                    <motion.button
                        onClick={() => {
                            setIsTableOpen(true);
                            setIsExpanded(false);
                        }}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 transition-colors shadow-lg shadow-indigo-500/10"
                        title="Periodic Table"
                    >
                        <PeriodicTableIcon />
                    </motion.button>

                    {/* Scientific Calculator Trigger */}
                    <motion.button
                        onClick={() => {
                            setIsCalcOpen(true);
                            setIsExpanded(false);
                        }}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 transition-colors shadow-lg shadow-indigo-500/10"
                        title="Scientific Calculator"
                    >
                        <Calculator size={20} />
                    </motion.button>

                    {/* Chemistry Calculator Trigger */}
                    <motion.button
                        onClick={() => {
                            setIsChemCalcOpen(true);
                            setIsExpanded(false);
                        }}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 transition-colors shadow-lg shadow-indigo-500/10"
                        title="Chemistry Calculator"
                    >
                        <FlaskConical size={20} />
                    </motion.button>
                </div>
            </motion.div>

            {/* Modals */}
            <PeriodicTable 
                isOpen={isTableOpen} 
                onClose={() => setIsTableOpen(false)} 
            />
            <ScientificCalculator
                isOpen={isCalcOpen}
                onClose={() => setIsCalcOpen(false)}
            />
            <ChemistryCalculator
                isOpen={isChemCalcOpen}
                onClose={() => setIsChemCalcOpen(false)}
            />
        </>
    );
}
