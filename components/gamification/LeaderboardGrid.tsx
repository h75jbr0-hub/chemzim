import { motion } from 'framer-motion';
import { Flame, Target, Beaker, BookOpen, Award, Sparkles } from 'lucide-react';
import RankBadge from './RankBadge';
import { getTitleIcon } from '@/lib/gamification/title-icons';
import type { LeaderboardEntry } from '@/types/leaderboard';

interface LeaderboardGridProps {
    entries: LeaderboardEntry[];
    delayOffset?: number;
    currentUserName?: string;
}

export default function LeaderboardGrid({ entries, delayOffset = 0, currentUserName }: LeaderboardGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {entries.map((entry, index) => {
                const isCurrentUser = !!currentUserName && entry.name.trim().toLowerCase() === currentUserName.trim().toLowerCase();

                return (
                    <motion.div
                        key={entry.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: delayOffset + (index * 0.05) }}
                        className={`group relative backdrop-blur-md rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-xl ${
                            isCurrentUser
                                ? 'border-indigo-500/50 ring-2 ring-indigo-500/40 bg-indigo-950/25 shadow-indigo-500/10 shadow-lg'
                                : 'border-white/5 hover:border-white/15'
                        }`}
                        style={{
                            background: isCurrentUser 
                                ? 'linear-gradient(145deg, rgba(99, 102, 241, 0.12) 0%, rgba(15, 23, 42, 0.6) 100%)'
                                : 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                        }}
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:via-purple-500/5 transition-all rounded-2xl pointer-events-none" />

                        <div className="flex items-start gap-4">
                            {/* Rank & Avatar */}
                            <div className="flex flex-col items-center gap-2">
                                <div className={`w-8 h-8 flex items-center justify-center font-black rounded-lg text-xs ${
                                    isCurrentUser ? 'bg-indigo-500 text-white shadow-md' : 'text-gray-400 bg-black/30'
                                }`}>
                                    #{entry.rank}
                                </div>
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl bg-navy-950/80 border border-white/10 shadow-inner overflow-hidden relative">
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
                                            <span className="text-2xl">{entry.avatar}</span>
                                        )
                                    ) : (
                                        entry.name.charAt(0)
                                    )}
                                </div>
                            </div>

                            {/* Main Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start gap-2">
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-white text-base md:text-lg truncate leading-tight">{entry.name}</h3>
                                            {isCurrentUser && (
                                                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-indigo-500 text-white shadow-sm flex-shrink-0">
                                                    YOU
                                                </span>
                                            )}
                                        </div>
                                        {entry.title && (
                                            <div className="flex items-center gap-1.5 mt-1">
                                                {getTitleIcon(entry.title)}
                                                <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 uppercase tracking-wider">
                                                    {entry.title}
                                                </span>
                                            </div>
                                        )}
                                        <div className="flex flex-wrap items-center gap-2 mt-2">
                                            <RankBadge level={entry.level} rank={entry.rank} />
                                            {entry.streak > 0 ? (
                                                <div className="flex items-center gap-1 text-orange-400 text-xs font-bold bg-orange-400/10 px-2.5 py-0.5 rounded-full border border-orange-400/20">
                                                    <Flame size={11} fill="currentColor" /> {entry.streak}d Streak
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                                                    <Sparkles size={11} className="text-slate-500" /> Active
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <div className="font-mono font-black text-purple-400 text-xl">
                                            {entry.xp.toLocaleString()}
                                        </div>
                                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Total XP</div>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-2 mt-3.5">
                                    {entry.labAccuracy !== undefined ? (
                                        <div className="bg-black/20 rounded-lg p-2 flex items-center gap-2.5 border border-white/5">
                                            <div className="p-1.5 bg-green-500/20 rounded-md text-green-400">
                                                <Target size={13} />
                                            </div>
                                            <div>
                                                <div className="text-[9px] text-gray-400 uppercase font-bold">Accuracy</div>
                                                <div className="text-xs font-bold text-emerald-400">{entry.labAccuracy}%</div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-black/20 rounded-lg p-2 flex items-center gap-2.5 border border-white/5">
                                            <div className="p-1.5 bg-indigo-500/20 rounded-md text-indigo-400">
                                                <BookOpen size={13} />
                                            </div>
                                            <div>
                                                <div className="text-[9px] text-gray-400 uppercase font-bold">Lessons Studied</div>
                                                <div className="text-xs font-bold text-indigo-300">{entry.completedLessons || 0} Lessons</div>
                                            </div>
                                        </div>
                                    )}

                                    {entry.experimentsCompleted !== undefined ? (
                                        <div className="bg-black/20 rounded-lg p-2 flex items-center gap-2.5 border border-white/5">
                                            <div className="p-1.5 bg-blue-500/20 rounded-md text-blue-400">
                                                <Beaker size={13} />
                                            </div>
                                            <div>
                                                <div className="text-[9px] text-gray-400 uppercase font-bold">Experiments</div>
                                                <div className="text-xs font-bold text-cyan-400">{entry.experimentsCompleted} Done</div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-black/20 rounded-lg p-2 flex items-center gap-2.5 border border-white/5">
                                            <div className="p-1.5 bg-amber-500/20 rounded-md text-amber-400">
                                                <Award size={13} />
                                            </div>
                                            <div>
                                                <div className="text-[9px] text-gray-400 uppercase font-bold">Rank Tier</div>
                                                <div className="text-xs font-bold text-amber-300">Level {entry.level}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
