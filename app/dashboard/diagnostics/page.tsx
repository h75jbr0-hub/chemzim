'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { 
    BarChart3, AlertTriangle, CheckCircle2, Target, ArrowUpRight, 
    Sparkles, ShieldAlert, Award, Compass, Zap, Layers, RefreshCw, 
    ChevronRight, BookOpen, Clock, Flame, Info
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useGamification } from '@/contexts/GamificationContext';
import { allCurricula } from '@/data/curriculum';
import { analyzeStudentDiagnostics, TopicDiagnostic } from '@/lib/topic-analytics';

export default function DiagnosticsPage() {
    const { user } = useAuth();
    const { solvedQuestions, mistakeInbox } = useGamification();

    // Track state (allows switching tracks to see diagnostic across syllabuses)
    const defaultTrack = useMemo(() => {
        if (user?.enrolledTracks && user.enrolledTracks.length > 0) {
            return user.enrolledTracks[0].replace(/-2026\d+$/, '').toLowerCase().trim();
        }
        const track = user?.track || (user?.grade?.toLowerCase().includes('edexcel') ? (user?.grade?.toLowerCase().includes('a2') ? 'edexcel-a2' : 'edexcel-as') : (user?.grade === 'AS Level' ? 'cie-as' : (user?.grade === 'A2 Level' || user?.grade === 'IB' || user?.grade === 'A Level' ? 'cie-alevel' : 'cie-igcse')));
        let normalized = track.toLowerCase().trim();
        if (normalized === 'igcse') normalized = 'cie-igcse';
        return normalized;
    }, [user]);

    const ALL_SYLLABUS_OPTIONS = useMemo(() => [
        { id: 'edexcel-as', title: 'Edexcel AS (Units 1–3)' },
        { id: 'edexcel-a2', title: 'Edexcel A2 (Units 4–6)' },
        { id: 'edexcel-alevel', title: 'Edexcel IAL (Units 1–6)' },
        { id: 'edexcel-igcse', title: 'Edexcel IGCSE (4CH1)' },
        { id: 'cie-igcse', title: 'Cambridge IGCSE (0620)' },
        { id: 'cie-as', title: 'Cambridge AS (9701)' },
        { id: 'cie-alevel', title: 'Cambridge A2 (9701)' },
    ], []);

    const studentEnrolledTracks = useMemo(() => {
        if (!user) return ['edexcel-as', 'edexcel-a2'];
        if (user.isAdmin || user.role === 'admin' || user.role === 'moderator') {
            return ['all'];
        }
        const enrolled = (user.enrolledTracks && user.enrolledTracks.length > 0)
            ? user.enrolledTracks.map(t => t.toLowerCase().trim())
            : [(user.track || (user.grade?.toLowerCase().includes('edexcel') ? 'edexcel-as' : (user.grade === 'AS Level' ? 'cie-as' : (user.grade === 'A2 Level' || user.grade === 'A Level' ? 'cie-alevel' : 'cie-igcse')))).toLowerCase().trim()];
        return enrolled;
    }, [user]);

    const syllabusOptions = useMemo(() => {
        const isAdmin = user?.isAdmin || user?.role === 'admin' || user?.role === 'moderator';
        if (isAdmin || studentEnrolledTracks.includes('all')) {
            return ALL_SYLLABUS_OPTIONS;
        }

        const filtered = ALL_SYLLABUS_OPTIONS.filter(opt => {
            return studentEnrolledTracks.some(e => {
                const clean = e.replace(/-2026\d+$/, '').toLowerCase().trim();
                if (opt.id === 'edexcel-alevel') {
                    const hasBoth = studentEnrolledTracks.some(t => t.includes('edexcel-as')) && studentEnrolledTracks.some(t => t.includes('edexcel-a2'));
                    const hasIAL = studentEnrolledTracks.some(t => t.includes('edexcel-alevel') || t.includes('edexcel-ial'));
                    return hasBoth || hasIAL;
                }
                return opt.id === clean || opt.id.startsWith(clean) || clean.startsWith(opt.id);
            });
        });

        return filtered.length > 0 ? filtered : ALL_SYLLABUS_OPTIONS.slice(0, 2);
    }, [user, studentEnrolledTracks, ALL_SYLLABUS_OPTIONS]);

    const [selectedTrack, setSelectedTrack] = useState<string>(defaultTrack);
    const [selectedFilter, setSelectedFilter] = useState<'all' | 'critical' | 'moderate' | 'mastered'>('all');
    const [inspectedUnit, setInspectedUnit] = useState<TopicDiagnostic | null>(null);

    React.useEffect(() => {
        if (syllabusOptions.length === 0) return;
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('chemzim_active_track');
            if (saved) {
                const clean = saved.replace(/-2026\d+$/, '').toLowerCase().trim();
                const matched = syllabusOptions.find(c => c.id === clean || c.id.startsWith(clean));
                if (matched) {
                    setSelectedTrack(matched.id);
                    return;
                }
            }
        }
        if (!syllabusOptions.some(s => s.id === selectedTrack)) {
            setSelectedTrack(syllabusOptions[0].id);
        }
    }, [syllabusOptions]);

    const handleSelectTrack = (trackId: string) => {
        setSelectedTrack(trackId);
        if (typeof window !== 'undefined') {
            localStorage.setItem('chemzim_active_track', trackId);
            window.dispatchEvent(new CustomEvent('chemzim_track_changed', { detail: { trackId } }));
        }
    };

    // Compute Diagnostic Report
    const report = useMemo(() => {
        return analyzeStudentDiagnostics(solvedQuestions, mistakeInbox, selectedTrack);
    }, [solvedQuestions, mistakeInbox, selectedTrack]);

    const filteredDiagnostics = useMemo(() => {
        if (selectedFilter === 'critical') return report.diagnostics.filter(d => d.status === 'critical');
        if (selectedFilter === 'moderate') return report.diagnostics.filter(d => d.status === 'moderate');
        if (selectedFilter === 'mastered') return report.diagnostics.filter(d => d.status === 'mastered');
        return report.diagnostics;
    }, [report, selectedFilter]);

    const hasAttempts = report.totalAttempts > 0;

    return (
        <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-16">
            
            {/* Header with Title and Syllabus Selector */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            Diagnostic AI Analytics
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                            Real-time Syllabic Radar
                        </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-indigo-400" />
                        <span>Syllabus Weakness Heatmap</span>
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-2xl">
                        Comprehensive vulnerability breakdown identifying conceptual blindspots across every topic, with automated rescue pathways and recommended lessons.
                    </p>
                </div>

                {/* Track Selector Pills */}
                <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
                    {syllabusOptions.map(c => {
                        const isSelected = selectedTrack === c.id || (selectedTrack.startsWith(c.id.slice(0, 8)) && selectedTrack.includes('edexcel') === c.id.includes('edexcel'));
                        return (
                            <button
                                key={c.id}
                                onClick={() => handleSelectTrack(c.id)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                    selectedTrack === c.id
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {c.title}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Top Diagnostic KPI Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Exam Readiness Index */}
                <div className="glass-card bg-gradient-to-br from-[#0e1628] to-[#0a0f1d] border border-indigo-500/20 p-5 rounded-3xl relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-indigo-300 font-bold mb-3">
                        <span>EXAM READINESS</span>
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-white mb-2">
                        {report.readinessIndex}%
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-2">
                        <div 
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-1000"
                            style={{ width: `${report.readinessIndex}%` }}
                        />
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                        {report.readinessIndex >= 80 ? '🏆 Exam Distinction Ready' : report.readinessIndex >= 60 ? '⚡ Good Foundation' : '⚠️ Intensive Revision Needed'}
                    </span>
                </div>

                {/* Overall Accuracy */}
                <div className="glass-card bg-gradient-to-br from-[#0e1628] to-[#0a0f1d] border border-white/5 p-5 rounded-3xl">
                    <div className="flex items-center justify-between text-xs text-emerald-300 font-bold mb-3">
                        <span>OVERALL ACCURACY</span>
                        <Target className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-2">
                        {report.overallAccuracy}%
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                        Across <strong>{report.totalAttempts}</strong> question responses logged
                    </span>
                </div>

                {/* Mastered Topics */}
                <div className="glass-card bg-gradient-to-br from-[#0e1628] to-[#0a0f1d] border border-white/5 p-5 rounded-3xl">
                    <div className="flex items-center justify-between text-xs text-cyan-300 font-bold mb-3">
                        <span>MASTERED TOPICS</span>
                        <Award className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-2">
                        {report.masteredUnitsCount} <span className="text-base text-slate-500 font-normal">/ {report.diagnostics.length}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                        Units operating at &gt;85% accuracy
                    </span>
                </div>

                {/* Critical Vulnerabilities */}
                <div className="glass-card bg-gradient-to-br from-[#0e1628] to-[#0a0f1d] border border-rose-500/20 p-5 rounded-3xl">
                    <div className="flex items-center justify-between text-xs text-rose-300 font-bold mb-3">
                        <span>CRITICAL BLINDSPOTS</span>
                        <AlertTriangle className="w-4 h-4 text-rose-400 animate-pulse" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-rose-400 mb-2">
                        {report.criticalUnitsCount}
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                        Units requiring urgent intervention
                    </span>
                </div>

            </div>

            {/* Paper Skills Diagnostic Radar (MCQ vs Practical Skills vs Theory Calculations) */}
            <div className="bg-[#0c1427] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                Component Performance
                            </span>
                            <span className="text-xs font-bold text-slate-400">Core Paper Competencies</span>
                        </div>
                        <h3 className="text-lg font-black text-white flex items-center gap-2">
                            <span>Paper Skills & Practical Examination Radar</span>
                        </h3>
                    </div>

                    <Link
                        href="/dashboard/mock-exam"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-bold transition-all self-start sm:self-auto"
                    >
                        <span>Full Mock Exam Simulator</span>
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {report.skillsBreakdown.map((skill) => {
                        const isStrong = skill.status === 'strong';
                        const isModerate = skill.status === 'moderate';
                        const isCritical = skill.status === 'critical';
                        const isUnassessed = skill.status === 'unassessed';

                        const borderStyle = isCritical 
                            ? 'border-rose-500/30 bg-rose-950/10' 
                            : isModerate 
                            ? 'border-amber-500/30 bg-amber-950/10' 
                            : isStrong 
                            ? 'border-emerald-500/30 bg-emerald-950/10' 
                            : 'border-white/5 bg-white/[0.02]';

                        const badgeColor = isCritical
                            ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                            : isModerate
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                            : isStrong
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                            : 'bg-slate-800 text-slate-400 border-white/10';

                        const statusText = isCritical
                            ? 'Needs Urgent Intervention'
                            : isModerate
                            ? 'Moderate Proficiency'
                            : isStrong
                            ? 'Strong Competency'
                            : 'Not Assessed Yet';

                        return (
                            <div key={skill.category} className={`p-5 rounded-2xl border ${borderStyle} flex flex-col justify-between space-y-4`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-2xl">{skill.icon}</span>
                                        <h4 className="text-sm font-bold text-white">{skill.label}</h4>
                                    </div>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeColor}`}>
                                        {statusText}
                                    </span>
                                </div>

                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-400">Component Accuracy:</span>
                                        <span className="font-mono font-bold text-white">
                                            {isUnassessed ? '—' : `${skill.accuracyPercent}% (${skill.correctAttempts}/${skill.totalAttempts})`}
                                        </span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-700 ${
                                                isCritical ? 'bg-gradient-to-r from-rose-500 to-red-600' :
                                                isModerate ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
                                                isStrong ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-slate-700'
                                            }`}
                                            style={{ width: isUnassessed ? '100%' : `${skill.accuracyPercent}%`, opacity: isUnassessed ? 0.2 : 1 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Priority Rescue Alert (if critical weak spots exist) */}
            {report.topWeakSpots.length > 0 && (
                <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-rose-500/15 via-rose-500/5 to-indigo-500/10 border border-rose-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl shadow-rose-500/5 backdrop-blur-xl">
                    <div className="flex items-start sm:items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 flex-shrink-0 shadow-inner shadow-rose-500/30">
                            <AlertTriangle className="w-7 h-7 animate-bounce" />
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300">
                                    Highest Vulnerability Detected
                                </span>
                                <span className="text-xs text-rose-400 font-semibold">
                                    {report.topWeakSpots[0].weaknessPercent}% Error Vulnerability Rate
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-white">
                                Unit {report.topWeakSpots[0].unitNumber}: {report.topWeakSpots[0].unitTitle}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                                Recommended Rescue Lesson: <strong>Lesson {report.topWeakSpots[0].recommendedLessonNum}: {report.topWeakSpots[0].recommendedLessonTitle}</strong>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                        <Link
                            href={`/dashboard/curriculum/${report.topWeakSpots[0].curriculumId}/${report.topWeakSpots[0].topicId}?tab=theory&lesson=${report.topWeakSpots[0].recommendedLessonNum}`}
                            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-extrabold text-xs shadow-xl shadow-rose-500/20 transition-all active:scale-95 cursor-pointer"
                        >
                            <Zap className="w-4 h-4" />
                            <span>Study Rescue Lesson</span>
                        </Link>
                        <Link
                            href={`/dashboard/quizzes?mode=unit&unit=${encodeURIComponent(report.topWeakSpots[0].unitTitle)}&unitNum=${report.topWeakSpots[0].unitNumber}&track=${report.topWeakSpots[0].curriculumId}`}
                            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-bold text-xs transition-all cursor-pointer"
                        >
                            <Target className="w-4 h-4 text-emerald-400" />
                            <span>Targeted Rescue Drill</span>
                        </Link>
                    </div>
                </div>
            )}

            {/* Filter Tabs Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-indigo-400" />
                        <span>Syllabus Matrix:</span>
                    </span>
                    <span className="text-xs text-white font-bold">
                        {report.activeCurriculum.title} ({report.diagnostics.length} Units)
                    </span>
                </div>

                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                    <button
                        onClick={() => setSelectedFilter('all')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            selectedFilter === 'all'
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                                : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        All Units ({report.diagnostics.length})
                    </button>
                    <button
                        onClick={() => setSelectedFilter('critical')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            selectedFilter === 'critical'
                                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                                : 'text-slate-400 hover:text-rose-400'
                        }`}
                    >
                        Critical ({report.criticalUnitsCount})
                    </button>
                    <button
                        onClick={() => setSelectedFilter('moderate')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            selectedFilter === 'moderate'
                                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                                : 'text-slate-400 hover:text-amber-400'
                        }`}
                    >
                        Needs Polish ({report.diagnostics.filter(d => d.status === 'moderate').length})
                    </button>
                    <button
                        onClick={() => setSelectedFilter('mastered')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            selectedFilter === 'mastered'
                                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                                : 'text-slate-400 hover:text-emerald-400'
                        }`}
                    >
                        Mastered ({report.masteredUnitsCount})
                    </button>
                </div>
            </div>

            {/* Interactive Heatmap Matrix Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredDiagnostics.map((diag) => {
                    const isMastered = diag.status === 'mastered';
                    const isProficient = diag.status === 'proficient';
                    const isModerate = diag.status === 'moderate';
                    const isCritical = diag.status === 'critical';
                    const isUnassessed = diag.status === 'unassessed';

                    let cardBorder = 'border-white/10 hover:border-indigo-500/40';
                    let badgeBg = 'bg-slate-800 text-slate-400 border-white/10';
                    let statusLabel = 'Ready to Assess';
                    let progressGrad = 'from-indigo-500 to-teal-400';

                    if (isCritical) {
                        cardBorder = 'border-rose-500/30 hover:border-rose-500/60 shadow-lg shadow-rose-500/5';
                        badgeBg = 'bg-rose-500/20 text-rose-300 border-rose-500/30';
                        statusLabel = `${diag.weaknessPercent}% Weakness Risk`;
                        progressGrad = 'from-rose-500 to-red-600';
                    } else if (isModerate) {
                        cardBorder = 'border-amber-500/30 hover:border-amber-500/60 shadow-lg shadow-amber-500/5';
                        badgeBg = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
                        statusLabel = `${diag.weaknessPercent}% Moderate Gap`;
                        progressGrad = 'from-amber-500 to-orange-500';
                    } else if (isProficient) {
                        cardBorder = 'border-cyan-500/25 hover:border-cyan-500/50 shadow-lg shadow-cyan-500/5';
                        badgeBg = 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
                        statusLabel = `${diag.accuracyPercent}% Proficient`;
                        progressGrad = 'from-cyan-500 to-blue-500';
                    } else if (isMastered) {
                        cardBorder = 'border-emerald-500/30 hover:border-emerald-500/60 shadow-lg shadow-emerald-500/5';
                        badgeBg = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
                        statusLabel = `${diag.accuracyPercent}% Mastered`;
                        progressGrad = 'from-emerald-500 to-teal-400';
                    }

                    return (
                        <div
                            key={diag.unitNumber}
                            className={`rounded-3xl p-6 bg-gradient-to-br from-[#0c162c] via-[#091124] to-[#060c1a] border ${cardBorder} transition-all duration-300 flex flex-col justify-between group`}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md">
                                        Unit {diag.unitNumber}
                                    </span>
                                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${badgeBg}`}>
                                        {statusLabel}
                                    </span>
                                </div>

                                <h4 className="text-lg font-black text-white group-hover:text-indigo-300 transition-colors line-clamp-1 mb-2">
                                    {diag.unitTitle}
                                </h4>

                                <div className="space-y-1.5 my-4">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-400">Concept Accuracy</span>
                                        <span className="font-mono font-bold text-white">
                                            {isUnassessed ? 'Not Assessed Yet' : `${diag.accuracyPercent}% (${diag.correctAttempts}/${diag.totalAttempts})`}
                                        </span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full bg-gradient-to-r ${progressGrad} transition-all duration-700`}
                                            style={{ width: isUnassessed ? '100%' : `${diag.accuracyPercent}%`, opacity: isUnassessed ? 0.3 : 1 }}
                                        />
                                    </div>
                                </div>

                                {/* Suggested Review Card */}
                                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1 text-xs mb-4">
                                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                                        Recommended Review:
                                    </span>
                                    <div className="text-white font-bold truncate">
                                        Lesson {diag.recommendedLessonNum}: {diag.recommendedLessonTitle}
                                    </div>
                                    {diag.mistakesCount > 0 && (
                                        <div className="text-[11px] text-rose-400/80 font-medium">
                                            • {diag.mistakesCount} mistake{diag.mistakesCount > 1 ? 's' : ''} logged in active tests
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                                <Link
                                    href={`/dashboard/curriculum/${diag.curriculumId}/${diag.topicId}?tab=theory&lesson=${diag.recommendedLessonNum}`}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white text-xs font-bold transition-all border border-indigo-500/20 hover:border-indigo-500/40"
                                >
                                    <BookOpen className="w-3.5 h-3.5" />
                                    <span>Study Lesson</span>
                                </Link>

                                <Link
                                    href={`/dashboard/quizzes?mode=unit&unit=${encodeURIComponent(diag.unitTitle)}&unitNum=${diag.unitNumber}&track=${diag.curriculumId}`}
                                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-white text-xs font-bold transition-all border border-emerald-500/20 hover:border-emerald-500/40"
                                    title="Practice Unit Questions"
                                >
                                    <Target className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Drill</span>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Educational Note & Spaced Repetition Link */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                        <Info className="w-5 h-5" />
                    </div>
                    <p>
                        Our Diagnostic Radar automatically updates every time you submit a <strong>Mock Paper</strong> or <strong>Practice Quiz</strong>. Mistakes are placed into the 5-box Leitner Spaced Repetition inbox.
                    </p>
                </div>
                <Link
                    href="/dashboard/quizzes?mode=spaced"
                    className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold whitespace-nowrap"
                >
                    <span>Launch Spaced Review</span>
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>

        </div>
    );
}
