'use client';

import React, { useState, useEffect, useTransition, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  ArrowLeft, 
  BookOpen, 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  Shuffle, 
  Lightbulb, 
  Filter, 
  Sparkles,
  RotateCcw,
  Trophy,
  AlertCircle,
  Lock,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ALL_DENTAL_QUESTIONS, 
  DENTAL_CATEGORIES, 
  filterDentalQuestions, 
  recordDentalAnswer, 
  toggleDentalBookmark, 
  getDentalUserStats,
  extractAllChapters 
} from '@/lib/dental-store';
import { DentalQuestion, DentalCategory, DentalLevel, DentalUserStats } from '@/data/dental/types';
import { useGamification } from '@/contexts/GamificationContext';
import { useAuth } from '@/contexts/AuthContext';

function DentalStudyContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialFilter = searchParams.get('filter');

  const { addXP } = useGamification();
  const { user, isLoading } = useAuth();
  const hasFullAccess = user?.isAdmin || user?.grade === 'dentistry';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedChapter, setSelectedChapter] = useState<string>('All');
  const [allChapters, setAllChapters] = useState<string[]>([]);
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(initialFilter === 'bookmarks');
  const [onlyMistakes, setOnlyMistakes] = useState<boolean>(initialFilter === 'mistakes');
  const [onlyNew, setOnlyNew] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [filteredQuestions, setFilteredQuestions] = useState<DentalQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [showLockModal, setShowLockModal] = useState<boolean>(false);

  const [userStats, setUserStats] = useState<DentalUserStats>({
    answeredCount: 0,
    correctCount: 0,
    categoryStats: {},
    bookmarkedIds: [],
    mistakeIds: []
  });

  useEffect(() => {
    setUserStats(getDentalUserStats());
  }, []);

  // Reload chapters when onlyNew toggle changes
  useEffect(() => {
    setAllChapters(extractAllChapters(onlyNew));
    setSelectedChapter('All');
  }, [onlyNew]);

  // Update questions whenever filters change
  useEffect(() => {
    if (isLoading) return; // Wait for auth load to prevent premature slicing

    const list = filterDentalQuestions({
      category: selectedCategory,
      level: selectedLevel,
      chapter: selectedChapter,
      onlyBookmarks,
      onlyMistakes,
      onlyNew,
      searchQuery
    });
    
    // If not full access, slice list to max 5 questions
    const finalQuestions = hasFullAccess ? list : list.slice(0, 5);
    
    setFilteredQuestions(finalQuestions);
    
    // Restore last active question from localStorage if it exists in the list
    let startIdx = 0;
    const lastQIdStr = localStorage.getItem('chemzim_dental_study_last_question_id');
    if (lastQIdStr) {
      const lastQId = parseInt(lastQIdStr, 10);
      const savedIndex = finalQuestions.findIndex(q => q.id === lastQId);
      if (savedIndex !== -1) {
        startIdx = savedIndex;
      }
    }
    
    setCurrentIndex(startIdx);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
    setShowLockModal(false);
  }, [selectedCategory, selectedLevel, selectedChapter, onlyBookmarks, onlyMistakes, onlyNew, searchQuery, hasFullAccess, isLoading]);

  const currentQuestion = filteredQuestions[currentIndex];
  const isBookmarked = currentQuestion ? userStats.bookmarkedIds.includes(currentQuestion.id) : false;

  // Persist current question ID to localStorage
  useEffect(() => {
    if (currentQuestion && !isLoading) {
      localStorage.setItem('chemzim_dental_study_last_question_id', String(currentQuestion.id));
    }
  }, [currentQuestion, isLoading]);

  const handleSelectOption = (idx: number) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOption(idx);
    setIsAnswered(true);
    setShowExplanation(true);

    const isCorrect = idx === currentQuestion.correctAnswer;
    const updatedStats = recordDentalAnswer(currentQuestion.id, currentQuestion.category, isCorrect);
    setUserStats(updatedStats);

    if (isCorrect) {
      addXP(15, 'Dental Question Answered');
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowExplanation(false);
    } else if (!hasFullAccess) {
      setShowLockModal(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowExplanation(false);
    }
  };

  const handleRandom = () => {
    if (filteredQuestions.length <= 1) return;
    let rand = Math.floor(Math.random() * filteredQuestions.length);
    if (rand === currentIndex) rand = (rand + 1) % filteredQuestions.length;
    setCurrentIndex(rand);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
  };

  const handleToggleBookmark = () => {
    if (!currentQuestion) return;
    toggleDentalBookmark(currentQuestion.id);
    setUserStats(getDentalUserStats());
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface/60 border border-border p-4 sm:px-6 rounded-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/dental"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-foreground flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>Dental Study Mode</span>
              {!hasFullAccess && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold uppercase tracking-wider">
                  Trial
                </span>
              )}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {hasFullAccess ? `${filteredQuestions.length} Questions matching criteria` : '5 Preview questions unlocked'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRandom}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 transition-all"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Random Question</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-surface/40 border border-border p-4 rounded-2xl backdrop-blur-xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
          <Filter className="w-3.5 h-3.5 text-indigo-400" />
          <span>Filters</span>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-surface border border-border rounded-xl px-3 py-2 text-xs font-medium text-foreground focus:outline-none focus:border-indigo-500 col-span-2 sm:col-span-auto w-full sm:w-auto"
          >
            <option value="All">All Specialties (6)</option>
            {DENTAL_CATEGORIES.map(cat => (
              <option key={cat.name} value={cat.name}>{cat.name}</option>
            ))}
          </select>

          {/* Level Dropdown */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="bg-surface border border-border rounded-xl px-3 py-2 text-xs font-medium text-foreground focus:outline-none focus:border-indigo-500 w-full sm:w-auto"
          >
            <option value="All">All Difficulty</option>
            <option value="Level 1">Level 1 (Core)</option>
            <option value="Level 2">Level 2 (Intermediate)</option>
            <option value="Level 3">Level 3 (Advanced)</option>
          </select>

          {/* Chapter Dropdown */}
          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="bg-surface border border-border rounded-xl px-3 py-2 text-xs font-medium text-foreground focus:outline-none focus:border-indigo-500 w-full sm:w-auto sm:max-w-[200px] truncate"
          >
            <option value="All">All Chapters</option>
            {allChapters.map(ch => (
              <option key={ch} value={ch} title={ch}>{ch}</option>
            ))}
          </select>

          {/* Bookmarks Toggle */}
          <button
            onClick={() => setOnlyBookmarks(!onlyBookmarks)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 w-full sm:w-auto ${
              onlyBookmarks 
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                : 'bg-white/5 text-slate-400 border-border hover:bg-white/10'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Bookmarked ({userStats.bookmarkedIds.length})</span>
          </button>

          {/* Mistakes Toggle */}
          <button
            onClick={() => setOnlyMistakes(!onlyMistakes)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 w-full sm:w-auto col-span-2 sm:col-span-auto ${
              onlyMistakes 
                ? 'bg-rose-500/20 text-rose-400 border-rose-500/40' 
                : 'bg-white/5 text-slate-400 border-border hover:bg-white/10'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Mistakes ({userStats.mistakeIds.length})</span>
          </button>

          {/* New / Extra Questions Toggle */}
          <button
            onClick={() => setOnlyNew(!onlyNew)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 w-full sm:w-auto ${
              onlyNew 
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 shadow-lg shadow-amber-500/5' 
                : 'bg-white/5 text-slate-400 border-border hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Extra ({ALL_DENTAL_QUESTIONS.filter(q => q.id >= 1075).length})</span>
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      {filteredQuestions.length === 0 ? (
        <div className="text-center py-16 bg-surface/30 border border-border rounded-3xl p-8 backdrop-blur-xl">
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 text-2xl">
            🔍
          </div>
          <h3 className="text-lg font-bold text-white">No questions found matching your filter criteria</h3>
          <p className="text-slate-400 text-sm mt-1">Try selecting a different specialty or clearing filters.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedLevel('All');
              setOnlyBookmarks(false);
              setOnlyMistakes(false);
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs font-bold hover:bg-indigo-500/30 transition-all"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Progress Bar & Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="font-semibold text-indigo-400 flex items-center gap-2">
              <span>Question {currentIndex + 1} of {filteredQuestions.length}</span>
              <span className="text-slate-500 dark:text-slate-400 font-mono text-[10px] bg-slate-100 dark:bg-slate-900 border border-border px-1.5 py-0.5 rounded-md">ID: #{currentQuestion.id}</span>
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
                {currentQuestion.category}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">
                {currentQuestion.level}
              </span>
            </div>
          </div>

          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-sky-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="bg-surface/80 border border-border rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden"
            >
              {/* Question Text */}
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
                  {currentQuestion.question}
                </h2>
                <button
                  onClick={handleToggleBookmark}
                  className={`p-2.5 rounded-xl border transition-all shrink-0 ${
                    isBookmarked
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 shadow-lg shadow-amber-500/10'
                      : 'bg-white/5 text-slate-400 border-border hover:bg-white/10 hover:text-white'
                  }`}
                  title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-amber-400' : ''}`} />
                </button>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((opt, idx) => {
                  let stateStyle = "bg-white/5 border-border hover:bg-white/10 text-slate-800 dark:text-slate-200";

                  if (isAnswered) {
                    if (idx === currentQuestion.correctAnswer) {
                      stateStyle = "bg-emerald-500/20 border-emerald-500/60 text-emerald-600 dark:text-emerald-300 font-bold shadow-lg shadow-emerald-500/10";
                    } else if (idx === selectedOption) {
                      stateStyle = "bg-rose-500/20 border-rose-500/60 text-rose-600 dark:text-rose-300 font-bold";
                    } else {
                      stateStyle = "bg-white/5 border-border opacity-50 text-slate-500 dark:text-slate-400";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 ${stateStyle}`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-border text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-xs sm:text-sm md:text-base leading-snug">{opt}</span>
                      </div>

                      {isAnswered && (
                        <div>
                          {idx === currentQuestion.correctAnswer && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                          )}
                          {idx === selectedOption && idx !== currentQuestion.correctAnswer && (
                            <XCircle className="w-5 h-5 text-rose-500 dark:text-rose-400 shrink-0" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Callout Box */}
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 pt-6 border-t border-border space-y-3"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-500 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Clinical Explanation & Textbook Reference</span>
                  </div>

                  <div className="bg-indigo-500/5 dark:bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-5 backdrop-blur-md text-slate-700 dark:text-slate-200 text-sm leading-relaxed whitespace-pre-line shadow-inner">
                    {currentQuestion.explanation || "Detailed clinical rationale provided in Master Dentistry textbook."}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-surface/60 border border-border hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-slate-300 font-bold text-sm transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
              Use arrow buttons to navigate
            </span>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:pointer-events-none text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 🔒 Locked Preview Modal Popup */}
      {showLockModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-lg bg-surface/90 border border-indigo-500/30 rounded-[2rem] p-8 text-center space-y-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto text-2xl shadow-xl shadow-indigo-500/10">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Unlock All 911 Dental Questions!</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto">
                You have reached the end of the trial preview. Upgrade your subscription to unlock complete clinical sets.
              </p>
            </div>

            {/* Features Checklist */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 text-left space-y-2.5 max-w-sm mx-auto text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Full access to all 911 clinical questions</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Textbook page references (Master Dentistry)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Full Exam Simulator with Custom Timers</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Weak-areas and mistakes history tracking</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://t.me/dentistry_mcqs_2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Activation from Admin</span>
              </a>
              <button
                onClick={() => setShowLockModal(false)}
                className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white font-bold text-xs transition-all"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default function DentalStudyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050510] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    }>
      <DentalStudyContent />
    </Suspense>
  );
}
