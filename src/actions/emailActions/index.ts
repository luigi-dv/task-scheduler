"use server";

import React from "react";
import { Resend } from "resend";

// Creates an instance of Resend using the API KEY
const resend = new Resend(process.env.RESEND_API_KEY);

// Defines the data structure for an email.
interface Email {
  to: string[]; // An array of email addresses to which to send the email.
  subject: string; // The subject of the email.
  react?: React.ReactElement; // The body of the email as a React element.
  html?: string; // The body of the email as an HTML string.
  text: string; // The body of the email as a plain text string.
}

export const sendEmail = async (payload: Email) => {
  const { error } = await resend.emails.send({
    from: "No Reply <no-reply@ldvloper.com>", // Defines the sender's address.
    ...payload, // Expands the contents of 'payload' to include 'to', 'subject', and 'react'.
  });

  if (error) {
    throw new Error(JSON.stringify(error));
  }
};
