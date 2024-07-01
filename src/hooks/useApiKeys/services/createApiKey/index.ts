import { API_CREATE_API_KEY_ROUTE } from "@/routes";
import { ApiKey } from "@prisma/client";

/**
 * Create a new API key
 */
export const createApiKey = async (formData: FormData): Promise<ApiKey> => {
  const response = await fetch(API_CREATE_API_KEY_ROUTE, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    console.error("Failed to create API key");
  }

  return response.json();
};
