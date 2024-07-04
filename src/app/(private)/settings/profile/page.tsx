import { auth } from "@/auth";
import { PageHeader } from "@/components/common/PageHeader";
import { SettingsForm } from "@/components/user/SettingsForm";

export default async function SettingsProfilePage() {
  const session = await auth();
  if (session) {
    return (
      <div className="max-w-3xl mx-auto">
        <PageHeader withUnderline={true}>Profile</PageHeader>
        <SettingsForm user={session.user} />
      </div>
    );
  }
}
