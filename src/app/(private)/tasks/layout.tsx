import React from "react";

export default async function TasksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 my-4">
      <div className="max-w-3xl mx-auto">{children}</div>
    </section>
  );
}
