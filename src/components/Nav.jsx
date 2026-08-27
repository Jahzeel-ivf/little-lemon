// src/components/Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reserve a Table</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;