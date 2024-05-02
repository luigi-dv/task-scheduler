import { auth } from "@/auth";
import { NextResponse } from "next/server";

/**
 * This is a middleware that checks if the user is authenticated.
 * If the user is not authenticated, it will redirect the user to the login page.
 */
export default auth((req) => {
  if (!req.auth) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
});

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images/*).*)"],
};
