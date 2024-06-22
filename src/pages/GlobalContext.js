import React from 'react';

const GlobalContext = React.createContext({
  globalVar: 0,
  setGlobalNumber: () => {},
});

export default GlobalContext;
