import '../styles/Chicago.css';

const Chicago = () => {
  return (
    <section className="chicago-section"  aria-label="About Little Lemon Chicago">
      <article className="chicago-content"  aria-label="Restaurant story">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a charming neighborhood bistro thatserves simple food and classic cocktails in a lively but casual environment.
        </p>
        <p>
        The restaurant features a locally-sourced menu with daily specials.
        </p>
      </article>
      <div className="chicago-images" role="group" aria-label="Restaurant images">
        <img
          src="restaurant chef B.jpg"
          alt="Little Lemon restaurant chef"
        />
        <img
          src="/restaurant.jpg"
          alt="Little Lemon restaurant exterior"
        />
      </div>
    </section>
  );
};

export default Chicago;