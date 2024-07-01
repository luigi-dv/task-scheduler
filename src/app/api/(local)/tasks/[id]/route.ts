import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { getTask } from "@/services/taskService";
import { STATUS_CODES } from "@/constants";

/**
 * GET /api/tasks/[id]
 * @description Get a new task by id
 * @constructor
 */
export const GET = auth(async function GET(req, { params }) {
  const id = params?.id;
  if (!req.auth) {
    return NextResponse.json(
      { message: "Not authenticated" },
      { status: STATUS_CODES.UNAUTHORIZED },
    );
  }

  if (!id) {
    return NextResponse.json(
      { message: "No id provided" },
      { status: STATUS_CODES.BAD_REQUEST },
    );
  }

  try {
    const task = await getTask(id.toString(), req.auth.user);
    if (!task) {
      return NextResponse.json(
        { message: "Task not found" },
        { status: STATUS_CODES.NOT_FOUND },
      );
    }
    return Response.json(task);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: STATUS_CODES.INTERNAL_SERVER_ERROR },
    );
  }
});
