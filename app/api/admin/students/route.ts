import { NextRequest, NextResponse } from 'next/server';
import { getAllStudents, verifySession, logAdminActivity, forceLogoutStudentDevices } from '@/lib/auth-store-admin';
import { cookies } from 'next/headers';
import { getAdminFirestore } from '@/lib/firebase-admin';

const STUDENTS_COLLECTION = 'students';

export async function GET(request: NextRequest) {
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

        const allStudents = await getAllStudents();
        // Return students sorted by creation or name, removing password hashes
        const safeStudents = allStudents
            .filter(s => !s.isAdmin) // don't list admin users here
            .map(s => ({
                ...s,
                passwordHash: undefined,
            }))
            .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());

        return NextResponse.json({
            success: true,
            students: safeStudents,
        });
    } catch (error) {
        console.error('Students fetch API error:', error);
        return NextResponse.json(
            { success: false, error: 'Server error' },
            { status: 500 }
        );
    }
}

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
        const { action, studentId } = body;

        if (!studentId) {
            return NextResponse.json(
                { success: false, error: 'Student ID is required' },
                { status: 400 }
            );
        }

        const db = getAdminFirestore();
        if (!db) {
            return NextResponse.json({ success: false, error: 'Firestore not initialized' }, { status: 500 });
        }

        const studentRef = db.collection(STUDENTS_COLLECTION).doc(studentId);
        const studentSnap = await studentRef.get();

        if (!studentSnap.exists) {
            return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
        }

        if (action === 'toggle-active') {
            const current = studentSnap.data()?.isActive ?? true;
            await studentRef.update({ isActive: !current });
            await logAdminActivity({
                action: !current ? 'Activate Student' : 'Suspend Student',
                details: `Changed status of student ${studentSnap.data()?.name || studentId} to ${!current ? 'Active' : 'Suspended'}`,
                performedBy: session.name || 'Admin',
                targetStudentId: studentId,
                targetStudentName: studentSnap.data()?.name,
                category: 'student'
            });
            return NextResponse.json({ success: true, isActive: !current });
        }

        if (action === 'update-notes') {
            const { notes } = body;
            await studentRef.update({ notes: notes || '' });
            await logAdminActivity({
                action: 'Update Teacher Remarks',
                details: `Updated teacher notes for student ${studentSnap.data()?.name || studentId}`,
                performedBy: session.name || 'Admin',
                targetStudentId: studentId,
                targetStudentName: studentSnap.data()?.name,
                category: 'student'
            });
            return NextResponse.json({ success: true });
        }

        if (action === 'force-logout') {
            await forceLogoutStudentDevices(studentId);
            await logAdminActivity({
                action: 'Force Terminate All Sessions',
                details: `Disconnected all registered devices and sessions for ${studentSnap.data()?.name || studentId}`,
                performedBy: session.name || 'Admin',
                targetStudentId: studentId,
                targetStudentName: studentSnap.data()?.name,
                category: 'security'
            });
            return NextResponse.json({ success: true });
        }

        if (action === 'send-message') {
            const { message, title } = body;
            if (!message || !message.trim()) {
                return NextResponse.json({ success: false, error: 'Message cannot be empty' }, { status: 400 });
            }
            const currentMessages = studentSnap.data()?.directNotifications || [];
            const newNotif = {
                id: `notif_${Date.now()}`,
                title: title || 'Message from Master Hazim',
                message: message.trim(),
                sentAt: new Date().toISOString(),
                read: false
            };
            await studentRef.update({
                directNotifications: [newNotif, ...currentMessages]
            });
            await logAdminActivity({
                action: 'Direct Push Notification',
                details: `Sent direct message to ${studentSnap.data()?.name || studentId}: "${message.trim().substring(0, 40)}..."`,
                performedBy: session.name || 'Admin',
                targetStudentId: studentId,
                targetStudentName: studentSnap.data()?.name,
                category: 'announcement'
            });
            return NextResponse.json({ success: true });
        }

        if (action === 'update-grade' || action === 'update-tracks') {
            const { grade, enrolledTracks } = body;
            const updatePayload: Record<string, any> = {};
            if (grade) updatePayload.grade = grade;
            if (enrolledTracks && Array.isArray(enrolledTracks)) {
                updatePayload.enrolledTracks = enrolledTracks;
                if (!grade && enrolledTracks.length > 0) {
                    updatePayload.grade = enrolledTracks[0];
                }
            }
            if (Object.keys(updatePayload).length === 0) {
                return NextResponse.json({ success: false, error: 'Curriculum or tracks required' }, { status: 400 });
            }
            await studentRef.update(updatePayload);
            await logAdminActivity({
                action: 'Update Student Tracks',
                details: `Updated enrolled tracks for ${studentSnap.data()?.name || studentId}`,
                performedBy: session.name || 'Admin',
                targetStudentId: studentId,
                targetStudentName: studentSnap.data()?.name,
                category: 'curriculum'
            });
            return NextResponse.json({ success: true });
        }

        if (action === 'edit-profile') {
            const { name, email, phone } = body;
            if (!name || !name.trim()) {
                return NextResponse.json({ success: false, error: 'Student name is required' }, { status: 400 });
            }
            const updatePayload: Record<string, any> = {
                name: name.trim(),
                email: (email || '').trim(),
                phone: (phone || '').trim()
            };
            await studentRef.update(updatePayload);
            await logAdminActivity({
                action: 'Edit Student Profile',
                details: `Updated info for student ${name.trim()} (${studentSnap.data()?.username || studentId})`,
                performedBy: session.name || 'Admin',
                targetStudentId: studentId,
                targetStudentName: name.trim(),
                category: 'student'
            });
            return NextResponse.json({ success: true, updated: updatePayload });
        }

        if (action === 'reset-password') {
            const { newPassword } = body;
            if (!newPassword || newPassword.trim().length < 6) {
                return NextResponse.json({ success: false, error: 'Password must be at least 6 characters' }, { status: 400 });
            }
            const bcrypt = require('bcryptjs');
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(newPassword, salt);
            await studentRef.update({ passwordHash });
            await logAdminActivity({
                action: 'Reset Student Password',
                details: `Administrative password reset for ${studentSnap.data()?.name || studentId}`,
                performedBy: session.name || 'Admin',
                targetStudentId: studentId,
                targetStudentName: studentSnap.data()?.name,
                category: 'security'
            });
            return NextResponse.json({ success: true });
        }

        if (action === 'delete') {
            const studentName = studentSnap.data()?.name;
            await studentRef.delete();
            await logAdminActivity({
                action: 'Delete Student Account',
                details: `Deleted student account: ${studentName || studentId}`,
                performedBy: session.name || 'Admin',
                targetStudentId: studentId,
                targetStudentName: studentName,
                category: 'student'
            });
            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ success: false, error: 'Invalid action' }, { status: 400 });
    } catch (error) {
        console.error('Students action API error:', error);
        return NextResponse.json(
            { success: false, error: 'Server error' },
            { status: 500 }
        );
    }
}
