import { protectedRoutes, publicRoutes } from './app/_router/routes'
import { NextResponse } from 'next/server'

export function middleware(request) {
  const currentUser = request.cookies.get('currentUser')?.value

  if (
    !currentUser &&
    (protectedRoutes.includes(request.nextUrl.pathname) ||
      request.nextUrl.pathname === '/')
  ) {
    request.cookies.delete('currentUser')
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.delete('currentUser')
    return response
  }

  if (
    currentUser &&
    (publicRoutes.includes(request.nextUrl.pathname) ||
      request.nextUrl.pathname === '/')
  ) {
    return NextResponse.redirect(new URL('/home/tickets', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
