"use client";

import { Fragment, RefObject, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "@/utilities/cn";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";

export const WeekCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const timeBarPosition = ((currentHour + currentMinute / 60) / 24) * 100;

  const handleNextWeek = () => {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() + 7)));
  };

  const handlePrevWeek = () => {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() - 7)));
  };

  const handleTodayClick = () => {
    const today = new Date();
    setCurrentWeek(today);
    setSelectedDay(today);
  };

  const daysInWeek = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(currentWeek);
    day.setDate(currentWeek.getDate() - currentWeek.getDay() + i);
    return {
      date: day,
      isToday: day.toDateString() === new Date().toDateString(),
      isSelected: day.toDateString() === selectedDay.toDateString(),
    };
  });

  useEffect(() => {
    const hourElement = document.getElementById(`hour-bar`);
    if (hourElement) {
      const elementPosition = hourElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const container: RefObject<HTMLDivElement> = useRef(null);
  const containerNav: RefObject<HTMLDivElement> = useRef(null);
  const containerOffset: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;
    if (
      container.current != null &&
      containerNav.current != null &&
      containerOffset.current != null
    ) {
      container.current.scrollTop =
        ((container.current.scrollHeight -
          containerNav.current.offsetHeight -
          containerOffset.current.offsetHeight) *
          currentMinute) /
        1440;
    }
  }, []);

  return (
    <div className="flex h-full flex-col">
      <header className="relative z-30 flex flex-none items-center justify-between border-b border-gray-200 dark:border-gray-800 py-4 px-6 dark:bg-zinc-800">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          <time
            dateTime={`${currentWeek.getFullYear()}-${currentWeek.getMonth() + 1}`}
          >
            {currentWeek.toLocaleString("default", { month: "long" })}{" "}
            {currentWeek.getFullYear()}
          </time>
        </h1>
        <div className="flex items-center">
          <div className="flex items-center rounded-md shadow-sm md:items-stretch">
            <button
              type="button"
              onClick={handlePrevWeek}
              className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900 py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleTodayClick}
              className="hidden border-t border-b border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900 px-3.5 text-sm font-medium text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50 dark:text-gray-100 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              type="button"
              onClick={handleNextWeek}
              className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900 py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <Menu.Button
                type="button"
                className="flex items-center rounded-md border border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900 py-2 pl-3 pr-2 text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Week view
                <ChevronDownIcon
                  className="ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden rounded-md bg-gray-50 dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 dark:text-gray-100"
                              : "text-gray-800 dark:text-gray-200",
                            "block px-4 py-2 text-sm",
                          )}
                        >
                          Day view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 dark:text-gray-100"
                              : "text-gray-800 dark:text-gray-200",
                            "block px-4 py-2 text-sm",
                          )}
                        >
                          Week view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 dark:text-gray-100"
                              : "text-gray-800 dark:text-gray-200",
                            "block px-4 py-2 text-sm",
                          )}
                        >
                          Month view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 dark:text-gray-100"
                              : "text-gray-800 dark:text-gray-200",
                            "block px-4 py-2 text-sm",
                          )}
                        >
                          Year view
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <Menu as="div" className="relative ml-6 md:hidden">
            <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden rounded-md bg-gray-50 dark:bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={handleTodayClick}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:text-gray-100"
                            : "text-gray-800 dark:text-gray-200",
                          "block px-4 py-2 text-sm",
                        )}
                      >
                        Go to today
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:text-gray-100"
                            : "text-gray-800 dark:text-gray-200",
                          "block px-4 py-2 text-sm",
                        )}
                      >
                        Day view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:text-gray-100"
                            : "text-gray-800 dark:text-gray-200",
                          "block px-4 py-2 text-sm",
                        )}
                      >
                        Week view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:text-gray-100"
                            : "text-gray-800 dark:text-gray-200",
                          "block px-4 py-2 text-sm",
                        )}
                      >
                        Month view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:text-gray-100"
                            : "text-gray-800 dark:text-gray-200",
                          "block px-4 py-2 text-sm",
                        )}
                      >
                        Year view
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
      <div
        ref={container}
        className="flex flex-auto flex-col bg-white dark:bg-zinc-900 ring-1 ring-black ring-opacity-5 sm:pr-8"
      >
        <div
          style={{ width: "165%" }}
          className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
        >
          <div
            ref={containerNav}
            className="sticky top-0 z-20 flex-none bg-white dark:bg-zinc-900 shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
          >
            <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
              {daysInWeek.map((day, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex flex-col items-center pt-2 pb-3"
                >
                  {["S", "M", "T", "W", "T", "F", "S"][day.date.getDay()]}{" "}
                  <span
                    className={classNames(
                      day.isToday
                        ? "rounded-full bg-emerald-500 font-semibold text-white"
                        : "text-gray-900 dark:text-gray-300",
                      "mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900 dark:text-gray-100",
                    )}
                  >
                    {day.date.getDate()}
                  </span>
                </button>
              ))}
            </div>

            <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 dark:divide-gray-800 border-r border-gray-100 dark:border-gray-700 text-sm leading-6 text-gray-500 sm:grid">
              <div className="col-end-1 w-14" />
              {daysInWeek.map((day, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center py-3"
                >
                  <span
                    className={classNames(day.isToday && "flex items-baseline")}
                  >
                    {
                      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                        day.date.getDay()
                      ]
                    }{" "}
                    <span
                      className={classNames(
                        day.isToday
                          ? "ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 font-semibold text-white"
                          : "text-gray-900 dark:text-gray-300",
                        "items-center justify-center font-semibold text-gray-900",
                      )}
                    >
                      {day.date.getDate()}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-auto">
            <div className="sticky left-0 w-14 flex-none bg-white dark:bg-zinc-800 ring-1 ring-gray-100 dark:ring-gray-700" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100 dark:divide-gray-800"
                style={{
                  gridTemplateRows: "repeat(48, minmax(3.5rem, 1fr))",
                  position: "relative",
                }}
              >
                <div ref={containerOffset} className="row-end-1 h-7"></div>
                {hours.map((hour, index) => (
                  <Fragment key={index}>
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        {hour % 12 === 0 ? 12 : hour % 12}
                        {hour < 12 ? "AM" : "PM"}
                      </div>
                    </div>
                    <div />
                  </Fragment>
                ))}
                {/* Add a new div that will serve as the line for the current hour */}
                <div
                  id="hour-bar"
                  style={{
                    top: `${timeBarPosition}%`,
                  }}
                  className={`absolute z-10 inset-0 h-1 bg-red-500 rounded-3xl`}
                />
              </div>

              {/* Vertical lines */}
              <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 dark:divide-gray-800 sm:grid sm:grid-cols-7">
                <div className="col-start-1 row-span-full" />
                <div className="col-start-2 row-span-full" />
                <div className="col-start-3 row-span-full" />
                <div className="col-start-4 row-span-full" />
                <div className="col-start-5 row-span-full" />
                <div className="col-start-6 row-span-full" />
                <div className="col-start-7 row-span-full" />
                <div className="col-start-8 row-span-full w-8" />
              </div>

              {/* Events */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                style={{
                  gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
                }}
              >
                <li
                  className="relative mt-px flex sm:col-start-3"
                  style={{ gridRow: "74 / span 12" }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
                  >
                    <p className="order-1 font-semibold text-blue-700">
                      Breakfast
                    </p>
                    <p className="text-blue-500 group-hover:text-blue-700">
                      <time dateTime="2022-01-12T06:00">6:00 AM</time>
                    </p>
                  </a>
                </li>
                <li
                  className="relative mt-px flex sm:col-start-3"
                  style={{ gridRow: "92 / span 30" }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                  >
                    <p className="order-1 font-semibold text-pink-700">
                      Flight to Paris
                    </p>
                    <p className="text-pink-500 group-hover:text-pink-700">
                      <time dateTime="2022-01-12T07:30">7:30 AM</time>
                    </p>
                  </a>
                </li>
                <li
                  className="relative mt-px hidden sm:col-start-6 sm:flex"
                  style={{ gridRow: "122 / span 24" }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs leading-5 hover:bg-gray-200"
                  >
                    <p className="order-1 font-semibold text-gray-800 dark:text-gray-200">
                      Meeting with design team at Disney
                    </p>
                    <p className="text-gray-500 group-hover:text-gray-800 dark:text-gray-200">
                      <time dateTime="2022-01-15T10:00">10:00 AM</time>
                    </p>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
