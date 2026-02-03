import "./App.css";
// vite는 파일 경로에서 확장자를 명시 안해줘도 내부적으로 찾아갈 수 있도록 자동 설정되어 있다.
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

// 부모 컴포넌트
// 함수 선언식
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button>
      <Button text={"컴포넌트"}>
        <Header />
      </Button>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
