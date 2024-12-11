import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isPasswordPage = request.nextUrl.pathname === '/password';
  const isAuthed = request.cookies.has('auth');

  if (!isAuthed && !isPasswordPage) {
    return NextResponse.redirect(new URL('/password', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 