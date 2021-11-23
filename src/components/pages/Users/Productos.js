import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Menues from "./Menues";

const Productos = (props) => {
  let cat = props.catalogos;
  const productos = props.productos;

  console.log(cat);
  console.log(productos);

  const renderMenu = (cat) => {

    return (
      <div>
        <h3 id={cat.id} className="mb-3">
          {cat.nombre}
        </h3>
        <Menues productos={productos.filter(p=>p.catalogoID==cat.id
        )} />
      </div>
    );
  };

  return (
    <Container>
      {cat.map(renderMenu)}
    </Container>
  );
};

export default Productos;
