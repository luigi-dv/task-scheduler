import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { STATUS_CODES } from "@/constants";
import { createAPIKey } from "@/services/apiKeyService";
import { zfd } from "zod-form-data";

export const POST = auth(async function POST(req) {
  if (!req.auth) {
    return NextResponse.json(
      { message: "Not authenticated" },
      { status: STATUS_CODES.UNAUTHORIZED },
    );
  }
  try {
    if (!req.auth.user.id) {
      return NextResponse.json(
        { message: "User ID not found" },
        { status: STATUS_CODES.BAD_REQUEST },
      );
    }

    const formData = await req.formData();

    const schema = zfd.formData({
      name: zfd.text(),
      expires: zfd.text(),
    });

    const { name, expires } = schema.parse(formData);

    const newApiKey = await createAPIKey(
      req.auth.user.id,
      name,
      new Date(expires),
    );
    return Response.json(newApiKey);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: STATUS_CODES.INTERNAL_SERVER_ERROR },
    );
  }
});
