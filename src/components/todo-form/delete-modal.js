export default function DeleteModal({
  isActive,
  task,
  onDeleteTask,
  setIsActive,
}) {
  return (
    <div
      className={isActive ? "modal-overlay active" : "modal-overlay"}
      id="delete-modal"
    >
      <div className="modal delete-modal">
        <div className="modal-header">
          <h2>
            <i className="fas fa-exclamation-triangle warning-icon"></i> Delete
            Task
          </h2>
          <button
            className="close-modal"
            onClick={() => setIsActive(!isActive)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <p className="delete-message">
            Are you sure you want to delete this task?
          </p>
          <div className="task-preview">
            <strong id="delete-task-title">
              {task.length > 0 ? task[0].taskTitle : ""}
            </strong>
            <p className="task-details">This action cannot be undone.</p>
          </div>
          <div className="form-actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={() => setIsActive(!isActive)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn-delete"
              onClick={() => {
                onDeleteTask(task[0]);
                setIsActive(!isActive);
              }}
            >
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
