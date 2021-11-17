import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./Map.js";
import Email from './Email'

import '../pages/css/contact.css'

const ubiLat1 = -26.81565485662035;
const ubiLng1 = -65.21545341520132;

const ubiLat2 = -26.82236106937778;
const ubiLng2 = -65.21715384403743;

const Contact = () => {
  return (
    <Container fluid className="d-flex flex-column py-3 contact">
      <Row className="p-2">
        <Col md={6} sm={12}>
          <div className="d-flex flex-column">
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBBGF3KUnGmWKi3O8Yzwtq7ndI5YVUfQpk`}
              containerElement={<div style={{ height: "400px" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              loadingElement={<p>Cargando</p>}
              latitud={ubiLat1}
              longitud={ubiLng1}
            />
            <div className="d-flex justify-content-between">
              <i class="bi bi-geo-alt-fill fs-5 mx-2"> Av. Belgrano 1253</i>
              <i class="bi bi-whatsapp fs-5 mx-2"> 38141522115</i>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="d-flex flex-column">
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBBGF3KUnGmWKi3O8Yzwtq7ndI5YVUfQpk`}
              containerElement={<div style={{ height: "400px" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              loadingElement={<p>Cargando</p>}
              latitud={ubiLat2}
              longitud={ubiLng2}
            />
            <div className="d-flex justify-content-between">
              <i class="bi bi-geo-alt-fill fs-5 mx-2"> Av. Mitre y San Juan</i>
              <i class="bi bi-whatsapp fs-5 mx-2"> 3814215415</i>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 mx-2">
        <Col className="saberMas py-3">
          <h3 className="text-center">¿Quieres saber más? ¡Trabajemos Juntos!</h3>
          <p>
            Si deseas consultar mayor información sobre nuestros servicios o
            tienes alguna duda al respecto, no dudes en solicitar una
            consultoría gratuita y uno de nuestros asesores te contactará a la
            brevedad.
          </p>
          <a href="https://mail.google.com" target="_blank"><i class="bi bi-envelope fs-5"> contact-rrhh@rolling-menu.com</i></a>
        </Col>
      </Row>
      <Email/>
    </Container>
  );
};

export default Contact;
