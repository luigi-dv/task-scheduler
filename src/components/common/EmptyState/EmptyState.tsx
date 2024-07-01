"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/solid";

/**
 * Empty state component (CC)
 * @description Display an empty state with a title, description and primary action
 * @param title
 * @param description
 * @param icon
 * @param primaryAction
 * @constructor
 */
export const EmptyState = ({
  title,
  description,
  icon,
  primaryAction,
}: EmptyStateProps) => {
  return (
    <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-md p-4">
      {icon}
      <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <div className="mt-6">
        <Button onClick={primaryAction.onAction}>
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          {primaryAction.content}
        </Button>
      </div>
    </div>
  );
};
