import { Link } from 'react-router-dom';
import '../styles/ConfirmedBooking.css';

const ConfirmedBooking = () => {
  return (
    <section
      className="confirmed-booking"
      role="main"
      aria-label="Booking confirmation page"
    >
      <article
        className="confirmed-card"
        role="alert"
        aria-live="polite"
      >
        <h1>Booking Confirmed!</h1>
        <p>Your table has been successfully reserved at Little Lemon.</p>
        <div className="confirmation-detail">
          <p>
            <strong>We look forward to welcoming you!</strong>
            <br />
            <small>A confirmation email has been sent to your email address.</small>
          </p>
        </div>
        <Link
          to="/"
          className="home-link"
          aria-label="Return to home page - On Click"
        >
          Return to Home
        </Link>
      </article>
    </section>
  );
};

export default ConfirmedBooking;