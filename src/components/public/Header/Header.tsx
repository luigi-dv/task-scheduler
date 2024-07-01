"use client";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  CloseButton,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { LogoIcon } from "@/lib/icons/LogoIcon";
import {
  AUTH_SIGN_IN_ROUTE,
  HOME_ROUTE,
  PRIVACY_POLICY_ROUTE,
  TERMS_OF_SERVICE_ROUTE,
} from "@/routes";
import { PRICING_ROUTE } from "@/routes/public";
import { usePathname } from "next/navigation";
import { HeaderMorePopover } from "@/components/public/HeaderMorePopover";
import { RESOURCES_OBJECT } from "@/routes/public/resources";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  const pathname = usePathname();

  return (
    <Popover className="relative bg-inherit">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center px-4 py-2 sm:px-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href={"/"}>
                <span className="sr-only">Task Scheduler</span>
                <LogoIcon className="group text-emerald-600 dark:text-emerald-400 block h-24 w-auto" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <PopoverButton className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
            <div className="hidden md:flex space-x-10">
              <Link
                href={HOME_ROUTE}
                className={classNames(
                  pathname === HOME_ROUTE
                    ? "text-emerald-600 hover:text-emerald-500 dark:hover:text-emerald-700"
                    : "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-500",
                  "text-base font-medium",
                )}
              >
                Home
              </Link>
              <Link
                href={PRICING_ROUTE}
                className={classNames(
                  pathname === PRICING_ROUTE
                    ? "text-emerald-600 hover:text-emerald-500 dark:hover:text-emerald-700"
                    : "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-500",
                  "text-base font-medium",
                )}
              >
                Pricing
              </Link>
              <Link
                href="#"
                className={classNames(
                  pathname === "#"
                    ? "text-emerald-600 hover:text-emerald-500 dark:hover:text-emerald-700"
                    : "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-500",
                  "text-base font-medium",
                )}
              >
                Docs
              </Link>
              <HeaderMorePopover />
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                href={AUTH_SIGN_IN_ROUTE}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Sign in
              </Link>
            </div>
          </div>
          <AnimatePresence>
            {open && (
              <PopoverPanel
                static
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute top-0 inset-x-0 p-2 md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50 dark:divide-gray-700">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <LogoIcon className="text-emerald-600 dark:text-emerald-400 h-24 w-auto" />
                      </div>
                      <div className="-mr-2">
                        <CloseButton
                          as={"button"}
                          className="bg-inherit rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </CloseButton>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        href={HOME_ROUTE}
                        className="text-base font-medium text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                      >
                        Home
                      </Link>
                      <Link
                        href={PRICING_ROUTE}
                        className="text-base font-medium text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                      >
                        Pricing
                      </Link>

                      <Link
                        href={"#"}
                        className="text-base font-medium text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                      >
                        Docs
                      </Link>
                      {RESOURCES_OBJECT.map((resource) => (
                        <a
                          key={resource.name}
                          href={resource.href}
                          className="text-base font-medium text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
                        >
                          {resource.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-6">
                      <p className="text-center text-base font-medium text-gray-500 dark:text-gray-400">
                        Existing customer?{" "}
                        <Link
                          href={AUTH_SIGN_IN_ROUTE}
                          className="text-emerald-600 hover:text-emerald-500"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
};
