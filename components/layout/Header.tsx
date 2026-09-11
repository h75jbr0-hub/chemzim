"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import LoginModal from "@/components/auth/LoginModal";
import { Lock, User as UserIcon, LogOut, LayoutDashboard, ChevronDown, Bell, Award, BookOpen, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [boardOpen, setBoardOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifMenuOpen, setNotifMenuOpen] = useState(false);

  // Sync with specialty tab
  const [specialty, setSpecialty] = useState<"chemistry" | "dental">("chemistry");

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Get initial value
    const saved = localStorage.getItem('active_specialty') as "chemistry" | "dental";
    if (saved) setSpecialty(saved);

    // Listen for changes
    const handleSync = () => {
      const updated = localStorage.getItem('active_specialty') as "chemistry" | "dental";
      if (updated) setSpecialty(updated);
    };

    window.addEventListener('specialty-change', handleSync);
    return () => window.removeEventListener('specialty-change', handleSync);
  }, []);

  const { user, isAuthenticated, logout } = useAuth();

  const boards = [
    { id: 'cie-igcse', label: 'CIE IGCSE', code: '0620', color: 'gold' },
    { id: 'cie-as', label: 'CIE AS-Level', code: '9701', color: 'teal' },
    { id: 'cie-alevel', label: 'CIE A-Level', code: '9701', color: 'purple' },
    { id: 'edexcel-igcse', label: 'Edexcel IGCSE', code: '4CH1', color: 'purple' },
    { id: 'edexcel-as', label: 'Edexcel AS', code: 'XCH11', color: 'purple' },
    { id: 'edexcel-a2', label: 'Edexcel A2', code: 'YCH11', color: 'purple' },
  ];

  const dentalBoards = [
    { id: 'ore', label: 'ORE Exam MCQs', code: 'UK Licensing', color: 'indigo' },
    { id: 'mfds', label: 'MFDs / MJDF Prep', code: 'Royal College', color: 'indigo' },
    { id: 'master1', label: 'Master Dentistry Vol 1', code: 'Oral Med & Surg', color: 'indigo' },
    { id: 'master2', label: 'Master Dentistry Vol 2', code: 'Restorative & Paed', color: 'indigo' },
  ];

  const [selectedBoard, setSelectedBoard] = useState(boards[0]);
  const [selectedDentalBoard, setSelectedDentalBoard] = useState(dentalBoards[0]);

  // Fetch announcements for notifications
  useEffect(() => {
    if (!isAuthenticated) return;
    const fetchAnnouncements = async () => {
      try {
        const track = user?.track || 'cie-igcse';
        const res = await fetch(`/api/announcements?curriculum=${track}`);
        const data = await res.json();
        if (data.success) {
          const list = data.announcements || [];
          setAnnouncements(list);
          
          // Count unread from localStorage
          const readIds = JSON.parse(localStorage.getItem('read_announcements') || '[]');
          const unread = list.filter((ann: any) => !readIds.includes(ann.id)).length;
          setUnreadCount(unread);
        }
      } catch (e) {
        console.error('Failed to fetch header announcements:', e);
      }
    };
    fetchAnnouncements();
  }, [isAuthenticated, user]);

  const handleOpenNotif = () => {
    setNotifMenuOpen(!notifMenuOpen);
    setProfileMenuOpen(false);
    
    // Mark all as read when opening notifications menu
    if (announcements.length > 0) {
      const readIds = announcements.map((ann: any) => ann.id);
      localStorage.setItem('read_announcements', JSON.stringify(readIds));
      setUnreadCount(0);
    }
  };

  // Update selected board to user's track if logged in
  useEffect(() => {
    if (isAuthenticated && user?.track) {
      const userBoard = boards.find(b => b.id === user.track);
      if (userBoard) {
        setSelectedBoard(userBoard);
      }
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setBoardOpen(false);
    if (boardOpen) {
      const timer = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 50);
      return () => {
        clearTimeout(timer);
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [boardOpen]);

  useEffect(() => {
    const handleClickOutside = () => setProfileMenuOpen(false);
    if (profileMenuOpen) {
      const timer = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 50);
      return () => {
        clearTimeout(timer);
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [profileMenuOpen]);

  const chemLinks = [
    { href: "#curriculum", label: "Curriculum" },
    { href: "#stats", label: "Stats" },
    { href: "#tools", label: "Tools" },
  ];

  const dentalLinks = [
    { href: "/dashboard/dental/study", label: "Study Mode" },
    { href: "/dashboard/dental/exam", label: "Exam Sim" },
    { href: "/dashboard/dental", label: "Specialties" },
  ];

  const navLinks = specialty === "chemistry" ? chemLinks : dentalLinks;

  // Resolve user display name or first character
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "S";

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-bright shadow-lg shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" id="logo-link">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                {specialty === "chemistry" ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    <path d="M9 3L9 8L6 14L8 14L10 18L14 18L16 14L18 14L15 8L15 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="6" r="1" fill="white" opacity="0.8" />
                    <circle cx="10" cy="12" r="0.8" fill="white" opacity="0.6" />
                    <circle cx="14" cy="11" r="0.8" fill="white" opacity="0.6" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white relative z-10">
                    <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 5.5 3 7.5S11 19.5 11 22h2c0-2.5 2-4.5 2-6.5s3-4 3-7.5c0-3.5-2.5-6-6-6z" />
                    <path d="M9.5 15.5c1.5 1 3.5 1 5 0" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight">
              <span className="text-white">Chem</span>
              <span className="text-gradient-gold">Zim</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {/* Dynamic Board Switcher */}
            <div className="relative">
              {specialty === "chemistry" ? (
                <button
                  onClick={() => setBoardOpen(!boardOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-border hover:border-gold-500/30 transition-all text-sm cursor-pointer"
                  id="board-switcher-btn"
                >
                  <div className={`w-2 h-2 rounded-full ${
                    selectedBoard.color === 'gold' ? 'bg-gold-500' :
                    selectedBoard.color === 'teal' ? 'bg-teal-500' : 'bg-purple-500'
                  }`} />
                  <span className="text-gold-300 font-medium">{selectedBoard.label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${boardOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <button
                  onClick={() => setBoardOpen(!boardOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 hover:border-indigo-500/50 transition-all text-sm cursor-pointer"
                  id="board-switcher-btn"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-indigo-300 font-medium">{selectedDentalBoard.label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-indigo-400 transition-transform duration-200 ${boardOpen ? 'rotate-180' : ''}`} />
                </button>
              )}
              
              {boardOpen && (
                <div className="absolute top-full mt-2 left-0 w-64 glass-bright rounded-xl border border-border-bright shadow-2xl shadow-black/40 overflow-hidden z-50 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                  {specialty === "chemistry" ? (
                    boards.map((board) => {
                      const isAllowed = !isAuthenticated || (user?.isAdmin || user?.track === board.id);

                      return (
                        <button
                          key={board.id}
                          disabled={isAuthenticated && !isAllowed}
                          className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all text-left cursor-pointer ${
                            isAllowed 
                              ? "text-slate-200 hover:text-white hover:bg-white/[0.05]" 
                              : "text-slate-600 cursor-not-allowed opacity-40 hover:bg-transparent"
                          }`}
                          onClick={() => {
                            if (!isAuthenticated) {
                              setIsLoginOpen(true);
                              setBoardOpen(false);
                              return;
                            }

                            if (isAllowed) {
                              setSelectedBoard(board);
                              setBoardOpen(false);
                              window.location.href = `/dashboard/curriculum`;
                            }
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${
                              board.color === 'gold' ? 'bg-gold-500' :
                              board.color === 'teal' ? 'bg-teal-500' : 'bg-purple-500'
                            }`} />
                            <div>
                              <div className="font-medium">{board.label}</div>
                              <div className="text-[10px] text-slate-500">{board.code}</div>
                            </div>
                          </div>
                          
                          {isAuthenticated && !isAllowed && (
                            <Lock className="h-3 w-3 text-slate-600" />
                          )}
                        </button>
                      );
                    })
                  ) : (
                    dentalBoards.map((board) => (
                      <button
                        key={board.id}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm text-slate-200 hover:text-white hover:bg-white/[0.05] transition-all text-left cursor-pointer"
                        onClick={() => {
                          setSelectedDentalBoard(board);
                          setBoardOpen(false);
                          window.location.href = `/dashboard/dental`;
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-500" />
                          <div>
                            <div className="font-medium">{board.label}</div>
                            <div className="text-[10px] text-slate-500">{board.code}</div>
                          </div>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons / User Menu & Mobile Controls */}
          <div className="flex items-center gap-2 md:gap-3" id="header-cta">
            {!isAuthenticated && (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-3.5 py-1.5 md:hidden text-xs font-semibold rounded-lg bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 shadow-md cursor-pointer"
              >
                Sign In
              </button>
            )}

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated ? (
                <div className="relative flex items-center gap-3">
                  {/* Notification Bell */}
                  <div className="relative">
                    <button
                      onClick={handleOpenNotif}
                      className="p-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-indigo-500/20 text-slate-300 hover:text-white transition-all cursor-pointer relative flex items-center justify-center"
                      id="announcements-bell-btn"
                    >
                      <Bell className="w-5 h-5" />
                      {unreadCount > 0 && (
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                      )}
                    </button>

                    {notifMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-80 glass-bright rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                        <div className="p-4 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
                          <span className="text-xs font-bold text-white uppercase tracking-wider">Announcements</span>
                        </div>
                        <div className="max-h-80 overflow-y-auto p-2 space-y-1.5 custom-scrollbar">
                          {announcements.length > 0 ? (
                            announcements.map((ann) => (
                              <div key={ann.id} className="p-3 rounded-xl border bg-indigo-500/10 border-indigo-500/20 text-indigo-200">
                                <span className="font-bold text-xs text-white truncate max-w-[170px] block">{ann.title}</span>
                                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed line-clamp-3">{ann.content}</p>
                              </div>
                            ))
                          ) : (
                            <div className="text-center py-8 text-xs text-slate-500 font-medium">
                              No announcements to show.
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* User Profile Menu */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        setProfileMenuOpen(!profileMenuOpen);
                        setNotifMenuOpen(false);
                      }}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-indigo-500/20 transition-all cursor-pointer"
                      id="profile-dropdown-btn"
                    >
                      <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 p-[1.5px] shadow-lg">
                        <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                          {user?.image ? (
                            <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                          ) : (
                            userInitial
                          )}
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-slate-200 max-w-[100px] truncate">
                        {user?.name?.split(' ')[0] || 'Student'}
                      </span>
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    </button>

                    {profileMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-64 glass-bright rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                        <div className="p-4 border-b border-white/5 bg-white/[0.01]">
                          <p className="text-xs text-slate-400 font-medium">Signed in as</p>
                          <p className="text-sm font-bold text-white truncate mt-0.5">{user?.name || 'Student'}</p>
                        </div>

                        <div className="p-1.5 space-y-0.5">
                          <Link
                            href={specialty === "chemistry" ? "/dashboard" : "/dashboard/dental"}
                            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all"
                            onClick={() => setProfileMenuOpen(false)}
                          >
                            <LayoutDashboard className="h-4 w-4 text-slate-400" />
                            <span>My Dashboard</span>
                          </Link>
                        </div>

                        <div className="p-1.5 border-t border-white/5 bg-white/[0.01]">
                          <button
                            onClick={() => {
                              logout();
                              setProfileMenuOpen(false);
                            }}
                            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all cursor-pointer"
                          >
                            <LogOut className="h-4 w-4" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="px-5 py-2.5 text-sm text-muted hover:text-white transition-colors duration-300 cursor-pointer"
                    id="login-btn"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer text-white ${
                      specialty === "chemistry"
                        ? "bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950"
                        : "bg-gradient-to-r from-indigo-500 to-blue-600"
                    }`}
                    id="get-started-btn"
                  >
                    Start Practicing
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white transition-all cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-bright border-b border-white/10 px-6 py-4 space-y-4 animate-fade-in-up">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Select Curriculum</span>
              <div className="grid grid-cols-2 gap-2">
                {specialty === "chemistry" ? (
                  boards.map((board) => (
                    <button
                      key={board.id}
                      className="px-3 py-2 rounded-lg glass border border-white/5 text-left text-xs text-slate-300 hover:text-white hover:border-gold-500/30 transition-all flex items-center justify-between"
                      onClick={() => {
                        if (!isAuthenticated) {
                          setIsLoginOpen(true);
                          setMobileMenuOpen(false);
                          return;
                        }
                        if (user?.isAdmin || user?.track === board.id) {
                          setSelectedBoard(board);
                          setMobileMenuOpen(false);
                          window.location.href = `/dashboard/curriculum`;
                        }
                      }}
                    >
                      <span className="truncate">{board.label}</span>
                    </button>
                  ))
                ) : (
                  dentalBoards.map((board) => (
                    <button
                      key={board.id}
                      className="px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-left text-xs text-indigo-300 hover:text-white transition-all"
                      onClick={() => {
                        setSelectedDentalBoard(board);
                        setMobileMenuOpen(false);
                        window.location.href = `/dashboard/dental`;
                      }}
                    >
                      <span className="truncate">{board.label}</span>
                    </button>
                  ))
                )}
              </div>
            </div>

            <div className="border-t border-white/5 pt-3 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Navigation</span>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm text-slate-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-white/5 pt-3 space-y-2">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 p-[1.5px]">
                      <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                        {user?.image ? <img src={user.image} alt={user.name} className="w-full h-full object-cover" /> : userInitial}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{user?.name || 'Student'}</p>
                      <p className="text-[11px] text-slate-400">{user?.email || 'Registered Account'}</p>
                    </div>
                  </div>
                  <Link
                    href={specialty === "chemistry" ? "/dashboard" : "/dashboard/dental"}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>My Dashboard</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400 font-medium"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm text-white font-medium"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setIsLoginOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="py-2.5 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 text-sm font-bold shadow-md"
                  >
                    Start Practicing
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
