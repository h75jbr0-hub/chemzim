import { NextRequest, NextResponse } from 'next/server';
import { getAdminFirestore } from '@/lib/firebase-admin';

// Helper to generate mock data in English
const generateMockData = (count: number) => {
    const names = [
        "Abdullah Hazim", "Mohammad Al-Jaber", "Khalil Badarin", "Ahmed Alsaudi",
        "Sarah Ahmed", "Omar Youssef", "Noor Al-Huda", "Karim Abdullah",
        "Layla Hassan", "Yasmin Samir", "Zaid Tariq", "Mariam Said", "Youssef Omar",
        "Hibatullah", "Mustafa Kamil", "Rana Mahmoud", "Khaled Yehia", "Faisal Al-Anzi",
        "Jana Al-Qahtani", "Saad Al-Mutairi", "Rima Al-Fayez", "Fahad Al-Shammari"
    ];

    const avatars = [
        '/images/avatars/assassin.jpg',
        '/images/avatars/netrunner.jpg',
        '/images/avatars/valkyrie.jpg',
        '/images/avatars/chibi.jpg',
        '/images/avatars/dj.jpg',
        '/images/avatars/flamelord.jpg',
        '/images/avatars/icemage.jpg',
        '/images/avatars/icemage_empress.jpg',
        '/images/avatars/viking_male.jpg',
        '/images/avatars/fox.jpg',
        '/images/avatars/dragon.jpg',
        '/images/avatars/plague.jpg',
        '/images/avatars/royal_alchemist.jpg',
        '/images/avatars/chemist.jpg',
        '/images/avatars/quantum.jpg',
        '/images/avatars/roblox_chemist.jpg',
        '/images/avatars/roblox_ninja.jpg',
        '/images/avatars/roblox_wizard.jpg',
        '/images/avatars/minecraft_chemist.jpg',
        '/images/avatars/minecraft_knight.jpg',
        '/images/avatars/minecraft_alchemist.jpg',
        '/images/avatars/minecraft_creeper_chemist.jpg',
        '/images/avatars/minecraft_girl_chemist.jpg',
        '/images/avatars/minecraft_girl_sorceress.jpg',
        '/images/avatars/mc_girl_cyber_orb.jpg',
        '/images/avatars/mc_girl_crystal_shard.jpg',
        '/images/avatars/mc_girl_phoenix_flame.jpg',
        '/images/avatars/anime_cyber_chemist.jpg',
        '/images/avatars/chibi_dragon_master.jpg',
        '/images/avatars/anime_mecha_chemist.jpg'
    ];

    const titles = [
        "Lab Bomber", "Atom Sniper", "Chem Wizard", "Acid Destroyer",
        "Reaction King", "Mad Professor", "Explosive Expert", "Trophy Hunter",
        "Sole Survivor", "Precision Master", "Nuclear Chemist", "Chemistry Legend"
    ];

    return Array.from({ length: count }).map((_, i) => ({
        rank: i + 1,
        id: `mock-user-${i}`,
        name: names[i % names.length],
        title: titles[Math.floor(Math.random() * titles.length)],
        avatar: avatars[i % avatars.length] || null,
        xp: Math.floor(15000 * Math.pow(0.95, i)),
        level: Math.floor(20 * Math.pow(0.95, i)) + 1,
        streak: Math.floor(Math.random() * 50) + 1,
        completedLessons: Math.floor(Math.random() * 30) + 5,
        labAccuracy: Math.floor(Math.random() * 30) + 70,
        experimentsCompleted: Math.floor(Math.random() * 20) + 1,
    }));
};

interface LeaderboardEntry {
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
    grade?: string;
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const limitCount = parseInt(searchParams.get('limit') || '50');
        const period = searchParams.get('period') || 'all';
        const gradeFilter = searchParams.get('grade') || 'all';

        let leaderboard: LeaderboardEntry[] = [];

        try {
            const db = getAdminFirestore();
            if (db) {
                // Fetch all active students sorted by XP
                const fetchLimit = gradeFilter === 'all' ? Math.max(limitCount, 50) : 100;
                const snapshot = await db.collection('students')
                    .orderBy('xp', 'desc')
                    .limit(fetchLimit)
                    .get();

                if (!snapshot.empty) {
                    let docs = snapshot.docs;

                    // Always exclude admins and moderators
                    docs = docs.filter((doc) => {
                        const d = doc.data();
                        return !d.isAdmin && d.role !== 'admin' && d.role !== 'moderator';
                    });

                    // Filter by curriculum/grade if requested
                    if (gradeFilter !== 'all') {
                        docs = docs.filter((doc) => {
                            const g = (doc.data().grade || '').toLowerCase();
                            if (gradeFilter === 'dentistry') {
                                return g === 'dentistry' || g.includes('dent');
                            }
                            if (gradeFilter === 'igcse') {
                                return g.includes('igcse') || g.includes('cambridge');
                            }
                            if (gradeFilter === 'alevel') {
                                return g.includes('a-level') || g.includes('alevel') || g.includes('edexcel');
                            }
                            return true;
                        });
                    }

                    leaderboard = docs.map((doc, index) => {
                        const data = doc.data();
                        return {
                            rank: index + 1,
                            id: doc.id || `player-${index + 1}`,
                            name: data.name || 'Student',
                            title: data.title || '',
                            avatar: data.image || data.avatar || null,
                            xp: data.xp || 0,
                            level: data.level || 1,
                            streak: data.streak?.currentStreak || 0,
                            completedLessons: data.completedLessons?.length || 0,
                            grade: data.grade || '',
                            labAccuracy: typeof data.labAccuracy === 'number' ? data.labAccuracy : undefined,
                            experimentsCompleted: typeof data.experimentsCompleted === 'number' ? data.experimentsCompleted : undefined,
                        };
                    });
                }
            }
        } catch (dbError) {
            console.warn('Database fetch failed, falling back to mock data', dbError);
        }

        // Only use mock data if database is completely empty (no real students found)
        if (leaderboard.length === 0) {
            leaderboard = generateMockData(limitCount);
        }

        // Trim to requested limit after sorting
        leaderboard = leaderboard.slice(0, limitCount);

        // SERVER-SIDE SORTING for Mad Scientist mode
        if (period === 'mad-scientist') {
            leaderboard = leaderboard
                .sort((a, b) => {
                    const aAcc = a.labAccuracy ?? -1;
                    const bAcc = b.labAccuracy ?? -1;
                    const diff = bAcc - aAcc;
                    if (diff !== 0) return diff;
                    return (b.experimentsCompleted ?? 0) - (a.experimentsCompleted ?? 0);
                })
                .map((entry, idx) => ({ ...entry, rank: idx + 1 }));
        }

        return NextResponse.json({
            success: true,
            leaderboard,
            total: leaderboard.length,
            sortedBy: period === 'mad-scientist' ? 'labAccuracy' : 'xp',
        });
    } catch (error) {
        console.error('Leaderboard API error:', error);
        return NextResponse.json({
            success: true,
            leaderboard: generateMockData(50),
            total: 50,
        });
    }
}
