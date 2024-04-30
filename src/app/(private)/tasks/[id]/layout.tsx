import React from "react";

export default function TaskLayout({
  children,
  activity,
}: {
  children: React.ReactNode;
  activity: React.ReactNode;
}) {
  return (
    <>
      {children}
      {activity}
    </>
  );
}
