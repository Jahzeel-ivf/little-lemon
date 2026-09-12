import { useNavigate } from 'react-router-dom';
import '../styles/CallToAction.css';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate('/booking');
  };

  return (
    <article className="hero" aria-label="Hero section - Little Lemon restaurant">
      <div className="hero-content">
        <hgroup>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </hgroup>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button
          className="cta-button"
          aria-label="Reserve a table now - On Click"
          onClick={handleReserve}
        >
          Reserve a Table
        </button>
      </div>
      <figure className="hero-image" role="figure" aria-label="Restaurant food display">
        <img
          src="/restauranfood.jpg"
          alt="Little Lemon restaurant dining area with Mediterranean decor"
        />
      </figure>
    </article>
  );
};

export default CallToAction;