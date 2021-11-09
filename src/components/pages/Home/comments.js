import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Comments() {
  const cardInfo = [
    {
      image: "./media/img/Comments/Perfil1.jpg",
      title: "Alejandro Lerner",
      desc: "Estaba mirando una serie y me agarraron unas ganas enormes de un helado. Lo pedí en Rolling-Menu y en minutos llegó a casa.",
      update: "Last updated 25 mins ago",
    },

    {
      image: "./media/img/Comments/Perfil2.jpg",
      title: "Miguel Enriques",
      desc: "Me desperté con un mensaje de mi hijo que decía que venían sus amigos a comer. Rolling-Menu me salvó el día.",
      update: "Last updated 15 mins ago",
    },

    {
      image: "./media/img/Comments/Perfil3.jpg",
      title: "Camila Contreras",
      desc: "Lo mejor de mis noches cuando salgo del trabajo. Hago el pedido antes de salir, y cuando llego a casa ya tengo la comida lista y a buen precio. Un lujazo!",
      update: "Last updated 9 mins ago",
    },

    {
      image: "./media/img/Comments/Perfil4.jpg",
      title: "Manuela Bosco",
      desc: "Si hablamos de precio/calidad, sin lugar a dudas Rolling-Menu, siempre! Super recomendable y los cadetes son muy simpáticos.",
      update: "Last updated 3 mins ago",
    },
  ];

  const cardInfo2 = [
    {
      image: "./media/img/Comments/Perfil1.jpg",
      title: "Gonzalo Gómez",
      desc: "Estaba mirando una serie y me agarraron unas ganas enormes de un helado. Lo pedí en Rolling-Menu y en minutos llegó a casa.",
      update: "Last updated 25 mins ago",
    },

    {
      image: "./media/img/Comments/Perfil2.jpg",
      title: "Ernesto Guiterrez",
      desc: "Me desperté con un mensaje de mi hijo que decía que venían sus amigos a comer. Rolling-Menu me salvó el día.",
      update: "Last updated 15 mins ago",
    },

    {
      image: "./media/img/Comments/Perfil3.jpg",
      title: "Fernanda López",
      desc: "Lo mejor de mis noches cuando salgo del trabajo. Hago el pedido antes de salir, y cuando llego a casa ya tengo la comida lista y a buen precio. Un lujazo!",
      update: "Last updated 9 mins ago",
    },

    {
      image: "./media/img/Comments/Perfil4.jpg",
      title: "Estefanía Jimenez",
      desc: "Si hablamos de precio/calidad, sin lugar a dudas Rolling-Menu, siempre! Super recomendable y los cadetes son muy simpáticos.",
      update: "Last updated 3 mins ago",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card key={index} className="my-2">
        <Card.Img
          variant="top"
          src="holder.js/100px160"
          src={card.image}
          style={{ maxWidth: "80px" }}
        />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.desc}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{card.update}</small>
        </Card.Footer>
      </Card>
    );
  };

  return (
    <Container className="py-2">
      <Row>
        <Col md={6}>{cardInfo.map(renderCard)}</Col>
        <Col md={6}>{cardInfo2.map(renderCard)}</Col>
      </Row>
    </Container>
  );
}
