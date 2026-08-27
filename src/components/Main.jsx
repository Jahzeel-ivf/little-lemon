// src/components/Main.jsx
import React from 'react';
import '../styles/Main.css';

const Main = ({ children }) => {
  return (
    <main className="main-content">
      {children}
    </main>
  );
};

export default Main;