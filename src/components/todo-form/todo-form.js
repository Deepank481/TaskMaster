import Form from "./form";

export default function TodoForm() {
  return (
    <section className="add-task-section mb-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title h5 mb-3">Add New Task</h2>
          <Form />
        </div>
      </div>
    </section>
  );
}
