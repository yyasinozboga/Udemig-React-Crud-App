import Task from "./Task";

const TaskList = ({ onDelete, onUpdate, tasks }) => {
  const taskList = tasks.map((task, index) => (
    <Task key={index} onDelete={onDelete} onUpdate={onUpdate} {...task} />
  ));

  return (
    <main className="container-fluid d-flex flex-column align-items-start gap-2">
      {taskList}
    </main>
  );
};

export default TaskList;
