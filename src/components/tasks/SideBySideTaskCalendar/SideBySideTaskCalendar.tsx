"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Avatar from "boring-avatars";

import { classNames } from "@/utilities/cn";
import { BorderEmptyState } from "@/components/common/BorderEmptyState";
import { useCalendar } from "@/components/tasks/SideBySideTaskCalendar/hooks/useCalendar";
import { formatShortText } from "@/utilities/formatShortText";

type SideBySideTaskCalendarProps = {
  taskTitle: string;
  taskDescription: string;
  deadline: Date;
  setDeadline: (date: Date) => void;
};

export const SideBySideTaskCalendar = (props: SideBySideTaskCalendarProps) => {
  const { taskTitle, taskDescription, deadline, setDeadline } = props;
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
    handleTaskClick,
  } = useCalendar(taskTitle, taskDescription);

  return (
    <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 md:dark:divide-gray-800">
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
                  day.isSelected &&
                    "text-white bg-emerald-500 dark:bg-emerald-500",
                  !day.isSelected && day.isToday && "text-emerald-600",
                  !day.isSelected &&
                    !day.isToday &&
                    day.isCurrentMonth &&
                    "text-gray-900 dark:text-gray-300",
                  !day.isSelected &&
                    !day.isToday &&
                    !day.isCurrentMonth &&
                    "text-gray-400 dark:text-gray-500 opacity-50", // Add opacity-50 here
                  day.isSelected && day.isToday && "bg-emerald-500",
                  day.isSelected && !day.isToday && "bg-emerald-900",
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
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500 dark:text-gray-200 h-2/3 overflow-auto">
          {todaysTasks.length === 0 && (
            <BorderEmptyState title="No tasks with this deadline" />
          )}
          {todaysTasks.map((task) => (
            <li
              onClick={() => handleTaskClick(task)}
              key={task?.title}
              className="group flex items-center space-x-4 rounded-xl py-2 px-4 cursor-pointer focus-within:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 dark:focus-within:bg-gray-800"
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
                <p className="mt-0.5 text-gray-400">
                  {task?.description ? (
                    formatShortText(task?.description, 50)
                  ) : (
                    <span className="italic text-gray-200 dark:text-gray-700">
                      No description available
                    </span>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={handleSetDateClick}
          disabled={!taskTitle}
          className="disabled:opacity-50 disabled:cursor-not-allowed w-full mt-4 bg-white dark:bg-zinc-900 py-2 px-4 border border-gray-300 dark:border-zinc-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          {buttonTitle}
        </button>
      </section>
    </div>
  );
};
