import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { STATUS_CODES } from "@/constants";
import { stripe } from "@/lib/stripe";
import { zfd } from "zod-form-data";
import { z } from "zod";
/**
 * POST /api/tasks/create
 * @description Create a new task
 * @constructor
 */
export const POST = auth(async function POST(req) {
  if (!req.auth) {
    return NextResponse.json(
      { message: "Not authenticated" },
      { status: STATUS_CODES.UNAUTHORIZED },
    );
  }
  try {
    const formData = await req.formData();

    const schema = zfd.formData({
      lookup_key: zfd.text(),
    });
    const { lookup_key } = schema.parse(formData);

    const prices = await stripe.prices.list({
      lookup_keys: [lookup_key],
      expand: ["data.product"],
    });

    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      line_items: [
        {
          price: prices.data[0].id,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.URL}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.URL}?canceled=true`,
    });
    if (!session || !session.url) {
      return NextResponse.json(
        { message: "Internal server error" },
        { status: STATUS_CODES.INTERNAL_SERVER_ERROR },
      );
    }

    return NextResponse.redirect(session.url, {
      status: STATUS_CODES.SEE_OTHER,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: STATUS_CODES.INTERNAL_SERVER_ERROR },
    );
  }
});
