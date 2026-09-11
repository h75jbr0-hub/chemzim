'use client';

import React from 'react';
import { Printer, X, Award, CheckCircle2, BookOpen, AlertCircle, TrendingUp, Calendar, Zap, Sparkles } from 'lucide-react';

interface StudentParentReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: any;
  teacherRemarks?: string;
}

export function StudentParentReportModal({
  isOpen,
  onClose,
  student,
  teacherRemarks
}: StudentParentReportModalProps) {
  if (!isOpen || !student) return null;

  const handlePrint = () => {
    window.print();
  };

  const scores = Object.values(student.quizScores || {}) as number[];
  const avgScore = scores.length > 0 
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) 
    : 0;
  const completedLessonsCount = student.completedLessons?.length || 0;
  const quizzesTakenCount = scores.length;
  const xp = student.xp || 0;
  const level = student.level || 1;
  const activeDays = student.streak?.totalDaysActive || 0;
  const longestStreak = student.streak?.longestStreak || 0;
  const mistakeCount = student.mistakeInbox?.length || 0;

  // Grade/Track resolution
  const trackNames: Record<string, string> = {
    'cie-igcse': 'Cambridge IGCSE Chemistry (0620 / 0971)',
    'cie-as': 'Cambridge International AS-Level Chemistry (9701)',
    'cie-alevel': 'Cambridge International A-Level Chemistry (9701)',
    'edexcel-igcse': 'Pearson Edexcel International GCSE Chemistry',
    'edexcel-as': 'Pearson Edexcel International AS Chemistry',
    'edexcel-a2': 'Pearson Edexcel International A2 Chemistry',
    'dentistry': 'Dental Chemistry & Clinical Science'
  };

  const currentGrade = student.grade || 'cie-igcse';
  const trackTitle = trackNames[currentGrade] || currentGrade.toUpperCase();

  // Performance status badge
  const getOverallStatus = () => {
    if (avgScore >= 85 || (xp > 1500 && avgScore >= 75)) {
      return { label: 'Outstanding (A*)', color: 'text-emerald-600 border-emerald-500 bg-emerald-50', icon: '🌟' };
    }
    if (avgScore >= 70) {
      return { label: 'Strong Progress (Grade A)', color: 'text-blue-600 border-blue-500 bg-blue-50', icon: '✨' };
    }
    if (avgScore >= 55) {
      return { label: 'Good Competency (Grade B)', color: 'text-indigo-600 border-indigo-500 bg-indigo-50', icon: '📈' };
    }
    return { label: 'Developing / Building Foundations', color: 'text-amber-600 border-amber-500 bg-amber-50', icon: '🎯' };
  };

  const status = getOverallStatus();
  const remarksToDisplay = teacherRemarks || student.notes || 'The student is demonstrating consistent discipline and actively progressing through topical worksheets and interactive assessments.';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 print:p-0 print:bg-white print:static print:inset-auto">
      {/* Modal Container */}
      <div className="bg-[#0b0f19] border border-white/10 rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col print:border-none print:shadow-none print:max-w-none print:w-full print:h-auto print:max-h-none print:rounded-none print:bg-white print:text-black">
        
        {/* Screen Header (Hidden on Print) */}
        <div className="bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900 p-5 flex items-center justify-between border-b border-white/10 flex-shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Student Official Academic Progress Report</h3>
              <p className="text-xs text-slate-400">Printable A4 dossier for parents & academic records</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 cursor-pointer active:scale-95"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Report Document Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent] print:overflow-visible print:p-8 print:space-y-6 print:text-black print:bg-white">
          
          {/* Printable Report Header */}
          <div className="border-b-2 border-indigo-500/20 pb-6 print:border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚛️</span>
                <span className="text-xl font-black tracking-tight text-white print:text-black uppercase">ChemZim Academy</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 print:border-slate-400 print:text-slate-800">
                  Official Academic Report
                </span>
              </div>
              <p className="text-xs text-slate-400 print:text-slate-600 font-medium">
                Advanced Chemistry Learning Management & Assessment Platform • Master Hazim Jaber
              </p>
            </div>

            <div className="text-right text-xs text-slate-400 print:text-slate-700 space-y-0.5">
              <div>Issue Date: <strong className="text-white print:text-black">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</strong></div>
              <div>Report Reference: <strong className="font-mono text-indigo-400 print:text-black">CZ-{student.username?.toUpperCase() || 'STD'}</strong></div>
            </div>
          </div>

          {/* Student Dossier Identification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/[0.02] border border-white/5 p-5 rounded-2xl print:bg-slate-50 print:border-slate-200">
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-indigo-400 print:text-indigo-800 uppercase tracking-wider">Student Information</div>
              <div className="text-lg font-black text-white print:text-black flex items-center gap-2">
                {student.name}
                <span className="text-xs font-mono font-normal text-slate-400 print:text-slate-600">(@{student.username})</span>
              </div>
              <div className="text-xs text-slate-300 print:text-slate-700">
                Registered Curriculum: <strong className="text-white print:text-black">{trackTitle}</strong>
              </div>
              <div className="text-xs text-slate-400 print:text-slate-600">
                Enrollment Date: {student.createdAt ? new Date(student.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Registered Member'}
              </div>
            </div>

            <div className="space-y-2 md:border-l md:border-white/5 md:pl-5 print:md:border-slate-200">
              <div className="text-[11px] font-bold text-indigo-400 print:text-indigo-800 uppercase tracking-wider">Overall Academic Standing</div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-xl border text-sm font-bold ${status.color}`}>
                <span>{status.icon}</span>
                <span>{status.label}</span>
              </div>
              <div className="text-xs text-slate-400 print:text-slate-600 flex items-center gap-3 pt-1">
                <span>Account Status: <strong className="text-emerald-400 print:text-emerald-700 font-bold">{student.isActive ? 'Active & Enrolled' : 'Suspended'}</strong></span>
                <span>•</span>
                <span>Authorized Devices: <strong className="text-white print:text-black">{student.devices?.length || 1}</strong></span>
              </div>
            </div>
          </div>

          {/* Key Metrics 4-Column Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 print:grid-cols-4">
            <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-center print:bg-slate-50 print:border-slate-200">
              <span className="text-[10px] text-indigo-300 print:text-indigo-900 uppercase font-bold tracking-wider block mb-1">
                Completed Lessons
              </span>
              <span className="text-2xl font-black text-white print:text-black">
                {completedLessonsCount}
              </span>
              <span className="text-[10px] text-slate-400 print:text-slate-500 block mt-0.5">Topical Units</span>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-center print:bg-slate-50 print:border-slate-200">
              <span className="text-[10px] text-emerald-300 print:text-emerald-900 uppercase font-bold tracking-wider block mb-1">
                Average Assessment
              </span>
              <span className="text-2xl font-black text-emerald-400 print:text-emerald-700">
                {avgScore > 0 ? `${avgScore}%` : 'N/A'}
              </span>
              <span className="text-[10px] text-slate-400 print:text-slate-500 block mt-0.5">From {quizzesTakenCount} Quizzes</span>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 text-center print:bg-slate-50 print:border-slate-200">
              <span className="text-[10px] text-amber-300 print:text-amber-900 uppercase font-bold tracking-wider block mb-1">
                XP & Mastery Level
              </span>
              <span className="text-2xl font-black text-amber-400 print:text-amber-700">
                Lvl {level}
              </span>
              <span className="text-[10px] text-slate-400 print:text-slate-500 block mt-0.5">{xp.toLocaleString()} Total XP</span>
            </div>

            <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-center print:bg-slate-50 print:border-slate-200">
              <span className="text-[10px] text-purple-300 print:text-purple-900 uppercase font-bold tracking-wider block mb-1">
                Study Consistency
              </span>
              <span className="text-2xl font-black text-purple-400 print:text-purple-700">
                {activeDays}d
              </span>
              <span className="text-[10px] text-slate-400 print:text-slate-500 block mt-0.5">Max Streak: {longestStreak}d</span>
            </div>
          </div>

          {/* Detailed Progress Bars */}
          <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl space-y-4 print:bg-slate-50 print:border-slate-200">
            <h4 className="text-xs font-bold text-white print:text-black uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-400 print:text-indigo-800" />
              Syllabus Competency Breakdown
            </h4>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-slate-300 print:text-slate-800 mb-1">
                  <span>Theoretical Understanding & Concept Mastery</span>
                  <span className="text-indigo-400 print:text-black">{Math.min(100, Math.round(completedLessonsCount * 7.5))}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden print:bg-slate-200">
                  <div 
                    className="h-full bg-indigo-500 rounded-full print:bg-indigo-600"
                    style={{ width: `${Math.min(100, Math.max(8, completedLessonsCount * 7.5))}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-300 print:text-slate-800 mb-1">
                  <span>Exam Practice & Question Accuracy</span>
                  <span className="text-emerald-400 print:text-black">{avgScore > 0 ? `${avgScore}%` : 'Assessment In Progress'}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden print:bg-slate-200">
                  <div 
                    className="h-full bg-emerald-500 rounded-full print:bg-emerald-600"
                    style={{ width: `${Math.min(100, Math.max(5, avgScore))}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-300 print:text-slate-800 mb-1">
                  <span>Active Retention & Memory Mastery (Leitner Schedule)</span>
                  <span className="text-amber-400 print:text-black">
                    {mistakeCount === 0 ? 'Optimal (Zero Unresolved Mistakes)' : `${mistakeCount} Items in Active Review`}
                  </span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden print:bg-slate-200">
                  <div 
                    className="h-full bg-amber-500 rounded-full print:bg-amber-600"
                    style={{ width: `${Math.max(15, Math.min(100, 100 - (mistakeCount * 10)))}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Remarks & Recommendations */}
          <div className="bg-amber-500/5 border border-amber-500/20 p-5 rounded-2xl space-y-2.5 print:bg-white print:border-slate-300">
            <h4 className="text-xs font-bold text-amber-400 print:text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
              <span>👨‍🏫 Teacher Assessment & Academic Guidance</span>
            </h4>
            <div className="text-xs text-slate-200 print:text-slate-800 whitespace-pre-wrap leading-relaxed italic bg-white/[0.01] p-3 rounded-xl border border-white/5 print:border-slate-200 print:bg-slate-50">
              &ldquo;{remarksToDisplay}&rdquo;
            </div>
          </div>

          {/* Official Stamp & Sign-off */}
          <div className="pt-4 border-t border-white/10 print:border-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-slate-400 print:text-slate-700">
            <div className="space-y-1">
              <p className="font-semibold text-slate-300 print:text-black">Master Hazim Jaber</p>
              <p className="text-[11px] text-slate-500 print:text-slate-600">Lead Chemistry Specialist • ChemZim Academy</p>
              <p className="text-[10px] text-slate-500 print:text-slate-600">Academic Verification ID: #CZ-AUTH-{student.id?.slice(0, 8).toUpperCase()}</p>
            </div>

            <div className="text-center sm:text-right border border-dashed border-white/20 print:border-slate-400 p-3 rounded-xl min-w-[160px]">
              <div className="text-[10px] uppercase font-bold text-indigo-400 print:text-black tracking-wider">Official Stamp</div>
              <div className="font-serif text-base font-black text-white print:text-black mt-1">CHEMZIM VERIFIED</div>
              <div className="text-[9px] text-slate-500 print:text-slate-600 font-mono">Academic Excellence</div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions (Hidden on Print) */}
        <div className="p-4 bg-white/[0.01] border-t border-white/5 flex items-center justify-between print:hidden flex-shrink-0">
          <span className="text-xs text-slate-500">
            Click &ldquo;Print / Save as PDF&rdquo; to produce a formatted A4 parent report.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
