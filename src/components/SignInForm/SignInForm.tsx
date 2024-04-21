import { signIn } from "@/auth";

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
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email address
        </label>

        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="input"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};
