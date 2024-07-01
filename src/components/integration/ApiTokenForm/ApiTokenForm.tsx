"use client";

import { Button as ButtonUI } from "@/components/ui/button";
import React from "react";
import { useModalContext } from "@/context/ModalContext";
import { useApiTokenForm } from "@/components/integration/ApiTokenForm/hooks/useApiTokenForm";

interface ApiTokenFormProps {
  createNewApiKey: (formData: FormData) => void;
}

export const ApiTokenForm = (props: ApiTokenFormProps) => {
  const { closeModal } = useModalContext();

  const {
    name,
    expiryDays,
    showCustomExpiry,
    expiryDate,
    handleNameChange,
    handleExpiryDaysChange,
    handleCustomExpiryChange,
    handleFormSubmit,
  } = useApiTokenForm(props.createNewApiKey);

  return (
    <form onSubmit={handleFormSubmit} className="mt-2">
      <div className="space-y-2">
        <label htmlFor="first-name" className="label-standard">
          Name
        </label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          className="input-standard"
        />
        <p className="text-xs text-gray-500 text-muted-foreground">
          What’s this token for?
        </p>
        <label htmlFor="first-name" className="label-standard">
          Expiry date
        </label>
        <select
          name="expires-days"
          value={expiryDays}
          onChange={handleExpiryDaysChange}
          className="input-standard"
        >
          <option value="7">7 day</option>
          <option value="30">30 days</option>
          <option value="60">60 days</option>
          <option value="90">90 days</option>
          <option value="0">Custom</option>
        </select>
        {showCustomExpiry && (
          <div className="flex items-center space-x-4">
            <input
              type="date"
              name="custom-expires"
              value={expiryDate?.toISOString().split("T")[0]}
              onChange={handleCustomExpiryChange}
              className="input-standard"
              placeholder="Custom expiry"
            />
          </div>
        )}
      </div>
      <input name="expires" type="hidden" value={expiryDate.getDate()} />
      <div className="mt-4 flex w-full justify-between space-x-4">
        <ButtonUI variant={"destructive"} onClick={closeModal}>
          Close
        </ButtonUI>
        <ButtonUI variant={"default"} type="submit">
          Create API token
        </ButtonUI>
      </div>
    </form>
  );
};
