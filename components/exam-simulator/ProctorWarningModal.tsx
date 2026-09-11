'use client';

import React from 'react';
import { AlertTriangle, ShieldAlert, Maximize2, XCircle } from 'lucide-react';

interface ProctorWarningModalProps {
  isOpen: boolean;
  strikes: number;
  maxStrikes: number;
  type: 'tab-switch' | 'fullscreen-exit' | 'blur';
  onDismiss: () => void;
  onForceSubmit: () => void;
}

export const ProctorWarningModal: React.FC<ProctorWarningModalProps> = ({
  isOpen,
  strikes,
  maxStrikes,
  type,
  onDismiss,
  onForceSubmit
}) => {
  if (!isOpen) return null;

  const isFinalStrike = strikes >= maxStrikes;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-150">
      <div className="bg-[#12080d] border border-rose-500/40 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl shadow-rose-950/60 text-center space-y-6">
        
        {/* Warning Badge Icon */}
        <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto text-rose-400 animate-pulse">
          {isFinalStrike ? (
            <ShieldAlert className="w-8 h-8 text-rose-500" />
          ) : (
            <AlertTriangle className="w-8 h-8 text-rose-400" />
          )}
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-rose-400 px-3 py-1 bg-rose-500/15 border border-rose-500/30 rounded-full inline-block">
            {isFinalStrike ? 'EXAM PROTOCOL VIOLATION' : 'EXAM SECURITY WARNING'}
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white">
            {isFinalStrike ? 'Test Terminated: Screen Exit Detected' : 'Unauthorized Screen Exit Detected!'}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {type === 'tab-switch' && 'You navigated away from the active examination browser tab or minimized the window.'}
            {type === 'fullscreen-exit' && 'You exited the required Fullscreen examination security mode.'}
            {type === 'blur' && 'Window focus was lost to another background application.'}
          </p>
        </div>

        {/* Strikes Counter Indicator */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
          <div className="text-left">
            <span className="text-xs text-slate-400 block">Security Strike Count</span>
            <span className="text-sm font-bold text-white">
              {strikes} of {maxStrikes} recorded incidents
            </span>
          </div>
          <div className="flex gap-1.5">
            {Array.from({ length: maxStrikes }).map((_, idx) => (
              <div
                key={idx}
                className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  idx < strikes
                    ? 'bg-rose-500 border-rose-400 shadow-sm shadow-rose-500'
                    : 'bg-white/10 border-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Action button */}
        {isFinalStrike ? (
          <div className="space-y-3">
            <p className="text-xs text-rose-400 font-semibold">
              Maximum security infractions reached. Your paper is being finalized and submitted with current responses.
            </p>
            <button
              onClick={onForceSubmit}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 text-white font-bold text-sm shadow-xl shadow-rose-600/30 hover:opacity-90 active:scale-95 transition-all"
            >
              Review Auto-Submitted Paper
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-slate-400">
              Returning to your paper will re-engage Fullscreen security. Repeated exits will invalidate this session.
            </p>
            <button
              onClick={onDismiss}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-bold text-sm shadow-xl shadow-indigo-500/20 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Re-enter Fullscreen & Continue Paper</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
