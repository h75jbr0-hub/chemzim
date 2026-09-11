'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
    BookOpen, 
    Trophy, 
    Flame, 
    ChevronRight,
    Star,
    Clock,
    Zap,
    TrendingUp,
    Megaphone,
    Layers,
    X
} from 'lucide-react';
import Link from 'next/link';
import { useGamification } from '@/contexts/GamificationContext';
import { allCurricula } from '@/data/curriculum';
import { WeakSpotAnalyticsHeatmap } from '@/components/visual/WeakSpotAnalyticsHeatmap';
import { WeeklyStudyGoalCard } from '@/components/gamification/WeeklyStudyGoalCard';
import { DailyStreakChallengeCard } from '@/components/gamification/DailyStreakChallengeCard';

export default function DashboardPage() {
    const { user } = useAuth();
    const { xp, level, streak, dailyChallenges, completedLessons, mistakeInbox } = useGamification();
    const [greeting, setGreeting] = useState('Welcome');
    const [previewLeaderboard, setPreviewLeaderboard] = useState<any[]>([]);
    const [announcements, setAnnouncements] = useState<any[]>([]);
    const [dismissedAnns, setDismissedAnns] = useState<string[]>([]);

    const todayStr = React.useMemo(() => new Date().toISOString().split('T')[0], []);
    const dueMistakesCount = React.useMemo(() => {
        return (mistakeInbox || []).filter(m => m.nextReviewDate <= todayStr).length;
    }, [mistakeInbox, todayStr]);
    const totalMistakesCount = (mistakeInbox || []).length;

    // Resolve default track
    const studentTrackId = React.useMemo(() => {
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

    // Multi-track support
    const studentTracks = React.useMemo(() => {
        if (user?.enrolledTracks && user.enrolledTracks.length > 0) {
            return user.enrolledTracks.map(t => t.toLowerCase().trim());
        }
        return [studentTrackId];
    }, [user, studentTrackId]);

    const [activeTrack, setActiveTrack] = useState<string>('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('chemzim_active_track');
            if (saved) {
                const cleanSaved = saved.replace(/-2026\d+$/, '').toLowerCase().trim();
                const matched = studentTracks.find(t => t === cleanSaved || cleanSaved.startsWith(t));
                if (matched) {
                    setActiveTrack(matched);
                    return;
                }
            }
        }
        setActiveTrack(studentTrackId);
    }, [studentTracks, studentTrackId]);

    useEffect(() => {
        const handleTrackChange = (e: any) => {
            const newTrack = e.detail?.trackId;
            if (newTrack) {
                const clean = newTrack.replace(/-2026\d+$/, '').toLowerCase().trim();
                setActiveTrack(clean);
            }
        };
        window.addEventListener('chemzim_track_changed', handleTrackChange);
        return () => window.removeEventListener('chemzim_track_changed', handleTrackChange);
    }, []);

    const effectiveTrackId = activeTrack || studentTrackId;

    const handleSwitchTrack = (newTrack: string) => {
        const clean = newTrack.toLowerCase().trim();
        setActiveTrack(clean);
        if (typeof window !== 'undefined') {
            localStorage.setItem('chemzim_active_track', clean);
            window.dispatchEvent(new CustomEvent('chemzim_track_changed', { detail: { trackId: clean } }));
        }
    };

    const activeCurriculum = React.useMemo(() => {
        return allCurricula.find(c => c.id.startsWith(effectiveTrackId)) || 
               allCurricula.find(c => c.id.startsWith(studentTrackId)) || 
               allCurricula[0];
    }, [effectiveTrackId, studentTrackId]);

    const totalLessonsInCurriculum = React.useMemo(() => {
        return activeCurriculum.topics.reduce((acc, topic) => acc + (topic.subtopics?.length || 0), 0);
    }, [activeCurriculum]);

    const completedCountForTrack = React.useMemo(() => {
        if (!completedLessons) return 0;
        return completedLessons.filter(id => id.startsWith(effectiveTrackId)).length;
    }, [completedLessons, effectiveTrackId]);

    const progressPercentage = React.useMemo(() => {
        if (totalLessonsInCurriculum === 0) return 0;
        return Math.min(100, Math.round((completedCountForTrack / totalLessonsInCurriculum) * 100));
    }, [completedCountForTrack, totalLessonsInCurriculum]);

    const recommendedLessons = React.useMemo(() => {
        const firstTopic = activeCurriculum.topics[0];
        if (!firstTopic) return [];
        
        const subtopics = firstTopic.subtopics || [];
        return subtopics.slice(0, 2).map((subtopic, index) => ({
            title: subtopic,
            unit: /^unit\s+\d+:/i.test(firstTopic.title)
                ? firstTopic.title
                : `Unit ${firstTopic.number}: ${firstTopic.title}`,
            time: index === 0 ? '15 min' : '20 min',
            xp: index === 0 ? '50' : '75',
            icon: index === 0 ? '⚛️' : '💎',
            href: `/dashboard/curriculum/${activeCurriculum.id}/${firstTopic.id}?tab=theory&lesson=${index + 1}`
        }));
    }, [activeCurriculum]);

    useEffect(() => {
        if (!studentTrackId) return;
        const fetchAnnouncements = async () => {
            try {
                const res = await fetch(`/api/announcements?curriculum=${studentTrackId}`);
                const data = await res.json();
                if (data.success) {
                    setAnnouncements(data.announcements || []);
                }
            } catch (e) {
                console.error('Failed to fetch announcements:', e);
            }
        };
        fetchAnnouncements();
    }, [studentTrackId]);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');
    }, []);

    useEffect(() => {
        const fetchPreview = async () => {
            try {
                const res = await fetch('/api/leaderboard?limit=10', { cache: 'no-store' });
                const data = await res.json();
                if (data.success) {
                    setPreviewLeaderboard(data.leaderboard);
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchPreview();
    }, []);

    const stats = [
        { label: 'Current Level', value: level, icon: Star, color: 'text-amber-400', bg: 'bg-amber-400/10', glow: 'glass-card-amber' },
        { label: 'Total XP', value: xp, icon: Zap, color: 'text-indigo-400', bg: 'bg-indigo-400/10', glow: 'glass-card-indigo' },
        { label: 'Completed', value: completedCountForTrack, icon: BookOpen, color: 'text-emerald-400', bg: 'bg-emerald-400/10', glow: 'glass-card-emerald' },
        { label: 'Day Streak', value: streak.currentStreak, icon: Flame, color: 'text-orange-400', bg: 'bg-orange-400/10', glow: 'glass-card-gold' },
    ];

    const getStreakFireClass = (days: number): string => {
        if (days >= 15) return 'streak-fire streak-fire-legendary';
        if (days >= 8) return 'streak-fire streak-fire-high';
        if (days >= 4) return 'streak-fire streak-fire-mid';
        if (days >= 1) return 'streak-fire streak-fire-low';
        return '';
    };

    return (
        <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            
            {/* Announcements List */}
            {announcements
                .filter(ann => !dismissedAnns.includes(ann.id))
                .map((ann) => (
                    <div 
                        key={ann.id} 
                        className={`relative overflow-hidden rounded-[2rem] border p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 animate-in slide-in-from-top-4 ${
                            ann.category === 'Important' 
                                ? 'bg-rose-500/10 border-rose-500/20 text-rose-200 shadow-lg shadow-rose-500/5' 
                                : ann.category === 'Event'
                                ? 'bg-amber-500/10 border-amber-500/20 text-amber-200 shadow-lg shadow-amber-500/5'
                                : ann.category === 'Update'
                                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200 shadow-lg shadow-emerald-500/5'
                                : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-200 shadow-lg shadow-indigo-500/5'
                        }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-2xl ${
                                ann.category === 'Important' ? 'bg-rose-500/20 text-rose-400' :
                                ann.category === 'Event' ? 'bg-amber-500/20 text-amber-400' :
                                ann.category === 'Update' ? 'bg-emerald-500/20 text-emerald-400' :
                                'bg-indigo-500/20 text-indigo-400'
                            }`}>
                                <Megaphone className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-extrabold text-white text-lg">{ann.title}</span>
                                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                                        ann.category === 'Important' ? 'bg-rose-500/20 text-rose-300' :
                                        ann.category === 'Event' ? 'bg-amber-500/20 text-amber-300' :
                                        ann.category === 'Update' ? 'bg-emerald-500/20 text-emerald-300' :
                                        'bg-indigo-500/20 text-indigo-300'
                                    }`}>{ann.category}</span>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">{ann.content}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setDismissedAnns([...dismissedAnns, ann.id])}
                            className="absolute top-4 right-4 p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ))
            }

            {/* Multi-track Curriculum Switcher */}
            {studentTracks.length > 1 && (
                <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/90 border border-indigo-500/25 backdrop-blur-2xl shadow-2xl shadow-indigo-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in slide-in-from-top-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                            <Layers className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                                    Current Curriculum
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            </div>
                            <span className="text-sm sm:text-base font-extrabold text-white block">
                                {activeCurriculum.title}
                            </span>
                        </div>
                    </div>

                    {/* Track Options Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                        {studentTracks.map((t) => {
                            const clean = t.toLowerCase().trim();
                            const isSelected = effectiveTrackId === clean || (effectiveTrackId.startsWith(clean) && !effectiveTrackId.includes('cie') === !clean.includes('cie'));
                            const trackMeta = clean.includes('a2') 
                                ? { name: 'Edexcel A2', badge: 'Units 4, 5, 6', icon: '🛡️', activeClass: 'bg-pink-500/20 text-pink-300 border-pink-500/40 shadow-pink-500/20' }
                                : clean.includes('as') && clean.includes('edexcel')
                                ? { name: 'Edexcel AS', badge: 'Units 1, 2, 3', icon: '🧬', activeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-purple-500/20' }
                                : clean.includes('igcse') && clean.includes('edexcel')
                                ? { name: 'Edexcel IGCSE', badge: '4CH1', icon: '⚡', activeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-cyan-500/20' }
                                : clean.includes('alevel') || (clean.includes('a2') && clean.includes('cie'))
                                ? { name: 'Cambridge A2', badge: '9701 A2', icon: '💎', activeClass: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-indigo-500/20' }
                                : clean.includes('as')
                                ? { name: 'Cambridge AS', badge: '9701 AS', icon: '🧪', activeClass: 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-blue-500/20' }
                                : { name: 'Cambridge IGCSE', badge: '0620', icon: '⚛️', activeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-emerald-500/20' };

                            return (
                                <button
                                    key={t}
                                    type="button"
                                    onClick={() => handleSwitchTrack(clean)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                                        isSelected
                                            ? `${trackMeta.activeClass} border-current ring-1 ring-current/30 shadow-lg scale-[1.02]`
                                            : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/10'
                                    }`}
                                >
                                    <span>{trackMeta.icon}</span>
                                    <span>{trackMeta.name}</span>
                                    <span className="text-[10px] opacity-75 font-mono">({trackMeta.badge})</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Hero Welcome Section */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 p-8 lg:p-14 shadow-2xl shadow-indigo-500/20 group">
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-center lg:text-left space-y-4 w-full lg:max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-100 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                           <TrendingUp className="w-3 h-3" />
                           Your path to Chemistry Excellence
                        </div>
                        <h1 className="text-3xl lg:text-6xl font-extrabold text-white tracking-tight">
                            {greeting}, <span className="text-indigo-200">{user?.name?.split(' ')[0] || 'Student'}</span> 👋
                        </h1>
                        <p className="text-indigo-100/70 text-base lg:text-lg leading-relaxed font-medium">
                            Ready to master the elements today? You have new topical lessons and practice quizzes available for your <strong>{activeCurriculum.title}</strong> curriculum.
                        </p>

                        {/* Syllabus Progress Bar */}
                        <div className="space-y-2 pt-2 max-w-md mx-auto lg:mx-0">
                            <div className="flex justify-between text-xs font-extrabold text-indigo-200">
                                <span>SYLLABUS PROGRESS</span>
                                <span>{progressPercentage}% ({completedCountForTrack}/{totalLessonsInCurriculum} Lessons)</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden border border-white/5">
                                <div 
                                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full transition-all duration-1000"
                                    style={{ width: `${progressPercentage}%` }}
                                />
                            </div>
                        </div>

                        <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                             <Link 
                                 href="/dashboard/lessons" 
                                 className="group/btn flex items-center gap-2 bg-white text-indigo-700 px-7 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-xl shadow-black/10 active:scale-95"
                             >
                                 Start Learning
                                 <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                             </Link>
                             <Link 
                                 href="/dashboard/mock-exam" 
                                 className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-7 py-4 rounded-2xl font-bold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
                             >
                                 <span>Official Mock Exam</span>
                                 <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full uppercase font-black tracking-wider">Timed</span>
                             </Link>
                             <Link 
                                 href="/dashboard/speed-challenge" 
                                 className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-6 py-4 rounded-2xl font-black hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20 active:scale-95"
                             >
                                 <Zap className="w-5 h-5 fill-current" />
                                 <span>Speed Blitz</span>
                             </Link>
                             <Link 
                                 href="/dashboard/quizzes" 
                                 className="flex items-center gap-2 bg-indigo-500/20 backdrop-blur-md border border-white/20 text-white px-6 py-4 rounded-2xl font-bold hover:bg-indigo-500/30 transition-all active:scale-95"
                             >
                                 Practice Bank
                             </Link>
                        </div>
                    </div>
                    
                    {/* Visual Asset / Illustration Placeholder */}
                    <div className="relative w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl animate-pulse" />
                        <div className="text-8xl lg:text-9xl filter drop-shadow-2xl animate-bounce duration-[3000ms]">
                           🧪
                        </div>
                    </div>
                </div>
 
                {/* Decorative background vectors */}
                <div className="absolute -top-12 -right-12 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Daily Momentum & Speed Blitz Challenge Engine */}
            <DailyStreakChallengeCard />

            {/* Predictive Weak Spot Analytics & Concept Heatmap */}
            <WeakSpotAnalyticsHeatmap curriculumTrackId={effectiveTrackId} />

            {/* Weekly Study Commitment & Progress Ring */}
            <WeeklyStudyGoalCard />

            {/* Spaced Repetition & Mistake Bank Action Card */}
            <div className="glass-card bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 p-6 rounded-[2rem] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl shadow-amber-500/5">
                <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        <Zap className="w-6.5 h-6.5 animate-pulse" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-amber-400 font-black uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                                Leitner Memory Engine
                            </span>
                            {dueMistakesCount > 0 && (
                                <span className="text-[10px] text-rose-400 font-bold bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20 animate-pulse">
                                    {dueMistakesCount} Due Today
                                </span>
                            )}
                        </div>
                        <span className="text-white font-extrabold text-base sm:text-lg block mt-1">
                            {dueMistakesCount > 0
                                ? `${dueMistakesCount} Question${dueMistakesCount > 1 ? 's' : ''} Scheduled for Spaced Review`
                                : totalMistakesCount > 0
                                ? `${totalMistakesCount} Mistake Bank Question${totalMistakesCount > 1 ? 's' : ''} Ready to Master`
                                : 'Daily Memory Mastery & Spaced Review'}
                        </span>
                        <p className="text-xs text-slate-400 mt-0.5 max-w-xl">
                            {dueMistakesCount > 0
                                ? 'Reinforce your long-term memory retention before forgetting curves set in.'
                                : 'Practice targeted recall on tricky concepts with our 5-box Leitner smart repetition schedule.'}
                        </p>
                    </div>
                </div>
                <Link
                    href="/dashboard/quizzes?mode=spaced"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold transition-all active:scale-95 text-sm cursor-pointer shadow-lg shadow-amber-500/20 flex-shrink-0"
                >
                    Launch Smart Review
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Resume Learning Quick Action */}
            {user?.lastStudiedLesson && (
                <div className="glass-card glass-card-indigo border border-indigo-500/10 p-6 rounded-[2rem] flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in slide-in-from-left-4 duration-300">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            <BookOpen className="w-6.5 h-6.5" />
                        </div>
                        <div>
                            <span className="text-[10px] text-slate-500 block font-bold uppercase tracking-wider">Continue Where You Left Off</span>
                            <span className="text-white font-extrabold text-base sm:text-lg block mt-0.5">
                                {(user.lastStudiedLesson as any).lessonTitle}
                            </span>
                            <span className="text-xs text-indigo-300 font-semibold mt-0.5 block">
                                Lesson {(user.lastStudiedLesson as any).lessonNum} • {(user.lastStudiedLesson as any).curriculumId.toUpperCase()}
                            </span>
                        </div>
                    </div>
                    <Link
                        href={`/dashboard/curriculum/${(user.lastStudiedLesson as any).curriculumId}/${(user.lastStudiedLesson as any).topicId}?lesson=${(user.lastStudiedLesson as any).lessonNum}`}
                        className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all active:scale-95 text-sm cursor-pointer"
                    >
                        Resume Learning
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            )}
 
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                {stats.map((stat, i) => (
                    <div 
                        key={i} 
                        className={`glass-card ${stat.glow} p-8 group ${stat.label === 'Day Streak' ? getStreakFireClass(typeof stat.value === 'number' ? stat.value : 0) : ''}`}
                    >
                        <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                            <stat.icon className={`w-7 h-7 ${stat.color}`} />
                        </div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                        <p className="text-3xl font-black text-white flex items-center gap-2">
                            {stat.value}
                            {stat.label === 'Day Streak' && typeof stat.value === 'number' && stat.value > 0 && (
                                <span className="text-2xl animate-pulse">🔥</span>
                            )}
                        </p>
                        
                        {/* Interactive Sparkle Effect */}
                        <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                    </div>
                ))}
            </div>
 
            {/* Content Sections */}
            <div className="grid lg:grid-cols-3 gap-10">
                
                {/* Recommended Lessons List */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center justify-between">
                        <div>
                           <h3 className="text-2xl font-bold text-white mb-1">Recommended for You</h3>
                           <p className="text-sm text-slate-500">Based on your current progress in {activeCurriculum.title}</p>
                        </div>
                        <Link href="/dashboard/lessons" className="text-indigo-400 text-sm font-bold hover:text-indigo-300 transition-colors flex items-center gap-1 group">
                            View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    
                    <div className="grid gap-5">
                        {recommendedLessons.map((lesson, i) => (
                            <Link 
                                href={lesson.href}
                                key={i} 
                                className="glass-card glass-card-indigo p-6 flex items-center gap-6 cursor-pointer group"
                            >
                                <div className="w-20 h-20 bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-105 transition-transform group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 shadow-inner">
                                    {lesson.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-1">{lesson.unit}</p>
                                    <h4 className="font-bold text-xl text-white mb-2 truncate group-hover:text-indigo-100">{lesson.title}</h4>
                                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-slate-600" />
                                            {lesson.time}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Trophy className="w-4 h-4 text-amber-500/60" />
                                            +{lesson.xp} XP
                                        </div>
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/5 group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all">
                                    <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white" />
                                </div>
                            </Link>
                        ))}
                        {recommendedLessons.length === 0 && (
                            <div className="text-slate-400 text-sm py-4">No recommended lessons found for this curriculum.</div>
                        )}
                    </div>
                </div>

                {/* Right Sidebar: Daily Challenges & Leaderboard Preview */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">Daily Challenges</h3>
                        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] space-y-6 shadow-inner shadow-black/40">
                            {dailyChallenges.map((challenge) => (
                                <div key={challenge.id} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-semibold text-white/90">{challenge.title}</span>
                                        <span className="text-xs text-indigo-400 font-bold">+{challenge.xpReward} XP</span>
                                    </div>
                                    <p className="text-xs text-slate-400">{challenge.description}</p>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                                            <div 
                                                className="h-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-400 rounded-full transition-all duration-500" 
                                                style={{ width: `${Math.min(100, (challenge.progress / challenge.target) * 100)}%` }}
                                            />
                                        </div>
                                        <span className="text-xs text-slate-500 font-bold whitespace-nowrap">
                                            {challenge.progress} / {challenge.target}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Leaderboard Preview */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-bold text-white">Top Students</h3>
                            <Link href="/dashboard/leaderboard" className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 group">
                                View Full <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] space-y-4 shadow-inner shadow-black/40">
                            {previewLeaderboard.map((entry, idx) => (
                                <div key={entry.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 last:pb-0">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs ${
                                            idx === 0 ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/25' : 
                                            idx === 1 ? 'bg-slate-300 text-black' : 
                                            idx === 2 ? 'bg-amber-700 text-white' :
                                            'bg-slate-800 text-slate-400'
                                        }`}>
                                            #{idx + 1}
                                        </span>
                                        <span className="text-sm font-semibold truncate text-white/90">{entry.name}</span>
                                    </div>
                                    <span className="font-mono text-xs font-bold text-indigo-400">{entry.xp.toLocaleString()} XP</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
