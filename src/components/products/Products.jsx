import { CardGroup } from "react-bootstrap";
import ProdductCard from "../ProdductCard";
import FiltersSearching from "./filtersSearching/FiltersSearching";
import { Filter } from "lucide-react";

function Products(props) {

  const products = props.products

  return (
    <>
    <FiltersSearching />
    <CardGroup className="products-container">
      {products.map((product) => (
        <ProdductCard key={product.id} name={product.name} price={product.price} image={product.image} id={product.id} description={product.description} accueil={false} rating={product.rating} />
      ))}
    </CardGroup>
    </>
  );
}

export default Products;