import { SettingsNavigation } from "@/components/user/SettingsNavigation";
import { ReactNode } from "react";

export default async function SettingsAccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="h-full flex">
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <main className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
            <div className="mt-6 lg:flex-1 lg:flex xl:overflow-hidden px-8 lg:px-16">
              <SettingsNavigation />
              <div className="lg:flex-1 xl:overflow-y-auto bg-inherit">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
