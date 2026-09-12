import '../styles/Specials.css';

function Specials() {
  const specials = [
    {
      id: 1,
      title: 'Greek salad',
      price: '$12.99',
      image: '/greek salad.jpg',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary'
    },
    {
      id: 2,
      title: 'Bruschetta',
      price: '$5.99',
      image: '/bruchetta.svg',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive'
    },
    {
      id: 3,
      title: 'Lemon Dessert',
      price: '$5.00',
      image: '/lemon dessert.jpg',
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
  ];

  return (
    <article className="specials">
      <header className="specials-header">
        <h2>This weeks specials!</h2>
        <button className="menu-btn" aria-label="View full online menu">
          Online Menu
        </button>
      </header>
      <section className="specials-grid">
        {specials.map(({ id, title, price, image, description }) => (
          <article key={id} className="special-card">
            <div className="special-image">
              <img src={image} alt={title} />
            </div>
            <div className="special-content">
              <hgroup className="special-title">
                <h3>{title}</h3>
                <span className="price">{price}</span>
              </hgroup>
              <p>{description}</p>
              <button className="order-btn" aria-label={`Order ${title} for delivery`}>
                Order a delivery
              </button>
            </div>
          </article>
        ))}
      </section>
    </article>
  );
}

export default Specials;