import React, { Component } from 'react';

function NameList(props) {
  const myLists = props.myLists;
  const listItems = myLists.map((myList, index) =>
    <li key={index}>{myList}</li>
  );
  return (
    <div>
      <h2>React Map Example</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

class Map extends Component {
  state = {
    myLists: ['A', 'B', 'C', 'D', 'D']
  }

  render() {
    return (
      <NameList myLists={this.state.myLists} />
    );
  }
}

export default Map;
