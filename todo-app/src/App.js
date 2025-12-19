import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the list of tasks
  const [todos, setTodos] = useState([]);
  // State to handle the input text
  const [input, setInput] = useState('');

  // Function to add a new task
  const addTodo = () => {
    if (input.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: input,
        isCompleted: false
      };
      setTodos([...todos, newTodo]);
      setInput(''); // Clear input field
    }
  };

  // Function to toggle between "Complete" and "Undo"
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Function to delete a task (Optional feature)
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>My Todo List</h1>
        
        {/* Input Section */}
        <div className="input-group">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
            className="task-input"
          />
          <button className="interactive-btn" onClick={addTodo}>
            Add Task
          </button>
        </div>

        {/* List Section */}
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              
              {/* Task Text (Strike through if completed) */}
              <span 
                style={{ 
                  textDecoration: todo.isCompleted ? 'line-through' : 'none',
                  opacity: todo.isCompleted ? 0.6 : 1,
                  flexGrow: 1 
                }}
              >
                {todo.text}
              </span>

              {/* The "Complete" Alphabet Button */}
              <button 
                className="complete-btn" 
                onClick={() => toggleComplete(todo.id)}
                style={{ 
                  backgroundColor: todo.isCompleted ? '#6c757d' : '#28a745' 
                }}
              >
                {todo.isCompleted ? 'Undo' : 'Complete'}
              </button>

              {/* Delete Button (Optional) */}
              <button 
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
                style={{ marginLeft: '10px', background: 'transparent', border: '1px solid white', color: 'white', borderRadius: '5px', cursor: 'pointer'}}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;