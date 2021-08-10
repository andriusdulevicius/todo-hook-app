import React, { useState } from 'react';

const AddTodo = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [todoId, setTodoId] = useState(4);

  const handleAddTodo = () => {
    if (!newTodo) return console.error('Cannot submit empty todo');

    addNewTodo({ id: todoId, title: newTodo, done: false });
    setNewTodo('');
    setTodoId(todoId + 1);
  };

  return (
    <div>
      <h2>Add new todo:</h2>
      <input type='text' placeholder='Add new todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
