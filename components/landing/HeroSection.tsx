"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import LoginModal from "@/components/auth/LoginModal";
import { Stethoscope, Sparkles, BookOpen, Trophy, ArrowRight, Shield } from "lucide-react";
import { useEffect } from "react";

export default function HeroSection() {
  const { isAuthenticated } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chemistry" | "dental">("chemistry");

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("active_specialty", activeTab);
    window.dispatchEvent(new Event("specialty-change"));
  }, [activeTab]);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
        id="hero-section"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-700/20 rounded-full blur-3xl" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating Background Icons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {activeTab === "chemistry" ? (
            <>
              {/* Benzene ring */}
              <div className="absolute top-[15%] right-[15%] animate-float opacity-20">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <polygon points="40,10 70,25 70,55 40,70 10,55 10,25" stroke="var(--color-gold-400)" strokeWidth="1" />
                  <polygon points="40,20 58,30 58,50 40,60 22,50 22,30" stroke="var(--color-gold-400)" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Atom */}
              <div className="absolute bottom-[20%] left-[10%] animate-float-slow opacity-15">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="4" fill="var(--color-teal-400)" />
                  <ellipse cx="50" cy="50" rx="40" ry="15" stroke="var(--color-teal-400)" strokeWidth="0.8" />
                  <ellipse cx="50" cy="50" rx="40" ry="15" stroke="var(--color-teal-400)" strokeWidth="0.8" transform="rotate(60 50 50)" />
                  <ellipse cx="50" cy="50" rx="40" ry="15" stroke="var(--color-teal-400)" strokeWidth="0.8" transform="rotate(-60 50 50)" />
                </svg>
              </div>
            </>
          ) : (
            <>
              {/* Floating Molar Tooth (Top Right) */}
              <div className="absolute top-[15%] right-[15%] animate-float opacity-35 text-indigo-400">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M25 35 C 25 22, 35 20, 50 25 C 65 20, 75 22, 75 35 C 75 52, 70 65, 65 72 C 60 78, 62 88, 60 92 C 58 92, 54 85, 50 78 C 46 85, 42 92, 40 92 C 38 88, 40 78, 35 72 C 30 65, 25 52, 25 35 Z" />
                  <path d="M35 38 C 45 42, 55 42, 65 38" fill="none" />
                  <path d="M50 25 L 50 48" fill="none" />
                </svg>
              </div>

              {/* Floating Dental Handpiece / Drill (Bottom Left) */}
              <div className="absolute bottom-[20%] left-[10%] animate-float-slow opacity-30 text-teal-400">
                <svg width="90" height="90" viewBox="0 0 100 100" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Handle body */}
                  <path d="M20 80 L 50 50 C 53 47, 57 47, 60 50 L 70 60" />
                  {/* Head angle */}
                  <path d="M70 60 L 80 40 L 85 45 L 75 65 Z" fill="currentColor" fillOpacity="0.1" />
                  {/* Drill bur */}
                  <line x1="82.5" y1="42.5" x2="90" y2="35" stroke="currentColor" strokeWidth="3" />
                  {/* Water spray drops */}
                  <circle cx="92" cy="30" r="2" fill="currentColor" opacity="0.9" />
                  <circle cx="86" cy="27" r="1.5" fill="currentColor" opacity="0.7" />
                  <circle cx="95" cy="37" r="1.5" fill="currentColor" opacity="0.7" />
                </svg>
              </div>

              {/* Floating Dental Braces / Ortho (Top Left) */}
              <div className="absolute top-[30%] left-[8%] animate-float opacity-35 text-indigo-300" style={{ animationDelay: "2s" }}>
                <svg width="85" height="70" viewBox="0 0 100 80" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Tooth 1 */}
                  <path d="M10 20 C 10 10, 20 8, 25 10 C 30 8, 40 10, 40 20 C 40 35, 10 35, 10 20 Z" />
                  {/* Tooth 2 */}
                  <path d="M40 20 C 40 10, 50 8, 55 10 C 60 8, 70 10, 70 20 C 70 35, 40 35, 40 20 Z" />
                  {/* Tooth 3 */}
                  <path d="M70 20 C 70 10, 80 8, 85 10 C 90 8, 100 10, 100 20 C 100 35, 70 35, 70 20 Z" />
                  {/* Bracket 1 */}
                  <rect x="20" y="16" width="10" height="8" rx="1.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                  {/* Bracket 2 */}
                  <rect x="50" y="16" width="10" height="8" rx="1.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                  {/* Bracket 3 */}
                  <rect x="80" y="16" width="10" height="8" rx="1.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                  {/* Archwire passing through */}
                  <path d="M5 20 Q 50 24 95 20" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </div>

              {/* Floating Dental Chair (Bottom Right) */}
              <div className="absolute bottom-[25%] right-[8%] animate-float-slow opacity-35 text-teal-300" style={{ animationDelay: "1s" }}>
                <svg width="90" height="90" viewBox="0 0 100 100" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Backrest & Headrest */}
                  <path d="M25 45 C 25 35, 30 30, 35 30 L 40 30" />
                  <rect x="30" y="22" width="10" height="6" rx="2" fill="currentColor" fillOpacity="0.2" />
                  {/* Seat base and leg rest */}
                  <path d="M28 48 C 35 50, 50 50, 55 55 L 75 75 L 85 75" />
                  {/* Support stand base */}
                  <path d="M45 52 L 45 78 L 65 78" fill="none" />
                  {/* Overhead Light stand */}
                  <path d="M35 78 L 35 50 Q 35 35 48 35" fill="none" />
                  <ellipse cx="52" cy="35" rx="5" ry="3" fill="currentColor" fillOpacity="0.3" />
                </svg>
              </div>
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-2 animate-fade-in-up">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs font-semibold tracking-wide text-slate-300">
              International Chemistry & Dental Exam Prep Platform
            </span>
          </div>

          {/* Heading & Intro */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight leading-[1.1] mb-4">
              <span className="text-white">Master Science <span className="font-sans font-semibold">&</span> Board Exams</span>
              <br />
              <span className="text-gradient-hero">The Smart Way</span>
            </h1>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Select your academic specialization to practice with real past paper questions, interactive diagnostic simulators, and gamified mastery tracks.
            </p>
          </div>

          {/* Dual Path Cards (Interactive Track Selection) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            
            {/* Card 1: Chemistry Path */}
            <div 
              onClick={() => setActiveTab("chemistry")}
              className={`group cursor-pointer rounded-2xl p-6 text-left border transition-all duration-300 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden ${
                activeTab === "chemistry"
                  ? "bg-gold-950/30 border-gold-500/50 shadow-2xl shadow-gold-500/10 scale-[1.02]"
                  : "bg-surface/40 border-border hover:border-gold-500/30 hover:bg-surface/60 opacity-80 hover:opacity-100"
              }`}
            >
              {activeTab === "chemistry" && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-xl pointer-events-none" />
              )}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">⚗️</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20">
                    High School Track
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                  Chemistry Curriculum
                </h3>
                <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                  CIE IGCSE, AS/A-Level, and Edexcel syllabus alignment. Includes interactive simulators, worked examples, and mistake inbox.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-semibold">12+ Curriculum Modules</span>
                <span className={`inline-flex items-center gap-1 text-xs font-bold transition-all ${
                  activeTab === "chemistry" ? "text-gold-400 translate-x-1" : "text-slate-400 group-hover:text-gold-400 group-hover:translate-x-1"
                }`}>
                  <span>{activeTab === "chemistry" ? "Active Path ✓" : "Select Path"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card 2: Dental Path */}
            <div 
              onClick={() => setActiveTab("dental")}
              className={`group cursor-pointer rounded-2xl p-6 text-left border transition-all duration-300 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden ${
                activeTab === "dental"
                  ? "bg-indigo-950/30 border-indigo-500/50 shadow-2xl shadow-indigo-500/10 scale-[1.02]"
                  : "bg-surface/40 border-border hover:border-indigo-500/30 hover:bg-surface/60 opacity-80 hover:opacity-100"
              }`}
            >
              {activeTab === "dental" && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
              )}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🦷</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Professional Board
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  Dental Board Exam MCQs
                </h3>
                <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                  1,340 clinical questions for NDEB, INBDE, ORE, and MFDs. Features Master Dentistry references, category diagnostics, and PNG card sharing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-semibold">1,340 Clinical Board MCQs</span>
                <span className={`inline-flex items-center gap-1 text-xs font-bold transition-all ${
                  activeTab === "dental" ? "text-indigo-400 translate-x-1" : "text-slate-400 group-hover:text-indigo-400 group-hover:translate-x-1"
                }`}>
                  <span>{activeTab === "dental" ? "Active Path ✓" : "Select Path"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>

          {/* CTA Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {isAuthenticated ? (
              <Link
                href={activeTab === "chemistry" ? "/dashboard" : "/dashboard/dental"}
                className={`group px-9 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 flex items-center gap-2.5 cursor-pointer ${
                  activeTab === "chemistry"
                    ? "bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 shadow-xl shadow-gold-500/25"
                    : "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-xl shadow-indigo-500/25"
                }`}
              >
                <span>Enter {activeTab === "chemistry" ? "Chemistry Academy" : "Dental Prep Portal"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className={`group px-9 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 flex items-center gap-2.5 cursor-pointer ${
                  activeTab === "chemistry"
                    ? "bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 shadow-xl shadow-gold-500/25"
                    : "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-xl shadow-indigo-500/25"
                }`}
              >
                <span>Start {activeTab === "chemistry" ? "Chemistry Prep" : "Dental Prep"} Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
