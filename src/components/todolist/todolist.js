import { useState } from "react";
import Todoitem from "../todoitem/todoitem";
import DeleteModal from "../todo-form/delete-modal";

export default function Todolist({ allTasks }) {
  const [taskSelected, setTaskSelected] = useState("");
  return (
    <div class="task-list-container">
      <h2>
        My Tasks <span class="task-count">(5)</span>
      </h2>

      <ul class="task-list">
        {allTasks.map((task) => (
          <Todoitem task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
