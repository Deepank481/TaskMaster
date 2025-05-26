import { useEffect, useState } from "react";
import Header from "./components/header";
import TodoForm from "./components/todo-form/todo-form";
import Todolist from "./components/todolist/todolist";

export default function App() {
  const [allTasks, setAllTasks] = useState([]);

  function handleTaskAddition(task) {
    setAllTasks(() => [...allTasks, task]);
  }

  function handleTaskCompletion(task) {
    setAllTasks([
      ...allTasks.map((t) => {
        if (t.id === task.id) {
          t.isCompleted = !t.isCompleted;
        }
        return t;
      }),
    ]);
  }

  useEffect(
    function () {
      console.log(allTasks);
    },
    [allTasks]
  );

  function handleTaskDeletion(task) {
    console.log("Delete the task::\n");
    console.log(task);
    console.log("Total Task::");
    console.log(...allTasks);
    console.log("After Operation::");
    console.log(allTasks.filter((t) => t.id !== task.id));
    setAllTasks(() => [...allTasks.filter((t) => t.id !== task.id)]);
  }

  function handleTaskEdit(task) {
    setAllTasks(() => [...allTasks.filter((t) => t.id !== task.id), task]);
  }

  return (
    <div class="app-container">
      <Header />
      <TodoForm
        allTasks={allTasks}
        onAddTask={handleTaskAddition}
        onDeleteTask={handleTaskDeletion}
        onEditTask={handleTaskEdit}
        onTaskComplete={handleTaskCompletion}
      />
    </div>
  );
}
