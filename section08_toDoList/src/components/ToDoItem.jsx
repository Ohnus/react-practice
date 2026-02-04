import "./ToDoItem.css";

const ToDoItem = ({ id, isDone, content, date }) => {
  return (
    <div className="ToDoItem">
      {/* checkbox 타입에 onChange 핸들러 없이 props 던지면 에러 발생한다. */}
      <input readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button>삭제</button>
    </div>
  );
};

export default ToDoItem;
