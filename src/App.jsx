import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


import { useState, useEffect } from 'react'
import './App.css'
import Accueil from './components/accueil/Accueil'
import Navbar from './components/Navbar';
import favicon from './assets/favicon.webp'
import { Route, Routes } from 'react-router-dom';

import Products from './components/products/Products';
import Error404 from './components/Error404';
import ProductPage from './components/products/ProductPage';
import GetProducts from './components/apiCalls/GetProducts';

import chausettes from './assets/products/chaussettes.webp'
import divers from './assets/products/divers.webp'
import tshirt from './assets/products/tshirt.webp'


function App() {
  const [count, setCount] = useState(0)

  // Appel API pour récupérer les produits
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

      useEffect(() => {
     axios
      .get('https://api-ateliertm.coffeeadmin-pro.fr/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  if (error) return error.message;

 const mainImage = images.length > 0 ? images[0] : '';

//  const idSlicer = (product) => {
//   const idString = product["@id"].replace("/api/products/", "");
//   return idString;
//  }

//  products.map((product) => {
//   product["id"]= idSlicer(product);
//  })



  //   var products = [
  // { id: 1, name: "chausettes", price: 19.99, image: chausettes, description: "Des chaussettes confortables et stylées pour tous les jours.", rating:"3/5" },
  // { id: 2, name: "t-shirt", price: 24.99, image: tshirt, description: "Un t-shirt confortable et stylé pour tous les jours.", rating:"4/5" },
  // { id: 3, name: "divers", price: 14.99, image: divers, description: "Des articles divers et variés pour tous les besoins.", rating:"2/5" },
  // { id: 4, name: "fouta", price: 29.99, image: divers, description: "Une fouta stylée et confortable pour tous les jours.", rating:"4/5" },
  // { id: 5, name: "gourde", price: 34.99, image: divers, description: "Une gourde réutilisable et stylée pour tous les besoins.", rating:"5/5" },
  // ];

  return (
    <>

    <Navbar/>

      <Routes>
        <Route path="/" element={<Accueil products={products} images={images} mainImage={mainImage} />} />
        <Route path="/products" element={<Products products={products} images={images} mainImage={mainImage} />} />
        <Route path="/product/:id" element={<ProductPage products={products} images={images} mainImage={mainImage} />} />

        <Route path="*" element={<Error404 />} />
      </Routes> 
     

    </>
  )
}

export default App
