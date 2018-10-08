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

  addNinja = newNinja => {
    newNinja.id = this.state.ninjas.length + 1;
    // What is the difference between these two methods?
    // const { ninjas } = this.state;
    // const ninjas = [...this.state.ninjas];
    // ninjas.push(newNinja);
    const ninjas = [...this.state.ninjas, newNinja];
    this.setState({ ninjas });
  };

  deleteNinja = id => {
    const ninjas = this.state.ninjas.filter(ninja => ninja.id !== id);
    this.setState({ ninjas });
  };

  componentDidMount() {
    console.log('Component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      'Component updeted: ',
      'prevProps: ',
      prevProps,
      'prevState: ',
      prevState
    );
  }

  render() {
    const { ninjas } = this.state;
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
