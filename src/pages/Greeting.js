import React from 'react';
import ReactDOM from 'react-dom/client';

function UserGreeting(props) {
  return <h1>Welcome bacak!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />; //true
  }
  return <GuestGreeting />; //false
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting isLoggedIn={false} />);

export default Greeting;
