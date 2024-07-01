"use client";

import { Button } from "@/components/ui/button";
import { MailboxIcon } from "@/lib/icons/MailboxIcon";

const VerifyRequest = () => {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center px-4">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="flex flex-col items-center space-y-4">
          <MailboxIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
              Verify Your Email
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              We&apos;ve sent a verification email to your inbox. Please check
              your email and click the link to confirm your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VerifyRequest;
