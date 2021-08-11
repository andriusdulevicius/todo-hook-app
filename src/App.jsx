import './App.css';
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import allTodos from './db/todos';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => setTodos(allTodos()), []);

  const setDoneUndone = (id) => {
    const todosCopy = [...todos];
    // const foundTodo = todosCopy.find((t) => t.id === id);
    // foundTodo.done = !foundTodo.done;

    todosCopy.map((i) => {
      return i.id === id ? (i.done = !i.done) : i;
    });
    setTodos(todosCopy);
  };

  const addNewTodo = (newTodo) => {
    // const todosCopy = [...todos];
    // todosCopy.push(newTodo);
    // setTodos(todosCopy);
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter((t) => t.id !== id);
    setTodos(filtered);
  };

  const editTitle = (newTitle, id) => {
    const todosCopy = [...todos];

    todosCopy.map((i) => {
      return i.id === id ? (i.title = newTitle) : i;
    });
    setTodos(todosCopy);
  };

  const sortTodos = (e) => {
    const sortBy = e.target.value;
    const todosCopy = [...todos];
    if (sortBy === 'title') todosCopy.sort((a, b) => (a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1));
    if (sortBy === 'done') todosCopy.sort((a, b) => (a.done > b.done ? -1 : 1));
    if (sortBy === 'undone') todosCopy.sort((a, b) => (a.done > b.done ? 1 : -1));

    setTodos(todosCopy);
    console.log(todosCopy);
  };

  return (
    <div className='App'>
      <h1>Simple Todo App</h1>
      <label htmlFor='sort'>Sort by:</label>
      <select onChange={sortTodos} name='sort' id='sort'>
        <option value=''></option>
        <option value='title'>Title</option>
        <option value='done'>Done Todos</option>
        <option value='undone'>Undone Todos</option>
      </select>
      <AddTodo addNewTodo={addNewTodo} />
      <TodoList todos={todos} setDoneStatus={setDoneUndone} editTitle={editTitle} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
