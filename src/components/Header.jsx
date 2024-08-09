import Form from "./Form";

const Header = ({ onSubmit }) => {
  return (
    <header className="p-3">
      <h1 className="text-light text-center fs-1 fw-light">
        Server <span className="text-warning">CRUD</span>
      </h1>

      {/* Form */}
      <Form onSubmit={onSubmit} />
    </header>
  );
};

export default Header;
