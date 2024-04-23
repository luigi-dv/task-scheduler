"use client";

import { Fragment } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Avatar from "boring-avatars";

import { classNames } from "@/utilities/cn";
import moment from "moment";
import { Task } from "@prisma/client";
import { BorderEmptyState } from "@/components/BorderEmptyState";

import { PriorityQueue } from "@/entities/PriorityQueue";
import { useCalendar } from "@/components/SideBySideTaskCalendar/hooks/useCalendar";
import { v4 as uuidv4 } from "uuid";
import { TaskDTS } from "@/entities/dts/TaskDTS";

type SideBySideTaskCalendarProps = {
  tasks: Task[];
  taskTitle: string;
  taskDescription: string;
  deadline: Date;
  setDeadline: (date: Date) => void;
};

export const SideBySideTaskCalendar = (props: SideBySideTaskCalendarProps) => {
  const { tasks, taskTitle, taskDescription, deadline, setDeadline } = props;
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const {
    days,
    currentMonth,
    selectedDay,
    buttonTitle,
    todaysTasks,
    handleSetDateClick,
    handleDayClick,
    handleNextMonth,
    handlePrevMonth,
  } = useCalendar(tasks, taskTitle, taskDescription);

  /**
   * Gets the priority queue of tasks.
   */
  const getPriorityQueue = () => {
    const priorityQueue = new PriorityQueue<Task>();
    todaysTasks.forEach((task) => priorityQueue.enqueue(task));
    return priorityQueue;
  };

  const getTasksFromPriorityQueue = (priorityQueue: PriorityQueue<Task>) => {
    const tasks = [];
    while (!priorityQueue.isEmpty()) {
      tasks.push(priorityQueue.dequeue());
    }
    return tasks;
  };

  return (
    <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
      <div className="md:pr-14">
        <div className="flex items-center">
          <h2 className="flex-auto font-semibold text-gray-900 dark:text-gray-300">
            {currentMonth.toLocaleString("default", { month: "long" })}{" "}
            {currentMonth.getFullYear()}
          </h2>
          <button
            type="button"
            onClick={handlePrevMonth}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-300"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleNextMonth}
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-300"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500 dark:text-gray-200">
          {days.slice(0, 7).map((day) => {
            const date = new Date(day.date);
            const dayOfWeek = daysOfWeek[date.getDay()];
            return <div key={day.date.toISOString()}>{dayOfWeek}</div>;
          })}
        </div>
        <div className="mt-2 grid grid-cols-7 text-sm">
          {days.map((day, dayIdx) => (
            <div
              key={day.date.toISOString()}
              className={classNames(
                dayIdx > 6 && "border-t border-gray-200 dark:border-gray-800",
                "py-2",
              )}
            >
              <button
                type="button"
                onClick={() => handleDayClick(day)}
                className={classNames(
                  day.isSelected && "text-white bg-sky-500 dark:bg-sky-600",
                  !day.isSelected && day.isToday && "text-sky-600",
                  !day.isSelected &&
                    !day.isToday &&
                    day.isCurrentMonth &&
                    "text-gray-900 dark:text-gray-300",
                  !day.isSelected &&
                    !day.isToday &&
                    !day.isCurrentMonth &&
                    "text-gray-400 dark:text-gray-500 opacity-50", // Add opacity-50 here
                  day.isSelected && day.isToday && "bg-sky-600",
                  day.isSelected && !day.isToday && "bg-sky-900",
                  !day.isSelected && "hover:bg-gray-200 dark:hover:bg-gray-800",
                  (day.isSelected || day.isToday) && "font-semibold",
                  "mx-auto flex h-8 w-8 items-center justify-center rounded-full",
                )}
              >
                <time dateTime={day.date.toISOString()}>
                  {
                    // @ts-ignore
                    day.date.getDate()
                  }
                </time>
              </button>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-12 md:mt-0 md:pl-14">
        <h2 className="font-semibold text-gray-900 dark:text-gray-300">
          Deadline for{" "}
          <time dateTime={selectedDay.toISOString()}>
            {new Date(selectedDay).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </h2>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500 dark:text-gray-200 h-2/3 overflow-y-scroll">
          {todaysTasks.length === 0 && (
            <BorderEmptyState title="No tasks with this deadline" />
          )}
          {todaysTasks.map((task) => (
            <li
              key={task?.title}
              className="group flex items-center space-x-4 rounded-xl py-2 px-4 focus-within:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 dark:focus-within:bg-gray-800"
            >
              <Avatar
                size={40}
                name={task?.title}
                variant="marble"
                colors={["#FF6B6B", "#4ECDC4", "#FFCE54", "#AC92EB", "#A0D568"]}
              />
              <div className="flex-auto">
                <p className="text-gray-900 dark:text-gray-200">
                  {task?.title}
                </p>
                <p className="mt-0.5">
                  <time dateTime={moment(task?.deadline).toISOString()}>
                    {moment(task?.deadline).format("h:mm A")}
                  </time>{" "}
                  -{" "}
                  <time dateTime={task?.deadline.toISOString()}>
                    {moment(task?.deadline).format("h:mm A")}
                  </time>
                </p>
              </div>
              <Menu
                as="div"
                className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
              >
                <div>
                  <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 dark:text-gray-200 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm",
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm",
                            )}
                          >
                            Cancel
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={handleSetDateClick}
          disabled={!taskTitle}
          className="disabled:opacity-50 disabled:cursor-not-allowed w-full mt-4 bg-white dark:bg-zinc-900 py-2 px-4 border border-gray-300 dark:border-zinc-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          {buttonTitle}
        </button>
      </section>
    </div>
  );
};
