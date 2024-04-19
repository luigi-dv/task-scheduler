/**
 * A priority queue is a data structure that manages tasks based on their priority.
 *
 * Each task has a priority value, and the queue is structured such that tasks with higher priority values are dequeued
 * before tasks with lower priority values.
 */
class PriorityQueue<T extends QueueElement<T>> {
    private readonly items: T[] = [];

    constructor() {
        this.items = [];
    }

    /**
     * Enqueues a task into the priority queue.
     * @param element The task to enqueue.
     */
    enqueue(element: T): void {
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
    dequeue(): T | undefined {
        return this.items.shift();
    }

    /**
     * Peeks at the task with the highest priority in the queue.
     * @returns The task with the highest priority, or undefined if the queue is empty.
     */
    peek(): T | undefined {
        return this.items.length > 0 ? this.items[0] : undefined;
    }

    /**
     * Checks if the priority queue is empty.
     * @returns True if the queue is empty, false otherwise.
     */
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}