import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/Routers/AppRouter';
import NavBarTranca from './components/NavBar/NavBarTranca'
import './App.css'

function App() {
  return (
    <div>
      <NavBarTranca/>
      <AppRouter></AppRouter>
    </div>
  )
}

export default App;
