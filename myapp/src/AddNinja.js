import React, { Component } from 'react';

class AddNinja extends Component {
  state = { name: null, age: null, belt: null };

  handleChange = e => this.setState({ [e.target.id]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNinja(this.state);
  };
  render() {
    return (
      <div className="add-ninja">
        <form className="block" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" onChange={this.handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="belt">Belt:</label>
            <input type="text" id="belt" onChange={this.handleChange} />
          </div>
          <button>Add Ninja</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
