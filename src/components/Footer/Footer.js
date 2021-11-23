import React from "react";
import { Container, Nav } from "react-bootstrap";

// import "./footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <Container fluid style={{ backgroundColor: "#000000" }} className="d-block p-3">
      <div>
        <h2 className="text-center text-light p-5">
          <i class="bi bi-egg-fried"></i> Rolling-Menu <i class="bi bi-egg-fried"></i>
        </h2>
      </div>
      <div className="d-flex justify-content-center">
        <Nav.Link href="/legal" className="text-light">
          AVISO LEGAL
        </Nav.Link>
        <Nav.Link
          href="/privacy"
          className="border-end border-start text-light"
        >
          POLÍTICA DE PRIVACIDAD
        </Nav.Link>
        <Nav.Link href="/cookies" className="text-light">
          POLÍTICA DE COOKIES
        </Nav.Link>
      </div>
      <div className="d-flex justify-content-center">
        <a href="https://www.facebook.com" className="socialIcon">
          <i class="bi bi-facebook fs-2 mx-3" id="faceIcon"></i>
        </a>
        <a href="https://www.linkedin.com" className="socialIcon">
          <i class="bi bi-linkedin fs-2 mx-3" id="linkeIcon"></i>
        </a>
        <a href="https://www.instagram.com" className="socialIcon">
          <i class="bi bi-instagram fs-2 mx-3" id="instaIcon"></i>
        </a>
      </div>
      <div>
          <p className="text-end">COPYRIGHT © 2021 Rolling-Menu</p>
      </div>
    </Container>
  );
}
