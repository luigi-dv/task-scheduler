"use client";

import { useRouter, useParams, useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

enum Error {
  Configuration = "Configuration",
  Verification = "Verification",
}

const errorMap = {
  [Error.Configuration]: (
    <p>
      There was a problem when trying to authenticate. Please contact us if this
      error persists. Unique error code:{" "}
      <code className="text-xs bg-slate-100 p-1 rounded-sm">Configuration</code>
    </p>
  ),
  [Error.Verification]: (
    <p>
      The sign in link is no longer valid. It may have been used already or it
      may have expired.{" "}
    </p>
  ),
};

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get("error") as Error;
  const router = useRouter();
  const redirectToLogin = () => {
    router.replace("/auth/signin");
  };
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            Unable to Sign In
          </CardTitle>
          <span className="text-gray-500 dark:text-gray-400">
            {errorMap[error] || "Please contact us if this error persists."}
          </span>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button
            onClick={redirectToLogin}
            className="w-full"
            variant="outline"
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
