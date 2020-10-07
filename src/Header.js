import React from 'react';
import Login from './Login.js'

function Header() {
  return (
    <header className='App-header'>
      <section className='user-in-out-placeholder'>
        <button className='login-button' onClick=<Login/>>Login</button>
        // <button className='logout-button'>Logout</button>
      </section>
      <section className='genre-dropdown'>
        <button className='genre-dropdown'>Select Genre
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Drama</a>
          <a href="#">Adventure</a>
          <a href="#">Horror</a>
        </div>
      </section>
    </header>
  )
}

export default Header;
