import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };
  addTodo = ({ content }) =>
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), content }]
    });
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-app container">
        <Todos todos={todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
