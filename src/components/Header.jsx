// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css';
import Nav from './Nav.jsx';
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img 
          src="/logo.png" 
          alt="Little Lemon Restaurant Logo" 
          className="logo"
        />
        <Nav />
      </div>
    </header>
  );
};

export default Header;