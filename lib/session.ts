// Secure Session Management
// Uses JWT (HS256) to sign and verify session cookies
// This prevents cookie forgery - only the server can create valid tokens

import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

// ============================================
// SESSION TIMING
// ============================================

/** Session duration in seconds — 24 hours */
export const SESSION_MAX_AGE = 60 * 60 * 24;
/** Renew session when less than this many seconds remain — 12 hours */
export const RENEWAL_THRESHOLD = 60 * 60 * 12;

// ============================================
// TYPES
// ============================================

export interface SessionPayload extends JWTPayload {
    isAdmin: boolean;
    role: 'admin' | 'moderator' | 'student';
    email?: string;
    id: string;
    name?: string;
    grade?: string;
    track?: string;
    enrolledTracks?: string[];
}

// ============================================
// SECRET KEY
// ============================================

function getSecretKey(): Uint8Array {
    const secret = process.env.SESSION_SECRET || process.env.NEXTAUTH_SECRET || 'chemzim-fallback-secret-key-2026-secure';
    return new TextEncoder().encode(secret);
}

// ============================================
// CREATE (Sign)
// ============================================

/**
 * Creates a signed JWT token from session data.
 * Only the server can create these tokens because only it knows the secret.
 */
export async function createSessionToken(payload: Omit<SessionPayload, 'iat' | 'exp'>): Promise<string> {
    const secret = getSecretKey();

    const token = await new SignJWT({ ...payload })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h') // Token expires in 24 hours
        .sign(secret);

    return token;
}

// ============================================
// VERIFY (Unsign)
// ============================================

/**
 * Verifies a JWT token and returns the payload.
 * Returns null if the token is invalid, expired, or tampered with.
 */
export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
    try {
        const secret = getSecretKey();
        const { payload } = await jwtVerify(token, secret);
        return payload as SessionPayload;
    } catch {
        // Token is invalid, expired, or tampered with
        return null;
    }
}

// ============================================
// COOKIE HELPERS
// ============================================

/** @deprecated Use STUDENT_COOKIE_NAME or ADMIN_COOKIE_NAME instead */
export const SESSION_COOKIE_NAME = 'chemzim-session';

export const STUDENT_COOKIE_NAME = 'chemzim-student';
export const ADMIN_COOKIE_NAME = 'chemzim-admin';

function baseCookieOptions() {
    return {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax' as const,
        path: '/',
        maxAge: SESSION_MAX_AGE, // 24 hours
    };
}

export function getStudentCookieOptions() {
    return { name: STUDENT_COOKIE_NAME, ...baseCookieOptions() };
}

export function getAdminCookieOptions() {
    return { name: ADMIN_COOKIE_NAME, ...baseCookieOptions() };
}

/** @deprecated Use getStudentCookieOptions or getAdminCookieOptions */
export function getSessionCookieOptions() {
    return { name: SESSION_COOKIE_NAME, ...baseCookieOptions() };
}

// ============================================
// SERVER-SIDE SESSION READER (for API Routes)
// ============================================

/**
 * Reads and verifies a session from cookies.
 * Checks admin cookie first, then student cookie, then legacy cookie.
 * Returns the session payload or null if not authenticated.
 */
export async function getSessionFromCookies(): Promise<SessionPayload | null> {
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();

    // Check admin cookie first, then student, then legacy
    const adminCookie = cookieStore.get(ADMIN_COOKIE_NAME);
    if (adminCookie?.value) {
        const session = await verifySessionToken(adminCookie.value);
        if (session) return session;
    }

    const studentCookie = cookieStore.get(STUDENT_COOKIE_NAME);
    if (studentCookie?.value) {
        const session = await verifySessionToken(studentCookie.value);
        if (session) return session;
    }

    // Legacy fallback — supports old sessions during rollout
    const legacyCookie = cookieStore.get(SESSION_COOKIE_NAME);
    if (legacyCookie?.value) {
        return verifySessionToken(legacyCookie.value);
    }

    return null;
}
