import { useState } from "react";
import Header from "./components/header";
import TodoForm from "./components/todo-form/todo-form";
import Todolist from "./components/todolist/todolist";
import TodoItemModel from "./model/todoItemModel";

export default function App() {
  const [allTasks, setAllTasks] = useState([]);

  function handleTaskAddition(task) {
    setAllTasks((allTasks) => (allTasks = [...allTasks, task]));
    console.log(allTasks);
  }

  return (
    <div className="container">
      <Header />
      <TodoForm onAddTask={handleTaskAddition} />
      <Todolist allTasks={allTasks} />
    </div>
  );
}
