"use client";

import Link from "next/link";
// Routes
import { AUTH_SIGN_IN_ROUTE } from "@/routes";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";

// Components
import { signOut, useSession } from "next-auth/react";
import { LogoIcon } from "@/lib/icons/LogoIcon";
import Avatar from "boring-avatars";
import { ProfileDropdown } from "@/components/common/ProfileDropdown";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MobileDialogHeader } from "@/components/public/MobileDialogHeader";
import { useState } from "react";
import { UnauthenticatedPopoverGroup } from "@/components/common/UnauthenticatedPopoverGroup";
import { AuthenticatedPopoverGroup } from "@/components/common/AutheticatedPopoverGroup/AuthenticatedPopoverGroup";

/**
 * A navigation bar that allows users to navigate the application.
 * @constructor
 */
export const NavigationBar = () => {
  const session = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  return (
    <header className="bg-inherit">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Task Scheduler | Ldvloper</span>
            <LogoIcon className="h-20 w-auto" />
          </Link>
        </div>

        {session.data ? (
          <>
            <AuthenticatedPopoverGroup />
            <div className="lg:flex lg:flex-1 lg:justify-end">
              <ProfileDropdown user={session?.data?.user} />
            </div>
          </>
        ) : (
          <>
            <UnauthenticatedPopoverGroup />
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                href={AUTH_SIGN_IN_ROUTE}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
              >
                Sign in
              </Link>
            </div>
          </>
        )}
      </nav>
      <MobileDialogHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={handleMobileMenuClose}
      />
    </header>
  );
};
