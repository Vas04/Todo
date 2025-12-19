import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </div>
      
      <button 
        className="delete-btn" 
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;