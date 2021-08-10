import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setDoneStatus, editTitle, deleteTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setDoneStatus={setDoneStatus}
            editTitle={editTitle}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
