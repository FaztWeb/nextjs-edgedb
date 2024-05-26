"use client";
import { deleteTask } from "./actions";

function ButtonTaskDelete({ task }: any) {
  console.log(task);
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => deleteTask(task.id)}
    >
      Delete
    </button>
  );
}
export default ButtonTaskDelete;
