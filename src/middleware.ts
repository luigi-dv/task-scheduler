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
} from "@/routes";

/**
 * This is a middleware that checks if the user is authenticated.
 * If the user is not authenticated, it will redirect the user to the login page.
 */
export const middleware = auth((req) => {
  const { pathname } = new URL(req.url);
  if (
    !req.auth &&
    pathname !== AUTH_SIGN_IN_ROUTE &&
    pathname !== AUTH_VERIFY_REQUEST_ROUTE &&
    pathname !== AUTH_ERROR_ROUTE &&
    pathname !== HOME_ROUTE &&
    pathname !== PRIVACY_POLICY_ROUTE &&
    pathname !== TERMS_OF_SERVICE_ROUTE &&
    pathname !== PRICING_ROUTE
  ) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
  if (pathname === SETTINGS_MAIN_ROUTE) {
    return NextResponse.redirect(new URL(SETTINGS_ACCOUNT_ROUTE, req.url));
  }
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
