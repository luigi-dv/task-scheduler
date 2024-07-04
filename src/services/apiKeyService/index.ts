"use server";

import { prismaClient } from "@/lib/prisma";
import { generateApiKey } from "@/lib/security/generateApiKey";

/**
 * Create API key
 */
export const createAPIKey = async (
  userId: string,
  name: string,
  expires: Date,
  description?: string,
) => {
  return prismaClient.apiKey.create({
    data: {
      userId: userId,
      name: name,
      description: description,
      key: generateApiKey(),
      expires: expires,
    },
  });
};

export const deleteAPIKey = async (id: string) => {
  return prismaClient.apiKey.delete({
    where: {
      id,
    },
  });
};

/**
 * Get user API keys
 * @param userId
 * @param protect
 */
export const getUserAPIKeys = async (
  userId: string | undefined,
  protect: boolean,
) => {
  const data = await prismaClient.apiKey.findMany({
    where: { userId },
  });
  return protect
    ? data.map((key) =>
        // Show just the first 8 characters of the key
        ({ ...key, key: key.key.slice(0, 8) + "*****" }),
      )
    : data;
};
