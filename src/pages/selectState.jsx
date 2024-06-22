import React, { useState } from 'react';

export default function SelectState() {
  // 声明一个state变量
  const [selectedFruit, setSelectedFruit] = useState('香蕉')

  return (
    <select
      // 强制选择框的值与state相匹配
      value={selectedFruit}
      // 并在每次改变(change)时更新state
      onChange={(e) => setSelectedFruit(e.target.value)}
    >
      <option value="苹果">苹果</option>
      <option value="香蕉">香蕉</option>
      <option value="梨">梨</option>
    </select>
  );
}
