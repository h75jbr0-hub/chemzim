import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth, getAdminFirestore } from '@/lib/firebase-admin';
import { isAdmin as checkAdminEmail } from '@/lib/admin-config';
import { createSessionToken, getAdminCookieOptions } from '@/lib/session';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { idToken } = body;

        if (!idToken) {
            return NextResponse.json({ success: false, error: 'Token is required' }, { status: 400 });
        }

        const auth = getAdminAuth();
        if (!auth) {
            return NextResponse.json({ success: false, error: 'Firebase Auth not initialized' }, { status: 500 });
        }
        const decodedToken = await auth.verifyIdToken(idToken);
        const email = decodedToken.email;

        if (!email) {
            return NextResponse.json({ success: false, error: 'Email missing from token' }, { status: 401 });
        }

        // --- Multi-Layer Admin Check ---
        let isAdmin = checkAdminEmail(email);

        // Check the user-created 'admin' collection in Firestore
        if (!isAdmin) {
            const db = getAdminFirestore();
            if (db) {
                const adminDoc = await db.collection('admin').doc(email.toLowerCase()).get();
                if (adminDoc.exists && adminDoc.data()?.role === 'admin') {
                    isAdmin = true;
                }
            }
        }

        if (!isAdmin) {
            return NextResponse.json({ success: false, error: 'Unauthorized email' }, { status: 401 });
        }

        const response = NextResponse.json({
            success: true,
            user: {
                id: decodedToken.uid,
                email: email,
                name: decodedToken.name || email.split('@')[0],
                isAdmin: true,
                role: 'admin'
            }
        });

        // Create signed JWT session token (cannot be forged)
        const token = await createSessionToken({
            isAdmin: true,
            role: 'admin',
            email: email,
            id: decodedToken.uid,
            name: decodedToken.name || email.split('@')[0],
        });

        const cookieOptions = getAdminCookieOptions();
        response.cookies.set({
            ...cookieOptions,
            value: token,
        });

        return response;
    } catch (error) {
        console.error('[VerifyToken API] Error:', error);
        return NextResponse.json({ success: false, error: 'Invalid token' }, { status: 401 });
    }
}

