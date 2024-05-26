import { e, client } from "@/lib/edgedb";
import ButtonTaskDelete from "./button-task-delete";

export default async function Page() {
  const selectTasks = e.select(e.Task, () => ({
    id: true,
    title: true,
    description: true,
    completed: true,
  }));

  const tasks = await selectTasks.run(client);

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border border-gray-200 p-4 rounded-lg shadow-md my-4 text-white"
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.completed ? "Completed" : "Not completed"}</p>
          <ButtonTaskDelete task={task} />
        
        </div>
      ))}
    </div>
  );
}
