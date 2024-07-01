"use server";

import { prismaClient } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { auth } from "@/auth";
import { getUser } from "@/services/userService";
import { getUserAPIKeys, createAPIKey } from "@/services/apiKeyService";

/**
 * Has subscription service functions
 */
export const hasSubscription = async () => {
  const session = await auth();
  if (session) {
    const currentUser = await prismaClient.user.findFirst({
      where: { id: session?.user.id },
    });

    const subscriptions = await stripe.subscriptions.list({
      customer: String(currentUser?.stripe_customer_id),
    });

    return subscriptions.data.length > 0;
  }
  return null;
};

/**
 * Create customer if null service functions
 */
export async function createCustomerIfNull() {
  const session = await auth();
  if (session) {
    const user = await getUser(session.user?.id);

    if (!user?.stripe_customer_id) {
      const customer = await stripe.customers.create({
        email: String(user?.email),
      });

      await prismaClient.user.update({
        where: {
          id: user?.id,
        },
        data: {
          stripe_customer_id: customer.id,
        },
      });
    }
    const user2 = await prismaClient.user.findFirst({
      where: { email: session.user?.email },
    });
    return user2?.stripe_customer_id;
  }
}
