import React, { useRef, useState } from "react";
import type { PutBlobResult } from "@vercel/blob";
import { API_UPLOAD_AVATAR_ROUTE } from "@/routes";

export const useProfileImage = (imageRoute: string) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(imageRoute);

  const handleOnPictureChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const response = await fetch(
      `${API_UPLOAD_AVATAR_ROUTE}?filename=${file.name}`,
      {
        method: "POST",
        body: file,
      },
    );

    const newBlob = (await response.json()) as PutBlobResult;
    setBlob(newBlob);
    setImageUrl(newBlob.url); // Update imageUrl to visualize the new picture
  };

  const handleImageClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  return {
    inputFileRef,
    blob,
    selectedFile,
    imageUrl,
    handleOnPictureChange,
    handleImageClick,
  };
};
