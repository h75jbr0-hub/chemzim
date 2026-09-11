'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Stethoscope, 
  BookOpen, 
  Trophy, 
  Bookmark, 
  AlertCircle, 
  ArrowRight, 
  Sparkles,
  Flame,
  CheckCircle2,
  BarChart3,
  Layers,
  GraduationCap,
  Lock,
  Unlock,
  MessageCircle
} from 'lucide-react';
import { DENTAL_CATEGORIES, ALL_DENTAL_QUESTIONS, getDentalUserStats } from '@/lib/dental-store';
import { DentalUserStats } from '@/data/dental/types';
import { useAuth } from '@/contexts/AuthContext';

export default function DentalDashboardPage() {
  const { user } = useAuth();
  const hasFullAccess = user?.isAdmin || user?.grade === 'dentistry';

  const [stats, setStats] = useState<DentalUserStats>({
    answeredCount: 0,
    correctCount: 0,
    categoryStats: {},
    bookmarkedIds: [],
    mistakeIds: []
  });

  useEffect(() => {
    setStats(getDentalUserStats());
  }, []);

  const totalQuestions = hasFullAccess ? ALL_DENTAL_QUESTIONS.length : 5;
  const overallPercentage = stats.answeredCount > 0 
    ? Math.round((stats.correctCount / stats.answeredCount) * 100) 
    : 0;

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Dynamic Access Alert Banner */}
      {!hasFullAccess && (
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-xl animate-fade-in-up">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>Trial Mode Enabled</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold uppercase tracking-wider">Preview</span>
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                You are currently viewing a 5-question preview. Contact management to unlock all 911 clinical questions.
              </p>
            </div>
          </div>
          <a
            href="https://t.me/dentistry_mcqs_2026"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/10 transition-all shrink-0 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Unlock Full Access</span>
          </a>
        </div>
      )}

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-slate-900/80 border border-indigo-500/20 p-8 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MFDs, MJDF, ORE & Master Dentistry</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Dental MCQs <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">Prep Portal</span> 🦷
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Master 911 clinical questions with detailed explanations and Master Dentistry (Vol 1 & 2) textbook references.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/dashboard/dental/study"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <BookOpen className="w-5 h-5" />
              <span>Start Study Mode</span>
            </Link>
            <Link
              href="/dashboard/dental/exam"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>Exam Simulator</span>
            </Link>
          </div>
        </div>

        {/* Hero Progress Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5 backdrop-blur-sm">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Questions</div>
            <div className="text-2xl font-bold text-white mt-1">
              {hasFullAccess ? ALL_DENTAL_QUESTIONS.length : "5 (Preview)"}
            </div>
            <div className="text-xs text-indigo-400 mt-0.5">Enriched with references</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5 backdrop-blur-sm">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Questions Answered</div>
            <div className="text-2xl font-bold text-emerald-400 mt-1">{stats.answeredCount}</div>
            <div className="text-xs text-slate-400 mt-0.5">
              {hasFullAccess ? `${Math.round((stats.answeredCount / ALL_DENTAL_QUESTIONS.length) * 100)}% of total` : 'Trial practice'}
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5 backdrop-blur-sm">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Accuracy Rate</div>
            <div className="text-2xl font-bold text-amber-400 mt-1">{overallPercentage}%</div>
            <div className="text-xs text-slate-400 mt-0.5">{stats.correctCount} correct answers</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5 backdrop-blur-sm">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Saved & Mistakes</div>
            <div className="text-2xl font-bold text-rose-400 mt-1">{stats.mistakeIds.length} / {stats.bookmarkedIds.length}</div>
            <div className="text-xs text-slate-400 mt-0.5">Mistakes / Bookmarked</div>
          </div>
        </div>
      </div>

      {/* Modes Grid */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-400" />
          <span>Practice & Exam Modes</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Study Mode */}
          <Link 
            href="/dashboard/dental/study"
            className="group relative rounded-2xl bg-surface/60 border border-border hover:border-indigo-500/50 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-400 transition-colors">
              Study Mode
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
              Practice questions topic by topic with instant clinical explanations & references.
            </p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform">
              <span>Start Practice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
 
          {/* Card 2: Exam Simulator */}
          <Link 
            href="/dashboard/dental/exam"
            className="group relative rounded-2xl bg-surface/60 border border-border hover:border-amber-500/50 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-amber-400 transition-colors">
              Exam Simulator
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
              Simulate real MFDs/ORE exam environments with 50/100 random questions & countdown timer.
            </p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Launch Simulator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
 
          {/* Card 3: Mistakes Bank */}
          <Link 
            href="/dashboard/dental/study?filter=mistakes"
            className="group relative rounded-2xl bg-surface/60 border border-border hover:border-rose-500/50 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-rose-400 transition-colors flex items-center justify-between">
              <span>Mistakes Bank</span>
              {stats.mistakeIds.length > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-bold border border-rose-500/30">
                  {stats.mistakeIds.length}
                </span>
              )}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
              Review and retry questions you answered incorrectly in past sessions.
            </p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-rose-400 group-hover:translate-x-1 transition-transform">
              <span>Review Mistakes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
 
          {/* Card 4: Bookmarks */}
          <Link 
            href="/dashboard/dental/study?filter=bookmarks"
            className="group relative rounded-2xl bg-surface/60 border border-border hover:border-emerald-500/50 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Bookmark className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-400 transition-colors flex items-center justify-between">
              <span>Saved Bookmarks</span>
              {stats.bookmarkedIds.length > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  {stats.bookmarkedIds.length}
                </span>
              )}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
              Access important questions you bookmarked during study sessions.
            </p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
              <span>View Bookmarks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>

      {/* Categories Breakdown Grid */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-indigo-400" />
          <span>Dental Specialties</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DENTAL_CATEGORIES.map((cat) => {
            const catQuestions = ALL_DENTAL_QUESTIONS.filter(q => q.category === cat.name);
            const catUserStats = stats.categoryStats[cat.name] || { answered: 0, correct: 0 };
            const progressPct = catQuestions.length > 0 
              ? Math.round((catUserStats.answered / catQuestions.length) * 100) 
              : 0;

            return (
              <Link
                key={cat.name}
                href={`/dashboard/dental/study?category=${encodeURIComponent(cat.name)}`}
                className="group rounded-2xl bg-surface/40 border border-border hover:border-indigo-500/40 p-6 backdrop-blur-xl transition-all duration-200 hover:bg-surface/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{cat.icon}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-border">
                      {hasFullAccess ? `${catQuestions.length} Questions` : 'Trial Preview'}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-indigo-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Progress</span>
                    <span className="text-indigo-400 font-bold">{progressPct}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-sky-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
