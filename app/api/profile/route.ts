import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth-store-admin';
import { cookies } from 'next/headers';
import { getAdminFirestore } from '@/lib/firebase-admin';

export async function POST(request: NextRequest) {
    let session: Awaited<ReturnType<typeof verifySession>> = null;
    let body: any = null;
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get('chemzim-admin')?.value || cookieStore.get('chemzim-student')?.value || cookieStore.get('chemzim-session')?.value || cookieStore.get('chemzim')?.value;
        session = await verifySession(sessionCookie);

        if (!session || !session.id) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        body = await request.json();
        const { image, lastStudiedLesson } = body;

        const db = getAdminFirestore();
        if (!db) {
            return NextResponse.json({ success: false, error: 'Database not initialized' }, { status: 500 });
        }

        const updateData: any = {};
        if (image !== undefined) {
            updateData.image = image;
        }
        if (lastStudiedLesson !== undefined) {
            updateData.lastStudiedLesson = lastStudiedLesson;
        }

        if (Object.keys(updateData).length === 0) {
            return NextResponse.json({ success: false, error: 'No data to update' }, { status: 400 });
        }

        // Update student document in Firestore (merge: true creates doc if missing)
        if (session.isAdmin) {
            return NextResponse.json({
                success: true,
                message: 'Admin profile update bypassed (no student document needed)'
            });
        }

        await db.collection('students').doc(session.id).set(updateData, { merge: true });

        return NextResponse.json({
            success: true,
            updated: updateData
        });
    } catch (error: any) {
        console.error('[Profile API] Update error:', error.code || error.name, '|', error.message);
        console.error('[Profile API] session.id:', session?.id, '| body keys:', Object.keys(body || {}));
        return NextResponse.json({ success: false, error: error.message || 'Server error' }, { status: 500 });
    }
}
