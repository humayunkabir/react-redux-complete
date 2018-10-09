import React, { Component } from 'react';

class AddTodo extends Component {
  state = { content: '' };
  handleChange = e => this.setState({ content: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: '' });
  };
  render() {
    const { content } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo">Add new todo:</label>
          <input
            type="text"
            id="todo"
            onChange={this.handleChange}
            value={content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
