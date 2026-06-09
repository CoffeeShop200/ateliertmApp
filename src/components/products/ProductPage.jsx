import { useParams } from 'react-router-dom';
import {Carousel, Image, Button} from 'react-bootstrap';

import { FaSquareFacebook } from "react-icons/fa6";

import SocialMedia from '../SocialMedia'

function ProductPage(props) {
  const { id } = useParams();
  const product = props.products.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Produit introuvable.</p>;
  }

  return (
    <>
    <div className="carousel-container">
        <Carousel>
        <Carousel.Item>
          <Image src={product.image} alt={product.name} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={product.image} alt={product.name} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={product.image} alt={product.name} />
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="product-info">
      <h1 className="price">${product.price.toFixed(2)}</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <Button variant="primary">Ajouter au panier</Button>
      <div className='share-medias'>
        <SocialMedia/>

      </div>
    </div>
    </>
  );
}

export default ProductPage;