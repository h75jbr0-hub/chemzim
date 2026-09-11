'use client';

import React, { useMemo, useState } from 'react';
import { 
    AlertTriangle, 
    Sparkles, 
    Target, 
    BarChart3,
    ArrowUpRight,
    Zap,
    Compass,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { useGamification } from '@/contexts/GamificationContext';
import { useAuth } from '@/contexts/AuthContext';
import { allCurricula } from '@/data/curriculum';
import { analyzeStudentDiagnostics } from '@/lib/topic-analytics';

export interface TopicWeakSpot {
    unitNumber: number;
    unitTitle: string;
    topicId: string;
    curriculumId: string;
    mistakesCount: number;
    totalAttempts: number;
    accuracyPercent: number;
    weaknessPercent: number; // 100 - accuracy
    severity: 'critical' | 'moderate' | 'stable';
    recommendedLessonNum: number;
    recommendedLessonTitle: string;
    subtopicsSummary: string[];
}

export function WeakSpotAnalyticsHeatmap({ curriculumTrackId }: { curriculumTrackId?: string } = {}) {
    const { user } = useAuth();
    const { mistakeInbox, solvedQuestions } = useGamification();
    const [selectedTab, setSelectedTab] = useState<'all' | 'critical' | 'moderate'>('all');

    // Resolve current student default track
    const studentTrackId = useMemo(() => {
        const track = user?.track || (user?.grade?.toLowerCase().includes('edexcel') ? 'edexcel-as' : (user?.grade === 'AS Level' ? 'cie-as' : (user?.grade === 'A2 Level' || user?.grade === 'IB' || user?.grade === 'A Level' ? 'cie-alevel' : 'cie-igcse')));
        let normalized = track.toLowerCase().trim();
        if (normalized === 'igcse') normalized = 'cie-igcse';
        if (normalized === 'edexcel-alevel') {
            const grade = (user?.grade || '').toLowerCase();
            if (grade.includes('a2') || grade.includes('a level') || grade.includes('alevel') || grade.includes('unit 4') || grade.includes('unit 5') || grade.includes('unit 6')) {
                return 'edexcel-a2';
            }
            return 'edexcel-as';
        }
        return normalized;
    }, [user]);

    const [syncedTrack, setSyncedTrack] = useState<string>(curriculumTrackId || '');

    React.useEffect(() => {
        if (curriculumTrackId) {
            setSyncedTrack(curriculumTrackId);
            return;
        }
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('chemzim_active_track');
            if (saved) {
                setSyncedTrack(saved.replace(/-2026\d+$/, '').toLowerCase().trim());
            }
        }
    }, [curriculumTrackId]);

    React.useEffect(() => {
        const handler = (e: any) => {
            if (e.detail?.trackId) {
                setSyncedTrack(e.detail.trackId.replace(/-2026\d+$/, '').toLowerCase().trim());
            }
        };
        window.addEventListener('chemzim_track_changed', handler);
        return () => window.removeEventListener('chemzim_track_changed', handler);
    }, []);

    const effectiveTrackId = curriculumTrackId || syncedTrack || studentTrackId;

    const activeCurriculum = useMemo(() => {
        return allCurricula.find(c => c.id.startsWith(effectiveTrackId)) || 
               allCurricula.find(c => c.id.startsWith(studentTrackId)) || 
               allCurricula[0];
    }, [effectiveTrackId, studentTrackId]);

    // 1. Analyze mistakes & attempts by curriculum & unit via central engine
    const diagnosticReport = useMemo(() => {
        return analyzeStudentDiagnostics(solvedQuestions, mistakeInbox, effectiveTrackId);
    }, [solvedQuestions, mistakeInbox, effectiveTrackId]);

    const { spots, hasRealData } = useMemo(() => {
        const analyzedSpots: TopicWeakSpot[] = diagnosticReport.diagnostics.map(d => ({
            unitNumber: d.unitNumber,
            unitTitle: d.unitTitle,
            topicId: d.topicId,
            curriculumId: d.curriculumId,
            mistakesCount: d.mistakesCount,
            totalAttempts: d.totalAttempts,
            accuracyPercent: d.accuracyPercent,
            weaknessPercent: d.weaknessPercent,
            severity: d.status === 'critical' ? 'critical' : d.status === 'moderate' ? 'moderate' : 'stable',
            recommendedLessonNum: d.recommendedLessonNum,
            recommendedLessonTitle: d.recommendedLessonTitle,
            subtopicsSummary: d.subtopics.slice(0, 3)
        }));

        return {
            spots: analyzedSpots.sort((a, b) => b.weaknessPercent - a.weaknessPercent),
            hasRealData: diagnosticReport.totalAttempts > 0
        };
    }, [diagnosticReport]);

    // Filtered by active tab
    const filteredAnalytics = useMemo(() => {
        if (selectedTab === 'critical') return spots.filter(s => s.severity === 'critical');
        if (selectedTab === 'moderate') return spots.filter(s => s.severity === 'moderate');
        return spots;
    }, [spots, selectedTab]);

    const topWeakSpot = spots[0];

    return (
        <div className="w-full space-y-6">
            {/* Header with Title & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
                        <BarChart3 className="w-6 h-6 text-indigo-400" />
                        <span>Diagnostic Weak Spot Radar</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                        Real-time AI vulnerability mapping based on your quiz & exam mistakes
                    </p>
                </div>

                {/* Filter Pills and Link to Full Diagnostic Report */}
                <div className="flex flex-wrap items-center gap-2">
                    {hasRealData ? (
                        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-white/10 w-fit backdrop-blur-md">
                            <button
                                onClick={() => setSelectedTab('all')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                    selectedTab === 'all' 
                                        ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20' 
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                All Topics ({spots.length})
                            </button>
                            <button
                                onClick={() => setSelectedTab('critical')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                    selectedTab === 'critical' 
                                        ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20' 
                                        : 'text-slate-400 hover:text-rose-400'
                                }`}
                            >
                                Needs Review ({spots.filter(s => s.severity === 'critical').length})
                            </button>
                        </div>
                    ) : (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold backdrop-blur-md">
                            <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
                            <span>Radar Calibrating • Ready to Learn</span>
                        </div>
                    )}

                    <Link
                        href="/dashboard/diagnostics"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300 hover:text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
                    >
                        <span>Full Diagnostics</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>

            {/* If Student Has Real Question Data */}
            {hasRealData ? (
                <>
                    {/* Predictive Focus Alert Banner (Only when genuine weakness exists) */}
                    {topWeakSpot && topWeakSpot.weaknessPercent > 0 && (
                        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-rose-500/15 via-rose-500/5 to-indigo-500/10 border border-rose-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl shadow-rose-500/5 backdrop-blur-xl">
                            <div className="flex items-start sm:items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 flex-shrink-0 shadow-inner shadow-rose-500/30">
                                    <AlertTriangle className="w-6 h-6 animate-bounce" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300">
                                            Priority Revision Alert
                                        </span>
                                        <span className="text-xs text-rose-400/80 font-semibold">
                                            {topWeakSpot.weaknessPercent}% Error Vulnerability
                                        </span>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-black text-white">
                                        {topWeakSpot.unitTitle}
                                    </h4>
                                    <p className="text-xs text-slate-300/80 mt-0.5">
                                        Recommended Action: Master <strong>Lesson {topWeakSpot.recommendedLessonNum}: {topWeakSpot.recommendedLessonTitle}</strong>
                                    </p>
                                </div>
                            </div>

                            <Link
                                href={`/dashboard/curriculum/${topWeakSpot.curriculumId}/${topWeakSpot.topicId}?tab=theory&lesson=${topWeakSpot.recommendedLessonNum}`}
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-bold text-xs shadow-lg shadow-rose-500/20 transition-all active:scale-95 flex-shrink-0"
                            >
                                <Zap className="w-4 h-4" />
                                <span>Reinforce Lesson Now</span>
                            </Link>
                        </div>
                    )}

                    {/* Real Heatmap Units Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredAnalytics.map((spot, i) => {
                            const isCritical = spot.severity === 'critical';
                            const isModerate = spot.severity === 'moderate';

                            const borderStyle = isCritical 
                                ? 'border-rose-500/30 hover:border-rose-500/60 shadow-rose-500/5' 
                                : isModerate 
                                    ? 'border-amber-500/30 hover:border-amber-500/60 shadow-amber-500/5' 
                                    : 'border-emerald-500/20 hover:border-emerald-500/50 shadow-emerald-500/5';

                            const badgeStyle = isCritical 
                                ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' 
                                : isModerate 
                                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' 
                                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';

                            const progressColor = isCritical 
                                ? 'from-rose-500 to-red-600' 
                                : isModerate 
                                    ? 'from-amber-500 to-orange-500' 
                                    : 'from-emerald-500 to-teal-500';

                            return (
                                <div
                                    key={i}
                                    className={`rounded-3xl p-6 bg-gradient-to-br from-[#0c162c] via-[#091124] to-[#060c1a] border ${borderStyle} shadow-xl transition-all duration-300 flex flex-col justify-between group`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-4">
                                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                                                Unit {spot.unitNumber}
                                            </span>
                                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${badgeStyle}`}>
                                                {spot.weaknessPercent}% Weakness
                                            </span>
                                        </div>

                                        <h4 className="text-lg font-black text-white group-hover:text-indigo-300 transition-colors line-clamp-1 mb-2">
                                            {spot.unitTitle}
                                        </h4>

                                        <div className="space-y-1.5 my-4">
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="text-slate-400">Concept Accuracy</span>
                                                <span className="font-mono font-bold text-white">{spot.accuracyPercent}%</span>
                                            </div>
                                            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                                                <div 
                                                    className={`h-full rounded-full bg-gradient-to-r ${progressColor} transition-all duration-700`}
                                                    style={{ width: `${spot.accuracyPercent}%` }}
                                                />
                                            </div>
                                        </div>

                                        <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1 text-xs mb-4">
                                            <span className="text-[10px] uppercase font-bold text-slate-500 block">
                                                Suggested Review:
                                            </span>
                                            <div className="text-white font-bold truncate">
                                                Lesson {spot.recommendedLessonNum}: {spot.recommendedLessonTitle}
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/dashboard/curriculum/${spot.curriculumId}/${spot.topicId}?tab=theory&lesson=${spot.recommendedLessonNum}`}
                                        className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-indigo-500 text-slate-300 hover:text-white text-xs font-bold transition-all border border-white/10 hover:border-indigo-500/40 mt-2 shadow-sm"
                                    >
                                        <span>Strengthen Topic</span>
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                /* NEW STUDENTS: Positive Motivational Calibration Mode */
                <div className="space-y-6">
                    {/* Welcoming Calibration Banner */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-600/15 via-purple-600/10 to-teal-500/10 border border-indigo-500/25 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl shadow-indigo-500/5 backdrop-blur-xl">
                        <div className="flex items-start sm:items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-500 p-0.5 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-indigo-500/20">
                                <div className="w-full h-full bg-[#0a0f24] rounded-[14px] flex items-center justify-center text-indigo-400">
                                    <Compass className="w-7 h-7 animate-[spin_8s_linear_infinite]" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300">
                                        Clean Slate • Ready to Excel
                                    </span>
                                    <span className="text-xs text-indigo-300 font-semibold hidden sm:inline">
                                        AI Radar Awaiting First Response
                                    </span>
                                </div>
                                <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                                    Your Knowledge Radar is Ready for Calibration
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                                    Solve questions in practice quizzes or mock exams to activate real-time vulnerability mapping. The AI will pinpoint any tricky areas and guide you to top marks!
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/dashboard/quizzes"
                            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-emerald-500 hover:from-indigo-400 hover:to-emerald-400 text-white font-extrabold text-sm shadow-xl shadow-indigo-500/25 transition-all active:scale-95 flex-shrink-0"
                        >
                            <Target className="w-4 h-4" />
                            <span>Launch Diagnostic Quiz (+50 XP)</span>
                        </Link>
                    </div>

                    {/* Fresh Curriculum Topics (100% Potential / Ready State) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {activeCurriculum.topics.slice(0, 4).map((topic, idx) => (
                            <div
                                key={topic.id}
                                className="rounded-3xl p-5 bg-gradient-to-br from-[#0c162c] via-[#091124] to-[#060c1a] border border-white/10 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                                            Unit {topic.number}
                                        </span>
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                                            <CheckCircle2 size={11} /> Ready
                                        </span>
                                    </div>

                                    <h5 className="font-extrabold text-sm text-white group-hover:text-indigo-200 transition-colors line-clamp-1 mb-3">
                                        {topic.title}
                                    </h5>

                                    <div className="space-y-1.5 my-3">
                                        <div className="flex items-center justify-between text-[11px]">
                                            <span className="text-slate-400 font-medium">Status</span>
                                            <span className="font-semibold text-indigo-300">Ready to Assess</span>
                                        </div>
                                        <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                                            <div className="h-full w-full rounded-full bg-gradient-to-r from-indigo-500/50 to-emerald-400/50" />
                                        </div>
                                    </div>

                                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                                        {topic.subtopics?.[0] || 'Fundamentals'} &amp; core exam skills.
                                    </p>
                                </div>

                                <Link
                                    href={`/dashboard/curriculum/${activeCurriculum.id}/${topic.id}?tab=theory&lesson=1`}
                                    className="inline-flex items-center justify-between w-full py-2 px-3.5 rounded-xl bg-white/5 hover:bg-indigo-500/20 text-slate-300 hover:text-indigo-200 text-xs font-bold transition-all border border-white/5 hover:border-indigo-500/30 mt-4"
                                >
                                    <span>Explore Unit</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
