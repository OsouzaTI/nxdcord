import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
    
    if(!request.cookies.get('token')) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    } else {
        return NextResponse.redirect(new URL('/', request.url));
    }

}

export const config = {
    matcher: ['/((?!api|_next/static|favicon.ico|auth).*)'],
}
  