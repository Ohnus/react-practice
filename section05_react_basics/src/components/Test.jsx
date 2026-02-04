import { useRef, useState } from "react";

export default function Test() {
  const [input, setInput] = useState({
    name: "",
    bio: "",
    count: 0,
  });
  const countRef = useRef(0);

  console.log(input);
  console.log(countRef.current);

  const onChange = (e) => {
    countRef.current++;

    setInput({
      ...input,
      [e.target.name]: e.target.value,
      count: input.count + 1,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
}
