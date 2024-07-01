import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import Link from "next/link";
import { DASHBOARD_ROUTE } from "@/routes";

export const AuthenticatedPopoverGroup = () => {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
      <CloseButton
        as={Link}
        href={DASHBOARD_ROUTE}
        className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
      >
        Dashboard
      </CloseButton>

      <CloseButton
        as={Link}
        href={"#"}
        className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
      >
        Calendar
      </CloseButton>
    </PopoverGroup>
  );
};
