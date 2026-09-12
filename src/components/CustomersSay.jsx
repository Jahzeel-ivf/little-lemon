import '../styles/CustomersSay.css';

const CustomersSay = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      image: "/photo1.jpg",
      comment: "Amazing food! The Mediterranean flavors are authentic and delicious."
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      image: "/photo2.jpg",
      comment: "Great atmosphere and wonderful service. Highly recommend!"
    },
    {
      id: 3,
      name: "Mike Johnson",
      rating: 5,
      image: "/photo3.jpg",
      comment: "The best restaurant in Chicago. Will definitely come back."
    }
  ];

  return (
    <section className="testimonials" aria-label="Customer testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid" role="list" aria-label="List of customer reviews">
        {customers.map((customer) => (
          <article 
            key={customer.id} 
            className="testimonial-card"
            aria-label={`Review by ${customer.name}`}
          >
            <div className="stars" aria-label={`Rating: ${customer.rating} out of 5 stars`}>
              {'⭐'.repeat(customer.rating)}
            </div>
            <img
              src={customer.image} 
              alt={customer.name}
              className="customer-image"
            />
            <h4>{customer.name}</h4>
            <p>"{customer.comment}"</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;