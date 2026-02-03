import "./App.css";
// 함수 컴포넌트에서 state 생성하려면 내장 함수인 useState import
import { useState } from "react";

function App() {
  // useState() 호출해서 반환 값을 구조 분해 할당으로 상태 값과, 상태 변화 함수 받기
  // 상태 변화 함수를 통해 상태를 변경시키면 리액트가 내부적으로
  // App 컴포넌트의 state가 변경됐다는 것을 감지하여 리렌더링한다.
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "OFF" ? "ON" : "OFF");
          }}
        >
          {light === "OFF" ? "켜기" : "끄기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
