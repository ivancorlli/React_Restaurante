import React from "react";
import { Container } from "react-bootstrap";
import errorImg from "../error.jpg";

import "bootstrap/dist/css/bootstrap.min.css";



const Error404 = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{background: "black"}}>
  
      <img src={errorImg} alt="Error404" style={{width: "100%"}} />
      
      
    </Container>
  );
};

export default Error404;
