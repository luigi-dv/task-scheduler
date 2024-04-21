import { Day } from "@/entities/Day";

/**
 *
 * @param currentMonth
 * @param setCurrentMonth
 * @param setSelectedDay
 */
export const handleInteractionService = (
  currentMonth: Date,
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>,
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>,
) => {
  /**
   * Handles Day Click
   * @param day
   */
  const handleDayClick = (day: Day) => {
    setSelectedDay(day.date);
  };

  /**
   * Handles Next Month Click
   */
  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)),
    );
  };

  /**
   * Handles Previous Month Click
   */
  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)),
    );
  };

  return {
    handleDayClick,
    handleNextMonth,
    handlePrevMonth,
  };
};
