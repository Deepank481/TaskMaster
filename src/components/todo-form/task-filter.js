export default function TaskFilter() {
  return (
    <div className="filter-container">
      <div className="filter-options">
        <button className="filter-btn active" data-filter="all">
          All
        </button>
        <button className="filter-btn" data-filter="active">
          Active
        </button>
        <button className="filter-btn" data-filter="completed">
          Completed
        </button>
      </div>
      <div className="search-box">
        <input type="text" id="search-input" placeholder="Search tasks..." />
        <i className="fas fa-search search-icon"></i>
      </div>
    </div>
  );
}
