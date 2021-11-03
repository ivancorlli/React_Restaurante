/* import React, { Fragment } from 'react'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/Routers/AppRouter';
import NavBarTranca from './components/NavBar/NavBarTranca'
/* import Carousel from './components/Carousel/Carousel' */

function App() {
  return (
    <div>
      <NavBarTranca/>
      <AppRouter></AppRouter>
    </div>
  )
}

export default App;
