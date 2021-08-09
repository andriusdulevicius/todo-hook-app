import React from 'react';

const TodoItem = ({ todo, setDoneStatus }) => {
  return (
    <li onClick={() => setDoneStatus(todo.id)}>
      <span className={todo.done ? 'item-done' : ''}>Title: {todo.title}</span>
    </li>
  );
};

export default TodoItem;
