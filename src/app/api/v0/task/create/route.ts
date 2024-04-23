import { auth } from "@/auth";
import { createTask } from "@/services/taskService/createTask";
import { zfd } from "zod-form-data";
import { z } from "zod";
import { NextResponse } from "next/server";

/**
 * POST /api/v0/task
 * @description Create a new task
 * @constructor
 */

export const POST = auth(async function POST(req) {
  if (req.auth) {
    const formData = await req.formData();
    try {
      const schema = zfd.formData({
        title: zfd.text(),
        description: zfd.text(),
        priority: zfd.numeric(z.number().min(1).max(3)),
        deadline: zfd.text(),
      });
      const { title, description, priority, deadline } = schema.parse(formData);

      const res = await createTask(
        title,
        description,
        priority,
        new Date(deadline),
        req.auth,
      );
      return Response.json(res);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          message: error,
        },
        { status: 400 },
      );
    }
  }
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
