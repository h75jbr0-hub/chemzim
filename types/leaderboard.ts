/**
 * Shared Leaderboard Types
 * Centralized type definitions for leaderboard functionality
 */

export interface LeaderboardEntry {
    rank: number;
    id: string;
    name: string;
    title?: string;
    avatar: string | null;
    xp: number;
    level: number;
    streak: number;
    completedLessons: number;
    labAccuracy?: number;
    experimentsCompleted?: number;
}

export interface LeaderboardResponse {
    success: boolean;
    leaderboard: LeaderboardEntry[];
    total: number;
    sortedBy?: 'xp' | 'labAccuracy';
}

export type LeaderboardPeriod = 'all' | 'weekly' | 'monthly' | 'mad-scientist';

// Rarity style configuration for podium display
export interface RarityStyle {
    bg: string;
    border: string;
    shadow: string;
    text: string;
    glow: string;
}
