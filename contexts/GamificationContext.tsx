'use client';

import { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { calculateLevel } from '@/lib/level-utils';

export interface StreakData {
    currentStreak: number;
    longestStreak: number;
    lastActiveDate: string;
    totalDaysActive: number;
}

export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: string;
    unlockedAt?: string;
    requirement: {
        type: 'xp' | 'lessons' | 'quizzes' | 'streak' | 'level';
        value: number;
    };
}

export interface DailyChallenge {
    id: string;
    title: string;
    description: string;
    xpReward: number;
    type: 'lesson' | 'quiz' | 'flashcard';
    target: number;
    progress: number;
    completed: boolean;
    expiresAt: string;
}

export interface MistakeItem {
    questionId: string;
    unitId: string;
    level: number;
    tags?: string[];
    wrongCount: number;
    nextReviewDate: string;   // YYYY-MM-DD
    interval: number;         // days until next review (1, 3, 7, 14, 30)
    lastReviewedAt: string;   // YYYY-MM-DD
}

export interface SolvedQuestionStatus {
    questionId: string;
    difficulty: number; // 1 | 2 | 3
    isCorrect: boolean;
    attemptsCount: number;
    lastAttemptAt: string; // ISO String
}

interface UserData {
    userId: string;
    xp: number;
    level: number;
    streak: StreakData;
    completedLessons: string[];
    quizScores: Record<string, number>;
    unlockedAchievements: string[];
    dailyChallenges: { date: string; challenges: DailyChallenge[] };
    mistakeInbox?: MistakeItem[];
    solvedQuestions?: Record<string, SolvedQuestionStatus>;
}

interface XPQueueItem {
    eventId: string;
    amount: number;
    timestamp: number;
}

interface GamificationContextType {
    streak: StreakData;
    achievements: Achievement[];
    unlockedAchievements: string[];
    dailyChallenges: DailyChallenge[];
    xp: number;
    level: number;
    completedLessons: string[];
    quizScores: Record<string, number>;
    isLoading: boolean;
    checkStreak: () => void;
    unlockAchievement: (id: string) => void;
    updateChallengeProgress: (type: string, amount: number) => void;
    addXP: (amount: number, eventId?: string) => void;
    completeLesson: (lessonId: string) => void;
    saveQuizScore: (quizId: string, score: number) => void;
    mistakeInbox: MistakeItem[];
    saveMistakes: (wrongQuestions: { id: string; unitId: string; level: number; tags?: string[] }[]) => void;
    updateMistakeAfterReview: (questionId: string, wasCorrect: boolean) => void;
    removeMistake: (questionId: string) => void;
    solvedQuestions: Record<string, SolvedQuestionStatus>;
    saveQuestionAttempts: (attempts: Array<{ questionId: string; difficulty: number; isCorrect: boolean; unitId?: string; tags?: string[] }>) => void;
}

const defaultStreak: StreakData = {
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: '',
    totalDaysActive: 0,
};

// All available achievements
const allAchievements: Achievement[] = [
    { id: 'first-lesson', name: 'First Step', description: 'Complete your first lesson', icon: '📖', requirement: { type: 'lessons', value: 1 } },
    { id: 'five-lessons', name: 'Diligent Student', description: 'Complete 5 lessons', icon: '📚', requirement: { type: 'lessons', value: 5 } },
    { id: 'first-quiz', name: 'Quiz Taker', description: 'Complete your first quiz', icon: '✍️', requirement: { type: 'quizzes', value: 1 } },
    { id: 'perfect-quiz', name: 'Perfect Score', description: 'Get 100% on a quiz', icon: '💯', requirement: { type: 'quizzes', value: 100 } },
    { id: 'xp-100', name: 'Point Collector', description: 'Earn 100 XP', icon: '⭐', requirement: { type: 'xp', value: 100 } },
    { id: 'xp-500', name: 'Rising Star', description: 'Earn 500 XP', icon: '🌟', requirement: { type: 'xp', value: 500 } },
    { id: 'xp-1000', name: 'Chemistry Expert', description: 'Earn 1000 XP', icon: '🏆', requirement: { type: 'xp', value: 1000 } },
    { id: 'streak-3', name: '3-Day Streak', description: 'Maintain a 3-day active streak', icon: '🔥', requirement: { type: 'streak', value: 3 } },
    { id: 'streak-7', name: '7-Day Streak', description: 'Maintain a 7-day active streak', icon: '🔥🔥', requirement: { type: 'streak', value: 7 } },
    { id: 'streak-30', name: '30-Day Streak', description: 'Maintain a 30-day active streak', icon: '🔥🔥🔥', requirement: { type: 'streak', value: 30 } },
    { id: 'level-5', name: 'Level 5 Reached', description: 'Reach Level 5', icon: '🎖️', requirement: { type: 'level', value: 5 } },
    { id: 'level-10', name: 'Level 10 Reached', description: 'Reach Level 10', icon: '🏅', requirement: { type: 'level', value: 10 } },
    { id: 'speed-first', name: 'Lightning Chemist', description: 'Complete your first Speed Blitz challenge', icon: '⚡', requirement: { type: 'quizzes', value: 1 } },
    { id: 'speed-streak-5', name: 'Rapid Reaction', description: 'Hit a 5-question combo streak in Speed Mode', icon: '🔥', requirement: { type: 'quizzes', value: 5 } },
    { id: 'speed-ace', name: 'Flawless Blitz', description: 'Score 100% in a Speed Challenge', icon: '💎', requirement: { type: 'quizzes', value: 100 } },
];

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export function GamificationProvider({ children }: { children: React.ReactNode }) {
    const { user, updateUser } = useAuth();
    const [streak, setStreak] = useState<StreakData>(defaultStreak);
    const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
    const [dailyChallenges, setDailyChallenges] = useState<DailyChallenge[]>([]);
    const [xp, setXP] = useState(0);
    const [level, setLevel] = useState(1);
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [quizScores, setQuizScores] = useState<Record<string, number>>({});
    const [isLoading, setIsLoading] = useState(true);
    const [mistakeInbox, setMistakeInbox] = useState<MistakeItem[]>([]);
    const [solvedQuestions, setSolvedQuestions] = useState<Record<string, SolvedQuestionStatus>>({});

    const isSyncing = useRef(false);
    // Store user.id in a ref so syncPendingXP can read it without user in its dependency array
    const userIdRef = useRef<string | null>(null);
    userIdRef.current = user?.id ?? null;

    const saveState = useCallback((key: string, value: any) => {
        const uid = userIdRef.current;
        if (!uid) return;
        const prefix = `gamify_${uid}_`;
        localStorage.setItem(`${prefix}${key}`, JSON.stringify(value));
    }, []);

    // WAL pending queue syncing mechanism
    // NOTE: Does NOT call updateUser to avoid triggering the user→useEffect→syncPendingXP loop.
    // XP is persisted to localStorage and Firestore; AuthContext re-reads it on next session verify.
    const syncPendingXP = useCallback(async () => {
        const uid = userIdRef.current;
        if (!uid || isSyncing.current) return;
        const prefix = `gamify_${uid}_`;
        const queueKey = `${prefix}xp_queue`;

        const savedQueue = localStorage.getItem(queueKey);
        if (!savedQueue) return;

        const queue: XPQueueItem[] = JSON.parse(savedQueue);
        if (queue.length === 0) return;

        isSyncing.current = true;

        try {
            const response = await fetch('/api/auth/sync-xp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ xpUpdates: queue })
            });

            const result = await response.json();
            if (result.success && Array.isArray(result.syncedEventIds)) {
                // Remove processed items from local queue
                const updatedQueue = queue.filter(item => !result.syncedEventIds.includes(item.eventId));
                localStorage.setItem(queueKey, JSON.stringify(updatedQueue));

                // Update local XP state only — do NOT call updateUser here
                // (calling updateUser changes the user object → triggers useEffect([user]) → infinite loop)
                if (typeof result.xp === 'number') {
                    setXP(result.xp);
                    setLevel(result.level);
                    localStorage.setItem(`${prefix}xp`, JSON.stringify(result.xp));
                }
            }
        } catch (e) {
            console.warn('[Sync Pending XP] Failed (offline or server error). Stained in queue:', e);
        } finally {
            isSyncing.current = false;
        }
    }, []);

    // Trigger migration of legacy XP if Firestore contains 0 XP
    const migrateLegacyXP = useCallback(async (legacyXP: number) => {
        if (!user || legacyXP <= 0) return;

        try {
            const response = await fetch('/api/auth/migrate-xp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ xp: legacyXP })
            });
            const result = await response.json();
            if (result.success) {
                setXP(result.xp);
                setLevel(result.level);
                saveState('xp', result.xp);
                updateUser({ xp: result.xp, level: result.level });
            }
        } catch (e) {
            console.error('[Legacy XP Migration] Migration failed:', e);
        }
    }, [user, saveState, updateUser]);

    // Load initial data from localStorage and fetch Firestore state
    // Depend on user.id only (not the full user object) to avoid re-running when AuthContext
    // updates other fields (e.g. grade or lastLogin) mid-session
    const userId = user?.id;
    useEffect(() => {
        if (user) {
            const loadAndMigrate = async () => {
                const prefix = `gamify_${user.id}_`;
                
                const savedStreak = localStorage.getItem(`${prefix}streakData`);
                if (savedStreak) setStreak(JSON.parse(savedStreak));
                else setStreak(defaultStreak);

                const savedAchievements = localStorage.getItem(`${prefix}unlockedAchievements`);
                if (savedAchievements) setUnlockedAchievements(JSON.parse(savedAchievements));
                else setUnlockedAchievements([]);

                const savedLessons = localStorage.getItem(`${prefix}completedLessons`);
                if (savedLessons) setCompletedLessons(JSON.parse(savedLessons));
                else setCompletedLessons([]);

                const savedScores = localStorage.getItem(`${prefix}quizScores`);
                if (savedScores) setQuizScores(JSON.parse(savedScores));
                else setQuizScores({});

                const savedMistakes = localStorage.getItem(`${prefix}mistakeInbox`);
                if (savedMistakes) setMistakeInbox(JSON.parse(savedMistakes));
                else setMistakeInbox([]);

                const savedSolved = localStorage.getItem(`${prefix}solvedQuestions`);
                if (savedSolved) setSolvedQuestions(JSON.parse(savedSolved));
                else setSolvedQuestions({});

                // Sync daily challenges
                const today = new Date().toDateString();
                const savedChallenges = localStorage.getItem(`${prefix}dailyChallenges`);
                if (savedChallenges) {
                    const parsed = JSON.parse(savedChallenges);
                    const hasArabic = JSON.stringify(parsed.challenges).match(/[\u0600-\u06FF]/);
                    if (parsed.date === today && !hasArabic) {
                        setDailyChallenges(parsed.challenges);
                    } else {
                        generateDailyChallenges(prefix);
                    }
                } else {
                    generateDailyChallenges(prefix);
                }

                // XP Hydration & Migration Logic
                const savedXP = localStorage.getItem(`${prefix}xp`);
                const localXPVal = savedXP ? parseInt(savedXP) : 0;

                // Sync base state from server if it has data
                if (typeof user.xp === 'number' && user.xp > 0) {
                    setXP(user.xp);
                    setLevel(user.level || 1);
                    saveState('xp', user.xp);
                } else if (localXPVal > 0) {
                    // Firestore is 0, local progress is positive -> Migrate
                    await migrateLegacyXP(localXPVal);
                } else {
                    setXP(0);
                    setLevel(1);
                }

                // Process pending queue on boot
                syncPendingXP();
            };

            loadAndMigrate();
        }
        setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]); // Only re-run when user switches accounts, not on every user object mutation

    // Sync online detection to trigger pending syncs
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleOnline = () => {
            syncPendingXP();
        };

        window.addEventListener('online', handleOnline);
        return () => window.removeEventListener('online', handleOnline);
    }, [syncPendingXP]);

    const generateDailyChallenges = (prefix: string) => {
        const today = new Date().toDateString();
        const challenges: DailyChallenge[] = [
            {
                id: 'daily-lesson',
                title: 'Daily Lesson',
                description: 'Complete 1 lesson',
                xpReward: 20,
                type: 'lesson',
                target: 1,
                progress: 0,
                completed: false,
                expiresAt: new Date(new Date().setHours(23, 59, 59, 999)).toISOString(),
            },
            {
                id: 'daily-quiz',
                title: 'Quick Quiz',
                description: 'Answer 5 quiz questions',
                xpReward: 30,
                type: 'quiz',
                target: 5,
                progress: 0,
                completed: false,
                expiresAt: new Date(new Date().setHours(23, 59, 59, 999)).toISOString(),
            },
            {
                id: 'daily-flashcard',
                title: 'Review Flashcards',
                description: 'Review 10 flashcards',
                xpReward: 15,
                type: 'flashcard',
                target: 10,
                progress: 0,
                completed: false,
                expiresAt: new Date(new Date().setHours(23, 59, 59, 999)).toISOString(),
            },
        ];

        setDailyChallenges(challenges);
        localStorage.setItem(`${prefix}dailyChallenges`, JSON.stringify({ date: today, challenges }));
    };

    const unlockAchievement = useCallback((id: string) => {
        if (!unlockedAchievements.includes(id)) {
            const newUnlocked = [...unlockedAchievements, id];
            setUnlockedAchievements(newUnlocked);
            saveState('unlockedAchievements', newUnlocked);

            // Show simple trigger notification
            console.log(`[Achievement Unlocked] ${id}`);
        }
    }, [unlockedAchievements, saveState]);

    const addXP = useCallback((amount: number, eventId?: string) => {
        if (!user) return;

        const actualEventId = eventId || `xp-manual-${Date.now()}`;
        const newXP = xp + amount;
        const newLevel = calculateLevel(newXP);

        // Update local state immediately for instant responsive feedback
        setXP(newXP);
        setLevel(newLevel);
        saveState('xp', newXP);

        // Queue in Write-Ahead Log (WAL)
        const prefix = `gamify_${user.id}_`;
        const queueKey = `${prefix}xp_queue`;
        const savedQueue = localStorage.getItem(queueKey);
        const queue: XPQueueItem[] = savedQueue ? JSON.parse(savedQueue) : [];
        
        queue.push({
            eventId: actualEventId,
            amount,
            timestamp: Date.now()
        });
        localStorage.setItem(queueKey, JSON.stringify(queue));

        // Background push
        syncPendingXP();

        // Check for XP achievements
        if (newXP >= 100) unlockAchievement('xp-100');
        if (newXP >= 500) unlockAchievement('xp-500');
        if (newXP >= 1000) unlockAchievement('xp-1000');
        if (newLevel >= 5) unlockAchievement('level-5');
        if (newLevel >= 10) unlockAchievement('level-10');
    }, [user, xp, saveState, unlockAchievement, syncPendingXP]);

    const checkStreak = useCallback(() => {
        const today = new Date().toDateString();

        if (streak.lastActiveDate === today) {
            return; // Already active today
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();

        let newStreak = { ...streak };
        let streakIncreased = false;

        if (streak.lastActiveDate === yesterdayStr) {
            newStreak.currentStreak += 1;
            newStreak.longestStreak = Math.max(newStreak.longestStreak, newStreak.currentStreak);
            streakIncreased = true;
        } else if (streak.lastActiveDate !== today) {
            newStreak.currentStreak = 1;
            streakIncreased = true;
        }

        newStreak.lastActiveDate = today;
        newStreak.totalDaysActive += 1;

        setStreak(newStreak);
        saveState('streakData', newStreak);

        if (streakIncreased) {
            let xpReward = 5;
            if (newStreak.currentStreak >= 15) xpReward = 20;
            else if (newStreak.currentStreak >= 8) xpReward = 15;
            else if (newStreak.currentStreak >= 4) xpReward = 10;

            addXP(xpReward, `streak-${today}`);
        }

        if (newStreak.currentStreak >= 3) unlockAchievement('streak-3');
        if (newStreak.currentStreak >= 7) unlockAchievement('streak-7');
        if (newStreak.currentStreak >= 30) unlockAchievement('streak-30');
    }, [streak, saveState, addXP, unlockAchievement]);

    const updateChallengeProgress = useCallback((type: string, amount: number) => {
        setDailyChallenges(prev => {
            const updated = prev.map(c => {
                if (c.type === type && !c.completed) {
                    const newProgress = c.progress + amount;
                    const completed = newProgress >= c.target;
                    if (completed && !c.completed) {
                        addXP(c.xpReward, `daily-challenge-${c.id}-${new Date().toDateString()}`);
                    }
                    return { ...c, progress: newProgress, completed };
                }
                return c;
            });

            saveState('dailyChallenges', { date: new Date().toDateString(), challenges: updated });
            return updated;
        });
    }, [saveState, addXP]);

    const completeLesson = useCallback((lessonId: string) => {
        if (!completedLessons.includes(lessonId)) {
            const newCompleted = [...completedLessons, lessonId];
            setCompletedLessons(newCompleted);
            saveState('completedLessons', newCompleted);

            // Add XP
            addXP(25, `lesson-${lessonId}`);

            // Check achievements
            if (newCompleted.length >= 1) unlockAchievement('first-lesson');
            if (newCompleted.length >= 5) unlockAchievement('five-lessons');

            // Update daily challenge
            updateChallengeProgress('lesson', 1);
        }
    }, [completedLessons, saveState, addXP, unlockAchievement, updateChallengeProgress]);

    const saveQuizScore = useCallback((quizId: string, score: number) => {
        const currentScore = quizScores[quizId] || 0;
        if (score > currentScore) {
            const newScores = { ...quizScores, [quizId]: score };
            setQuizScores(newScores);
            saveState('quizScores', newScores);

            // Add XP based on score
            addXP(Math.round(score / 10), `quiz-${quizId}-${score}`);

            // Check achievements
            if (Object.keys(newScores).length >= 1) unlockAchievement('first-quiz');
            if (score === 100) unlockAchievement('perfect-quiz');

            // Update daily challenge
            updateChallengeProgress('quiz', 1);
        }
    }, [quizScores, saveState, addXP, unlockAchievement, updateChallengeProgress]);

    // === Mistakes Inbox (Anki spaced repetition logic) ===
    const saveMistakes = useCallback((wrongQuestions: { id: string; unitId: string; level: number; tags?: string[] }[]) => {
        const today = new Date().toISOString().split('T')[0];
        setMistakeInbox(prev => {
            const updated = [...prev];

            wrongQuestions.forEach(wq => {
                const existingIndex = updated.findIndex(m => m.questionId === wq.id);
                if (existingIndex >= 0) {
                    updated[existingIndex] = {
                        ...updated[existingIndex],
                        wrongCount: updated[existingIndex].wrongCount + 1,
                        interval: 1,
                        nextReviewDate: today,
                        lastReviewedAt: today,
                    };
                } else {
                    updated.push({
                        questionId: wq.id,
                        unitId: wq.unitId,
                        level: wq.level,
                        tags: wq.tags,
                        wrongCount: 1,
                        interval: 1,
                        nextReviewDate: today,
                        lastReviewedAt: today,
                    });
                }
            });

            saveState('mistakeInbox', updated);
            return updated;
        });
    }, [saveState]);

    const updateMistakeAfterReview = useCallback((questionId: string, wasCorrect: boolean) => {
        setMistakeInbox(prev => {
            const updated = prev.map(m => {
                if (m.questionId !== questionId) return m;

                const today = new Date().toISOString().split('T')[0];

                if (wasCorrect) {
                    const nextIntervals = [1, 3, 7, 14, 30];
                    const currentIdx = nextIntervals.indexOf(m.interval);
                    const newInterval = currentIdx < nextIntervals.length - 1
                        ? nextIntervals[currentIdx + 1]
                        : 30;

                    const nextDate = new Date();
                    nextDate.setDate(nextDate.getDate() + newInterval);

                    return {
                        ...m,
                        interval: newInterval,
                        nextReviewDate: nextDate.toISOString().split('T')[0],
                        lastReviewedAt: today,
                    };
                } else {
                    return {
                        ...m,
                        wrongCount: m.wrongCount + 1,
                        interval: 1,
                        nextReviewDate: today,
                        lastReviewedAt: today,
                    };
                }
            });

            saveState('mistakeInbox', updated);
            return updated;
        });
    }, [saveState]);

    const removeMistake = useCallback((questionId: string) => {
        setMistakeInbox(prev => {
            const updated = prev.filter(m => m.questionId !== questionId);
            saveState('mistakeInbox', updated);
            return updated;
        });
    }, [saveState]);

    const saveQuestionAttempts = useCallback((attempts: Array<{ questionId: string; difficulty: number; isCorrect: boolean; unitId?: string; tags?: string[] }>) => {
        const today = new Date().toISOString().split('T')[0];
        const todayISO = new Date().toISOString();

        // 1. Update solvedQuestions
        setSolvedQuestions(prev => {
            const updated = { ...prev };

            attempts.forEach(att => {
                const existing = updated[att.questionId];
                if (existing) {
                    updated[att.questionId] = {
                        questionId: att.questionId,
                        difficulty: att.difficulty,
                        isCorrect: att.isCorrect,
                        attemptsCount: existing.attemptsCount + 1,
                        lastAttemptAt: todayISO
                    };
                } else {
                    updated[att.questionId] = {
                        questionId: att.questionId,
                        difficulty: att.difficulty,
                        isCorrect: att.isCorrect,
                        attemptsCount: 1,
                        lastAttemptAt: todayISO
                    };
                }
            });

            saveState('solvedQuestions', updated);
            return updated;
        });

        // 2. Synchronously update Leitner Spaced Repetition mistake inbox
        setMistakeInbox(prev => {
            const updated = [...prev];

            attempts.forEach(att => {
                const existingIndex = updated.findIndex(m => m.questionId === att.questionId);

                if (!att.isCorrect) {
                    // Reset or add to Box 1 (Review immediately / tomorrow)
                    if (existingIndex >= 0) {
                        updated[existingIndex] = {
                            ...updated[existingIndex],
                            wrongCount: updated[existingIndex].wrongCount + 1,
                            interval: 1,
                            nextReviewDate: today,
                            lastReviewedAt: today,
                        };
                    } else {
                        updated.push({
                            questionId: att.questionId,
                            unitId: att.unitId || 'general',
                            level: att.difficulty,
                            tags: att.tags || [],
                            wrongCount: 1,
                            interval: 1,
                            nextReviewDate: today,
                            lastReviewedAt: today,
                        });
                    }
                } else {
                    // Correct answer: advance Leitner box if it was in the mistake inbox
                    if (existingIndex >= 0) {
                        const m = updated[existingIndex];
                        const nextIntervals = [1, 3, 7, 14, 30];
                        const currentIdx = nextIntervals.indexOf(m.interval);
                        const newInterval = currentIdx >= 0 && currentIdx < nextIntervals.length - 1
                            ? nextIntervals[currentIdx + 1]
                            : 30;

                        const nextDate = new Date();
                        nextDate.setDate(nextDate.getDate() + newInterval);

                        updated[existingIndex] = {
                            ...m,
                            interval: newInterval,
                            nextReviewDate: nextDate.toISOString().split('T')[0],
                            lastReviewedAt: today,
                        };
                    }
                }
            });

            saveState('mistakeInbox', updated);
            return updated;
        });
    }, [saveState]);

    // Check streak on mount when user info loads
    useEffect(() => {
        if (!isLoading && user && streak.lastActiveDate) {
            checkStreak();
        }
    }, [isLoading, user]);

    return (
        <GamificationContext.Provider value={{
            streak,
            achievements: allAchievements,
            unlockedAchievements,
            dailyChallenges,
            xp,
            level,
            completedLessons,
            quizScores,
            isLoading,
            checkStreak,
            unlockAchievement,
            updateChallengeProgress,
            addXP,
            completeLesson,
            saveQuizScore,
            mistakeInbox,
            saveMistakes,
            updateMistakeAfterReview,
            removeMistake,
            solvedQuestions,
            saveQuestionAttempts,
        }}>
            {children}
        </GamificationContext.Provider>
    );
}

export function useGamification() {
    const context = useContext(GamificationContext);
    if (!context) {
        throw new Error('useGamification must be used within GamificationProvider');
    }
    return context;
}
