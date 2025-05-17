export default function Todoitem({ task, setItemSelected }) {
  return (
    <li className="list-group-item task-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="task1" />
          <label className="form-check-label" for="task1">
            {task.taskTitle}
          </label>
        </div>
        <div className="task-actions">
          <span
            className={
              task.taskPriority === "1"
                ? "badge bg-warning me-2"
                : task.taskPriority === "2"
                ? "badge bg-danger me-2"
                : task.taskPriority === "0"
                ? "badge bg-success me-2"
                : "badge me-2"
            }
          >
            {task.taskPriority === "0" && "Low"}
            {task.taskPriority === "1" && "Medium"}
            {task.taskPriority === "2" && "High"}
          </span>
          <button className="btn btn-sm btn-outline-info me-1">
            <i className="fas fa-edit"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#deleteConfirmModal"
            onClick={() => setItemSelected(task.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <p className="task-description text-muted small mt-1">
        {task.taskDescription}
      </p>
    </li>
  );
}
