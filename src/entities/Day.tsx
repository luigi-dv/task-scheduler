/**
 * Day model
 *
 * Represents a day in the calendar.
 */
export class Day {
  public date: Date;
  public isCurrentMonth: boolean;
  public isToday: boolean;
  public isSelected: boolean;

  constructor(
    date: Date,
    isCurrentMonth: boolean,
    isToday: boolean,
    isSelected: boolean,
  ) {
    this.date = date;
    this.isCurrentMonth = isCurrentMonth;
    this.isToday = isToday;
    this.isSelected = isSelected;
  }
}
