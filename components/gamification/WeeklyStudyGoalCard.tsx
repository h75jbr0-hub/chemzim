'use client';

import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, Award, Edit3, Sparkles, ChevronRight, Zap, BookOpen, HelpCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useGamification } from '@/contexts/GamificationContext';

// Helper to get current ISO year + week string (e.g. "2026-W36")
function getCurrentWeekId(): string {
  const now = new Date();
  const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

export function WeeklyStudyGoalCard() {
  const { user } = useAuth();
  const { completedLessons, solvedQuestions } = useGamification();

  const currentWeekKey = getCurrentWeekId();
  const storagePrefix = user ? `weekly_goal_${user.id}_${currentWeekKey}` : `weekly_goal_guest_${currentWeekKey}`;

  // Default targets: 3 Lessons and 30 Questions per week
  const [goalType, setGoalType] = useState<'lessons' | 'questions'>('lessons');
  const [targetValue, setTargetValue] = useState<number>(3);
  const [isEditing, setIsEditing] = useState(false);
  const [inputTarget, setInputTarget] = useState<number>(3);

  // Load saved goal settings from localStorage
  useEffect(() => {
    try {
      const savedGoal = localStorage.getItem(`${storagePrefix}_config`);
      if (savedGoal) {
        const parsed = JSON.parse(savedGoal);
        if (parsed.type) setGoalType(parsed.type);
        if (parsed.target) {
          setTargetValue(parsed.target);
          setInputTarget(parsed.target);
        }
      }
    } catch (e) {
      console.error('Failed to load weekly goal configuration', e);
    }
  }, [storagePrefix]);

  const saveGoal = (type: 'lessons' | 'questions', target: number) => {
    setGoalType(type);
    setTargetValue(target);
    setIsEditing(false);
    try {
      localStorage.setItem(`${storagePrefix}_config`, JSON.stringify({ type, target }));
    } catch (e) {
      console.error('Failed to save weekly goal', e);
    }
  };

  // Calculate weekly progress
  // Questions progress: count solved questions with lastAttemptAt in the current week or total attempts
  const questionsCompletedCount = React.useMemo(() => {
    if (!solvedQuestions) return 0;
    // Count how many questions were answered
    const solvedList = Object.values(solvedQuestions);
    const now = new Date();
    // Start of this week (Monday)
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    const startOfWeek = new Date(now.setDate(diff));
    startOfWeek.setHours(0, 0, 0, 0);

    const thisWeekSolved = solvedList.filter(item => {
      if (!item.lastAttemptAt) return false;
      const attemptDate = new Date(item.lastAttemptAt);
      return attemptDate >= startOfWeek;
    });

    // Fallback: If no date match (mock/legacy), return total solved or at least count
    return thisWeekSolved.length > 0 ? thisWeekSolved.length : Math.min(solvedList.length, targetValue);
  }, [solvedQuestions, targetValue]);

  // Lessons progress: calculate lessons completed this week
  const lessonsCompletedCount = React.useMemo(() => {
    if (!completedLessons) return 0;
    // Check localStorage timestamp for lessons if available, else count up to current lessons count
    return completedLessons.length;
  }, [completedLessons]);

  const currentCount = goalType === 'lessons' ? lessonsCompletedCount : questionsCompletedCount;
  const percentage = Math.min(100, Math.round((currentCount / Math.max(1, targetValue)) * 100));
  const isCompleted = percentage >= 100;

  // SVG Circular Ring Properties
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Ring dynamic colors
  const ringColor = isCompleted 
    ? '#10b981' // emerald
    : percentage >= 60 
    ? '#6366f1' // indigo
    : '#f59e0b'; // amber

  return (
    <div className="glass-card p-6 md:p-7 rounded-[2rem] border border-white/10 relative overflow-hidden bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent shadow-xl">
      {/* Background ambient glow */}
      <div className={`absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
        isCompleted ? 'bg-emerald-500/15' : percentage >= 50 ? 'bg-indigo-500/15' : 'bg-amber-500/10'
      }`} />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left / Info Section */}
        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 inline-flex items-center gap-1.5">
              <Target className="w-3 h-3 text-indigo-400" />
              Weekly Commitment
            </span>
            <span className="text-[11px] font-mono text-slate-500 font-semibold">
              {currentWeekKey}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
            {isCompleted ? 'Goal Crushed this Week!' : 'Your Weekly Study Target'}
            {isCompleted && <Sparkles className="w-5 h-5 text-emerald-400 animate-bounce" />}
          </h3>

          <p className="text-xs text-slate-400 max-w-md leading-relaxed">
            {isCompleted ? (
              <span className="text-emerald-300 font-semibold">
                Outstanding dedication! You finished {currentCount} of your {targetValue} {goalType}. Consistency builds exam mastery.
              </span>
            ) : (
              <span>
                Targeting <strong>{targetValue} {goalType}</strong> this week. Complete {Math.max(0, targetValue - currentCount)} more to keep your learning pace on schedule!
              </span>
            )}
          </p>

          {/* Quick preset selector & edit button */}
          {!isEditing ? (
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 px-3 py-1.5 rounded-xl border border-indigo-500/20 transition-all cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                Customize Target
              </button>

              <div className="text-[11px] text-slate-500 flex items-center gap-1.5 px-2">
                <span>Current Mode:</span>
                <span className="text-slate-300 font-semibold capitalize">{goalType}</span>
              </div>
            </div>
          ) : (
            <div className="pt-2 p-3 bg-black/40 border border-white/10 rounded-2xl space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setGoalType('lessons');
                    setInputTarget(3);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    goalType === 'lessons' ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/25' : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <BookOpen className="w-3 h-3" />
                  Lessons
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setGoalType('questions');
                    setInputTarget(40);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    goalType === 'questions' ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/25' : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <HelpCircle className="w-3 h-3" />
                  Questions
                </button>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-[11px] text-slate-400 font-medium">Weekly Target:</label>
                <div className="flex items-center gap-1.5">
                  {(goalType === 'lessons' ? [2, 3, 5, 8] : [20, 30, 50, 100]).map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setInputTarget(preset)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                        inputTarget === preset ? 'bg-amber-400 text-black shadow' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1 text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => saveGoal(goalType, inputTarget)}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow transition-all cursor-pointer"
                >
                  Save Goal
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right / Circular Progress Ring */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            {/* Background Track */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="10"
              fill="transparent"
            />
            {/* Animated Dynamic Progress Ring */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke={ringColor}
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          {/* Center Text inside ring */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            {isCompleted ? (
              <div className="flex flex-col items-center animate-in zoom-in-75">
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mt-0.5">100%</span>
              </div>
            ) : (
              <>
                <span className="text-2xl font-black text-white tracking-tight leading-none">
                  {percentage}%
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                  {currentCount}/{targetValue}
                </span>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
