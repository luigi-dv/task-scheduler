import { getTask } from "@/services/taskService";
import { auth } from "@/auth";

/**
 * This is a private page that requires authentication.
 * @param params
 * @constructor
 */
export default async function TaskPage({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  if (data) {
    return <h1>This is a private page that requires authentication.</h1>;
  }
}

async function getData(id: string) {
  const session = await auth();
  if (session) {
    return await getTask(id, session.user);
  }
}
