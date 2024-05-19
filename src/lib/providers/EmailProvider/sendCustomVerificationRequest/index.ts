import React from "react";
import { EmailConfig } from "@auth/core/providers";
import { sendEmail } from "@/actions/emailActions";

import { VerifyIdentityEmail } from "@emails/VerifyIdentityEmail";

export async function sendCustomVerificationRequest(params: {
  identifier: string;
  url: string;
  provider: EmailConfig;
}) {
  const { identifier: to, url } = params;
  const { host } = new URL(url);
  await sendEmail({
    to: [to],
    subject: "Sign in to your account",
    react: React.createElement(VerifyIdentityEmail, {
      url: url,
      host: host,
    }),
  });
}
