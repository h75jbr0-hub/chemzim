import { NextRequest, NextResponse } from 'next/server';
import {
    getAllDeviceRequests,
    approveDevice,
    replaceDevice,
    rejectDevice,
    blockDevice,
    unblockDevice,
    removeDevice,
    getAuthStats,
    verifySession,
    logAdminActivity
} from '@/lib/auth-store-admin';
import { cookies } from 'next/headers';

async function checkAdmin() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('chemzim-admin')?.value || cookieStore.get('chemzim-student')?.value || cookieStore.get('chemzim-session')?.value || cookieStore.get('chemzim')?.value;
    const session = await verifySession(sessionCookie);
    return session && session.isAdmin;
}

export async function GET(request: NextRequest) {
    if (!(await checkAdmin())) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    try {
        const requests = await getAllDeviceRequests();
        const stats = await getAuthStats();
        return NextResponse.json({
            success: true,
            requests,
            stats
        });
    } catch (error) {
        console.error('Devices API error:', error);
        return NextResponse.json(
            { success: false, error: 'Server error' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    if (!(await checkAdmin())) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    try {
        const body = await request.json();
        const { action, requestId, studentId, deviceId } = body;

        let result = false;

        switch (action) {
            case 'approve':
                if (requestId) result = await approveDevice(requestId);
                break;
            case 'replace':
                if (requestId) result = await replaceDevice(requestId);
                break;
            case 'reject':
                if (requestId) result = await rejectDevice(requestId);
                break;
            case 'block':
                if (studentId && deviceId) result = await blockDevice(studentId, deviceId);
                break;
            case 'unblock':
                if (studentId && deviceId) result = await unblockDevice(studentId, deviceId);
                break;
            case 'remove':
                if (studentId && deviceId) result = await removeDevice(studentId, deviceId);
                break;
            default:
                return NextResponse.json({ success: false, error: 'Unknown action' }, { status: 400 });
        }

        if (result) {
            await logAdminActivity({
                action: `Device ${action.toUpperCase()}`,
                details: `Performed ${action} on device (ID: ${deviceId || requestId}) for student ${studentId || 'request'}`,
                performedBy: 'Admin',
                category: 'device',
                targetStudentId: studentId
            });
            return NextResponse.json({ success: true, message: 'Action executed successfully' });
        }
        return NextResponse.json({ success: false, error: 'Failed to execute action' }, { status: 400 });
    } catch (error) {
        console.error('Device action error:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
