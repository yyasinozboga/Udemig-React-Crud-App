import Task from "./Task";
import api from "../utils/api";
import { toast } from "react-toastify";

const TaskList = ({ setTasks, tasks }) => {
  //! Delete Task
  const handleDeleteTaskById = (deleted) => {
    api
      .delete(`/tasks/${deleted}`)
      .then(() => {
        setTasks((tasks) => tasks.filter((task) => task.id !== deleted));
        toast.error("Task Silindi!");
      })
      .catch((err) => toast.error("Task Silinemedi!"));
  };

  const taskList = tasks.map((task, index) => (
    <Task
      key={index}
      onDelete={handleDeleteTaskById}
      setTasks={setTasks}
      {...task}
    />
  ));

  return (
    <main className="container-fluid d-flex flex-column align-items-start gap-2">
      {taskList}
    </main>
  );
};

export default TaskList;
