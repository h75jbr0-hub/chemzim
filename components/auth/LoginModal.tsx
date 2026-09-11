"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { X, Lock, User as UserIcon, Eye, EyeOff } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { loginWithCredentials, loginWithGoogle, isLoading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [devicePending, setDevicePending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const result = await loginWithCredentials({ username, password });

      if (result.success) {
        onClose();
      } else if (result.requiresDeviceApproval) {
        setDevicePending(true);
      } else {
        setError(result.error || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      const result = await loginWithGoogle();
      if (result.success) {
        onClose();
        window.location.href = "/admin";
      } else {
        setError(result.error || "Google login failed");
      }
    } catch (err) {
      setError("An error occurred during Google sign in.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-navy-950/90 p-8 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Decorative Background Orbs */}
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-teal-500 text-white text-2xl mb-4 shadow-lg shadow-gold-500/10">
            ⚗️
          </div>
          <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
            Welcome to ChemZim
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Sign in to access your registered curriculum
          </p>
        </div>

        {devicePending ? (
          <div className="text-center py-4 relative z-10">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-bold text-gold-400 mb-2">New Device Detected</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Your login attempt was flagged because this device is not recognized. Please contact your instructor to approve this device.
            </p>
            <button
              onClick={() => setDevicePending(false)}
              className="w-full py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="space-y-5 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="rounded-xl border border-red-500/25 bg-red-500/10 p-3.5 text-xs text-red-300 flex items-start gap-2.5">
                  <span className="text-sm mt-0.5">⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              {/* Username */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">Username</label>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full bg-navy-900/60 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-navy-900/60 border border-white/10 rounded-xl py-3 pl-11 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-bold text-sm hover:from-gold-500 hover:to-gold-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gold-500/10 mt-6"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/5"></div>
              <span className="flex-shrink mx-4 text-slate-500 text-xs uppercase font-semibold">or</span>
              <div className="flex-grow border-t border-white/5"></div>
            </div>

            {/* Google Login for Admin */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl border border-white/10 bg-navy-900/40 text-white text-sm font-medium hover:bg-navy-900/80 transition-colors flex items-center justify-center gap-3"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" className="shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Admin Login with Google
            </button>

            <p className="text-[11px] text-center text-slate-500 pt-2">
              Platform access is restricted to invited students.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
