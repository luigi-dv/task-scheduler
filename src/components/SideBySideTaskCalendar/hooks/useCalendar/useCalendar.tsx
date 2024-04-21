import { useEffect, useState } from "react";
import { Task } from "@/entities/Task";
import moment from "moment/moment";
import { Day } from "@/entities/Day";
import { generateDaysService } from "@/components/SideBySideTaskCalendar/services/generateDaysService";
import { handleInteractionService } from "@/components/SideBySideTaskCalendar/services/handleInteractionService";

/**
 * The useCalendar hook manages the state of the calendar component.
 * @param tasks
 * @param newTaskName
 * @param newTaskDescription
 */
export const useCalendar = (
  tasks: Task[],
  newTaskName: string,
  newTaskDescription: string,
) => {
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
   * @param taskId
   */
  const handleSetDateClick = () => {
    if (buttonTitle === "Set Date") {
      setCurrentTaskDate(selectedDay);
      setButtonTitle("Remove Date");
    } else {
      removeTask("0000-0000-0000-0000-0000-0000-0000-0000");
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
      const newTask = new Task(
        "0000-0000-0000-0000-0000-0000-0000-0000",
        newTaskName,
        newTaskDescription,
        0,
        currentTaskDate,
      );
      setTodaysTasks((tasks) => [...tasks, newTask]);
    }
  }, [currentTaskDate]);

  /**
   * Handle interactions with the calendar.
   */
  const { handleDayClick, handleNextMonth, handlePrevMonth } =
    handleInteractionService(currentMonth, setCurrentMonth, setSelectedDay);

  return {
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
