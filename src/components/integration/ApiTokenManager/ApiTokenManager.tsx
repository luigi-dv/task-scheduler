"use client";

import { ModalProvider } from "@/providers/ModalProvider";
import { ApiTokenModal } from "@/components/integration/ApiTokenModal";
import { ApiTokenEmptyState } from "@/components/integration/ApiTokenEmptyState";

interface ApiTokenManagerProps {
  isEmptyState?: boolean;
  includeButton?: boolean;
}

export const ApiTokenManager = (props: ApiTokenManagerProps) => {
  return (
    <ModalProvider>
      {props.isEmptyState && <ApiTokenEmptyState />}
      <ApiTokenModal includeButton={props.includeButton ?? false} />
    </ModalProvider>
  );
};
