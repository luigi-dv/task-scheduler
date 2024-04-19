import React from 'react';

import {SocialButtonProps} from "@/types/SocialButtonProps";

export const SocialButton = ({children, ...props}: SocialButtonProps) => {
    return (
        <button
            {...props}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
            {children}
        </button>
    );
};