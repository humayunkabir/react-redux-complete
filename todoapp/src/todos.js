import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      const { id, content } = todo;
      return (
        <div className="collection-item" key={id}>
          <span onClick={() => deleteTodo(id)}>{content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todos left, yay!</p>
  );
  return (
    <div className="todos collection">
      <h1 className="center blue-text">Todos</h1>
      {todoList}
    </div>
  );
};

export default Todos;
