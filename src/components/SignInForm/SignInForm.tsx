import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

/**
 * A form that allows users to sign in with their email address with a Magic link.
 * @constructor
 */
export const SignInForm = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
      className="space-y-6"
    >
      <div className="border border-gray-300 dark:border-gray-800 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-emerald-600 focus-within:border-emerald-600">
        <label
          htmlFor="email"
          className="block text-xs font-medium text-gray-500 dark:text-gray-400"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="block w-full border-0 p-0 bg-transparent text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:ring-0 sm:text-sm"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </div>
    </form>
  );
};
