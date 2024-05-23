import { ChangeEvent } from "react";

import {
  ChevronDoubleUpIcon,
  ChevronUpIcon,
  MinusIcon,
} from "@heroicons/react/16/solid";

export const TaskDetailsForm = (props: TaskDetailsFromProps) => {
  const {
    taskTitle,
    setTaskTitle,
    taskPriority,
    setTaskPriority,
    taskDescription,
    setTaskDescription,
  } = props;

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTaskPriority(Number(e.target.value));
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDescription(e.target.value);
  };

  return (
    <>
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
              htmlFor="title"
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
                  value={taskTitle}
                  onChange={handleTitleChange}
                  type="text"
                  name="title"
                  id="title"
                  className="input pl-10 pr-20"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="task-priority" className="sr-only">
                    Priority
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={taskPriority}
                    onChange={handlePriorityChange}
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 dark:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm"
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
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Task Description
          </label>
          <div className="mt-1">
            <textarea
              id="description"
              name="description"
              value={taskDescription}
              onChange={handleDescriptionChange}
              rows={3}
              className="input resize-none"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Write a few description for your task.
          </p>
        </div>
      </div>
    </>
  );
};
