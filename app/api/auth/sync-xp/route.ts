import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromCookies } from '@/lib/session';
import { addXPToStudentSecure } from '@/lib/xp';

interface SyncUpdate {
    eventId: string;
    amount: number;
}

export async function POST(request: NextRequest) {
    try {
        const session = await getSessionFromCookies();
        if (!session || !session.id) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { xpUpdates } = body as { xpUpdates: SyncUpdate[] };

        if (!xpUpdates || !Array.isArray(xpUpdates)) {
            return NextResponse.json({ success: false, error: 'Invalid updates payload' }, { status: 400 });
        }

        const studentId = session.id;
        let lastXP = 0;
        let lastLevel = 1;
        const processedEventIds: string[] = [];

        // Apply all pending updates in order
        for (const update of xpUpdates) {
            const { eventId, amount } = update;
            if (!eventId || typeof amount !== 'number' || amount <= 0) {
                continue;
            }

            // Secure validation limit per single event addition to prevent client spamming large numbers
            const validatedAmount = Math.min(amount, 200);

            const result = await addXPToStudentSecure(studentId, validatedAmount, eventId);
            if (result.success) {
                lastXP = result.xp;
                lastLevel = result.level;
                processedEventIds.push(eventId);
            }
        }

        return NextResponse.json({
            success: true,
            xp: lastXP,
            level: lastLevel,
            syncedEventIds: processedEventIds
        });
    } catch (error) {
        console.error('[Sync XP Route] Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
