import moment from "moment/moment";

export const generateDaysService = (date: Date, selectedDay: Date) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const daysInMonth = [];
  for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
    const currentDate = new Date(year, month, i);

    const isSelected = currentDate.toISOString() === selectedDay.toISOString(); // Add this line
    daysInMonth.push({
      date: currentDate,
      isCurrentMonth: true,
      isToday: moment(currentDate).isSame(new Date(), "day"),
      isSelected: isSelected, // Use the isSelected variable here
    });
  }

  return daysInMonth;
};
