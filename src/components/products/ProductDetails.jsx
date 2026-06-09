import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Modal from './Modal';

function ProductDetails(props) {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(true);
  const product = props.products.find(p => p.id === parseInt(id));

  useEffect(() => {
    setShowModal(true);
  }, [id]);

  if (!product) {
    return <div className="product-details"><h2>Produit non trouvé</h2></div>;
  }

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {product}
        </Modal>
      )}
    </>
  );
}

export default ProductDetails;