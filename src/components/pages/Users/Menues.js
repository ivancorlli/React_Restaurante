import React from "react";
import { Row , Col , Card , Button } from 'react-bootstrap'
 
const Menues = (props) => {

    let productos = props.productos;
    let prodCount = productos.length;

    console.log(productos)
    console.log(prodCount)

  return (
    
      <Row xs={1} md={2} className="g-4 pb-3 border-bottom mb-5">
        {Array.from({ length: prodCount }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={productos[idx].img} />
              <Card.Body>
                <Card.Title> {productos[idx].titulo} </Card.Title>
                <Card.Text>{productos[idx].descripcion}</Card.Text>
                <Card.Text className="text-end">{productos[idx].precio}</Card.Text>
              </Card.Body>
              <Button variant="outline-dark">Agregar al carrito</Button>
            </Card>
          </Col>
        ))}
      </Row>
    
  );
};

export default Menues;
