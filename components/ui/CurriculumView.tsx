'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CurriculumLevel } from '@/data/curriculum';
import { useSearchParams } from 'next/navigation';
import { TopicCard } from './TopicCard';
import Link from 'next/link';
import { 
    LayoutGrid, 
    List, 
    Clock, 
    Star, 
    Lock, 
    ChevronRight 
} from 'lucide-react';
import { getLessonFromRegistry } from '@/data/curriculum/registry';
import { CurriculumJourney3D } from './CurriculumJourney3D';
import { StudentCommandCenter } from './StudentCommandCenter';
import { CurriculumUpsellModal } from './CurriculumUpsellModal';

interface CurriculumViewProps {
    curricula: CurriculumLevel[];
    enrolledTracks?: string[];
    isSystemAdmin?: boolean;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({ 
    curricula,
    enrolledTracks = [],
    isSystemAdmin = false
}) => {
    const searchParams = useSearchParams();
    const trackParam = searchParams.get('track');

    if (!curricula || curricula.length === 0) {
        return (
            <div className="w-full text-center py-12 text-slate-400 bg-surface/40 backdrop-blur-md border border-border rounded-3xl">
                <span className="text-3xl mb-4 block">🔍</span>
                <p className="font-semibold text-foreground mb-2">No Curriculum Available</p>
                <p className="text-sm">There are no courses matching your track. Please contact your administrator.</p>
            </div>
        );
    }

    // Helper to check if a curriculum is unlocked for the student
    const isCurriculumUnlocked = (currId: string): boolean => {
        if (isSystemAdmin) return true;
        if (!enrolledTracks || enrolledTracks.length === 0) return false;
        return enrolledTracks.some(t => currId === t || currId === `${t}-20260106` || currId.startsWith(t + '-'));
    };

    // Pick saved track or first unlocked curriculum as default
    const firstUnlocked = curricula.find(c => isCurriculumUnlocked(c.id));
    const defaultTab = React.useMemo(() => {
        if (trackParam && curricula.some(c => c.id === trackParam)) {
            return trackParam;
        }
        if (typeof window !== 'undefined') {
            const savedTrack = localStorage.getItem('chemzim_active_track');
            if (savedTrack) {
                const clean = savedTrack.replace(/-2026\d+$/, '').toLowerCase().trim();
                const matchedSaved = curricula.find(c => (c.id === clean || c.id.startsWith(clean)) && isCurriculumUnlocked(c.id));
                if (matchedSaved) return matchedSaved.id;
            }
        }
        return firstUnlocked ? firstUnlocked.id : curricula[0].id;
    }, [trackParam, curricula, firstUnlocked]);

    const [activeTab, setActiveTab] = useState(defaultTab);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [upsellCurriculum, setUpsellCurriculum] = useState<CurriculumLevel | null>(null);

    React.useEffect(() => {
        if (trackParam && curricula.some(c => c.id === trackParam)) {
            setActiveTab(trackParam);
            const clean = trackParam.replace(/-2026\d+$/, '').toLowerCase().trim();
            localStorage.setItem('chemzim_active_track', clean);
            window.dispatchEvent(new CustomEvent('chemzim_track_changed', { detail: { trackId: clean } }));
        }
    }, [trackParam, curricula]);

    const handleSelectCurriculum = (currId: string) => {
        setActiveTab(currId);
        const clean = currId.replace(/-2026\d+$/, '').toLowerCase().trim();
        if (typeof window !== 'undefined') {
            localStorage.setItem('chemzim_active_track', clean);
            window.dispatchEvent(new CustomEvent('chemzim_track_changed', { detail: { trackId: clean } }));
        }
    };

    const activeCurriculum = curricula.find(c => c.id === activeTab);
    const isCurrentCurriculumLocked = activeCurriculum ? !isCurriculumUnlocked(activeCurriculum.id) : false;

    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Upsell Modal for Locked Curricula */}
            <CurriculumUpsellModal 
                isOpen={upsellCurriculum !== null} 
                onClose={() => setUpsellCurriculum(null)} 
                curriculum={upsellCurriculum} 
            />

            {/* Tabs & View Mode Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                {/* Curriculum Tabs */}
                <div className="flex flex-wrap gap-2 bg-surface p-2 rounded-2xl border border-border w-fit backdrop-blur-md">
                    {curricula.map((curr) => {
                        const isUnlocked = isCurriculumUnlocked(curr.id);

                        return (
                            <button
                                key={curr.id}
                                onClick={() => handleSelectCurriculum(curr.id)}
                                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                    activeTab === curr.id ? 'text-indigo-600 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'
                                }`}
                            >
                                {activeTab === curr.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-indigo-500/10 border border-indigo-500/30 rounded-xl"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <span>{curr.title}</span>
                                    {isUnlocked ? (
                                        <span className="text-[11px] bg-background px-2 py-0.5 rounded-md text-slate-500">
                                            {curr.code}
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1 text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-md">
                                            <Lock className="w-3 h-3" />
                                            <span>Locked</span>
                                        </span>
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* View Mode Selector */}
                <div className="flex bg-surface border border-border p-1 rounded-xl w-fit backdrop-blur-md self-end sm:self-auto">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                            viewMode === 'grid' 
                                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                                : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                        }`}
                        title="Grid Cards View"
                    >
                        <LayoutGrid className="w-3.5 h-3.5" />
                        <span>Grid</span>
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                            viewMode === 'list' 
                                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                                : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                        }`}
                        title="Detailed Lessons View"
                    >
                        <List className="w-3.5 h-3.5" />
                        <span>List View</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`${activeTab}-${viewMode}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                >
                    {activeCurriculum && (
                        <div>
                            {/* Locked Track Banner Alert */}
                            {isCurrentCurriculumLocked && (
                                <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-indigo-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-amber-500/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                                            <Lock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-lg text-white">This Curriculum is Locked on Your Account</h3>
                                            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                                                Upgrade your subscription to unlock all interactive units, theory slides, simulators, and exam banks.
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setUpsellCurriculum(activeCurriculum)}
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] flex-shrink-0"
                                    >
                                        <span>Unlock Track Access</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )}

                            {/* Student Command Center (Gamification Hub) */}
                            <StudentCommandCenter 
                                curriculumTitle={activeCurriculum.title} 
                                curriculumId={activeCurriculum.id}
                            />

                            {/* Curriculum Headers */}
                            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-3xl font-bold text-foreground mb-1">{activeCurriculum.title}</h2>
                                        {isCurrentCurriculumLocked && (
                                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                                                <Lock className="w-3.5 h-3.5" />
                                                <span>Preview Mode</span>
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-muted">{activeCurriculum.description}</p>
                                </div>
                            </div>

                            {/* View Modes Render */}
                            {viewMode === 'grid' ? (
                                <CurriculumJourney3D 
                                    topics={activeCurriculum.topics} 
                                    curriculumId={activeCurriculum.id}
                                    isLocked={isCurrentCurriculumLocked}
                                    onLockedClick={() => setUpsellCurriculum(activeCurriculum)}
                                />
                            ) : (
                                <div className="space-y-8">
                                    {activeCurriculum.topics.map((topic) => {
                                        const availableLessonsCount = topic.subtopics?.filter((_, idx) => 
                                            getLessonFromRegistry(activeCurriculum.id, topic.number, idx + 1) !== null
                                        ).length || 0;

                                        return (
                                            <div key={topic.id} className="bg-surface backdrop-blur-md border border-border rounded-3xl p-6 md:p-8">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6 mb-6">
                                                    <div>
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
                                                                Unit {topic.number}
                                                            </span>
                                                            <span className="text-xs text-slate-500">
                                                                {availableLessonsCount} of {topic.subtopics?.length || 0} Lessons Available
                                                            </span>
                                                        </div>
                                                        <h2 className="text-2xl font-bold text-foreground">{topic.title}</h2>
                                                    </div>
                                                    {isCurrentCurriculumLocked ? (
                                                        <button 
                                                            onClick={() => setUpsellCurriculum(activeCurriculum)}
                                                            className="inline-flex items-center justify-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border border-amber-500/30 w-fit cursor-pointer"
                                                        >
                                                            <Lock className="w-4 h-4" />
                                                            <span>Unlock Unit</span>
                                                        </button>
                                                    ) : (
                                                        <Link 
                                                            href={`/dashboard/curriculum/${activeCurriculum.id}/${topic.id}`}
                                                            className="inline-flex items-center justify-center bg-surface hover:bg-surface-hover text-foreground px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border border-border w-fit"
                                                        >
                                                            Explore Unit
                                                        </Link>
                                                    )}
                                                </div>

                                                {/* Lessons List */}
                                                <div className="grid gap-4">
                                                    {topic.subtopics && topic.subtopics.length > 0 ? (
                                                        topic.subtopics.map((subtopic, index) => {
                                                            const lessonNum = index + 1;
                                                            const lessonData = getLessonFromRegistry(activeCurriculum.id, topic.number, lessonNum);
                                                            const isAvailable = lessonData !== null;

                                                            return (
                                                                <div 
                                                                    key={index}
                                                                    className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 md:p-5 rounded-2xl border transition-all ${
                                                                        isCurrentCurriculumLocked
                                                                            ? 'bg-surface/40 border-border hover:border-amber-500/30 cursor-pointer'
                                                                            : isAvailable 
                                                                                ? 'bg-surface border-border hover:border-indigo-500/30 hover:bg-indigo-500/[0.02]' 
                                                                                : 'bg-surface/20 border-dashed border-border opacity-60'
                                                                    }`}
                                                                    onClick={isCurrentCurriculumLocked ? () => setUpsellCurriculum(activeCurriculum) : undefined}
                                                                >
                                                                    <div className="flex items-start sm:items-center gap-3 md:gap-4 min-w-0 flex-1">
                                                                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-xs md:text-sm ${
                                                                            isCurrentCurriculumLocked
                                                                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                                                                : isAvailable 
                                                                                    ? 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20' 
                                                                                    : 'bg-background text-slate-500 border border-border'
                                                                        }`}>
                                                                            {isCurrentCurriculumLocked ? <Lock className="w-4 h-4" /> : lessonNum}
                                                                        </div>
                                                                        <div className="min-w-0 flex-1">
                                                                            <h4 className={`font-semibold text-sm md:text-base break-words ${
                                                                                isCurrentCurriculumLocked 
                                                                                    ? 'text-foreground group-hover:text-amber-300' 
                                                                                    : isAvailable ? 'text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-300' : 'text-slate-500'
                                                                            }`}>
                                                                                {subtopic}
                                                                            </h4>
                                                                            <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-semibold text-slate-500 mt-1">
                                                                                <div className="flex items-center gap-1">
                                                                                    <Clock className="w-3 md:w-3.5 h-3 md:h-3.5" />
                                                                                    <span>15 min</span>
                                                                                </div>
                                                                                <div className="flex items-center gap-1">
                                                                                    <Star className="w-3 md:w-3.5 h-3 md:h-3.5 text-amber-500/60" />
                                                                                    <span>+25 XP</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="self-end sm:self-auto flex-shrink-0">
                                                                        {isCurrentCurriculumLocked ? (
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => setUpsellCurriculum(activeCurriculum)}
                                                                                className="flex items-center justify-center gap-1.5 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-white px-3.5 py-1.5 md:px-4 md:py-2 rounded-xl text-[11px] md:text-xs font-bold transition-all border border-amber-500/20 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] w-full sm:w-auto cursor-pointer"
                                                                            >
                                                                                <Lock className="w-3.5 h-3.5" />
                                                                                <span>Unlock</span>
                                                                            </button>
                                                                        ) : isAvailable ? (
                                                                            <Link
                                                                                href={`/dashboard/curriculum/${activeCurriculum.id}/${topic.id}?tab=theory&lesson=${lessonNum}`}
                                                                                className="flex items-center justify-center gap-1.5 bg-indigo-500/10 hover:bg-indigo-500 text-indigo-500 dark:text-indigo-400 hover:text-white px-3.5 py-1.5 md:px-4 md:py-2 rounded-xl text-[11px] md:text-xs font-bold transition-all border border-indigo-500/20 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] w-full sm:w-auto"
                                                                            >
                                                                                Study Lesson
                                                                                <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                                                            </Link>
                                                                        ) : (
                                                                            <div className="flex items-center gap-1 text-slate-600 text-xs font-semibold px-4 py-2">
                                                                                <Lock className="w-3.5 h-3.5" />
                                                                                <span>Locked</span>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                    ) : (
                                                        <div className="text-center py-6 text-slate-500 text-sm">
                                                            No lessons defined for this unit.
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
