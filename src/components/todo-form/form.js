import { useState } from "react";

export default function Form() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
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
          <select className="form-select" id="task-priority">
            <option value="low">Low Priority</option>
            <option value="medium" selected>
              Medium Priority
            </option>
            <option value="high">High Priority</option>
          </select>
        </div>
        <div className="col-md-3">
          <button type="submit" class="btn btn-primary w-100">
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
