import { SettingsApiToken } from "@/components/user/SettingsApiToken";
import { auth } from "@/auth";
import { getUserAPIKeys, revokeAPIKey } from "@/services/apiKeyService";
import { ApiTokenManager } from "@/components/integration/ApiTokenManager";

const IntegrationPage = async () => {
  const session = await auth();
  if (session) {
    const apiKeys = await getUserAPIKeys(session.user.id, true);
    return (
      <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="grid grid-cols-2 justify-between">
          <h1 className="text-3xl font-extralight text-gray-800 dark:text-gray-200">
            Integration
          </h1>
          <ApiTokenManager isEmptyState={false} includeButton={true} />
        </div>
        <div className="mt-4 space-y-4">
          {apiKeys.length > 0 ? (
            apiKeys.map((key) => (
              <SettingsApiToken
                key={key.id}
                name={key.name}
                apiToken={key.key}
                apiKeyExpiresAt={key.expires}
              />
            ))
          ) : (
            <ApiTokenManager />
          )}
        </div>
      </div>
    );
  }
};

export default IntegrationPage;
