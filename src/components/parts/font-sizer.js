import React, { useState } from "react";

export default function FontSizer() {
  const [size, setSize] = useState(25);

  function handleUp() {
    setSize(size + 5);
  }

  function handleDown() {
    setSize(size - 5);
  }

  let myStyle = {
    fontSize: size
  };

  return (
    <div>
      <h1>Font Sizer</h1>
      <button onClick={handleUp}>bigger</button>
      <button onClick={handleDown}>smaller</button>
      <p style={myStyle}>{size}px</p>
    </div>
  );
}
