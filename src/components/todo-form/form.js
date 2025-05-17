import { useState } from "react";
import TodoItemModel from "../../model/todoItemModel";

export default function Form({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState(-1);

  function handleTaskAddition(e) {
    e.preventDefault();
    const newTask = new TodoItemModel(taskTitle, taskPriority, taskDescription);
    onAddTask(newTask);
    setTaskTitle("");
    setTaskDescription("");
    setTaskPriority(-1);
  }

  return (
    <form id="task-form">
      <div className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="task-title"
            placeholder="Task Title"
            value={taskTitle}
            required
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            id="task-priority"
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
          >
            <option value={-1}>Select Task Priority</option>
            <option value={0}>Low Priority</option>
            <option value={1}>Medium Priority</option>
            <option value={2}>High Priority</option>
          </select>
        </div>
        <div className="col-md-3">
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={(e) => handleTaskAddition(e)}
          >
            <i className="fas fa-plus me-2"></i>Add Task
          </button>
        </div>
        <div className="col-12">
          <textarea
            className="form-control"
            id="task-description"
            rows="2"
            placeholder="Task Description (optional)"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
    </form>
  );
}
