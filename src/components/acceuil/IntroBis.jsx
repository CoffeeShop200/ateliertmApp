
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Button, Card, CardGroup} from 'react-bootstrap';


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
               <Card className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>

    

        </div>
        <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </CardGroup>      
    </div>
    )
}

export default IntroBis;