import './App.css';
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import allTodos from './db/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => setTodos(allTodos()), []);

  return (
    <div className='App'>
      <h1>Simple Todo App</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
