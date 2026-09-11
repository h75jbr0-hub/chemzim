// =============================================================
// In-Memory Rate Limiter for Authentication Endpoints
// =============================================================
// Prevents brute-force attacks by limiting failed login attempts
// per username and per IP address. Uses a sliding window approach
// with automatic cleanup of expired entries.
//
// Note: In-memory storage resets on serverless cold starts.
// For persistent rate limiting across instances, consider
// upgrading to Redis (e.g., Upstash) in production.
// =============================================================

interface RateLimitEntry {
    /** Number of failed attempts in the current window */
    attempts: number;
    /** Timestamp (ms) of the first failed attempt in this window */
    windowStart: number;
    /** Timestamp (ms) when the lockout expires (null if not locked) */
    lockedUntil: number | null;
}

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
    /** Max failed attempts per username before lockout */
    MAX_ATTEMPTS_PER_USERNAME: 5,
    /** Max failed attempts per IP before lockout */
    MAX_ATTEMPTS_PER_IP: 20,
    /** Lockout duration for username (ms) — 15 minutes */
    LOCKOUT_DURATION_USERNAME: 15 * 60 * 1000,
    /** Lockout duration for IP (ms) — 30 minutes */
    LOCKOUT_DURATION_IP: 30 * 60 * 1000,
    /** Sliding window size (ms) — 15 minutes */
    WINDOW_SIZE: 15 * 60 * 1000,
    /** Cleanup interval (ms) — runs every 5 minutes */
    CLEANUP_INTERVAL: 5 * 60 * 1000,
} as const;

// ============================================
// STORAGE
// ============================================

const usernameAttempts = new Map<string, RateLimitEntry>();
const ipAttempts = new Map<string, RateLimitEntry>();

// ============================================
// CLEANUP (prevents memory leaks)
// ============================================

let cleanupTimer: ReturnType<typeof setInterval> | null = null;

function startCleanup() {
    if (cleanupTimer) return;
    cleanupTimer = setInterval(() => {
        const now = Date.now();
        for (const [key, entry] of usernameAttempts) {
            if (isExpired(entry, now)) usernameAttempts.delete(key);
        }
        for (const [key, entry] of ipAttempts) {
            if (isExpired(entry, now)) ipAttempts.delete(key);
        }
    }, CONFIG.CLEANUP_INTERVAL);

    // Allow Node.js to exit even if timer is running (for dev/test)
    if (cleanupTimer && typeof cleanupTimer === 'object' && 'unref' in cleanupTimer) {
        cleanupTimer.unref();
    }
}

function isExpired(entry: RateLimitEntry, now: number): boolean {
    const windowExpired = now - entry.windowStart > CONFIG.WINDOW_SIZE;
    const lockExpired = !entry.lockedUntil || now > entry.lockedUntil;
    return windowExpired && lockExpired;
}

// ============================================
// CORE LOGIC
// ============================================

export interface RateLimitResult {
    /** Whether the request is allowed */
    allowed: boolean;
    /** Reason for blocking (null if allowed) */
    reason: string | null;
    /** Seconds remaining until lockout expires (0 if not locked) */
    retryAfterSeconds: number;
}

/**
 * Checks if a login attempt is allowed based on username and IP rate limits.
 * Call this BEFORE authenticating the user.
 */
export function checkRateLimit(username: string, ip: string): RateLimitResult {
    startCleanup();

    const now = Date.now();
    const normalizedUsername = username.trim().toLowerCase();

    // Check username lockout
    const userEntry = usernameAttempts.get(normalizedUsername);
    if (userEntry?.lockedUntil && now < userEntry.lockedUntil) {
        const retryAfterSeconds = Math.ceil((userEntry.lockedUntil - now) / 1000);
        return {
            allowed: false,
            reason: `Too many failed attempts for this account. Try again in ${formatDuration(retryAfterSeconds)}`,
            retryAfterSeconds,
        };
    }

    // Check IP lockout
    const ipEntry = ipAttempts.get(ip);
    if (ipEntry?.lockedUntil && now < ipEntry.lockedUntil) {
        const retryAfterSeconds = Math.ceil((ipEntry.lockedUntil - now) / 1000);
        return {
            allowed: false,
            reason: `Too many failed attempts from this network. Try again in ${formatDuration(retryAfterSeconds)}`,
            retryAfterSeconds,
        };
    }

    return { allowed: true, reason: null, retryAfterSeconds: 0 };
}

/**
 * Records a failed login attempt. Call this AFTER a failed authentication.
 */
export function recordFailedAttempt(username: string, ip: string): void {
    startCleanup();

    const now = Date.now();
    const normalizedUsername = username.trim().toLowerCase();

    // Record username failure
    const userEntry = getOrCreateEntry(usernameAttempts, normalizedUsername, now);
    userEntry.attempts++;
    if (userEntry.attempts >= CONFIG.MAX_ATTEMPTS_PER_USERNAME) {
        userEntry.lockedUntil = now + CONFIG.LOCKOUT_DURATION_USERNAME;
    }

    // Record IP failure
    const ipEntry = getOrCreateEntry(ipAttempts, ip, now);
    ipEntry.attempts++;
    if (ipEntry.attempts >= CONFIG.MAX_ATTEMPTS_PER_IP) {
        ipEntry.lockedUntil = now + CONFIG.LOCKOUT_DURATION_IP;
    }
}

/**
 * Clears rate limit entries for a username after successful login.
 * This prevents lockout from carrying over after a correct password.
 */
export function clearRateLimit(username: string): void {
    const normalizedUsername = username.trim().toLowerCase();
    usernameAttempts.delete(normalizedUsername);
}

// ============================================
// HELPERS
// ============================================

function getOrCreateEntry(
    map: Map<string, RateLimitEntry>,
    key: string,
    now: number
): RateLimitEntry {
    let entry = map.get(key);

    // Reset window if expired
    if (!entry || now - entry.windowStart > CONFIG.WINDOW_SIZE) {
        entry = { attempts: 0, windowStart: now, lockedUntil: null };
        map.set(key, entry);
    }

    return entry;
}

function formatDuration(seconds: number): string {
    if (seconds < 60) return `${seconds} seconds`;
    const minutes = Math.ceil(seconds / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
}
