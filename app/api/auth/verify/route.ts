import { NextRequest, NextResponse } from 'next/server';
import { getStudentById } from '@/lib/auth-store-admin';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const fingerprint = searchParams.get('fingerprint');

        if (!id) {
            return NextResponse.json({ success: false, error: 'Missing user ID' }, { status: 400 });
        }

        const student = await getStudentById(id);

        if (!student) {
            return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
        }

        if (!student.isActive) {
            return NextResponse.json({ success: false, error: 'Account suspended' }, { status: 403 });
        }

        // If fingerprint provided, verify device is approved
        if (fingerprint && student.devices) {
            const device = student.devices.find(d => d.fingerprint === fingerprint);
            if (device && device.status === 'blocked') {
                return NextResponse.json({ success: false, error: 'Device blocked' }, { status: 403 });
            }
        }

        return NextResponse.json({
            success: true,
            user: {
                id: student.id,
                username: student.username,
                name: student.name,
                email: student.email || undefined,
                image: student.image || undefined,
                grade: student.grade || undefined,
                track: student.grade || undefined,
                enrolledTracks: student.enrolledTracks && student.enrolledTracks.length > 0
                    ? student.enrolledTracks
                    : (student.grade ? [student.grade] : undefined),
                isAdmin: student.isAdmin || false,
                role: student.role || 'student',
                authMethod: 'credentials',
                dentalBookmarks: student.dentalBookmarks || [],
                dentalMistakes: student.dentalMistakes || []
            }
        });
    } catch (error) {
        console.error('[Verify API] Error:', error);
        return NextResponse.json({ success: false, error: 'Verification failed' }, { status: 500 });
    }
}
