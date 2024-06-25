import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { prismaClient } from "@/lib/prisma";
import { auth } from "@/auth";
import { STATUS_CODES } from "@/constants";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const session = await auth();

  if (session) {
    const filename = searchParams.get("filename");

    if (!filename) {
      return NextResponse.json(
        { message: "Filename is required" },
        { status: STATUS_CODES.BAD_REQUEST },
      );
    }
    if (!request.body) {
      return NextResponse.json(
        { message: "No file selected" },
        { status: STATUS_CODES.BAD_REQUEST },
      );
    }

    const blob = await put(filename, request.body, {
      access: "public",
    });

    await prismaClient.user.update({
      where: { id: session.user.id },
      data: { image: blob.url },
    });

    return NextResponse.json(blob);
  } else {
    return NextResponse.json(
      { message: "Not authenticated" },
      { status: STATUS_CODES.UNAUTHORIZED },
    );
  }
}
