'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import { 
    Zap, 
    Flame, 
    Clock, 
    Trophy, 
    Sparkles, 
    RotateCcw, 
    ArrowRight, 
    CheckCircle2, 
    XCircle, 
    Volume2, 
    VolumeX, 
    ChevronRight, 
    Target, 
    ShieldCheck, 
    Award,
    Home,
    HelpCircle,
    LogOut
} from 'lucide-react';
import { useGamification } from '@/contexts/GamificationContext';
import { useAuth } from '@/contexts/AuthContext';
import { questionBank, Question } from '@/data/exams';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { sanitizeKatex } from '@/lib/katex-sanitizer';

// Types for Speed Challenge
type ChallengeMode = 'lightning' | 'blitz' | 'sprint';
type CurriculumFilter = string;
type GameState = 'LOBBY' | 'COUNTDOWN' | 'PLAYING' | 'RESULTS';

interface ModeConfig {
    id: ChallengeMode;
    title: string;
    description: string;
    questionsCount: number;
    secondsPerQuestion: number;
    totalSeconds: number;
    icon: string;
    badgeColor: string;
}

const MODES: ModeConfig[] = [
    {
        id: 'lightning',
        title: '1-Min Lightning',
        description: '5 fast questions • 12s per question. Rapid streak saver!',
        questionsCount: 5,
        secondsPerQuestion: 12,
        totalSeconds: 60,
        icon: '⚡',
        badgeColor: 'from-amber-500 to-yellow-400'
    },
    {
        id: 'blitz',
        title: '3-Min Blitz',
        description: '10 questions • 18s per question. Standard competition sprint!',
        questionsCount: 10,
        secondsPerQuestion: 18,
        totalSeconds: 180,
        icon: '⏱️',
        badgeColor: 'from-indigo-500 to-cyan-400'
    },
    {
        id: 'sprint',
        title: '5-Min Sprint',
        description: '15 questions • 20s per question. Endurance high-score challenge!',
        questionsCount: 15,
        secondsPerQuestion: 20,
        totalSeconds: 300,
        icon: '🚀',
        badgeColor: 'from-rose-500 to-orange-400'
    }
];

const ALL_CURRICULA_OPTIONS: { id: string; label: string; icon: string; subtitle: string }[] = [
    { id: 'edexcel-as', label: 'Edexcel AS (Units 1–3)', icon: '🧬', subtitle: 'Formulae, Bonding, Energetics & Practicals I' },
    { id: 'edexcel-a2', label: 'Edexcel A2 (Units 4–6)', icon: '🛡️', subtitle: 'Kinetics, Equilibria, Transition Metals & Practicals II' },
    { id: 'edexcel-igcse', label: 'Edexcel IGCSE (4CH1)', icon: '⚡', subtitle: 'Principles of Chemistry & Organic' },
    { id: 'cie-igcse', label: 'Cambridge IGCSE (0620)', icon: '⚛️', subtitle: 'Foundations, Organic & Experimental Chemistry' },
    { id: 'cie-as', label: 'Cambridge AS (9701)', icon: '🧪', subtitle: 'Physical, Inorganic & Organic AS' },
    { id: 'cie-alevel', label: 'Cambridge A2 (9701)', icon: '💎', subtitle: 'Advanced Physical, Organic & Transition Elements' }
];

function isQuestionMatchCurriculum(q: Question, curriculumId: string): boolean {
    const curId = (typeof q.curriculum === 'string' ? q.curriculum : ((q.curriculum as any)?.id || '')).toLowerCase();
    const topId = (q.topic || '').toLowerCase();
    const source = (q.source || '').toLowerCase();
    const qId = q.id.toLowerCase();

    if (curriculumId === 'edexcel-as') {
        return curId.includes('edexcel-as') || curId.includes('wch11') || curId.includes('wch12') || curId.includes('wch13') ||
            topId.includes('unit-1') || topId.includes('unit-2') || topId.includes('unit-3') ||
            source.includes('wch11') || source.includes('wch12') || source.includes('wch13') ||
            qId.includes('_u1_') || qId.includes('_u2_') || qId.includes('_u3_') ||
            qId.startsWith('ex_ed_u1_') || qId.startsWith('ex_ed_u2_') || qId.startsWith('ex_ed_u3_');
    }

    if (curriculumId === 'edexcel-a2') {
        return curId.includes('edexcel-a2') || curId.includes('wch14') || curId.includes('wch15') || curId.includes('wch16') ||
            topId.includes('unit-4') || topId.includes('unit-5') || topId.includes('unit-6') ||
            source.includes('wch14') || source.includes('wch15') || source.includes('wch16') ||
            qId.includes('_u4_') || qId.includes('_u5_') || qId.includes('_u6_') ||
            qId.startsWith('ex_ed_u4_') || qId.startsWith('ex_ed_u5_') || qId.startsWith('ex_ed_u6_');
    }

    if (curriculumId === 'edexcel-igcse') {
        return curId.includes('edexcel-igcse') || curId.includes('4ch1') || source.includes('4ch1') || qId.includes('4ch1');
    }

    if (curriculumId === 'cie-igcse') {
        return (curId.includes('igcse') && !curId.includes('edexcel')) || curId.includes('0620') || source.includes('0620') || qId.includes('0620') || 
            qId.startsWith('q_som_') || qId.startsWith('q_atom_') || qId.startsWith('q_stoich_') || 
            qId.startsWith('q_elec_') || qId.startsWith('q_ener_') || qId.startsWith('q_rate_') || 
            qId.startsWith('q_acid_') || qId.startsWith('q_ptable_');
    }

    if (curriculumId === 'cie-as') {
        return curId.includes('cie-as') || curId.includes('as-level') || (curId.includes('9701') && !source.includes('paper 4') && !source.includes('paper 5'));
    }

    if (curriculumId === 'cie-alevel') {
        return curId.includes('cie-alevel') || curId.includes('a-level') || curId.includes('a2') || (curId.includes('9701') && (source.includes('paper 4') || source.includes('paper 5')));
    }

    return true;
}

// Simple synthesizer sound effects using Web Audio API
function playBeep(freq: number, type: OscillatorType, duration: number, audioCtx: AudioContext | null) {
    if (!audioCtx) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch {
        // Audio context may be restricted by browser policy before interaction
    }
}

// Math and text renderer with KaTeX
const renderTextWithMath = (text: string): React.ReactNode => {
    if (!text) return null;
    const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$)/g);

    return parts.map((part, index) => {
        if (!part) return null;

        if (part.startsWith('$$') && part.endsWith('$$')) {
            const math = part.slice(2, -2).trim();
            const sanitized = sanitizeKatex(math);
            return (
                <div key={index} className="my-2 overflow-x-auto py-1 text-center">
                    <BlockMath math={sanitized} />
                </div>
            );
        }

        if (part.startsWith('$') && part.endsWith('$')) {
            const math = part.slice(1, -1).trim();
            const sanitized = sanitizeKatex(math);
            return <InlineMath key={index} math={sanitized} />;
        }

        return <span key={index}>{part}</span>;
    });
};

export default function SpeedChallengePage() {
    const { user } = useAuth();
    const { 
        streak, 
        checkStreak, 
        addXP, 
        updateChallengeProgress, 
        saveQuestionAttempts, 
        unlockAchievement 
    } = useGamification();

    // Mode & Filter State
    const [selectedMode, setSelectedMode] = useState<ChallengeMode>('blitz');
    const [selectedCurriculum, setSelectedCurriculum] = useState<CurriculumFilter>('all');
    const [gameState, setGameState] = useState<GameState>('LOBBY');
    const [soundEnabled, setSoundEnabled] = useState(true);

    // Enrolled Tracks for the student
    const studentEnrolledTracks = useMemo(() => {
        if (!user) return ['edexcel-as', 'edexcel-a2'];
        if (user.isAdmin || user.role === 'admin' || user.role === 'moderator') {
            return ['all', 'edexcel-as', 'edexcel-a2', 'edexcel-igcse', 'cie-igcse', 'cie-as', 'cie-alevel'];
        }

        const enrolled = (user.enrolledTracks && user.enrolledTracks.length > 0)
            ? user.enrolledTracks.map(t => t.toLowerCase().trim())
            : [(user.track || (user.grade?.toLowerCase().includes('edexcel') ? 'edexcel-as' : (user.grade === 'AS Level' ? 'cie-as' : (user.grade === 'A2 Level' || user.grade === 'A Level' ? 'cie-alevel' : 'cie-igcse')))).toLowerCase().trim()];

        return enrolled;
    }, [user]);

    const availableCurricula = useMemo(() => {
        const isAdmin = user?.isAdmin || user?.role === 'admin' || user?.role === 'moderator';
        if (isAdmin) {
            return [
                { id: 'all', label: 'All Curricula (Mixed)', icon: '🌍', subtitle: 'Randomized questions across all levels' },
                ...ALL_CURRICULA_OPTIONS
            ];
        }

        const filtered = ALL_CURRICULA_OPTIONS.filter(opt => {
            return studentEnrolledTracks.some(e => {
                const clean = e.replace(/-2026\d+$/, '').toLowerCase().trim();
                return opt.id === clean || opt.id.startsWith(clean) || clean.startsWith(opt.id);
            });
        });

        if (filtered.length > 1) {
            return [
                { id: 'all', label: 'All Enrolled Curricula (Mixed)', icon: '🌍', subtitle: 'Randomized questions across your enrolled levels' },
                ...filtered
            ];
        }

        return filtered.length > 0 ? filtered : ALL_CURRICULA_OPTIONS.slice(0, 2);
    }, [user, studentEnrolledTracks]);

    // Initialize or adapt selectedCurriculum from availableCurricula and active track
    useEffect(() => {
        if (availableCurricula.length === 0) return;

        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('chemzim_active_track');
            if (saved) {
                const clean = saved.replace(/-2026\d+$/, '').toLowerCase().trim();
                const matched = availableCurricula.find(c => c.id === clean || c.id.startsWith(clean));
                if (matched) {
                    setSelectedCurriculum(matched.id);
                    return;
                }
            }
        }

        const firstSpecific = availableCurricula.find(c => c.id !== 'all') || availableCurricula[0];
        setSelectedCurriculum(firstSpecific.id);
    }, [availableCurricula]);

    const handleSelectCurriculum = (currId: string) => {
        setSelectedCurriculum(currId);
        if (currId !== 'all' && typeof window !== 'undefined') {
            localStorage.setItem('chemzim_active_track', currId);
            window.dispatchEvent(new CustomEvent('chemzim_track_changed', { detail: { trackId: currId } }));
        }
    };

    // Audio Context Ref
    const audioCtxRef = useRef<AudioContext | null>(null);

    // Countdown State
    const [countdownNumber, setCountdownNumber] = useState(3);

    // In-game Questions & Progress
    const [challengeQuestions, setChallengeQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
    const [isAnswerLocked, setIsAnswerLocked] = useState(false);
    const [showQuitConfirm, setShowQuitConfirm] = useState(false);
    
    // Timer State
    const activeModeConfig = useMemo(() => MODES.find(m => m.id === selectedMode)!, [selectedMode]);
    const [timeLeftTotal, setTimeLeftTotal] = useState(activeModeConfig.totalSeconds);
    const [timeLeftQuestion, setTimeLeftQuestion] = useState(activeModeConfig.secondsPerQuestion);
    const questionStartTimeRef = useRef<number>(Date.now());

    // Score & Combos
    const [score, setScore] = useState(0);
    const [comboCount, setComboCount] = useState(0);
    const [maxCombo, setMaxCombo] = useState(0);
    const [baseXPAccumulated, setBaseXPAccumulated] = useState(0);
    const [comboXPAccumulated, setComboXPAccumulated] = useState(0);
    const [speedBonusXPAccumulated, setSpeedBonusXPAccumulated] = useState(0);
    const [responseTimes, setResponseTimes] = useState<number[]>([]);
    
    // Mistake tracking for review
    const [missedQuestions, setMissedQuestions] = useState<{ question: Question; chosenIndex: number }[]>([]);

    // Personal Bests
    const [personalBest, setPersonalBest] = useState<number | null>(null);

    // Initialize Web Audio Context on user interaction
    const getAudioCtx = useCallback(() => {
        if (typeof window === 'undefined' || !soundEnabled) return null;
        if (!audioCtxRef.current) {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioContextClass) {
                audioCtxRef.current = new AudioContextClass();
            }
        }
        if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }
        return audioCtxRef.current;
    }, [soundEnabled]);

    // Load Personal Best from localStorage
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const key = `speed_pb_${selectedMode}_${selectedCurriculum}`;
        const saved = localStorage.getItem(key);
        if (saved) {
            setPersonalBest(parseInt(saved, 10));
        } else {
            setPersonalBest(null);
        }
    }, [selectedMode, selectedCurriculum]);

    // Filter questions for the selected curriculum
    const eligibleQuestions = useMemo(() => {
        return questionBank.filter(q => {
            // Must have multiple choice options and a valid correctAnswer index
            if (!q.options || q.options.length < 2 || typeof q.correctAnswer !== 'number') return false;
            if (q.correctAnswer < 0 || q.correctAnswer >= q.options.length) return false;

            if (selectedCurriculum === 'all') {
                return studentEnrolledTracks.some(t => isQuestionMatchCurriculum(q, t));
            }

            return isQuestionMatchCurriculum(q, selectedCurriculum);
        });
    }, [selectedCurriculum, studentEnrolledTracks]);

    // Start Countdown
    const startCountdown = () => {
        getAudioCtx();
        setGameState('COUNTDOWN');
        setCountdownNumber(3);

        if (soundEnabled) {
            playBeep(440, 'sine', 0.15, audioCtxRef.current);
        }

        const interval = setInterval(() => {
            setCountdownNumber(prev => {
                if (prev === 1) {
                    clearInterval(interval);
                    startChallengeGame();
                    return 0;
                }
                if (soundEnabled) {
                    playBeep(440, 'sine', 0.15, audioCtxRef.current);
                }
                return prev - 1;
            });
        }, 1000);
    };

    // Start Challenge Game
    const startChallengeGame = () => {
        // Shuffle eligible questions and take target count
        const shuffled = [...eligibleQuestions].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, activeModeConfig.questionsCount);

        setChallengeQuestions(selected);
        setCurrentQuestionIndex(0);
        setSelectedOptionIndex(null);
        setIsAnswerLocked(false);

        // Reset Score & Timers
        setScore(0);
        setComboCount(0);
        setMaxCombo(0);
        setBaseXPAccumulated(0);
        setComboXPAccumulated(0);
        setSpeedBonusXPAccumulated(0);
        setResponseTimes([]);
        setMissedQuestions([]);

        setTimeLeftTotal(activeModeConfig.totalSeconds);
        setTimeLeftQuestion(activeModeConfig.secondsPerQuestion);
        questionStartTimeRef.current = Date.now();

        if (soundEnabled) {
            playBeep(880, 'triangle', 0.3, audioCtxRef.current);
        }

        setGameState('PLAYING');
    };

    // Overall Game Timer
    useEffect(() => {
        if (gameState !== 'PLAYING' || showQuitConfirm) return;

        const timer = setInterval(() => {
            setTimeLeftTotal(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    finishChallenge('timeout_total');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [gameState, showQuitConfirm]);

    // Per-Question Countdown Timer
    useEffect(() => {
        if (gameState !== 'PLAYING' || isAnswerLocked || showQuitConfirm) return;

        const qTimer = setInterval(() => {
            setTimeLeftQuestion(prev => {
                if (prev <= 1) {
                    clearInterval(qTimer);
                    handleQuestionTimeout();
                    return 0;
                }
                if (prev <= 4 && soundEnabled) {
                    playBeep(260, 'sine', 0.08, audioCtxRef.current);
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(qTimer);
    }, [gameState, isAnswerLocked, currentQuestionIndex, showQuitConfirm]);

    // Handle Question Timeout (time ran out on current question)
    const handleQuestionTimeout = () => {
        if (isAnswerLocked) return;
        setIsAnswerLocked(true);
        setSelectedOptionIndex(-1); // -1 indicates timeout

        const currentQ = challengeQuestions[currentQuestionIndex];
        if (currentQ) {
            setMissedQuestions(prev => [...prev, { question: currentQ, chosenIndex: -1 }]);
        }

        // Reset combo
        setComboCount(0);

        if (soundEnabled) {
            playBeep(180, 'sawtooth', 0.25, audioCtxRef.current);
        }

        setTimeout(() => {
            advanceToNextQuestion();
        }, 1200);
    };

    // Handle Option Selection
    const handleSelectOption = (index: number) => {
        if (isAnswerLocked || gameState !== 'PLAYING') return;
        setIsAnswerLocked(true);
        setSelectedOptionIndex(index);

        const currentQ = challengeQuestions[currentQuestionIndex];
        const isCorrect = index === currentQ.correctAnswer;
        const responseTime = Math.max(0.5, (Date.now() - questionStartTimeRef.current) / 1000);
        setResponseTimes(prev => [...prev, responseTime]);

        if (isCorrect) {
            // Correct Answer
            const newCombo = comboCount + 1;
            setComboCount(newCombo);
            if (newCombo > maxCombo) setMaxCombo(newCombo);
            setScore(prev => prev + 1);

            // Base XP (10 XP per correct question)
            let earnedBase = 10;
            // Combo Multiplier: 2 in a row -> +3 XP, 3 in a row -> +6 XP, 5+ in a row -> +10 XP
            let earnedCombo = 0;
            if (newCombo >= 5) earnedCombo = 10;
            else if (newCombo >= 3) earnedCombo = 6;
            else if (newCombo >= 2) earnedCombo = 3;

            // Speed Bonus: answered in under 5 seconds -> +5 XP bonus!
            let earnedSpeed = 0;
            if (responseTime <= 5.0) {
                earnedSpeed = 5;
            }

            setBaseXPAccumulated(prev => prev + earnedBase);
            setComboXPAccumulated(prev => prev + earnedCombo);
            setSpeedBonusXPAccumulated(prev => prev + earnedSpeed);

            if (soundEnabled) {
                // Happy chord
                playBeep(523.25, 'triangle', 0.1, audioCtxRef.current); // C5
                setTimeout(() => playBeep(659.25, 'triangle', 0.15, audioCtxRef.current), 80); // E5
            }
        } else {
            // Wrong Answer
            setComboCount(0);
            setMissedQuestions(prev => [...prev, { question: currentQ, chosenIndex: index }]);

            if (soundEnabled) {
                playBeep(220, 'sawtooth', 0.2, audioCtxRef.current);
            }
        }

        // Auto advance after short feedback delay
        setTimeout(() => {
            advanceToNextQuestion();
        }, 1200);
    };

    // Advance to next question or finish
    const advanceToNextQuestion = () => {
        if (currentQuestionIndex + 1 >= challengeQuestions.length) {
            finishChallenge('completed_all');
        } else {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOptionIndex(null);
            setIsAnswerLocked(false);
            setTimeLeftQuestion(activeModeConfig.secondsPerQuestion);
            questionStartTimeRef.current = Date.now();
        }
    };

    // Finish Challenge & Award XP/Streaks
    const finishChallenge = (reason: 'completed_all' | 'timeout_total') => {
        setGameState('RESULTS');

        const totalEarnedXP = baseXPAccumulated + comboXPAccumulated + speedBonusXPAccumulated;

        // Trigger Streak Verification & Extension!
        checkStreak();

        // Award Earned XP if any
        if (totalEarnedXP > 0) {
            addXP(totalEarnedXP, `speed-challenge-${selectedMode}-${Date.now()}`);
        }

        // Update Daily Challenge Progress
        updateChallengeProgress('quiz', currentQuestionIndex + 1);

        // Record attempts in gamification context
        const attempts = challengeQuestions.slice(0, currentQuestionIndex + 1).map((q, idx) => {
            const wasMissed = missedQuestions.some(m => m.question.id === q.id);
            return {
                questionId: q.id,
                difficulty: typeof q.level === 'number' ? q.level : 2,
                isCorrect: !wasMissed,
                unitId: q.topic,
                tags: [typeof q.curriculum === 'string' ? q.curriculum : 'curriculum', 'speed-challenge']
            };
        });
        if (attempts.length > 0) {
            saveQuestionAttempts(attempts);
        }

        // Check Achievements
        unlockAchievement('speed-first');
        if (maxCombo >= 5) {
            unlockAchievement('speed-streak-5');
        }
        if (score === challengeQuestions.length && challengeQuestions.length > 0) {
            unlockAchievement('speed-ace');
        }

        // Update Personal Best in localStorage
        const key = `speed_pb_${selectedMode}_${selectedCurriculum}`;
        const currentPB = personalBest || 0;
        if (score > currentPB) {
            localStorage.setItem(key, score.toString());
            setPersonalBest(score);
        }

        if (soundEnabled) {
            setTimeout(() => {
                playBeep(523.25, 'sine', 0.15, audioCtxRef.current);
                setTimeout(() => playBeep(659.25, 'sine', 0.15, audioCtxRef.current), 100);
                setTimeout(() => playBeep(783.99, 'sine', 0.25, audioCtxRef.current), 200);
            }, 150);
        }
    };

    // Compute Metrics for Results Screen
    const finalAccuracy = useMemo(() => {
        const total = challengeQuestions.length;
        if (total === 0) return 0;
        return Math.round((score / total) * 100);
    }, [score, challengeQuestions]);

    const avgResponseTime = useMemo(() => {
        if (responseTimes.length === 0) return 0;
        const sum = responseTimes.reduce((a, b) => a + b, 0);
        return (sum / responseTimes.length).toFixed(1);
    }, [responseTimes]);

    const speedRank = useMemo(() => {
        if (finalAccuracy === 100) return { title: 'Apex Chemist', icon: '⚡', color: 'text-amber-400', badge: 'bg-amber-400/20 text-amber-300 border-amber-400/30' };
        if (finalAccuracy >= 80) return { title: 'Rapid Reactor', icon: '🔥', color: 'text-orange-400', badge: 'bg-orange-400/20 text-orange-300 border-orange-400/30' };
        if (finalAccuracy >= 60) return { title: 'Speedy Synthesizer', icon: '🧪', color: 'text-emerald-400', badge: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30' };
        return { title: 'Apprentice in Training', icon: '🛡️', color: 'text-indigo-400', badge: 'bg-indigo-400/20 text-indigo-300 border-indigo-400/30' };
    }, [finalAccuracy]);

    const currentQuestion = challengeQuestions[currentQuestionIndex];

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            
            {/* Top Navigation & Status Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Link
                        href="/dashboard"
                        className="p-2.5 rounded-2xl bg-surface border border-border text-slate-400 hover:text-white hover:bg-surface-hover transition-all"
                    >
                        <Home className="w-5 h-5" />
                    </Link>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center gap-1">
                                <Zap className="w-3.5 h-3.5" /> Speed Blitz Mode
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                                Double XP Combos
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            Reaction Time & Speed Challenge
                        </h1>
                    </div>
                </div>

                {/* Right Status Badges: Streak & Sound */}
                <div className="flex items-center gap-3">
                    {/* Active Streak Badge */}
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shadow-lg shadow-orange-500/5">
                        <Flame className="w-5 h-5 animate-pulse text-orange-400" />
                        <div>
                            <span className="text-[10px] text-orange-400/80 font-bold block uppercase leading-none">Daily Streak</span>
                            <span className="text-sm font-black text-white leading-none">
                                {streak.currentStreak} {streak.currentStreak === 1 ? 'Day' : 'Days'}
                            </span>
                        </div>
                    </div>

                    {/* Exit Challenge Button (during active game or countdown) */}
                    {(gameState === 'PLAYING' || gameState === 'COUNTDOWN') && (
                        <button
                            onClick={() => setShowQuitConfirm(true)}
                            className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20 hover:border-rose-500/50 transition-all font-bold text-xs cursor-pointer shadow-lg shadow-rose-500/5"
                            title="Exit Challenge"
                        >
                            <LogOut className="w-4 h-4" />
                            <span>Exit</span>
                        </button>
                    )}

                    {/* Sound Toggle */}
                    <button
                        onClick={() => setSoundEnabled(prev => !prev)}
                        className={`p-2.5 rounded-2xl border transition-all cursor-pointer ${
                            soundEnabled 
                                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20' 
                                : 'bg-surface border-border text-slate-500 hover:text-slate-300'
                        }`}
                        title={soundEnabled ? 'Mute Sounds' : 'Enable Sounds'}
                    >
                        {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* ─── STATE 1: LOBBY & CONFIGURATION ────────────────────────── */}
            {gameState === 'LOBBY' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                    
                    {/* Hero Banner with Streak Callout */}
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-950 via-slate-900 to-[#070f1e] border border-indigo-500/20 p-8 sm:p-10 shadow-2xl shadow-indigo-500/10">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="space-y-3 text-center md:text-left max-w-xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-wider">
                                    <Sparkles className="w-3.5 h-3.5" /> High Velocity Drill
                                </div>
                                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                                    Fast Answers, Maximum Focus, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Bonus XP</span>
                                </h2>
                                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                    Train your instincts under official exam timing. Chain consecutive correct answers for massive combo multipliers and preserve your daily active streak!
                                </p>
                            </div>

                            {/* Big Animated Flame & Streak Pill */}
                            <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-surface/40 border border-white/10 backdrop-blur-xl shadow-inner min-w-[200px]">
                                <div className="text-6xl filter drop-shadow-[0_0_20px_rgba(249,115,22,0.4)] animate-bounce duration-[2000ms]">
                                    🔥
                                </div>
                                <span className="text-xl font-black text-white mt-2">
                                    {streak.currentStreak > 0 ? `${streak.currentStreak} Days Streak` : 'Start Your Streak!'}
                                </span>
                                <span className="text-xs text-orange-400 font-semibold mt-0.5 text-center">
                                    Completing 1 Blitz extends streak today
                                </span>
                            </div>
                        </div>

                        {/* Background subtle glow */}
                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
                    </div>

                    {/* Step 1: Choose Duration / Mode */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-xs font-bold flex items-center justify-center">
                                1
                            </span>
                            <h3 className="text-lg font-bold text-white">Select Challenge Duration</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {MODES.map(mode => {
                                const isSelected = selectedMode === mode.id;
                                return (
                                    <button
                                        key={mode.id}
                                        onClick={() => setSelectedMode(mode.id)}
                                        className={`relative p-6 rounded-3xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                            isSelected
                                                ? 'bg-surface border-indigo-500 shadow-xl shadow-indigo-500/10 ring-2 ring-indigo-500/40'
                                                : 'bg-surface/50 border-border hover:bg-surface-hover hover:border-slate-700'
                                        }`}
                                    >
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl">{mode.icon}</span>
                                                {isSelected && (
                                                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                                        Selected
                                                    </span>
                                                )}
                                            </div>
                                            <h4 className="text-lg font-extrabold text-white">{mode.title}</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed">{mode.description}</p>
                                        </div>

                                        <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-300 font-semibold">
                                            <span>⏱️ {mode.totalSeconds}s Total</span>
                                            <span>⚡ {mode.questionsCount} Questions</span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Step 2: Choose Curriculum Focus */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-xs font-bold flex items-center justify-center">
                                2
                            </span>
                            <h3 className="text-lg font-bold text-white">Choose Question Syllabus</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {availableCurricula.map(curr => {
                                const isSelected = selectedCurriculum === curr.id;
                                return (
                                    <button
                                        key={curr.id}
                                        onClick={() => handleSelectCurriculum(curr.id)}
                                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-4 ${
                                            isSelected
                                                ? 'bg-surface border-indigo-500 ring-2 ring-indigo-500/30 text-white'
                                                : 'bg-surface/50 border-border hover:bg-surface-hover text-slate-300 hover:text-white'
                                        }`}
                                    >
                                        <span className="text-2xl flex-shrink-0">{curr.icon}</span>
                                        <div className="min-w-0 flex-1">
                                            <div className="font-extrabold text-sm">{curr.label}</div>
                                            <div className="text-xs text-slate-400 truncate">{curr.subtitle}</div>
                                        </div>
                                        {isSelected && <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Personal Best & Launch Button */}
                    <div className="p-6 rounded-3xl bg-surface border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                <Trophy className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
                                    Personal Record ({activeModeConfig.title})
                                </span>
                                <span className="text-lg font-black text-white">
                                    {personalBest !== null 
                                        ? `${personalBest} / ${activeModeConfig.questionsCount} Correct (${Math.round((personalBest / activeModeConfig.questionsCount) * 100)}%)` 
                                        : 'No record yet • Set your high score!'}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={startCountdown}
                            className="w-full sm:w-auto px-10 py-4 rounded-2xl font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-xl shadow-amber-500/20 active:scale-95 cursor-pointer flex items-center justify-center gap-3 text-base flex-shrink-0"
                        >
                            <Zap className="w-5 h-5 fill-current" />
                            Start Blitz Challenge!
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            )}

            {/* ─── STATE 2: 3-2-1 COUNTDOWN ──────────────────────────────── */}
            {gameState === 'COUNTDOWN' && (
                <div className="min-h-[500px] flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-90 duration-300">
                    <div className="w-36 h-36 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-amber-500/30 animate-pulse">
                        <span className="text-7xl font-black text-white">
                            {countdownNumber}
                        </span>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-extrabold text-white">Get Ready!</h2>
                        <p className="text-sm text-slate-400 max-w-sm">
                            Speed matters. Quick correct answers grant Speed Bonus XP!
                        </p>
                    </div>
                </div>
            )}

            {/* ─── STATE 3: PLAYING IN-GAME ──────────────────────────────── */}
            {gameState === 'PLAYING' && currentQuestion && (
                <div className="space-y-6 animate-in fade-in duration-300">
                    
                    {/* Top Game Bar: Timers, Score & Combos */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        
                        {/* Overall Time Left */}
                        <div className="p-4 rounded-2xl bg-surface border border-border flex items-center gap-3">
                            <Clock className={`w-5 h-5 ${timeLeftTotal <= 30 ? 'text-rose-400 animate-pulse' : 'text-indigo-400'}`} />
                            <div>
                                <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Time</span>
                                <span className={`text-lg font-black font-mono ${timeLeftTotal <= 30 ? 'text-rose-400' : 'text-white'}`}>
                                    {Math.floor(timeLeftTotal / 60)}:{(timeLeftTotal % 60).toString().padStart(2, '0')}
                                </span>
                            </div>
                        </div>

                        {/* Question Timer with Progress */}
                        <div className="p-4 rounded-2xl bg-surface border border-border flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-black text-xs border ${
                                timeLeftQuestion <= 4
                                    ? 'bg-rose-500/20 border-rose-500 text-rose-300 animate-pulse'
                                    : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                            }`}>
                                {timeLeftQuestion}s
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-[10px] text-slate-400 font-bold uppercase block">Question Timer</span>
                                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-1">
                                    <div 
                                        className={`h-full transition-all duration-1000 ${
                                            timeLeftQuestion <= 4 ? 'bg-rose-500' : 'bg-amber-400'
                                        }`}
                                        style={{ width: `${(timeLeftQuestion / activeModeConfig.secondsPerQuestion) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Current Score */}
                        <div className="p-4 rounded-2xl bg-surface border border-border flex items-center gap-3">
                            <Target className="w-5 h-5 text-emerald-400" />
                            <div>
                                <span className="text-[10px] text-slate-400 font-bold uppercase block">Current Score</span>
                                <span className="text-lg font-black text-white">
                                    {score} <span className="text-xs text-slate-500 font-normal">/ {challengeQuestions.length}</span>
                                </span>
                            </div>
                        </div>

                        {/* Live Combo Multiplier */}
                        <div className={`p-4 rounded-2xl border transition-all flex items-center gap-3 ${
                            comboCount >= 5
                                ? 'bg-orange-500/20 border-orange-500/40 text-orange-300 shadow-lg shadow-orange-500/10'
                                : comboCount >= 2
                                ? 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                                : 'bg-surface border-border text-slate-400'
                        }`}>
                            <Flame className={`w-5 h-5 ${comboCount >= 2 ? 'text-orange-400 animate-bounce' : 'text-slate-500'}`} />
                            <div>
                                <span className="text-[10px] font-bold uppercase block">Combo Streak</span>
                                <span className="text-lg font-black text-white">
                                    {comboCount > 1 ? `x${comboCount} 🔥` : `${comboCount}`}
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Question Card */}
                    <div className="p-6 sm:p-8 rounded-[2.5rem] bg-surface border border-border shadow-2xl space-y-6">
                        
                        {/* Question Meta Header */}
                        <div className="flex items-center justify-between border-b border-border pb-4">
                            <span className="text-xs font-black uppercase tracking-wider text-indigo-400">
                                Question {currentQuestionIndex + 1} of {challengeQuestions.length}
                            </span>
                            <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${
                                    currentQuestion.level === 3 
                                        ? 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                                        : currentQuestion.level === 2
                                        ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                                        : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                                }`}>
                                    {currentQuestion.level === 3 ? 'Hard' : currentQuestion.level === 2 ? 'Medium' : 'Easy'}
                                </span>
                                {currentQuestion.source && (
                                    <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white/5">
                                        {currentQuestion.source}
                                    </span>
                                )}
                                <button
                                    onClick={() => setShowQuitConfirm(true)}
                                    className="ml-2 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-800/80 hover:bg-rose-500/10 border border-slate-700 hover:border-rose-500/30 text-slate-400 hover:text-rose-400 transition-all text-xs font-semibold cursor-pointer"
                                    title="Quit Challenge"
                                >
                                    <LogOut className="w-3.5 h-3.5" />
                                    <span>Exit</span>
                                </button>
                            </div>
                        </div>

                        {/* Question Prompt */}
                        <div className="text-base sm:text-lg font-bold text-white leading-relaxed">
                            {renderTextWithMath(currentQuestion.question)}
                        </div>

                        {/* Options Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {currentQuestion.options.map((opt, optIdx) => {
                                const isSelected = selectedOptionIndex === optIdx;
                                const isCorrect = optIdx === currentQuestion.correctAnswer;
                                const isLocked = isAnswerLocked;

                                let btnStyle = 'bg-surface-hover/60 border-border text-slate-200 hover:bg-surface-hover hover:border-slate-600';

                                if (isLocked) {
                                    if (isCorrect) {
                                        btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/40';
                                    } else if (isSelected && !isCorrect) {
                                        btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-100 ring-2 ring-rose-500/40';
                                    } else {
                                        btnStyle = 'bg-surface/30 border-border/40 text-slate-500 opacity-60';
                                    }
                                }

                                const letter = String.fromCharCode(65 + optIdx);

                                return (
                                    <button
                                        key={optIdx}
                                        disabled={isLocked}
                                        onClick={() => handleSelectOption(optIdx)}
                                        className={`p-4 rounded-2xl border text-left transition-all duration-150 flex items-start gap-3 cursor-pointer ${btnStyle}`}
                                    >
                                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 ${
                                            isLocked && isCorrect
                                                ? 'bg-emerald-500 text-slate-950'
                                                : isLocked && isSelected && !isCorrect
                                                ? 'bg-rose-500 text-white'
                                                : 'bg-white/5 text-slate-400'
                                        }`}>
                                            {letter}
                                        </span>
                                        <div className="text-sm font-medium leading-relaxed pt-0.5 flex-1 min-w-0">
                                            {renderTextWithMath(opt.text)}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Instant Feedback Callout when locked */}
                        {isAnswerLocked && (
                            <div className="pt-2 animate-in fade-in duration-200">
                                {selectedOptionIndex === currentQuestion.correctAnswer ? (
                                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                            <span>Correct! +10 XP Base {comboCount >= 2 && `• Combo Multiplier (+${comboCount >= 5 ? 10 : comboCount >= 3 ? 6 : 3} XP)`}</span>
                                        </div>
                                        <span className="text-[10px] text-emerald-400/80">Advancing...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold">
                                        <div className="flex items-center gap-2">
                                            <XCircle className="w-4 h-4 text-rose-400" />
                                            <span>
                                                {selectedOptionIndex === -1 ? 'Time Expired!' : 'Incorrect.'} Correct answer was ({String.fromCharCode(65 + currentQuestion.correctAnswer)})
                                            </span>
                                        </div>
                                        <span className="text-[10px] text-rose-400/80">Advancing...</span>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>

                </div>
            )}

            {/* ─── STATE 4: RESULTS SCREEN ───────────────────────────────── */}
            {gameState === 'RESULTS' && (
                <div className="space-y-8 animate-in zoom-in-95 duration-400">
                    
                    {/* Victory / Summary Card */}
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-surface via-surface to-[#070f1e] border border-border p-8 sm:p-12 text-center space-y-6 shadow-2xl">
                        
                        {/* Speed Rank Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-black uppercase tracking-wider mx-auto shadow-lg">
                            <span className="text-xl">{speedRank.icon}</span>
                            <span className={speedRank.color}>{speedRank.title}</span>
                        </div>

                        {/* Big Score Header */}
                        <div className="space-y-2">
                            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                                Challenge Completed!
                            </h2>
                            <p className="text-slate-400 text-sm max-w-md mx-auto">
                                Here is your high-velocity performance breakdown and rewards for this session.
                            </p>
                        </div>

                        {/* 4 Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 text-left">
                            
                            {/* Score */}
                            <div className="p-5 rounded-2xl bg-surface-hover/50 border border-border">
                                <span className="text-[10px] font-bold text-slate-400 uppercase block">Accuracy Score</span>
                                <span className="text-2xl sm:text-3xl font-black text-white block mt-1">
                                    {score} / {challengeQuestions.length}
                                </span>
                                <span className="text-xs text-emerald-400 font-bold">{finalAccuracy}% Correct</span>
                            </div>

                            {/* Total XP Earned */}
                            <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                                <span className="text-[10px] font-bold text-indigo-300 uppercase block">Total XP Won</span>
                                <span className="text-2xl sm:text-3xl font-black text-indigo-400 block mt-1">
                                    +{baseXPAccumulated + comboXPAccumulated + speedBonusXPAccumulated}
                                </span>
                                <span className="text-[10px] text-indigo-300/80 block">Base + Combo + Speed</span>
                            </div>

                            {/* Avg Reaction Time */}
                            <div className="p-5 rounded-2xl bg-surface-hover/50 border border-border">
                                <span className="text-[10px] font-bold text-slate-400 uppercase block">Avg Response</span>
                                <span className="text-2xl sm:text-3xl font-black text-white block mt-1">
                                    {avgResponseTime}s
                                </span>
                                <span className="text-xs text-slate-400 font-semibold">Per Question</span>
                            </div>

                            {/* Max Combo */}
                            <div className="p-5 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                                <span className="text-[10px] font-bold text-orange-400 uppercase block">Max Combo</span>
                                <span className="text-2xl sm:text-3xl font-black text-orange-400 block mt-1">
                                    {maxCombo}x 🔥
                                </span>
                                <span className="text-xs text-orange-300/80 font-bold">Streak Saved</span>
                            </div>

                        </div>

                        {/* Action CTAs */}
                        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                            <button
                                onClick={startCountdown}
                                className="px-8 py-4 rounded-2xl font-black text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-xl shadow-amber-500/20 active:scale-95 cursor-pointer flex items-center gap-2 text-sm"
                            >
                                <RotateCcw className="w-4 h-4" />
                                Play Again
                            </button>

                            <button
                                onClick={() => setGameState('LOBBY')}
                                className="px-6 py-4 rounded-2xl font-bold text-white bg-surface-hover border border-border hover:bg-slate-700 transition-all active:scale-95 cursor-pointer flex items-center gap-2 text-sm"
                            >
                                Change Mode / Curriculum
                            </button>

                            <Link
                                href="/dashboard/diagnostics"
                                className="px-6 py-4 rounded-2xl font-bold text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 hover:bg-indigo-500/25 transition-all active:scale-95 flex items-center gap-2 text-sm"
                            >
                                View Weakness Diagnostics
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </div>

                    {/* Missed Questions Review Section */}
                    {missedQuestions.length > 0 && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <AlertCircleIcon className="w-5 h-5 text-rose-400" />
                                <h3 className="text-xl font-bold text-white">
                                    Missed Questions Review ({missedQuestions.length})
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {missedQuestions.map((item, mIdx) => {
                                    const q = item.question;
                                    const chosen = item.chosenIndex;
                                    const correct = q.correctAnswer;

                                    return (
                                        <div key={mIdx} className="p-5 rounded-2xl bg-surface border border-border space-y-3">
                                            <div className="text-sm font-bold text-white leading-relaxed">
                                                {renderTextWithMath(q.question)}
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-200">
                                                    <span className="font-black block text-[10px] uppercase text-rose-400 mb-1">
                                                        Your Selection:
                                                    </span>
                                                    {chosen === -1 
                                                        ? '⏱️ Time Ran Out' 
                                                        : `(${String.fromCharCode(65 + chosen)}) ${q.options[chosen]?.text || ''}`}
                                                </div>

                                                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
                                                    <span className="font-black block text-[10px] uppercase text-emerald-400 mb-1">
                                                        Correct Answer:
                                                    </span>
                                                    ({String.fromCharCode(65 + correct)}) {q.options[correct]?.text || ''}
                                                </div>
                                            </div>

                                            {q.explanation && (
                                                <div className="p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/15 text-xs text-slate-300 leading-relaxed">
                                                    <span className="font-bold text-indigo-400 block mb-0.5">Explanation:</span>
                                                    {renderTextWithMath(q.explanation)}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                </div>
            )}

            {/* ─── MODAL: CONFIRM QUIT CHALLENGE ───────────────────────── */}
            {showQuitConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
                        <div className="w-14 h-14 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto">
                            <LogOut className="w-7 h-7" />
                        </div>

                        <div className="text-center space-y-2">
                            <h3 className="text-xl font-extrabold text-white">
                                Quit Speed Challenge?
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                Are you sure you want to exit? Your progress for this blitz run will be saved up to this question, but unfinished questions won't count.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <button
                                onClick={() => setShowQuitConfirm(false)}
                                className="w-full py-3.5 px-4 rounded-xl bg-surface-hover hover:bg-slate-700 text-white font-bold text-sm border border-border transition-all cursor-pointer"
                            >
                                Resume Challenge
                            </button>
                            <button
                                onClick={() => {
                                    setShowQuitConfirm(false);
                                    setGameState('LOBBY');
                                }}
                                className="w-full py-3.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 transition-all cursor-pointer"
                            >
                                Exit to Menu
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

function AlertCircleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    );
}
