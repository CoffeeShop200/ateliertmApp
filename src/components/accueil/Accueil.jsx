import React from "react";
import Intro  from "./Intro";
import IntroBis from "./IntroBis";
import ProductTease from "./ProductTease";

function Accueil(props) {

  return (

    <>

    <Intro/>
    <IntroBis/>
    <ProductTease props={props.products} />
    </>
  );
}

export default Accueil;