import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { getTask, getTasks } from "@/services/taskService";
import { STATUS_CODES } from "@/constants";

/**
 * GET /api/tasks
 * @description Get a list of tasks
 * @constructor
 */
export const GET = auth(async function GET(req, { params }) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");
  const priority = searchParams.get("priority");

  if (!req.auth) {
    return NextResponse.json(
      { message: "Not authenticated" },
      { status: STATUS_CODES.UNAUTHORIZED },
    );
  }

  try {
    const task = await getTasks(
      req.auth.user,
      title ? title : undefined,
      description ? description : undefined,
      priority ? parseInt(priority) : undefined,
      start_date ? new Date(start_date) : undefined,
      end_date ? new Date(end_date) : undefined,
    );

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
