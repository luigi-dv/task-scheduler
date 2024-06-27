import { useEffect, useState } from "react";
import { fetchUserInformation } from "@/components/user/SettingsApiToken/services/fetchUserInformation";

export const useApiKey = () => {
  const [apiToken, setApiToken] = useState<string | null>(null);
  const [apiKeyExpiresAt, setApiKeyExpiresAt] = useState<Date | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserInformation();
        setApiToken(user?.api_key ?? "N/A");
        setApiKeyExpiresAt(user?.api_key_expires ?? null);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return {
    apiToken,
    apiKeyExpiresAt,
  };
};
