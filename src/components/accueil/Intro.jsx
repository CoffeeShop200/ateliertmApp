import React from "react";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Button, Card, Collapse} from 'react-bootstrap';


import cafe from '../../assets/cafe.webp'
import intro from '../../assets/intro.webp'


function Intro(props) {
  const [open, setOpen] = useState(false);
  return (

    <>


    <div className="container" id="introduction" >
      <div id="introduction-child">
        <h1>Personnalisez vos souvenirs, portez votre joie.</h1>
        <p>Chaussettes, t-shirts, mugs, gourdes, foutas… 
          Imprimez votre logo, votre prénom ou votre meilleur souvenir 
          d'été sur des objets du quotidien fabriqués pour durer.</p>
          <div className="button-group">
              <Button variant="primary">Personnalier maintenant</Button>
                <Button
                  variant="info"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}>
                  Comment ça marche ?
                </Button>              
              </div>
              <div>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                  </div>
                </Collapse>
              </div>
      </div>
      <Image className="imageAcceuil" src={intro} alt="Café" />
          </div>

    </>
  );
}

export default Intro;