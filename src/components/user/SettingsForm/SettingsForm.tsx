"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { User } from "next-auth";

import { useAccount } from "@/components/user/SettingsForm/hooks/useAccount";
import { CountrySelect } from "@/components/common/CountrySelect";
import { useProfileImage } from "@/components/user/SettingsForm/hooks/useProfileImage";
import { useSession } from "next-auth/react";

type SettingsFormProps = {
  user: User;
};

export const SettingsForm = ({ user }: SettingsFormProps) => {
  const {
    nameValue,
    setNameWrapper,
    emailValue,
    surnameValue,
    setSurnameWrapper,
    setEmailWrapper,
    countryValue,
    setCountryWrapper,
    handleSubmit,
  } = useAccount(user);

  const { inputFileRef, imageUrl, handleOnPictureChange, handleImageClick } =
    useProfileImage(user.image ?? "");

  return (
    <div className="mt-6 flex flex-col lg:flex-row lg:gap-6">
      <div className="order-2 lg:order-1 flex-grow lg:flex-grow-0 lg:w-3/4 mt-0 space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
        <form
          onSubmit={handleSubmit}
          className="mt-0 space-y-8 divide-y divide-gray-200 dark:divide-gray-700"
        >
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="label-standard">
                Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={nameValue ?? ""}
                onChange={(e) => setNameWrapper(e.target.value)}
                autoComplete="given-name"
                className="input-standard"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="label-standard">
                Surname
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={surnameValue ?? ""}
                onChange={(e) => setSurnameWrapper(e.target.value)}
                autoComplete="family-name"
                className="input-standard"
              />
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="email" className="label-standard">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={emailValue ?? ""}
                autoComplete="email"
                className="input-standard disabled"
                disabled={true}
              />
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="country" className="label-standard">
                Country
              </label>
              <CountrySelect
                countryValue={countryValue}
                setCountryValue={setCountryWrapper}
                language={"en"}
              />
            </div>
          </div>

          <div className="pt-8 flex justify-end">
            <button type="submit" className="w-full button-primary">
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="order-1 lg:order-2 flex-grow lg:flex-grow-0 lg:w-1/4 mt-0 space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
          <div className="sm:col-span-6">
            <div>
              <h4 className="form-subheading">Profile Picture</h4>
            </div>
            <div className="ml-4 flex-shrink-0">
              <div className="relative">
                <Image
                  className="inline-block h-32 w-32 rounded-full cursor-pointer"
                  src={imageUrl}
                  height={180}
                  width={180}
                  alt=""
                  onClick={handleImageClick}
                />
                <input
                  id="user-photo"
                  name="user-photo"
                  type="file"
                  className="sr-only"
                  ref={inputFileRef}
                  onChange={handleOnPictureChange}
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
