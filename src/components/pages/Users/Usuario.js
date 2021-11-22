import React from "react";
import { Container, Row, Col, ListGroup, Card , Button } from "react-bootstrap";

const Usuario = () => {
  return (
    <Container fluid className="py-5">
      <Row>
        <Col sm={3}>
          <h3>Lista de productos</h3>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <a
                href="#Cafe"
                style={{ textDecoration: "none", color: "black" }}
              >
                Cafetería
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                href="#Hamburguesa"
                style={{ textDecoration: "none", color: "black" }}
              >
                Hamburguesas
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                href="#Parrillada"
                style={{ textDecoration: "none", color: "black" }}
              >
                Parrillada
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                href="#Pizzas"
                style={{ textDecoration: "none", color: "black" }}
              >
                Pizzas
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                href="#Pastas"
                style={{ textDecoration: "none", color: "black" }}
              >
                Pastas
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                href="#Postres"
                style={{ textDecoration: "none", color: "black" }}
              >
                Postres
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={9}>
          <h3 id="Cafe">Cafetería</h3>
          <Row xs={1} md={2} className="g-4 pb-3 border-bottom">
            {Array.from({ length: 4}).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Button variant="outline-dark">Agregar al carrito</Button>
                </Card>
              </Col>
            ))}
          </Row>
          <h3 className="mt-5" id="Hamburguesa">
            Hamburguesas
          </h3>
          <Row xs={1} md={2} className="g-4 pb-3 border-bottom">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Button variant="outline-dark">Dark</Button>
                </Card>
              </Col>
            ))}
          </Row>
          <h3 className="mt-5" id="Parrillada">
            Parrillada
          </h3>
          <Row xs={1} md={2} className="g-4 pb-3 border-bottom">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Button variant="outline-dark">Dark</Button>
                </Card>
              </Col>
            ))}
          </Row>
          <h3 className="mt-5" id="Pizzas">
            Pizzas
          </h3>
          <Row xs={1} md={2} className="g-4 pb-3 border-bottom">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Button variant="outline-dark">Dark</Button>
                </Card>
              </Col>
            ))}
          </Row>
          <h3 className="mt-5" id="Pastas">
            Pastas
          </h3>
          <Row xs={1} md={2} className="g-4 pb-3 border-bottom">
            {Array.from({ length: 2 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Button variant="outline-dark">Dark</Button>
                </Card>
              </Col>
            ))}
          </Row>
          <h3 className="mt-5" id="Postres">
            Postres
          </h3>
          <Row xs={1} md={2} className="g-4 pb-3 border-bottom">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Button variant="outline-dark">Dark</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Usuario;
