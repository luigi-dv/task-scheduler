import { auth } from "@/auth";
import { SettingsForm } from "@/components/user/SettingsForm";
import { PageHeader } from "@/components/common/PageHeader";

export default async function NotificationsAccountPage() {
  const session = await auth();
  if (session) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <PageHeader withUnderline={true}>Notifications</PageHeader>
      </div>
    );
  }
}
