"use client";

import { useState } from "react";
import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { LogoIcon } from "@/lib/icons/LogoIcon";
import Link from "next/link";

import {
  RESOURCES_OBJECT,
  CALLS_TO_ACTION,
  HOME_ROUTE,
  PRICING_ROUTE,
} from "@/routes/public";
import { AUTH_SIGN_IN_ROUTE } from "@/routes";
import { MobileDialogHeader } from "@/components/public/MobileDialogHeader";

export const PublicHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);
  return (
    <header className="bg-inherit">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Task Scheduler | Ldvloper</span>
            <LogoIcon className="h-20 w-auto" />
          </Link>
        </div>
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <CloseButton
            as={Link}
            href={HOME_ROUTE}
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Home
          </CloseButton>

          <CloseButton
            as={Link}
            href={PRICING_ROUTE}
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Pricing
          </CloseButton>

          <CloseButton
            as={Link}
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Docs
          </CloseButton>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
              Resources
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400 dark:text-gray-200"
                aria-hidden="true"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-700 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {RESOURCES_OBJECT.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex-auto">
                      <CloseButton
                        as={Link}
                        href={item.href}
                        className="block font-semibold text-gray-900 dark:text-gray-100"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </CloseButton>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 dark:divide-gray-700 bg-gray-50 dark:bg-gray-700">
                {CALLS_TO_ACTION.map((item) => (
                  <CloseButton
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
                  >
                    <item.icon
                      className="h-5 w-5 flex-none text-gray-400 dark:text-gray-300"
                      aria-hidden="true"
                    />
                    {item.name}
                  </CloseButton>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={AUTH_SIGN_IN_ROUTE}
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Sign in
          </Link>
        </div>
      </nav>
      <MobileDialogHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={handleMobileMenuClose}
      />
    </header>
  );
};
