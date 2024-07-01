"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { settingsNavigation } from "@/constants/settings";
import { classNames } from "@/utilities/cn";

export const SettingsNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isCurrentPath = (href: string) => {
    return pathname === href;
  };

  return (
    <nav
      aria-label="Sections"
      className="hidden flex-shrink-0 w-96 bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-950 xl:flex xl:flex-col"
    >
      <div className="flex-shrink-0 h-16 px-6 border-b border-gray-200 dark:border-gray-950 flex items-center">
        <p className="text-lg font-light text-gray-800 dark:text-gray-200">
          Settings
        </p>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto">
        {settingsNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              isCurrentPath(item.href)
                ? "bg-gray-200 dark:bg-gray-800 bg-opacity-50"
                : "hover:bg-gray-200 dark:hover:bg-gray-900 hover:bg-opacity-50",
              "flex p-6 border-b border-gray-200 dark:border-gray-900",
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <item.icon
              className="flex-shrink-0 -mt-0.5 h-6 w-6 text-emerald-400"
              aria-hidden="true"
            />
            <div className="ml-3 text-sm">
              <p className="font-medium text-gray-800 dark:text-gray-200">
                {item.name}
              </p>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};
