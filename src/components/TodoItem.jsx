import React, { useState } from 'react';

const TodoItem = ({ todo, setDoneStatus, editTitle, deleteTodo }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEditTitle = (e) => {
    setEditedTitle(e.target.value);
    editTitle(editedTitle, todo.id);
  };

  return (
    <li>
      {editStatus ? (
        <input type='text' value={editedTitle} onChange={handleEditTitle} />
      ) : (
        <span onClick={() => setDoneStatus(todo.id)} className={todo.done ? 'item-done' : ''}>
          {todo.title}
        </span>
      )}
      <i className='fa fa-pencil' onClick={() => setEditStatus(!editStatus)}></i>
      <i className='fa fa-trash' onClick={() => deleteTodo(todo.id)}></i>
    </li>
  );
};

export default TodoItem;
