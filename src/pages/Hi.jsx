import React from 'react';
import { Link } from 'react-router-dom';

function Hi() {
  return (
    <>
      <h2>Hello World!</h2>
      <Link to='/'>返回</Link>
    </>
  );
}
export default Hi;
