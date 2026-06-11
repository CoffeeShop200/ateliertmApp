import { Card, Button } from 'react-bootstrap';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import Modal from './products/Modal';
import React from 'react';

function ProdductCard(props) {
  var [showModal, setShowModal] = React.useState(false);

  const navigate = useNavigate();

  const{id, name, priceTTC, image,accueil, description, rating, mainImage} = props
  const btnVoirPlus = accueil ? "" : <Button onClick={() => handleOpenModal()}>Voir plus</Button>

  const handleOpenModal = () => {
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
  <Card className="product-card" key={id} style={{ width: '18rem' , cursor: 'pointer'}}>
    <Card.Img variant="top" src={mainImage} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>${priceTTC.toFixed(2)}</Card.Text>
      <Card.Text>note : {rating}</Card.Text>
      <div className='btn-group-productCard'>
          <Button >Ajouter au panier</Button>
      </div>

      {showModal && <Modal onClose={handleCloseModal} productId={id} children={props} />}
    </Card.Body>
  </Card>
  </Link>
  );
}

export default ProdductCard;