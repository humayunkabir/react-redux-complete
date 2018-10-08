import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 16, belt: 'pink', id: 3 },
      { name: 'Adam', age: 43, belt: 'yellow', id: 4 }
    ]
  };
  render() {
    const { ninjas } = this.state;
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
