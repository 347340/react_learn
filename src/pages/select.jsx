import React from 'react';

export default function FruitPicker() {
  return (
    <label>
      选择一个水果：
      <select name="精选水果">
        <option value="苹果">苹果</option>
        <option value="香蕉">香蕉</option>
        <option value="桃子">桃子</option>
      </select>
    </label>
  );
}
