import React from 'react';

export default function EditPost() {
  function handleSubmit(e) {
    // 阻止浏览器重新加载页面
    e.preventDefault();
    // 读取表单数据
    const form = e.target;
    const formData = new FormData(form);
    // 你可以直接将 formData 作为fetch的请求body
    fetch('/some-api', { method: form.method, body: formData});
    // 你可以像浏览器默认的一样，将其转换为URL
    console.log(new URLSearchParams(formData).toString());
    // 也可以使用普通的对象
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // (!)这并不包含多选值
    // 或者你可以使用name与value相匹配的数组对
    console.log([...formData.entries()]);
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        选择你喜欢的水果：
        <select name="精选水果" defaultValue="橘子">
          <option value="苹果">苹果</option>
          <option value="香蕉">香蕉</option>
          <option value="橘子">橘子</option>
        </select>
      </label>
      <hr/>
      <label>
        选择你所有喜欢的蔬菜：
        <select name="精选蔬菜" multiple={true} value={['玉米', '番茄']}>
          <option value="黄瓜">黄瓜</option>
          <option value="玉米">玉米</option>
          <option value="番茄">番茄</option>
        </select>
      </label>
      <hr/>
      <button type="reset">重置</button>
      <button type="submit">提交</button>
    </form>
  );
}

