import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import logo from '../../assets/convertedpng_1.svg'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Keep the original structure but replace <a> with <Link> */}
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-links">
        {/* Replace all <a> tags with <Link> for SPA behavior */}
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar;

