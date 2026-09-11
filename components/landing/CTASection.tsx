"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import LoginModal from "@/components/auth/LoginModal";

export default function CTASection() {
  const { isAuthenticated } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden" id="cta-section">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/50 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Chemistry equation decoration */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-40">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-xs font-mono text-gold-400">
              2H₂ + O₂ → 2H₂O
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-6 leading-tight">
            Ready to Transform Your
            <br />
            <span className="text-gradient-hero">Chemistry Grades?</span>
          </h2>

          <p className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Access the complete syllabus and premium learning tools. Register through your instructor, 
            or contact the ChemZim administrator via{" "}
            <a 
              href="https://wa.me/962799747775" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gold-400 hover:text-gold-300 font-semibold underline decoration-gold-500/40 hover:decoration-gold-300 transition-colors"
            >
              WhatsApp
            </a>{" "}
            or{" "}
            <a 
              href="https://t.me/+962799747775" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gold-400 hover:text-gold-300 font-semibold underline decoration-gold-500/40 hover:decoration-gold-300 transition-colors"
            >
              Telegram
            </a>{" "}
            at{" "}
            <span className="text-white font-medium">+962 79 974 7775</span>{" "}
            to unlock your account.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                className="group relative px-10 py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-semibold text-lg shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                id="cta-primary-btn"
              >
                Go to Dashboard
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="group relative px-10 py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-semibold text-lg shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer"
                id="cta-primary-btn"
              >
                Sign In to Access
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Invited students only
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Premium Content
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              1,500+ questions
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
