'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Trophy, Award, CheckCircle2, XCircle, Clock, AlertTriangle, 
  Share2, Download, ArrowRight, RotateCcw, BookOpen, ChevronRight, BarChart3, Check
} from 'lucide-react';
import { ExamPaperProfile, calculateGrade } from '@/data/exams/grade-boundaries';
import { exportElementAsImage } from '@/lib/export-image';
import { ShareableExamModal } from './ShareableExamModal';

interface TopicScore {
  topic: string;
  correct: number;
  total: number;
  percentage: number;
}

interface ExamReportCardProps {
  score: number;
  total: number;
  timeSpentSeconds: number;
  profile: ExamPaperProfile;
  strikeCount: number;
  wasTerminated: boolean;
  topicBreakdown: TopicScore[];
  studentName?: string;
  onRetry: () => void;
  onReviewQuestions: () => void;
  onExit: () => void;
}

export const ExamReportCard: React.FC<ExamReportCardProps> = ({
  score,
  total,
  timeSpentSeconds,
  profile,
  strikeCount,
  wasTerminated,
  topicBreakdown,
  studentName = 'ChemZim Scholar',
  onRetry,
  onReviewQuestions,
  onExit
}) => {
  const [isExporting, setIsExporting] = React.useState(false);
  const [shareModalOpen, setShareModalOpen] = React.useState(false);

  const evaluation = calculateGrade(score, total, profile.id);
  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;
  const avgSecondsPerQ = total > 0 ? Math.round(timeSpentSeconds / total) : 0;

  const handleDownloadCertificate = async () => {
    setIsExporting(true);
    setTimeout(async () => {
      await exportElementAsImage('exam-report-card-container', `${profile.paperCode}-Mock-Result.png`);
      setIsExporting(false);
    }, 200);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300 pb-16">
      
      {/* Certificate / Main Result Card Container (Exportable) */}
      <div 
        id="exam-report-card-container" 
        className="bg-gradient-to-br from-[#0c1222] via-[#090e1a] to-[#060811] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative Background Lighting */}
        <div 
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: evaluation.threshold.color }}
        />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
              {profile.board === 'cambridge' ? '🏛️' : '🎓'}
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 block">
                Official Mock Paper Result • {profile.board.toUpperCase()}
              </span>
              <h1 className="text-xl md:text-2xl font-black text-white">{profile.title}</h1>
              <p className="text-xs text-slate-400">{profile.paperCode} — {profile.paperName}</p>
            </div>
          </div>

          {/* Security / Proctored Badge */}
          <div className="text-right">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
              strikeCount === 0 && !wasTerminated
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
            }`}>
              {strikeCount === 0 && !wasTerminated ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Proctored (Clean Session)</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{strikeCount} Security Strikes</span>
                </>
              )}
            </span>
          </div>
        </div>

        {/* Primary Grade and Score Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 items-center">
          
          {/* Grade Badge */}
          <div className="flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-3xl text-center">
            <span className="text-xs text-slate-400 font-semibold mb-2">Awarded Official Grade</span>
            <div 
              className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl font-black border shadow-2xl transition-transform hover:scale-105 mb-3"
              style={{
                backgroundColor: `${evaluation.threshold.color}15`,
                borderColor: `${evaluation.threshold.color}40`,
                color: evaluation.threshold.color,
                boxShadow: `0 10px 30px ${evaluation.threshold.color}25`
              }}
            >
              {evaluation.grade}
            </div>
            <span className="text-sm font-bold text-white">{evaluation.threshold.label}</span>
            <p className="text-[11px] text-slate-400 mt-1 max-w-xs">{evaluation.threshold.description}</p>
          </div>

          {/* Score & Accuracy Stats */}
          <div className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-400 block mb-1">Total Score</span>
                <span className="text-2xl font-black text-white">{score} / {total}</span>
              </div>
              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-400 block mb-1">Percentage</span>
                <span className="text-2xl font-black text-indigo-400">{evaluation.percentage}%</span>
              </div>
              <div className="bg-white/5 border border-white/5 p-4 rounded-2xl text-center">
                <span className="text-xs text-slate-400 block mb-1">Time Elapsed</span>
                <span className="text-2xl font-black text-emerald-400 font-mono">
                  {minutes}m {seconds}s
                </span>
              </div>
            </div>

            {/* Boundary Distance Advice */}
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-4 text-xs">
              {evaluation.isTopGrade ? (
                <div className="flex items-center gap-3 text-emerald-300">
                  <Trophy className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Top Qualification Standard Achieved!</span>
                    <span className="text-slate-300">You met or exceeded the highest grade threshold for this mock examination.</span>
                  </div>
                </div>
              ) : evaluation.nextThreshold ? (
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block">Next Boundary Target:</span>
                    <span className="font-bold text-white text-sm">
                      Grade {evaluation.nextThreshold.grade}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-indigo-300 font-bold">
                      +{evaluation.nextThreshold.marksNeeded} marks needed ({evaluation.nextThreshold.percentNeeded}% more)
                    </span>
                    <span className="text-slate-500 block text-[10px]">Based on historical exam boundary distributions</span>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Average Pace Indicator */}
            <div className="flex items-center justify-between text-xs text-slate-400 bg-white/[0.02] border border-white/5 px-4 py-2.5 rounded-xl">
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Pacing Average: <strong className="text-white">{avgSecondsPerQ} seconds</strong> per question</span>
              </span>
              <span className="text-slate-500">
                Recommended: {Math.round((profile.durationMinutes * 60) / profile.defaultQuestionCount)}s / question
              </span>
            </div>

          </div>

        </div>

        {/* Topic Breakdown Bar Graph */}
        {topicBreakdown.length > 0 && (
          <div className="border-t border-white/5 pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-indigo-400" />
                <span>Syllabus Topic Performance Analysis</span>
              </h3>
              <Link 
                href="/dashboard/diagnostics"
                className="text-xs text-indigo-300 hover:text-white font-bold flex items-center gap-1 transition-colors"
              >
                <span>Full Weakness Heatmap</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topicBreakdown.map((t, idx) => (
                <div key={idx} className="bg-white/[0.02] border border-white/5 p-3 rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-300 truncate max-w-[200px]">{t.topic}</span>
                    <span className="font-bold text-white">{t.correct}/{t.total} ({t.percentage}%)</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        t.percentage >= 75 ? 'bg-emerald-500' : t.percentage >= 50 ? 'bg-indigo-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${t.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Action Buttons Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-bold text-xs transition-all"
          >
            Return to Hub
          </button>
          
          <button
            onClick={handleDownloadCertificate}
            disabled={isExporting}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-bold text-xs transition-all disabled:opacity-50"
          >
            <Download className="w-4 h-4 text-indigo-400" />
            <span>{isExporting ? 'Generating PNG...' : 'Export Result Card'}</span>
          </button>

          <button
            onClick={() => setShareModalOpen(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-bold text-xs transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-indigo-400" />
            <span>Share Achievement</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onReviewQuestions}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300 font-bold text-xs transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>Review Full Paper Solutions</span>
          </button>

          <button
            onClick={onRetry}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 hover:opacity-90 active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Another Paper</span>
          </button>
        </div>

      </div>

      {/* Shareable Exam Certificate Modal */}
      <ShareableExamModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        studentName={studentName}
        score={score}
        total={total}
        grade={evaluation.grade}
        gradeLabel={evaluation.threshold.label}
        gradeColor={evaluation.threshold.color}
        percentage={evaluation.percentage}
        timeSpentSeconds={timeSpentSeconds}
        profile={profile}
        strikeCount={strikeCount}
      />

    </div>
  );
};
