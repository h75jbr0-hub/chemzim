import { Shield, Sparkles, Droplets, Gem, Zap, Crown, Flame, Atom, FlaskConical, Dna, Trophy, Star } from 'lucide-react';

interface RankBadgeProps {
    level: number;
    rank?: number;
    className?: string;
}

export default function RankBadge({ level, rank, className = '' }: RankBadgeProps) {
    let rankName = 'Novice Chemist';
    let rankColor = 'from-cyan-600 to-blue-700';
    let icon = <FlaskConical size={11} className="text-cyan-200" />;
    let borderColor = 'border-cyan-500/40';

    // 🏆 EXCLUSIVE TITLES FOR TOP 3 PODIUM RANKS (Always guaranteed for #1, #2, #3)
    if (rank === 1) {
        rankName = 'Chem Sovereign';
        rankColor = 'from-yellow-400 via-amber-500 to-yellow-600';
        icon = <Crown size={12} className="text-yellow-100 animate-pulse" />;
        borderColor = 'border-yellow-300 shadow-yellow-500/40';
    } else if (rank === 2) {
        rankName = 'Grand Alchemist';
        rankColor = 'from-purple-500 via-violet-600 to-indigo-700';
        icon = <Zap size={12} className="text-purple-100" />;
        borderColor = 'border-purple-300 shadow-purple-500/30';
    } else if (rank === 3) {
        rankName = 'Master Prodigy';
        rankColor = 'from-cyan-500 via-blue-600 to-teal-700';
        icon = <Star size={12} className="text-cyan-100" />;
        borderColor = 'border-cyan-300 shadow-cyan-500/30';
    } else if (rank === 4) {
        rankName = 'Vanguard Chemist';
        rankColor = 'from-emerald-500 to-teal-700';
        icon = <Shield size={11} className="text-emerald-100" />;
        borderColor = 'border-emerald-400';
    } else if (rank === 5) {
        rankName = 'Reaction Pioneer';
        rankColor = 'from-indigo-500 to-blue-600';
        icon = <Flame size={11} className="text-indigo-100" />;
        borderColor = 'border-indigo-400';
    } else if (rank === 6) {
        rankName = 'Element Specialist';
        rankColor = 'from-teal-500 to-emerald-600';
        icon = <Atom size={11} className="text-teal-100" />;
        borderColor = 'border-teal-400';
    } else if (rank === 7) {
        rankName = 'Atomic Scout';
        rankColor = 'from-sky-500 to-blue-600';
        icon = <Sparkles size={11} className="text-sky-100" />;
        borderColor = 'border-sky-400';
    } else if (rank === 8) {
        rankName = 'Formula Adept';
        rankColor = 'from-rose-500 to-pink-600';
        icon = <Dna size={11} className="text-rose-100" />;
        borderColor = 'border-rose-400';
    } else {
        // High Level Overrides for Level 5+
        if (level >= 50) {
            rankName = 'Chem-Dragon';
            rankColor = 'from-yellow-500 via-amber-500 to-red-600';
            icon = <Crown size={12} className="text-yellow-100 animate-pulse" />;
            borderColor = 'border-yellow-400';
        } else if (level >= 35) {
            rankName = 'Quantum Sovereign';
            rankColor = 'from-teal-400 via-indigo-500 to-purple-600';
            icon = <Sparkles size={11} className="text-teal-200 animate-pulse" />;
            borderColor = 'border-teal-400';
        } else if (level >= 20) {
            rankName = 'Fusion Archon';
            rankColor = 'from-orange-500 to-red-600';
            icon = <Zap size={11} className="text-orange-100" />;
            borderColor = 'border-orange-400';
        } else if (level >= 10) {
            rankName = 'Crystal Sentinel';
            rankColor = 'from-purple-500 to-indigo-600';
            icon = <Gem size={11} className="text-purple-100" />;
            borderColor = 'border-purple-400';
        } else if (level >= 5) {
            rankName = 'Mercury Rogue';
            rankColor = 'from-cyan-500 to-blue-600';
            icon = <Droplets size={11} className="text-cyan-100" />;
            borderColor = 'border-cyan-400';
        } else if (level === 4) {
            rankName = 'Bond Weaver';
            rankColor = 'from-pink-500 to-rose-600';
            icon = <Dna size={11} className="text-pink-100" />;
            borderColor = 'border-pink-400';
        } else if (level === 3) {
            rankName = 'Reaction Pioneer';
            rankColor = 'from-violet-500 to-purple-600';
            icon = <Flame size={11} className="text-violet-100" />;
            borderColor = 'border-violet-400';
        } else if (level === 2) {
            rankName = 'Element Apprentice';
            rankColor = 'from-emerald-500 to-teal-600';
            icon = <Atom size={11} className="text-emerald-100" />;
            borderColor = 'border-emerald-400';
        }
    }

    return (
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${borderColor} bg-gradient-to-r ${rankColor} shadow-lg backdrop-blur-sm ${className}`}>
            {icon}
            <span className="text-[10px] md:text-xs font-black text-white tracking-wider uppercase drop-shadow-md whitespace-nowrap">{rankName}</span>
        </div>
    );
}
