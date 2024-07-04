import { auth } from "@/auth";
import { getTask } from "@/services/taskService";
import { TaskHeader } from "@/components/tasks/TaskHeader";

/**
 * This is a private page that requires authentication.
 */
export default async function TaskPage({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  if (data) {
    return <TaskHeader task={data} />;
  }
}

const getData = async (id: string) => {
  const session = await auth();
  if (session) {
    return await getTask(id, session.user);
  }
};
