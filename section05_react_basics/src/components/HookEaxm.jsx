import useInput from "./../hooks/useInput";

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부(조건문, 반복문)로 호출될 수는 없다.
// 3. 나만의 커스텀 훅(Custom Hook)을 직접 만들 수 있다.

export default function HookEaxm() {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  const [input3, onChange3] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange}></input>
      <input value={input2} onChange={onChange2}></input>
      <input value={input3} onChange={onChange3}></input>
    </div>
  );
}
