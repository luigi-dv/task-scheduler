"use client";

import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { Button as ButtonUI } from "@/components/ui/button";

import { useModalContext } from "@/context/ModalContext";
import React from "react";
import { useApiKeys } from "@/hooks/useApiKeys";
import { ApiTokenForm } from "@/components/integration/ApiTokenForm";
import { useRouter } from "next/navigation";

type ApiTokenModalProps = {
  includeButton: boolean;
};
export const ApiTokenModal = (props: ApiTokenModalProps) => {
  const { isOpen, openModal, closeModal } = useModalContext();
  const { apiKeyValue, apiKeyExpiry, resetApiKeyValues, createNewApiKey } =
    useApiKeys();

  const router = useRouter();

  /**
   * Copy the API key to the clipboard
   */
  const handleCopy = () => {
    navigator.clipboard.writeText(apiKeyValue);
  };

  /**
   * Close the modal
   */
  const handleCloseModal = () => {
    closeModal();
    resetApiKeyValues();
    router.refresh();
  };

  return (
    <>
      {props.includeButton && (
        <ButtonUI variant="outline" onClick={openModal}>
          Generate new token
        </ButtonUI>
      )}
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={handleCloseModal}
      >
        <DialogBackdrop as="div" className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white dark:bg-gray-900 backdrop-blur-2xl p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h2"
                className="text-xl font-medium text-black dark:text-white"
              >
                Create a new API Token
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-black/50 dark:text-white/50">
                API tokens are used to authenticate requests to the API. They
                are created by you and can be revoked at any time.
              </p>
              {apiKeyValue ? (
                <div className="mt-4 grid grid-cols-1 gap-2">
                  <div className="text-sm/6 text-black/50 dark:text-white/50">
                    Your new API token
                  </div>
                  <input
                    type="text"
                    value={apiKeyValue}
                    className="input-standard"
                    disabled
                  />
                  <ButtonUI onClick={handleCopy} className="w-full">
                    Copy
                  </ButtonUI>
                </div>
              ) : (
                <ApiTokenForm createNewApiKey={createNewApiKey} />
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
