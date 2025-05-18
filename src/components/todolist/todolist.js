import { useState } from "react";
import Todoitem from "../todoitem/todoitem";
import DeleteModal from "../todo-form/delete-modal";

export default function Todolist({ allTasks, onDeleteTask }) {
  const [taskSelected, setTaskSelected] = useState("");
  return (
    <>
      <section className="todo-list-section">
        <div className="card shadow-sm">
          <div className="card-header bg-light d-flex justify-content-between align-items-center">
            <h2 className="h5 mb-0">My Tasks</h2>
            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                type="button"
                id="filterDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </button>
              <ul className="dropdown-menu" aria-labelledby="filterDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    All Tasks
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    High Priority
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Completed
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body p-0">
            <ul className="list-group list-group-flush" id="todo-list">
              {allTasks.map((task) => (
                <Todoitem
                  task={task}
                  setItemSelected={setTaskSelected}
                  key={task.id}
                />
              ))}
            </ul>
          </div>
          <div className="card-footer text-muted">
            <div className="d-flex justify-content-between align-items-center">
              <small>{allTasks.length} tasks total</small>
              <button className="btn btn-sm btn-outline-danger">
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </section>
      <DeleteModal
        task={allTasks.filter((task) => task.id === taskSelected)[0]}
        onDeleteTask={onDeleteTask}
      />
    </>
  );
}
