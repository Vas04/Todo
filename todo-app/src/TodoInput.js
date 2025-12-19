import React, { useState } from 'react';

function TodoInput({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    onAddTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input 
        type="text" 
        placeholder="Add a new task..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;