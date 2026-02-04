import { useState } from "react";

export default function useInput() {
  const [input, setInput] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  console.log(input);

  return [input, onChange];
}
