'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  Award,
  BarChart2,
  Lock,
  MessageCircle,
  Eye,
  BookOpen,
  Check,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ALL_DENTAL_QUESTIONS, DENTAL_CATEGORIES, recordDentalAnswer, extractAllChapters } from '@/lib/dental-store';
import { DentalQuestion, DentalCategory } from '@/data/dental/types';
import { useGamification } from '@/contexts/GamificationContext';
import { useAuth } from '@/contexts/AuthContext';
import { exportElementAsImage } from '@/lib/export-image';
import { Download } from 'lucide-react';

type ExamState = 'SETUP' | 'ACTIVE' | 'RESULTS';

export default function DentalExamPage() {
  const { addXP } = useGamification();
  const { user } = useAuth();
  const hasFullAccess = user?.isAdmin || user?.grade === 'dentistry';

  // Setup options
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedChapter, setSelectedChapter] = useState<string>('All');
  const [allChapters, setAllChapters] = useState<string[]>([]);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(15);
  const [onlyNew, setOnlyNew] = useState<boolean>(false);

  // Share Card state
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);

  // Load chapters when onlyNew toggle changes
  useEffect(() => {
    setAllChapters(extractAllChapters(onlyNew));
    setSelectedChapter('All');
  }, [onlyNew]);

  const handleDownloadCard = async () => {
    setIsExporting(true);
    setTimeout(async () => {
      await exportElementAsImage('dental-share-card', `dental-score-${scorePct}.png`);
      setIsExporting(false);
    }, 150);
  };

  // Active Exam state
  const [examState, setExamState] = useState<ExamState>('SETUP');
  const [examQuestions, setExamQuestions] = useState<DentalQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({}); // questionId -> optionIdx
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);

  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);

  // Timer countdown effect
  useEffect(() => {
    if (examState !== 'ACTIVE' || secondsRemaining <= 0 || timeLimitMinutes === 9999) return;

    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsTimeUp(true);
          finishExam(true); // pass true to indicate it was auto-submitted on timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [examState, secondsRemaining, timeLimitMinutes]);

  const startExam = () => {
    if (!hasFullAccess) return; // Prevent starting if trial

    let pool = ALL_DENTAL_QUESTIONS;
    if (selectedCategory !== 'All') {
      pool = pool.filter(q => q.category === selectedCategory);
    }
    
    if (selectedChapter !== 'All') {
      pool = pool.filter(q => q.explanation.includes(selectedChapter));
    }

    if (onlyNew) {
      pool = pool.filter(q => q.id >= 1075);
    }

    if (pool.length === 0) {
      alert("No questions found matching this custom configuration! Try selecting a different category or chapter.");
      return;
    }

    // Shuffle and pick
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, pool.length));

    setExamQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setIsTimeUp(false);
    setShowReview(false);
    
    if (timeLimitMinutes === 9999) {
      setSecondsRemaining(999999); // Untimed
    } else {
      setSecondsRemaining(timeLimitMinutes * 60);
    }
    setExamState('ACTIVE');
  };

  const handleSelectOption = (optionIdx: number) => {
    if (!examQuestions[currentIndex]) return;
    const qId = examQuestions[currentIndex].id;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const finishExam = (wasTimeout = false) => {
    setExamState('RESULTS');
    if (wasTimeout) {
      setIsTimeUp(true);
    }

    // Record stats & add XP
    let correct = 0;
    examQuestions.forEach(q => {
      const selected = userAnswers[q.id];
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) {
        correct += 1;
        recordDentalAnswer(q.id, q.category, true);
      } else {
        // Either wrong answer or unanswered due to timeout -> record as mistake!
        recordDentalAnswer(q.id, q.category, false);
      }
    });

    // XP calculation: 10 XP per correct answer + 50 bonus for completing exam
    const earnedXP = (correct * 10) + 50;
    addXP(earnedXP, `Dental Exam Completed (${correct}/${examQuestions.length})`);
  };

  // Calculate score
  const totalQuestions = examQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = examQuestions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const scorePct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Group results by category for Diagnostics
  const categoryStats = useMemo(() => {
    const stats: Record<string, { total: number; correct: number }> = {};
    examQuestions.forEach(q => {
      const isCorrect = userAnswers[q.id] === q.correctAnswer;
      if (!stats[q.category]) {
        stats[q.category] = { total: 0, correct: 0 };
      }
      stats[q.category].total += 1;
      if (isCorrect) {
        stats[q.category].correct += 1;
      }
    });
    return stats;
  }, [examQuestions, userAnswers]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
      {/* 🔒 IF TRIAL USER: Display Gilded Lock Screen Immediately */}
      {!hasFullAccess ? (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/dental"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-amber-400" />
                <span>Dental Exam Simulator</span>
              </h1>
              <p className="text-xs text-slate-400">
                Unlock exam simulator for ORE/MFDs/MJDF prep
              </p>
            </div>
          </div>

          <div className="bg-surface/80 border border-border rounded-3xl p-8 md:p-12 backdrop-blur-xl text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto text-2xl shadow-xl shadow-indigo-500/10">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Exam Simulator Locked</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto">
                The full exam simulator requires an active Premium Dental subscription. Contact Hazim Jaber to unlock.
              </p>
            </div>

            {/* Features list */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 text-left space-y-3 max-w-sm mx-auto text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Simulate 20, 50, or 100 question mock exams</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Real-time countdown timer integration</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Full ORE / MFDs score breakdown & history</span>
              </div>
            </div>

            <div className="pt-2 max-w-sm mx-auto">
              <a
                href="https://t.me/dentistry_mcqs_2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Activation from Admin</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* ----------------- STATE 1: SETUP ----------------- */}
          {examState === 'SETUP' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Link
                  href="/dashboard/dental"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                  <h1 className="text-xl font-bold text-white flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-amber-400" />
                    <span>Dental Exam Simulator</span>
                  </h1>
                  <p className="text-xs text-slate-400">
                    Configure your exam session (MFDs, MJDF & ORE style)
                  </p>
                </div>
              </div>

              <div className="bg-surface/80 border border-border rounded-3xl p-6 md:p-8 backdrop-blur-xl space-y-6 shadow-2xl animate-in fade-in duration-500">
                {/* Question Count Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white uppercase tracking-wider block">
                    1. Select Number of Questions
                  </label>
                  <select
                    value={questionCount}
                    onChange={(e) => {
                      const count = Number(e.target.value);
                      setQuestionCount(count);
                      setTimeLimitMinutes(count === 10 ? 10 : count === 20 ? 20 : count === 30 ? 30 : count === 50 ? 50 : 90);
                    }}
                    className="w-full bg-slate-900/80 border border-border rounded-xl p-3 text-xs font-semibold text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value={10}>10 MCQs (Short Session)</option>
                    <option value={20}>20 MCQs</option>
                    <option value={30}>30 MCQs</option>
                    <option value={50}>50 MCQs</option>
                    <option value={100}>100 MCQs (Full Exam)</option>
                  </select>
                </div>

                {/* Specialty Focus Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white uppercase tracking-wider block">
                    2. Specialty Focus (Optional)
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-slate-900/80 border border-border rounded-xl p-3 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="All">Comprehensive Exam (All 6 Specialties)</option>
                    {DENTAL_CATEGORIES.map(cat => (
                      <option key={cat.name} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                {/* Chapter Focus Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white uppercase tracking-wider block">
                    3. Chapter Focus (Optional)
                  </label>
                  <select
                    value={selectedChapter}
                    onChange={(e) => setSelectedChapter(e.target.value)}
                    className="w-full bg-slate-900/80 border border-border rounded-xl p-3 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="All">All Chapters / Topics</option>
                    {allChapters.map(ch => (
                      <option key={ch} value={ch}>{ch}</option>
                    ))}
                  </select>
                </div>

                {/* Custom Time Limit */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white uppercase tracking-wider block">
                    4. Select Time Limit
                  </label>
                  <select
                    value={timeLimitMinutes}
                    onChange={(e) => setTimeLimitMinutes(Number(e.target.value))}
                    className="w-full bg-slate-900/80 border border-border rounded-xl p-3 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value={5}>5 Minutes (Sprint)</option>
                    <option value={10}>10 Minutes</option>
                    <option value={15}>15 Minutes</option>
                    <option value={20}>20 Minutes</option>
                    <option value={30}>30 Minutes</option>
                    <option value={45}>45 Minutes</option>
                    <option value={60}>60 Minutes (Standard)</option>
                    <option value={90}>90 Minutes</option>
                    <option value={9999}>Untimed (Relaxed Study Mode)</option>
                  </select>
                </div>

                {/* Master Extra Questions Only Toggle */}
                <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="space-y-0.5">
                    <label className="text-xs font-bold text-white block">
                      Newly Extracted Questions Only (Master Extra)
                    </label>
                    <span className="text-[10px] text-slate-500 block">
                      Limit this exam session to only the {ALL_DENTAL_QUESTIONS.filter(q => q.id >= 1075).length} custom questions extracted from Master Dentistry books.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOnlyNew(!onlyNew)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
                      onlyNew ? 'bg-amber-500' : 'bg-slate-800'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        onlyNew ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Duration Notice */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-center gap-3 text-amber-300 text-xs">
                  <Clock className="w-5 h-5 shrink-0 text-amber-400" />
                  <span>
                    {timeLimitMinutes === 9999 ? (
                      <span>Exam simulator will run in <strong>Untimed Study Mode</strong>. Take your time!</span>
                    ) : (
                      <span>Exam duration will be set to <strong>{timeLimitMinutes} minutes</strong> ({timeLimitMinutes * 60} seconds).</span>
                    )}
                  </span>
                </div>

                {/* Start Button */}
                <button
                  onClick={startExam}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  Start Exam Now 🚀
                </button>
              </div>
            </div>
          )}

          {/* ----------------- STATE 2: ACTIVE EXAM ----------------- */}
          {examState === 'ACTIVE' && examQuestions[currentIndex] && (
            <div className="space-y-6">
              {/* Header & Timer */}
              <div className="flex items-center justify-between bg-surface/80 border border-border p-4 px-6 rounded-2xl backdrop-blur-xl">
                <div className="text-sm font-bold text-white">
                  Question {currentIndex + 1} of {examQuestions.length}
                </div>

                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-sm font-extrabold border ${
                  secondsRemaining < 300 
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse' 
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                }`}>
                  <Clock className="w-4 h-4" />
                  <span>{formatTime(secondsRemaining)}</span>
                </div>

                <button
                  onClick={() => finishExam(false)}
                  className="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 text-xs font-bold transition-all"
                >
                  Submit Exam
                </button>
              </div>

              {/* Question Card */}
              <div className="bg-surface/80 border border-border rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                <h2 className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
                  {examQuestions[currentIndex].question}
                </h2>

                <div className="space-y-3">
                  {examQuestions[currentIndex].options.map((opt, idx) => {
                    const currentQId = examQuestions[currentIndex].id;
                    const isSelected = userAnswers[currentQId] === idx;

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-500/60 text-amber-600 dark:text-amber-300 font-bold shadow-lg shadow-amber-500/10'
                            : 'bg-white/5 border-border text-slate-800 dark:text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <span className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-border text-foreground/80 text-xs font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm md:text-base leading-snug">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question Palette & Nav */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-surface/60 border border-border hover:bg-white/10 disabled:opacity-30 text-slate-300 font-bold text-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {/* Number Palette */}
                <div className="flex flex-wrap justify-center gap-1.5 max-w-md">
                  {examQuestions.map((q, idx) => {
                    const isAnswered = userAnswers[q.id] !== undefined;
                    const isCurrent = idx === currentIndex;

                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                          isCurrent
                            ? 'bg-amber-500 text-slate-950 font-black ring-2 ring-amber-400'
                            : isAnswered
                            ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/40'
                            : 'bg-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
                  disabled={currentIndex === examQuestions.length - 1}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ----------------- STATE 3: RESULTS ----------------- */}
          {examState === 'RESULTS' && (
            <div className="space-y-8 text-center max-w-2xl mx-auto">
              {/* Dynamic Shareable Card */}
              <div 
                id="dental-share-card"
                className="relative overflow-hidden bg-slate-950 border-2 border-amber-500/30 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(245,158,11,0.1)] text-center space-y-6"
              >
                {/* Glowing Background Orbs */}
                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
                
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-sm font-black text-slate-950 shadow-md">
                      🦷
                    </div>
                    <span className="text-xs font-black tracking-widest text-white uppercase">ChemZim Dental</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    BOARD PREP SIMULATOR
                  </div>
                </div>

                {/* Main Content */}
                <div className="py-4 space-y-4">
                  <Award className="w-16 h-16 text-amber-400 mx-auto drop-shadow-[0_0_15px_rgba(245,158,11,0.4)] animate-bounce" />
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-widest text-amber-500/80 uppercase">
                      Certificate of Performance
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white truncate px-2">
                      {user?.name || 'Dr. Dental Candidate'}
                    </h3>
                  </div>

                  {/* Score circle */}
                  <div className="relative inline-flex items-center justify-center p-8 rounded-full bg-gradient-to-b from-amber-500/10 to-orange-500/5 border border-amber-500/20 shadow-inner w-32 h-32 mx-auto">
                    <div className="text-center">
                      <div className="text-3xl font-black text-amber-400 leading-none">{scorePct}%</div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1">Score</div>
                    </div>
                  </div>

                  {/* Stats Table */}
                  <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                      <div className="text-xs text-slate-400">Result</div>
                      <div className={`text-sm font-extrabold mt-0.5 ${scorePct >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {scorePct >= 70 ? 'PASSED' : 'PRACTICING'}
                      </div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                      <div className="text-xs text-slate-400">Accuracy</div>
                      <div className="text-sm font-extrabold mt-0.5 text-white">
                        {correctCount} / {totalQuestions} Correct
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Branding */}
                <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                  <span>Verify at: chemzim.com/dental</span>
                  <span>Issued on {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
              </div>

              {isTimeUp && (
                <div className="bg-rose-500/10 border border-rose-500/25 text-rose-400 rounded-2xl p-4 text-xs font-semibold max-w-md mx-auto flex items-center gap-3 text-left">
                  <Clock className="w-5 h-5 shrink-0 text-rose-500" />
                  <div>
                    <p className="font-extrabold text-sm mb-0.5">⏰ Time's Up!</p>
                    <p className="text-slate-400 font-medium leading-relaxed">Your exam was automatically submitted. All unanswered questions were marked incorrect and added to your Mistakes Bank.</p>
                  </div>
                </div>
              )}

              {/* Category Performance Diagnostics Panel */}
              <div className="bg-surface/60 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-xl max-w-md mx-auto space-y-4 shadow-xl">
                <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                  <BarChart2 className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">
                    Performance Diagnostics
                  </h3>
                </div>

                <div className="space-y-4 text-left">
                  {Object.entries(categoryStats).map(([catName, stat]) => {
                    const pct = Math.round((stat.correct / stat.total) * 100);
                    
                    // Determine colors based on score percentage
                    let colorClass = "text-rose-400";
                    let barColorClass = "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]";
                    
                    if (pct >= 70) {
                      colorClass = "text-emerald-400";
                      barColorClass = "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]";
                    } else if (pct >= 40) {
                      colorClass = "text-amber-400";
                      barColorClass = "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]";
                    }

                    return (
                      <div key={catName} className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span className="text-slate-300 truncate max-w-[240px]">{catName}</span>
                          <span className={`${colorClass} font-extrabold`}>
                            {stat.correct}/{stat.total} ({pct}%)
                          </span>
                        </div>
                        {/* Progress Bar Container */}
                        <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden border border-white/5">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${barColorClass}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                <button
                  onClick={handleDownloadCard}
                  disabled={isExporting}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer w-full"
                >
                  <Download className="w-4 h-4" />
                  <span>{isExporting ? 'Generating Image...' : 'Download Share Card'}</span>
                </button>
                <button
                  onClick={() => setShowReview(prev => !prev)}
                  className={`px-6 py-3.5 rounded-xl border font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer w-full ${
                    showReview
                      ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>{showReview ? 'Hide Review' : 'Review Answers 🔍'}</span>
                </button>
                <button
                  onClick={() => setExamState('SETUP')}
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition-all cursor-pointer w-full"
                >
                  New Exam 🔄
                </button>
              </div>

              {/* Interactive Review Section */}
              {showReview && (
                <div className="space-y-6 mt-8 text-left border-t border-white/10 pt-8 max-w-2xl mx-auto">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-indigo-400" />
                    <span>Detailed Questions Review</span>
                  </h3>
                  
                  {examQuestions.map((q, idx) => {
                    const selectedIdx = userAnswers[q.id];
                    const isCorrect = selectedIdx === q.correctAnswer;
                    
                    return (
                      <div
                        key={q.id}
                        className={`p-6 rounded-2xl border backdrop-blur-xl transition-all ${
                          isCorrect
                            ? 'bg-emerald-500/[0.02] border-emerald-500/10'
                            : 'bg-rose-500/[0.02] border-rose-500/10'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider bg-white/5 border border-white/5 text-slate-400 mb-2 inline-block">
                              Question {idx + 1} of {examQuestions.length} — {q.category}
                            </span>
                            <h4 className="text-sm font-extrabold text-foreground leading-relaxed mt-1">
                              {q.question}
                            </h4>
                          </div>
                          
                          <span
                            className={`px-2 py-1 rounded-lg border text-[10px] font-black shrink-0 ${
                              isCorrect
                                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                            }`}
                          >
                            {isCorrect ? '✓ CORRECT' : '✗ INCORRECT'}
                          </span>
                        </div>
 
                        {/* Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                          {q.options.map((opt, oIdx) => {
                            const isThisCorrect = oIdx === q.correctAnswer;
                            const isThisSelected = oIdx === selectedIdx;
                            
                            let optStyle = "bg-white/[0.01] border-white/5 text-slate-700 dark:text-slate-300";
                            let icon = null;
                            
                            if (isThisCorrect) {
                              optStyle = "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 dark:text-emerald-400 font-extrabold";
                              icon = <Check className="w-4 h-4 shrink-0 text-emerald-500 dark:text-emerald-400" />;
                            } else if (isThisSelected) {
                              optStyle = "bg-rose-500/10 border-rose-500/20 text-rose-400 font-extrabold";
                              icon = <X className="w-4 h-4 shrink-0 text-rose-400" />;
                            }

                            return (
                              <div
                                key={oIdx}
                                className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-2 ${optStyle}`}
                              >
                                <span>{opt}</span>
                                {icon}
                              </div>
                            );
                          })}
                        </div>

                        {/* Explanation */}
                        {q.explanation && (
                          <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 space-y-2 leading-relaxed">
                            <span className="font-extrabold text-indigo-400 block">📚 Explanation & Study Notes:</span>
                            <div className="whitespace-pre-line font-medium">{q.explanation}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
