// Props 값이 없을 것을 대비하여 구조 분해 할당으로 전달 받은 후,
// 프로퍼티에 기본 디폴트 값을 설정해준다.
const Button = ({ children, text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
