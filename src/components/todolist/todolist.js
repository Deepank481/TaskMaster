import { useState } from "react";
import Todoitem from "../todoitem/todoitem";

export default function Todolist({
  allTasks,
  onSetDeleteModal,
  isDeleteModalActive,
  isEditModalActive,
  onSetEditModal,
  setTaskSelected,
  onTaskComplete,
  viewStatus,
}) {
  return (
    <div class="task-list-container">
      <h2>
        My Tasks <span class="task-count">({allTasks.length})</span>
      </h2>

      <ul class="task-list">
        {viewStatus === "all" &&
          allTasks.map((task) => (
            <Todoitem
              task={task}
              key={task.id}
              setDeleteModal={onSetDeleteModal}
              isDeleteModalActive={isDeleteModalActive}
              setTaskSelected={setTaskSelected}
              isEditModalActive={isEditModalActive}
              setEditModal={onSetEditModal}
              onTaskComplete={onTaskComplete}
            />
          ))}

        {viewStatus === "completed" &&
          allTasks
            .filter((t) => t.isCompleted)
            .map((task) => (
              <Todoitem
                task={task}
                key={task.id}
                setDeleteModal={onSetDeleteModal}
                isDeleteModalActive={isDeleteModalActive}
                setTaskSelected={setTaskSelected}
                isEditModalActive={isEditModalActive}
                setEditModal={onSetEditModal}
                onTaskComplete={onTaskComplete}
              />
            ))}

        {viewStatus === "active" &&
          allTasks
            .filter((t) => !t.isCompleted)
            .map((task) => (
              <Todoitem
                task={task}
                key={task.id}
                setDeleteModal={onSetDeleteModal}
                isDeleteModalActive={isDeleteModalActive}
                setTaskSelected={setTaskSelected}
                isEditModalActive={isEditModalActive}
                setEditModal={onSetEditModal}
                onTaskComplete={onTaskComplete}
              />
            ))}
      </ul>
    </div>
  );
}
