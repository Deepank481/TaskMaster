import { useState } from "react";
import TodoItemModel from "../../model/todoItemModel";

export default function Form({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState("1");

  function handleTaskAddition(e) {
    e.preventDefault();
    const newTask = new TodoItemModel(taskTitle, taskPriority, false);
    setTaskTitle("");
    setTaskPriority(1);
    onAddTask(newTask);
  }

  return (
    <div className="task-form">
      <form id="task-form">
        <div className="input-group">
          <input
            type="text"
            id="task-input"
            placeholder="Add a new task..."
            value={taskTitle}
            required
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <div className="priority-selector">
            <span className="priority-label">Priority:</span>
            <select
              id="priority-select"
              onChange={(e) => setTaskPriority(e.target.value)}
              value={taskPriority}
            >
              <option value={1}>Low</option>
              <option value={2}>Medium</option>
              <option value={3}>High</option>
            </select>
          </div>
          <button
            type="submit"
            className="add-btn"
            onClick={handleTaskAddition}
          >
            <i className="fas fa-plus"></i> Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
