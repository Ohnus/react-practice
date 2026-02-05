import "./List.css";
import { useState } from "react";
import ToDoItem from "./ToDoItem";

// props 받을 때 객체 구조 분해 할당 제발 까먹지마..
const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색어와 todos를 filter 메서드, includes 메서드 활용하여
  // 검색어에 맞는 새로운 배열 생성
  // 대소문자 가리지 않도록 todo.content와 search 모두 소문자로 변환
  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  };

  // 결과를 filteredTodos 상수에 담아서 map에서 todos 대신 사용
  const filteredTodos = getFilteredData();
  console.log(filteredTodos);

  return (
    <div className="List">
      <h4>ToDo List 🌱</h4>
      {/* 검색어에 따라 리스트가 리렌더링 되므로 state 필요 */}
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todos_wrapper">
        {/* map: 하나의 콜백 함수 받은 후, 배열의 모든 요소에 대해
        콜백 함수를 수행한 뒤에 새로운 배열 리턴 */}
        {/* 콜백 함수의 todo 매개 변수에는 하나의 todo 아이템 객체가 있다. */}
        {/* 콜백 함수에서 HTML 뿐만 아니라 컴포넌트도 전달 가능 */}
        {/* 그리고 그 각각의 컴포넌트에 props 전달 가능 */}
        {/* props를 객체로 보내면 ToDoItem에서 점표기법으로 풀어내야 하고,
        spread 연산자로 보내면 각 프로퍼티로 바로 꺼낼 수 있다. */}
        {/* 리스트로 렌더링 된 컴포넌트나 어떤 요소들을 각각 구분할 때 key라는 prop으로 구분한다. */}
        {filteredTodos.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
