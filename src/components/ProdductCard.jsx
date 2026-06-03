import { Card, Button } from 'react-bootstrap';

function ProdductCard(props) {
  return (
  <Card className="product-card" key={props.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>${props.price.toFixed(2)}</Card.Text>
      <Button >Add to Cart</Button>
    </Card.Body>
  </Card>
  );
}

export default ProdductCard;