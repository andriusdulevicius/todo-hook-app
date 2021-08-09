import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setDoneStatus }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setDoneStatus={setDoneStatus} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
