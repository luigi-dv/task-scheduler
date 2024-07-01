import type { Metadata } from "next";
import React from "react";
import { NavigationBar } from "@/components/common/NavigationBar";
import { Footer } from "@/components/common/Footer";

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
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
