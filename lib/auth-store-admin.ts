// Server-side Auth Store - Uses Firebase Admin SDK
// This handles all secure student authentication and management operations for the International platform.

import { getAdminFirestore } from './firebase-admin';
import bcrypt from 'bcryptjs';

const STUDENTS_COLLECTION = 'students';
const DEVICE_REQUESTS_COLLECTION = 'device_requests';

export interface Device {
    id: string;
    fingerprint: string;
    name: string;
    type: 'mobile' | 'tablet' | 'desktop' | 'unknown';
    browser: string;
    os: string;
    firstSeen: string;
    lastSeen: string;
    status: 'pending' | 'approved' | 'blocked';
    ipAddress?: string;
}

export interface Student {
    id: string;
    username: string;
    passwordHash: string;
    name: string;
    email?: string;
    phone?: string;
    notes?: string;
    grade?: string; // International grade (e.g., Year 10, IB DP1)
    enrolledTracks?: string[]; // Multiple tracks/curricula access e.g. ['cie-igcse', 'edexcel-as', 'cie-as']
    image?: string;
    devices: Device[];
    isActive: boolean;
    isAdmin?: boolean;
    role?: 'admin' | 'moderator' | 'student';
    createdAt: string;
    lastLogin?: string;
    notes_internal?: string;
    xp?: number;
    level?: number;
    dentalBookmarks?: number[];
    dentalMistakes?: number[];
    directNotifications?: Array<{ id: string; title: string; message: string; sentAt: string; read: boolean }>;
}

export interface DeviceRequest {
    id: string;
    studentId: string;
    studentName: string;
    device: Device;
    requestedAt: string;
    status: 'pending' | 'approved' | 'rejected';
}

export interface LoginResult {
    success: boolean;
    error?: string;
    student?: Student;
    requiresDeviceApproval?: boolean;
    deviceRequestId?: string;
}

function getDB() {
    const db = getAdminFirestore();
    if (!db) {
        throw new Error('Firebase Firestore is not initialized. Check your environment variables.');
    }
    return db;
}

// ============ Admin Initialization ============

// Hardcoded Sovereign Admins (Fallback)
const ADMIN_EMAILS = ['h75jbr@gmail.com'];

/**
 * Ensures the super admin h75jbr@gmail.com exists with full sovereignty.
 */
export async function initializeAdmin() {
    try {
        const db = getDB();
        const adminEmail = 'h75jbr@gmail.com';
        const adminId = 'super-admin-main';
        
        const adminSnap = await db.collection(STUDENTS_COLLECTION)
            .where('email', '==', adminEmail)
            .limit(1)
            .get();

        if (adminSnap.empty) {
            console.log(`[AdminInit] Initializing Super Admin: ${adminEmail}`);
            const superAdmin: Student = {
                id: adminId,
                username: 'hazim_admin',
                passwordHash: await bcrypt.hash('H1975jbr', 12),
                name: 'Hazim Jaber',
                email: adminEmail,
                grade: 'System Admin',
                image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Hazim`,
                devices: [],
                isActive: true,
                isAdmin: true,
                role: 'admin',
                createdAt: new Date().toISOString(),
                xp: 99999,
                level: 100
            };
            await db.collection(STUDENTS_COLLECTION).doc(adminId).set(superAdmin);
            console.log('[AdminInit] Super Admin created successfully.');
        } else {
            // Ensure the existing doc has admin rights
            const doc = adminSnap.docs[0];
            if (!doc.data().isAdmin) {
                await doc.ref.update({ isAdmin: true, role: 'admin' });
                console.log('[AdminInit] Sovereignty restored to admin email.');
            }
        }
    } catch (e) {
        console.error('[AdminInit] Failed to initialize admin:', e);
    }
}

// ============ Authentication Logic ============

export interface UserSession {
    id: string;
    username?: string;
    name: string;
    email?: string;
    isAdmin: boolean;
    role: 'admin' | 'moderator' | 'student';
    grade?: string;
    track?: string;
    enrolledTracks?: string[];
    image?: string;
}

/**
 * Verify a secure session cookie (now uses JWT in middleware/session.ts)
 */
export async function verifySession(sessionCookie?: string): Promise<UserSession | null> {
    if (!sessionCookie) return null;

    try {
        // Import session verification from the new JWT-based session module
        const { verifySessionToken } = await import('./session');
        const payload = await verifySessionToken(sessionCookie);
        
        if (!payload || !payload.id) return null;
        
        // --- Multi-Layer Admin Check ---
        let isAdmin = payload.isAdmin;
        let role = payload.role;

        // 1. Direct check for Super Admin email (Hardcoded)
        if (payload.email && ADMIN_EMAILS.includes(payload.email.toLowerCase())) {
            isAdmin = true;
            role = 'admin';
        }

        // 2. Check the user-created 'admin' collection in Firestore (Manual sovereignty)
        if (!isAdmin && payload.email) {
            const db = getDB();
            const adminDoc = await db.collection('admin').doc(payload.email.toLowerCase()).get();
            if (adminDoc.exists && adminDoc.data()?.role === 'admin') {
                isAdmin = true;
                role = 'admin';
            }
        }

        return {
            id: payload.id,
            name: payload.name || '',
            email: payload.email,
            isAdmin,
            role,
            grade: payload.grade,
            track: payload.track,
            enrolledTracks: payload.enrolledTracks,
        };
    } catch {
        return null;
    }
}

export async function authenticateStudent(
    usernameInput: string,
    passwordInput: string,
    deviceFingerprint: string,
    deviceInfo: Partial<Device>
): Promise<LoginResult> {
    const db = getDB();
    const username = usernameInput.trim().toLowerCase();

    // 1. Find the student
    let studentSnap = await db.collection(STUDENTS_COLLECTION).where('username', '==', username).limit(1).get();
    
    // Fallback search by email
    if (studentSnap.empty && username.includes('@')) {
        studentSnap = await db.collection(STUDENTS_COLLECTION).where('email', '==', username).limit(1).get();
    }

    if (studentSnap.empty) {
        return { success: false, error: 'User not found' };
    }

    const studentDoc = studentSnap.docs[0];
    const student = studentDoc.data() as Student;

    // 2. Validate Password using bcrypt
    // Also support legacy plaintext passwords with auto-migration
    const passwordHash = student.passwordHash || (student as any).password || '';
    const isHashedPassword = passwordHash.startsWith('$2');
    let passwordMatch = false;

    if (isHashedPassword) {
        passwordMatch = await bcrypt.compare(passwordInput, passwordHash);
    } else {
        // Legacy plaintext - auto-migrate on success
        passwordMatch = (passwordHash === passwordInput);
        if (passwordMatch && passwordInput) {
            const hashedPassword = await bcrypt.hash(passwordInput, 12);
            await studentDoc.ref.update({ passwordHash: hashedPassword });
            console.log(`[Auth] Migrated legacy password to bcrypt for user: ${username}`);
        }
    }

    if (!passwordMatch) {
        return { success: false, error: 'Invalid password' };
    }

    if (!student.isActive) {
        return { success: false, error: 'Your account is suspended. Please contact management.' };
    }

    const now = new Date().toISOString();
    const currentDevices = student.devices || [];

    // 3. Admin Security Bypass
    if (student.isAdmin) {
        let device = currentDevices.find(d => d.fingerprint === deviceFingerprint);
        if (!device) {
            device = {
                id: `adm-${Date.now()}`,
                fingerprint: deviceFingerprint,
                name: deviceInfo.name || 'Admin Device',
                type: deviceInfo.type || 'desktop',
                browser: deviceInfo.browser || 'Browser',
                os: deviceInfo.os || 'OS',
                firstSeen: now,
                lastSeen: now,
                status: 'approved',
                ipAddress: deviceInfo.ipAddress
            };
            currentDevices.push(device);
        } else {
            device.lastSeen = now;
        }

        await studentDoc.ref.update({ lastLogin: now, devices: currentDevices });
        return { success: true, student: { ...student, devices: currentDevices } };
    }

    // 4. Regular Student Device Logic
    const existingDevice = currentDevices.find(d => d.fingerprint === deviceFingerprint);

    if (existingDevice) {
        if (existingDevice.status === 'blocked') {
            return { success: false, error: 'This device is blocked' };
        }
        if (existingDevice.status === 'pending') {
            return { success: false, error: 'Device pending approval', requiresDeviceApproval: true };
        }
        
        // Approved device, proceed
        existingDevice.lastSeen = now;
        await studentDoc.ref.update({ lastLogin: now, devices: currentDevices });
        return { success: true, student: { ...student, devices: currentDevices } };
    }

    // 5. Register New Device Attempt
    const requestId = `req_${Date.now()}`;
    const newDevice: Device = {
        id: requestId,
        fingerprint: deviceFingerprint,
        name: deviceInfo.name || 'Unknown Device',
        type: deviceInfo.type || 'unknown',
        browser: deviceInfo.browser || 'Unknown',
        os: deviceInfo.os || 'Unknown',
        firstSeen: now,
        lastSeen: now,
        status: 'pending',
        ipAddress: deviceInfo.ipAddress
    };

    currentDevices.push(newDevice);
    await studentDoc.ref.update({ devices: currentDevices });

    // Store a separate request for the Admin list
    const request: DeviceRequest = {
        id: requestId,
        studentId: student.id,
        studentName: student.name,
        device: newDevice,
        requestedAt: now,
        status: 'pending'
    };
    await db.collection(DEVICE_REQUESTS_COLLECTION).doc(requestId).set(request);

    return {
        success: false,
        error: 'New device detected. Pending management approval.',
        requiresDeviceApproval: true,
        deviceRequestId: requestId
    };
}

// ============ Student Management ============

export function generatePassword(length: number = 8): string {
    const chars = 'abcdefghjkmnpqrstuvwxyz23456789'; // Excluded confusing chars like l, 1, i, o, 0
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

export function generateUsername(name: string, email?: string): string {
    let base = name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '').slice(0, 6);

    if (!base && email) {
        base = email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 4);
    }

    const randomLength = base ? 3 : 6;
    const random = Math.floor(Math.random() * Math.pow(10, randomLength)).toString().padStart(randomLength, '0');

    return `${base}${random}`;
}

export async function createStudent(data: {
    username?: string;
    passwordHash?: string; // This is the plaintext password from the form
    name: string;
    email?: string;
    phone?: string;
    notes?: string;
    grade: string;
    enrolledTracks?: string[];
    role?: 'admin' | 'moderator' | 'student';
}) {
    const db = getDB();
    const generatedPassword = data.passwordHash ? null : generatePassword();
    const rawPassword = data.passwordHash || generatedPassword || '';
    
    let username = data.username ? data.username.trim().toLowerCase() : '';
    if (!username) {
        username = generateUsername(data.name, data.email);
    }
    
    // Check uniqueness
    const existingSnap = await db.collection(STUDENTS_COLLECTION).where('username', '==', username).get();
    if (!existingSnap.empty) {
        return { success: false, error: 'Username already taken' };
    }

    const id = `std_${Date.now()}`;
    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(rawPassword, 12);
    
    const enrolledTracks = data.enrolledTracks && data.enrolledTracks.length > 0 
        ? data.enrolledTracks 
        : (data.grade ? [data.grade] : ['cie-igcse']);

    const newStudent: Student = {
        id,
        username,
        passwordHash: hashedPassword,
        name: data.name,
        email: data.email || '',
        phone: data.phone || '',
        notes: data.notes || '',
        grade: data.grade,
        enrolledTracks,
        image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
        devices: [],
        isActive: true,
        createdAt: new Date().toISOString(),
        xp: 0,
        level: 1,
        role: data.role || 'student',
        isAdmin: data.role === 'admin' || data.role === 'moderator'
    };

    await db.collection(STUDENTS_COLLECTION).doc(id).set(newStudent);
    return { success: true, student: newStudent, rawPassword };
}


export async function getAllStudents(): Promise<Student[]> {
    const db = getDB();
    const snap = await db.collection(STUDENTS_COLLECTION).get();
    return snap.docs.map(doc => doc.data() as Student);
}

export async function getStudentById(id: string): Promise<Student | undefined> {
    const db = getDB();
    const snap = await db.collection(STUDENTS_COLLECTION).doc(id).get();
    return snap.exists ? (snap.data() as Student) : undefined;
}

export async function updateStudentData(id: string, data: Partial<Student>): Promise<boolean> {
    try {
        const db = getDB();
        await db.collection(STUDENTS_COLLECTION).doc(id).update(data);
        return true;
    } catch (e) {
        console.error(`[updateStudentData] Error updating student ${id}:`, e);
        return false;
    }
}

// ============ Device Management ============

export async function getAllDeviceRequests(): Promise<DeviceRequest[]> {
    const db = getDB();
    const snapshot = await db.collection(DEVICE_REQUESTS_COLLECTION).where('status', '==', 'pending').get();
    const reqs: DeviceRequest[] = [];
    snapshot.forEach(d => reqs.push(d.data() as DeviceRequest));
    return reqs.sort((a, b) => new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime());
}

export async function approveDevice(requestId: string): Promise<boolean> {
    const db = getDB();
    const requestRef = db.collection(DEVICE_REQUESTS_COLLECTION).doc(requestId);

    try {
        return await db.runTransaction(async (transaction) => {
            const requestSnap = await transaction.get(requestRef);
            if (!requestSnap.exists) return false;
            const request = requestSnap.data() as DeviceRequest;

            const studentRef = db.collection(STUDENTS_COLLECTION).doc(request.studentId);
            const studentSnap = await transaction.get(studentRef);
            if (!studentSnap.exists) return false;
            const student = studentSnap.data() as Student;

            const devices = student.devices || [];
            const device = devices.find(d => d.id === request.device.id);

            if (device) {
                device.status = 'approved';
                transaction.update(studentRef, { devices });
            }

            transaction.update(requestRef, { status: 'approved' });
            return true;
        });
    } catch (e) {
        console.error('Error in approveDevice transaction:', e);
        return false;
    }
}

export async function rejectDevice(requestId: string): Promise<boolean> {
    const db = getDB();
    const requestRef = db.collection(DEVICE_REQUESTS_COLLECTION).doc(requestId);

    try {
        return await db.runTransaction(async (transaction) => {
            const requestSnap = await transaction.get(requestRef);
            if (!requestSnap.exists) return false;
            const request = requestSnap.data() as DeviceRequest;

            const studentRef = db.collection(STUDENTS_COLLECTION).doc(request.studentId);
            const studentSnap = await transaction.get(studentRef);
            if (!studentSnap.exists) return false;
            const student = studentSnap.data() as Student;

            const devices = student.devices || [];
            const filteredDevices = devices.filter(d => d.id !== request.device.id);

            transaction.update(studentRef, { devices: filteredDevices });
            transaction.update(requestRef, { status: 'rejected' });
            return true;
        });
    } catch (e) {
        console.error('Error in rejectDevice transaction:', e);
        return false;
    }
}

export async function replaceDevice(requestId: string): Promise<boolean> {
    const db = getDB();
    const requestRef = db.collection(DEVICE_REQUESTS_COLLECTION).doc(requestId);

    try {
        return await db.runTransaction(async (transaction) => {
            const requestSnap = await transaction.get(requestRef);
            if (!requestSnap.exists) return false;
            const request = requestSnap.data() as DeviceRequest;

            const studentRef = db.collection(STUDENTS_COLLECTION).doc(request.studentId);
            const studentSnap = await transaction.get(studentRef);
            if (!studentSnap.exists) return false;
            const student = studentSnap.data() as Student;

            const targetDeviceId = request.device.id;
            const currentDevices = student.devices || [];
            const updatedDevices = currentDevices.map(d => {
                if (d.id === targetDeviceId) {
                    return { ...d, status: 'approved' as const };
                } else if (d.status === 'approved') {
                    return { ...d, status: 'blocked' as const };
                }
                return d;
            });

            transaction.update(studentRef, { devices: updatedDevices });
            transaction.update(requestRef, { status: 'approved' });
            return true;
        });
    } catch (e) {
        console.error('Error in replaceDevice transaction:', e);
        return false;
    }
}

export async function blockDevice(studentId: string, deviceId: string): Promise<boolean> {
    const db = getDB();
    const studentRef = db.collection(STUDENTS_COLLECTION).doc(studentId);

    try {
        return await db.runTransaction(async (transaction) => {
            const studentSnap = await transaction.get(studentRef);
            if (!studentSnap.exists) return false;
            const student = studentSnap.data() as Student;

            const devices = student.devices || [];
            const device = devices.find(d => d.id === deviceId);
            if (!device) return false;

            device.status = 'blocked';
            transaction.update(studentRef, { devices });
            return true;
        });
    } catch (e) {
        console.error('Error in blockDevice transaction:', e);
        return false;
    }
}

export async function unblockDevice(studentId: string, deviceId: string): Promise<boolean> {
    const db = getDB();
    const studentRef = db.collection(STUDENTS_COLLECTION).doc(studentId);

    try {
        return await db.runTransaction(async (transaction) => {
            const studentSnap = await transaction.get(studentRef);
            if (!studentSnap.exists) return false;
            const student = studentSnap.data() as Student;

            const devices = student.devices || [];
            const device = devices.find(d => d.id === deviceId);
            if (!device) return false;

            device.status = 'approved';
            transaction.update(studentRef, { devices });
            return true;
        });
    } catch (e) {
        console.error('Error in unblockDevice transaction:', e);
        return false;
    }
}

export async function removeDevice(studentId: string, deviceId: string): Promise<boolean> {
    const db = getDB();
    const studentRef = db.collection(STUDENTS_COLLECTION).doc(studentId);

    try {
        return await db.runTransaction(async (transaction) => {
            const studentSnap = await transaction.get(studentRef);
            if (!studentSnap.exists) return false;
            const student = studentSnap.data() as Student;

            const devices = student.devices || [];
            const filtered = devices.filter(d => d.id !== deviceId);

            transaction.update(studentRef, { devices: filtered });
            return true;
        });
    } catch (e) {
        console.error('Error in removeDevice transaction:', e);
        return false;
    }
}

export async function getAuthStats() {
    const db = getDB();
    const studentsSnap = await db.collection(STUDENTS_COLLECTION).get();
    const reqsSnap = await db.collection(DEVICE_REQUESTS_COLLECTION).where('status', '==', 'pending').get();

    let totalStudents = 0;
    let activeStudents = 0;
    let totalDevices = 0;
    let approvedDevices = 0;
    let blockedDevices = 0;

    studentsSnap.forEach(doc => {
        const s = doc.data() as Student;
        if (s.isAdmin) return;

        totalStudents++;
        if (s.isActive) activeStudents++;
        if (s.devices) {
            totalDevices += s.devices.length;
            approvedDevices += s.devices.filter(d => d.status === 'approved').length;
            blockedDevices += s.devices.filter(d => d.status === 'blocked').length;
        }
    });

    return {
        totalStudents,
        activeStudents,
        totalDevices,
        approvedDevices,
        pendingDevices: reqsSnap.size,
        blockedDevices,
    };
}

// ============ Audit Logs & Activity Tracker ============

export interface ActivityLog {
    id: string;
    action: string;
    details: string;
    performedBy: string;
    targetStudentId?: string;
    targetStudentName?: string;
    createdAt: string;
    category: 'student' | 'device' | 'security' | 'announcement' | 'curriculum';
}

const AUDIT_LOGS_COLLECTION = 'admin_audit_logs';

export async function logAdminActivity(log: Omit<ActivityLog, 'id' | 'createdAt'>): Promise<boolean> {
    try {
        const db = getDB();
        const id = `log_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        const entry: ActivityLog = {
            ...log,
            id,
            createdAt: new Date().toISOString()
        };
        await db.collection(AUDIT_LOGS_COLLECTION).doc(id).set(entry);
        return true;
    } catch (e) {
        console.error('[logAdminActivity] Error writing audit log:', e);
        return false;
    }
}

export async function getRecentAuditLogs(limitCount = 40): Promise<ActivityLog[]> {
    try {
        const db = getDB();
        const snap = await db.collection(AUDIT_LOGS_COLLECTION)
            .orderBy('createdAt', 'desc')
            .limit(limitCount)
            .get();
        return snap.docs.map(d => d.data() as ActivityLog);
    } catch (e) {
        console.error('[getRecentAuditLogs] Error retrieving logs:', e);
        return [];
    }
}

export async function forceLogoutStudentDevices(studentId: string): Promise<boolean> {
    const db = getDB();
    const studentRef = db.collection(STUDENTS_COLLECTION).doc(studentId);
    try {
        return await db.runTransaction(async (transaction) => {
            const snap = await transaction.get(studentRef);
            if (!snap.exists) return false;
            // Clear all registered devices so the session tokens/fingerprints become invalid
            transaction.update(studentRef, { devices: [] });
            return true;
        });
    } catch (e) {
        console.error('[forceLogoutStudentDevices] Error:', e);
        return false;
    }
}

