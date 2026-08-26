import logo from './assets/logo.png'; // Reemplaza por la ruta de tu imagen de logo

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;