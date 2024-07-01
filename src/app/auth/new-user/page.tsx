import { NewUserForm } from "@/components/auth/NewUserForm";
import { auth } from "@/auth";
import {
  createCustomerIfNull,
  hasSubscription,
} from "@/services/subscriptionService";
import { AUTH_SIGN_IN_ROUTE, HOME_ROUTE } from "@/routes";

const NewUserPage = async () => {
  const session = await auth();

  if (!session) {
    return {
      redirect: {
        destination: AUTH_SIGN_IN_ROUTE,
        permanent: false,
      },
    };
  }
  const customer = await createCustomerIfNull();
  const subscription = await hasSubscription();
  if (customer && subscription) {
    return {
      redirect: {
        destination: HOME_ROUTE,
        permanent: false,
      },
    };
  }

  return <NewUserForm user={session.user} />;
};

export default NewUserPage;
