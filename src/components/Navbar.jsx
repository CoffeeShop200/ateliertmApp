import logo from '../assets/logo.webp'
import {Image, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ShoppingBasket} from 'lucide-react';
function Navbar(props) {
  return (
    <nav className="navbar">
      <Link to="/"><Image src={logo} alt="Atelier TM" /></Link>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/products">Produits</Link>
        <Link to="*">Contact</Link>
      </div>
            <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Rechercher"
          className="me-2"
          aria-label="Search"
        />
          <Button variant="outline-light" id='search-navbar-btn' label="Rechercher">Rechercher</Button>
          <Button id="basket-btn"><Link to="/basket"><ShoppingBasket color='#f66151'></ShoppingBasket></Link></Button>
          </Form>

    </nav>
  );
}

export default Navbar;