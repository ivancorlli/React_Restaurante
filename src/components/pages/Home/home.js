import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import Carousel from "../Home/Carousel";
import { Container } from "react-bootstrap";
import CardFood from '../../CarFood/CardFood'

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <Container className="d-block">
        <Typography alignCenter variant="h2" component="div">
          Categorías
        </Typography>
        <Container>
        <CardFood/>
        </Container>
      </Container>
    </Fragment>
  );
}
