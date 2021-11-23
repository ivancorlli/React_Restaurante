import React from "react";
import { Container, Row} from "react-bootstrap";
import { useLocation } from "react-router";
import Menues from "./Menues";

const Productos = (props) => {
  const productos = props.productos;
  const history = useLocation();
  const hash = history.hash.split('#')[1];
  
  const menus = productos.filter(el => el.categoria === hash)


  return (
    <Container>
      <Row xs={1} md={2} className="g-4 pb-3 border-bottom mb-5">
      {
      menus?
      menus.map(el=> <Menues menu={el} key={el._id} />)  
      :<div></div>
      }
      </Row>
    </Container>
  );
};

export default Productos;
