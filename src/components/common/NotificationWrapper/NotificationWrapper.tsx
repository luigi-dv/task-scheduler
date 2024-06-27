"use client";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useDarkMode } from "@/hooks/useDarkMode";

export const NotificationWrapper = () => {
  const isDarkMode = useDarkMode();

  return (
    <ToastContainer
      draggable
      pauseOnHover
      theme={isDarkMode ? "dark" : "light"}
    />
  );
};
