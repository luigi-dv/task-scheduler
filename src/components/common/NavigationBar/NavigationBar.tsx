"use client";

// Next Modules
import Image from "next/image";
import Link from "next/link";
// Routes
import { CALENDAR_ROUTE, HOME_ROUTE, NEW_TASK_ROUTE } from "@/routes";
// Headless and Icons UI Modules
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";

// Types
import { NavigationBarProps } from "@/types/NavigationBarProps";
// Components
import { signOut } from "next-auth/react";
import { LogoIcon } from "@/lib/icons/LogoIcon";
import Avatar from "boring-avatars";
import { ProfileDropdown } from "@/components/common/ProfileDropdown";

/**
 * A navigation bar that allows users to navigate the application.
 * @param props The NavigationBarProps.
 * @constructor
 */
export const NavigationBar = (props: NavigationBarProps) => {
  const { user } = props;
  return (
    <Disclosure as="nav" className="bg-inherit shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 focus:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <Link href={HOME_ROUTE}>
                    <LogoIcon className="text-emerald-600 dark:text-emerald-400 block lg:hidden h-20 w-auto" />
                    <LogoIcon className="text-emerald-600 dark:text-emerald-400 hidden lg:block h-20 w-auto" />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link
                    href={HOME_ROUTE}
                    className="border-emerald-500 text-gray-900 dark:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href={CALENDAR_ROUTE}
                    className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:text-gray-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Calendar
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link
                    href={NEW_TASK_ROUTE}
                    className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    <PlusIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>New Task</span>
                  </Link>
                </div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  <ProfileDropdown user={user} />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-emerald-50 border-emerald-500 text-emerald-700", Default: "border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 dark:hover:text-gray-400" */}
              <Disclosure.Button
                as={Link}
                href={HOME_ROUTE}
                className="bg-emerald-50 dark:bg-emerald-900 border-emerald-500 text-emerald-700 dark:text-emerald-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href={CALENDAR_ROUTE}
                className="border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 dark:hover:text-gray-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex-shrink-0">
                  {user?.image ? (
                    <Image
                      className="h-10 w-10 rounded-full"
                      width={32}
                      height={32}
                      src={user.image}
                      alt={user?.name ?? "Anonymous"}
                    />
                  ) : user?.email ? (
                    <Avatar
                      size={40}
                      name={user.email}
                      variant="pixel"
                      colors={[
                        "#FF6B6B",
                        "#4ECDC4",
                        "#FFCE54",
                        "#AC92EB",
                        "#A0D568",
                      ]}
                    />
                  ) : (
                    <Avatar
                      size={40}
                      name={"Anonymous"}
                      variant="pixel"
                      colors={[
                        "#FF6B6B",
                        "#4ECDC4",
                        "#FFCE54",
                        "#AC92EB",
                        "#A0D568",
                      ]}
                    />
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                    {user?.name ?? "Anonymous"}
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {user?.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white dark:bg-gray-700 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="button"
                  onClick={() => signOut()}
                  className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
