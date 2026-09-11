'use client';

import React, { useState, Suspense } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
    Home, LayoutDashboard, CheckSquare, Users, Smartphone, 
    LineChart, BarChart2, Megaphone, LogOut, Menu, X, Shield, ShieldCheck
} from 'lucide-react';

function AdminLayoutContent({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, logout, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentTab = searchParams.get('tab') || 'overview';
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Sidebar items mapping in English
    const menuItems = [
        {
            label: 'Dashboard',
            icon: Home,
            href: '/dashboard',
            active: false,
        },
        {
            label: 'Overview',
            icon: LayoutDashboard,
            href: '/admin?tab=overview',
            active: pathname === '/admin' && currentTab === 'overview',
        },
        {
            label: 'Question Auditor',
            icon: CheckSquare,
            href: '/admin/question-auditor',
            active: pathname === '/admin/question-auditor',
        },
        {
            label: 'Students',
            icon: Users,
            href: '/admin?tab=students',
            active: pathname === '/admin' && currentTab === 'students',
        },
        {
            label: 'Devices',
            icon: Smartphone,
            href: '/admin?tab=devices',
            active: pathname === '/admin' && currentTab === 'devices',
        },
        {
            label: 'Student Progress',
            icon: LineChart,
            href: '/admin?tab=progress',
            active: pathname === '/admin' && currentTab === 'progress',
        },
        {
            label: 'Analytics',
            icon: BarChart2,
            href: '/admin?tab=analytics',
            active: pathname === '/admin' && currentTab === 'analytics',
        },
        {
            label: 'Announcements',
            icon: Megaphone,
            href: '/admin?tab=announcements',
            active: pathname === '/admin' && currentTab === 'announcements',
        },
        {
            label: 'Audit Logs',
            icon: ShieldCheck,
            href: '/admin?tab=audit',
            active: pathname === '/admin' && currentTab === 'audit',
        },
    ];

    const handleLogout = async () => {
        try {
            await logout();
            router.push('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#050510] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        );
    }

    // Default admin user info
    const adminName = user?.name || 'Hazim Jaber';
    const adminRole = 'Admin';

    return (
        <div className="min-h-screen bg-[#050510] text-white flex flex-col lg:flex-row" dir="ltr">
            {/* Mobile Navbar Header */}
            <div className="lg:hidden flex items-center justify-between p-4 bg-[#0a0a1c] border-b border-white/5 z-40">
                <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-indigo-400" />
                    <span className="font-black text-lg">Admin Panel</span>
                </div>
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Sidebar Container */}
            <aside className={`
                fixed lg:sticky top-0 left-0 h-screen w-72 bg-[#090918] border-r border-white/5 flex flex-col justify-between p-6 z-50 transition-transform duration-300
                lg:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="space-y-8">
                    {/* Brand Header */}
                    <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                        <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                            <Shield className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h2 className="text-xl font-black tracking-tight text-white">Admin Panel</h2>
                    </div>

                    {/* Navigation Links */}
                    <nav className="space-y-1">
                        {menuItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <Link 
                                    key={idx}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`
                                        flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all group
                                        ${item.active 
                                            ? 'bg-indigo-500/10 text-indigo-400 border-l-4 border-indigo-500' 
                                            : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'}
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className={`w-4.5 h-4.5 transition-colors ${item.active ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                                        <span>{item.label}</span>
                                    </div>
                                    {item.active && (
                                        <span className="text-indigo-400 text-xs font-bold font-mono">⟩</span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Profile Footer */}
                <div className="border-t border-white/5 pt-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm border border-white/10 shadow-md">
                            {adminName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm text-slate-200">{adminName}</span>
                            <span className="text-xs text-indigo-400 font-semibold">{adminRole}</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleLogout}
                        className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-xl transition-all border border-rose-500/20 cursor-pointer"
                        title="Logout"
                    >
                        <LogOut className="w-4 h-4" />
                    </button>
                </div>
            </aside>

            {/* Mobile Menu Backdrop */}
            {mobileMenuOpen && (
                <div 
                    onClick={() => setMobileMenuOpen(false)}
                    className="fixed inset-0 bg-transparent z-30 lg:hidden"
                />
            )}

            {/* Main Content Area */}
            <main className="flex-1 min-h-screen w-full lg:overflow-y-auto">
                {children}
            </main>
        </div>
    );
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#050510] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        }>
            <AdminLayoutContent>{children}</AdminLayoutContent>
        </Suspense>
    );
}
