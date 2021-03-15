import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleUp() {
    setCount(count + 1);
  }

  function handleDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={handleUp}>Up</button>
      <button onClick={handleDown}>Down</button>
    </div>
  );
}
