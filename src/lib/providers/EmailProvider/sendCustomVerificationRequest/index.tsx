import React from "react";
import { EmailConfig } from "@auth/core/providers";
import { sendEmail } from "@/actions/emailActions";

import { VerifyIdentityEmail } from "@/emails/VerifyIdentityEmail";
import { renderAsync } from "@react-email/render";

export async function sendCustomVerificationRequest(params: {
  identifier: string;
  url: string;
  provider: EmailConfig;
}) {
  const { identifier: to, url } = params;
  const { host } = new URL(url);
  const html = await renderAsync(VerifyIdentityEmail({ url, host }));
  await sendEmail({
    to: [to],
    subject: "Sign in to your account",
    html: html,
    text: `Sign in to your account by clicking the following link: ${url}`,
  });
}
