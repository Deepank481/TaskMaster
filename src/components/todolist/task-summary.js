export default function TaskSummary({ allTask }) {
  return (
    <div className="task-summary">
      <div className="summary-item">
        <span className="summary-count">{allTask.length}</span>
        <span className="summary-label">Total Tasks</span>
      </div>
      <div className="summary-item">
        <span className="summary-count">4</span>
        <span className="summary-label">Active</span>
      </div>
      <div className="summary-item">
        <span className="summary-count">1</span>
        <span className="summary-label">Completed</span>
      </div>
    </div>
  );
}
