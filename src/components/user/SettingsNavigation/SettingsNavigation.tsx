"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  mainSettingsNavigation,
  accessSettingsNavigation,
  integrationSettingsNavigation,
} from "@/constants/settings";
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
      className="flex-shrink-0 w-96 bg-inherit xl:flex xl:flex-col"
    >
      <div className="flex-1 min-h-0 overflow-y-auto space-y-2 lg:px-4">
        <div>
          {mainSettingsNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center relative"
              aria-current={isCurrentPath(item.href) ? "page" : undefined}
            >
              {isCurrentPath(item.href) && (
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-xl bg-emerald-600 dark:bg-emerald-400"
                  aria-hidden="true"
                />
              )}
              <div
                className={classNames(
                  isCurrentPath(item.href)
                    ? "bg-gray-200 dark:bg-gray-800 bg-opacity-50"
                    : "hover:bg-gray-200 dark:hover:bg-gray-800 hover:bg-opacity-50",
                  "w-full ml-2 flex items-center p-1.5 rounded-lg cursor-pointer transition-colors ease-in-out duration-150",
                )}
              >
                <item.icon
                  className="flex-shrink-0 -mt-0.5 h-4 w-4 text-gray-800 dark:text-gray-200"
                  aria-hidden="true"
                />
                <div className="ml-3 text-sm">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {item.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="border-t border-gray-300 dark:border-gray-800">
          <div className="py-4">
            <span className="mb-4 block text-xs font-semibold text-gray-600 dark:text-gray-500 tracking-wide">
              Access
            </span>
            {accessSettingsNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center relative"
                aria-current={isCurrentPath(item.href) ? "page" : undefined}
              >
                {isCurrentPath(item.href) && (
                  <span
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-xl bg-emerald-600 dark:bg-emerald-400"
                    aria-hidden="true"
                  />
                )}
                <div
                  className={classNames(
                    isCurrentPath(item.href)
                      ? "bg-gray-200 dark:bg-gray-800 bg-opacity-50"
                      : "hover:bg-gray-200 dark:hover:bg-gray-800 hover:bg-opacity-50",
                    "w-full ml-2 flex items-center p-1.5 rounded-lg cursor-pointer transition-colors ease-in-out duration-150",
                  )}
                >
                  <item.icon
                    className="flex-shrink-0 -mt-0.5 h-4 w-4 text-gray-800 dark:text-gray-200"
                    aria-hidden="true"
                  />
                  <div className="ml-3 text-sm">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {item.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-800">
          <div className="py-4">
            <span className="mb-4 block text-xs font-semibold text-gray-600 dark:text-gray-500 tracking-wide">
              Integrations
            </span>
            {integrationSettingsNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center relative"
                aria-current={isCurrentPath(item.href) ? "page" : undefined}
              >
                {isCurrentPath(item.href) && (
                  <span
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-xl bg-emerald-600 dark:bg-emerald-400"
                    aria-hidden="true"
                  />
                )}
                <div
                  className={classNames(
                    isCurrentPath(item.href)
                      ? "bg-gray-200 dark:bg-gray-800 bg-opacity-50"
                      : "hover:bg-gray-200 dark:hover:bg-gray-800 hover:bg-opacity-50",
                    "w-full ml-2 flex items-center p-1.5 rounded-lg cursor-pointer transition-colors ease-in-out duration-150",
                  )}
                >
                  <item.icon
                    className="flex-shrink-0 -mt-0.5 h-4 w-4 text-gray-800 dark:text-gray-200"
                    aria-hidden="true"
                  />
                  <div className="ml-3 text-sm">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {item.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
