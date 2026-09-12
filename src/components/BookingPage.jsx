import BookingForm from './BookingForm.jsx';
import '../styles/BookingPage.css';

const BookingPage = (props) => {
  return (
    <section className="booking-page" role="main" aria-label="Reservation page">
      <div className="booking-header">
        <h1>Reserve a Table</h1>
        <p>Book your table at Little Lemon Chicago</p>
      </div>
      <BookingForm {...props} />
      <div className="booking-info">
        <h3>Opening Hours</h3>
        <ul>
          <li>Monday - Friday: 11:00 - 22:00</li>
          <li>Saturday - Sunday: 10:00 - 23:00</li>
        </ul>
      </div>
    </section>
  );
};

export default BookingPage;