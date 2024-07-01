"use client";

import moment from "moment";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SettingsApiToken = {
  name: string;
  apiToken: string | null;
  apiKeyExpiresAt: Date | null;
};

export const SettingsApiToken = (props: SettingsApiToken) => {
  return (
    <Card className="p-6 space-y-6 rounded-lg shadow-md">
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium text-muted-foreground">
            {props.name}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-muted-foreground">Token</div>
          <div className="text-sm font-medium text-primary">
            {props.apiToken}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-muted-foreground">
            Expires
          </div>
          <div className="text-sm font-medium text-primary">
            {props.apiKeyExpiresAt
              ? moment(props.apiKeyExpiresAt).format("MMM D, YYYY")
              : "N/A"}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="destructive" className="px-4 py-2 rounded-md">
          Delete
        </Button>
        <Button variant="secondary" className="px-4 py-2 rounded-md">
          Edit
        </Button>
      </div>
    </Card>
  );
};
