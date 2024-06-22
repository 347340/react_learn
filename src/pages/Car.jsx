import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Car extends Component {
  constructor() {
    super();
    this.state = {color: 'red'};
  }
  render() {
    return (
      <>
        <h2 style={{ color: this.state.color }}>Hello World!</h2>
        <Link to='/'>返回</Link>
      </>
    );
  }
}
