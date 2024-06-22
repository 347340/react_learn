import React, { useState } from 'react';

function ExampleOnchangeSelect() {
  const [value, setValue] = useState('HTML');
  function handleChange(e) {
    setValue(e.target.value)
  }
  return (
    <div style={{ textAlign:"center", margin:"auto" }}>
      <h1  style={{ color:"pink" }}>
        React Onchange Event示例
      </h1>
      <h3>
        Exemple for React onChange Event Handler
      </h3>
      <select value={value} onChange={handleChange}>
        <option value={"HTML"}>HTML</option>
        <option value={"CSS"}>CSS</option>
        <option value={"Java"}>Java</option>
        <option value={"JavaScript"}>JavaScript</option>
      </select>
      <br/>
      <div>
        User Input: {value}
      </div>
    </div>
  );
}
export default ExampleOnchangeSelect;
