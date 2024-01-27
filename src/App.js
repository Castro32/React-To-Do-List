import TodoList from './TodoList'; 
import './App.css';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className='app'>
      <TodoList/>
    </div>
  );
}

export default App;
