import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Avatar from "boring-avatars";
import { Fragment } from "react";
import Link from "next/link";
import { classNames } from "@/utilities/cn";
import { SETTINGS_ROUTE } from "@/routes";
import { signOut } from "next-auth/react";

import { ProfileDropdownProps } from "@/types/ProfileDropdownProps";

export const ProfileDropdown = (props: ProfileDropdownProps) => {
  const { user } = props;

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
          <span className="sr-only">Open user menu</span>
          {user?.image ? (
            <Image
              className="h-8 w-8 rounded-full"
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
              colors={["#FF6B6B", "#4ECDC4", "#FFCE54", "#AC92EB", "#A0D568"]}
            />
          ) : (
            <Avatar
              size={40}
              name={"Anonymous"}
              variant="pixel"
              colors={["#FF6B6B", "#4ECDC4", "#FFCE54", "#AC92EB", "#A0D568"]}
            />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-zinc-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                href="#"
                className={classNames(
                  active ? "bg-gray-100 dark:bg-gray-900" : "",
                  "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300",
                )}
              >
                Your Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href={SETTINGS_ROUTE}
                className={classNames(
                  active ? "bg-gray-100 dark:bg-gray-900" : "",
                  "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300",
                )}
              >
                Settings
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                onClick={() => signOut()}
                className={classNames(
                  active ? "bg-gray-100 dark:bg-gray-900" : "",
                  "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer",
                )}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
