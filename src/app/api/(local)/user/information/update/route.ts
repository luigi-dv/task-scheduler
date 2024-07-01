import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { STATUS_CODES } from "@/constants";
import { zfd } from "zod-form-data";
import { updateUserInfo } from "@/services/userService";

/**
 * POST /api/user/update
 * @description Update user information (name, surname, country)
 */
export const POST = auth(async function POST(req) {
  if (!req.auth) {
    return NextResponse.json(
      { message: "Not authenticated" },
      { status: STATUS_CODES.UNAUTHORIZED },
    );
  }

  const formData = await req.formData();

  try {
    const schema = zfd.formData({
      name: zfd.text(),
      surname: zfd.text(),
      country: zfd.text(),
    });

    const { name, surname, country } = schema.parse(formData);

    console.log(name, surname, country);

    const updatedUser = await updateUserInfo(req.auth.user.id, {
      name,
      surname,
      country,
    });

    return Response.json(updatedUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: STATUS_CODES.INTERNAL_SERVER_ERROR },
    );
  }
});
