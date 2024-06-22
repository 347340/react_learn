import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Garage extends Component {
  render() {
    return (
      <>
        <h1>who lives in my garage?</h1>
        <Link to='/'>返回</Link>
      </>
    );
  }
}
