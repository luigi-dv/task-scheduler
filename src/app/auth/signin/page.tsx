import { SignInForm } from "@/components/auth/SignInForm";
import { GithubForm } from "@/components/auth/GithubForm";
import { LogoIcon } from "@/lib/icons/LogoIcon";
import { SignInFooter } from "@/components/auth/SignInFooter";
import { GoogleForm } from "@/components/auth/GoogleForm/GoogleForm";
import { PasskeyForm } from "@/components/auth/PasskeyForm";

const Signin = () => {
  return (
    <div className="min-h-full flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LogoIcon className="mx-auto h-40 w-auto text-emerald-600" />
        <h2 className="mt-6 text-center text-3xl font-light text-gray-900 dark:text-gray-100">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <span className="font-medium text-emerald-600 hover:text-emerald-500">
            start scheduling tasks for free
          </span>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mt-6 grid grid-cols-1 gap-3 my-4">
          <div>
            <GithubForm />
          </div>
          <div>
            <GoogleForm />
          </div>
        </div>
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-800" />
            </div>
          </div>
        </div>
        <div>
          <SignInForm />
        </div>
        <SignInFooter />
      </div>
    </div>
  );
};
export default Signin;
