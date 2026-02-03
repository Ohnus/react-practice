import "./App.css";
// vite는 파일 경로에서 확장자를 명시 안해줘도 내부적으로 찾아갈 수 있도록 자동 설정되어 있다.
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// 부모 컴포넌트
// 함수 선언식
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
