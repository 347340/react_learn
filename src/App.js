//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import AppRoute from './router/index';
import GlobalContext from './pages/GlobalContext';
import MyComponent from './pages/MyComponent';

function App() {
  const [globalNumber, setGlobalNumber] = useState(0)
  return (
    <>
      <AppRoute />
      <GlobalContext.Provider value={{ globalNumber, setGlobalNumber }} >
        <MyComponent />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
