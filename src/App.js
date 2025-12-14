import React, { useState } from 'react';
import './index.css';

function App() {
  const [input, setInput] = useState('');

  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      text: input
    };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return(
    <div className="app-container">
      <h1>My To-Do List</h1>

      <input 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type a task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}

          <button onClick={() => deleteTask(task.id)} style={{marginLeft: '10px', color: 'red'}}>
            X
          </button>
          
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
