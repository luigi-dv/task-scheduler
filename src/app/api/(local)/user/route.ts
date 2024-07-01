import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { STATUS_CODES } from "@/constants";
import { getUser } from "@/services/userService";

/**
 * GET /api/tasks/[id]
 * @description Get a new task by id
 * @constructor
 */
export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json(
      { message: "Not authenticated" },
      { status: STATUS_CODES.UNAUTHORIZED },
    );
  }

  try {
    const user = await getUser(req.auth.user.id);
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: STATUS_CODES.NOT_FOUND },
      );
    }
    return Response.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: STATUS_CODES.INTERNAL_SERVER_ERROR },
    );
  }
});
