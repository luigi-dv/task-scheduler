interface TaskDueDateFormProps {
  taskTitle: string;
  taskPriority: number;
  taskDescription: string;
  deadline: Date;
  setDeadline: (value: Date) => void;
}
