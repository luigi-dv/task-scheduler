import { auth } from "@/auth";
import { createTask } from "@/services/taskService";
import { zfd } from "zod-form-data";
import { z } from "zod";
import { NextResponse } from "next/server";
import { STATUS_CODES } from "@/constants";

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

  const formData = await req.formData();
  try {
    const schema = zfd.formData({
      title: zfd.text(),
      description: zfd.text(),
      priority: zfd.numeric(z.number().min(1).max(3)),
      deadline: zfd.text(),
    });
    const { title, description, priority, deadline } = schema.parse(formData);

    const newTask = await createTask(
      title,
      description,
      priority,
      new Date(deadline),
      req.auth.user,
    );

    return Response.json(newTask);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: STATUS_CODES.INTERNAL_SERVER_ERROR },
    );
  }
});
