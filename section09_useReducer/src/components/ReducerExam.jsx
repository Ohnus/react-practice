import { useReducer } from "react";

// reducer: 변환기
// -> 상태를 실제로 변화시키는 역할
// -> 변화시킬 state 값과 액션 객체가 인수로 넘어온다.
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const ReducerExam = () => {
  // dispatch: 발송하다, 급송하다.
  // -> 상태 변화를 요청하기만 하는 함수
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  // -> 컴포넌트 내부에서 dispatch 함수를 호출하게 되면,
  // 상태 변화 요청이 되고, useReducer가 상태 변화를 실제로 처리하게 될 함수를 호출
  // 첫 번째 인수는 외부에서 실행시킬 함수, 두 번째 인수는 state 초기 값
  // reducer 함수에서 return된 값을 state에 저장하며 리렌더링
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변화되길 원하는 지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};
export default ReducerExam;
