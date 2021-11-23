import React from "react";
import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";

import Cafe from "./cafe.jpg";

import Catalogo from "./Catalogo";
import Productos from "./Productos";

import '../css/catalogos.css'

const catalogo = [
  { id: 1, nombre: "Cafeteria" },
  { id: 2, nombre: "Hamburguesas" },
  { id: 3, nombre: "Parrillada" },
  { id: 4, nombre: "Pizzas" },
  { id: 5, nombre: "Pastas" },
  { id: 6, nombre: "Postres" },
];

const productos = [
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    catalogoID: 1,
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    catalogoID: 1,
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    catalogoID: 2,
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    catalogoID: 3,
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    catalogoID: 3,
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    catalogoID: 4,
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    catalogoID: 5,
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    catalogoID: 5,
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    catalogoID: 5,
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    catalogoID: 6,
  },
];

const Usuario = () => {
  return (
    <Container fluid className="py-5">
      <Row>
        <Col sm={3}>
          <div className="catalogo">
            <h3>Catálogo</h3>
            <Catalogo catalogo={catalogo} />
          </div>
        </Col>
        <Col sm={9}>
          <Productos catalogos={catalogo} productos={productos} />
        </Col>
      </Row>
    </Container>
  );
};

export default Usuario;
