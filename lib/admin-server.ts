import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { authOptions } from './auth-options';
import { isAdmin } from './admin-config';

export async function verifyAdmin(request: Request): Promise<boolean> {
    // 1. Check custom auth cookie using Next.js cookies() API
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('chemzimjo-session');
    
    if (sessionCookie?.value) {
        try {
            const decoded = decodeURIComponent(sessionCookie.value);
            const session = JSON.parse(decoded);
            if (session?.isAdmin === true || session?.role === 'admin' || session?.role === 'moderator') {
                return true;
            }
        } catch {
            // Invalid session
        }
    }

    // 2. Fallback to NextAuth Session
    const session = await getServerSession(authOptions);
    if (session?.user?.email && isAdmin(session.user.email)) {
        return true;
    }

    return false;
}
