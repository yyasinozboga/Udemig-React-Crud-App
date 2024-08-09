import { IoIosBriefcase } from "react-icons/io";
import { RiVipCrownFill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { useState } from "react";
import Modal from "./Modal";

const Task = ({ onDelete, onUpdate, id, title, status }) => {
  const [isOpen, setIsOpen] = useState(false);

  const icon =
    status === "important" ? (
      <RiVipCrownFill className="text-danger fs-4" />
    ) : status === "job" ? (
      <IoIosBriefcase className="text-primary fs-4" />
    ) : (
      <FaCalendarDays className="text-success fs-4" />
    );

  const handleDeleteTask = () => {
    onDelete(id);
  };

  const handleEditTask = () => {
    setIsOpen(true);
  };

  return (
    <div className="d-flex justify-content-between align-items-center bg-light p-2 rounded-3 w-100">
      {icon}
      <h3 className="fs-4">{title}</h3>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={handleEditTask}>
          Düzenle
        </button>
        <button className="btn btn-danger" onClick={handleDeleteTask}>
          Sil
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <Modal
          close={() => setIsOpen(false)}
          title={title}
          id={id}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};

export default Task;
