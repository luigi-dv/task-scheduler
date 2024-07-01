import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

// Styles
import "./globals.css";
import { ToastProvider } from "@/providers/ToastProvider";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Scheduler | Ldvloper",
  description:
    "Task Scheduler is a simple task management application that helps you stay organized.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" className="h-full">
      <body
        className={
          inter.className + "min-h-[100dvh] bg-gray-100 dark:bg-gray-950"
        }
      >
        <ToastProvider>
          <SessionProvider session={session}>{children}</SessionProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
