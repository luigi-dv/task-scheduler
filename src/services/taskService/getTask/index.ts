"use server";

import { prismaClient } from "@/lib/prisma";

/**
 * Get a task by id
 * @param id
 * @param userId
 */
export const getTask = async (id: string, userId: string) => {
  return prismaClient.task.findUnique({
    where: {
      id: id,
      userId: userId,
    },
  });
};

/**
 * Get a task by deadline
 * @param date The deadline
 * @param userId The user id
 */
export const getTaskByDeadline = async (date: Date, userId: string) => {
  return prismaClient.task.findMany({
    where: {
      deadline: date,
      userId: userId,
    },
  });
};

/**
 * Get all the tasks
 * @param userId The user id
 */
export const getTasks = async (userId: string) => {
  return prismaClient.task.findMany({
    where: {
      userId: userId,
    },
  });
};

/**
 * Get all the upcoming tasks
 * @param userId The user id
 */
export const getUpcomingTasks = async (userId: string) => {
  return prismaClient.task.findMany({
    where: {
      deadline: {
        gt: new Date(),
      },
      userId: userId,
    },
  });
};
