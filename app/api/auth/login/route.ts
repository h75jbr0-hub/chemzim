import { NextRequest, NextResponse } from 'next/server';
import { authenticateStudent, initializeAdmin } from '@/lib/auth-store-admin';
import { createSessionToken, getStudentCookieOptions } from '@/lib/session';
import { checkRateLimit, recordFailedAttempt, clearRateLimit } from '@/lib/rate-limiter';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password, fingerprint, deviceInfo } = body;

        if (!username || !password) {
            return NextResponse.json(
                { success: false, error: 'Username and password are required' },
                { status: 400 }
            );
        }

        if (!fingerprint) {
            return NextResponse.json(
                { success: false, error: 'Device not recognized' },
                { status: 400 }
            );
        }

        // Get IP address
        const forwardedFor = request.headers.get('x-forwarded-for');
        const ipAddress = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

        // ── Rate Limit Check ──────────────────────────────────
        const rateCheck = checkRateLimit(username, ipAddress);
        if (!rateCheck.allowed) {
            return NextResponse.json(
                { success: false, error: rateCheck.reason },
                {
                    status: 429,
                    headers: { 'Retry-After': String(rateCheck.retryAfterSeconds) },
                }
            );
        }

        // Ensure admin exists
        await initializeAdmin();

        const result = await authenticateStudent(
            username,
            password,
            fingerprint,
            { ...deviceInfo, ipAddress }
        );
        if (result.success && result.student) {
            // ── Clear rate limit on successful login ──────────
            clearRateLimit(username);

            const gradeVal = result.student.grade || 'cie-igcse';
            const validTracks = ['cie-igcse', 'cie-as', 'cie-alevel', 'edexcel-igcse', 'edexcel-as', 'edexcel-a2'];
            const track = validTracks.includes(gradeVal)
                ? gradeVal
                : (gradeVal.toLowerCase().includes('edexcel')
                    ? 'edexcel-as'
                    : (gradeVal.toLowerCase().includes('igcse') ? 'cie-igcse' : 'cie-alevel'));

            const enrolledTracks = result.student.enrolledTracks && result.student.enrolledTracks.length > 0
                ? result.student.enrolledTracks
                : [track];

            const safeStudent = {
                id: result.student.id,
                username: result.student.username,
                name: result.student.name,
                email: result.student.email,
                image: result.student.image,
                grade: result.student.grade,
                enrolledTracks,
                isAdmin: result.student.isAdmin || false,
                role: result.student.role || 'student',
                track,
                dentalBookmarks: result.student.dentalBookmarks || [],
                dentalMistakes: result.student.dentalMistakes || [],
            };

            const response = NextResponse.json({
                success: true,
                user: safeStudent,
            });

            // Create signed JWT session token (cannot be forged)
            const token = await createSessionToken({
                isAdmin: safeStudent.isAdmin,
                role: safeStudent.role as 'admin' | 'moderator' | 'student',
                email: safeStudent.email,
                id: safeStudent.id,
                name: safeStudent.name,
                grade: safeStudent.grade,
                track,
                enrolledTracks,
            });

            const cookieOptions = getStudentCookieOptions();
            response.cookies.set({
                ...cookieOptions,
                value: token,
            });

            return response;
        }

        // ── Record failed attempt ────────────────────────────
        // Only count actual auth failures (wrong password, user not found)
        // Don't count device-pending as a "failed attempt"
        if (!result.requiresDeviceApproval) {
            recordFailedAttempt(username, ipAddress);
        }

        return NextResponse.json({
            success: false,
            error: result.error,
            requiresDeviceApproval: result.requiresDeviceApproval,
            deviceRequestId: result.deviceRequestId,
        });
    } catch (error) {
        console.error('[Login API] Error:', error);
        return NextResponse.json(
            { success: false, error: 'An unexpected server error occurred' },
            { status: 500 }
        );
    }
}
