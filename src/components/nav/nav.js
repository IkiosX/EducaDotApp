import React from 'react';
import './nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src="logo.png" alt="Logo" />
        </a>
      </div>
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/register">Register</a>
        <a href="/login">Log In</a>
      </div>
    </nav>
  );
};

export default Navbar;

