import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import ReducerExam from "./components/ReducerExam";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "춤 연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  // Editor로부터 받은 값을 통해 새로운 객체 생성
  // 해당 객체를 todos 배열에 넣으며 리렌더링
  // 이 때, todos.push(newToDO) 이렇게 하면 값만 넣을 뿐 리렌더링 x
  const onCreate = (content) => {
    const newToDo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newToDo, ...todos]);
  };

  // 체크박스 수정
  // App -> List -> ToDoItem
  const onUpdate = (targetId) => {
    // todos State 값들 중에 targetId와 일치하는
    // id를 갖는 투두 아이템의 isDone을 변경

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는
    // 요소의 데이터만 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId
          ? { ...todo, isDone: !todo.isDone }
          : todo
      )
    );
  };

  const onDelete = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만
    // 삭제한 새로운 배열 넣기
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      /> */}
      <ReducerExam />
    </div>
  );
}

export default App;
