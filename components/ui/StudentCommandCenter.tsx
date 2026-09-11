'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
    Flame, 
    Zap, 
    Trophy, 
    Play, 
    CheckCircle2, 
    Sparkles, 
    ChevronRight, 
    Target,
    Award
} from 'lucide-react';

interface StudentCommandCenterProps {
    curriculumTitle?: string;
    curriculumId?: string;
}

export const StudentCommandCenter: React.FC<StudentCommandCenterProps> = ({ 
    curriculumTitle = "Edexcel A-Level Chemistry",
    curriculumId = "edexcel-as"
}) => {
    const [xp, setXp] = useState(350);
    const [level, setLevel] = useState(3);
    const [streak, setStreak] = useState(5);
    const [dailyAnswered, setDailyAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'challenge' | 'leaderboard'>('challenge');

    const nextLevelXp = 500;
    const progressPercent = Math.min(100, Math.round((xp / nextLevelXp) * 100));

    // Daily Micro-Challenge Question Mock
    const dailyChallenge = {
        question: "What is the unit of the rate constant (k) for a first-order reaction?",
        options: [
            { text: "mol dm⁻³ s⁻¹", isCorrect: false },
            { text: "s⁻¹", isCorrect: true },
            { text: "dm³ mol⁻¹ s⁻¹", isCorrect: false },
            { text: "dm⁶ mol⁻² s⁻¹", isCorrect: false }
        ],
        explanation: "For a 1st order reaction: Rate = k[A]. Units: (mol dm⁻³ s⁻¹) / (mol dm⁻³) = s⁻¹."
    };

    const handleAnswer = (index: number) => {
        if (dailyAnswered) return;
        setSelectedOption(index);
        if (dailyChallenge.options[index].isCorrect) {
            setXp(prev => prev + 50);
            setDailyAnswered(true);
        }
    };

    const topStudents = [
        { rank: 1, name: "Omar K.", xp: 1450, badge: "👑" },
        { rank: 2, name: "You (Student)", xp: xp, badge: "⚡" },
        { rank: 3, name: "Sarah M.", xp: 320, badge: "🧪" },
        { rank: 4, name: "Zaid H.", xp: 280, badge: "⚛️" },
    ];

    return (
        <div className="w-full mb-10 relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-[#070f1e] via-[#0b1b35] to-[#0d162a] shadow-2xl p-6 md:p-8">
            {/* Background Meteor / Glow Effects */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header: Title & Gamification Bar */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-indigo-500/20">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-3xl shadow-inner shadow-indigo-500/20">
                        🚀
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                                Student Command Center
                            </span>
                            <span className="text-xs text-slate-400">• {curriculumTitle}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1 tracking-tight">
                            Welcome Back, Champion!
                        </h2>
                    </div>
                </div>

                {/* Gamification Live Stats */}
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    {/* Daily Streak */}
                    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 backdrop-blur-md">
                        <Flame className="w-5 h-5 text-amber-500 fill-amber-500 animate-pulse" />
                        <div>
                            <div className="text-[10px] font-bold text-amber-500/80 uppercase">Streak</div>
                            <div className="text-sm font-extrabold text-amber-300">{streak} Days</div>
                        </div>
                    </div>

                    {/* Level & XP Counter */}
                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 backdrop-blur-md min-w-[200px]">
                        <Zap className="w-5 h-5 text-indigo-400 fill-indigo-400" />
                        <div className="flex-1">
                            <div className="flex justify-between text-[10px] font-bold mb-1">
                                <span className="text-indigo-400">Level {level}</span>
                                <span className="text-slate-400">{xp} / {nextLevelXp} XP</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-indigo-500/20">
                                <motion.div 
                                    className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progressPercent}%` }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                
                {/* Column 1 & 2: Quick Resume & Daily Challenge */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Resume Next Lesson Box */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 hover:border-indigo-500/40 transition-all backdrop-blur-md">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg flex-shrink-0">
                                📖
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Next Recommended Step</span>
                                <h3 className="text-lg font-bold text-white">Unit 4: Rate Equations & Kinetics</h3>
                                <p className="text-xs text-slate-400">Lesson 1 • Reaction Kinetics & Order</p>
                            </div>
                        </div>
                        <Link
                            href={`/dashboard/curriculum/${curriculumId}/unit-4?tab=theory&lesson=1`}
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-lg shadow-indigo-500/25 flex-shrink-0"
                        >
                            <Play className="w-4 h-4 fill-white" />
                            Continue Learning
                        </Link>
                    </div>

                    {/* Daily Challenge Card */}
                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Target className="w-5 h-5 text-indigo-400" />
                                <h3 className="text-base font-bold text-white">Daily Chemistry Challenge</h3>
                            </div>
                            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1">
                                <Sparkles className="w-3.5 h-3.5" /> +50 XP
                            </span>
                        </div>

                        <p className="text-sm font-semibold text-slate-200 mb-4">
                            {dailyChallenge.question}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {dailyChallenge.options.map((opt, idx) => {
                                const isSelected = selectedOption === idx;
                                let btnStyle = "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-indigo-500/40";
                                
                                if (isSelected) {
                                    if (opt.isCorrect) {
                                        btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                                    } else {
                                        btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300 font-bold";
                                    }
                                } else if (dailyAnswered && opt.isCorrect) {
                                    btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(idx)}
                                        disabled={dailyAnswered}
                                        className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${btnStyle}`}
                                    >
                                        <span>{opt.text}</span>
                                        {isSelected && opt.isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                                    </button>
                                );
                            })}
                        </div>

                        {dailyAnswered && (
                            <motion.div 
                                initial={{ opacity: 0, y: 5 }} 
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300"
                            >
                                ✨ <strong>Correct!</strong> {dailyChallenge.explanation}
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Column 3: Leaderboard & Badges */}
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                            <div className="flex items-center gap-2">
                                <Trophy className="w-5 h-5 text-amber-400" />
                                <h3 className="text-base font-bold text-white">Daily Champions</h3>
                            </div>
                            <span className="text-xs text-slate-500">Live</span>
                        </div>

                        <div className="space-y-3">
                            {topStudents.map((st) => (
                                <div 
                                    key={st.rank}
                                    className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-all ${
                                        st.name.includes("You") 
                                            ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 font-bold" 
                                            : "bg-slate-800/40 border-slate-800 text-slate-300"
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-5 text-center font-bold text-slate-400">{st.rank}.</span>
                                        <span className="text-base">{st.badge}</span>
                                        <span>{st.name}</span>
                                    </div>
                                    <span className="font-extrabold text-amber-400">{st.xp} XP</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                            <Award className="w-4 h-4 text-indigo-400" /> 3 Badges Earned
                        </span>
                        <span className="text-indigo-400 font-semibold cursor-pointer hover:underline">View All</span>
                    </div>
                </div>

            </div>
        </div>
    );
};
