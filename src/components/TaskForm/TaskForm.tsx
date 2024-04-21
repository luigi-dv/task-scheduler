"use client";

import { SideBySideTaskCalendar } from "@/components/SideBySideTaskCalendar";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/utilities/cn";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDoubleUpIcon,
  ChevronUpIcon,
  MinusIcon,
} from "@heroicons/react/16/solid";

export const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState(1);
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [deadlineNotification, setDeadlineNotification] = useState(false);

  return (
    <form className="mt-12 space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100">
              Task Details
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Please Provide Your Task Details to Enable Enhanced Management and
              Streamlined Workflow.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <div>
                <label
                  htmlFor="task-name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Task name and Priority
                </label>
                <div className="mt-1">
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">
                        {
                          {
                            1: <MinusIcon className="h-5 w-5 text-blue-500" />,
                            2: (
                              <ChevronUpIcon className="h-5 w-5 text-yellow-500" />
                            ),
                            3: (
                              <ChevronDoubleUpIcon className="h-5 w-5 text-red-500" />
                            ),
                          }[taskPriority]
                        }
                      </span>
                    </div>
                    <input
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                      type="text"
                      name="task-name"
                      id="task-name"
                      className="input pl-10 pr-20"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <label htmlFor="task-priority" className="sr-only">
                        Priority
                      </label>
                      <select
                        id="task-priority"
                        name="task-priority"
                        value={taskPriority}
                        onChange={(e) =>
                          setTaskPriority(Number(e.target.value))
                        }
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 dark:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm"
                      >
                        <option value={3}>High</option>
                        <option value={2}>Medium</option>
                        <option value={1}>Low</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex"></div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="task-description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Task Description
              </label>
              <div className="mt-1">
                <textarea
                  id="task-description"
                  name="task-description"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  rows={3}
                  className="input resize-none"
                  defaultValue={""}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Write a few description for your task.
              </p>
            </div>
          </div>
          <div className="pt-8">
            <div>
              <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100">
                Due Date
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Tasks are organized by creation date and priority level. You
                select a date and the time is assigned depending on the urgency
                of the task (Check the{" "}
                <Link href="/faq#priority-level" className="text-sky-600">
                  {" "}
                  priority level
                </Link>{" "}
                for more information).
              </p>
            </div>
            <div className="mt-4">
              <SideBySideTaskCalendar
                tasks={[]}
                taskName={taskName}
                taskDescription={taskDescription}
                dueDate={dueDate}
                setDueDate={setDueDate}
              />
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100">
                Notifications
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We will always let you know when your task deadline is
                approaching, but you pick if want to hear about by email.
              </p>
            </div>
            <div className="mt-6">
              <fieldset>
                <legend className="text-base font-medium text-gray-900 dark:text-gray-100">
                  By Email
                </legend>
                <div className="mt-4 space-y-4">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="deadline-notification"
                        name="deadline-notification"
                        type="checkbox"
                        className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="deadline-notification"
                        className="font-medium text-gray-700 dark:text-gray-300"
                      >
                        Deadline Reminder
                      </label>
                      <p className="text-gray-500">
                        Get notified when your task deadline is approaching.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="task-completed"
                        name="task-completed"
                        type="checkbox"
                        className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="task-completed"
                        className="font-medium text-gray-700 dark:text-gray-300"
                      >
                        Task Completed
                      </label>
                      <p className="text-gray-500">
                        Get notified when your task is completed.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="task-not-completed"
                        name="task-not-completed"
                        type="checkbox"
                        className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="task-not-completed"
                        className="font-medium text-gray-700 dark:text-gray-300"
                      >
                        Task Not Completed
                      </label>
                      <p className="text-gray-500">
                        Get notified when your task has not been completed.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-6">
                <div>
                  <legend className="text-base font-medium text-gray-900 dark:text-gray-100">
                    Push Notifications
                  </legend>
                  <p className="text-sm text-gray-500">
                    These are delivered to your mobile device or desktop via web
                    application.
                  </p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-everything"
                      className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-email"
                      className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white dark:bg-zinc-900 py-2 px-4 border border-gray-300 dark:border-zinc-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
