import { useEffect, useState } from "react";
import { Task } from "@prisma/client";
import moment from "moment/moment";
import { Day } from "@/entities/Day";
import { generateDaysService } from "@/components/SideBySideTaskCalendar/services/generateDaysService";
import { handleInteractionService } from "@/components/SideBySideTaskCalendar/services/handleInteractionService";

import { TaskDTS } from "@/entities/dts/TaskDTS";
import { UUID } from "crypto";
import { v4 as uuidv4 } from "uuid";

/**
 * The useCalendar hook manages the state of the calendar component.
 * @param tasks
 * @param newTaskTitle
 * @param newTaskDescription
 */
export const useCalendar = (
  tasks: Task[],
  newTaskTitle: string,
  newTaskDescription: string,
) => {
  const [currentTask, setCurrentTask] = useState<TaskDTS | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [currentTaskDate, setCurrentTaskDate] = useState<Date | null>(null);
  const [buttonTitle, setButtonTitle] = useState<string>("Set Date");
  const [todaysTasks, setTodaysTasks] = useState<Task[]>(
    tasks.filter((task) => moment(task.deadline).isSame(selectedDay, "day")),
  );

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
  }, [currentTaskDate]);

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
  };
};
