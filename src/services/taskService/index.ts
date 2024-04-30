"use server";

import { Task } from "@/entities/Task";
import { prismaClient } from "@/lib/prisma";
import { Session, User } from "next-auth";

/**
 * Create a new task
 * @param taskTitle
 * @param taskDescription
 * @param taskPriority
 * @param taskDeadline
 * @param user
 */
export const createTask = async (
  taskTitle: string,
  taskDescription: string,
  taskPriority: number,
  taskDeadline: Date,
  user: User,
) => {
  const task = new Task(taskTitle, taskDescription, taskPriority, taskDeadline);

  if (!user.id) {
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

/**
 * Get a task by id
 * @param id
 * @param user
 */
export const getTask = async (id: string, user: User) => {
  return prismaClient.task.findUnique({
    where: {
      id: id,
      userId: user.id,
    },
  });
};

/**
 * Get all tasks filtered by user and other parameters
 * @param user
 * @param title
 * @param description
 * @param priority
 * @param from
 * @param to
 */
export const getTasks = async (
  user: User,
  title?: string,
  description?: string,
  priority?: number,
  from?: Date,
  to?: Date,
) => {
  return prismaClient.task.findMany({
    where: {
      title: {
        startsWith: title,
      },
      description: {
        startsWith: description,
      },
      deadline: {
        gte: from,
        lte: to,
      },
      priority: {
        equals: priority,
      },
      userId: user.id,
    },
  });
};

export /**
 * Get a task by deadline
 * @param date The deadline
 * @param user
 */
const getTaskByDeadline = async (date: Date, user: User) => {
  return prismaClient.task.findMany({
    where: {
      deadline: date,
      userId: user.id,
    },
  });
};

/**
 * Get all the upcoming tasks
 * @param user
 */
export const getUpcomingTasks = async (user: User) => {
  return prismaClient.task.findMany({
    where: {
      deadline: {
        gt: new Date(),
      },
      userId: user.id,
    },
  });
};
