import React from 'react';
import logo from './logo.svg';
import Movies from './Movies'
import './App.css';
import Header from './Header.js';
import Login from './Login';

function App() {
  
  return (
    <React.Fragment>
        <Header/>
       <Movies/>
    </React.Fragment>
  );
}

export default App;
