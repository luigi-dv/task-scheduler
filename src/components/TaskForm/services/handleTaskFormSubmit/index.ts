import { API_CREATE_TASK_ROUTE } from "@/routes";

/**
 * Returns a new task object
 * @param taskTitle
 * @param taskDescription
 * @param taskPriority
 * @param taskDeadline
 */
export const handleTaskFormSubmit = async (
  taskTitle: string,
  taskDescription: string,
  taskPriority: number,
  taskDeadline: Date,
) => {
  const formData = new FormData();
  formData.append("title", taskTitle);
  formData.append("description", taskDescription);
  formData.append("priority", taskPriority.toString());
  formData.append("deadline", taskDeadline.toISOString());

  await fetch(API_CREATE_TASK_ROUTE, {
    method: "POST",
    body: formData,
  });
};
