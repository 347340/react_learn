import React from 'react';

export default function FruitPickerMultiple() {
  return (
    <>
      <label>
        选择一些水果：
      </label><br/>
      <select
        name="精选水果"
        defaultValue={['榴莲', '西柚']}
        multiple={true}
      >
        <option value="柠檬">柠檬</option>
        <option value="榴莲">榴莲</option>
        <option value="西柚">西柚</option>
      </select>
    </>
  );
}
