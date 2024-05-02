import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import Resend from "@auth/core/providers/resend";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { sendCustomVerificationRequest } from "@/lib/providers/EmailProvider/sendCustomVerificationRequest";

export default {
  providers: [
    GitHub,
    Google,
    Resend({
      server: process.env.AUTH_RESEND_SERVER,
      from: "no-reply@ldvloper.com",
      sendVerificationRequest({ identifier, url, provider, theme }) {
        // Custom sendVerificationRequest function
        sendCustomVerificationRequest({
          identifier,
          url,
          provider,
          theme,
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
};
