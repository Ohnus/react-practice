import "./ToDoItem.css";

const ToDoItem = () => {
  return (
    <div className="ToDoItem">
      <input type="checkbox" />
      <div className="content">ToDo...</div>
      <div className="date">Date</div>
      <button>삭제</button>
    </div>
  );
};

export default ToDoItem;
