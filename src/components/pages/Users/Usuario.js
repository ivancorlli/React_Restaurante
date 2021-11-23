import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";

import Cafe from "./cafe.jpg";

import Catalogo from "./Catalogo";
import Productos from "./Productos";

import '../css/catalogos.css'
import { getMenus } from "../../../helpers/getMenus";

const initialCatalogo = [
  { nombre: "desayuno" },
  { nombre: "Hamburguesas" },
  { nombre: "Parrillada" },
  { nombre: "Pizzas" },
  { nombre: "Pastas" },
  { nombre: "Postres" },
];

const initialProductos = [
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    categoria: 'Hamburguesas',
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    categoria: 'Hamburguesas',
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    categoria: 'Hamburguesas',
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    categoria: 'Pizzas',
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    categoria: 'Pizzas',
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    categoria: 'Pizzas',
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    categoria: 'desayuno',
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    categoria: 'desayuno',
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    categoria: 'hamburgesas',
  },
  {
    titulo: "Café con Leche",
    img: Cafe,
    precio: "$100",
    descripcion: "Esto es un café con leche =D",
    categoria: 'desayuno',
  },
];


const Usuario = () => {

  const [productos, setProductos] = useState(initialProductos)
  const [catalogo, setCatalogo]= useState(initialCatalogo)

  async function fetchData(){
    let response = await  getMenus();
    let {data} = response;
    if(data && data.ok){
        setProductos(data.menus)
        let cat = data.menus.map(el=> {
          let categorias={
            nombre:el.categoria
          }
          return categorias
        });
        setCatalogo(cat)
      }
  }

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])


  return (
    <Container fluid className="py-5">
      <Row>
        <Col sm={3}>
          <div className="catalogo">
            <h3>Catálogo</h3>
            {catalogo
            ? 
            <Catalogo catalogo={catalogo} />
            :
            <div></div>
          }
          </div>
        </Col>
        <Col sm={9}>
        {catalogo 
            ? 
            <Productos catalogos={catalogo} productos={productos} />
            :
            <div></div>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default Usuario;
