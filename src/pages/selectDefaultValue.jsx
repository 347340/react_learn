import React from 'react';

export default function FruitPickerDefault() {
  return (
    <label>
      选择一个水果：
      <select name="精选水果" defaultValue="菠萝蜜">
        <option value="百香果">百香果</option>
        <option value="哈密瓜">哈密瓜</option>
        <option value="菠萝蜜">菠萝蜜</option>
      </select>
    </label>
  );
}
