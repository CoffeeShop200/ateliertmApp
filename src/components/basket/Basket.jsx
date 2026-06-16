import {Card, Button} from 'react-bootstrap';
import Product from './Product'


function Basket(props) {

        return (
            <Card>
                <Card.Body>
                    <Card.Title>Vos articles</Card.Title>
                    <div>
                        {props.products.map((product) => (
                        <Product key={product.id} {...product} />
                    ))}
                    </div>

                </Card.Body>
            </Card>
  );
    }



export default Basket;