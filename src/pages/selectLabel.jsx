import React, { useId } from 'react';

export default function Form() {
  const vegetableSelectId = useId();
  return (
    <>
      <label>
        请选择一种水果：
        <select name="精选水果">
          <option value="桃子">桃子</option>
          <option value="芒果">芒果</option>
          <option value="西瓜">西瓜</option>
        </select>
      </label>
      <hr />
      <label htmlFor={vegetableSelectId}>
        请选择一种蔬菜：
      </label>
      <select id={vegetableSelectId} name="精选蔬菜">
        <option value="土豆">土豆</option>
        <option value="生菜">生菜</option>
        <option value="玉米">玉米</option>
      </select>
    </>
  );
}
