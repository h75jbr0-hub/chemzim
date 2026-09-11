import { getAdminFirestore } from './firebase-admin';
import { calculateLevel } from './level-utils';

const STUDENTS_COLLECTION = 'students';

export interface XPUpdateResult {
    success: boolean;
    xp: number;
    level: number;
    alreadyCompleted: boolean;
}

/**
 * Secures and updates student XP using an atomic Firestore transaction.
 * Prevents double-claiming events by updating the completedEvents list.
 */
export async function addXPToStudentSecure(
    studentId: string,
    amount: number,
    eventId: string
): Promise<XPUpdateResult> {
    const db = getAdminFirestore();
    if (!db) {
        throw new Error('Firestore admin is not initialized');
    }

    const studentRef = db.collection(STUDENTS_COLLECTION).doc(studentId);

    try {
        const result = await db.runTransaction(async (transaction) => {
            const doc = await transaction.get(studentRef);
            if (!doc.exists) {
                // Silent fail: student doc may not exist for admin accounts
                return {
                    success: false,
                    xp: 0,
                    level: 1,
                    alreadyCompleted: false
                };
            }

            const data = doc.data() || {};
            const completedEvents: string[] = data.completedEvents || [];

            // De-duplication check: if event was already completed, ignore XP rewarding
            if (eventId && completedEvents.includes(eventId)) {
                return {
                    success: true,
                    xp: data.xp || 0,
                    level: data.level || 1,
                    alreadyCompleted: true
                };
            }

            // Calculate new XP & level
            const currentXP = data.xp || 0;
            const newXP = currentXP + amount;
            const newLevel = calculateLevel(newXP);

            // Append to event completions if eventId is valid
            const newCompletedEvents = eventId ? [...completedEvents, eventId] : completedEvents;

            transaction.update(studentRef, {
                xp: newXP,
                level: newLevel,
                completedEvents: newCompletedEvents
            });

            return {
                success: true,
                xp: newXP,
                level: newLevel,
                alreadyCompleted: false
            };
        });

        return result;
    } catch (error) {
        console.error('[XP Secure Update] Firestore Transaction failed:', error);
        return { success: false, xp: 0, level: 1, alreadyCompleted: false };
    }
}
