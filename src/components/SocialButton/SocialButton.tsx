import React from "react";

import { SocialButtonProps } from "@/types/SocialButtonProps";

export const SocialButton = ({ children, ...props }: SocialButtonProps) => {
  return (
    <button
      {...props}
      className="w-full inline-flex justify-center gap-x-2 py-2 px-4 border border-gray-300 dark:border-gray-800 rounded-md shadow-sm bg-white dark:bg-transparent text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900"
    >
      {children}
    </button>
  );
};
