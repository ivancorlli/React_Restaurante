import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import useUser from "../../hooks/useUser";

import "./NavBar.css";

export default function NavBarTranca() {

  const {userSession, logout} = useUser();

  function handleClick(){
    logout();
  }
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
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                  />
              </Form>
            </Container>
              {
               userSession && userSession.role === 'ADMIN' &&(
                  <DropdownButton id="dropdown-basic-button" title="Admin">
                    <Dropdown.Item href="/admin/menus">Menus</Dropdown.Item>
                    <Dropdown.Item href="/admin/usuarios">Usuarios</Dropdown.Item>
                  </DropdownButton>
                )
              }
            <Container className="d-flex justify-content-end m-2">
              {userSession ? (
                <Button onClick={handleClick} variant="outline-light" className="mx-2" href="/">
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
