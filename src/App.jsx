import './App.css';
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import allTodos from './db/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => setTodos(allTodos()), [todos]);

  const setDoneUndone = (id) => {
    const todosCopy = [...todos];
    // const foundTodo = todosCopy.find((t) => t.id === id);
    // foundTodo.done = !foundTodo.done;

    todosCopy.map((i) => {
      return i.id === id ? (i.done = !i.done) : i;
    });
    setTodos(todosCopy);
  };

  return (
    <div className='App'>
      <h1>Simple Todo App</h1>
      <TodoList todos={todos} setDoneStatus={setDoneUndone} />
    </div>
  );
}

export default App;
