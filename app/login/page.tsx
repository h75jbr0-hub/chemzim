'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function LoginPage() {
    const { loginWithCredentials, loginWithGoogle, isLoading } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [devicePending, setDevicePending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        const result = await loginWithCredentials({ username, password });

        if (result.success) {
            // Check for returnUrl
            const params = new URLSearchParams(window.location.search);
            const returnUrl = params.get('returnUrl') || '/dashboard';
            window.location.href = returnUrl;
        } else if (result.requiresDeviceApproval) {
            setDevicePending(true);
        } else {
            setError(result.error || 'Login failed');
        }
        setIsSubmitting(false);
    };

    const handleGoogleLogin = async () => {
        setError('');
        const result = await loginWithGoogle();
        if (result.success) {
            window.location.href = '/admin';
        } else {
            setError(result.error || 'Google login failed');
        }
    };

    return (
        <div className="login-page">
            <div className="login-bg">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
            </div>

            <div className="login-container">
                <div className="login-card">
                    {/* Header */}
                    <div className="login-header">
                        <div className="logo-icon">⚗️</div>
                        <h1>ChemZim</h1>
                        <p>Master Chemistry. Ace Your Exams.</p>
                    </div>

                    {/* Device Pending State */}
                    {devicePending ? (
                        <div className="device-pending">
                            <div className="pending-icon">🔒</div>
                            <h3>New Device Detected</h3>
                            <p>Your login attempt was flagged because this device is not recognized. Please contact your instructor to approve this device.</p>
                            <button onClick={() => setDevicePending(false)} className="btn-secondary">
                                Try Again
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Error Message */}
                            {error && (
                                <div className="error-banner">
                                    <span className="error-icon">⚠️</span>
                                    {error}
                                </div>
                            )}

                            {/* Login Form */}
                            <form onSubmit={handleSubmit} className="login-form">
                                <div className="input-group">
                                    <label htmlFor="username">Username</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">👤</span>
                                        <input
                                            id="username"
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Enter your username"
                                            required
                                            autoComplete="username"
                                        />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">🔑</span>
                                        <input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your password"
                                            required
                                            autoComplete="current-password"
                                        />
                                        <button
                                            type="button"
                                            className="toggle-password"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? '🙈' : '👁️'}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={isSubmitting || isLoading}
                                >
                                    {isSubmitting ? (
                                        <span className="spinner" />
                                    ) : (
                                        'Sign In'
                                    )}
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="divider">
                                <span>or</span>
                            </div>

                            {/* Google Login (Admin Only) */}
                            <button onClick={handleGoogleLogin} className="btn-google" disabled={isLoading}>
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                Admin Login with Google
                            </button>
                            {/* Registration disabled for public - only admin can create accounts */}
                            <div className="mt-8 pt-8 border-t border-white/5 text-center">
                                <p className="text-slate-500 text-sm">
                                    Platform access is restricted to invited students.
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <style jsx>{`
                .login-page {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #0a0a1a;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Inter', system-ui, sans-serif;
                }

                .login-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.4;
                    animation: float 8s ease-in-out infinite;
                }

                .orb-1 {
                    width: 400px;
                    height: 400px;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    top: -100px;
                    right: -100px;
                    animation-delay: 0s;
                }

                .orb-2 {
                    width: 300px;
                    height: 300px;
                    background: linear-gradient(135deg, #10b981, #06b6d4);
                    bottom: -80px;
                    left: -80px;
                    animation-delay: -3s;
                }

                .orb-3 {
                    width: 200px;
                    height: 200px;
                    background: linear-gradient(135deg, #f59e0b, #ef4444);
                    top: 50%;
                    left: 50%;
                    animation-delay: -5s;
                }

                @keyframes float {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -30px) scale(1.05); }
                    66% { transform: translate(-20px, 20px) scale(0.95); }
                }

                .login-container {
                    position: relative;
                    z-index: 1;
                    width: 100%;
                    max-width: 440px;
                    padding: 20px;
                }

                .login-card {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 24px;
                    padding: 40px 32px;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
                }

                .login-header {
                    text-align: center;
                    margin-bottom: 32px;
                }

                .logo-icon {
                    font-size: 48px;
                    margin-bottom: 12px;
                }

                .login-header h1 {
                    font-size: 28px;
                    font-weight: 700;
                    color: #fff;
                    margin: 0 0 8px 0;
                    background: linear-gradient(135deg, #6366f1, #10b981);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .login-header p {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 14px;
                    margin: 0;
                }

                .error-banner {
                    background: rgba(239, 68, 68, 0.15);
                    border: 1px solid rgba(239, 68, 68, 0.3);
                    color: #fca5a5;
                    padding: 12px 16px;
                    border-radius: 12px;
                    font-size: 14px;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .input-group label {
                    display: block;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 13px;
                    font-weight: 500;
                    margin-bottom: 8px;
                }

                .input-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .input-icon {
                    position: absolute;
                    left: 14px;
                    font-size: 16px;
                    z-index: 1;
                }

                .input-wrapper input {
                    width: 100%;
                    padding: 14px 14px 14px 44px;
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    color: #fff;
                    font-size: 15px;
                    outline: none;
                    transition: all 0.2s;
                }

                .input-wrapper input:focus {
                    border-color: #6366f1;
                    background: rgba(99, 102, 241, 0.08);
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
                }

                .input-wrapper input::placeholder {
                    color: rgba(255, 255, 255, 0.3);
                }

                .toggle-password {
                    position: absolute;
                    right: 14px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 16px;
                    padding: 0;
                }

                .btn-primary {
                    width: 100%;
                    padding: 14px;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    color: #fff;
                    border: none;
                    border-radius: 12px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 4px;
                }

                .btn-primary:hover:not(:disabled) {
                    transform: translateY(-1px);
                    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
                }

                .btn-primary:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .spinner {
                    width: 20px;
                    height: 20px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spin 0.6s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .divider {
                    display: flex;
                    align-items: center;
                    margin: 24px 0;
                    gap: 12px;
                }

                .divider::before,
                .divider::after {
                    content: '';
                    flex: 1;
                    height: 1px;
                    background: rgba(255, 255, 255, 0.1);
                }

                .divider span {
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 13px;
                }

                .btn-google {
                    width: 100%;
                    padding: 12px;
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 12px;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    transition: all 0.2s;
                }

                .btn-google:hover:not(:disabled) {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .register-link {
                    text-align: center;
                    margin-top: 24px;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 14px;
                }

                .register-link a {
                    color: #6366f1;
                    text-decoration: none;
                    font-weight: 500;
                }

                .register-link a:hover {
                    text-decoration: underline;
                }

                /* Device Pending */
                .device-pending {
                    text-align: center;
                    padding: 20px 0;
                }

                .pending-icon {
                    font-size: 48px;
                    margin-bottom: 16px;
                }

                .device-pending h3 {
                    color: #fbbf24;
                    font-size: 20px;
                    margin: 0 0 12px 0;
                }

                .device-pending p {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 14px;
                    line-height: 1.6;
                    margin: 0 0 24px 0;
                }

                .btn-secondary {
                    padding: 12px 32px;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 12px;
                    color: #fff;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.12);
                }

                @media (max-width: 480px) {
                    .login-card {
                        padding: 32px 24px;
                    }
                }
            `}</style>
        </div>
    );
}
