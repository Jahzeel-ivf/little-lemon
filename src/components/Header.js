function Header() {
  return (
    <header>
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;