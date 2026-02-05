import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// 인수로 받은 Header 컴포넌트가 Props가 변경되지 않는 이상
// 리렌더링 되지 않도록 최적화해서 반환
// 최적화된 컴포넌트를 export
export default memo(Header);
