"use client";

import { EmptyState } from "@/components/common/EmptyState";
import { useModalContext } from "@/context/ModalContext";
import { ArrowsPointingInIcon } from "@heroicons/react/24/solid";

/**
 * Empty state for API tokens (CC)
 * @constructor
 */
export const ApiTokenEmptyState = () => {
  const { openModal } = useModalContext();
  return (
    <EmptyState
      title="API Tokens"
      description="Generate an API token to authenticate your requests to the API."
      icon={
        <ArrowsPointingInIcon
          className="mx-auto h-12 w-12 text-gray-400"
          aria-hidden="true"
        />
      }
      primaryAction={{
        content: "Generate API Token",
        onAction: openModal,
      }}
    />
  );
};
