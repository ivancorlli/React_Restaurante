import { height } from "@mui/system";
import React from "react";
import {Card,Button,Row, Container} from "react-bootstrap"

export default function CardFood() {

  const cardInfo = [
    {image: "./media/img/Card/Hambur.jpg",
     title: "Hamburguesas"},

     {image: "./media/img/Card/Pizza.jpg",
     title: "Pizzas"},

     {image: "./media/img/Card/Pasta.jpg",
     title: "Pastas"},

     {image: "./media/img/Card/Parrilla.jpg",
     title: "Parrillada",}
  ];

  const renderCard = (card,index) => {
    return (
      <Card style={{ width: "20%" }} key={index} className="mx-2">
      <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
      <Card.Body>
        <Card.Title style={{height:"50%"}}>{card.title}</Card.Title>
        <Button size="sm" variant="dark" href="*">INFO</Button>
      </Card.Body>
    </Card>
    )
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {cardInfo.map(renderCard)}
      </Row>
    </Container>
  );
}
