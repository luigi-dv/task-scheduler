"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Hero component
 * @constructor
 */
export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-inherit px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-600">
          Powered by{" "}
          <span className="font-semibold text-emerald-600">Ldvloper</span>
        </p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
          Plan your tasks <span className="text-emerald-600">efficiently</span>{" "}
          and <span className="text-emerald-600">easily</span>
        </h1>
        <p className="mt-2 text-base text-gray-500 sm:text-lg">
          Connect seamlessly with our powerful{" "}
          <span className="font-semibold text-emerald-600">API</span> to sync
          with{" "}
          <span className="font-semibold text-emerald-600">
            all your devices
          </span>
          .
        </p>
        <div className="mt-8">
          <Button className="px-4 py-2 text-base font-semibold text-white bg-emerald-600 rounded-md sm:px-6 sm:py-3 sm:text-lg">
            Start Scheduling
          </Button>
        </div>
        <p className="mt-4 text-xs text-gray-500 sm:text-sm">
          Start with the free plan. Upgrade with just one click.
        </p>
      </div>
      <div className="mt-12 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-lg font-semibold text-center text-gray-900 dark:text-gray-100 sm:text-xl lg:text-2xl">
          Integrate all your task managers and keep everything organized in one
          place.
        </h2>
        <div className="relative overflow-hidden bg-inherit">
          <Image
            src={"/images/9558621_4154360.png"}
            width={1200}
            height={900}
            alt="Calendar and task manager integration picture"
            className="w-full h-auto"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};
