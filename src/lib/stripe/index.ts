import { Stripe } from "stripe";

export const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
  typescript: true,
});
