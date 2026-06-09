import { createPortal } from "react-dom";
import {Card, Button, Carousel} from 'react-bootstrap';

function Modal({ children, onClose }) {
  
    console.log(children.description)
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <Card>
            <Card.Body>
              <div>
                <Carousel>
                  <Carousel.Item>
                    <Card.Img variant="top" src={children.image} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={children.image} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img variant="top" src={children.image} />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="modal-content-descr-price">
                <Card.Text>{children.description}</Card.Text>
                <Card.Text>Price: ${children.price.toFixed(2)}</Card.Text>
                <Button variant="primary">Ajouter au panier</Button>
              </div>

            </Card.Body>

        </Card>

      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;