import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Carousel from "../Home/Carousel";
import { Container } from "react-bootstrap";
import CardFood from "../../Card/CardFood";
import CardPromo from "../../Card/CardPromo";

export default function Home() {
  return (
    <Fragment>
      <Carousel />
      <Container
        fluid
        className="d-block p-2"
        style={{ backgroundColor: "#E4E4E4" }}
      >
        <h1 className="text-center"> CATEGORÍAS </h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CardFood />
          </Grid>
        </Grid>
      </Container>
      <Container fluid>
        <CardPromo/>
      </Container>
    </Fragment>
  );
}
