import { useEffect, useState } from "react";
import Header from "./components/header";
import TodoForm from "./components/todo-form/todo-form";
import Todolist from "./components/todolist/todolist";

export default function App() {
  const [allTasks, setAllTasks] = useState([]);

  function handleTaskAddition(task) {
    setAllTasks((allTasks) => (allTasks = [...allTasks, task]));
  }

  useEffect(
    function () {
      console.log(allTasks);
    },
    [allTasks]
  );

  function handleTaskDeletion(task) {
    setAllTasks(() => [...allTasks.filter((t) => t.id !== task.id)]);
  }

  return (
    <div class="app-container">
      <Header />
      <TodoForm allTasks={allTasks} onAddTask={handleTaskAddition} />
    </div>
  );
}
