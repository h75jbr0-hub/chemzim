'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    RotateCw, 
    ChevronLeft, 
    ChevronRight, 
    Sparkles, 
    CheckCircle2, 
    HelpCircle, 
    Layers, 
    Award,
    Flame,
    Lightbulb,
    X
} from 'lucide-react';
import { Flashcard } from '@/data/curriculum/edexcel-alevel/flashcards';
import { InlineMath, BlockMath } from 'react-katex';
import { sanitizeKatex } from '@/lib/katex-sanitizer';

interface FlashcardsDeckProps {
    cards: Flashcard[];
    title?: string;
    onComplete?: () => void;
}

export default function FlashcardsDeck({
    cards,
    title = "Active Recall Flashcards 🃏",
    onComplete
}: FlashcardsDeckProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});
    const [showTip, setShowTip] = useState<boolean>(false);
    const [tipDismissed, setTipDismissed] = useState<boolean>(false);

    useEffect(() => {
        const dismissed = localStorage.getItem('chemzim_flashcards_tip_dismissed');
        if (dismissed === 'true') {
            setTipDismissed(true);
        }
    }, []);

    if (!cards || cards.length === 0) {
        return null;
    }

    const currentCard = cards[currentIndex];
    const isMastered = !!masteredCards[currentCard.id];

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNext = () => {
        setIsFlipped(false);
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            if (onComplete) onComplete();
        }
    };

    const handlePrev = () => {
        setIsFlipped(false);
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const toggleMastered = (e: React.MouseEvent) => {
        e.stopPropagation();
        setMasteredCards(prev => ({
            ...prev,
            [currentCard.id]: !prev[currentCard.id]
        }));
    };

    const handleDismissTip = () => {
        setShowTip(false);
        setTipDismissed(true);
        localStorage.setItem('chemzim_flashcards_tip_dismissed', 'true');
    };

    // KaTeX math rendering helper
    const renderMathText = (text: string) => {
        if (!text) return null;
        const parts = text.split(/(\$[^\$]+\$)/g);
        return parts.map((part, idx) => {
            if (part.startsWith('$') && part.endsWith('$')) {
                const math = part.slice(1, -1);
                return <InlineMath key={idx} math={sanitizeKatex(math)} />;
            }
            return <span key={idx}>{part}</span>;
        });
    };

    const masteredCount = Object.values(masteredCards).filter(Boolean).length;

    return (
        <div className="w-full bg-gradient-to-br from-[#070f1e] via-[#0b1b35] to-[#0d162a] border border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden my-6 shrink-0">
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Deck Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-indigo-500/20 mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-xl">
                        🃏
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-lg md:text-xl font-extrabold text-white">
                                {title}
                            </h3>
                            {!tipDismissed && (
                                <button
                                    onClick={() => setShowTip(!showTip)}
                                    className={`p-1.5 rounded-lg border transition-all ${
                                        showTip 
                                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-400' 
                                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/30'
                                    }`}
                                    title="Show Study Tip"
                                >
                                    <Lightbulb className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                        <div className="text-xs text-slate-400">
                            Card {currentIndex + 1} of {cards.length} • {currentCard.category || 'General'}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-slate-800 text-emerald-400">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>Mastered: {masteredCount} / {cards.length}</span>
                </div>
            </div>

            {/* Quick Tutorial Hint Banner */}
            <AnimatePresence>
                {showTip && !tipDismissed && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        className="p-3 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-2.5 text-xs text-indigo-200 relative overflow-hidden"
                    >
                        <span className="shrink-0 text-indigo-400 font-bold text-sm leading-none">💡 Tip:</span>
                        <span className="leading-relaxed pr-6">
                            Read the question, click the card to reveal the answer, and click <strong>Mark Mastered</strong> to keep track of cards you have memorized.
                        </span>
                        <button
                            onClick={handleDismissTip}
                            className="absolute top-2.5 right-2.5 text-slate-500 hover:text-white transition-colors"
                            title="Dismiss permanently"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 3D Flip Card Container */}
            <div className="w-full h-[260px] md:h-[280px] perspective-1000 my-4 relative">
                <motion.div
                    onClick={handleFlip}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="w-full h-full relative cursor-pointer group"
                >
                    {/* FRONT of Card (Question) */}
                    <div 
                        style={{ backfaceVisibility: "hidden" }}
                        className={`absolute inset-0 w-full h-full rounded-2xl p-5 md:p-6 bg-slate-900/90 border ${
                            isMastered ? 'border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)]' : 'border-indigo-500/30 group-hover:border-indigo-500/60'
                        } backdrop-blur-md flex flex-col justify-between shadow-xl`}
                    >
                        <div className="flex justify-between items-center text-xs font-extrabold text-indigo-400 uppercase tracking-widest shrink-0">
                            <span className="flex items-center gap-1.5">
                                <HelpCircle className="w-4 h-4" /> Active Recall Question
                            </span>
                            <button
                                onClick={toggleMastered}
                                className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-all flex items-center gap-1 ${
                                    isMastered 
                                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                                }`}
                            >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                {isMastered ? 'Mastered' : 'Mark Mastered'}
                            </button>
                        </div>

                        <div className="text-base md:text-lg font-bold text-white text-center my-auto px-2 leading-relaxed overflow-y-auto max-h-[140px]">
                            {renderMathText(currentCard.question)}
                        </div>

                        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-indigo-300 transition-colors shrink-0">
                            <RotateCw className="w-3.5 h-3.5" />
                            <span>Click card to reveal answer</span>
                        </div>
                    </div>

                    {/* BACK of Card (Answer & Examiner Tip) */}
                    <div 
                        style={{ 
                            backfaceVisibility: "hidden", 
                            transform: "rotateY(180deg)" 
                        }}
                        className="absolute inset-0 w-full h-full rounded-2xl p-5 md:p-6 bg-slate-950/95 border border-emerald-500/40 backdrop-blur-md flex flex-col justify-between shadow-2xl"
                    >
                        <div className="flex items-center justify-between text-xs font-extrabold text-emerald-400 uppercase tracking-widest shrink-0">
                            <span className="flex items-center gap-1.5">
                                <Sparkles className="w-4 h-4 text-emerald-400" /> Answer & Key Concept
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">Back</span>
                        </div>

                        <div className="text-sm md:text-base font-extrabold text-emerald-300 text-center my-auto px-2 leading-relaxed overflow-y-auto max-h-[140px]">
                            {renderMathText(currentCard.answer)}
                        </div>

                        {currentCard.examinerTip && (
                            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs shrink-0">
                                <strong>Examiner Tip 👁️:</strong> {currentCard.examinerTip}
                            </div>
                        )}

                        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 shrink-0">
                            <RotateCw className="w-3.5 h-3.5" />
                            <span>Click to flip back</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Deck Controls (Next / Prev) */}
            <div className="flex items-center justify-between gap-2 sm:gap-4 mt-6 pt-4 border-t border-indigo-500/20 w-full overflow-hidden">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="shrink-0 flex items-center gap-1.5 sm:gap-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-white px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all border border-slate-800 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <div className="flex items-center justify-center gap-1 sm:gap-1.5 overflow-x-auto max-w-[140px] sm:max-w-xs px-2 py-1 shrink min-w-0">
                    {cards.map((_, idx) => (
                        <span 
                            key={idx} 
                            className={`shrink-0 h-2 rounded-full transition-all ${
                                idx === currentIndex ? 'bg-indigo-400 w-4 sm:w-5' : 'bg-slate-700 w-2'
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="shrink-0 flex items-center gap-1.5 sm:gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-600/20"
                >
                    {currentIndex === cards.length - 1 ? 'Finish' : 'Next Card'}
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
