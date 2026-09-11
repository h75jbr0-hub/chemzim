import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';

// Singleton instances
let _adminApp: App | null = null;
let _adminAuth: Auth | null = null;
let _adminDb: Firestore | null = null;

function getAdminApp(): App | null {
    if (_adminApp) return _adminApp;

    if (getApps().length > 0) {
        _adminApp = getApps()[0];
        return _adminApp;
    }

    // Validate required environment variables
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;

    if (!projectId || !clientEmail || !privateKey) {
        console.warn('[Firebase Admin] Skipping initialization: Missing environment variables.');
        return null;
    }

    const cleanedKey = privateKey.trim().replace(/^["']|["']$/g, '');
    let processedPrivateKey = cleanedKey;
    
    // If it doesn't look like a standard PEM key, assume it's Base64 encoded (Vercel Production)
    if (!cleanedKey.includes('-----BEGIN PRIVATE KEY-----')) {
        // Strip all whitespace/newlines that might have been copied from a wrapped terminal window
        const strictBase64 = cleanedKey.replace(/[\s\r\n]+/g, '');
        processedPrivateKey = Buffer.from(strictBase64, 'base64').toString('utf8');
    } else {
        // Fallback for Local Development (.env.local)
        processedPrivateKey = cleanedKey.replace(/\\n/g, '\n');
    }

    _adminApp = initializeApp({
        credential: cert({
            projectId,
            clientEmail,
            privateKey: processedPrivateKey,
        }),
    });

    console.log('[Firebase Admin] Initialized successfully');
    return _adminApp;
}

// --- Exported Helpers ---

export function getAdminAuth(): Auth | null {
    if (!_adminAuth) {
        const app = getAdminApp();
        if (!app) return null;
        _adminAuth = getAuth(app);
    }
    return _adminAuth;
}

export function getAdminFirestore(): Firestore | null {
    if (!_adminDb) {
        const app = getAdminApp();
        if (!app) return null;
        _adminDb = getFirestore(app);
    }
    return _adminDb;
}
