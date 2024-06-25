import { auth } from "@/auth";
import { NextResponse } from "next/server";
import {
  AUTH_ERROR_ROUTE,
  AUTH_SIGN_IN_ROUTE,
  AUTH_VERIFY_REQUEST_ROUTE,
} from "@/routes";
import { SETTINGS_ACCOUNT_ROUTE, SETTINGS_MAIN_ROUTE } from "@/routes/settings";

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
    pathname !== AUTH_ERROR_ROUTE
  ) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
  if (pathname === SETTINGS_MAIN_ROUTE) {
    return NextResponse.redirect(new URL(SETTINGS_ACCOUNT_ROUTE, req.url));
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
     * - privacy-policy (privacy policy page)
     * - terms-of-service (terms of service page)
     */
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|privacy-policy|terms-of-service|pricing).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },

    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|privacy-policy|terms-of-service|pricing).*)",
      has: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },

    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|privacy-policy|terms-of-service|pricing).*)",
      has: [{ type: "header", key: "x-present" }],
      missing: [{ type: "header", key: "x-missing", value: "prefetch" }],
    },
  ],
};

export default middleware;
