import React from "react";
import cafe from '../../assets/cafe.webp'
import { CardGroup, Card } from 'react-bootstrap';
import chausettes from '../../assets/products/chaussettes.webp'
import divers from '../../assets/products/divers.webp'
import tshirt from '../../assets/products/tshirt.webp'



import ProdductCard from "../ProdductCard";

function ProductTease(props) {

    const products = props.props
  return (

    <CardGroup>
      {products.filter((product) => product.id <= 3).map((product) => (
        <ProdductCard key={product.id} name={product.name} price={product.price} image={product.image} accueil={true} />
      ))}
    </CardGroup>
  );
}

export default ProductTease;