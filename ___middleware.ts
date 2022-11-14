import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCookie } from 'cookies-next';

export function middleware(request: NextRequest) {
    
    const token = getCookie('token');
    console.log(token);
    if(!token) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    } else {
        return NextResponse.redirect(new URL('/', request.url));
    }

}

export const config = {
    matcher: ['/((?!api|_next/static|favicon.ico|auth).*)'],
}
  