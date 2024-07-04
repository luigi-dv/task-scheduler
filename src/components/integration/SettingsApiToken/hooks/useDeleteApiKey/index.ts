import { deleteApiToken } from "@/components/integration/SettingsApiToken/services/deleteApiToken";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

/**
 * Hook for delete API Token
 */
export const useDeleteApiKey = (tokenId: string) => {
  const router = useRouter();
  /**
   * Handle delete API Token
   */
  const handleDeleteApiKey = () => {
    toast.promise(deleteApiToken(tokenId), {
      loading: "Deleting API Token",
      success: (data) => {
        router.refresh();
        return "API Token Deleted";
      },
      error: "Error deleting API Token",
    });
  };

  return {
    handleDeleteApiKey,
  };
};
