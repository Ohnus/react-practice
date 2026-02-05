import "./App.css";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  createContext,
} from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useContext } from "react";

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item
      );
    case "DELETE":
      return state.filter(
        (item) => item.id !== action.targetId
      );
    default:
      return state;
  }
}

// context는 보통 외부에서 생성
// 리렌더링 할 때 마다 실행되기 때문에 저장소 역할만 하는 context는 외부 권장!
// 변화 값, 변화x 값 분리하여 context 생성
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useCallback()
  // 첫 번째 인수: 재생성 원치 않는 함수
  // 두 번째 인수: deps
  // 첫 번째 인수인 콜백 함수를 그대로 반환함
  // deps가 변경되었을 때만 함수 재생성 = 함수 memoization
  // const func = useCallback(()=>{}, []);

  // dispatch에 type과 새로운 todo 객체로 객체 생성
  // dispatch에 type과 조작할 data 실어 보내기
  // 조작은 위의 reducer에 한다.
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  // 체크박스 수정
  // App -> List -> ToDoItem
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });

    // todos State 값들 중에 targetId와 일치하는
    // id를 갖는 투두 아이템의 isDone을 변경
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는
    // 요소의 데이터만 바꾼 새로운 배열
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  // deps가 빈 배열이므로, 마운트 이후 변경하지 않는다.
  // useCallback으로 1차적으로 함수들을 재생성하지 않도록 방지하고,
  // useMemo를 통해 처음에 만들어진 함수를 객체로 함께 잡아 놓는다.
  // 만약 useCallback 없다면, App 리렌더링 할 때마다 재생성되는
  // 함수들을 useMemo 객체에 가두는 꼴이다.
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        {/* App -> TodoStateContext -> TodoDispatchContext 이므로
        App이 리렌더링 되면 Dispatch 또한 리렌더링 및 함수 재생성
        따라서 여기서 useMemo를 쓴다. */}
        <TodoDispatchContext.Provider
          value={memoizedDispatch}
        >
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
