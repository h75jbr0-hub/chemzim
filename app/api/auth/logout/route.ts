import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
    try {
        const cookieStore = await cookies();
        // Clear new separated cookies
        cookieStore.delete('chemzim-student');
        cookieStore.delete('chemzim-admin');
        // Clear legacy cookies
        cookieStore.delete('chemzim');
        cookieStore.delete('chemzim-session');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[Logout API] Error:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
