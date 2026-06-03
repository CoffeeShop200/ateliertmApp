
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardGroup} from 'react-bootstrap';
import { Palette,Award, Truck } from 'lucide-react';


function IntroBis(){
    return(

    <div className="container">

        <div className="intro-text">
        <h1>Votre style,vos règles</h1>
        <p>Marelle, c'est l'atelier qui transforme vos petits objets du quotidien en souvenirs uniques. 
          Inspirée de la cour de récré et taillée pour aujourd'hui, 
          chaque pièce est imprimée à la demande, sans minimum de commande.</p>
        </div>
        <div>

        <div className="card-group">
      <Card>
        <Card.Header>{<Palette color='#f66151' />}</Card.Header>
        <Card.Title>100 % personnalisable</Card.Title>
        <Card.Text>
          Logo, texte, couleurs, photo… mettez votre signature partout, en quelques clics.
        </Card.Text>
      </Card>
        </div>
        <CardGroup>
      <Card>
        <Card.Body>
            <Card.Header>{<Award color='#3584e4' />}</Card.Header>
          <Card.Title>Qualité atelier</Card.Title>
          <Card.Text>
            Matières durables, impressions précises et finitions pensées pour durer dans le temps.
          </Card.Text>
        </Card.Body>
      </Card>
            <Card>
        <Card.Body>
            <Card.Header>{<Truck color='#39db37' />}</Card.Header>
          <Card.Title>Livraison rapide</Card.Title>
          <Card.Text>
            Préparé avec soin et expédié sous 48 h depuis notre atelier français.
          </Card.Text>
        </Card.Body>
      </Card>

      </CardGroup>
              </div>
      
    </div>
    )
}

export default IntroBis;