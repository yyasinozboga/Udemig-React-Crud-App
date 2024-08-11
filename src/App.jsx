import "./App.css";
import Header from "./components/Header";
import api from "./utils/api";
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import { toast } from "react-toastify";

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
      toast.error("Taskları alınırken bir hata oluştu!");
    }
  };

  return (
    <div className="bg-dark min-vh-100 vw-100">
      {/* Header */}
      <Header setTasks={setTasks} />

      {tasks === null || tasks.length === 0 ? (
        <h1 className="text-light text-center mt-5">Herhangi bir task yok!</h1>
      ) : (
        // Task List
        <TaskList tasks={tasks} setTasks={setTasks} />
      )}
    </div>
  );
}

export default App;
