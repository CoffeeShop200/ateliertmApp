function Product(props) {
  const { id, name, priceTTC, image, description, rating } = props;

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${priceTTC.toFixed(2)}</p>
    </div>
  );
}

export default Product;