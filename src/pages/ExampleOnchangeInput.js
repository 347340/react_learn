import React, { useState } from 'react';

function ExampleOnchangeInput() {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div style={{ textAlign:"center", margin:"auto" }}>
      <h1 style={{ color:"pink" }}>
        React Onchange Event示例
      </h1>
      <h3>
        Example for React onChange Event Handler
      </h3>
      <input value={value} onChange={handleChange} />
      <br/>
      <div>
        User Input: {value}
      </div>
    </div>
  );
}
export default ExampleOnchangeInput;
