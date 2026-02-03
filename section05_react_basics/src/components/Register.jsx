import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
// 5. 성별

const Register = () => {
  // useState로 input 객체 값을 받는다.
  // 여러 개의 state를 한 번에 관리할 수 있다.
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
    gender: "",
  });

  console.log(input);

  // 이벤트 객체 e의 target에 input된 값이 들어있다.
  const onChange = (e) => {
    // setInput 안의 ...input(스프레드 연산자)은 기존의 값을 유지하고
    // 입력된 프로퍼티만 수정해주기 위함이다.
    setInput({
      ...input,
      // 객체 내에서 []는 내부 값을 프로퍼티 key로 설정하겠다는 문법
      // 여기서는 e.target.name 값을 프로퍼티 키로 설정
      // 만약 input name="name"을 수정하면, e.target.name은 name이라는 key를 가짐
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* div는 한 줄을 차지함 */}
      <div>
        {/* value: 디폴트값 / onChange: 변화 반응 이벤트 핸들러 / placehoder: 안내문구 */}
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        ></input>
      </div>

      <div>
        {/* type="date" => Date Picker(날짜 선택기 생성) */}
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        ></input>
      </div>

      <div>
        {/* 실제로 저장될 데이터는 option 태그의 value */}
        <select
          name="country"
          value={input.country}
          onChange={onChange}
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        {/* 여러 줄을 작성할 수 있는 input */}
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
          placeholder="자기소개를 입력하세요."
        ></textarea>
      </div>

      <div>
        <label>
          <input
            name="gender"
            type="radio"
            value="M"
            onChange={onChange}
          />
          남자
        </label>
        <label>
          <input
            name="gender"
            type="radio"
            value="F"
            onChange={onChange}
          />
          여자
        </label>
      </div>

      {/* <div>
        <label>
          <input
            name="hobby"
            type="checkbox"
            value="movie"
          />
          영화
        </label>
      </div> */}
    </div>
  );
};

export default Register;
