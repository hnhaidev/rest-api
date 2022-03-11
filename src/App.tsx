import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import Edit from './components/Edit';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        Using api:{' '}
        <a
          href="https://jsonplaceholder.typicode.com"
          target="_blank"
          style={{ color: 'red' }}
          rel="noreferrer"
        >
          "https://jsonplaceholder.typicode.com"
        </a>
      </div>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/add" element={<AddTodo />} />
        <Route path="/todo/:id" element={<Todo />} />
        <Route path="/todo/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
};

export default App;
