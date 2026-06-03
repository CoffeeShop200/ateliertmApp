import logo from '../assets/logo.webp'
import {Image, Form, Button} from 'react-bootstrap';


function Navbar() {
  return (
    <nav className="navbar">
      <Image src={logo} alt="Atelier TM" />
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
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