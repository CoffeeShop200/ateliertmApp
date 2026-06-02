
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Button, Card} from 'react-bootstrap';


function IntroBis(){
    return(
    <div className="container">
        <div>
        <h1>Votre style,vos règles</h1>
        <p>Marelle, c'est l'atelier qui transforme vos petits objets du quotidien en souvenirs uniques. 
          Inspirée de la cour de récré et taillée pour aujourd'hui, 
          chaque pièce est imprimée à la demande, sans minimum de commande.</p>
        </div>
        <div className="card-group">
            <Card border="success" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Success Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

        </div>
        
    </div>
    )
}

export default IntroBis;