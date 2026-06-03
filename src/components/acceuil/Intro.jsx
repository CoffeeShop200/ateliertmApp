import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Button, Card} from 'react-bootstrap';
// import { Button } from "@material-tailwind/react";


import cafe from '../../assets/cafe.webp'
import intro from '../../assets/intro.webp'


function Intro(props) {
        var products = [
      { id: 1, name: "Café Arabica", price: 19.99, image: cafe },
      { id: 2, name: "Café Robusta", price: 14.99, image: cafe },
      { id: 3, name: "Café Blend", price: 24.99, image: cafe },
      { id: 4, name: "Café Espresso", price: 29.99, image: cafe },
      { id: 5, name: "Café Décaféiné", price: 17.99, image: cafe },
      { id: 6, name: "Café Bio", price: 22.99, image: cafe },
      { id: 7, name: "Café Gourmet", price: 34.99, image: cafe },
      { id: 8, name: "Café Instantané", price: 9.99, image: cafe },
      { id: 9, name: "Café en Grains", price: 27.99, image: cafe },
      { id: 10, name: "Café Moulu", price: 12.99, image: cafe },
    ];
  return (

    <>
    {/* <div className="card-container">

       {products.map((product) => (
        <div className="card">
          <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price.toFixed(2)}</Card.Text>
              <button>Add to Cart</button>
            </Card.Body>
          </Card>
        </div>
      ))
        }
    </div> */}

    <div className="container" id="introduction" >
      <div id="introduction-child">
        <h1>Personnalisez vos souvenirs, portez votre joie.</h1>
        <p>Chaussettes, t-shirts, mugs, gourdes, foutas… 
          Imprimez votre logo, votre prénom ou votre meilleur souvenir 
          d'été sur des objets du quotidien fabriqués pour durer.</p>
          <div className="button-group">
              <Button variant="primary">Personnalier maintenant</Button>
              <Button variant="secondary">Comment ça marche ?</Button>
          </div>
      </div>
      <Image className="imageAcceuil" src={intro} alt="Café" />
          </div>

    </>
  );
}

export default Intro;