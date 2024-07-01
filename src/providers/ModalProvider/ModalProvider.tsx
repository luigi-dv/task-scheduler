"use client";

import { useState } from "react";
import { ModalProviderProps } from "@/types/ModalProviderProps";
import { ModalContext } from "@/context/ModalContext";

export const ModalProvider = (props: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("openModal");
    setIsOpen(true);
  };
  const closeModal = () => {
    console.log("closeModal");
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};
