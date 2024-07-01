/**
 * Task model
 *
 * Represents a task that can be enqueued into a priority queue.
 */
export class Task implements QueueElement<Task> {
  public title: string;
  public description: string;
  public priority: number;
  public deadline: Date;

  constructor(
    title: string,
    description: string,
    priority: number,
    deadline: Date,
  ) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.deadline = deadline;
  }

  /**
   * Gets the priority of the task.
   */
  getPriority(): number {
    return this.priority;
  }
}
