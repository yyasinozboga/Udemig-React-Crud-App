import "./App.css";
import Header from "./components/Header";
import api from "./utils/api";
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  //! Get The Tasks
  const fetchTasks = async () => {
    const params = { _sort: "-date", _page: 1 };

    try {
      const res = await api.get("/tasks", { params });
      setTasks(res.data.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  //! Add Task
  const handleSubmit = async (value, status) => {
    const newTask = {
      title: value,
      status,
      date: new Date().toLocaleString("en-us"),
    };

    try {
      const res = await api.post("/tasks", newTask);
      setTasks([res.data, ...tasks]);
    } catch (error) {
      throw new Error(error);
    }
  };

  //! Delete Task
  const handleDeleteTaskById = async (deleted) => {
    try {
      await api.delete(`/tasks/${deleted}`);
      const filtered = tasks.filter((task) => task.id !== deleted);
      setTasks(filtered);
    } catch (error) {
      throw new Error(error);
    }
  };

  //! Edit Task
  const handleEditTaskById = async (editedId, editedTitle) => {
    const params = { _sort: "-date", _page: 1 };
    try {
      const task = tasks.find((task) => {
        if (task.id === editedId) {
          task.title = editedTitle;
          task.date = new Date().toLocaleString("en-us");

          return task;
        }
      });

      await api.put(`/tasks/${editedId}`, task);
      const res = await api.get("/tasks", { params });
      setTasks(res.data.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="bg-dark min-vh-100 vw-100">
      {/* Header */}
      <Header onSubmit={handleSubmit} />

      {tasks === null || tasks.length === 0 ? (
        <h1 className="text-light text-center mt-5">Herhangi bir task yok!</h1>
      ) : (
        // Task List
        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTaskById}
          onUpdate={handleEditTaskById}
        />
      )}
    </div>
  );
}

export default App;
