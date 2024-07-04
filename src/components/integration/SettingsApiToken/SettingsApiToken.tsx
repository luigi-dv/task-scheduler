"use client";

import moment from "moment";
import { Button } from "@/components/ui/button";
import { useDeleteApiKey } from "@/components/integration/SettingsApiToken/hooks/useDeleteApiKey";

type SettingsApiToken = {
  id: string;
  name: string;
  apiToken: string | null;
  apiKeyExpiresAt: Date | null;
};

export const SettingsApiToken = (props: SettingsApiToken) => {
  const { handleDeleteApiKey } = useDeleteApiKey(props.id);
  return (
    <div className="px-3 py-4 rounded-lg border border-gray-300 dark:border-gray-700">
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-emerald-600 underline">
            {props.name}
          </div>
          <Button onClick={handleDeleteApiKey} size="xs" variant="destructive">
            Delete
          </Button>
        </div>
        <div className="text-sm font-light text-gray-900 dark:text-gray-100">
          Expires{" "}
          <span className="italic font-normal">
            on{" "}
            {props.apiKeyExpiresAt
              ? moment(props.apiKeyExpiresAt).format("ddd, MMM D YYYY")
              : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};
