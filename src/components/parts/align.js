import React, { useState } from "react";

export default function Align() {
  const [alignment, setAlignment] = useState("center");

  function handleCenter() {
    setAlignment("center");
  }

  function handleLeft() {
    setAlignment("left");
  }

  function handleRight() {
    setAlignment("right");
  }

  let myStyle = {
    textAlign: alignment
  };

  return (
    <div>
      <h1>Align</h1>
      <button onClick={handleLeft}>left</button>
      <button onClick={handleCenter}>center</button>
      <button onClick={handleRight}>right</button>
      <p style={myStyle}>{alignment}</p>
    </div>
  );
}
