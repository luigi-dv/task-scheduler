"use client";

import moment from "moment";
// Components
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Hooks
import { useApiKey } from "@/components/user/SettingsApiToken/hooks/useApiKey";

export const SettingsApiToken = () => {
  const { apiToken, apiKeyExpiresAt } = useApiKey();
  return (
    <Card className="p-6 space-y-6 rounded-lg shadow-md">
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-muted-foreground">Token</div>
          <div className="text-sm font-medium text-primary">{apiToken}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-muted-foreground">
            Expires
          </div>
          <div className="text-sm font-medium text-primary">
            {apiKeyExpiresAt
              ? moment(apiKeyExpiresAt).format("MMM D, YYYY")
              : "N/A"}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="outline" className="px-4 py-2 rounded-md">
          Revoke
        </Button>
        <Button className="px-4 py-2 rounded-md">Copy</Button>
      </div>
    </Card>
  );
};
