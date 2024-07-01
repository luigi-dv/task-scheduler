import { useState } from "react";
import { createApiKey } from "@/hooks/useApiKeys/services/createApiKey";

/**
 * Hook to manage the API key
 */
export const useApiKeys = () => {
  const [apiKeyValue, setApiKeyValue] = useState("");
  const [apiKeyExpiry, setApiKeyExpiry] = useState<Date | null>(null);

  /**
   * Create a new API key
   * @param formData - Form data
   */
  const createNewApiKey = async (formData: FormData) => {
    const newApiKey = await createApiKey(formData);
    setApiKeyValue(newApiKey.key);
    setApiKeyExpiry(newApiKey.expires);
  };

  /**
   * Reset the API key values
   */
  const resetApiKeyValues = () => {
    setApiKeyValue("");
    setApiKeyExpiry(null);
  };

  return {
    apiKeyValue,
    apiKeyExpiry,
    resetApiKeyValues,
    createNewApiKey,
  };
};
