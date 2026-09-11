'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { Flame, Zap, Trophy, ChevronRight, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { useGamification } from '@/contexts/GamificationContext';

const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function DailyStreakChallengeCard() {
    const { streak } = useGamification();

    // Determine current day of week (0 = Sun, 1 = Mon, ..., 6 = Sat)
    const todayIndex = useMemo(() => {
        const d = new Date().getDay();
        // Convert to Monday = 0, Sunday = 6
        return d === 0 ? 6 : d - 1;
    }, []);

    // Check if active today
    const isActiveToday = useMemo(() => {
        if (!streak.lastActiveDate) return false;
        const todayStr = new Date().toDateString();
        return streak.lastActiveDate === todayStr;
    }, [streak.lastActiveDate]);

    // Calculate milestone progress
    const nextMilestone = useMemo(() => {
        const cur = streak.currentStreak;
        if (cur < 3) return { target: 3, label: '3-Day Streak Badge', rewardXP: 10, icon: '🔥' };
        if (cur < 7) return { target: 7, label: '7-Day Streak Badge', rewardXP: 15, icon: '🔥🔥' };
        if (cur < 14) return { target: 14, label: '14-Day Consistency Master', rewardXP: 25, icon: '⚡' };
        if (cur < 30) return { target: 30, label: '30-Day Chemistry Legend', rewardXP: 50, icon: '👑' };
        return { target: cur + 7, label: 'Next Weekly Milestone', rewardXP: 50, icon: '🌟' };
    }, [streak.currentStreak]);

    const milestoneProgressPercent = useMemo(() => {
        const cur = streak.currentStreak;
        return Math.min(100, Math.round((cur / nextMilestone.target) * 100));
    }, [streak.currentStreak, nextMilestone.target]);

    return (
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-surface via-surface to-[#0d1829] border border-orange-500/20 p-6 sm:p-8 shadow-xl shadow-orange-500/5">
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                
                {/* Left Section: Streak Flame & Days Matrix */}
                <div className="space-y-4 max-w-xl">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-orange-500/10">
                            <span className="animate-pulse">🔥</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                                    Daily Momentum Engine
                                </span>
                                {isActiveToday ? (
                                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Streak Active Today
                                    </span>
                                ) : (
                                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 animate-pulse">
                                        ⚡ Streak Pending Today
                                    </span>
                                )}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                                {streak.currentStreak > 0
                                    ? `${streak.currentStreak} Day${streak.currentStreak > 1 ? 's' : ''} Consecutive Streak!`
                                    : 'Start Your Daily Chemistry Streak'}
                            </h3>
                        </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Practice at least once daily to maintain your streak. Answer high-speed questions in <strong>Speed Blitz</strong> to earn bonus multiplier XP and keep your flame alive.
                    </p>

                    {/* Weekly Days Matrix */}
                    <div className="pt-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                            This Week's Activity
                        </span>
                        <div className="flex items-center gap-2">
                            {DAYS_OF_WEEK.map((day, idx) => {
                                const isPastOrToday = idx <= todayIndex;
                                const isCurrentDay = idx === todayIndex;
                                const isMarkedActive = isCurrentDay ? isActiveToday : (idx < todayIndex && streak.currentStreak > (todayIndex - idx));

                                return (
                                    <div 
                                        key={day} 
                                        className={`flex-1 flex flex-col items-center py-2 px-1 rounded-xl border text-center transition-all ${
                                            isCurrentDay
                                                ? 'bg-orange-500/15 border-orange-500/40 text-orange-300 ring-1 ring-orange-500/30'
                                                : isMarkedActive
                                                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                                                : 'bg-white/[0.02] border-white/5 text-slate-500'
                                        }`}
                                    >
                                        <span className="text-[10px] font-bold uppercase">{day}</span>
                                        <span className="text-xs mt-1">
                                            {isMarkedActive ? '🔥' : isCurrentDay ? '⏳' : '•'}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Milestone Progress */}
                    <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between text-xs font-semibold">
                            <span className="text-slate-400 flex items-center gap-1">
                                <span>{nextMilestone.icon}</span> Next: {nextMilestone.label}
                            </span>
                            <span className="text-orange-400 font-bold">
                                {streak.currentStreak} / {nextMilestone.target} Days (+{nextMilestone.rewardXP} XP)
                            </span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 rounded-full transition-all duration-500"
                                style={{ width: `${milestoneProgressPercent}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Section: Action Cards for Speed Challenge */}
                <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                    
                    {/* 1-Min Lightning CTA */}
                    <Link
                        href="/dashboard/speed-challenge?mode=lightning"
                        className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 to-yellow-500/10 hover:from-amber-500/25 hover:to-yellow-500/20 border border-amber-500/30 transition-all active:scale-95 cursor-pointer shadow-lg shadow-amber-500/5 min-w-[240px]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-sm">
                                ⚡
                            </div>
                            <div className="text-left">
                                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                                    Quick Streak Saver
                                </span>
                                <span className="text-sm font-black text-white block">
                                    1-Min Lightning Blitz
                                </span>
                                <span className="text-[10px] text-slate-400 block">5 Fast Questions (60s)</span>
                            </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* 3-Min Sprint CTA */}
                    <Link
                        href="/dashboard/speed-challenge?mode=blitz"
                        className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-indigo-500/15 to-cyan-500/10 hover:from-indigo-500/25 hover:to-cyan-500/20 border border-indigo-500/30 transition-all active:scale-95 cursor-pointer shadow-lg shadow-indigo-500/5 min-w-[240px]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-indigo-500 text-white font-black text-sm">
                                ⏱️
                            </div>
                            <div className="text-left">
                                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 block">
                                    Competition Sprint
                                </span>
                                <span className="text-sm font-black text-white block">
                                    3-Min Blitz Sprint
                                </span>
                                <span className="text-[10px] text-slate-400 block">10 Questions + Double XP</span>
                            </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                    </Link>

                </div>

            </div>

            {/* Background Glows */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        </div>
    );
}
