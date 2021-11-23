import React, { Fragment } from "react";
import Carousel from "./Carousel";
import { Container } from "react-bootstrap";
import CardPromo from "../../Card/CardPromo";
import Comments from "./comments";
import "../css/title.css";
import SlideShow from "./SlideShow";

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <Container
        fluid
        className=" p-2 py-5  border-top border-2"
        style={{
          background: "#FBAB7E",
          background: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
        }}
      >
        <h1 className="text-center title mb-5" > CATEGORÍAS </h1>
        <SlideShow/>
      </Container>
      <Container
        fluid
        className=" border-top border-2 py-5"
        style={{
          background: "#85FFBD",
          background: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
        }}
      >
        <h1 className="text-center title mb-5">PROMOCIONES</h1>
        <CardPromo />
      </Container>
      <Container
        fluid
        className=" border-top border-2 py-5"
        style={{
          background: "#FBAB7E",
          background: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
        }}
      >
        <h1 className="text-center title mb-5">COMENTARIOS</h1>
        <Comments />
      </Container>
    </Fragment>
  );
}
