import api from "../utils/api";
import { toast } from "react-toastify";

const Modal = ({ close, setTasks, editedId, editedTitle, editedStatus }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    const status = e.target[1].value;
    if (value.trim()) {
      api
        .patch(`/tasks/${editedId}`, {
          title: value,
          status: status,
        })
        .then((res) => {
          setTasks((tasks) =>
            tasks.map((task) => (task.id === editedId ? res.data : task)),
          ),
            toast.info("Task Güncellendi!");
        })
        .catch(() => toast.error("Task Güncellenemedi!"));

      close();
    } else {
      toast.warning("Lütfen bir değer giriniz!");
    }
  };

  return (
    <div className="modal d-block bg-black bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Task'i Düzenle</h5>
            <button onClick={close} className="btn-close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>Yeni Başlığı Giriniz</label>
                <input
                  type="text"
                  className="form-control shadow"
                  placeholder="Lütfen task'i düzenleyiniz."
                  defaultValue={editedTitle}
                />
              </div>

              <div className="mt-4">
                <label>Yeni Durumu Seçiniz</label>
                <select
                  className="form-select shadow"
                  defaultValue={editedStatus}
                >
                  <option value="daily">Günlük</option>
                  <option value="job">İş</option>
                  <option value="important">Önemli</option>
                </select>
              </div>

              <div className="modal-footer">
                <button
                  onClick={close}
                  type="button"
                  className="btn btn-secondary"
                >
                  İptal
                </button>
                <button type="submit" className="btn btn-primary">
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
