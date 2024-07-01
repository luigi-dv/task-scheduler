import { CloseButton } from "@headlessui/react";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface CloseLinkButtonProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export const CloseLinkButton = ({
  children,
  className,
  href,
}: CloseLinkButtonProps) => (
  <CloseButton as={Link} href={href} className={className}>
    {children}
  </CloseButton>
);
