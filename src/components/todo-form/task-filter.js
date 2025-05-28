export default function TaskFilter({ viewStatus, setViewStatus }) {
  return (
    <div className="filter-container">
      <div className="filter-options">
        <button
          className={`filter-btn ${viewStatus === "all" ? "active" : ""} `}
          data-filter="all"
          onClick={() => setViewStatus(() => "all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${viewStatus === "active" ? "active" : ""} `}
          data-filter="active"
          onClick={() => setViewStatus(() => "active")}
        >
          Active
        </button>
        <button
          className={`filter-btn ${
            viewStatus === "completed" ? "active" : ""
          } `}
          data-filter="completed"
          onClick={() => setViewStatus(() => "completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
