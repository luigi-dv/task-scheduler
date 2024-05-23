"use client";

// Components
import { TaskDetailsForm } from "@/components/tasks/TaskDetailsForm";
import { TaskDueDateForm } from "@/components/tasks/TaskDueDateForm";
import { TaskNotificationsForm } from "@/components/tasks/TaskNotificationsForm";
// Hooks
import { useTaskForm } from "@/components/tasks/TaskForm/hooks/useTaskForm";

export const TaskForm = () => {
  const {
    handleSubmit,
    taskTitle,
    setTaskTitle,
    taskPriority,
    setTaskPriority,
    taskDescription,
    setTaskDescription,
    deadline,
    setDeadline,
    emailNotification,
    setEmailNotification,
    pushNotification,
    setPushNotification,
  } = useTaskForm();

  return (
    <form onSubmit={handleSubmit} className="mt-12">
      <div className="space-y-8 divide-y divide-gray-200 dark:divide-gray-800">
        <div>
          <TaskDetailsForm
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            taskPriority={taskPriority}
            setTaskPriority={setTaskPriority}
            taskDescription={taskDescription}
            setTaskDescription={setTaskDescription}
          />

          <TaskDueDateForm
            taskTitle={taskTitle}
            taskPriority={taskPriority}
            taskDescription={taskDescription}
            deadline={deadline}
            setDeadline={setDeadline}
          />

          <div className="pt-8">
            <TaskNotificationsForm
              setEmailNotification={setEmailNotification}
              setPushNotification={setPushNotification}
              emailNotification={emailNotification}
              pushNotification={pushNotification}
            />
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white dark:bg-zinc-900 py-2 px-4 border border-gray-300 dark:border-zinc-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
