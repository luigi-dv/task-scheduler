'use client';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/solid'
import { classNames } from '@/utilities/cn'

import {NavigationBarProps} from "@/types/NavigationBarProps";
import Image from "next/image";
import {HOME_ROUTE, NEW_TASK_ROUTE} from "@/routes";
import Link from "next/link";
export const NavigationBar = (props: NavigationBarProps) => {
    const {user} = props
    return(
        <Disclosure as="nav" className="bg-gray-50 dark:bg-zinc-900 shadow">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-sky-600.svg"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-logo-sky-600-mark-gray-800-text.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden md:ml-6 md:flex md:space-x-8">
                                    <Link
                                        href={HOME_ROUTE}
                                        className="border-sky-500 text-gray-900 dark:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        href="#"
                                        className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Calendar
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Link
                                       href={NEW_TASK_ROUTE}
                                        className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                    >
                                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                        <span>New Task</span>
                                    </Link>
                                </div>
                                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                                    <button
                                        type="button"
                                        className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                                <span className="sr-only">Open user menu</span>
                                                <Image
                                                    className="h-8 w-8 rounded-full"
                                                    width={32}
                                                    height={32}
                                                    src={user?.image ?? '/images/_7f035a10-4347-4435-94f1-b07cf163cde0.jpg'}
                                                    alt={user?.name ?? 'Anonymous'}
                                                />
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
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {/* Current: "bg-sky-50 border-sky-500 text-sky-700", Default: "border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="bg-sky-50 border-sky-500 text-sky-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                            >
                                Dashboard
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                            >
                                Team
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                            >
                                Projects
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                            >
                                Calendar
                            </Disclosure.Button>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center px-4 sm:px-6">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">Tom Cook</div>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">tom@example.com</div>
                                </div>
                                <button
                                    type="button"
                                    className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
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
                                    as="a"
                                    href="#"
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
    )
}