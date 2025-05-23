import { useState } from "react";
import TaskSummary from "../todolist/task-summary";
import Todolist from "../todolist/todolist";
import DeleteModal from "./delete-modal";
import Form from "./form";
import TaskFilter from "./task-filter";

export default function TodoForm({ allTasks, onAddTask, onDeleteTask }) {
  const [isDeleteModalActive, setIsDeleteModal] = useState(false);
  const [taskSelected, setTaskSelected] = useState("");
  return (
    <div className="main-content">
      <Form onAddTask={onAddTask} />
      <TaskFilter />
      <Todolist
        allTasks={allTasks}
        onSetDeleteModal={setIsDeleteModal}
        isDeleteModalActive={isDeleteModalActive}
        setTaskSelected={setTaskSelected}
      />
      <TaskSummary allTask={allTasks} />
      <DeleteModal
        isActive={isDeleteModalActive}
        setIsActive={setIsDeleteModal}
        task={allTasks.filter((task) => task.id === taskSelected)}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}
