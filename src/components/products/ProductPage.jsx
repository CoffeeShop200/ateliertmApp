import { useParams } from 'react-router-dom';
import {Carousel, Image, Button} from 'react-bootstrap';

import PaymentLogos from '../PaymentLogos';

import { RiVisaFill} from "react-icons/ri";
import { FaCcMastercard, FaApplePay,FaPaypal } from "react-icons/fa";

import mastercard from '../../assets/logos/ma_symbol.svg'
import maestro from '../../assets/logos/ms_hrz_pos.svg'



function ProductPage(props) {
  const { id } = useParams();
  const product = props.products.find((item) => item["@id"] === id);
  const images = product ? product.image.map(img => img.link) : [];

  if (!product) {
    return <p>Produit introuvable.</p>;
  }

  return (
    <div className="product-page-container">
    <div className="carousel-container">


        <Carousel>
          {images.map((img, index) => (
            <Carousel.Item key={index}>
              <Image src={img} alt={`${product.name} - ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>


    </div>
    <div className="product-info">
      <h1 className="price">${product.priceTTC.toFixed(2)}</h1>
      <h3>{product.rating}</h3>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <Button variant="primary">Ajouter au panier</Button>
        <div>
          <p>Nous acceptons :</p>

          <div>
            <PaymentLogos></PaymentLogos>
          </div>
        </div>
      <div className='share-medias'>

      </div>
    </div>
    </div>
  );
}

export default ProductPage;