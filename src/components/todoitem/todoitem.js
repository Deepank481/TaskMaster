export default function Todoitem({
  task,
  setDeleteModal,
  isDeleteModalActive,
  setTaskSelected,
}) {
  return (
    <li
      className={
        task.taskPriority === "1"
          ? "task-item priority-low"
          : task.taskPriority === "2"
          ? "task-item priority-medium"
          : task.taskPriority === "3"
          ? "task-item priority-high"
          : "task-item"
      }
    >
      <div className="task-content">
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <div className="task-text">
          <h3>{task.taskTitle}</h3>
        </div>
      </div>
      <div className="task-actions">
        <span className="priority-badge">
          {task.taskPriority === "1"
            ? "Low"
            : task.taskPriority === "2"
            ? "Medium"
            : "High"}
        </span>
        <button className="edit-btn">
          <i className="fas fa-edit"></i>
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            setDeleteModal(!isDeleteModalActive);
            setTaskSelected(() => task.id);
            console.log(
              "Present Status of Delete Modal::" + isDeleteModalActive
            );
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
}
