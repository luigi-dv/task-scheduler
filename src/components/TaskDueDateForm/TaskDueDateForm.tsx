"use client";

import Link from "next/link";
import { SideBySideTaskCalendar } from "@/components/SideBySideTaskCalendar";

export const TaskDueDateForm = (props: TaskDueDateFormProps) => {
  const { taskTitle, taskPriority, taskDescription, deadline, setDeadline } =
    props;

  return (
    <div className="pt-8">
      <div>
        <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100">
          Due Date
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Tasks are organized by creation date and priority level. You select a
          date and the time is assigned depending on the urgency of the task
          (Check the{" "}
          <Link href="/faq#priority-level" className="text-emerald-600">
            {" "}
            priority level
          </Link>{" "}
          for more information).
        </p>
      </div>
      <div className="mt-4">
        <SideBySideTaskCalendar
          taskTitle={taskTitle}
          taskDescription={taskDescription}
          deadline={deadline}
          setDeadline={setDeadline}
        />
        <input
          type="date"
          id="deadline"
          name="deadline"
          value={deadline.toISOString()}
          hidden
        />
      </div>
    </div>
  );
};
