import { useEffect, useState } from "react";
import { Task } from "@prisma/client";
import moment from "moment/moment";
import { Day } from "@/entities/Day";
import { generateDaysService } from "@/components/SideBySideTaskCalendar/services/generateDaysService";
import { handleInteractionService } from "@/components/SideBySideTaskCalendar/services/handleInteractionService";

import { TaskDTS } from "@/entities/dts/TaskDTS";
import { v4 as uuidv4 } from "uuid";
import { API_GET_TASK_ROUTE, TASK_INFORMATION_ROUTE } from "@/routes";
import { useRouter } from "next/navigation";

/**
 * The useCalendar hook manages the state of the calendar component.
 * @param newTaskTitle The title of the new task.
 * @param newTaskDescription The description of the new task.
 */
export const useCalendar = (
  newTaskTitle: string,
  newTaskDescription: string,
) => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<TaskDTS | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [currentTaskDate, setCurrentTaskDate] = useState<Date | null>(null);
  const [buttonTitle, setButtonTitle] = useState<string>("Set Date");
  const [todaysTasks, setTodaysTasks] = useState<Task[]>(
    tasks.filter((task) => moment(task.deadline).isSame(selectedDay, "day")),
  );

  useEffect(() => {
    const startDate = moment(currentMonth).startOf("month").toISOString();
    const endDate = moment(currentMonth).endOf("month").toISOString();

    fetch(`${API_GET_TASK_ROUTE}?start_date=${startDate}&end_date=${endDate}`)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error:", error));
  }, [currentMonth]);

  useEffect(() => {
    setTodaysTasks(
      tasks.filter((task) => moment(task.deadline).isSame(selectedDay, "day")),
    );
  }, [selectedDay, tasks]);

  /**
   * Handles the Set Date button click.
   *
   */
  const handleSetDateClick = () => {
    if (buttonTitle === "Set Date") {
      setCurrentTaskDate(selectedDay);
      setButtonTitle("Remove Date");
    } else {
      removeTask(currentTask?.id || "");
      setCurrentTaskDate(null);
      setButtonTitle("Set Date");
    }
  };

  /**
   * Handles the task click.
   * @param task The task to be clicked.
   */
  const handleTaskClick = (task: Task) => {
    router.push(`${TASK_INFORMATION_ROUTE.replace("[id]", task.id)}`);
  };

  const removeTask = (taskId: string) => {
    setTodaysTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };

  const days: Day[] = generateDaysService(currentMonth, selectedDay);

  /**
   * Updates the tasks for the selected day.
   * @trigger currentTaskDate change
   */
  useEffect(() => {
    if (currentTaskDate) {
      const newTask = new TaskDTS(
        newTaskTitle,
        newTaskDescription,
        0,
        currentTaskDate,
        uuidv4(),
      );
      setCurrentTask(newTask);
      setTodaysTasks((tasks) => [...tasks, newTask]);
    }
  }, [currentTaskDate, newTaskDescription, newTaskTitle]);

  /**
   * Handle interactions with the calendar.
   */
  const { handleDayClick, handleNextMonth, handlePrevMonth } =
    handleInteractionService(currentMonth, setCurrentMonth, setSelectedDay);

  return {
    currentTask,
    days,
    currentMonth,
    selectedDay,
    currentTaskDate,
    buttonTitle,
    todaysTasks,
    handleSetDateClick,
    handleDayClick,
    handleNextMonth,
    handlePrevMonth,
    handleTaskClick,
  };
};
