import type { Metadata } from "next";
import { auth } from "@/auth";
import React from "react";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer/Footer";

const metadata: Metadata = {
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
    <>
      <NavigationBar user={session?.user} />
      <div className="min-h-screen py-6">{children}</div>
      <Footer />
    </>
  );
}
