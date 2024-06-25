import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { SettingsForm } from "@/components/user/SettingsForm";
import { SettingsNavigation } from "@/components/user/SettingsNavigation";
import { User } from "next-auth";

type SettingsProps = {
  user: User;
};

export const Settings = (props: SettingsProps) => {
  const { user } = props;

  return (
    <div className="h-full flex pt-2">
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <main className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
            <nav
              aria-label="settings-navigation"
              className="bg-transparent border-b border-gray-200 dark:border-gray-700 xl:hidden"
            >
              <div className="max-w-3xl mx-auto py-3 px-4 flex items-start sm:px-6 lg:px-8">
                <a
                  href="#"
                  className="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-gray-400"
                >
                  <ChevronLeftIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Settings</span>
                </a>
              </div>
            </nav>

            <div className="flex-1 flex xl:overflow-hidden">
              <SettingsNavigation />

              {/* Main content */}
              <div className="flex-1 xl:overflow-y-auto bg-gray-50 dark:bg-gray-900">
                <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                  <h1 className="text-3xl font-extralight text-gray-800 dark:text-gray-200">
                    Account
                  </h1>
                  <SettingsForm user={user} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
