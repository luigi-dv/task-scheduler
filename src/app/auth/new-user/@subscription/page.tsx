import { StackedCardsSubscriptions } from "@/components/payments/StackedCardsSubscriptions";
import { listProducts } from "@/services/productsService";
import { auth } from "@/auth";
import { AUTH_SIGN_IN_ROUTE } from "@/routes";

const SubscriptionListParallel = async () => {
  const productsResponse = await listProducts(3, true);
  const products = productsResponse.data;
  console.log(products);
  const session = await auth();
  if (!session) {
    return {
      redirect: {
        destination: AUTH_SIGN_IN_ROUTE,
        permanent: false,
      },
    };
  }
  return (
    <div>
      <p className="text-lg font-medium text-gray-900 dark:text-gray-100 py-2">
        Choose your subscription
      </p>
      <StackedCardsSubscriptions user={session.user} products={products} />
    </div>
  );
};

export default SubscriptionListParallel;
