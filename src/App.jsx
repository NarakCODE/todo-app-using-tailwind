import Header from "./components/Header";
import TaskList from "./components/TaskList";
import React, { useState } from "react";

const LOCAL_STORAGE_KEY = "todo:tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  return (
    <>
      <Header handleAddTask={addTask} />
      <div className="max-w-[700px] mx-auto px-6">
        <TaskList tasks={tasks} />
      </div>
    </>
  );
};

export default App;
