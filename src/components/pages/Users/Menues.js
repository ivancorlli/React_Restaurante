import React from "react";
import { Row , Col , Card , Button } from 'react-bootstrap'
 
const Menues = ({menu}) => {

  return (
          <Col>
            <Card>
              <Card.Img variant="top" src={menu.img} />
              <Card.Body>
                <Card.Title> {menu.nombre} </Card.Title>
                <Card.Text>{menu.descripcion}</Card.Text>
                <Card.Text className="text-end">{menu.precio}</Card.Text>
              </Card.Body>
              <Button variant="outline-dark">Agregar al carrito</Button>
            </Card>
          </Col>
    
  );
};

export default Menues;
