import React, { useState } from 'react';

export default function SelectFruitState() {
  const [selectedFruit, setSelectedFruit] = useState('橘子');
  const [selectedVegs, setSelectedVegs] = useState(['豆角', '冬瓜']);
  return (
    <>
      <label>
        选择一个水果：
        <select
          value={selectedFruit}
          onChange={e => setSelectedFruit(e.target.value)}
        >
          <option value="苹果">苹果</option>
          <option value="香蕉">香蕉</option>
          <option value="橘子">橘子</option>
        </select>
      </label>
      <hr />
      <label>
        选择所有你喜欢的蔬菜：
        <select
          multiple={true}
          value={selectedVegs}
          onChange={e => {
            const options = [...e.target.selectedOptions];
            const values = options.map(option => option.value);
            setSelectedVegs(values);
          }}
        >
          <option value="豆角">豆角</option>
          <option value="菠菜">菠菜</option>
          <option value="冬瓜">冬瓜</option>
        </select>
      </label>
      <hr />
      <p>你最喜欢的水果是：{selectedFruit}</p>
      <p>你最喜欢的蔬菜是：{selectedVegs.join(',')}</p>
    </>
  );
}
