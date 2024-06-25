import Script from "next/script";
import { NewUserHeader } from "@/components/auth/NewUserHeader";
import { Button } from "@/components/ui/button";

const NewUserLayout = async ({
  children,
  subscription,
}: {
  children: React.ReactNode;
  subscription: React.ReactNode;
}) => {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 md:px-6">
        <div className="max-w-md w-full space-y-6">
          <NewUserHeader />
          <form action="/api/subscription/checkout-session" method="POST">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4 my-4">
              {children}
              {subscription}
              <div className="py-4">
                <Button className="w-full" type="submit">
                  Continue
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default NewUserLayout;
