import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Contoller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // ### useEffect 사용법
  // 두 번째 인수로 전달 된 배열의 값이 변경되면
  // 사이드 이펙트로 첫 번째 인수로 전달 된 콜백 함수를 실행
  // useEffect는 두 번째 인수로 전달한 배열에 의존
  // -> 의존성 배열(dependency array, deps)
  // 그냥 리렌더링 후에 console.log 찍으면 되는 거 아닌가?
  // -> state는 비동기로 업데이트가 된다.
  // -> 결과가 바로 나오는 것이 아니기 때문에 사이드 이펙트는 useEffect로.
  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]);

  // ### useEffect로 라이프 사이클 제어하기
  // 1. 마운트: 탄생
  // deps 변경이 없으면 콜백 함수 작동 안하므로 첫 렌더링 이후 아무 변화 x
  // 컴포넌트가 마운트 되었을 때 최초로 한 번 실행시키고 싶은 코드가 있다면 []
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트: 변화, 리렌더링
  // 두 번째 인수 deps 생략
  // -> 마운트 이후, 리렌더링 될 때 마다 실행된다.
  // 만약, 최초 마운트 시에 코드를 실행시키고 싶지 않다면?
  // 즉, 정말 업데이트 시에만 코드를 동작하게 하고 싶다면?
  // -> useRef를 이용하여 if문으로 조작
  // -> return으로 if문 끝내서 if문 다음 코드 실행 안되도록 함
  // 업데이트 시 값들이 정상적인지 검사하는 기능 등을 만들 수 있다.
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트: 죽음
  // Even.jsx 참고

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
