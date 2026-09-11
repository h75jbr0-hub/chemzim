/**
 * Level Utilities - Centralized level calculation logic
 * This file contains all XP and level-related calculations
 */

// XP thresholds for each level
export const LEVEL_THRESHOLDS = {
    1: 0,
    2: 150,
    3: 300,
    4: 500,
    5: 800,
    6: 1200,
    7: 1800,
    8: 2500,
    9: 3500,
    10: 5000,
} as const;

// XP rewards for different actions
export const XP_REWARDS = {
    LESSON_COMPLETE: 25,
    QUIZ_CORRECT_ANSWER: 10,
    ACHIEVEMENT_UNLOCK: 50,
    DAILY_CHALLENGE_LESSON: 20,
    DAILY_CHALLENGE_QUIZ: 30,
    DAILY_CHALLENGE_FLASHCARD: 15,
} as const;

/**
 * Calculate user level based on XP
 * @param xp - Current XP amount
 * @returns Level number (1-10)
 */
export function calculateLevel(xp: number): number {
    if (xp >= 5000) return 10;
    if (xp >= 3500) return 9;
    if (xp >= 2500) return 8;
    if (xp >= 1800) return 7;
    if (xp >= 1200) return 6;
    if (xp >= 800) return 5;
    if (xp >= 500) return 4;
    if (xp >= 300) return 3;
    if (xp >= 150) return 2;
    return 1;
}

/**
 * Get XP needed for next level
 * @param currentXP - Current XP amount
 * @returns XP needed for next level, or 0 if at max level
 */
export function getXPForNextLevel(currentXP: number): number {
    const currentLevel = calculateLevel(currentXP);
    if (currentLevel >= 10) return 0;

    const nextLevel = (currentLevel + 1) as keyof typeof LEVEL_THRESHOLDS;
    return LEVEL_THRESHOLDS[nextLevel] - currentXP;
}

/**
 * Get progress percentage towards next level
 * @param currentXP - Current XP amount
 * @returns Progress percentage (0-100)
 */
export function getLevelProgress(currentXP: number): number {
    const currentLevel = calculateLevel(currentXP);
    if (currentLevel >= 10) return 100;

    const currentLevelXP = LEVEL_THRESHOLDS[currentLevel as keyof typeof LEVEL_THRESHOLDS];
    const nextLevel = (currentLevel + 1) as keyof typeof LEVEL_THRESHOLDS;
    const nextLevelXP = LEVEL_THRESHOLDS[nextLevel];

    const progress = ((currentXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
    return Math.min(100, Math.max(0, progress));
}

/**
 * Get level display info
 * @param level - Current level
 * @returns Object with name and color
 */
export function getLevelInfo(level: number): { name: string; color: string; icon: string } {
    const levels = {
        1: { name: 'Beginner', color: '#9ca3af', icon: '🌱' },
        2: { name: 'Learner', color: '#84cc16', icon: '📗' },
        3: { name: 'Student', color: '#22c55e', icon: '📚' },
        4: { name: 'Diligent', color: '#14b8a6', icon: '⭐' },
        5: { name: 'Advanced', color: '#06b6d4', icon: '🌟' },
        6: { name: 'Skilled', color: '#3b82f6', icon: '💫' },
        7: { name: 'Expert', color: '#8b5cf6', icon: '🔬' },
        8: { name: 'Scientist', color: '#a855f7', icon: '🧪' },
        9: { name: 'Professor', color: '#ec4899', icon: '🎓' },
        10: { name: 'Genius', color: '#f59e0b', icon: '🏆' },
    };
    return levels[level as keyof typeof levels] || levels[1];
}
