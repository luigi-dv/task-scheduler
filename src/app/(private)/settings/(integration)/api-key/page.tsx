import { auth } from "@/auth";
import { getUserAPIKeys } from "@/services/apiKeyService";
import { ApiTokenManager } from "@/components/integration/ApiTokenManager";
import { SettingsApiToken } from "@/components/integration/SettingsApiToken";
import { SettingsForm } from "@/components/user/SettingsForm";
import { PageHeader } from "@/components/common/PageHeader";

const IntegrationPage = async () => {
  const apiKeys = await getData();
  if (apiKeys) {
    return (
      <div className="max-w-3xl mx-auto">
        <PageHeader withUnderline={true}>
          <div className="grid grid-cols-2 justify-between">
            API Key
            {apiKeys.length != 0 && (
              <ApiTokenManager isEmptyState={false} includeButton={true} />
            )}
          </div>
        </PageHeader>

        <div className="mt-4 space-y-4">
          {apiKeys.length > 0 ? (
            apiKeys.map((key) => (
              <SettingsApiToken
                key={key.id}
                id={key.id}
                name={key.name}
                apiToken={key.key}
                apiKeyExpiresAt={key.expires}
              />
            ))
          ) : (
            <ApiTokenManager isEmptyState={apiKeys.length == 0} />
          )}
        </div>
      </div>
    );
  }
};

const getData = async () => {
  const session = await auth();
  if (session) {
    return getUserAPIKeys(session.user.id, true);
  }
};

export default IntegrationPage;
