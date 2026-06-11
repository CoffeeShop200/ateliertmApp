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

      {products.slice(0, 3).map((product,key) => (
        <ProdductCard key={product["@id"]} name={product.name} priceTTC={product.priceTTC} mainImage={product.image[0].link} image={product.image[0].link} id={product["@id"]} description={product.description} accueil={false} rating={product.rating} />
      ))}
    </CardGroup>
  );
}

export default ProductTease;