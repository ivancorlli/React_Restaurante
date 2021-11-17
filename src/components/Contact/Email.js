import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Email = () => {
  return (
    <Form className="m-5">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="algo@algo.com" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Dirección</Form.Label>
        <Form.Control placeholder="Lucas Córdoba 154" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Hacenos tu consulta</Form.Label>
        <Form.Control as="textarea" style={{resize: "none"}} rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Recibir notificaciones" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Email;
