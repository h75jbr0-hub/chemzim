import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify, SignJWT } from 'jose';

// Admin emails - must match lib/admin-config.ts
const ADMIN_EMAILS = ['h75jbr@gmail.com'];

const STUDENT_COOKIE_NAME = 'chemzim-student';
const ADMIN_COOKIE_NAME = 'chemzim-admin';
const LEGACY_COOKIE_NAME = 'chemzim-session';

/** Session lifetime — 24 hours in seconds */
const SESSION_MAX_AGE = 60 * 60 * 24;
/** Renew when less than 12 hours remain */
const RENEWAL_THRESHOLD = 60 * 60 * 12;

function isAdminEmail(email: string | null | undefined): boolean {
    if (!email) return false;
    return ADMIN_EMAILS.includes(email.toLowerCase());
}

function getSecretKey(): Uint8Array {
    const secret = process.env.SESSION_SECRET;
    if (!secret) {
        console.error('[FATAL] SESSION_SECRET is not set! All protected routes are now BLOCKED.');
        throw new Error('SESSION_SECRET is not configured.');
    }
    return new TextEncoder().encode(secret);
}

// ============================================
// SECURITY HEADERS
// ============================================

function setSecurityHeaders(response: NextResponse): NextResponse {
    // Prevent clickjacking — block embedding in iframes
    response.headers.set('X-Frame-Options', 'DENY');
    // Prevent MIME-type sniffing attacks
    response.headers.set('X-Content-Type-Options', 'nosniff');
    // Control referrer info sent to external sites
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    // Deny access to browser features not needed by a chemistry platform
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    // Enforce HTTPS in production (1 year, include subdomains)
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    // Content Security Policy — restrict resource loading
    response.headers.set('Content-Security-Policy',
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://www.gstatic.com https://www.googletagmanager.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "img-src 'self' data: blob: https://*.googleusercontent.com https://*.google.com; " +
        "connect-src 'self' https://*.googleapis.com https://*.firebaseio.com https://*.cloudfunctions.net wss://*.firebaseio.com; " +
        "frame-src 'self' https://accounts.google.com https://*.firebaseapp.com; " +
        "object-src 'none'; " +
        "base-uri 'self'"
    );
    return response;
}

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ============ CSRF Protection for ALL API mutation requests ============
    if (pathname.startsWith('/api/') && ['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
        const origin = request.headers.get('origin');
        const host = request.headers.get('host');

        // Allow requests with no origin (server-to-server, same-origin navigations)
        if (origin) {
            const allowedOrigins = [
                `http://${host}`,
                `https://${host}`,
                'http://localhost:3001',
                'https://chemzim.vercel.app',
            ];

            if (!allowedOrigins.includes(origin)) {
                return setSecurityHeaders(NextResponse.json(
                    { error: 'Forbidden - invalid origin' },
                    { status: 403 }
                ));
            }
        }
    }

    // Skip auth check for public API auth endpoints
    if (pathname.startsWith('/api/auth/')) {
        return setSecurityHeaders(NextResponse.next());
    }

    // Identify paths that require protection
    const isAdminRoute = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');
    const isDashboardRoute = pathname.startsWith('/dashboard');

    const validTracks = ['cie-igcse', 'cie-as', 'cie-alevel', 'edexcel-igcse', 'edexcel-as', 'edexcel-a2'];
    let targetRouteTrack: string | null = null;
    for (const t of validTracks) {
        if (pathname.startsWith(`/dashboard/curriculum/${t}`) || pathname.startsWith(`/api/${t}`)) {
            targetRouteTrack = t;
            break;
        }
    }

    if (!isAdminRoute && !isDashboardRoute && !targetRouteTrack) {
        return setSecurityHeaders(NextResponse.next());
    }

    // 1. Check signed JWT session cookies (admin → student → legacy)
    let sessionPayload: any = null;
    let matchedCookieName: string | null = null;
    const secret = getSecretKey();

    const cookieNames = [ADMIN_COOKIE_NAME, STUDENT_COOKIE_NAME, LEGACY_COOKIE_NAME];
    for (const name of cookieNames) {
        const cookie = request.cookies.get(name);
        if (cookie?.value) {
            try {
                const { payload } = await jwtVerify(cookie.value, secret);
                sessionPayload = payload;
                matchedCookieName = name;
                break;
            } catch {
                // Invalid/expired/tampered token — try next
            }
        }
    }

    // Redirect to login if not authenticated
    if (!sessionPayload) {
        if (pathname.startsWith('/api/')) {
            return setSecurityHeaders(NextResponse.json(
                { error: 'Unauthorized access' },
                { status: 401 }
            ));
        }
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('returnUrl', pathname);
        return setSecurityHeaders(NextResponse.redirect(loginUrl));
    }

    const { role, isAdmin, track } = sessionPayload;
    const isSystemAdmin = isAdmin === true || role === 'admin' || role === 'moderator';

    // 2. Admin Route Protection
    if (isAdminRoute && !isSystemAdmin) {
        if (pathname.startsWith('/api/')) {
            return setSecurityHeaders(NextResponse.json({ error: 'Unauthorized access' }, { status: 401 }));
        }
        return setSecurityHeaders(NextResponse.redirect(new URL('/dashboard', request.url)));
    }

    // 3. Curriculum Route Protection
    if (targetRouteTrack && !isSystemAdmin && track !== targetRouteTrack) {
        if (pathname.startsWith('/api/')) {
            return setSecurityHeaders(NextResponse.json({ error: 'Forbidden' }, { status: 403 }));
        }
        return setSecurityHeaders(NextResponse.redirect(new URL('/dashboard', request.url)));
    }

    // ── Session Renewal (sliding window) ──────────────────────
    // If the token is past the halfway mark, issue a fresh one
    const response = NextResponse.next();

    if (sessionPayload.exp) {
        const now = Math.floor(Date.now() / 1000);
        const timeRemaining = sessionPayload.exp - now;

        if (timeRemaining > 0 && timeRemaining < RENEWAL_THRESHOLD) {
            try {
                // Build a clean payload without JWT metadata fields
                const { iat, exp, nbf, jti, ...cleanPayload } = sessionPayload;

                const freshToken = await new SignJWT(cleanPayload)
                    .setProtectedHeader({ alg: 'HS256' })
                    .setIssuedAt()
                    .setExpirationTime('24h')
                    .sign(secret);

                // Determine which cookie to renew into
                let renewCookieName = matchedCookieName;
                // Migrate legacy cookies to the correct new name
                if (renewCookieName === LEGACY_COOKIE_NAME) {
                    renewCookieName = isSystemAdmin ? ADMIN_COOKIE_NAME : STUDENT_COOKIE_NAME;
                }

                response.cookies.set({
                    name: renewCookieName!,
                    value: freshToken,
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'lax',
                    path: '/',
                    maxAge: SESSION_MAX_AGE,
                });
            } catch {
                // Renewal failed — continue with existing token
            }
        }
    }

    return setSecurityHeaders(response);
}

export const config = {
    matcher: ['/admin/:path*', '/api/:path*', '/dashboard/:path*'],
};
