// src/components/Chicago.jsx
import React from 'react';
import '../styles/Chicago.css';

const Chicago = () => {
  return (
    <section className="chicago-section">
      <article className="chicago-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Founded in 2010, Little Lemon has been serving the Chicago community
          with authentic Mediterranean cuisine. Our family-owned restaurant
          combines traditional recipes with a modern twist, using only the
          freshest ingredients sourced from local farmers.
        </p>
        <p>
          Our passion for food and commitment to quality has made us one of
          Chicago's most beloved dining destinations.
        </p>
      </article>
      <div className="chicago-images">
        <img src="restaurant_inside.webp" alt="Restaurant interior" />
        <img src="/restaurant.jpg" alt="Restaurant exterior" />
      </div>
    </section>
  );
};

export default Chicago;