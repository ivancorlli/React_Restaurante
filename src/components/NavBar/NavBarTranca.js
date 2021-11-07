import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "./NavBar.css";

export default function NavBar() {
    let isLogged = false;
    return (
      <Navbar className="navContainer" variant="dark" color="white" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Rolling-Menú</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Container className="w-100">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Container>
            <Container className="d-flex justify-content-end m-2">
              {isLogged ? (
                <Button variant="outline-light" className="mx-2" href="/home">
                  Log out
                </Button>
              ) : (
                <Button variant="outline-light" className="mx-2" href="/login">
                  Log in
                </Button>
              )}
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
