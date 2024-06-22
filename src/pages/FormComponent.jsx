import React from 'react';

const inputOptions = [
  { id: 1, label: '名字', name: 'name' },
  { id: 2, label: '邮箱', name: 'email' },
  { id: 3, label: '密码', name: 'password' },
];
const title = "信息表单";

export default function FormComponent() {
  console.info("===inputOptions:", inputOptions)

  return (
    <>
      <h2>{title}</h2>
      <form>
        {inputOptions.map((option) => (
          <div key={option.id}>
            <label htmlFor={option.id}>{option.label}</label>
            <input type="text" id={option.id} name={option.name} />
          </div>
        ))}
      </form>
    </>
  );
}
