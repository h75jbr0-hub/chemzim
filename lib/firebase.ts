import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';

// Firebase configuration - loaded from environment variables
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Warn if critical keys are missing
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.error('[Firebase] Missing environment variables! Check .env.local');
}

// Check if Firebase is configured
export const isFirebaseConfigured = true;

// Lazy initialization
let _app: FirebaseApp | null = null;
let _db: Firestore | null = null;
let _auth: Auth | null = null;

function ensureInitialized(): FirebaseApp | null {
    if (_app) return _app;

    // Check if we have the minimum requirements to initialize
    if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
        if (typeof window !== 'undefined') {
            console.warn('[Firebase] Deployment mode: Missing API Key. Firebase features will be disabled.');
        }
        return null;
    }

    try {
        if (getApps().length > 0) {
            _app = getApp();
        } else {
            _app = initializeApp(firebaseConfig);
        }
        return _app;
    } catch (error) {
        console.error('[Firebase] Initialization error:', error);
        return null;
    }
}

// --- Exported Helpers ---

export function getFirebaseApp(): FirebaseApp | null {
    return ensureInitialized();
}

export function getFirestoreDB(): Firestore | null {
    const app = ensureInitialized();
    if (!app) return null;
    if (!_db) {
        _db = getFirestore(app);
    }
    return _db;
}

export function getAuthInstance(): Auth | null {
    const app = ensureInitialized();
    if (!app) return null;
    if (!_auth) {
        _auth = getAuth(app);
    }
    return _auth;
}

// Legacy exports - Now return null safely if not configured
export const db = typeof window !== 'undefined' ? getFirestoreDB() : null;
export const auth = typeof window !== 'undefined' ? getAuthInstance() : null;
export default typeof window !== 'undefined' ? getFirebaseApp() : null;
