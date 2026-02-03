import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
// 함수 컴포넌트에서 state 생성하려면 내장 함수인 useState import

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
