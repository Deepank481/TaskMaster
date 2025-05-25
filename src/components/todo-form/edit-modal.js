import { useEffect, useState } from "react";

export default function EditModal({ isActive, setIsActive, task, onEditTask }) {
  const [taskTitle, setTasktitle] = useState("");
  const [taskPriority, setTaskpriority] = useState("1");

  function handleEditingTask(e) {
    e.preventDefault();
    task.taskTitle = taskTitle;
    task.taskPriority = taskPriority;
    onEditTask(task);
    setIsActive(() => !isActive);
  }

  useEffect(
    function () {
      if (task !== undefined && task !== null) {
        setTasktitle(() => task?.taskTitle);
        setTaskpriority(() => task?.taskPriority);
      }
    },
    [task?.taskPrioritry, task?.taskTitle]
  );

  console.log(taskTitle);
  console.log(taskPriority);
  console.log(task);
  return (
    <div
      className={isActive ? "modal-overlay active" : "modal-overlay"}
      id="edit-modal"
    >
      <div className="modal">
        <div className="modal-header">
          <h2>Edit Task</h2>
          <button
            className="close-modal"
            onClick={() => setIsActive(() => !isActive)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <form id="edit-task-form">
            <div className="form-group">
              <label htmlFor="edit-task-title">Task Title</label>
              <input
                type="text"
                id="edit-task-title"
                placeholder="Enter task title"
                value={taskTitle}
                required
                onChange={(e) => {
                  setTasktitle(() => e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-task-priority">Priority</label>
              <select
                id="edit-task-priority"
                value={taskPriority}
                onChange={(e) => {
                  setTaskpriority(() => e.target.value);
                }}
              >
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>
            <div className="form-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={() => setIsActive(() => !isActive)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-save"
                onClick={(e) => handleEditingTask(e)}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
