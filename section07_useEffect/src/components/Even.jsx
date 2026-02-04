import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect의 콜백 함수가 '반환하는 함수'를 정리 함수(클린업)이라고 부른다.
    // useEffect가 끝날 때 실행된다.
    // 즉 App 컴포넌트가 실행될 때, count가 짝수이면 Even 컴포넌트 마운트
    // 동시에 useEffecct 실행
    // 그리고 홀수가 되면 App 컴포넌트에서 null 처리
    // 그러면 useEffect 동료하며 정리 함수 return 실행

    // 언마운트 될 때 해당 컴포넌트가 사용한 메모리 정리하는 최적화 작업 진행 가능
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수입니다.</div>;
};

export default Even;
