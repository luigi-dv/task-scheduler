/**
 * A priority queue is a data structure that manages tasks based on their priority.
 *
 * Each task has a priority value, and the queue is structured such that tasks with higher priority values are dequeued
 * before tasks with lower priority values.
 */
export class PriorityQueue<T extends QueueElement<T>> {
  private readonly items: T[] = [];

  constructor() {
    this.items = [];
  }

  /**
   * Enqueues a task into the priority queue.
   * @param element The task to enqueue.
   */
  public enqueue(element: T): void {
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (element.priority < this.items[i].priority) {
        this.items.splice(i, 0, element);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(element);
    }
  }

  /**
   * Dequeues a task from the priority queue.
   * @returns The dequeued task, or undefined if the queue is empty.
   */
  public dequeue(): T | undefined {
    return this.items.shift();
  }

  /**
   * Peeks at the task with the highest priority in the queue.
   * @returns The task with the highest priority, or undefined if the queue is empty.
   */
  public peek(): T | undefined {
    return this.items.length > 0 ? this.items[0] : undefined;
  }

  /**
   * Checks if the priority queue is empty.
   * @returns True if the queue is empty, false otherwise.
   */
  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Gets the number of tasks in the priority queue.
   * @returns The number of tasks in the queue.
   */
  public size(): number {
    return this.items.length;
  }

  /**
   * Lists all tasks in the priority queue
   */
  public listElements(): T[] {
    return this.items;
  }

  /**
   * List all tasks by priority in the priority queue
   * @returns The tasks list in the queue sorted by priority.
   */
  public listElementsByPriority(): T[] {
    return this.items.sort((a, b) => a.priority - b.priority);
  }
}
