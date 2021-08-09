import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li>
      <h4>ID: {todo.id}</h4>
      <h4>Title: {todo.title}</h4>
      <h5>Isdone: {todo.done ? 'Yes' : 'No'}</h5>
    </li>
  );
};

export default TodoItem;
