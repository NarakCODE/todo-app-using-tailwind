import Header from "./components/Header";
import TaskList from "./components/TaskList";
import React, { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "todo:tasks";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [updatedTask, setUpdatedTask] = useState({ id: "", title: "" });

    useEffect(() => {
        loadSavedTasks();
    }, []);
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
        if (updatedTask.id) {
            const newTasks = tasks.map((task) =>
                task.id === updatedTask.id
                    ? { ...task, title: taskTitle }
                    : task
            );
            setTasksAndSave(newTasks);
            setUpdatedTask({ id: "", title: "" });
        } else {
            setTasksAndSave([
                {
                    id: crypto.randomUUID(),
                    title: taskTitle,
                    isCompleted: false,
                },
                ...tasks,
            ]);
        }
    }

    function deleteTaskById(taskId) {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasksAndSave(newTasks);
    }

    function toggleTaskCompletedById(taskId) {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                };
            }
            return task;
        });
        setTasksAndSave(newTasks);
    }

    function handleEditTask(task) {
        setUpdatedTask(task);
    }

    return (
        <>
            <Header
                handleAddTask={addTask}
                updatedTask={updatedTask}
                setUpdatedTask={setUpdatedTask}
            />
            <div className="max-w-[700px] mx-auto px-6">
                <TaskList
                    tasks={tasks}
                    onDelete={deleteTaskById}
                    onComplete={toggleTaskCompletedById}
                    onEdit={handleEditTask}
                />
            </div>
        </>
    );
};

export default App;
