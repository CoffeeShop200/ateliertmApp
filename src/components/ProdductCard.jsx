
function ProdductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>${props.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProdductCard;