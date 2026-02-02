// 내부 모듈 호출, 디폴트 모듈은 중괄호 없이 아무 이름으로 지정 가능
// 내부 모듈은 한 줄로 호출 가능
import mul, { add, minus } from "./math.js";
// 외부 라이브러리 설치 및 모듈 호출
import randomColor from "randomcolor";

console.log(add(2, 5));
console.log(minus(2, 5));
console.log(mul(2, 5));

const color = randomColor();
console.log(color);
