import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromCookies } from '@/lib/session';
import { getAdminFirestore } from '@/lib/firebase-admin';
import { calculateLevel } from '@/lib/level-utils';

const STUDENTS_COLLECTION = 'students';

export async function POST(request: NextRequest) {
    try {
        const session = await getSessionFromCookies();
        if (!session || !session.id) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { xp } = body;

        if (typeof xp !== 'number' || xp < 0) {
            return NextResponse.json({ success: false, error: 'Invalid XP amount' }, { status: 400 });
        }

        const db = getAdminFirestore();
        if (!db) {
            return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 });
        }

        const studentId = session.id;
        const studentRef = db.collection(STUDENTS_COLLECTION).doc(studentId);

        const result = await db.runTransaction(async (transaction) => {
            const doc = await transaction.get(studentRef);
            if (!doc.exists) {
                // Silent fail: admin accounts may not have a student document
                return null;
            }

            const data = doc.data() || {};
            const serverXP = data.xp || 0;

            // Only migrate if server XP is 0 or less than the client legacy XP, capping migration at a reasonable max (e.g. 20000 XP)
            if (serverXP === 0 && xp > 0) {
                const validatedXP = Math.min(xp, 20000);
                const level = calculateLevel(validatedXP);
                transaction.update(studentRef, { xp: validatedXP, level });
                return { xp: validatedXP, level };
            }

            return { xp: serverXP, level: data.level || 1 };
        });

        if (!result) {
            return NextResponse.json({ success: false, error: 'Student document not found' }, { status: 200 });
        }

        return NextResponse.json({
            success: true,
            xp: result.xp,
            level: result.level
        });
    } catch (error) {
        console.error('[Migrate XP Route] Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
