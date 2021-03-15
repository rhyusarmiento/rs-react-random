import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  function handleSwitch() {
    setToggle(!toggle);
  }

  return (
    <div>
      <h1>Toggle</h1>
      <button onClick={handleSwitch}>toggle</button>
      {toggle === true ? <div>Hello</div> : <div>Goodbye</div>}
    </div>
  );
}
