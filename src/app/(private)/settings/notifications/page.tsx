import { auth } from "@/auth";
import { SettingsForm } from "@/components/user/SettingsForm";

export default async function NotificationsAccountPage() {
  const session = await auth();
  if (session) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <h1 className="text-3xl font-extralight text-gray-800 dark:text-gray-200">
          Notifications
        </h1>
        <SettingsForm user={session.user} />
      </div>
    );
  }
}
