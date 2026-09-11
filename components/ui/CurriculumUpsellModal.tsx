'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Lock, 
    Sparkles, 
    CheckCircle2, 
    X, 
    BookOpen, 
    Trophy, 
    MessageCircle,
    Send
} from 'lucide-react';
import { CurriculumLevel } from '@/data/curriculum';

interface CurriculumUpsellModalProps {
    isOpen: boolean;
    onClose: () => void;
    curriculum: CurriculumLevel | null;
}

export const CurriculumUpsellModal: React.FC<CurriculumUpsellModalProps> = ({
    isOpen,
    onClose,
    curriculum,
}) => {
    if (!isOpen || !curriculum) return null;

    const textMsg = encodeURIComponent(`Hello ChemZim! I would like to unlock access to the "${curriculum.title} (${curriculum.code})" curriculum for my student account.`);
    const contactWhatsAppUrl = `https://wa.me/962799747775?text=${textMsg}`;

    const contactTelegramUrl = 'https://t.me/+962799747775';

    const totalTopics = curriculum.topics.length;
    const totalLessons = curriculum.topics.reduce(
        (acc, t) => acc + (t.subtopics?.length || 0), 
        0
    );

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                {/* Backdrop with heavy blur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity"
                />

                {/* Glassmorphic Modal Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-slate-900/95 via-[#0c162c]/95 to-slate-950/95 border border-indigo-500/30 p-6 sm:p-8 shadow-[0_0_60px_rgba(99,102,241,0.25)] backdrop-blur-2xl text-foreground overflow-hidden z-10"
                >
                    {/* Atmospheric Ambient Glows */}
                    <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/10 focus:outline-none"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Header Badge */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-indigo-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner shadow-amber-500/20">
                            <Lock className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                                    Premium Track
                                </span>
                                <span className="text-xs text-slate-400 font-mono">
                                    Code: {curriculum.code}
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                                {curriculum.title}
                            </h3>
                        </div>
                    </div>

                    {/* Curriculum Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {curriculum.description || 'Comprehensive, syllabus-aligned international chemistry track with deep analytical theory and exam practice.'}
                    </p>

                    {/* Feature Stats Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <BookOpen className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-lg font-black text-white">{totalTopics} Units</div>
                                <div className="text-[11px] text-slate-400">{totalLessons} Syllabus Lessons</div>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <Trophy className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-lg font-black text-white">Full Access</div>
                                <div className="text-[11px] text-slate-400">Smart Exam Practice</div>
                            </div>
                        </div>
                    </div>

                    {/* What is Included Checklist */}
                    <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300 bg-slate-950/40 border border-indigo-500/15 rounded-2xl p-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Included in this curriculum:</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>Full interactive theory slides with step-by-step worked examples</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>Interactive virtual laboratory simulators & SVG visualizations</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>Classified past-paper question bank (Levels 1, 2, and 3)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>Adaptive spaced repetition review (Leitner 5-Box memory engine)</span>
                        </div>
                    </div>

                    {/* Call To Action Buttons */}
                    <div className="space-y-3">
                        <p className="text-xs text-center text-slate-400">
                            To unlock this track on your account, contact ChemZim administration directly:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <a
                                href={contactWhatsAppUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>WhatsApp Upgrade</span>
                            </a>

                            <a
                                href={contactTelegramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <Send className="w-4 h-4" />
                                <span>Telegram (+962)</span>
                            </a>
                        </div>

                        <button
                            onClick={onClose}
                            className="w-full text-center text-xs text-slate-500 hover:text-slate-300 py-1 transition-colors"
                        >
                            Continue exploring available tracks
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
