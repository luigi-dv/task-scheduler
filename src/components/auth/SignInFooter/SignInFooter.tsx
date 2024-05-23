import Link from "next/link";
import { PRIVACY_POLICY_ROUTE, TERMS_OF_SERVICE_ROUTE } from "@/routes/public";

/**
 * Footer for the signin page.
 * @constructor
 */
export const SignInFooter = () => {
  return (
    <p className="text-xs mt-6 text-gray-400 dark:text-gray-600">
      By continuing with Google, Github, or Email, you agree to
      TaskScheduler&apos;s{" "}
      <Link className="underline" href={TERMS_OF_SERVICE_ROUTE}>
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link className="underline" href={PRIVACY_POLICY_ROUTE}>
        {" "}
        Privacy Policy
      </Link>
      .
    </p>
  );
};
