"use client";

import {
  CloseButton,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { LogoIcon } from "@/lib/icons/LogoIcon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/utilities/cn";
import {
  RESOURCES_OBJECT,
  CALLS_TO_ACTION,
  HOME_ROUTE,
  PRICING_ROUTE,
  DOCUMENTATION_ROUTE,
} from "@/routes/public";
import { AUTH_SIGN_IN_ROUTE, DASHBOARD_ROUTE } from "@/routes";
import { AnimatePresence, motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import { User } from "next-auth";

interface MobileDialogHeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

interface AuthenticatedDialogProps extends MobileDialogHeaderProps {
  user?: User;
}

interface UnauthenticatedDialogProps extends MobileDialogHeaderProps {}

export const MobileDialogHeader = (props: MobileDialogHeaderProps) => {
  const session = useSession();
  const { mobileMenuOpen, setMobileMenuOpen } = props;

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          {session && session.data ? (
            <AuthenticatedDialog {...props} user={session.data.user} />
          ) : (
            <UnauthenticatedDialog {...props} />
          )}
        </>
      )}
    </AnimatePresence>
  );
};

const AuthenticatedDialog = (props: AuthenticatedDialogProps) => {
  const { mobileMenuOpen, setMobileMenuOpen } = props;
  return (
    <Dialog
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="fixed inset-0 bg-black/30"
      />
      <div className="fixed inset-0 z-10" />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="fixed inset-y-0 left-0 z-20 w-3/4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="-m-1.5 p-1.5">
              <span className="sr-only">Task Scheduler</span>
              <LogoIcon className="h-20 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
              <div className="space-y-2 py-6">
                <CloseButton
                  as={Link}
                  href={DASHBOARD_ROUTE}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Dashboard
                </CloseButton>
                <CloseButton
                  as={Link}
                  href={"#"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Calendar
                </CloseButton>

                <CloseButton
                  as={Link}
                  href={DOCUMENTATION_ROUTE}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Docs
                </CloseButton>
              </div>
            </div>
          </div>
        </DialogPanel>
      </motion.div>
    </Dialog>
  );
};

const UnauthenticatedDialog = (props: UnauthenticatedDialogProps) => {
  const { mobileMenuOpen, setMobileMenuOpen } = props;
  return (
    <Dialog
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="fixed inset-0 bg-black/30"
      />
      <div className="fixed inset-0 z-10" />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="fixed inset-y-0 left-0 z-20 w-3/4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="-m-1.5 p-1.5">
              <span className="sr-only">Task Scheduler</span>
              <LogoIcon className="h-20 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
              <div className="space-y-2 py-6">
                <CloseButton
                  as={Link}
                  href={HOME_ROUTE}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Home
                </CloseButton>
                <CloseButton
                  as={Link}
                  href={PRICING_ROUTE}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Pricing
                </CloseButton>

                <CloseButton
                  as={Link}
                  href={DOCUMENTATION_ROUTE}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Docs
                </CloseButton>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">
                        Resources
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...RESOURCES_OBJECT, ...CALLS_TO_ACTION].map(
                          (item) => (
                            <DisclosureButton
                              key={item.name}
                              as={Link}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                              {item.name}
                            </DisclosureButton>
                          ),
                        )}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <CloseButton
                  as={Link}
                  href={AUTH_SIGN_IN_ROUTE}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Log in
                </CloseButton>
              </div>
            </div>
          </div>
        </DialogPanel>
      </motion.div>
    </Dialog>
  );
};
