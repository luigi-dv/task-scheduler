import { FormEvent, useState } from "react";
import { handleTaskFormSubmit } from "@/components/tasks/TaskForm/services/handleTaskFormSubmit";
import { useRouter } from "next/navigation";
import { TASK_INFORMATION_ROUTE } from "@/routes";

/**
 * Hook to handle the task form
 *
 * @returns
 * - handleSubmit: function to handle the form submit
 * - taskTitle: the task name
 * - setTaskTitle: function to set the task name
 * - taskPriority: the task priority
 * - setTaskPriority: function to set the task priority
 * - taskDescription: the task description
 * - setTaskDescription: function to set the task description
 * - deadline: the task due date
 * - setDeadline: function to set the task due date
 * - emailNotification: the email notification
 * - setEmailNotification: function to set the email notification
 * - pushNotification: the push notification
 * - setPushNotification: function to set the push notification
 */
export const useTaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState(1);
  const [taskDescription, setTaskDescription] = useState("");
  const [deadline, setDeadline] = useState<Date>(new Date());

  const [emailNotification, setEmailNotification] = useState<boolean>(false);
  const [pushNotification, setPushNotification] = useState<string>("");
  const router = useRouter();

  /**
   * Handle the task form submit
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await handleTaskFormSubmit(
      taskTitle,
      taskDescription,
      taskPriority,
      deadline,
    );

    if (result.ok) {
      const createdTask = await result.json();
      router.push(TASK_INFORMATION_ROUTE.replace("[id]", createdTask.id));
    } else {
      alert("Error creating task");
    }
  };

  return {
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
  };
};
