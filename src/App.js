import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/Routers/AppRouter';
import NavBarTranca from './components/NavBar/NavBarTranca'
// import Footer from './components/Footer/Footer';

import './components/pages/css/app.css'


function App() {
  return (
    <div>
      <NavBarTranca/>
      <AppRouter></AppRouter>
      {/* <Footer/> */}
    </div>
  )
}

export default App;
