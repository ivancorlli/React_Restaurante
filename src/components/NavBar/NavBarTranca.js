import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";

import "./NavBar.css";

class NavBarTranca extends Component {
  render() {
    const isLogged = true;
    return (
      <Router>
        <Navbar
          className="navContainer"
          variant="dark"
          color="white"
          expand="lg"
        >
          <Container fluid>
            <Navbar.Brand href="#">Rolling-Menú</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
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
                {
                  isLogged
                  ? <Button className="mx-2" as={Link} to="/login">
                  Log out
                </Button>
                : <Button className="mx-2" as={Link} to="/contact">
                Log in
              </Button>
                }
              </Container>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBarTranca;
