import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Modal,
} from "react-bootstrap";
import Background from "./bgAbout.jpg";
import Team1 from "./team1.jpg";

import "./about.css";

const About = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${Background})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundposition: "center",
          backgroundSize: "cover",
        }}
        className="d-flex align-items-end justify-content-center"
      >
        <p className="text-center textTitle">ROLLING-MENÚ</p>
      </Container>
      <Container fluid style={{ backgroundColor: "black" }} className="p-5">
        <p className="text-light">
          Un triángulo equilátero. Sólido, líquido y dulce. Cocina, vino y
          postres. Tres espejos que reflejan cada uno una personalidad propia,
          que en un juego de espejos a tres bandas se convierte en un
          caleidoscopio creativo que genera composiciones ricas, complejas,
          coloridas y luminosas. Un método creativo que nace de una filosofía
          que abraza la inspiración externa y se nutre de su motivación interna.
        </p>
        <p className="text-light">
          Rolling-Menú nace del espíritu emprendedor de sus fundadores, que
          soñaron un moderno restaurante y bar americano con un ambiente casual,
          cómodo y divertido. Un lugar único que combina gastronomía,
          arquitectura, tecnología y música con la mística de todos los géneros.
        </p>
      </Container>
      <Container fluid style={{ backgroundColor: "black" }} className="p-3">
        <Row>
          <Col sm={6} className="d-flex flex-column">
            <h3 className="text-center text-light border-bottom border-light mb-5">
              EVENTOS
            </h3>
            <div className="d-flex flex-column">
              <h4 className="text-center text-light">
                Feria Solidaria Parque Guillermina
              </h4>
              <div className="d-flex flex-column justify-content-between">
                <Card className="mb-2" bg="dark" style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title className="text-light">09/12/21</Card.Title>
                    <Card.Text className="text-light text-end">
                      Primer día del evento. Pensado en las costumbres de la
                      ciudad, se llevará a cabo una muestra de cocina
                      tradicional tucumana.
                    </Card.Text>
                    <Button className="w-100" variant="outline-light">
                      Reservá tu lugar
                    </Button>
                  </Card.Body>
                </Card>
                <Card bg="dark" style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title className="text-light">10/12/21</Card.Title>
                    <Card.Text className="text-light text-end">
                      Segundo día del evento. Donde podrás disfrutar de un
                      recorrido por toda la gastronomía Argentina. No te lo
                      pierdas!
                    </Card.Text>
                    <Button className="w-100" variant="outline-light">
                      Reservá tu lugar
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
          <Col sm={6} className="d-flex flex-column">
            <h3 className="text-center text-light border-bottom border-light">
              FUNDADORES
            </h3>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={Team1} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Team1} alt="Second slide" />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Team1} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Team1} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
