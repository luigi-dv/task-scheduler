import { auth } from "@/auth";
import { NextResponse } from "next/server";
import {
  AUTH_ERROR_ROUTE,
  AUTH_SIGN_IN_ROUTE,
  AUTH_VERIFY_REQUEST_ROUTE,
  HOME_ROUTE,
  PRICING_ROUTE,
  PRIVACY_POLICY_ROUTE,
  TERMS_OF_SERVICE_ROUTE,
  SETTINGS_ACCOUNT_ROUTE,
  SETTINGS_MAIN_ROUTE,
  DASHBOARD_ROUTE,
  SETTINGS_PROFILE_ROUTE,
} from "@/routes";

/**
 * This is a middleware that checks if the user is authenticated.
 * If the user is not authenticated, it will redirect the user to the login page.
 */
export const middleware = auth((req) => {
  const { pathname } = new URL(req.url);

  // Routes that don't require authentication
  const publicRoutes = [
    HOME_ROUTE,
    AUTH_SIGN_IN_ROUTE,
    AUTH_VERIFY_REQUEST_ROUTE,
    AUTH_ERROR_ROUTE,
    PRIVACY_POLICY_ROUTE,
    TERMS_OF_SERVICE_ROUTE,
    PRICING_ROUTE,
  ];

  // Redirect unauthenticated users trying to access protected routes to sign-in page
  if (!req.auth && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL(AUTH_SIGN_IN_ROUTE, req.url));
  }

  // Redirect if user is authenticated and trying to access sign-in page
  if (req.auth && pathname === AUTH_SIGN_IN_ROUTE) {
    return NextResponse.redirect(new URL(DASHBOARD_ROUTE, req.url));
  }

  // Redirect to specific settings page if on main settings route
  if (pathname === SETTINGS_MAIN_ROUTE) {
    return NextResponse.redirect(new URL(SETTINGS_PROFILE_ROUTE, req.url));
  }

  // Redirect authenticated users from home to dashboard
  if (req.auth && pathname === HOME_ROUTE) {
    return NextResponse.redirect(new URL(DASHBOARD_ROUTE, req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
  ],
};

export default middleware;
