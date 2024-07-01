import React, { ButtonHTMLAttributes } from "react";

type SocialButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};
