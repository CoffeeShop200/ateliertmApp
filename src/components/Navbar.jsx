import logo from '../assets/logo.webp'
import Image from 'react-bootstrap/Image';


function Navbar() {
  return (
    <nav className="navbar">
      <Image src={logo} alt="Atelier TM" />
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;