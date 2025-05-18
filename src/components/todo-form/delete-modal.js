import { Modal } from "bootstrap";

export default function DeleteModal({ task, onDeleteTask }) {
  console.log(task);
  return (
    <div
      className="modal fade"
      id="deleteConfirmModal"
      tabIndex="-1"
      aria-labelledby="deleteConfirmModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteConfirmModalLabel">
              Confirm Delete
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                document.activeElement?.blur();

                // Close the Bootstrap modal
                const modalEl = document.getElementById("deleteConfirmModal");
                const modal = Modal.getInstance(modalEl);
                modal.hide();
              }}
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this task?</p>
            <p className="task-to-delete fw-bold text-danger">
              {task === undefined || task === null
                ? "Task is undefined"
                : task.taskTitle}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => {
                document.activeElement?.blur();

                // Close the Bootstrap modal
                const modalEl = document.getElementById("deleteConfirmModal");
                const modal = Modal.getInstance(modalEl);
                modal.hide();
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              id="confirmDeleteBtn"
              onClick={() => {
                onDeleteTask(task);
                document.activeElement?.blur();

                // Close the Bootstrap modal
                const modalEl = document.getElementById("deleteConfirmModal");
                const modal = Modal.getInstance(modalEl);
                modal.hide();
              }}
              data-bs-dismiss="modal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
