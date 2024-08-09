import { useState } from "react";

const Modal = ({ close, title, id, onUpdate }) => {
  const [value, setValue] = useState(title);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    close();
    if (value.trim()) {
      onUpdate(id, value);
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
            <input
              type="text"
              className="form-control"
              placeholder="Lütfen task'i düzenleyiniz."
              value={value}
              onChange={handleChange}
            />
          </div>
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              İptal
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
