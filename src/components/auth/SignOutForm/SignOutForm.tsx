import { signOut } from "@/auth";
import { classNames } from "@/utilities/cn";

/**
 * A form that allows users to sign out.
 * @constructor
 */
export const SignOutForm = async (props: SignOutFormProps) => {
  const { active } = props;

  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <button
        type="submit"
        className={classNames(
          active ? "bg-gray-100" : "",
          "block px-4 py-2 text-sm text-gray-700",
        )}
      >
        Sign Out
      </button>
    </form>
  );
};
