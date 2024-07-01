import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";

import authConfig from "@/auth.config";
import { prismaClient } from "@/lib/prisma";

/**
 * Entry point for the NextAuth.js authentication library.
 */
export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
  adapter: PrismaAdapter(prismaClient) as Adapter,
  session: { strategy: "jwt" },
  ...authConfig,
});
