import { classNames } from "@/utilities/cn";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { RESOURCES_OBJECT } from "@/routes/public/resources";

export const HeaderMorePopover = () => {
  return (
    <Popover className="relative z-50">
      {({ open }) => (
        <>
          <PopoverButton
            className={classNames(
              open
                ? "text-gray-900 dark:text-gray-300"
                : "text-gray-500 dark:text-gray-300",
              "group cursor-pointer px-2 bg-inherit rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500",
            )}
          >
            <span>More</span>
            <ChevronDownIcon
              className={classNames(
                open
                  ? "text-gray-600 dark:text-gray-400"
                  : "text-gray-400 dark:text-gray-500",
                "ml-2 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-gray-400",
              )}
              aria-hidden="true"
            />
          </PopoverButton>
          <AnimatePresence>
            {open && (
              <PopoverPanel
                static
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white/95 dark:bg-black/95 px-5 py-6 sm:gap-8 sm:p-8 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0">
                    {RESOURCES_OBJECT.map((resource) => (
                      <Link
                        key={resource.name}
                        href={resource.href}
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <p className="text-base font-medium text-gray-900 dark:text-gray-200">
                          {resource.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {resource.description}
                        </p>
                      </Link>
                    ))}
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
