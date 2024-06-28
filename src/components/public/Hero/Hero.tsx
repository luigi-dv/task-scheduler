"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Hero component
 * @constructor
 */
export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-inherit">
      <div className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-600">
          Powered by{" "}
          <span className="font-semibold text-emerald-600">Ldvloper</span>
        </p>
        <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Plan your tasks <span className="text-emerald-600">efficiently</span>{" "}
          and <span className="text-emerald-600">easily</span>
        </h1>
        <p className="mt-2 text-lg text-gray-500">
          Connect seamlessly with our powerful{" "}
          <span className="font-semibold text-emerald-600">API</span> to sync
          with{" "}
          <span className="font-semibold text-emerald-600">
            all your devices
          </span>
          .
        </p>
        <div className="mt-8">
          <Button className="px-6 py-3 text-lg font-semibold text-white bg-emerald-600 rounded-md">
            Start Scheduling
          </Button>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Start with the free plan. Upgrade with just one click.
        </p>
      </div>
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="mb-4 text-xl font-semibold text-center text-gray-900 dark:text-gray-100">
          Integrate all your task managers and keep everything organized in one
          place.
        </h2>
        <div className="relative overflow-hidden bg-inherit">
          <Image
            src={"/images/9558621_4154360.png"}
            width={1200}
            height={900}
            alt="Calendar and task manager integration picture"
            className="w-auto h-auto"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};
