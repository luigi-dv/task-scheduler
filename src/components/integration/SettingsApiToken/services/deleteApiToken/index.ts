import { API_DELETE_API_KEY_ROUTE } from "@/routes";
import { ApiKey } from "@prisma/client";

/**
 * Delete API Token Service
 */
export const deleteApiToken = async (tokenId: string): Promise<ApiKey> => {
  const response = await fetch(API_DELETE_API_KEY_ROUTE + `/${tokenId}`, {
    method: "DELETE",
  });
  return await response.json();
};
