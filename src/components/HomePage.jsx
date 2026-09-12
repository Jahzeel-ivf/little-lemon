// src/components/HomePage.jsx
import React from 'react';
import Specials from './Specials.jsx';
import CustomersSay from './CustomersSay.jsx';
import Chicago from './Chicago.jsx';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <>
      <section id="menu" aria-label="Weekly Specials">
        <Specials />
      </section>

      <section  aria-label="Customer Testimonials">
        <CustomersSay />
      </section>

      <section id="about" aria-label="About Little Lemon Chicago">
        <Chicago />
      </section>
    </>
  );
};

export default HomePage;