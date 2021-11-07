/* React-bootstrap */

import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Icon from "@mui/material/Icon";
import { green } from "@mui/material/colors";

/* Import de las imagenes en el slider */

import Promo1 from "./assets/Promo/Promo1.jpg";
import Promo2 from "./assets/Promo/Promo2.jpg";
import Promo3 from "./assets/Promo/Promo3.jpg";
import Promo4 from "./assets/Promo/Promo4.jpg";
import Promo5 from "./assets/Promo/Promo5.jpg";

/* CSS */

import "../pages/css/slider.css";
/* import './PrevNext.js' */

export default function CardPromo() {


  return (
    <Fragment>
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
    </Fragment>
  );
}
