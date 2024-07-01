import { stripe } from "@/lib/stripe";

/**
 * List products service functions
 * @param limit
 * @param expandPrice
 */
export const listProducts = async (limit: number, expandPrice: boolean) => {
  return stripe.products.list({
    limit: limit,
    expand: expandPrice ? ["data.default_price"] : undefined,
  });
};
