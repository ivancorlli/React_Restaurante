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



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export default function NavBarTranca() {

  const {userSession, logout} = useUser();

  function handleClick(){
    logout();
  }
    return (
      <Navbar className="navContainer position-sticky" variant="dark" color="white" expand="lg">
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
              {
               userSession && userSession.role === 'ADMIN' &&(
                  <DropdownButton id="dropdown-basic-button" title="Admin">
                    <Dropdown.Item href="/admin/menus">Menus</Dropdown.Item>
                    <Dropdown.Item href="/admin/usuarios">Usuarios</Dropdown.Item>
                  </DropdownButton>
                )
              }
            <Container className="d-flex text-center  align-items-center justify-content-end m-2">
              {
                userSession && userSession.role === 'USUARIO' && (
                  <Nav.Link href='/cart'  className="btn border border-1 position-relative mx-2">
                    <FontAwesomeIcon type='button' icon={faShoppingCart} className='fs-5 text-light text-center mx-2' />
                      <span  className="position-absolute top-0 start-100 translate-middle p-2 bg-light border border-light rounded-circle d-none">
                      </span>
                  </Nav.Link>
                )
              }

              {userSession ? (
                <Button onClick={handleClick} variant="outline-light" className="mx-2" href="/">
                  Log out
                </Button>
              ) : (
                <div className='d-flex'>
                <Button variant="outline-light" className="mx-2" href="/login">
                  Log in
                </Button>
                <Nav.Link href='/register' className=" btn border border-1 text-light  mx-2">
                    Sign Up
                </Nav.Link>
                </div>
              )}
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
