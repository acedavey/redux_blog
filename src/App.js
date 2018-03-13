import React from 'react';
import TodoForm from './BlogForm';
import TodoList from './BlogList';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';

const App = () => ( 
  <div className="App">
    <BlogForm />
    <BlogList />
    <Footer />
  </div>
);


export default App;
