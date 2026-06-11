import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const options = {
        method: "GET",
        url: "http://127.0.0.1:8000/api/products/",
      };

      try {
        const { data } = await axios.request(options);
        setProducts(data.member);
      } catch (error) {
        setError(error);  
      }
    };

    fetchProducts();
  }, []);

  if (error) return <p>Erreur de chargement</p>;

  return (
    <>
      {products.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </>
  );
}

export default Products;