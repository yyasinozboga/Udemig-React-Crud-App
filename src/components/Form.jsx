import api from "../utils/api";
import { toast } from "react-toastify";

const Form = ({ setTasks }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    const status = e.target[1].value;
    if (value.trim()) {
      //! Add Task
      const newTask = {
        title: value,
        status,
        date: new Date().toLocaleString("en-us"),
      };

      api
        .post("/tasks", newTask)
        .then((res) => {
          setTasks((tasks) => [res.data, ...tasks]);
          toast.success("Task eklendi!");
        })
        .catch((err) => toast.error("Task eklenemedi!"));
    } else {
      toast.warning("Lütfen bir değer giriniz!");
    }

    e.target.reset();
  };

  return (
    <form
      className="form-group d-flex justify-content-center align-items-center gap-3 mt-5"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        className="form-control"
        placeholder="ör:react projesi yap"
      />

      <select className="form-select">
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
        <option value="important">Önemli</option>
      </select>

      <button className="btn btn-primary">Gönder</button>
    </form>
  );
};

export default Form;
