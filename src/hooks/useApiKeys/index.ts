import { useState } from "react";
import { createApiKey } from "@/hooks/useApiKeys/services/createApiKey";
import { toast } from "sonner";

/**
 * Hook to manage the API key
 */
export const useApiKeys = () => {
  const [apiKeyValue, setApiKeyValue] = useState("");
  const [apiKeyExpiry, setApiKeyExpiry] = useState<Date | null>(null);

  /**
   * Create a new API key
   */
  const createNewApiKey = async (formData: FormData) => {
    toast.promise(createApiKey(formData), {
      loading: "Creating new API Key...",
      success: (data) => {
        setApiKeyValue(data.key);
        setApiKeyExpiry(data.expires);
        return "API Token Created Successfully";
      },
      error: "Failed to create API Key",
    });
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
