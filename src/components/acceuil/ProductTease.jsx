import React from "react";
import cafe from '../../assets/cafe.webp'
import { CardGroup, Card } from 'react-bootstrap';
import chausettes from '../../assets/products/chaussettes.webp'
import divers from '../../assets/products/divers.webp'
import tshirt from '../../assets/products/tshirt.webp'

import ProdductCard from "../ProdductCard";

function ProductTease() {
          var products = [
      { id: 1, name: "chausettes", price: 19.99, image: chausettes },
      { id: 2, name: "t-shirt", price: 24.99, image: tshirt },
      { id: 3, name: "divers", price: 14.99, image: divers  },

    ];
  return (
        <CardGroup>
          {products.map((product) => (
        <ProdductCard key={product.id} name={product.name} price={product.price} image={product.image} />
      ))}

      
    </CardGroup>
  );
}

export default ProductTease;