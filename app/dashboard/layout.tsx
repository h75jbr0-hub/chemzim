'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    LayoutDashboard, 
    BookOpen, 
    Trophy, 
    User, 
    LogOut,
    Menu,
    X,
    ShieldCheck,
    Crown,
    Stethoscope,
    FileCheck,
    Printer,
    Search,
    BarChart3,
    Zap
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useGamification } from '@/contexts/GamificationContext';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { GlobalSearchPalette } from '@/components/ui/GlobalSearchPalette';

const ToothIcon = ({ className }: { className?: string }) => (
    <span className={`text-lg leading-none ${className || ''}`}>🦷</span>
);

const chemistryNavItems = [
    { name: 'Study Hub', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Syllabus', href: '/dashboard/curriculum', icon: BookOpen },
    { name: 'Diagnostics', href: '/dashboard/diagnostics', icon: BarChart3 },
    { name: 'Speed Blitz', href: '/dashboard/speed-challenge', icon: Zap },
    { name: 'Exams', href: '/dashboard/quizzes', icon: Trophy },
    { name: 'Mock Simulator', href: '/dashboard/mock-exam', icon: FileCheck },
    { name: 'Worksheets', href: '/dashboard/worksheet', icon: Printer },
    { name: 'Leaderboard', href: '/dashboard/leaderboard', icon: Crown },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
];

const dentalNavItems = [
    { name: 'Exam Simulator', href: '/dashboard/dental', icon: LayoutDashboard },
    { name: 'Leaderboard', href: '/dashboard/leaderboard', icon: Crown },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
];


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();
    const { user, logout } = useAuth();
    const { xp, level, streak } = useGamification();

    // Global shortcut for Search Palette (Ctrl+K or Cmd+K)
    useEffect(() => {
        const handleGlobalKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setIsSearchOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleGlobalKeyDown);
        return () => window.removeEventListener('keydown', handleGlobalKeyDown);
    }, []);

    // ─── "Last Mode" Tracking (Solution A) ────────────────────────────────────
    // lastMode tracks which section the user last actively visited.
    // Rules:
    //  - /dashboard/dental/*   → last_mode = 'dental'
    //  - /dashboard/curriculum/*, /dashboard, /dashboard/quizzes, /dashboard/mock-exam, /dashboard/worksheet → last_mode = 'chemistry'
    //  - shared pages (/leaderboard, /profile) → do NOT change last_mode, use stored value.
    const [lastMode, setLastMode] = useState<'dental' | 'chemistry'>('chemistry');

    // Single effect: runs on mount and on every pathname change.
    // On mount → read stored last_mode from localStorage.
    // On pathname change to a section page → write new last_mode.
    // On shared pages (leaderboard, profile) → do nothing (keep last_mode as-is).
    useEffect(() => {
        if (pathname?.startsWith('/dashboard/dental')) {
            localStorage.setItem('last_mode', 'dental');
            setLastMode('dental');
        } else if (
            pathname === '/dashboard' ||
            pathname?.startsWith('/dashboard/curriculum') ||
            pathname?.startsWith('/dashboard/diagnostics') ||
            pathname?.startsWith('/dashboard/speed-challenge') ||
            pathname?.startsWith('/dashboard/quizzes') ||
            pathname?.startsWith('/dashboard/mock-exam') ||
            pathname?.startsWith('/dashboard/worksheet')
        ) {
            localStorage.setItem('last_mode', 'chemistry');
            setLastMode('chemistry');
        } else {
            // Shared page (leaderboard, profile, etc.) → restore from localStorage
            const stored = localStorage.getItem('last_mode') as 'dental' | 'chemistry' | null;
            if (stored) setLastMode(stored);
        }
    }, [pathname]);

    const isDentalUser = lastMode === 'dental';
    const navItems = isDentalUser ? dentalNavItems : chemistryNavItems;


    const isLessonPlayer = pathname?.startsWith('/dashboard/curriculum/') && pathname.split('/').length > 4;
    const isMockExamSimulator = pathname === '/dashboard/mock-exam';

    if (isLessonPlayer || isMockExamSimulator) {
        return (
            <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden flex flex-col transition-colors duration-200">
                <main className="w-full flex-1 relative z-0 p-0 flex flex-col">
                    {children}
                </main>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-background text-foreground font-sans overflow-hidden transition-colors duration-200">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-transparent z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-surface/80 backdrop-blur-2xl border-r border-border
                transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 print:hidden
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-10">
                        <Link href="/" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-xl shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                                {isDentalUser ? '🦷' : '⚗️'}
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                                {isDentalUser ? 'Dentistry' : 'ChemZim'}
                            </span>
                        </Link>
                        <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                                        ${isActive 
                                            ? 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 shadow-inner shadow-indigo-500/5' 
                                            : 'text-slate-400 hover:bg-white/5 hover:text-foreground'}
                                    `}
                                >
                                    <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-500 dark:text-indigo-400' : ''}`} />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            );
                        })}

                        {user?.isAdmin && (
                            <div className="pt-4 mt-4 border-t border-border">
                                <Link
                                    href="/admin"
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500/10 transition-all border border-transparent hover:border-emerald-500/20"
                                >
                                    <ShieldCheck className="w-5 h-5" />
                                    <span className="font-medium">Management</span>
                                </Link>
                            </div>
                        )}
                    </nav>

                    <div className="mt-auto border-t border-border pt-6 space-y-4">
                        <div className="flex items-center gap-3 px-2">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-border flex items-center justify-center text-xl overflow-hidden shadow-inner">
                                {user?.image ? (
                                    (user.image.startsWith('http') || user.image.startsWith('/') || user.image.startsWith('data:')) ? (
                                        <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-2xl">{user.image}</span>
                                    )
                                ) : (
                                    isDentalUser ? '🦷' : '👤'
                                )}
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm font-semibold truncate text-foreground/90">{user?.name || 'Student'}</span>
                                <span className="text-xs text-slate-500 truncate">{isDentalUser ? 'Dental Prep Track' : `Level ${level} • ${user?.grade || 'No Grade'}`}</span>
                            </div>
                        </div>
                        {user ? (
                            <button
                                onClick={() => logout()}
                                className="flex items-center gap-3 w-full px-4 py-3 text-rose-500 dark:text-rose-400/80 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all group"
                            >
                                <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <span className="font-medium">Logout</span>
                            </button>
                        ) : (
                            <Link
                                href="/login"
                                className="flex items-center gap-3 w-full px-4 py-3 text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all group border border-transparent hover:border-emerald-500/20"
                            >
                                <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform rotate-180" />
                                <span className="font-medium">Login</span>
                            </Link>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative print:h-auto print:overflow-visible print:bg-white print:block">
                {/* Visual Background Orbs */}
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none print:hidden" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none print:hidden" />

                {/* Header */}
                <header className="h-20 border-b border-border bg-background/80 backdrop-blur-md flex items-center justify-between px-6 lg:px-10 shrink-0 z-10 print:hidden">
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden p-2 -ml-2 text-slate-400 hover:text-foreground transition-colors cursor-pointer"
                        aria-label="Open sidebar"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    
                    <div className="flex-1 flex justify-center lg:justify-start">
                        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
                            {navItems.find(i => i.href === pathname)?.name || 'Welcome'}
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Quick Search Button */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer text-xs group"
                            title="Omnisearch (Ctrl+K)"
                        >
                            <Search className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                            <span className="hidden sm:inline font-medium">Search knowledge...</span>
                            <kbd className="hidden md:inline-flex items-center gap-0.5 text-[10px] font-mono text-slate-500 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">
                                ⌘K
                            </kbd>
                        </button>

                        {/* Streak Badge */}
                        {!isDentalUser && streak?.currentStreak > 0 && (
                            <div className="hidden md:flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full">
                                <span className="text-sm">🔥</span>
                                <span className="text-sm font-bold text-orange-500 dark:text-orange-400">{streak.currentStreak}d</span>
                            </div>
                        )}
                        {/* XP Badge */}
                        {!isDentalUser && (
                            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-border px-3 py-1.5 rounded-full">
                                <Trophy className="w-4 h-4 text-amber-500" />
                                <span className="text-sm font-bold text-amber-500">{xp} XP</span>
                            </div>
                        )}
                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10 relative z-0 print:p-0 print:overflow-visible print:block">
                    {children}
                </div>
            </main>

            {/* Global Command / Search Palette */}
            <GlobalSearchPalette 
                isOpen={isSearchOpen} 
                onClose={() => setIsSearchOpen(false)} 
            />
        </div>
    );
}
