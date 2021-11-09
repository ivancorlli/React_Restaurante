import React, { Fragment } from "react";
import Carousel from "../Home/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import CardFood from "../../Card/CardFood";
import CardPromo from "../../Card/CardPromo";
import Comments from "./comments";
import "../css/title.css";


export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <Container
        fluid
        className="d-none d-sm-block p-2  border-top border-2"
        style={{
          background: "#FBAB7E",
          background: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
        }}
      >
        <h1 className="text-center title" > CATEGORÍAS </h1>
        <Row>
          <Col xl={12} md={12}>
            <CardFood />
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className=" border-top border-2"
        style={{
          background: "#85FFBD",
          background: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
        }}
      >
        <h1 className="text-center title">PROMOCIONES</h1>
        <CardPromo />
      </Container>
      <Container
        fluid
        className=" border-top border-2"
        style={{
          background: "#FBAB7E",
          background: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
        }}
      >
        <h1 className="text-center title">COMENTARIOS</h1>
        <Comments />
      </Container>
    </Fragment>
  );
}
