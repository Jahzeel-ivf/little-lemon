import { useState, useEffect } from "react";
import '../styles/BookingForm.css';

const BookingForm = ({
  availableTimes = [],
  updateTimesForDate = () => {},
  date = '',
  time = '',
  setTime = () => {},
  setDate = () => {},
  submitForm = () => {}
}) => {
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (availableTimes.length > 0 && !availableTimes.includes(time)) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes, time, setTime]);

  useEffect(() => {
    const isValid =
      date !== '' &&
      time !== '' &&
      guests >= 1 &&
      guests <= 10;
    setIsFormValid(isValid);
  }, [date, time, guests]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (setDate) setDate(selectedDate);
    if (updateTimesForDate) updateTimesForDate(selectedDate);
  };

  const handleTimeChange = (e) => {
    if (setTime) setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      setGuests(1);
    } else if (value > 10) {
      setGuests(10);
    } else {
      setGuests(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      alert('Please select a date');
      return;
    }

    if (!time) {
      alert('Please select a time');
      return;
    }

    if (guests < 1 || guests > 10) {
      alert('Number of guests must be between 1 and 10');
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion
    };

    submitForm(formData);
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Reservation form"
    >

      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          required
          value={date}
          onChange={handleDateChange}
          min={new Date().toISOString().split('T')[0]}
          aria-required="true"
          aria-label="Select reservation date"
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
          aria-required="true"
          aria-label="Select reservation time"
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
          required
          value={guests}
          onChange={handleGuestsChange}
          aria-required="true"
          aria-label="Number of guests"
          aria-describedby="guests-help"
        />
        <small id="guests-help" style={{ color: '#666', display: 'block', marginTop: '5px' }}>
          Minimum 1, maximum 10 guests
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          required
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-required="true"
          aria-label="Select occasion"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Date Night">Date Night</option>
          <option value="Business">Business</option>
          <option value="Family">Family Dinner</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={!isFormValid}
        aria-label="Make reservation - On Click"
        aria-disabled={!isFormValid}
        style={{
          opacity: isFormValid ? 1 : 0.5,
          cursor: isFormValid ? 'pointer' : 'not-allowed'
        }}
      >
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;