import React, { useEffect, useState } from "react";
import { useApiKeys } from "@/hooks/useApiKeys";

/**
 * useApiTokenForm hook
 */
export const useApiTokenForm = (
  createNewApiKey: (formData: FormData) => void,
) => {
  const [name, setName] = useState("");
  const [expiryDays, setExpiryDays] = useState(30);
  const [showCustomExpiry, setShowCustomExpiry] = useState(false);
  const [expiryDate, setExpiryDate] = useState<Date>(new Date());

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + expiryDays);
    setExpiryDate(date);
  }, [expiryDays]);

  /**
   * Handle name change
   * @param event
   */
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  /**
   * Handle expiry change
   * @param event
   */
  const handleExpiryDaysChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = Number(event.target.value);
    setExpiryDays(value);
    if (value === 0) {
      setShowCustomExpiry(true);
      return;
    }
    setShowCustomExpiry(false);
  };

  /**
   * Handle custom expiry change
   * @param event
   */
  const handleCustomExpiryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setExpiryDate(new Date(value));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("expires", expiryDate.toISOString());
    createNewApiKey(formData);
  };

  return {
    name,
    expiryDays,
    showCustomExpiry,
    expiryDate,
    handleNameChange,
    handleExpiryDaysChange,
    handleCustomExpiryChange,
    handleFormSubmit,
  };
};
