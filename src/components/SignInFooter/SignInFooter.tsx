import Link from "next/link";

export const SignInFooter = () => {
  return (
    <p className="text-xs mt-6 text-gray-400 dark:text-gray-600">
      By continuing with Google, Github, or Email, you agree to
      TaskScheduler&apos;s{" "}
      <Link className="underline" href="/terms-of-service">
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link className="underline" href="/privacy-policy">
        {" "}
        Privacy Policy
      </Link>
      .
    </p>
  );
};
