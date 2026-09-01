// src/components/ConfirmedBooking.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ConfirmedBooking.css';

const ConfirmedBooking = () => {
  return (
    <div className="confirmed-booking">
      <div className="confirmed-card">
        <div className="checkmark">✅</div>
        <h1>¡Reserva Confirmada!</h1>
        <p>Tu mesa ha sido reservada exitosamente en Little Lemon.</p>
        <div className="confirmation-detail">
          <p>
            <strong>Te esperamos en nuestro restaurante.</strong>
            <br />
            <small>Un correo de confirmación ha sido enviado a tu correo electrónico.</small>
          </p>
        </div>
        <Link to="/" className="home-link">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ConfirmedBooking;