import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromCookies } from '@/lib/session';
import { updateStudentData } from '@/lib/auth-store-admin';

export async function POST(request: NextRequest) {
    try {
        const session = await getSessionFromCookies();
        if (!session || !session.id) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { dentalBookmarks, dentalMistakes } = body;

        const updateData: { dentalBookmarks?: number[]; dentalMistakes?: number[] } = {};

        if (dentalBookmarks && Array.isArray(dentalBookmarks)) {
            updateData.dentalBookmarks = dentalBookmarks.map((id: any) => Number(id));
        }

        if (dentalMistakes && Array.isArray(dentalMistakes)) {
            updateData.dentalMistakes = dentalMistakes.map((id: any) => Number(id));
        }

        if (Object.keys(updateData).length === 0) {
            return NextResponse.json({ success: false, error: 'No valid fields to sync' }, { status: 400 });
        }

        const success = await updateStudentData(session.id, updateData);

        if (!success) {
            return NextResponse.json({ success: false, error: 'Failed to update student database' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[Dental Sync API] Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
