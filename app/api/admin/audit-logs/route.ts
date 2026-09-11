import { NextRequest, NextResponse } from 'next/server';
import { getRecentAuditLogs, verifySession } from '@/lib/auth-store-admin';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get('chemzim-admin')?.value || 
                              cookieStore.get('chemzim-student')?.value || 
                              cookieStore.get('chemzim-session')?.value || 
                              cookieStore.get('chemzim')?.value;
        const session = await verifySession(sessionCookie);

        if (!session || !session.isAdmin) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        const logs = await getRecentAuditLogs(50);
        return NextResponse.json({ success: true, logs });
    } catch (error) {
        console.error('[Audit Logs GET Error]:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch logs' }, { status: 500 });
    }
}
