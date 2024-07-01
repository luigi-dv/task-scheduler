import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Resend from "@auth/core/providers/resend";
import { NextAuthConfig, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { sendCustomVerificationRequest } from "@/lib/providers/EmailProvider/sendCustomVerificationRequest";
import {
  AUTH_ERROR_ROUTE,
  AUTH_SIGN_IN_ROUTE,
  AUTH_VERIFY_REQUEST_ROUTE,
} from "@/routes";

export default {
  providers: [
    GitHub,
    Google,
    Resend({
      server: process.env.AUTH_RESEND_SERVER,
      from: "no-reply@ldvloper.com",
      sendVerificationRequest({ identifier, url, provider, theme }) {
        sendCustomVerificationRequest({
          identifier,
          url,
          provider,
        });
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }: { session: Session; token: JWT }) {
      session.user.id = token.id as string;
      return session;
    },
  },
  pages: {
    signIn: AUTH_SIGN_IN_ROUTE,
    verifyRequest: AUTH_VERIFY_REQUEST_ROUTE,
    error: AUTH_ERROR_ROUTE,
  },
} satisfies NextAuthConfig;
