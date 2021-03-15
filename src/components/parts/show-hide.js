import React, { useState } from "react";

export default function App() {
  const [btn, setBtn] = useState("show");

  function toggleShow() {
    if (btn === "show") {
      setBtn("hide");
    } else {
      setBtn("show");
    }
  }

  return (
    <div className="App">
      <h1>Show And Hide</h1>
      <button onClick={toggleShow}>{btn}</button>
      {btn === "hide" ? <h2>Hello</h2> : null}
    </div>
  );
}
