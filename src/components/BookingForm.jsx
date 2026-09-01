// src/components/BookingForm.jsx
import { useState, useEffect } from "react";
import '../styles/BookingForm.css';

const BookingForm = ({ 
  availableTimes = [],
  updateTimesForDate = () => {},
  date = '',
  time = '',
  setTime = () => {},
  setDate = () => {},
  submitForm = () => {} // Recibir submitForm como prop
}) => {
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  useEffect(() => {
    if (availableTimes.length > 0 && !availableTimes.includes(time)) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes, time, setTime]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (setDate) setDate(selectedDate);
    if (updateTimesForDate) updateTimesForDate(selectedDate);
  };

  const handleTimeChange = (e) => {
    if (setTime) setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      alert('Por favor, selecciona una fecha');
      return;
    }

    if (!time) {
      alert('Por favor, selecciona una hora');
      return;
    }

    if (guests < 1 || guests > 10) {
      alert('El número de comensales debe ser entre 1 y 10');
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion
    };

    // Llamar a submitForm (que viene desde Main)
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Reserve a Table</h2>

      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          required
          value={date}
          onChange={handleDateChange}
          min={new Date().toISOString().split('T')[0]} // No permitir fechas pasadas
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          required
          value={time}
          onChange={handleTimeChange}
          disabled={availableTimes.length === 0}
        >
          {availableTimes.length === 0 ? (
            <option value="">No times available</option>
          ) : (
            availableTimes.map((timeSlot) => (
              <option key={timeSlot} value={timeSlot}>
                {timeSlot}
              </option>
            ))
          )}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value, 10) || 1)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">🎂 Birthday</option>
          <option value="Anniversary">💕 Anniversary</option>
          <option value="Date Night">🌹 Date Night</option>
          <option value="Business">💼 Business</option>
          <option value="Family">👨‍👩‍👧‍👦 Family Dinner</option>
          <option value="Other">✨ Other</option>
        </select>
      </div>

      <button type="submit" className="submit-btn">
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;