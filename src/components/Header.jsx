import Form from "./Form";

const Header = ({ setTasks }) => {
  return (
    <header className="p-3">
      <h1 className="text-light text-center fs-1 fw-light">
        Server <span className="text-warning">CRUD</span>
      </h1>

      {/* Form */}
      <Form setTasks={setTasks} />
    </header>
  );
};

export default Header;
