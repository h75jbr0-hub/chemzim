import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth-store-admin';
import { cookies } from 'next/headers';
import { getAdminFirestore } from '@/lib/firebase-admin';

const ANNOUNCEMENTS_COLLECTION = 'announcements';

// Get announcements
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const curriculum = searchParams.get('curriculum') || 'all';

        const db = getAdminFirestore();
        if (!db) {
            return NextResponse.json({ success: false, error: 'Database not initialized' }, { status: 500 });
        }

        let query = db.collection(ANNOUNCEMENTS_COLLECTION).orderBy('createdAt', 'desc');
        const snap = await query.get();
        
        const list: any[] = [];
        const now = new Date().getTime();

        snap.forEach(doc => {
            const data = doc.data();
            // Filter by curriculum (show if matches the student curriculum OR is targeted to 'all')
            const matchesCurriculum = curriculum === 'all' || !data.targetCurriculum || data.targetCurriculum === 'all' || data.targetCurriculum === curriculum;
            
            if (matchesCurriculum) {
                // If student request, filter by schedule constraints
                if (curriculum !== 'all') {
                    if (data.startDate) {
                        const start = new Date(data.startDate).getTime();
                        if (now < start) return; // announcement has not started yet
                    }
                    if (data.endDate) {
                        const end = new Date(data.endDate).getTime();
                        if (now > end) return; // announcement has expired
                    }
                }

                list.push({
                    id: doc.id,
                    ...data,
                    createdAt: data.createdAt?.toDate?.()?.toLocaleString() || data.createdAt || new Date().toLocaleString()
                });
            }
        });

        return NextResponse.json({
            success: true,
            announcements: list
        });
    } catch (error) {
        console.error('Announcements fetch error:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}

// Post new announcement (Admin Only)
export async function POST(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get('chemzim-admin')?.value || cookieStore.get('chemzim-student')?.value || cookieStore.get('chemzim-session')?.value || cookieStore.get('chemzim')?.value;
        const session = await verifySession(sessionCookie);

        if (!session || !session.isAdmin) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { title, content, category, targetCurriculum, startDate, endDate } = body;

        if (!title || !content) {
            return NextResponse.json({ success: false, error: 'Title and content are required' }, { status: 400 });
        }

        const db = getAdminFirestore();
        if (!db) {
            return NextResponse.json({ success: false, error: 'Database not initialized' }, { status: 500 });
        }

        const newAnn = {
            title,
            content,
            category: category || 'General',
            targetCurriculum: targetCurriculum || 'all',
            startDate: startDate || null,
            endDate: endDate || null,
            author: session.name || 'Admin',
            createdAt: new Date()
        };

        const docRef = await db.collection(ANNOUNCEMENTS_COLLECTION).add(newAnn);

        return NextResponse.json({
            success: true,
            announcement: {
                id: docRef.id,
                ...newAnn,
                createdAt: new Date().toLocaleString()
            }
        });
    } catch (error) {
        console.error('Announcement creation error:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
