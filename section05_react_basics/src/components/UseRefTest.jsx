import { useRef, useState } from "react";

export default function Test() {
  const [input, setInput] = useState({
    bio: "",
  });
  const countRef = useRef(0);

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <textarea
        name="bio"
        value={input.bio}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
