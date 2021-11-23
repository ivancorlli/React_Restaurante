import React from 'react';
import AppRouter from "./components/Routers/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarTranca from './components/NavBar/NavBarTranca'
import Footer from './components/Footer/Footer.js';

import './components/pages/css/app.css'



function App() {
  return (
    <>
      <NavBarTranca/>
      <AppRouter/>
      <Footer/>
    </>
  )
}

export default App;