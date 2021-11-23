import React from "react";
import { ListGroup } from "react-bootstrap";


const Catalogo = (props) => {
  const catalogo = props.catalogo;

  const renderCatalogo = (catalogo,index) => {
    return (
      <ListGroup.Item>
        <a href={'#'+ catalogo.nombre} style={{ textDecoration: "none", color: "black" }}>
          {catalogo.nombre}
        </a>
      </ListGroup.Item>
    );
  };

  return (
    
      <ListGroup variant="flush">{catalogo.map(renderCatalogo)}</ListGroup>
    
  );
};

export default Catalogo;
