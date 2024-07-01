import { Task } from "@prisma/client";

export const TaskHeader = ({ task }: { task: Task }) => {
  return (
    <div className="pb-5 border-b border-gray-200d dark:border-gray-800">
      <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100">
        {task.title}
      </h3>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">{task.description}</p>
    </div>
  );
};
