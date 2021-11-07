import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl 
} from "react-bootstrap";
import {NavLink} from 'react-router-dom'
import "./NavBar.css";

export default function NavBar() {
    let isLogged = false;
    return (
      <Navbar className="navContainer" variant="dark" color="white" expand="lg">
        <Container fluid>
          <NavLink className='navbar-brand' to="/">Rolling-Menú</NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className='nav-link' to="/about">About</NavLink>
              <NavLink className='nav-link' to="/contact">Contact</NavLink>
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
                <NavLink className="nav-link btn btn-outline-light " to="/home">
                  Log out
                </NavLink>
              ) : (
                <NavLink className="nav-link btn btn-outline-light " to="/login">
                  Log in
                </NavLink>
              )}
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
