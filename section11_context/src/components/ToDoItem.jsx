import "./ToDoItem.css";
import { memo } from "react";

const ToDoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) => {
  // input 타입이기 때문에 click이 아닌 change
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
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
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

// 체크박스, 삭제 버튼 실행 시 호출되는 onUpdate, onDelete 함수는
// 기본적으로 객체 타입이기 때문에, App 컴포넌트 리렌더링 시에 다른 참조값으로
// Props 되어 여기로 넘어온다. 결국 다시 리렌더링!
// export default memo(ToDoItem, (prevProps, nextProps) => {
//   // 반환 값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링x
//   // F -> Props 바뀜 -> 리렌더링o
//   // 수정, 삭제를 위해 Props로 보낸 onUpdate, onDelete 제외하고
//   // 실제로 필요한 Props인 todos를 구조 분해 할당한 값들을 비교

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   // 4개를 제외한 값들이 바뀌지 않았을 경우 true 보내서 리렌더링x
//   // 똑같은 컴포넌트가 아이템 개수만큼 나열
//   // 특정 컴포넌트 변경 시, map에 의해 변경이 되지 않은 다른 컴포넌트들도 Props를 받음
//   // 하지만 변경된 특정 컴포넌트는 if문에 의해 리렌더링이 되고,
//   // 나머지 컴포넌트들은 변경 사항이 없으므로 아래의 return true 통해 리렌더링 x
//   return true;
// });

export default memo(ToDoItem);
