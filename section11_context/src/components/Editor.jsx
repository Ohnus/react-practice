import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoContext } from "../App";

// App으로부터 받은 props 'onCreate'를 객체 구조 분해 할당으로 받음
export default function Editor() {
  // context 받기
  const { onCreate } = useContext(TodoContext);

  const [content, setContent] = useState("");
  // 입력 없을 경우 input에 focus 줄 참조용
  const contentRef = useRef();

  // input에 입력된 내용 state에 저장
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 사용자가 키보드를 누를 때 발생하는 이벤트 설정
  // 어떤 키를 눌렀는 지는 이벤트 객체 e의 keyCode에 저장
  // 13번은 엔터로 input 입력 후 엔터 입력 시 onSubmit 함수 발동
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  // 저장된 state를 props로 받은 onCreate로 담아서 보냄
  const onSubmit = () => {
    // state 초기 값 "", undefined 등 꼭 확인하자.
    if (content === "") {
      contentRef.current.focus();
      return;
    }

    onCreate(content);
    // 새로운 데이터 추가 후 input 초기화
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 ToDo..."
      />
      {/* 이벤트 핸들러는 파라미터 안넘길 시에 이름만 선언 */}
      {/* 파라미터 넘길 시에는 화살표 함수 */}
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
