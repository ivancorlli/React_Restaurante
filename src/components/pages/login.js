import React, { Component } from "react";
import {Form,
        Button, 
        Container} from 'react-bootstrap'

import "../pages/css/login.css"

export default function Login() {
    return (
      <Container className="container-xl my-2 pageFormat">
        <Form className="w-100">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Dirección de email</Form.Label>
            <Form.Control type="email" placeholder="email@algo.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    );
}