import { SignInForm } from "@/components/SignInForm";
import { GithubForm } from "@/components/GithubForm";
import { LogoIcon } from "@/lib/icons/LogoIcon";

const Login = () => {
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
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
        <div className="bg-white dark:bg-zinc-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignInForm />
        </div>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-zinc-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-zinc-50 dark:bg-zinc-950 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <div>
              <GithubForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
