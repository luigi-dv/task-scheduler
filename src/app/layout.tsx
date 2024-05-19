import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

// Styles
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Scheduler | Ldvloper",
  description:
    "Task Scheduler is a simple task management application that helps you stay organized.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={
          inter.className + "min-h-[100dvh] bg-gray-100 dark:bg-gray-950"
        }
      >
        {children}
      </body>
    </html>
  );
}
