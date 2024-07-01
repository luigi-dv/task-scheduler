import { useEffect, useState } from "react";

/**
 * Hook to detect if the user prefers dark mode
 * @returns boolean
 */
export const useDarkMode = (): boolean => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Initial check
    setIsDarkMode(mediaQuery.matches);

    // Event listener for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup event listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isDarkMode;
};
