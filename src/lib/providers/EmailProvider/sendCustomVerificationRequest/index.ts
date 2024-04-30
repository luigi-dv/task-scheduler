import { Theme } from "@auth/core/types";

export async function sendVerificationRequest(params: {
  identifier: any;
  provider: any;
  url: any;
  theme: any;
}) {
  const { identifier: to, provider, url, theme } = params;
  const { host } = new URL(url);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${provider.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: provider.from,
      to,
      subject: `Sign in to ${host}`,
      html: html({ url, host, theme }),
      text: text({ url, host }),
    }),
  });

  if (!res.ok)
    throw new Error("Resend error: " + JSON.stringify(await res.json()));
}

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
const html = (params: { url: string; host: string; theme: Theme }) => {
  const { url, host, theme } = params;

  const escapedHost = host.replace(/\./g, "&#8203;.");

  const brandColor = theme.brandColor || "#346df1";

  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: theme.buttonText || "#fff",
  };

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <style>
        body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background: ${color.background};
        color: ${color.text};
        margin: 0;
        padding: 0;
        }
        main {
            background: ${color.mainBackground};
        }
        .container {
            padding: 2rem;
        }
        .logo {
            margin-bottom: 2rem;
        }
        .logo img {
            max-width: 100%;
        }
        .content {
            padding: 2rem;
            background: ${color.mainBackground};
            border-radius: 4px;
            box-shadow: 0 0 10px rgba(0,0,0,.1);
        }
        .footer {
            margin-top: 2rem;
            text-align: center;
            font-size: .75rem;
        }
        .footer a {
            color: ${color.text};
        }
        .button {
            background: ${color.buttonBackground};
            border: 1px solid ${color.buttonBorder};
            color: ${color.buttonText};
            display: inline-block;
            text-decoration: none;
            border-radius: 4px;
            padding: 0.5rem 1rem;
        }
    </style>
    <title>
        Sign in to ${escapedHost}
    </title>
</head>
<body>
    <main>
        <div class="container">
            <div class="content">
                <h1 style="font-size: 1.5rem;">Sign in to ${escapedHost}</h1>
                <p>You're receiving this email because you've signed in to ${host}.</p>
                <p>If you didn't request this email you can safely ignore it.</p>
                <p style="margin-top: 2rem;">To continue signing in, click the button below:</p>
                <a class="button" href="${url}">Sign in</a>
            </div>
            <p class="footer">Powered by <a href="https://resend.com">Resend</a></p>
        </div>
    </main>
</body>
`;
};

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
const text = ({ url, host }: { url: string; host: string }) => {
  return `Sign in to ${host}\n${url}\n\n`;
};
