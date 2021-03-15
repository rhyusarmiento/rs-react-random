import React, { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("");

  function handleSubmit(event) {
    setColor(event.target[0].value);
    event.preventDefault();
  }

  let myStyle = {
    color: color
  };

  return (
    <div>
      <h1>Color Changer</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" value="submit" />
      </form>
      <h2 style={myStyle}>{color}</h2>
    </div>
  );
}
