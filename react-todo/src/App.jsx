import React from 'react';
import TodoList from './TodoList';

function App() {
  const todos = ['Learn React', 'Build Projects'];

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
