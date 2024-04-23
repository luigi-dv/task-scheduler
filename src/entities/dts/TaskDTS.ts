import { Task } from "@/entities/Task";
import { v4 as uuidv4 } from "uuid";

export class TaskDTS extends Task {
  public id: string;
  public userId: string;
  constructor(
    title: string,
    description: string,
    priority: number,
    deadline: Date,
    userId: string,
  ) {
    super(title, description, priority, deadline);
    this.id = uuidv4();
    this.userId = userId;
  }
}
