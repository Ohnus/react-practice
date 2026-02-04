import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Contoller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // 컨트롤러 컴포넌트에 count, setCount 둘 다 넘겨줘서 그쪽에서 해결해도 되지만,
  // 애초에 부모 컴포넌트에서 모두 계산 후, 결과만 뷰어 컴포넌트로 전달
  // 그러기 위해서 아래의 onClickButton 함수를 컨트롤러 컴포넌트에 전달한다.
  // 컨트롤러 컴포넌트에서 버튼 클릭 값을 value 매개변수로 받는다.
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
