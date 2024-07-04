"use client";

import React from "react";
import { Toaster } from "sonner";

interface ToastProviderProps {
  children: React.ReactNode;
}

/**
 * ToastProvider is a provider that wraps the application and provides a toast notification system. (CC)
 * @param children
 * @constructor
 */
export const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      {children}
      <Toaster position="top-right" richColors />
    </>
  );
};
