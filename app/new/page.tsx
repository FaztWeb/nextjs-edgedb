import { e, client } from "@/lib/edgedb";
import {redirect} from 'next/navigation'

function PageTasks() {
  async function createTask(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const completed = formData.get("completed") === "on";

    console.log({
      title,
      description,
      completed,
    });

    const createTask = e.insert(e.Task, {
        title,
        description,
        completed,
    }) 

    await createTask.run(client);

    redirect('/') 
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form action={createTask} className="flex flex-col gap-4">
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="description" placeholder="description" />
        <input type="checkbox" name="completed" />
        <button type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Add</button>
      </form>
    </div>
  );
}

export default PageTasks;
