/* React-bootstrap */

import React from "react";
import { Container , Card , Row , Col} from "react-bootstrap";

/* Import de las imagenes en el slider */

import Promo1 from "./assets/Promo/Promo1.jpg";
import Promo2 from "./assets/Promo/Promo2.jpg";
import Promo3 from "./assets/Promo/Promo3.jpg";
import Promo4 from "./assets/Promo/Promo4.jpg";

/* CSS */
import './promos.css'
/* import "../pages/css/slider.css";
import './PrevNext.js' */

export default function Comments() {

  const cardInfo = [
    {
      image: Promo1,
      title: "Promo AFTER-OFICCE",
      desc: "Estaba mirando una serie y me agarraron unas ganas enormes de un helado. Lo pedí en Rolling-Menu y en minutos llegó a casa.",
    },

    {
      image: Promo2,
      title: "Promo COPADA",
      desc: "Me desperté con un mensaje de mi hijo que decía que venían sus amigos a comer. Rolling-Menu me salvó el día.",
    },
  ];

  const cardInfo2 = [
    {
      image: Promo3,
      title: "Promo AMIGOS",
      desc: "Estaba mirando una serie y me agarraron unas ganas enormes de un helado. Lo pedí en Rolling-Menu y en minutos llegó a casa.",
    },

    {
      image: Promo4,
      title: "Promo BOLICHE",
      desc: "Me desperté con un mensaje de mi hijo que decía que venían sus amigos a comer. Rolling-Menu me salvó el día.",
    },
  ];

const renderCard = (card, index) => {
  return (
    <Card className="bg-dark text-white m-2" key={index}>
    <Card.Img src="holder.js/100px270" alt="Card image" src={card.image}/>
    <Card.ImgOverlay>
      <Container className="d-flex justify-content-between">
      <h5>{card.title}</h5>
      <a href="*"><i class="bi bi-tags fs-3"></i></a>
      </Container>
    </Card.ImgOverlay>
  </Card>
  );
  }

  return (
    <Container className="py-2">
      <Row>
        <Col md={6}>{cardInfo.map(renderCard)}</Col>
        <Col md={6}>{cardInfo2.map(renderCard)}</Col>
      </Row>
    </Container>
  );
  /*     <Fragment>
      <Container fluid className="sliderContainer py-2">
        <div className="slider" id="slider">
          <div className="sliderSection">
            <img src={Promo1} alt="" className="sliderIMG" />
          </div>
          <div className="sliderSection">
            <img src={Promo2} alt="" className="sliderIMG" />
          </div>
          <div className="sliderSection">
            <img src={Promo3} alt="" className="sliderIMG" />
          </div>
          <div className="sliderSection">
            <img src={Promo4} alt="" className="sliderIMG" />
          </div>
          <div className="sliderSection">
            <img src={Promo5} alt="" className="sliderIMG" />
          </div>
        </div>
        <div className="sliderBTN sliderBTN_R" id="btnR">
          +
        </div>
        <div className="sliderBTN sliderBTN_L" id="btnL">
          +
        </div>
      </Container>
    </Fragment> */
}
