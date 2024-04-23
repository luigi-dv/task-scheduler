"use server";

import { Task } from "@/entities/Task";
import { prismaClient } from "@/lib/prisma";
import { Session } from "next-auth";

/**
 * Create a new task
 * @param taskTitle
 * @param taskDescription
 * @param taskPriority
 * @param taskDeadline
 * @param session
 */
export const createTask = async (
  taskTitle: string,
  taskDescription: string,
  taskPriority: number,
  taskDeadline: Date,
  session: Session,
) => {
  const task = new Task(taskTitle, taskDescription, taskPriority, taskDeadline);

  if (!session.user?.email) {
    throw new Error("User email is not available");
  }

  const user = await prismaClient.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return prismaClient.task.create({
    data: {
      title: task.title,
      description: task.description,
      priority: task.priority,
      deadline: task.deadline,
      userId: user.id,
    },
  });
};
