import logo from '../assets/logo.webp'
import {Image, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navbar(props) {
  return (
    <nav className="navbar">
      <Link to="/"><Image src={logo} alt="Atelier TM" /></Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="*">Contact</Link>
      </div>
            <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
          <Button variant="outline-light" id='search-navbar-btn'>Search</Button>
          </Form>

    </nav>
  );
}

export default Navbar;