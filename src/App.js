import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/Routers/AppRouter';
import NavBarTranca from './components/NavBar/NavBarTranca'
// import Footer from './components/Footer/Footer';

import './components/pages/css/app.css'


function App() {
  return (
    <div>
      <AppRouter>
      <NavBarTranca/>
      </AppRouter>
      {/* <Footer/> */}
    </div>
  )
}

export default App;






import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Background from "../pages/Restaurante.jpg";
import GoogleLogin from "react-google-login";

import "../pages/css/login.css";

export default function Login() {

  const responseGoogle=(response)=>{
    console.log(response);
  }

  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundposition: "center",
        backgroundSize: "cover",
        maxHeight: "650px"
      }}
    >
      <Container className="pageFormat">
        <Form className="w-100">
          <Form.Group
            className="textColor mb-3 text-center fw-bold fs-2"
            controlId="formBasicEmail"
          >
            <Form.Label>Dirección de email</Form.Label>
            <Form.Control type="email" placeholder="email@algo.com" />
          </Form.Group>

          <Form.Group
            className="textColor mb-3 text-center fw-bold fs-2"
            controlId="formBasicPassword"
          >
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Container className="d-flex justify-content-between">
            <Button className="w-50 mx-2" variant="dark" type="submit">
              Enviar
            </Button>
            <GoogleLogin className="w-50 mx-2"
              clientId="715442446004-lfbbpuhvfpkf8e0mj5e6vqrsl4jmuonp.apps.googleusercontent.com"
              buttonText="Logueate con Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Container>
        </Form>
      </Container>
    </Container>
  );
}
