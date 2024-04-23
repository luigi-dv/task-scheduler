import { FormEvent, useState } from "react";
import { handleTaskFormSubmit } from "@/components/TaskForm/services/handleTaskFormSubmit";
import { API_CREATE_TASK_ROUTE } from "@/routes";

/**
 * Hook to handle the task form
 *
 * @returns
 * - handleSubmit: function to handle the form submit
 * - taskTitle: the task name
 * - settaskTitle: function to set the task name
 * - taskPriority: the task priority
 * - setTaskPriority: function to set the task priority
 * - taskDescription: the task description
 * - setTaskDescription: function to set the task description
 * - deadline: the task due date
 * - setDeadline: function to set the task due date
 * - deadlineNotification: the deadline notification
 * - setDeadlineNotification: function to set the deadline notification
 */
export const useTaskForm = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState(1);
  const [taskDescription, setTaskDescription] = useState("");
  const [deadline, setDeadline] = useState<Date>(new Date());
  const [deadlineNotification, setDeadlineNotification] = useState(false);

  /**
   * Handle the task form submit
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = handleTaskFormSubmit(
      taskTitle,
      taskDescription,
      taskPriority,
      deadline,
    );
  };

  return {
    handleSubmit,
    taskTitle,
    settaskTitle,
    taskPriority,
    setTaskPriority,
    taskDescription,
    setTaskDescription,
    deadline,
    setDeadline,
    deadlineNotification,
    setDeadlineNotification,
  };
};
