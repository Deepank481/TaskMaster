import { useEffect, useRef, useState } from "react";
import TaskSummary from "../todolist/task-summary";
import Todolist from "../todolist/todolist";
import DeleteModal from "./delete-modal";
import Form from "./form";
import TaskFilter from "./task-filter";
import EditModal from "./edit-modal";

export default function TodoForm({
  allTasks,
  onAddTask,
  onDeleteTask,
  onEditTask,
  onTaskComplete,
}) {
  const [isDeleteModalActive, setIsDeleteModal] = useState(false);
  const [isEditModalActive, setIsEditModalActive] = useState(false);
  const [taskSelected, setTaskSelected] = useState("");
  const [taskToView, setTaskToView] = useState("all");
  const [allTaskSet, setAllTaskSet] = useState([]);
  useEffect(
    function () {
      setAllTaskSet(() => [...allTasks]);
    },
    [allTasks]
  );
  return (
    <div className="main-content">
      <Form onAddTask={onAddTask} />
      <TaskFilter viewStatus={taskToView} setViewStatus={setTaskToView} />
      <Todolist
        allTasks={allTaskSet}
        onSetDeleteModal={setIsDeleteModal}
        isDeleteModalActive={isDeleteModalActive}
        isEditModalActive={isEditModalActive}
        onSetEditModal={setIsEditModalActive}
        setTaskSelected={setTaskSelected}
        onTaskComplete={onTaskComplete}
        viewStatus={taskToView}
      />
      <TaskSummary allTask={allTasks} />
      <DeleteModal
        isActive={isDeleteModalActive}
        setIsActive={setIsDeleteModal}
        task={allTasks.filter((task) => task.id === taskSelected)}
        onDeleteTask={onDeleteTask}
      />

      <EditModal
        isActive={isEditModalActive}
        setIsActive={setIsEditModalActive}
        task={allTasks.filter((task) => task.id === taskSelected)[0]}
        onEditTask={onEditTask}
      />
    </div>
  );
}
