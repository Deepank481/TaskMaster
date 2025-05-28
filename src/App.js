import { useEffect, useState } from "react";
import Header from "./components/header";
import TodoForm from "./components/todo-form/todo-form";
import SaveOrRetrieve from "./service/storage";

export default function App() {
  const [allTasks, setAllTasks] = useState(SaveOrRetrieve("ret"));

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
      SaveOrRetrieve("save", allTasks);
    },
    [allTasks]
  );

  function handleTaskDeletion(task) {
    setAllTasks(() => [...allTasks.filter((t) => t.id !== task.id)]);
  }

  function handleTaskEdit(task) {
    // setAllTasks(() => [...allTasks.filter((t) => t.id !== task.id), task]);
    setAllTasks(() => [...allTasks.map((t) => (t.id === task.id ? task : t))]);
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
