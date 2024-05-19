import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@/auth.config";
import { prismaClient } from "@/lib/prisma";
import { AUTH_SIGN_IN_ROUTE, AUTH_VERIFY_REQUEST_ROUTE } from "@/routes";

/**
 * Entry point for the NextAuth.js authentication library.
 */
export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
  adapter: PrismaAdapter(prismaClient),
  session: { strategy: "jwt" },
  ...authConfig,
});
