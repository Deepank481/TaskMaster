import TaskSummary from "../todolist/task-summary";
import Todolist from "../todolist/todolist";
import Form from "./form";
import TaskFilter from "./task-filter";

export default function TodoForm({ allTasks, onAddTask }) {
  return (
    <div className="main-content">
      <Form onAddTask={onAddTask} />
      <TaskFilter />
      <Todolist allTasks={allTasks} />
      <TaskSummary allTask={allTasks} />
    </div>
  );
}
