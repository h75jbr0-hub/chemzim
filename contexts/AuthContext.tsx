'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut, User, getIdToken } from 'firebase/auth';
import { getDeviceFingerprint, storeFingerprint, getStoredFingerprint, DeviceInfo, clearFingerprint } from '@/lib/device-fingerprint';
import { getAuthInstance } from '@/lib/firebase';
import { isAdmin as checkAdminEmail } from '@/lib/admin-config';

// ============================================
// TYPES
// ============================================

export interface AuthUser {
    id: string;
    username: string;
    name: string;
    email?: string;
    image?: string;
    grade?: string; // e.g. 'IGCSE', 'AS Level', 'A2 Level'
    isAdmin: boolean;
    role: 'admin' | 'moderator' | 'student';
    authMethod: 'google' | 'credentials';
    track?: string;
    enrolledTracks?: string[];
    xp?: number;
    level?: number;
    lastStudiedLesson?: {
        curriculumId: string;
        topicId: string;
        lessonNum: number;
        lessonTitle: string;
        updatedAt: string;
    };
    dentalBookmarks?: number[];
    dentalMistakes?: number[];
}

interface LoginCredentials {
    username: string;
    password: string;
}

interface LoginResult {
    success: boolean;
    error?: string;
    requiresDeviceApproval?: boolean;
}

interface AuthContextType {
    user: AuthUser | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    deviceInfo: DeviceInfo | null;
    // Student login (username + password)
    loginWithCredentials: (credentials: LoginCredentials) => Promise<LoginResult>;
    // Admin can also manually trigger Google login
    loginWithGoogle: () => Promise<LoginResult>;
    // Logout for both methods
    logout: () => Promise<void>;
    // Update user data
    updateUser: (data: Partial<AuthUser>) => void;
}

// ============================================
// CONTEXT
// ============================================

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ============================================
// PROVIDER
// ============================================

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
    const [firebaseUser, setFirebaseUser] = useState<User | null>(null);

    // Helper: Clear local session (Consolidated)
    const clearSession = useCallback(async () => {
        setUser(null);
        setFirebaseUser(null);
        localStorage.removeItem('auth_user');
        localStorage.removeItem('auth_session');
        localStorage.removeItem('user_is_dental'); // Clear dental sidebar cache
        localStorage.removeItem('last_mode');       // Clear last mode cache

        clearFingerprint();
        
        // Clear middleware session cookie via server
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
        } catch (e) {
            console.error('Logout API failed:', e);
            // Fallback: try to clear client-side (won't work for HttpOnly but safe to try)
            document.cookie = 'chemzim=; path=/; max-age=0';
            document.cookie = 'chemzim-session=; path=/; max-age=0';
            document.cookie = 'chemzim-student=; path=/; max-age=0';
            document.cookie = 'chemzim-admin=; path=/; max-age=0';
        }
    }, []);

    // ----------------------------------------
    // 1. Initialize Device Fingerprint
    // ----------------------------------------
    useEffect(() => {
        const initDevice = async () => {
            try {
                const info = await getDeviceFingerprint();
                setDeviceInfo(info);
                storeFingerprint(info.fingerprint);
            } catch (e) {
                console.error('Device fingerprint error:', e);
            }
        };
        initDevice();
    }, []);

    // ----------------------------------------
    // 2. Firebase Auth State Listener (Auto-Login for Admin)
    // ----------------------------------------
    useEffect(() => {
        let unsubscribe: () => void;

        const handleAdminFirebaseUser = async (fbUser: User) => {
            if (fbUser.email && checkAdminEmail(fbUser.email)) {
                console.log('[Auth] Admin detected via Firebase, verifying with server...');
                
                try {
                    // Get ID Token to send to server
                    const idToken = await getIdToken(fbUser);
                    
                    const response = await fetch('/api/auth/verify-token', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ idToken })
                    });
                    
                    const result = await response.json();
                    
                    if (result.success && result.user) {
                        const adminUser: AuthUser = {
                            id: result.user.id,
                            username: result.user.email.split('@')[0],
                            name: result.user.name || fbUser.displayName || 'System Administrator',
                            email: result.user.email,
                            image: fbUser.photoURL || '',
                            isAdmin: true,
                            role: 'admin',
                            authMethod: 'google'
                        };
                        setUser(adminUser);
                        localStorage.setItem('auth_user', JSON.stringify(adminUser));
                        return true;
                    }
                } catch (e: any) {
                    const isNetworkError = e?.code === 'auth/network-request-failed' || 
                                           e?.message?.includes('network-request-failed') ||
                                           (typeof navigator !== 'undefined' && !navigator.onLine);
                    if (isNetworkError) {
                        console.warn('[Auth] Admin session verification failed due to network/offline status:', e?.message || e);
                    } else {
                        console.error('[Auth] Admin session verification failed:', e);
                    }
                }
            }
            return false;
        };

        const setupAuthListener = async () => {
            try {
                const auth = getAuthInstance();
                
                if (!auth) {
                    console.log('[Auth] Firebase Auth not available, skipping listener.');
                    await checkStoredSession();
                    setIsLoading(false);
                    return;
                }

                // Clean up any stale redirect flags
                localStorage.removeItem('google_redirect_pending');

                // Set up auth state listener
                unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
                    setFirebaseUser(fbUser);

                    if (fbUser) {
                        if (await handleAdminFirebaseUser(fbUser)) {
                            setIsLoading(false);
                            return;
                        }
                    }

                    // Not an admin via Firebase, check localStorage for student session
                    await checkStoredSession();
                });
            } catch (e) {
                console.error('[Auth] Firebase auth listener error:', e);
                await checkStoredSession();
            }
        };

        setupAuthListener();

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    // ----------------------------------------
    // 3. Check Stored Session (for Students)
    // ----------------------------------------

    const verifySessionWithDB = async (userData: AuthUser, sessionFingerprint?: string, checkFingerprint: boolean = true) => {
        try {
            const params = new URLSearchParams({
                id: userData.id,
            });
            if (sessionFingerprint && checkFingerprint) {
                params.append('fingerprint', sessionFingerprint);
            }

            const response = await fetch(`/api/auth/verify?${params.toString()}`);
            const result = await response.json();
            
            return result;

        } catch (dbError) {
            console.error('[Auth] Validation failed:', dbError);
            return null;
        }
    };

    const checkStoredSession = async () => {
        try {
            const storedAuth = localStorage.getItem('auth_user');
            const storedSession = localStorage.getItem('auth_session');

            if (storedAuth && storedSession) {
                const userData = JSON.parse(storedAuth) as AuthUser;
                const sessionData = JSON.parse(storedSession);
                const now = Date.now();
                const sessionAge = now - sessionData.timestamp;

                // Session valid for 24 hours
                if (sessionAge < 24 * 60 * 60 * 1000) {
                    const currentFingerprint = getStoredFingerprint();
                    let isValidSession = false;

                    // A. Fingerprint Check (Frontend Level)
                    if (userData.authMethod === 'credentials') {
                        // Must match current device fingerprint
                        if (currentFingerprint === sessionData.fingerprint) {
                            isValidSession = true;
                        }
                    } else {
                        // Google auth - less strict on fingerprint for now
                        isValidSession = true;
                    }

                    // B. Database Check (Backend Level - The Fix)
                    if (isValidSession) {
                        const verifyResult = await verifySessionWithDB(
                            userData,
                            sessionData.fingerprint,
                            userData.authMethod === 'credentials'
                        );

                        if (verifyResult && verifyResult.success === true) {
                            const updatedUser = verifyResult.user ? { ...userData, ...verifyResult.user } : userData;
                            setUser(updatedUser);
                            localStorage.setItem('auth_user', JSON.stringify(updatedUser));
                            try {
                                const { mergeDentalCloudData } = await import('@/lib/dental-store');
                                mergeDentalCloudData(updatedUser.dentalBookmarks, updatedUser.dentalMistakes);
                            } catch (e) {
                                console.warn('Could not merge dental cloud data:', e);
                            }
                        } else {
                            clearSession();
                        }
                    } else {
                        clearSession();
                    }
                } else {
                    // Session expired
                    clearSession();
                }
            }
        } catch (error) {
            console.error('[Auth] Session check error:', error);
            clearSession();
        }

        setIsLoading(false);
    };

    // ----------------------------------------
    // NEW: Active Session Watcher (Re-validate on window focus)
    // ----------------------------------------
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && user) {
                console.log('[Auth] App active, re-verifying session...');
                // Silent re-verification
                checkStoredSession();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, [user]); // Re-bind if user changes

    // ----------------------------------------
    // 4. Login with Credentials (Students)
    // ----------------------------------------
    const loginWithCredentials = async (credentials: LoginCredentials): Promise<LoginResult> => {
        setIsLoading(true);

        try {
            let device;
            try {
                device = deviceInfo || await getDeviceFingerprint();
            } catch (fpErr) {
                console.warn('[Auth] Device fingerprint generation fallback:', fpErr);
                device = {
                    fingerprint: 'fallback-' + Date.now(),
                    name: 'Mobile Device',
                    type: 'mobile' as const,
                    browser: 'Browser',
                    os: 'OS',
                    screenResolution: '0x0',
                    language: 'en',
                    timezone: 'UTC',
                };
            }

            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: credentials.username,
                    password: credentials.password,
                    fingerprint: device.fingerprint,
                    deviceInfo: {
                        name: device.name,
                        type: device.type,
                        browser: device.browser,
                        os: device.os,
                    },
                }),
            });

            let result;
            try {
                result = await response.json();
            } catch (jsonErr) {
                console.error('[Auth] Failed to parse JSON response:', jsonErr, response.status);
                setIsLoading(false);
                return {
                    success: false,
                    error: `Server response error (${response.status}). Please try again or contact support.`,
                };
            }

            if (result.success && result.user) {
                const authUser: AuthUser = {
                    id: result.user.id,
                    username: result.user.username,
                    name: result.user.name,
                    email: result.user.email,
                    image: result.user.image,
                    grade: result.user.grade,
                    isAdmin: result.user.isAdmin || false,
                    role: result.user.role || (result.user.isAdmin ? 'admin' : 'student'),
                    authMethod: 'credentials',
                    track: result.user.track,
                    dentalBookmarks: result.user.dentalBookmarks,
                    dentalMistakes: result.user.dentalMistakes,
                };

                setUser(authUser);
                try {
                    const { mergeDentalCloudData } = await import('@/lib/dental-store');
                    mergeDentalCloudData(authUser.dentalBookmarks, authUser.dentalMistakes);
                } catch (e) {
                    console.warn('Could not merge dental cloud data:', e);
                }
                localStorage.setItem('auth_user', JSON.stringify(authUser));
                localStorage.setItem('auth_session', JSON.stringify({
                    fingerprint: device.fingerprint,
                    timestamp: Date.now(),
                }));

                // Session cookie for middleware is now set securely by the server API
                
                setIsLoading(false);
                return { success: true };
            }

            setIsLoading(false);
            return {
                success: false,
                error: result.error,
                requiresDeviceApproval: result.requiresDeviceApproval,
            };
        } catch (error) {
            console.error('[Auth] Login error:', error);
            setIsLoading(false);
            return { success: false, error: 'Connection error occurred' };
        }
    };

    // ----------------------------------------
    // 5. Login with Google (Manual Trigger)
    // ----------------------------------------
    const loginWithGoogle = async (): Promise<LoginResult> => {
        setIsLoading(true);

        try {
            const auth = getAuthInstance();
            if (!auth) {
                return { success: false, error: 'Firebase Auth is not available' };
            }
            const provider = new GoogleAuthProvider();

            // Use popup for all devices (was confirmed working on mobile too)
            const result = await signInWithPopup(auth, provider);
            const fbUser = result.user;

            // Finalizing Admin Session: Wait for the secure cookie to be set
            const idToken = await getIdToken(fbUser);
            const verifyRes = await fetch('/api/auth/verify-token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idToken })
            });
            const verifyResult = await verifyRes.json();

            if (fbUser.email && checkAdminEmail(fbUser.email) && verifyResult.success) {
                const adminUser: AuthUser = {
                    id: verifyResult.user.id,
                    username: verifyResult.user.email.split('@')[0],
                    name: verifyResult.user.name || fbUser.displayName || 'System Administrator',
                    email: verifyResult.user.email,
                    image: fbUser.photoURL || '',
                    isAdmin: true,
                    role: 'admin',
                    authMethod: 'google'
                };
                setUser(adminUser);
                localStorage.setItem('auth_user', JSON.stringify(adminUser));
                setIsLoading(false);
                return { success: true };
            } else {
                console.error('[AuthContext] Admin check failed:', {
                    email: fbUser.email,
                    isAdmin: checkAdminEmail(fbUser.email),
                    verifySuccess: verifyResult.success,
                    verifyError: verifyResult.error
                });
                if (auth) {
                    await firebaseSignOut(auth);
                }
                setIsLoading(false);
                return {
                    success: false,
                    error: `Unauthorized: ${fbUser.email || 'No email'} (Verification: ${verifyResult.success ? 'Success' : 'Failed: ' + (verifyResult.error || 'Server error')})`
                };
            }
        } catch (error: any) {
            console.error('[Auth] Google login error:', error);
            setIsLoading(false);
            return {
                success: false,
                error: error.message || 'Google login failed'
            };
        }
    };

    // ----------------------------------------
    // 6. Logout
    // ----------------------------------------
    const logout = async () => {
        try {
            // Sign out from Firebase if logged in via Google
            if (firebaseUser) {
                const auth = getAuthInstance();
                if (auth) {
                    await firebaseSignOut(auth);
                }
            }
        } catch (e) {
            console.error('[Auth] Firebase signout error:', e);
        }

        await clearSession();
    };

    // ----------------------------------------
    // 7. Update User Data
    // ----------------------------------------
    const updateUser = (data: Partial<AuthUser>) => {
        if (!user) return;
        const newUser = { ...user, ...data };
        setUser(newUser);
        localStorage.setItem('auth_user', JSON.stringify(newUser));
    };

    // ----------------------------------------
    // RENDER
    // ----------------------------------------
    return (
        <AuthContext.Provider value={{
            user,
            isLoading,
            isAuthenticated: !!user,
            deviceInfo,
            loginWithCredentials,
            loginWithGoogle,
            logout,
            updateUser,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

// ============================================
// HOOKS
// ============================================

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}

export function useRequireAuth(redirectTo: string = '/login') {
    const { user, isLoading, isAuthenticated } = useAuth();

    useEffect(() => {
        // No redirection needed
    }, [isLoading, isAuthenticated, redirectTo]);

    return { user, isLoading };
}
