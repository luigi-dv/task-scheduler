"use server";

import { prismaClient } from "@/lib/prisma";
import { generateApiKey } from "@/lib/security/generateApiKey";

/**
 * Update user info
 * @param userId
 * @param data
 */
export const updateUserInfo = async (userId: string | undefined, data: any) => {
  return prismaClient.user.update({
    where: { id: userId },
    data,
  });
};

/**
 * Get user by id
 * @param userId
 */
export const getUser = async (userId: string | undefined) => {
  return prismaClient.user.findUnique({
    where: { id: userId },
  });
};

/**
 * Update user API key
 * @param userId
 */
export const updateUserAPIKey = async (userId: string | undefined) => {
  return prismaClient.user.update({
    where: { id: userId },
    data: {
      api_key: generateApiKey(),
    },
  });
};
