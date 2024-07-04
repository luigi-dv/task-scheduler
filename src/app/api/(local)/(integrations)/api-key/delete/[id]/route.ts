import { auth } from "@/auth";
import { STATUS_CODES } from "@/constants";
import { NextResponse } from "next/server";
import { deleteAPIKey } from "@/services/apiKeyService";

export const DELETE = auth(async function DELETE(req, { params }) {
  const id = params?.id;

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

    if (!id) {
      return NextResponse.json(
        { message: "No API Key ID provided" },
        { status: STATUS_CODES.BAD_REQUEST },
      );
    }

    const newApiKey = await deleteAPIKey(id.toString());
    return Response.json(newApiKey);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: STATUS_CODES.INTERNAL_SERVER_ERROR },
    );
  }
});
