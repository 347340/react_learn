import React, { useContext } from 'react';
import GlobalContext from './GlobalContext';

const MyComponent = () => {
  const { globalNumber, setGlobalNumber } = useContext(GlobalContext);
  const styles = {
    backgroundColor: `hsl(${globalNumber}, 100%, 50%)`, // 使用HSL颜色模式，其中H是色调，与globalNumber关联
    color: `hsl(${(globalNumber + 180) % 360}, 100%, 50%)`, // 使文本颜色与背景色对比鲜明
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '400px',
  };
  const handleClick = () => {
    setGlobalNumber((prevNumber) => (prevNumber + 1) % 360);
  };
  return (
    <div onClick={handleClick} style={styles}>
      Click me to change the color! (Current number: {globalNumber})
    </div>
  );
};
export default MyComponent;
