'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Star, Sparkles, Sword, Crown, Zap, Beaker } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import RankBadge from '@/components/gamification/RankBadge';
import LeaderboardGrid from '@/components/gamification/LeaderboardGrid';
import LeaderboardSkeleton, { PodiumSkeleton } from '@/components/gamification/LeaderboardSkeleton';
import type { LeaderboardEntry, LeaderboardPeriod } from '@/types/leaderboard';

export default function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<LeaderboardPeriod>('all');
    const [gradeFilter, setGradeFilter] = useState<string>('all');
    const { user } = useAuth();

    useEffect(() => {
        fetchLeaderboard();
    }, [filter, gradeFilter]);

    const fetchLeaderboard = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/leaderboard?period=${filter}&grade=${gradeFilter}&limit=50`, { cache: 'no-store' });
            const data = await res.json();
            if (data.success) {
                setLeaderboard(data.leaderboard);
            }
        } catch (error) {
            console.error('Failed to fetch leaderboard:', error);
        }
        setLoading(false);
    };

    // Top 3 section
    const top3 = leaderboard.slice(0, 3);
    const rest = leaderboard.slice(3);

    // Gaming Rarity Colors
    const getRarityStyles = (rank: number) => {
        if (filter === 'mad-scientist') {
            if (rank === 1) return {
                bg: 'linear-gradient(180deg, rgba(34, 197, 94, 0.2) 0%, rgba(21, 128, 61, 0.1) 100%)',
                border: '2px solid #22c55e',
                shadow: '0 0 30px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.1)',
                text: '#4ade80',
                glow: 'rgba(34, 197, 94, 0.5)'
            };
            if (rank === 2) return {
                bg: 'linear-gradient(180deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 95, 70, 0.1) 100%)',
                border: '2px solid #10b981',
                shadow: '0 0 30px rgba(16, 185, 129, 0.3), inset 0 0 20px rgba(16, 185, 129, 0.1)',
                text: '#34d399',
                glow: 'rgba(16, 185, 129, 0.5)'
            };
            if (rank === 3) return {
                bg: 'linear-gradient(180deg, rgba(132, 204, 22, 0.2) 0%, rgba(61, 110, 10, 0.1) 100%)',
                border: '2px solid #84cc16',
                shadow: '0 0 30px rgba(132, 204, 22, 0.3), inset 0 0 20px rgba(132, 204, 22, 0.1)',
                text: '#a3e635',
                glow: 'rgba(132, 204, 22, 0.5)'
            };
        }

        if (rank === 1) return {
            bg: 'linear-gradient(180deg, rgba(251, 191, 36, 0.2) 0%, rgba(234, 88, 12, 0.1) 100%)',
            border: '2px solid #fbbf24',
            shadow: '0 0 30px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(251, 191, 36, 0.1)',
            text: '#fbbf24',
            glow: 'rgba(251, 191, 36, 0.5)'
        };
        if (rank === 2) return {
            bg: 'linear-gradient(180deg, rgba(167, 139, 250, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%)',
            border: '2px solid #a78bfa',
            shadow: '0 0 30px rgba(167, 139, 250, 0.3), inset 0 0 20px rgba(167, 139, 250, 0.1)',
            text: '#a78bfa',
            glow: 'rgba(167, 139, 250, 0.5)'
        };
        if (rank === 3) return {
            bg: 'linear-gradient(180deg, rgba(56, 189, 248, 0.2) 0%, rgba(2, 132, 199, 0.1) 100%)',
            border: '2px solid #38bdf8',
            shadow: '0 0 30px rgba(56, 189, 248, 0.3), inset 0 0 20px rgba(56, 189, 248, 0.1)',
            text: '#38bdf8',
            glow: 'rgba(56, 189, 248, 0.5)'
        };
        return {
            bg: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            shadow: 'none',
            text: '#9ca3af',
            glow: 'transparent'
        };
    };

    return (
        <div className="min-h-screen pb-16 overflow-hidden relative">
            {/* Ambient Light */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px]"
                    style={{
                        background: filter === 'mad-scientist'
                            ? 'radial-gradient(circle at center, rgba(34, 197, 94, 0.15) 0%, transparent 70%)'
                            : 'radial-gradient(circle at center, rgba(139, 92, 246, 0.12) 0%, transparent 70%)'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-[900px] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-10 pt-4">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl font-extrabold mb-2 tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                            {filter === 'mad-scientist' ? 'Mad Scientist' : 'Leaderboard'}
                        </h1>
                        <div className={`flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs ${filter === 'mad-scientist' ? 'text-green-400' : 'text-indigo-400'}`}>
                            {filter === 'mad-scientist' ? (
                                <><Beaker size={14} /> Top Lab Performers <Beaker size={14} /></>
                            ) : gradeFilter === 'dentistry' ? (
                                <><span>🦷</span> Dental Board Rankings <span>🦷</span></>
                            ) : gradeFilter === 'igcse' ? (
                                <><Sword size={14} /> IGCSE Chemistry Rankings <Sword size={14} /></>
                            ) : gradeFilter === 'alevel' ? (
                                <><Sword size={14} /> A-Level Chemistry Rankings <Sword size={14} /></>
                            ) : (
                                <><Sword size={14} /> Season 1 <Sword size={14} /></>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Period Filters */}
                <div className="flex justify-center gap-2 mb-4 flex-wrap">
                    {[
                        { key: 'all', label: 'ALL TIME' },
                        { key: 'monthly', label: 'MONTHLY' },
                        { key: 'weekly', label: 'WEEKLY' },
                        { key: 'mad-scientist', label: 'MAD SCIENTIST', icon: <Beaker size={14} className="mr-1" /> }
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setFilter(tab.key as any)}
                            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all relative overflow-hidden group flex items-center ${filter === tab.key ? 'text-black' : 'text-slate-400 hover:text-slate-200'}`}
                        >
                            {filter === tab.key && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className={`absolute inset-0 ${tab.key === 'mad-scientist' ? 'bg-green-400' : 'bg-white'}`}
                                    style={{ skewX: '-12deg' }}
                                />
                            )}
                            <span className="relative z-10 flex items-center">
                                {tab.icon && <span className="mr-1">{tab.icon}</span>}
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Curriculum / Grade Filter Row */}
                <div className="flex justify-center gap-2 mb-10 flex-wrap">
                    {[
                        { key: 'all', label: '🌐 All Students' },
                        { key: 'dentistry', label: '🦷 Dental Board' },
                        { key: 'igcse', label: '⚗️ IGCSE' },
                        { key: 'alevel', label: '🔬 A-Level' },
                    ].map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => setGradeFilter(tab.key)}
                            className={`px-3.5 py-1.5 rounded-full font-bold text-[11px] border transition-all ${
                                gradeFilter === tab.key
                                    ? tab.key === 'dentistry'
                                        ? 'bg-indigo-500/20 border-indigo-500/60 text-indigo-300'
                                        : 'bg-white/10 border-white/30 text-white'
                                    : 'bg-white/[0.03] border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/20'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <>
                        <PodiumSkeleton />
                        <LeaderboardSkeleton count={6} />
                    </>
                ) : (
                    <>
                        {/* HERO PODIUM */}
                        <div className="relative mb-20 flex justify-center items-end" style={{ minHeight: '340px', direction: 'ltr' }}>
                            <div className="flex items-end gap-2 md:gap-6 justify-center w-full">
                                {/* 2nd Place */}
                                <div className="order-1 relative z-10">
                                    {top3[1] && (
                                        <HeroCard
                                            entry={top3[1]}
                                            rank={2}
                                            delay={0.2}
                                            styles={getRarityStyles(2)}
                                            isCurrentUser={!!user?.name && top3[1].name.trim().toLowerCase() === user.name.trim().toLowerCase()}
                                        />
                                    )}
                                </div>

                                {/* 1st Place */}
                                <div className="order-2 relative z-20 pb-4">
                                    {top3[0] && (
                                        <HeroCard
                                            entry={top3[0]}
                                            rank={1}
                                            delay={0}
                                            styles={getRarityStyles(1)}
                                            isFirst={true}
                                            isCurrentUser={!!user?.name && top3[0].name.trim().toLowerCase() === user.name.trim().toLowerCase()}
                                        />
                                    )}
                                </div>

                                {/* 3rd Place */}
                                <div className="order-3 relative z-10">
                                    {top3[2] && (
                                        <HeroCard
                                            entry={top3[2]}
                                            rank={3}
                                            delay={0.4}
                                            styles={getRarityStyles(3)}
                                            isCurrentUser={!!user?.name && top3[2].name.trim().toLowerCase() === user.name.trim().toLowerCase()}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Rest of Players List */}
                        <LeaderboardGrid 
                            entries={rest} 
                            delayOffset={0.3} 
                            currentUserName={user?.name}
                        />

                        {/* Floating Sticky Motivator Widget for Logged-In Student */}
                        {(() => {
                            const userRankIndex = leaderboard.findIndex(
                                e => !!user?.name && e.name.trim().toLowerCase() === user.name.trim().toLowerCase()
                            );
                            if (!user || userRankIndex === -1) return null;
                            const currentEntry = leaderboard[userRankIndex];
                            const playerAhead = userRankIndex > 0 ? leaderboard[userRankIndex - 1] : null;

                            return (
                                <motion.div
                                    initial={{ y: 60, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-xl w-[94%] bg-[#0b1022]/95 backdrop-blur-2xl border border-indigo-500/40 rounded-2xl p-3.5 md:p-4 shadow-2xl shadow-black/80 flex items-center justify-between gap-3"
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-black text-sm flex items-center justify-center shadow-md flex-shrink-0">
                                            #{currentEntry.rank}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-black uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                                                    YOUR STANDING
                                                </span>
                                                <span className="text-white font-extrabold text-sm truncate">{currentEntry.name}</span>
                                                <span className="text-xs font-mono font-bold text-amber-400">({currentEntry.xp.toLocaleString()} XP)</span>
                                            </div>
                                            <p className="text-xs text-slate-300 truncate mt-0.5">
                                                {playerAhead ? (
                                                    <>
                                                        🎯 Need <span className="font-bold text-amber-400 font-mono">{(playerAhead.xp - currentEntry.xp + 1).toLocaleString()} XP</span> to pass <span className="text-white font-semibold">{playerAhead.name}</span>
                                                    </>
                                                ) : (
                                                    <span className="text-yellow-300 font-bold">👑 You are reigning #1 on the leaderboard throne!</span>
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href="/dashboard/quizzes"
                                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs font-bold shadow-md hover:shadow-indigo-500/25 transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                                    >
                                        <span>Climb Rank</span>
                                        <span>⚡</span>
                                    </a>
                                </motion.div>
                            );
                        })()}
                    </>
                )}
            </div>
        </div>
    );
}

// Sub-component for the top 3 cards with 3D Pedestal Stand
function HeroCard({ 
    entry, 
    rank, 
    delay, 
    styles, 
    isFirst,
    isCurrentUser 
}: { 
    entry: LeaderboardEntry, 
    rank: number, 
    delay: number, 
    styles: any, 
    isFirst?: boolean,
    isCurrentUser?: boolean 
}) {
    const pedestalConfig = {
        1: { height: 'h-16 md:h-22', bg: 'from-amber-500/25 via-yellow-600/10 to-transparent', border: 'border-amber-500/40', text: 'text-amber-400', label: '1ST PLACE' },
        2: { height: 'h-12 md:h-16', bg: 'from-purple-500/25 via-indigo-600/10 to-transparent', border: 'border-purple-500/40', text: 'text-purple-300', label: '2ND PLACE' },
        3: { height: 'h-8 md:h-12', bg: 'from-cyan-500/25 via-blue-600/10 to-transparent', border: 'border-cyan-500/40', text: 'text-cyan-300', label: '3RD PLACE' },
    }[rank] || { height: 'h-8', bg: 'from-white/10 to-transparent', border: 'border-white/10', text: 'text-white', label: `#${rank}` };

    return (
        <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
                delay
            }}
            className={`relative flex flex-col items-center group ${isFirst ? 'w-[135px] md:w-[175px] z-20 -mt-10' : 'w-[110px] md:w-[145px] z-10'}`}
        >
            {/* Pop-out Avatar */}
            <div className="relative z-10 mb-[-24px]">
                <div
                    className={`rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-2xl relative overflow-hidden ${
                        isFirst ? 'w-22 h-22 md:w-28 md:h-28' : 'w-18 h-18 md:w-22 md:h-22'
                    } ${isCurrentUser ? 'ring-4 ring-indigo-400' : ''}`}
                    style={{
                        background: styles.bg,
                        border: styles.border,
                        boxShadow: styles.shadow
                    }}
                >
                    {isFirst && (
                        <motion.div
                            className="absolute inset-0 bg-white/20 z-10 pointer-events-none"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
                            style={{ transform: 'skewX(-20deg)' }}
                        />
                    )}
                    {entry.avatar ? (
                        (entry.avatar.startsWith('http') || entry.avatar.startsWith('/') || entry.avatar.startsWith('data:')) ? (
                            <img
                                src={entry.avatar}
                                alt={entry.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    (e.target as HTMLImageElement).parentElement!.innerText = entry.name.charAt(0);
                                }}
                            />
                        ) : (
                            <span className="text-3xl md:text-4xl">{entry.avatar}</span>
                        )
                    ) : (
                        entry.name.charAt(0)
                    )}

                    {/* Crown for #1 */}
                    {isFirst && (
                        <motion.div
                            className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Crown size={28} className="text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                        </motion.div>
                    )}
                </div>

                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-black/85 rounded-full border border-white/10 text-[9px] font-bold text-white whitespace-nowrap backdrop-blur-sm shadow-md">
                    Level {entry.level}
                </div>
            </div>

            {/* Card Body */}
            <div
                className={`w-full pt-8 pb-3 px-2 rounded-t-2xl flex flex-col items-center backdrop-blur-xl transition-transform group-hover:-translate-y-1 ${
                    isCurrentUser ? 'border-2 border-indigo-500/50 bg-indigo-950/40' : ''
                }`}
                style={{
                    background: isCurrentUser ? 'rgba(30, 27, 75, 0.85)' : 'rgba(20, 20, 25, 0.75)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderTop: 'none',
                    borderBottom: 'none',
                    boxShadow: '0 15px 30px -10px rgba(0,0,0,0.5)'
                }}
            >
                {isCurrentUser && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-indigo-500 text-white shadow-sm mb-1">
                        YOU
                    </span>
                )}

                <h3 className="text-white font-bold text-xs md:text-sm mb-1 truncate w-full text-center px-1">
                    {entry.name}
                </h3>

                <RankBadge level={entry.level} rank={rank} className="mb-2 scale-90" />

                <div className="flex items-center gap-1 font-mono font-black text-sm md:text-base text-white" style={{ textShadow: `0 0 2px #000, 0 0 8px ${styles.text}` }}>
                    {entry.xp.toLocaleString()}
                    <span className="text-[9px] opacity-90 text-slate-300">XP</span>
                </div>
            </div>

            {/* 3D Pedestal Stand */}
            <div 
                className={`w-full ${pedestalConfig.height} bg-gradient-to-b ${pedestalConfig.bg} border-x border-b ${pedestalConfig.border} rounded-b-2xl flex flex-col items-center justify-center relative shadow-lg overflow-hidden backdrop-blur-md`}
            >
                <div className="text-[9px] md:text-[10px] font-black tracking-widest uppercase opacity-85" style={{ color: styles.text }}>
                    {pedestalConfig.label}
                </div>
                <div
                    className="w-5 h-5 rounded-full flex items-center justify-center font-black text-[11px] text-black shadow-lg mt-0.5"
                    style={{ background: styles.text, boxShadow: `0 0 8px ${styles.text}` }}
                >
                    {rank}
                </div>
            </div>

            {/* Floor Glow */}
            <div
                className="absolute bottom-0 w-full h-3 blur-xl rounded-full opacity-35 z-[-1]"
                style={{ background: styles.glow }}
            />
        </motion.div>
    );
}
