import {auth} from "@/auth";
import {NextResponse} from "next/server";

/**
 * This is a middleware that checks if the user is authenticated.
 * If the user is not authenticated, it will redirect the user to the login page.
 */
export default auth((req) => {
    if (!req.auth) {
        return NextResponse.rewrite(new URL('/login', req.url))
    }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}