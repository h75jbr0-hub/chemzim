'use client';

import React, { useState } from 'react';
import { 
  Trophy, Award, Clock, CheckCircle2, Share2, Download, Copy, Check, X, 
  Sparkles, ShieldCheck, Flame, ExternalLink
} from 'lucide-react';
import { ExamPaperProfile } from '@/data/exams/grade-boundaries';
import { exportElementAsImage } from '@/lib/export-image';

interface ShareableExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  score: number;
  total: number;
  grade: string;
  gradeLabel: string;
  gradeColor: string;
  percentage: number;
  timeSpentSeconds: number;
  profile: ExamPaperProfile;
  strikeCount: number;
}

export const ShareableExamModal: React.FC<ShareableExamModalProps> = ({
  isOpen,
  onClose,
  studentName,
  score,
  total,
  grade,
  gradeLabel,
  gradeColor,
  percentage,
  timeSpentSeconds,
  profile,
  strikeCount,
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;
  const timeFormatted = `${minutes}m ${seconds}s`;
  const isTopTier = grade === 'A*' || grade === '9' || grade === '8' || grade === 'A';

  const shareText = `🎓 I just completed the official ${profile.title} (${profile.paperCode}) on ChemZim and scored ${score}/${total} (${percentage}%) with Grade ${grade}! ⚡ Master Chemistry at https://chemzim.vercel.app`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleExportPNG = async () => {
    setIsExporting(true);
    setTimeout(async () => {
      await exportElementAsImage('shareable-performance-card', `${profile.paperCode}-Grade-${grade}-ChemZim.png`);
      setIsExporting(false);
    }, 200);
  };

  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleShareTelegram = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent('https://chemzim.vercel.app')}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="bg-[#0b101e] border border-white/10 rounded-3xl max-w-xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Shareable Performance Certificate</span>
          </span>
          <h2 className="text-xl font-bold text-white">Share Your Exam Achievement</h2>
          <p className="text-xs text-slate-400">
            Export a high-resolution performance badge or share your official result with friends and teachers.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* THE EXPORTABLE SHARE CARD (Captured via html2canvas)                       */}
        {/* ========================================================================= */}
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <div
            id="shareable-performance-card"
            className="bg-gradient-to-br from-[#0c1527] via-[#070b16] to-[#04070e] p-6 md:p-7 space-y-5 relative select-none"
            style={{ minWidth: '420px' }}
          >
            {/* Glowing Accent Glow */}
            <div 
              className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl opacity-25 pointer-events-none"
              style={{ backgroundColor: gradeColor }}
            />
            <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-base shadow-lg shadow-indigo-500/30">
                  🧪
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-black tracking-wider text-white text-sm">CHEMZIM</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      EXAM SIMULATOR
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Official Assessment Record</span>
                </div>
              </div>

              {/* Student Identity */}
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">Candidate:</span>
                <span className="text-xs font-bold text-slate-200">{studentName || 'ChemZim Student'}</span>
              </div>
            </div>

            {/* Centerpiece: Exam Details & Grade Spotlight */}
            <div className="grid grid-cols-12 gap-4 items-center relative z-10 py-1">
              
              {/* Grade Shield / Badge */}
              <div className="col-span-5 flex flex-col items-center justify-center p-3.5 bg-white/[0.03] border border-white/10 rounded-2xl text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Awarded Grade
                </span>
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black border shadow-2xl transition-transform"
                  style={{
                    backgroundColor: `${gradeColor}18`,
                    borderColor: `${gradeColor}50`,
                    color: gradeColor,
                    boxShadow: `0 8px 24px ${gradeColor}30`
                  }}
                >
                  {grade}
                </div>
                <span className="text-xs font-black text-white mt-2">{gradeLabel}</span>
                <span className="text-[9px] text-slate-400 font-mono mt-0.5">{percentage}% Mastered</span>
              </div>

              {/* Exam Info & Metrics */}
              <div className="col-span-7 space-y-2.5">
                <div>
                  <span className="text-[10px] font-black uppercase text-indigo-400 block tracking-wider">
                    {profile.board.toUpperCase()} • {profile.paperCode}
                  </span>
                  <h4 className="text-sm font-black text-white leading-snug">{profile.title}</h4>
                  <p className="text-[10px] text-slate-400 truncate">{profile.paperName}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-white/5 border border-white/5 p-2 rounded-xl">
                    <span className="text-[9px] text-slate-400 block">Score</span>
                    <span className="text-sm font-black text-white">{score} / {total}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-2 rounded-xl">
                    <span className="text-[9px] text-slate-400 block">Duration</span>
                    <span className="text-sm font-mono font-bold text-emerald-400">{timeFormatted}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9px] text-slate-400 px-1 pt-0.5">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>{strikeCount === 0 ? 'Full Screen Proctored' : `${strikeCount} Strikes`}</span>
                  </span>
                  <span className="text-indigo-300 font-mono">chemzim.vercel.app</span>
                </div>
              </div>

            </div>

            {/* Footer Badge */}
            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[9px] text-slate-500 relative z-10 font-mono">
              <span>Verified Assessment • ChemZim Academy</span>
              <span className="text-slate-400">#CZM-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE ACTIONS & SHARING CHANNELS                                     */}
        {/* ========================================================================= */}
        <div className="space-y-3">
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleExportPNG}
              disabled={isExporting}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white text-xs font-bold shadow-lg shadow-indigo-500/20 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Generating Badge...' : 'Download HD PNG'}</span>
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-bold transition-all active:scale-95 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary Text'}</span>
            </button>
          </div>

          {/* Social Share Buttons */}
          <div className="flex items-center justify-center gap-2.5 pt-1">
            <button
              onClick={handleShareWhatsApp}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-all cursor-pointer"
            >
              <span>💬 WhatsApp</span>
            </button>

            <button
              onClick={handleShareTelegram}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-bold transition-all cursor-pointer"
            >
              <span>✈️ Telegram</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
