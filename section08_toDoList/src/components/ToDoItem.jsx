import "./ToDoItem.css";

const ToDoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
}) => {
  // input 타입이기 때문에 click이 아닌 change
  const onChangeCheckbox = () => {
    console.log(id);
    onUpdate(id);
  };

  return (
    <div className="ToDoItem">
      {/* checkbox 타입에 onChange 핸들러 없이 props 던지면 에러 발생한다. */}
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button>삭제</button>
    </div>
  );
};

export default ToDoItem;
